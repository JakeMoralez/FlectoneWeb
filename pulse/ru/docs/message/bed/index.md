---
authors:
  - TheFaser
---

# Кровать

<!--@include: @/parts/vanillaWarn.md#message-->

Сообщения при использовании кровати
![bed](/bed.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.bed`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#bed
<<< @/files/localizations/en_us.yml#bed
:::

### `no_sleep`

Сообщение, когда нельзя спать из-за дня

### `not_safe`

Сообщение, когда нельзя спать из-за монстров

### `obstructed`

Сообщение, когда кровать заблокирована блоками

### `occupied`

Сообщение, когда кровать кем-то занята

### `too_far_away`

Сообщение, когда кровать далеко

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → bed`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#bed

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.bed`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#bed

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->