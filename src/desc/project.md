# Project

## General

**Project** - A specific implementation of an intelligent application or algorithm using the platform's tools.

**Project-service** - A project with authorized access through an open API.

Project composition:

- [Graph](#graph) - A sequence of nodes that implement a specific algorithm.
    - [Nodes](./nodes.md) and [groups](./nodes.md#group)
    - [Packages](./package.md) - Node packages in the selected [data layer][3]
    - [Jobs](./job.md) - Node jobs in the selected [data layer][3]
- [Secrets](./secrets.md) - A set of secrets for use in nodes when they are executed
- [Interfaces](./interface.md) - Graphical interfaces for managing the graph
- [Permissions](#permissions) - A set of access rights
- [API keys](./api_keys.md) - A set of APIs for external access to the project
- [Data layers][3] - A list of data sets
- [S3 server](./s3.md) - An S3 storage connected to the project
- [Executor server](./executor.md) - The main executor server connected to the project
- [Project history][4] - Synchronization of the project with a [Git][5] repository.

## Project management panel

The main project properties are available through the management panel.

<img src="/images/common/project_manage_panel.png" align="right" alt="Project manage panel" style="margin: 5%;">

The panel includes:

- Project image with buttons
    - <span class="iconify-inline" data-icon="mdi:star"></span> - Add to favorite projects
    - <span class="iconify-inline" data-icon="mdi:pencil"></span> - Edit project information
    - <span class="iconify-inline" data-icon="mdi:delete"></span> - Delete project

- Project name
- <span class="iconify-inline" data-icon="mdi:notebook"></span> Name of the parent [workspace](#workspace.md)
- <span class="iconify-inline" data-icon="mdi:folder-network"></span> Name of the used [S3 server](./s3.md)

  Additionally, the total number of project files and their volume are indicated.

---

- <span class="iconify-inline" data-icon="mdi:information"></span> [About the project](#project-description) - Access to the project description window and a list of available interfaces, paid roles, and API keys

- <span class="iconify-inline" data-icon="mdi:wallet"></span> [Balance](#balance) - Access to the project balance window

- Optional list of links to project [interfaces](./interface.md)
- <span class="iconify-inline" data-icon="mdi:sitemap"></span> [Graph](#graph) - graph designer
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span> [Interfaces](./interface.md) - interface designer
- <span class="iconify-inline" data-icon="mdi:eye-off"></span> [Secrets](./secrets.md) - Manage secrets
- <span class="iconify-inline" data-icon="mdi:shield-account"></span> [Permissions](#permissions) - Manage permissions
- <span class="iconify-inline" data-icon="mdi:shield-key"></span> [API keys](./api_keys.md) - Manage API keys

---

- <span class="iconify-inline" data-icon="mdi:power"></span> Project on/off - A switch to enable or disable the transfer of tasks for execution.
- <span class="iconify-inline" data-icon="mdi:server"></span> [Executor server](./executor.md) - The selected main executor server for the project, its description, and status.

---

- <span class="iconify-inline" data-icon="mdi:layers"></span> [Data layer][3] - A list of available data layers and commands for managing them.
- <span class="iconify-inline" data-icon="mdi:power"></span> Data layer on/off - A switch to enable or disable the transfer of tasks of the data layer for execution.
- <span class="iconify-inline" data-icon="mdi:account-eye"></span> Shared layer/Personal layer - [data layer] access type switch[3].

---

- <span class="iconify-inline" data-icon="mdi:git"></span> [Project history][4] - synchronization of the project with a [Git][5] repository.
- <span class="iconify-inline" data-icon="mdi:file-export"></span> Project export - export project as an archive
- <span class="iconify-inline" data-icon="mdi:file-import"></span> Project import - import project from an external archive

<br clear="right"/>

## Project description

The description of a public project is available to users.

Structure:

- Name
- Description
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span> List of interfaces
- <span class="iconify-inline" data-icon="mdi:ticket-account"></span> List of paid roles

  > User can [request][1] access to the project with the specified role.

- <span class="iconify-inline" data-icon="mdi:shield-key"></span> List of [API keys](./api_keys.md)

  > User can [request][2] access to the project using an API key.

## Balance

The project balance window displays a list of raw or grouped by type of input/output of funds [transactions][8].

![Project balance](/images/common/project_balance_raw.png)

Structure:

- Toolbar

  - <span class='iconify-inline' data-icon='mdi:calendar-range'></span> Period
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> Refresh button

- Transaction grouping tabs panel

  - GROUP BY DATE - summary information by dates
  - BY USER - summary information by users
  - BY PROJECT - summary information by the current project
  - BY COUNTERPARTY - summary information by counterparties
  - RAW TRANSACTIONS - all transactions without grouping

- Transaction table for the **RAW TRANSACTIONS** tab
  - Created - date of the transaction
  - Purpose - type of transaction
  - Counterparty - counterparty of the transaction
  - Amount - amount of the transaction
- Navigation panel

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  The project does not have a separate [account][9]. Transaction information is obtained using information about the movement of funds from the workspace account.
:::

## Data layer

**Data layer** (Data layer) is a separate state of the project graph with its own independent set of packages and node parameters. Data layers are designed to isolate individual datasets and their processing parameters within a single project.

Data layer types:

- Shared - accessible to all project users.
- Personal - accessible only to the user who created it.

![Data layer](/images/common/datalayer.png)

Structure

- Name of the current layer
- <span class='iconify-inline' data-icon='mdi:menu-down'></span> List of available layers
- <span class='iconify-inline' data-icon='mdi:pencil'></span> Edit button
- <span class='iconify-inline' data-icon='mdi:delete'></span> Delete button

Automatically created data layers:

- Initial data layer of the project
- Data layer for a new user with a [paid role][6].
- Data layer for a new user with an [API key][7].

## Permissions

The panel allows you to manage project access using:

- [Project roles](#project-roles)
- [Project users](#project-users)

### Project roles

The **ROLES** tab - management of [project roles](/desc/project_role.md)

![Project roles](/images/common/permissions_roles.png)

### Project users

The **USERS** tab - management of [users](/desc/project_user.md)

![Project users](/images/common/permissions_users.png)


## Graph

### Description

**Graph** (Graph) is an integrated sequence of nodes and directed connections between them, where nodes correspond to individual stages or operations of the implemented algorithm, and directed connections determine the direction of data transfer between them (the results of the execution of some nodes are transferred as input data to other nodes).

The graph is managed by a graph designer, which allows you to:

- Create and edit graph structures.
- Create and edit node code.
- Manage graph execution.
- Load and unload data from the graph.

General view of the graph designer:

![Project general view](./images/project/general.png)

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
The graph is common to the entire project and all its users!
:::

### Action panel

![Project action panel](/images/common/project_action_panel.png)

Includes:

- <span class="iconify-inline" data-icon="mdi:magnify"></span> Search for a node by name
- <span class="iconify-inline" data-icon="mdi:pin-off" style="color: red"></span> Optional button to deselect the current [master package](/desc/nodes.md#packages)
- <span class="iconify-inline" data-icon="mdi:content-copy"></span> Copy nodes
- <span class="iconify-inline" data-icon="mdi:image-filter-center-focus"></span> Optional button to zoom in on the selected node/nodes
  > Similar to double-clicking on the selected node.
- <span class="iconify-inline" data-icon="mdi:content-paste"></span> Optional node paste button
  > When pasting a node from another project, you must first update the target project by pressing the **F5** key.

### Node creation panel

The node creation panel is used to add nodes.

<img src="/images/common/project_create_nodes_panel.png" align="right" alt="Node create panel" style="margin: 5%;">

The panel allows you to add:

- <span class="iconify-inline" data-icon="mdi:kubernetes"></span> - calculation node
- <span class="iconify-inline" data-icon="mdi:download-circle"></span> - data node
- <span class="iconify-inline" data-icon="mdi:database"></span> - SQL node
- <span class="iconify-inline" data-icon="mdi:group"></span> - group of nodes
- <span class="iconify-inline" data-icon="mdi:view-gallery-outline"></span> - node from other projects using the [node collection dialog](#node-collection-dialog)

<br clear="right"/>

### Appearance control panel

<img src="./images/project/view_panel.png" align="right" alt="Project view panel" style="margin: 5%;">

The appearance control panel allows you to:

- <span class="iconify-inline" data-icon="mdi:magnify-plus"></span> <span class="iconify-inline" data-icon="mdi:magnify-minus"></span> Zoom in or out on the graph
- <span class="iconify-inline" data-icon="mdi:magnify-scan"></span> Display the graph at the optimal scale (Optimal scale)
- <span class="iconify-inline" data-icon="mdi:auto-fix"></span> Automatically arrange the nodes of the graph (Arrange nodes automatically)

<br clear="right"/>

### Node collection dialog

The node collection dialog allows you to:

- Insert a node from an external project into the current project.
- Insert a node copied from the current project into an external project.

<b>Project selection window</b>

<img src="/images/common/nodes_collections_projects.png">

Composition:

- <span class="iconify-inline" data-icon="mdi:star" color="yellow"/> - toggle search by favorite projects
  > If disabled, the search is performed across all projects available to the user.
- <span class="iconify-inline" data-icon="mdi:magnify"/> - project name input field
  > Searches for any occurrence of the string from the input field in the project name.
- Project list
- Dialog close button

Clicking on one of the projects opens the node selection window.

<b>Node selection window</b>

<img src="/images/common/nodes_collections_nodes.png">

Composition:


- <span class="iconify-inline" data-icon="mdi:magnify"></span> - Search field for the node name
  > Searches for any occurrence of the string from the input field in the node name.
- <span class="iconify-inline" data-icon="mdi:package-variant-minus"></span> - Button to allow copying the node along with its included packages.
- <span class="iconify-inline" data-icon="mdi:arrow-left-circle"></span> - Button to return to the project or node selection window (if currently in a group of nodes)
- <span class="iconify-inline" data-icon="mdi:content-paste"></span> - Optional button to insert nodes copied from the current project into the selected project.
- List of nodes
- Dialog close button

Clicking on a node opens a confirmation window for inserting the node into the current project.
Clicking on a group of nodes opens the list of nodes in that group.


[1]: /instructions/role.md#запрос-платнои-роли
[2]: /instructions/api_keys.md#запрос-ключа
[3]: #слои-данных
[4]: /desc/git.md
[5]: https://git-scm.com/
[6]: /desc/project_role.md
[7]: /desc/api_keys.md
[8]: /desc/finance.md#транзакции
[9]: /desc/finance.md#cчета