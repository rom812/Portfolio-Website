<template>
  <section id="projects">
    <h2>Selected Projects</h2>
    <div class="grid grid-cols-2">
      <article class="card">
        <h3>Nova Analytics Platform</h3>
        <p>
          Built a modular analytics platform with real-time dashboards powered
          by Vue 3, TypeScript, and D3.js. Implemented component-driven design
          system and live collaboration features.
        </p>
        <div class="project-links">
          <a class="button" href="https://example.com" target="_blank" rel="noreferrer">
            View Case Study
          </a>
          <a href="https://github.com/example" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </article>
      <article class="card">
        <h3>Aurora UI Kit</h3>
        <p>
          Created a reusable UI kit for enterprise web apps with storybook
          documentation and accessibility-first components. Enabled teams to
          ship interfaces 40% faster.
        </p>
        <div class="project-links">
          <a class="button" href="https://example.com" target="_blank" rel="noreferrer">
            View Live Demo
          </a>
          <a href="https://github.com/example" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
};
</script>
