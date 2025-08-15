---
authors:
  - TheFaser
  - Stokmenn
---

# `/chatsetting`

Command for configuring chat
![command chatsetting](/commandchatsetting.gif)

::: info NOTE

You can open another player's settings using `/chatsetting TheFaser`.

If you want to create your own menu through another plugin, you can modify values using `/chatsetting TheFaser ADVANCEMENT`. This will toggle the display of advancements depending on the current state. You can check the state using the placeholder `%flectonepulse_advancement%`.

Some settings can be assigned values, for example, `/chatsetting TheFaser STREAM_PREFIX kek` will set the player's streamer prefix to `kek`.

| Setting              |
|----------------------|
| `ADVANCEMENT`        |
| `AFK`                |
| `AFK_SUFFIX`         |
| `AUTO`               |
| `BALL`               |
| `BAN`                |
| `BROADCAST`          |
| `CHAT`               |
| `COIN`               |
| `DEATH`              |
| `DICE`               |
| `DISCORD`            |
| `DO`                 |
| `GREETING`           |
| `JOIN`               |
| `KICK`               |
| `LOCALE`             |
| `MAIL`               |
| `ME`                 |
| `MUTE`               |
| `POLL`               |
| `QUIT`               |
| `REPLY`              |
| `ROCKPAPERSCISSORS`  |
| `SPY`                |
| `STREAM`             |
| `STREAM_PREFIX`      |
| `TELEGRAM`           |
| `TELL`               |
| `TICTACTOE`          |
| `TRANSLATETO`        |
| `TRY`                |
| `TWITCH`             |
| `WARN`               |
| `WORLD_PREFIX`       |
| `ANON`               |

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.chatsetting`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#chatsetting
<<< @/files/localizations/en_us.yml#chatsetting
:::

::: tip NOTE

The item name and description are displayed in a single line, with line breaks added using `<br>`

:::

### `no-permission`

Message if a specific permission is required to change the setting

### `disable`

::: details Disable messages
#### `you`

Message if the sender disabled the command in `/chatsetting`

#### `he`

Message if the recipient disabled the command in `/chatsetting`

#### `server`

Message if the server disabled the command for `/chatsetting`

:::

### `inventory`

Name for the main GUI

### `checkbox`

::: details Checkbox settings

#### `enabled-color`

Color when the setting is enabled. Replaces `<status_color>`

#### `enabled-hover`

Message if the setting is enabled

#### `disabled-color`

Color when the setting is disabled. Replaces `<status_color>`

#### `disabled-hover`

Message if the setting is disabled

#### `types`

List of setting types and their names

:::

### `menu`

Each additional menu has:

::: details Additional menu settings

#### `item`

Name and description of the item in the main menu

#### `inventory`

GUI name in the additional menu

#### `types`

List of items with their names and descriptions

:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatsetting

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->

### `modern`

::: warning WARNING

Only works for versions `1.21.6` and newer. Older versions will use the inventory system.

:::

::: details New Menu Settings

#### `enable`

Enables the use of dialogs instead of inventories

#### `button-width`

Width of each button

#### `columns`

Number of buttons per row

:::

### `checkbox`

::: details Checkbox settings

#### `disabled-material`

Material if the setting is disabled

#### `enabled-material`

Material if the setting is enabled

#### `types`

List of setting types and their inventory slots

:::

### `menu`

Additional menus

#### `material`

Item that redirects to additional menus

::: details Additional menu settings

#### `slot`

Slot position in the main inventory

#### `types`

List of setting types with their parameters

| Type           | Description                                                                                                                                                                                                                              |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `CHAT`         | The `name` field is the display name, and `material` is the item type that will appear in the inventory for this chat                                                                                                                    |
| `SEE` and `OUT` | The `name` field is the display name, and `material` is the item type that will appear in the inventory for this chat. Also includes `colors`, where the key is a number and the value is a color. Use `""` to keep the color unchanged  |

:::

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatsetting

<!--@include: @/parts/permission/permissionTier3.md-->

### `settings`

List of settings and their permissions

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->