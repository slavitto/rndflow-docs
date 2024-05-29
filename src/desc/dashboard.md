# Control Panel

## Description

The main components of the platform are available to the user through the control panel.

![User dashboard](/images/common/dashboard.png)

Structure:

- <span class="iconify-inline" data-icon="mdi:account"></span> User - [user panel](#user-panel).
- [Workspaces][1]

  - <span class='iconify-inline' data-icon='mdi:plus'></span> - button to create a new workspace
  - List of tiles of available [workspaces][1].

    > Navigate to a workspace by clicking on the corresponding tile.

- Workspace Invitations

  - List of tiles for workspace invitations (only if there is an invitation).

- Projects

  - <span class="iconify-inline" data-icon="mdi:star"></span> - button to display favorite projects
  - List of tiles of available [projects][2], sorted by the time of last access.

    > Navigate to a project by clicking on the corresponding tile. Projects in which the current user is directly included are displayed.

## Workspace Tile Structure

- Image
- <span class="iconify-inline" data-icon="mdi:delete"></span> - button to delete the workspace
- Name
- Description
- Owner/Member - [user role][3]

![Workspace](/images/common/dashboard_workspace_panel.png)

## Project Tile Structure

- Image
- <span class="iconify-inline" data-icon="mdi:star"></span> - button to add the project to favorites
- <span class='iconify-inline' data-icon='ph:number-square-two-fill' style="color: green"></span> - total number of <span class="iconify-inline" data-icon="mdi:star"></span> for the project
- <span class="iconify-inline" data-icon="mdi:delete"></span> - button to delete the project
- Name
- Description
- <span class="iconify-inline" data-icon="mdi:sitemap"></span> - link to open the project graph editor (Graph)
- <span class="iconify-inline" data-icon="mdi:shield-account"></span> - link to open the project permissions editor (Permissions)
- <span class="iconify-inline" data-icon="mdi:shield-key"></span> - link to open the project API keys editor (API Keys)

![Project](/images/common/dashboard_project_panel.png)

## User Panel

### Structure

The user panel displays:

- Avatar
- List of linked external registrations (if any)
- Full name
- <span class="iconify-inline" data-icon="mdi:at"></span> - username
- <span class="iconify-inline" data-icon="mdi:email"></span> - email
- <span class="iconify-inline" data-icon="mdi:link"></span> - website/user page
- <span class='iconify-inline' data-icon='mdi:wallet'></span> Balance - account [balance][1]

  Clicking opens the [user balance](#balance) window.

- User description
- Last connection time
- "EDIT" button
- "CHANGE PASSWORD" button

Clicking the **EDIT** button will switch the panel to [edit mode](#editing).

Clicking the **CHANGE PASSWORD** button will open the [change password](#change-password) panel.

### Editing

Structure:

- Avatar
  - <span class="iconify-inline" data-icon="mdi:pencil"/> - button to upload an avatar image
  - <span class="iconify-inline" data-icon="mdi:account-cog"/> - button to generate a random avatar
  - <span class="iconify-inline" data-icon="mdi:delete"/> - button to delete the avatar image

- Buttons to add external authentication sources
  ![Oauthlist](/images/common/oauth_list.png)

- List of linked external registrations (if any)
  - External source icon
  - External email
  - <span class="iconify-inline" data-icon="mdi:close-circle"></span> button to delete the link

- Username
- Full name
- Email - email address
- <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> Show email in profile - toggles the display of email in the [gallery][6] in the **USERS** section.
- Website - user's website
- Locale - user's language
- Time zone - user's time zone
- Dark theme - toggle dark theme
- Telegram notifications - toggle Telegram integration.
- Editor - user description input editor
- "SAVE" button
- "CANCEL" button

![User edit](/images/common/dashboard_user_edit.png)

### Change Password

You need to enter the current and new passwords.

![User password edit](/images/common/dashboard_user_password.png)


## Balance

The balance window displays the [account][4] balance and a list of [transactions][5] for depositing and withdrawing funds.

![User balance](/images/common/dashboard_user_balance.png)

Structure:

- Description Panel

  - Avatar
  - Name
  - Name-link - name of the workspace from which the balance page was accessed
  - <span class='iconify-inline' data-icon='mdi:wallet'></span> Balance - account balance

- Transactions Panel
  - Toolbar
    - Period <span class='iconify-inline' data-icon='mdi:calendar-range'></span> - displayed period
    - <span class='iconify-inline' data-icon='mdi:refresh'></span> - button to refresh the list
  - Transactions Table
    - Created - transaction date
    - Purpose - type of transaction
    - Counterparty - transaction counterparty
    - Amount - transaction amount
  - Navigation Panel

[1]: /desc/finance.md#accounts
[2]: /desc/finance.md#transactions
[3]: /desc/workspace.md#members
[4]: ./workspace.md
[5]: ./project.md
[6]: ./explorer.md
