# Бренд

Модуль, отвечающий за сообщение бренда в F3
![brand](/brand.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.brand`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#brand
<<< @/files/localizations/en_us.yml#brand
:::

### `values`

Список сообщений для бренда

::: warning МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО ОБЫЧНЫЕ ЦВЕТА
<!--@include: @/parts/color.md-->
:::


[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → brand`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#brand

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/random.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/ticker.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.brand`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#brand

<!--@include: @/parts/permission/permissionTier3.md-->