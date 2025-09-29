---
authors:
  - TheFaser
  - Stokmenn
---

# MOTD

::: warning ATTENTION  
This is an integration with another plugin `MOTD`. You can configure `MOTD` itself [here](/docs/message/status/motd/)  
:::

Integration with `MOTD` disables the [Status](/docs/message/status/) module in `FlectonePulse`

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->  
<!--@include: @/parts/words.md#path--> `integration.yml → motd`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/integration.yml#motd

<!--@include: @/parts/enable.md-->  

### `disable_flectonepulse_status`
Disables the [Status](/docs/message/status/) module

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->  
<!--@include: @/parts/words.md#path--> `permission.yml → integration.motd`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/permission.yml#motd

<!--@include: @/parts/permission/permissionTier3.md-->