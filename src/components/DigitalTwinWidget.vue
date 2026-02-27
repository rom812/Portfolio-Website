<template>
  <div class="twin-widget">
    <button
      v-show="!isOpen"
      class="twin-widget-btn"
      ref="btnEl"
      @click="open"
      aria-label="Chat with my AI twin"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>

    <div v-show="isOpen" class="twin-widget-panel" ref="panelEl">
      <div class="twin-header">
        <span class="twin-header-title">Digital Twin</span>
        <button class="twin-close-btn" @click="close" aria-label="Close chat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <iframe
        v-if="iframeSrc"
        :src="iframeSrc"
        title="Digital Twin Chat"
        allow="microphone"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { ref, nextTick } from "vue";
import { gsap } from "gsap";

const TWIN_URL = "https://d2ckx9q1w19fw1.cloudfront.net";

export default {
  name: "DigitalTwinWidget",
  setup() {
    const isOpen = ref(false);
    const iframeSrc = ref(null);
    const btnEl = ref(null);
    const panelEl = ref(null);

    function open() {
      isOpen.value = true;
      iframeSrc.value = TWIN_URL;
      nextTick(() => {
        if (panelEl.value) {
          gsap.fromTo(
            panelEl.value,
            { scale: 0.8, opacity: 0, y: 20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.4)" }
          );
        }
      });
    }

    function close() {
      if (panelEl.value) {
        gsap.to(panelEl.value, {
          scale: 0.8,
          opacity: 0,
          y: 20,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            isOpen.value = false;
            iframeSrc.value = null;
          },
        });
      } else {
        isOpen.value = false;
        iframeSrc.value = null;
      }
    }

    return { isOpen, iframeSrc, btnEl, panelEl, open, close };
  },
};
</script>
