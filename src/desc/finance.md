# Управление платежами

::: danger <span class='iconify' data-icon='gg:danger' style='color: #cc0000; font-size: 24px;'></span>
В связи с тестовым периодом эксплуатации платформы указанная ниже информация может изменяться!
:::

Управление платежами осуществляется с использованием счетов и транзакций.

## Cчет

**Счет** - это учетная запись, соответствующая сумме принадлежащих полььзователю денежных средств. Счет используется платформой и ее пользователями для учёта финансовых операций.

Тип валюты:

- рубль

Типы счетов:

- Пользовательские
- Рабочего пространства
- S3 хранилища
- Сервера расчетов
- Платформы

## Транзакции

**Транзакция** - в общем случае, любая поддерживаемая платформой сделка или пакет сделок с использованием счетов.

Типы транзакций:

- [Зачисление средств на счет][1]
- [Вывод средств с счета][2]
- [Прямой перевод между счетами][3]
- [Оплата использования исполнителя расчетов][4]
- [Оплата использования S3 хранилища][5]
- [Оплата использования API ключа проекта][6]
- [Оплата использования платной роли проекта][7]
- [Комиссия платформы][8]

Виды транзакций:

- Онлайн транзакции

  Оплата происходит непосредственно после завершения возмездных операций.
  К ним относятся все типы транзакций кроме [Оплата использования S3 хранилища][5].

- Транзакции по расписанию

  Транзакции [Оплата использования S3 хранилища][5] происходят или ежедневно после запуска процедуры очистки, или после запуска очистки владельцем хранилища.

- Явные

  Оплата осуществляется непосредственно пользователями.
  К ним относятся: [Зачисление средств на счет][1], [Вывод средств с счета][2], [Прямой перевод между счетами][3].

- Косвенные

  Оплата осуществляется автоматически платформой за проведение возмездных операций.
  К ним относятся все транзакции вида **Оплата …** и [Комиссия платформы][8].

## Детализация транзакций

### Зачисление средств на счет

Используется для ввода средств на платформу.

### Вывод средств с счета

Используется для вывода средств с платформы.

### Прямой перевод между счетами

Используется для перевода средств между счетами пользователей и другими типами счетов.

Пользователь может самостоятельно перевести средства рабочему пространству.

Владельцы рабочего пространства, S3 хранилища или сервера расчетов могут самостоятельно вывести средства на собственные счета.

### Оплата использования исполнителя расчетов

Автоматическое списание средств рабочего пространства за использование вычислительных ресурсов.

Расчет стоимости использования производится для каждого обрабатываемого задания.

Стоимость использования рассчитывается после завершения выполнения задания и вычисляется как сумма произведений заданных для [сервера расчетов][9] показателей и параметров задания:

- **Цена за задание**
- **Цена за секунду** умноженная на длительность задания
- **Цена за ядро CPU** умноженная на количество запрошенных ядер и на длительность задания
- **Цена за GPU** умноженная на количество использованных GPU и на длительность задания
- **Цена за МБ** умноженная на количество запрошенного ОЗУ

После перевода средств с счета рабочего пространства на счет сервера расчетов с последнего списывается [Комиссия платформы][8].

### Оплата использования S3 хранилища

Автоматическое списание средств рабочего пространства за хранение данных в S3 хранилище.

Стоимость хранения рассчитывается ежедневно или после ручного запуска очистки хранилища владельцем.

Стоимость хранения вычисляется как заданная для [S3 хранилища][10] **Цена за МБ** умноженная на объем хранилища, занятый файлами проектов рабочего пространства на момент проведения очистки хранилища.

После перевода средств с счета рабочего пространства на счет S3 хранилища с последнего списывается [Комиссия платформы][8].

### Оплата использования API ключа проекта

Автоматическое списание средств пользователя за использование [API ключа][11] на счет рабочего пространства проекта.

Стоимость использования включает в себя:

- **Цена за обращение** указанная на соответствующем API.

  Списывается с счета пользователя непосредственно после вызова API.

- Стоимость затраченных вычислительных ресурсов

  Списывается с счета пользователя после завершения задания и проведения расчетов между рабочим пространством и сервером расчетов.

После перевода средств за **обращение** с счета пользователя на счет рабочего пространства с последнего списывается [Комиссия платформы][8].

### Оплата использования платной роли проекта

Автоматическое списание средств пользователя за использование [платной роли][12] проекта на счет рабочего пространства проекта.

Стоимость использования включает в себя:

- Стоимость затраченных вычислительных ресурсов

  Списывается с счета пользователя после завершения задания и проведения расчетов между рабочим пространством и сервером расчетов.

Списания происходят при работе пользователя с проектом, на который у него существует платная роль.

### Комиссия платформы

Отчисления платформе за пользование.

Комиссия платформы снимается с:

- Владельцев S3 хранилищ предоставляющих возмездных услуги хранения данных;
- Владельцев серверов расчетов предоставляющих возмездных услуги по использованию вычислительных ресурсов.

Комиссия платформы указывается как **Стоимостной коэффициент** в [тарифе][13] владельца.

[1]: #зачисление-средств-на-счет
[2]: #вывод-средств-с-счета
[3]: #прямои-перевод-между-счетами
[4]: #оплата-использования-исполнителя-расчетов
[5]: #оплата-использования-s3-хранилища
[6]: #оплата-использования-api-ключа-проекта
[7]: #оплата-использования-платнои-роли-проекта
[8]: #комиссия-платформы
[9]: ./executor.md
[10]: ./s3.md
[11]: ./api_keys.md
[12]: ./project_role.md#типы-ролеи
[13]: ./payplan.md