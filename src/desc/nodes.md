# Nodes

**Node** - a separate block of the graph representing a stage (operation) of the implemented algorithm.

## Status

A node in the current [data layer][1] can be in the following states:

- <span class="iconify-inline" data-icon="bi:toggle2-on" style="color: green"/> Active

- <span class="iconify-inline" data-icon="bi:toggle2-off"/> Disabled

In the active state, all incoming packets to the node are automatically processed ([tasks][5] are created).

## Types and Composition of Nodes

### Compute Node

<span class="iconify-inline" data-icon="mdi:kubernetes"/> **Compute Node** - a set of executable programs ([scripts](/dev/compute.md#compute-node-code)) and their parameters implementing the functionality specified by the user.

![Compute node](/images/common/node_compute.png)

Node composition:

- <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 10px;"/> Input
- Header
  - <span class="iconify-inline" data-icon="mdi:kubernetes"/> Node type icon
  - Node name: _compute_
  - <span class="iconify-inline" data-icon="mdi:bell-plus-outline"/> Button to open the node [notification](#node-notifications) management dialog
  - <span class="iconify-inline" data-icon="mdi:delete"/> Node deletion button
- Buttons for accessing the corresponding tabs of the node panel

  - <span class="iconify-inline" data-icon="mdi:card-text"> </span> [Description](#description)
  - <span class="iconify-inline" data-icon="mdi:tune"/> [Parameters](#parameters)
  - <span class="iconify-inline" data-icon="mdi:kubernetes"/> [Container](#container)
  - <span class="iconify-inline" data-icon="mdi:file-code"/> [Files](#files)
  - <span class="iconify-inline" data-icon="mdi:package"/> [Packages](#packages)
  - <span class="iconify-inline" data-icon="mdi:cog-box"/> [Jobs](#jobs)
  - <span class="iconify-inline" data-icon="mdi:alert-circle"/> [Failed jobs](#jobs) (if any)

- <span class="iconify-inline" data-icon="bi:toggle2-off"/> Node activity switch in the current [data layer][1]
- Node description: _Compute node description_
- <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"/> One or more outputs

### SQL Node

<span class="iconify-inline" data-icon="mdi:database"/> **SQL Node** (Query) - [SQL query](/dev/sql.md#sql-node-query) implementing the selection and processing of incoming packets. Unlike the compute node, it allows operating on the data of all packets incoming to it.

![Query node](/images/common/node_query.png)

The general composition is similar to the [compute node view](#compute-node). However, access is provided only to the following tabs of the node panel:

- Buttons for accessing the corresponding node properties
  - <span class="iconify-inline" data-icon="mdi:card-text"/> [Description](#description)
  - <span class="iconify-inline" data-icon="mdi:tune"/> [Parameters](#parameters)
  - <span class="iconify-inline" data-icon="mdi:database"/> [Query](#query)
  - <span class="iconify-inline" data-icon="mdi:package"/> [Packages](#packages)

### Data Node

<span class="iconify-inline" data-icon="mdi:download-circle"/> **Data Node** - an intermediate stage of storing data in the form of a FIFO queue.

![Data node](/images/common/node_data.png)

The general composition is similar to the [compute node view](#compute-node). However, access is provided only to the following tabs of the node panel:

- Buttons for accessing the corresponding node properties
  - <span class="iconify-inline" data-icon="mdi:card-text"/> [Description](#description)
  - <span class="iconify-inline" data-icon="mdi:tune"/> [Parameters](#parameters)
  - <span class="iconify-inline" data-icon="mdi:package"/> [Packages](#packages)

### Group

<span class="iconify-inline" data-icon="mdi:group"/> **Group** - a set of nodes.

![Group](/images/common/group.png)

The general composition is similar to the [compute node view](#compute-node). However, access is provided only to the following node properties:

- Buttons for accessing the corresponding node properties
  - <span class="iconify-inline" data-icon="mdi:card-text"/> Description
  - <span class="iconify-inline" data-icon="mdi:location-enter"/> Go inside the group

## Node Notifications

Node notifications are intended for sending notifications to subscribed users about events that occurred in the node with objects (tasks) created by the user.

The node notifications window provides:

- Button <span class="iconify-inline" color="teal" data-icon="mdi:email-outline"/> or <span class="iconify-inline" color="blue" data-icon="mdi:send-circle-outline"/> - select the notification method (email <span class="iconify-inline" color="teal" data-icon="mdi:email-outline"/> or Telegram <span class="iconify-inline" color="blue" data-icon="mdi:send-circle-outline"/>).
  > To use Telegram notifications, the platform instance must support this notification method,
    and the Telegram integration switch must be enabled in the [user settings][9].
- <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"/> Notifications enabled/disabled - toggle to enable/disable notifications.
- <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"/> - toggles to enable/disable individual types of notifications.

Types of notifications:
- Task completed - task successfully completed.
- All tasks completed - all tasks completed (both successfully and with errors).
  > Task checking is performed only in the current node, so false-positive notifications are possible.
- Task failed - completed with an error.

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"/>
 Due to the presence of [limitations](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this), Telegram may limit the number of notifications sent to a user if there are a large number of them.
 :::

## Node Panels

Node panel - a panel for setting various node parameters and properties.

![Node panels](/images/common/node_panels.png)

General control buttons:

- <span class="iconify-inline" data-icon="mdi:dock-right"/> Change the panel location (at the bottom or right side of the screen)
- <span class="iconify-inline" data-icon="mdi:fullscreen"/> Open the panel in full screen
- <span class="iconify-inline" data-icon="mdi:close"/> Close the panel

### Description

**Node Description** - the name, text description of the purpose, and [specification](#specification) of the node.

![Node description](/images/common/node_panel_desc.png)

Structure:

- Node name
- Node description
- Node [specification](#specification)
- "EDIT" button

When clicking the **EDIT** button, the window switches to the description and node header editing mode:

![Node edit description ](/images/common/node_panel_desc_edit.png)

### Specification

**Node Specification** - an optional description of the composition of input and output packets of the node.

It serves two functions:

- Informational - to present the format, composition, and purpose of the packet variables.
- Service - to enable packet filtering for input to the node.

Structure:

- Input - input variables of the node

  - General commands
    - <span class="iconify-inline" data-icon="mdi:content-copy"/> Copy all variables
    - <span class="iconify-inline" data-icon="mdi:content-paste"/> Paste previously copied variables
    - <span class="iconify-inline" data-icon="mdi:auto-fix"/> Automatic variable insertion based on packages
    - <span class="iconify-inline" data-icon="mdi:plus"/> Add variable
  - List of variables

    Structure of each list item:

    - Variable type <span class="iconify-inline" data-icon="mdi:code-json"/> [Field][3] or <span class="iconify-inline" data-icon="mdi:file"/> [File][3] or <span class="iconify-inline" data-icon="mdi:package"/> [Nested packages][3] with the ability to change it by clicking on it
    - Variable name with the ability to rename by clicking on it
    - Variable description with the ability to rename by clicking on it
    - <span class="iconify-inline" data-icon="mdi:content-copy"/> Copy variable
    - <span class="iconify-inline" data-icon="mdi:delete"/> Delete variable

- Output - node output variables similar to input variables.

![Node desc](/images/common/node_panel_spec.png)

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
It is possible to [copy node parameters][2] to the node's input specification.
:::

### Parameters

<span class="iconify-inline" data-icon="mdi:tune"/> **Node Parameters** (Parameters) - parameters that control the execution of the node, passed to the node's script.

![Node params](/images/common/node_panel_params.png)

Detailed [description](./node_params.md).

### Container

**Execution Environment. Container** - Docker image based on which the container for executing the node's software modules in a specific task will be created.

![Node container](/images/common/node_panel_container.png)

Structure:

- Docker image - the name of the docker image and the list of workspace [docker images][7].

  ![Docker images list](/images/common/node_panel_container_dockerslist.png)

  The required docker image can be selected from the list or entered manually (in the latter case, you need to finish typing by pressing **Enter**).

- <span class="iconify-inline" data-icon="mdi:all-inclusive" style="color: red"/> - Loading, node docker image loading policy.

  Types:
  - <span class="iconify-inline" data-icon="mdi:all-inclusive" style="color: red"/> - Always, load the docker image if it has changed, otherwise use the local version.

  - <span class="iconify-inline" data-icon="mdi:repeat-once" style="color: blue"/> - If not present, load the docker image if it is not on the node.

  - <span class="iconify-inline" data-icon="mdi:download-off-outline" style="color: orange"/> - Never, do not load the docker image from an external repository. Use only the local version.

  - <span class="iconify-inline" data-icon="mdi:robot-outline" style="color: blue"/> - Executor, use the default value of the [executor][10].

  The icon <span class="iconify-inline" data-icon="mdi:lock"/> appears if a [secret][11] of the type ["Image Pull Secrets"][12] is connected to the node, i.e., if a connection to a private Docker registry is required.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
  All policies, except for the "Executor" type, correspond to the standard [Kubernetes policies](https://kubernetes.io/concepts/containers/images/#image-pull-policy).
  :::

  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"/>
  The recommended default policy is "If not present". Temporary switching to the "Always" policy is necessary when updating the used image (the image is updated only on the node where the task with the specified policy is executed).

  Constant use of the "Always" policy without an intermediate caching proxy may exceed access limits to the storage registry (limits are defined by the registry itself, for example, [Dockerhub](https://hub.docker.com/) sets the following [limits](https://docs.docker.com/docker-hub/download-rate-limit/)).
  :::

- <span class="iconify-inline" data-icon="mdi:speedometer-medium" style="color: orange"/> - Priority, task execution priority.

  Types:

  - <span class="iconify-inline" data-icon="mdi:speedometer-slow" style="color: red"/> - low
  - <span class="iconify-inline" data-icon="mdi:speedometer-medium" style="color: orange"/> - normal
  - <span class="iconify-inline" data-icon="mdi:speedometer" style="color: green"/> - high

- <span class="iconify-inline" data-icon="mdi:server-plus" style="color: green"/> - [Compute Server][10], individual calculation server (executor) of the node.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>

  After selecting the compute server, the button is replaced with the icon of the corresponding compute server, and a mark <span class='iconify-inline' data-icon='mdi:circle' style='color: green'/> appears on the node panel above <span class='iconify-inline' data-icon='mdi:kubernetes'/> :

  ![Compute node with executor](/images/common/node_compute_executor.png)

  :::

- Script - the initially launched software module or node script (see [Files](#files)).
  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
  The launch must comply with the launch rules in the Linux OS shell environment.

  > For example:
  >
  > ```:no-line-numbers
  > ./run.py
  > ```
  >
  > or
  >
  > ```:no-line-numbers
  > bash run.sh
  > ```
  >
  > or
  >
  > ```:no-line-numbers
  > python script.py
  > ```

- Requirements - requested computational resources for launching the docker container.
  - Memory - requested RAM
  - CPU cores - requested number of central processor cores
  - GPUs - requested number of graphics processors (video cards)
  - Time limit (minutes) - maximum task execution time in minutes
- Job parallelization - limitation of the maximum number of concurrently running jobs (a job is considered running if it has been submitted for execution to the Kubernetes cluster).


### Files

**File** - a program module, script, or library intended to be executed in the node.

In the node, the **Files** tab displays a list of files.
Structure:

- List of files

  Structure of each list item:

  - File type icon
  - <span class="iconify-inline" data-icon="mdi:content-save-alert" style="color: red"/> Unsaved changes icon
  - File name with the ability to rename the file by clicking on it
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise" style="color: green"/> Set file property: executable
  - <span class="iconify-inline" data-icon="mdi:hexadecimal"/> Set file property: binary
  - <span class="iconify-inline" data-icon="mdi:delete"/> Delete file

- File editor

  - File name
  - Toolbar

    - <span class="iconify-inline" data-icon="mdi:format-font-size-decrease"/> Decrease font size
    - <span style="background-color: green; color: white">Current font size</span>
    - <span class="iconify-inline" data-icon="mdi:format-font-size-increase"/> Increase font size
    - <span class="iconify-inline" data-icon="mdi:wrap"/> Toggle word wrap
    - <span class="iconify-inline" data-icon="mdi:vimeo"/> Enable VIM mode
    - <span class="iconify-inline" data-icon="mdi:fullscreen"/> Open full screen

  - Button to open the [file change history](#история-изменения): <span style="color: green; border: 1px solid green"> author / last modification time </span>.

- "SAVE" button - to save file changes
- <span class="iconify-inline" data-icon="mdi:file-plus"/> Button to create a new file
- <span class="iconify-inline" data-icon="mdi:file-upload"/> Button to upload a new file

![Node file](/images/common/node_panel_file.png)

### Packages

In the <span class='iconify-inline' data-icon='mdi:package'/> **Packages** tab, a list of the node's [packages][4] within the selected [data layer][1] is displayed:

![Node package](/images/common/node_panel_packages.png)

#### Toolbar

- <span class="iconify-inline" data-icon="mdi:package-up"/> Upload/Create package
- <span class="iconify-inline" data-icon="mdi:download"/> Download selected packages
- <span class="iconify-inline" data-icon="mdi:cog-clockwise"/> Process selected packages
- <span class="iconify-inline" data-icon="mdi:refresh-auto"/> Restart all packages
- <span class="iconify-inline" data-icon="mdi:update"/> Use selected packages to run [initiator tasks][8] (scheduled tasks)
- <span class="iconify-inline" data-icon="mdi:motion-play"/> Process selected tasks in interactive mode
- <span class="iconify-inline" data-icon="mdi:pin"/>/<span class="iconify-inline" data-icon="mdi:pin-off" style="color: red"/> Select/Unselect master package of the data layer
- <span class="iconify-inline" data-icon="mdi:content-copy"/> Copy selected packages between nodes and projects
- <span class="iconify-inline" data-icon="mdi:content-paste"/> Paste previously copied packages

  > When pasting packages from another project, you must first refresh the target project by pressing **F5**. After pasting, you may need to update the package list by clicking the <span class="iconify-inline" data-icon="mdi:refresh"/> button.

- <span class="iconify-inline" data-icon="mdi:refresh"/> Refresh package list

  > May additionally contain two types of labels:

  > - Upper green label <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"/> - indicates a change in the number of packages in the node.
  > - Lower orange label <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: orange"/> - indicates a change in the number of tasks for some packages in the list.

- <span class="iconify-inline" data-icon="mdi:delete"/> Delete selected packages

- <span class="iconify-inline" data-icon="mdi:delete-sweep"/> Delete all packages

- <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle-outline"/> [Filter by task count](#фильтр-по-количеству-задании)

- <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle"/> [Filter by input specification](#фильтр-по-спецификации)

- <span class="iconify-inline" data-icon="mdi:chart-scatter-plot"/> [Joint view of selected packages](#окно-просмотра-пакетов)

- <span class="iconify-inline" data-icon="mdi:chart-scatter-plot"/> [Package viewing window](#окно-просмотра-пакетов)

- <span class="iconify-inline" data-icon="mdi:table-column-plus-after"/> Add package variable

  Add a package variable as a new column in the package table.

  List of added variables with the ability to delete <span class='iconify-inline' data-icon='mdi:close'/>.

- <span class="iconify-inline" data-icon="mdi:content-save"/> Save the current set of columns


#### Package Table

- <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"/> - package selection toggle
- Id - package identifier

  Additionally, a label with the number of child tasks may be displayed on the identifier: <span class='iconify-inline' data-icon='ph:number-square-one-fill' style="color: green"/>

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
  To view a specific package in a separate [window](#package-view-window), click on its identifier in the **Id** column.
  :::

- Label - package name
- Created - package creation time
- Owner - user who created the package

#### Task Count Filter

Opens by clicking <span class="iconify-inline" data-icon="mdi:horizontal-circle-outline"/> in the [toolbar](#toolbar).

![Package](/images/common/node_panel_packages_filter.png)

- Activate - filter activation
- Operation Type - select the type of task count check relative to the specified value in the "Task Count" field.
- Task Count

#### Specification Filter

Opens by clicking <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle"/> in the [toolbar](#toolbar). Filters by node input specification.

![Package](/images/common/node_panel_packages_spec_filter.png)

- Activate - filter activation
- Fields - select a variable from the specification to filter by
- Operation Type - choose the check type relative to the value specified in the bottom input field.
- Input Restriction Field

#### Package View Window

Opens by clicking <span class="iconify-inline" data-icon="mdi:chart-scatter-plot"/> in the [toolbar](#toolbar).

Allows viewing files from selected packages simultaneously.

![Package](/images/common/package_panel_compare.png)

- Toolbar

  - <span style="padding: 0 12px; border: #CCC 1px solid; border-radius: 40px;">
      <span class='iconify-inline' data-icon='mdi:view-grid'/> <small style="padding: 4px">1 x 2</small>
    </span> Selection of the display grid size for files

    > To change the grid dimension, click on the column for the corresponding dimension

  - <span class='iconify-inline' data-icon='mdi:file-table-box-multiple-outline'/> Button with file filters list :
    - <span class='iconify-inline' data-icon='mdi:file-table-box-multiple-outline'/> Grouping by parent packages (default)
    - <span class='iconify-inline' data-icon='mdi:not-equal-variant'/> Grouping by unique content
    - <span class='iconify-inline' data-icon='mdi:file-multiple'/> Grouping by file name

  - <span class='iconify-inline' data-icon='mdi:selection-remove'/> Button to close all selected files.

  - File tree with root elements displaying the package identifier in case of grouping by packages, or the file name in case of grouping by files. Contains control elements:
    - <span class="iconify-inline" data-icon="mdi:content-copy"/> Button to display all files with the selected name
    - <span class="iconify-inline" data-icon="mdi:download"/> File download button

  - Grid for displaying selected files


### Query

**Query** - [SQL script](/dev/sql.md#sql-query-node) to generate output packages based on specified conditions. Package-type variables can be used as query parameters.

Structure:

- Default tab "QUERY TEXT"

  - SQL query editor
  - Toolbar

    - <span class="iconify-inline" data-icon="mdi:auto-fix"/> [SQL Master](/dev/sql.md#sql-master)
    - <span class="iconify-inline" data-icon="mdi:help-circle" style="color: black"/> Help
    - <span class="iconify-inline" data-icon="mdi:format-font-size-decrease"/> Decrease Font Size
    - <span style="background-color: green; color: white">Current Font Size</span>
    - <span class="iconify-inline" data-icon="mdi:format-font-size-increase"/> Increase Font Size
    - <span class="iconify-inline" data-icon="mdi:wrap"/> Wrap Text
    - <span class="iconify-inline" data-icon="mdi:vimeo"/> VIM Mode
    - <span class="iconify-inline" data-icon="mdi:fullscreen"/> Open Full Screen

  - Query history change button: <span style="color: green; border: 1px solid green"> author / last modified time </span>

    Show and manage history similar to [file history](#file-history).

  - "SAVE" button - to save changes to the query

  ![Node query panel](/images/common/node_panel_query.png)

- "TEST" tab

  > Displays the result of a test run of the query.

  - Toolbar
    - <span class="iconify-inline" data-icon="mdi:refresh"/> Test query run
    - <span class="iconify-inline" data-icon="bi:toggle2-off"/> Show only new query results
  - Results table
    - Table columns
      - Packets - Identifiers of selected input packets
      - Variables - Variables (fields and files) of the output packet

  ![Node query results panel](/images/common/node_panel_query_test.png)

- "RESULTS" tab

  > Query results passed to the next node.

  - Toolbar
    - <span class="iconify-inline" data-icon="mdi:refresh"/> Refresh list
    - <span class="iconify-inline" data-icon="mdi:delete"/> Delete selected jobs
  - Job list table
    - Table columns
      - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"/> - Job selection switch
      - Input Packets - Identifiers of input packets
      - Output Packets - Identifiers of output packets

  ![Node query results panel](/images/common/node_panel_query_result.png)

### Jobs

The <span class='iconify-inline' data-icon='mdi:cog-box'/> **Jobs** tab displays a list of [jobs][5] for the node within the selected [data layer][1]:

![Node job list](/images/common/node_panel_job.png)

#### Toolbar

- <span class="iconify-inline" data-icon="mdi:download"/> Download selected jobs
- <span class="iconify-inline" data-icon="mdi:cog-clockwise"/> Restart selected jobs
- <span class="iconify-inline" data-icon="mdi:motion-play"/> Restart selected jobs in interactive mode
- <span class="iconify-inline" data-icon="mdi:refresh-auto"/> Restart jobs with the selected [status][6]
- <span class="iconify-inline" data-icon="mdi:play-pause"/> Pause or activate [initiator job][8]
- <span class="iconify-inline" data-icon="mdi:refresh"/> Refresh list

    May contain an additional label:
    - Top green label  <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"/>- informs about the change in the number of jobs in the node.

- <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle-outline"/> Filter jobs by [status][6]

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
  The "Started" <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"/> status additionally includes a toggle switch <span class="iconify-inline" data-icon="mdi:tray-full" style="color: green"/> / <span class="iconify-inline" data-icon="mdi:tray" style="color: green"/>, which allows you to respectively include or exclude from this filter the following sub-statuses: <span class="iconify-inline" data-icon="mdi:progress-download" style="color: teal"/> Downloaded data, <span class="iconify-inline" data-icon="mdi:progress-wrench" style="color: green"/> Completed, <span class="iconify-inline" data-icon="mdi:progress-upload" style="color: teal"/> Uploaded data, <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"/> Formed packages.
  :::

- <span class="iconify-inline" data-icon="mdi:delete"/> Delete selected jobs
- <span class="iconify-inline" data-icon="mdi:delete-sweep"/> Delete jobs with the selected [status][6]
- <span class="iconify-inline" data-icon="mdi:table-column-plus-after"/> Add node parameter

  Add a node parameter as a new column in the job table.

  A list of added parameters with the option to delete them using the <span class='iconify-inline' data-icon='mdi:close'/> button.

- <span class="iconify-inline" data-icon="mdi:content-save"/> Save the set of current columns

## Job Table

- <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"/> - Job selection switch
- Id - Job identifier
- Packages - Identifiers of input packages
- Created - Job initiation time
- Owner - User who created the job
- Priority - Job execution priority
- Status - Current [status][6] of job execution

To open the window for a specific job, click on its identifier in the **Id** column.

## Job View Window

Opens by clicking on the identifier of a specific job in the **Id** column in the [job table](#job-table).

![Node job](/images/common/job.png)

Job composition:

- Toolbar

  - <span class='iconify-inline' data-icon='mdi:open-in-new'/> Open job on a new browser page
    ::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'/>
    Opening a job on a new browser page returns a direct link to the job.
    :::

  - <span class='iconify-inline' data-icon='mdi:fullscreen'/> Open full screen
  - <span class='iconify-inline' data-icon='mdi:close'/> Close

- Job processing status history
- <span class='iconify-inline' data-icon='mdi:package'/> Input packages
- <span class='iconify-inline' data-icon='mdi:package'/> Output packages
- Calculation server
- Job node with the ability to navigate to it
- Container parameters
  - Startup script
  - Requirements - Requested compute resources when running a docker container.
    - Memory - Requested RAM
    - CPU cores - Requested number of CPU cores
    - GPUs - Requested number of GPUs (video cards)
    - Time limit (minutes) - Set maximum job execution time in minutes
- Startup frequency (only for [initiator jobs][8])
- Docker image
- Node parameters at startup
- List of files with a save button <span class='iconify-inline' data-icon='mdi:content-save'/> in [files](#files) of the node
- Selected file display window

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'/>
The job execution process can be controlled using the log file <span class='iconify-inline' data-icon='mdi:file-clock'/> **job_id.log**, which is located in the list of files.
:::

## Change History

Change history is available for each file/request.

To access it, select the desired file/request and click on the button <span style="color: green; border: 1px solid green"> author / last modified time </span>.

The history contains a list of existing versions.

![File history](/images/common/node_panel_file_history.png)

Version composition in history:

- Name
- Save date
- Optional description
- Control buttons

  - <span class='iconify-inline' data-icon='mdi:arrow-left-circle' style="color: green"/> Restore
  - <span class='iconify-inline' data-icon='mdi:tag' style="color: green" /> Set description
  - <span class='iconify-inline' data-icon='mdi:vector-difference' style="color: green" /> Open file version comparison window
  - <span class='iconify-inline' data-icon='mdi:delete' style="color: green"/> Delete

Clicking on a specific version in the history will display it instead of the current file in read-only mode. To exit this mode, close the history window.

File version comparison window

![File history](/images/common/node_panel_file_history_diff.png)

[1]: ./project.md#data-layers
[2]: /desc/node_params.md#parameter-management
[3]: /desc/package.md#composition
[4]: /desc/package.md
[5]: /desc/job.md
[6]: /desc/job.md#statuses
[7]: /desc/docker.md
[8]: /desc/job.md#types
[9]: /desc/dashboard.md#editing
[10]: /desc/executor.md
[11]: /desc/secrets.md
[12]: /desc/secrets.md#secret-
