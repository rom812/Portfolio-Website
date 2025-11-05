<template>
  <section id="about">
    <h2>Education & Skills</h2>
    <div class="grid grid-cols-2">
      <article class="card">
        <h3>Education</h3>
        <ul class="container">
          <li>
            <strong>B.Sc. in Computer Science</strong>
            <p>University of Cascadia · 2015 – 2019</p>
          </li>
          <li>
            <strong>Human-Computer Interaction</strong>
            <p>Stanford Continuing Studies · 2022</p>
          </li>
        </ul>
      </article>
      <article class="card">
        <h3>Core Skills</h3>
        <div class="skills-list">
          <span class="skill-pill">Vue 3</span>
          <span class="skill-pill">TypeScript</span>
          <span class="skill-pill">Pinia</span>
          <span class="skill-pill">Vite</span>
          <span class="skill-pill">Tailwind CSS</span>
          <span class="skill-pill">Unit Testing</span>
          <span class="skill-pill">Design Systems</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>
