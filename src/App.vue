<template>
  <div id="app">
    <Navbar />
    <main>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script>
import Navbar from "./assets/components/Navbar.vue";
import HomeSection from "./assets/components/HomeSection.vue";
import AboutSection from "./assets/components/AboutSection.vue";
import ProjectsSection from "./assets/components/ProjectsSection.vue";
import ContactSection from "./assets/components/ContactSection.vue";

export default {
  name: "App",
  components: {
    Navbar,
    HomeSection,
    AboutSection,
    ProjectsSection,
    ContactSection,
  },
};
</script>

<style src="./styles.css"></style>
