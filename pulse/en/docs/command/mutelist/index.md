---
authors:
  - TheFaser
  - Stokmenn
---

# `/mutelist`

Command to view the list of muted players
![command mutelist](/commandmutelist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → command.mutelist`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#mutelist
<<< @/files/localizations/en_us.yml#mutelist
:::

### `empty`

Message when the list of muted players is empty

### `null-page`

Message when the specified page does not exist

### `null-player`

Message when the specified player is not found

### `global`

::: details Messages for global mutes

#### `header`

Header part of the mute list message

#### `line`

Format for each mute in the list

#### `footer`

Footer part of the mute list message
:::

### `player`

::: details Messages for player-specific mutes

#### `header`

Header part of the mute list message

#### `line`

Format for each mute in the list

#### `footer`

Footer part of the mute list message
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → mutelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#mutelist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.mutelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mutelist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->