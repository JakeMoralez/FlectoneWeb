# Mark

Mark is created using **RMB** with a wooden sword in the main hand  
![mark](/mark.gif)

::: info NOTE  
The sword can be renamed in an anvil to an [available color](#available-colors) (e.g., `RED`) to make the mark colored  
:::

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → mark`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#mark

<!--@include: @/parts/enable.md-->

### `limit`

Prevents placing new marks while an existing one remains

### `color`

Enables colored marks. Rename the sword to one of:  
<!--@include: @/parts/color.md-->

### `range`

Maximum placement distance in blocks

### `duration`

Time in [ticks](https://minecraft.wiki/t/Tick) for the [limit](#limit)

### `item`

Item required to create marks

### `entity`

Mob hitbox used for mark creation

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.mark`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mark

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->
