---
authors:
  - TheFaser
  - Stokmenn
---

# `/try`

Command to attempt an action with a random chance of success
![command try](/commandtry.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → command.try`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#try
<<< @/files/localizations/en_us.yml#try
:::

### `format-true`

Format for the message that will be sent if the action succeeds

### `format-false`

Format for the message that will be sent if the action fails

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → try`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#try

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `min`

Minimum chance for the action to succeed

### `max`

Maximum chance for the action to succeed

### `good`

Chance threshold above which the action is considered successful

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.try`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#try

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->