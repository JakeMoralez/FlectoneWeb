---
authors:
  - TheFaser
  - Stokmenn
---

# Brand

Module responsible for the brand message in F3 debug screen  
![brand](/brand.png)

::: warning WARNING

If a proxy (Velocity or BungeeCord) is being used, changing the brand is completely impossible

:::

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.brand`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#brand
<<< @/files/localizations/en_us.yml#brand
:::

### `values`

List of brand messages

::: warning ONLY BASIC COLORS CAN BE USED
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
