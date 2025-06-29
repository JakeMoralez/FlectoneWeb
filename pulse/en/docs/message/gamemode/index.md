---
authors:
  - TheFaser
  - Stokmenn
---

# Gamemode

Message from the server when a player changes their game mode  
![gamemode](/gamemode.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → message.gamemode`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#gamemode
<<< @/files/localizations/en_us.yml#gamemode
:::

### `format-self`

Message when changing your own game mode or the recipient’s game mode has been changed

### `format-multiple`

Message when changing the game mode of another player

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → gamemode`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#gamemode

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.gamemode`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#gamemode

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->
