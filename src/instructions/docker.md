# Докер образы

## Создание Докер образа в рабочем пространстве

Для создания [Докер образа][1] необходимо:

- [Перейти][2] в [рабочее пространство][3]

- Перейти на вкладку <span class='iconify-inline' data-icon='mdi:cogs'></span> **РЕСУРСЫ**

  ![Docker images](/images/common/dashboard_user_workspace_resources_new.png)

- Напротив надписи <span class="iconify-inline" data-icon="mdi:docker"></span> **Docker-образы** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> и далее набрать полное название Докер образа <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

  ![Docker image add](/images/common/dashboard_user_workspace_resources_add_docker.png)

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
Примеры названий:

- `docker.io/myrepo/myimagename:latest` - при размещении образа в общем реестре на [Dockerhub](https://hub.docker.com/)
- `myrepo/myimagename:latest` - при размещении образа в общем реестре на [Dockerhub](https://hub.docker.com/)
- `mycompanyregister.com/myrepo/myimagename:latest` - при размещении образа в собственном реестре
  :::

::: warning <span class='iconify' data-icon='emojione-v1:warning' style='color: #e7c000; font-size: 24px;'></span>
При размещении образа на [Dockerhub](https://hub.docker.com/) или на собственном реестре необходимо предоставление публичных прав на чтение образа.
:::

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
В тестовых целях возможно использовать локальный публичный реестре платформы. В этом случае названия Докер образов будут иметь вид:

`rep.rndflow.com/myrepo/myimagename:latest`
:::

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
Для Докер образа действуют следующие правила:

- Название образа должно быть уникальным для **всей** платформы.
- Права пересборки образа имеет только владелец рабочего пространства, в котором он был создан.
  :::

- После нажатия кнопки будет создана [плитка][4] Докер образа
  ![Docker image add](/images/common/dashboard_user_workspace_resources_docker_not_build.png)

- После щелчка по плитке Докер образа будет открыто окно редактора

  ![Docker image editor](/images/common/dashboard_user_workspace_resources_docker_editor_not_build.png)

- В **Параметры сборки** выбрать **ЛОКАЛЬНАЯ ПАПКА**.

- Ввести [команды создания образа][7] в редакторе **Dockerfile**.

  Смотреть примеры в инструкции [Создание Докер образа вне платформы][5]

- Нажать кнопку **СОХРАНИТЬ**.

- Нажать кнопку **СОБРАТЬ**.

- Ввести при необходимости логин и пароль к реестру (для публичного реестра платформы можно не вводить).

  ![Docker image editor](/images/common/dashboard_user_workspace_resources_docker_editor_auth.png)

- Нажать кнопку **СОБРАТЬ**.

- Будет запущена сборка

  ![Docker image build process](/images/common/dashboard_user_workspace_resources_docker_editor_build.png)

- После успешного завершения редактор примет вид

  ![Docker image editor after build](/images/common/dashboard_user_workspace_resources_docker_editor_аfter_build.png)

- На вкладке <span class='iconify-inline' data-icon='mdi:cogs'></span> **РЕСУРСЫ** в разделе <span class="iconify-inline" data-icon="mdi:docker"></span> **Docker-образы** соответстующая плитка примет вид:

  ![Docker image after build](/images/common/dashboard_user_workspace_resources_docker_after_build.png)

  **Использование внешнего Git репозитория с файлами сборки**

  - В **Параметры сборки** выбрать **GIT РЕПОЗИТОРИЙ**.
  - Ввести URL публичного репозитория с файлами сборки Докер образа.
  - Нажать кнопку **СОХРАНИТЬ**.
  - Нажать кнопку **СОБРАТЬ**.

  ![Docker image editor git context](/images/common/dashboard_user_workspace_resources_docker_editor_git.png)

## Создание Докер образа вне платформы

1. Зарегистрироваться на [публичном Докер реестре](https://hub.docker.com/).
2. Создать новый репозиторий _imagename_

   _imagename_ - произвольное название: mycoolimage или python-projectXX

3. Установить [Докер приложение](https://www.docker.com/) на локальный компьютер. Пользователи Windows могут установливать [Docker Desktop](https://www.docker.com/products/docker-desktop).

   Также можно использовать публичные сервисы работы с Докер образами, например [Play with Docker](https://labs.play-with-docker.com/).

4. Создать новый _Dockerfile_ файл на основе [стандартных образов][6].

   **Вариант 1**

   Для создания собственного образа необходимо использовать базовый образ [rndflow/job.py](https://hub.docker.com/r/rndflow/job.py/tags?page=1&ordering=last_updated).

   ```dockerfile:no-line-numbers
   FROM docker.io/rndflow/job.py
   RUN ...
   COPY ...
   ```

   **Вариант 2**

   В случае необходимости использовать образ операционной системы отличный от используемого в [rndflow/job.py](https://hub.docker.com/r/rndflow/job.py/tags?page=1&ordering=last_updated) необходимо самостоятельно устанавливать библиотекy [job.py](https://github.com/rndflow/rndflow-job-py). Также необходимо установить библиотеки moreutils,curl, zlib-dev, libjpeg-dev.

   ```dockerfile:no-line-numbers
   FROM ...
   ...
   RUN apt-get update && apt-get install -y moreutils curl zlib1g-dev libjpeg-dev
   RUN cd /opt/ && curl -L https://github.com/rndflow/rndflow-job-py/archive/refs/heads/master.tar.gz | tar -xvz && \
   pip3 install -r rndflow-job-py-master/requirements.txt && pip3 install ./rndflow-job-py-master && rm -rf rndflow-job-py-master
   ...
   ```

   Если при этом требуется поддержка интерактивного сервера [Jupyter](https://jupyter.org/), то необходимо установить:

   ```dockerfile:no-line-numbers
   RUN pip3 install notebook jupytext
   ```

   **Вариант 3**

   Если требуется поддержка счета на AMD или NVIDIA GPU картах, то необходимо использовать соответствующие базовые образы.

5. Собрать образ из _Dockerfile_ (если используется _podman_, то заменить _docker_ на _podman_).

   В папке с _Dockerfile_: `docker build -t user/imagename:1.0 .` или `docker build -t user/imagename:1.0 -f _Dockerfile_ .`

   Здесь _user/imagename_ - пользователь реестра/название образа (репозитория реестра из пункта _2_ ), _:1.0_ - версия.

   ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
   При пересборке образа без изменения _Dockerfile_ файла необходимо очистить кеш предыдущей сборки. Например, можно удалить последний образ: `docker rmi user/imagename:1.0`

   или осуществлять сборку без использования кеша: `docker build -t user/imagename:1.0 . --no-cache`
   :::

6. Проверить появление образа: `docker image ls`
7. Тестовый запуск: `docker run -it --rm imagename`
8. Загрузить новый образ на [публичный Докер реестр](https://hub.docker.com/)

   - Подключиться к реестру : `docker login -u user -p **********`

     или чтобы не оставлять пароль в истории команд : `docker login -u user`

   - Загрузить образ в реестр: `docker push user/imagename:1.0`

9. Если необходимо удалить ошибочно загруженный образ из реестра: [Инструкция удаления образа](https://stackoverflow.com/questions/30680703/remove-an-image-tag-from-docker-hub/60112300#60112300)

10. Если сборка идет на стороннем сервисе, то рекомендуется отсоединиться от реестра: `docker logout`

[1]: /docs/desc/docker.md
[2]: /docs/instructions/workspace.html#переход-в-рабочее-пространство
[3]: /docs/desc/workspace.md
[4]: /docs/desc/docker.md#плитка
[5]: #создание-докер-образа-вне-платформы
[6]: /docs/dev/docker.md
[7]: https://docs.docker.com/engine/reference/builder/
