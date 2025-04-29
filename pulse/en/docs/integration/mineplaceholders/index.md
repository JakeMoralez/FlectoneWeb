---
authors:
 - TheFaser
---

# MiniPlaceholders

Integration with MiniPlaceholders allows using any [mini-placeholders](https://github.com/MiniPlaceholders/MiniPlaceholders/wiki/Placeholders)

::: warning WARNING
To use a mini-placeholder, you must wrap it in `{}`

Example: `{<server_name>}`
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

Permission to use MiniPlaceholders placeholders in messages