# Packages

## Description

**Package** - A set of data submitted for processing to a corresponding [node][4].

The list of packages is displayed in the [node panel][1] on the <span class='iconify-inline' data-icon='mdi:package'></span> **Packages**[2] tab.

The total number of packages in the node in the current [data layer][3] is displayed as a badge with <span class='iconify-inline' data-icon='ph:number-circle-three-fill' style="color: green"></span>:

![Node packages count](/images/common/node_compute_packages.png)

The number of packages in the node in the current [data layer][3] without child [jobs][9] is displayed as a badge with <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: orange"></span>:

![Node packages count](/images/common/node_compute_packages_no_jobs.png)

**Master package** <span class='iconify-inline' data-icon='fluent:rectangle-landscape-16-filled' style="color: red"></span> - The user-selected root package of the data layer. Selecting a master package allows you to display only parent and child packages of the master package in the current [data layer][3].

![Master package](/images/common/node_panel_packages_master.png)

## Structure

- Label - Name
- Fields - Simple data type variables
  > Represented in [JSON](https://www.json.org/json-en.html) format. These variables can be used in queries of the logical node.
- Files - Object variables or files 
  > Represented in object format (hdf5, plotly, markdown). The [HDF5](https://portal.hdfgroup.org/display/HDF5/Introduction+to+HDF5) format is used for automatic creation.
- Array of packages - An array of "nested" packages. A "nested" package is a regular package with an additional reference to the package it is "nested" in.

  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>

  An array of packages can only be [formed][5] in the [SQL node][6] using the `json_agg(json_build_object())` aggregate function. Nested packages must have the same structure.

  A package with this variable type cannot be resubmitted to another SQL node.

  For the execution script in the [compute node][7], a package with a variable of type "array of packages" is loaded as a set of the main package and nested packages as separate regular packages.
  :::

- Unique identifier - Automatically generated value in [SHA256][12] format.

  ::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
  The identifier value depends on the composition of the package and its creation history. The value is unique and guarantees the immutability of the package.
  :::

## Package Processing

A package can be processed in 3 modes:

1. Automatic

   Automatic processing of a package occurs if the node is in the active [state][8]. In this case, a new [job][9] is automatically created for each new incoming package, which is sent to the corresponding project calculation server.

2. [Manual non-interactive][10]

   The package is sent for initial or repeated processing manually.

3. [Manual interactive][11]

   The package is sent for initial or repeated processing with manual interactive processing.

[1]: /desc/nodes.md#node-panel
[2]: /desc/nodes.md#packages
[3]: ./project.md#data-layers
[4]: /desc/nodes.md
[5]: /dev/sql.md#example-of-forming-a-package-with-an-array-of-packages-variable
[6]: /desc/nodes.md#sql-node
[7]: /desc/nodes.md#compute-node
[8]: /desc/nodes.md#state
[9]: /desc/job.md
[10]: /instructions/package.md#package-processing
[11]: /instructions/package.md#interactive-package
