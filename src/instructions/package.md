# Пакеты

## Создание пакета

- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][1] узла
- Нажать кнопку <span class="iconify-inline" data-icon="mdi:package"></span> на панели инструментов.
- Откроется окно создания [пакета][6]

  ![Create package](/images/common/node_panel_packages_create.png)

  В окне можно задать:

  - [метку][7];
  - переменные пакета типа [поле][7], соответствующие параметрам узла (при их наличии);
  - переменные пакета типа [файл][7] загрузив произвольные файлы из файловой системы.

## Обработка пакета

- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][1] узла
- Выбрать необходимый пакет установив напротив него переключатель <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span>.
- Нажать кнопку <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> на панели инструментов.

  ![Run package](/images/common/node_panel_packages_execute.png)

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Задания][2] узла, в котором должно появиться новое [задание][8]. Может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий.

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
Процесс выполнения [задания][8] можно контролировать с помощью файла журнала <span class='iconify-inline' data-icon='mdi:file-clock'></span> **идентификатор_задания.log**, который расположен в списке файлов [задания][8] (см. панель <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Задания][2]).
:::

## Обработка пакета Jupyter скриптом

- Открыть панель <span class="iconify-inline" data-icon="mdi:file-code"></span>[Файлы][5] узла и добавить Jupyter скрипт.
- Открыть панель <span class="iconify-inline" data-icon="mdi:kubernetes"></span>[Контейнер][4] узла и в **Script** указать:
  ```
  jupyter nbconvert --execute --to html script_name.ipynb
  ```
  Здесь **script_name.ipynb** - название скрипта, [jupyter nbconvert](https://nbconvert.readthedocs.io/en/latest/) - утилита конвертации.

## Обработка пакета по расписанию

Можно осуществлять отложенный запуск задания согласно заданному пользователем расписанию.

- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][2] узла.

- Выбрать необходимый пакет, установив напротив него переключатель <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span>.
- Нажать кнопку <span class="iconify-inline" data-icon="mdi:update"></span> <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> на панели инструментов.

  ![Scheduler package](/images/common/node_panel_packages_schedule.png)

- Задать время запуска в поле <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> в Cron-формате

  Формат:

    <pre>
      <small>
      * * * * *
      | | | | |
      | | | | +----- Дни недели (диапазон: 1-7)
      | | | +------- Месяцы     (диапазон: 1-12)
      | | +--------- Дни месяца (диапазон: 1-31)
      | +----------- Часы       (диапазон: 0-23)
      +------------- Минуты     (диапазон: 0-59)
      </small>
    </pre>

  - Любое из пяти полей может содержать символ <b>*</b>  в качестве значения. Это означает полный диапазон возможных значений, например, каждая минута, каждый час и т.д.
  - Любое из полей может содержать список значений, разделенных запятыми (наприимер, 1,3,7) или интервал (поддиапазон) значений, обозначаемый дефисом (например, 1-5).
  - После звездочки <b>*</b> или интервала можно с помощью символа / указать шаг значений. Например, 0-23/2 может использоваться в поле "Часы" для указания того, что действие должно происходить каждые два часа, значение */4 в поле "Минуты" означает, что действие, должно происходить каждые четыре минуты, 1-30/3 - это то же, что и 1,4,7,10,13,16,19,22,25,28.
  - В полях "Месяцы" и "Дни недели" можно вместо числовых значений использовать сокращенные до трех букв названия месяцев (Jan, Feb ... Dec) и дней недели (Mon, Tue ... Sun).

  ![Packages schedulers start time](/images/common/node_panel_packages_schedule_time_one.png)

  - В выпадающем списке примеров <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> можно выбрать подходящий шаблон.

  - С дополнительными примерами можно ознакомиться после перехода по сслыке <span class='iconify-inline' data-icon='ph:number-circle-three-fill' style="color: red"/>.

- Установить переключатель в значение <span class="iconify-inline" data-icon="bi:toggle2-off"/> Одноразовое выполнение задания.

- Нажать на кнопку "СОХРАНИТЬ".

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Задания][3] узла, в котором должно появиться новое задание (может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий). Наличие у задания статуса <span class="iconify-inline" data-icon="mdi:sleep" style="color: grey"></span> сообщает об успешном запуске "будильника".

## Интерактивная обработка пакета с Jupyter Notebook

Смотреть [интерактивная обработка пакета](#интерактивная-обработка-пакета).

## Интерактивная обработка пакета

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
С видео примером можно ознакомиться в разделе [видео](./video.md).
:::

**Запуск**

- Открыть панель <span class="iconify-inline" data-icon="mdi:kubernetes"></span>[Контейнер][4] узла и в параметре **Память** установить не менее **256М**.
- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][1] узла
- Выбрать необходимый [пакет][6] установив напротив него переключатель <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span>.
- Нажать кнопку <span class="iconify-inline" data-icon="mdi:motion-play"></span> <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> на панели инструментов.

  ![Run package](/images/common/node_panel_packages_execute_jupyter.png)

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span> [Задания][2] узла, в котором должно появиться новое [задание][8]. Может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий.

- Когда **Состояние** задания станет вида <span class="iconify-inline" data-icon="mdi:motion-play" style="color: green"></span>, щелкнуть по иконке состояния <span class="iconify-inline" data-icon="mdi:motion-play" style="color: green"></span>.

- В браузере будет открыта новая вкладка с [панелью Jupyter][3].

  ![Jupyter](/images/common/jupyter_panel.png)

- После щелчка по скрипту узла в браузере будет открыта новая вкладка с Jupyter редактора с скриптом узла с возможностью интерактивного редактирования и выполнения.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Стандартные образы контейнеров RnDFlow включают в себя библиотеку [Jupytext](https://jupytext.readthedocs.io/en/latest/), которая позволяет работать с обычными скриптами в Jupyter Notebook. При открытии такого файла он будет автоматически разбиваться на блоки (пустая строка определяет начало блока), можно задавать блоки самостоятельно с помощью комментариев вида: #+ и #- .
  :::

  ![Jupyter edit](/images/common/jupyter_panel_edit.png)

**Остановка**

- Сохранить все изменения в вкладке Jupyter редактора с скриптом узла нажав на кнопку сохранения <span class="iconify-inline" data-icon="carbon:save"></span> в панели инструментов Jupyter редактора.

- В вкладке с Jupyter панелью нажать кнопку **Quit** (верхний правый угол).
  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
  Через определенное время неактивности, заданное в настройках [исполнителя задач](/docs/desc/executor.md) (по умолчанию 24 часа), интерактивное [задание][8] будет автоматически остановлено.
  :::

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span> [Задания][2] узла и щелкнуть по идентификатору [задания][8] в поле **Id**.
  ![Node job](/images/common/job.png)

- В списке файлов выбрать необходимые файлы и нажать для каждого кнопку <span class='iconify-inline' data-icon='mdi:content-save'></span> для сохранения изменений в [файлы][5] узла.

## Переименование переменных

Смотреть [переименование переменных в связи](./link.md#переименование-переменных) в разделе [Связи](./link.md).

## Фильтрация пакетов

Смотреть [фильтрация пакетов](./link.md#фильтрация-пакетов) в разделе [Связи](./link.md).

[1]: /docs/desc/nodes.md#пакеты
[2]: /docs/desc/nodes.md#задания
[3]: https://jupyter-notebook.readthedocs.io/en/stable/ui_components.html#notebook-dashboard
[4]: /docs/desc/nodes.md#контеинер
[5]: /docs/desc/nodes.md#фаилы
[6]: /docs/desc/package.md
[7]: /docs/desc/package.md#состав
[8]: /docs/desc/job.md
