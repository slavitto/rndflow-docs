# Docker Images

The platform supports the ability to create and rebuild Docker images ([Docker images][1]).

Docker images are created on the platform cluster and can be loaded onto external registries ([registries][1]) and internal registries.

Docker images are associated with the [workspace][2].

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
The following rules apply to Docker images:

- The image name must be unique across the **entire** platform.
- Only the owner of the workspace in which the image was created has the rights to rebuild the image.
 :::

Docker image management is done on the <span class='iconify-inline' data-icon='mdi:cogs'></span> **RESOURCES** tab in the <span class="iconify-inline" data-icon="mdi:docker"></span> **Docker Images** section of the corresponding workspace.

![Docker images list](/images/common/dashboard_user_workspace_resources_dockers.png)

Using a Docker image is done on the <span class='iconify-inline' data-icon='mdi:kubernetes'></span> [**CONTAINER**][3] tab of the [compute node][4] panel in the dropdown list of the **Docker Image** parameter.

![Docker images list](/images/common/node_panel_container_dockerslist.png)

## Tile

![Docker image after build](/images/common/dashboard_user_workspace_resources_docker_after_build.png)

Structure:

- Build status
 - <span class='iconify-inline' data-icon='mdi:check-circle' style='color: green'></span> - latest image changes are built
 - <span class='iconify-inline' data-icon='mdi:alert-circle' style='color: red'></span> - image is not built
 - <span class='iconify-inline' data-icon='mdi:update' style='color: orange'></span> - image was modified after the build and there have been no successful builds since then
- Image name
- Image description
- <span class='iconify-inline' data-icon='mdi:delete'></span> Delete button

## Editor

The editor is opened by clicking on the Docker image tile.

![Docker image editor after build](/images/common/dashboard_user_workspace_resources_docker_editor_аfter_build.png)

Structure

- Editable image name
- <span class='iconify-inline' data-icon='mdi:delete'></span> Delete image button
- Editable image description
- Status
 - <span class='iconify-inline' data-icon='mdi:check-circle' style='color: green'></span> - latest image changes are built
 - <span class='iconify-inline' data-icon='mdi:alert-circle' style='color: red'></span> - image is not built
 - <span class='iconify-inline' data-icon='mdi:update' style='color: orange'></span> - image was modified after the build and there have been no successful builds since then
- Image change history
 - Created - author and creation time
 - Modified - author and time of last changes (code in image editor)
 - Built - author and time of last successful build
- Build parameters
 - Build context
   - LOCAL FOLDER - use the data from the current Dockerfile editor for the build.
   - GIT REPOSITORY - use data from the Git repository for the build.
 - Dockerfile - code editor for creating the Docker image
- "SAVE" button - save changes in the editor
- "BUILD" button - build the Docker image
- Build log and <span class='iconify-inline' data-icon='mdi:refresh'></span> log refresh button - history of Docker image builds

 - <span class='iconify-inline' data-icon='mdi:menu-down'></span> - open build log
 - Start - build start time
 - Status - completion status
   - <span class='iconify-inline' data-icon='vaadin:progressbar' style='color: green'></span> - in progress
   - <span class='iconify-inline' data-icon='mdi:alert-circle' style='color: red'></span> - image not built
   - <span class='iconify-inline' data-icon='mdi:check-circle' style='color: green'></span> - latest image changes are built
 - Duration - build duration

 When changing the build context to **GIT REPOSITORY**, the following is displayed:

 - Git repository URL - repository with Docker image build files.
 - Directory with Dockerfile - optional path to the directory with the Dockerfile, if it is not located in the root of the repository.
 
 ![Docker image editor git context](/images/common/dashboard_user_workspace_resources_docker_editor_git.png)

[1]: https://docs.docker.com/get-started/overview/
[2]: /desc/workspace.md
[3]: /desc/nodes.md#container
[4]: /desc/nodes.md#compute-node