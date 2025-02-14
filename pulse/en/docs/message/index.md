# Messages

Configuration of messages in `FlectonePulse` (why they appear and how)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#en_us
<<< @/files/localizations/en_us.yml#en_us
:::

### `cooldown`

Message displayed when used too frequently, if `cooldown` is enabled

### `time`

Time messages

- #### `format`

Time formatting ([Apache DurationFormatUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html))

- #### `permanent`

Time formatting if it is `-1`, i.e., forever

- #### `zero`

Time formatting if it equals zero

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#message

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#message

<!--@include: @/parts/permission/permissionTier3.md-->
