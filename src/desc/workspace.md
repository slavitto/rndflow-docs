# Workspace

## Structure

The workspace is available to the user from the [dashboard](dashboard).

General view of the workspace:

![Workspace](/images/common/workspace_general.png)

It includes:

- [Description panel](#description-panel)
- <span class="iconify-inline" data-icon="mdi:file-code"></span> [Projects](#projects) tab
- <span class="iconify-inline" data-icon="mdi:account-multiple"></span> [Members](#members) tab
- <span class="iconify-inline" data-icon="mdi:cogs"></span> [Resources](#resources) tab
- <span class="iconify-inline" data-icon="mdi:credit-card-clock"></span> [Billing](#billing) tab
- ![Add button](/images/common/red_plus.png) - button to create a new project

## Description panel

### Structure

The panel displays:

- Toolbar
  - <span class="iconify-inline" data-icon="mdi:pencil"></span> Button to edit workspace information
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Button to delete workspace
- Image
- Name
- <span class="iconify-inline" data-icon="mdi:link"></span> Website
- Description
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Visible to everyone - toggle switch for public access permission
- <span class='iconify-inline' data-icon='mdi:wallet'></span> Balance - balance of the [account][10]

Clicking on it opens the workspace's [balance](#balance) window.

### Editing

Clicking the <span class="iconify-inline" data-icon="mdi:pencil"></span> button will switch the panel to edit mode:

![User edit](/images/common/workspace_edit.png)

## Projects

Displays a list of [project tiles](./dashboard.md#project-tile-structure).

![Projects](/images/common/workspace_projects.png)

## Members

![Members](/images/common/workspace_members.png)

Panel structure:

- "INVITE USER" button - button to invite a new member to the workspace
- List of user tiles
  - List
  - Navigation panel
- List of "Invited users"
  - List
  - Navigation panel

Member tile structure:

- Avatar
- Name
- Email
- Owner/Participant - member type
  > Clicking on <span class="iconify-inline" data-icon="mdi:close-circle"></span> opens a dialog to remove the user from the workspace.

For an invited user, it also displays:

- "REVOKE INVITATION" button

Member types and rights:

- Owner
  - Create/delete user invitations
  - Add/remove S3 server
  - Add/remove billing server
  - Update workspace description
  - Remove a member or other owner from the workspace
  - Delete workspace
  - Access full billing
  - Create a new project
  - Delete any project
  - View project list
  - Use/edit any project
- Participant
  - Create a new project
  - Delete a project (if project owner rights are present)
  - Use/edit project (if project rights are present)
  - Access the list of billing servers
  - Access the list of S3 servers
  - Access the list of project invitations
  - Access project billing general statistics

## Resources

Structure:

- <span class="iconify-inline" data-icon="mdi:folder-network"></span> [S3 servers](/desc/s3.md)

  - <span class="iconify-inline" data-icon="mdi:magnify"></span> - button to [add](/desc/s3.md#adding-a-public-s3-server) a public S3 server
  - <span class="iconify-inline" data-icon="mdi:plus"></span> - button to [create](/desc/s3.md#creating-an-s3-server) a new S3 server (if you have permissions in the [plan](/desc/billing.md#plans))
  - list of added/created S3 servers

- <span class="iconify-inline" data-icon="mdi:server"></span> [Billing servers](/desc/executor.md)
  - <span class="iconify-inline" data-icon="mdi:magnify"></span> - button for [adding][6] a public billing server
  - <span class="iconify-inline" data-icon="mdi:plus"></span> - button for [creating][7] a new billing server (if you have permissions in the [plan](/desc/billing.md#plans))
  - list of added/created billing servers
- <span class="iconify-inline" data-icon="mdi:docker"></span> [Docker images](/desc/docker.md)
  - <span class="iconify-inline" data-icon="mdi:plus"></span> - button for [creating][8] a new Docker image
  - list of created Docker images

![Resources](/images/common/workspace_resources.png)

## Billing

Structure:

- Information panel of the current [plan](/desc/billing.md#plans) with the ability to change it by clicking the button **CHANGE PLAN**
- Report on expenses and incomes for the selected period of time
  - Transfers - total amount of transfers
  - Expenses - total expenses
  - Incomes (roles) - income for using paid [roles][2].
  - Incomes (API keys) - income for using [API keys][3].
  - Chart of transfers, expenses and incomes.

![Billing](/images/common/workspace_billing.png)

## Balance

The workspace balance window displays the balance of the [account][10] and a list of raw or grouped by type of income/expense transactions [transactions][11].

![Workspace balance](/images/common/workspace_balance_raw.png)

Structure:

- Description panel

  - Image
  - Name-link
  - <span class='iconify-inline' data-icon='mdi:wallet'></span> Balance - account balance
  - Button "TOP UP" - button to deposit funds to the workspace account
  - Button "WITHDRAW" - button to withdraw funds to the owner's account

- Transaction display panel

  - Toolbar

    - <span class='iconify-inline' data-icon='mdi:calendar-range'></span> Period
    - <span class='iconify-inline' data-icon='mdi:refresh'></span> Refresh button

  - Panel of tabs for transaction groupings

    - GROUP BY DATE - summary information by dates
    - BY USER - summary information by users
    - BY PROJECT - summary information by projects
    - BY COUNTERPARTY - summary information by counterparties
    - RAW TRANSACTIONS - all transactions without grouping

  - Transaction table for the **RAW TRANSACTIONS** tab
    - Created - date of the transaction
    - Purpose - type of transaction
    - Counterparty - counterparty of the transaction
    - Amount - amount of the transaction
  - Navigation panel

After clicking the **TOP UP** button, the workspace user can deposit funds to the workspace account.

![Workspace balance add](/images/common/workspace_balance_add.png)

After clicking the **WITHDRAW** button, the workspace owner can withdraw funds to their own account.

![Workspace balance out](/images/common/workspace_balance_out.png)

[1]: ./payplan.md
[2]: ./project_role.md
[3]: ./api_keys.md
[4]: /instructions/s3.md#добавление-в-рабочее-пространство
[5]: /instructions/s3.md#cоздание-нового-в-рабочем-пространстве
[6]: /instructions/executor.md#добавление-в-рабочее-пространство
[7]: /instructions/executor.md#cоздание-нового-в-рабочем-пространстве
[8]: /instructions/docker.md#создание-докер-образа-в-рабочем-пространстве
[9]: /desc/payplan.md
[10]: /desc/finance.md#cчета
[11]: /desc/finance.md#транзакции
