# Emojis

The `emoji` tag is used to replace text-based emojis with Unicode emojis

Usage: `emoji`

![emoji message](/emojimessage.png)  
![emoji minecraft](/emojiminecraft.png)

When clicking on such an emoji, it will be copied to the chat
![emoji gif](/emoji.gif)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.emoji`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#emoji

<!--@include: @/parts/enable.md-->

### `values`

A list of all available emojis, where the key is the text to be replaced, and the value is the text to replace it with

::: tip FOR EXAMPLE, THERE IS AN EMOJI
```yaml
:): "<click:suggest_command:\":)\"><hover:show_text:\":)\">☺</hover></click>"
```

The message `:)` will be replaced with `☺`
![emoji minecraft](/emojiminecraft.png)
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.emoji`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#emoji

<!--@include: @/parts/permission/permissionTier3.md-->
