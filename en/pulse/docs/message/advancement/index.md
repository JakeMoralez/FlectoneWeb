# Достижение

Сообщение от сервера, когда игрок получает достижение
![task](/task.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.advancement`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#advancement
<<< @/files/localizations/en_us.yml#advancement
:::

### `task`

Сообщение при получении обычного достижения
![task](/task.png)

### `goal`

Сообщение при достижении цели
![goal](/goal.png)

### `challenge`

Сообщение при завершении испытания
![challenge](/challenge.png)

### `revoke`

Сообщение при использовании `/advancement revoke`

### `grant`

Сообщение при использовании `/advancement grant`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → advancement`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#advancement

<!--@include: @/parts/enable.md-->

### `revoke`

Включает изменение сообщения у комманды `/advancement revoke`

### `grant`

Включает изменение сообщения у комманды `/advancement grant`

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.advancement`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#advancement

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->