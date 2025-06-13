---
authors:
  - TheFaser
---

# MiniMOTD

Интеграция с плагином `MiniMOTD` отключает модуль [Статус](/docs/message/status/) в `FlectonePulse`

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → minimotd`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#minimotd

<!--@include: @/parts/enable.md-->

### `disable-flectonepulse-status`

Выключает модуль [Статус](/docs/message/status/)

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.minimotd`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#minimotd

<!--@include: @/parts/permission/permissionTier3.md-->