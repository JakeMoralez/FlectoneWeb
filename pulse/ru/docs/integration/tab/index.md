# TAB

Интеграция с `TAB` устраняет проблемы совместимости, выключая работу некоторых модулей в `FlectonePulse`:
- [Скорборд](/docs/message/format/scoreboard/)
- [Верхнее](/docs/message/tab/header/)
- [Нижнее](/docs/message/tab/footer/)
- [Имя в списке](/docs/message/tab/playerlistname/)

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → tab`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#tab

<!--@include: @/parts/enable.md-->

### `disable-flectonepulse-scorebord`

Выключает модуль [Скорборд](/docs/message/format/scoreboard/)

### `disable-flectonepulse-header`

Выключает модуль [Верхнее](/docs/message/tab/header/)

### `disable-flectonepulse-footer`

Выключает модуль [Нижнее](/docs/message/tab/footer/)

### `disable-flectonepulse-playerlistname`

Выключает модуль [Имя в списке](/docs/message/tab/playerlistname/)

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.tab`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#integrationtab

<!--@include: @/parts/permission/permissionTier3.md-->