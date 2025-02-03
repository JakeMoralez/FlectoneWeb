# Смайлики

Тег `emoji` используется для замены текстовых смайликов в юникод смайлики

Использование: `смайлик`

![emoji message](/emojimessage.png)  
![emoji minecraft](/emojiminecraft.png)  

При нажатии на такой смайлик, он скопируется в чат
![emoji gif](/emoji.gif)

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → format.emoji`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#emoji

<!--@include: @/parts/enable.md-->

### `values`

Список всех доступных смайликов, где ключ - какой текст нужно заменить, а значение - на какой текст нужно заменить

::: tip НАПРИМЕР ЕСТЬ СМАЙЛИК
```yaml
:): "<click:suggest_command:\":)\"><hover:show_text:\":)\">☺</hover></click>"
```

Сообщение `:)` заменится на `☺`
![emoji minecraft](/emojiminecraft.png)
:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.format.emoji`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#emoji

<!--@include: @/parts/permission/permissionTier3.md-->