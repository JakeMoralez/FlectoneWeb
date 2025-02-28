# Метка

Марка создаётся c помощью **ПКМ** и деревянного меча в главной руке
![mark](/mark.gif)

::: info ПРИМЕЧАНИЕ
Меч можно переименовать в наковальне на [доступный цвет](#доступные-цвета), например `RED` и метка будет красной
:::

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → mark`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#mark

<!--@include: @/parts/enable.md-->

### `limit`

Не позволяет сделать больше одной метки, пока она существует

### `color`

Включает возможность цветных меток. Для этого меч нужно переименовать в один из
<!--@include: @/parts/color.md-->

### `range`

Расстояние в блоках, насколько далеко можно разместить метку

### `duration`

Сколько времени в [тиках](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) будет [лимит](#limit)

### `item`

Предмет, с помощью которого ставится метка

### `entity`

Хитбокс моба, который используется для создания метки

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.mark`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mark

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->