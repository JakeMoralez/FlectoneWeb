<!--@include: @/parts/module/message/contact/afk.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > ru_ru.yml > message.contact.afk`

<!--@include: @/parts/module/message/contact/afk.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<ru_ru.message.contact.afk>
```

<!--@include: @/parts/words.md#default-->
```yaml
afk:
  suffix: " <color:#FFFF00>⌚</color>"
  format-true:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> отошёл"
    local: "<gradient:#ffd500:#FFFF00>⌚ Ты отошёл от игры"
  format-false:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> вернулся"
    local: "<gradient:#ffd500:#FFFF00>⌚ Ты вернулся в игру"
```

<!--@include: @/parts/module/message/contact/afk.md#parameters-->
<!--@include: @/parts/module/message/contact/afk.md#localization-->