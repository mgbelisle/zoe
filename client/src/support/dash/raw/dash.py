#!/usr/bin/env python

import csv
import json
from datetime import datetime


results = []

def get_time(v):
    for fmt in ('%H:%M:%S', '%M:%S', '%M:%S.%f', '%M'):
        try:
            dt = datetime.strptime(time_, fmt)
            return (dt - datetime(year=dt.year, month=dt.month, day=dt.day)).total_seconds()
        except ValueError:
            pass
    raise ValueError(v)

with open('dash.csv') as fhandle:
    reader = csv.reader(fhandle)
    for division, bib_number, fname, lname, _, _, time_, notes in reader:
        results.append({
            'division': division,
            'name': '{} {}'.format(fname, lname),
            'time': get_time(time_),
            'notes': notes,
        })

print(json.dumps(results, indent=4))
