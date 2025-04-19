---
authors:
  - TheFaser
  - Stokmenn
---

# Format

The module responsible for formatting sent messages

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#format
<<< @/files/localizations/en_us.yml#format
:::

### `url`

Message if it's a link  
![url](/url.png)

### `IMAGE`

Message if it's an image  
![image](/image.png)

### `PING`

Message if it's a ping  
![ping](/ping.png)

### `TPS`

Message if it's TPS  
![tps](/tps.png)

### `ONLINE`

Message if it's online  
![online](/online.png)

### `COORDS`

Message if it's coordinates  
![coords](/coords.png)

### `STATS`

Message if it's statistics  
![stats](/stats.png)

### `SKIN`

Message if it's a skin  
![skin](/skin.png)

### `ITEM`

Message if it's an item  
![item](/item.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#format

<!--@include: @/parts/enable.md-->

### `PING`  
![ping](/ping.png)

### `TPS`  
![tps](/tps.png)

### `ONLINE`  
![online](/online.png)

### `COORDS`  
![coords](/coords.png)

### `STATS`  
![stats](/stats.png)

### `SKIN`  
![skin](/skin.png)

### `ITEM`  
![item](/item.png)

### `URL`  
![url](/url.png)

### `IMAGE`  
![image](/image.png)

### `SPOILER`  
![spoiler](/spoiler.png)

### `BOLD`  
![bold](/bold.png)

### `ITALIC`  
![italic](/italic.png)

### `UNDERLINE`  
![underline](/underline.png)

### `OBFUSCATED`  
![obfuscated](/obfuscated.png)

### `STRIKETHROUGH`  
![strikethrough](/strikethrough.png)

### [Other Kyori tags](https://docs.advntr.dev/minimessage/format.html#standard-tags)

| Tag                      | Usage                                                                    | Description                                                                                      |
|--------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `<hover>`                 | [Hover](https://docs.advntr.dev/minimessage/format.html#hover)           | Text displayed when hovering over                                                                 |
| `<click>`                 | [Click](https://docs.advntr.dev/minimessage/format.html#click)           | Action triggered when clicked                                                                     |
| `<color>`                 | [Color](https://docs.advntr.dev/minimessage/format.html#color)           | Color                                                                                           |
| `<keybind>`               | [Keybind](https://docs.advntr.dev/minimessage/format.html#keybind)       | Key setup for the message                                                                         |
| `<translatable>`          | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Message using the player's locale                                                                |
| `<translatable_fallback>` | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Message with fallback translation using the player's locale                                       |
| `<insertion>`             | [Insertion](https://docs.advntr.dev/minimessage/format.html#insertion)   | Text insertion in chat with SHIFT                                                                  |
| `<font>`                  | [Font](https://docs.advntr.dev/minimessage/format.html#font)             | Change font for text                                                                               |
| `<decoration>`            | [Decoration](https://docs.advntr.dev/minimessage/format.html#decoration) | Standard Minecraft decorations `bold`, `italic`, `underlined`, `strikethrough`, `obfuscated`     |
| `<gradient>`              | [Gradient](https://docs.advntr.dev/minimessage/format.html#gradient)     | Gradient text color                                                                                |
| `<rainbow>`               | [Rainbow](https://docs.advntr.dev/minimessage/format.html#rainbow)       | Rainbow-colored text                                                                               |
| `<reset>`                 | [Reset](https://docs.advntr.dev/minimessage/format.html#reset)           | Reset all tags and decorations                                                                   |
| `<newline>`               | [Newline](https://docs.advntr.dev/minimessage/format.html#newline)       | Newline, replaces `\n`                                                                            |
| `<transition>`            | [Transition](https://docs.advntr.dev/minimessage/format.html#transition) | Transition between two colors                                                                     |
| `<selector>`              | [Selector](https://docs.advntr.dev/minimessage/format.html#selector)     | Mob selector                                                                                     |
| `<score>`                 | [Score](https://docs.advntr.dev/minimessage/format.html#score)           | Team score (scoreboard)                                                                           |
| `<nbt>`                   | [NBT](https://docs.advntr.dev/minimessage/format.html#nbt)               | Insertion of NBT component                                                                        |

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#format

<!--@include: @/parts/permission/permissionTier3.md-->

### `all`

Permission to use all possible formatting options

### `tags`

List of tags and their respective permissions
