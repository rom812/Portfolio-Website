<template>
  <section id="projects">
    <h2>Featured Project</h2>
    <div class="grid grid-cols-2">
      <article class="card">
        <h3>Full-Stack Recipe Management Platform</h3>
        <p>
          A comprehensive full-stack recipe application built with modern web technologies,
          featuring recipe discovery, user authentication, and personalized recipe management.
        </p>
        <ul class="container">
          <li>
            <strong>Modern Tech Stack:</strong> Built with Vue 3 frontend and Node.js/Express backend,
            utilizing MySQL/PostgreSQL databases for reliable data storage and management.
          </li>
          <li>
            <strong>Rich Features:</strong> Integrated Spoonacular API for extensive recipe database,
            implemented secure authentication, advanced search and filtering capabilities, favorites system,
            and personal recipe management.
          </li>
          <li>
            <strong>Professional Deployment:</strong> Dockerized backend for consistent deployment
            and scalability, with REST API design following best practices.
          </li>
        </ul>
        <div class="project-links">
          <a
            class="button"
            href="mailto:romsh12@gmail.com?subject=Recipe%20Platform%20Demo"
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
