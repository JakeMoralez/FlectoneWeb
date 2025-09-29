---
authors:
  - TheFaser
---

# Опыт

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/experience`
![experience](/experience.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.experience`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#experience
<<< @/files/localizations/en_us.yml#experience
:::

### `add`

Сообщения при использовании `/experience add`, например `/experience add TheFaser 1 levels`

### `query`

Сообщения при использовании `/experience query`, например `/experience query TheFaser levels`

### `set`

Сообщения при использовании `/experience set`, например `/experience set TheFaser 1 levels`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → experience`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#experience

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.experience`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#experience

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->