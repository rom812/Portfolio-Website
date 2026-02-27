import { ref, onMounted, onUnmounted } from 'vue';

export function useMouseParallax() {
  const mouseX = ref(0);
  const mouseY = ref(0);

  function onMouseMove(e) {
    mouseX.value = (e.clientX / window.innerWidth) - 0.5;
    mouseY.value = (e.clientY / window.innerHeight) - 0.5;
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
  });

  return { mouseX, mouseY };
}
