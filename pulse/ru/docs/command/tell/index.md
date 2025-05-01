---
authors:
  - TheFaser
---

# `/tell`

Комманда для того, чтобы написать личное сообщение игроку
![command tell](/commandtell.png)

Можно использовать для заметок, если вписать свой же ник
![command tell myself](/commandtellmyself.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.tell`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#tell
<<< @/files/localizations/en_us.yml#tell
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `sender`

Сообщение для отправителя

### `receiver`

Сообщение для получателя

### `myself`

Сообщение для отправителя, если он и есть получатель т.е. для себя

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → tell`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#tell

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.tell`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#tell

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

