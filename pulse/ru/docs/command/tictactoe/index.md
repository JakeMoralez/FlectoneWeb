---
authors:
  - TheFaser
---

# Комманда `/tictactoe`

Комманда для того, чтобы предложить поиграть в крестики-нолики
![command tictactoe](/commandtictactoe.png)

По умолчанию кидается запрос в [китайские крестики-нолики](#правила-китайских-крестиков-ноликов), если хочешь в обычные, то используй `/tictactoe ник false`
![command tictactoe default](/commandtictactoedefault.png)

### Правила китайских крестиков-ноликов

1. Каждый игрок может поставить только `3` своих метки
2. Если игра не закончилась, то первая метка, которая была поставлена игроком, убирается и ставится новая
3. И так по кругу, пока игра не закончится

В итоге игра становится сложной и со стратегией!

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.tictactoe`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#tictactoe
<<< @/files/localizations/en_us.yml#tictactoe
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `myself`

Сообщение, если введённый игрок пытается поиграть сам с собой

### `wrong-game`

Сообщение, если указанной игры не существует

### `wrong-move`

Сообщение, если такой ход невозможен

### `wrong-by-player`

Сообщение, если один из игроков, участвующий в игре, вышел

### `symbol`

::: details Сообщения для символов
#### `empty`

Формат сообщения для пустой клетки

#### `first`

Формат сообщения для клетки первого игрока

#### `first-remove`

Формат сообщения для удаления клетки первого игрока

#### `first-win`

Формат сообщения для победной клетки первого игрока

#### `second`

Формат сообщения для клетки второго игрока

#### `second-remove`

Формат сообщения для удаления клетки второго игрока

#### `second-win`

Формат сообщения для победной клетки второго игрока
:::

### `field`

Формат сообщения для игрового поля

### `current-move`

Формат сообщения для информации о текущем ходе

### `last-move`

Форма сообщения для информации о прошлом ходе

### `format-move`

Формат сообщения для оповещения о ходе

### `format-win`

Сообщение при победе

### `format-draw`

Сообщение при ничье

### `sender`

Сообщение для отправителя при запросе

### `format-create`

Сообщение для получателя при запросе

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → tictactoe`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#tictactoe

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.tictactoe`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#tictactoe

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

