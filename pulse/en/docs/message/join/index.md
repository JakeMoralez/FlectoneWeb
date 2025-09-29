---
authors:
  - TheFaser
  - Stokmenn
---

# Join

Message from the server when a player connects  
![join](/join.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → message.join`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#join
<<< @/files/localizations/en_us.yml#join
:::

### `format`

Message when connecting to the server

### `format_first_time`

Message when connecting to the server for the first time

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → join`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#join

<!--@include: @/parts/enable.md-->

### `first`

Enables the message for a player's very first connection to the server

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.join`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#join

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->
