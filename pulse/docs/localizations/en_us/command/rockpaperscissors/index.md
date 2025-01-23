<!--@include: @/parts/module/command/rockpaperscissors.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > command.rockpaperscissors`

<!--@include: @/parts/module/command/rockpaperscissors.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<en_us.command.rockpaperscissors>
```

<!--@include: @/parts/words.md#default-->
```yaml
rockpaperscissors:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-game: "<color:#ff7171><b>⁉</b> This game does not exist"
  wrong-move: "<color:#ff7171><b>⁉</b> This move is not possible"
  already: "<color:#ff7171><b>⁉</b> You've already made your move"
  myself: "<color:#ff7171><b>⁉</b> You can't play with yourself"
  sender: "<fcolor:1>Now goes <display_name>"
  receiver: "<fcolor:2>✂ <display_name> <fcolor:1>suggested a game of rock-paper-scissors"
  format-move: "<fcolor:2>✂ <fcolor:1>Choose your move <fcolor:2><click:run_command:\"/rps <target> rock <uuid>\">[🪨 rock]</click> <click:run_command:\"/rps <target> scissors <uuid>\">[✂ scissors]</click> <click:run_command:\"/rps <target> paper <uuid>\">[🧻 paper]</click>"
  format-win: "<color:#98FB98>✂ Winning <player>! <b><sender_move></b> on <b><receiver_move></b>"
  format-draw: "<color:#98FB98>✂ It's a draw! You both chose <b><move>"
  strategies:
    paper: "paper"
    rock: "rock"
    scissors: "scissors"
```

<!--@include: @/parts/module/command/rockpaperscissors.md#parameters-->
<!--@include: @/parts/module/command/rockpaperscissors.md#localization-->


