# Подключение

Сообщение от сервера, когда игрок подключился
![join](/join.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.join`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#join
<<< @/files/localizations/en_us.yml#join
:::

### `format`

Сообщение при подключении на сервер

### `format-first-time`

Сообщение при первом подключении на сервер

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → join`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#join

<!--@include: @/parts/enable.md-->

### `first`

Включает сообщение о самом первом подключении игрока на сервер

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.join`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#join

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->