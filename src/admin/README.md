# Administration

## Accessing the Administration Section

The administration section is only available to platform administrators.

To go to the administration section:

1. Open the link panel <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>
2. Click on <span class='iconify-inline' data-icon='mdi:tools'></span> Administration <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

  ![Admin link panel](/images/common/admin_link_panel.png)

## Sub-Section Panel

The sub-section panel provides access to various administration sections

<img src="/images/common/admin_manage_panel.png" align="right" alt="Admin action panel" style="margin: 1%;">

- <span class='iconify-inline' data-icon='mdi:view-dashboard'></span>[Dashboard](#dashboard) - overview information about the platform
- <span class='iconify-inline' data-icon='mdi:cog'></span>[Settings](#settings) - manage platform settings
- <span class='iconify-inline' data-icon='mdi:wallet'></span>[Balance](#balance) - financial information of the platform
- <span class='iconify-inline' data-icon='mdi:folder-network'></span>[S3 Servers](#s3-servers) - manage [S3 storages][1]
- <span class='iconify-inline' data-icon='mdi:server'></span>[Compute Servers](#compute-servers) - manage [compute servers][2]
- <span class='iconify-inline' data-icon='mdi:notebook-multiple'></span>[Workspaces](#workspaces) - manage [workspaces][4]
- <span class='iconify-inline' data-icon='mdi:graph-outline'></span>[Projects](#projects) - manage [projects][13]
- <span class='iconify-inline' data-icon='mdi:docker'></span>[Docker Images](#docker-images) - manage [Docker images][14] of the platform
- <span class='iconify-inline' data-icon='mdi:account-multiple'></span>[Users](#users) - manage users
- <span class='iconify-inline' data-icon='mdi:cog-box'></span>[Jobs](#jobs) - manage all [jobs][12]
- <span class='iconify-inline' data-icon='mdi:credit-card-clock'></span>[Plans and Billing](#plans-and-billing) - manage [plans][5]

<br clear="right"/>

## Dashboard

Overview information about the platform.

![Dashboard panel](/images/common/admin_dashboard.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Refresh information button
  - General information about the configuration
  - General financial information
  - General information on the status of the platform's database connection pool
  - General information about S3 servers
  - General information about compute servers
  - General information about workspaces
  - General information about projects
  - General information about Docker images
  - General information about users
  - General information about jobs
  - General information about plans

<span class='iconify-inline' data-icon='mdi:location-enter'></span> - button to go to the corresponding subsection.

## Settings

Manage platform settings - allows you to change the values of platform parameters

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Refresh S3 server list button

- Settings table
  - Google - parameters for user authorization using [Google](https://google.com).
  - Yandex - parameters for user authorization using [Yandex](https://yandex.ru).
  - Mail.ru - parameters for user authorization using [Mail.ru](https://e.mail.ru).
  - <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> Registration - switch to enable/disable registration of new users
  - <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> Audit - switch to enable/disable administrator audit of new users
    > If audit is activated, new user accounts are deactivated by default and must be activated by the administrator.

- Management
  - The *Value* column allows you to change the parameter state
  - The *On/Off* column allows you to activate or deactivate the parameter (optional).
  - To the right of the parameter, when its value/activity is changed, a save button <span class='iconify-inline' data-icon='mdi:content-save' style="color: black"></span> of changes is displayed.

![Settings](/images/common/admin_settings.png)

## Balance

Shows the current balance of the platform and a list of platform [transactions][8] with [accounts][9].

![Balance](/images/common/admin_balance.png)

- Toolbar

  - Period - select the reporting period
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Transaction list refresh button

- Transaction list

  - Created - transaction date
  - Purpose - transaction type
  - Counterparty - transaction counterparty
  - Amount - transaction amount
  - Navigation panel

## S3 Servers

Displays a list of existing S3 servers.

![S3 panel](/images/common/admin_s3s.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> S3 server list refresh button
- Storage table

  - Name

    Clicking on the storage name opens the [storage management](#storage-management) window.

  - URL - storage API interface
  - Public - public storage switch

    When the <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> switch is on, all platform users can use it to store projects.

  - Balance - storage account balance

  - Read only - storage write switch

    When the <span class='iconify-inline' data-icon='bi:toggle-off'></span> switch is off, the storage is available for both reading and writing.

  - Main - platform main storage switch

    When the <span class='iconify-inline' data-icon='bi:toggle-on' style="color: blue"></span> switch is on, the storage will be used to store platform service data.

  - <span class='iconify-inline' data-icon='mdi:delete'></span> Button to delete the corresponding storage
  - ![Red add button](/images/common/red_plus.png) Add new storage button

## Compute Servers

Displays a list of existing compute servers.

![Executors panel](/images/common/admin_executors.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Compute server list refresh button
- Compute server table

  - Name

    Clicking on the compute server name opens the window with its [description][7].

  - Balance - compute server account balance.

  - Public - public access switch

    When the <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> switch is on, all platform users can use the compute server to execute project tasks.

  - Active - activity switch

    When the switch <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> is on, the compute server will accept tasks for execution.

  - <span class='iconify-inline' data-icon='mdi:delete'></span> Button to delete the corresponding compute server
  - ![Red add button](/images/common/red_plus.png) Add new server button

## Users

Displays a list of existing platform users.

![Users panel](/images/common/admin_users.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> - button to refresh the user list
- User table

  - Login
  - Full name
  - Email - email address
  - Balance - user account balance
  - Last seen - time of last visit
  - Active - platform access permission switch

    When the <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"></span> switch is on, the user can log in to the platform.

  - Administrator - administrator privileges switch

    When the <span class='iconify-inline' data-icon='bi:toggle-on' style="color: red"></span> switch is on, the user has administrator privileges.

    ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
    If a user with administrator privileges resets the password according to the [instructions][11], this information will be sent to all other users with administrator privileges.
    :::
  - Delete user button

## Workspaces

Displays a list of existing workspaces.

![Workspaces panel](/images/common/admin_workspaces.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Workspace list refresh button
- Workspace table
  - Name
  - Owners
  - Created
  - Visible to all
  - Balance - workspace account balance
  - <span class='iconify-inline' data-icon='mdi:delete'></span> Button to delete the corresponding workspace
  - ![Add button](/images/common/red_plus.png) - Create new workspace button

## Docker Images

Manage platform [Docker images][14].

![Docker](/images/common/admin_docker.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Project list refresh button
  - Dropdown list of displayed columns
    - Workspace
    - Name
    - State
    - Build context
    - Created by - user who created the image
    - Updated by - user who last updated the image
    - Built by - user who last built the image
    - Created
    - Modified
    - Built
- Image table
  - Workspace
  - Name
  - State
  - Created by - user who created the image
  - Created - image creation date

## Projects

Displays a list of existing projects.

![Workspaces panel](/images/common/admin_projects.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Project list refresh button
  - Dropdown list of displayed columns
- Project table
  - Name
  - Workspace
  - Occupied volume
  - Users
    > A limited number of users are displayed. If the number of users exceeds the set limit, a flag with the number of users is displayed to the right of the users column. To get the full list of users, hover over the user list and select the required number of users or the desired page of the table in the pop-up table. The open user table will close automatically after some time. The table can also be closed using the close button to the left of the column.
  - Created
  - Project enabled
  - Project S3 server
  - Compute server
  - Actions: <span class='iconify-inline' data-icon='mdi:delete'></span> button to delete the corresponding project

## Plans

Displays a list of existing plans.

![Payplans panel](/images/common/admin_payplans.png)

Structure:

- Toolbar
  - <span class='iconify-inline' data-icon='mdi:plus'></span> Add new plan button
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Plan list refresh button
- List of plan tiles

Plan tile structure:

- Name
- <span class='iconify-inline' data-icon='mdi:delete'></span> Delete button
- Description
- Table with [plan parameters][10]

  - Parameter name
  - Editable parameter value (click on the value)

    ![Payplan edit](/images/common/admin_payplan_edit.png)

## Jobs

Displays and manages the list of jobs on the platform.

![Jobs panel](/images/common/admin_jobs.png)

Structure:

- Toolbar

  - <span class="iconify-inline" data-icon="mdi:download"></span> Download the selected job
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> Restart selected jobs
  - <span class="iconify-inline" data-icon="mdi:motion-play"></span> Restart selected jobs in interactive mode
  - <span class="iconify-inline" data-icon="mdi:refresh"></span> Refresh list

    > May contain additional label:
    > - Green top label  <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"></span> - informs about the change in the number of jobs in the node.

  - <span class="iconify-inline" data-icon="mdi:progress-check"></span> Filter jobs by status
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Delete selected jobs
  - Projects - filter by projects
  - Columns - change the displayed table columns

- Table with the list of jobs
  - Table columns
    - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> - job selection checkbox
    - Id - job identifier
    - Project - job project
    - Created - job initiation time
    - Owner - user who created the job
    - Status - current [execution status][6] of the job

To open the window for a specific job, click on its identifier in the **Id** column.

## Instructions

### Connecting External Authentication

The platform currently supports external authentication using three providers:

- [Google](https://google.com)
- [Yandex](https://yandex.ru)
- [Mail.ru](https://e.mail.ru)

Before you begin:

- Register your platform instance with the chosen provider.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  1. Specify the application type: **Web application**.
  2. Set the Redirect URI to: https://**server_address**/provider/callback
  :::

  - Google: [documentation](https://developers.google.com/identity/protocols/oauth2/production-readiness/policy-compliance) and [console](https://console.cloud.google.com/apis/credentials)

  - Yandex: [documentation](https://yandex.ru/dev/id/doc/ru/register-client) and [console](https://oauth.yandex.ru/)

  - Mail.ru: [documentation](https://id.vk.com/about/business/go/docs/ru/vkid/latest/oauth-mail/create-application) and [console](https://o2.mail.ru/app/)



- Enter the received **client_id** and **client_secret** into the corresponding fields for the chosen provider in the platform's [**Settings**](#settings) section.
- Activate the desired external provider.
- Save your changes.

### Connecting a Telegram Bot

- Connect to [BotFather](https://t.me/botfather).
- Create a bot:
  - Use the command /newbot.
  - Answer the questions about the new bot's name (displayed in contacts and can be changed) and username (short name in Latin characters, cannot be changed), etc.
  - Write down the received token in the configuration file and reinstall or update the platform.

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
For more information, refer to the [official website][15] or other resources, such as [here][16].
:::


## Installation

### Platform Installation

<a href = "mailto: mail@rndflow.com">Contact us.</a>

### Compute Server Installation

<a href = "mailto: mail@rndflow.com">Contact us.</a>

### Platform Components

After installing the platform in a Kubernetes environment, the following main components (pods) will be available for management and monitoring:

- Nginx Ingress Controller
  - nginx-ingress-nginx-controller-...
- Cert-manager certificate manager
  - cert-manager-...
  - cert-manager-cainjector-...
  - cert-manager-webhook-...
- Server
  - *server_name*-rndflow-server-api-...
  - *server_name*-rndflow-server-celery-...
  - *server_name*-rndflow-server-docs-...
  - *server_name*-rndflow-server-frontend-...
  - *server_name*-rndflow-server-pg-rmq-proxy-...
- PostgreSQL database
  - rndflow-postgresql-0
- MinIO file server
  - rndflow-minio-....
- Message broker
  - rndflow-rabbitmqserver-0
- Telegram integration module
  - rndflow-server-tbot-*
- Executor
  - *executor_name*-rndflow-executor-event-watcher-...
  - *executor_name*-rndflow-executor-executor-...
  - *executor_name*-rndflow-executor-jupyter-proxy-...
  - *executor_name*-rndflow-executor-jupyter-watcher-..
  - *executor_name*-rndflow-executor-metrics-reporter-...
  - *executor_name*-rndflow-executor-pod-watcher-...


[1]: /desc/s3.md
[2]: /desc/executor.md
[3]: /desc/project_user.md
[4]: /desc/workspace.md
[5]: /desc/payplan.md
[6]: /desc/job.md#состояния
[7]: /desc/executor.md
[8]: /desc/finance.md#транзакции
[9]: /desc/finance.md#счета
[10]: /desc/payplan.html
[11]: /instructions/#cброс-пароля
[12]: /desc/job.md
[13]: /desc/project.md
[14]: /desc/docker.md
[15]: https://core.telegram.org/bots/features#botfather
[16]: https://tlgrm.ru/docs/bots#botfather
