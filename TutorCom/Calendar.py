from __future__ import print_function

import datetime
import os.path
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from googleapiclient.errors import HttpError

# If modifying these scopes, delete the file token.json.
SCOPES = [
    "https://www.googleapis.com/auth/calendar.readonly",
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/calendar",
]

if not os.path.exists("token.json"):
    try:
        os.chdir(r"leetcode-practice/TutorCom")
    except FileNotFoundError:
        try:
            os.chdir(r"C:\Users\dohda\leetcode-practice\TutorCom")
        except FileNotFoundError:
            print("Both paths are invalid. Please check your directory structure.")


def get_google_calendar_service():
    """Authenticate and get the Google Calendar service."""
    creds = None
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
        with open("token.json", "w") as token:
            token.write(creds.to_json())
    return build("calendar", "v3", credentials=creds)


def list_upcoming_events(calendar_id="primary", maxResults=25, end_time=False):
    """List the next 10 events on the user's calendar."""
    try:
        service = get_google_calendar_service()
        now = datetime.datetime.utcnow().isoformat() + "Z"
        print(f"Getting the upcoming {maxResults} events")
        events_result = (
            service.events()
            .list(
                calendarId=calendar_id,
                timeMin=now,
                maxResults=maxResults,
                singleEvents=True,
                orderBy="startTime",
            )
            .execute()
        )
        events = events_result.get("items", [])
        res = []
        if not events:
            print("No upcoming events found.")
            return

        for event in events:
            start = event.get("start", {}).get(
                "dateTime", event.get("start", {}).get("date")
            )
            if end_time:
                end = event.get("end", {}).get(
                    "dateTime", event.get("end", {}).get("date")
                )
                if len(end) > 10:
                    start_time = datetime.datetime.fromisoformat(start)
                    end_time = datetime.datetime.fromisoformat(end)

                    current_time = start_time

                    while current_time < end_time:
                        res.append(current_time.isoformat())
                        current_time += datetime.timedelta(hours=1)
            else:
                res.append(start)
        return res

    except HttpError as error:
        print("An error occurred: %s" % error)


def create_event(
    calendar_id, start_time, end_time, event_summary, event_transparency, colorId=1
):
    """Create a Calendar event."""
    try:
        service = get_google_calendar_service()
        event = {
            "summary": event_summary,
            "start": {
                "dateTime": start_time,
                "timeZone": "America/New_York",
            },
            "end": {
                "dateTime": end_time,
                "timeZone": "America/New_York",
            },
            "transparency": event_transparency,
            "colorId": colorId,
        }
        event = service.events().insert(calendarId=calendar_id, body=event).execute()
        print(f'Event created: {event.get("htmlLink")}')
    except HttpError as error:
        print("An error occurred: %s" % error)


def delete_all_events(calendar_id, maxResults=50):
    try:
        service = get_google_calendar_service()
        now = datetime.datetime.utcnow().isoformat() + "Z"
        print(f"Getting the upcoming {maxResults} events")
        events_result = (
            service.events()
            .list(
                calendarId=calendar_id,
                timeMin=now,
                maxResults=maxResults,
                singleEvents=True,
                orderBy="startTime",
            )
            .execute()
        )
        events = events_result.get("items", [])
        # Iterate through each event and delete it
        for event in events:
            try:
                service.events().delete(
                    calendarId=calendar_id, eventId=event["id"]
                ).execute()
                print("Event deleted with id " + event["id"])
            except Exception as e:
                print(f"Error deleting event with id {event['id']}: {str(e)}")

    except Exception as e:
        print(f"Error listing events from calendar {calendar_id}: {str(e)}")


if __name__ == "__main__":
    list_upcoming_events()
