<template>
  <div v-if="!isTouchDevice" class="cursor-follower" ref="followerEl">
    <div class="cursor-dot" ref="dotEl"></div>
    <div class="cursor-ring" ref="ringEl"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

export default {
  name: "CursorFollower",
  setup() {
    const followerEl = ref(null);
    const dotEl = ref(null);
    const ringEl = ref(null);
    const isTouchDevice = ref(false);

    let quickToDotX, quickToDotY, quickToRingX, quickToRingY;

    function onMouseMove(e) {
      if (quickToDotX) {
        quickToDotX(e.clientX);
        quickToDotY(e.clientY);
        quickToRingX(e.clientX);
        quickToRingY(e.clientY);
      }
    }

    function onMouseEnterInteractive() {
      if (ringEl.value) {
        gsap.to(ringEl.value, {
          scale: 1.8,
          borderColor: "rgba(96, 165, 250, 0.6)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
      if (dotEl.value) {
        gsap.to(dotEl.value, {
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }

    function onMouseLeaveInteractive() {
      if (ringEl.value) {
        gsap.to(ringEl.value, {
          scale: 1,
          borderColor: "rgba(96, 165, 250, 0.4)",
          duration: 0.3,
          ease: "power2.out",
        });
      }
      if (dotEl.value) {
        gsap.to(dotEl.value, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }

    function onMouseEnterCard() {
      if (ringEl.value) {
        gsap.to(ringEl.value, {
          scale: 2.5,
          borderColor: "rgba(139, 92, 246, 0.5)",
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      }
      if (dotEl.value) {
        gsap.to(dotEl.value, {
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }

    function onMouseLeaveCard() {
      onMouseLeaveInteractive();
    }

    function setupHoverListeners() {
      // Interactive elements: links, buttons
      document.querySelectorAll("a, button, .button, .filter-btn, .skill-pill").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
      // Project cards get a bigger expand
      document.querySelectorAll(".project-card, .card").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterCard);
        el.addEventListener("mouseleave", onMouseLeaveCard);
      });
    }

    function cleanupHoverListeners() {
      document.querySelectorAll("a, button, .button, .filter-btn, .skill-pill").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      document.querySelectorAll(".project-card, .card").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterCard);
        el.removeEventListener("mouseleave", onMouseLeaveCard);
      });
    }

    onMounted(() => {
      // Detect touch device
      isTouchDevice.value =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      if (isTouchDevice.value) return;

      // Use gsap.quickTo for performant cursor tracking
      if (dotEl.value) {
        quickToDotX = gsap.quickTo(dotEl.value, "x", { duration: 0.15, ease: "power2.out" });
        quickToDotY = gsap.quickTo(dotEl.value, "y", { duration: 0.15, ease: "power2.out" });
      }
      if (ringEl.value) {
        quickToRingX = gsap.quickTo(ringEl.value, "x", { duration: 0.35, ease: "power2.out" });
        quickToRingY = gsap.quickTo(ringEl.value, "y", { duration: 0.35, ease: "power2.out" });
      }

      window.addEventListener("mousemove", onMouseMove);

      // Delay listener setup so DOM elements from other components are rendered
      setTimeout(setupHoverListeners, 500);
    });

    onUnmounted(() => {
      window.removeEventListener("mousemove", onMouseMove);
      cleanupHoverListeners();
    });

    return {
      followerEl,
      dotEl,
      ringEl,
      isTouchDevice,
    };
  },
};
</script>
