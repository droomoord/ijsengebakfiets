<template>
  <div class="navbar-wrapper bgred">
    <b-navbar type="dark">
      <b-navbar-nav>
        <b-nav-item
          v-for="page in pages"
          :key="page.route"
          href="#"
          :to="page.route"
          active-class="active"
          >{{ page.title }}</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "navbar",
  mounted() {
    this.getTitles();
  },
  data() {
    return {
      pages: [],
    };
  },
  methods: {
    getTitles: async function() {
      try {
        const { data } = await axios.get(
          "https://strapi-wlh52.ondigitalocean.app/pages"
        );
        data.sort((a, b) => a.order - b.order);
        this.pages = data.map((page) => {
          return { title: page.title, route: page.route };
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.navbar-wrapper {
  position: sticky;
  /* width: 100vw; */
  top: 0;
}
.navbar-nav {
  justify-content: center !important;
  width: 100%;
}
</style>
