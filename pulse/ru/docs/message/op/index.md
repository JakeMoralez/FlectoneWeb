---
authors:
  - TheFaser
---

# Оп

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/op`
![op](/op.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.op`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#op
<<< @/files/localizations/en_us.yml#op
:::

### `format`

Сообщение, которое будет отправлено

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → op`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#op

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.op`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#op

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->