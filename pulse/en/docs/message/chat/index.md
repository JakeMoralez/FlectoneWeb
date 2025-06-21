---
authors:
  - TheFaser
  - Stokmenn
---

# Chat   

A module responsible for messages sent by players in chat  
![chat](/chat.png)

[//]: # (localization)  
<!--@include: @/parts/words.md#localization-->  
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.chat`  

<!--@include: @/parts/words.md#default-->  

::: code-group  
<<< @/files/localizations/ru_ru.yml#chat  
<<< @/files/localizations/en_us.yml#chat  
:::  

### `null-chat`  

Message if nothing was sent to chat  

### `null-recipient`  

Message if no one saw the player's message  

### `types`  

List of chats and their formats  

[//]: # (message.yml)  
<!--@include: @/parts/words.md#setting-->  
<!--@include: @/parts/words.md#path--> `message.yml → chat`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/message.yml#chat  

<!--@include: @/parts/enable.md-->  

### `types`  

List of all chats with their [configuration](#chat-configuration), you can add your own  

## Chat Configuration  

By default, any chat looks like this  

```yaml
chat_name:
  enable: true
  cancel: true
  range: number
  priority: number
  trigger: ""
  null-recipient:
    enable: true
    destination:
      type: ACTION_BAR
      times:
        stay: 60
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```  

### `enable`  

Enables chat functionality  

### `null-recipient`

![null recipient](/nullrecipient.png)

Message if no one saw the player's message

::: details SETTINGS

#### `enable`

Enables the functionality

#### `destination`

Where the message will be sent

:::  

### `cancel`  

- If `true`, the chat event is canceled for other plugins  
- If you need another chat-related plugin (e.g., DiscordSRV) to work, set this to `false`  
- If `false`, this also causes duplication in the console  
  ![chat console](/chatconsole.png)  

<!--@include: @/parts/range.md-->  

### `priority`  

Chat priority, used for selection when mulinfole chats have the same `trigger`. The chat with the higher priority is chosen  

::: info EXAMPLE CHATS  
```yaml
admin:
  priority: 20
  trigger: "!" // [!code highlight]
helper:
  priority: 10
  trigger: "!" // [!code highlight]
```  

If a player has permission for both chats, the plugin will select `admin` because it has a higher `priority`  
:::  

### `trigger`  

The prefix that a message must start with to be sent to a specific chat  

::: info `trigger` VALUE CAN BE ANYTHING:  
- `!`, `admin`, `.f`, etc.  
- Empty, i.e., `trigger: ""`, meaning any message fits this chat  
  :::  

In the final message, `trigger` is removed. For example, if a player sends `!hello`, the result will be `hello` without `!`  

<!--@include: @/parts/destination.md-->  
<!--@include: @/parts/cooldown.md-->  
<!--@include: @/parts/sound.md-->  

[//]: # (permission.yml)  
<!--@include: @/parts/words.md#permission-->  
<!--@include: @/parts/words.md#path--> `permission.yml → message.chat`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/permission.yml#chat  

<!--@include: @/parts/permission/permissionTier3.md-->  

### `types`  

List of chats and their permissions  

- <!--@include: @/parts/permission/cooldown.md-->  
- <!--@include: @/parts/permission/sound.md-->  
