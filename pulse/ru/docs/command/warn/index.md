---
authors:
  - TheFaser
---

# `/warn`

Комманда для того, чтобы дать предупреждение игроку
![command warn](/commandwarn.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.warn`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#warn
<<< @/files/localizations/en_us.yml#warn
:::

### `null_player`

Сообщение, если введённый игрок не найден

### `null_time`

Сообщение, если введено невозможное время

### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: info Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/warn player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

### `server`

Сообщение для всех

### `person`

Сообщение для игрока

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → warn`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#warn

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->

### `actions`

Список, где ключом является `количество` предупреждений и значением `действие`, которое должно выполниться

::: info Например я хочу, чтобы при `10` варнов игрока банило
Тогда я должен вписать `10: ban <target> ohh`. Действие выполнится если у игрока будет `10` активных предупреждений
:::

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.warn`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#warn

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

