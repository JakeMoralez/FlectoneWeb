# Measurement

The module responsible for the `<world_prefix>` tag, i.e., for the world dimension color  
![world tab](/worldtab.png)  
![world chat](/worldchat.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.world`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#world

<!--@include: @/parts/enable.md-->

### `mode`

The mode for determining the world from the available options

| Mode     | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `TYPE`   | The world is determined by its type name, for example, the normal world is `normal` |
| `NAME`   | The world is determined by the name of its folder                            |

### `values`

List of worlds and their `<world_prefix>`

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.world`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#world

<!--@include: @/parts/permission/permissionTier3.md-->
