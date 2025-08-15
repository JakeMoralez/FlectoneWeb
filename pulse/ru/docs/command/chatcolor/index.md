---
authors:
  - TheFaser
---

# `/chatcolor`

Комманда для смены [цветов](/docs/message/format/fcolor/)
![command chatcolor](/commandchatcolor.png)

<!--@include: @/parts/fcolor.md--> 

::: info ИНФОРМАЦИЯ

Можно пропускать цвета с помощью `null`, чтобы их не заменять. Например `/chatcolor see null null <red> <red>` заменит только `<fcolor:3>` и `<fcolor:4>`, а первые два нет

Если есть пермишен `other`, то можно изменять цвета других игроков, дописывая их ник в конце команды, например `/chatcolor see null <red> <red> <blue> TheFaser`. Нужно указывать все цвета и только после этого ник игрока, но вы можете пропускать цвета, как об этом написано выше

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.chatcolor`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#chatcolor
<<< @/files/localizations/en_us.yml#chatcolor
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `null-color`

Сообщение, если неправильно введены цвета

### `null-type`

Сообщение, если неправильно введён тип

### `format`

Формат сообщения, которое будет отправлено

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatcolor

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatcolor

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/other.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

### `colors`

Список прав для изменения конкретных видов цветов: `SEE` или `OUT`