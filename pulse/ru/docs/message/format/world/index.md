---
authors:
  - TheFaser
---

# Измерение

Модуль, отвечающий за тег `<world_prefix>` т.е. за цвет измерения
![world tab](/worldtab.png)  
![world chat](/worldchat.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.world`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#world

<!--@include: @/parts/enable.md-->

### `mode`

Режим определения мира из доступных

| Режим    | Описание                                                                 |
|----------|--------------------------------------------------------------------------|
| `TYPE`   | Мир определяется по названию его типа, например обычный мир это `normal` |
| `NAME`   | Мир определяется по названию его папки                                   |

### `values`

Список миров и их `<world_prefix>`

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.world`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#world

<!--@include: @/parts/permission/permissionTier3.md-->