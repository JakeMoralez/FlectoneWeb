---
authors:
  - TheFaser
---

# PlaceholderAPI

Интеграция с плагином PlaceholderAPI:
- Позволяет использовать любые [плейсхолдеры](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)

::: info НАПРИМЕР
`%server_tps%`, `%server_online%` и т.д., если установлен соответствующий модуль с помощью `/papi ecloud download модуль`
:::

- Добавляет свои плейсхолдеры

| Плейсхолдер                         | Что возвращает                                                              |
|-------------------------------------|-----------------------------------------------------------------------------|
| `%flectonepulse_advancement%`       | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_afk%`               | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_afk_suffix%`        | Возвращает [суффикс AFK](/docs/command/afk/)                                |
| `%flectonepulse_auto%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_ball%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_ban%`               | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_broadcast%`         | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_chat%`              | Возвращает тип выбранного чата, по умолчанию это `default`                  |
| `%flectonepulse_coin%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_color%`             | Всегда пустой, создан для конфига                                           |
| `%flectonepulse_death%`             | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_dice%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_discord%`           | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_do%`                | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_greeting%`          | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_join%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_kick%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_locale%`            | Возвращает текущую локаль игрока                                            |
| `%flectonepulse_mail%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_me%`                | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_mute%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_poll%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_quit%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_reply%`             | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_rockpaperscissors%` | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_spy%`               | Возвращает `true` если включен режим слежки, иначе пусто                    |
| `%flectonepulse_stream%`            | Возвращает `true` если включен режим стримера, иначе пусто                  |
| `%flectonepulse_stream_prefix%`     | Возвращает префикс [стрима](/docs/message/command/stream/) у игрока         |
| `%flectonepulse_telegram%`          | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_tell%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_tictactoe%`         | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_translateto%`       | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_try%`               | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_twitch%`            | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_warn%`              | Возвращает `true` если включено отображение, иначе пусто                    |
| `%flectonepulse_world_prefix%`      | Возвращает [префикс измерения](/docs/message/format/world/) у игрока        |
| `%flectonepulse_style%`             | Возвращает [текущий стиль](/docs/message/format/style/), по умолчанию пусто |
| `%flectonepulse_tps%%`              | Возвращает ТПС сервера                                                      |
| `%flectonepulse_player%`            | Возвращает обычное имя игрока                                               |
| `%flectonepulse_ip%`                | Возвращает айпи адрес игрока                                                |
| `%flectonepulse_ping%`              | Возвращает пинг игрока                                                      |
| `%flectonepulse_online%`            | Возвращает количество игроков на сервере                                    |
| `%flectonepulse_fcolor_номер%`      | Возвращает [индивидуальный](/docs/message/format/color/) цвет игрока        |

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → placeholderapi`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#placeholderapi

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.placeholderapi`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#placeholderapi

<!--@include: @/parts/permission/permissionTier3.md-->

### `use`

Право для использования плейсхолдеров из PlaceholderAPI в сообщении