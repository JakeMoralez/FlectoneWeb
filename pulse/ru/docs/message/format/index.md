---
authors:
  - TheFaser
---

# Форматирование

Модуль, форматирующий отправленные сообщения

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#format

<!--@include: @/parts/enable.md-->


### `adventure-tags`

Это [Kyori теги](https://docs.advntr.dev/minimessage/format.html#standard-tags), которые могут быть в сообщениях

| Тег                       | Использование                                                                | Описание                                                                                        |
|---------------------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| `<hover>`                 | [Hover](https://docs.advntr.dev/minimessage/format.html#hover)               | Текст при наведении                                                                             |
| `<click>`                 | [Click](https://docs.advntr.dev/minimessage/format.html#click)               | Действие при нажатии                                                                            |
| `<color>`                 | [Color](https://docs.advntr.dev/minimessage/format.html#color)               | Цвет                                                                                            |
| `<keybind>`               | [Keybind](https://docs.advntr.dev/minimessage/format.html#keybind)           | Настройка клавиш для сообщения                                                                  |
| `<translatable>`          | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                        |
| `<translatable_fallback>` | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                        |
| `<insertion>`             | [Insertion](https://docs.advntr.dev/minimessage/format.html#insertion)       | Вставка текста в чат с помощью ШИФТ                                                             |
| `<font>`                  | [Font](https://docs.advntr.dev/minimessage/format.html#font)                 | Изменение шрифта текста                                                                         |
| `<decoration>`            | [Decoration](https://docs.advntr.dev/minimessage/format.html#decoration)     | Стандартные украшения майнкрафта `bold`, `italic`, `underlined`, `strikethrough`, `obfuscated`  |
| `<gradient>`              | [Gradient](https://docs.advntr.dev/minimessage/format.html#gradient)         | Градиентный цвет текста                                                                         |
| `<rainbow>`               | [Rainbow](https://docs.advntr.dev/minimessage/format.html#rainbow)           | Радужный цвет текста                                                                            |
| `<reset>`                 | [Reset](https://docs.advntr.dev/minimessage/format.html#reset)               | Сброс всех тегов и декораций                                                                    |
| `<newline>`               | [Newline](https://docs.advntr.dev/minimessage/format.html#newline)           | Переход на новую строку, замена `\n`                                                            |
| `<transition>`            | [Transition](https://docs.advntr.dev/minimessage/format.html#transition)     | Переход между двумя цветами                                                                     |
| `<selector>`              | [Selector](https://docs.advntr.dev/minimessage/format.html#selector)         | Селектор мобов                                                                                  |
| `<score>`                 | [Score](https://docs.advntr.dev/minimessage/format.html#score)               | Значение у команды (scoreboard)                                                                 |
| `<nbt>`                   | [NBT](https://docs.advntr.dev/minimessage/format.html#nbt)                   | Вставка NBT компонента                                                                          |
| ...                       | ...                                                                          | ...                                                                                             |

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#format

<!--@include: @/parts/permission/permissionTier3.md-->

### `all`

Право для использования всех возможных форматирований, т.е. всех модулей внутри `format`

::: info НАПРИМЕР

Это позволит игроку использовать `&c` в своих сообщениях и оно будет форматироваться, как цвет

:::

### `adventure-tags`

Список тегов и их прав для использования