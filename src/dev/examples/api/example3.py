#!/usr/bin/env python
from rndflow import job
from rndflow.server import ServerProxy
from datetime import datetime, timedelta
from time import sleep

globals().update(job.load())

# Create Server proxy object
server=ServerProxy.getServer('server')

# Get last data layer from the server
layer = server.getLastDataLayer()

# Post new package to the start node
json=dict(label='from_client', fields=dict(size=size, span=span))
p = server.postPackage(layer, json)

print('Sent workload to the server')

#---------------------------------------------------------------------------
# Poll server to get the resulting package.
# This allows to exit on timeout.
#---------------------------------------------------------------------------
print('Waiting for the results...')
rid, rfields, rfiles = server.waitOneResultAndFiles(layer, p, timedelta(minutes=2))

def download_file(f):
    return lambda path: server.download(f, path)

job.save_package(
    label='result',
    fields={f['name'] : f['value'] for f in rfields},
    files={f['name']: download_file(f) for f in rfiles}
    )
