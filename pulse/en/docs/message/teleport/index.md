---
authors:
  - TheFaser
---

# Teleport

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `/teleport`
![teleport](/teleport.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.teleport`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#teleport
<<< @/files/localizations/en_us.yml#teleport
:::

### `entity`

Messages when teleporting mobs

### `location`

Messages when teleporting to coordinates

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → teleport`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#teleport

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.teleport`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#teleport

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->