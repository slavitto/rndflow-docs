# Код

## Код расчетного узла

В [расчетном узле](/docs/desc/nodes.md#расчетныи-узел) размещаются исполнительные модули (программ, скрипты).
Для взаимодействия с сервером платформы используются специальные библиотеки.

### Python

Должна использоваться библиотека [rndflow-job-py](https://github.com/rndflow/rndflow-job-py/tree/master/rndflow)

Импорт библиотеки:

```python:no-line-numbers
from rndflow import job
```

[Методы](https://github.com/rndflow/rndflow-job-py/blob/master/rndflow/job.py)

- **params**() - получить параметры узла
- **packages**() - получить пакеты узла
- **load**(readers={}) - получить переменные пакетов узла
- **save_package**(label=None, files={}, fields={}, images={}) - сохранить выходной [пакет](/docs/desc/nodes.md#пакеты)

  **label** - метка пакета, **fields** - поля пакета, **files** - файла пакета, **images** - объекты [matplotlib](https://matplotlib.org/) или [plotly](https://plotly.com/python/).
  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Объекты **matplotlib** сохраняются как изображения, по умолчанию если не указано расширение файла, то в **PNG** формате, объекты **plotly** сохраняются в JSON формате.
  :::

Пример:

```python:no-line-numbers
#!/usr/bin/env python

# Импорт библиотеки
from rndflow import job

from numpy import linspace, pi

# Загрузка переменных входного пакета в качестве глобальных переменных.
globals().update(job.load())

print(f'{size = }, {span = }')

x = linspace(0, span * pi, size)

# Сохранение выходного пакета. Переменная x будет сохранена как HDF5 файл.
job.save_package(
    label='x',
    fields=dict(
        size=size,
        span=span,
        job_id=job.job_id
        ),
    files=dict(
        x=x
        )
    )
```

## API доступ к проекту

Для программного доступа к проекту используются [API ключи](/docs/desc/api_keys.md).

### Python

Импорт библиотеки:

```python:no-line-numbers
from rndflow import job
from rndflow.server import Server
```

Пример:

```python:no-line-numbers
#!/usr/bin/env python
from rndflow import job
from rndflow.server import Server
from datetime import datetime, timedelta
from time import sleep

# Load packages variables as global variables
globals().update(job.load())

server = Server(api_key=job.secret('project_server_token'))

# Get secrets
project = job.secret('project_server_project')
input_node = job.secret('project_server_input')
output_node = job.secret('project_server_output')

# Get last data layer from the server
layer = server.get(f'/projects/{project}/data_layers/last')

# Post new package to the start node
p = server.post(f'/projects/{project}/nodes/{input_node}/packages',
                json=dict(
                    data_layer_id=layer['id'],
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
            page_size=1
            ),
        json=dict(
            data_layer_id=layer['id'],
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
```