# Сервер расчетов (Исполнитель задач)

## Описание

**Сервер расчетов или исполнитель задач** (Executor)-cпециальный программный модуль платформы ([исполнитель задач](/docs/intro/architecture.md#компоненты)), который отвечает за запуск задач на определенном вычислительном кластере.

В настоящий момент поддерживается исполнитель задач для организации запуска задач в среде [Kubernetes](https://kubernetes.io/). Исполнитель задач позволяет организовать проведение вычислений и на удаленных облачных вычислительных мощностях таких как [Yandex Managed Service for Kubernetes](https://cloud.yandex.com/en/services/managed-kubernetes) и [VK Cloud Containers](https://mcs.mail.ru/containers/). При этом исполнитель задач может располагаться как на стороне вычислительных ресурсов так и в произвольном месте.

## Добавление в рабочее пространство

- [Перейти](/docs/instructions/#переход-в-рабочее-пространство) в [рабочее пространство](/docs/desc/workspace.md)
- Перейти на вкладку **РЕСУРСЫ**

![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- Напротив надписи <span class="iconify-inline" data-icon="mdi:server"></span> **Серверы расчетов** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> **1** и далее выбрав сервер из списка **2**.

![Add Executor](/images/common/dashboard_user_workspace_add_executor.png)
