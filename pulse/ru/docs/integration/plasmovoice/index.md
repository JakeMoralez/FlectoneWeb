---
authors:
  - TheFaser
---

# PlasmoVoice

Интеграция с плагином PlasmoVoice позволяет мутить игроков, которые были замучены с помощью `/mute`. Также, если один игрок заигнорировал другого с помощью `/ignore`, он его не будет слышать.
![mute](/mute.png)

[//]: # (integration.yml)
<!--@include: @/parts/words.md#setting-->
<!--@include: @/parts/words.md#path--> `integration.yml → plasmovoice`

<!--@include: @/parts/words.md#default-->
<<< @/files/integration.yml#plasmovoice

<!--@include: @/parts/enable.md-->

[//]: # (permission.yml)
<!--@include: @/parts/words.md#permission-->
<!--@include: @/parts/words.md#path--> `permission.yml → integration.plasmovoice`

<!--@include: @/parts/words.md#default-->
<<< @/files/permission.yml#plasmovoice

<!--@include: @/parts/permission/permissionTier3.md-->