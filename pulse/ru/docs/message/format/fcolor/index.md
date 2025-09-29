---
authors:
  - TheFaser
---

# Цвета

Тег `fcolor` используется для индивидуальных настроек цвета у каждого игрока

Использование: `<fcolor:номер>`

![color message](/colormessage.png)  

<!--@include: @/parts/fcolor.md--> 

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.fcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#fcolor

<!--@include: @/parts/enable.md-->

### `default_colors`

Список всех используемых цветов по умолчанию. Каждая цифра обозначает конкретный цвет, по умолчанию: `<fcolor:1>` используется для основного цвета, `<fcolor:2>` используется для основного цвета с выделением (например имени), `<fcolor:3>` для сообщений в локальном чате, `<fcolor:4>` для сообщений в глобальном чате.

::: info Например есть цвет
```yaml
1: "<gradient:#A6D8FF:#8CC8FF>"
```
`1` - номер для цвета `<gradient:#A6D8FF:#8CC8FF>` <br><br>
Чтобы такой тег использовать, нужно писать `<fcolor:1>`
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.fcolor`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#fcolor

<!--@include: @/parts/permission/permissionTier3.md-->

### `colors`

Варианты `<fcolor:...>` и их права