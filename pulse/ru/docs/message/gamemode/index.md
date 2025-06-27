---
authors:
  - TheFaser
---

# Режим игры

Сообщение от сервера, когда игрок изменил режим игры
![gamemode](/gamemode.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.gamemode`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#gamemode
<<< @/files/localizations/en_us.yml#gamemode
:::

### `format-self`

Сообщение при смене режима игры самому себе или получателю, когда его режим изменён

### `format-multiple`

Сообщение при смене режима игры другому игроку

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → gamemode`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#gamemode

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.gamemode`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#gamemode

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->