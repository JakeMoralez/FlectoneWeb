# Комманда `/ignore`

Комманда для игнорирования всех сообщений от игрока
![command ignore](/commandignore.png)

Убирается игнорирование с помощью повторного использования
![command unignore](/commandunignore.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.ignore`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ignore
<<< @/files/localizations/en_us.yml#ignore
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `myself`

Сообщение, если игрок пытается игнорировать самого себя

### `he`

Сообщение, если получатель игнорирует отправителя

### `you`

Сообщение, если отправитель игнорирует получателя

### `format-true`

Сообщение при успешном игнорировании

### `format-false`

Сообщение при снятии игнорирования

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ignore`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ignore

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ignore`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ignore

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->