# Проект

## Описание

**Проект** - это конкретная реализация интеллектуального приложения или алгоритма средствами платформы.

**Проект-сервис** - проект с разрешенным доступом через открытое API.

Состав проекта:

- Граф - реализующий конкретный алгоритм в составе:
  - Узлы и группы
  - Пакеты
  - Задачи
- Набор прав доступа для различных пользователей и групп (Разрешения).
- Набор секретов для использовании в узлах при их исполнении (Секреты).
- Набор API для внешнего доступа к проекту (API-ключи)
- [Слои данных](/docs/intro/definitions#datalayer)
- Подключенный к проекту S3 сервер
- Подключенный к проекту основной сервер расчетов
- Графические интерфейсы управления графом (Интерфейсы)

## Интерфейс

Общий вид

![Project general view](./images/project/general.png)

### Панель управления проектом

Основные свойства проекта доступны через панель управления.

<img src="./images/project/manage_panel.png" align="right" alt="Project manage panel" style="margin: 5%;">

Панель включает в себя:

- Изображение проекта с возможностью редактирования <span class="iconify-inline" data-icon="mdi:pencil"></span> и удаления <span class="iconify-inline" data-icon="mdi:delete"></span>.
- Название проекта
- <span class="iconify-inline" data-icon="mdi:notebook"></span> Название родительского рабочего окружения
- <span class="iconify-inline" data-icon="mdi:folder-network"></span> Имя используемго S3 сервера

---

- <span class="iconify-inline" data-icon="mdi:information"></span> Описание проекта и список доступных для внешнего запроса ролей и API ключей (О проекте)
- <span class="iconify-inline" data-icon="mdi:sitemap"></span> Редактор графа проекта (Граф)
- <span class="iconify-inline" data-icon="mdi:view-dashboard-edit"></span> Редактор графических интерфейсов проекта (Интерфейсы)
- <span class="iconify-inline" data-icon="mdi:eye-off"></span> Редактор секретов проекта (Секреты)
- <span class="iconify-inline" data-icon="mdi:shield-account"></span> Редактор разрешений проекта (Разрешения)
- <span class="iconify-inline" data-icon="mdi:shield-key"></span> Редактор API ключей проекта (API ключи)

---

- <span class="iconify-inline" data-icon="mdi:power"></span> Статус проекта (Проект включен/выключен) - разрешает или запрещает проекту информировать сервер расчетов о новых задачах.
- <span class="iconify-inline" data-icon="mdi:server"></span> Основной сервер расчетов (Сервер расчетов) - отображает выбранный основной сервер расчтетов для проекта и его статус (активен - зеленый, красный - отключен) и описание.

---

- <span class="iconify-inline" data-icon="mdi:layers"></span> Список слоев данных проект (Слой данных) - список слоев с возможность редактирования и удаления текущего слоя.
- <span class="iconify-inline" data-icon="mdi:power"></span> Статус текущего слоя данных (Слой данных включен/выключен) - разрешает или запрещает проекту информировать сервер расчетов о новых задачах в текущем слое
- <span class="iconify-inline" data-icon="mdi:account-eye"></span> Возможность общего доступа к слою (Общий слой/Персональный слой) - определяет тип доступа к слою, к общему слою данных имет доступ все пользователи, которым доступен данный проект. К персональному слою имеет доступ только пользователь его создавший.

---

- <span class="iconify-inline" data-icon="mdi:file-export"></span> Экспорт проекта - экспорт проекта в виде архива
- <span class="iconify-inline" data-icon="mdi:file-import"></span> Импорт проекта - импорт проекта из внешнего архива

<br clear="right"/>

### Панель создания узлов

Для добавления узлов используется панель создания узлов.

<img src="./images/project/create_panel.png" align="right" alt="Node create panel" style="margin: 5%;">

Панель позволяет добавить:

- <span class="iconify-inline" data-icon="mdi:kubernetes"></span> Расчетный узел
- <span class="iconify-inline" data-icon="mdi:download-circle"></span> Узел данных
- <span class="iconify-inline" data-icon="mdi:database"></span> SQL узел
- <span class="iconify-inline" data-icon="mdi:group"></span> Группу узлов

<br clear="right"/>

### Панель управления внешним видом

<img src="./images/project/view_panel.png" align="right" alt="Project view panel" style="margin: 5%;">

Панель управления внешним видом позволяет:

- <span class="iconify-inline" data-icon="mdi:magnify-plus"></span> <span class="iconify-inline" data-icon="mdi:magnify-minus"></span> Масштабировать граф
- <span class="iconify-inline" data-icon="mdi:magnify-scan"></span> Отобразить граф в оптимальном масштабе (Оптимальный масштаб)
- <span class="iconify-inline" data-icon="mdi:auto-fix"></span> Разместить узлы графа автоматичеки (Расположить узлы автоматически)

<br clear="right"/>

### Панель поиска

Панель поиска <span class="iconify-inline" data-icon="mdi:magnify"></span> позволяет осуществлять поиск графа по его имени.

![Project find panel](./images/project/find_panel.png)
