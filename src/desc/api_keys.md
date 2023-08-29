# API ключи

## Общее

**API ключ** - уникальный [jWT](https://jwt.io/) идентификатор для программного доступа к проекту согласно разрешениям, которые определены в заданной ему при создании [роли](./project_role.md) проекта.

**Шаблон API ключа** - частично сформированный API ключ без указания конкретного пользователя. Используется для быстрого создания API ключа по запросу пользователя.

![API keys panel](/images/common/api_keys.png)

Структура панели:

- <span class="iconify-inline" data-icon="mdi:key-chain"></span> Раздел "API КЛЮЧИ"
  - Шаблоны API ключей - список [панелей плиток](#плитка-шаблона) шаблонов API ключей
  - <span class="iconify-inline" data-icon="mdi:plus"></span> - кнопка добавления нового шаблона API ключа
  - <span class="iconify-inline" data-icon="mdi:account-alert"></span> Запросы - список запросов на получение API ключей.
- <span class="iconify-inline" data-icon="mdi:account-key"></span> Раздел ["ВЫДАННЫЕ КЛЮЧИ"](#выданные-ключи)

## Плитка шаблона

![API key panel](/images/common/api_keys_panel.png)

1. Редактируемое название
2. Редактируемое описание
3. Редактируемое значение присвоенной роли
4. Поля <span class="iconify-inline" data-icon="mdi:plus"></span> - кнопка добавления информационного поля
   ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
   Информационные поля импортируются в клиентский проект в виде [секретов](./secrets.md) вместе с API ключом и необходимы для предоставления пользователю ключа информации об его основных параметрах при его [использовании](/instructions/api_keys.md#использование-ключа).

   Рекомендуются добавлять следующий информационные поля:

   - Идентификатор проекта - идентификатор текущего проекта
   - Идентификатор входного узла - узел, в который необходимо отправлять пакеты с данными
   - Идентификатор выходного узла - узел, из которого необходимо забирать пакеты с результатом.

5. Редактируемое название информационного поля
6. Редактируемое описание информационного поля
7. Редактируемое значение информационного поля
8. <span class="iconify-inline" data-icon="mdi:sitemap"></span> - кнопка вставки идентификатора проекта в качестве значения поля
9. <span class="iconify-inline" data-icon="mdi:feature-search"></span> - кнопка вставки идентификатора выбранного узла в качестве значения поля
10. <span class="iconify-inline" data-icon="mdi:delete"></span> - кнопка удаления поля
11. <span class="iconify-inline" data-icon="mdi:menu-down"></span> - выпадающий список выбора роли
12. <span class="iconify-inline" data-icon="mdi:delete"></span> - кнопка удаления шаблона

## Плитка ключа

Плитка ключа, который можно [запросить][1] для программного доступа к проекту, располагается в разделе <span class="iconify-inline" data-icon="mdi:information"></span>**О проекте** в секции <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API ключи**. Каждому такому ключу соответствует [шаблон API ключа](#плитка-шаблона) в редакторе API ключе проека.

Плитка ключа может иметь вид:

- Разрешения нового запроса ключа

  ![API request](/images/common/api_panel_request.png)

- Ожидание разрешения получения ключа

  ![API requested](/images/common/api_panel_wait.png)

- Подтвержденый запрос на ключ

  ![API requested](/images/common/api_panel_confirmed.png)

## Выданные ключи

Список выданных API ключей и статистика их использования доступна в разделе <span class="iconify-inline" data-icon="mdi:account-key"></span> **ВЫДАННЫЕ КЛЮЧИ**.

![API keys](/images/common/api_billing.png)

Структура:

- Панель инструментов
  - Период <span class='iconify-inline' data-icon='mdi:calendar-range'></span> - отображаемый период
  - <span class='iconify-inline' data-icon='mdi:refresh'></span> - кнопка обновления списка
- Список выданных ключей
  - API ключ - название ключа
  - Пользователь - пользватель получивший ключ
  - Получен - дата выдачи
  - Запросы - количество запросов за выбранный период
  - Сумма - суммарная стоимость запросов за выбранный период
  - <span class='iconify-inline' data-icon='mdi:delete'></span> - кнопка удаления разрешения
- Панель навигации

[1]: /instructions/api_keys.md#запрос-ключа
