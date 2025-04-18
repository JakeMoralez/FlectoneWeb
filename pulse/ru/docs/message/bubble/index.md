# Над головой

Модуль, отвечающий за сообщения над головой
![bubble](/bubble.gif)

Идея взята из [LightChatBubbles](https://github.com/atesin/LightChatBubbles)

### Формула длительности

```java
long duration = (countWords + handicapChars) / readSpeed * 60;
```

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.bubble`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#bubble
<<< @/files/localizations/en_us.yml#bubble
:::

### `format`

Формат сообщения над головой

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → bubble`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#bubble

<!--@include: @/parts/enable.md-->

### `use-interaction`

Включает использование `interaction` для расстояния между сообщениями. Если выключено, то используется старый способ через `area effect cloud`

::: warning ПРЕДУПРЕЖДЕНИЕ
Это будет использовано только для серверов, где версия `1.21.3` и выше
:::

### `max-count`

Максимальное количество сообщений над головой одновременно

### `max-length`

Максимальная длинна одного сообщения над головой. Если текст длиннее, то он будет разделён на несколько

### `height`

Расстояние между каждым сообщением над головой. Если `use-interaction` работает, то можно настраивать дробную часть `0.44444`, иначе **только каждое целое** число будет добавлять пробел

### `distance`

Насколько далеко можно увидеть сообщение над головой у игрока

### `read-speed`

Скорость чтения слов в минуту

### `handicap-chars`

Дополнительное время для коротких сообщений

### `modern`

Сообщения над головой через Text Display

::: warning ПРЕДУПРЕЖДЕНИЕ
Это будет использовано только для серверов, где версия `1.19.4` и выше
:::

::: details НАСТРОЙКА
#### `enable`

Включает работоспособность

#### `has-shadow`

Включает тень у текста

#### `scale`

Насколько большим будет сообщение

#### `background`

Цвет фона сообщения, он имеет прозрачность т.е. альфа-канал. [Сайт для выбора цвета](https://rgbacolorpicker.com/color-wheel-picker)
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.bubble`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#bubble

<!--@include: @/parts/permission/permissionTier3.md-->