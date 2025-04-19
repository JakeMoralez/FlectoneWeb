---
authors:
  - TheFaser
---

# Ругательство

Это форматирование скрывает ругательство игрока
![swear](/swear.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.moderation.swear`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#swear
<<< @/files/localizations/en_us.yml#swear
:::

### `symbol`

Символ, которым заменяется каждая буква ругательства

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.swear`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#swear

<!--@include: @/parts/enable.md-->

### `trigger`

Список [регулярных выражений](https://javarush.com/groups/posts/regulyarnye-vyrazheniya-v-java) для того, чтобы определять ругательство

::: info НАПРИМЕР
- Для цифренного айпи `\\b((?:\\d{1,3}\\.){3}\\d{1,3})\\b`
- Для буквенного айпи `(?i)\\b((https?:\\/\\/)?([\\w\\.а-яА-Я-]+\\.([a-z]{2,4}|[рР][фФ]|[уУ][кК][рР]))\\b(:\\d{2,7})?(\\/\\S+)?)`
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.swear`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#swear

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Право для игнорирования форматирования

### `see`

Право для просмотра содержимого в запрещённом слове