# Command `/spy`

Command to track player actions
![command spy](/commandspy.gif)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.spy`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spy
<<< @/files/localizations/en_us.yml#spy
:::

### `format-true`

Message when spying is enabled

### `format-false`

Message when spying is disabled

### `format-log`

Message format that will be sent during the tracking of an action

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → spy`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#spy

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->

### `categories`

List of categories with actions that will be tracked

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.spy`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spy

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->