---
authors:
  - TheFaser
  - Stokmenn
---

# Greeting

Message from the server to the player when they connect  
![greeting](/greeting.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.greeting`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#greeting
<<< @/files/localizations/en_us.yml#greeting
:::

### `format`

Personalized message to the player upon connection

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → greeting`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#greeting

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.greeting`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#greeting

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->
