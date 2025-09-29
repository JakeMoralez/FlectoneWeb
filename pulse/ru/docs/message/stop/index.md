---
authors:
  - TheFaser
---

# Выключение

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/stop`
![stop](/stop.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.stop`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#stop
<<< @/files/localizations/en_us.yml#stop
:::

### `format`

Сообщение при использовании `/stop`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → stop`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#stop

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/stop.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.stop`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#stop

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/stop.md-->