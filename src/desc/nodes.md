# Узлы

**Узел** - отдельный блок графа, представляющий собой этап (операцию) реализуемого алгоритма.

## Состояние

Узел может находить в состояниях:

- <span class="iconify-inline" data-icon="bi:toggle2-on" style="color: green"></span> Активен

- <span class="iconify-inline" data-icon="bi:toggle2-off"></span> Отключен

В активном состоянии в узле автоматически обрабатываются (создаются [задания](#задания)) все приходящие в него пакеты.

## Типы и состав узлов

### Расчетный узел

<span class="iconify-inline" data-icon="mdi:kubernetes"></span> **Расчетный узел** (Compute) - набор исполняемых программ ([скриптов](/docs/dev/compute.md#код-расчетного-узла)) и их параметров, реализующих заданную пользователем функциональность.

![Compute node](/images/common/node_compute.png)

Состав узла:

- <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 10px;"></span> Вход
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
- <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"></span> Одного или несколько выходов

### SQL узел

<span class="iconify-inline" data-icon="mdi:database"></span> **SQL узел** (Query)- [SQL запрос](/docs/dev/sql.md#запрос-sql-узла), реализующий выборку и обработку вошедших в него пакетов данных. В отличии от расчетного узла позволяет оперировать данными всех вошедших в него пакетов.

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

## Панели узла

Панель узла - панель для установки различных параметров и свойств узла.

![Node panels](/images/common/node_panels.png)

Общие управляющие кнопки:

- <span class="iconify-inline" data-icon="mdi:dock-right"></span> Изменить расположение панели (в нижней или правой части экрана)
- <span class="iconify-inline" data-icon="mdi:fullscreen"></span> Открыть панель на полный экран
- <span class="iconify-inline" data-icon="mdi:close"></span> Закрыть панель

### Описание

**Описание узла** - название, текстовое описание назначения и [спецификация](#спецификация) узла.

![Node description](/images/common/node_panel_desc.png)

Структура:

- Название узла
- Описание узла
- [Спецификация](#спецификация) узла
- Кнопка "РЕДАКТИРОВАТЬ"

По нажатию кнопки **РЕДАКТИРОВАТЬ** окно переходит в режим редактирования описания и заголовка узла:

![Node edit description ](/images/common/node_panel_desc_edit.png)

### Спецификация

**Спецификация узла** - опциональное описание состава входных и состава выходных пакетов узла.

Выполняет две функции:

- Информационную - для представления формата, состава и назначения переменных пакета.
- Служебную - для обеспечения возможности фильтрации поступления пакета в узел.

Структура:

- Вход - входные переменные узла

  - Общие команды
    - <span class="iconify-inline" data-icon="mdi:content-copy"></span> Копирование всех переменных
    - <span class="iconify-inline" data-icon="mdi:content-paste"></span> Вставка ранее скопированных переменных
    - <span class="iconify-inline" data-icon="mdi:auto-fix"></span> Автоматическая вставка переменных на основе пакетов
    - <span class="iconify-inline" data-icon="mdi:plus"></span> Добавление переменной
  - Список переменных

    Структура каждого элемента списка:

    - Тип переменной <span class="iconify-inline" data-icon="mdi:code-json"></span> [Поле](#пакеты) или <span class="iconify-inline" data-icon="mdi:file"></span> [Файл](#пакеты) или <span class="iconify-inline" data-icon="mdi:package"></span> [Вложенные пакеты](#пакеты) с возможностью изменения при щелчке по ней
    - Название переменной с возможностью переименования при щелчке по ней
    - Описание переменной с возможностью переименования при щелчке по нему
    - <span class="iconify-inline" data-icon="mdi:content-copy"></span> Копирование переменной
    - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление переменной

- Выход - выходные переменные узла аналогично входным переменным.

![Node desc](/images/common/node_panel_spec.png)

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
Существует возможность [копирования параметров узла][2] в входную спецификацию узла.
:::

### Параметры

<span class="iconify-inline" data-icon="mdi:tune"></span> **Параметры узла** (Parameters) - управляющие параметры выполнения узла, передаваемые исполнительной программе (скрипту) узла.

![Node params](/images/common/node_panel_params.png)

Подробное [описание](./node_params.md).

### Контейнер

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

### Файлы

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

  - Кнопка истории изменений файла: <span style="background-color: green; color: white"> автор / время последних изменений </span>

- Кнопка "СОХРАНИТЬ" - для сохранение изменений файла
- <span class="iconify-inline" data-icon="mdi:file-plus"></span> Кнопка создания нового файла

![Node file](/images/common/node_panel_file.png)

### Пакеты

#### Описание

**Пакет** (Package) - набор данных, поступающих на обработку на соответствующий узел.

Общее количество пакетов в узле в текущем [слое данных][1] отображается в виде ярлыка <span class='iconify-inline' data-icon='ph:number-square-one-fill' style="color: green"></span>:

![Node packages count](/images/common/node_compute_packages.png)

**Мастер пакет** (Master package) <span class='iconify-inline' data-icon='fluent:rectangle-landscape-16-filled' style="color: red"></span> - выбранный пользователем корневой пакет слоя данных. Выбор такого пакета позволяет отображать в текущем [слое данных][1] только родительские и дочерние пакеты мастер пакета.

![Master package](/images/common/node_panel_packages_master.png)

Состав пакета:

- Метка - имя пакета
- Поля - переменные простых типов
  > Представление в [JSON](https://www.json.org/json-en.html) формате.Такие переменные можно использовать в запросах логического узла.
- Файлы - объектные переменные или файлы
  > Представление в объектном виде (hdf5, plotly, markdown). При автоматическом создании используется [HDF5](https://portal.hdfgroup.org/display/HDF5/Introduction+to+HDF5) формат.
- Массив пакетов - массив "вложенных" пакетов. "Вложенный" пакет представляет собой обычный пакет с дополнительной ссылкой на пакет, в который он "вложен".

  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>

  Массив пакетов может быть [сформирован](/docs/dev/sql.md#пример-формирования-пакета-с-переменнои-типа-массив-пакетов) только в [SQL yзле](#sql-узел) с помощью агрегатной функции `json_agg(json_build_object())`. Вложенные пакеты должны иметь одинаковую структуру.

  Пакет с таким типом переменной не может быть снова подан на вход другого SQL узла.

  Для исполнительного скрипта в [расчетном узле](#расчетныи-узел) пакет с переменой типа "массивом пакетов" загружается как набор из основного пакета и вложенных пакетов в виде отдельных обычных пакетов.
  :::

#### Интерфейс

В узле в соответствующей вкладке <span class='iconify-inline' data-icon='mdi:package'></span> **Пакеты** отображается список пакетов узла в рамках выбранного [слоя данных][1]:

![Node package](/images/common/node_panel_packages.png)

Структура:

- Панель инструментов

  - <span class="iconify-inline" data-icon="mdi:package-up"></span> Загрузка/создание пакета
  - <span class="iconify-inline" data-icon="mdi:download"></span> Скачать выделенные пакеты
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> Обработать выделенные пакеты
  - <span class="iconify-inline" data-icon="mdi:motion-play"></span> Обработать выделенные задания в интерактивном режиме
  - <span class="iconify-inline" data-icon="mdi:pin"></span>/<span class="iconify-inline" data-icon="mdi:pin-off" style="color: red"></span> Выбор/Отмена выбора установки мастер пакета слоя данных
  - <span class="iconify-inline" data-icon="mdi:content-copy"></span> Копировать выбранные пакеты между узлами и проектами
  - <span class="iconify-inline" data-icon="mdi:content-paste"></span> Вставить ранее скопированные пакеты

    > При вставке пакетов из другого проекта необходимо сначала обновить целевой проект по кнопке **F5**.После вставки может понадобиться обновить список пакетов кнопкой <span class="iconify-inline" data-icon="mdi:refresh"></span>.

  - <span class="iconify-inline" data-icon="mdi:refresh"></span> Обновление списка пакетов
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление выбранных пакетов
  - <span class="iconify-inline" data-icon="mdi:delete-sweep"></span> Удаление всех пакетов
  - <span class="iconify-inline" data-icon="mdi:table-column-plus-after"></span> Добавление переменной пакета

    Добавление переменной пакета в качестве нового столбца в таблице пакетов.

    Список добавленных переменных с возможностью удаления <span class='iconify-inline' data-icon='mdi:close'></span> .

  - <span class="iconify-inline" data-icon="mdi:content-save"></span> Сохранить набор текущих столбцов

- Таблица с списком пакетов

  - Столбцы таблицы

    - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> - переключатель выбора пакета
    - Id - идентификатор пакета

      Дополнительно на идентификаторе может отображаться ярлык с количеством дочерних заданий: <span class='iconify-inline' data-icon='ph:number-square-one-fill' style="color: green"></span>

    - Метка - имя пакета
    - Создано - время создания пакета
    - Владелец - пользователь создавший пакет

Для открытия окна конкретного пакета необходимо щелкнуть по его идентификатору в столбце **Id**.

Структура отображения состава пакета:

- Метка
- Поля и их значения
- Список файлов
  - Отображение выбранного файла в текстовом виде (при поддержке формата)
  - Визуализация выбранного файла (при поддержке формата)
  - <span class="iconify-inline" data-icon="mdi:download"></span> Скачать файл

![Package](/images/common/package.png)

#### Обработка пакета

Пакет может обрабатываться в 3 режимах:

1. Автоматическом

   Автоматическая обработка пакета происходит в случае если узел находится в активном [состоянии](#состояние). В этом случае для каждого нового входящего пакета автоматически создается [задание](#задания), которое отравляется на соответствующий сервер расчетов проекта.

2. [Ручном не интерактивном](/docs/instructions/package.md#обработка-пакета)

   Пакет отправляется на первичную или повторную обработку вручную.

3. [Ручном интерактивном](/docs/instructions/package.md#интерактивная-обработка-пакета)

   Пакет отправляется на первичную или повторную обработку интерактивную обработку вручную.

### Запрос

**Запрос** - [SQL скрипт](/docs/dev/sql.md#запрос-sql-узла) для формирования выходных пакетов по заданным условия. В качестве параметров запроса возможно использовать переменные пакета типа **поле**.

Структура:

- Вкладка по умолчанию "ТЕКСТ ЗАПРОСА"

  - Редактор SQL запроса
  - Панель инструментов

    - <span class="iconify-inline" data-icon="mdi:auto-fix"></span> [SQL мастер](/docs/dev/sql.md#sql-мастер)
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

### Задания

**Задание** (Job) - экземпляр выполнения узла с конкретными входными пакетами и параметрами.

Общее количество выполняемых заданий в узле в текущем [слое данных][1] отображается в виде ярлыка <span class='iconify-inline' data-icon='ph:number-square-one-fill' style="color: green"></span>:

![Node packages count](/images/common/node_compute_jobs.png)

В соответствующей вкладке **Задания** узла отображается полных список выполненных ранее и выполняемых заданий:

![Node job list](/images/common/node_panel_job.png)

Структура:

- Панель инструментов

  - <span class="iconify-inline" data-icon="mdi:download"></span> Скачать выделенные задания
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> Перезапустить выделенные задания
  - <span class="iconify-inline" data-icon="mdi:motion-play"></span> Перезапустить выделенные задания в интерактивном режиме
  - <span class="iconify-inline" data-icon="mdi:reload-alert"></span> Перезапустить ошибочные задания
  - <span class="iconify-inline" data-icon="mdi:refresh"></span> Обновления списка
  - <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle-outline"></span> Фильтрация заданий по состоянию
  - <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление выбранных заданий
  - <span class="iconify-inline" data-icon="mdi:delete-sweep"></span> Удаление всех заданий
  - <span class="iconify-inline" data-icon="mdi:table-column-plus-after"></span> Добавление переменной пакета

    Добавление переменной пакета в качестве нового столбца в таблице заданий.

    Список добавленных переменных с возможностью удаления <span class='iconify-inline' data-icon='mdi:close'></span> .

  - <span class="iconify-inline" data-icon="mdi:content-save"></span> Сохранить набор текущих столбцов

- Таблица с списком заданий
  - Столбцы таблицы
    - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"></span> - переключатель выбора задания
    - Id - идентификатор задания
    - Создано - время инициации задания
    - Владелец - пользователь создавший задание
    - Состояние - текущее состояние выполнения задания

Состояние задания:

- <span class="iconify-inline" data-icon="mdi:circle-outline" style="color: grey"></span> - Создано
- <span class="iconify-inline" data-icon="mdi:progress-download" style="color: yellow"></span> - На сервере расчетов
- <span class="iconify-inline" data-icon="mdi:progress-clock" style="color: orange"></span> - В очереди на исполнение
- <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"></span> - Стартовало
- <span class="iconify-inline" data-icon="mdi:check-circle" style="color: green"></span> - Обработано
- <span class="iconify-inline" data-icon="mdi:alert-circle" style="color: red"></span> - Ошибка

Для открытия окна конкретного задания необходимо щелкнуть по его идентификатору в столбце **Id**.

Структура отображения состава задания:

- Панель управления
  - <span class='iconify-inline' data-icon='mdi:fullscreen'></span> Открыть на весь экран
  - <span class='iconify-inline' data-icon='mdi:close'></span> Закрыть
- История обработки
- <span class='iconify-inline' data-icon='mdi:package'></span> Входные пакеты
- <span class='iconify-inline' data-icon='mdi:package'></span> Выходные пакеты
- Параметры узла
- Список файлов с кнопкой сохранения <span class='iconify-inline' data-icon='mdi:content-save'></span> в [файлы](#фаилы) узла
- Окно отображения выбранного файла

![Node job](/images/common/job.png)

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
Процесс выполнения задания можно контролировать с помощью файла журнала <span class='iconify-inline' data-icon='mdi:file-clock'></span> **идентификатор_задания.log**, который расположен в списке файлов.
:::

## Группа

<span class="iconify-inline" data-icon="mdi:group"></span> **Группа** (Group) - совокупность узлов.

![Group](/images/common/group.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"></span> Описание
  - <span class="iconify-inline" data-icon="mdi:location-enter"></span> Переход внутрь группы

[1]: ./project.md#слои-данных
[2]: /docs/desc/node_params.md#управление-параметрами
