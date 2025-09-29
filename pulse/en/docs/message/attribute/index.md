---
authors:
  - TheFaser
---

# Attribute

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `/attribute`
![attribute](/attribute.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.attribute`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#attribute
<<< @/files/localizations/en_us.yml#attribute
:::

### `base_value`

Messages when using `/attribute player attribute_name base`, for example `/attribute TheFaser minecraft:armor base get`

### `modifier`

Messages when using `/attribute player attribute_name modifier`, for example `/attribute TheFaser minecraft:armor modifier add test 1 add_value`

### `value_get`

Message when using `/attribute player attribute_name get`, for example `/attribute TheFaser minecraft:armor get`

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