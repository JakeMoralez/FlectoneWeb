---
authors:
  - TheFaser
  - Stokmenn
---

# Command `/chatsetting`

Command for configuring chat
![command chatsetting](/commandchatsetting.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.chatsetting`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#chatsetting
<<< @/files/localizations/en_us.yml#chatsetting
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

### `header`

Title for the GUI

### `items`

List of settings and their messages, where:
- The first line is the item name when enabled
- The remaining lines describe the item when enabled
- The second line is the item name when disabled
- The remaining lines describe the item when disabled

::: info For example, let's take `REPLY`
```yaml
# enabled
- - "<fcolor:2>Command /reply" # item name
  - "<color:#98FB98>Displayed" # description
# disabled
- - "<fcolor:2>Command /reply" # item name
  - "<color:#ff7171>Hidden" # description
```
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatsetting

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->

### `items`

List of settings that can be changed

::: info Example setting for `TELL`
#### `slot`

Inventory slot where the setting will be

#### `materials`

List of materials used to display the setting state

`LIME_CONCRETE` is the first material, shown when the setting is enabled <br>
`RED_CONCRETE` is the second material, shown when the setting is disabled

:::

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatsetting

<!--@include: @/parts/permission/permissionTier3.md-->

### `items`

List of settings and their permissions

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->