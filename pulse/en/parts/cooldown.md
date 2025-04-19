### `cooldown`

Usage cooldown

| Field       | Type       | Explanation                                                                                                 |
|-------------|------------|-----------------------------------------------------------------------------------------------------------|
| `enable`    | `boolean`  | Enables the cooldown functionality                                                                        |
| `duration`  | `long`     | How many [ticks](https://minecraft.fandom.com/wiki/Tick) must pass between uses                           |


::: info HOW TO USE COOLDOWN?
Replace `false` with `true` and restart `FlectonePulse` using the `/flectonepulse reload` command. Additional cooldown settings will appear AFTER RELOADING.
:::

The cooldown configuration will look like this:
```yaml
cooldown:
  enable: true
  duration: 60
```