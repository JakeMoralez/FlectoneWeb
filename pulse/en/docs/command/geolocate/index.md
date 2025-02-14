# Command `/geolocate`

Command for tracking IP addresses and obtaining player information
![command geolocate](/commandgeolocate.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.geolocate`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#geolocate
<<< @/files/localizations/en_us.yml#geolocate
:::

### `null-player`

Message displayed if the entered player is not found

### `null-or-error`

Message displayed if an error occurs when retrieving information

### `format`

Message format that will be sent

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → geolocate`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#geolocate

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.geolocate`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#geolocate

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->