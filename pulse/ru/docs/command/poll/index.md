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

### `null_poll`

Сообщение, если голосование не найдено

### `expired`

Сообщение, если игрок пытается проголосовать в голосовании, которое закончилось

### `already`

Сообщение, если игрок пытается проголосовать в голосовании ещё один раз

### `vote_true`

Сообщение, если игрок проголосовал за какой-то вариант

### `vote_false`

Сообщение, если игрок убрал свой голос

### `format`

Формат сообщения, которое будет отправлено

### `answer_template`

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

#### `input_name`

Название для поля "название"

#### `input_initial`

Текст по умолчанию для поля "название"

#### `multiple_name`

Название для поля-переключателя "разрешить несколько ответов"

#### `end_time_name`

Название для поля с длительностью

#### `repeat_time_name`

Название для поля с интервалом

#### `new_answer_button_name`

Название для кнопки, которая создаёт новый ответ

#### `remove_answer_button_name`

Название для кнопки, которая удаляет последний ответ

#### `input_answer_name`

Название для нового поля с ответом

#### `input_answers_initial`

Текст по умолчанию для поля с ответом

#### `create_button_name`

Название для кнопки, которая создаёт голосование

:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → poll`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#poll

<!--@include: @/parts/enable.md-->

### `enable_gui`

::: warning ПРЕДУПРЕЖДЕНИЕ

Работает только для версий `1.21.6` и новее, в старых версиях команда не будет зарегистрирована

:::

Добавляет новую команду `/pollgui` (зависит от названия самой команды, т.е. `/название` + `gui`)

<!--@include: @/parts/range.md-->

### `last_id`

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

