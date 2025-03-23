# Имя

Модуль, отвечающий за имя игрока
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

Отвечает за имя игрока
![name display](/namedisplay.png)

### `entity`

Отвечает за имя сущности

### `unknown`

Отвечает за неизвестное имя

### `prefix`

Префикс, которой отображается у команды, если включен ник

### `suffix`

Суффикс, которой отображается у команды, если включен ник

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.name_`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#name_

<!--@include: @/parts/enable.md-->

### `team`

::: warning ПРЕДУПРЕЖДЕНИЕ
Если возникают проблемы с `TAB` (например сортировка в ТАБе) или другим плагином, использующим `scoreboard`, нужно выключить этот параметр 
:::

::: warning ПРЕДУПРЕЖДЕНИЕ
Если параметр будет выключен, имена игроков будут видны и модуль `mark` будет работать некорректно
:::

Включает или выключает работу `scoreboard` команд

### `disable-team-on-other-scoreboard`

Автоматически выключает работу `team`, если на сервере установлен другой плагин на `Scoreboard` (например `TAB`)

### `visible`

Включает или выключает ник над игроком

### `color`

Цвет команды игрока из доступных

<!--@include: @/parts/color.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.name_`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#name_

<!--@include: @/parts/permission/permissionTier3.md-->