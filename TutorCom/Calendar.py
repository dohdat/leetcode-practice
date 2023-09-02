import os.path
import datetime
from google.oauth2 import service_account
from googleapiclient.discovery import build

# Set up the API credentials
creds = None
SCOPES = ['https://www.googleapis.com/auth/calendar']

if os.path.exists('credentials.json'):
    creds = service_account.Credentials.from_service_account_file('credentials.json', scopes=SCOPES)

# Create a Calendar event
def create_event(calendar_id, start_time, end_time, event_summary):
    service = build('calendar', 'v3', credentials=creds)

    event = {
        'summary': event_summary,
        'start': {
            'dateTime': start_time,
            'timeZone': 'America/Los_Angeles',  # e.g., 'America/New_York'
        },
        'end': {
            'dateTime': end_time,
            'timeZone': 'America/Los_Angeles',  # e.g., 'America/New_York'
        },
    }

    try:
        event = service.events().insert(calendarId=calendar_id, body=event).execute()
        print(f'Event created: {event.get("htmlLink")}')
    except Exception as e:
        print(f'Error creating event: {e}')

# Example usage
if __name__ == '__main__':
    calendar_id = '951d3b2328ace2ababeb5e28228a9bcefa20851a5de9e810dfd8e4ad49277d3c@group.calendar.google.com'
    start_time = '2023-09-02T09:00:00'
    end_time = '2023-09-02T10:00:00'
    event_summary = 'Tutoring Time'

    create_event(calendar_id, start_time, end_time, event_summary)
