---
authors:
  - TheFaser
  - Stokmenn
---

# Version

Module responsible for the server version  
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

Server version name

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → status.version`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#version

<!--@include: @/parts/enable.md-->

### `protocol`

[Protocol](https://minecraft.wiki/w/Protocol_version) version of the server

::: info INFORMATION

The number can be any, but `-1` refers to the current protocol

:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.status.version`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#version

<!--@include: @/parts/permission/permissionTier3.md-->
