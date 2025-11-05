<template>
  <section id="contact">
    <h2>Contact</h2>
    <p>
      Let's build something remarkable together. I'm open to freelance work,
      product collaborations, and speaking opportunities. Reach out through the
      channels below and I'll respond within 2 business days.
    </p>
    <div class="contact-links">
      <a href="mailto:hello@jordan.dev">hello@jordan.dev</a>
      <a href="https://www.linkedin.com/in/jordan-lee" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://twitter.com/jordan_codes" target="_blank" rel="noreferrer">Twitter</a>
      <a href="https://github.com/jordan-lee" target="_blank" rel="noreferrer">GitHub</a>
    </div>
    <footer>
      <small>© {{ new Date().getFullYear() }} Jordan Lee. Crafted with Vue.</small>
    </footer>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>
