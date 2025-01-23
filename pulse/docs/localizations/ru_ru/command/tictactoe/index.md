<!--@include: @/parts/module/command/tictactoe.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > ru_ru.yml > command.tictactoe`

<!--@include: @/parts/module/command/tictactoe.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<ru_ru.command.tictactoe>
```

<!--@include: @/parts/words.md#default-->
```yaml
tictactoe:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  myself: "<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой"
  wrong-game: "<color:#ff7171><b>⁉</b> Этой игры не существует"
  wrong-move: "<color:#ff7171><b>⁉</b> Такой ход невозможен"
  wrong-by-player: "<color:#ff7171><b>⁉</b> Игра закончена, потому что один из игроков не в сети"
  symbol:
    empty: "<hover:show_text:\"<fcolor:1>Ход <move>\"><click:run_command:\"/tictactoe %d <move>\">☐</click></hover>"
    first: "<fcolor:2>☑</fcolor:2>"
    first-remove: "<color:#ff7171>☑</color:#ff7171>"
    first-win: "<color:#98FB98>☑</color:#98FB98>"
    second: "<fcolor:2>☒</fcolor:2>"
    second-remove: "<color:#ff7171>☒</color:#ff7171>"
    second-win: "<color:#98FB98>☒</color:#98FB98>"
  field: "<fcolor:1><br>|[#][#][#]| <title> <current_move> <br>|[#][#][#]| <br>|[#][#][#]| <last_move><br>"
  current-move: "<fcolor:2>☐ → <symbol></fcolor:2>"
  last-move: "<fcolor:2>Последний ход (<move>)</fcolor:2>"
  format-move: "<fcolor:2>Ход <player> </fcolor:2>"
  format-win: "<color:#98FB98><player> выйграл</color:#98FB98>"
  format-draw: "<color:#98FB98>Ничья 👬</color:#98FB98>"
  sender: "<fcolor:1>☐ Предложение сыграть в крестики-нолики отправлено для <display_name>"
  format-create: "<click:run_command:\"/tictactoe %d create\"><fcolor:1>☐ Есть предложение сыграть в крестики-нолики от <display_name>, принять? [+]"
```

<!--@include: @/parts/module/command/tictactoe.md#parameters-->
<!--@include: @/parts/module/command/tictactoe.md#localization-->

