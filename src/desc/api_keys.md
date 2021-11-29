# API ключи

**API ключ** - уникальный jWT идентификатор для программного доступа к проекту согласно разрешениям, которые определены в заданной ему при создании [роли](./project_role) проекта.

**Шаблон API ключа** - частично сформированный API ключ без указания конкретного пользователя. Используется для быстрого создания API ключа по запросу пользователя.

![API keys panel](/images/common/api_keys.png)

Структура панели:

- Панель управления
  - <span class="iconify-inline" data-icon="mdi:plus"></span> кнопка добавления нового шаблона API ключа
- Список [панелей плиток](#плитка-шаблона) шаблонов API ключей
- <span class="iconify-inline" data-icon="mdi:account-alert"></span> Запросы на получение API ключа

## Плитка шаблона

![API key panel](/images/common/api_keys_panel.png)

1. Редактируемое название
2. Редактируемое описание
3. Редактируемое значение присвоенной роли
4. <span class="iconify-inline" data-icon="mdi:delete"></span> Добавление информационного поля
   ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
   Информационные поля импортируются в клиентский проект в виде [секретов](./secrets) вместе с API ключом и необходимы для предоставления пользователю ключа информации об его основных параметрах при его [использовании](#использование-ключа).

   Рекомендуются добавлять следующий информационные поля:

   - Идентификатор проекта - идентификатор текущего проекта
   - Идентификатор входного узла - узел, в который необходимо отправлять пакеты с данными
   - Идентификатор выходного узла - узел, из которого необходимо забирать пакеты с результатом.

5. Редактируемое название информационного поля
6. Редактируемое описание информационного поля
7. Редактируемое значение информационного поля
8. <span class="iconify-inline" data-icon="mdi:sitemap"></span> Вставка идентификатора проекта в качестве значения поля
9. <span class="iconify-inline" data-icon="mdi:feature-search"></span> Вставка идентификатора выбранного узла в качестве значения поля
10. <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление поля
11. <span class="iconify-inline" data-icon="mdi:menu-down"></span> Выбор роли
12. <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление шаблона

## Создание шаблона

- Напротив надписи **Шаблоны API ключей** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> и в диалоговом окне ввести уникальное имя нового шаблона, выбрать роль и нажать кнопку **СОЗДАТЬ**.

  ![Add API](/images/common/api_keys_add.png)

- В новой плитке шаблона добавить информационные поля (названия произвольные)

  - Идентификатор проекта - идентификатор текущего проекта
  - Идентификатор входного узла - узел, в который необходимо отправлять пакеты с данными
  - Идентификатор выходного узла - узел, из которого необходимо забирать пакеты с результатом.

  ![Add Information field](/images/common/api.png)

## Запрос ключа

В проекте перейти в раздел <span class="iconify-inline" data-icon="mdi:information"></span>**О проекте** и в секции <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API ключи** на плитке необходимого API нажать кнопку **ЗАПРОСИТЬ**.

![API request](/images/common/api_request.png)

Плитка API ключа примет следующий вид:

![API requested](/images/common/api_wait.png)

Далее следует ожидать подтверждения запроса со стороны владельца проекта, на электронную почту которого будет выслано соответстующее уведомление о запросе.

После того, как владелец проекта [одобрит запрос](#подтверждение-запроса-ключа), будет получено электронное информационное письмо.

![API confirmation letter](/images/common/api_request_confirmed_letter.png)

Плитка API ключа примет следующий вид:

![API confirmed](/images/common/api_confirmed.png)

## Подтверждение запроса ключа

Владелец проекта на электронную почту получит письмо с уведомлением о запросе.

![API request letter](/images/common/api_request_letter.png)

Владельцу необходимо перейти в соответствующий проект в раздел <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API ключи** и в секции **Запросы** нажать на кнопку <span class="iconify-inline" data-icon="mdi:check" style="color: green"></span> подтверждения запроса.

![API request confirmation](/images/common/api_confirmation.png)

Ознакомиться с статистикой использования ключа можно в разделе <span class="iconify-inline" data-icon="mdi:script-text-key"></span>[СТАТИСТИКА ИСПОЛЬЗОВАНИЯ](#статистика-использования-ключа).

## Импорт ключа

- [Запросить](#запрос-ключа) API ключ и дождать подтверждения запроса.

- Перейти в проект, из которого будет осуществляться програмный доступ, и в нем перейти в раздел <span class="iconify-inline" data-icon="mdi:eye-off"></span>**Секреты**.

- Открыть <span class="iconify-inline" data-icon="mdi:key-plus"></span> меню добавления API ключа и выбрать необходимый ключ.

  ![API confirmed](/images/common/api_import.png)

- Ввести префикс для создаваемых секретов.

  ![API insert](/images/common/api_insert.png)

- Будет создан секрет с токеном ключа _префикс_\_**token**, а также секреты для всех информационных панелей ключа.

  ![API inserted](/images/common/api_inserted.png)

- Разрешить доступ к секретам узлам из которых будет осуществляться доступ.

  В поле **Узлы** соответствующего секрета нажать на кнопку <span class="iconify-inline" data-icon="mdi:magnify"></span> и выбрать необходимые узлы.

## Использование ключа

- [Импортировать ключ в проект](#импорт-ключа)
- Перейти в раздел <span class="iconify-inline" data-icon="mdi:sitemap"></span>**Граф** и в вкладке [Файлы](/docs/desc/nodes.html#фаилы) узла, у которого есть доступ к секрету API ключа в программном модуле или скрипте необходимо использовать следующий код.

```python
#!/usr/bin/env python
from rndflow import job
from rndflow.server import Server
from datetime import datetime, timedelta
from time import sleep

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

job.save_package(
    label='result',
    fields={f['name'] : f['value'] for f in result['fields']},
    files={f['name']: download_file(f) for f in files}
    )
```

# Статистика использования ключа

Статистика использования ключа доступна в разделе <span class="iconify-inline" data-icon="mdi:script-text-key"></span> **СТАТИСТИКА ИСПОЛЬЗОВАНИЯ**.

![API request letter](/images/common/api_billing.png)
