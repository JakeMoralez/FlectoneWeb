---
authors:
  - TheFaser
---

# Фиксация

Модуль форматирует сообщение игрока так, что первая буква - заглавная, а в конце есть точка

![fixation](/fixation.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.fixation`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#fixation

<!--@include: @/parts/enable.md-->

### `end_dot`

Будет ли в конце сообщения добавлена точка, если её нет

### `first_letter_uppercase`

Будет ли первая буква в сообщении всегда заглавной

### `non_dot_symbols`

Список символов (могут быть и слова), после которых не нужно ставить точку

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.fixation`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#fixation

<!--@include: @/parts/permission/permissionTier3.md-->