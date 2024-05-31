# Git

Version storage is implemented based on [Git support in the platform][1].

::: warning <span class='iconify' data-icon='emojione-v1:warning' style='color: #e7c000; font-size: 24px;'></span>
The user performing the transactions must have the appropriate [permissions][2].
:::

::: warning <span class='iconify' data-icon='emojione-v1:warning' style='color: #e7c000; font-size: 24px;'></span>
The target Git repository must be previously created by the user.
:::

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
A video example can be found in the [video](./video.md) section.
:::

## Connect project

- [Open][3] required project.

- In the [project control panel][4] select <span class="iconify-inline" data-icon="mdi:git"></span>**Project History** to go to the **Synchronization with Git* section *.

- In the **Git repository address (in SSH format)** input field, enter the address of an existing initialized Git repository.

 > Example: git@github.com:user/project.git

- Save the address by clicking the <span class='iconify-inline' data-icon='mdi:content-save'></span> button.

 Below the address bar there will be a link to the section in the Git repository where you need to add the SSH key.

- Click on the button <span class='iconify-inline' data-icon='mdi:key'></span> **COPY PUBLIC SSH KEY** - to copy the public SSH key to the clipboard.

- [Add deployment key][5] in the target repository.

### Adding deployment keys

#### GitHub

The key returned by the <span class='iconify-inline' data-icon='mdi:key'></span> **COPY PUBLIC SSH KEY** button must be added to the **Settings** section as a deployment key ( Deploy key) with write rights (<span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: blue"></span>Allow write access) to the corresponding [GitHub][ 6] repository.

![Git](/images/common/git_keys.png)

#### GitLab

The key returned by the <span class='iconify-inline' data-icon='mdi:key'></span> **COPY PUBLIC SSH KEY** button must be added to the **Settings/Repository** section as Deploy keys with write permissions (<span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: blue"></span>Grant write permissions to this key) to the corresponding [GitLab][7] repository.

![Git](/images/common/gitlab_keys.png)

## Save new version

- [Open][3] required project.

- In the [project control panel][4] select <span class="iconify-inline" data-icon="mdi:git"></span>**Project History** to go to the **Synchronization with Git* section *.

- In the **Save current project state** section enter:
 - Brief description of the version
 - Extended version description (optional)
 - Press the **SAVE** button.
 - Wait until the operation is completed in the **Operation History** section and the new version appears in **Change History**.

## Restore version

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
It is safe to restore earlier versions of a project that are missing later nodes. The packages and tasks of these nodes will not be removed from the project.
:::

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
Attention! If the node was deleted by the user himself, then when restoring the version that contains this node, the node will be restored without packages and tasks!
:::

- [Open][3] required project.

- In the [project control panel][4] select <span class="iconify-inline" data-icon="mdi:git"></span>**Project History** to go to the **Synchronization with Git* section *.

- In the **History of changes** section, select the required version.
- Click the <span class='iconify-inline' data-icon='mdi:backup-restore'></span> button to restore the version.
- Click the **OK** button in the version recovery confirmation dialog.
- Wait for the operation to complete in the **Operation History** section.

## Sync with repository

To synchronize the history of platform changes with the state of the external Git repository, you must:
- Click the sync button <span class='iconify-inline' data-icon='mdi:refresh'></span> in the **Change history** section
- Wait for the operation to complete in the **Operation History** section.

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
Data is not deleted from the Git repository.
:::

## Disable synchronization

To disable synchronization you must:
1. Clear the **Git repository address (in SSH format)** input field.
2. Click the save button <span class='iconify-inline' data-icon='mdi:content-save'></span>.
3. Confirm the need to change the address in the confirmation window that opens.

 ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
 When synchronization is disabled, only the data on the platform (history of changes and operations) is deleted.

 Data is not deleted from the Git repository.

 When you reconnect a previously disconnected repository after a synchronization operation is completed, the change history on the platform will be repopulated.
 :::


[1]: /desc/git.md
[2]: /desc/git.md#разрешения
[3]: ./project.md#открытие-проекта
[4]: /desc/project.md#панель-управления-проектом
[5]: #добавление-ключеи-развертывания
[6]: htts://github.com
[7]: htts://gitlab.com
