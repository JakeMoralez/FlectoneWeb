# Комманды

Категория, отвечающая за настройку всех комманд

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#command
<<< @/files/localizations/en_us.yml#command
:::

### `prompt`

Форматирование подсказок

- #### `message`

Подсказка для комманд, в которых вводится сообщение

- #### `hard`

Подсказка для комманд, в которых спрашивается про сложность

- #### `accept`

Подсказка для комманд, в которых что-то принимается или отклоняется

- #### `turn`

Подсказка для комманд, в которых что-то включается или выключается

- #### `reason`

Подсказка для комманд, в которых вводится причина

- #### `category`

Подсказка для комманд, в которых выбирается категория

- #### `id`

Подсказка для комманд, в которых вводится айди

- #### `time`

Подсказка для комманд, в которых вводится время

- #### `multiple-vote`

Подсказка для комманд, в которых спрашивается про мульти голосование

- #### `player`

Подсказка для комманд, в которых вводится игрок

- #### `number`

Подсказка для комманд, в которых вводится число

- #### `color`

Подсказка для комманд, в которых вводится цвет

- #### `language`

Подсказка для комманд, в которых вводится язык

- #### `url`

Подсказка для комманд, в которых вводится ссылка

- #### `move`

Подсказка для комманд, в которых выбирается ход

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#command

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#command

<!--@include: @/parts/permission/permissionTier3.md-->

