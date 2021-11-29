# Роли проекта

**Роль** - набор разрешений для управления проектом.

![Resources](/images/common/permissions_roles.png)

## Структyра панели

- Список [плиток](#плитка-роли) имеющихся ролей
- Запросы на получение доступа к общедоступной роли

## Типы ролей

- Обычная
- Общедоступная - роль доступна любым, в том числе не залогинившимся пользователям
- Платная - роль, обеспечивающая доступ к проекту на платной основе

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  При создании проекта автоматически создается роль **owner** с полными правами на проект. Данная роль автоматически присваивается пользователю создавшему проект.
  :::

## Типы разрешений

Имеется 2 уровня разрешений

- Уровня проекта
- Уровня узла

Разрешения уровня проекта:

- Проект
  - project_manage - разрешено управлять ролями, пользователями, секретами, API.
  - project_edit - разрешено редактировать
  - project_view - разрешено просматривать
- Граф
  - graph_editразрешено редактировать
  - graph_view - разрешено просматривать
- Программный код скрипта
  - code_editразрешено редактировать
  - code_view - разрешено просматривать
- Графический интерфейс
  - interface_edit - разрешено редактировать
  - interface_view - разрешено просматривать
- Пакеты
  - package_create - разрешено создавать
  - package_delete - разрешено удалять
  - package_view - разрешено просматривать

Разрешения уровня узла:

- Программный код скрипта
  - code_editразрешено редактировать
  - code_view - разрешено просматривать
- Графический интерфейс
  - interface_edit - разрешено редактировать
  - interface_view - разрешено просматривать
- Пакеты
  - package_create - разрешено создавать
  - package_delete - разрешено удалять
  - package_view - разрешено просматривать

## Плитка роли

![Resources](/images/common/permissions_role_panel.png)

1. Редактируемое название
2. Редактируемое описание
3. <span class="iconify-inline" data-icon="mdi:shield-edit"></span> "РАЗРЕШЕНИЯ" - управления [разрешениями](#типы-разрешении)
4. <span class="iconify-inline" data-icon="mdi:eye"></span> Переключатель общедоступности
5. <span class="iconify-inline" data-icon="mdi:currency-usd"></span> Переключатель платности
6. <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление роли

## Создание новой роли

### Добавить роль

Напротив надписи **Роли** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> и в диалоговом окне ввести уникальное имя новой роли.

![Add role](/images/common/permissions_role_add.png)

### Установить разрешения

На [плитке роли](#плитка-роли) нажать на кнопку <span class="iconify-inline" data-icon="mdi:shield-edit"></span> **РАЗРЕШЕНИЯ** и в диалоговом окне установить разрешения для доступа к проекту и/или отдельным узлам.

![Set permissions](/images/common/permissions_role_set_permissions.png)

Структура:

- <span class="iconify-inline" data-icon="mdi:magnify"></span> Панель поиска
- <span class="iconify-inline" data-icon="mdi:sitemap"></span> Разрешения проекта
- Список узлов с разрешениями

Структура панели ввода разрешений:

- Перечень установленных разрешений
- <span class="iconify-inline" data-icon="mdi:check-all"></span> Кнопка добавления всех возможных разрешений
- <span class="iconify-inline" data-icon="mdi:close-circle"></span> Кнопка удаления всех установленных разрешений
- <span class="iconify-inline" data-icon="mdi:menu-down"></span> Меню выбора разрешений
