<template>
  <section id="projects">
    <h2 ref="sectionTitle">Featured Projects</h2>
    <p ref="sectionDescription">
      A selection of projects that reflect my focus on backend engineering,
      generative AI, and building products that solve real problems.
    </p>

    <div class="filter-buttons" ref="filterButtons">
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-btn"
        :class="{ active: activeFilter === cat }"
        @click="setFilter(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-3" ref="projectGrid">
      <article
        v-for="project in filteredProjects"
        :key="project.title"
        class="card project-card"
        :ref="(el) => el && projectRefs.push(el)"
      >
        <div class="card-header">
          <h3>{{ project.title }}</h3>
          <span v-if="project.aiBadge" class="ai-badge">AI</span>
          <span v-if="project.status === 'In Progress'" class="status-badge">In Progress</span>
        </div>
        <p class="project-description">{{ project.description }}</p>
        <div class="tech-stack">
          <span v-for="tech in project.tech" :key="tech" class="skill-pill small">
            {{ tech }}
          </span>
        </div>
        <div class="card-links">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noreferrer"
            class="button secondary small"
          >
            GitHub
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noreferrer"
            class="button small"
          >
            Live Demo
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onBeforeUpdate } from "vue";
import { useGSAP } from "@/composables/useGSAP";
import { gsap } from "gsap";

export default {
  name: "ProjectsSection",
  setup() {
    const sectionTitle = ref(null);
    const sectionDescription = ref(null);
    const filterButtons = ref(null);
    const projectGrid = ref(null);
    const projectRefs = ref([]);
    const activeFilter = ref("All");

    const { fadeInUp } = useGSAP();

    const categories = ["All", "AI / ML", "Full-Stack"];

    const projects = [
      {
        title: "Digital Twin — AI Interview Assistant",
        description:
          "A full-stack AI-powered digital twin that represents me professionally on my portfolio. Recruiters chat with an AI agent grounded in my CV and work history — it never improvises or halluccinates. Features visual context panels (career timeline, project cards, skill radar) and persistent conversation memory.",
        tech: ["Next.js", "FastAPI", "AWS Bedrock", "S3", "Lambda", "CloudFront", "Terraform"],
        category: "Full-Stack",
        aiBadge: true,
        status: "Complete",
        github: "https://github.com/rom812/twin",
        demo: "https://d2ckx9q1w19fw1.cloudfront.net/",
      },
      {
        title: "Study Pal — AI Multimodal Study Companion",
        description:
          "An autonomous study mentor built on LangGraph with a multi-agent architecture. Six specialised agents collaborate to plan lessons, deliver RAG-powered tutoring, detect knowledge gaps, schedule Pomodoro sessions via Google Calendar, and keep motivation high with persona-aligned coaching.",
        tech: ["Python", "LangGraph", "LangChain", "FastAPI", "Next.js", "ChromaDB", "OpenAI", "Docker"],
        category: "AI / ML",
        aiBadge: true,
        status: "Complete",
        github: "https://github.com/rom812/study-pal",
        demo: null,
      },
      {
        title: "CareerAssist — AI Career Advisor",
        description:
          "Built an AI-powered career assistant that provides personalised job-search guidance, resume feedback, and interview preparation using RAG pipelines over curated career resources.",
        tech: ["Python", "FastAPI", "OpenAI", "RAG", "PostgreSQL"],
        category: "AI / ML",
        aiBadge: true,
        status: "Complete",
        github: "https://github.com/rom812/CareerAssist",
        demo: null,
      },
      {
        title: "Spotify Hit Predictor — ML Model",
        description:
          "Built a machine learning classification model that predicts whether a song will become a Spotify hit based on audio features, achieving high accuracy through feature engineering and model tuning.",
        tech: ["Python", "Jupyter", "Pandas", "scikit-learn", "Matplotlib"],
        category: "AI / ML",
        aiBadge: true,
        status: "Complete",
        github: "https://github.com/rom812/Spotify-Popularity-Predictive-Model",
        demo: null,
      },
    ];

    const filteredProjects = computed(() => {
      if (activeFilter.value === "All") return projects;
      return projects.filter((p) => p.category === activeFilter.value);
    });

    function setFilter(cat) {
      activeFilter.value = cat;
      // Re-animate cards on filter change
      setTimeout(() => {
        const cards = projectGrid.value?.querySelectorAll(".project-card");
        if (cards && cards.length) {
          gsap.from(cards, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          });
        }
      }, 10);
    }

    // Reset refs before each update so v-for refs don't accumulate
    onBeforeUpdate(() => {
      projectRefs.value = [];
    });

    onMounted(() => {
      if (sectionTitle.value) {
        fadeInUp(sectionTitle.value);
      }
      if (sectionDescription.value) {
        fadeInUp(sectionDescription.value, 0.1);
      }
      if (filterButtons.value) {
        gsap.from(filterButtons.value.children, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: filterButtons.value,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Stagger project cards
      setTimeout(() => {
        const cards = projectGrid.value?.querySelectorAll(".project-card");
        if (cards && cards.length) {
          gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectGrid.value,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      }, 50);
    });

    return {
      sectionTitle,
      sectionDescription,
      filterButtons,
      projectGrid,
      projectRefs,
      activeFilter,
      categories,
      filteredProjects,
      setFilter,
    };
  },
};
</script>
