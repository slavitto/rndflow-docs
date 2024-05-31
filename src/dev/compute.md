# Code

## Compute Node Code

In the [compute node](/desc/nodes.md#расчетныи-узел), executable modules (programs, scripts) are placed.
Special libraries are used for interacting with the platform server.

### Python

The library [rndflow-job-py](https://github.com/rndflow/rndflow-job-py/tree/master/rndflow) should be used.

Library import:

```python:no-line-numbers
from rndflow import job
```

[Methods](https://github.com/rndflow/rndflow-job-py/blob/master/rndflow/job.py)

- **params**() - get the node parameters at the job start
- **packages**() - get the job packages
- **files**(*suffixes) - load package file data
- **load**(readers={}) - get the job package fields and node parameters at the job start
  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
  If the package field names and the node parameter names match, the package field value will be loaded.
  :::
- **save_package**(label=None, files={}, fields={}, images={}) - save the output [package](/desc/package.md)

  **label** - package label, **fields** - package fields, **files** - package files, **images** - [matplotlib](https://matplotlib.org/) or [plotly](https://plotly.com/python/) objects.
  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  **matplotlib** objects are saved as images, by default if not specified, in **PNG** format, **plotly** objects are saved in JSON format.
  :::

Example:

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

## API Access to the Project

For programmatic access to the project, [API keys](/desc/api_keys.md) are used.

### Python

#### Low-Level Example

Library import:

```python:no-line-numbers
from rndflow import job
from rndflow.server import Server
```

Usage:

@[code python:no-line-numbers](../dev/examples/api/example_raw.py)

#### Examples of Using the ServerProxy Wrapper

There is a possibility of using the helper wrapper class [ServerProxy](https://github.com/rndflow/rndflow-job-py/blob/d78de01f5f8aa91ad5b1a1c023978d9e8f5eb239/rndflow/server.py#L192).

ServerProxy offers the following methods:

- ServerProxy - initialization of the wrapper class object.

  Parameters:
  - api_key (str): API key
  - project (int): Project-server ID
  - input_node (int): Input node ID of project-server
  - output_node (int): Output node ID of project-server
  - api_server (str, optional): API server URL. Defaults to None.

- getServer - obtain a wrapper class object using secret values.

  Parameters:
  - prefix (str): API key secrets common prefix name
  - api_server (str, optional): API server URL. Defaults to None.

- getLastDataLayer - get the ID of the last available data layer.

- getDataLayers - get a list of available data layer objects.

- postPackage - send data to the input node of the project and get the ID of the created package.

  Parameters:
  - layer (int): data layer ID
  - label (str): package label
  - fields (dict): package fields

- postPackage - send data to the input node of the project and get the ID of the created package.

  Parameters:
  - layer (int): data layer ID
  - package (dict): package

- searchByMaster - request the processing result from the project's output node corresponding to the data previously sent to the input node.

  Parameters:
  - layer (int): data layer ID
  - master (int): master package ID
  - page (int): page number, defaults to 1.
  - page_size (int): packages count on page, defaults to 1.

  The returned result is a dictionary with fields `total` - total number of packages, `items` - list of packages (the amount depends on the total number of packages and the parameters page and page_size).

- waitResult - return packages from the project's output node corresponding to the data previously sent to the input node; returns a list of packages and their total number or throws a Timeout exception.

  Parameters:
  - layer (int): data layer ID
  - master (int): master package ID
  - timeout (timedelta, optional): Timeout. Defaults to timedelta(minutes=5).
  - retry_pause (int, optional): Pause between requests to output node. Defaults to 5.
  - page (int): page number, defaults to 1.
  - page_size (int): packages count on page, defaults to 10.

- waitOneResult - return the first package from the project's output node corresponding to the data previously sent to the input node; returns the package ID and its fields or throws a Timeout exception.

  Parameters:
  - layer (int): data layer ID
  - master (int): master package ID
  - timeout (timedelta, optional): Timeout. Defaults to timedelta(minutes=5).
  - retry_pause (int, optional): Pause between requests to output node. Defaults to 5.

- getFilesList - returns a list of files for the package with the specified ID.

  Parameters:
  - ident (int): package ID

- waitOneResultAndFiles - return the first package from the project's output node corresponding to the data previously sent to the input node; returns the package ID, its fields, and files or throws a Timeout exception.

  Parameters:
  - layer (int): data layer ID
  - master (int): master package ID
  - timeout (timedelta, optional): Timeout. Defaults to timedelta(minutes=5).
  - retry_pause (int, optional): Pause between requests to output node. Defaults to 5.

Library import:

```python:no-line-numbers
from rndflow import job
from rndflow.server import ServerProxy
```

Example: Sending and receiving results using `searchByMaster`:

@[code python:no-line-numbers](../dev/examples/api/example1.py)

Example: Sending and receiving results using `waitOneResult`:

@[code python:no-line-numbers](../dev/examples/api/example2.py)

Example: Sending and receiving results using `getServer` and `waitOneResultAndFiles`:

@[code python:no-line-numbers](../dev/examples/api/example3.py)

Example: Receiving multiple result packages

@[code python:no-line-numbers](../dev/examples/api/example_multi1.py)

Example: Receiving all packages from the output node.
@[code python:no-line-numbers](../dev/examples/api/getter.py)