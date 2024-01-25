from datetime import datetime, timedelta
from concurrent.futures import ThreadPoolExecutor
from data import (
    calendar_id,
    MAX_CALENDAR_EVENTS,
)
from Calendar import list_upcoming_events


def createRemotasksEvents(formatted_date, timezone_offset, table_data):
    remotasks_events = []
    created_events = list_upcoming_events(calendar_id, MAX_CALENDAR_EVENTS)
    # check created_events for timezone offset
    missing_Events = MAX_CALENDAR_EVENTS - len(created_events)
    for i in range(missing_Events):
        for entry in table_data:
            if not entry["scheduled"]:
                # Convert formatted_date to a datetime object
                formatted_date_datetime = datetime.strptime(formatted_date, "%m/%d/%Y")

                # Calculate the start and end times
                start_time = formatted_date_datetime + timedelta(days=7)
                start_time_str = start_time.strftime("%m/%d/%Y") + " " + "12:00 AM"
                start_time = datetime.strptime(start_time_str, "%m/%d/%Y %I:%M %p")
                end_time = start_time + timedelta(hours=1)

                # Create the event dictionary
                event = {
                    "start_time": start_time.strftime("%Y-%m-%dT%H:%M:%S"),
                    "end_time": end_time.strftime("%Y-%m-%dT%H:%M:%S"),
                    "event_summary": "Remotasks",
                    "transparency": "opaque",
                }
                # Check if the event has already been created
                event_created = False
                # convert event["start_time"] to PST time zone to compare with created_events
                event_start_time = datetime.strptime(
                    event["start_time"], "%Y-%m-%dT%H:%M:%S"
                )
                event_start_time = event_start_time - timedelta(hours=3)
                # add timezone offset to event_start_time
                event_start_time = (
                    event_start_time.strftime("%Y-%m-%dT%H:%M:%S") + timezone_offset
                )
                if created_events is not None:
                    for created_event in created_events:
                        if created_event == event_start_time:
                            event_created = True
                            break
                # if event_start_time is already passed, don't create the event
                if (
                    event_start_time
                    < datetime.now().strftime("%Y-%m-%dT%H:%M:%S") + timezone_offset
                ):
                    event_created = True

                # Append the event to the list if it hasn't been created already
                if not event_created:
                    remotasks_events.append(event)
                    entry["scheduled"] = True
                    break
    return remotasks_events
