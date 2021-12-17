# Задания

## Описание

**Задание** (Job) - экземпляр выполнения узла с конкретными входными [пакетами][1] и [параметрами][2].

Список заданий отображается в [панели узла][3] в вкладке <span class='iconify-inline' data-icon='mdi:cog-box'></span> [**Задания**][4].

Общее количество выполняемых заданий в узле в текущем [слое данных][5] отображается в виде ярлыка <span class='iconify-inline' data-icon='ph:number-square-three-fill' style="color: green"></span>:

![Node packages count](/images/common/node_compute_jobs.png)

Общее количество заданий, завершившихся с ошибкой, в узле в текущем [слое данных][5] отображается в виде ярлыка <span class='iconify-inline' data-icon='ph:number-square-one-fill' style="color: red"></span>:

![Node packages count](/images/common/node_compute_jobs_error.png)

## Состояния

Типы состояний заданий:

- <span class="iconify-inline" data-icon="mdi:circle-outline" style="color: grey"></span> - Создано
- <span class="iconify-inline" data-icon="mdi:progress-download" style="color: yellow"></span> - На [сервере расчетов][6]
- <span class="iconify-inline" data-icon="mdi:progress-clock" style="color: orange"></span> - В очереди на исполнение
- <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"></span> - Стартовало
- <span class="iconify-inline" data-icon="mdi:check-circle" style="color: green"></span> - Обработано
- <span class="iconify-inline" data-icon="mdi:alert-circle" style="color: red"></span> - Ошибка

[1]: /docs/desc/package.md
[2]: /docs/desc/node_params.md
[3]: /docs/desc/nodes.md#панели-узла
[4]: /docs/desc/nodes.md#задания
[5]: ./project.md#слои-данных
[6]: /docs/desc/executor.md
