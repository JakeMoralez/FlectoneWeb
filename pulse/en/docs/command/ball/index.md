---
authors:
  - TheFaser
  - Stokmenn
---

# `/ball`

Command to ask the Magic 8-Ball a question
![command ball](/commandball.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.ball`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ball
<<< @/files/localizations/en_us.yml#ball
:::

### `format`

Format of the message that will be sent

### `answers`

List of possible answers

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ball`
<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ball

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ball`
<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ball

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->