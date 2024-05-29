# Platform Architecture  

## Components

The platform is based on a client-server architecture, which can be conditionally represented as three software levels: server-cloud, client, and computing.

The diagram shows the platform architecture with two external computing clusters.

![Architecture](./images/components_en.png)

**Client Level** - a web application providing user interaction with platform services. The web application is developed using the [JavaScript](https://www.javascript.com/) programming language and the [Quasar 2](https://quasar.dev/) and [Vue.js 3](https://v3.vuejs.org/) frameworks and is deployed on the [NginX](https://nginx.org/en/) web server.

It includes:

- Web client

**Server-Cloud** - a software and hardware infrastructure that includes a set of application and system software implementing the platform's main services and providing remote access to them in an Internet environment. The server-cloud is the main self-sufficient element of the platform and can function either in isolation within individual organizational structures (companies) or jointly implementing complex distributed data processing sequences.

It includes:

- Access Controller - access controller from the Internet [Nginx Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
- API Server - REST server based on [Fast API](https://fastapi.tiangolo.com/)
- Background Task Scheduler - manager for running long-running background tasks on [Celery](https://docs.celeryproject.org/)
- Message Broker - message exchange broker between platform elements on [RabbitMQ](https://www.rabbitmq.com/)
- DBMS - [PostgreSQL](https://www.postgresql.org/) 13 database
- Message Broker Proxy - proxy module for message exchange between DBMS and message broker
- S3 Storage - object (file) data storage [MinIO](https://min.io)

_API Server_ - a basic component that implements the platform's main business logic and user request processing. Interaction with the server is implemented using a special open API, which can be used both in the platform's software and in third-party developers' software products.

_Message Broker_ creates a unified space for message exchange between the platform's server components and reduces the load on relational data storage systems. To optimize message exchange, the platform uses an additional message broker proxy.

_Database Server_ is used to store the platform's service information, processing graph structure and metadata, as well as direct storage of small volumes of user data.
The Celery-based background task handler is used to run long-running asynchronous service procedures.

The [S3 Storage/Server](/desc/s3.md) is used for storing various object (file) data.

**Computing Level (Cluster)** - a high-performance software and hardware infrastructure designed for direct execution of user executable modules (scripts, programs) of nodes.
Computing clusters can be either integrated into the server-cloud or shared general-purpose clusters that are part of publicly available computing resources.

It includes:

- Task Executor - task execution scheduler
- Task - executable task in a Kubernetes environment
- Interactive Server - an optional module for interactive access to a task based on a Jupyter server

The [Task Executor](/desc/executor.md) is a special software module that tracks the appearance of new data (packages for processing) through the API server and sends it for [execution](#TODO) to the task scheduler of a specific cluster.

By default, tasks are executed in non-interactive mode. The platform also provides the ability to run a task in interactive mode, with a [Jupyter](https://jupyter.org/) server additionally launched in the user's container, with which the user can interact in the usual way.

## Runtime Environment (Containers)

### Overview

All platform components are designed to run in a [Docker](https://www.docker.com/) container, and it is recommended to run them in a [Kubernetes](https://kubernetes.io/) environment.

All user-executed jobs run in Docker containers, which in turn are run on Kubernetes clusters connected to the platform.

Using Docker containers as a runtime environment allows for the isolation of executed user computing tasks, and the user can independently configure the runtime environment to meet the requirements of their applications.

For each specific node of the graph, the user can specify the required runtime environment (Docker image) by specifying a specific repository on the Internet from which the platform should download the specified image. For example, you can use the [DockerHub](https://hub.docker.com/) Docker image repository.

Read access to the image must be carried out without additional authorization. After the first run, the image will be cached on the platform's intermediate proxy registries at the level of computing clusters, as well as in local image stores of Kubernetes on the nodes.

The executable containers must contain the special [job.py](https://github.com/rndflow/rndflow-job-py) library. To achieve this, the image must be created from the available base images of the platform, or the library must be installed independently (see the [Containers](/dev/docker.md) section).

### OpenCL

Computation is supported only on special cluster nodes using specialized [containers](/dev/docker.md#amd-gpu).
When using, you need to specify the required number of cards in the **GPU** field on the **Container** tab of the node panel of the corresponding node.

### CUDA  

Computation is supported only on special cluster nodes using specialized [containers](/dev/docker.md#nvida-gpu).
When using, you need to specify the required number of cards in the **GPU** field on the **Container** tab of the node panel of the corresponding node.