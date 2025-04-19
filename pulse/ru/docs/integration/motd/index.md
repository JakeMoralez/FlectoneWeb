---
authors:
  - TheFaser
---

# MOTD

Интеграция с `MOTD` отключает модуль [Статус](/docs/message/status/) в `FlectonePulse`

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → motd`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#motd

<!--@include: @/parts/enable.md-->

### `disable-flectonepulse-status`

Выключает модуль [Статус](/docs/message/status/)

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.motd`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#motd

<!--@include: @/parts/permission/permissionTier3.md-->