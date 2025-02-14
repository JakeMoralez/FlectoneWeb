 # Overhead Messages 

A module responsible for messages above the head  
![bubble](/bubble.gif)  

The idea is taken from [LightChatBubbles](https://github.com/atesin/LightChatBubbles)  

### Duration Formula  

```java
long duration = (countWords + handicapChars) / readSpeed * 1200;
```  

[//]: # (localization)  
<!--@include: @/parts/words.md#localization-->  
<!--@include: @/parts/words.md#path--> `localizations → language.yml → message.bubble`  

<!--@include: @/parts/words.md#default-->  

::: code-group  
<<< @/files/localizations/ru_ru.yml#bubble  
<<< @/files/localizations/en_us.yml#bubble  
:::  

### `format`  

Format of the overhead message  

[//]: # (message.yml)  
<!--@include: @/parts/words.md#setting-->  
<!--@include: @/parts/words.md#path--> `message.yml → bubble`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/message.yml#bubble  

<!--@include: @/parts/enable.md-->  

### `distance`  

The display distance of overhead messages from the sender  

### `line-width`  

The maximum number of characters per line  

### `read-speed`  

Reading speed of message characters  

### `handicap-chars`  

Additional time for short messages  

### `modern`  

Overhead messages using Text Display  

::: warning WARNING  
This only works on servers 1.19.4 and above  
:::  

::: details SETTINGS  
#### `enable`  

Enables functionality  

#### `has-shadow`  

Enables text shadow  

#### `height`  

How high above the player the message will be  

#### `scale`  

What size will the message be

#### `background`  

The background color of the message, including transparency (alpha channel). [Color selection site](https://rgbacolorpicker.com/color-wheel-picker)  
:::  

[//]: # (permission.yml)  
<!--@include: @/parts/words.md#permission-->  
<!--@include: @/parts/words.md#path--> `permission.yml → message.bubble`  

<!--@include: @/parts/words.md#default-->  
<<< @/files/permission.yml#bubble  

<!--@include: @/parts/permission/permissionTier3.md-->  
