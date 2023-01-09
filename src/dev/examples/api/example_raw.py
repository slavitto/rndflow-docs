#!/usr/bin/env python
from rndflow import job
from rndflow.server import Server
from datetime import datetime, timedelta
from time import sleep

# Load packages variables as global variables
globals().update(job.load())

server = Server(api_key=job.secret('server_token'))

# Get secrets
project = job.secret('server_project')
input_node = job.secret('server_input')
output_node = job.secret('server_output')

# Get last data layer from the server
layer = server.get(f'/projects/{project}/data_layers/last')

# Post new package to the start node
p = server.post(f'/projects/{project}/nodes/{input_node}/packages',
                params=dict(
                    data_layer_id=layer['id'],
                    ),
                json=dict(
                    label='from_client',
                    fields=dict(size=size, span=span)))

print('Sent workload to the server')

#---------------------------------------------------------------------------
# Poll server to get the resulting package.
# This allows to exit on timeout.
#---------------------------------------------------------------------------
print('Waiting for the results...')
timeout = datetime.now() + timedelta(minutes=5)

ready = False
while not ready and datetime.now() < timeout:
    page = server.post(f'/projects/{project}/nodes/{output_node}/packages/search',
        params=dict(
            data_layer_id=layer['id'],
            page_size=1
            ),
        json=dict(
            master_id=p['id']
            ))
    for result in page['items']:
        ready = True
        break
    else:
        sleep(5)

if not ready:
    raise Exception('Timeout!')

print('Done')

files = server.get(f'/projects/{project}/nodes/{output_node}/packages/{result["id"]}/files')

def download_file(f):
    return lambda path: server.download(f, path)

# Save output package
job.save_package(
    label='result',
    fields={f['name'] : f['value'] for f in result['fields']},
    files={f['name']: download_file(f) for f in files}
    )
