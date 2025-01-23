<!--@include: @/parts/module/command/ignorelist.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > command.ignorelist`

<!--@include: @/parts/module/command/ignorelist.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<en_us.command.ignorelist>
```

<!--@include: @/parts/words.md#default-->
```yaml
ignorelist:
  empty: "<color:#98FB98>☺ You don't ignore anyone"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  header: "<fcolor:2>▋ Ignores: <count><br>"
  line: "<hover:show_text:\"<fcolor:1>Click to unignore <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1>Date: <date>"
  footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

<!--@include: @/parts/module/command/ignorelist.md#parameters-->
<!--@include: @/parts/module/command/ignorelist.md#localization-->

