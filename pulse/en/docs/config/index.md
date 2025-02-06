# Конфигурация

Основная конфигурация `FlectonePulse`, без которой невозможна работа

[//]: # (config.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `config.yml`

<!--@include: @/parts/words.md#default-->
<<< @/files/config.yml#config

### `console`

Используется для отображения имени, когда сообщения создано консолью
![console](/console.gif)

### `version`

Текущая версия плагина, используемая для корректного перехода между версиями плагина

::: warning ПРЕДУПРЕЖДЕНИЕ
Не изменяй версию плагина, если не знаешь, что делаешь!
:::

### `language`

Локализация, используемая для всех сообщений плагина

::: warning ПРЕДУПРЕЖДЕНИЕ
Выбираемая локализация должна быть из папки `localizations`
:::

<!--@include: @/parts/locale.md-->

### `language-player`

Если включено, то у каждого игрока будет проверяться его локализация майнкрафта и взависимости от этого будет показываться [сообщение](/docs/localizations/)

![locale](/locale.gif)

Если такой локализации нет, то будет использована из [конфигурации](#language)

::: danger ОЧЕНЬ ВАЖНО ПОНИМАТЬ
Если ты изменяешь списки сообщений с включенным `language-player`, то это нужно делать во всех локализациях, иначе возможны визуальные ошибки
:::

### `metrics`

Позволяет плагину собирать [статистику](https://bstats.org/plugin/bukkit/FlectonePulse/21076) сервера и параметров плагина
<div class="w-80" style=" display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <article class="bstats">
        <a href="https://bstats.org/plugin/bukkit/FlectonePulse" rel="noopener nofollow ugc" target="_blank">
        <img src="https://bstats.org/signatures/bukkit/FlectonePulse.svg" alt=""></a>
    </article>
</div>

### `bungeecord`

::: tip ЧТОБЫ ПЛАГИН РАБОТАЛ НА BUNGEECORD:
1. Включи его здесь
2. Для **BungeeCord** сервера закинь файл `FlectonePulse-bungee.jar` в папку `plugins`
3. Перезапусти **BungeeCord** и сервера, где стоит **FlectonePulse**
   :::

### `velocity`

::: tip ЧТОБЫ ПЛАГИН РАБОТАЛ НА VELOCITY:
1. Включи его здесь
2. Для **Velocity** сервера закинь файл `FlectonePulse-velocity.jar` в папку `plugins`
3. Перезапусти **Velocity** и сервера, где стоит **FlectonePulse**
   :::

### `clusters`

Список кластеров, к которым должен быть подключён сервер. Используется только тогда, когда включен режим прокси.
Если список пустой, то сервер получает все сообщения с других серверов

::: tip КАК ИСПОЛЬЗОВАТЬ?
Нужно вписать название кластера на серверах, где сообщение будет получено и отправлено
```yaml
clusters: 
   - "test_cluster"
```

Так сервера связываются между собой и сообщения будут только между этими кластерами
:::

### `log-filter`

Идея взята [отсюда](https://github.com/Whitescan/ConsoleFilter/blob/master/src/main/java/dev/whitescan/consolefilter/share/LogFilter.java), спасибо @Whitescan

Списком указываются сообщения, которые нужно не показывать, используя ключевые слова, встречающиеся в сообщении

::: tip НАПРИМЕР Я ХОЧУ ОТФИЛЬТРОВАТЬ
![filter](/filter.png)

Значит нужно вписать:
`Unknown or incomplete command` или `command` или `Unknown`
:::

### `database`

Можно использовать environment variables, например `${VALUE}`

::: details Настройка датабазы

#### `type`

В данный момент поддерживаются:
- `SQLite` - локальная
- `MYSQL` - серверная

#### `name`

Название базы данных

#### `host` (для MySQL)

Адрес сервера, на котором расположена база данных

#### `port` (для MySQL)

Порт подключения к базе данных на сервере

#### `user` (для MySQL)

Название пользователя, который будет использован для подключения к базе данных

#### `password` (для MySQL)

Пароль для подключения к базе данных

#### `parameters` (для MySQL)

Параметры подключения к базе данных

:::

### module

Включает или выключает работу всех модулей

- Каждый модуль имеет родителя (тот, кто выше находится)

::: tip НАПРИМЕР
```yaml
house:
  door:
  chair:
```

`house` является родителем для `door` и `chair`
:::

- Каждый модуль зависит от `enable` родителя

::: tip НАПРИМЕР
```yaml
house:
  enable: false // [!code highlight]
  door:
    enable: true
  chair:
    enable: true
```

`house` выключен, значит внезависимости от того, включены ли `door` и `chair` - они тоже будут выключены
:::
