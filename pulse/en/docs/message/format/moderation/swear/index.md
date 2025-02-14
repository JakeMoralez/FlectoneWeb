# Swear

This formatting hides the player's profanity  
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

Symbol that replaces each letter of the profanity

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.swear`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#swear

<!--@include: @/parts/enable.md-->

### `trigger`

List of [regular expressions](https://javarush.com/groups/posts/regulyarnye-vyrazheniya-v-java) to identify profanity

<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.swear`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#swear

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Permission to ignore formatting

### `see`

Permission to view the content of the forbidden word

<!--@include: @/parts/permission/sound.md-->
