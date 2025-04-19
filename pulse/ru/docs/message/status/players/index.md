---
authors:
  - TheFaser
---

# Игроки

Модуль отвечающий за количество игроков на сервере
![player count](/playercount.png)

[//]: # (localization)
<!--@include: @/parts/words.md#localization--> 
<!--@include: @/parts/words.md#path--> `localizations → язык.yml → message.status.players`

<!--@include: @/parts/words.md#default--> 

::: code-group
<<< @/files/localizations/ru_ru.yml#players
<<< @/files/localizations/en_us.yml#players
:::

### `samples`

Список игроков сервера. Плейсхолдер `<players>` добавляет всех игроков сервера к списку

::: info ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ

Можно добавлять любые сообщения
```yaml
samples:
  - name: "<red>Это сервер в майнкрафте!"
    id: null
  - name: "<players>"
    id: null
```
![sample1](/sample1.png)

или создавать фейковых игроков
```yaml
samples:
  - name: "Notch"
    id: null
  - name: "<players>"
    id: null
```
![sample2](/sample2.png)
:::

::: warning ПРЕДУПРЕЖДЕНИЕ

Можно использовать только доступные цвета
<!--@include: @/parts/color.md-->
:::

### `full`

Сообщение при подключении на полный сервер

[//]: # (message.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `message.yml → status.players`

<!--@include: @/parts/words.md#default-->
<<< @/files/message.yml#players

<!--@include: @/parts/enable.md-->

### `control`

Если включено, то игрока не будет впускать на сервер при большем количестве игроков, чем [указано](#max)

### `max`

Максимальное количество игроков на сервере

### `online`

Число, которое позволяет указать любой онлайн на сервере

::: info ИНФОРМАЦИЯ

Число может быть любым, но `-69` указывает на текущий онлайн

:::

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → message.status.players`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#players

<!--@include: @/parts/permission/permissionTier3.md-->

### `bypass`

Право для подключения на полный сервер