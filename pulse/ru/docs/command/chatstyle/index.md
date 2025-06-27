---
authors:
  - TheFaser
---

# `/chatstyle`

Комманда для применения стиля к сообщениям
![command chatstyle](/commandchatstyle.png)

::: danger ОПАСНО

Эту команду **нельзя** выдавать в обычное пользование игрокам, иначе возможен взлом/краш сервера. Её нужно использовать только с готовыми пресетами, например через [`/chatsetting`](/docs/command/chatsetting)

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.chatstyle`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#chatstyle
<<< @/files/localizations/en_us.yml#chatstyle
:::

### `null-player`

Сообщение, если введённый игрок не найден

### `format`

Сообщение после применения стиля

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → chatstyle`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#chatstyle

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.chatstyle`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#chatstyle

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/other.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->