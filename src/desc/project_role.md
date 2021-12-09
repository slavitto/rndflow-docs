# Роли проекта

**Роль** - набор разрешений для управления проектом.

![Resources](/images/common/permissions_roles.png)

## Структyра панели

- Список [плиток](#плитка-роли) имеющихся ролей
- <span class="iconify-inline" data-icon="mdi:account-alert"></span> Запросы на получение доступа к платной роли

## Типы ролей

- Обычная
- Общедоступная - роль доступна любым, в том числе не залогинившимся пользователям
- Платная - роль, обеспечивающая доступ к проекту на платной основе

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  При создании проекта автоматически создается роль **owner** с полными правами на проект. Данная роль автоматически присваивается пользователю создавшему проект.
  :::

## Типы разрешений

- <span style="background-color: blue; color: white">view</span> - просмотр
- <span style="background-color: orange; color: white">edit</span> - редактирование
- <span style="background-color: red; color: white">manage</span> - управление
- <span style="background-color: red; color: white">delete</span> - удаление

Элементы проекта, на которые распространяются разрешения:

- проект
- граф
- интерфейс
- код
- пакеты

Имеется 2 уровня разрешений

- Уровня проекта
- Уровня узла

Разрешения уровня проекта:

- Проект
  - project_manage - разрешено управлять ролями, пользователями, секретами, API.
  - project_edit - разрешено редактировать
  - project_view - разрешено просматривать
- Граф
  - graph_edi - разрешено редактировать
  - graph_view - разрешено просматривать
- Код
  - code_edit - разрешено редактировать
  - code_view - разрешено просматривать
- Интерфейс
  - interface_edit - разрешено редактировать
  - interface_view - разрешено просматривать/использовать
- Пакеты
  - package_create - разрешено создавать
  - package_delete - разрешено удалять
  - package_view - разрешено просматривать

Разрешения уровня узла:

- Код
  - code_edit - разрешено редактировать
  - code_view - разрешено просматривать
- Интерфейс
  - interface_edit - разрешено редактировать
  - interface_view - разрешено просматривать/использовать
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
