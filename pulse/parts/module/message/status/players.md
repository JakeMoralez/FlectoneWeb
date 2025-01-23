<!-- #region title -->
# Игроки
<!-- #endregion title -->

<!-- #region explanation -->
## Объяснение
Сообщение об игроках сервера
![sample1](/sample1.png)
<!-- #endregion explanation -->

<!-- #region parameters -->
## Параметры
[:file_folder:localizations/ru_ru.yml](/docs/localizations/ru_ru/message/status/players)\
[:file_folder:localizations/en_us.yml](/docs/localizations/en_us/message/status/players)\
[:file_folder:message.yml](/docs/message/status/players)\
[:file_folder:permission.yml](/docs/permission/message/status/players)
<!-- #endregion parameters -->

<!-- #region localization -->
### `samples`

Список игроков сервера. Плейсхолдер `<players>` добавляет всех игроков сервера к списку

::: info ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ

Можно добавлять любые сообщения
```yaml
samples:
  - name: "<red>Это сервер в майнкрафте!"
    id: null
  - name: "<players>"
    id: null
```
![sample1](/sample1.png)

или создавать фейковых игроков
```yaml
samples:
  - name: "Notch"
    id: null
  - name: "<players>"
    id: null
```
![sample2](/sample2.png)
:::

::: warning ПРЕДУПРЕЖДЕНИЕ

Можно использовать только доступные цвета
<!--@include: @/parts/color.md-->
:::

### `full`

Сообщение при подключении на полный сервер
<!-- #endregion localization -->