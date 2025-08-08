---
authors:
  - TheFaser
  - Stokmenn
---

# Color

The tag `fcolor` is used for individual color settings for each player

Usage: `<fcolor:number>`

![color message](/colormessage.png)  

<!--@include: @/parts/fcolor.md--> 

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.fcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#fcolor

<!--@include: @/parts/enable.md-->

### `default-colors`

List of all default colors used. Each number represents a specific color. By default:
- `<fcolor:1>` - primary color
- `<fcolor:2>` - highlighted primary color (e.g. for names)
- `<fcolor:3>` - local chat messages
- `<fcolor:4>` - global chat messages

::: info EXAMPLE COLOR
```yaml
1: "<gradient:#A6D8FF:#8CC8FF>"
```
`1` - color ID for `<gradient:#A6D8FF:#8CC8FF>`  
To use this tag, write `<fcolor:1>`  
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.fcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#fcolor

<!--@include: @/parts/permission/permissionTier3.md-->

### `types`

Available `<fcolor:...>` variants and their required permissions