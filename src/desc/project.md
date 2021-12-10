# Проект

## Описание

**Проект** - это конкретная реализация интеллектуального приложения или алгоритма средствами платформы.

**Проект-сервис** - проект с разрешенным доступом через открытое API.

Состав проекта:

- [Граф](#граф) - реализующий конкретный алгоритм в составе
  - [Узлы](./nodes.md) и [группы](./nodes.md#группа)
  - [Пакеты](./nodes.md#пакеты)
  - [Задания](./nodes.md#задания)
- [Секреты](./secrets.md) - набор секретов для использовании в узлах при их исполнении
- [Интерфейсы](./interface.md) - графические интерфейсы управления графом
- [Разрешения](#разрешения) - набор прав доступа
- [API-ключи](./api_keys.md) - набор API для внешнего доступа к проекту
- [Слои данных](/docs/intro/definitions.md#datalayer)
- [S3 сервер](./s3.md) - подключенное к проекту S3 хранилище
- [Cервер расчетов](./executor.md) - подключенный к проекту основной сервер расчетов

## Панель управления проектом

Основные свойства проекта доступны через панель управления.

<img src="./images/project/manage_panel.png" align="right" alt="Project manage panel" style="margin: 5%;">

Панель включает в себя:

- Изображение проекта с возможностью редактирования <span class="iconify-inline" data-icon="mdi:pencil"></span> и удаления <span class="iconify-inline" data-icon="mdi:delete"></span>.
- Название проекта
- <span class="iconify-inline" data-icon="mdi:notebook"></span> Название родительского рабочего окружения
- <span class="iconify-inline" data-icon="mdi:folder-network"></span> Имя используемго [S3 сервера](./s3.md)

---

- <span class="iconify-inline" data-icon="mdi:information"></span> Описание проекта и список доступных для внешнего запроса ролей и API ключей (О проекте)
- Опциональный список ссылок на [интерфейсы](./interface.md) проекта
- <span class="iconify-inline" data-icon="mdi:sitemap"></span> Дизайнер графа проекта ([Граф](#граф))
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span> Редактор интерфейсов проекта ([Интерфейсы](./interface.md))
- <span class="iconify-inline" data-icon="mdi:eye-off"></span> Редактор секретов проекта ([Секреты](./secrets.md))
- <span class="iconify-inline" data-icon="mdi:shield-account"></span> Редактор разрешений проекта ( [Разрешения](#разрешения))
- <span class="iconify-inline" data-icon="mdi:shield-key"></span> Редактор API ключей проекта ([API-ключи](./api_keys.md) ключи)

---

- <span class="iconify-inline" data-icon="mdi:power"></span> Статус проекта (Проект включен/выключен) - разрешает или запрещает проекту информировать сервер расчетов о новых задачах.
- <span class="iconify-inline" data-icon="mdi:server"></span> Основной сервер расчетов (Cервер расчетов](./executor.md)) - отображает выбранный основной сервер расчтетов для проекта и его статус (активен - зеленый, красный - отключен) и описание.

---

- <span class="iconify-inline" data-icon="mdi:layers"></span> Список слоев данных проект (Слой данных) - список слоев с возможность редактирования и удаления текущего слоя.
- <span class="iconify-inline" data-icon="mdi:power"></span> Статус текущего слоя данных (Слой данных включен/выключен) - разрешает или запрещает проекту информировать сервер расчетов о новых задачах в текущем слое
- <span class="iconify-inline" data-icon="mdi:account-eye"></span> Возможность общего доступа к слою (Общий слой/Персональный слой) - определяет тип доступа к слою, к общему слою данных имет доступ все пользователи, которым доступен данный проект. К персональному слою имеет доступ только пользователь его создавший.

---

- <span class="iconify-inline" data-icon="mdi:file-export"></span> Экспорт проекта - экспорт проекта в виде архива
- <span class="iconify-inline" data-icon="mdi:file-import"></span> Импорт проекта - импорт проекта из внешнего архива

<br clear="right"/>

## Граф

**Граф** (Graph) - интегрированная последовательность узлов и направленных связей между ними, в которой узлы соответствуют отдельным этапам или операциям реализуемого алгоритма, а направленные связи определяют направление передачи данных между ними (результаты выполнения одних узлов передаются в качестве входных данных другим узлам).

Для управления графом предназначен дизайнер графа, который позволяет:

- Cоздавать и редактировать структуры графа.
- Создавать и редактировать программный код узлов.
- Управлять выполнением графа.
- Загружать и выгружать данные из графа.

Общий вид дизайнера графа:

![Project general view](./images/project/general.png)

### Панель создания узлов

Для добавления узлов используется панель создания узлов.

<img src="./images/project/create_panel.png" align="right" alt="Node create panel" style="margin: 5%;">

Панель позволяет добавить:

- <span class="iconify-inline" data-icon="mdi:kubernetes"></span> Расчетный узел
- <span class="iconify-inline" data-icon="mdi:download-circle"></span> Узел данных
- <span class="iconify-inline" data-icon="mdi:database"></span> SQL узел
- <span class="iconify-inline" data-icon="mdi:group"></span> Группу узлов

<br clear="right"/>

### Панель управления внешним видом

<img src="./images/project/view_panel.png" align="right" alt="Project view panel" style="margin: 5%;">

Панель управления внешним видом позволяет:

- <span class="iconify-inline" data-icon="mdi:magnify-plus"></span> <span class="iconify-inline" data-icon="mdi:magnify-minus"></span> Масштабировать граф
- <span class="iconify-inline" data-icon="mdi:magnify-scan"></span> Отобразить граф в оптимальном масштабе (Оптимальный масштаб)
- <span class="iconify-inline" data-icon="mdi:auto-fix"></span> Разместить узлы графа автоматичеки (Расположить узлы автоматически)

<br clear="right"/>

### Панель действий

![Project action panel](./images/project/action_panel.png)

Включает в себя:

- <span class="iconify-inline" data-icon="mdi:magnify"></span> Поиск узла по имени
- <span class="iconify-inline" data-icon="mdi:pin-off" style="color: red"></span> Опциональная кнопка отмены выбора текущего [мастер пакета](/docs/desc/nodes.md#пакеты)
- <span class="iconify-inline" data-icon="mdi:content-copy"></span> Копирование узлов
- <span class="iconify-inline" data-icon="mdi:content-paste"></span> Опциональная кнопка вставки узла

## Разрешения

Панель позволяет управлять доступом к проекту с помощью:

- [Ролей проекта](#роли-проекта)
- [Пользователей проекта](#пользователи-проекта)

### Роли проекта

Вкладка **РОЛИ** - yправление [ролями проекта](/docs/desc/project_role.md)

![Project roles](/images/common/permissions_roles.png)

### Пользователи проекта

Вкладка **ПОЛЬЗОВАТЕЛИ** - управление [пользователями](/docs/desc/project_user.md)

![Project users](/images/common/permissions_users.png)
