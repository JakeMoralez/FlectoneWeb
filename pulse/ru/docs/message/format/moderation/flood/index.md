# Flood

This formatting removes flood in the message
![caps](/caps.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.flood`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#flood

<!--@include: @/parts/enable.md-->

### `trim-to-single`

Whether to replace ALL flood with a single letter or word, otherwise the flood will be reduced to the limit of `max-repeated-symbols` or `max-repeated-words`

### `max-repeated-symbols`

Maximum number of identical letters

### `max-repeated-words`

Maximum number of identical words

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.flood`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#flood

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Permission to bypass the formatting