import requests
import time
import re
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor
from data import table_data, calendar_id
# from Calendar import create_event


session = requests.Session()
session.headers = {"Cookie": "ASP.NET_SessionId=wx3ambaeyfp2zywxtsy5pyt5"}
def send_request(url):
    try:
        response = session.post(url)
        print(f"{url}. Status Code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Request to {url} failed with error: {e}")

# Calculate the date of the first Monday of next week
today = datetime.now()
days_until_monday = (7 - today.weekday()) % 7
next_monday = today + timedelta(days=days_until_monday - 1)

# Format the date in the desired format (MM/DD/YYYY)
formatted_date = next_monday.strftime("%m/%d/%Y")
print(formatted_date)

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
    # Calculate the time to wait until 9:00:01 AM
    time_to_wait = (start_running_time - current_time).total_seconds()
    print(f"Waiting for {time_to_wait:.2f} seconds until 9:00:01 AM.")
    while time_to_wait > 0:
        print(f"Time remaining: {time_to_wait:.2f} seconds", end='\r')
        time_to_wait -= 1
        time.sleep(1)
    print("\nStarting execution at 9:00:01 AM.")

start_time = time.time()
num_threads = 2

# with ThreadPoolExecutor(max_workers=num_threads) as executor:
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
for entry in table_data:
    if entry["scheduled"]:
        # Convert formatted_date to a datetime object
        formatted_date_datetime = datetime.strptime(formatted_date, "%m/%d/%Y")

        # Calculate the start and end times
        start_time = formatted_date_datetime + timedelta(days=entry["weekday"] - 1)
        start_time_str = start_time.strftime("%m/%d/%Y") + " " + entry["hour"]
        start_time = datetime.strptime(start_time_str, "%m/%d/%Y %I:%M %p")
        end_time = start_time + timedelta(hours=1)
        
        # Create the event dictionary
        event = {
            "start_time": start_time.strftime("%Y-%m-%dT%H:%M:%S"),
            "end_time": end_time.strftime("%Y-%m-%dT%H:%M:%S"),
            "event_summary": "Tutor.com Session",
            "status": "free"
        }
        
        # Append the event to the list
        events.append(event)

# Create the events on the Google Calendar
# for event in events:
#     create_event(calendar_id, event["start_time"], event["end_time"], event["event_summary"])