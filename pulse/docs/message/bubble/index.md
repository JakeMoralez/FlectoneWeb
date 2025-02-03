# Над головой

Модуль, отвечающий за сообщения над головой
![bubble](/bubble.gif)

Идея взята из [LightChatBubbles](https://github.com/atesin/LightChatBubbles)

### Формула длительности

```java
long duration = (countWords + handicapChars) / readSpeed * 1200;
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

### `distance`

Дальность отображения сообщений над головой от отправителя

### `line-width`

Максимальное количество символов на одной строчке

### `read-speed`

Скорость чтения символов сообщения

### `handicap-chars`

Дополнительное время для коротких сообщений

### `modern`

Сообщения над головой через Text Display

::: warning ПРЕДУПРЕЖДЕНИЕ
Это работает только на серверах 1.19.4 и выше
:::

::: details НАСТРОЙКА
#### `enable`

Включает работоспособность

#### `has-shadow`

Включает тень у текста

#### `height`

Насколько высоко над игроком будет сообщение

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