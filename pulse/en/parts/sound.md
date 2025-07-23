### `sound`
Sound playback

::: info HOW TO USE SOUND?
Replace `false` with `true` and restart `FlectonePulse` using the `/flectonepulse reload` command. Additional sound settings will appear AUTOMATICALLY

```yaml
sound:
  enable: true
  volume: 1.0
  pitch: 1.0
  category: "HOSTILE"
  name: "minecraft:entity.llama.spit"
```

| Field       | Type       | Explanation                                                                                                        |
|-------------|------------|--------------------------------------------------------------------------------------------------------------------|
| `enable`    | `boolean`  | Enables sound functionality                                                                                        |
| `volume`    | `float`    | Sound volume from `0` to `1.0`                                                                                     |
| `pitch`     | `float`    | Sound pitch from `0` to `1.0`                                                                                      |
| `category`  | `String`   | Category from `MASTER`, `MUSIC`, `RECORD`, `WEATHER`, `BLOCK`, `HOSTILE`, `NEUTRAL`, `PLAYER`, `AMBIENT`, `VOICE`  |
| `name`      | `String`   | Sound name, for example `minecraft:entity.llama.spit`                                                              |
:::