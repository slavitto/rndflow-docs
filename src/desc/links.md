# Node Links

**Link** - a connection that facilitates the movement of [packages][1] from the source [node][5] to the destination [node][5].

Management:

- Edit [properties](#properties)

  Click on the link and press the icon <span class='iconify-inline' data-icon='mdi:edit'></span> to open the link properties.

  - Filtering of transmitted packages
  - Renaming package variables

- Deletion

  Click on the link and press the icon <span class='iconify-inline' data-icon='mdi:delete'></span>.

## Types of Links

- Active (Push) - packages are immediately pushed from the source node to the destination node.

  ![Push link](/images/common/link_push.png)

- Passive (Pull) - the latest package from the source node is requested each time a new [job][3] is launched in the destination node.

  ![Pull link](/images/common/link_pull.png)

- Group input - a link connecting the [group][2] input to a node.

  ![Group input link](/images/common/link_group_input.png)

- Group output - a link connecting the [group][2] output to a node.

  ![Group output link](/images/common/link_group_output.png)

If the link renames variables, it appears as follows for active and passive types respectively:

![Link var renamed](/images/common/link_var_renamed.png)
![Link var renamed](/images/common/link_var_renamed_pass.png)

## Properties

Structure:

- Control buttons

  - <span class='iconify-inline' data-icon='mdi:dock-bottom'></span> - change the panel position (bottom or right side of the screen)
  - <span class='iconify-inline' data-icon='mdi:fullscreen'></span> - open the panel in full screen;
  - <span class='iconify-inline' data-icon='mdi:close'></span> - close the panel.

- Tab <span class='iconify-inline' data-icon='mdi:transit-connection-horizontal'></span>**LINK**

  ![Link edit](/images/common/link_edit.png)

  - Link type - change the type of link.
  - <span class='iconify-inline' data-icon='mdi:magnify'></span> Package filter - define which packages will be transmitted through the link.

  Only packages with appropriate labels will be transmitted through this link. The filter is a regular expression using [PostgreSQL dialect](https://www.postgresql.org/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP).

  - **SAVE** button - save the changes.

- Tab <span class='iconify-inline' data-icon='mdi:inbox-arrow-down'></span>**RENAMING**

  This tab allows you to set rules for renaming package variables that pass through the link. You can rename [fields][4] and [files][4] of [packages][1].

  ![Link rename package variables](/images/common/link_rename_vars.png)

  - Table of current rules

    - Input - name of the input variable;
    - Output - name of the output variable;
    - <span class='iconify-inline' data-icon='mdi:delete'></span> - delete rule button

  - Add rule - input fields for a new rule
    - Input - name of the input variable;
    - Output - name of the output variable;
    - <span class='iconify-inline' data-icon='mdi:plus' style="color: green"></span> - add new rule button.

[1]: /desc/package.md
[2]: /desc/nodes.md#group
[3]: /desc/job.md
[4]: /desc/package.md#composition
[5]: /desc/nodes.md
