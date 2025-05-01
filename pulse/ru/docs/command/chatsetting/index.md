---
authors:
  - TheFaser
---

# `/chatsetting`

Комманда для настройки чата
![command chatsetting](/commandchatsetting.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.chatsetting`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#chatsetting
<<< @/files/localizations/en_us.yml#chatsetting
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

### `header`

Название для GUI

### `items`

Список настроек и их сообщений, где:
- Первая строчка - название предмета, если включено
- - Остальные строчки - описание предмета, если включено
- Вторая строчка - название предмета, если выключено
- - Остальные строчки - описание предмета, если выключено

::: info Например возьмём `REPLY`
```yaml
# включено
- - "<fcolor:2>Команда /reply" # название предмета
  - "<color:#98FB98>Показывается" # описание
# выключено
- - "<fcolor:2>Команда /reply" # название предмета
  - "<color:#ff7171>Скрыта" # описание
```
:::

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatsetting

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->

### `items`

Список настроек, которые могут быть изменены

::: info Пример настройки на `TELL`
#### `slot`

Слот инвентаря, в котором будет настройка

#### `materials`

Список материалов, которые будут использованы для отображения состояния настройки

`LIME_CONCRETE` первый материал, отображается когда настройка включена <br>
`RED_CONCRETE` второй материал, отображается когда настройка выключена

:::

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatsetting`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatsetting

<!--@include: @/parts/permission/permissionTier3.md-->

### `items`

Список настроек и их прав

<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->