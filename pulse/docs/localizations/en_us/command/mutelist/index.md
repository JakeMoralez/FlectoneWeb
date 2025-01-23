<!--@include: @/parts/module/command/mutelist.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > command.mutelist`

<!--@include: @/parts/module/command/mutelist.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<en_us.command.mutelist>
```

<!--@include: @/parts/words.md#default-->
```yaml
mutelist:
  empty: "<color:#98FB98>☺ No mutes found"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  global:
    header: "<fcolor:2>▋ Mutes: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Moderator: <moderator><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ All mutes: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Moderator: <moderator><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

<!--@include: @/parts/module/command/mutelist.md#parameters-->
<!--@include: @/parts/module/command/mutelist.md#localization-->

