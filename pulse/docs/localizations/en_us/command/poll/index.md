<!--@include: @/parts/module/command/poll.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > command.poll`

<!--@include: @/parts/module/command/poll.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<en_us.command.poll>
```

<!--@include: @/parts/words.md#default-->
```yaml
poll:
  null-poll: "<color:#ff7171><b>⁉</b> This poll does not exist"
  expired: "<color:#ff7171><b>⁉</b> This poll has already ended"
  already: "<color:#ff7171><b>⁉</b> You've already voted in this poll"
  vote-true: "<color:#4eff52>👍 You voted for <answer_id> in poll #<id>. There are <count> of you"
  vote-false: "<color:#ff4e4e>🖓 You rejected <answer_id> in poll #<id>. There are <count> without you"
  count-answers: "<color:#4eff52><bold><count></bold> for [<answer_key>] - <answer_value> <br>"
  vote-button: "<color:#4eff52><hover:show_text:\"<color:#4eff52>Vote for <bold><answer_key>\"><click:run_command:\"/poll vote <id> <number>\">[<answer_key>] - <answer_value> <br>"
  format-start: "<br><color:#fce303>🗐 There's a poll #<id> going on right now <br>❓ <message> <br><answers>"
  format-over: "<br><color:#fce303>🗐 Poll #<id> is over <br>❓ <message> <br>Votes: <br><answers>"
```

<!--@include: @/parts/module/command/poll.md#parameters-->
<!--@include: @/parts/module/command/poll.md#localization-->


