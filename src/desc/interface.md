# Project Interface

**Interface** - a graphical user interface for project management, designed to give users the ability to manage the project without directly interacting with the project graph.

The interface consists of a collection of visual [widgets](#types-of-widgets).

To use the interface:

- Select the desired interface directly from the list in the [project management panel][4].

  or

- Click on the tile of the corresponding interface in the <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span>**Interfaces** section in the [project management panel][4].

The displayed interface is ready for use.

![Interface](/images/common/interface.png)

## Interface Tile

Tiles of available interfaces are displayed in the <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span>**Interfaces** section in the [project management panel][4].

![Interface panel](/images/common/interface_panel.png)

1. Current logo - clicking on it opens the selected interface.
2. Editable interface icon, with which the interface is displayed in the [project management panel][4].
3. Editable name
4. Editable description
5. <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Visibility switch - allows you to remove the interface from the project management panel
6. <span class="iconify-inline" data-icon="mdi:image"></span> SELECT LOGO - change the logo
7. <span class="iconify-inline" data-icon="mdi:delete"></span> Delete the interface
8. <span class="iconify-inline" data-icon="mdi:view-dashboard"></span> [Interface Editor](#editor)

## Types of Widgets

- **Text** - displays simple text.

- **Markdown** - displays text in [Markdown][1] format. [Markdown examples][2]

- **Package Upload** - creates/uploads a package to the selected project node.

  Also allows setting necessary [node parameters][5] if available.

- **Package File** - displays one of the files from the latest package in the specified node.

- **Progress** - displays project progress as a sequence of steps.

- **Nested Interface** - displays the selected interface in a nested widget.

- **Node Parameters** - displays and sets [node parameters][5] if available.

- **Node Packages** - displays and manages packages of the selected node.

- **Tabs** - displays selected interfaces in separate tabs.

- **Node Manager in Hierarchical Tree View** - displays and manages selected nodes in a tree view.

## Editor

### Description

- To switch to edit mode, click the button in the lower right corner of the screen <span class="iconify-inline" data-icon="mdi:view-dashboard-edit" style="color: white; background-color: red"></span>.

- To exit edit mode, click the button in the lower right corner of the screen <span class="iconify-inline" data-icon="mdi:eye" style="color: white; background-color: red"></span>.

![Interface edit mode](/images/common/interface_edit.png)

Structure:

![Interface edit mode](/images/common/interface_edit_small.png)

1. Editable icon, with which the interface is displayed in the [project management panel][4].
2. Editable name
3. <span class="iconify-inline" data-icon="mdi:view-grid-plus"></span> Button to add a new widget.
4. Added widget

Each added widget consists of:

5. <span class='iconify-inline' data-icon='mdi:drag'></span> Button to move the widget across the screen.
6. Name
7. Name of the [type](#types-of-widgets)
8. <span class="iconify-inline" data-icon="mdi:pencil"></span> Button to edit the widget
9. <span class="iconify-inline" data-icon="mdi:delete"></span> Button to delete the widget
10. <span class="iconify-inline" data-icon="mdi:help-circle"></span> Optional help button for the widget
11. Widget body displaying all its components.

### Adding a Widget

- Click the button <span class="iconify-inline" data-icon="mdi:view-grid-plus"></span> to add a widget.

- Enter the widget name.

  ![Widget add](/images/common/interface_edit_add_widget.png)

- Go to the **SETTINGS** tab and after selecting the [type](#types-of-widgets) of the widget, set the [settings for the selected type](#widget-settings).

  ![Widget set params](/images/common/interface_edit_add_widget_params.png)

- Go to the **HELP** tab and set:

  - Help icon position
  - Informational description of the widget's purpose or usage

  ![Widget set help](/images/common/interface_edit_add_widget_help.png)

- Go to the **WIDTH** tab and set the widget width for different screen sizes.

  ![Widget set width](/images/common/interface_edit_add_widget_width.png)

### Widget Settings

- **Text**

  The displayed text is entered in the header field of the [tab][3] **GENERAL**.

- **Markdown**

  The text in [Markdown][1] format is entered in the [tab][3] **SETTINGS** in:

  - Markdown - text input editor with **PREVIEW**

- **Package Upload**

  To configure in the [tab][3] **SETTINGS**, specify:

  - Node - node input field where the package is uploaded <span class="iconify-inline" data-icon="mdi:magnify"></span>
  - <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Allow or disallow attaching files - switch to enable/disable attaching files to the package.

- **Package File**

  To configure in the [tab][3] **SETTINGS**, specify:

  - Node - node input field from which the package will be displayed <span class="iconify-inline" data-icon="mdi:magnify"></span>.
  - File name template - template for selecting the file, should use [JavaScript regular expression syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

- **Progress** - displays project progress as a sequence of steps.

  To configure in the [tab][3] **SETTINGS**, specify:

  - Steps <span class="iconify-inline" data-icon="mdi:add"></span> - add the next step (stage) of progress.

    After clicking, a window opens to fill in the step parameters:

    - Step icon from the [material design icons](https://icon-sets.iconify.design/mdi/) library
    - Step name
    - Node <span class="iconify-inline" data-icon="mdi:magnify"></span> - add the node to which the step execution is linked.

      Tracks the appearance of a new package in the specified node.

    - Step description

  - <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Vertical - switch for widget placement: horizontal or vertical
  - Editable table with added steps and the ability to move the order of steps <span class="iconify-inline" data-icon="mdi:drag"></span>.

- **Nested Interface**

  To configure in the [tab][3] **SETTINGS**, specify:

  - Dropdown list <span class="iconify-inline" data-icon="mdi:menu-down"></span> with available interfaces.

- **Node Parameters**

  To configure in the [tab][3] **SETTINGS**, specify:

  - Node - node input field whose parameters need to be displayed.

- **Node Packages**

  To configure in the [tab][3] **SETTINGS**, specify:

  - Node - node input field whose packages need to be displayed <span class="iconify-inline" data-icon="mdi:magnify"></span>
  - <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Ignore master package - switch to enable/disable showing all packages or only the current master package.

- **Tabs**

  To configure in the [tab][3] **SETTINGS**, specify:

  - Dropdown list <span class="iconify-inline" data-icon="mdi:menu-down"></span> with available interfaces.

- **Node Manager in Hierarchical Tree View**

  To configure in the [tab][3] **SETTINGS**, specify:

  - Levels <span class="iconify-inline" data-icon="mdi:add"></span> - add a tree level.

    After clicking, a window opens to fill in the level parameters:

    - Level icon from the [material design icons](https://icon-sets.iconify.design/mdi/) library
    - Level name
    - Node filter - [regular expression](https://en.wikipedia.org/wiki/Regular_expression) for selecting level nodes, applied to the node name. After entering the expression, the corresponding nodes are displayed below.
      > Examples: abc or abc|cba or ^abc$
    - Level description

  - Table with the list of set levels with the ability to edit.

### Description of Working with Widgets

- **Node Manager in Hierarchical Tree View**

  The node manager consists of:
  - Toolbar
    - Button <span class="iconify-inline" data-icon="mdi: arrow-expand-up"></span> to expand all levels of the table
  - Tree
    - Tree levels

  A tree level consists of:
  - Level icon
  - Button <span class="iconify-inline" data-icon="mdi:menu"/> to open the level management menu
  - Node 
    > Along with the node, the following can be displayed:
      >- Top green label

    > Along with the node, the following can be displayed:
  >- Top green label <span class='iconify-inline' data-icon='ph:number-square-one-fill' style="color: green"></span> - informs about the number of packages in the node.
  >- Top red label <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> - informs about tasks with errors.
  >- Bottom green label <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"></span> - informs about the number of running tasks.
- Management panel opened by the button <span class="iconify-inline" data-icon="mdi:menu"/> for level and node management

Node management panel commands:
- Button <span class="iconify-inline" data-icon="mdi:eye-outline"/> - open the [management panel][6] of the corresponding node
- Button <span class="iconify-inline" data-icon="mdi:link-variant"/> - open the [link properties panel][7] between this node and the upper-level node (absent for upper-level nodes)
- Button <span class="iconify-inline" data-icon="mdi:plus-circle-outline"/> - add a link between the current level node and the lower-level node from the dropdown list (absent for the last level nodes)
- Button <span class="iconify-inline" data-icon="mdi:minus-circle-outline"/> - remove the link between the current node and the upper-level node (absent for upper-level nodes)
- Node activity toggle <span class="iconify-inline" data-icon="bi:toggle2-off"></span>


[1]: https://daringfireball.net/projects/markdown/
[2]: https://quasarframework.github.io/quasar-ui-qmarkdown/examples
[3]: #adding-a-widget
[4]: ./project.md#project-management-panel
[5]: /desc/node_params.md
[6]: /desc/nodes.html#node-panels
[7]: /desc/links.html#properties
