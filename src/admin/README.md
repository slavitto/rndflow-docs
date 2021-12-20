# Администрирование

## Доступ к разделу администрирования

Раздел администрирования доступен только для администраторов платформы.

Для перехода в раздел администрирования необходимо:

- Открыть панель ссылок <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>
- Нажать на <span class='iconify-inline' data-icon='mdi:tools'></span> Администрирование <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

  ![Admin дink panel](/images/common/admin_link_panel.png)

## Панель подразделов

Панель подразделов предоставляет доступ к различным разделам администрирования

<img src="/images/common/admin_manage_panel.png" align="right" alt="Admin action panel" style="margin: 5%;">

- <span class='iconify-inline' data-icon='mdi:view-dashboard'></span>[Панель управления](#панель-управления) - обзорная информация о платформе
- <span class='iconify-inline' data-icon='mdi:folder-network'></span>[S3 серверы](#s3-серверы) - управление [S3 хранилищами][1]
- <span class='iconify-inline' data-icon='mdi:server'></span>[Серверы расчетов](#серверы-расчетов) - управления [серверами расчетов][2]
- <span class='iconify-inline' data-icon='mdi:account-multiple'></span>[Пользователи](#пользователи) - управления пользователями
- <span class='iconify-inline' data-icon='mdi:notebook-multiple'></span>[Рабочие пространства](#рабочие-пространства) - управление [рабочими пространствами][4]
- <span class='iconify-inline' data-icon='mdi:credit-card-clock'></span>[Тарифы](#тарифы) - управления [тарифами][5]
- <span class='iconify-inline' data-icon='mdi:help-circle-multiple'></span>Документация API - [API документация][6] платформы

<br clear="right"/>

## Панель управления

Обзорная информация о платформе.

![Dashboard panel](/images/common/admin_dashboard.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления информации
  - Общая информация по состоянию пула соединений к базе данных платформы
  - Общая информация по S3 серверам
  - Общая информация по серверам расчетов
  - Общая информация по пользователям
  - Общая информация по рабочим пространствам

## S3 серверы

### Описание

Отображение списка существующих S3 серверов.

![S3 panel](/images/common/admin_s3s.png)

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка S3 серверов
- Таблица хранилищ

  - Наименование

    При щелчке по наименованию хранилища открывается окно [управления хранилищем](#управление-хранилищем).

  - URL - API интерфейс хранилища
  - Общедоступный - переключатель общего доступа к хранилищу

    При включенном <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> переключателе все пользователи платформы могут использовать его для хранения проектов.

  - Только для чтения - переключатель возможности записи в хранилище

    При выключенном <span class='iconify-inline' data-icon='bi:toggle-off'></span> переключателе хранилище доступно и для чтения и для записи.

  - Основной - переключатель основного хранилища платформы

    При включенном <span class='iconify-inline' data-icon='bi:toggle-on' style="color: blue"></span> переключателе хранилище будет использовано для хранения служебных данных платформы.

  - <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления соответствующего хранилища
  - ![Red add button](/images/common/red_plus.png) Кнопка добавления нового хранилища

### Управление хранилищем

![S3 manage](/images/common/admin_s3_disk.png)

Структура:

- Панель описания

  - Логотип
  - Название
  - Описание
  - <span class='iconify-inline' data-icon='mdi:link'></span> API адрес
  - <span class='iconify-inline' data-icon='mdi:eye' style="color: blue"></span> Общедоступный - наличие общего доступа
  - <span class='iconify-inline' data-icon='mdi:bucket-outline'></span> Корзин - общее количество корзин
  - <span class='iconify-inline' data-icon='mdi:file-multiple-outline'></span> Файлов - общее количество файлов
  - <span class='iconify-inline' data-icon='mdi:harddisk'></span> Объем - общий занятый объем
  - <span class='iconify-inline' data-icon='mdi:cash'></span> Цена за МБ - стоимость хранения 1 МБ
  - Кнопка "РЕДАКТИРОВАТЬ"

- <span class='iconify-inline' data-icon='mdi:folder-information'></span> ДИСКОВОЕ ПРОСТРАНСТВО - панель использования диского пространства
  - Панель инструментов
    - <span class='iconify-inline' data-icon='mdi:calendar-range'></span> Период график
    - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления графиков
    - График изменения числа корзин
    - График изменения числа файлов
    - График изменения общего занятого объема
- Журнал очистки хранилища
  - Панель инструментов
    - <span class='iconify-inline' data-icon='mdi:cog-clockwise'></span> Кнопка запуска очистки
    - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления таблицы истории очистки
  - Таблица истории очистки

## Серверы расчетов

Отображение списка существующих серверов расчетов.

![Executors panel](/images/common/admin_executors.png)

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка серверов расчетов
- Таблица серверов расчетов

  - Наименование

    При щелчке по наименованию сервера расчетов открывается окно с его [описанием][7].

  - Общедоступный - переключатель общего доступа

    При включенном <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> переключателе все пользователи платформы могут использовать сервер расчетов для выполнения заданий проектов.

  - Активен - переключатель активности

    При включенном переключателе <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> сервер расчетов будет принимать задания на выполнение.

  - <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления соответствующего сервера расчетов
  - ![Red add button](/images/common/red_plus.png) Кнопка добавления нового сервера

## Пользователи

Отображение списка существующих пользователей платформы.

![Users panel](/images/common/admin_users.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка пользователей
- Таблица пользователей

  - Логин
  - Полное имя
  - Почта - адрес электронной почты
  - Был - время последнего посещения
  - Активен - переключатель разрешения доступа пользователя в платформу

    При включенном <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> переключателе пользователь может войти в платформу.

  - Администратор - переключатель наличия административных привилегий

    При включенном<span class='iconify-inline' data-icon='bi:toggle-on' style="color: red"></span> переключателе пользователь обладает административными привилегиями.

## Рабочие пространства

Отображение списка существующих рабочих пространств.

![Workspaces panel](/images/common/admin_workspaces.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка рабочих пространств.
- Таблица рабочих пространств
  - Наименование
  - Владельцы
  - <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления соответствующего пользователя

## Тарифы

Отображение списка существующих тарифов.

![Payplans panel](/images/common/admin_payplans.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:plus'></span> Кнопка добавления нового тарифа
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка тарифов
- Список плиток тарифов

Структура плитки тарифа:

- Название
- <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления
- Описание
- Таблица с показателями тарифа

  - Название показателя
  - Редактируемое значение показателя (щелкнуть по значению)

    ![Payplan edit](/images/common/admin_payplan_edit.png)

[1]: /docs/desc/s3.md
[2]: /docs/desc/executor.md
[3]: /docs/desc/project_user.md
[4]: /docs/desc/workspace.md
[5]: /docs/desc/payplan.md
[6]: https://server.rndflow.com/api/redoc
[7]: /docs/desc/executor.md