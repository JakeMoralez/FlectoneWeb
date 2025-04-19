---
authors:
  - TheFaser
---

# Сид

Сообщение от сервера при использовании `/seed`
![seed](/seed.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.seed`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#seed
<<< @/files/localizations/en_us.yml#seed
:::

### `format`

Сообщение, которое будет отправлено

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → seed`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#seed

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.seed`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#seed

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->