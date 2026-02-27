import { onUnmounted } from 'vue';
import Lenis from 'lenis';

export function useSmoothScroll() {
  let lenis = null;
  let rafId = null;

  // Initialize smooth scroll
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  // Update ScrollTrigger on scroll
  lenis.on('scroll', () => {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.update();
    }
  });

  // Make ScrollTrigger available globally
  window.ScrollTrigger = window.ScrollTrigger || { update: () => {} };

  onUnmounted(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    if (lenis) {
      lenis.destroy();
    }
  });

  return {
    lenis,
  };
}
