# Secrets of the project

## Add secret

- Open project
- Using the [project control panel][1] go to the [secrets][1] editor window
- Opposite the **Secrets** inscription, click on the <span class="iconify-inline" data-icon="mdi:plus"></span> button and in the dialog box enter the unique name of the new [secret][1] and click **OK** button.

 ::: danger <span class="iconify" data-icon="gg:danger" style="color: #cc0000; font-size: 24px;"></span>
 The name can only contain Latin letters, numbers and underscores!
 :::

 ![Add role](/images/common/secrets_add.png)

- In the new [secret tile][3], in the **Value** field, enter the secret value.
- In the new [secret tile][3] in the **Nodes** field, using the <span class="iconify-inline" data-icon="mdi:magnify"></span> button, add nodes to which the value will be available secret.

## Getting access to a secret in a node

In the [Files][4] tab of the node that has access to the secret, you must access the environment variable named [secret][1] in a program module or script.

```python
#!/usr/bin/env python
from rndflow import job
secret_value = job.secret('My_secret')
```

[1]: /desc/secrets.md
[2]: /desc/project.md#project-control panel
[3]: /desc/secrets.md#secret-tile
[4]: /desc/nodes.md#files