---
authors:
  - TheFaser
---

# `/poll`

Комманда для проведения голосований
![command pollgui](/commandpollgui.gif)

Это также можно делать через комманду в чате
![command poll](/commandpoll.png)


::: info ИНФОРМАЦИЯ

Интервал указывается для того, чтобы повторно отправить сообщение в чат о существующем голосовании

:::

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

### `status`

::: details Заголовки для каждого статуса голосования

#### `start`

Заголовок при старте голосования

#### `run`

Заголовок при повторном сообщении голосования

#### `end`

Заголовок при конце голосования

:::

### `modern`

::: details Система диалогов для создания голосования

#### `header`

Имя диалога

#### `input-name`

Название для поля "название"

#### `input-initial`

Текст по умолчанию для поля "название"

#### `multiple-name`

Название для поля-переключателя "разрешить несколько ответов"

#### `end-time-name`

Название для поля с длительностью

#### `repeat-time-name`

Название для поля с интервалом

#### `new-answer-button-name`

Название для кнопки, которая создаёт новый ответ

#### `remove-answer-button-name`

Название для кнопки, которая удаляет последний ответ

#### `input-answer-name`

Название для нового поля с ответом

#### `input-answers-initial`

Текст по умолчанию для поля с ответом

#### `create-button-name`

Название для кнопки, которая создаёт голосование

:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → poll`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#poll

<!--@include: @/parts/enable.md-->

### `enable-gui`

::: warning ПРЕДУПРЕЖДЕНИЕ

Работает только для версий `1.21.6` и новее, в старых версиях команда не будет зарегистрирована

:::

Добавляет новую команду `/pollgui` (зависит от названия самой команды, т.е. `/название` + `gui`)

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

