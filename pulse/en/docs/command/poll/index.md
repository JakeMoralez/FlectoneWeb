---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/poll`

Command for creating and managing polls
![command poll](/commandpoll.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.poll`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#poll
<<< @/files/localizations/en_us.yml#poll
:::

### `null-poll`

Message when the poll is not found

### `expired`

Message when the player attempts to vote in an expired poll

### `already`

Message when the player attempts to vote again in the same poll

### `vote-true`

Message when the player has voted for a particular option

### `vote-false`

Message when the player removes their vote

### `format`
The format of the message that will be sent

### `answer-template`
Template for each answer

### `status`

::: details Headers for each voting status

#### `start`
Header when the voting starts

#### `run`
Header when the voting is reposted

#### `end`
Header when the voting ends
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → poll`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#poll

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `last-id`

Last poll ID created

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.poll`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#poll

<!--@include: @/parts/permission/permissionTier3.md-->

### `create`

Permission for creating polls

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->