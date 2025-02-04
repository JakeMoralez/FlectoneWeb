# Плевок

Чтобы плюнуть, нужно держать в руке **белый краситель** и нажать **ПКМ**
![spit](/spit.gif)

Если плевок попал в игрока, ему напишется об этом
![spit message](/spit.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.contact.spit`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spit
<<< @/files/localizations/en_us.yml#spit
:::

### `format`

Сообщение игроку, которого обплевали

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → contact.spit`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#spit

<!--@include: @/parts/enable.md-->

### `message`

Включает сообщение попадания плевка в игрока

### `item`

Предмет, который используется для создания плевка

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.contact.spit`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spit

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->