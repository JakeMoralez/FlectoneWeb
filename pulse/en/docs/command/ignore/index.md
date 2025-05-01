---
authors:
  - TheFaser
  - Stokmenn
---

# `/ignore`

Command to ignore all messages from a player
![command ignore](/commandignore.png)

The ignore can be removed by using the command again
![command unignore](/commandunignore.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.ignore`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ignore
<<< @/files/localizations/en_us.yml#ignore
:::

### `null-player`

Message displayed if the entered player is not found

### `myself`

Message displayed if the player tries to ignore themselves

### `he`

Message displayed if the recipient is ignoring the sender

### `you`

Message displayed if the sender is ignoring the recipient

### `format-true`

Message displayed when the player successfully ignores another player

### `format-false`

Message displayed when the player removes the ignore

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ignore`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ignore

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ignore`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ignore

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->