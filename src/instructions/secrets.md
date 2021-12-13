# Секреты проекта

## Добавить секрет

- Открыть проект
- С помощью [панели управления проектом][1] перейти в окно редактора [секретов][1]
- Напротив надписи **Секреты** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> и в диалоговом окне ввести уникальное имя нового [секрета][1] и нажать кнопку **ОК**.

  ::: danger <span class="iconify" data-icon="gg:danger" style="color: #cc0000; font-size: 24px;"></span>
  Имя может содержать только латинские буквы, цифры и знак подчеркивания!
  :::

  ![Add role](/images/common/secrets_add.png)

- В новой [плитке секрета][3] в поле **Значение** ввести значение секрета.
- В новой [плитке секрета][3] в поле **Узлы** с помощью кнопки <span class="iconify-inline" data-icon="mdi:magnify"></span> добавить узлы, которым будет доступно значение секрета.

## Получение доступ к секрету в узле

В вкладке [Файлы][4] узла, у которого есть доступ к секрету необходимо в программном модуле или скрипте обратиться к переменной окружения с именем [секрета][1].

```python
#!/usr/bin/env python
from rndflow import job
secret_value = job.secret('My_secret')
```

[1]: /docs/desc/secrets.md
[2]: /docs/desc/project.md#панель-управления-проектом
[3]: /docs/desc/secrets.md#плитка-секрета
[4]: /docs/desc/nodes.md#фаилы