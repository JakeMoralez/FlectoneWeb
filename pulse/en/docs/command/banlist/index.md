---
authors:
  - TheFaser
  - Stokmenn
---

# `/banlist`

Command to view the list of bans
![command banlist](/commandbanlist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.banlist`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#banlist
<<< @/files/localizations/en_us.yml#banlist
:::

### `empty`

Message if the list of banned players is empty

### `null_page`

Message if the entered page does not exist

### `null_player`

Message if the entered player is not found

### `global`

::: details Messages for global bans

#### `header`

Top part of the list message

#### `line`

Format of each ban in the list

#### `footer`

Bottom part of the list message
:::

### `player`

::: details Messages for player bans

#### `header`

Top part of the list message

#### `line`

Format of each ban in the list

#### `footer`

Bottom part of the list message
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → banlist`
<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#banlist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.banlist`
<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#banlist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->