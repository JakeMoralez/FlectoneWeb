---
authors:
  - TheFaser
---

# Диалог

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/dialog`
![dialog](/dialog.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.dialog`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#dialog
<<< @/files/localizations/en_us.yml#dialog
:::

### `clear`

Сообщения при использовании `/dialog clear player`, например `/dialog clear TheFase`

### `show`

Сообщения при использовании `/dialog show player`, например `/dialog show TheFaser minecraft:custom_options`

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