<!--@include: @/parts/module/command/rockpaperscissors.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > ru_ru.yml > command.rockpaperscissors`

<!--@include: @/parts/module/command/rockpaperscissors.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<ru_ru.command.rockpaperscissors>
```

<!--@include: @/parts/words.md#default-->
```yaml
rockpaperscissors:
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  null-game: "<color:#ff7171><b>⁉</b> Этой игры не существует"
  wrong-move: "<color:#ff7171><b>⁉</b> Такой ход невозможен"
  already: "<color:#ff7171><b>⁉</b> Ты уже сходил"
  myself: "<color:#ff7171><b>⁉</b> Ты не можешь играть с самим собой"
  sender: "<fcolor:2>✂ <fcolor:1>Теперь ходит <display_name>"
  receiver: "<fcolor:2>✂ <display_name> <fcolor:1>предложил сыграть в камень-ножницы-бумага"
  format-move: "<fcolor:2>✂ <fcolor:1>Выбери свой ход <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 камень]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ ножницы]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 бумага]</click>"
  format-win: "<color:#98FB98>✂ Выйграл <display_name>! <b><sender_move></b> на <b><receiver_move></b>"
  format-draw: "<color:#98FB98>✂ Ничья! Вы оба выбрали <b><move>"
  strategies:
    paper: "бумага"
    scissors: "ножницы"
    rock: "камень"
```

<!--@include: @/parts/module/command/rockpaperscissors.md#parameters-->
<!--@include: @/parts/module/command/rockpaperscissors.md#localization-->


