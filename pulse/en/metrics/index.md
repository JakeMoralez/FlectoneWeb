---
title: "Metrics"
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

# Server Analytics

This page contains key graphs about server operations:
which versions are being used, memory consumption,
active modules, server distribution,
enabled modes, and player activity over recent days.
Click on any image to view it in larger size.

::: tip NOTE
You can disable this data collection for your server at any time [here](/docs/config#metrics)
:::

<div class="metrics-grid">

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg', 'Player and server activity')">
    <img src="/api/pulse/metrics/svg" alt="Main Time Series">
    <h3>Activity (7 days)</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/server-versions', 'Server versions')">
    <img src="/api/pulse/metrics/svg/server-versions" alt="Server Versions">
    <h3>Server versions</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/core-counts', 'CPU core count')">
    <img src="/api/pulse/metrics/svg/core-counts" alt="Core Counts">
    <h3>CPU core count</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/ram-usage', 'RAM usage')">
    <img src="/api/pulse/metrics/svg/ram-usage" alt="RAM Usage">
    <h3>RAM usage</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/modules-status', 'Module status')">
    <img src="/api/pulse/metrics/svg/modules-status" alt="Modules Status">
    <h3>Module status</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/project-versions', 'FlectonePulse versions')">
    <img src="/api/pulse/metrics/svg/project-versions" alt="Project Versions">
    <h3>FlectonePulse versions</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/project-languages', 'Project languages')">
    <img src="/api/pulse/metrics/svg/project-languages" alt="Project Languages">
    <h3>FlectonePulse languages</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/server-types', 'Server types')">
    <img src="/api/pulse/metrics/svg/server-types" alt="Server Types">
    <h3>Server types</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/system-archs', 'System architecture')">
    <img src="/api/pulse/metrics/svg/system-archs" alt="System Architectures">
    <h3>System architecture</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/operation-systems', 'Operating systems')">
    <img src="/api/pulse/metrics/svg/operation-systems" alt="Operating Systems">
    <h3>Operating systems</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/java-versions', 'Java versions')">
    <img src="/api/pulse/metrics/svg/java-versions" alt="Java Versions">
    <h3>Java versions</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/proxy-modes', 'Proxy modes')">
    <img src="/api/pulse/metrics/svg/proxy-modes" alt="Proxy Modes">
    <h3>Proxy modes</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/online-mode', 'Online and offline modes')">
    <img src="/api/pulse/metrics/svg/online-mode" alt="Online Mode">
    <h3>Online / offline</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/server-locations', 'Server geography')">
    <img src="/api/pulse/metrics/svg/server-locations" alt="Server Locations">
    <h3>Server geography</h3>
  </div>

  <div class="metrics-item" @click="showOverlay('/api/pulse/metrics/svg/database-modes', 'Database modes')">
    <img src="/api/pulse/metrics/svg/database-modes" alt="Database Modes">
    <h3>Database modes</h3>
  </div>

</div>