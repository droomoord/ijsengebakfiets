<template>
  <div class="wrapper">
    <div>
      <vue-markdown v-if="content.text" :source="content.text"></vue-markdown>
    </div>
    <img :src="imgSrc" alt="" />
  </div>
</template>

<script>
import axios from "axios";
import VueMarkdown from "vue-markdown-render";

export default {
  name: "feestjes",
  data() {
    return {
      content: {},
      imgSrc: "",
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
        this.imgSrc = this.content.photo[0].formats.small.url;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 10%;
}
img {
  min-width: 250px;
  height: 250px;
  border-radius: 50%;
}
@media only screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }
  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    width: 50px;
    order: -1;
  }
}
</style>
