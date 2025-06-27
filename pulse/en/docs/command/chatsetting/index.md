---
authors:
  - TheFaser
  - Stokmenn
---

# `/chatsetting`

Command for configuring chat
![command chatsetting](/commandchatsetting.gif)

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

#### `format-enable`

Message if the setting is enabled

#### `format-disable`

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

| Type    | Description                                                                                                                                                                                       |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `CHAT`  | The `name` field is the display name, and `material` is the item type that will appear in the inventory for this chat                                                                             |
| `COLOR` | The `name` field is the display name, and `material` is the item type that will appear in the inventory for this chat. Also includes `colors`, where the key is a number and the value is a color |
| `STYLE` | The `name` field is the display name, and `material` is the item type that will appear in the inventory for this chat. Also includes `value` – the style setting value                            |  

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