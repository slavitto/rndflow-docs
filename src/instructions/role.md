# Роли

## Создание новой роли

### Добавить роль

Напротив надписи **Роли** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> и в диалоговом окне ввести уникальное имя новой роли.

![Add role](/images/common/permissions_role_add.png)

### Установить разрешения

На [плитке роли][1] нажать на кнопку <span class="iconify-inline" data-icon="mdi:shield-edit"></span> **РАЗРЕШЕНИЯ** и в диалоговом [окне][4] установить необходимые [типы разрешений][2] для доступа к проекту, отдельным узлам и интерфейсам.

![Set permissions](/images/common/permissions_role_set_permissions.png)


## Запрос платной роли

В проекте перейти в раздел <span class="iconify-inline" data-icon="mdi:information"></span>**О проекте** и в секции <span class="iconify-inline" data-icon="mdi:ticket-account"></span>**Роли** на плитке необходимой роли нажать кнопку **ЗАПРОСИТЬ**.

![Role request](/images/common/permissions_role_request.png)

Плитка роли примет следующий вид:

![Role requested](/images/common/permissions_role_wait.png)

Далее следует ожидать подтверждения запроса со стороны владельца проекта, на электронную почту которого будет выслано соответстующее уведомление о запросе.

После того, как владелец проекта [одобрит запрос](#подтверждение-запроса), будет получено электронное информационное письмо.

![Role confirmation letter](/images/common/permissions_role_confirmed_letter.png)

Плитка API ключа примет следующий вид:

![Role confirmed](/images/common/permissions_role_confirmed.png)

Кроме того, для пользователя будет создан новый персональный [слой данных][3] в этом проекте.

## Подтверждение запроса

Владелец проекта на электронную почту получит письмо с уведомлением о запросе.

![Role request letter](/images/common/permissions_role_request_letter.png)

Владельцу необходимо перейти в соответствующий проект в раздел <span class="iconify-inline" data-icon="mdi:shield-account"></span>**Разрешения** вкладка <span class="iconify-inline" data-icon="mdi:ticket-account"></span>**РОЛИ** и в секции <span class="iconify-inline" data-icon="mdi:accout-alert"></span>**Запросы** нажать на кнопку <span class="iconify-inline" data-icon="mdi:check" style="color: green"></span> подтверждения запроса.

![API request confirmation](/images/common/permissions_role_confirmation.png)

[1]: /docs/desc/project_role.md#плитка-роли
[2]: /docs/desc/project_role.md#типы-разрешении
[3]: /docs/desc/project.md#слои-данных
[4]: /docs/desc/project_role.md#диалог-управления-разрешениями