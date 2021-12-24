# Контейнеры

Платформа поддерживает возможность создания и пересборки Докер образов ([Docker images][1]).

Докер образы создаются на кластере платформы и могут быть загружены на внешние реестры ([registries][1]) и внутрение реестры.

Докер образы относятся к [рабочему пространству][2].

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
Для Докер образа действуют следующие правила:

- Название образа должно быть уникальным для **всей** платформы.
- Права пересборки образа имеет только владелец рабочего пространства, в котором он был создан.
  :::

Управление Докер образами происходит на вкладке <span class='iconify-inline' data-icon='mdi:cogs'></span> **РЕСУРСЫ** в разделе <span class="iconify-inline" data-icon="mdi:docker"></span> **Docker-образы** соответствующего рабочего пространства.

![Docker images list](/images/common/dashboard_user_workspace_resources_dockers.png)

Использование Докер образа происходит на вкладке <span class='iconify-inline' data-icon='mdi:kubernetes'></span> [**КОНТЕЙНЕР**][3] панели [расчетного узла][4] в выпадающем списке параметра **Докер образ**.

![Docker images list](/images/common/node_panel_container_dockerslist.png)

## Плитка

![Docker image after build](/images/common/dashboard_user_workspace_resources_docker_after_build.png)

Структура:

- Статус сборки
  - <span class='iconify-inline' data-icon='mdi:check-circle' style='color: green'></span> - последние изменения образа собраны
  - <span class='iconify-inline' data-icon='mdi:alert-circle' style='color: red'></span> - образ не собран
  - <span class='iconify-inline' data-icon='mdi:update' style='color: orange'></span> - образ был изменен после сборки и после этого не было успешных сборок
- Название образа
- Описание образа
- <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления

## Редактор

Редактор открывается по щелчку по плитке Докер образа.

![Docker image editor after build](/images/common/dashboard_user_workspace_resources_docker_editor_аfter_build.png)

Структура

- Редактируемое название образа
- <span class='iconify-inline' data-icon='mdi:delete'></span> Кнопка удаления образа
- Редактируемое описание образа
- Статус
  - <span class='iconify-inline' data-icon='mdi:check-circle' style='color: green'></span> - последние изменения образа собраны
  - <span class='iconify-inline' data-icon='mdi:alert-circle' style='color: red'></span> - образ не собран
  - <span class='iconify-inline' data-icon='mdi:update' style='color: orange'></span> - образ был изменен после сборки и после этого не было успешных сборок
- История изменений образа
  - Создан - автор и время создания
  - Изменен - автор и время последних изменений (кода в редакторе образа)
  - Собран - автор и время последней успешной сборки
- Параметры сборки
  - Контекст сборки
    - ЛОКАЛЬНАЯ ПАПКА - использовать для сборки данные текущего редактора Dockerfile.
    - GIT РЕПОЗИТОРИЙ - использовать для сборки данные из GIT репозитория.
  - Dockerfile - редактора кода создания Докер образа
- Кнопка "СОХРАНИТЬ" - сохранение изменений в редакторе
- Кнопка "СОБРАТЬ" - сборка Докер образа
- Журнал сборок и <span class='iconify-inline' data-icon='mdi:refresh'></span> кнопка обновления журнала - история сборок Докер образа

  - <span class='iconify-inline' data-icon='mdi:menu-down'></span> - открыть журнал сборки
  - Начало - время начала сборки
  - Статус - статус завершения
    - <span class='iconify-inline' data-icon='vaadin:progressbar' style='color: green'></span> - в процессе сборки
    - <span class='iconify-inline' data-icon='mdi:alert-circle' style='color: red'></span> - образ не собран
    - <span class='iconify-inline' data-icon='mdi:check-circle' style='color: green'></span> -последние изменения образа собраны
  - Длительность сборки

  При изменении контекста сборки на **GIT РЕПОЗИТОРИЙ** отображается:

  - URL - публичный репозиторий с файлами сборки Докер образа.

  ![Docker image editor git context](/images/common/dashboard_user_workspace_resources_docker_editor_git.png)

[1]: https://docs.docker.com/get-started/overview/
[2]: /docs/desc/workspace.md
[3]: /docs/desc/nodes.md#контеинер
[4]: /docs/desc/nodes.md#расчетныи-узел
