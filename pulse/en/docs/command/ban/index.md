---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/ban`

Command to ban a player
![command ban](/commandban.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.ban`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ban
<<< @/files/localizations/en_us.yml#ban
:::

### `null-player`

Message if the entered player is not found

### `null-time`

Message if an invalid time is entered

### `reasons`

A list with keys and values, where the key is a word and the value is a specific reason

::: info You can add your own reasons, for example:
```yaml
random_kek: "Random reason"
```
Then if I type `/ban player 1d random_kek`, the reason will be `Random reason`

If no reason is specified, `default` will be used
:::

### `server`

Message for everyone

### `person`

Message for the player

### `connection-attempt`

Message if a banned player tries to connect

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ban`
<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ban

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->

### `show-connection-attempts`

If enabled, it will show a message when a banned player tries to connect
![command ban connect](/commandbanconnect.png)

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ban`
<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ban

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->