---
authors:
  - TheFaser
  - Stokmenn
---

# `/poll`

Command for creating polls
![command pollgui](/commandpollgui.gif)

This can also be done via a command in chat
![command poll](/commandpoll.png)

::: info INFORMATION

The interval is specified to resend message about an existing poll to chat

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → command.poll`

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

### `modern`

::: details Dialog system for creating a poll

#### `header`

Dialog name

#### `input-name`

Name for "name" field

#### `input-initial`

Default text for "name" field

#### `multiple-name`

Name for "allow multiple answers" toggle field

#### `end-time-name`

Name for duration field

#### `repeat-time-name`

Name for interval field

#### `new-answer-button-name`

Name for button that creates a new answer

#### `remove-answer-button-name`

Name for button that removes the last answer

#### `input-answer-name`

Name for new answer field

#### `input-answers-initial`

Default text for answer field

#### `create-button-name`

Name for button that creates poll

:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → poll`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#poll

<!--@include: @/parts/enable.md-->

### `enable-gui`

::: warning WARNING

Only works for versions `1.21.6` and newer. Command will not be registered in older versions

:::

Adds a new command `/pollgui` (depends on command name itself, i.e., `/name` + `gui`)

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