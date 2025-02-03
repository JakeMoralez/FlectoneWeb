# Иконка

Модуль отвечающий за изображение сервера
![server icon](/servericon.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → status.icon`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#icon

<!--@include: @/parts/enable.md-->

### `random`

Если включено, то изображение будет выбираться случайным образом, иначе по порядку

### `values`

`server-icon-1.png` ![server icon 1](/server-icon-1.png)


`server-icon-2.png` ![server icon 2](/server-icon-2.png)

Список названий изображений, которые должны отображаться

::: danger ИЗОБРАЖЕНИЕ ДОЛЖНО
1. Находиться внутри папки `/FlectonePulse/images/`
2. Иметь размер **ТОЛЬКО** `64x64`
   :::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.status.icon`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#icon

<!--@include: @/parts/permission/permissionTier3.md-->