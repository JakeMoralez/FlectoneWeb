---
authors:
  - TheFaser
---

# Палочка отладки

<!--@include: @/parts/vanillaWarn.md#message-->

Сообщение от сервера при использовании палочки отладки
![debugstick](/debugstick.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.debugstick`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#debugstick
<<< @/files/localizations/en_us.yml#debugstick
:::

### `empty`

Сообщение, если у объекта нет свойств

### `select`

Сообщение при выборе конкретного свойства для изменения

### `update`

Сообщение при изменении свойства

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → debugstick`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#debugstick

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.debugstick`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#debugstick

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->