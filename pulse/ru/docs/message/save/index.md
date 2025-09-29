---
authors:
  - TheFaser
---

# Сохранение

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/save`
![save](/save.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.save`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#save
<<< @/files/localizations/en_us.yml#save
:::

### `disabled`

Сообщение при отключении сохранения

### `enabled`

Сообщение при включении сохранения

### `saving`

Сообщение при начале сохранении

### `success`

Сообщение при успешном сохранении

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → save`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#save

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.save`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#save

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->