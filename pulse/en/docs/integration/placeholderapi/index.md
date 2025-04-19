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

| Placeholder                     | What it returns                                                      |
|---------------------------------|--------------------------------------------------------------------|
| `%flectonepulse_fcolor_номер%`  | Returns a [custom](/docs/message/format/color/) player color        |
| `%flectonepulse_world_prefix%`  | Player's dimension prefix                                           |
| `%flectonepulse_stream_prefix%` | Player's stream prefix                                              |
| `%flectonepulse_afk_suffix%`    | Player's AFK suffix                                                 |
| `%flectonepulse_player%`        | Player's regular name                                               |
| `%flectonepulse_ip%`            | Player's IP address                                                 |
| `%flectonepulse_ping%`          | Player's ping                                                       |
| `%flectonepulse_online%`        | Number of players on the server                                     |
| `%flectonepulse_tps%%`          | Server TPS                                                          |

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