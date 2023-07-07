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

- Изображение проекта с кнопками
  - <span class="iconify-inline" data-icon="mdi:star"></span> - добавления в избранные проекты
  - <span class="iconify-inline" data-icon="mdi:pencil"></span> - редактирования информации о проекте
  - <span class="iconify-inline" data-icon="mdi:delete"></span> - удаления проекта

- Название проекта
- <span class="iconify-inline" data-icon="mdi:notebook"></span> Название родительского [рабочего пространства](#workspace.md)
- <span class="iconify-inline" data-icon="mdi:folder-network"></span> Имя используемого [S3 сервера](./s3.md)

  Дополнительно указывается общее количество файлов проекта и их объем.

---

- <span class="iconify-inline" data-icon="mdi:information"></span> [О проекте](#описание) - доступ к окну описания проекта и списку доступных интерфейсов, платных ролей и API ключей

- <span class="iconify-inline" data-icon="mdi:wallet"></span> [Баланс](#баланс) - доступ к окну баланса проекта

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

## Баланс

Окно баланса проекта отображает список сырых или сгруппированных по типу ввода/вывода средств [транзакций][8]. 

![Project balance](/images/common/project_balance_raw.png)

Структура:

- Панель инструментов

  - <span class='iconify-inline' data-icon='mdi:calendar-range'></span> Период
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления

- Панель вкладок группировок транзакций

  - ГРУППИРОВКА ПО ДАТЕ - суммарная информация по датам
  - ПО ПОЛЬЗОВАТЕЛЮ - суммарная информация по пользователям
  - ПО ПРОЕКТУ - суммарная информация по текущему проекту
  - ПО КОНТРАГЕНТУ - суммарная информация по контрагентам
  - СЫРЫЕ ТРАНЗАКЦИИ - все транзакции без группировки

- Таблица транзакций для вкладки **СЫРЫЕ ТРАНЗАКЦИИ**
  - Создано - дата осуществления транзакции
  - Назначение - тип транзакции
  - Контрагент - контрагент транзакции
  - Сумма - сумма транзакции
- Панель навигации

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Проект не имеет отдельно [счета][9]. Информация о транзациях получается с использованием информации о движении средств со счета рабочего пространства.
:::

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

Автоматически создаваемые слои данных:

- Первоначальные слой данных проекта
- Слой данных для нового пользователя с [платной ролью][6].
- Слой данных для нового пользователя с [API ключа][7].

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
- <span class="iconify-inline" data-icon="mdi:image-filter-center-focus"></span> Опциональная кнопка приближения к выбранному узлу/узлам
  > Аналогично двойному щелчку на выбранном узле.
- <span class="iconify-inline" data-icon="mdi:content-paste"></span> Опциональная кнопка вставки узла
  > При вставке узла из другого проекта необходимо сначала обновить целевой проект по кнопке **F5**.

### Панель создания узлов

Для добавления узлов используется панель создания узлов.

<img src="/images/common/project_create_nodes_panel.png" align="right" alt="Node create panel" style="margin: 5%;">

Панель позволяет добавить:

- <span class="iconify-inline" data-icon="mdi:kubernetes"></span> - расчетный узел
- <span class="iconify-inline" data-icon="mdi:download-circle"></span> - узел данных
- <span class="iconify-inline" data-icon="mdi:database"></span> - SQL узел
- <span class="iconify-inline" data-icon="mdi:group"></span> - группу узлов
- <span class="iconify-inline" data-icon="mdi:view-gallery-outline"></span> - узел из других проектов с помощью [диалога коллекции узлов](#диалог-коллекции-узлов)

<br clear="right"/>

### Панель управления внешним видом

<img src="./images/project/view_panel.png" align="right" alt="Project view panel" style="margin: 5%;">

Панель управления внешним видом позволяет:

- <span class="iconify-inline" data-icon="mdi:magnify-plus"></span> <span class="iconify-inline" data-icon="mdi:magnify-minus"></span> Масштабировать граф
- <span class="iconify-inline" data-icon="mdi:magnify-scan"></span> Отобразить граф в оптимальном масштабе (Оптимальный масштаб)
- <span class="iconify-inline" data-icon="mdi:auto-fix"></span> Разместить узлы графа автоматичеки (Расположить узлы автоматически)

<br clear="right"/>

### Диалог коллекции узлов

Диалог коллекции узлов позволяет:

- Вставить в текущий проект некоторый узел из внешнего проекта.
- Вставить в внешний проект некоторый узел, скопированный из текущего проекта.

<b>Окно выбора проекта</b>

<img src="/images/common/nodes_collections_projects.png">

Состав:

- <span class="iconify-inline" data-icon="mdi:star" color="yellow"/> - переключатель поиска по избранным проектам
  > Если отключен то поиск идет по всем проектам, доступным пользователю.
- <span class="iconify-inline" data-icon="mdi:magnify"/> - поле ввода имени проекта
  >  Ищется любое вхождение строки из поля ввода в имени проекта.
- Список проектов
- Кнопка закрытия диалога

По щелчку мышкой по одному из проектов открывается окно выбора узлов.

<b>Окно выбора узла</b>

<img src="/images/common/nodes_collections_nodes.png">

Состав:

- <span class="iconify-inline" data-icon="mdi:magnify"/>  - поле ввода имени узла
  >  Ищется любое вхождение строки из поля ввода в имени узла.
- <span class="iconify-inline" data-icon="mdi:arrow-left-circle"/> - кнопка возврата в окно выбора проектов или узлов (если находимся в группе узлов)
- <span class="iconify-inline" data-icon="mdi:content-paste"/> - опциональная кнопка вставки в выбранный проект узлов, скопированных из текущего проекта.
- Список узлов
- Кнопка закрытия диалога

По щелчку мышкой по одному из узлов открывается окно подтверждения вставки узла в текущий проект.
При щелчке по группе узлов осуществляется открытие списка узлов данной группы.


[1]: /docs/instructions/role.md#запрос-платнои-роли
[2]: /docs/instructions/api_keys.md#запрос-ключа
[3]: #слои-данных
[4]: /docs/desc/git.md
[5]: https://git-scm.com/
[6]: /docs/desc/project_role.md
[7]: /docs/desc/api_keys.md
[8]: /docs/desc/finance.md#транзакции
[9]: /docs/desc/finance.md#cчета