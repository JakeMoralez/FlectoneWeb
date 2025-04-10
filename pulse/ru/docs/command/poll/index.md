# Комманда `/poll`

Комманда для проведения голосований
![command poll](/commandpoll.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.poll`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#poll
<<< @/files/localizations/en_us.yml#poll
:::

### `null-poll`

Сообщение, если голосование не найдено

### `expired`

Сообщение, если игрок пытается проголосовать в голосовании, которое закончилось

### `already`

Сообщение, если игрок пытается проголосовать в голосовании ещё один раз

### `vote-true`

Сообщение, если игрок проголосовал за какой-то вариант

### `vote-false`

Сообщение, если игрок убрал свой голос

### `format`

Формат сообщения, которое будет отправлено

### `answer-template`

Шаблон для каждого ответа

### status

::: details Заголовки для каждого статуса голосования

#### `start`

Заголовок при старте голосования

#### `run`

Заголовок при повторном сообщении голосования

#### `end`

Заголовок при конце голосования

:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → poll`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#poll

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `last-id`

Последний номер созданного голосования

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.poll`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#poll

<!--@include: @/parts/permission/permissionTier3.md-->

### `create`

Право для создания голосований

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

