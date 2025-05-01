---
authors:
  - TheFaser
---

# `/coin`

Комманда для подбрасывания монетки
![command coin](/commandcoin.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.coin`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#coin
<<< @/files/localizations/en_us.yml#coin
:::

### `head`

Название стороны монетки

### `tail`

Название другой стороны монетки

### `format`

Формат сообщения, которое будет отправлено

### `format-draw`

Сообщение, если монетка упала на ребро

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → coin`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#coin

<!--@include: @/parts/enable.md-->

### `draw`

Включает шанс (`1%`) выпадения монетки на ребро

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.coin`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#coin

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->