---
authors:
  - TheFaser
---

# Sound

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `sound`
![sound](/sound.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.sound`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#sound
<<< @/files/localizations/en_us.yml#sound
:::

### `play`

Messages when using `/playsound`

### `stop`

Messages when using `/stopsound`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → sound`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#sound

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.sound`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#sound

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->