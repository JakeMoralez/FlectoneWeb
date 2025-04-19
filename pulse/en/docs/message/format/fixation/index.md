---
authors:
  - TheFaser
  - Stokmenn
---

# Fixation

The module formats the player's message so that the first letter is capitalized, and there is a period at the end

![fixation](/fixation.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.fixation`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#fixation

<!--@include: @/parts/enable.md-->

### `end-dot`

Determines whether a period will be added at the end of the message if there isn't one

### `first-letter-uppercase`

Determines whether the first letter of the message will always be uppercase

### `non-dot-symbols`

A list of symbols (can also be words) after which a period should not be added

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.fixation`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#fixation

<!--@include: @/parts/permission/permissionTier3.md-->
