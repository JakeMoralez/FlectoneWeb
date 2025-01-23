<!--@include: @/parts/module/command/mutelist.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > ru_ru.yml > command.mutelist`

<!--@include: @/parts/module/command/mutelist.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<ru_ru.command.mutelist>
```

<!--@include: @/parts/words.md#default-->
```yaml
mutelist:
  empty: "<color:#98FB98>☺ Муты не найдены"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  global:
    header: "<fcolor:2>▋ Муты: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Размутить <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ Все муты: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Размутить <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

<!--@include: @/parts/module/command/mutelist.md#parameters-->
<!--@include: @/parts/module/command/mutelist.md#localization-->

