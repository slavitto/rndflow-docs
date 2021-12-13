# API ключи

## Общее

**API ключ** - уникальный jWT идентификатор для программного доступа к проекту согласно разрешениям, которые определены в заданной ему при создании [роли](./project_role.md) проекта.

**Шаблон API ключа** - частично сформированный API ключ без указания конкретного пользователя. Используется для быстрого создания API ключа по запросу пользователя.

![API keys panel](/images/common/api_keys.png)

Структура панели:

- Панель управления
  - <span class="iconify-inline" data-icon="mdi:plus"></span> кнопка добавления нового шаблона API ключа
- Список [панелей плиток](#плитка-шаблона) шаблонов API ключей
- <span class="iconify-inline" data-icon="mdi:account-alert"></span> Запросы на получение API ключа

## Плитка шаблона

![API key panel](/images/common/api_keys_panel.png)

1. Редактируемое название
2. Редактируемое описание
3. Редактируемое значение присвоенной роли
4. <span class="iconify-inline" data-icon="mdi:delete"></span> Добавление информационного поля
   ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
   Информационные поля импортируются в клиентский проект в виде [секретов](./secrets.md) вместе с API ключом и необходимы для предоставления пользователю ключа информации об его основных параметрах при его [использовании](/docs/instructions/api_keys.md#использование-ключа).

   Рекомендуются добавлять следующий информационные поля:

   - Идентификатор проекта - идентификатор текущего проекта
   - Идентификатор входного узла - узел, в который необходимо отправлять пакеты с данными
   - Идентификатор выходного узла - узел, из которого необходимо забирать пакеты с результатом.

5. Редактируемое название информационного поля
6. Редактируемое описание информационного поля
7. Редактируемое значение информационного поля
8. <span class="iconify-inline" data-icon="mdi:sitemap"></span> Вставка идентификатора проекта в качестве значения поля
9. <span class="iconify-inline" data-icon="mdi:feature-search"></span> Вставка идентификатора выбранного узла в качестве значения поля
10. <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление поля
11. <span class="iconify-inline" data-icon="mdi:menu-down"></span> Выбор роли
12. <span class="iconify-inline" data-icon="mdi:delete"></span> Удаление шаблона

## Плитка ключа

Плитка ключа, который можно [запросить][1] для программного доступа к проекту, располагается в разделе <span class="iconify-inline" data-icon="mdi:information"></span>**О проекте** в секции <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API ключи**. Каждому такому ключу соответствует [шаблон API ключа](#плитка-шаблона) в редакторе API ключе проека.

Плитка ключа может иметь вид:

- Разрешения нового запроса ключа

  ![API request](/images/common/api_panel_request.png)

- Ожидание разрешения получения ключа

  ![API requested](/images/common/api_panel_wait.png)

- Подтвержденый запрос на ключ

  ![API requested](/images/common/api_panel_confirmed.png)

## Статистика использования

Статистика использования API ключа доступна в разделе <span class="iconify-inline" data-icon="mdi:script-text-key"></span> **СТАТИСТИКА ИСПОЛЬЗОВАНИЯ**.

![API request letter](/images/common/api_billing.png)

[1]: /docs/instructions/api_keys.md#запрос-ключа
