---
authors:
  - TheFaser
---

# Достижение

Сообщение от сервера, когда игрок получает достижение
![task](/task.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.advancement`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#advancement
<<< @/files/localizations/en_us.yml#advancement
:::

### `format_task`

Сообщение при получении обычного достижения
![task](/task.png)

### `format_goal`

Сообщение при достижении цели
![goal](/goal.png)

### `format_challenge`

Сообщение при завершении испытания
![challenge](/challenge.png)

### `tag`

Формат отображения достижения по его типу, доступны только `task` и `challenge`, потому что в ванильном Майнкрафте нет отдельного стиля для `goal`

### `format_taken`

Сообщение при потере достижения (используется только в старых версиях майнкрафта)

### `revoke`

Сообщения при использовании `/advancement revoke`

### `grant`

Сообщения при использовании `/advancement grant`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → advancement`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#advancement

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

### `command`

<!--@include: @/parts/vanillaWarn.md#command-->

Настройки команды `/advancement`

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.advancement`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#advancement

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->