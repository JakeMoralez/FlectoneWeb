# Капс

Это форматирование убирает капс в сообщении
![caps](/caps.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.caps`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#caps

<!--@include: @/parts/enable.md-->

### `trigger`

Процент букв, которые должны быть в верхнем регистре, чтобы сообщение было изменено

::: tip КАК ПРАВИЛЬНО НАПИСАТЬ ПРОЦЕНТ
`0.7` это `70%`, а `1.0` это `100%` т.е всё сообщение
:::

<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.caps`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#caps

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Право для игнорирования форматирования

<!--@include: @/parts/permission/sound.md-->