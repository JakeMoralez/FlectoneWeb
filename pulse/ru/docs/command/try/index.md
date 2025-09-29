---
authors:
  - TheFaser
---

# `/try`

Комманда для отображения выполнения действия с шансом
![command try](/commandtry.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.try`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#try
<<< @/files/localizations/en_us.yml#try
:::

### `format_true`

Формат сообщения, которое будет отправлено, если действие выполнено успешно

### `format_false`

Формат сообщения, которое будет отправлено, если действие выполнено неуспешно

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → try`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#try

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `min`

Минимальный шанс выполнения действия

### `max`

Максимальный шанс выполнения действия

### `good`

Шанс выполнения действия, с которого считается, что оно выполнено успешно

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.try`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#try

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->

