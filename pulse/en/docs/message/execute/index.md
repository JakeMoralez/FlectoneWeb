---
authors:
  - TheFaser
---

# Execute

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `/execute`
![execute](/execute.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.execute`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#execute
<<< @/files/localizations/en_us.yml#execute
:::

### `pass`

Messages when using `/execute` with one test, example `/execute if block ~ ~-1 ~ minecraft:grass_block`

### `pass_count`

Messages when using `/execute` with multiple tests

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → execute`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#execute

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.execute`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#execute

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->