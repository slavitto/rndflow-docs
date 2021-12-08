# Сервер расчетов (Исполнитель задач)

**Сервер расчетов или исполнитель задач** (Executor) - cпециальный программный модуль платформы ([исполнитель задач](/docs/intro/architecture.md#компоненты)), который отвечает за запуск задач на определенном вычислительном кластере.

В настоящий момент поддерживается исполнитель задач для организации запуска задач в среде [Kubernetes](https://kubernetes.io/). Исполнитель задач позволяет организовать проведение вычислений и на удаленных облачных вычислительных мощностях таких как [Yandex Managed Service for Kubernetes](https://cloud.yandex.com/en/services/managed-kubernetes) и [VK Cloud Containers](https://mcs.mail.ru/containers/). При этом исполнитель задач может располагаться как на стороне вычислительных ресурсов так и в произвольном месте.

![Executor](/images/common/executor.png)

Структура:

- Логотип
- Название
- Описание
- <span class='iconify-inline' data-icon='mdi:eye' style="color: blue"></span> Общедоступность сервера
- <span class='iconify-inline' data-icon='mdi:play-circle' style="color: green"></span> Статус
- Цена за задание - стоимость выполнения одного задания
- Цена за ядро CPU - стоимость CPU **TODO**
- Цена за GPU - стоимость GPU **TODO**
- Цена за МБ - стоимость МБ **TODO**
- Цена за секунду - стоимость секунды **TODO**
- Кнопка "РЕДАКТИРОВАТЬ"

Статус сервера:

- <span class='iconify-inline' data-icon='mdi:play-circle' style="color: green"></span> Активен
- <span class='iconify-inline' data-icon='mdi:pause-circle' style="color: orange"></span> Приостановлен

<br clear="right"/>
