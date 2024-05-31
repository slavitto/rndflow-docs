# Nodes

## Go to project graph

- [Go](./project.md#opening-project) to [project](/desc/project.md)

- In [project control panel](/desc/project.md#project-control panel) click on <span class="iconify-inline" data-icon="mdi:sitemap"></span>**GRAPH* * and go to [graph designer](/desc/project.md#graph).

## Creating a calculation node

- Open [node creation panel][1].
- Click on the icon <span class="iconify-inline" data-icon="mdi:kubernetes"></span> [calculation node](/desc/nodes.md#calculation-node).
- Place in the required location on the screen and connect to the necessary nodes.
- Rename the node and add a description
 - Go to the [Description](/desc/nodes.md#description) panel by clicking on the <span class="iconify-inline" data-icon="mdi:card-text"></span> icon on the node.
 - Click the **EDIT** button.
 - Enter the required name in the **Name** field.
 - Enter the required description in the **Description** editor.
 - Press the **SAVE** button.
- Create node execution script

 - Go to the [Files][2] panel by clicking on the <span class="iconify-inline" data-icon="mdi:file-code"></span> icon on the node.
 - Add a new file by clicking on the <span class="iconify-inline" data-icon="mdi:file-plus"></span> button and give a name unique to this node. The name must be entered with the file extension (for example, **run.py** ).
 - Click on the line with the file to open the file editor and type the required [code](/dev/compute.md#compute-node-code).
 - Press the **SAVE** button
 - Set the “Executable” property for the file by clicking on the icon <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> next to the file name.

- Set the execution environment

 - Go to the [Container](/desc/nodes.md#container) panel by clicking on the <span class="iconify-inline" data-icon="mdi:kubernetes"></span> icon on the node.
 - In the **Docker image** field, enter the name of the Docker image used. You can use either [standard platform images](/dev/docker.md#standard-docker-images) (for example, **rndflow/job.py**) or [create your own docker image](/dev/docker. md#create-docker-image).
 - In the editor field below, specify the script that should be launched after starting the container. You need to specify the command to launch the file that was added to the <span class="iconify-inline" data-icon="mdi:file-code"></span>[Files][2] panel.

## Create a data node

- Open [node creation panel][1].
- Click on the <span class="iconify-inline" data-icon="mdi:download-circle"></span> [data node](/desc/nodes.md#data node) icon.
- Place in the required location on the screen and connect to the necessary nodes.

## Creating a SQL node

- Open [node creation panel][1].
- Click on the icon <span class="iconify-inline" data-icon="mdi:database"></span> [SQL node](/desc/nodes.md#sql-node).
- Place in the required location on the screen and connect to the necessary nodes.
- Create SQL query
 - Go to the [SQL](/desc/nodes.md#query) panel by clicking on the <span class="iconify-inline" data-icon="mdi:database"></span> icon on the node.
 - In the **REQUEST TEXT** tab, enter the request code.
 - In the **TEST** tab, view the results of a test run of the request.
 - Press the **SAVE** button.

## Creating connections between nodes

- Pull the output <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"></span> of one node to the input <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 10px;"></span> of the second node.

- Release the mouse button after selecting the second node (a red frame appears around the second node)

## Executing a node

See [package processing](./package.md#package processing) in the [Packages](./package.md) section.

## Allocating multiple nodes

- Press and hold the button <span class='iconify-inline' data-icon='vaadin:ctrl'></span>
- Click on the required nodes (each node will be highlighted with a green frame)
- Release the button <span class='iconify-inline' data-icon='vaadin:ctrl'></span>

Dedicated nodes can be simultaneously:

- move around the screen
- copy
- move to groups

## Copying nodes

- Select a node (click on a node) or [multiple nodes] (select-multiple-nodes).
- Click on the <span class="iconify-inline" data-icon="mdi:content-copy"></span> button on the [action panel][3].

 ![Project action panel](/images/common/project_action_panel.png)

 A <span class="iconify-inline" data-icon="mdi:content-paste"></span> button should appear on the [Action Bar][3].

- To copy to the same project, click on the button <span class="iconify-inline" data-icon="mdi:content-paste"></span>

- To copy to another project
 - Open the required project in a new tab, or if the project is already open, then update it using the **F5** button.
 > A <span class="iconify-inline" data-icon="mdi:content-paste"></span> button should appear on the [Action Bar][3].
 - Click on the button <span class="iconify-inline" data-icon="mdi:content-paste"></span>

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Packages are not copied when copying a node!
:::

[1]: /desc/project.md#панель-создания-узлов
[2]: /desc/nodes.md#файлы
[3]: /desc/project.md#панель-деиствии
