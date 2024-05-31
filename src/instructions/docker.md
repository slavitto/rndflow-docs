# Docker Images

## Creating a Docker Image in a Workspace

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
You can see a video tutorial in the [video](./video.md) section.
:::

To create a [Docker image][1], you need to:

- [Go to][2] your [workspace][3]

- Go to the <span class='iconify-inline' data-icon='mdi:cogs'></span> **RESOURCES** tab

  ![Docker images](/images/common/dashboard_user_workspace_resources_new.png)

- Next to the <span class="iconify-inline" data-icon="mdi:docker"></span> **Docker images** label, click the <span class="iconify-inline" data-icon="mdi:plus"></span> <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> button and then type the full name of the Docker image <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

  ![Docker image add](/images/common/dashboard_user_workspace_resources_add_docker.png)

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
Examples of names:

- `docker.io/myrepo/myimagename:latest` - when placing the image in a public registry on [Dockerhub](https://hub.docker.com/)
- `myrepo/myimagename:latest` - when placing the image in a public registry on [Dockerhub](https://hub.docker.com/)
- `mycompanyregister.com/myrepo/myimagename:latest` - when placing the image in your own registry
  :::

::: warning <span class='iconify' data-icon='emojione-v1:warning' style='color: #e7c000; font-size: 24px;'></span>
When placing the image on [Dockerhub](https://hub.docker.com/) or your own registry, you need to provide public read rights to the image.
:::

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
For testing purposes, you can use the platform's public local registry. In this case, Docker image names will look like this:

`rep.rndflow.com/myrepo/myimagename:latest`

<div class="custom-container danger">
  <p class="custom-container-title"><span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 18px;'/></p>
  <p style='font-size: 14px;'>Attention! Use only for "one-time" testing purposes. Files placed in the test repository may be deleted without warning at any time! The test service itself may also be disabled at any time without warning!</p>
</div>

:::

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'/>
The following rules apply to Docker images:

- The image name must be unique for the **entire** platform.
- Only the owner of the workspace in which it was created has the rights to rebuild the image.
  :::

- After clicking the button, a Docker image [tile][4] will be created
  ![Docker image add](/images/common/dashboard_user_workspace_resources_docker_not_build.png)

- Clicking on the Docker image tile will open the editor window

  ![Docker image editor](/images/common/dashboard_user_workspace_resources_docker_editor_not_build.png)


There are two ways to provide files for building the image:

  - [Directly create a Dockerfile file](#direct-creation-of-a-build-file)

  - [Using an external Git repository with build files](#using-an-external-git-repository-with-build-files)

### Directly create a build file

- Select **LOCAL FOLDER** in **Build Options**.

- Enter the [image creation commands][7] in the **Dockerfile** editor.

  See examples in the instruction [Creating a Docker image outside the platform][5]

- Click the **SAVE** button.

- Click the **BUILD** button.

- Make sure the platform-defined Docker registry is correct. Change it if necessary.

- Enter, if necessary, the login and password to the Docker registry to which the created image will be uploaded.

  > If the Docker registry does not require authorization for writing images, leave these fields blank.

  ![Docker image editor](/images/common/dashboard_user_workspace_resources_docker_editor_auth.png)

- Click the **BUILD** button.

- The build will start

  ![Docker image build process](/images/common/dashboard_user_workspace_resources_docker_editor_build.png)

- After successful completion, the editor will look like:

  ![Docker image editor after build](/images/common/dashboard_user_workspace_resources_docker_editor_аfter_build.png)

- On the <span class='iconify-inline' data-icon='mdi:cogs'></span> **RESOURCES** tab in the <span class="iconify-inline" data-icon="mdi:docker"></span> **Docker images** section, the corresponding tile will look like:

  ![Docker image after build](/images/common/dashboard_user_workspace_resources_docker_after_build.png)

### Using an external Git repository with build files

- Select **GIT REPOSITORY** in **Build Options**.
- Enter the URL of the Git repository with the Docker image build files.
- Click the **SAVE** button.
- Click the **BUILD** button.

- Make sure the platform-defined Docker registry is correct. Change it if necessary.

- Enter, if necessary, the login and password to the Docker registry to which the created image will be uploaded.

  > If the Docker registry does not require authorization for writing images, leave these fields blank.

- If you are using a private Git repository to upload image build files, enter your personal access token.

> If the Git repository is public and does not require authorization, leave the token field blank.
> Description of creating a personal token for [GitHub][8] and [GitLab][9].

![Docker image editor git context](/images/common/dashboard_user_workspace_resources_docker_editor_git.png)

- Click the **BUILD** button.

- The build will start

## Creating a Docker Image Outside the Platform

1. Register on a [public Docker registry](https://hub.docker.com/).
2. Create a new repository _imagename_

   _imagename_ is an arbitrary name: mycoolimage or python-projectXX

3. Install the [Docker application](https://www.docker.com/) on your local computer. Windows users can install [Docker Desktop](https://www.docker.com/products/docker-desktop).

   You can also use public Docker image services, such as [Play with Docker](https://labs.play-with-docker.com/).

4. Create a new _Dockerfile_ file based on the [standard images][6].

   **Option 1**

   To create your own image, you need to use the base image [rndflow/job.py](https://hub.docker.com/r/rndflow/job.py/tags?page=1&ordering=last_updated).

   ```dockerfile:no-line-numbers
   FROM docker.io/rndflow/job.py
   RUN ...
   COPY ...
   ```

   **Вариант 2**

   If you need to use an operating system image different from that used in [rndflow/job.py](https://hub.docker.com/r/rndflow/job.py/tags?page=1&ordering=last_updated), you must install the library yourself [ job.py](https://github.com/rndflow/rndflow-job-py). You also need to install the moreutils, procps, curl, zlib1g-dev, libjpeg-dev libraries.

   ```dockerfile:no-line-numbers
   FROM ...
   ...
   RUN apt-get update && apt-get install -y moreutils procps curl zlib1g-dev libjpeg-dev
   RUN cd /opt/ && curl -L https://github.com/rndflow/rndflow-job-py/archive/refs/heads/master.tar.gz | tar -xvz && \
   pip3 install -r rndflow-job-py-master/requirements.txt && pip3 install ./rndflow-job-py-master && rm -rf rndflow-job-py-master
   ...
   ```

   If you require support for the interactive server [Jupyter](https://jupyter.org/), then you need to install:

   ```dockerfile:no-line-numbers
   RUN pip3 install notebook jupytext
   ```

   **Option 3**

 If account support is required on AMD or NVIDIA GPU cards, then you must use the appropriate base images.

5. Build the image from _Dockerfile_ (if _podman_ is used, then replace _docker_ with _podman_).

 In the folder with _Dockerfile_: `docker build -t user/imagename:1.0 .` or `docker build -t user/imagename:1.0 -f _Dockerfile_ .`

 Here _user/imagename_ is the registry user/image name (registry repository from point _2_), _:1.0_ is the version.

 ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
 When rebuilding an image without changing the _Dockerfile_ file, you must clear the cache of the previous build. For example, you can delete the latest image: `docker rmi user/imagename:1.0`

 or build without using the cache: `docker build -t user/imagename:1.0 . --no-cache`
 :::

6. Check the appearance of the image: `docker image ls`
7. Test run: `docker run -it --rm imagename`
8. Upload a new image to the [public Docker registry](https://hub.docker.com/)

 - Connect to the registry: `docker login -u user -p **********`

 or to avoid leaving the password in the command history: `docker login -u user`

 - Upload the image to the registry: `docker push user/imagename:1.0`

9. If you need to remove an erroneously downloaded image from the registry: [Image removal instructions](https://stackoverflow.com/questions/30680703/remove-an-image-tag-from-docker-hub/60112300#60112300)

10. If the build is performed on a third-party service, it is recommended to disconnect from the registry: `docker logout`

[1]: /desc/docker.md
[2]: /instructions/workspace.html#переход-в-рабочее-пространство
[3]: /desc/workspace.md
[4]: /desc/docker.md#плитка
[5]: #создание-докер-образа-вне-платформы
[6]: /dev/docker.md
[7]: https://docs.docker.com/engine/reference/builder/
[8]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
[9]: https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html
