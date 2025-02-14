# Mention

This formatting allows mentioning (pinging) someone in a message  
![mention](/mention.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format.mention`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#mention
<<< @/files/localizations/en_us.yml#mention
:::

### `person`

Message to the player when mentioned

### `format`

Message when it is a mention of a player

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.mention`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#mention

<!--@include: @/parts/enable.md-->

### `trigger`

Symbol with which the mention message should start  
::: tip EXAMPLE  
If I want to mention `Flectone`, I should write `@Flectone`  
![mention](/mention.png)
:::

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.mention`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#mention

<!--@include: @/parts/permission/permissionTier3.md-->

### `group`

Permission for mentioning a donation group, for example `@default`

### `bypass`

Permission to ignore mentions

<!--@include: @/parts/permission/sound.md-->
