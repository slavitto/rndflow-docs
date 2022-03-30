# API ключи

::: tip <span class='iconify' data-icon='mdi:information' style='color: #42b983; font-size: 24px;'></span>
С видео примером можно ознакомиться в разделе [видео][video].
:::

## Создание шаблона

- Напротив надписи **Шаблоны [API ключей][1]** нажать на кнопку <span class="iconify-inline" data-icon="mdi:plus"></span> и в диалоговом окне ввести уникальное имя нового шаблона, выбрать роль и нажать кнопку **СОЗДАТЬ**.

  ![Add API](/images/common/api_keys_add.png)

- В новой [плитке шаблона][2] добавить информационные поля (названия произвольные)

  - Идентификатор проекта - идентификатор текущего проекта
  - Идентификатор входного узла - узел, в который необходимо отправлять пакеты с данными
  - Идентификатор выходного узла - узел, из которого необходимо забирать пакеты с результатом.

  ![Add Information field](/images/common/api.png)

::: warning <span class="iconify" data-icon="emojione-v1:warning" style="color: #e7c000; font-size: 24px;"></span>
Роль, привязываемая к API шаблону, должна иметь [разрешение][permissions] **project_view** в случае, если в проекте отсутствует общедоступная роль.
:::

## Запрос ключа

В проекте перейти в раздел <span class="iconify-inline" data-icon="mdi:information"></span>**О проекте** и в секции <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API ключи** на плитке необходимого API нажать кнопку **ЗАПРОСИТЬ**.

![API request](/images/common/api_request.png)

Плитка API ключа примет следующий вид:

![API requested](/images/common/api_panel_wait.png)

Далее следует ожидать подтверждения запроса со стороны владельца проекта, на электронную почту которого будет выслано соответстующее уведомление о запросе.

После того, как владелец проекта [одобрит запрос](#подтверждение-запроса-ключа), будет получено электронное информационное письмо.

![API confirmation letter](/images/common/api_request_confirmed_letter.png)

Плитка API ключа примет следующий вид:

![API confirmed](/images/common/api_panel_confirmed.png)

Кроме того, для пользователя будет создан новый персональный [слой данных][3] в этом проекте.

## Подтверждение запроса ключа

Владелец проекта на электронную почту получит письмо с уведомлением о запросе.

![API request letter](/images/common/api_request_letter.png)

Владельцу необходимо перейти в соответствующий проект в раздел <span class="iconify-inline" data-icon="mdi:shield-key"></span>**API ключи** и в секции **Запросы** нажать на кнопку <span class="iconify-inline" data-icon="mdi:check" style="color: green"></span> подтверждения запроса.

![API request confirmation](/images/common/api_confirmation.png)

Ознакомиться с списком выданных ключей и статистикой их использования ключа можно в разделе <span class="iconify-inline" data-icon="mdi:account-key"></span>[ВЫДАННЫЕ КЛЮЧИ][6].

## Отозвать ключ

- Перейти в раздел <span class="iconify-inline" data-icon="mdi:account-key"></span> [**ВЫДАННЫЕ КЛЮЧИ**][6].
- В таблице выданных ключей напротив необходимого к отзыву ключа нажать кнопку <span class='iconify-inline' data-icon='mdi:delete'></span>.

## Импорт ключа

- [Запросить](#запрос-ключа) [API ключ][1] и дождать подтверждения запроса.

- Перейти в проект, из которого будет осуществляться програмный доступ, и в нем перейти в раздел <span class="iconify-inline" data-icon="mdi:eye-off"></span>**Секреты**.

- Открыть <span class="iconify-inline" data-icon="mdi:key-plus"></span> меню добавления [API ключа][1] и выбрать необходимый ключ.

  ![API confirmed](/images/common/api_import.png)

- Ввести префикс для создаваемых [секретов][3].

  ![API insert](/images/common/api_insert.png)

- Будет создан [секрет][3] с токеном ключа _префикс_\_**token**, а также секреты для всех информационных панелей ключа.

  ![API inserted](/images/common/api_inserted.png)

- Разрешить доступ к [секретам][3] узлам из которых будет осуществляться доступ.

  В поле **Узлы** соответствующего [секрета][3] нажать на кнопку <span class="iconify-inline" data-icon="mdi:magnify"></span> и выбрать необходимые узлы.

## Использование ключа

- [Импортировать ключ в проект](#импорт-ключа)
- Перейти в раздел <span class="iconify-inline" data-icon="mdi:sitemap"></span>**Граф** и в вкладке [Файлы][4] узла, у которого есть доступ к [секрету][3] соответствующего [API ключа][1], в программном модуле или скрипте необходимо использовать следующий [код][5].

[1]: /docs/desc/api_keys.md
[2]: /docs/desc/api_keys.md#плитка-шаблона
[3]: /docs/desc/secrets.md
[4]: /docs/desc/nodes.md#фаилы
[5]: /docs/dev/compute.md#api-доступ-к-проекту
[6]: /docs/desc/api_keys.md#выданные-ключи
[video]: ./video.md
[permissions]: /docs/desc/project_role.md#типы-разрешении
