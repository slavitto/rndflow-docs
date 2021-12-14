# Связи узлов

**Связь** (Link) - соединение, обеспечивающее перемещение пакетов от узла источника к узлу назначения.

Управление:

- Редактировать [свойства](#своиства)

  Щелкнуть по связи и нажать на иконку <span class='iconify-inline' data-icon='mdi:edit'></span> для открытия свойств связи.

  - Фильтрация передаваемых пакетов
  - Переименование переменных пакетов

- Удаление

  Щелкнуть по связи и нажать на иконку <span class='iconify-inline' data-icon='mdi:delete'></span>.

## Типы связей

- Активная (Push) - пакеты между соединяемыми узлами немедленно продвигаются от узла источника к узлу назначения.

  ![Push link](/images/common/link_push.png)

- Пассивная (Pull)- последний пакет из узла источника запрашивается при каждом новом запуске [задания][3] в узле назначения.

  ![Pull link](/images/common/link_pull.png)

- Вход группы (Group input) - связь соединящая вход [группы][2] с узлом.

  ![Group input link](/images/common/link_group_input.png)

- Выход группы (Group output) - связь соединящая выход [группы][2] с узлом.

  ![Group output link](/images/common/link_group_output.png)

## Свойства

Структура:

- Управляющие кнопки

  - <span class='iconify-inline' data-icon='mdi:dock-bottom'></span> - изменить расположение панели (в нижней или правой части экрана)
  - <span class='iconify-inline' data-icon='mdi:fullscreen'></span> - открыть панель на полный экран;
  - <span class='iconify-inline' data-icon='mdi:close'></span> - закрыть панель.

- Вкладка <span class='iconify-inline' data-icon='mdi:transit-connection-horizontal'></span>**СВЯЗЬ**

  ![Link edit](/images/common/link_edit.png)

  - Тип связи - изменение типа связи.
  - <span class='iconify-inline' data-icon='mdi:magnify'></span> Фильтр пакетов - определения пакетов, которые будут передаваться по ней.

  По этой связи будут продвигаться только пакеты с подходящими метками. Фильтр - это регулярное выражение с использованием [диалекта PostgreSQL](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP).

  - Кнопка **СОХРАНИТЬ** - сохранить изменения.

- Вкладка <span class='iconify-inline' data-icon='mdi:inbox-arrow-down'></span>**ПЕРЕИМЕНОВАНИЕ**

  Вкладка позволяет задать правила переименования переменных пакетов, проходящих по ней. Переименовывать разрешается [поля][4] и [файлы][4] [пакетов][1].

  ![Link rename package variables](/images/common/link_rename_vars.png)

  - Таблица действующих правил

    - Вход - название входной переменной;
    - Выход - название выходной переменной;
    - <span class='iconify-inline' data-icon='mdi:delete'></span> - кнопка удаления правила

  - Добавить правило - поля ввода нового правила
    - Вход - название входной переменной;
    - Выход - название выходной переменной;
    - <span class='iconify-inline' data-icon='mdi:plus' style="color: green"></span> - кнопка добавления нового правила.

[1]: /docs/desc/package.md
[2]: /docs/desc/nodes.md#группа
[3]: /docs/desc/nodes.md#задания
[4]: /docs/desc/package.md#состав
