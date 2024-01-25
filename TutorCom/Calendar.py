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
    os.chdir(r"leetcode-practice/TutorCom")


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

            print(start, event.get("summary"))
            if end_time:
                res.append(start)
                res.append(end)
            else:
                res.append(start)
        return res

    except HttpError as error:
        print("An error occurred: %s" % error)


def create_event(calendar_id, start_time, end_time, event_summary, event_transparency):
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
        }
        event = service.events().insert(calendarId=calendar_id, body=event).execute()
        print(f'Event created: {event.get("htmlLink")}')
    except HttpError as error:
        print("An error occurred: %s" % error)


if __name__ == "__main__":
    list_upcoming_events()
