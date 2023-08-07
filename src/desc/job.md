# Задания

## Описание

**Задание** (Job) - экземпляр выполнения узла с конкретными входными [пакетами][1] и [параметрами][2].


Список заданий отображается в [панели узла][3] в вкладке <span class='iconify-inline' data-icon='mdi:cog-box'></span> [**Задания**][4].

Общее количество выполняемых заданий в узле в текущем [слое данных][5] отображается в виде ярлыка <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"></span>:

![Node packages count](/images/common/node_compute_jobs.png)

Общее количество заданий, завершившихся с ошибкой, в узле в текущем [слое данных][5] отображается в виде ярлыка <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>:

![Node packages count](/images/common/node_compute_jobs_error.png)


## Типы

Типы заданий:
- Стандартные задания - создаются непосредственно после нажатия пользователем кнопки <span class="iconify-inline" data-icon="mdi:cog-clockwise"/> [пакетной][9] и <span class="iconify-inline" data-icon="mdi:motion-play"/> [интерактивной][10] обработки пакета или автоматически после появления нового пакета в узле

  > Такие задания непосредственно осуществляют обработку полученных на входе пакетов согласно [параметрам][2] узла с помощью [файлов][8] узла.

- Стандартные задания по расписанию - создаются в диалоге **Запланировать**, который открывается после нажатия кнопки <span class="iconify-inline" data-icon="mdi:update"/> обработки пакета [по расписанию][11], установки переключателя в значение  <span class="iconify-inline" data-icon="bi:toggle2-off"/> Одноразовое выполнение задания и указания соответствующего расписания запуска.

  > Такие задания непосредственно осуществляют обработку полученных на входе пакетов согласно [параметрам][2] узла с помощью [файлов][8] узла.

- Задания-инициаторы - задания, инициирующие создание стандартных заданий согласно расписанию. Создаются в диалоге **Запланировать**, который открывается после нажатия кнопки <span class="iconify-inline" data-icon="mdi:update"/> [создания][12] задания-инициатора, установки переключателя в значение <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"/> Задание-инициатор и указания соответствующего расписания запуска.

  > Такие задания осуществляют периодическое создание в текущем узле копий инициировашего их пакета, что приводит к запуску стандартных заданий. Таким образом, осуществляется запуск стандартных заданий согласно заданному расписанию. Задания-инициаторы игнорируют [параметры][2] и [файлы][8] узла.


## Состояния

Основные типы состояний заданий:

- <span class="iconify-inline" data-icon="mdi:circle-outline" style="color: grey"></span> - Создано
- <span class="iconify-inline" data-icon="mdi:progress-download" style="color: yellow"></span> - На [сервере расчетов][6]
- <span class="iconify-inline" data-icon="mdi:progress-clock" style="color: orange"></span> - В очереди на исполнение
- <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"></span> - Стартовало
- <span class="iconify-inline" data-icon="mdi:progress-download" style="color: teal"></span> - Сгрузило данные
    > Обрабатываемые данные загружены в контейнер задания.
- <span class="iconify-inline" data-icon="mdi:progress-wrench" style="color: green"></span> - Выполнено
    > Завершено выполнение [скрипта][7].
- <span class="iconify-inline" data-icon="mdi:progress-upload" style="color: teal"></span> - Загрузило данные
    > Созданные данные загружены в платформу.
- <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"></span> - Сформировало пакеты
    > Сгенерированы выходные пакеты.
- <span class="iconify-inline" data-icon="mdi:check-circle" style="color: green"></span> - Обработано
    > Обработка полностью успешно завершена.
- <span class="iconify-inline" data-icon="mdi:alert-circle" style="color: red"></span> - Ошибка
- <span class="iconify-inline" data-icon="mdi:emoticon-cry-outline" style="color: red"></span> - Отсутствует сердцебиение более 5 минут

Дополнительные типы состояний для [заданий-инициаторов](#типы):

- <span class="iconify-inline" data-icon="mdi:sleep" style="color: grey"></span> - В ожидании запуска по расписанию
- <span class="iconify-inline" data-icon="mdi:motion-pause-outline" style="color: grey"></span> - Пауза
    > Пользователь поставил на паузу следущие запуски заданий (формирование инициирующих пакетов) по расписанию.

[1]: /docs/desc/package.md
[2]: /docs/desc/node_params.md
[3]: /docs/desc/nodes.md#панели-узла
[4]: /docs/desc/nodes.md#задания
[5]: ./project.md#слои-данных
[6]: /docs/desc/executor.md
[7]: /docs/desc/nodes.md#контеинер
[8]: /docs/desc/nodes.md#фаилы
[9]: /docs/instructions/package.md#обработка-пакета
[10]: /docs/instructions/package.html#интерактивная-обработка-пакета
[11]: /docs/instructions/package.html#обработка-пакета-по-расписанию
[12]: /docs/instructions/job.html#запуск-задания-по-расписанию