<template>
  <section id="home">
    <div class="home-hero">
      <div>
        <h1 class="animate-fade-in-up delay-100">
          Rom Sheynis <span class="text-accent">— Software Developer</span>
        </h1>
        <p class="subtitle animate-fade-in-up delay-200">
          Building resilient backends, intelligent automation, and data-driven platforms.
        </p>
        <p class="animate-fade-in-up delay-300">
          Software developer specializing in backend engineering, generative AI, and data-driven systems.
          I build production-ready services and maintainable data pipelines that combine clean code,
          measurable impact, and scalable architectures.
        </p>
        <div class="project-links animate-fade-in-up delay-400">
          <a class="button" href="#projects">Explore Projects</a>
          <a class="button secondary" href="./Rom_Sheynis_CV.pdf" download="Rom_Sheynis_CV.pdf">Download CV</a>
          <a class="button secondary" href="#contact">Let's Collaborate</a>
        </div>
      </div>
      <figure class="hero-illustration animate-subtle-scale delay-500">
        <img
          src="@/assets/rom-profile.jpeg"
          alt="Rom Sheynis - Software Developer"
          loading="lazy"
        />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSection",
};
</script>
