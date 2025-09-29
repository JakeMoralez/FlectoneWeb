---
authors:
  - TheFaser
---

# Maintenance

Integration with the Maintenance plugin allows disabling `MOTD` in `FlectonePulse` when needed, and also disables the `/maintenance` command from `FlectonePulse`.

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#maintenance

<!--@include: @/parts/enable.md-->

### `disable_flectonepulse_maintenance`

Disables the `/maintenance` command in `FlectonePulse`

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.maintenance`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#integrationmaintenance

<!--@include: @/parts/permission/permissionTier3.md-->