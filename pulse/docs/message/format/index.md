# Форматирование

Модуль, форматирующий отправленные сообщения

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.format`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#format
<<< @/files/localizations/en_us.yml#format
:::

### `url`

Сообщение, если это ссылка
![url](/url.png)

### `IMAGE`

Сообщение, если это изображение
![image](/image.png)

### `PING`

Сообщение, если это пинг
![ping](/ping.png)

### `TPS`

Сообщение, если это ТПС
![tps](/tps.png)

### `ONLINE`

Сообщение, если это онлайн
![online](/online.png)

### `COORDS`

Сообщение, если это координаты
![coords](/coords.png)

### `STATS`

Сообщение, если это статистика
![stats](/stats.png)

### `SKIN`

Сообщение, если это скин
![skin](/skin.png)

### `ITEM`

Сообщение, если это предмет
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

### [Остальные это Kyori теги](https://docs.advntr.dev/minimessage/format.html#standard-tags)

| Тег                       | Использование                                                                | Описание                                                                                       |
|---------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| `<hover>`                 | [Hover](https://docs.advntr.dev/minimessage/format.html#hover)               | Текст при наведении                                                                            |
| `<click>`                 | [Click](https://docs.advntr.dev/minimessage/format.html#click)               | Действие при нажатии                                                                           |
| `<color>`                 | [Color](https://docs.advntr.dev/minimessage/format.html#color)               | Цвет                                                                                           |
| `<keybind>`               | [Keybind](https://docs.advntr.dev/minimessage/format.html#keybind)           | Настройка клавиш для сообщения                                                                 |
| `<translatable>`          | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                       |
| `<translatable_fallback>` | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                       |
| `<insertion>`             | [Insertion](https://docs.advntr.dev/minimessage/format.html#insertion)       | Вставка текста в чат с помощью ШИФТ                                                            |
| `<font>`                  | [Font](https://docs.advntr.dev/minimessage/format.html#font)                 | Изменение шрифта текста                                                                        |
| `<decoration>`            | [Decoration](https://docs.advntr.dev/minimessage/format.html#decoration)     | Стандартные украшения майнкрафта `bold`, `italic`, `underlined`, `strikethrough`, `obfuscated` |
| `<gradient>`              | [Gradient](https://docs.advntr.dev/minimessage/format.html#gradient)         | Градиентный цвет текста                                                                        |
| `<rainbow>`               | [Rainbow](https://docs.advntr.dev/minimessage/format.html#rainbow)           | Радужный цвет текста                                                                           |
| `<reset>`                 | [Reset](https://docs.advntr.dev/minimessage/format.html#reset)               | Сброс всех тегов и декораций                                                                   |
| `<newline>`               | [Newline](https://docs.advntr.dev/minimessage/format.html#newline)           | Переход на новую строку, замена `\n`                                                           |
| `<transition>`            | [Transition](https://docs.advntr.dev/minimessage/format.html#transition)     | Переход между двумя цветами                                                                    |
| `<selector>`              | [Selector](https://docs.advntr.dev/minimessage/format.html#selector)         | Селектор мобов                                                                                 |
| `<score>`                 | [Score](https://docs.advntr.dev/minimessage/format.html#score)               | Значение у команды (scoreboard)                                                                |
| `<nbt>`                   | [NBT](https://docs.advntr.dev/minimessage/format.html#nbt)                   | Вставка NBT компонента                                                                         |

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#format

<!--@include: @/parts/permission/permissionTier3.md-->

### `all`

Право для использования всех возможных форматирований

### `tags`

Список тегов и их прав для использования