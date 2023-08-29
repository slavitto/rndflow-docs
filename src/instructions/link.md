# Связи

## Изменение типа связи

- Щелкнуть по [связи][1] и нажать на иконку <span class='iconify-inline' data-icon='mdi:edit'></span> для открытия [свойств][2] связи.

- В вкладке <span class='iconify-inline' data-icon='mdi:transit-connection-horizontal'></span>**СВЯЗЬ** выбрать необходимый [тип связи][3].

## Переименование переменных

- Щелкнуть по [связи][1] и нажать на иконку <span class='iconify-inline' data-icon='mdi:edit'></span> для открытия [свойств][2] связи.

- В вкладке <span class='iconify-inline' data-icon='mdi:inbox-arrow-down'></span>**ПЕРЕИМЕНОВАНИЕ** задать правила переименования переменных пакетов, проходящих по ней (подробности см. в [свойства связи][2]).

![Link rename package variables](/images/common/link_rename_vars.png)

Связь приобретает вид для активного и пассивного типа соответственно:

![Link var renamed](/images/common/link_var_renamed.png)
![Link var renamed](/images/common/link_var_renamed_pass.png)

## Фильтрация пакетов

- Щелкнуть по [связи][1] и нажать на иконку <span class='iconify-inline' data-icon='mdi:edit'></span> для открытия [свойств][2] связи.

  ![Link edit](/images/common/link_edit.png)

- В вкладке <span class='iconify-inline' data-icon='mdi:transit-connection-horizontal'></span>**СВЯЗЬ** в поле ввода <span class='iconify-inline' data-icon='mdi:magnify'></span> **Фильтр пакетов** ввести регулярное выражение названия меток пакетов, которым разрешено перемещаться по этой связи. Для регулярного выражения должен использоваться [диалект PostgreSQL](https://www.postgresql.org/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP).

  Пример добавление нескольких фильтров:

  ![Links filtration](/images/common/link_filters.png)

[1]: /desc/links.md
[2]: /desc/links.md#своиства
[3]: /desc/links.md#типы-связеи
