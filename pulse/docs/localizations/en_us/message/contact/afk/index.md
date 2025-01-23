<!--@include: @/parts/module/message/contact/afk.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > message.contact.afk`

<!--@include: @/parts/module/message/contact/afk.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<en_us.message.contact.afk>
```

<!--@include: @/parts/words.md#default-->
```yaml
afk:
  suffix: " <color:#FFFF00>⌚</color>"
  format-true:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> is now afk"
    local: "<gradient:#ffd500:#FFFF00>⌚ Now you're afk"
  format-false:
    global: "<gradient:#ffd500:#FFFF00>⌚ <player> isn't afk now"
    local: "<gradient:#ffd500:#FFFF00>⌚ Now you're not afk"
```

<!--@include: @/parts/module/message/contact/afk.md#parameters-->
<!--@include: @/parts/module/message/contact/afk.md#localization-->