---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/ignorelist`

Command to view the list of players you have ignored
![command ignorelist](/commandignorelist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.ignorelist`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ignorelist
<<< @/files/localizations/en_us.yml#ignorelist
:::

### `empty`

Message displayed if the ignore list is empty

### `null-page`

Message displayed if the entered page does not exist

### `header`

The top part of the ignore list message

### `line`

Format for each ignored player in the list

### `footer`

The bottom part of the ignore list message

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ignorelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ignorelist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ignorelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ignorelist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->