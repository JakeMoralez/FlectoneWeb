---
authors:
  - TheFaser
---

# Выдача

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/give`
![give](/give.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.give`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#give
<<< @/files/localizations/en_us.yml#give
:::


### `single`

Сообщение при использовании `/give` одному игроку

### `multiple`

Сообщения при использовании `/give` нескольким игрокам

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → give`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#give

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.give`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#give

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->