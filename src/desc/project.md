# Проект

## Описание

**Проект** - это конкретная реализация интеллектуального приложения или алгоритма средствами платформы.

**Проект-сервис** - проект с разрешенным доступом через открытое API.

Состав проекта:

- [Граф](#граф) - последовательность узлов, реализующих конкретный алгоритм.
  - [Узлы](./nodes.md) и [группы](./nodes.md#группа)
  - [Пакеты](./package.md) - пакеты узлов в выбранном [слое данных][3]
  - [Задания](./job.md) - задания узлов в выбраном [слое данных][3]
- [Секреты](./secrets.md) - набор секретов для использования в узлах при их выполнении
- [Интерфейсы](./interface.md) - графические интерфейсы управления графом
- [Разрешения](#разрешения) - набор прав доступа
- [API-ключи](./api_keys.md) - набор API для внешнего доступа к проекту
- [Слои данных][3] - список наборов данных
- [S3 сервер](./s3.md) - подключенное к проекту S3 хранилище
- [Cервер расчетов](./executor.md) - подключенный к проекту основной сервер расчетов
- [История проекта][4] - синхронизация проекта с [Git][5] репозиторием.

## Панель управления проектом

Основные свойства проекта доступны через панель управления.

<img src="/images/common/project_manage_panel.png" align="right" alt="Project manage panel" style="margin: 5%;">

Панель включает в себя:

- Изображение с кнопками редактирования <span class="iconify-inline" data-icon="mdi:pencil"></span> и удаления <span class="iconify-inline" data-icon="mdi:delete"></span>.
- Название
- <span class="iconify-inline" data-icon="mdi:notebook"></span> Название родительского [рабочего пространства](#workspace.md)
- <span class="iconify-inline" data-icon="mdi:folder-network"></span> Имя используемого [S3 сервера](./s3.md)

  Дополнительно указывается общее количество файлов проекта и их объем.

---

- <span class="iconify-inline" data-icon="mdi:information"></span> [О проекте](#описание) - доступ к окну описания проекта и списку доступных интерфейсов, платных ролей и API ключей
- Опциональный список ссылок на [интерфейсы](./interface.md) проекта
- <span class="iconify-inline" data-icon="mdi:sitemap"></span> [Граф](#граф) - дизайнер графа
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span> [Интерфейсы](./interface.md) - дизайнер интерфейсов
- <span class="iconify-inline" data-icon="mdi:eye-off"></span> [Секреты](./secrets.md) - управление секретами
- <span class="iconify-inline" data-icon="mdi:shield-account"></span> [Разрешения](#разрешения) - управление разрешениями
- <span class="iconify-inline" data-icon="mdi:shield-key"></span> [API-ключи](./api_keys.md) - управление API ключами

---

- <span class="iconify-inline" data-icon="mdi:power"></span> Проект включен/выключен - переключатель разрешения или запрета на передачу заданий на выполнение.
- <span class="iconify-inline" data-icon="mdi:server"></span> [Cервер расчетов](./executor.md) - выбранный основной сервер расчетов для проекта, его описание и статус.

---

- <span class="iconify-inline" data-icon="mdi:layers"></span> [Слой данных][3] - список доступных слоев данных и команд управления ими.
- <span class="iconify-inline" data-icon="mdi:power"></span> Слой данных включен/выключен - переключатель разрешения или запрета на передачу заданий слоя данных на выполнение.
- <span class="iconify-inline" data-icon="mdi:account-eye"></span> Общий слой/Персональный слой - переключатель типа доступа к [слою данных][3].

---

- <span class="iconify-inline" data-icon="mdi:git"></span> [История проекта][4] - синхронизация проекта с [Git][5] репозиторием.
- <span class="iconify-inline" data-icon="mdi:file-export"></span> Экспорт проекта - экспорт проекта в виде архива
- <span class="iconify-inline" data-icon="mdi:file-import"></span> Импорт проекта - импорт проекта из внешнего архива

<br clear="right"/>

## Описание

Описание публичного проекта доступно пользователям.

Структура:

- Название
- Описание
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span> Список интерфейсов
- <span class="iconify-inline" data-icon="mdi:ticket-account"></span> Список платных ролей

  > Пользователь может [запросить][1] доступ к проекту с указанной ролью.

- <span class="iconify-inline" data-icon="mdi:shield-key"></span> Список [API-ключей](./api_keys.md)

  > Пользователь может [запросить][2] доступ к проекту с использованием API ключа.

## Слой данных

**Слой данных** (Data layer) - это отдельное состояние графа проекта со своим независимым набором пакетов и параметрами узлов. Слои данных предназначены для изоляции отдельных наборов данных и параметров их обработки внутри одного проекта.

Типы слоев данных:

- Общие - доступы всем пользователям проекта.
- Персональные - доступ имеет только создавший пользователь.

![Data layer](/images/common/datalayer.png)

Структура

- Название текущего слоя
- <span class='iconify-inline' data-icon='mdi:menu-down'></span> Список доступных слоев
- <span class='iconify-inline' data-icon='mdi:pencil'></span> Кнопка редактирования
- <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления

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

## Граф

### Описание

**Граф** (Graph) - интегрированная последовательность узлов и направленных связей между ними, в которой узлы соответствуют отдельным этапам или операциям реализуемого алгоритма, а направленные связи определяют направление передачи данных между ними (результаты выполнения одних узлов передаются в качестве входных данных другим узлам).

Для управления графом предназначен дизайнер графа, который позволяет:

- Cоздавать и редактировать структуры графа.
- Создавать и редактировать программный код узлов.
- Управлять выполнением графа.
- Загружать и выгружать данные из графа.

Общий вид дизайнера графа:

![Project general view](./images/project/general.png)

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
Граф является единым для всего проекта и всех его пользователей!
:::

### Панель действий

![Project action panel](/images/common/project_action_panel.png)

Включает в себя:

- <span class="iconify-inline" data-icon="mdi:magnify"></span> Поиск узла по имени
- <span class="iconify-inline" data-icon="mdi:pin-off" style="color: red"></span> Опциональная кнопка отмены выбора текущего [мастер пакета](/docs/desc/nodes.md#пакеты)
- <span class="iconify-inline" data-icon="mdi:content-copy"></span> Копирование узлов
- <span class="iconify-inline" data-icon="mdi:content-paste"></span> Опциональная кнопка вставки узла
  > При вставке узла из другого проекта необходимо сначала обновить целевой проект по кнопке **F5**.

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

[1]: /docs/instructions/role.md#запрос-платнои-роли
[2]: /docs/instructions/api_keys.md#запрос-ключа
[3]: #слои-данных
[4]: /docs/desc/git.md
[5]: https://git-scm.com/
