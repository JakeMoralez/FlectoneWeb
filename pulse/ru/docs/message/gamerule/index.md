---
authors:
  - TheFaser
---

# Правила игры

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/gamerule`
![gamerule](/gamerule.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.gamerule`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#gamerule
<<< @/files/localizations/en_us.yml#gamerule
:::


### `query`

Сообщение при использовании `/gamerule gamerule_name`, например `/gamerule disableRaids`

### `set`

Сообщение при использовании `/gamerule gamerule_name true/false`, например `/gamerule disableRaids set`

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