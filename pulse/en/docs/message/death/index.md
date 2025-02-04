# Смерть

Сообщение от сервера, когда игрок умирает
![death server](/deathserver.png)  
![death player](/deathplayer.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.death`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#death
<<< @/files/localizations/en_us.yml#death
:::

### `types`

Весь список смертей, где ключом является название смерти, а значением сообщение, которое будет использоваться

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → death`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#death

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.death`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#death

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->