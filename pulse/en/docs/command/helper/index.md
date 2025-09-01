---
authors:
  - TheFaser
  - Stokmenn
---

# `/helper`

Command to request assistance
![command helper](/commandhelper.png)

From the assistant's perspective
![command helper player](/commandhelperadmin.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.helper`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#helper
<<< @/files/localizations/en_us.yml#helper
:::

### `null-helper`

Message displayed if no one on the server is available to help

### `global`

Message for those who are supposed to help

### `player`

Message for the player

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → helper`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#helper

<!--@include: @/parts/enable.md-->

### `null-helper`

Will it be checked that there are no people on server who can respond to request

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.helper`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#helper

<!--@include: @/parts/permission/permissionTier3.md-->

### `see`

Permission to view help requests

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->