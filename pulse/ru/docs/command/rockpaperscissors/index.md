---
authors:
  - TheFaser
---

# `/rockpaperscissors`

Комманда для того, чтобы предложить поиграть в камень-ножницы-бумага
![command rockpaperscissors](/commandrockpaperscissors.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.rockpaperscissors`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#rockpaperscissors
<<< @/files/localizations/en_us.yml#rockpaperscissors
:::

### `null_player`

Сообщение, если введённый игрок не найден

### `null_game`

Сообщение, если игры не существует

### `wrong_move`

Сообщение при невозможном ходе

### `already`

Сообщение, если игрок уже сделал ход

### `myself`

Сообщение, если игрок решил поиграть с самим собой

### `sender`

Сообщение для отправителя

### `receiver`

Сообщение для получателя

### `format_move`

Сообщение при ходе

### `format_win`

Сообщение при победе

### `forma_draw`

Сообщение при ничье

### `strategies`

Список стратегий и их названий

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → rockpaperscissors`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#rockpaperscissors

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->

### `strategy`

Стратегии, где `ключом` является тот, кто побеждает `значение`

::: info Например я хочу, чтобы `ножницы` побеждали `paper`
Значит я должен написать
```yaml
scissors:
  - "paper"
```

Значений может быть несколько т.е.
```yaml
scissors:
  - "paper"
  - "newitem"
```

Можно сделать свои ключи и значения
```yaml
customvalue:
  - "customobject"
```
:::

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.rockpaperscissors`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#rockpaperscissors

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

