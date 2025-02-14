# Discord

Integration with Discord allows sending messages:
- From Minecraft to Discord
- From Discord to Minecraft

![discord message](/discordmessage.png)
![minecraft message](/discordminecraftmessage.png)

<!--@include: @/parts/messageTag.md-->

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → integration.discord`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#discord
<<< @/files/localizations/en_us.yml#discord
:::

### `Placeholders`

You can use all the placeholders that are used in the initial Minecraft message
::: tip FOR EXAMPLE, FOR A BAN MESSAGE
If there’s a placeholder `<reason>`, you can use `<reason>` in Discord messages as well
:::

There are also placeholders that will ALWAYS be replaced in any message:
- `<final_message>` The message sent to Minecraft
- `<final_clear_message>` The message sent to Minecraft without Unicode emojis
- `<player>` The nickname of the player who sent the message

Obviously, all placeholders from `PlaceholderAPI` and `FlectonePulse` will also work.

### `for-minecraft`

Message format that will be sent from Discord to Minecraft.

### `info-channel`

List of channel IDs and their names.

### `message-channel`

List of messages and their configurations.

::: details Message Configuration

![discord](https://docs.discord4j.com/img/embed-preview.png)

If the parameter is empty, it will not be used in the final message.

#### `content`

Content of a regular message from the Discord bot.
![discord content](/discordcontent.png)

#### `webhook`

Discord webhook configuration.
![discord webhook](/discordwebhook.png)

##### `enable`

If enabled, the message will be a webhook.

##### `avatar`

Link to create the player’s avatar. If you change it, the link should contain `<skin>`.

##### `content`

Content of the webhook message.

#### `embed`

Discord embed message configuration.
![discord embed](/discordembed.png)

##### `enable`

If enabled, the message will include an embed.

##### `color`

Color of the embed message.

##### `title`

Title of the embed message.

##### `url`

URL for the embed message.

##### `author`

Author of the embed message.

###### `name`

Name of the embed message author.

###### `url`

URL of the embed message author.

###### `icon-url`

Link to the avatar of the embed message author. If you change it, the link should contain `<skin>`.

##### `description`

Description of the embed message.

##### `thumbnail`

Small image inside the embed message.

###### `name`

Field name inside the embed message.

###### `value`

Field value inside the embed message.

###### `inline`

If enabled, the field will be arranged vertically with other fields.

##### `image`

Main image inside the embed message.

##### `timestamp`

If enabled, the embed message will include the timestamp.

##### `footer`

Footer of the embed message.

###### `text`

Text in the footer of the embed message.

###### `icon-url`

Image in the footer of the embed message.

:::

::: tip IF YOU WANT TO ADD ANOTHER MESSAGE:
1. Take the name from the "Message Types" list.
2. Add it to `message-channel`.
```yaml
message_name:
  content: ""
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
    fields:
      - name: ""
        value: ""
        inline: false
    image: ""
    timestamp: true
    footer:
      text: ""
      icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
```
:::

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → discord`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#discord

<!--@include: @/parts/enable.md-->

::: warning WARNING
- Before enabling, insert the **Discord bot token**.
- After enabling, **IT IS RECOMMENDED** to restart the server to avoid potential plugin issues.
  :::

### `token`

[Discord bot token](https://discordgsm.com/guide/how-to-get-a-discord-bot-token) for connection. You can use environment variables, for example `${VALUE}`.

### `presence`

![discord presence](/discordpresence.png)

::: details Bot Status Configuration
#### `enable`

Enables or disables the custom bot status.

#### `status`

| Mode            | Explanation                    |
|-----------------|--------------------------------|
| `UNKNOWN`       | -                              |
| `ONLINE`        | Online                         |
| `DO_NOT_DISTURB`| Do not disturb (Online)        |
| `IDLE`          | Online but idle                |
| `INVISIBLE`     | Invisible                      |
| `OFFLINE`       | Offline                        |

#### `activity`

Bot activity in Discord.

##### `enable`

Enables or disables activity.

##### `type`

| Type       | Explanation   |
|------------|---------------|
| `UNKNOWN`  | -             |
| `STREAMING`| Streaming     |
| `LISTENING`| Listening     |
| `WATCHING` | Watching      |
| `CUSTOM`   | -             |
| `COMPETING`| Competing     |

##### `name`

Name of the activity.

##### `url`

Link for the activity.

:::

### `channel-info`

![discord channel info](/discordchannelinfo.png)

::: details Channel Information Configuration
#### `enable`

Whether channel information is needed.

<!--@include: @/parts/ticker.md-->

:::

### `message-channel`

List of message types and [channel IDs](https://support.discord.com/hc/ru/articles/206346498-%D0%93%D0%94%D0%95-%D0%9C%D0%9D%D0%95-%D0%9D%D0%90%D0%99%D0%A2%D0%98-ID-%D0%9F%D0%9E%D0%9B%D0%AC%D0%97%D0%9E%D0%92%D0%90%D0%A2%D0%95%D0%9B%D0%AF-%D0%A1%D0%95%D0%A0%D0%92%D0%95%D0%A0%D0%90-%D0%A1%D0%9E%D0%9E%D0%91%D0%9A%D0%9E%D0%92) in Discord.

::: tip For example, if I want a `/ban` command message from Minecraft to be sent to Discord:
1. Copy the channel ID in Discord `1286666844358316083`.
2. Add `CHAT: "1286666844358316083"`.

```yaml
message-channel:
  COMMAND_BAN: "1286666844358316083" // [!code highlight]
```
:::

<!--@include: @/parts/destination.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.discord`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#discord

<!--@include: @/parts/permission/permissionTier3.md-->