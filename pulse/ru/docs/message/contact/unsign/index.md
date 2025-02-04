# Снятие подписи

Снятие подписи происходит с помощью **ЛКМ** на точиле, если игрок держит в **главной** руке предмет с подписью
![unsign](/unsign.gif)

::: info ПРИМЕЧАНИЕ
Игрок может снять только свою подпись
:::

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → contact.unsign`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#unsign

<!--@include: @/parts/enable.md-->

### `drop-dye`

Включает выкидывание красителя, который использовался при подписи
![unsign](/unsign.gif)

### `block`

Блок, на который нужно нажать, для снятия подписи

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.contact.unsign`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#unsign

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->