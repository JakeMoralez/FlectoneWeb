<!--@include: @/parts/module/message/advancement.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > ru_ru.yml > message.advancement`

<!--@include: @/parts/module/message/advancement.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<ru_ru.message.advancement>
```

<!--@include: @/parts/words.md#default-->
```yaml
advancement:
  task:
    format: "<color:#4eff52>🌠 <fcolor:2><display_name> <fcolor:1>получил достижение <advancement>"
    tag: "<color:#4eff52>[<hover:show_text:\"<color:#4eff52><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  goal:
    format: "<color:#FFFF00>🌠 <fcolor:2><display_name> <fcolor:1>выполнил цель <advancement>"
    tag: "<color:#FFFF00>[<hover:show_text:\"<color:#FFFF00><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  challenge:
    format: "<color:#834eff>🌠 <fcolor:2><display_name> <fcolor:1>завершил испытание <advancement>"
    tag: "<color:#834eff>[<hover:show_text:\"<color:#834eff><lang:<title>> <br><lang:<description>>\"><lang:<title>></hover>]"
  revoke:
    many-to-one: "<fcolor:1>🌠 Отозвано <fcolor:2><number></fcolor:2> достижений у игрока <display_name>"
    one-to-one: "<fcolor:1>🌠 Отозвано достижение <fcolor:2><advancement></fcolor:2> у игрока <display_name>"
  grant:
    many-to-one: "<fcolor:1>🌠 Выдано <fcolor:2><number></fcolor:2> достижений игроку <display_name>"
    one-to-one: "<fcolor:1>🌠 Достижение <fcolor:2><advancement></fcolor:2> выдано игроку <display_name>"
```

<!--@include: @/parts/module/message/advancement.md#parameters-->
<!--@include: @/parts/module/message/advancement.md#localization-->

