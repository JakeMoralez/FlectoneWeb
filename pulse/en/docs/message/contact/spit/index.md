# Spit 

To spit, hold **white dye** in your hand and right-click
![spit](/spit.gif)

If the spit hits a player, they will receive a message about it
![spit message](/spit.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.contact.spit`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spit
<<< @/files/localizations/en_us.yml#spit
:::

### `format`

The message sent to the player who was spat on

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → contact.spit`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#spit

<!--@include: @/parts/enable.md-->

### `message`

Enables the message when the spit hits a player

### `item`

The item used to create the spit

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
