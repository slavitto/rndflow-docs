# Роли проекта

**Роль** - набор разрешений для управления проектом.

![Resources](/images/common/permissions_roles.png)

## Структyра панели

- Список [плиток](#плитка-роли) имеющихся ролей
- <span class="iconify-inline" data-icon="mdi:account-alert"></span> Запросы на получение доступа к платной роли

## Типы ролей

- Обычная
- Общедоступная - роль доступна всем, в том числе не авторизированным пользователям

  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
  Не авторизированные пользователи в этом случае имеют доступ только на чтение вне зависимости от разрешений роли.
  :::

- Платная - роль, обеспечивающая доступ к проекту на платной основе

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  При создании проекта автоматически создается роль **owner** с полными правами на проект. Данная роль автоматически присваивается пользователю создавшему проект.
  :::

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  После получения пользователем платной роли для него автоматически создается новый [слой данных][1] в проекте.
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
  - graph_edit - разрешено редактировать
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
3. Стоимостной коэффициент - редактируемый коэффициент стоимости
4. <span class="iconify-inline" data-icon="mdi:shield-edit"></span> "РАЗРЕШЕНИЯ" - управления [разрешениями](#типы-разрешении)
5. <span class="iconify-inline" data-icon="mdi:eye"></span> - переключатель общедоступности
6. <span class="iconify-inline" data-icon="mdi:currency-usd"></span> - переключатель платности
7. <span class="iconify-inline" data-icon="mdi:delete"></span> - кнопка удаления роли

[1]: ./project.md#слои-данных
