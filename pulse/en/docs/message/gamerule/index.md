---
authors:
  - TheFaser
---

# Gamerule

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `/gamerule`
![gamerule](/gamerule.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.gamerule`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#gamerule
<<< @/files/localizations/en_us.yml#gamerule
:::

### `query`

Message when using `/gamerule gamerule_name`, for example `/gamerule disableRaids`

### `set`

Message when using `/gamerule gamerule_name true/false`, for example `/gamerule disableRaids set`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → gamerule`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#gamerule

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.gamerule`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#gamerule

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->