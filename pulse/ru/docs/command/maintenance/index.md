---
authors:
  - TheFaser
---

# `/maintenance`

Комманда для включения технических работ
![command maintenance](/commandmaintenance.png)
![command maintenance server](/commandmaintenanceserver.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.maintenance`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#maintenance
<<< @/files/localizations/en_us.yml#maintenance
:::

### `server_description`

Сообщения при просмотре сервера, если включены технические работы

### `server_version`

Название версии сервера, если включены технические работы

### `kick`

Причина исключения с сервера при включении технических работ

### `format_true`

Сообщение при включении технических работ

### `format_false`

Сообщение при отключении технических работ

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#maintenance

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#maintenance

<!--@include: @/parts/permission/permissionTier3.md-->

### `join`

Право для подключения к серверу во время технических работ

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->