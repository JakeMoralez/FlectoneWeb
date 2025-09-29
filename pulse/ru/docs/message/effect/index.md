---
authors:
  - TheFaser
---

# Эффект

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/effect`
![effect](/effect.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.effect`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#effect
<<< @/files/localizations/en_us.yml#effect
:::

### `clear`

Сообщения при использовании `/effect clear`, например `/effect clear TheFaser`

### `give`

Сообщения при использовании `/effect give`, например `/effect give TheFaser minecraft:absorption`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → effect`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#effect

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.effect`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#effect

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->