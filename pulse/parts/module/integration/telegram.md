<!-- #region title -->
# Телеграм
<!-- #endregion title -->

<!-- #region explanation -->
## Объяснение
![telegrammessage](/telegrammessage1.png)
<!-- #endregion explanation -->

<!-- #region parameters -->
## Параметры
[:file_folder:localizations/ru_ru.yml](/docs/localizations/ru_ru/integration/telegram)\
[:file_folder:localizations/en_us.yml](/docs/localizations/en_us/integration/telegram)\
[:file_folder:integration.yml](/docs/integration/telegram)\
[:file_folder:permission.yml](/docs/permission/integration/telegram)
<!-- #endregion parameters -->

<!-- #region localization -->
### Плейсхолдеры

Ты можешь использовать все плейсхолдеры, которые используются в начальном сообщении для майнкрафта
::: tip Например для сообщения о блокировке
Там есть плейсхолдер `<reason>`, значит я могу использовать `<reason>` внутри телеграм сообщений
:::

Также есть плейсхолдеры, которые ТОЧНО будут заменяться в любом сообщении
- `<final_message>` сообщение, отправленное в майнкрафт
- `<final_clear_message>` сообщение, отправленное в майнкрафт без unicode-смайлов
- `<player>` ник игрока, который отправил сообщение

Очевидно, что все плейсхолдеры из `PlaceholderAPI` и `FlectonePulse` тоже будут работать

### `for-minecraft`

Формат сообщения, которое будет отправлено из Телеграма в Майнкрафт

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