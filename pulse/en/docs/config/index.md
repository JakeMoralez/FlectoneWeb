---
authors:
  - TheFaser
  - Stokmenn
---

# Configuration

Main configuration for `FlectonePulse`, without which the plugin cannot function

[//]: # (config.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `config.yml`

<!--@include: @/parts/words.md#default-->
<<< @/files/config.yml#config

### `console`

Used to display the name when the message is created by the console
![console](/console.gif)

### `version`

The current version of the plugin, used for proper transitions between plugin versions

::: warning WARNING
Do not change the plugin version unless you know what you're doing!
:::

### `language`

Localization used for all plugin messages

::: warning WARNING
The selected localization must be from the `localizations` folder
:::

You can create and use your own localizations. To do this:
1. Copy one of the localization (`en_us.yml`)
2. Rename it, preferably as in the [game](https://minecraft.wiki/w/Language)
3. Now you can modify any messages inside this file

::: info Example
I want to translate the plugin into Belarusian
1. I copy the file `en_us.yml`
2. Rename it to `be_by.yml`
   ![locale](/locale.png)
3. Done!
:::

### `language-player`

When enabled, each player's Minecraft localization will be checked, and based on that, the message from [localizations](/docs/message/) will be shown

![locale](/locale.gif)

If the localization does not exist, the one from [configuration](#language) will be used.

::: danger VERY IMPORTANT TO UNDERSTAND
If you modify the message lists with `language-player` enabled, you need to do this in all localizations, otherwise visual errors may occur
:::

### `metrics`

Allows the plugin to collect [statistics](https://bstats.org/plugin/bukkit/FlectonePulse/21076) about the server and plugin parameters
<div class="w-80" style=" display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <article class="bstats">
        <a href="https://bstats.org/plugin/bukkit/FlectonePulse" rel="noopener nofollow ugc" target="_blank">
        <img src="https://bstats.org/signatures/bukkit/FlectonePulse.svg" alt=""></a>
    </article>
</div>

### `bungeecord`

Integration with `BungeeCord`

::: info NOTE 
For the plugin to work with `BungeeCord`, `FlectonePulse.jar` file also needs to be placed in the plugins folder on `BungeeCord` server
:::

### `velocity`

Integration with `Velocity`

::: info NOTE
For the plugin to work with `Velocity`, `FlectonePulse.jar` file also needs to be placed in the plugins folder on `Velocity` server
:::

### `clusters`

A list of clusters to which the server should be connected. Only used when proxy mode is enabled.
If the list is empty, the server will receive messages from all other servers.

::: info HOW TO USE?
You need to enter the cluster name on the servers where the message will be received and sent
```yaml
clusters: 
   - "test_cluster"
```

This connects the servers together, and messages will only be exchanged between these clusters.
:::

### `log-filter`

The idea is borrowed from [here](https://github.com/Whitescan/ConsoleFilter/blob/master/src/main/java/dev/whitescan/consolefilter/share/LogFilter.java), thanks to @Whitescan

A list is specified with messages that should not be shown, using keywords found in the message.

::: info EXAMPLE I WANT TO FILTER
![filter](/filter.png)

Then you should add:
`Unknown or incomplete command` or `command` or `Unknown`
:::

### `database`

You can use environment variables, for example `${VALUE}`

::: details Database Setup

#### `type`

Currently supported:
- `SQLite` - local
- `MYSQL` - server-side

#### `name`

Database name

#### `host` (for MySQL)

The address of the server hosting the database

#### `port` (for MySQL)

The port for connecting to the database server

#### `user` (for MySQL)

The username to be used for database connection

#### `password` (for MySQL)

The password for the database connection

#### `parameters` (for MySQL)

Connection parameters for the database

:::

### module

Enables or disables all modules

- Each module has a parent (the one above it)

::: info EXAMPLE
```yaml
house:
  door:
  chair:
```

`house` is the parent for `door` and `chair`
:::

- Each module depends on the `enable` status of its parent

::: info EXAMPLE
```yaml
house:
  enable: false // [!code highlight]
  door:
    enable: true
  chair:
    enable: true
```

Since `house` is disabled, regardless of whether `door` and `chair` are enabled, they will also be disabled.
:::