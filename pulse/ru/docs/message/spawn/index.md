---
authors:
  - TheFaser
---

# Спавн

Сообщения связанные с точкой возрождения игрока
![spawnpoint](/spawnpoint.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.spawn`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spawn
<<< @/files/localizations/en_us.yml#spawn
:::

### `not-valid`

Сообщение при возрождении, когда прошлая точка возрождения не доступна

### `set`

Сообщение при установке точке возрождения с помощью блока

### `single`

Сообщение, если команда `/spawnpoint` применяется для конкретного игрока

### `multiple`

Сообщение, если команда `/spawnpoint` применяется для многих игроков

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → spawn`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#spawn

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.spawn`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spawn

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->