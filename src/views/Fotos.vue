<template>
  <div>
    <Spinner v-if="loading"> </Spinner>
    <div>
      <foto v-if="enlarged" :url="enlargedUrl" @close="enlarged = false" />
      <b-container fluid class=" bggreen foto-wrapper" v-show="!loading">
        <b-img
          v-for="foto in fotos"
          :key="foto.url"
          thumbnail
          fluid
          :src="urlBase + foto.thumbnail"
          alt="foto"
          @click="enlarge(urlBase + foto.url)"
          @load="loading = false"
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
      urlBase: "http://localhost:1337",
      fotos: [],
      enlarged: false,
      enlargedUrl: "",
      loading: true,
    };
  },
  created: function() {
    this.getFotos();
  },

  methods: {
    getFotos: async function() {
      try {
        const { data } = await axios.get(`${this.urlBase}/fotos`);
        if (data.fotos && data.fotos.length > 0) {
          data.fotos.forEach((foto) => {
            this.fotos.push({
              url: foto.url,
              thumbnail: foto.formats.thumbnail.url,
            });
          });
          this.fotos.reverse();
        }
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
