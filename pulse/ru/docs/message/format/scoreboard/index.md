---
authors:
  - TheFaser
---

# Скорборд

Модуль, отвечающий правильную работу `team` и модулей
- [Метка](/docs/command/mark/)
- [Значения](/docs/message/objective/)
- [Таб](/docs/message/tab/)

::: warning ПРЕДУПРЕЖДЕНИЕ
Если возникают проблемы с `TAB` (например сортировка в ТАБе) или другим плагином, использующим `scoreboard`, нужно выключить этот модуль
:::

::: warning ПРЕДУПРЕЖДЕНИЕ
Если параметр будет выключен, имена игроков будут видны, модуль `mark` будет работать некорректно и сортировка в табе от `FlectonePulse` не будет работать
:::

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.scoreboard`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#scoreboard

<!--@include: @/parts/enable.md-->

### `name-visible`

Включает отображение имени над игроком

### `color`

Цвет команды игрока, если включено `name-visible`, то имя будет такого же цвета

### `prefix`

Сообщение перед именем над головой

### `suffix`

Сообщение после имени над головой

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.scoreboard`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#scoreboard

<!--@include: @/parts/permission/permissionTier3.md-->