<template>
  <section id="home">
    <div class="home-hero">
      <div ref="heroContent">
        <p class="brand" ref="brandText">Hi, I'm</p>
        <h1 ref="heroTitle">Rom Sheynis — Software Developer</h1>
        <p ref="heroDescription">
          Software developer specializing in backend engineering, generative AI, and data-driven systems.
          I build production-ready services and maintainable data pipelines that combine clean code,
          measurable impact, and scalable architectures.
        </p>
        <div class="project-links" ref="heroButtons">
          <a class="button" href="#projects">Explore Projects</a>
          <a class="button secondary" href="./rom-cv.pdf" download="rom-cv.pdf">Download CV</a>
          <a class="button secondary" href="#contact">Let's Collaborate</a>
        </div>
      </div>
      <figure class="hero-illustration" ref="heroImage" :style="imageStyle">
        <img
          src="@/assets/rom-profile.jpeg"
          alt="Rom Sheynis - Software Developer"
          loading="lazy"
        />
      </figure>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useGSAP } from "@/composables/useGSAP";
import { useMouseParallax } from "@/composables/useMouseParallax";
import { gsap } from "gsap";

export default {
  name: "HomeSection",
  setup() {
    const heroContent = ref(null);
    const brandText = ref(null);
    const heroTitle = ref(null);
    const heroDescription = ref(null);
    const heroButtons = ref(null);
    const heroImage = ref(null);
    
    const { mouseX, mouseY } = useMouseParallax();
    const { fadeInUp, fadeIn } = useGSAP();

    // Parallax effect for hero image
    const imageStyle = computed(() => {
      const translateX = mouseX.value * 20;
      const translateY = mouseY.value * 20;
      return {
        transform: `translate(${translateX}px, ${translateY}px)`,
        transition: 'transform 0.1s ease-out',
      };
    });

    onMounted(() => {
      // Initial entrance animations
      if (brandText.value) {
        gsap.from(brandText.value, {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      if (heroTitle.value) {
        gsap.from(heroTitle.value, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        });
      }

      if (heroDescription.value) {
        gsap.from(heroDescription.value, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          delay: 0.4,
          ease: 'power3.out',
        });
      }

      if (heroButtons.value) {
        gsap.from(heroButtons.value.children, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }

      if (heroImage.value) {
        gsap.from(heroImage.value, {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'back.out(1.7)',
        });
      }

      // Enhanced hover effect for buttons
      const buttons = heroButtons.value?.querySelectorAll('.button');
      buttons?.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    });

    return {
      heroContent,
      brandText,
      heroTitle,
      heroDescription,
      heroButtons,
      heroImage,
      imageStyle,
    };
  },
};
</script>
