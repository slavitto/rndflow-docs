# Задания

# Запуск задания по расписанию

[Задания-инициаторы][1] позволяют запускать стандартные задания по заданному пользователем расписанию (запуск с указанной периодичностью).


- Открыть панель <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][2] узла.

- Выбрать необходимый пакет, установив напротив него переключатель <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> в значение <span class="iconify-inline" data-icon="mdi:checkbox-marked"></span>.

- Нажать кнопку <span class="iconify-inline" data-icon="mdi:update"></span> <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> на панели инструментов.

  ![Scheduler package](/images/common/node_panel_packages_schedule.png)

- Задать расписание (периодичность) запуска в поле <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> в Cron-формате.

  Формат:

    <pre>
      <small>
      * * * * *
      | | | | |
      | | | | +----- Дни недели (диапазон: 1-7)
      | | | +------- Месяцы     (диапазон: 1-12)
      | | +--------- Дни месяца (диапазон: 1-31)
      | +----------- Часы       (диапазон: 0-23)
      +------------- Минуты     (диапазон: 0-59)
      </small>
    </pre>

  - Любое из пяти полей может содержать символ <b>*</b>  в качестве значения. Это означает полный диапазон возможных значений, например, каждая минута, каждый час и т.д.
  - Любое из полей может содержать список значений, разделенных запятыми (наприимер, 1,3,7) или интервал (поддиапазон) значений, обозначаемый дефисом (например, 1-5).
  - После звездочки <b>*</b> или интервала можно с помощью символа / указать шаг значений. Например, 0-23/2 может использоваться в поле "Часы" для указания того, что действие должно происходить каждые два часа, значение */4 в поле "Минуты" означает, что действие, должно происходить каждые четыре минуты, 1-30/3 - это то же, что и 1,4,7,10,13,16,19,22,25,28.
  - В полях "Месяцы" и "Дни недели" можно вместо числовых значений использовать сокращенные до трех букв названия месяцев (Jan, Feb ... Dec) и дней недели (Mon, Tue ... Sun).

  ![Packages schedulers start time](/images/common/node_panel_packages_schedule_time.png)

  - В выпадающем списке примеров <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> можно выбрать подходящий шаблон.

  - С дополнительными примерами можно ознакомиться после перехода по сслыке <span class='iconify-inline' data-icon='ph:number-circle-three-fill' style="color: red"/>.

- Установить переключатель <span class='iconify-inline' data-icon='ph:number-circle-four-fill' style="color: red"/> в значение <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"/> Задание-инициатор.

- Нажать на кнопку "СОХРАНИТЬ".

- Перейти в панель <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Задания][3] узла, в котором должно появиться новое задание (может потребоваться обновить <span class="iconify-inline" data-icon="mdi:refresh"></span> список заданий). Наличие у задания статуса <span class="iconify-inline" data-icon="mdi:sleep" style="color: grey"></span> сообщает об успешном запуске "будильника".

- Согласно заданному расписанию (по мере срабатывания "будильника") в панеле <span class="iconify-inline" data-icon="mdi:package"></span>[Пакеты][2] узла будут появлять пакеты, созданные заданием-инициатором,  а в панеле <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Задания][3] узла соответствующие им стандартные задания.

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
Пакеты, созданные заданием-инициатором имеют метки вида: <i>Created by CronJob:<идентификатор задания></i>.

Такие пакеты не сохраняют ссылки на родительское задание-инициатор!
:::

[1]: /desc/job.md#типы
[2]: /desc/nodes.md#пакеты
[3]: /desc/nodes.md#задания




