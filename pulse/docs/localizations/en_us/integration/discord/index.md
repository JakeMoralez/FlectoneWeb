<!--@include: @/parts/module/integration/discord.md#title-->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > integration.discord`

<!--@include: @/parts/module/integration/discord.md#explanation-->

<!--@include: @/parts/words.md#edit-->
```yaml
<en_us.integration.discord>
```

<!--@include: @/parts/words.md#default-->
```yaml
discord:
  for-minecraft: "<fcolor:2><name> <fcolor:1>» <fcolor:4><message>"
  info-channel:
    id: "TPS <tps>"
  message-channel:
    CHAT:
      content: "<final_message>"
      webhook:
        enable: false
        avatar: "https://mc-heads.net/avatar/<skin>/32.png"
        content: ""
      embed:
        enable: false
        color: ""
        title: ""
        url: ""
        author:
          name: ""
          url: ""
          icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
        description: ""
        thumbnail: ""
        image: ""
        timestamp: true
        footer:
          text: ""
          icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
```

<!--@include: @/parts/module/integration/discord.md#parameters-->
<!--@include: @/parts/module/integration/discord.md#localization-->
