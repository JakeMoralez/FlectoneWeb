---
authors:
  - TheFaser
---

# Приветствие

Сообщение от сервера лично игроку, когда он подключился
![greeting](/greeting.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.greeting`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#greeting
<<< @/files/localizations/en_us.yml#greeting
:::

### `format`

Личное сообщение игроку при подключении

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → greeting`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#greeting

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.greeting`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#greeting

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->