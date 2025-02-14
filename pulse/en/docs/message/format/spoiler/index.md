# Spoiler

The `spoiler` tag is used to hide a message until the mouse hovers over it

Usage: `<spoiler:message>`

![spoiler message](/spoilermessage.png)  
![spoiler minecraft](/spoilerminecraft.png)  

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.spoiler`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#spoiler
<<< @/files/localizations/en_us.yml#spoiler
:::

### `display`

Responsible for the player's name
![name display](/namedisplay.png)

### `entity`

Responsible for the entity's name

### `unknown`

Responsible for the unknown name

### `prefix`

Prefix displayed with the team name if the nickname is enabled

### `suffix`

Suffix displayed with the team name if the nickname is enabled

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.spoiler`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#spoiler

<!--@include: @/parts/enable.md-->

### `symbol`

Symbol replacing each letter

### `hover`

Message that is shown when hovering over the spoiler

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.spoiler`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#spoiler

<!--@include: @/parts/permission/permissionTier3.md-->
