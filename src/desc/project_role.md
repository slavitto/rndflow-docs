# Роли проекта

**Роль** - набор разрешений для управления проектом.

![Resources](/images/common/permissions_roles.png)

## Структyра панели

- Список [плиток](#плитка-роли) имеющихся ролей
- <span class="iconify-inline" data-icon="mdi:account-alert"/> Запросы на получение доступа к платной роли

## Плитка роли

![Resources](/images/common/permissions_role_panel.png)

1. Редактируемое название
2. Редактируемое описание
3. Стоимостной коэффициент - редактируемый коэффициент стоимости
4. <span class="iconify-inline" data-icon="mdi:shield-edit"></span> "РАЗРЕШЕНИЯ" - управления [разрешениями](#типы-разрешении)
5. <span class="iconify-inline" data-icon="mdi:eye"></span> - переключатель общедоступности
6. <span class="iconify-inline" data-icon="mdi:currency-usd"></span> - переключатель платности
7. <span class="iconify-inline" data-icon="mdi:delete"></span> - кнопка удаления роли

## Диалог управления разрешениями

Установка необходимых [типов разрешений](#типы-разрешении) для доступа к проекту, отдельным узлам и интерфейсам.

Вкладки:

- <span class="iconify-inline" data-icon="mdi:view-module"/> Узлы - управление разрешениями для узлов
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"/>Интерфейсы - управление разрешениями для интерфейсов

Вкладка <span class="iconify-inline" data-icon="mdi:view-module"/> Узлы:

![Set permissions](/images/common/permissions_role_set_permissions.png)

- <span class="iconify-inline" data-icon="mdi:magnify"/> Поиск- панель поиска/фильтрации
- <span class="iconify-inline" data-icon="mdi:sitemap"/> Проект- разрешения уровня проекта
- Список узлов с разрешениями

Структура панели ввода разрешений:

- Перечень установленных разрешений
- <span class="iconify-inline" data-icon="mdi:code-tags-check"></span> - кнопка добавления/удаления разрешений по подтипам
- <span class="iconify-inline" data-icon="mdi:check-all"></span> - кнопка добавления всех возможных разрешений
- <span class="iconify-inline" data-icon="mdi:close-circle"></span> - кнопка удаления всех установленных разрешений
- <span class="iconify-inline" data-icon="mdi:menu-down"></span> - меню выбора разрешений


Вкладка <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"/>Интерфейсы:

![Set permissions](/images/common/permissions_role_set_permissions_interface.png)

- <span class="iconify-inline" data-icon="mdi:magnify"/> Поиск - панель поиска/фильтрации
- <span class="iconify-inline" data-icon="mdi:sitemap"/> Проект - разрешения уровня проекта
- Список интерфейсов с разрешениями
  > [Cкрытые с панели управления проектом][3] интерфейсы отображаются светло-серым цветом.

Структура панели ввода разрешений:

- Перечень установленных разрешений
- <span class="iconify-inline" data-icon="mdi:code-tags-check"></span> - кнопка добавления/удаления разрешений для всех интерфейсов
- <span class="iconify-inline" data-icon="mdi:check-all"></span> - кнопка добавления всех возможных разрешений
- <span class="iconify-inline" data-icon="mdi:close-circle"></span> - кнопка удаления всех установленных разрешений
- <span class="iconify-inline" data-icon="mdi:menu-down"></span> - меню выбора разрешений

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

- <span style="background-color: blue; color: white; border-radius: 5px;">&nbsp;view&nbsp;</span> - просмотр
- <span style="background-color: orange; color: white; border-radius: 5px;">&nbsp;edit&nbsp;</span> - редактирование
- <span style="background-color: red; color: white; border-radius: 5px;">&nbsp;manage&nbsp;</span> - управление
- <span style="background-color: red; color: white; border-radius: 5px;">&nbsp;delete&nbsp;</span> - удаление


Имеется 3 уровня разрешений:

- Уровня проекта  - устанавливаются во вкладках <span class="iconify-inline" data-icon="mdi:view-module"/> Узлы и <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"/>Интерфейсы в корневом узле <div><span class="iconify-inline" data-icon="mdi:sitemap"/> Проект.</div>
- Уровня узла - устанавливаются во вкладке <span class="iconify-inline" data-icon="mdi:view-module"/> Узлы.
- Уровня интерфейса - устанавливаются во вкладке <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"/> Интерфейсы.

<b>Разрешения уровня проекта:</b>

- Проект
  - project_view - разрешен доступ к проекту
  - project_edit - разрешено редактировать свойства проекта, активность проекта, удалять исполнители проекта.
  - project_manage - разрешено удалять проект, управлять ролями, пользователями, секретами, API, доступ к балансу.
- Граф
  - graph_ui   - доступна вся информация о структуре графа и разрешен доступ к [графическому интерфейсу][2].
  - graph_view - доступна разрешенная информацию о структуре графа
    > Должны быть любые права на код или пакеты соответствующего узла. Права на связь определяются правами на оба ееузла.
  - graph_edit - доступна возможность создавать новые элементы графа и редактировать разрешенную структуру графа
    > Должны быть права code_edit на соответствующий узел. Для связи правa code_edit должны быть для обоих узлов.
- Код
  - code_edit - разрешено редактировать код всех узлов
  - code_view - разрешено просматривать код всех узлов
- Интерфейс
  - interface_manage - управление разрешенными интерфейсами, разрешено создание новых интерфейсов
- Пакеты
  - package_view - разрешено просматривать пакеты во всех узлах
  - package_create - разрешено создавать пакеты во всех узлах
  - package_delete - разрешено удалять пакеты во всех узлах

<b>Разрешения уровня узла:</b>

- Код
  - code_edit - разрешено редактировать код, секреты и другие параметы узла.
  - code_view - разрешено просматривать код, секреты.
- Пакеты
  - package_create - разрешено создавать
  - package_delete - разрешено удалять
  - package_view - разрешено просматривать

<b>Разрешения уровня интерфейса:</b>

 - view - разрешен доступ
 - edit - разрешен доступ и редактирование интерфейса
 - delete - разрешен доступ и удаление интерфейса

В зависимости от имеющихся разрешений пользователь получает доступ к тем или иным элементам и функциям.

<b>Доступ к вкладкам узла:</b>

У узла должны быть разрешения ниже.

- Вкладка [Параметры][4] - package_create
- Вкладка [Контейнер][5]- сode_view
- Вкладка [Пакеты][6] - package_view
- Вкладка [Задания][7] - package_create и package_view
- Вкладка [Файлы][8] - сode_view
- Вкладка [Запрос][9] - сode_view


<b>Управление другими возможностями:</b>

- Узел
  - Доступ к диалогу оповещения узла - package_create и package_view для узла 
  - Создание - graph_edit, code_edit на уровне проекта
    Вставка  - graph_edit, code_edit на уровне проекта
  - Удаление - graph_edit, code_edit и package_delete на уровне проекта или узла
  - Активация - graph_edit, package_create
  - Информация о исполнителе - package_create или code_view.
- Связи между узлами
  - Создание - graph_edit, code_edit у каждого из узлов
  - Удаление - graph_edit, code_edit у каждого из узлов
- Слой данных
  - Создания - package_create на уровне проекта
  - Удаления - package_delete на уровне проекта
- Импорт проекта - graph_edit, interface_manage, code_edit на уровне проекта
- Экспорт проекта - graph_ui и code_view или code_edit на уровне проекта
- Доступ к Git странице - project_edit, graph_ui, graph_edit, interface_manage, code_edit на уровне проекта

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
Для [владельцев][10] рабочего пространства ограничений нет.
:::

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Если пользователь, создавший интерфейс, не является администратором или владельцем рабочего пространства, то всем ролям, к которому принадлежит данный пользователь будут даны полные права на этот интерфейс.
:::


[1]: ./project.md#слои-данных
[2]: ./project.md#граф
[3]: ./interface.md#плитка-интерфеиса
[4]: ./nodes.md#параметры
[5]: ./nodes.md#контеинер
[6]: ./nodes.md#пакеты
[7]: ./nodes.md#задания
[8]: ./nodes.md#фаилы
[9]: ./nodes.md#запрос
[10]: ./workspace.html#участники


