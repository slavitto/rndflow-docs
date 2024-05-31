# SQL

## Virtual Table

**Virtual table** is a table containing all [packets][1] that have arrived at the [SQL node][2] from a specific previous node.

The table name corresponds to the name of this previous node.

The table columns are the names of the variables of the [packet][1] exiting the previous node, taking into account possible renames specified in the incoming [link](/desc/links.md).

If the [SQL node][2] receives packets from different nodes, then there will be a separate virtual table for each node.

## SQL Node Query

The [SQL node][2] must contain an SQL query to select data. The general rules for creating a query must comply with the requirements for using the SQL command ([SELECT](https://www.postgresql.org/13/sql-select.html)) on the dialect of the DBMS [PostgreSQL](https://www.postgresql.org).

Data is selected from [virtual tables][5].

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
Use the [SQL wizard](#sql-wizard) to create a query.
:::

### Query Formation Rules

1. The query result must return a column with an array of packet identifiers that were involved in generating the result.

   The array is used for service purposes (not displayed to the user when processing the packet in the script of the calculation node) to form the history of packet creation and to identify the uniqueness of the query result.

2. The remaining columns of the query result are converted into variables of the type [field][6] or [file][6] or [packet array][6] [packet][1]. The variable type is specified in the output [specification][3] of the [SQL node][2].

3. If a column should represent a variable of the type [packet array][6], then it should be formed as a JSON array of JSON objects. For each JSON object, a new "nested" packet is created, and each field of the JSON object is converted into a variable of the type [field][6] or [file][6] of the "nested" [packet][1]. The variable type is specified in the output [specification][3] of the [SQL node][2].

### Example of Forming a Simple Packet

![SQL example](/images/common/sql_example.png)

Combining two packets by the same field.

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

Here:

- `array[c.id, s.id] as packages` - creates an array named `packages` containing the identifiers of the original packets (`c.id` and `s.id`) (see [rule #1][4]);
  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>

  Official [documentation](https://www.postgresql.org/docs/current/functions-array.html) for the `array` function.

  :::

- `sin` and `cos` - the names of the [virtual tables][5] that correspond to the node names connected to the input of the SQL node;
- `job_id` - an arbitrary identifier assigned in the **generate** node;
- `s.*` and `c.cos` - the names of the columns (variables of the corresponding packets) (see [rule #2][4]).

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>

Only packet variables of the type [field][6] can be used as conditional parameters when creating a query. Any packet variables can be used as return variables.
:::

### Example of Forming a Packet with a Variable of the Type "Packet Array"

Additional information about the variable of the type [packet array][6] in the description of the [packet][1].

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

Here:

- `array_agg ... as packages` - creates an array named `packages` containing the identifiers of the original packets (see [rule #1][4]);

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>

  Official [documentation](https://www.postgresql.org/docs/current/functions-aggregate.html) for the `array_agg` function.

  Additional explanations about [using](https://www.postgresqltutorial.com/postgresql-aggregate-functions/postgresql-array_agg-function/) the `array_agg` function.

  :::

- `'merge' as label` - an arbitrary label assigned to the packet;
- `"sin"` and `"cos"` - the names of the [virtual tables][5] that correspond to the node names connected to the input of the SQL node;
- `"sin".*` and `"cos.*"` - the names of the columns (variables of the corresponding packets) (see [rule #2][4]);
- `json_agg(json_build_object(...)) as nested_pkg` - creates nested packets (see [rule #3][4]).

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>

  Official [documentation](https://www.postgresql.org/docs/current/functions-aggregate.html) for the `json_agg` function.

  Official [documentation](https://www.postgresql.org/docs/current/functions-json.html#FUNCTIONS-JSON-PROCESSING) for the `json_build_object` function.

  Additional explanations about [using](https://www.dbrnd.com/2016/03/postgresql-using-json_agg-aggregate-table-data-into-a-json-formatted-array/) the `json_agg` function.

  :::

## SQL Wizard

**SQL Wizard** is used for quick construction of a template for the [SQL query](#sql-node-query).

To call the SQL Wizard, click on the icon <span class="iconify-inline" data-icon="mdi:auto-fix"></span> on the [SQL node panel](/desc/nodes.md#query)

![SQL Master](/images/common/sql_wizard.png)

Structure:

- Panels of [virtual tables][5]

  - Table name
  - Description of the table
  - <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Checkbox to add the table to the query
  - <span class="iconify-inline" data-icon="mdi:menu-down"></span> Dropdown menu of table columns

    - Column type
    - Name and description
    - <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Checkbox to add the column to the query

    ![SQL Master](/images/common/sql_wizard_table_variables.png)

- Result - type of the output [packet][1]
  - Flat packet - ordinary [packet][1]
  - Nested packets - [packet][1], in which a variable of the type [packet array][6] is added.
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Column aliases - checkbox to add aliases of columns in the query
- <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Table names in aliases - use the names of [virtual tables][5] when forming aliases of columns in the query
- Button "BUILD QUERY" - regenerate the query
- **SQL query** - editor with the generated query
- Button "REPLACE" - replace the existing query of the node with a new query
- Button "ADD" - add the query to the existing query of the node
- Button "CANCEL" - exit the wizard

[1]: /desc/package.md
[2]: /desc/nodes.md#sql-узел
[3]: /desc/nodes.md#спецификация
[4]: #правила-формирования-запроса
[5]: #виртуальная-таблица
[6]: /desc/package.md#состав
