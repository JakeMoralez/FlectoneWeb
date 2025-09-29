---
authors:
  - TheFaser
  - Stokmenn
---

# Name

Module responsible for the player's name
![name tab](/nametab.png)  
![name display](/namedisplay.png)  

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → message.format.name_`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#name_
<<< @/files/localizations/en_us.yml#name_
:::

### `constant`

A message that will be formatted from the sender on the server where it was sent. It can be used in any message via `<constant>`

::: info NOTE  
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

### `invisible`

Responsible for the player name when under invisibility

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.name_`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#name_

<!--@include: @/parts/enable.md-->

### `should_check_invisibility`

Whether to check if the player is under an invisibility potion effect. If enabled, the name `invisible` will be used

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.name_`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#name_

<!--@include: @/parts/permission/permissionTier3.md-->
