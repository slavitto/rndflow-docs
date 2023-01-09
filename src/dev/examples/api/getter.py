#!/usr/bin/env python
from rndflow import job
from rndflow.server import ServerProxy
from datetime import timedelta

globals().update(job.load())

# Create Server proxy object
server=ServerProxy.getServer('server')

# Get last data layer from the server
layer = server.getLastDataLayer()

print('Get packages from output node...')
items, total = server.waitResult(layer, None, timedelta(minutes=2), 5)

print(f"Packages count: {total}")
print(f"Packages received: {len(items)}")

def download_file(f):
 return lambda path: server.download(f, path)

for item in items:

    rfields = item['fields']
    rfiles = server.getFilesList(item['id'])

    job.save_package(
        label='result_' + item['label'],
        fields={f['name'] : f['value'] for f in rfields},
        files={f['name']: download_file(f) for f in rfiles}
    )
