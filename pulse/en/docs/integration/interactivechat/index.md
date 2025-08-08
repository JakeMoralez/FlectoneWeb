---
authors:
  - TheFaser
---

# InteractiveChat

Integration with the `InteractiveChat` plugin properly formats custom placeholders from `InteractiveChat`

::: warning WARNING

There is no and will be no full support for `InteractiveChat`. If achievements, death messages etc. aren't displaying, this is an `InteractiveChat` issue caused by its modification of all packets. This can be fixed by disabling certain features in the `InteractiveChat` config itself.

:::

::: warning WARNING

With `InteractiveChat` enabled, the message deletion module won't work or messages may get duplicated.

:::

Personal advice from me, the author of `FlectonePulse`: don't use `InteractiveChat` on your server until its author decides to code it properly. It literally creates noticeable delays in chat messages.

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → interactivechat`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#interactivechat

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.interactivechat`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#interactivechat

<!--@include: @/parts/permission/permissionTier3.md-->