# SQL

## Виртуальная таблица

**Виртуальная таблица** - таблица со всеми [пакетами][1], которые пришли в [SQL узел][2] из определенного предыдущего узла.

Имя таблицы соответствует имени этого предыдущего узла.

Столбцами таблицы являются имена переменных [пакета][1], выходящего из предыдущего узла учетом возможных переименований, заданных во входящей [связи](/docs/desc/links.md).

Если в [SQL узел][2] входят пакеты из разных узлов, то для каждого узла будет собственная виртуальная таблица.

## Запрос SQL узла

[SQL узел][2] должен содержать SQL запрос выбора данных. Общие правила создания запроса должны соответствовать требованиям использования SQL команды ([SELECT](https://www.postgresql.org/docs/13/sql-select.html)) на диалекте СУБД [PostgreSQL](https://www.postgresql.org).

Выбор данных производится из [виртуальных таблиц][5].

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
Используйте [SQL мастер](#sql-мастер) для создания запроса.
:::

### Правила формирования запроса

1. Результат запроса должен возвращать столбец с массивом идентификаторов пакетов, которые участвовали в формировании результата.

   Массив используется в служебных целях (не отображается пользователю при обработке пакета в скрипте расчетного узла ) для формирования истории создания пакета и для идентификации уникальности результата запроса.

2. Остальные столбцы результата запроса преобразуются в переменные типа [поле][6] или [файл][6] или [массив пакетов][6] [пакета][1]. Тип переменной задается в выходной [спецификации][3] [SQL узла][2].

3. Если столбец должен представлять переменную типа [массив пакетов][6], то он должен формироваться как JSON массив JSON объектов. Для каждого JSON объекта создается новый "вложенный" пакет, а каждое поле JSON объекта преобразуется в переменную типа [поле][6] или [файл][6] "вложенного" [пакета][1]. Тип переменной задается в выходной [спецификации][3] [SQL узла][2].

### Пример формирования простого пакета

![SQL example](/images/common/sql_example.png)

Объединение двух пакетов по одинаковому полю.

```sql:no-line-numbers
select
    array[c.id, s.id] as packages,
    s.size,
    s.span,
    s.x,
    s.sin,
    c.cos
from sin s join cos c on s.job_id = c.job_id
```

Здесь:

- `array[c.id, s.id] as packages` - получение массива с идентификаторами исходных пакетов (см. [правило № 1][4]);
  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>

  Официальная [документация](https://www.postgresql.org/docs/13/arrays.html) на функцию `array`.

  :::

- `sin` и `сos` - имена [виртуальных таблиц][5], которые соответствуют именам узлов, соединенные с входом SQL узла;
- `job_id` - произвольный идентификатор, присвоенный в узле **generate**;
- `s.*` и `c.cos`- имена столбцов (переменные соответствующих пакетов)(см. [правило № 2][4]).

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>

При создании запроса в качестве условных параметров можно использовать только переменные пакета типа [поле][6]. В качестве возвращаемых переменных можно использовать любые переменные пакета.
:::

### Пример формирования пакета с переменной типа "массив пакетов"

Дополнительная информация о переменной типа [массив пакетов][6] в описании [пакета][1].

```sql:no-line-numbers
select
  array_agg("cos".id order by "cos".id) || array_agg("sin".id order by "sin".id) as packages,
  'merge' as label,
  json_agg(json_build_object(
    'cos_job_id', "cos"."job_id",
    'cos_size', "cos"."size",
    'cos_span', "cos"."span",
    'cos_x', "cos"."x",
    'cos_cos', "cos"."cos",
    'sin_job_id', "sin"."job_id",
    'sin_size', "sin"."size",
    'sin_span', "sin"."span",
    'sin_x', "sin"."x",
    'sin_sin', "sin"."sin"
  )) as nested_pkg
from "cos", "sin"
where ...
group by ...
```

Здесь:

- `array_agg ... as packages` - получение массива с идентификаторами исходных пакетов (см. [правило № 1][4]);

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>

  Официальная [документация](https://www.postgresql.org/docs/13/functions-aggregate.html) функции `array_agg`.

  Дополнительные разъяснения об [использовании](https://www.postgresqltutorial.com/postgresql-aggregate-functions/postgresql-array_agg-function/) функции `array_agg`.

  :::

- `'merge' as label` - произвольная метка пакета;
- `"sin"` и `"сos"` - имена [виртуальных таблиц][5], которые соответствуют именам узлов, соединенные с входом SQL узла;
- `"sin".*` и `"cos.*`- имена столбцов (переменные соответствующих пакетов)(см. [правило № 2][4]);
- `json_agg(json_build_object(...)) as nested_pkg` - формирование вложенных пакетов (см. [правило № 3][4]).

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>

  Официальная [документация](https://www.postgresql.org/docs/13/functions-aggregate.html) функции `json_agg`.

  Официальная [документация](https://www.postgresql.org/docs/13/functions-json.html#FUNCTIONS-JSON-PROCESSING) функции `json_build_object`.

  Дополнительные разъяснения об [использовании](https://www.dbrnd.com/2016/03/postgresql-using-json_agg-aggregate-table-data-into-a-json-formatted-array/) функции `json_agg`.

  :::

## SQL мастер

**SQL мастер** - используется для быстрого построения шаблона для [SQL запроса](#запрос-sql-узла).

Для вызова SQL мастера необходимо нажать на иконку <span class="iconify-inline" data-icon="mdi:auto-fix"></span> на [панели SQL узла](/docs/desc/nodes.md#запрос)

![SQL Master](/images/common/sql_wizard.png)

Структура:

- Панели [виртуальных таблиц][5]

  - Название таблицы
  - Описание таблицы
  - <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Переключатель добавления таблицы в запрос
  - <span class="iconify-inline" data-icon="mdi:menu-down"></span> Выпадающее меню столбцов таблицы

    - Тип столбца
    - Имя и описание
    - <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Переключатель добавления столбца в запрос

    ![SQL Master](/images/common/sql_wizard_table_variables.png)

- Результат - тип выходного [пакета][1]
  - Плоский пакет - обычный [пакет][1]
  - Вложенные пакеты - [пакет][1], в которой добавлен переменная типа [массив пакетов][6].
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Псевдонимы столбцов - переключатель добавления псевдонимов столбцов в запросе
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Имена таблиц в псевдонимах - использовать имена [виртуальных таблиц][5] при формировании псевдонимов столбцов в запросе
- Кнопка "ПОСТРОИТЬ ЗАПРОС" - перегенерировать запрос
- **SQL запрос** - редактор сгенерированного запроса
- Кнопка "ЗАМЕНИТЬ" - заменить существующий запрос узла новым запросом
- Кнопка "ДОБАВИТЬ" - добавить запрос к существующему запросу узла
- Кнопка "ОТМЕНА" - выйти из мастера

[1]: /docs/desc/package.md
[2]: /docs/desc/nodes.md#sql-узел
[3]: /docs/desc/nodes.md#спецификация
[4]: #правила-формирования-запроса
[5]: #виртуальная-таблица
[6]: /docs/desc/package.md#состав
