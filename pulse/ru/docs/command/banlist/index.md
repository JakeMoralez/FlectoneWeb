---
authors:
  - TheFaser
---

# `/banlist`

Комманда для того, чтобы посмотреть список блокировок
![command banlist](/commandbanlist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.banlist`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#banlist
<<< @/files/localizations/en_us.yml#banlist
:::

### `empty`

Сообщение, если список заблокированных игроков пуст

### `null_page`

Сообщение, если введённая страница не существует

### `null_player`

Сообщение, если введённый игрок не найден

### `global`

::: details Сообщения для глобальных блокировок

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого бана из списка

#### `footer`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для блокировок игрока

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого бана из списка

#### `footer`

Нижняя часть сообщения списка
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → banlist`
<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#banlist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.banlist`
<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#banlist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->