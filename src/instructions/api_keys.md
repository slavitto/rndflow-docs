# API Keys

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
You can see a video tutorial in the [video][video] section.
:::

## Creating a Template

- Next to **Templates [API keys][1]** click the <span class="iconify-inline" data-icon="mdi:plus"></span> button and in the dialog box enter a unique name for the new template, select a role, and click the **CREATE** button.

  ![Add API](/images/common/api_keys_add.png)

- In the new [template tile][2] add information fields (names are arbitrary)

  - Project ID - ID of the current project
  - Input node ID - the node to which packets with data should be sent
  - Output node ID - the node from which to fetch result packets.

  ![Add Information field](/images/common/api.png)

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
The role associated with the API template must have the [permission][permissions] **project_view** if there is no public role in the project.
:::

## Requesting a Key

In the project, go to the <span class="iconify-inline" data-icon="mdi:information"></span>**About the project** section and in the <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API keys** section, click the **REQUEST** button on the tile of the required API.

![API request](/images/common/api_request.png)

The API key tile will look like this:

![API requested](/images/common/api_panel_wait.png)

Next, you should wait for the project owner to confirm the request, to whose email address a corresponding notification about the request will be sent.

After the project owner [approves the request](#confirming-the-key-request), an email notification will be received.

![API confirmation letter](/images/common/api_request_confirmed_letter.png)

The API key tile will look like this:

![API confirmed](/images/common/api_panel_confirmed.png)

In addition, a new personal [data layer][3] will be created for the user in this project.

## Confirming the Key Request

The project owner will receive an email notification about the request.

![API request letter](/images/common/api_request_letter.png)

The owner should go to the appropriate project in the <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API keys** section and in the **Requests** section click the <span class="iconify-inline" data-icon="mdi:check" style="color: green"></span> button to confirm the request.

![API request confirmation](/images/common/api_confirmation.png)

You can see the list of issued keys and their usage statistics in the <span class="iconify-inline" data-icon="mdi:account-key"></span>[ISSUED KEYS][6] section.

## Revoking a Key

- Go to the <span class="iconify-inline" data-icon="mdi:account-key"></span> [**ISSUED KEYS**][6] section.
- In the table of issued keys, click the <span class='iconify-inline' data-icon='mdi:delete'></span> button next to the key you want to revoke.

## Importing a Key

- [Request an API key](#requesting-a-key) and wait for the request to be confirmed.

- Go to the project from which you will be accessing the programmatically, and in it go to the <span class="iconify-inline" data-icon="mdi:eye-off"></span>**Secrets** section.

- Open the <span class="iconify-inline" data-icon="mdi:key-plus"></span> menu for adding an [API key][1] and select the required key.

  ![API confirmed](/images/common/api_import.png)

- Enter a prefix for the created [secrets][3].

  ![API insert](/images/common/api_insert.png)

- A [secret][3] will be created with the key token _prefix_\_**token**, as well as secrets for all information panels of the key.

  ![API inserted](/images/common/api_inserted.png)

- Grant access to the [secrets][3] to the nodes from which access will be made.

  In the **Nodes** field of the corresponding [secret][3], click the <span class="iconify-inline" data-icon="mdi:magnify"></span> button and select the required nodes.

## Using the Key

- [Import the key into the project](#importing-a-key)
- Go to the <span class="iconify-inline" data-icon="mdi:sitemap"></span>**Graph** section and in the [Files][4] tab of the node that has access to the [secret][3] of the corresponding [API key][1], you need to use the following [code][5] in the program module or script.

[1]: /desc/api_keys.md
[2]: /desc/api_keys.md#плитка-шаблона
[3]: /desc/secrets.md
[4]: /desc/nodes.md#фаилы
[5]: /dev/compute.md#api-доступ-к-проекту
[6]: /desc/api_keys.md#выданные-ключи
[video]: ./video.md
[permissions]: /desc/project_role.md#типы-разрешении
