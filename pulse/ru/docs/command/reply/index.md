---
authors:
  - TheFaser
---

# `/reply`

Комманда для того, чтобы написать личное сообщение последнему написавшему игроку
![command reply](/commandreply.png)

::: danger ВНИМАТЕЛЬНО
Комманда не будет работать, если модуль [`Tell`](/docs/command/tell/) выключен
:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.reply`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#reply
<<< @/files/localizations/en_us.yml#reply
:::

### `null_receiver`

Сообщение, если получатель не найден

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → reply`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#reply

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.reply`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#reply

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

