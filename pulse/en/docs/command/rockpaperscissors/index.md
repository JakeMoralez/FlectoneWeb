---
authors:
  - TheFaser
  - Stokmenn
---

# `/rockpaperscissors`

Command to offer to play rock-paper-scissors
![command rockpaperscissors](/commandrockpaperscissors.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → command.rockpaperscissors`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#rockpaperscissors
<<< @/files/localizations/en_us.yml#rockpaperscissors
:::

### `null_player`

Message when the entered player is not found

### `null_game`

Message when the game does not exist

### `wrong_move`

Message when the move is impossible

### `already`

Message when the player has already made a move

### `myself`

Message when the player decides to play with themselves

### `sender`

Message for the sender

### `receiver`

Message for the receiver

### `format_move`

Message during a move

### `format_win`

Message when the player wins

### `forma_draw`

Message for a draw

### `strategies`

List of strategies and their names

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → rockpaperscissors`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#rockpaperscissors

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->

### `strategy`

Strategies where `key` is the winning item and `value` is the defeated item

::: info For example, if you want `scissors` to defeat `paper`, you should write:
```yaml
scissors:
  - "paper"
```

Multiple values can be added, like:
```yaml
scissors:
  - "paper"
  - "newitem"
```

You can define your own keys and values:
```yaml
customvalue:
  - "customobject"
```
:::

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.rockpaperscissors`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#rockpaperscissors

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->