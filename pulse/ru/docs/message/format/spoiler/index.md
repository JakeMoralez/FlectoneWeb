---
authors:
  - TheFaser
---

# Спойлер

Тег `spoiler` используется для скрытия сообщения, до наведения на него

Использование: `<spoiler:сообщение>`

![spoiler message](/spoilermessage.png)  
![spoiler minecraft](/spoilerminecraft.png)  

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.spoiler`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spoiler
<<< @/files/localizations/en_us.yml#spoiler
:::

### `symbol`

Символ, на который заменяется каждая буква

### `hover`

Сообщение, которое показывается при наведении

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.spoiler`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#spoiler

<!--@include: @/parts/enable.md-->

### `color`

Цвет итогового спойлера в сообщении

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.spoiler`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spoiler

<!--@include: @/parts/permission/permissionTier3.md-->