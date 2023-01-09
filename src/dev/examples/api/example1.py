#!/usr/bin/env python
from rndflow import job
from rndflow.server import ServerProxy
from datetime import datetime, timedelta
from time import sleep

globals().update(job.load())

api_key=job.secret('server_token')
project = job.secret('server_project')
input_node = job.secret('server_input')
output_node = job.secret('server_output')

server = ServerProxy(api_key, project, input_node, output_node)

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
timeout = datetime.now() + timedelta(minutes=5)

ready = False
while not ready and datetime.now() < timeout:

    page = server.searchByMaster(layer, p)

    for result in page['items']:
        ready = True
        break
    else:
        sleep(5)

if not ready:
    raise Exception('Timeout!')

print('Done')

files = server.getFilesList(result['id'])

def download_file(f):
    return lambda path: server.download(f, path)

job.save_package(
    label='result',
    fields={f['name'] : f['value'] for f in result['fields']},
    files={f['name']: download_file(f) for f in files}
    )
