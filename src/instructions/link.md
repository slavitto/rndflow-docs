# Connections

## Changing the connection type

- Click on the [link][1] and click on the <span class='iconify-inline' data-icon='mdi:edit'></span> icon to open the [properties][2] of the link.

- In the <span class='iconify-inline' data-icon='mdi:transit-connection-horizontal'></span>**CONNECTION** tab, select the required [connection type][3].

## Renaming variables

- Click on the [link][1] and click on the <span class='iconify-inline' data-icon='mdi:edit'></span> icon to open the [properties][2] of the link.

- In the <span class='iconify-inline' data-icon='mdi:inbox-arrow-down'></span>**RENAMING** tab, set rules for renaming variable packages passing through it (for details, see [ connection properties][2]).

![Link rename package variables](/images/common/link_rename_vars.png)

The connection takes the form for the active and passive types, respectively:

![Link var renamed](/images/common/link_var_renamed.png)
![Link var renamed](/images/common/link_var_renamed_pass.png)

## Packet filtering

- Click on the [link][1] and click on the <span class='iconify-inline' data-icon='mdi:edit'></span> icon to open the [properties][2] of the link.

 ![Link edit](/images/common/link_edit.png)

- In the <span class='iconify-inline' data-icon='mdi:transit-connection-horizontal'></span>**CONNECTION** tab in the <span class='iconify-inline' data-icon input field ='mdi:magnify'></span> **Packet Filter** enter a regular expression of the name of the packet labels that are allowed to traverse this link. The regular expression must use [PostgreSQL dialect](https://www.postgresql.org/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP).

 Example of adding multiple filters:

 ![Links filtration](/images/common/link_filters.png)

[1]: /desc/links.md
[2]: /desc/links.md#properties
[3]: /desc/links.md#link-types