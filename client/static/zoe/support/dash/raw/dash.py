#!/usr/bin/env python

from collections import defaultdict
from collections import OrderedDict
import csv
import json
from datetime import datetime


divisions = defaultdict(list)

def get_time(v):
    for fmt in ('%H:%M:%S', '%M:%S', '%M:%S.%f', '%M'):
        try:
            return datetime.strptime(time_, fmt)
        except ValueError:
            pass
    raise ValueError(v)

with open('dash.csv') as fhandle:
    reader = csv.reader(fhandle)
    for division, bib_number, fname, lname, _, _, time_, notes in reader:
        divisions[division].append({
            'name': '{} {}'.format(fname, lname),
            'time': get_time(time_),
            'notes': notes,
        })

divisions = OrderedDict(sorted(divisions.items(), key=lambda i: -len(i[1])))
for rows in divisions.values():
    rows.sort(key=lambda i: i['time'])
    for row in rows:
        fmt = '%H:%M:%S'
        if row['time'].microsecond:
            fmt += '.%f'
        row['time'] = row['time'].strftime(fmt)

print(json.dumps(divisions.items(), indent=4))
