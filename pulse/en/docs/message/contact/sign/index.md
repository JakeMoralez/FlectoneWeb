# Подпись

Подпись создаётся на предмете с помощью **ЛКМ** по наковальне, если игрок держит в **дополнительной** руке краситель и в **главной** предмет
![sign](/sign.gif)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.contact.sign`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#sign
<<< @/files/localizations/en_us.yml#sign
:::

### `format`

Сообщение, которое будет занесено в описание предмета, как подпись

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → contact.sign`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#sign

<!--@include: @/parts/enable.md-->

### `drop-dye`

Включает выкидывание красителя прошлой подписи, если подпись переделывается
![resign](/resign.gif)

### `block`

Блок, на который нужно нажать, для подписи

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.contact.sign`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#sign

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->