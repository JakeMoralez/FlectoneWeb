---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/unmute`

Command to unmute a player
![command unmute](/commandunmute.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.unmute`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#unmute
<<< @/files/localizations/en_us.yml#unmute
:::

### `null-player`

Message when the player cannot be found

### `not-muted`

Message when the player is not muted

### `format`

Message when the player is unmuted

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → unmute`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#unmute

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.unmute`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#unmute

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->