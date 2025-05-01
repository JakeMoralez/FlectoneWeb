---
authors:
  - TheFaser
---

# `/geolocate`

Комманда для отслеживания IP-адреса и получения информации об игроке
![command geolocate](/commandgeolocate.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.geolocate`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#geolocate
<<< @/files/localizations/en_us.yml#geolocate
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `null-or-error`

Сообщение, если произошла ошибка при получении информации

### `format`

Формат сообщения, которое будет отправлено

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → geolocate`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#geolocate

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.geolocate`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#geolocate

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->