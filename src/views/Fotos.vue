<template>
  <div>
    <div>
      <foto v-if="enlarged" :url="enlargedUrl" @close="enlarged = false" />
      <b-container fluid class=" bggreen foto-wrapper">
        <b-img
          v-for="photo in content"
          :key="photo._id"
          thumbnail
          fluid
          :src="photo.formats.thumbnail.url"
          alt="foto"
          @click="enlarge(photo.formats.large.url)"
        ></b-img>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import foto from "../components/foto/Foto.vue";

export default {
  name: "fotos",
  components: {
    foto,
  },
  data() {
    return {
      content: [],
      enlarged: false,
      enlargedUrl: "",
    };
  },
  created: function() {
    this.getFotos();
  },

  methods: {
    getFotos: async function() {
      try {
        const { data } = await axios.get(
          `https://strapi-wlh52.ondigitalocean.app/pages?route=${this.$route.path}`
        );
        this.content = data[0].photo;

        this.content.reverse();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    enlarge(url) {
      console.log(url);
      this.enlarged = true;
      this.enlargedUrl = url;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  width: 100%;
}
.foto-wrapper {
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  border: 2px solid black;
  border-radius: 5px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding: 2px;
  transition: transform 0.1s;
  cursor: pointer;
}
img:hover {
  transform: scale(1.1);
}
.loading {
  width: 100%;
  text-align: center;
}
</style>
