<!--@include: @/parts/module/command/tictactoe.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > command.tictactoe`

<!--@include: @/parts/module/command/tictactoe.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<en_us.command.tictactoe>
```

<!--@include: @/parts/words.md#default-->
```yaml
tictactoe:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  myself: "<color:#ff7171><b>⁉</b> You can't play with yourself"
  wrong-game: "<color:#ff7171><b>⁉</b> This game does not exist"
  wrong-move: "<color:#ff7171><b>⁉</b> This step is not possible"
  wrong-by-player: "<color:#ff7171><b>⁉</b> This game ended because player quit"
  symbol:
    empty: "<hover:show_text:\"<fcolor:1>Move <move>\"><click:run_command:\"/tictactoe %d <move>\">☐</click></hover>"
    first: "<fcolor:2>☑</fcolor:2>"
    first-remove: "<color:#ff7171>☑</color:#ff7171>"
    first-win: "<color:#98FB98>☑</color:#98FB98>"
    second: "<fcolor:2>☒</fcolor:2>"
    second-remove: "<color:#ff7171>☒</color:#ff7171>"
    second-win: "<color:#98FB98>☒</color:#98FB98>"
  field: "<fcolor:1><br>|[#][#][#]| <title> <current_move> <br>|[#][#][#]| <br>|[#][#][#]| <last_move><br>"
  current-move: "<fcolor:2>☐ → <symbol></fcolor:2>"
  last-move: "<fcolor:2>Last move (<move>)</fcolor:2>"
  format-move: "<fcolor:2><player>'s move</fcolor:2>"
  format-win: "<color:#98FB98><player> won this game</color:#98FB98>"
  format-draw: "<color:#98FB98>The game ended in a draw 👬</color:#98FB98>"
  sender: "<fcolor:1>☐ An offer to play was sent to <display_name>"
  format-create: "<click:run_command:\"/tictactoe %d create\"><fcolor:1>☐ Received an invite to play tic-tac-toe with <display_name>, accept? [+]"
```

<!--@include: @/parts/module/command/tictactoe.md#parameters-->
<!--@include: @/parts/module/command/tictactoe.md#localization-->

