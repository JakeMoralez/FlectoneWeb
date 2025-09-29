---
authors:
  - TheFaser
---

# Время

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/time`
![time](/time.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.time`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#time
<<< @/files/localizations/en_us.yml#time
:::

### `query`

Сообщение при использовании `/time query`, например `/time query day`

### `set`

Сообщение при использовании `/time set`, например `/time set 1000`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → time`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#time

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.time`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#time

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->