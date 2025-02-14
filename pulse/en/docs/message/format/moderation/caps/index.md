# Caps

This formatting removes caps from a message  
![caps](/caps.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.caps`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#caps

<!--@include: @/parts/enable.md-->

### `trigger`

Percentage of letters that should be uppercase for the message to be modified

::: tip HOW TO PROPERLY WRITE PERCENTAGE  
`0.7` is `70%`, and `1.0` is `100%`, i.e. the whole message
:::

<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.caps`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#caps

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Permission to ignore formatting

<!--@include: @/parts/permission/sound.md-->
