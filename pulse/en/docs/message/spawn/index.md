# Spawn

Messages related to the player's respawn point
![spawnpoint](/spawnpoint.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.spawn`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spawn
<<< @/files/localizations/en_us.yml#spawn
:::

### `not-valid`

Message displayed upon respawn when the previous respawn point is unavailable

### `set`

Message displayed when setting a respawn point using a block

### `single`

Message displayed if the `/spawnpoint` command is applied to a specific player

### `multiple`

Message displayed if the `/spawnpoint` command is applied to multiple players

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → spawn`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#spawn

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.spawn`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spawn

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->