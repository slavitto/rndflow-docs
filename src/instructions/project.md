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

- На вкладке <span class="iconify-inline" data-icon="mdi:file-code"></span>**ПРОЕКТЫ** нажать на плитку проекта.

## Открыть публичный доступ

1. Убедиться, что к [рабочему окружению][2], в котором располагается проект разрешен [публичный][4] доступ.

2. [Создать][5] новую [роль][6] (например, public).

   Рекомендуется предоставлять разрешения только для просмотра.

3. На [плитке][7] роли включить переключатель <span class='iconify-inline' data-icon='mdi:eye'></span> **Общедоступная роль**.

4. Если требуется отображение пакетов, то убедиться, что присутствует не менее одного <span class='iconify-inline' data-icon='mdi:accuont-eye'></span> Общего слоя данных.

## Открыть возмездный доступ

1. Убедиться, что к [рабочему окружению][2], в котором располагается проект разрешен [публичный][4] доступ.

2. [Создать][5] новую [роль][6] с необходимыми разрешениями.

3. На [плитке][7] роли включить переключатель <span class='iconify-inline' data-icon='mdi:currency-usd'></span> **Платная роль**.

[1]: ./workspace.md#переход-в-рабочее-пространство
[2]: /docs/desc/workspace.md
[3]: ./workspace.md#инициализация-рабочего-пространства
[4]: ./workspace.md#открыть-публичный-доступ
[5]: ./role.md#создание-новои-роли
[6]: /docs/desc/project_role.md
[7]: /docs/desc/project_role.md#плитка-роли
