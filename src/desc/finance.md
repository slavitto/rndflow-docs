# Payment Management

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
Due to the platform's trial period, the information provided below may change!
:::

Payment management is carried out using accounts and transactions.

## Accounts

An **Account** is a record corresponding to the amount of funds belonging to a user. The account is used by the platform and its users for financial operations accounting.

Currency type:

- Russian ruble

Account types:

- User accounts
- Workspace accounts
- S3 storage accounts
- Compute server accounts
- Platform accounts

## Transactions

A **Transaction** is, in general, any platform-supported deal or package of deals using accounts.

Transaction types:

- [Deposit funds to account][1]
- [Withdraw funds from account][2]
- [Direct transfer between accounts][3]
- [Payment for using a compute server][4]
- [Payment for using S3 storage][5]
- [Payment for using a project API key][6]
- [Payment for using a paid project role][7]
- [Platform commission][8]

Transaction types:

- Online transactions

 Payment occurs immediately after completing paid operations.
 This includes all transaction types except [Payment for using S3 storage][5].

- Scheduled transactions

 [Payment for using S3 storage][5] transactions occur either daily after the cleanup procedure is launched or after the storage owner launches the cleanup.

- Explicit

 Payment is made directly by users.
 These include: [Deposit funds to account][1], [Withdraw funds from account][2], [Direct transfer between accounts][3].

- Indirect

 Payment is made automatically by the platform for conducting paid operations.
 These include all transactions of the **Payment for...** type and [Platform commission][8].

## Transaction Details

### Deposit Funds to Account

Used to deposit funds into the platform.

### Withdraw Funds from Account

Used to withdraw funds from the platform.

### Direct Transfer Between Accounts

Used to transfer funds between user accounts and other account types.

Users can transfer funds to a workspace on their own.

Workspace, S3 storage, or compute server owners can withdraw funds to their own accounts.

### Payment for Using a Compute Server

Automatic deduction of funds from the workspace account for using computing resources.

The cost of usage is calculated for each processed task.

The usage cost is calculated after the task execution is completed and is calculated as the sum of the products of the [compute server][9] indicators and task parameters:

- **Price per task**
- **Price per second** multiplied by the task duration
- **Price per CPU core** multiplied by the number of requested cores and the task duration
- **Price per GPU** multiplied by the number of used GPUs and the task duration
- **Price per MB** multiplied by the amount of requested RAM

After transferring funds from the workspace account to the compute server account, the [Platform commission][8] is deducted from the latter.

### Payment for Using S3 Storage

Automatic deduction of funds from the workspace account for storing data in S3 storage.

The storage cost is calculated daily or after the storage owner manually launches the storage cleanup.

The storage cost is calculated as the [S3 storage][10] **Price per MB** multiplied by the storage volume occupied by the workspace project files at the time of the storage cleanup.

After transferring funds from the workspace account to the S3 storage account, the [Platform commission][8] is deducted from the latter.

### Payment for Using a Project API Key

Automatic deduction of user funds for using a [project API key][11] to the project workspace account.

The usage cost includes:

- **Price per request** specified on the corresponding API.

 Deducted from the user's account immediately after the API call.

- Cost of consumed computing resources

 Deducted from the user's account after the task is completed and calculations are made between the workspace and the compute server.

After transferring funds for the **request** from the user's account to the workspace account, the [Platform commission][8] is deducted from the latter.

### Payment for Using a Paid Project Role

Automatic deduction of user funds for using a [paid project role][12] to the project workspace account.

The usage cost includes:

- Cost of consumed computing resources

 Deducted from the user's account after the task is completed and calculations are made between the workspace and the compute server.

Deductions occur when the user works with a project for which they have a paid role.

### Platform Commission

Platform fees for usage.

The platform commission is charged to:

- Owners of S3 storages providing paid data storage services;
- Owners of compute servers providing paid computing resource usage services.

The platform commission is specified as the **Cost Coefficient** in the owner's [pricing plan][13].

[1]: #deposit-funds-to-account
[2]: #withdraw-funds-from-account
[3]: #direct-transfer-between-accounts
[4]: #payment-for-using-a-compute-server
[5]: #payment-for-using-s3-storage
[6]: #payment-for-using-a-project-api-key
[7]: #payment-for-using-a-paid-project-role
[8]: #platform-commission
[9]: ./executor.md
[10]: ./s3.md
[11]: ./api_keys.md
[12]: ./project_role.md#role-types
[13]: ./payplan.md