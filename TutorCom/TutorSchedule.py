import requests
import time
import re
import threading
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor
from data import table_data, calendar_id, FAILED_EVENT_MESSAGE, MAX_CALENDAR_EVENTS
from Calendar import create_event, list_upcoming_events
from Login import url as login_url, payload, headers as login_headers

# Define constants
NUM_THREADS = 2

# Define global variables
session = requests.Session()
failed_event_created = False
event_creation_lock = threading.Lock()

# Login to Tutor.com before sending requests
login_response = session.post(login_url, headers=login_headers, data=payload)

if "fillCell" not in login_response.text:
    print("Login failed.")
else:
    print("Login successful.")


def send_request(url):
    try:
        response = session.post(url)
        if any(
            substring in response.text for substring in ["ErrorOccurred", "ErrorMsg"]
        ):
            create_failed_event()
        else:
            print(f"{url}. Status Code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Request to {url} failed with error: {e}")


def create_failed_event():
    global failed_event_created
    with event_creation_lock:
        if not failed_event_created:
            start_time = datetime.now().replace(hour=10, minute=00, second=0)
            start_time = start_time.strftime("%Y-%m-%dT%H:%M:%S")
            end_time = datetime.now().replace(hour=23, minute=00, second=0)
            end_time = end_time.strftime("%Y-%m-%dT%H:%M:%S")
            create_event(calendar_id, start_time, end_time, FAILED_EVENT_MESSAGE)
            failed_event_created = True


def create_event_wrapper(args):
    calendar_id, start_time, end_time, event_summary, event_transparency = args
    create_event(calendar_id, start_time, end_time, event_summary, event_transparency)


# Calculate the date of the first Monday of next week
today = datetime.now()
days_until_monday = (7 - today.weekday()) % 7
next_monday = today + timedelta(days=days_until_monday - 1)

# Format the date in the desired format (MM/DD/YYYY)
formatted_date = next_monday.strftime("%m/%d/%Y")
print("Starting execution for week of " + formatted_date)

# Define the URL with the calculated date
urls = []

# Iterate through the table data and generate URLs
for entry in table_data:
    weekday = entry["weekday"]
    hour = entry["hour"]

    # Construct the URL
    url = f"https://prv.tutor.com/nGEN/Tools/ScheduleManager_v2/SchedulerWorker.aspx?Type=Set&Week={formatted_date}&WeekDay={weekday}&Hour={hour.replace(' ', '%20')}"

    # Append the URL to the list
    urls.append(url)

current_time = datetime.now()
start_running_time = datetime.now().replace(hour=9, minute=00, second=1)

if current_time < start_running_time:
    time_to_wait = (start_running_time - current_time).total_seconds()
    print(f"Waiting for {time_to_wait:.2f} seconds until 9:00:00 AM.")
    while time_to_wait > 0:
        print(f"Time remaining: {time_to_wait:.2f} seconds", end="\r")
        time_to_wait -= 1
        time.sleep(1)
    print("\nStarting execution at 9:00:00 AM.")

start_time = time.time()

with ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    # Submit requests to the executor
    executor.map(send_request, urls)

end_time = time.time()
total_time = end_time - start_time
print(f"All requests completed. Total Time: {total_time:.2f} seconds")

# Call the GET endpoint to get scheduled dates, selected date is formatted_date - 7 days
selected_date = (today + timedelta(days=days_until_monday - 8)).strftime("%m/%d/%Y")
get_url = f"https://prv.tutor.com/nGEN/Tools/ScheduleManager_v2/default.aspx?SelectedDate={selected_date}&DaysToAdd=7"

# Send the GET request
response = session.get(get_url)
print(f"GET request to {get_url}. Status Code: {response.status_code}")

pattern = r"fillCell\('[^']*', '([^']*)', 'Scheduled!', '[^']*'\)"

scheduled_fill_cells = [int(match) for match in re.findall(pattern, response.text)]

for entry in table_data:
    if entry["fillCell"] in scheduled_fill_cells:
        entry["scheduled"] = True
    else:
        entry["scheduled"] = False

# Create a list of events to create on the Google Calendar
events = []
created_events = list_upcoming_events(calendar_id, MAX_CALENDAR_EVENTS)

for entry in table_data:
    if entry["scheduled"]:
        # Convert formatted_date to a datetime object
        formatted_date_datetime = datetime.strptime(formatted_date, "%m/%d/%Y")

        # Calculate the start and end times
        start_time = formatted_date_datetime + timedelta(days=entry["weekday"] - 1)
        start_time_str = start_time.strftime("%m/%d/%Y") + " " + entry["hour"]
        start_time = datetime.strptime(start_time_str, "%m/%d/%Y %I:%M %p")
        end_time = start_time + timedelta(hours=1)

        opaque_hours = ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"]
        if entry["hour"] in opaque_hours:
            transparency = "opaque"
        else:
            transparency = "transparent"
        # Create the event dictionary
        event = {
            "start_time": start_time.strftime("%Y-%m-%dT%H:%M:%S"),
            "end_time": end_time.strftime("%Y-%m-%dT%H:%M:%S"),
            "event_summary": "Tutor.com",
            "transparency": transparency,
        }
        # Check if the event has already been created
        event_created = False
        # convert event["start_time"] to PST time zone to compare with created_events
        event_start_time = datetime.strptime(event["start_time"], "%Y-%m-%dT%H:%M:%S")
        event_start_time = event_start_time - timedelta(hours=3)
        event_start_time = event_start_time.strftime("%Y-%m-%dT%H:%M:%S-07:00")
        if created_events is not None:
            for created_event in created_events:
                if created_event == event_start_time:
                    event_created = True
                    break
        # if event_start_time is already passed, don't create the event
        if event_start_time < datetime.now().strftime("%Y-%m-%dT%H:%M:%S-07:00"):
            event_created = True

        # Append the event to the list if it hasn't been created already
        if not event_created:
            events.append(event)


with ThreadPoolExecutor(max_workers=3) as executor:
    # Submit requests to the executor
    executor.map(
        create_event_wrapper,
        [
            (
                calendar_id,
                event["start_time"],
                event["end_time"],
                event["event_summary"],
                event["transparency"],
            )
            for event in events
        ],
    )
