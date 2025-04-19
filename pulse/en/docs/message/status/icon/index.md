---
authors:
  - TheFaser
  - Stokmenn
---

# Icon

Module responsible for the server image
![server icon](/servericon.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → status.icon`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#icon

<!--@include: @/parts/enable.md-->

### `random`

If enabled, the image will be selected randomly, otherwise in order

### `values`

`server-icon-1.png` ![server icon 1](/server-icon-1.png)


`server-icon-2.png` ![server icon 2](/server-icon-2.png)

List of image names to be displayed

::: danger IMAGE MUST
1. Be located inside the `/FlectonePulse/images/` folder
2. Have the size **ONLY** `64x64`
   :::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.status.icon`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#icon

<!--@include: @/parts/permission/permissionTier3.md-->
