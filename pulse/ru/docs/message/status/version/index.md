---
authors:
  - TheFaser
---

# Версия

Модуль отвечающий за версию сервера
![version](/version.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.status.version`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#version
<<< @/files/localizations/en_us.yml#version
:::

### `name`

Название версии сервера

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → status.version`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#version

<!--@include: @/parts/enable.md-->

### `protocol`

[Протокол](https://minecraft.wiki/w/Protocol_version) сервера

::: info ИНФОРМАЦИЯ

Число может быть любым, но `-1` указывает на текущий протокол

:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.status.version`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#version

<!--@include: @/parts/permission/permissionTier3.md-->