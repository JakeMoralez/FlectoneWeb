---
authors:
  - TheFaser
---

# Сложность

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/difficulty`
![difficulty](/difficulty.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.difficulty`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#difficulty
<<< @/files/localizations/en_us.yml#difficulty
:::

### `query`

Сообщения при использовании `/difficulty`

### `format`

Сообщения при использовании `/difficulty ...`, например `/difficulty hard`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → difficulty`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#difficulty

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.difficulty`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#difficulty

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->