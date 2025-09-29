---
authors:
  - TheFaser
---

# Клонирование

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/clone`
![clone](/clone.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.clone`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#clone
<<< @/files/localizations/en_us.yml#clone
:::

### `format`

Сообщение при использовании `/clone`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → clone`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#clone

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.clone`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#clone

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->