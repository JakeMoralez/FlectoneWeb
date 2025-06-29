---
authors:
  - TheFaser
  - Stokmenn
---

# Spoiler

The `spoiler` tag is used to hide a message until the mouse hovers over it

Usage: `<spoiler:message>`

![spoiler message](/spoilermessage.png)  
![spoiler minecraft](/spoilerminecraft.png)  

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → message.format.spoiler`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spoiler
<<< @/files/localizations/en_us.yml#spoiler
:::

### `symbol`

Symbol replacing each letter

### `hover`

Message that is shown when hovering over the spoiler

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.spoiler`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#spoiler

<!--@include: @/parts/enable.md-->

### `color`

Color of the final spoiler in message

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.spoiler`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spoiler

<!--@include: @/parts/permission/permissionTier3.md-->
