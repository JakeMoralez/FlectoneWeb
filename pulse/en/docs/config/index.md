---
order: -1
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

### `unregister-own-commands`

If enabled, `FlectonePulse` will remove and re-add its own commands during `/flectonepulse reload`. This may cause `tps` and `mspt` drops due to the large number of packets, so it's better to disable this setting if you encounter such an issue.

If disabled, you will need to restart the server to properly disable commands from `FlectonePulse` (in `commands.yml`).

::: warning WARNING
Not recommended to enable on older Minecraft versions, as it may cause errors/warnings in the server console, but they do not affect the plugin
:::

### `metrics`

Allows the plugin to collect [statistics](/metrics/) about the server and plugin parameters
<div class="w-80" style=" display: flex; flex-direction: column; align-items: center; justify-content: center;">
   <a href="https://flectone.net/pulse/metrics" rel="noopener nofollow ugc" target="_blank">
   <img src="https://flectone.net/api/pulse/metrics/svg" alt=""></a>
</div>

### `bungeecord`

Integration with `BungeeCord`

::: info NOTE 
For the plugin to work with `BungeeCord`
1. File `FlectonePulse.jar` must be on EVERY server, including `BungeeCord` in `plugins` folder
2. Selected database must be `MYSQL`
:::

### `velocity`

Integration with `Velocity`

::: info NOTE
1. File `FlectonePulse.jar` must be on EVERY server, including `Velocity` in `plugins` folder
2. Selected database must be `MYSQL`
:::

### `fabric-disabled-commands`

A list of non-`FlectonePulse` commands that should be disabled when the `Fabric` server starts. This allows replacing already taken commands in `Fabric`, such as `/me` or `/ban`

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

| Type         | Explanation                       |
|--------------|-----------------------------------|
| `SQLite`     | Local, file-based                 |
| `MySQL`      | Server-based, requires connection |
| `H2`         | Local, file-based                 |
| `PostgreSQL` | Server-based, requires connection |

#### `name`

Database name

#### `host`

The address of the server hosting the database

#### `port`

The port for connecting to the database server

#### `user`

The username to be used for database connection

#### `password`

The password for the database connection

#### `parameters`

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
  enable: false
  door:
    enable: true
  chair:
    enable: true
```

Since `house` is disabled, regardless of whether `door` and `chair` are enabled, they will also be disabled.
:::

### `redis`

Used for communication between different servers. For `user` and `password`, you can use environment variables, such as `${VALUE}`

::: details CONFIGURATION

#### `enable`

Enables `Redis` functionality

#### `host`

The host (IP address) of the server where `Redis` is running

#### `port`

The port of the server where `Redis` is running

#### `ssl`

Enables the use of `SSL`

#### `user`

The username for `Redis`. Leave empty if not required

#### `password`

The password for `Redis`. Leave empty if not required

:::

### `editor`

Web-based editing for FlectonePulse. The backend server runs on the same machine where FlectonePulse is installed

![editor](/flectonepulseeditor.gif)

::: details CONFIGURATION

#### `host`

The host (IP address or domain) of the current server

#### `https`

Enables `https` instead of `http`

#### `port`

An available port on the current server

:::