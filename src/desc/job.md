# Jobs

## Description

**Job** - an instance of node execution with specific input [packages][1] and [parameters][2].

The list of jobs is displayed in the [node panel][3] under the <span class='iconify-inline' data-icon='mdi:cog-box'></span> [**Jobs**][4] tab.

The total number of running jobs in the node in the current [data layer][5] is displayed as a label <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: green"></span>:

![Node packages count](/images/common/node_compute_jobs.png)

The total number of jobs that ended with errors in the node in the current [data layer][5] is displayed as a label <span class='iconify-inline' data-icon='ph:number-circle-one-fill' style="color: red"></span>:

![Node packages count](/images/common/node_compute_jobs_error.png)

## Types

Types of jobs:
- Standard jobs - created directly after the user clicks the button <span class="iconify-inline" data-icon="mdi:cog-clockwise"/> for [batch][9] and <span class="iconify-inline" data-icon="mdi:motion-play"/> [interactive][10] package processing, or automatically after a new package appears in the node

  > Such jobs directly process the input packages according to the node's [parameters][2] using the node's [files][8].

- Scheduled standard jobs - created in the **Schedule** dialog, which opens after clicking the button <span class="iconify-inline" data-icon="mdi:update"/> for [scheduled][11] package processing, setting the switch to <span class="iconify-inline" data-icon="bi:toggle2-off"/> One-time job execution and specifying the corresponding launch schedule.

  > Such jobs directly process the input packages according to the node's [parameters][2] using the node's [files][8].

- Trigger jobs - jobs that initiate the creation of standard jobs according to a schedule. Created in the **Schedule** dialog, which opens after clicking the button <span class="iconify-inline" data-icon="mdi:update"/> for [creating][12] a trigger job, setting the switch to <span class='iconify-inline' data-icon='bi:toggle-on' style="color: green"/> Trigger job and specifying the corresponding launch schedule.

  > Such jobs periodically create copies of the initiating package in the current node, which leads to the launch of standard jobs. Thus, standard jobs are launched according to the specified schedule. Trigger jobs ignore the node's [parameters][2] and [files][8].

## States

Main job states:

- <span class="iconify-inline" data-icon="mdi:circle-outline" style="color: grey"></span> - Created
- <span class="iconify-inline" data-icon="mdi:progress-download" style="color: yellow"></span> - On [computation server][6]
- <span class="iconify-inline" data-icon="mdi:progress-clock" style="color: orange"></span> - In execution queue
- <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"></span> - Started
- <span class="iconify-inline" data-icon="mdi:progress-download" style="color: teal"></span> - Data loaded
    > The processed data is loaded into the job container.
- <span class="iconify-inline" data-icon="mdi:progress-wrench" style="color: green"></span> - Completed
    > Script execution [completed][7].
- <span class="iconify-inline" data-icon="mdi:progress-upload" style="color: teal"></span> - Data uploaded
    > Created data uploaded to the platform.
- <span class="iconify-inline" data-icon="mdi:progress-check" style="color: green"></span> - Packages generated
    > Output packages generated.
- <span class="iconify-inline" data-icon="mdi:check-circle" style="color: green"></span> - Processed
    > Processing successfully completed.
- <span class="iconify-inline" data-icon="mdi:alert-circle" style="color: red"></span> - Error
- <span class="iconify-inline" data-icon="mdi:emoticon-cry-outline" style="color: red"></span> - No heartbeat for over 5 minutes

Additional states for [trigger jobs](#types):

- <span class="iconify-inline" data-icon="mdi:sleep" style="color: grey"></span> - Waiting for scheduled launch
- <span class="iconify-inline" data-icon="mdi:motion-pause-outline" style="color: grey"></span> - Paused
    > User paused the subsequent job launches (initiating package creation) according to the schedule.

[1]: /desc/package.md
[2]: /desc/node_params.md
[3]: /desc/nodes.md#node-panels
[4]: /desc/nodes.md#jobs
[5]: ./project.md#data-layers
[6]: /desc/executor.md
[7]: /desc/nodes.md#container
[8]: /desc/nodes.md#files
[9]: /instructions/package.md#package-processing
[10]: /instructions/package.html#interactive-package-processing
[11]: /instructions/package.html#scheduled-package-processing
[12]: /instructions/job.html#scheduled-job-launch
