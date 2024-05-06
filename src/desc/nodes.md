# Узлы

**Узел** - отдельный блок графа, представляющий собой этап (операцию) реализуемого алгоритма.

## Состояние

Узел в текущем [слое данных][1] может находиться в следущих состояниях:

- <span class="iconify-inline" data-icon="bi:toggle2-on" style="color: green"/> Активен

- <span class="iconify-inline" data-icon="bi:toggle2-off"/> Отключен

В активном состоянии в узле автоматически обрабатываются (создаются [задания][5]) все приходящие в него пакеты.

## Типы и состав узлов

### Расчетный узел

<span class="iconify-inline" data-icon="mdi:kubernetes"/> **Расчетный узел** (Compute) - набор исполняемых программ ([скриптов](/dev/compute.md#код-расчетного-узла)) и их параметров, реализующих заданную пользователем функциональность.

![Compute node](/images/common/node_compute.png)

Состав узла:

- <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 10px;"/> Вход
- Заголовок
  - <span class="iconify-inline" data-icon="mdi:kubernetes"/> Иконка типа узла
  - Название узла: _compute_
  - <span class="iconify-inline" data-icon="mdi:bell-plus-outline"/> Кнопка открытия диалога управления [оповещениями](#оповещения-узла) узла
  - <span class="iconify-inline" data-icon="mdi:delete"/> Кнопка удаления узла
- Кнопки для доступа к соответствующим вкладкам панели узла

  - <span class="iconify-inline" data-icon="mdi:card-text"> </span> [Описание](#описание)
  - <span class="iconify-inline" data-icon="mdi:tune"/> [Параметры](#параметры)
  - <span class="iconify-inline" data-icon="mdi:kubernetes"/> [Контейнер](#контеинер)
  - <span class="iconify-inline" data-icon="mdi:file-code"/> [Файлы](#фаилы)
  - <span class="iconify-inline" data-icon="mdi:package"/> [Пакеты](#пакеты)
  - <span class="iconify-inline" data-icon="mdi:cog-box"/> [Задания](#задания)
  - <span class="iconify-inline" data-icon="mdi:alert-circle"/> [Ошибочные задания](#задания) (при наличии)

- <span class="iconify-inline" data-icon="bi:toggle2-off"/> Переключатель активности узла в текущем [слое данных][1]
- Описания узла: _Compute node description_
- <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"/> Одного или несколько выходов

### SQL узел

<span class="iconify-inline" data-icon="mdi:database"/> **SQL узел** (Query)- [SQL запрос](/dev/sql.md#запрос-sql-узла), реализующий выборку и обработку вошедших в него пакетов данных. В отличии от расчетного узла позволяет оперировать данными всех вошедших в него пакетов.

![Query node](/images/common/node_query.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим вкладкам панели узла:

- Кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"/> [Описание](#описание)
  - <span class="iconify-inline" data-icon="mdi:tune"/> [Параметры](#параметры)
  - <span class="iconify-inline" data-icon="mdi:database"/> [Запрос](#запрос)
  - <span class="iconify-inline" data-icon="mdi:package"/> [Пакеты](#пакеты)

### Узел данных

<span class="iconify-inline" data-icon="mdi:download-circle"/> **Узел данных** (Data)- промежуточный этап хранения данных в виде FIFO очереди.

![Data node](/images/common/node_data.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим вкладкам панели узла:

- Кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"/> [Описание](#описание)
  - <span class="iconify-inline" data-icon="mdi:tune"/> [Параметры](#параметры)
  - <span class="iconify-inline" data-icon="mdi:package"/> [Пакеты](#пакеты)

### Группа

<span class="iconify-inline" data-icon="mdi:group"/> **Группа** (Group) - совокупность узлов.

![Group](/images/common/group.png)

Общий состав аналогичен [виду расчетного узла](#расчетныи-узел). Но доступ обеспечивается только к следующим свойствам узла:

- Кнопки для доступа к соответствующим свойствам узла
  - <span class="iconify-inline" data-icon="mdi:card-text"/> Описание
  - <span class="iconify-inline" data-icon="mdi:location-enter"/> Переход внутрь группы

## Оповещения узла

Оповещения расчетного узла предназначены для рассылки уведомлений, подписавшимся пользователям, о произошедщих событиях в узле с объектами (задания), создателем которых является пользователь.

В окне оповещений узла доступно:

- Кнопка <span class="iconify-inline" color="teal" data-icon="mdi:email-outline"/> или <span class="iconify-inline" color="blue" data-icon="mdi:send-circle-outline"/> - выбор способа оповещений (электронная почта <span class="iconify-inline" color="teal" data-icon="mdi:email-outline"/> или телеграмм <span class="iconify-inline" color="blue" data-icon="mdi:send-circle-outline"/>).
  > Для использования уведомлений с помощью Телеграмм необходимо, чтобы экземляр платформы поддерживал данный способ уведомлений,
    а также чтобы в [настройках пользователя][9] был включен переключатель интеграции с Телеграмм .
- <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"/> Оповещения включены/выключены - переключатель включение/выключение оповещений.
- <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"/> - переключатели включение/выключение отдельных типов оповещений.

Типы оповещений:
- Задание выполнено - задание успешно завершено.
- Все задания выполнены - все задания завершены (как успешно, так и с ошибками).
  > Проверка наличия заданий осуществляется только в текущем узле поэтому возможны ложно-положительные уведомления.
- Задание не выполнено - завершено с ошибкой.

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"/>
 В связи с наличием [ограничений](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this) Телеграмм платформа может ограничивать количество отправляемых оповещений для пользователя при их большом количестве.
 :::

## Панели узла

Панель узла - панель для установки различных параметров и свойств узла.

![Node panels](/images/common/node_panels.png)

Общие управляющие кнопки:

- <span class="iconify-inline" data-icon="mdi:dock-right"/> Изменить расположение панели (в нижней или правой части экрана)
- <span class="iconify-inline" data-icon="mdi:fullscreen"/> Открыть панель на полный экран
- <span class="iconify-inline" data-icon="mdi:close"/> Закрыть панель

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
    - <span class="iconify-inline" data-icon="mdi:content-copy"/> Копирование всех переменных
    - <span class="iconify-inline" data-icon="mdi:content-paste"/> Вставка ранее скопированных переменных
    - <span class="iconify-inline" data-icon="mdi:auto-fix"/> Автоматическая вставка переменных на основе пакетов
    - <span class="iconify-inline" data-icon="mdi:plus"/> Добавление переменной
  - Список переменных

    Структура каждого элемента списка:

    - Тип переменной <span class="iconify-inline" data-icon="mdi:code-json"/> [Поле][3] или <span class="iconify-inline" data-icon="mdi:file"/> [Файл][3] или <span class="iconify-inline" data-icon="mdi:package"/> [Вложенные пакеты][3] с возможностью изменения при щелчке по ней
    - Название переменной с возможностью переименования при щелчке по ней
    - Описание переменной с возможностью переименования при щелчке по нему
    - <span class="iconify-inline" data-icon="mdi:content-copy"/> Копирование переменной
    - <span class="iconify-inline" data-icon="mdi:delete"/> Удаление переменной

- Выход - выходные переменные узла аналогично входным переменным.

![Node desc](/images/common/node_panel_spec.png)

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
Существует возможность [копирования параметров узла][2] в входную спецификацию узла.
:::

### Параметры

<span class="iconify-inline" data-icon="mdi:tune"/> **Параметры узла** (Parameters) - управляющие параметры выполнения узла, передаваемые исполнительной программе (скрипту) узла.

![Node params](/images/common/node_panel_params.png)

Подробное [описание](./node_params.md).

### Контейнер

**Среда исполнения. Контейнер** - Докер образ на основе которого будет создаваться контейнер для выполнения программных модулей узла в рамках конкретного задания.

![Node container](/images/common/node_panel_container.png)

Cтруктура:

- Докер образ - название докер образа и список [докер образов][7] рабочего пространства.

  ![Docker images list](/images/common/node_panel_container_dockerslist.png)

  Необходимый докер образ можно выбрать из списка или набрать название самостоятельно (в последнем случае набор необходимо завершить нажатием **Enter**).

- <span class="iconify-inline" data-icon="mdi:all-inclusive" style="color: red"/> -  Загрузка, политика загрузки докер образа узла.

  Типы:
  - <span class="iconify-inline" data-icon="mdi:all-inclusive" style="color: red"/> - Всегда, загружать докер образ в случае его изменения, иначе использовать локальную версию.

  - <span class="iconify-inline" data-icon="mdi:repeat-once" style="color: blue"/> - При отсутствии, загружать докер образ при его отсутствии на узле.

  - <span class="iconify-inline" data-icon="mdi:download-off-outline" style="color: orange"/> - Никогда, не загружать докер образ из внешнего репозитория. Использовать только локальную версию.

  - <span class="iconify-inline" data-icon="mdi-robot-outline" style="color: blue"/> - Исполнитель, использовать значение по умолчанию [исполнителя][10].

  Знак <span class="iconify-inline" data-icon="mdi-lock"/> появляется если к узлу подключен [секрет][11], типа ["Загрузка образов"][12], то есть если необходимо подключение к приватному Докер реестру.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
  Все типы политик, кроме типа "Исполнитель", соответствуют стандартным [политикам](https://kubernetes.io/concepts/containers/images/#image-pull-policy) Kubernetes.
  :::

  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"/>
  Рекомендуемая политика по умолчанию "При отсутствии". Временное переключение на политику "Всегда" необходимо при обновлении используемого образа (образ обновляется только на том узле, на котором выполняется задание с указанной политикой).

  При постоянном использовании политики "Всегда" без промежуточного кеширующего прокси возможно превышение лимитов на доступ к регистру хранения (лимиты определяются самими регистром, например, для [Dockerhub](https://hub.docker.com/) задаются следущие [лимиты](https://docs.docker.com/docker-hub/download-rate-limit/)).
  :::

- <span class="iconify-inline" data-icon="mdi:speedometer-medium"  style="color: orange"/> - Приоритет, приоритет выполнения заданий.

  Типы:

  - <span class="iconify-inline" data-icon="mdi:speedometer-slow" style="color: red"/> - низкий
  - <span class="iconify-inline" data-icon="mdi:speedometer-medium" style="color: orange"/> - нормальный
  - <span class="iconify-inline" data-icon="mdi:speedometer" style="color: green"/> - высокий

- <span class="iconify-inline" data-icon="mdi:server-plus" style="color: green"/> - [Сервер расчетов][10], индивидуальный сервер расчета (исполнитель) узла.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>

  После выбора сервера расчетов, кнопка заменяется на иконку соответстующего сервера расчетов, а на панели узла появляется пометка <span class='iconify-inline' data-icon='mdi:circle' style='color: green'/> над <span class='iconify-inline' data-icon='mdi:kubernetes'/> :

  ![Compute node with executor](/images/common/node_compute_executor.png)

  :::

- Скрипт - первоначально запускаемый программный модуль или скрипт узла (см. [Файлы](#фаилы)).
  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
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

- Требования - запрашиваемые вычислительные ресурсы для запуска докер контейнера.
  - Память - запрашиваемая оперативная память
  - Ядра ЦПУ - запрашиваемое количество процессоров (ядер) центрального процессора
  - ГПУ - запрашиваемое количество графических процессоров (видекарт)
  - Лимит времени (минуты) - максимальное время выполнения задания в минутах
- Параллелизация заданий - ограничение максимального количества одновременно выполняемых заданий (задание считается выполняемым, если оно было передано на выполнение в кластер Kubernetes).

### Файлы

**Файл** - программный модуль, скрипт или библиотека предназначенные для выполнения в узле.

В узле в соответствующей вкладке **Файлы** отображается список файлов.
Структура:

- Список файлов

  Структура каждого элемента списка:

  - Иконка типа файла
  - <span class="iconify-inline" data-icon="mdi:content-save-alert" style="color: red"/> Иконка наличия несохраненных изменений
  - Название файла с возможностью переименования файла при щелчке по нему
  - <span class="iconify-inline" data-icon="mdi:cog-clockwise" style="color: green"/> Установить свойство файла: исполняемый
  - <span class="iconify-inline" data-icon="mdi:hexadecimal"/> Установить свойство файла: бинарный
  - <span class="iconify-inline" data-icon="mdi:delete"/> Удаление файла

- Редактор файла

  - Название файла
  - Панель инструментов

    - <span class="iconify-inline" data-icon="mdi:format-font-size-decrease"/> Уменьшить размер шрифта
    - <span style="background-color: green; color: white">Текущий размер шрифта</span>
    - <span class="iconify-inline" data-icon="mdi:format-font-size-increase"/> Увеличить размер шрифта
    - <span class="iconify-inline" data-icon="mdi:wrap"/> Включить/Выключить перенос строк
    - <span class="iconify-inline" data-icon="mdi:vimeo"/> Включить VIM режим
    - <span class="iconify-inline" data-icon="mdi:fullscreen"/> Открыть на полный экран

  - Кнопка открытия [истории изменений](#история-изменения) файла: <span style="color: green; border: 1px solid green"> автор / время последних изменений </span>.

- Кнопка "СОХРАНИТЬ" - для сохранение изменений файла
- <span class="iconify-inline" data-icon="mdi:file-plus"/> Кнопка создания нового файла
- <span class="iconify-inline" data-icon="mdi:file-upload"/> Кнопка загрузки нового файла

![Node file](/images/common/node_panel_file.png)

### Пакеты

В вкладке <span class='iconify-inline' data-icon='mdi:package'/> **Пакеты** отображается список [пакетов][4] узла в рамках выбранного [слоя данных][1]:

![Node package](/images/common/node_panel_packages.png)

#### Панель инструментов

- <span class="iconify-inline" data-icon="mdi:package-up"/> Загрузка/создание пакета
- <span class="iconify-inline" data-icon="mdi:download"/> Скачать выделенные пакеты
- <span class="iconify-inline" data-icon="mdi:cog-clockwise"/> Обработать выделенные пакеты
- <span class="iconify-inline" data-icon="mdi:refresh-auto"/> Перезапустить все пакеты
- <span class="iconify-inline" data-icon="mdi:update"/> Использовать выделенные пакеты для запуска [заданий-инициаторов][8] (запуск заданий по расписанию)
- <span class="iconify-inline" data-icon="mdi:motion-play"/> Обработать выделенные задания в интерактивном режиме
- <span class="iconify-inline" data-icon="mdi:pin"/>/<span class="iconify-inline" data-icon="mdi:pin-off" style="color: red"/> Выбор/Отмена выбора установки мастер пакета слоя данных
- <span class="iconify-inline" data-icon="mdi:content-copy"/> Копировать выбранные пакеты между узлами и проектами
- <span class="iconify-inline" data-icon="mdi:content-paste"/> Вставить ранее скопированные пакеты

  > При вставке пакетов из другого проекта необходимо сначала обновить целевой проект по кнопке **F5**.После вставки может понадобиться обновить список пакетов кнопкой <span class="iconify-inline" data-icon="mdi:refresh"/>.

- <span class="iconify-inline" data-icon="mdi:refresh"/> Обновление списка пакетов

  >Может содержать дополнительно два вида ярлыков:

  >- Верхний ярлык зеленого цвета  <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"/>- информирует об изменении количества пакетов в узле.
  >- Нижний ярлык оранжевого цвета <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: orange"/> - информирует об изменении количества заданий некоторых пакетов в списке.

- <span class="iconify-inline" data-icon="mdi:delete"/> Удаление выбранных пакетов

- <span class="iconify-inline" data-icon="mdi:delete-sweep"/> Удаление всех пакетов

- <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle-outline"/> [Фильтр по количеству заданий](#фильтр-по-количеству-задании)

- <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle"/> [Фильтр по входной спецификации](#фильтр-по-спецификации)

- <span class="iconify-inline" data-icon="mdi:chart-scatter-plot"/> [Совместный просмотр выбранных пакетов](#окно-просмотра-пакетов)

- <span class="iconify-inline" data-icon="mdi:chart-scatter-plot"/> [Окно просмотра пакетов](#окно-просмотра-пакетов)

- <span class="iconify-inline" data-icon="mdi:table-column-plus-after"/> Добавление переменной пакета

  Добавление переменной пакета в качестве нового столбца в таблице пакетов.

  Список добавленных переменных с возможностью удаления <span class='iconify-inline' data-icon='mdi:close'/>.

- <span class="iconify-inline" data-icon="mdi:content-save"/> Сохранить набор текущих столбцов

#### Таблица пакетов

- <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"/> - переключатель выбора пакета
- Id - идентификатор пакета

  Дополнительно на идентификаторе может отображаться ярлык с количеством дочерних заданий: <span class='iconify-inline' data-icon='ph:number-square-one-fill' style="color: green"/>

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
  Для просмотра конкретного пакета в отдельном [окне](#окно-просмотра-пакета) необходимо щелкнуть по его идентификатору в столбце **Id**.
  :::

- Метка - имя пакета
- Создано - время создания пакета
- Владелец - пользователь создавший пакет

#### Фильтр по количеству заданий
Открывается по щелчку по <span class="iconify-inline" data-icon="mdi:horizontal-circle-outline"/> в [панели инструментов](#панель-инструментов).

![Package](/images/common/node_panel_packages_filter.png)

- Активировать - активация фильтра
- Тип операции - выбор типа проверки количества заданий по отношению к указанному значению в поле "Количество заданий".
- Количество заданий

#### Фильтр по спецификации

Открывается по щелчку по <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle"/> в [панели инструментов](#панель-инструментов). Осуществляет фильтрацию по входной спецификации узла.

![Package](/images/common/node_panel_packages_spec_filter.png)

- Активировать - активация фильтра
- Поля - выбор переменной из спецификации, по которой будет производиться фильтрация
- Тип операции - позволяет выбрать тип проверки по отношению к указанному значению в нижнем поле ввода.
- Поле ввода ограничения

#### Окно просмотра пакета

Открывается по щелчку по идентификатору пакета в столбце **Id** в [таблице](#таблица-пакетов) со списком пакетов.

![Package](/images/common/package.png)

Состав [пакета][4]:

- Панель инструментов

  - <span class='iconify-inline' data-icon='mdi:open-in-new'/> Открыть пакет на новой странице браузера
    ::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'/>
    При открытии пакета на новой странице браузера возвращается прямая ссылка на пакет.
    :::

  - <span class='iconify-inline' data-icon='mdi:fullscreen'/> Открыть на весь экран
  - <span class='iconify-inline' data-icon='mdi:close'/> Закрыть

- Метка
- Поля и их значения
- Список файлов с кнопкой скачивания <span class="iconify-inline" data-icon="mdi:download"/>
- Окно отображения выбранного файла
- Кнопка [уникального идентификатора][3] пакета (в правом нижнем углу)

  - Щелчок по идентификатору копирует его в буфер обмена.
  - Нажатие на <span class='iconify-inline' data-icon='mdi:menu-down'/> открывает меню с дополнительными командами

    - <span class='iconify-inline' data-icon='mdi:shield-check'/>Верификация хеша - осуществляет пересчет идентификатора пакета на основе его состава и истории создания. Может использоваться для проверки пакета и его истории на наличие неправомерных изменений.

      ![Package](/images/common/package_verification_good.png)

      или

      ![Package](/images/common/package_verification_bad.png)

#### Окно просмотра пакетов

Открывается по щелчку по <span class="iconify-inline" data-icon="mdi:chart-scatter-plot"/> в [панели инструментов](#панель-инструментов).

Позволяет одновременно просматривать файлы из выбранных пакетов.

![Package](/images/common/package_panel_compare.png)

- Панель инструментов

  - <span style="padding: 0 12px; border: #CCC 1px solid; border-radius: 40px;">
      <span class='iconify-inline' data-icon='mdi:view-grid'/> <small style="padding: 4px">1 x 2</small>
    </span> Выбор размера сетки отображения файлов

    > Для изменения размерности сетки требуется щелкнуть по столбцу соответствующего измерения

  - <span class='iconify-inline' data-icon='mdi:file-table-box-multiple-outline'/> Кнопка с списком фильтров файлов :
    - <span class='iconify-inline' data-icon='mdi:file-table-box-multiple-outline'/> Группировка по родительским пакетам (по умолчанию)
    - <span class='iconify-inline' data-icon='mdi:not-equal-variant'/> Группировка по уникальнымому содержимому
    - <span class='iconify-inline' data-icon='mdi:file-multiple'/> Группировка по имени файла

  - <span class='iconify-inline' data-icon='mdi:selection-remove'/> Кнопка для закрытия всех выбранных файлов.

  - Дерево файлов с корневыми элементами, отображающими идентификатор пакета в случае группировки по пакетам, либо имя файла в случае группировки по файлам. Cодержит элементы управления:
    - <span class="iconify-inline" data-icon="mdi:content-copy"/> Кнопка отображения всех файлов с выбранным именем
    - <span class="iconify-inline" data-icon="mdi:download"/> Кнопка скачивания файла

  - Сетка для отображения выбранных файлов


### Запрос

**Запрос** - [SQL скрипт](/dev/sql.md#запрос-sql-узла) для формирования выходных пакетов по заданным условия. В качестве параметров запроса возможно использовать переменные пакета типа **поле**.

Структура:

- Вкладка по умолчанию "ТЕКСТ ЗАПРОСА"

  - Редактор SQL запроса
  - Панель инструментов

    - <span class="iconify-inline" data-icon="mdi:auto-fix"/> [SQL мастер](/dev/sql.md#sql-мастер)
    - <span class="iconify-inline" data-icon="mdi:help-circle" style="color: black"/> Помощь
    - <span class="iconify-inline" data-icon="mdi:format-font-size-decrease"/> Уменьшить размер шрифта
    - <span style="background-color: green; color: white">Текущий размер шрифта</span>
    - <span class="iconify-inline" data-icon="mdi:format-font-size-increase"/> Увеличить размер шрифта
    - <span class="iconify-inline" data-icon="mdi:wrap"/> Включить/Выключить перенос строк
    - <span class="iconify-inline" data-icon="mdi:vimeo"/> Включить VIM режим
    - <span class="iconify-inline" data-icon="mdi:fullscreen"/> Открыть на полный экран

  - Кнопка истории изменений запроса: <span style="color: green; border: 1px solid green"> автор / время последних изменений </span>

    Отображение и управление истории аналогично [истории файлов](#история-изменения).

  - Кнопка "СОХРАНИТЬ" - для сохранение изменений запроса

  ![Node query](/images/common/node_panel_query.png)

- Вкладка "ТЕСТ"

  > Отображение результата тестового выполнения запроса.

  - Панель инструментов
    - <span class="iconify-inline" data-icon="mdi:refresh"/> Тестовый запуск запроса
    - <span class="iconify-inline" data-icon="bi:toggle2-off"/> Показывать только новые результаты запроса
  - Таблица с результатом
    - Столбцы таблицы
      - Пакеты - идентификаторы выбранных входных пакетов
      - Переменные - переменные (поля и файлы) выходного пакета

  ![Node query results](/images/common/node_panel_query_test.png)

- Вкладка "РЕЗУЛЬТАТЫ"

  > Результаты запроса переданные в следующий узел.

  - Панель инструментов
    - <span class="iconify-inline" data-icon="mdi:refresh"/> Обновления списка
    - <span class="iconify-inline" data-icon="mdi:delete"/> Удаления выбранных заданий
  - Таблица с списком заданий
    - Столбцы таблицы
      - <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"/> - переключатель выбора результатов
      - Входные пакеты - идентификаторы входных пакетов
      - Выходные пакеты - идентификаторы выходных пакетов

  ![Node query results](/images/common/node_panel_query_result.png)

### Задания

В вкладке <span class='iconify-inline' data-icon='mdi:cog-box'/> **Задания** отображается список [заданий][5] узла в рамках выбранного [слоя данных][1]:

![Node job list](/images/common/node_panel_job.png)

#### Панель инструментов

- <span class="iconify-inline" data-icon="mdi:download"/> Скачать выделенные задания
- <span class="iconify-inline" data-icon="mdi:cog-clockwise"/> Перезапустить выделенные задания
- <span class="iconify-inline" data-icon="mdi:motion-play"/> Перезапустить выделенные задания в интерактивном режиме
- <span class="iconify-inline" data-icon="mdi:refresh-auto"/> Перезапустить задания с выбранным статусом
- <span class="iconify-inline" data-icon="mdi:play-pause"/> Поставить на паузу или активировать [задание-инициатор][8]
- <span class="iconify-inline" data-icon="mdi:refresh"/> Обновления списка

    Может содержать дополнительный ярлык:
    - Верхний ярлык зеленого цвета  <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"/>- информирует об изменении количества заданий в узле.

- <span class="iconify-inline" data-icon="mdi:dots-horizontal-circle-outline"/> Фильтрация заданий по [состоянию][6]

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"/>
  Cостояние "<span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"/>&nbsp;Стартовало" дополнительно содержит переключатель <span class="iconify-inline" data-icon="mdi:tray-full" style="color: green"/>&nbsp;/&nbsp;<span class="iconify-inline" data-icon="mdi:tray" style="color: green"/>, что позволяет соответственно включать или исключать из этого фильтра дочерние состояния: <span class="iconify-inline" data-icon="mdi:progress-download" style="color: teal"/>&nbsp;Сгрузило данные, <span class="iconify-inline" data-icon="mdi:progress-wrench" style="color: green"/>&nbsp;Выполнено, <span class="iconify-inline" data-icon="mdi:progress-upload" style="color: teal"/>&nbsp;Загрузило данные, <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"/>&nbsp;Cформировало пакеты.
  :::

- <span class="iconify-inline" data-icon="mdi:delete"/> Удаление выбранных заданий
- <span class="iconify-inline" data-icon="mdi:delete-sweep"/> Удаление заданий с выбранным статусом
- <span class="iconify-inline" data-icon="mdi:table-column-plus-after"/> Добавление параметра узла

  Добавление параметра узла в качестве нового столбца в таблице заданий.

  Список добавленных параметров с возможностью удаления кнопкой <span class='iconify-inline' data-icon='mdi:close'/> .

- <span class="iconify-inline" data-icon="mdi:content-save"/> Сохранить набор текущих столбцов

#### Таблица заданий

- <span class="iconify-inline" data-icon="mdi:checkbox-blank-outline"/> - переключатель выбора задания
- Id - идентификатор задания
- Пакеты - идентификаторы входных пакетов
- Создано - время инициации задания
- Владелец - пользователь создавший задание
- Приоритет - приоритет выполнения задания
- Состояние - текущее [состояние][6] выполнения задания

Для открытия окна конкретного задания необходимо щелкнуть по его идентификатору в столбце **Id**.

#### Окно просмотра задания

Открывается щелчком по идентификатору конкретного задания в столбце **Id** в [таблице заданий](#таблица-заданий).

![Node job](/images/common/job.png)

Состав задания:

- Панель инструментов

  - <span class='iconify-inline' data-icon='mdi:open-in-new'/> Открыть задание на новой странице браузера
    ::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'/>
    При открытии задания на новой странице браузера возвращается прямая ссылка на задание.
    :::

  - <span class='iconify-inline' data-icon='mdi:fullscreen'/> Открыть на весь экран
  - <span class='iconify-inline' data-icon='mdi:close'/> Закрыть

- История состояний обработки
- <span class='iconify-inline' data-icon='mdi:package'/> Входные пакеты
- <span class='iconify-inline' data-icon='mdi:package'/> Выходные пакеты
- Сервер расчетов
- Узел задания с возможностью перехода на него
- Параметры контейнера
  - скрипт запуска
  - Требования - запрошенные  вычислительные ресурсы при запуске докер контейнера.
    - Память - запрошенная оперативная память
    - Ядра ЦПУ - запрошенное количество процессоров (ядер) центрального процессора
    - ГПУ - запрошенное количество графических процессоров (видекарт)
    - Лимит времени (минуты) - установленное максимальное время выполнения задания в минутах
- Периодичность запуска (только для [заданий-инициаторов][8])
- Докер образ
- Параметры узла на момент запуска
- Список файлов с кнопкой сохранения <span class='iconify-inline' data-icon='mdi:content-save'/> в [файлы](#фаилы) узла
- Окно отображения выбранного файла

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'/>
Процесс выполнения задания можно контролировать с помощью файла журнала <span class='iconify-inline' data-icon='mdi:file-clock'/> **идентификатор_задания.log**, который расположен в списке файлов.
:::

#### История изменения

Для каждого файла/запроса доступна история его изменения.

Для получения доступа к ней необходимо выбрать необходимый файл/запрос и нажать на кнопку <span style="color: green; border: 1px solid green"> автор / время последних изменений </span>.

История содержит список существующих версий.

![File history](/images/common/node_panel_file_history.png)

Состав версии в истории:

- Название
- Дата сохранения
- Опциональое описание
- Кнопки управления

  - <span class='iconify-inline' data-icon='mdi:arrow-left-circle' style="color: green"/> Восстановить
  - <span class='iconify-inline' data-icon='mdi:tag' style="color: green" /> Задать описание
  - <span class='iconify-inline' data-icon='mdi:vector-difference' style="color: green" /> Открыть окно сравнения версий файла
  - <span class='iconify-inline' data-icon='mdi:delete' style="color: green"/> Удалить

При щелчке по конкретной версии в истории она будет отображена вместо текущего файла в режиме только для чтения. Чтобы выйти из этого режима необходимо закрыть окно истории.

Окно сравнения версий файлов

![File history](/images/common/node_panel_file_history_diff.png)

[1]: ./project.md#слои-данных
[2]: /desc/node_params.md#управление-параметрами
[3]: /desc/package.md#состав
[4]: /desc/package.md
[5]: /desc/job.md
[6]: /desc/job.md#состояния
[7]: /desc/docker.md
[8]: /desc/job.md#типы
[9]: /desc/dashboard.md#редактирование
[10]: /desc/executor.md
[11]: /desc/secrets.md
[12]: /desc/secrets.md#типы-секретов