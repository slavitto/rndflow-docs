# Git

## Описание

Платформа поддерживает сохранение проекта в [Git][1] репозиториях, таких как [GitHub][2] и [GitLab][10].

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
Git репозиторий является единым для всего проекта и всех его пользователей!
:::

Производится сохранение:

- Параметров [проекта][4]
- Структуры [графа][5]
- [Узлов][6] и их параметров и настроек
  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
  1. Хранение пакетов не производится!
  2. Для параметров сохраняются их значения по умолчанию, то есть параметры узлов конкретного [слоя данных][9] не будут сохраняться!
  :::

     :::
- [Файлов][7] узлов
  ::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
  Сохраняются только текущие файлы узлов! Сохранение всех файлов согласно их истории изменений не производится!
  :::
- [Интерфейсов проекта][9]



## Структура

- Адрес репозитория Git (в формате SSH)

  - Поле ввода адреса репозитория
    > Пример: git@github.com:user/project.git
  - Кнопка <span class='iconify-inline' data-icon='mdi:content-save'></span> - сохранить введеный адрес репозитория
  - Кнопка <span class='iconify-inline' data-icon='mdi:open-in-new'></span> - октрыть страницу Git репозитория в новом окне

- Кнопка <span class='iconify-inline' data-icon='mdi:key'></span> "СКОПИРОВАТЬ ПУБЛИЧНЫЙ SSH КЛЮЧ" - скопировать в буфер обмена публичный SSH ключ проекта платформы.

![Git URL](/images/common/git_url.png)


- Сохранить текущее состояние проекта - раздел сохранения текущей версии проекта
  - Краткое описание
  - Кнопка <span class='iconify-inline' data-icon='mdi:clipboard-text-outline'></span>/<span class='iconify-inline' data-icon='mdi:clipboard-text-off-outline'></span> - открыть/закрыть редактор расширенного описания
  - Расширенное описание (необязательно)
  - Кнопка "СОХРАНИТЬ" - сохранить текущую версию проекта в Git репозитории.

![Git add new commit](/images/common/git_save.png)

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

![Git](/images/common/git_commits.png)

- История операций
  
  - Кнопка <span class='iconify-inline' data-icon='mdi:refresh'></span> - обновить список
  - Кнопка <span class='iconify-inline' data-icon='mdi:eye'></span> - показать/cпрятать список
  - История операций

    Для каждой операции указывается:
    - <span class='iconify-inline' data-icon='mdi:menu-down'></span> - кнопка открытия/закрытия опционального журнала операции
    - Инициатор
    - Начало - время начала операции
    - Статус - статус завершения операции и ее длительность
    - Операция - название операции
    - Коммит - хеш версии соответствующего комита (опционально)


  ![Git](/images/common/git_ops.png)

## Разрешения

Обязательные [разрешения пользователя][3] для выполнения операций:

- Доступ к странице взаимодействия с Git репозиторием: 
  - project_edit
  - graph_view
  - graph_edit
  - interface_view
  - interface_edit
  - code_view
  - code_edit

> При конкретный операциях требуется наличие отдельных прав.

- Подключения проекта к Git репозиторию:
  - project_edit

- Создание нового коммита:
  - project_edit

- Загрузка коммитов с репозитория:
  - project_edit

- Переключение на другой коммит:
  - graph edit
  - code_edit
  - interfaces_edit
  - project_edit

- Удаление коммитов из платформы при переключении репозитория:
  - project_edit
  - code_edit

- Просмотр коммитов и операций:
  - code_view


[1]: https://git-scm.com/
[2]: htts://github.com
[3]: /docs/desc/project_role.md#типы-разрешении
[4]: /docs/desc/project.md
[5]: /docs/desc/project.md#граф
[6]: /docs/desc/nodes.md
[7]: /docs/desc/nodes.md#фаилы
[8]: /docs/desc/project.html#слои-данных
[9]: /docs/desc/interface.md
[10]: https://gitlab.com/