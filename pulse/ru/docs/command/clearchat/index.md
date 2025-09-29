---
authors:
  - TheFaser
---

# `/clearchat`

Комманда для очищения чата
![command clearchat](/commandclearchat.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.clearchat`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#clearchat
<<< @/files/localizations/en_us.yml#clearchat
:::

### `null_player`

Сообщение, если введённый игрок не найден

### `format`

Сообщение после очищения чата

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → clearchat`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#clearchat

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.clearchat`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#clearchat

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/other.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->