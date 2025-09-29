---
authors:
  - TheFaser
---

# Dialog

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `/dialog`
![dialog](/dialog.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.dialog`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#dialog
<<< @/files/localizations/en_us.yml#dialog
:::

### `clear`

Messages when using `/dialog clear player`, for example `/dialog clear TheFase`

### `show`

Messages when using `/dialog show player`, for example `/dialog show TheFaser minecraft:custom_options`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → dialog`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#dialog

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.dialog`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#dialog

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->