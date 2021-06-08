<template>
  <div class="wrapper" @click="$emit('close')">
    <Spinner v-if="loading"> </Spinner>
    <img :src="url" alt="" @load="loading = false" v-show="!loading" />
  </div>
</template>

<script>
import Spinner from "../UI/Spinner.vue";
export default {
  name: "foto",
  props: ["url"],
  data() {
    return {
      loading: true,
    };
  },
  components: { Spinner },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(23, 22, 22, 0.687);
  z-index: 1;
  cursor: pointer;
}
img {
  max-width: 80%;
  max-height: 80%;
  cursor: auto;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
