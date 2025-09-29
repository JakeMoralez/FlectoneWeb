---
authors:
  - TheFaser
---

# Командный блок

<!--@include: @/parts/vanillaWarn.md#message-->

Сообщение от сервера при использовании командного блока
![commandblock](/commandblock.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.commandblock`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#commandblock
<<< @/files/localizations/en_us.yml#commandblock
:::

### `not_enabled`

Сообщение при использовании командного блока, если на сервере выключены командные блоки

### `format`

Сообщение при использовании командного блока

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → commandblock`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#commandblock

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.commandblock`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#commandblock

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->