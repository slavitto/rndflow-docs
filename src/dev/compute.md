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
- **save_package**(label=None, files={}, fields={}, images={}) - сохранить выходной [пакет](/docs/desc/package.md)

  **label** - метка пакета, **fields** - поля пакета, **files** - файлы пакета, **images** - объекты [matplotlib](https://matplotlib.org/) или [plotly](https://plotly.com/python/).
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

#### Низкоуровневый пример

Импорт библиотеки:

```python:no-line-numbers
from rndflow import job
from rndflow.server import Server
```

Использование:

@[code python:no-line-numbers](../dev/examples/api/example_raw.py)

#### Примеры использования обертки ServerProxy

Существует возможность использования вспомогательного класса-обертки [ServerProxy](https://github.com/rndflow/rndflow-job-py/blob/d78de01f5f8aa91ad5b1a1c023978d9e8f5eb239/rndflow/server.py#L192).

ServerProxy предлагает к использованию следующие методы:

- ServerProxy - инициациализация объекта класса обертки.

  Параметры:
  - api_key (str): API key
  - project (int): Project-server ID
  - input_node (int): Input node ID of project-server
  - output_node (int): Output node ID of project-server
  - api_server (str, optional): API server URL. Defaults to None.

- getServer - получение объекта класса обертки с использованием значений секретов.

  Параметры:
  - prefix (str): API key secrets common prefix name
  - api_server (str,optional): API server URL. Defaults to None.

- getLastDataLayer - получить идентификатор последнего доступного слоя данных.

- getDataLayers - получить список доступных объектов слоев данных.

- postPackage - передать данные в входной узел проекта и получить идентификатор созданного пакета.

  Параметры:
  - layer (int): data layerd ID
  - label (str): package label
  - fields (dict): package fields

- postPackage - передать данные в входной узел проекта и получить идентификатор созданного пакета.

  Параметры:
  - layer (int): data layerd ID
  - package (dict): package

- searchByMaster - запросить результат обработки из выходного узла проекта, соответствующий переданным ранее в входной узел данным.

  Параметры:
  - layer (int): data layerd ID
  - master (int): master package id
  - page (int): page number, defaults to 1.
  - page_size (int): packages count on page, defaults to 1.

  Возвращаемый результат - словарь с полями `total` - общее количество пакетов, `items` - список пакетов (количество зависит от общего количества пакетов и параметров page и page_size).

- waitResult - вернуть пакеты из выходного узла проекта, соответствующие переданным ранее в входной узел данным; возвращается список пакетов и их общее количество или выбрасывает Timeout исключение.

  Параметры:
  - layer (int): data layerd ID
  - master (int):  master package id
  - timeout (timedelta, optional): Timeout. Defaults to timedelta(minutes=5).
  - retry_pause (int, optional): Pause between requests to output node. Defaults to 5.
  - page (int): page number, defaults to 1.
  - page_size (int): packages count on page, defaults to 10.

- waitOneResult - вернуть первый пакет из выходного узла проекта, соответствующий переданному ранее в входной узел данным; возвращает идентификатор пакета и его поля или выбрасывает Timeout исключение.

  Параметры:
  - layer (int): data layerd ID
  - master (int):  master package id
  - timeout (timedelta, optional): Timeout. Defaults to timedelta(minutes=5).
  - retry_pause (int, optional): Pause between requests to output node. Defaults to 5.

- getFilesList - возвращает список файлов для пакета с указанным идентификатором.

  Параметры:
  - ident (int): package ID

- waitOneResultAndFiles - вернуть первый пакет из выходного узла проекта, соответствующий переданным ранее в входной узел данным; возвращает идентификатор пакета, его поля и файлы или выбрасывает Timeout исключение.

  Параметры:
  - layer (int): data layerd ID
  - master (int):  master package id
  - timeout (timedelta, optional): Timeout. Defaults to timedelta(minutes=5).
  - retry_pause (int, optional): Pause between requests to output node. Defaults to 5.

Импорт библиотеки:

```python:no-line-numbers
from rndflow import job
from rndflow.server import ServerProxy
```

Пример: Отправка и получение результата с использованием `searchByMaster`:

@[code python:no-line-numbers](../dev/examples/api/example1.py)

Пример: Отправка и получение результата с использованием `waitOneResult`:

@[code python:no-line-numbers](../dev/examples/api/example2.py)

Пример: Отправка и получение результата с использованием `getServer` и `waitOneResultAndFiles`:

@[code python:no-line-numbers](../dev/examples/api/example3.py)

Пример: Получение нескольких результирующих пакетов

@[code python:no-line-numbers](../dev/examples/api/example_multi1.py)

Пример: Получение всех пакетов из выходного узла.
@[code python:no-line-numbers](../dev/examples/api/getter.py)