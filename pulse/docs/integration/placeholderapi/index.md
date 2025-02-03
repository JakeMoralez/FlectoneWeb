# PlaceholderAPI

Интеграция с PlaceholderAPI:
- Позволяет использовать любые [плейсхолдеры](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)

::: tip НАПРИМЕР
`%server_tps%`, `%server_online%` и т.д., если установлен соответствующий модуль с помощью `/papi ecloud download модуль`
:::

- Добавляет свои плейсхолдеры

| Плейсхолдер                     | Что возращает                                                      |
|---------------------------------|--------------------------------------------------------------------|
| `%flectonepulse_fcolor_номер%`  | Возвращает [индивидуальный](/docs/message/format/color/) цвет игрока |
| `%flectonepulse_world_prefix%`  | Префикс измерения у игрока                                         |
| `%flectonepulse_stream_prefix%` | Префикс стрима у игрока                                            |
| `%flectonepulse_afk_suffix%`    | Суффикс афк у игрока                                               |
| `%flectonepulse_player%`        | Обычное имя игрока                                                 |
| `%flectonepulse_ip%`            | Айпи адрес игрока                                                  |
| `%flectonepulse_ping%`          | Пинг игрока                                                        |
| `%flectonepulse_online%`        | Количество игроков на сервере                                      |
| `%flectonepulse_tps%%`          | ТПС сервера                                                        |

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