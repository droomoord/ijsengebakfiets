<template>
  <div id="app">
    <div class="fiets" alt="" />
    <Navbar> </Navbar>
    <div
      class="logo red"
      :class="{ 'mobile-disappear': this.$route.path !== '/' }"
    >
      <img src="./assets/logo.jpeg" alt="" />
      <div class="text">IJs en Gebakfiets</div>
    </div>
    <div class="bgyellow wrapper">
      <b-container>
        <router-view> </router-view>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Nav.vue";
export default {
  name: "App",
  components: { Navbar },
  mounted() {
    console.log(this.$route.path);
    setTimeout(() => {
      if (this.$route.path === "/") this.$router.push("/wie-zijn-wij");
    }, 1000);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");
.bggreen {
  background-color: #06d6a0 !important;
}
.bgwhite {
  background-color: #fffcf9 !important;
}
.bgyellow {
  background-color: #ffd166 !important;
}
.bgred {
  background-color: #ef476f !important;
}
.bgblue {
  background-color: #26547c !important;
}
.green {
  color: #06d6a0 !important;
}
.white {
  color: #fffcf9 !important;
}
.yellow {
  color: #ffd166 !important;
}
.red {
  color: #ef476f !important;
}
.blue {
  color: #26547c !important;
}
</style>

<style scoped>
.fiets {
  width: 100vw;
  height: 80vh;
  background-image: url("./assets/fiets.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  background-size: cover;
}
.logo {
  position: fixed;
  top: 30px;
  left: 60px;
  width: 300px;
  z-index: 4;
}
.logo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  font-family: "Amatic SC", cursive;
}
.logo .text {
  position: absolute;
  top: 20px;
  left: -30px;
  font-family: "Amatic SC", cursive;
  font-size: 2.5em;
  text-shadow: 1px 1px rgb(240, 240, 240);
}
.wrapper {
  width: 100%;
  min-height: 70vh;
  padding: 10vw 0;
  padding-top: 5%;
  padding-bottom: 100px;
}

@media only screen and (max-width: 600px) {
  .fiets {
    display: none;
  }
  .logo {
    top: 40%;
    left: 35%;
  }
  .mobile-disappear {
    display: none;
  }
  .wrapper {
    min-height: 90vh;
  }
}
</style>
