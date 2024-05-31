# Docker Images
## Standard Docker Images
### Base
- [rndflow/job.py](https://hub.docker.com/r/rndflow/job.py/tags?page=1&ordering=last_updated) - base container image
Repository available at [link](https://github.com/rndflow/rndflow-job-py).
- [rndflow/apps-job.py](https://hub.docker.com/r/rndflow/apps-job.py) - base container image with additional Python libraries
Repository available at [link](https://github.com/rndflow/rndflow-images/tree/main/multi/apps).

### NVIDIA GPU

::: warning
<span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span> Examples of Docker images for using NVIDIA V100 GPU.
:::

- [rndflow/cuda-job.py](https://hub.docker.com/r/rndflow/cuda-job.py/tags?page=1&ordering=last_updated) - base image
Repository available at [link](https://github.com/rndflow/rndflow-images/tree/main/gpu/cuda).

- [rndflow/pycuda-job.py](https://hub.docker.com/r/rndflow/pycuda-job.py/tags?page=1&ordering=last_updated) - image with support for [PyCuda](https://documen.tician.de/pycuda/) library.
Repository available at [link](https://github.com/rndflow/rndflow-images/tree/main/gpu/pycuda).
[Example](https://server.rndflow.com/projects/3) of usage on the platform.

- [rndflow/pyopencl-cuda-job.py](https://hub.docker.com/r/rndflow/pyopencl-cuda-job.py/tags?page=1&ordering=last_updated) - image with support for [PyOpenCL](https://documen.tician.de/pyopencl/) library.
Repository available at [link](https://github.com/rndflow/rndflow-images/tree/main/gpu/pyopencl-cuda).

[Example](https://server.rndflow.com/projects/5) of usage on the platform.
- [rndflow/tensorflow-job.py:cuda](https://hub.docker.com/r/rndflow/tensorflow-job.py/tags?page=1&ordering=last_updated) - image with support for [Tensorflow](https://www.tensorflow.org/) library.
Repository available at [link](https://github.com/rndflow/rndflow-images/tree/main/gpu/tensorflow).

[Example](https://server.rndflow.com/projects/4) of usage on the platform.

### AMD GPU

::: warning
<span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span> Examples of Docker images for using AMD Radeon HD 7970 GPU.
:::

- [rndflow/opencl-amd-job.py](https://hub.docker.com/r/rndflow/opencl-amd-job.py/tags?page=1&ordering=last_updated) - base image

Repository available at [link](https://github.com/rndflow/rndflow-images/tree/main/gpu/amd).

- [rndflow/pyopencl-amd-job.py](https://hub.docker.com/r/rndflow/pyopencl-amd-job.py/tags?page=1&ordering=last_updated) - image with support for [PyOpenCL](https://documen.tician.de/pyopencl/) library.

Repository available at [link](https://github.com/rndflow/rndflow-images/tree/main/gpu/pyopencl-amd).