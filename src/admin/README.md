# Администрирование

## Доступ к разделу администрирования

Раздел администрирования доступен только для администраторов платформы.

Для перехода в раздел администрирования необходимо:

- Открыть панель ссылок <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>
- Нажать на <span class='iconify-inline' data-icon='mdi:tools'></span> Администрирование <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

  ![Admin link panel](/images/common/admin_link_panel.png)

## Панель подразделов

Панель подразделов предоставляет доступ к различным разделам администрирования

<img src="/images/common/admin_manage_panel.png" align="right" alt="Admin action panel" style="margin: 1%;">

- <span class='iconify-inline' data-icon='mdi:view-dashboard'></span>[Панель управления](#панель-управления) - обзорная информация о платформе
- <span class='iconify-inline' data-icon='mdi:cog'></span>[Настройки](#настроики) - управление настройками платформы
- <span class='iconify-inline' data-icon='mdi:wallet'></span>[Баланс](#баланс) - финансовая информация платформы
- <span class='iconify-inline' data-icon='mdi:folder-network'></span>[S3 серверы](#s3-серверы) - управление [S3 хранилищами][1]
- <span class='iconify-inline' data-icon='mdi:server'></span>[Серверы расчетов](#серверы-расчетов) - управления [серверами расчетов][2]
- <span class='iconify-inline' data-icon='mdi:notebook-multiple'></span>[Рабочие пространства](#рабочие-пространства) - управление [рабочими пространствами][4]
- <span class='iconify-inline' data-icon='mdi:graph-outline'></span>[Проекты](#проекты) - управление [проектами][13]
- <span class='iconify-inline' data-icon='mdi:docker'></span>[Docker-образы](#докер-образы) - управления [Докер образами][14] платформы
- <span class='iconify-inline' data-icon='mdi:account-multiple'></span>[Пользователи](#пользователи) - управления пользователями
- <span class='iconify-inline' data-icon='mdi:cog-box'></span>[Задания](#задания) - управление всеми [заданиями][12]
- <span class='iconify-inline' data-icon='mdi:credit-card-clock'></span>[Тарифы](#тарифы) - управления [тарифами][5]

<br clear="right"/>

## Панель управления

Обзорная информация о платформе.

![Dashboard panel](/images/common/admin_dashboard.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления информации
  - Общая информация о настройка
  - Общая финансовая информация
  - Общая информация по состоянию пула соединений к базе данных платформы
  - Общая информация по S3 серверам
  - Общая информация по серверам расчетов
  - Общая информация по рабочим пространствам
  - Общая информация по проектам
  - Общая информация по Докер образам
  - Общая информация по пользователям
  - Общая информация по заданиям
  - Общая информация о тарифах

<span class='iconify-inline' data-icon='mdi:location-enter'></span> - кнопка перехода в соответствующий подраздел.



## Настройки

Управление настройками платформы - позволяет изменять значения параметров платформы

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка S3 серверов

- Таблица настроек
  - Google - параметры для авторизация пользователей с использованием [Google](https://google.com).
  - Яндекс - параметры для авторизация пользователей с использованием [Яндекс](https://yandex.ru).
  - Mail.ru - параметры для авторизация пользователей с использованием [Mail.ru](https://e.mail.ru).
  - <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> Регистрация - переключатель разрешения/запрета регистрации новых пользователей
  - <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> Аудит -переключатель включения/выключения аудита администратором новых пользователей
    > В случае активации аудита аккаунты новых пользователей по умолчанию деактивированы и должны быть активированы администратором.

- Управление
  - Колонка *Значение* - позволяет изменить состояние параметра
  - Колонка *Вкл/Выкл* - позволяето активировать или деактивировать параметр платформы (опционально).
  - В крайней правой колонке без названия отображается кнопка сохранения <span class='iconify-inline' data-icon='mdi:save' style="color: green"></span> при изменении значения параметра.

![Settings](/images/common/admin_settings.png)

## Баланс

Отображение текущего баланса платформы и списка [транзакций][8] с [счетом][9] платформы.

![Balance](/images/common/admin_balance.png)

- Панель инструментов

  - Период - выбор отчетного периода
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка транзакций

- Список транзакций

  - Создано - дата осуществления транзакции
  - Назначение - тип транзакции
  - Контрагент - контрагент транзакции
  - Сумма - сумма транзакции
  - Панель навигации

## S3 серверы

Отображение списка существующих S3 серверов.

![S3 panel](/images/common/admin_s3s.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка S3 серверов
- Таблица хранилищ

  - Наименование

    При щелчке по наименованию хранилища открывается окно [управления хранилищем](#управление-хранилищем).

  - URL - API интерфейс хранилища
  - Общедоступный - переключатель общего доступа к хранилищу

    При включенном <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> переключателе все пользователи платформы могут использовать его для хранения проектов.

  - Баланс - баланс счета хранилища

  - Только для чтения - переключатель возможности записи в хранилище

    При выключенном <span class='iconify-inline' data-icon='bi:toggle-off'></span> переключателе хранилище доступно и для чтения и для записи.

  - Основной - переключатель основного хранилища платформы

    При включенном <span class='iconify-inline' data-icon='bi:toggle-on' style="color: blue"></span> переключателе хранилище будет использовано для хранения служебных данных платформы.

  - <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления соответствующего хранилища
  - ![Red add button](/images/common/red_plus.png) Кнопка добавления нового хранилища

## Серверы расчетов

Отображение списка существующих серверов расчетов.

![Executors panel](/images/common/admin_executors.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка серверов расчетов
- Таблица серверов расчетов

  - Наименование

    При щелчке по наименованию сервера расчетов открывается окно с его [описанием][7].

  - Баланс - баланс счета сервера расчетов.

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
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> - кнопка обновления списка пользователей
- Таблица пользователей

  - Логин
  - Полное имя
  - Почта - адрес электронной почты
  - Баланс - баланс счета пользователя
  - Был - время последнего посещения
  - Активен - переключатель разрешения доступа пользователя в платформу

    При включенном <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> переключателе пользователь может войти в платформу.

  - Администратор - переключатель наличия административных привилегий

    При включенном<span class='iconify-inline' data-icon='bi:toggle-on' style="color: red"></span> переключателе пользователь обладает административными привилегиями.

    ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
    Если пользователь с административными привилегиями осуществит сброс пароля согласно [инструкции][11], то информация об этом будет отослана всем другим пользователям с административными привилегиями.
    :::

## Рабочие пространства

Отображение списка существующих рабочих пространств.

![Workspaces panel](/images/common/admin_workspaces.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка рабочих пространств.
- Таблица рабочих пространств
  - Наименование
  - Владельцы
  - Видно всем
  - Баланс - баланс счета рабочего пространства
  - <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления соответствующего рабочего пространства
- ![Add button](/images/common/red_plus.png) - Кнопка создания нового рабочего пространства


## Докер образы

Управление [Докер образами][14] платформы.

![Docker](/images/common/admin_docker.png)

Cтруктура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка проектов
  - Выпадающий список отображаемых колонок
    - Рабочее пространство
    - Наименование
    - Состояние
    - Контекс сборки
    - Создал - пользователь, создавший образ
    - Обновил - пользователь, последним обновивший образ
    - Собрал - пользователь, последним собравший образ
    - Создан
    - Изменен
    - Собран


- Таблица образов
  - Рабочее пространство
  - Наименование
  - Состояние
  - Создал - пользователь, создавший образ
  - Создан

## Проекты

Отображение списка существующих проектов.

![Workspaces panel](/images/common/admin_projects.png)

Структура:

- Панель инструментов
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления списка проектов
  - Выпадающий список отображаемых колонок
- Таблица проектов
  - Название
  - Рабочее пространство
  - Занятый объем
  - Пользователи
  > Отображается ограниченное количество пользователей. В случае если количество пользователей превышает установленный лимит, то справа от столбца с пользователями отображается флаг с количеством пользователей. Для получения полного списка пользователя необходимо навести указатель мыши на список пользователей и в появившейся таблице выбрать необходимое количество отображаемых пользователей или нужную страницу таблицы. Открытая таблица пользователей закроется самостоятельно через некоторое время. Также таблицу можно закрыть с помощью кнопки закрытия слева от столбца.
  - Проект включен
  - S3 сервер проекта
  - Сервер расчета
  - Действия : <span class='iconify-inline' data-icon='mdi:delete'></span> кнопка удаления соответствующего проекта


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
- Таблица с [показателями тарифа][10]

  - Название показателя
  - Редактируемое значение показателя (щелкнуть по значению)

    ![Payplan edit](/images/common/admin_payplan_edit.png)

## Задания

Отображение и управление списком заданий на платформе.

![Jobs panel](/images/common/admin_jobs.png)

Структура:

- Панель инструментов

  - <span class="iconify-inline" data-icon="mdi:download"></span> Скачать выделенное задание
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> Перезапустить выделенные задания
  - <span class="iconify-inline" data-icon="mdi:motion-play"></span> Перезапустить выделенные задания в интерактивном режиме
  - <span class="iconify-inline" data-icon="mdi:refresh"></span> Обновления списка

    >  Может содержать дополнительный ярлык:
    >  - Верхний ярлык зеленого цвета  <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"></span>-  информирует об изменении количества заданий в узле.

  - <span class="iconify-inline" data-icon="mdi:progress-check"></span> Фильтрация заданий по состоянию
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление выбранных заданий
  - Проекты - фильтрация по проектам
  - Колонки - изменение отображаемых столбцов таблицы

- Таблица с списком заданий
  - Столбцы таблицы
    - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> - переключатель выбора задания
    - Id - идентификатор задания
    - Проект - проект задания
    - Создано - время инициации задания
    - Владелец - пользователь создавший задание
    - Состояние - текущее [состояние][6] выполнения задания

Для открытия окна конкретного задания необходимо щелкнуть по его идентификатору в столбце **Id**.


## Установка

### Установка платформы

<a href = "mailto: mail@rndflow.com">Свяжитесь с нами.</a>

### Установка сервера расчетов

<a href = "mailto: mail@rndflow.com">Свяжитесь с нами.</a>

### Компоненты платформы

После установки платформы в среде Kubernetes будут доступны для управления и мониторинга следующие основные компоненты (поды):

- Контроллер Nginx Ingress
  - nginx-ingress-nginx-controller-...
- Менеджер сертификатов Cert-manager
  - cert-manager-...
  - cert-manager-cainjector-...
  - cert-manager-webhook-...
- Сервер
  - *название сервера*-rndflow-server-api-...
  - *название сервера*-rndflow-server-celery-...
  - *название сервера*-rndflow-server-docs-...
  - *название сервера*-rndflow-server-frontend-...
  - *название сервера*-rndflow-server-pg-rmq-proxy-...
- База данных PostgreSQL
  - rndflow-postgresql-0
- Файловый сервер MinIO
  - rndflow-minio-....
- Брокер сообщений
  - rndflow-rabbitmqserver-0
- Модуль интеграции с Телеграмм
  - rndflow-server-tbot-8547d5479c-*
- Исполнитель
  - *название исполнителя*-rndflow-executor-event-watcher-...
  - *название исполнителя*-rndflow-executor-executor-...
  - *название исполнителя*-rndflow-executor-jupyter-proxy-...
  - *название исполнителя*-rndflow-executor-jupyter-watcher-..
  - *название исполнителя*-rndflow-executor-metrics-reporter-...
  - *название исполнителя*-rndflow-executor-pod-watcher-...

[1]: /desc/s3.md
[2]: /desc/executor.md
[3]: /desc/project_user.md
[4]: /desc/workspace.md
[5]: /desc/payplan.md
[6]: https://server.rndflow.com/api/redoc
[7]: /desc/executor.md
[8]: /desc/finance.md#транзакции
[9]: /desc/finance.md#счета
[10]: /desc/payplan.html
[11]: /instructions/#cброс-пароля
[12]: /desc/job.md
[13]: /desc/project.md
[14]: /desc/docker.md
