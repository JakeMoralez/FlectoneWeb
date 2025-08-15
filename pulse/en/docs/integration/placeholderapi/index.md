---
authors:
  - TheFaser
  - Stokmenn
---

# PlaceholderAPI

Integration with PlaceholderAPI:
- Allows using any [placeholders](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)

::: info EXAMPLE
`%server_tps%`, `%server_online%`, etc., if the corresponding module is installed via `/papi ecloud download module`
:::

- Adds its own placeholders

| Placeholder                         | Returns                                                                    |
|-------------------------------------|----------------------------------------------------------------------------|
| `%flectonepulse_advancement%`       | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_afk%`               | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_afk_suffix%`        | Returns [AFK suffix](/docs/command/afk/)                                   |
| `%flectonepulse_auto%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_ball%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_ban%`               | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_broadcast%`         | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_chat%`              | Returns the type of selected chat, default is `default`                    |
| `%flectonepulse_coin%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_color%`             | Always empty, created for config                                           |
| `%flectonepulse_death%`             | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_dice%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_discord%`           | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_do%`                | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_greeting%`          | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_join%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_kick%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_locale%`            | Returns the player's current locale                                        |
| `%flectonepulse_mail%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_me%`                | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_mute%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_poll%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_quit%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_reply%`             | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_rockpaperscissors%` | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_spy%`               | Returns `true` if spy mode is enabled, otherwise empty                     |
| `%flectonepulse_stream%`            | Returns `true` if streamer mode is enabled, otherwise empty                |
| `%flectonepulse_stream_prefix%`     | Returns the [stream](/docs/message/command/stream/) prefix of the player   |
| `%flectonepulse_telegram%`          | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_tell%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_tictactoe%`         | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_translateto%`       | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_try%`               | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_twitch%`            | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_warn%`              | Returns `true` if display is enabled, otherwise empty                      |
| `%flectonepulse_world_prefix%`      | Returns the [world prefix](/docs/message/format/world/) of the player      |
| `%flectonepulse_style%`             | Returns the [current style](/docs/message/format/style/), default is empty |
| `%flectonepulse_tps%%`              | Returns the server's TPS                                                   |
| `%flectonepulse_player%`            | Returns the player's regular name                                          |
| `%flectonepulse_ip%`                | Returns the player's IP address                                            |
| `%flectonepulse_ping%`              | Returns the player's ping                                                  |
| `%flectonepulse_online%`            | Returns the number of players on the server                                |
| `%flectonepulse_fcolor_number%`     | Returns the player's [custom](/docs/message/format/color/) color           |
| `%flectonepulse_fcolor_out_number%` | Returns the player's [custom OUT](/docs/message/format/color/) color       |
| `%flectonepulse_fcolor_see_number%` | Returns the player's [custom SEE](/docs/message/format/color/) color       |

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

Permission to use PlaceholderAPI placeholders in messages