# Command `/coin`

Command for flipping a coin
![command coin](/commandcoin.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.coin`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#coin
<<< @/files/localizations/en_us.yml#coin
:::

### `head`

Name of one side of the coin

### `tail`

Name of the other side of the coin

### `format`

Format of the message to be sent

### `format-draw`

Message if the coin lands on its edge

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → coin`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#coin

<!--@include: @/parts/enable.md-->

### `draw`

Enables the chance (`1%`) for the coin to land on its edge

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.coin`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#coin

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->