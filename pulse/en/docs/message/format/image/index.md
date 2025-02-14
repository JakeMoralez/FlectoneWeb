# Image

The `image` tag is used to display images.

Usage: `<image:url> message </image>`

![image message](/imagemessage.png)  
![image minecraft](/imageminecraft.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.image`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#image

<!--@include: @/parts/enable.md-->

### `color`

Defines the color of the message containing the link.

::: tip EXAMPLE
`<image:url> house </image>`

Here, `house` will have the color `<fcolor:2>`

:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.image`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#image

<!--@include: @/parts/permission/permissionTier3.md-->
