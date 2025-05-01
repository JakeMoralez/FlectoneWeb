---
authors:
  - TheFaser
  - Stokmenn
---

# `/dice`

Command for rolling dice for luck
![command dice](/commanddice.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.dice`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#dice
<<< @/files/localizations/en_us.yml#dice
:::

### `symbols`

A list of indices (rolled number) and symbols (dice)

### `format`

Format of the message to be sent

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → dice`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#dice

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `min`

Minimum number of dice

### `max`

Maximum number of dice

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.dice`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#dice

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->