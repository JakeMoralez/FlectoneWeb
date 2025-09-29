---
authors:
  - TheFaser
---

# `/toponline`

Комманда для того, чтобы посмотреть топ игроков по наигранному времени
![command toponline](/commandtoponline.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.toponline`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#toponline
<<< @/files/localizations/en_us.yml#toponline
:::

### `null_page`

Сообщение, если введённая страница не существует

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого мута из списка

#### `footer`

Нижняя часть сообщения списка

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → toponline`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#toponline

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.toponline`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#toponline

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

