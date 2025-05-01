---
authors:
  - TheFaser
---

# `/warnlist`

Комманда для того, чтобы посмотреть список предупреждений
![command warnlist](/commandwarnlist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.warnlist`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#warnlist
<<< @/files/localizations/en_us.yml#warnlist
:::

### `empty`

Сообщение, если список игроков предупреждений пуст

### `null-page`

Сообщение, если введённая страница не существует

### `null-player`

Сообщение, если введённый игрок не найден

### `global`

::: details Сообщения для глобальных предупреждений

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого предупреждения из списка

#### `footer`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для предупреждений игрока

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого предупреждения из списка

#### `footer`

Нижняя часть сообщения списка
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → warnlist`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#warnlist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.warnlist`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#warnlist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

