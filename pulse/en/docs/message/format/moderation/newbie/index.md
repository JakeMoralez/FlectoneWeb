---
authors:
  - TheFaser
  - Stokmenn
---

# Newbie

This module prevents new players from sending messages for a certain period of time

::: warning WARNING

A "newbie" is considered any player who has never been on the server before

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->  
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.format.moderation.newbie`  

<!--@include: @/parts/words.md#default-->  

::: code-group  
<<< @/files/localizations/ru_ru.yml#newbie  
<<< @/files/localizations/en_us.yml#newbie  
:::

### `reason`

The reason that will be used for the mute message

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->  
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.newbie`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/message.yml#newbie

<!--@include: @/parts/enable.md-->  

### `timeout`

Duration in seconds during which new players cannot send messages

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->  
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.newbie`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/permission.yml#newbie

<!--@include: @/parts/permission/permissionTier3.md-->  

### `bypass`

Permission to ignore this module's restrictions