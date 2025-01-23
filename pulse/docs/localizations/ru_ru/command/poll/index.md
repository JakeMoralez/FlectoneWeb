<!--@include: @/parts/module/command/poll.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > ru_ru.yml > command.poll`

<!--@include: @/parts/module/command/poll.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<ru_ru.command.poll>
```

<!--@include: @/parts/words.md#default-->
```yaml
poll:
  null-poll: "<color:#ff7171><b>⁉</b> Голосование не найдено"
  expired: "<color:#ff7171><b>⁉</b> Голосование завершено"
  already: "<color:#ff7171><b>⁉</b> Ты уже проголосовал в этом голосовании"
  vote-true: "<color:#4eff52>👍 Ты выбрал <answer_id> в голосовании #<id>. Всего таких голосов <count>"
  vote-false: "<color:#ff4e4e>🖓 Ты передумал об <answer_id> в голосовании #<id>. Всего таких голосов <count> без тебя"
  count-answers: "<color:#4eff52><bold><count></bold> за [<answer_key>] - <answer_value> <br>"
  vote-button: "<color:#4eff52><hover:show_text:\"<color:#4eff52>Проголосовать за <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>"
  format-start: "<br><color:#fce303>🗐 Создано голосование #<id> <br>❓ <message> <br><answers>"
  format-over: "<br><color:#fce303>🗐 Голосование #<id> завершено <br>❓ <message> <br>Результат: <br><answers>"
```

<!--@include: @/parts/module/command/poll.md#parameters-->
<!--@include: @/parts/module/command/poll.md#localization-->


