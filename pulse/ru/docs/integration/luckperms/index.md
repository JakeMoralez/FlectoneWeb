---
authors:
  - TheFaser
---

# LuckPerms

Интеграция с LuckPerms позволяет:
- Проверять права у **оффлайн игроков**
- Сортировать игроков в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → luckperms`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#luckperms

<!--@include: @/parts/enable.md-->

### `tab-sort`

Включает или выключает сортировку в ТАБе по [весу группы](https://luckperms.net/wiki/Weight)

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.luckperms`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#luckperms

<!--@include: @/parts/permission/permissionTier3.md-->