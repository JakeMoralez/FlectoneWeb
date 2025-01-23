<!-- #region title -->
# Твич
<!-- #endregion title -->

<!-- #region explanation -->
## Объяснение
![twitchmessage](/twitchmessage.png)
<!-- #endregion explanation -->

<!-- #region parameters -->
## Параметры
[:file_folder:localizations/ru_ru.yml](/docs/localizations/ru_ru/integration/twitch)\
[:file_folder:localizations/en_us.yml](/docs/localizations/en_us/integration/twitch)\
[:file_folder:integration.yml](/docs/integration/twitch)\
[:file_folder:permission.yml](/docs/permission/integration/twitch)
<!-- #endregion parameters -->

<!-- #region localization -->
### Плейсхолдеры

Ты можешь использовать все плейсхолдеры, которые используются в начальном сообщении для майнкрафта
::: tip Например для сообщения о блокировке
Там есть плейсхолдер `<reason>`, значит я могу использовать `<reason>` внутри твич сообщений
:::

Также есть плейсхолдеры, которые ТОЧНО будут заменяться в любом сообщении
- `<final_message>` сообщение, отправленное в майнкрафт
- `<final_clear_message>` сообщение, отправленное в майнкрафт без unicode-смайлов
- `<player>` ник игрока, который отправил сообщение

Очевидно, что все плейсхолдеры из `PlaceholderAPI` и `FlectonePulse` тоже будут работать

### `for-minecraft`
- По умолчанию `<fcolor:2><name> <fcolor:1>» <fcolor:4><message>`

Формат сообщения, которое будет отправлено из Твича в Майнкрафт

### `message-channel`

Список сообщений с форматом итогового сообщения
<!--@include: @/parts/messageTag.md-->

::: tip Если хочешь добавить другое сообщение:
1. Возьми название из списка
2. Вставь в `message-channel`
```yaml
название_сообщения: "<final_message>"
```
:::
<!-- #endregion localization -->