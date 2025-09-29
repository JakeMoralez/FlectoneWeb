---
authors:
  - TheFaser
---

# `/spy`

Комманда для отслеживания за действиями игроков
![command spy](/commandspy.gif)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.spy`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spy
<<< @/files/localizations/en_us.yml#spy
:::

### `format_true`

Сообщение при включении слежки

### `format_false`

Сообщение при выключении слежки

### `format_log`

Формат сообщения, которое будет отправлено при слежке за действием

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → spy`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#spy

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->

### `categories`

Список категорий с действиями, за которыми происходит слежка

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.spy`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spy

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

