---
authors:
  - TheFaser
---

# Weather

<!--@include: @/parts/vanillaWarn.md#command-->

Server message when using `/weather`
![weather](/weather.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.weather`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#weather
<<< @/files/localizations/en_us.yml#weather
:::

### `clear`

Message when using `/weather clear`

### `rain`

Message when using `/weather rain`

### `thunder`

Message when using `/weather thunder`

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → weather`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#weather

<!--@include: @/parts/enable.md-->

<!--@include: @/parts/range.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.weather`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#weather

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/sound.md-->