# Node Parameters

<span class="iconify-inline" data-icon="mdi:tune"></span> **Node Parameters** - parameters that control the execution of the node, passed to the node's script.

The panel can operate in three modes:

- [Parameter Display](#display-parameters)

- [Parameter Management](#manage-parameters)

- [Create/Edit Parameter](#create-edit-parameter)

## Parameter Types

**String** ([settings](#string))

![String parameter](/images/common/node_panel_params_string.png)

**Number** ([settings](#number))

![Number parameter](/images/common/node_panel_params_number.png)

**Slider** ([settings](#slider))

![Slider parameter](/images/common/node_panel_params_slider.png)

**Range** ([settings](#range))

![Range parameter](/images/common/node_panel_params_range.png)

**Toggle** ([settings](#toggle))

![Toggle parameter](/images/common/node_panel_params_toggle.png)

**Date** ([settings](#date))

![Date parameter](/images/common/node_panel_params_date.png)

## Display Parameters

![Node params](/images/common/node_panel_params.png)

Structure:

- Parameter tiles
- "SAVE" button - save the parameter value for this data layer
- "EDIT" button - switch to [parameter management](#manage-parameters)

General view of a parameter tile:

![Param panel](/images/common/node_panel_params_panel_view.png)

1. Description
2. Label
3. Editable field for the value in this [data layer][1]

The tile appearance also depends on the parameter type:

- Number
  - suffix

## Manage Parameters

![Edit params](/images/common/node_panel_params_edit.png)

Structure:

- Toolbar

  - <span class="iconify-inline" data-icon="mdi:content-duplicate"></span> Copy all parameters to the node's input specification
  - <span class="iconify-inline" data-icon="mdi:content-copy"></span> Copy all parameters
  - <span class="iconify-inline" data-icon="mdi:content-paste"></span> Paste parameters

- Parameter tiles
- "SAVE" button - save the default parameter value
- "ADD" button - switch to [create mode](#create-edit-parameter) for a new parameter
- "CLOSE" button - switch to [display mode](#display-parameters) for parameters

Parameter tile:

![Param panel](/images/common/node_panel_params_panel_edit.png)

1. <span class="iconify-inline" data-icon="mdi:drag"></span> Move
2. Description
3. Label
4. Editable field for the default value
5. <span class="iconify-inline" data-icon="mdi:delete"></span> Delete parameter
6. <span class="iconify-inline" data-icon="mdi:edit"></span> [Edit](#create-edit-parameter) parameter
7. <span class="iconify-inline" data-icon="mdi:content-copy"></span> Copy parameter
8. <span class="iconify-inline" data-icon="mdi:content-duplicate"></span> Copy parameter to the node's input specification
9. Type
10. Name

## Create/Edit Parameter

The create/edit parameter dialog consists of:

- "DESCRIPTION" tab
- "SETTINGS" tab
- "WIDTH" tab
- "CREATE" or "SAVE" button - save values and exit
- "CANCEL" button - exit without saving

### DESCRIPTION Tab

![Create param description tab](/images/common/node_panel_params_create_desc.png)

Structure:

- Preview and default value - preview display and input field for the default value
- Name - the corresponding variable name in the calculation script
- Label - label visible to the user on the node panel
- Parameter description input editor

### WIDTH Tab

Sets the width of the parameter panel. The width is set in terms of 12 Bootstrap columns depending on the window size. Zero sizes are ignored.

![Create param width tab](/images/common/node_panel_params_create_width.png)

### SETTINGS Tab

Settings depend on the [parameter type](#parameter-types)

![Create param settings tab](/images/common/node_panel_params_create_settings.png)

- Parameter type

#### String

- Preview and default value - preview display and input field for the default value
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Mandatory field - whether to require a default value
- Regular expression - input format for the string, uses [JavaScript regular expression syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- Error message - message displayed when the input value does not match the regular expression

#### Number

- Preview and default value - preview display and input field for the default value
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Mandatory field - whether to require a default value
- [Step][2] - sets the step for changing the number

  By default, allows the input of non-integer numbers.
  To allow only integer input, set to 1.

- Suffix - to display a suffix after the value, for example, to show units of measurement
- Minimum value
- Maximum value

#### Slider

- Preview and default value - preview display and input field for the default value
- Minimum value
- Maximum value
- [Step][2] - sets the step for changing the number
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Vertical orientation - change orientation: horizontal or vertical

#### Range

- Preview and default value - preview display and input field for the default value
- Minimum value
- Maximum value
- [Step][2] - sets the step for changing the number
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Vertical orientation - change orientation: horizontal or vertical

#### Toggle

- Preview and default value - preview display and input field for the default value

#### Date

- Preview and default value - preview display and input field for the default value

[1]: /desc/project.md#data-layers
[2]: http://htmlbook.ru/html/input/step
