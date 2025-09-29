---
authors:
  - TheFaser
---

# `/stream`

Комманда для оповещения о запуске трансляции
![command stream](/commandstream.png)

Если игрок имеет право на комманду, то ему выдаётся префикс при включении/выключении
![command stream prefix](/commandstreamprefix.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.stream`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#stream
<<< @/files/localizations/en_us.yml#stream
:::

### `already`

Сообщение, если игрок, который ведёт трансляцию, пытается запустить ещё одну трансляцию

### `not`

Сообщение, если игрок, который не ведёт трансляцию, пытается закончить трансляцию

### `prefix_true`

Префикс игрока, который в данный момент ведёт трансляцию

### `prefix_false`

Префикс игрока, который имеет право вести трансляцию, но в данный момент не ведёт её

### `url_tag`

Формат каждой ссылки в оповещении

### `format_start`

Оповещение о начале трансляции

### `format_end`

Сообщение, если игрок закончил трансляцию

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → stream`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#stream

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.stream`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#stream

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

