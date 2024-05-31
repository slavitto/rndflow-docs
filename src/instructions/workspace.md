# Working space

## Go to workspace

Go to [control panel](/desc/dashboard.md):

- Open link panel <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>
- Click on the user avatar image <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

 ![Link panel](/images/common/user_link_panel.png)

- Click on the [tile](/desc/dashboard.md#workspace-tile-structure) of the required [workspace][1] <span class='iconify-inline' data-icon='ph:number-circle- one-fill' style="color: red"></span>.

 ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
 A [workspace][1] <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> is automatically created for the new user.
 :::

 ![New user dashboard](/images/common/dashboard_user_new.png)

## Initializing the workspace

- Go to the **RESOURCES** tab

 ![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- [Add](./executor.md#adding-to-workspace) new [S3 storage](/desc/s3.md)

- [Add](./s3.md#adding-to-workspace) new [calculation server](/desc/executor.md)

- Make sure resources are available

![Resources](/images/common/dashboard_user_workspace_resources.png)

## Open to public access

Allowing public access to a workspace allows you to host projects with [public][2] and [paid][3] access.

- [Go][4] to [workspace][1].

- On the [description panel][5] of the workspace, click the **EDIT** button.
- Set the switch **Visible to everyone**.
- Press the **SAVE** button.

## Add member

- [Go][4] to [workspace][1]

- Go to the tab <span class='iconify-inline' data-icon='mdi:account-multiple'></span> **PARTICIPANTS**

- Click on the **INVITE USER** button

- In the dialog box, select the participant, his [role][8] and the text of the message. Click the **SEND INVITATION** button.

- The user will be sent an email inviting them to join the workspace
 ![Invite letter](/images/common/dashboard_invite_letter.png)

- A prompt will also appear in the [User Control Panel][7], which the user can accept or decline.

 ![Invite letter](/images/common/dashboard_invitations.png)

## Remove member

- [Go][4] to [workspace][1]

- Go to the tab <span class='iconify-inline' data-icon='mdi:account-multiple'></span> **PARTICIPANTS**

- On the [participant tile][6] click on the <span class="iconify-inline" data-icon="mdi:close-circle"></span> button to delete the role and the participant himself.

[1]: /desc/workspace.md
[2]: ./project.md#открыть-публичныи-доступ
[3]: ./project.md#oткрыть-возмедныи-доступ
[4]: ./workspace.md#переход-в-рабочее-пространство
[5]: /desc/workspace.md#панель-описания
[6]: /desc/workspace.html#структура-плитки-участника
[7]: /desc/dashboard.html#описание
[8]: /desc/workspace.html#типы-участников
