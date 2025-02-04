# Комманда `/translateto`

Комманда для перевода сообщения с одного языка на другой
![command translateto](/commandtranslateto.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.translateto`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#translateto
<<< @/files/localizations/en_us.yml#translateto
:::

### `null-or-error`

Сообщение, если произошла ошибка при переводе

### `format`

Формат сообщения, которое будет отправлено

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → translateto`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#translateto

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.translateto`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#translateto

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

