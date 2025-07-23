### `range`

How far in blocks the message will be displayed

| Value                                            | Explanation                                                                                                                                                     |
|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `WORLD_TYPE`                                     | The message will only be sent to players who have the permission `flectonepulse.world.type.dimension_name`                                                      |
| `WORLD_NAME`                                     | The message will only be sent to players who have the permission `flectonepulse.world.name.world_folder_name`                                                   |
| `PROXY`                                          | The message will be sent to all players on the server and on [Proxy](/docs/config/#bungeecord)                                                                  |
| `SERVER`                                         | The message will be sent to all players on the server                                                                                                           |
| `PLAYER`                                         | The message will only be sent to the sender                                                                                                                     |
| Any number greater than `0` (e.g., `range: 100`) | The message will be sent to players whose distance from the sender is **less** than this number. Players must also be in the same world as the sender           |