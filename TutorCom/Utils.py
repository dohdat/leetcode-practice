from datetime import datetime, timedelta


def findConflictingEvents(table_data, created_events, formatted_date):
    created_event = created_events[0]
    for entry in table_data:
        if created_events is not None:
            for created_event in created_events:
                created_event = created_event[:-6]
                if created_event == entry["date"]:
                    entry["scheduled"] = True
                    entry["type"] = "Other"
                    break
                else:
                    entry["scheduled"] = False


def fill_out_table_data(table_data, starting_date):
    starting_datetime = datetime.strptime(starting_date, "%m/%d/%Y")
    for entry in table_data:
        hour = int(entry["hour"].split(":")[0])
        am_pm = entry["hour"].split(":")[1].split(" ")[1]
        if am_pm == "PM" and hour != 12:
            hour += 12
        elif am_pm == "AM" and hour == 12:
            hour = 0
        hour -= 3
        entry["date"] = (
            starting_datetime + timedelta(days=entry["weekday"] - 1, hours=hour)
        ).strftime("%Y-%m-%dT%H:%M:%S%z")
