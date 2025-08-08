---
authors:
  - TheFaser
  - Stokmenn
---

# Replacement

Used to replace triggers with specific values

![emoji message](/emojimessage.png)  
![emoji minecraft](/emojiminecraft.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.replacement`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#replacement

<!--@include: @/parts/enable.md-->

### `values`

List of all available replacements, where `trigger` is the text to be replaced and `replace` is the replacement text

::: info EXAMPLE EMOJI
```yaml
- trigger: ":)"
  replace: "<click:suggest_command:\":)\"><hover:show_text:\":)\">☺</hover></click>"
```

![emoji minecraft](/emojiminecraft.png)
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.replacement`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#replacement

<!--@include: @/parts/permission/permissionTier3.md-->
