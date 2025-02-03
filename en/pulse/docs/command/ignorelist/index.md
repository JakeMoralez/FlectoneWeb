# Комманда `/ignorelist`

Комманда для того, чтобы посмотреть список своих игнорирований
![command ignorelist](/commandignorelist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.ignorelist`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#ignorelist
<<< @/files/localizations/en_us.yml#ignorelist
:::

### `empty`

Сообщение, если список игнорируемых игроков пуст

### `null-page`

Сообщение, если введённая страница не существует

### `header`

Верхняя часть сообщения списка

### `line`

Формат каждого игнорирования из списка

### `footer`

Нижняя часть сообщения списка

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → ignorelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#ignorelist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.ignorelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#ignorelist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->