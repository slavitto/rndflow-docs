# Узлы

**Узел** - отдельный блок графа, представляющий собой этап (операцию) реализуемого алгоритма.

## Типы и состав узлов

### Расчетный узел

<span class="iconify-inline" data-icon="mdi:kubernetes"></span> **Расчетный узел** (Compute) - набор исполняемых программ (скриптов) и их параметров, реализующих заданную пользователем функциональность.

![Compute node](/images/common/node_compute.png)

Состав узла:

- <span class="iconify" data-icon="akar-icons:circle-fill" style="color: green; font-size: 10px;"></span> Вход
- Заголовок
  - <span class="iconify-inline" data-icon="mdi:kubernetes"></span> Иконка типа узла
  - Название узла: _compute_
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Кнопка удаления узла
- Иконки-кнопки для доступа к соответствующим свойствам узла

  - <span class="iconify-inline" data-icon="mdi:card-text"> </span> Описание
  - <span class="iconify-inline" data-icon="mdi:tune"></span> Параметры
  - <span class="iconify-inline" data-icon="mdi:kubernetes"></span> Контейнер
  - <span class="iconify-inline" data-icon="mdi:file-code"></span> Файлы
  - <span class="iconify-inline" data-icon="mdi:package"></span> Пакеты
  - <span class="iconify-inline" data-icon="mdi:cog-box"></span> Задачи

- <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Переключатель активности узла
- Описания узла: _Compute node description_
- <span class="iconify" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"></span> Одного или несколько выходов

### SQL узел

<span class="iconify-inline" data-icon="mdi:database"></span> **SQL узел** (Query)- SQL скрипт, реализующий обработку вошедших в него пакетов данных. В отличии от расчетного узла позволяет оперировать данными всех вошедших в него пакетов.

![Query node](/images/common/node_query.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Иконки-кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"></span> Описание
  - <span class="iconify-inline" data-icon="mdi:tune"></span> Параметры
  - <span class="iconify-inline" data-icon="mdi:database"></span> Запрос
  - <span class="iconify-inline" data-icon="mdi:package"></span> Пакеты

### Узел данных

<span class="iconify-inline" data-icon="mdi:download-circle"></span> **Узел данных** (Data)- промежуточный этап хранения данных в виде FIFO очереди.

![Data node](/images/common/node_data.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Иконки-кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"></span> Описание
  - <span class="iconify-inline" data-icon="mdi:tune"></span> Параметры
  - <span class="iconify-inline" data-icon="mdi:package"></span> Пакеты

## Параметры узла

<span class="iconify-inline" data-icon="mdi:tune"></span> **Параметры узла** (Parameters) - управляющие параметры выполнения узла, передаваемые исполнительной программе (скрипту) узла.

![Node params](/images/common/node_params.png)

## Группа

<span class="iconify-inline" data-icon="mdi:group"></span> **Группа** (Group) - совокупность узлов.

![Group](/images/common/group.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Иконки-кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"></span> Описание
  - <span class="iconify-inline" data-icon="mdi:location-enter"></span> Переход внутрь группы
