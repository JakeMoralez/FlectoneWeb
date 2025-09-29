---
authors:
  - TheFaser
  - Stokmenn
---

# `/mute`

Command to mute a player
![command mute](/commandmute.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → command.mute`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#mute
<<< @/files/localizations/en_us.yml#mute
:::

### `null_player`

Message when the specified player is not found

### `null_time`

Message when the time provided is invalid

### `reasons`

A list with keys and values, where the key is the word and the value is the specific reason

::: info YOU CAN ADD YOUR OWN REASONS
```yaml
random_kek: "Random reason"
```
Then, if you type `/mute player 1d random_kek`, the reason will be `Random reason`.

If no reason is specified, `default` will be used.
:::

### `server`

Message to everyone

### `person`

Message to the muted player

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → mute`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#mute

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.mute`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mute

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->