---
authors:
  - TheFaser
---

# Комманда `/mail`

Комманда для того, чтобы написать оффлайн игроку письмо
![command mail](/commandmail.png)

Когда игрок, которому написали письмо, зайдёт на сервер, он увидит это
![command mail player](/commandmailplayer.png)

Если игрок уже на сервере и модуль [Tell](/docs/command/tell/) включен, то он будет использован
![command tell](/commandtell.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.mail`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#mail
<<< @/files/localizations/en_us.yml#mail
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `sender`

Сообщение для отправителя

### `receiver`

Сообщение для получателя

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → mail`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#mail

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.mail`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mail

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->