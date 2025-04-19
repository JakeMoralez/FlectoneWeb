---
authors:
  - TheFaser
---

# Комманда `/afk`

Комманда для смены режима AFK
![afk](/afkglobalmessage.png)

::: danger ВНИМАТЕЛЬНО
Комманда не будет работать, если модуль [`AFK`](/docs/message/afk/) выключен
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → afk`
<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#afk

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.afk`
<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#afk

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->