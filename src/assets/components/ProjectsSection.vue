<template>
  <section id="projects">
    <h2>Featured Project</h2>
    <div class="grid grid-cols-2">
      <article class="card">
        <h3>Delightful Bites · Generative AI Recipe Companion</h3>
        <p>
          AI-powered platform that curates personalised meal plans and shopping
          lists by blending LLM creativity with nutrition rules and pantry
          constraints.
        </p>
        <ul class="container">
          <li>
            <strong>Smart planning:</strong> Built multi-agent pipeline across
            Python, Node.js, and Express to analyse user preferences, dietary
            needs, and seasonal ingredients before crafting recipes.
          </li>
          <li>
            <strong>Reliable delivery:</strong> Implemented observability and
            evaluation layers that flag hallucinations, enforce ingredient
            substitutions, and keep recommendations accurate.
          </li>
          <li>
            <strong>Full-stack experience:</strong> Deployed modular services on
            PostgreSQL and MongoDB with reusable REST APIs, automated testing,
            and infrastructure as code.
          </li>
        </ul>
        <div class="project-links">
          <a
            class="button"
            href="mailto:romsh21@gmail.com?subject=Delightful%20Bites%20Demo"
          >
            Request a Demo
          </a>
          <a
            href="https://github.com/romsheynis"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
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
