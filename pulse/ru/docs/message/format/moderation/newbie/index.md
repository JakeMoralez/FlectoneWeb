---
authors:
  - TheFaser
---

# Новичок

Этот модуль запрещает новичкам сервера писать сообщение определённое время

::: warning ПРЕДУПРЕЖДЕНИЕ

Новичком сервера считается тот игрок, который никогда не был на сервере

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.moderation.newbie`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#newbie
<<< @/files/localizations/en_us.yml#newbie
:::

### `reason`

Причина, которая будет использована для сообщения в муте

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.newbie`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#newbie

<!--@include: @/parts/enable.md-->

### `timeout`

Время в секундах, сколько новичку нельзя писать сообщение

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.newbie`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#newbie

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Право для игнорирования этого модуля