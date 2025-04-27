---
title: "Аналитика"
authors:
  - TheFaser
---

<script setup>
import { ref } from 'vue'

const overlayVisible = ref(false)
const overlaySrc     = ref('')
const overlayCaption = ref('')

function showOverlay(src, caption) {
  overlaySrc.value     = src
  overlayCaption.value = caption
  overlayVisible.value = true
}

function hideOverlay() {
  overlayVisible.value = false
}
</script>

<style>
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 128px;
  padding: 20px 0;
  overflow: visible;
}

.metrics-item {
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: zoom-in;
}

.metrics-item h3 {
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
}

.metrics-item img {
  width: 100%;
  max-width: 300px;
  transition: transform .2s ease;
}


.metrics-item:hover img {
  transform: scale(1.05);
}

.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.overlay-img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
}

.overlay-caption {
  margin-top: 12px;
  color: #fff;
  font-size: 1rem;
  text-align: center;
}

.overlay-close {
  position: absolute;
  top: 20px; right: 30px;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
</style>

<div v-if="overlayVisible" class="overlay" @click.self="hideOverlay">
  <button class="overlay-close" @click="hideOverlay">×</button>
  <img :src="overlaySrc" class="overlay-img" />
  <div class="overlay-caption">{{ overlayCaption }}</div>
</div>

# Серверная аналитика

На этой странице собраны основные графики по работе серверов: 
какие версии используются, сколько памяти потребляется, 
какие модули работают, как распределены серверы, 
какие режимы включены и какова активность игроков за последние дни. 
Нажми на любую картинку, чтобы открыть её в большем размере

::: tip ПРИМЕЧАНИЕ
Ты в любой момент можешь отключить сбор этих данных на своём сервере [здесь](/docs/config#metrics)
:::

<div class="metrics-grid">

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg', 'Активность игроков и серверов')">
    <img src="/api/pulse/metrics/svg" alt="Main Time Series">
    <h3>Активность (7 дней)</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/server-versions', 'Версии серверов')">
    <img src="/api/pulse/metrics/svg/server-versions" alt="Server Versions">
    <h3>Версии серверов</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/core-counts', 'Количество ядер CPU')">
    <img src="/api/pulse/metrics/svg/core-counts" alt="Core Counts">
    <h3>Количество ядер CPU</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/ram-usage', 'Использование оперативной памяти')">
    <img src="/api/pulse/metrics/svg/ram-usage" alt="RAM Usage">
    <h3>Оперативная память</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/modules-status', 'Статус модулей')">
    <img src="/api/pulse/metrics/svg/modules-status" alt="Modules Status">
    <h3>Статус модулей</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/project-versions', 'Версии FlectonePulse')">
    <img src="/api/pulse/metrics/svg/project-versions" alt="Project Versions">
    <h3>Версии FlectonePulse</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/project-languages', 'Языки проекта')">
    <img src="/api/pulse/metrics/svg/project-languages" alt="Project Languages">
    <h3>Языки FlectonePulse</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/server-types', 'Типы серверов')">
    <img src="/api/pulse/metrics/svg/server-types" alt="Server Types">
    <h3>Типы серверов</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/system-archs', 'Архитектура системы')">
    <img src="/api/pulse/metrics/svg/system-archs" alt="System Architectures">
    <h3>Архитектура системы</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/operation-systems', 'Операционные системы')">
    <img src="/api/pulse/metrics/svg/operation-systems" alt="Operating Systems">
    <h3>Операционные системы</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/java-versions', 'Версии Java')">
    <img src="/api/pulse/metrics/svg/java-versions" alt="Java Versions">
    <h3>Версии Java</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/proxy-modes', 'Режимы прокси')">
    <img src="/api/pulse/metrics/svg/proxy-modes" alt="Proxy Modes">
    <h3>Режимы прокси</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/online-mode', 'Онлайн и оффлайн режимы')">
    <img src="/api/pulse/metrics/svg/online-mode" alt="Online Mode">
    <h3>Онлайн / оффлайн</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/server-locations', 'География серверов')">
    <img src="/api/pulse/metrics/svg/server-locations" alt="Server Locations">
    <h3>География серверов</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/database-modes', 'Режимы баз данных')">
    <img src="/api/pulse/metrics/svg/database-modes" alt="Database Modes">
    <h3>Режимы баз данных</h3>
  </div>

</div>