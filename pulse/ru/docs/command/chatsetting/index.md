---
authors:
  - TheFaser
---

# `/chatsetting`

Комманда для настройки чата
![command chatsetting](/commandchatsetting.gif)

::: info ПРИМЕЧАНИЕ

Можно открыть чужие настройки с помощью `/chatsetting TheFaser`

Если ты хочешь сделать своё меню через другой плагин, то ты можешь изменять значения с помощью `/chatsetting TheFaser ADVANCEMENT`. Это включит или выключит показ достижений в зависимости от состояния. Узнать состояние можно через плейсхолдер `%flectonepulse_advancement%`. 

Некоторым настройкам можно назначать значения, например `/chatsetting TheFaser STREAM_PREFIX kek` поставит игроку префикс стримера `kek`.

| Настройка           |
|---------------------|
| `ADVANCEMENT`       |
| `AFK`               |
| `AFK_SUFFIX`        |
| `AUTO`              |
| `BALL`              |
| `BAN`               |
| `BROADCAST`         |
| `CHAT`              |
| `COIN`              |
| `DEATH`             |
| `DICE`              |
| `DISCORD`           |
| `DO`                |
| `GREETING`          |
| `JOIN`              |
| `KICK`              |
| `LOCALE`            |
| `MAIL`              |
| `ME`                |
| `MUTE`              |
| `POLL`              |
| `QUIT`              |
| `REPLY`             |
| `ROCKPAPERSCISSORS` |
| `SPY`               |
| `STREAM`            |
| `STREAM_PREFIX`     |
| `TELEGRAM`          |
| `TELL`              |
| `TICTACTOE`         |
| `TRANSLATETO`       |
| `TRY`               |
| `TWITCH`            |
| `WARN`              |
| `WORLD_PREFIX`      |
| `ANON`              |

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.chatsetting`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#chatsetting
<<< @/files/localizations/en_us.yml#chatsetting
:::

::: tip  ПРИМЕЧАНИЕ

Название и описание предметов находятся в одной строчке, переход на новую строчку осуществляется с помощью `<br>`

:::

### `no-permission`

Сообщение, если для изменения настройки требуется определённое право

### `disable`

::: details Сообщения об отключении
#### `you`

Сообщение, если отправитель отключил комманду в `/chatsetting`

#### `he`

Сообщение, если получатель отключил комманду в `/chatsetting`

#### `server`

Сообщение, если сервер отключил комманду для `/chatsetting`
:::

### `inventory`

Название для основного GUI

### `checkbox`

::: details Настройка переключателей

#### `format-enable`

Сообщение, если настройка включена

#### `format-disable`

Сообщение, если настройка выключена

#### `types`

Список типов настроек и их названий

:::

### `menu`

Каждое дополнительное меню имеет:

::: details Настройка дополнительных меню

#### `item`

Название и описание предмета, который будет в основном меню

#### `inventory`

Название GUI в дополнительном меню

#### `types`

Список предметов с их названием и описанием

:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatsetting

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->

### `checkbox`

::: details Настройка переключателей

#### `disabled-material`

Материал, если настройка выключена

#### `enabled-material`

Материал, если настройка включена

#### `types`

Список типов настроек и их слот в инвентаре

:::

### `menu`

Дополнительные меню

#### `material`

Предмет который будет перекидывать в дополнительные меню

::: details Настройка дополнительных меню

#### `slot`

Какой слот будет в основном инвентаре

#### `types`

Список типов настроек с их параметрами

| Вид              | Описание                                                                                                                                                                                                                                   |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| у `CHAT`         | Поле `name` является названием, а `material` тип предмета, который будет в инвентаре у этого чата                                                                                                                                          |
| у `SEE` и `OUT`  | Поле `name` является названием, а `material` тип предмета, который будет в инвентаре у этого чата. Также имеет `colors`, где ключом является цифра, а значением цвет, который применится. Используй `""` для того, чтобы цвет не изменялся |

:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatsetting

<!--@include: @/parts/permission/permissionTier3.md-->

### `settings`

Список настроек и их прав

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->