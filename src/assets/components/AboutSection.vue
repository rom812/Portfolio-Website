<template>
  <section id="about">
    <h2 class="animate-fade-in-up">Profile Snapshot</h2>
    <p class="animate-fade-in-up delay-100">
      Detail-oriented builder who enjoys turning complex backend and AI
      challenges into dependable products. I draw on a solid foundation in
      computer science fundamentals, data-driven experimentation, and
      cross-functional teamwork to ship solutions that scale gracefully.
    </p>
    <div class="grid grid-cols-2">
      <article class="card animate-subtle-scale delay-200">
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
      <article class="card animate-subtle-scale delay-300">
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
      <article class="card animate-subtle-scale delay-400">
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
      <article class="card animate-subtle-scale delay-500">
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
      <article class="card animate-subtle-scale delay-600">
        <h3>Community & Engagement</h3>
        <ul class="container">
          <li>
            <strong>Agents Community - Tel Aviv</strong>
            <p>
              Active member of the "Agents" community in Tel Aviv, where we regularly meet up to discuss
              the latest tech stacks, methodologies, and AI agent architectures. Contributing to knowledge
              sharing and staying at the forefront of AI development trends.
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
export default {
  name: "AboutSection",
};
</script>
