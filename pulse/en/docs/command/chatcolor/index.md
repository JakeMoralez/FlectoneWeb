---
authors:
  - TheFaser
  - Stokmenn
---

# `/chatcolor`

Command for changing [colors](/docs/message/format/fcolor/)
![command chatcolor](/commandchatcolor.png)

<!--@include: @/parts/fcolor.md-->

::: info INFORMATION

You can skip colors using `null` to leave them unchanged. For example, `/chatcolor see null null <red> <red>` will only replace `<fcolor:3>` and `<fcolor:4>`, leaving the first two as they are

If you have the `other` permission, you can change other players' colors by adding their nickname at the end of the command, for example `/chatcolor see null <red> <red> <blue> TheFaser`. You must specify all colors and only then the player's nickname, but you can skip colors as mentioned above

:::

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

### `null-type`

Message if the type is entered incorrectly

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
<!--@include: @/parts/permission/other.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

### `colors`

List of permissions for changing specific types of colors: `SEE` or `OUT`