# Комманда `/dice`

Комманда для броска кубиков на удачу
![command dice](/commanddice.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.dice`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#dice
<<< @/files/localizations/en_us.yml#dice
:::

### `symbols`

Список индексов (выпавшее число) и символов (кубики)

### `format`

Формат сообщения, которое будет отправлено

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → dice`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#dice

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `min`

Минимальное количество кубиков

### `max`

Максимальное количество кубиков

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.dice`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#dice

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->