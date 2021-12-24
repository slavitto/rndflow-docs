# Докер образы

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
