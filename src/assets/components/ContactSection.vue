<template>
  <section id="contact">
    <h2 ref="sectionTitle">Contact</h2>
    <p ref="sectionDescription">
      I'm always excited to collaborate on backend, infrastructure, and
      generative AI initiatives. Whether you need help productionising a model,
      scaling APIs, or exploring internship opportunities, let's connect.
    </p>
    <div class="contact-links" ref="contactLinks">
      <a href="mailto:romsh12@gmail.com">romsh12@gmail.com</a>
      <a href="tel:+972542101696">054-2101696</a>
      <a
        href="https://www.linkedin.com/in/rom-sheynis"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a href="https://github.com/romsheynis" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
    <footer>
      <small>© {{ new Date().getFullYear() }} Rom Sheynis. Crafted with Vue.</small>
    </footer>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useGSAP } from "@/composables/useGSAP";
import { gsap } from "gsap";

export default {
  name: "ContactSection",
  setup() {
    const sectionTitle = ref(null);
    const sectionDescription = ref(null);
    const contactLinks = ref(null);
    
    const { fadeInUp } = useGSAP();

    onMounted(() => {
      if (sectionTitle.value) {
        fadeInUp(sectionTitle.value);
      }
      if (sectionDescription.value) {
        fadeInUp(sectionDescription.value, 0.1);
      }
      if (contactLinks.value) {
        gsap.from(contactLinks.value.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactLinks.value,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        // Enhanced hover effects for contact links
        const links = contactLinks.value.querySelectorAll('a');
        links.forEach((link) => {
          link.addEventListener('mouseenter', () => {
            gsap.to(link, {
              scale: 1.05,
              y: -3,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          link.addEventListener('mouseleave', () => {
            gsap.to(link, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    });

    return {
      sectionTitle,
      sectionDescription,
      contactLinks,
    };
  },
};
</script>
