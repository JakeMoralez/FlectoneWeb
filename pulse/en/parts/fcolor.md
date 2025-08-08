::: info HOW DOES `<fcolor:...>` WORK?

`<fcolor:...>` is a placeholder that gets replaced with values from [`default-colors`](/docs/message/format/fcolor/#default-colors) or, if the player has their own, with the player's colors.

The value of `<fcolor:...>` can be anything, but the command only allows colors in any format and `<gradient:...:...>`. There can be as many of these values as needed, with the maximum being the highest digit from [`default-colors`](/docs/message/format/fcolor/#default-colors).

Each digit represents a specific color. By default: `<fcolor:1>` is used for the primary color, `<fcolor:2>` for the primary color with highlighting (e.g., names), `<fcolor:3>` for messages in local chat, and `<fcolor:4>` for messages in global chat.

`<fcolor:...>` has several states. By default, it's `see`—colors that the player will see for ALL messages ONLY for themselves, unless replaced by `out`—colors that ALL players will see for THIS player's messages (i.e., the personal colors of this specific player).

Still confused? There's an explanation in the image below, or here's an example: A player enters the command `/chatcolor see red red red red`. This means the player sees all messages in red for themselves, but other players see messages according to their own settings. Now, suppose the player writes `/chatcolor out green green green green`. This means all messages from this player will be green for both them and other players. It's important to understand that `out` overrides colors from `see` if they exist, meaning the player will also see other messages in green for themselves.

For beginners: `see` is for personalizing YOUR OWN colors, while `out` is for colors that OTHER players will see.

![fcolor](/fcolor.png)
:::