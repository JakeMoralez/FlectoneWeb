---
authors:
  - TheFaser
---

# Телепорт

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/teleport`
![teleport](/teleport.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.teleport`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#teleport
<<< @/files/localizations/en_us.yml#teleport
:::

### `entity`

Сообщения при телепортации мобов

### `location`

Сообщения при телепортации по координатам

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