# Command `/kick`

Command to kick a player from the server
![command kick](/commandkick.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → command.kick`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#kick
<<< @/files/localizations/en_us.yml#kick
:::

### `null-player`

Message displayed if the entered player is not found

### `reasons`

A list with keys and values, where the key is the word and the value is the specific reason

::: tip You can add your own reasons, for example:
```yaml
random_kek: "Random reason"
```
Then, if you type `/kick player random_kek`, the reason will be "Random reason"

If no reason is specified, the `default` will be used.

:::

### `server`

Message displayed to everyone

### `person`

Message displayed to the player

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → kick`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#kick

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.kick`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#kick

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->