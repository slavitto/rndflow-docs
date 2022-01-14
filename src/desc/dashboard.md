# Панель управления

## Описание

Основные компоненты платформы пользователю доступны с помощью панели управления.

![User dashboard](./images/dashboard/dashboard.png)

Структура:

- <span class="iconify-inline" data-icon="mdi:account"></span> Пользователь - [панель пользователя](#панель-пользователя).
- [Рабочие пространства][1]

  - <span class='iconify-inline' data-icon='mdi:plus'></span> Кнопка создания нового рабочего пространства
  - Список плиток доступных [рабочих пространств][1].

    > Переход в рабочее пространство осуществляется щелчком по соответсвующем плитке.

- Приглашения в рабочие пространства
  - Список плиток приглашений в рабочие пространства (только при наличии приглашения).
- Проекты

  - Список плиток доступных [проектов][2], отсортированных по времени последнего доступа.

    > Переход в проект осуществляется щелчком по соответсвующем плитке. Отображаются проекты, в список пользователей которых непосредственно включен текущий пользователь.

## Структура плитки рабочего пространства

- Изображение
- <span class="iconify-inline" data-icon="mdi:delete"></span> - кнопка удаления рабочего пространства
- Название
- Описание
- Тип прав (Владелец/Участник)

![Workspace](./images/dashboard/workspace.png)

## Структура плитки проекта

- Изображение
- <span class="iconify-inline" data-icon="mdi:star"></span> - кнопка добавления проекта в избранные
- <span class='iconify-inline' data-icon='ph:number-square-two-fill' style="color: green"></span> - общее количество <span class="iconify-inline" data-icon="mdi:star"></span> проекта
- <span class="iconify-inline" data-icon="mdi:delete"></span> - кнопка удаления проекта
- Название
- Описание
- <span class="iconify-inline" data-icon="mdi:sitemap"></span> Ссылка для перехода в редактор графа проекта (Граф)
- <span class="iconify-inline" data-icon="mdi:shield-account"></span> Ссылка для перехода в редактор разрешений проекта (Разрешения)
- <span class="iconify-inline" data-icon="mdi:shield-key"></span> Ссылка для перехода в редактор API ключей проекта (API ключи)

![Project](./images/dashboard/project.png)

## Панель пользователя

### Структура

Панель пользователя отображает:

- Аватар
- Имя
- <span class="iconify-inline" data-icon="mdi:email"></span> Электронная почта
- <span class="iconify-inline" data-icon="mdi:link"></span> Веб сайт/страница пользователя
- Описание пользователя
- Время последнего подключения
- Кнопка "РЕДАКТИРОВАТЬ"
- Кнопка "СМЕНИТЬ ПАРОЛЬ"

Нажатие кнопки **РЕДАКТИРОВАТЬ** переведет панель в режим [редактирования](#редактирование).

Нажатие кнопки **СМЕНИТЬ ПАРОЛЬ** откроет панель [смены пароля](#смена-пароля).

### Редактирование

Позволяет изменить:

- Ававтар - щелкнуть по аватару
- Имя
- <span class="iconify-inline" data-icon="mdi:email"></span> Электронная почта
- <span class="iconify-inline" data-icon="mdi:link"></span> Веб сайт/страница пользователя
- Описание пользователя
- Время последнего подключения
- Кнопка "СОХРАНИТЬ"
- Кнопка "ОТМЕНА"

![User edit](/images/common/dashboard_user_edit.png)

### Смена пароля

Необходимо ввести текущий и новый пароли.

![User password edit](/images/common/dashboard_user_password.png)

[1]: ./workspace.md
[2]: ./project.md
