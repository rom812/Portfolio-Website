<template>
  <section id="contact">
    <h2 ref="sectionTitle">Contact</h2>
    <p ref="sectionDescription">
      I'm always excited to collaborate on backend, infrastructure, and
      generative AI initiatives. Whether you need help productionising a model,
      scaling APIs, or exploring internship opportunities, let's connect.
    </p>
    <div class="contact-links" ref="contactLinks">
      <a href="mailto:romsh12@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        romsh12@gmail.com
      </a>
      <a href="tel:+972542101696">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        054-210-1696
      </a>
      <a
        href="https://www.linkedin.com/in/rom-sheynis"
        target="_blank"
        rel="noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
      <a href="https://github.com/rom812" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
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
        gsap.fromTo(contactLinks.value.children, {
          opacity: 0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactLinks.value,
            start: 'top 95%',
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
