---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/warn`

Command to give a warning to a player
![command warn](/commandwarn.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.warn`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#warn
<<< @/files/localizations/en_us.yml#warn
:::

### `null-player`

Message when the player cannot be found

### `null-time`

Message when an invalid time is entered

### `reasons`

A list with keys and values, where the key is a word and the value is a specific reason

::: info You can write your own reasons, for example:
```yaml
random_kek: "Random reason"
```
So if you write `/warn player 1d random_kek`, the reason will be `Random reason`.

If no reason is specified, the `default` reason will be used.
:::

### `server`

Message for everyone

### `person`

Message for the player

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → warn`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#warn

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->

### `actions`

A list where the key is the `number` of warnings, and the value is the `action` to be performed

::: info For example, if you want to ban the player at `10` warnings:
You should write `10: ban <target> ohh`. This action will be performed if the player has `10` active warnings.
:::

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.warn`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#warn

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->