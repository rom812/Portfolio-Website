<template>
  <section id="home">
    <div class="home-hero">
      <div>
        <p class="brand animate-fade-in">Hi, I'm</p>
        <h1 class="animate-fade-in-up delay-100">Rom Sheynis — Software Developer</h1>
        <p class="animate-fade-in-up delay-200">
          Software developer specializing in backend engineering, generative AI, and data-driven systems.
          I build production-ready services and maintainable data pipelines that combine clean code,
          measurable impact, and scalable architectures.
        </p>
        <div class="project-links animate-fade-in-up delay-300">
          <a class="button" href="#projects">Explore Projects</a>
          <a class="button secondary" href="/Rom_Sheynis_CV.pdf" download>Download CV</a>
          <a href="#contact">Let's collaborate</a>
        </div>
      </div>
      <figure class="hero-illustration animate-subtle-scale delay-400">
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
