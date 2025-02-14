# Colors

The tag `fcolor` is used for individual color settings for each player

Usage: `<fcolor:number>`

![color message](/colormessage.png)  
![color](/color.gif)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.color`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#color

<!--@include: @/parts/enable.md-->

### `use-recipient-colors`

If enabled, any message containing `<fcolor:number>` will be formatted relative to the recipient's colors
![color true](/colortrue.gif)

Otherwise, the color will depend on the sender's colors
![color false](/colorfalse.gif)

### `values`

A list of all used colors, where the number is the key for the default color

::: tip For example, there is a color
```yaml
1: "#ADD8E6"
```
`1` - the number for the color `#ADD8E6` <br><br>
To use this tag, write `<fcolor:1>`
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.color`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#color

<!--@include: @/parts/permission/permissionTier3.md-->
