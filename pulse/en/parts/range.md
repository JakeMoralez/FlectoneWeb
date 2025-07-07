### `range`

How far in blocks the message will be displayed

| Value              | Explanation                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------|
| `-4`               | The message will only be sent to players who have the permission `flectonepulse.world.type.dimension_name`    |
| `-3`               | The message will only be sent to players who have the permission `flectonepulse.world.name.world_folder_name` |
| `-2`               | The message will be sent to all players on the server and on [Proxy](/docs/config/#proxy)                     |
| `-1`               | The message will be sent to all players on the server                                                         |
| `0`                | The message will only be sent to the sender                                                                   |
| any number ` > 0`  | The message will be sent to players whose distance from the sender is **less** than this number               |

::: info NOTE
If a range greater than `0` is specified, for example `100`, the recipients must also be in the same dimension as the sender
:::