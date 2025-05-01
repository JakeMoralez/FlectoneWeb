---
authors:
  - TheFaser
  - Stokmenn
---

# `/translateto`

Command to translate a message from one language to another
![command translateto](/commandtranslateto.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → command.translateto`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#translateto
<<< @/files/localizations/en_us.yml#translateto
:::

### `null-or-error`

Message if there was an error during translation

### `format`

Format for the message to be sent after translation

[//]: # (command.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `command.yml → translateto`

<!--@include: @/parts/words.md#default-->
<<< @/files/command.yml#translateto

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `service`

Translation API to be used (`DEEPL`, `GOOGLE`, `YANDEX`)

::: danger Attention
`DEEPL` and `YANDEX` require **tokens** and additional setup in `integration.yml`
:::

<!--@include: @/parts/aliases.md-->

### `languages`

List of supported languages used for suggestions during the command

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → command.translateto`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#translateto

<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->