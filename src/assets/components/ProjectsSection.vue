<template>
  <section id="projects">
    <h2 class="animate-fade-in-up">Featured Projects</h2>
    <div class="grid grid-cols-2">
      <article class="card animate-subtle-scale delay-50">
        <h3>Twin - AI Digital Twin <span class="ai-badge">AWS Bedrock</span></h3>
        <p>
          An AI-powered digital twin deployed on AWS Bedrock that represents me through advanced
          language models. This project showcases cutting-edge AI deployment on cloud infrastructure,
          demonstrating real-time conversational capabilities and personalized AI interactions.
        </p>
        <ul class="container">
          <li>
            <strong>AWS Bedrock Integration:</strong> Leverages Amazon Bedrock for scalable, production-ready
            AI model deployment with managed infrastructure and enterprise-grade reliability.
          </li>
          <li>
            <strong>Advanced AI Capabilities:</strong> Implements sophisticated language understanding,
            context management, and personalized responses using state-of-the-art foundation models.
          </li>
          <li>
            <strong>Cloud Architecture:</strong> Built with modern cloud-native principles, ensuring
            scalability, security, and optimal performance for AI workloads.
          </li>
        </ul>
        <div class="project-links">
          <a
            class="button"
            href="https://github.com/rom812/twin"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
          <a
            class="button secondary"
            href="https://d2ckx9q1w19fw1.cloudfront.net/"
            target="_blank"
            rel="noreferrer"
          >
            Try Live Demo
          </a>
        </div>
      </article>
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
        <h3>CareerAssist - Enterprise AI Career Platform <span class="ai-badge">AWS Serverless</span></h3>
        <p>
          A production-ready, multi-agent AI system built on AWS serverless architecture to help job seekers
          optimize their careers through intelligent CV analysis, interview preparation, and application tracking.
        </p>
        <ul class="container">
          <li>
            <strong>Multi-Agent Architecture:</strong> Six specialized AI agents (Orchestrator, Extractor, Analyzer,
            Interviewer, Charter, Researcher) coordinating via event-driven orchestration using SQS queues and AWS Lambda.
          </li>
          <li>
            <strong>AWS Serverless Infrastructure:</strong> Built with Lambda, App Runner, SageMaker, Bedrock (Nova Pro),
            Aurora Serverless v2, and custom S3-based vector storage for cost-effective RAG capabilities.
          </li>
          <li>
            <strong>Enterprise Features:</strong> CV optimization with ATS-friendly rewrites, gap analysis with fit scoring,
            interview preparation, application tracking analytics, and automated job discovery using Playwright MCP for web scraping.
          </li>
        </ul>
        <div class="project-links">
          <a
            class="button"
            href="https://github.com/rom812/CareerAssist"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
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
