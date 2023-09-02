import requests
import time
from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor

table_data = [
    {"weekday": 1, "hour": "10:00 AM"},
    {"weekday": 2, "hour": "10:00 AM"},
    {"weekday": 3, "hour": "10:00 AM"},
    {"weekday": 4, "hour": "10:00 AM"},
    {"weekday": 5, "hour": "10:00 AM"},
    {"weekday": 6, "hour": "10:00 AM"},
    {"weekday": 7, "hour": "10:00 AM"},
    {"weekday": 1, "hour": "12:00 AM"},
    {"weekday": 2, "hour": "12:00 AM"},
    {"weekday": 3, "hour": "12:00 AM"},
    {"weekday": 4, "hour": "12:00 AM"},
    {"weekday": 5, "hour": "12:00 AM"},
    {"weekday": 6, "hour": "12:00 AM"},
    {"weekday": 7, "hour": "12:00 AM"},
    {"weekday": 1, "hour": "1:00 AM"},
    {"weekday": 2, "hour": "1:00 AM"},
    {"weekday": 3, "hour": "1:00 AM"},
    {"weekday": 4, "hour": "1:00 AM"},
    {"weekday": 5, "hour": "1:00 AM"},
    {"weekday": 6, "hour": "1:00 AM"},
    {"weekday": 7, "hour": "1:00 AM"},
    {"weekday": 1, "hour": "11:00 AM"},
    {"weekday": 1, "hour": "12:00 PM"},
    {"weekday": 1, "hour": "1:00 PM"},
    {"weekday": 1, "hour": "2:00 PM"},
    {"weekday": 1, "hour": "3:00 PM"},
    {"weekday": 1, "hour": "4:00 PM"},
    {"weekday": 1, "hour": "5:00 PM"},
    {"weekday": 1, "hour": "6:00 PM"},
    {"weekday": 1, "hour": "7:00 PM"},
    {"weekday": 1, "hour": "8:00 PM"},
    {"weekday": 1, "hour": "9:00 PM"},
    {"weekday": 1, "hour": "10:00 PM"},
    {"weekday": 1, "hour": "11:00 PM"},
    {"weekday": 7, "hour": "11:00 AM"},
    {"weekday": 7, "hour": "12:00 PM"},
    {"weekday": 7, "hour": "1:00 PM"},
    {"weekday": 7, "hour": "2:00 PM"},
    {"weekday": 7, "hour": "3:00 PM"},
    {"weekday": 7, "hour": "4:00 PM"},
    {"weekday": 7, "hour": "5:00 PM"},
    {"weekday": 7, "hour": "6:00 PM"},
    {"weekday": 7, "hour": "7:00 PM"},
    {"weekday": 7, "hour": "8:00 PM"},
    {"weekday": 7, "hour": "9:00 PM"},
    {"weekday": 7, "hour": "10:00 PM"},
    {"weekday": 7, "hour": "11:00 PM"},
    {"weekday": 2, "hour": "10:00 PM"},
    {"weekday": 3, "hour": "10:00 PM"},
    {"weekday": 4, "hour": "10:00 PM"},
    {"weekday": 5, "hour": "10:00 PM"},
    {"weekday": 6, "hour": "10:00 PM"},
    {"weekday": 2, "hour": "11:00 PM"},
    {"weekday": 3, "hour": "11:00 PM"},
    {"weekday": 4, "hour": "11:00 PM"},
    {"weekday": 5, "hour": "11:00 PM"},
    {"weekday": 6, "hour": "11:00 PM"},
    {"weekday": 1, "hour": "2:00 AM"},
    {"weekday": 2, "hour": "2:00 AM"},
    {"weekday": 3, "hour": "2:00 AM"},
    {"weekday": 4, "hour": "2:00 AM"},
    {"weekday": 5, "hour": "2:00 AM"},
    {"weekday": 6, "hour": "2:00 AM"},
    {"weekday": 7, "hour": "2:00 AM"},
    {"weekday": 1, "hour": "9:00 AM"},
    {"weekday": 2, "hour": "9:00 AM"},
    {"weekday": 3, "hour": "9:00 AM"},
    {"weekday": 4, "hour": "9:00 AM"},
    {"weekday": 5, "hour": "9:00 AM"},
    {"weekday": 6, "hour": "9:00 AM"},
    {"weekday": 7, "hour": "9:00 AM"}
]

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
next_monday = today + timedelta(days=days_until_monday - 1)  # Add 7 days to ensure it's the next week

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

with ThreadPoolExecutor(max_workers=num_threads) as executor:
    # Submit requests to the executor
    executor.map(send_request, urls)

end_time = time.time()
total_time = end_time - start_time
print(f"All requests completed. Total Time: {total_time:.2f} seconds")



