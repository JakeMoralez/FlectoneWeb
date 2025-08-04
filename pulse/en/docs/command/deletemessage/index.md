---
authors:
  - TheFaser
---

# `/deletemessage`

Command to delete a chat message, automatically used when clicking the delete icon  
![command deletemessage](/commanddeletemessage.png)

::: warning WARNING

This command will be useless if the main [`Delete`](/docs/message/format/moderation/delete/) module is disabled

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.deletemessage`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#deletemessage
<<< @/files/localizations/en_us.yml#deletemessage
:::

### `null-message`

Message displayed when attempting to delete a non-existent message

### `format`

Format of the message that will be sent

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → deletemessage`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#deletemessage

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.deletemessage`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#deletemessage

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->