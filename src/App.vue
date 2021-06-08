<template>
  <div id="app">
    <img class="fiets" src="./assets/fiets.jpeg" alt="" />
    <div class="logo red">
      <img src="./assets/logo.jpeg" alt="" />
      <div class="text">IJs en Gebakfiets</div>
    </div>
    <Navbar> </Navbar>
    <div class="bgyellow wrapper">
      <b-container>
        <router-view> </router-view>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
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
}
.logo {
  position: absolute;
  top: 30px;
  left: 60px;
  width: 300px;
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
  min-height: 500px;
  padding-top: 5%;
}
</style>
