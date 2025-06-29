---
authors:
  - TheFaser
  - Stokmenn
---

# `/unban`

Command to unban a player
![command unban](/commandunban.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → command.unban`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#unban
<<< @/files/localizations/en_us.yml#unban
:::

### `null-player`

Message when the player cannot be found

### `not-banned`

Message when the player is not banned

### `format`

Message when the player is unbanned

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → unban`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#unban

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.unban`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#unban

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->