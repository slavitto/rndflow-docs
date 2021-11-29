# Секреты проекта

Секреты используется для хранения чувствительной информации, необходимой для функционирования проекта (например, логин и пароль к внешнему сервису, или токен API ключа). Значения секретов видны только пользователям с привилегией **project_manage**. Секреты доступны вычислительным узлам во время исполнения в виде переменных окружения.

![Secrets](/images/common/secrets.png)

Структура панели:

- Панель управления
  - <span class="iconify-inline" data-icon="mdi:plus"></span> кнопка добавления нового секрета
  - <span class="iconify-inline" data-icon="mdi:key-plus"></span> меню добавления API ключа
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

## Добавить секрет

- Напротив надписи **Секреты** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> и в диалоговом окне ввести уникальное имя нового секрета и нажать кнопку **ОК**.

  ::: danger <span class="iconify" data-icon="gg:danger" style="color: #cc0000; font-size: 24px;"></span>
  Имя может содержать только латинские буквы, цифры и знак подчеркивания!
  :::

  ![Add role](/images/common/secrets_add.png)

- В новой плитке секрета в поле **Значение** ввести значение секрета.
- В новой плитке в поле **Узлы** с помощью кнопки <span class="iconify-inline" data-icon="mdi:magnify"></span> добавить узлы, которым будет доступно значение секрета.

## Получение доступ к секрету в узле

В вкладке [Файлы](/docs/desc/nodes.html#фаилы) узла, у которого есть доступ к секрету необходимо в программном модуле или скрипте обратиться к переменной окружения с именем секрета.

```python
#!/usr/bin/env python
from rndflow import job
secret_value = job.secret('My_secret')
```
