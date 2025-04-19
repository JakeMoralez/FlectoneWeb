---
authors:
  - TheFaser
---

# Сайдбар

Сообщения в правой части экрана
![scoreboard](/scoreboard.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.sidebar`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#sidebar
<<< @/files/localizations/en_us.yml#sidebar
:::

### `values`

Список сообщений, где `- -` разделяет разные форматы

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → sidebar`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#sidebar

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/random.md-->
<!--@include: @/parts/ticker.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.sidebar`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#sidebar

<!--@include: @/parts/permission/permissionTier3.md-->