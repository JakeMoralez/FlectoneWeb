---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/online`

Command to check player online status
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

Message when the specified player is not found

### `format-current`

Message when the specified player is currently online

### `format-first`

Format of the message for `/online first` command

### `format-last`

Format of the message for `/online last` command

### `format-total`

Format of the message for `/online total` command

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