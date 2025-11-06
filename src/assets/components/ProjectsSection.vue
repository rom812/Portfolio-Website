<template>
  <section id="projects">
    <h2 class="animate-fade-in-up">Featured Projects</h2>
    <div class="grid grid-cols-2">
      <article class="card animate-subtle-scale delay-100">
        <h3>Study Pal – AI-Powered Study Assistant <span class="status-badge">In Progress</span></h3>
        <p>
          An intelligent multi-agent system that orchestrates smart scheduling, adaptive tutoring, and personalized motivation
          to create a comprehensive AI-driven study companion.
        </p>
        <ul class="container">
          <li>
            <strong>Multi-Agent Architecture:</strong> Built with LangChain and LangGraph to coordinate three specialized agents:
            Scheduler (time management), Motivator (personalized inspiration), and Tutor (adaptive learning with RAG).
          </li>
          <li>
            <strong>Advanced AI Integration:</strong> Implements RAG pipeline with ChromaDB/Pinecone for vector storage,
            PDF ingestion, intelligent quizzes, and real-time feedback loops. Uses OpenAI APIs for natural language understanding.
          </li>
          <li>
            <strong>Smart Integrations:</strong> Connects with Google Calendar and Gmail via Model Context Protocol (MCP)
            for automated scheduling and reminders. Includes comprehensive Pydantic validation and pytest coverage.
          </li>
        </ul>
        <div class="project-links">
          <a
            class="button"
            href="https://github.com/rom812/study-pal"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </article>
      <article class="card animate-subtle-scale delay-200">
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
      <article class="card animate-subtle-scale delay-300">
        <h3>Spotify Hit Predictor – Machine Learning Pipeline</h3>
        <p>
          Compact end-to-end pipeline that estimates a track's chance of entering Spotify's Top 50 by pairing audio DNA with
          artist momentum and release cadence signals.
        </p>
        <ul class="container">
          <li>
            <strong>Curated Feature Suite:</strong> Blends Spotify audio descriptors with collaboration ratios, drop frequency,
            and listener trend deltas surfaced in the project README.
          </li>
          <li>
            <strong>Trusted Modeling Stack:</strong> Benchmarks gradient boosting, XGBoost, and calibrated logistic models with
            cross-validation and ROC-AUC tracking baked into the notebooks.
          </li>
          <li>
            <strong>Product-Ready Insights:</strong> Ships SHAP explainability, launch recommendation dashboards, and a
            documented retraining workflow for marketing teams.
          </li>
        </ul>
        <div class="project-links">
          <a
            class="button"
            href="https://github.com/romsheynis/spotify-hit-predictor"
            target="_blank"
            rel="noreferrer"
          >
            View Project Repository
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
