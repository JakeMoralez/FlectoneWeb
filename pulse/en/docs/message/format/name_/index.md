# Name

Module responsible for the player's name
![name tab](/nametab.png)  
![name display](/namedisplay.png)  

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.name_`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#name_
<<< @/files/localizations/en_us.yml#name_
:::

### `display`

Responsible for the player's name
![name display](/namedisplay.png)

### `entity`

Responsible for the entity's name

### `unknown`

Responsible for unknown name

### `prefix`

Prefix displayed with the name if the nickname is enabled

### `suffix`

Suffix displayed with the name if the nickname is enabled

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.name_`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#name_

<!--@include: @/parts/enable.md-->

### `team`

Enables or disables the use of `scoreboard` commands

### `visible`

Enables or disables the name tag above the player

### `color`

Player's team color from the available options

<!--@include: @/parts/color.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.name_`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#name_

<!--@include: @/parts/permission/permissionTier3.md-->
