# Контейнеры

## Стандартные Докер образы

### Базовые

- [rndflow/job.py](https://hub.docker.com/r/rndflow/job.py/tags?page=1&ordering=last_updated) - базовый образ контейнера

  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-job-py).

- [rndflow/apps-job.py](https://hub.docker.com/r/rndflow/apps-job.py) - базовый образ контейнера с дополнительными библиотеками Python
  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-images/tree/main/multi/apps).

### NVIDA GPU

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Примеры Докер образов для использования видеокарты NVIDIA V100.  
:::

- [rndflow/cuda-job.py](https://hub.docker.com/r/rndflow/cuda-job.py/tags?page=1&ordering=last_updated) - базовый образ

  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-images/tree/main/gpu/cuda).

- [rndflow/pycuda-job.py](https://hub.docker.com/r/rndflow/pycuda-job.py/tags?page=1&ordering=last_updated) - образ c поддержкой библиотеки [PyCuda](https://documen.tician.de/pycuda/).

  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-images/tree/main/gpu/pycuda).

  [Пример](https://server.rndflow.com/projects/3) использования на платформе.

- [rndflow/pyopencl-cuda-job.py](https://hub.docker.com/r/rndflow/pyopencl-cuda-job.py/tags?page=1&ordering=last_updated) - образ c поддержкой библиотеки [PyOpenCL](https://documen.tician.de/pyopencl/).

  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-images/tree/main/gpu/pyopencl-cuda).

  [Пример](https://server.rndflow.com/projects/5) использования на платформе.

- [rndflow/tensorflow-job.py:cuda](https://hub.docker.com/r/rndflow/tensorflow-job.py/tags?page=1&ordering=last_updated) - образ c поддержкой библиотеки [Tensorflow](https://www.tensorflow.org/).

  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-images/tree/main/gpu/tensorflow).

  [Пример](https://server.rndflow.com/projects/4) использования на платформе.

### AMD GPU

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Примеры Докер образов для использования видеокарты AMD Radeon HD 7970.  
:::

- [rndflow/opencl-amd-job.py](https://hub.docker.com/r/rndflow/opencl-amd-job.py/tags?page=1&ordering=last_updated) - базовый образ

  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-images/tree/main/gpu/amd).

- [rndflow/pyopencl-amd-job.py](https://hub.docker.com/r/rndflow/pyopencl-amd-job.py/tags?page=1&ordering=last_updated) - образ c поддержкой библиотеки [PyOpenCL](https://documen.tician.de/pyopencl/).

  Репозиторий доступен по [ссылке](https://github.com/rndflow/rndflow-images/tree/main/gpu/pyopencl-amd).

## Создание Докер образа

1. Зарегистрироваться на [публичном Докер регистре](https://hub.docker.com/).
2. Создать новый репозиторий _imagename_

   _imagename_ - произвольное название: mycoolimage или python-projectXX

3. Установить [Докер приложение](https://www.docker.com/) на локальный компьютер. Пользователи Windows могут установливать [Docker Desktop](https://www.docker.com/products/docker-desktop).

   Также можно использовать публичные сервисы работы с Докер образами, например [Play with Docker](https://labs.play-with-docker.com/).

4. Создать новый _Dockerfile_ файл на основе стандартных образов.

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

   Здесь _user/imagename_ - пользователь*регистра/название*образа (репозитория регистра из пункта _2_ ), _:1.0_ - версия.

   ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
   При пересборке образа без изменения _Dockerfile_ файла необходимо очистить кеш предыдущей сборки. Например, можно удалить последний образ: `docker rmi user/imagename:1.0`

   или осуществлять сборку без использования кеша: `docker build -t user/imagename:1.0 . --no-cache`
   :::

6. Проверить появление образа: `docker image ls`
7. Тестовый запуск: `docker run -it --rm imagename`
8. Загрузить новый образ на [публичный Докер регистр](https://hub.docker.com/)

   - Подключиться к регистру : `docker login -u user -p **********`

     или чтобы не оставлять пароль в истории команд : `docker login -u user`

   - Загрузить образ в регистр: `docker push user/imagename:1.0`

9. Если необходимо удалить ошибочно загруженный образ из регистра: [Инструкция удаления образа](https://stackoverflow.com/questions/30680703/remove-an-image-tag-from-docker-hub/60112300#60112300)

10. Если сборка идет на стороннем сервисе, то рекомендуется отлогиниться от регистра: `docker logout`
