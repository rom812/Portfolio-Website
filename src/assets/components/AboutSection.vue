<template>
  <section id="about">
    <h2 ref="sectionTitle">Profile Snapshot</h2>
    <p ref="sectionDescription">
      Detail-oriented builder who enjoys turning complex backend and AI
      challenges into dependable products. I draw on a solid foundation in
      computer science fundamentals, data-driven experimentation, and
      cross-functional teamwork to ship solutions that scale gracefully.
    </p>
    <div class="grid grid-cols-2" ref="aboutGrid">
      <article class="card" ref="card1">
        <h3>Professional Experience</h3>
        <ul class="container">
          <li>
            <strong>BIM Automation Developer · 360 Program, Civil & Environmental Engineering Dept.</strong>
            <p>October 2025</p>
            <p>
              Architected an AI-powered assistant enabling natural-language interaction with complex Revit models.
              Built a conversational interface triggering Revit API operations through tool-based orchestration.
              Designed and implemented C# middleware ("Semantic Wrappers") improving reliability and reducing incorrect outputs by ~90%.
              Implemented grounding pipelines and spatial reasoning logic supporting automated compliance validation.
            </p>
          </li>
          <li>
            <strong>Research Assistant (LLM & AI) · Ben Gurion University</strong>
            <p>March 2025 – August 2025</p>
            <p>
              Researched LLM behavior under adversarial prompts, jailbreaks, and stress tests.
              Built multi-agent simulations to test robustness, prompt injection, and memory manipulation.
              Developed evaluation protocols for safety, consistency, and refusal using Python, AutoGen and OpenAI tools.
            </p>
          </li>
          <li>
            <strong>Clean room engineer · Quantum Clean Global - Israel</strong>
            <p>2019 – 2021</p>
            <p>
              Handled high-value Intel semiconductor components in a clean room, ensuring usability via precise
              micro-cleaning and repairs.
            </p>
          </li>
          <li>
            <strong>Avionics Technician · Nevatim Air Base, Israeli Air Force</strong>
            <p>2017 – 2019</p>
            <p>
              Maintained avionics systems, including navigation and communication equipment, ensuring readiness
              and efficiency. Contributed to the successful execution of missions by providing technical expertise and support for
              critical aircraft systems. Successfully completed the Israeli Commanders Course (2018).
            </p>
          </li>
        </ul>
      </article>
      <article class="card" ref="card2">
        <h3>Education & Languages</h3>
        <ul class="container">
          <li>
            <strong>B.Sc. Information Systems & Software Engineering</strong>
            <p>Ben-Gurion University of the Negev · 2022 – Present | GPA: 85</p>
            <p>
              Focused on backend architectures, databases, and large language models
              with comprehensive coursework in Object Oriented Programming, Data Structures, AI, ML,
              Cybersecurity & Network Defense.
            </p>
          </li>
          <li>
            <strong>Languages</strong>
            <p>Hebrew (Native), English (Fluent), Russian (Conversational)</p>
          </li>
        </ul>
      </article>
      <article class="card" ref="card3">
        <h3>Technical Toolbox</h3>
        <div class="skills-list">
          <span class="skill-pill">Python</span>
          <span class="skill-pill">Java</span>
          <span class="skill-pill">JavaScript</span>
          <span class="skill-pill">C#</span>
          <span class="skill-pill">.NET</span>
          <span class="skill-pill">C</span>
          <span class="skill-pill">C++</span>
          <span class="skill-pill">Bash</span>
          <span class="skill-pill">SQL</span>
          <span class="skill-pill">Revit API</span>
          <span class="skill-pill">LangChain</span>
          <span class="skill-pill">AutoGen</span>
          <span class="skill-pill">RAG Pipelines</span>
          <span class="skill-pill">OpenAI APIs</span>
          <span class="skill-pill">MCP</span>
          <span class="skill-pill">Tool Orchestration</span>
          <span class="skill-pill">Node.js</span>
          <span class="skill-pill">Express.js</span>
          <span class="skill-pill">FastAPI</span>
          <span class="skill-pill">Flask</span>
          <span class="skill-pill">PostgreSQL</span>
          <span class="skill-pill">MySQL</span>
          <span class="skill-pill">Vue 3</span>
          <span class="skill-pill">Pandas</span>
          <span class="skill-pill">BeautifulSoup</span>
          <span class="skill-pill">Docker</span>
          <span class="skill-pill">Kubernetes</span>
          <span class="skill-pill">Railway</span>
          <span class="skill-pill">AirFlow</span>
          <span class="skill-pill">Git</span>
          <span class="skill-pill">Linux</span>
          <span class="skill-pill">Wireshark</span>
          <span class="skill-pill">Postman</span>
        </div>
      </article>
      <article class="card" ref="card4">
        <h3>Key Highlights</h3>
        <ul class="container">
          <li>
            <strong>Product-minded engineer</strong>
            <p>
              Collaborate with researchers, designers, and ops teams to align
              backend decisions with measurable business impact.
            </p>
          </li>
          <li>
            <strong>LLM experimentation</strong>
            <p>
              Built custom prompt evaluation workflows, safety checks, and
              fine-tuning pipelines for generative AI initiatives.
            </p>
          </li>
          <li>
            <strong>Operational excellence</strong>
            <p>
              Implement monitoring, logging, and testing practices that keep
              systems reliable even under rapid iteration.
            </p>
          </li>
        </ul>
      </article>
      <article class="card" ref="card5">
        <h3>Community & Engagement</h3>
        <ul class="container">
          <li>
            <strong>Agents Community - Tel Aviv</strong>
            <p>
              Active member of "Agents", a Gen AI community in Tel Aviv consisting of skilled AI engineers
              who are either senior professionals or use AI as a hobby. I regularly attend meetups in Tel Aviv
              where we discuss project dilemmas, share technical challenges, and learn from each other's experiences.
              This community has been invaluable for staying current with AI trends and getting expert feedback
              on my projects.
            </p>
          </li>
          <li>
            <strong>Meetups & Conferences</strong>
            <p>
              Actively participating in tech meetups and conferences throughout Tel Aviv, engaging with
              the local tech community, sharing knowledge, and learning from industry leaders in AI,
              backend engineering, and software development.
            </p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useGSAP } from "@/composables/useGSAP";
import { gsap } from "gsap";

export default {
  name: "AboutSection",
  setup() {
    const sectionTitle = ref(null);
    const sectionDescription = ref(null);
    const aboutGrid = ref(null);
    const card1 = ref(null);
    const card2 = ref(null);
    const card3 = ref(null);
    const card4 = ref(null);
    const card5 = ref(null);
    
    const { fadeInUp } = useGSAP();

    onMounted(() => {
      // Animate section title and description
      if (sectionTitle.value) {
        fadeInUp(sectionTitle.value);
      }
      if (sectionDescription.value) {
        fadeInUp(sectionDescription.value, 0.1);
      }

      // Stagger cards animation
      const cards = [
        card1.value,
        card2.value,
        card3.value,
        card4.value,
        card5.value,
      ].filter(Boolean);

      if (cards.length > 0) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutGrid.value,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        // Enhanced hover effects for skill pills
        const skillPills = document.querySelectorAll('.skill-pill');
        skillPills.forEach((pill) => {
          pill.addEventListener('mouseenter', () => {
            gsap.to(pill, {
              scale: 1.1,
              y: -3,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          pill.addEventListener('mouseleave', () => {
            gsap.to(pill, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    });

    return {
      sectionTitle,
      sectionDescription,
      aboutGrid,
      card1,
      card2,
      card3,
      card4,
      card5,
    };
  },
};
</script>
