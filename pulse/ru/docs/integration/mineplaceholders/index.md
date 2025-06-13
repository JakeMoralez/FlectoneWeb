---
authors:
  - TheFaser
---

# MiniPlaceholders

Интеграция с плагином MiniPlaceholders позволяет использовать любые [мини-плейсхолдеры](https://github.com/MiniPlaceholders/MiniPlaceholders/wiki/Placeholders)

::: warning ПРЕДУПРЕЖДЕНИЕ
Чтобы использовать мини-плейсхолдер, его обязательно нужно обернуть в `{}` 

Пример `{<server_name>}`
:::

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → miniplaceholders`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#miniplaceholders

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.miniplaceholders`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#miniplaceholders

<!--@include: @/parts/permission/permissionTier3.md-->

### `use`

Право для использования плейсхолдеров из MiniPlaceholders в сообщении