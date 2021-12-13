# Пакеты

## Создание пакета

- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][1] узла
- Нажать кнопку <span class="iconify-inline" data-icon="mdi:package"></span> на панели инструментов.
- Откроется окно создания [пакета][1]

  ![Create package](/images/common/node_panel_packages_create.png)

  В окне можно задать:

  - метку;
  - переменные [пакета][1] типа "поле", соответствующие параметрам узла (при их наличии);
  - переменные [пакета][1] типа "файл" загрузив произвольные файлы из файловой системы.

## Обработка пакета

- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][1] узла
- Выбрать необходимый пакет установив напротив него переключатель **1** в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span>.
- Нажать кнопку <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> (**2**) на панели инструментов.

  ![Run package](/images/common/node_panel_packages_execute.png)

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Задания][2] узла, в котором должно появиться новое задание. Может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий.

## Интерактивная обработка пакета

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
С видео примером можно ознакомиться в разделе [видео](./video.md).
:::

**Запуск**

- Открыть панель <span class="iconify-inline" data-icon="mdi:kubernetes"></span>[Контейнер][4] узла и в параметре **Память** установить не менее 256М.
- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][1] узла
- Выбрать необходимый пакет установив напротив него переключатель в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span> **1**.
- Нажать кнопку **2** <span class="iconify-inline" data-icon="mdi:motion-play"></span> на панели инструментов.

  ![Run package](/images/common/node_panel_packages_execute_jupyter.png)

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span> [Задания][2] узла, в котором должно появиться новое задание. Может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий.

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
  Через определенное время заданное в настройках [исполнителя задач](/docs/desc/executor.md) (по умолчанию 24 часа) интерактивная задача будет автоматически остановлена.
  :::

- Перенос измененного скрипта в узел **TODO**.

## Переименование переменных

Смотреть [переименование переменных в связи](./link.md#переименование-переменных) в разделе [Связи](./link.md).

## Фильтрация пакетов

Смотреть [фильтрация пакетов](./link.md#фильтрация-пакетов) в разделе [Связи](./link.md).

[1]: /docs/desc/nodes.md#пакеты
[2]: /docs/desc/nodes.md#задания
[3]: https://jupyter-notebook.readthedocs.io/en/stable/ui_components.html#notebook-dashboard
[4]: /docs/desc/nodes.md#контеинер
