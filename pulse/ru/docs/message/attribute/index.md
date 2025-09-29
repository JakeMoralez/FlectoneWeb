---
authors:
  - TheFaser
---

# Аттрибут

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/attribute`
![attribute](/attribute.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.attribute`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#attribute
<<< @/files/localizations/en_us.yml#attribute
:::

### `base_value`

Сообщения при использовании `/attribute player attribute_name base`, например `/attribute TheFaser minecraft:armor base get`

### `modifier`

Сообщения при использовании `/attribute player attribute_name modifier`, например `/attribute TheFaser minecraft:armor modifier add test 1 add_value`

### `value_get`

Сообщение при использовании `/attribute player attribute_name get`, например `/attribute TheFaser minecraft:armor get`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → attribute`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#attribute

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.attribute`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#attribute

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->