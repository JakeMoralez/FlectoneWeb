<!-- #region title -->
# Комманда `/ball`
<!-- #endregion title -->



<!-- #region explanation -->
<!--@include: @/parts/words.md#explanation-->
![command ball](/commandball.png)
<!-- #endregion explanation -->



<!-- #region pathRuRU -->
<!--@include: @/parts/words.md#path--> `localizations > ru_ru.yml > command.ball`
<!-- #endregion pathRuRU -->



<!-- #region pathEnUs -->
<!--@include: @/parts/words.md#path--> `localizations > en_us.yml > command.ball`
<!-- #endregion pathEnUs -->



<!-- #region pathCommand -->
<!--@include: @/parts/words.md#path--> `command.yml > ball`
<!-- #endregion pathCommand -->


<!-- #region pathPermission -->
<!--@include: @/parts/words.md#path--> `permission.yml > command.ball`
<!-- #endregion pathPermission -->



<!-- #region defaultRuRu -->
<!--@include: @/parts/words.md#default-->
```yaml
ball:
  format: "<color:#9370DB>❓ <display_name> спросил: <message> <br>🔮 Магический шар: <u><answer></u>"
  answers:
    - "Бесспорно"
    - "Никаких сомнений"
    - "Определённо да"
    - "Это база"
    - "Можешь быть уверен в этом"
    - "Вероятнее всего"
    - "Хорошие перспективы"
    - "Да"
    - "Пока не ясно, попробуй снова"
    - "Спроси позже"
    - "Лучше не рассказывать"
    - "Сейчас нельзя предсказать"
    - "Сконцентрируйся и спроси опять"
    - "Даже не думай"
    - "Нет."
    - "Перспективы не очень хорошие"
    - "Весьма сомнительно"
```
<!-- #endregion defaultRuRu -->



<!-- #region defaultEnUs -->
<!--@include: @/parts/words.md#default-->
```yaml
ball:
  format: "<color:#9370DB>❓ <display_name> asked: <message> <br>🔮 Ball answered: <u><answer></u>"
  answers:
    - "Very doubtful"
    - "The prospects are not good"
    - "No."
    - "Don't even think about it"
    - "Concentrate and ask again"
    - "Can't predict now"
    - "It's better not to tell"
    - "Ask later"
    - "It's not clear yet, try again"
    - "Yes"
    - "Good prospects"
    - "Most likely"
    - "You can be sure of it"
    - "That's the base"
    - "Definitely yes"
    - "No doubt about it"
    - "Undeniably"
```
<!-- #endregion defaultEnUs -->



<!-- #region defaultCommand -->
<!--@include: @/parts/words.md#default-->
```yaml
ball:
  enable: true
  range: -2
  aliases:
    - "ball"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```
<!-- #endregion defaultCommand -->



<!-- #region defaultPermission -->
<!--@include: @/parts/words.md#default-->
```yaml
ball:
  name: "flectonepulse.module.command.ball"
  type: TRUE
  cooldown-bypass:
    name: "flectonepulse.module.command.ball.cooldown.bypass"
    type: OP
  sound:
    name: "flectonepulse.module.command.ball.sound"
    type: TRUE
```
<!-- #endregion defaultPermission -->



<!-- #region parameters -->
<!--@include: @/parts/words.md#parameters-->
[:file_folder:localizations/ru_ru.yml](/docs/localizations/ru_ru/command/ball)\
[:file_folder:localizations/en_us.yml](/docs/localizations/en_us/command/ball)\
[:file_folder:command.yml](/docs/command/ball/)\
[:file_folder:permission.yml](/docs/permission/command/ball/)
<!-- #endregion parameters -->



<!-- #region localization -->
### `format`

Формат сообщения, которое будет отправлено

### `answers`

Список возможных ответов
<!-- #endregion localization -->



<!-- #region command -->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
<!-- #endregion command -->



<!-- #region permission -->
<!--@include: @/parts/permission/permissionTier3.md-->
<!--@include: @/parts/permission/cooldown.md-->
<!--@include: @/parts/permission/sound.md-->
<!-- #endregion permission -->