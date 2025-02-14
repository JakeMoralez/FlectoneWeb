# Players

Module responsible for the number of players on the server
![player count](/playercount.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.status.players`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#players
<<< @/files/localizations/en_us.yml#players
:::

### `samples`

List of server players. The placeholder `<players>` adds all players on the server to the list

::: info EXAMPLES OF USAGE

You can add any messages
```yaml
samples:
  - name: "<red>This is a Minecraft server!"
    id: null
  - name: "<players>"
    id: null
```
![sample1](/sample1.png)

or create fake players
```yaml
samples:
  - name: "Notch"
    id: null
  - name: "<players>"
    id: null
```
![sample2](/sample2.png)
:::

::: warning WARNING

Only available colors can be used
<!--@include: @/parts/color.md-->
:::

### `full`

Message when the server is full

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → status.players`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#players

<!--@include: @/parts/enable.md-->

### `control`

If enabled, the player will not be allowed to join the server if the number of players exceeds the [specified](#max) amount

### `max`

Maximum number of players on the server

### `online`

Number that allows you to specify any number of online players

::: info INFORMATION

The number can be anything, but `-69` indicates the current online count

:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.status.players`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#players

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Permission to connect to a full server
