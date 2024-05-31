# Project

## Creating a new project

- [Go][1] to [workspace][2]

![Projects](/images/common/dashboard_user_workspace_projects_clear.png)

- Go to the **RESOURCES** tab and make sure the resources are available

![Resources](/images/common/dashboard_user_workspace_resources.png)

- In case of lack of resources, [initialize][3] [workspace][2].

- Go to the <span class="iconify-inline" data-icon="mdi:file-code"></span>**PROJECTS** tab and click the create a new project button ![Add button](/images/common /red_plus.png)

![New project](/images/common/dashboard_user_workspace_projects_clear.png)

- Enter the name and description of the project. Select an S3 project server to store project data. Click the **CREATE** button.

![New project](/images/common/project_create.png)

- A new project will be created in the workspace.

![New project created](/images/common/project_created.png)

## Opening a project

- [Go][1] to [workspace][2]

- On the <span class="iconify-inline" data-icon="mdi:file-code"></span>**PROJECTS** tab, click on [project tile][11].

## Import project

- If necessary, you will [create][14] a new project.

- [Open][13] project

- At the bottom of the [project control panel][8], click the <span class='iconify-inline' data-icon='mdi:file-import'></span>**Import project** button.

- In the file system, select the required project archive file.

## Export project

- [Open][13] project

- At the bottom of the [project control panel][8], click the <span class='iconify-inline' data-icon='mdi:file-export'></span>**Export project** button.

- The archive file will be downloaded.

## Project activation

In order for the project to have the ability to process packages, it is necessary in the [project control panel][8]:

- [Add][12] required [calculation server][9]

 ![Executor select](/images/common/project_manage_panel_executor_add.png)

- Activate [data layer][10]

 ![Datalayer activate toggle](/images/common/project_manage_panel_datalayer_activate_toggle.png)

- Activate the project

 ![Project activate toggle](/images/common/project_manage_panel_project_activate_toggle.png)

## Open to public access

1. [Create][5] a new [role][6] (for example, public).

 Minimum required permission: project_view.

2. On the [tile][7] role, enable the <span class='iconify-inline' data-icon='mdi:eye'></span> (Public role) switch.

3. If you need to display packages, make sure that there is at least one <span class='iconify-inline' data-icon='mdi:accuont-eye'></span> General Data Layer.

## Open paid access

1. [Open public access][15] to the project with minimal rights.

 > Required to demonstrate the project in a public [gallery][16].

2. [Create][5] a new [role][6] with the necessary permissions.

3. On the [tile][7] role, turn on the <span class='iconify-inline' data-icon='mdi:currency-usd'></span> switch (Paid role).

4. On the role [tile][7] set the required **Cost coefficient**.

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
A video example can be found in the [video][17] section.
:::

[1]: ./workspace.md#переход-в-рабочее-пространство
[2]: /desc/workspace.md
[3]: ./workspace.md#инициализация-рабочего-пространства
[4]: ./workspace.md#открыть-публичныи-доступ
[5]: ./role.md#создание-новои-роли
[6]: /desc/project_role.md
[7]: /desc/project_role.md#плитка-роли
[8]: /desc/project.md#панель-управления-проектом
[9]: /desc/executor.md
[10]: /desc/project.md#слои-данных
[11]: /desc/dashboard.md#структура-плитки-проекта
[12]: ./s3.md#добавление-в-проект
[13]: #открытие-проекта
[14]: #создание-нового-проекта
[15]: #открыть-публичныи-доступ
[16]: /desc/explorer.md
[17]: ./video.md
