---
authors:
  - TheFaser
---

# Сон

<!--@include: @/parts/vanillaWarn.md#message-->

Сообщения при сне
![sleep](/sleep.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.sleep`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#sleep
<<< @/files/localizations/en_us.yml#sleep
:::

### `not_possible`

Сообщение, когда нельзя пропустить ночь

### `players_sleeping`

Сообщение при недостаточном количестве игроков для пропуска ночи

### `skipping_night`

Сообщение при пропуске ночи

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → sleep`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#sleep

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.sleep`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#sleep

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->