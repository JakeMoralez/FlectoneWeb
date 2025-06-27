---
authors:
  - TheFaser
---

# `/chatstyle`

Command to apply styling to messages  
![command chatstyle](/commandchatstyle.png)

::: danger DANGER

This command **should not** be given to regular players, as it may lead to server exploits/crashes. It should only be used with presets, such as through [`/chatsetting`](/docs/command/chatsetting)

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.chatstyle`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#chatstyle
<<< @/files/localizations/en_us.yml#chatstyle
:::

### `null-player`

Message shown when the specified player is not found

### `format`

Confirmation message after applying the style

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatstyle`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatstyle

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatstyle`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatstyle

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/other.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->