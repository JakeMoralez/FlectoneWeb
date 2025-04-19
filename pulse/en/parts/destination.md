### `destination`

Where the message will be sent

::: info HOW TO CHANGE THE DESTINATION?
Replace the value `type: here` and restart `FlectonePulse` using the `/flectonepulse reload` command. Additional settings will appear automatically.
:::

| Type          | Explanation                                    | Requires additional configuration? |
|---------------|------------------------------------------------|-------------------------------------|
| `ACTION_BAR`  | Message above the player's inventory           | Yes                                 |
| `BOSS_BAR`    | Message at the top of the screen               | Yes                                 |
| `BRAND`       | Message in F3                                  | No                                  |
| `CHAT`        | Message in the chat                            | No                                  |
| `TITLE`       | Full-screen message                            | Yes                                 |
| `SUBTITLE`    | Full-screen message (bottom line)              | Yes                                 |
| `TAB_HEADER`  | Message in TAB (top)                           | No                                  |
| `TAB_FOOTER`  | Message in TAB (bottom)                        | No                                  |
| `TOAST`       | Message in the top-right corner (achievement)  | Yes                                 |

::: details Configuration for `ACTION_BAR`
```yaml
destination:
  type: ACTION_BAR
  times:
    stay: 60
```

#### `times`

| Field       | Explanation                            |
|-------------|----------------------------------------|
| `stay`      | Time in ticks to hold the message      |
:::

::: details Configuration for `BOSS_BAR`

```yaml
destination:
  type: BOSS_BAR
  duration: 100
  health: 1.0
  overlay: PROGRESS
  color: BLUE
  play-boos-music: false
  create-world-fog: false
  darken-screen: false
```

#### `duration`

Duration of the message display

#### `health`

How full the boss bar will be

#### `overlay`

| Type          | Explanation                |
|---------------|----------------------------|
| `PROGRESS`    | Single line                |
| `NOTCHED_6`   | Divided into 6 parts       |
| `NOTCHED_10`  | Divided into 10 parts      |
| `NOTCHED_12`  | Divided into 12 parts      |
| `NOTCHED_20`  | Divided into 20 parts      |

#### `color`

Display color

| Type      |
|-----------|
| `PINK`    |
| `BLUE`    |
| `RED`     |
| `GREEN`   |
| `YELLOW`  |
| `PURPLE`  |
| `WHITE`   |

#### `play-boos-music`

Whether music will play with the message

#### `create-world-fog`

Whether fog will appear with the message

#### `darken-screen`

Whether the screen will darken with the message
:::

::: details Configuration for `TITLE` (or `SUBTITLE`)
```yaml
destination:
  type: TITLE (or SUBTITLE)
  subtext: ""
  times:
    fade-in: 20
    stay: 60
    fade-out: 20
```

#### `subtext`

Message for the second part of the display. For example, if `TITLE` is selected, `subtext` will be displayed below it, and vice versa.

#### `times`

| Field       | Explanation                            |
|-------------|----------------------------------------|
| `fade-in`   | Time in ticks for the message to appear |
| `stay`      | Time in ticks to hold the message      |
| `fade-out`  | Time in ticks for the message to disappear |
:::

::::: details Configuration for `TOAST`
```yaml
destination:
  type: TOAST
  icon: "minecraft:diamond"
  style: TASK
```

#### `icon`

Achievement icon, which can be any Minecraft item (must specify the full path)

#### `style`

Achievement type (`TASK` regular, `GOAL` goal, `CHALLENGE` challenge)

::: warning WARNING

May cause delays, so not recommended for use

:::

:::::