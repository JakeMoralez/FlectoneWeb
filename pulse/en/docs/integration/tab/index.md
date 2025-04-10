# TAB

Integration with `TAB` resolves compatibility issues by disabling certain features in `FlectonePulse`:
- [Scoreboard](/docs/message/format/scoreboard/)
- [Header](/docs/message/tab/header/)
- [Footer](/docs/message/tab/footer/)
- [Player List Name](/docs/message/tab/playerlistname/)

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → tab`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#tab

<!--@include: @/parts/enable.md-->

### `disable-flectonepulse-scoreboard`

Disables the [Scoreboard](/docs/message/format/scoreboard/) module

### `disable-flectonepulse-header`

Disables the [Header](/docs/message/tab/header/) module

### `disable-flectonepulse-footer`

Disables the [Footer](/docs/message/tab/footer/) module

### `disable-flectonepulse-playerlistname`

Disables the [Player List Name](/docs/message/tab/playerlistname/) module

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.tab`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#integrationtab

<!--@include: @/parts/permission/permissionTier3.md-->