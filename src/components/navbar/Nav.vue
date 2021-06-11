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
        <div class="logo red">
          <img src="../../assets/logo.jpeg" alt="" />
          <div class="text yellow">IJs en Gebakfiets</div>
        </div>
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
  gap: 7px;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .navbar-nav {
    font-size: 0.9em;
  }
}
.logo {
  width: 100px;
  position: relative;
  margin-top: 20px;
  display: none;
}
.logo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  font-family: "Amatic SC", cursive;
}
.logo .text {
  position: absolute;
  top: -20px;
  left: -10px;
  font-family: "Amatic SC", cursive;
  font-weight: bold;
  font-size: 2em;
  text-shadow: 1px 1px rgb(0, 0, 0);
  line-height: 1;
}
@media only screen and (max-width: 600px) {
  .logo {
    display: block;
  }
}
</style>
