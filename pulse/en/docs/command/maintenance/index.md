---
authors:
  - TheFaser
  - Stokmenn
---

# `/maintenance`

Command to enable maintenance mode
![command maintenance](/commandmaintenance.png)
![command maintenance server](/commandmaintenanceserver.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.maintenance`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#maintenance
<<< @/files/localizations/en_us.yml#maintenance
:::

### `server_description`

Message when viewing the server while maintenance is enabled

### `server_version`

Server version name when maintenance is enabled

### `kick`

Reason for kicking players when maintenance mode is enabled

### `format_true`

Message when enabling maintenance mode

### `format_false`

Message when disabling maintenance mode

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#maintenance

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#maintenance

<!--@include: @/parts/permission/permissionTier3.md-->

### `join`

Permission to join the server during maintenance

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->