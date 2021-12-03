# Инструкции

## Регистрация

- Перейти по ссылке [https://server.rndflow.com/signin](https://server.rndflow.com/signin) или нажать кнопку **ВХОД** в верхнем правом углу [главной страницы](https://server.rndflow.com/) платформы.
- Нажать на кнопку **НОВЫЙ ПОЛЬЗОВАТЕЛЬ**

  ![Signin](/images/common/signin.png)

- Ввести желаемый логин, электронную почту и пароль.

  ![Registration](/images/common/registration.png)

- Нажать на кнопку **НОВЫЙ ПОЛЬЗОВАТЕЛЬ**

  Если введены корректные данные, то будет сообщено об отправке сообщения на электронную почту.

  ![Registration info](/images/common/registration_info.png)

- Открыть пришедшее письмо от пользователя **server@rndflow**.

  ![Registration confirm letter](/images/common/registration_confirm.png)

- Перейти по указанной в письме ссылке.

  Регистрация подтверждена - [Перейти][2] в [рабочее пространство][3]!

  ![Registration confirmed](/images/common/registration_confirmed.png)

- Нажать кнопку **ВХОД** и войти в систему.

## Рабочее пространстово

### Переход в рабочее пространство

Перейти в [панель управления](/docs/desc/dashboard.md):

- Открыть панель ссылок **1**
- Нажать на изображение аватара пользователя **2**.

  ![Link panel](/images/common/user_link_panel.png)

- Нажать на [плитку](/docs/desc/dashboard.md#структура-плитки-рабочего-пространства) [рабочего пространства][3] **1**.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Для нового пользователя автоматически создается [рабочее пространство][3] **1**.
  :::

  ![New user dashboard](/images/common/dashboard_user_new.png)

## Проект

### Создание нового проекта

- [Перейти][2] в [рабочее пространство][3]

![Projects](/images/common/dashboard_user_workspace_projects_clear.png)

- Перейти на вкладку **РЕСУРСЫ**

![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- Добавить [S3 хранилище](/docs/desc/s3.md)

- Добавить [cервер расчетов](/docs/desc/executor.md)

- Убедиться в наличии ресурсов

![Resources](/images/common/dashboard_user_workspace_resources.png)

- Перейти в вкладку <span class="iconify-inline" data-icon="mdi:file-code"></span>**ПРОЕКТЫ** и нажать кнопку создания нового проекта ![Add button](/images/common/red_plus.png)

![New project](/images/common/dashboard_user_workspace_projects_clear.png)

- Ввести название и описание проекта. Выбрать S3 сервер проекта для хранения данных проекта. Нажать кнопку **СОЗДАТЬ**.

![New project](/images/common/project_create.png)

- В рабочем пространстве будет создан новый проект.

![New project created](/images/common/project_created.png)

### Открытие проекта

- [Перейти][2] в [рабочее пространство][3]

- На вкладке <span class="iconify-inline" data-icon="mdi:file-code"></span>**ПРОЕКТЫ** нажать на плитку проекта.

## Узлы

- [Перейти](#открытие-проекта) в [проект](/docs/desc/project.md)

- В [панели управления проектом](/docs/desc/project.md#панель-управления-проектом) нажать на <span class="iconify-inline" data-icon="mdi:sitemap"></span>**ГРАФ** и перейти в [дизайнер графа](/docs/desc/project.md#граф).

### Создание расчетного узла

- Открыть [панель создания узлов][1].
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:kubernetes"></span> [расчетного узла](/docs/desc/nodes.md#расчетныи-узел).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.
- Переименовать узел и добавить описание
  - Перейти в панель [Описание](/docs/desc/nodes.md#описание) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:card-text"></span> на узле.
  - Нажать кнопку **РЕДАКТИРОВАТЬ**.
  - Ввести необходимое имя в поле **Название**.
  - Ввести необходимое описание в редакторе **Описание**.
  - Нажать кнопку **СОХРАНИТЬ**.
- Создать исполнительный скрипт узла

  - Перейти в панель [Файлы][4] щелкнув по иконке <span class="iconify-inline" data-icon="mdi:file-code"></span> на узле.
  - Добавить новый файл нажав на кнопку <span class="iconify-inline" data-icon="mdi:file-plus"></span> и дать уникальное для этого узла название. Название требуется вводить с расширением файла (например, **run.py** ).
  - Щелчком по строке с файлом открыть редактор файла и набрать необходимый [код](/docs/dev/compute.md#код-расчетного-узла).
  - Нажать кнопку **СОХРАНИТЬ**
  - Установить для файла свойство "Исполняемый" нажав на иконку <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> напротив имени файла .

- Задать исполнительное окружение

  - Перейти в панель [Контейнер](/docs/desc/nodes.md#контейнер) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:kubernetes"></span> на узле.
  - В поле **Докер образ** ввести имя используемого докер образа. Можно использовать как [стандартные образы платформы](/docs/dev/docker.md#стандартные-докер-образы) (например, **rndflow/job.py**), так и [создать собственный докер образ](/docs/dev/docker.md#создание-докер-образа).
  - В поле редактора ниже указать скрипт, который должен быть запущен после запуска контейнера. Требуется указать команду запуска файла, который был добавлен в панели <span class="iconify-inline" data-icon="mdi:file-code"></span>[Файлы][4].

### Создание узла данных

- Открыть [панель создания узлов][1].
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:download-circle"></span> [узла данных](/docs/desc/nodes.md#узел-данных).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.

### Создание SQL узла

- Открыть [панель создания узлов][1].
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:database"></span> [SQL узла](/docs/desc/nodes.md#sql-узел).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.
- Создать SQL запрос
  - Перейти в панель [SQL](/docs/desc/nodes.md#запрос) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:database"></span> на узле.
  - В вкладке **ТЕКСТ ЗАПРОСА** ввести код запроса.
  - В вкладке **ТЕСТ** ознакомиться с результатами тествого запуска запроса.
  - Нажать кнопку **СОХРАНИТЬ**.

### Создание соединений между узлами

- Потянуть выход <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"></span> одного узла к входу <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 10px;"></span> второго узла.

- Отпустить кнопку мыши после выделения второго узла (появление красной рамки вокруг второго узла)

### Выполнение узла

Смотрите [обработка пакета](#обработка-пакета).

## Пакеты

### Обработка пакета

- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][5] узла
- Выбрать необходимый пакет установив напротив него переключатель в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span> **1**.
- Нажать кнопку **2** <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> на панели инструментов.

  ![Run package](/images/common/node_panel_packages_execute.png)

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Задания][6] узла, в котором должно появиться новое задание. Может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий.

### Интерактивная обработка пакета

**Запуск**

- Открыть панель <span class="iconify-inline" data-icon="mdi:kubernetes"></span>[Контейнер][8] узла и в параметре **Память** установить не менее 256М.
- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][5] узла
- Выбрать необходимый пакет установив напротив него переключатель в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span> **1**.
- Нажать кнопку **2** <span class="iconify-inline" data-icon="mdi:motion-play"></span> на панели инструментов.

  ![Run package](/images/common/node_panel_packages_execute_jupyter.png)

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span> [Задания][6] узла, в котором должно появиться новое задание. Может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий.

- Когда **Состояние** задания станет вида <span class="iconify-inline" data-icon="mdi:motion-play" style="color: green"></span>, щелкнуть по иконке состояния <span class="iconify-inline" data-icon="mdi:motion-play" style="color: green"></span>.

- В браузере будет открыта новая вкладка с [панелью Jupyter][7].

  ![Jupyter](/images/common/jupyter_panel.png)

- После щелчка по скрипту узла в браузере будет открыта новая вкладка с Jupyter редактора с скриптом узла с возможностью интерактивного редактирования и выполнения.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Стандартные образы контейнеров RnDFlow включают в себя библиотеку [Jupytext](https://jupytext.readthedocs.io/en/latest/), которая позволяет работать с обычными скриптами в Jupyter Notebook. При открытии такого файла он будет автоматически разбиваться на блоки (пустая строка определяет начало блока), можно задавать блоки самостоятельно с помощью комментариев вида: #+ и #- .  
  :::

  ![Jupyter edit](/images/common/jupyter_panel_edit.png)

**Остановка**

- Сохранить все изменения в вкладке Jupyter редактора с скриптом узла нажав на кнопку сохранения <span class="iconify-inline" data-icon="carbon:save"></span> в панели инструментов Jupyter редактора.

- В вкладке с панель Jupyter нажать кнопку **Quit** (верхний правый угол).
  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
  Через определенное время заданное в настройках [исполнителя задач](/docs/desc/executor.md) (по умолчанию 24 часа) интерактивная задача будет автоматически остановлена.
  :::

- Перенос измененного скрипта в узел **TODO**.

## Выход из платформы

Открыть панель ссылок в верхнем правом углу экрана и нажать на кнопку <span class="iconify-inline" data-icon="mdi:logout"></span>.

![Exit](/images/common/link_panel.png)

[1]: /docs/desc/project.md#панель-создания-узлов
[2]: #переход-в-рабочее-пространство
[3]: /docs/desc/workspace.md
[4]: /docs/desc/nodes.md#файлы
[5]: /docs/desc/nodes.md#пакеты
[6]: /docs/desc/nodes.md#задания
[7]: https://jupyter-notebook.readthedocs.io/en/stable/ui_components.html#notebook-dashboard
[8]: /docs/desc/nodes.md#контеинер
