<!-- #region title -->
# Комманда `/kick`
<!-- #endregion title -->

<!-- #region explanation -->
## Объяснение
![command kick](/commandkick.png)
<!-- #endregion explanation -->

<!-- #region parameters -->
## Параметры
[:file_folder:localizations/ru_ru.yml](/docs/localizations/ru_ru/command/kick)\
[:file_folder:localizations/en_us.yml](/docs/localizations/en_us/command/kick)\
[:file_folder:command.yml](/docs/command/kick/)\
[:file_folder:permission.yml](/docs/permission/command/kick/)
<!-- #endregion parameters -->

<!-- #region localization -->
### `null-player`

Сообщение, если введённый игрок не найден

### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/kick player random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`

:::

### `server`

Сообщение для всех

### `person`

Сообщение для игрока
<!-- #endregion localization -->