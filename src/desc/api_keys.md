# API Keys

## Overview

**API Key** - a unique [jWT](https://jwt.io/) identifier for programmatic access to a project according to the permissions defined in the [role](./project_role.md) assigned to it during creation.

**API Key Template** - a partially formed API key without specifying a specific user. Used for quickly creating an API key upon user request.

![API keys panel](/images/common/api_keys.png)

Panel structure:

- <span class="iconify-inline" data-icon="mdi:key-chain"></span> "API KEYS" section
  - API Key Templates - list of [tile panels](#template-tile) for API key templates
  - <span class="iconify-inline" data-icon="mdi:plus"></span> - button to add a new API key template
  - <span class="iconify-inline" data-icon="mdi:account-alert"></span> Requests - list of requests for API keys.
- <span class="iconify-inline" data-icon="mdi:account-key"></span> ["ISSUED KEYS"](#issued-keys) section

## Template Tile

![API key panel](/images/common/api_keys_panel.png)

1. Editable name
2. Editable description
3. Editable value of the assigned role
4. <span class="iconify-inline" data-icon="mdi:plus"></span> fields - button to add an information field
   ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
   Information fields are imported into the client project as [secrets](./secrets.md) along with the API key and are necessary to provide the key user with information about its main parameters when [using](/instructions/api_keys.md#using-the-key) it.

   It is recommended to add the following information fields:

   - Project ID - the identifier of the current project
   - Input Node ID - the node to which data packets should be sent
   - Output Node ID - the node from which result packets should be retrieved.
   :::
5. Editable information field name
6. Editable information field description
7. Editable information field value
8. <span class="iconify-inline" data-icon="mdi:sitemap"></span> - button to insert the project ID as the field value
9. <span class="iconify-inline" data-icon="mdi:feature-search"></span> - button to insert the ID of the selected node as the field value
10. <span class="iconify-inline" data-icon="mdi:delete"></span> - button to delete the field
11. <span class="iconify-inline" data-icon="mdi:menu-down"></span> - dropdown to select a role
12. <span class="iconify-inline" data-icon="mdi:delete"></span> - button to delete the template

## Key Tile

The key tile, which can be [requested][1] for programmatic access to the project, is located in the <span class="iconify-inline" data-icon="mdi:information"></span>**About Project** section in the <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API Keys** subsection. Each such key corresponds to an [API key template](#template-tile) in the project's API key editor.

The key tile can appear as:

- Permissions for a new key request

  ![API request](/images/common/api_panel_request.png)

- Waiting for key approval

  ![API requested](/images/common/api_panel_wait.png)

- Confirmed key request

  ![API requested](/images/common/api_panel_confirmed.png)

## Issued Keys

The list of issued API keys and their usage statistics are available in the <span class="iconify-inline" data-icon="mdi:account-key"></span> **ISSUED KEYS** section.

![API keys](/images/common/api_billing.png)

Structure:

- Toolbar
  - Period <span class='iconify-inline' data-icon='mdi:calendar-range'></span> - displayed period
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> - button to refresh the list
- List of issued keys
  - API Key - name of the key
  - User - user who received the key
  - Received - date of issuance
  - Requests - number of requests for the selected period 
  - Total - total cost of requests for the selected period
  - <span class='iconify-inline' data-icon='mdi:delete'></span> - button to revoke permission
- Navigation panel

[1]: /instructions/api_keys.md#requesting-a-key
