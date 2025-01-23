<!-- #region title -->
# Комманда `/ban`
<!-- #endregion title -->

<!-- #region explanation -->
## Объяснение
![command ban](/commandban.png)
<!-- #endregion explanation -->

<!-- #region parameters -->
## Параметры
[:file_folder:localizations/ru_ru.yml](/docs/localizations/ru_ru/command/ban)\
[:file_folder:localizations/en_us.yml](/docs/localizations/en_us/command/ban)\
[:file_folder:command.yml](/docs/command/ban/)\
[:file_folder:permission.yml](/docs/permission/command/ban/)
<!-- #endregion parameters -->

<!-- #region localization -->
### `null-player`

Сообщение, если введённый игрок не найден

### `null-time`

Сообщение, если введено невозможное время

### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/ban player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

### `server`

Сообщение для всех

### `person`

Сообщение для игрока

### `connection-attempt`

Сообщение, если заблокированный игрок пытался подключиться
<!-- #endregion localization -->