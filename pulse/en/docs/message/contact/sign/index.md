# Signature

The signature is created on the item by **Left Click** on the anvil, if the player holds dye in the **offhand** and an item in the **main hand**.
![sign](/sign.gif)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.contact.sign`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#sign
<<< @/files/localizations/en_us.yml#sign
:::

### `format`

The message that will be entered into the item’s description as a signature.

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → contact.sign`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#sign

<!--@include: @/parts/enable.md-->

### `drop-dye`

Enables dropping the dye of the previous signature when the signature is changed.
![resign](/resign.gif)

### `block`

The block that must be clicked for the signature.

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.contact.sign`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#sign

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->
