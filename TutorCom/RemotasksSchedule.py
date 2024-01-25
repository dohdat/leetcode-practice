def createRemotasksEvents(table_data, missing_events):
    for entry in table_data:
        if not entry["scheduled"]:
            entry["scheduled"] = True
            entry["type"] = "Remotasks"
            missing_events -= 1
            if missing_events == 0:
                break
