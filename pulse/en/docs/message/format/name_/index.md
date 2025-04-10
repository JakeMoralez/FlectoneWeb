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

### `constant`

A message that will be formatted from the sender on the server where it was sent. It can be used in any message via `<constant>`

::: tip NOTE  
If you're experiencing issues with messages on `Velocity` or `BungeeCord`, this is the solution to your problem:

```yaml
constant: "%player_name%"
display: "<constant>"
```  
:::

### `display`

Responsible for the player's name
![name display](/namedisplay.png)

### `entity`

Responsible for the entity's name

### `unknown`

Responsible for unknown entity name

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.name_`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#name_

<!--@include: @/parts/enable.md-->

### `team`

::: warning WARNING  
If there are issues with `TAB` (e.g., sorting in TAB) or another plugin that uses the `scoreboard`, this parameter needs to be turned off  
:::

::: warning WARNING  
If the parameter is turned off, player names will be visible, and the `mark` module will not work correctly  
:::

Enables or disables the use of `scoreboard` commands

### `disable-team-on-other-scoreboard`

Automatically disables the `team` feature if another `Scoreboard` plugin (e.g., `TAB`) is installed on the server

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
