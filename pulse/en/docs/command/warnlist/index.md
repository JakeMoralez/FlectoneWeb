---
authors:
  - TheFaser
  - Stokmenn
---

# `/warnlist`

Command to view the list of warnings
![command warnlist](/commandwarnlist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.warnlist`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#warnlist
<<< @/files/localizations/en_us.yml#warnlist
:::

### `empty`

Message when the list of player warnings is empty

### `null-page`

Message when the entered page does not exist

### `null-player`

Message when the entered player cannot be found

### `global`

::: details Global warning messages

#### `header`

Header part of the warning list message

#### `line`

Format for each warning in the list

#### `footer`

Footer part of the warning list message
:::

### `player`

::: details Player-specific warning messages

#### `header`

Header part of the warning list message for the player

#### `line`

Format for each warning in the player's list

#### `footer`

Footer part of the warning list message for the player
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → warnlist`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#warnlist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.warnlist`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#warnlist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->