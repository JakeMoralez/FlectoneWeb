---
authors:
  - TheFaser
---

# Поиск

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/locate`
![locate](/locate.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.locate`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#locate
<<< @/files/localizations/en_us.yml#locate
:::


### `biome`

Сообщение при использовании `/locate biome`

### `poi`

Сообщения при использовании `/locate poi`

### `structure`

Сообщения при использовании `/locate structure`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → locate`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#locate

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.locate`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#locate

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->