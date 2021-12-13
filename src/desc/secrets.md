# Секреты проекта

## Общее

Секреты используется для хранения чувствительной информации, необходимой для функционирования проекта (например, логин и пароль к внешнему сервису, или токен [API ключа][1]). Значения секретов видны только пользователям с привилегией **project_manage**. Секреты доступны вычислительным узлам во время исполнения в виде переменных окружения.

![Secrets](/images/common/secrets.png)

Структура панели:

- Панель управления
  - <span class="iconify-inline" data-icon="mdi:plus"></span> кнопка добавления нового секрета
  - <span class="iconify-inline" data-icon="mdi:key-plus"></span> меню добавления [API ключа][1]
  - <span class="iconify-inline" data-icon="mdi:eye"></span> показать значения секретов
- Список [панелей плиток](#плитка-секрета) секретов

Также секреты отображаются на вкладке **ОПИСАНИЕ** узлов, которым доступен указанный секрет.

![Node secrets](/images/common/secrets_node_definition.png)

## Плитка секрета

![Secret panel](/images/common/secrets_panel.png)

1. Редактируемое имя
2. Редактируемое описание
3. Редактируемое значение
4. Список узлов, которым доступен секрет
5. <span class="iconify-inline" data-icon="mdi:magnify"></span> Меню добавления узлов
6. <span class="iconify-inline" data-icon="mdi:delete"></span> Удалить
7. <span class="iconify-inline" data-icon="mdi:eye"></span> Показать значение

[1]: /docs/desc/api_keys.md
