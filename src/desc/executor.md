# Сервер расчетов (исполнитель задач)

## Общее

**Сервер расчетов или исполнитель задач** (Executor) - cпециальный программный модуль платформы ([исполнитель задач](/docs/intro/architecture.md#компоненты)), который отвечает за запуск задач на определенном вычислительном кластере.

В настоящий момент поддерживается исполнитель задач для организации запуска задач в среде [Kubernetes](https://kubernetes.io/). Исполнитель задач позволяет организовать проведение вычислений и на удаленных облачных вычислительных мощностях таких как [Yandex Managed Service for Kubernetes](https://cloud.yandex.com/en/services/managed-kubernetes), [VK Cloud Containers](https://mcs.mail.ru/containers/) или [Amazon EKS](https://aws.amazon.com/eks/). При этом исполнитель задач может располагаться как на стороне вычислительных ресурсов так и в произвольном месте.

![Executor](/images/common/executor.png)

Структура:

- Панель описания
- <span class='iconify-inline' data-icon='mdi:clipboard-pulse'></span>ЗАГРУЖЕННОСТЬ - панель нагрузки на сервер расчетов
  - Панель инструментов
    - <span class='iconify-inline' data-icon='mdi:refresh'></span> Кнопка обновления графиков
    - График изменения числа заданий
    - Загрузка CPU узлов сервера расчетов
    - Потребления памяти узлами сервера расчетов
    - Активность за последний год (заданий за день)

## Панель описания

Структура:

- Логотип
- Название
- Описание
- <span class='iconify-inline' data-icon='mdi:eye' style="color: blue"></span> Общедоступность сервера
- <span class='iconify-inline' data-icon='mdi:play-circle' style="color: green"></span> Статус
- Цена за задание - стоимость выполнения одного задания
- Цена за ядро CPU - стоимость использования ядра CPU
- Цена за GPU - стоимость использования GPU
- Цена за МБ - стоимость использования ОЗУ за МБ
- Цена за секунду - стоимость секунды выполнения задания
- Кнопка "РЕДАКТИРОВАТЬ" (при наличии прав)

Статус сервера:

- <span class='iconify-inline' data-icon='mdi:play-circle' style="color: green"></span> Активен
- <span class='iconify-inline' data-icon='mdi:pause-circle' style="color: orange"></span> Приостановлен
- <span class='iconify-inline' data-icon='mdi:stop-circle' style="color: red"></span> Выключен

<br clear="right"/>
