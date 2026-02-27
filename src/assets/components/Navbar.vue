<template>
  <nav class="navbar" :class="{ hidden: navHidden }" ref="navbarEl">
    <div class="content">
      <a href="#home" class="brand nav-brand" @click.prevent="scrollToSection('home')">Rom Sheynis</a>
      <div class="nav-links" :class="{ open: menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="'#' + link.id"
          :class="{ active: activeSection === link.id }"
          @click.prevent="scrollToSection(link.id)"
        >
          {{ link.label }}
        </a>
      </div>
      <button
        class="hamburger"
        :class="{ active: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="nav-overlay" :class="{ open: menuOpen }" @click="menuOpen = false"></div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

export default {
  name: "AppNavbar",
  setup() {
    const navbarEl = ref(null);
    const activeSection = ref("home");
    const menuOpen = ref(false);
    const navHidden = ref(false);

    const navLinks = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "digital-twin", label: "Digital Twin" },
      { id: "contact", label: "Contact" },
    ];

    let lastScrollY = 0;
    let observer = null;

    function scrollToSection(id) {
      menuOpen.value = false;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    function onScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        navHidden.value = true;
      } else {
        navHidden.value = false;
      }
      lastScrollY = currentY;
    }

    function setupScrollSpy() {
      const sections = document.querySelectorAll("section[id]");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeSection.value = entry.target.id;
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      sections.forEach((section) => observer.observe(section));
    }

    onMounted(() => {
      // Entrance animation
      if (navbarEl.value) {
        gsap.from(navbarEl.value, {
          y: -60,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
        });
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      setupScrollSpy();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
      if (observer) observer.disconnect();
    });

    return {
      navbarEl,
      activeSection,
      menuOpen,
      navHidden,
      navLinks,
      scrollToSection,
    };
  },
};
</script>
