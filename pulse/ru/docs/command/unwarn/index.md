---
authors:
  - TheFaser
---

# `/unwarn`

Комманда для того, чтобы снять предупреждение с игрока
![command unwarn](/commandunwarn.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.unwarn`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#unwarn
<<< @/files/localizations/en_us.yml#unwarn
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `not-warned`

Сообщение, если введённый игрок не имеет предупреждения

### `format`

Сообщение при снятии предупреждения

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → unwarn`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#unwarn

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.unwarn`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#unwarn

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

