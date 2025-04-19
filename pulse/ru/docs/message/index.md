---
authors:
  - TheFaser
---

# Сообщения

Настройка сообщений `FlectonePulse` (из-за чего появляются и как)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#message
<<< @/files/localizations/en_us.yml#message
:::

### `cooldown`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`

Сообщения времени

- #### `format`

Форматирование времени ([Apache DurationFormatUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html))

- #### `permanent`

Форматирование времени, если оно `-1` т.е. навсегда

- #### `zero`

Форматирование времени, если оно равно нулю

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#message

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#message

<!--@include: @/parts/permission/permissionTier3.md-->