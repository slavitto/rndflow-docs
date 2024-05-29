# Git

## Description

The platform supports saving projects in [Git][1] repositories, such as [GitHub][2] and [GitLab][10].

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
The Git repository is unique for the entire project and all its users!
:::

The following are saved:

- [Project][4] parameters
- [Graph][5] structure
- [Nodes][6] and their parameters and settings
 ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
 1. Package storage is not performed!
 2. For parameters, their default values are saved, i.e., parameters of nodes for a specific [data layer][9] will not be saved!
 :::
- [Node files][7]
 ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
 Only the current node files are saved! Saving all files according to their change history is not performed!
 :::
- [Project interfaces][9]

## Structure

- Git repository address (in SSH format)

 - Repository address input field
   > Example: git@github.com:user/project.git
 - Button <span class='iconify-inline' data-icon='mdi:content-save'></span> - save the entered repository address
 - Button <span class='iconify-inline' data-icon='mdi:open-in-new'></span> - open the Git repository page in a new window

- Button <span class='iconify-inline' data-icon='mdi:key'></span> "COPY PUBLIC SSH KEY" - copy the platform project's public SSH key to the clipboard.

![Git URL](/images/common/git_url.png)

- Save the current project state - section for saving the current project version
 - Brief description
 - Button <span class='iconify-inline' data-icon='mdi:clipboard-text-outline'></span>/<span class='iconify-inline' data-icon='mdi:clipboard-text-off-outline'></span> - open/close the extended description editor
 - Extended description (optional)
 - "SAVE" button - save the current project version in the Git repository.

![Git add new commit](/images/common/git_save.png)

- Change history

 - Button <span class='iconify-inline' data-icon='mdi:sync'></span> - import version from Git repository
 - Button <span class='iconify-inline' data-icon='mdi:refresh'></span> - refresh list
 - Version history

   For each version, the following is indicated:

   - Brief version description    
   - Extended description (optional)      
   - Author
   - Time
   - Button to copy version hash
   - Button <span class='iconify-inline' data-icon='mdi:backup-restore'></span> - restore the specified version

![Git](/images/common/git_commits.png)

- Operation history
 
 - Button <span class='iconify-inline' data-icon='mdi:refresh'></span> - refresh list
 - Button <span class='iconify-inline' data-icon='mdi:eye'></span> - show/hide list
 - Operation history

   For each operation, the following is indicated:
   - <span class='iconify-inline' data-icon='mdi:menu-down'></span> - button to open/close optional operation log
   - Initiator
   - Start - operation start time
   - Status - operation completion status and duration
   - Operation - operation name
   - Commit - hash of the corresponding commit version (optional)

 ![Git](/images/common/git_ops.png)

## Permissions

Required [user permissions][3] to perform operations:

- Access to the Git repository interaction page: 
 - project_edit
 - graph_view
 - graph_edit
 - interface_view
 - interface_edit
 - code_view
 - code_edit

> Specific operations require separate permissions.

- Connecting the project to a Git repository:
 - project_edit

- Creating a new commit:
 - project_edit

- Loading commits from the repository:
 - project_edit

- Switching to another commit:
 - graph edit
 - code_edit
 - interfaces_edit
 - project_edit

- Deleting commits from the platform when switching repositories:
 - project_edit
 - code_edit

- Viewing commits and operations:
 - code_view


[1]: https://git-scm.com/
[2]: htts://github.com
[3]: /desc/project_role.md#permission-types
[4]: /desc/project.md
[5]: /desc/project.md#graph
[6]: /desc/nodes.md
[7]: /desc/nodes.md#files
[8]: /desc/project.html#data-layers
[9]: /desc/interface.md
[10]: https://gitlab.com/