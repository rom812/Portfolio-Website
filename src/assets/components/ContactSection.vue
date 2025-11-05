<template>
  <section id="contact">
    <h2 class="animate-fade-in-up">Contact</h2>
    <p class="animate-fade-in-up delay-100">
      I'm always excited to collaborate on backend, infrastructure, and
      generative AI initiatives. Whether you need help productionising a model,
      scaling APIs, or exploring internship opportunities, let's connect.
    </p>
    <div class="contact-links animate-fade-in-up delay-200">
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
export default {
  name: "ContactSection",
};
</script>
