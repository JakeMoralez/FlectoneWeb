---
authors:
  - TheFaser
---

# Очищение

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/clear`
![clear](/clear.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.clear`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#clear
<<< @/files/localizations/en_us.yml#clear
:::

### `single`

Сообщение, если команда применяется для конкретного игрока

### `multiple`

Сообщение, если команда применяется для многих игроков

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → clear`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#clear

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.clear`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#clear

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->