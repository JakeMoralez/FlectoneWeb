---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/tictactoe`

Command to challenge someone to play Tic-Tac-Toe
![command tictactoe](/commandtictactoe.png)

By default, the request is for [Chinese Tic-Tac-Toe](#правила-китайских-крестиков-ноликов), but to play regular Tic-Tac-Toe, use `/tictactoe nickname false`
![command tictactoe default](/commandtictactoedefault.png)

### Rules of Chinese Tic-Tac-Toe

1. Each player can place only `3` of their marks.
2. If the game is not finished, the first mark placed by the player is removed and replaced with a new one.
3. This continues in a cycle until the game ends.

This makes the game more challenging and strategic!

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.tictactoe`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#tictactoe
<<< @/files/localizations/en_us.yml#tictactoe
:::

### `null-player`

Message if the entered player is not found

### `myself`

Message if the entered player tries to play with themselves

### `wrong-game`

Message if the specified game does not exist

### `wrong-move`

Message if the move is not possible

### `wrong-by-player`

Message if one of the players has left the game

### `symbol`
::: details Messages for symbols
#### `empty`
Format message for an empty cell

#### `first`
Format message for the first player's cell

#### `first-remove`
Format message for removing the first player's cell

#### `first-win`
Format message for the winning cell of the first player

#### `second`
Format message for the second player's cell

#### `second-remove`
Format message for removing the second player's cell

#### `second-win`
Format message for the winning cell of the second player
:::

### `field`

Format message for the game field

### `current-move`

Format message for the current move information

### `last-move`

Format message for the last move information

### `format-move`

Format message for announcing the move

### `format-win`

Message upon winning

### `format-draw`

Message for a draw

### `sender`

Message for the sender when sending a request

### `format-create`

Message for the recipient when receiving a request

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → tictactoe`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#tictactoe

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.tictactoe`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#tictactoe

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->