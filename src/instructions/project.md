# Проект

## Создание нового проекта

- [Перейти][1] в [рабочее пространство][2]

![Projects](/images/common/dashboard_user_workspace_projects_clear.png)

- Перейти на вкладку **РЕСУРСЫ** и убедиться в наличии ресурсов

![Resources](/images/common/dashboard_user_workspace_resources.png)

- В случае отсутствия ресурсов [инициализировать][3] [рабочее пространство][2].

- Перейти в вкладку <span class="iconify-inline" data-icon="mdi:file-code"></span>**ПРОЕКТЫ** и нажать кнопку создания нового проекта ![Add button](/images/common/red_plus.png)

![New project](/images/common/dashboard_user_workspace_projects_clear.png)

- Ввести название и описание проекта. Выбрать S3 сервер проекта для хранения данных проекта. Нажать кнопку **СОЗДАТЬ**.

![New project](/images/common/project_create.png)

- В рабочем пространстве будет создан новый проект.

![New project created](/images/common/project_created.png)

## Открытие проекта

- [Перейти][1] в [рабочее пространство][2]

- На вкладке <span class="iconify-inline" data-icon="mdi:file-code"></span>**ПРОЕКТЫ** нажать на [плитку проекта][11].

## Импорт проекта

- При необходимосит [создать][14] новый проект.

- [Открыть][13] проект

- В нижней части [панели управления проектом][8] нажать кнопку <span class='iconify-inline' data-icon='mdi:file-import'></span>**Импорт проекта**.

- В файловой системе выбрать необходимый файл архива проекта.

## Экспорт проекта

- [Открыть][13] проект

- В нижней части [панели управления проектом][8] нажать кнопку <span class='iconify-inline' data-icon='mdi:file-export'></span>**Экспорт проекта**.

- Файл архива будет скачан.

## Активация проекта

Для того, чтобы в проекте появилась возможность обработки пакетов необходимо в [панели управления проектом][8]:

- [Добавить][12] необходимый [сервер расчетов][9]

  ![Executor select](/images/common/project_manage_panel_executor_add.png)

- Активировать [слой данных][10]

  ![Datalayer activate toggle](/images/common/project_manage_panel_datalayer_activate_toggle.png)

- Активировать проект

  ![Project activate toggle](/images/common/project_manage_panel_project_activate_toggle.png)

## Открыть публичный доступ

1. [Создать][5] новую [роль][6] (например, public).

   Минимально необходимое разрешение: project_view.

2. На [плитке][7] роли включить переключатель <span class='iconify-inline' data-icon='mdi:eye'></span> (Общедоступная роль).

3. Если требуется отображение пакетов, то убедиться, что присутствует не менее одного <span class='iconify-inline' data-icon='mdi:accuont-eye'></span> Общего слоя данных.

## Открыть возмездный доступ

1. [Создать][5] новую [роль][6] с необходимыми разрешениями.

2. На [плитке][7] роли включить переключатель <span class='iconify-inline' data-icon='mdi:currency-usd'></span> (Платная роль).

[1]: ./workspace.md#переход-в-рабочее-пространство
[2]: /docs/desc/workspace.md
[3]: ./workspace.md#инициализация-рабочего-пространства
[4]: ./workspace.md#открыть-публичныи-доступ
[5]: ./role.md#создание-новои-роли
[6]: /docs/desc/project_role.md
[7]: /docs/desc/project_role.md#плитка-роли
[8]: /docs/desc/project.md#панель-управления-проектом
[9]: /docs/desc/executor.md
[10]: /docs/desc/project.md#слои-данных
[11]: /docs/desc/dashboard.md#структура-плитки-проекта
[12]: ./s3.md#добавление-в-проект
[13]: #открытие-проекта
[14]: #создание-нового-проекта
