<template>
  <div>
    <template v-if="content.text">
      <p v-if="!content.active">
        Wij zijn op dit moment niet aan het rondfietsen!
        <br /><br />
        <strong>Wil je 20% korting op je ijsje?</strong>
        <br />
        Hou deze website dan goed in de gaten. Als we gaan fietsen zetten we
        hier de live-locatie aan en kun je ons volgen. Weet je ons te
        onderscheppen? Dan krijg je 20% korting op je ijsje!
      </p>
      <template v-if="content.active">
        <h4>Wij zijn op dit moment aan het verkopen!</h4>
        <p>
          Klik vanuit je smartphone op de onderstaande link om onze live locatie
          te volgen. Als je kunt aantonen dat je ons op deze manier hebt
          gevonden krijg je 20% korting op je ijsje!
        </p>
        <vue-markdown :source="content.text"> </vue-markdown>
      </template>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import VueMarkdown from "vue-markdown-render";
export default {
  name: "waar",
  data() {
    return {
      content: {},
    };
  },
  components: {
    VueMarkdown,
  },
  mounted() {
    this.getContent();
  },
  methods: {
    getContent: async function() {
      try {
        const { data } = await axios.get(
          `https://strapi-wlh52.ondigitalocean.app/pages?route=${this.$route.path}`
        );
        this.content = data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
