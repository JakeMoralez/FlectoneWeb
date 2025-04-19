---
authors:
  - TheFaser
---

# Отключение

Сообщение от сервера, когда игрок отключился
![quit](/quit.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.quit`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#quit
<<< @/files/localizations/en_us.yml#quit
:::

### `format`

Сообщение при отключении с сервера

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → quit`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#quit

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.quit`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#quit

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->