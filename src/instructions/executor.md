# Calculation server (task executor)

## Add to workspace

To add [calculation server][1] to the workspace:

- [Go](/instructions/#go-to-workspace) to [workspace](/desc/workspace.md)
- Go to the **RESOURCES** tab

![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- Opposite the inscription <span class="iconify-inline" data-icon="mdi:server"></span> **Calculation servers** click on the button <span class="iconify-inline" data-icon="mdi :magnify"></span> <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> and then select a server from the list <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

![Add Executor](/images/common/dashboard_user_workspace_resources_add_executor.png)

## Creating something new in the workspace

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
The calculation server must be previously [installed][2] on a compatible platform, for example, [Yandex Managed Service for Kubernetes](https://cloud.yandex.com/en/services/managed-kubernetes), [VK Cloud Containers]( https://mcs.mail.ru/containers/), [Amazon EKS](https://aws.amazon.com/eks/) or your own [Kubernetes](https://kubernetes.io/) cluster.
:::

To create a [calculation server][1] in the workspace:

- [Go](/instructions/#go-to-workspace) to [workspace](/desc/workspace.md)
- Go to the **RESOURCES** tab

![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- Opposite the inscription <span class="iconify-inline" data-icon="mdi:server"></span> **Calculation servers** click on the button <span class="iconify-inline" data-icon="mdi :plus"></span>.

![Create Executor](/images/common/dashboard_user_workspace_resources_create_executor.png)

- Enter calculation server parameters
 - Name - server identifier for connecting to the platform.
 - <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Make public - make the server publicly available across the entire platform.
 - Public PGP key - authorization key for the payment server. The private part of the key must be stored on the calculation server side.
 - Description

[1]: /desc/executor.md
[2]: /admin/#installation-of-calculation-server