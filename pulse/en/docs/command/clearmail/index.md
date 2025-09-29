---
authors:
  - TheFaser
  - Stokmenn
---

# `/clearmail`

Command to delete sent [mails](/docs/command/mail/)
![command clearmail](/commandclearmail.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.clearmail`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#clearmail
<<< @/files/localizations/en_us.yml#clearmail
:::

### `null_mail`

Message if the entered mail is not found

### `format`

Format of the message that will be sent

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → clearmail`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#clearmail

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.clearmail`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#clearmail

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->