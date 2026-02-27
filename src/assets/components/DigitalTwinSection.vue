<template>
  <section id="digital-twin">
    <h2 ref="sectionTitle">Digital Twin</h2>
    <p ref="sectionDescription">
      Chat with my AI-powered digital twin — it knows my experience, skills, and
      projects. Ask it anything you'd ask me in an interview.
    </p>
    <div class="card twin-card" ref="twinCard">
      <iframe
        src="https://d2ckx9q1w19fw1.cloudfront.net"
        title="Digital Twin Chat"
        allow="microphone"
      ></iframe>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useGSAP } from "@/composables/useGSAP";

export default {
  name: "DigitalTwinSection",
  setup() {
    const sectionTitle = ref(null);
    const sectionDescription = ref(null);
    const twinCard = ref(null);

    const { fadeInUp, scaleIn } = useGSAP();

    onMounted(() => {
      if (sectionTitle.value) {
        fadeInUp(sectionTitle.value);
      }
      if (sectionDescription.value) {
        fadeInUp(sectionDescription.value, 0.1);
      }
      if (twinCard.value) {
        scaleIn(twinCard.value, 0.2);
      }
    });

    return {
      sectionTitle,
      sectionDescription,
      twinCard,
    };
  },
};
</script>
