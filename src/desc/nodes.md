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
- Кнопки для доступа к соответствующим свойствам узла

  - <span class="iconify-inline" data-icon="mdi:card-text"> </span> [Описание](#описание)
  - <span class="iconify-inline" data-icon="mdi:tune"></span> [Параметры](#параметры)
  - <span class="iconify-inline" data-icon="mdi:kubernetes"></span> [Контейнер](#контейнер)
  - <span class="iconify-inline" data-icon="mdi:file-code"></span> [Файлы](#фаилы)
  - <span class="iconify-inline" data-icon="mdi:package"></span> [Пакеты](#пакеты)
  - <span class="iconify-inline" data-icon="mdi:cog-box"></span> [Задания](#задания)

- <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Переключатель активности узла
- Описания узла: _Compute node description_
- <span class="iconify" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"></span> Одного или несколько выходов

### SQL узел

<span class="iconify-inline" data-icon="mdi:database"></span> **SQL узел** (Query)- SQL скрипт, реализующий обработку вошедших в него пакетов данных. В отличии от расчетного узла позволяет оперировать данными всех вошедших в него пакетов.

![Query node](/images/common/node_query.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"></span> [Описание](#описание)
  - <span class="iconify-inline" data-icon="mdi:tune"></span> [Параметры](#параметры)
  - <span class="iconify-inline" data-icon="mdi:database"></span> [Запрос](#запрос)
  - <span class="iconify-inline" data-icon="mdi:package"></span> [Пакеты](#пакеты)

### Узел данных

<span class="iconify-inline" data-icon="mdi:download-circle"></span> **Узел данных** (Data)- промежуточный этап хранения данных в виде FIFO очереди.

![Data node](/images/common/node_data.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"></span> [Описание](#описание)
  - <span class="iconify-inline" data-icon="mdi:tune"></span> [Параметры](#параметры)
  - <span class="iconify-inline" data-icon="mdi:package"></span> [Пакеты](#пакеты)

## Описание

**Описание узла** - название, текстовое описание назначения и [спецификация](#спецификация) узла.

![Node description](/images/common/node_panel_desc.png)

Структура:

- Название узла
- Описание узла
- [Спецификация](#спецификация) узла
- Кнопка "РЕДАКТИРОВАТЬ"

По нажатию кнопки **РЕДАКТИРОВАТЬ** окно переходит в режим редактирования описания и заголовка узла:

![Node edit description ](/images/common/node_panel_desc_edit.png)

## Спецификация

**Спецификация узла** - опциональное описание состава входных и состава выходных пакетов узла.

Выполняет две функции:

- Информационную - для представления формата, состава и назначения переменных пакета.
- Служебную - для обеспечения возможности фильтрации поступления пакета в узел.

Структура:

- Вход - входные переменные узла

  - Общие команды
    - <span class="iconify-inline" data-icon="mdi:content-copy"></span> Копирование всех переменных
    - <span class="iconify-inline" data-icon="mdi:content-paste"></span> Вставка переменных
    - <span class="iconify-inline" data-icon="mdi:plus"></span> Добавление переменной
  - Список переменных

    Структура каждого элемента списка:

    - Тип переменной <span class="iconify-inline" data-icon="mdi:code-json"></span> [Поле](#пакеты) или <span class="iconify-inline" data-icon="mdi:file"></span> [Файл](#пакеты) с возможностью изменения при щелчке по ней
    - Название переменной с возможностью переименования при щелчке по ней
    - Описание переменной с возможностью переименования при щелчке по нему
    - <span class="iconify-inline" data-icon="mdi:content-copy"></span> Копирование переменной
    - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление переменной

- Выход - выходные переменные узла аналогично входным переменным.

![Node desc](/images/common/node_panel_spec.png)

## Параметры

<span class="iconify-inline" data-icon="mdi:tune"></span> **Параметры узла** (Parameters) - управляющие параметры выполнения узла, передаваемые исполнительной программе (скрипту) узла.

![Node params](/images/common/node_params.png)

## Контейнер

**Среда исполнения. Контейнер** - Докер образ на основе которого будет создаваться контейнер для выполнения программных модулей узла в рамках конкретного задания.

![Node container](/images/common/node_panel_container.png)

Cтруктура:

- Докер образ - название докер образа
- Сервер расчетов - индивидуальный сервер расчета (исполнитель) узла

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Выбор происходит по нажатия кнопки <span class="iconify-inline" data-icon="mdi:plus"></span>
  :::

- Главные программный модуль узла - первоначально запускаемый программный модуль или скрипт (см. [Файлы](#фаилы)).
  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Запуск должен соответствовать правила запуска в shell-среде ОС Linux.

  > Например:
  >
  > ```:no-line-numbers
  > ./run.py
  > ```
  >
  > или
  >
  > ```:no-line-numbers
  > bash run.sh
  > ```
  >
  > или
  >
  > ```:no-line-numbers
  > python script.py
  > ```

- Требования - запрашиваемые вычислительные ресурсы для запуска докер образа
  - Память - запрашиваемая оперативная память
  - Ядра ЦПУ - запрашиваемое количество процессоров (ядер) центрального процессора
  - ГПУ - запрашиваемое количество графических процессоров (видекарт)
  - Лимит времени (минуты) - максимальное время выполнения задания в минутах

## Файлы

**Файл** - программный модуль, скрипт или библиотека предназначенные для выполнения в узле.

В узле в соответствующей вкладке **Файлы** отображается список файлов.
Структура:

- Список файлов

  Структура каждого элемента списка:

  - Иконка типа файла
  - Название файла с возможностью переименования файла при щелчке по нему
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise" style="color: green"></span> Установить свойство файла: исполняемый
  - <span class="iconify-inline" data-icon="mdi:hexadecimal"></span> Установить свойство файла: бинарный
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление файла

- Редактор файла

  - Название файла
  - Панель инструментов

    - <span class="iconify-inline" data-icon="mdi:format-font-size-decrease"></span> Уменьшить размер шрифта
    - <span style="background-color: green; color: white">Текущий размер шрифта</span>
    - <span class="iconify-inline" data-icon="mdi:format-font-size-increase"></span> Увеличить размер шрифта
    - <span class="iconify-inline" data-icon="mdi:wrap"></span> Включить/Выключить перенос строк
    - <span class="iconify-inline" data-icon="mdi:vimeo"></span> Включить VIM режим
    - <span class="iconify-inline" data-icon="mdi:fullscreen"></span> Открыть на полный экран

  - История изменений файла: <span style="background-color: green; color: white"> автор / время последних изменений </span>

- Кнопка "СОХРАНИТЬ" - для сохранение изменений файла
- <span class="iconify-inline" data-icon="mdi:file-plus"></span> Кнопка создания нового файла

![Node file](/images/common/node_panel_file.png)

## Пакеты

**Пакет** (Package) - набор данных, поступающих на обработку на соответствующий узел.

Структура пакета:

- Метка - имя пакета
- Поля - переменные простых типов
  > Представление в [JSON](https://www.json.org/json-en.html) формате.Такие переменные можно использовать в запросах логического узла.
- Файлы - объектные переменные или файлы
  > Представление в объектном виде (hdf5, plotly, markdown). При автоматическом создании используется [HDF5](https://portal.hdfgroup.org/display/HDF5/Introduction+to+HDF5) формат.

Доступные действия для пакета:

- Отображение списка и значений полей
- Отображение списка файлов
- Отображение выбранного файла в текстовом виде (при поддержке формата)
- Визуализация выбранного файла (при поддержке формата)
- <span class="iconify-inline" data-icon="mdi:download"></span> Скачивание файла

![Package](/images/common/package.png)

**Мастер пакет** (Master package) - выбранный пользователем корневой пакет слоя данных. Выбор такого пакета позволяет отображать в слое данных только родительские и дочерние пакеты мастер пакета.

В узле в соответствующей вкладке **Пакеты** отображается список пакетов узла:

![Node package](/images/common/node_panel_package.png)

Структура:

- Панель инструментов
  - <span class="iconify-inline" data-icon="mdi:package-up"></span> Загрузки/создания пакета
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> Обработать пакет в узле
    > Создать новое задание для обработки в текущем узле с выбранным входным пакетом.
  - <span class="iconify-inline" data-icon="mdi:motion-play"></span> Обработка пакета в интерактивном режиме
  - <span class="iconify-inline" data-icon="mdi:pin"></span>/<span class="iconify-inline" data-icon="mdi:pin-off" style="color: red"></span> Выбор/Отмена выбора установки мастер пакета слоя данных
  - <span class="iconify-inline" data-icon="mdi:refresh"></span> Обновление списка пакетов
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление выбранных пакетов
- Таблица с списком пакетов
  - Столбцы таблицы
    - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> - переключатель выбора пакета
    - Id - идентификатор пакета
    - Метка - имя пакета
    - Создано - время создания пакета
    - Владелец - пользователь создавший пакет

Для открытия окна конкретного пакета необходимо щелкнуть по его идентификатору в столбце **Id**.

## Запрос

**Запрос** - SQL-скрипт для формирования выходных пакетов по заданным условия. В качестве параметров запроса возможно использовать переменные пакета типа **поле**.

Структура:

- Вкладка по умолчанию "ТЕКСТ ЗАПРОСА"

  - Редактор SQL запроса
  - Панель инструментов

    - <span class="iconify-inline" data-icon="mdi:format-font-size-decrease"></span> Уменьшить размер шрифта
    - <span style="background-color: green; color: white">Текущий размер шрифта</span>
    - <span class="iconify-inline" data-icon="mdi:format-font-size-increase"></span> Увеличить размер шрифта
    - <span class="iconify-inline" data-icon="mdi:wrap"></span> Включить/Выключить перенос строк
    - <span class="iconify-inline" data-icon="mdi:vimeo"></span> Включить VIM режим
    - <span class="iconify-inline" data-icon="mdi:fullscreen"></span> Открыть на полный экран

  - История изменений запроса: <span style="background-color: green; color: white"> автор / время последних изменений </span>
  - Кнопка "СОХРАНИТЬ" - для сохранение изменений запроса

  ![Node query](/images/common/node_panel_query.png)

- Вкладка "ТЕСТ"

  > Отображение результата тестового выполнения запроса.

  - Панель инструментов
    - <span class="iconify-inline" data-icon="mdi:refresh"></span> Тестовый запуск запроса
    - <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Показывать только новые результаты запроса
  - Таблица с результатом
    - Столбцы таблицы
      - Пакеты - идентификаторы выбранных входных пакетов
      - Переменные - переменные (поля и файлы) выходного пакета

  ![Node query results](/images/common/node_panel_query_test.png)

- Вкладка "РЕЗУЛЬТАТЫ"

  > Результаты запроса переданные в следующий узел.

  - Панель инструментов
    - <span class="iconify-inline" data-icon="mdi:refresh"></span> Обновления списка
    - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаления выбранных заданий
  - Таблица с списком заданий
    - Столбцы таблицы
      - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> - переключатель выбора результатов
      - Входные пакеты - идентификаторы входных пакетов
      - Выходные пакеты - идентификаторы выходных пакетов

  ![Node query results](/images/common/node_panel_query_result.png)

## Задания

**Задание** (Task) - экземпляр выполнение узла с конкретными входными пакетами и параметрами.

![Node task](/images/common/task.png)

В узле в соответствующей вкладке **Задания** отображается список выполненных ранее и текущих заданий:

![Node tasks list](/images/common/node_panel_task.png)

Структура:

- Панель инструментов
  - <span class="iconify-inline" data-icon="mdi:refresh"></span> Обновления списка
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаления выбранных заданий
- Таблица с списком заданий
  - Столбцы таблицы
    - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> - переключатель выбора задания
    - Id - идентификатор задания
    - Создано - время инициации задания
    - Владелец - пользователь создавший задание
    - Состояние - текущее состояние выполнения задания

Для открытия окна конкретного задания необходимо щелкнуть по его идентификатору в столбце **Id**.

## Группа

<span class="iconify-inline" data-icon="mdi:group"></span> **Группа** (Group) - совокупность узлов.

![Group](/images/common/group.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"></span> Описание
  - <span class="iconify-inline" data-icon="mdi:location-enter"></span> Переход внутрь группы
