---
authors:
  - TheFaser
---

# Experience

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `/experience`
![experience](/experience.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.experience`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#experience
<<< @/files/localizations/en_us.yml#experience
:::

### `add`

Messages when using `/experience add`, for example `/experience add TheFaser 1 levels`

### `query`

Messages when using `/experience query`, for example `/experience query TheFaser levels`

### `set`

Messages when using `/experience set`, for example `/experience set TheFaser 1 levels`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → experience`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#experience

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.experience`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#experience

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->