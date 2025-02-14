### `range`

How far in blocks the message will be displayed

| Value              | Explanation                                                                                                |
|--------------------|-----------------------------------------------------------------------------------------------------------|
| `-2`               | The message will be sent to all players on the server and on [Proxy](/docs/config/plugin/#proxy)            |
| `-1`               | The message will be sent to all players on the server                                                     |
| `0`                | The message will be sent only to the sender                                                               |
| Any number ` > 0`  | The message will be sent to players whose distance from the sender is **less** than this number            |

::: tip NOTE
If the range is greater than `0`, for example `100`, the recipients must also be in the same dimension as the sender
:::