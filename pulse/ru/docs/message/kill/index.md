---
authors:
  - TheFaser
---

# Убийство

Сообщение от сервера при использовании `/kill`
![kill](/kill.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.kill`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#kill
<<< @/files/localizations/en_us.yml#kill
:::

### `single`

Сообщение, если команда применяется для конкретной сущности

### `multiple`

Сообщение, если команда применяется для многих сущности

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → kill`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#kill

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.kill`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#kill

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->