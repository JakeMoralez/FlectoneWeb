---
authors:
  - TheFaser
---

# Комманда `/ball`

Комманда для того, чтобы задать вопрос Магическому Шару
![command ball](/commandball.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.ball`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ball
<<< @/files/localizations/en_us.yml#ball
:::

### `format`

Формат сообщения, которое будет отправлено

### `answers`

Список возможных ответов

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ball`
<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ball

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ball`
<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ball

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->