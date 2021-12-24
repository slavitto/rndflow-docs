# Git

## Описание

Платформа поддерживает сохранение проекта в [Git][1] репозиториях, таких как [GitHub][2].

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
Git репозиторий является единым для всего проекта и всех его пользователей!
:::

Производится сохранение:

- Параметров [проекта][4]
- Структуры [графа][5]
- [Узлов][6] и их параметров и настроек
  ::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
  1. Хранение пакетов не производится!
  2. Сохраняются параметры только текущего [слоя данных][8].
     :::
- [Файлов][7] узлов
  ::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
  Сохраняются только текущие файлы узлов!
  :::
- [Интерфейсов проека][9]

## Структура

![Git](/images/common/git.png)

- Адрес репозитория Git (в формате SSH)

  - Поле ввода адреса репозитория
    > Пример: git@github.com:user/project.git
  - Кнопка <span class='iconify-inline' data-icon='mdi:content-save'></span> - сохранить введеный адрес репозитория
  - Кнопка <span class='iconify-inline' data-icon='mdi:open-in-new'></span> - октрыть страницу Git репозитория в новом окне

- Кнопка <span class='iconify-inline' data-icon='mdi:key'></span> "СКОПИРОВАТЬ ПУБЛИЧНЫЙ SSH КЛЮЧ" - скопировать в буфер обмена публичный SSH ключ проекта платформы.

- История изменений

  - Кнопка <span class='iconify-inline' data-icon='mdi:sync'></span> - импорт версии из Git репозитория
  - Кнопка <span class='iconify-inline' data-icon='mdi:refresh'></span> - обновить список
  - История версий

    Для каждой версии указывается:

    - Краткое описание версии
    - Расширенное описание (необязательно)
    - Автор
    - Время
    - Кнопка копирования хеша версии
    - Кнопка <span class='iconify-inline' data-icon='mdi:backup-restore'></span> - восстановление указанной версии

- Сохранить текущее состояние проекта - раздел сохранения текущей версии проекта
  - Краткое описание
  - Расширенное описание (необязательно)
  - Кнопка "СОХРАНИТЬ" - сохранить текущую версию проекта в Git репозитории.

## Разрешения

Обязательные [разрешения пользователя][3] для выполнения операций:

- Подключения проекта к Git репозиторию:

  - project_edit

- Сохранение новой версии проекта:

  - project_edit

- Восстановление предыдущей версии проекта:
  - graph edit
  - code_edit
  - interfaces_edit
  - project_manage

[1]: https://git-scm.com/
[2]: htts://github.com
[3]: /docs/desc/project_role.md#типы-разрешении
[4]: /docs/desc/project.md
[5]: /docs/desc/project.md#граф
[6]: /docs/desc/nodes.md
[7]: /docs/desc/nodes.md#фаилы
[8]: /docs/desc/project.html#слои-данных
[9]: /docs/desc/interface.md
