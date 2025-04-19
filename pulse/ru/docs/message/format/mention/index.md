---
authors:
  - TheFaser
---

# Упоминание

Это форматирование позволяет упоминать (пинговать) человека в сообщении
![mention](/mention.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.mention`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#mention
<<< @/files/localizations/en_us.yml#mention
:::

### `person`

Сообщение игроку при упоминании

### `format`

Сообщение, если это упоминание игрока

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.mention`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#mention

<!--@include: @/parts/enable.md-->

### `trigger`

Символ, с которого должно начинаться сообщение упоминания
::: info НАПРИМЕР
Если я хочу упомянуть `Flectone`, то я должен написать `@Flectone`
![mention](/mention.png)
:::

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.mention`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mention

<!--@include: @/parts/permission/permissionTier3.md-->

### `group`

Право для упоминания донатной группы, например `@default`

### `bypass`

Право для игнорирования упоминания

<!--@include: @/parts/permission/sound.md-->