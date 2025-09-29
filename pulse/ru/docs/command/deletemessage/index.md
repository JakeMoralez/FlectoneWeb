---
authors:
  - TheFaser
---

# `/deletemessage`

Комманда для удаления сообщения в чате, используется автоматически при наведении на значок с удалением
![command deletemessage](/commanddeletemessage.png)

::: warning ПРЕДУПРЕЖДЕНИЕ

Команда будет бесполезной, если выключен основной модуль [`Delete`](/docs/message/format/moderation/delete/)

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.deletemessage`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#deletemessage
<<< @/files/localizations/en_us.yml#deletemessage
:::

### `null_message`

Сообщение, если при удалении сообщения не существует

### `format`

Формат сообщения, которое будет отправлено

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → deletemessage`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#deletemessage

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.deletemessage`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#deletemessage

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->
