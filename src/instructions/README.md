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

  Регистрация подтверждена - [Перейти](#переход-в-рабочее-пространство) в [рабочее пространство](/docs/desc/workspace.md)!

  ![Registration confirmed](/images/common/registration_confirmed.png)

- Нажать кнопку **ВХОД** и войти в систему.

## Рабочее пространстово

### Переход в рабочее пространство

Перейти в [панель управления](/docs/desc/dashboard.md):

- Открыть панель ссылок **1**
- Нажать на изображение аватара пользователя **2**.

  ![Link panel](/images/common/user_link_panel.png)

- Нажать на [плитку](/docs/desc/dashboard.md#структура-плитки-рабочего-пространства) [рабочего пространства](/docs/desc/workspace.md) **1**.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Для нового пользователя автоматически создается [рабочее пространство](/docs/desc/workspace) **1**.
  :::

  ![New user dashboard](/images/common/dashboard_user_new.png)

## Проект

### Создание нового проекта

- [Перейти](#переход-в-рабочее-пространство) в [рабочее пространство](/docs/desc/workspace.md)

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

- [Перейти](#переход-в-рабочее-пространство) в [рабочее пространство](/docs/desc/workspace.md)

- На вкладке <span class="iconify-inline" data-icon="mdi:file-code"></span>**ПРОЕКТЫ** нажать на плитку проекта.

## Узлы

- [Перейти](#открытие-проекта) в [проект](/docs/desc/project.md)

- В [панели управления проектом](/docs/desc/project.md#панель-управления-проектом) нажать на <span class="iconify-inline" data-icon="mdi:sitemap"></span>**ГРАФ** и перейти в [дизайнер графа](/docs/desc/project.md#граф).

### Создание расчетного узла

- Открыть [панель создания узлов](/docs/desc/project.md#панель-создания-узлов).
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:kubernetes"></span> [расчетного узла](/docs/desc/nodes.md#расчетныи-узел).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.
- Переименовать узел и добавить описание
  - Перейти в панель [Описание](/docs/desc/nodes.md#описание) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:card-text"></span> на узле.
  - Нажать кнопку **РЕДАКТИРОВАТЬ**.
  - Ввести необходимое имя в поле **Название**.
  - Ввести необходимое описание в редакторе **Описание**.
  - Нажать кнопку **СОХРАНИТЬ**.
- Создать исполнительный скрипт узла

  - Перейти в панель [Файлы](/docs/desc/nodes.md#файлы) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:file-code"></span> на узле.
  - Добавить новый файл нажав на кнопку <span class="iconify-inline" data-icon="mdi:file-plus"></span> и дать уникальное для этого узла название. Название требуется вводить с расширением файла (например, **run.py** ).
  - Щелчком по строке с файлом открыть редактор файла и набрать необходимый [код](/docs/dev/compute.md#код-расчетного-узла).
  - Нажать кнопку **СОХРАНИТЬ**
  - Установить для файла свойство "Исполняемый" нажав на иконку <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> напротив имени файла .

- Задать исполнительное окружение

  - Перейти в панель [Контейнер](/docs/desc/nodes.md#контейнер) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:kubernetes"></span> на узле.
  - В поле **Докер образ** ввести имя используемого докер образа. Можно использовать как [стандартные образы платформы](/docs/dev/docker.md#стандартные-докер-образы) (например, **rndflow/job.py**), так и [создать собственный докер образ](/docs/dev/docker.md#создание-докер-образа).
  - В поле редактора ниже указать скрипт, который должен быть запущен после запуска контейнера. Требуется указать команду запуска файла, который был добавлен в панели <span class="iconify-inline" data-icon="mdi:file-code"></span>[Файлы](/docs/desc/nodes.md#файлы).

### Создание узла данных

- Открыть [панель создания узлов](/docs/desc/project.md#панель-создания-узлов).
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:download-circle"></span> [узла данных](/docs/desc/nodes.md#узел-данных).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.

### Создание SQL узла

- Открыть [панель создания узлов](/docs/desc/project.md#панель-создания-узлов).
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

## Выход из платформы

Открыть панель ссылок в верхнем правом углу экрана и нажать на кнопку <span class="iconify-inline" data-icon="mdi:logout"></span>.

![Exit](/images/common/link_panel.png)
