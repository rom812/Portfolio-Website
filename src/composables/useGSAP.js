import { onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Make ScrollTrigger available globally
window.ScrollTrigger = ScrollTrigger;

export function useGSAP() {
  let scrollTriggers = [];

  const fadeInUp = (element, delay = 0) => {
    return gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  };

  const fadeIn = (element, delay = 0) => {
    return gsap.from(element, {
      opacity: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  };

  const scaleIn = (element, delay = 0) => {
    return gsap.from(element, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      delay,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  };

  const staggerChildren = (container, children, delay = 0) => {
    return gsap.from(children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  };

  const parallax = (element, speed = 0.5) => {
    return gsap.to(element, {
      y: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  };

  const cleanup = () => {
    scrollTriggers.forEach((st) => {
      if (st && st.kill) st.kill();
    });
    scrollTriggers = [];
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };

  onUnmounted(() => {
    cleanup();
  });

  return {
    fadeInUp,
    fadeIn,
    scaleIn,
    staggerChildren,
    parallax,
    cleanup,
  };
}
