---
authors:
  - TheFaser
  - Stokmenn
---

# `/mail`

Command to send a message to an offline player
![command mail](/commandmail.png)

When the player logs in, they will see the message
![command mail player](/commandmailplayer.png)

If the player is already on the server and the [Tell](/docs/command/tell/) module is enabled, it will be used
![command tell](/commandtell.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.mail`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#mail
<<< @/files/localizations/en_us.yml#mail
:::

### `null-player`

Message displayed if the entered player is not found

### `sender`

Message displayed to the sender

### `receiver`

Message displayed to the receiver

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → mail`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#mail

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.mail`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mail

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->