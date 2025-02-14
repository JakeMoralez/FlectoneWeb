# Removing Signature

The signature is removed by **Left Click** on a grindstone if the player holds an item with a signature in the **main hand**
![unsign](/unsign.gif)

::: info NOTE
A player can only remove their own signature
:::

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → contact.unsign`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#unsign

<!--@include: @/parts/enable.md-->

### `drop-dye`

Enables dropping the dye that was used in the signature
![unsign](/unsign.gif)

### `block`

The block that must be clicked to remove the signature

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.contact.unsign`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#unsign

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->
