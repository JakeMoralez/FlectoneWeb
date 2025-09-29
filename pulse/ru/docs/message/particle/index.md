---
authors:
  - TheFaser
---

# Частицы

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/particle`
![particle](/particle.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.particle`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#particle
<<< @/files/localizations/en_us.yml#particle
:::

### `format`

Сообщение при использовании `/particle`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → particle`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#particle

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.particle`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#particle

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->