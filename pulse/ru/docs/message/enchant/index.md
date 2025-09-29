---
authors:
  - TheFaser
---

# Зачарование

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/enchant`
![enchant](/enchant.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.enchant`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#enchant
<<< @/files/localizations/en_us.yml#enchant
:::

### `single`

Сообщение, если команда применяется для конкретного игрока

### `multiple`

Сообщение, если команда применяется для многих сущностей

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → enchant`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#enchant

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.enchant`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#enchant

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->