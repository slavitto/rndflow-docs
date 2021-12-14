# Рабочее пространство

## Переход в рабочее пространство

Перейти в [панель управления](/docs/desc/dashboard.md):

- Открыть панель ссылок <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>
- Нажать на изображение аватара пользователя <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span>.

  ![Link panel](/images/common/user_link_panel.png)

- Нажать на [плитку](/docs/desc/dashboard.md#структура-плитки-рабочего-пространства) необходимого [рабочего пространства][1] <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>.

  ::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
  Для нового пользователя автоматически создается [рабочее пространство][1] <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>.
  :::

  ![New user dashboard](/images/common/dashboard_user_new.png)

## Инициализация рабочего пространства

- Перейти на вкладку **РЕСУРСЫ**

![Resources](/images/common/dashboard_user_workspace_resources_new.png)

- [Добавить](./executor.md#добавление-в-рабочее-пространство) новое [S3 хранилище](/docs/desc/s3.md)

- [Добавить](./s3.md#добавление-в-рабочее-пространство) новый [cервер расчетов](/docs/desc/executor.md)

- Убедиться в наличии ресурсов

![Resources](/images/common/dashboard_user_workspace_resources.png)

## Открыть публичный доступ

Разрешение публичного доступа к рабочему пространству позволяет размещать в нем проекты с [публичным][2] и [возмездным][3] доступом.

- [Перейти][4] в [рабочее пространство][1].

- На [панели описания][5] рабочего пространства нажать кнопку **РЕДАКТИРОВАТЬ**.
- Установить переключатель **Видно всем**.
- Нажать кнопку **СОХРАНИТЬ**.

[1]: /docs/desc/workspace.md
[2]: ./project.md#открыть-публичныи-доступ
[3]: ./project.md#oткрыть-возмедныи-доступ
[4]: ./workspace.md#переход-в-рабочее-пространство
[5]: /docs/desc/workspace.md#панель-описания
