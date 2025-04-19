---
authors:
  - TheFaser
---

# Верхнее

Модуль, отвечающий за текст в верхней части ТАБа
![header](/header.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.tab.header`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#header
<<< @/files/localizations/en_us.yml#header
:::

### `lists`

Список сообщений, где `- -` разделяет разные форматы

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → tab.header`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#header

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/random.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/ticker.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.tab.header`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#header

<!--@include: @/parts/permission/permissionTier3.md-->