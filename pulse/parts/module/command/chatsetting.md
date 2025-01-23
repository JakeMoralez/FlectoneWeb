<!-- #region title -->
# Комманда `/chatsetting`
<!-- #endregion title -->

<!-- #region explanation -->
## Объяснение
![command chatsetting](/commandchatsetting.png)
<!-- #endregion explanation -->

<!-- #region parameters -->
## Параметры
[:file_folder:localizations/ru_ru.yml](/docs/localizations/ru_ru/command/chatsetting)\
[:file_folder:localizations/en_us.yml](/docs/localizations/en_us/command/chatsetting)\
[:file_folder:command.yml](/docs/command/chatsetting/)\
[:file_folder:permission.yml](/docs/permission/command/chatsetting/)
<!-- #endregion parameters -->

<!-- #region localization -->
### `no-permission`

Сообщение, если для изменения настройки требуется определённое право

### `disable`

::: details Сообщения об отключении
#### `you`

Сообщение, если отправитель отключил комманду в `/chatsetting`

#### `he`

Сообщение, если получатель отключил комманду в `/chatsetting`

#### `server`

Сообщение, если сервер отключил комманду для `/chatsetting`

:::

### `header`

Название для GUI

### `settings`

Список настроек и их сообщений, где:
- Первая строчка - название предмета, если включено
- Остальные строчки - описание предмета, если включено
- Вторая строчка - название предмета, если выключено
- Остальные строчки - описание предмета, если выключено

::: tip Например возьмём `REPLY`
```yaml
# включено
- - "<fcolor:2>Команда /reply" # название предмета
  - "<color:#98FB98>Показывается" # описание
# выключено
- - "<fcolor:2>Команда /reply" # название предмета
  - "<color:#ff7171>Скрыта" # описание
```
:::
<!-- #endregion localization -->