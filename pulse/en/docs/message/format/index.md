---
authors:
  - TheFaser
  - Stokmenn
---

# Format

The module responsible for formatting sent messages

[//]: # (localization)
<!--@include: @/parts/words.md#localization-->
<!--@include: @/parts/words.md#path--> `localizations → locale.yml → message.format`

<!--@include: @/parts/words.md#default-->

::: code-group
<<< @/files/localizations/ru_ru.yml#format
<<< @/files/localizations/en_us.yml#format
:::

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#format

<!--@include: @/parts/enable.md-->

### `adventure-tags`

These are [Kyori tags](https://docs.advntr.dev/minimessage/format.html#standard-tags) that may appear in messages.

| Tag                       | Usage                                                                        | Description                                                                                  |
|---------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `<hover>`                 | [Hover](https://docs.advntr.dev/minimessage/format.html#hover)               | Text displayed when hovering over                                                            |
| `<click>`                 | [Click](https://docs.advntr.dev/minimessage/format.html#click)               | Action triggered when clicked                                                                |
| `<color>`                 | [Color](https://docs.advntr.dev/minimessage/format.html#color)               | Color                                                                                        |
| `<keybind>`               | [Keybind](https://docs.advntr.dev/minimessage/format.html#keybind)           | Key setup for the message                                                                    |
| `<translatable>`          | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Message using the player's locale                                                            |
| `<translatable_fallback>` | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Message with fallback translation using the player's locale                                  |
| `<insertion>`             | [Insertion](https://docs.advntr.dev/minimessage/format.html#insertion)       | Text insertion in chat with SHIFT                                                            |
| `<font>`                  | [Font](https://docs.advntr.dev/minimessage/format.html#font)                 | Change font for text                                                                         |
| `<decoration>`            | [Decoration](https://docs.advntr.dev/minimessage/format.html#decoration)     | Standard Minecraft decorations `bold`, `italic`, `underlined`, `strikethrough`, `obfuscated` |
| `<gradient>`              | [Gradient](https://docs.advntr.dev/minimessage/format.html#gradient)         | Gradient text color                                                                          |
| `<rainbow>`               | [Rainbow](https://docs.advntr.dev/minimessage/format.html#rainbow)           | Rainbow-colored text                                                                         |
| `<reset>`                 | [Reset](https://docs.advntr.dev/minimessage/format.html#reset)               | Reset all tags and decorations                                                               |
| `<newline>`               | [Newline](https://docs.advntr.dev/minimessage/format.html#newline)           | Newline, replaces `\n`                                                                       |
| `<transition>`            | [Transition](https://docs.advntr.dev/minimessage/format.html#transition)     | Transition between two colors                                                                |
| `<selector>`              | [Selector](https://docs.advntr.dev/minimessage/format.html#selector)         | Mob selector                                                                                 |
| `<score>`                 | [Score](https://docs.advntr.dev/minimessage/format.html#score)               | Team score (scoreboard)                                                                      |
| `<nbt>`                   | [NBT](https://docs.advntr.dev/minimessage/format.html#nbt)                   | Insertion of NBT component                                                                   |
| ...                       | ...                                                                          | ...                                                                                          |

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#format

<!--@include: @/parts/permission/permissionTier3.md-->

### `all`

Permission to use all available formatting options (all modules inside `format`)

::: info EXAMPLE

This will allow players to use `&c` in their messages, and it will be formatted as a color code

:::

### `adventure-tags`

List of tags and their respective permissions
