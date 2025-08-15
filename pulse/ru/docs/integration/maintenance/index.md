---
authors:
  - TheFaser
---

# Maintenance

Интеграция с плагином Maintenance позволяет отключать `MOTD` у `FlectonePulse` в нужный момент, а также отключает команду `/maintenance` от `FlectonePulse`

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#maintenance

<!--@include: @/parts/enable.md-->

### `disable-flectonepulse-maintenance`

Выключает команду `/maintenance` в `FlectonePulse`

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#integrationmaintenance

<!--@include: @/parts/permission/permissionTier3.md-->