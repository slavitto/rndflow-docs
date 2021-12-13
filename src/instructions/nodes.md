# Узлы

## Перейти в граф проекта

- [Перейти](./project.md#открытие-проекта) в [проект](/docs/desc/project.md)

- В [панели управления проектом](/docs/desc/project.md#панель-управления-проектом) нажать на <span class="iconify-inline" data-icon="mdi:sitemap"></span>**ГРАФ** и перейти в [дизайнер графа](/docs/desc/project.md#граф).

## Создание расчетного узла

- Открыть [панель создания узлов][1].
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:kubernetes"></span> [расчетного узла](/docs/desc/nodes.md#расчетныи-узел).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.
- Переименовать узел и добавить описание
  - Перейти в панель [Описание](/docs/desc/nodes.md#описание) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:card-text"></span> на узле.
  - Нажать кнопку **РЕДАКТИРОВАТЬ**.
  - Ввести необходимое имя в поле **Название**.
  - Ввести необходимое описание в редакторе **Описание**.
  - Нажать кнопку **СОХРАНИТЬ**.
- Создать исполнительный скрипт узла

  - Перейти в панель [Файлы][2] щелкнув по иконке <span class="iconify-inline" data-icon="mdi:file-code"></span> на узле.
  - Добавить новый файл нажав на кнопку <span class="iconify-inline" data-icon="mdi:file-plus"></span> и дать уникальное для этого узла название. Название требуется вводить с расширением файла (например, **run.py** ).
  - Щелчком по строке с файлом открыть редактор файла и набрать необходимый [код](/docs/dev/compute.md#код-расчетного-узла).
  - Нажать кнопку **СОХРАНИТЬ**
  - Установить для файла свойство "Исполняемый" нажав на иконку <span class="iconify-inline" data-icon="mdi:cog-clockwise"></span> напротив имени файла .

- Задать исполнительное окружение

  - Перейти в панель [Контейнер](/docs/desc/nodes.md#контейнер) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:kubernetes"></span> на узле.
  - В поле **Докер образ** ввести имя используемого докер образа. Можно использовать как [стандартные образы платформы](/docs/dev/docker.md#стандартные-докер-образы) (например, **rndflow/job.py**), так и [создать собственный докер образ](/docs/dev/docker.md#создание-докер-образа).
  - В поле редактора ниже указать скрипт, который должен быть запущен после запуска контейнера. Требуется указать команду запуска файла, который был добавлен в панели <span class="iconify-inline" data-icon="mdi:file-code"></span>[Файлы][2].

## Создание узла данных

- Открыть [панель создания узлов][1].
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:download-circle"></span> [узла данных](/docs/desc/nodes.md#узел-данных).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.

## Создание SQL узла

- Открыть [панель создания узлов][1].
- Щелкнуть по иконке <span class="iconify-inline" data-icon="mdi:database"></span> [SQL узла](/docs/desc/nodes.md#sql-узел).
- Разместить в необходимом месте экрана и соединить с необходимыми узлами.
- Создать SQL запрос
  - Перейти в панель [SQL](/docs/desc/nodes.md#запрос) щелкнув по иконке <span class="iconify-inline" data-icon="mdi:database"></span> на узле.
  - В вкладке **ТЕКСТ ЗАПРОСА** ввести код запроса.
  - В вкладке **ТЕСТ** ознакомиться с результатами тествого запуска запроса.
  - Нажать кнопку **СОХРАНИТЬ**.

## Создание соединений между узлами

- Потянуть выход <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 15px;"></span> одного узла к входу <span class="iconify-inline" data-icon="akar-icons:circle-fill" style="color: green; font-size: 10px;"></span> второго узла.

- Отпустить кнопку мыши после выделения второго узла (появление красной рамки вокруг второго узла)

## Выполнение узла

Смотреть [обработка пакета](./package.md#обработка-пакета) разделе [Пакеты](./package.md) .

## Выделение нескольких узлов

- Нажать и не отпускать кнопку <span class='iconify-inline' data-icon='vaadin:ctrl'></span>
- Нажать на необходимые узлы (каждый узел будет выделен зеленой рамкой)
- Отпустить кнопку <span class='iconify-inline' data-icon='vaadin:ctrl'></span>

Выделенные узлы можно одновременно:

- перемещать по экрану
- копировать
- перемещать в группы

## Копирование узлов

- Выделить узел (нажать на узел) или [несколько узлов](выделение-нескольких-узлов).
- Нажать на кнопку <span class="iconify-inline" data-icon="mdi:content-copy"></span> на [панели действий][3].

  ![Project action panel](/images/common/project_action_panel.png)

  На [панели действий][3] должна появиться кнопка <span class="iconify-inline" data-icon="mdi:content-paste"></span>.

- Для копирования в этот же проект нажать на кнопку <span class="iconify-inline" data-icon="mdi:content-paste"></span>

- Для копирования в другой проект
  - Открыть в новый вкладке необходимый проект или если проект уже открыт, то обновить его по кнопке **F5**.
    > На [панели действий][3] должна появиться кнопка <span class="iconify-inline" data-icon="mdi:content-paste"></span>.
  - Нажать на кнопку <span class="iconify-inline" data-icon="mdi:content-paste"></span>

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Пакеты при копировании узла не копируются!
:::

[1]: /docs/desc/project.md#панель-создания-узлов
[2]: /docs/desc/nodes.md#файлы
[3]: /docs/desc/project.md#панель-деиствии
