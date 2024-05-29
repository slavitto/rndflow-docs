# Project Roles

**Role** - A set of permissions for managing a project.

![Resources](/images/common/permissions_roles.png)

## Panel Structure

- List of existing role [tiles](#role-tile)
- <span class="iconify-inline" data-icon="mdi:account-alert"/> Requests to access a paid role

## Role Tile

![Resources](/images/common/permissions_role_panel.png)

1. Editable name
2. Editable description
3. Cost coefficient - editable cost coefficient
4. <span class="iconify-inline" data-icon="mdi:shield-edit"></span> "PERMISSIONS" - managing [permissions](#permission-types)
5. <span class="iconify-inline" data-icon="mdi:eye"></span> - public access toggle
6. <span class="iconify-inline" data-icon="mdi:currency-usd"></span> - paid access toggle
7. <span class="iconify-inline" data-icon="mdi:delete"></span> - delete role button

## Permission Management Dialog

Setting the required [permission types](#permission-types) for access to the project, individual nodes, and interfaces.

Tabs:

- <span class="iconify-inline" data-icon="mdi:view-module"/> Nodes - managing permissions for nodes
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"/> Interfaces - managing permissions for interfaces

**Nodes** tab:

![Set permissions](/images/common/permissions_role_set_permissions.png)

- <span class="iconify-inline" data-icon="mdi:magnify"/> Search - search/filter panel
- <span class="iconify-inline" data-icon="mdi:sitemap"/> Project - project-level permissions
- List of nodes with permissions

Permission input panel structure:

- List of set permissions
- <span class="iconify-inline" data-icon="mdi:code-tags-check"></span> - add/remove permissions by sub-types button
- <span class="iconify-inline" data-icon="mdi:check-all"></span> - add all possible permissions button
- <span class="iconify-inline" data-icon="mdi:close-circle"></span> - remove all set permissions button
- <span class="iconify-inline" data-icon="mdi:menu-down"></span> - permission selection menu

**Interfaces** tab:

![Set permissions](/images/common/permissions_role_set_permissions_interface.png)

- <span class="iconify-inline" data-icon="mdi:magnify"/> Search - search/filter panel
- <span class="iconify-inline" data-icon="mdi:sitemap"/> Project - project-level permissions
- List of interfaces with permissions
  > Interfaces [hidden from the project management panel][3] are displayed in light gray.

Permission input panel structure:

- List of set permissions
- <span class="iconify-inline" data-icon="mdi:code-tags-check"></span> - add/remove permissions for all interfaces button
- <span class="iconify-inline" data-icon="mdi:check-all"></span> - add all possible permissions button
- <span class="iconify-inline" data-icon="mdi:close-circle"></span> - remove all set permissions button
- <span class="iconify-inline" data-icon="mdi:menu-down"></span> - permission selection menu

## Role Types

- Regular
- Public - role available to everyone, including unauthorized users

  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
  Unauthorized users in this case only have read access regardless of role permissions.
  :::

- Paid - role providing access to the project on a paid basis

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  When a project is created, an **owner** role with full project rights is automatically created. This role is automatically assigned to the user who created the project.
  :::

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  After a user obtains a paid role, a new [data layer][1] is automatically created for them in the project.
  :::

## Permission Types

### General Information

- There are three levels of permissions: project level, node level, and interface level.
- Permissions are granted or revoked using the role management dialog.
- Depending on the permissions a user has, they will have access to certain elements and functions.

### Project Level Permissions

**Project**

- `project_view`: Allows access to the project.
- `project_edit`: Allows editing project properties, project activity, and removing project executors.
- `project_manage`: Allows deleting the project, managing roles, users, secrets, API, and access to the balance.

**Graph**

- `graph_ui`: Provides access to all information about the graph structure and allows access to the [graphical interface][2].
- `graph_view`: Provides access to authorized information about the graph structure.
    > Any rights to the code or packages of the corresponding node are required. Rights to a connection are determined by the rights to both of its nodes.
- `graph_edit`: Allows creating new graph elements and editing the authorized graph structure.
    > `code_edit` rights are required for the corresponding node. For a connection, `code_edit` rights must be present for both nodes.

**Code**

- `code_edit`: Allows editing the code of all nodes.
- `code_view`: Allows viewing the code of all nodes.

**Interface**

- `interface_manage`: Allows managing authorized interfaces and creating new interfaces.

**Packages**

- `package_view`: Allows viewing packages in all nodes.
- `package_create`: Allows creating packages in all nodes, as well as setting container startup parameters (except for the container image and startup script).
- `package_delete`: Allows deleting packages in all nodes.

### Node Level Permissions

**Code**

- `code_edit`: Allows editing the code, secrets, and other parameters of the node.
- `code_view`: Allows viewing the code and secrets.

**Packages**

- `package_create`: Allows creating packages, as well as setting container startup parameters (except for the container image and startup script).
- `package_delete`: Allows deleting packages.
- `package_view`: Allows viewing packages.

### Interface Level Permissions

- `view`: Allows access to the interface.
- `edit`: Allows editing the interface.
- `delete`: Allows deleting the interface.

**Node Tab Access**

The following permissions are required for a node to have access to specific tabs:

- **Parameters Tab** [4]: `package_create`
- **Container Tab** [5]: `code_view`, `code_edit`, or `package_create`
- **Packages Tab** [6]: `package_view`
- **Jobs Tab** [7]: `package_create` and `package_view`
- **Files Tab** [8]: `code_view`
- **Request Tab** [9]: `code_view`

**Management of Other Features**

**Node**

- Access to the node notification dialog: `package_create` and `package_view` for the node.
- Creation: `graph_edit`, `code_edit` at the project level.
- Insertion: `graph_edit`, `code_edit` at the project level.
- Deletion: `graph_edit`, `code_edit`, and `package_delete` at the project or node level.
- Activation: `graph_edit`, `package_create`
- Executor information: `package_create` or `code_view`.

**Connections Between Nodes**

- Creation: `graph_edit`, `code_edit` for each of the nodes.
- Deletion: `graph_edit`, `code_edit` for each of the nodes.

**Data Layer**

- Creation: `package_create` at the project level.
- Deletion: `package_delete` at the project level.

**Project Import**

- `graph_edit`, `interface_manage`, `code_edit` at the project level.

**Project Export**

- `graph_ui` and `code_view` or `code_edit` at the project level.

**Access to Git Page**

- `project_edit`, `graph_ui`, `graph_edit`, `interface_manage`, `code_edit` at the project level.

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
There are no restrictions for [workspace owners][10].
:::

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
If the user who created the interface is not an administrator or workspace owner, then all roles to which the user belongs will be given full rights to that interface.
:::


[1]: ./project.md#слои-данных
[2]: ./project.md#граф
[3]: ./interface.md#плитка-интерфеиса
[4]: ./nodes.md#параметры
[5]: ./nodes.md#контеинер
[6]: ./nodes.md#пакеты
[7]: ./nodes.md#задания
[8]: ./nodes.md#фаилы
[9]: ./nodes.md#запрос
[10]: ./workspace.html#участники


