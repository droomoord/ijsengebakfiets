<template>
  <div class="bgred">
    <b-navbar type="dark">
      <b-navbar-nav>
        <b-nav-item href="#" :to="'/wie-zijn-wij'" active-class="active"
          >Wie zijn wij?</b-nav-item
        >
        <b-nav-item href="#" :to="'/waar-is-de-fiets'" active-class="active"
          >Waar is de fiets nu?</b-nav-item
        >
        <b-nav-item href="#" :to="'/fotos'" active-class="active"
          >Foto's</b-nav-item
        >
        <b-nav-item href="#" :to="'/feestjes-en-partijen'" active-class="active"
          >Feestjes en partijen</b-nav-item
        >

        <!-- <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.navbar-nav {
  justify-content: center !important;
  width: 100%;
}
</style>
