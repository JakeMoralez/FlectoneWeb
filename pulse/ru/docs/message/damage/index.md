---
authors:
  - TheFaser
---

# Дамаг

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/damage`
![damage](/damage.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.damage`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#damage
<<< @/files/localizations/en_us.yml#damage
:::

### `format`

Сообщение при использовании `/damage`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → damage`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#damage

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.damage`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#damage

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->