---
authors:
  - TheFaser
  - Stokmenn
---

# Death 

<!--@include: @/parts/vanillaWarn.md#message-->

A message from the server when a player dies
![death server](/deathserver.png)  
![death player](/deathplayer.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.death`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#death
<<< @/files/localizations/en_us.yml#death
:::

### `killer_player`

Message that replaces the `<killer>` tag when the killer is a player

### `killer_entity`

Message that replaces the `<killer>` tag when the killer is a mob/entity

### `types`

A complete list of death types, where the key is the name of the death and the value is the message that will be used

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → death`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#death

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.death`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#death

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->
