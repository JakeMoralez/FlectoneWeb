---
authors:
  - TheFaser
  - Stokmenn
---

# Translate

The `translate` tag is used for translating a message into another language

![translate](/translate.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.translate`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#translate
<<< @/files/localizations/en_us.yml#translate
:::

### `action`

Message for translation, which specifies the execution of a command when clicked

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.translate`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#translate

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.translate`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#translate

<!--@include: @/parts/permission/permissionTier3.md-->
