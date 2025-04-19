---
authors:
  - TheFaser
---

# Комманда `/online`

Комманда для того, чтобы узнать информацию об онлайне игрока
![command online](/commandonline.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.online`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#online
<<< @/files/localizations/en_us.yml#online
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `format-current`

Сообщение, если введённый игрок на сервере

### `format-first`

Формат сообщения `/online first`, которое будет отправлено

### `format-last`

Формат сообщения `/online last`, которое будет отправлено

### `format-total`

Формат сообщения `/online total`, которое будет отправлено

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → online`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#online

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.online`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#online

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

