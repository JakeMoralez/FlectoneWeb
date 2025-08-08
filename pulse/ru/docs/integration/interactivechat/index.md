---
authors:
  - TheFaser
---

# InteractiveChat

Интеграция с плагином `InteractiveChat` правильно форматирует кастомные плейсхолдеры от `InteractiveChat`

::: warning ПРЕДУПРЕЖДЕНИЕ

Полной поддержки `InteractiveChat` нет и не будет, если не показываются достижения, смерти и т.д., то это проблема `InteractiveChat` и его изменения всех пакетов. Это можно исправить, отключив некоторые функции в самом конфиге `InteractiveChat`.

:::

::: warning ПРЕДУПРЕЖДЕНИЕ

С включенным `InteractiveChat` не будет работать модуль на удаление сообщений или будут дублироваться сообщения.

:::

Мой личный совет, как автора `FlectonePulse`, не используйте `InteractiveChat` на своём сервере, пока его автор не решится написать его нормально. Он банально создаёт задержку для сообщений в чате, что очень хорошо видно

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → interactivechat`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#interactivechat

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.interactivechat`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#interactivechat

<!--@include: @/parts/permission/permissionTier3.md-->