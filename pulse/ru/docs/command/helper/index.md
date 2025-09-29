---
authors:
  - TheFaser
---

# `/helper`

Комманда для того, чтобы попросить помощь
![command helper](/commandhelper.png)

От лица помощника
![command helper player](/commandhelperadmin.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.helper`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#helper
<<< @/files/localizations/en_us.yml#helper
:::

### `null_helper`

Сообщение, если на сервере нет людей, которые смогут помочь

### `global`

Сообщение для тех, кто должен помочь

### `player`

Сообщение для игрока

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → helper`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#helper

<!--@include: @/parts/enable.md-->

### `null_helper`

Будет ли проверяться, что на сервере нет людей, способные ответить на запрос

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.helper`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#helper

<!--@include: @/parts/permission/permissionTier3.md-->

### `see`

Право для просмотра запросов о помощи

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->