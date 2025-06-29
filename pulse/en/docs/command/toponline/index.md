---
authors:
  - TheFaser
---

# `/toponline`

Command to view the top players by playing time
![command toponline](/commandtoponline.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → command.toponline`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#toponline
<<< @/files/localizations/en_us.yml#toponline
:::

### `null-page`

Message when the specified page does not exist

#### `header`

Header part of the mute list message

#### `line`

Format for each mute in the list

#### `footer`

Footer part of the mute list message

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → toponline`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#toponline

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.toponline`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#toponline

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

