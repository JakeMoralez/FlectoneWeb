---
authors:
  - TheFaser
---

# Комманда `/ping`

Комманда для того, чтобы узнать информацию об задержке игрока
![command ping](/commandping.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.ping`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ping
<<< @/files/localizations/en_us.yml#ping
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `format`

Формат сообщения, которое будет отправлено

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ping`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ping

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ping`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ping

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

