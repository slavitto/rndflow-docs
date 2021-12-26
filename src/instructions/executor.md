# Сервер расчетов (исполнитель задач)

## Добавление в рабочее пространство

Для добавления [сервера расчетов][1] в рабочее пространство:

- [Перейти](/docs/instructions/#переход-в-рабочее-пространство) в [рабочее пространство](/docs/desc/workspace.md)
- Перейти на вкладку **РЕСУРСЫ**

![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- Напротив надписи <span class="iconify-inline" data-icon="mdi:server"></span> **Серверы расчетов** нажать на кнопку <span class="iconify-inline" data-icon="mdi:magnify"></span> <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> и далее выбрать сервер из списка <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

![Add Executor](/images/common/dashboard_user_workspace_resources_add_executor.png)

## Cоздание нового в рабочем пространстве

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
Сервер расчетов должен быть предварительно [установлен][2] на нeобходимой площадке.
:::

Для создания [сервера расчетов][1] в рабочем пространстве:

- [Перейти](/docs/instructions/#переход-в-рабочее-пространство) в [рабочее пространство](/docs/desc/workspace.md)
- Перейти на вкладку **РЕСУРСЫ**

![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- Напротив надписи <span class="iconify-inline" data-icon="mdi:server"></span> **Серверы расчетов** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span>.

![Create Executor](/images/common/dashboard_user_workspace_resources_create_executor.png)

- Ввести параметры сервера расчетов
  - Наименование - идентификатор сервера для подключения к платформе.
  - <span class="iconify-inline" data-icon="mdi:checkbox-marked" style="color: green"></span> Сделать общедоступным - сделать сервер общедоступным на всей платформе.
  - Публичный PGP ключ - ключ авторизации сервера расчетов. Закрытая часть ключа должна храниться на стороне сервера расчетов.
  - Описание

[1]: /docs/desc/executor.md
[2]: /docs/admin/#установка-сервера-расчетов
