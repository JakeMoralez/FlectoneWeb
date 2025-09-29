---
authors:
  - TheFaser
---

# Езда

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/ride`
![ride](/ride.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.ride`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ride
<<< @/files/localizations/en_us.yml#ride
:::

### `dismount`

Сообщение, когда моб больше не сидит на ком-то

### `mount`

Сообщение, когда моб сидит на ком-то

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → ride`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#ride

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.ride`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ride

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->