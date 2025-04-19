---
authors:
  - TheFaser
---

# Перевод

Тег `translate` используется для перевода сообщения на другой язык

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

Сообщение для перевода, в котором прописано выполнение комманды при нажатии

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