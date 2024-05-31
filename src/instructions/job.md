# Tasks

# Run a task according to schedule

[Task initiators][1] allow you to run standard tasks according to a user-specified schedule (running at a specified frequency).


- Open the <span class="iconify-inline" data-icon="mdi:package"></span>[Packages][2] panel of the node.

- Select the required package by setting the switch <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> to <span class ="iconify-inline" data-icon="mdi:checkbox-marked"></span>.

- Press the button <span class="iconify-inline" data-icon="mdi:update"></span> <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> in the toolbar.

 ![Scheduler package](/images/common/node_panel_packages_schedule.png)

- Set the launch schedule (frequency) in the <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span> field in Cron format.

 Format:

 <pre>
 <small>
 * * * * *
 | | | | |
 | | | | +----- Days of the week (range: 1-7)
 | | | +------- Months (range: 1-12)
 | | +--------- Days of the month (range: 1-31)
 | +----------- Clock (range: 0-23)
 +------------ Minutes (range: 0-59)
 </small>
 </pre>

 - Any of the five fields can contain the character <b>*</b> as a value. This means the full range of possible values, such as every minute, every hour, etc.
 - Any of the fields can contain a list of values ​​separated by commas (for example, 1,3,7) or a range (subrange) of values, denoted by a hyphen (for example, 1-5).
 - After an asterisk <b>*</b> or an interval, you can use the / symbol to indicate the value step. For example, 0-23/2 could be used in the Hours field to indicate that the action should occur every two hours, */4 in the Minutes field would indicate that the action should occur every four minutes, 1-30/ 3 is the same as 1,4,7,10,13,16,19,22,25,28.
 - In the "Months" and "Days of the Week" fields, instead of numeric values, you can use the names of months abbreviated to three letters (Jan, Feb ... Dec) and days of the week (Mon, Tue ... Sun).

 ![Packages schedulers start time](/images/common/node_panel_packages_schedule_time.png)

 - In the drop-down list of examples <span class='iconify-inline' data-icon='ph:number-circle-two-fill' style="color: red"></span> you can select a suitable template.

 - Additional examples can be found after following the link <span class='iconify-inline' data-icon='ph:number-circle-three-fill' style="color: red"/>.

- Set the <span class='iconify-inline' data-icon='ph:number-circle-four-fill' style="color: red"/> switch to the value <span class='iconify-inline' data-icon ='bi:toggle-on' style="color: green"/> Initiator task.

- Click on the "SAVE" button.

- Go to the <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Tasks][3] panel of the node in which the new task should appear (you may need to update the <span class ="iconify-inline" data-icon="mdi:refresh"></span> list of tasks). The presence of the <span class="iconify-inline" data-icon="mdi:sleep" style="color: gray"></span> status for the task indicates the successful launch of the alarm clock.

- According to the specified schedule (as the alarm goes off), packages created by the task will appear in the <span class="iconify-inline" data-icon="mdi:package"></span>[Packages][2] panel of the node -initiator, and in the <span class="iconify-inline" data-icon="mdi:cog-box"></span>[Tasks][3] panel of the node there are standard tasks corresponding to them.

::: tip <span class="iconify" data-icon="mdi:information" style="color: #42b983; font-size: 24px;"></span>
Packages created by the initiating job have labels like: <i>`Created by CronJob: <job identifier>`</i>.

Such packages do not retain references to the initiating parent task!
:::

[1]: /desc/job.md#типы
[2]: /desc/nodes.md#пакеты
[3]: /desc/nodes.md#задания




