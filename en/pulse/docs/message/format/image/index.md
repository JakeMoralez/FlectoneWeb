# Изображение

Тег `image` используется для отображения изображений

Использование: `<image:ссылка> сообщение </image>`

![image message](/imagemessage.png)  
![image minecraft](/imageminecraft.png)  

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.image`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#image

<!--@include: @/parts/enable.md-->

### `color`

Определяет цвет сообщения, содержащее ссылку

::: tip ПРИМЕР
`<image:ссылка> дом </image>`

Здесь `дом` будет иметь цвет `<fcolor:2>`

:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.image`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#image

<!--@include: @/parts/permission/permissionTier3.md-->