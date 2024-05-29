# Compute Server (Task Executor)

## General

The **Compute Server or Task Executor** (Executor) is a special software module of the platform ([task executor](/intro/architecture.md#components)) that is responsible for running tasks on a specific computing cluster.

Currently, a task executor is supported for organizing task execution in a [Kubernetes](https://kubernetes.io/) environment. The task executor allows organizing computations on remote cloud computing resources such as [Yandex Managed Service for Kubernetes](https://cloud.yandex.com/en/services/managed-kubernetes), [VK Cloud Containers](https://mcs.mail.ru/containers/), or [Amazon EKS](https://aws.amazon.com/eks/). The task executor can be located either on the side of the computing resources or in an arbitrary location.

![Executor](/images/common/executor.png)

Structure:

- Description panel
- <span class='iconify-inline' data-icon='mdi:clipboard-pulse'></span>LOAD - compute server load panel
 - Toolbar
   - <span class='iconify-inline' data-icon='mdi:refresh'></span> - chart refresh button
   - Chart of task count changes
   - Chart of CPU load on compute server nodes
   - Chart of memory consumption by compute server nodes
   - Chart of activity for the last year (tasks per day)

- <span class='iconify-inline' data-icon='mdi:graph-outline'></span>NODES - compute server nodes panel
 - Table "Node Resources" - all node resources
   - Node
   - Processors
   - Memory
   - Pod Storage Size
   - GPUs
   - Pods
 - Table "Distributable Resources" - available resources
   - Node
   - Processors
   - Memory
   - Pod Storage Size
   - GPUs
   - Pods

## Description Panel

Structure:

- Logo
- Name
- Description
- <span class='iconify-inline' data-icon='mdi:eye' style="color: blue"></span> Server public availability
- <span class='iconify-inline' data-icon='mdi:wallet'></span> Balance - [account][1] balance

 Clicking opens the server [balance](#balance) window.

- <span class='iconify-inline' data-icon='mdi:play-circle' style="color: green"></span> Status
- Price per task - cost of executing one task
- Price per CPU core - cost of using a CPU core
- Price per GPU - cost of using a GPU
- Price per MB - cost of using RAM per MB
- Price per second - cost per second of task execution
- "EDIT" button (if rights are available)

Server status:

- <span class='iconify-inline' data-icon='mdi:play-circle' style="color: green"></span> Active
- <span class='iconify-inline' data-icon='mdi:pause-circle' style="color: orange"></span> Suspended
- <span class='iconify-inline' data-icon='mdi:stop-circle' style="color: red"></span> Disabled

<br clear="right"/>

## Balance

The compute server balance window displays the [account][1] balance and a list of [transactions][2] for depositing and withdrawing funds to/from the account.

![Executor balance](/images/common/executor_balance.png)

Structure:

- Description panel

 - Server image
 - Server name-link
 - <span class='iconify-inline' data-icon='mdi:wallet'></span> Balance - account balance
 - "WITHDRAW" button - button to withdraw funds to the owner's account

- Transactions panel
 - Toolbar
   - Period <span class='iconify-inline' data-icon='mdi:calendar-range'></span> - displayed period
   - <span class='iconify-inline' data-icon='mdi:refresh'></span> - list refresh button
 - Transactions table
   - Created - transaction date
   - Purpose - transaction type
   - Counterparty - transaction counterparty
   - Amount - transaction amount
 - Navigation panel

After clicking the **WITHDRAW** button, the server owner can withdraw funds to their own account.

![Executor balance out](/images/common/executor_balance_out.png)

[1]: /desc/finance.md#accounts
[2]: /desc/finance.md#transactions