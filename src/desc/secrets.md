# Project Secrets

## General

Secrets are used to store sensitive information that is required for the project to function (for example, a login and password to an external service, or an [API key][1] token). Secret values are visible only to users with the [permission][2] **project_manage**. Secrets are used depending on their [types](#secret-types).

![Secrets](/images/common/secrets.png)

Panel structure:

- Management panel
  - <span class="iconify-inline" data-icon="mdi:plus"/> button to add a new secret
  - <span class="iconify-inline" data-icon="mdi:key-plus"/> menu to add an [API key][1]
  - <span class="iconify-inline" data-icon="mdi:eye"/> show secret values
- List of secret [panels](#secret-panel)

Secrets are also displayed on the **DESCRIPTION** tab of nodes that have access to the specified secret.

![Node secrets](/images/common/secrets_node_definition.png)

## Secret types

- <span class="iconify-inline" data-icon="mdi:variable"/> Variable - The secret value is available in the executable [job][3] through an environment variable.
- <span class="iconify-inline" data-icon="mdi:cloud-lock"/> Image loading - credentials for loading Docker images from private Docker registries.
  > The following credentials are used:
  > - Docker registry domain name (e.g., rep.rndflow.com)
  > - Username
  > - Password

## Secret panel

![Secret panel](/images/common/secrets_panel.png)

1. Editable name
2. Editable description
3. Editable value
4. Secret [type](#secret-types)
5. List of nodes that have access to the secret
6. <span class="iconify-inline" data-icon="mdi:magnify"/> Menu to add nodes
7. <span class="iconify-inline" data-icon="mdi:delete"/> Delete
8. <span class="iconify-inline" data-icon="mdi:eye"/> Show value

[1]: /desc/api_keys.md
[2]: /desc/project_role.md#permission-types
[3]: /desc/job.md
