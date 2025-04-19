---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/stream`

Command to notify about the start of a stream
![command stream](/commandstream.png)

If the player has permission for the command, they will receive a prefix when enabling/disabling the stream
![command stream prefix](/commandstreamprefix.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.stream`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#stream
<<< @/files/localizations/en_us.yml#stream
:::

### `already`

Message if a player who is already streaming tries to start another stream

### `not`

Message if a player who is not streaming tries to end the stream

### `prefix-true`

Prefix for a player who is currently streaming

### `prefix-false`

Prefix for a player who has permission to stream but is not streaming at the moment

### `url-tag`

Format for each link in the notification

### `format-start`

Notification when a stream starts

### `format-end`

Message when a player ends their stream

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → stream`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#stream

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.stream`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#stream

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->