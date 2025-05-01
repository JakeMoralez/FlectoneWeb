---
authors:
  - TheFaser
  - Stokmenn
---

# `/tell`

Command for sending a private message to a player
![command tell](/commandtell.png)

Can be used for notes if you type your own username
![command tell myself](/commandtellmyself.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.tell`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#tell
<<< @/files/localizations/en_us.yml#tell
:::

### `null-player`

Message if the entered player is not found

### `sender`

Message for the sender

### `receiver`

Message for the recipient

### `myself`

Message for the sender if they are also the recipient (i.e., for themselves)

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → tell`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#tell

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.tell`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#tell

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->