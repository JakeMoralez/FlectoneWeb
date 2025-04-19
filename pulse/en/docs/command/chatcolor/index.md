---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/chatcolor`

Command for changing [colors](/docs/message/format/color/)
![command chatcolor](/commandchatcolor.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.chatcolor`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#chatcolor
<<< @/files/localizations/en_us.yml#chatcolor
:::

### `null-player`

Message if the entered player is not found

### `null-color`

Message if the colors are entered incorrectly

### `format`

Format of the message that will be sent

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatcolor

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatcolor

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->