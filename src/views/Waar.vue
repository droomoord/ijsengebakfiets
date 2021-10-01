<template>
  <div class="waar">
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
        <br />
        <p>
          Klik op de onderstaande link om onze live locatie te volgen. Als je
          kunt aantonen dat je ons op deze manier hebt gevonden krijg je
          <strong>20% korting</strong> op je ijsje!
        </p>
        <vue-markdown :source="content.text"> </vue-markdown>
      </template>
    </template>
  </div>
</template>

<script>
// import axios from "axios";
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
    // dynamic:

    // getContent: async function() {
    //   try {
    //     const { data } = await axios.get(
    //       `https://strapi-wlh52.ondigitalocean.app/pages?route=${this.$route.path}`
    //     );
    //     console.log(JSON.stringify(data[0]));

    //     this.content = data[0];
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // hardcoded:

    getContent: function() {
      this.content = {
        photo: [],
        _id: "60c320bccad99f1f669bfdc5",
        order: 2,
        title: "Waar is de fiets nu?",
        text:
          "[https://maps.app.goo.gl/cZeUBxi77ezwKuzE8](https://maps.app.goo.gl/cZeUBxi77ezwKuzE8)\n\nVandaag hebben we onze ijsjes de volgende smaken:\n- Meloen\n- Hazelnoot\n- Chocola \n\n",
        active: false,
        published_at: "2021-06-11T08:37:18.620Z",
        createdAt: "2021-06-11T08:37:16.331Z",
        updatedAt: "2021-07-17T18:41:23.284Z",
        __v: 0,
        route: "/waar-is-de-fiets",
        id: "60c320bccad99f1f669bfdc5",
      };
    },
  },
};
</script>

<style scoped>
.waar {
  width: 80%;
}
h4 {
  text-align: center;
}
</style>
