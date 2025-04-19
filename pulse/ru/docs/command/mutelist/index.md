---
authors:
  - TheFaser
---

# Комманда `/mutelist`

Комманда для того, чтобы посмотреть список мутов
![command mutelist](/commandmutelist.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.mutelist`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#mutelist
<<< @/files/localizations/en_us.yml#mutelist
:::

### `empty`

Сообщение, если список игроков с мутами пуст

### `null-page`

Сообщение, если введённая страница не существует

### `null-player`

Сообщение, если введённый игрок не найден

### `global`

::: details Сообщения для глобальных мутов

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого мута из списка

#### `footer`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для мутов игрока

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого мута из списка

#### `footer`

Нижняя часть сообщения списка
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → mutelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#mutelist

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.mutelist`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mutelist

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

