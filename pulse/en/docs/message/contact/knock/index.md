# Knocks

Knocks are created using **SHIFT** + **LMB** on specific blocks  

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → contact.knock`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#knock

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/cooldown.md-->

### `variants`

List of knocks with their sounds  

Block names can be partial (only need to contain a keyword)

::::: tip EXAMPLE FOR ALL GLASS TYPES  
Using `GLASS` as it exists in all glass-related block names:  

```yaml
- type: "GLASS"
  sound:
    enable: true
    volume: 1.0
    pitch: 1.0
    category: "BLOCK"
    name: "minecraft:block.glass.place"
```
:::::

<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.contact.knock`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#knock

<!--@include: @/parts/permission/permissionTier3.md-->

### `variants`

Knock variants and their permissions  

<!--@include: @/parts/permission/cooldown.md-->
