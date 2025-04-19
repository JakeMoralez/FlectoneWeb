---
authors:
  - TheFaser
---

# Флуд

Это форматирование удаляет флуд в сообщении  
![caps](/caps.png)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->  
<!--@include: @/parts/words.md#path--> `message.yml → format.moderation.flood`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/message.yml#flood

<!--@include: @/parts/enable.md-->  

### `trim-to-single`

Заменять ли ВЕСЬ флуд на одну букву/слово или просто сокращать до лимита `max-repeated-symbols`/`max-repeated-words`

### `max-repeated-symbols`

Максимальное количество одинаковых букв подряд

### `max-repeated-words`

Максимальное количество одинаковых слов подряд

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->  
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.moderation.flood`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/permission.yml#flood

<!--@include: @/parts/permission/permissionTier3.md-->  

### `bypass`
Право на обход данного форматирования