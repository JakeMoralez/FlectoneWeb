---
authors:
  - TheFaser
---

# Рецепт

<!--@include: @/parts/vanillaWarn.md#command-->

Сообщение от сервера при использовании `/recipe`
![recipe](/recipe.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.recipe`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#recipe
<<< @/files/localizations/en_us.yml#recipe
:::

### `give`

Сообщения при использовании `/recipe give`

### `take`

Сообщения при использовании `/recipe take`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → recipe`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#recipe

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.recipe`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#recipe

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->