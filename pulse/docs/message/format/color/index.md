# Цвета

Тег `fcolor` используется для индивидуальных настроек цвета у каждого игрока

Использование: `<fcolor:номер>`

![color message](/colormessage.png)  
![color](/color.gif)  

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.color`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#color

<!--@include: @/parts/enable.md-->

### `use-recipient-colors`

Если включено, то любое сообщение, которое содержит `<fcolor:номер>`, будет отформатировано относительно получателя
![color true](/colortrue.gif)

Иначе цвет будет зависеть от цветов отправителя
![color false](/colorfalse.gif)

### `values`

Список всех используемых цветов, где номер является ключом к цвету по умолчанию

::: tip Например есть цвет
```yaml
1: "#ADD8E6"
```
`1` - номер для цвета `#ADD8E6` <br><br>
Чтобы такой тег использовать, нужно писать `<fcolor:1>`
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.color`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#color

<!--@include: @/parts/permission/permissionTier3.md-->