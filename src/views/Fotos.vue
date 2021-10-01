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
// import axios from "axios";
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
    // dynamic:

    // getFotos: async function() {
    //   try {
    //     const { data } = await axios.get(
    //       `https://strapi-wlh52.ondigitalocean.app/pages?route=${this.$route.path}`
    //     );
    //     this.content = data[0].photo;

    //     this.content.reverse();

    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    //hardcoded:
    getFotos: function() {
      this.content = [
        {
          _id: "611f659f4077440011adc085",
          name: "20210717_190932.jpg",
          alternativeText: "",
          caption: "",
          hash: "20210717_190932_5e3e527fb5",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 2099.36,
          width: 4128,
          height: 3096,
          url:
            "https://res.cloudinary.com/dpnvadpzl/image/upload/v1629447579/20210717_190932_5e3e527fb5.jpg",
          provider_metadata: {
            public_id: "20210717_190932_5e3e527fb5",
            resource_type: "image",
          },
          formats: {
            thumbnail: {
              name: "thumbnail_20210717_190932.jpg",
              hash: "thumbnail_20210717_190932_5e3e527fb5",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 208,
              height: 156,
              size: 10.57,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1629447580/thumbnail_20210717_190932_5e3e527fb5.jpg",
              provider_metadata: {
                public_id: "thumbnail_20210717_190932_5e3e527fb5",
                resource_type: "image",
              },
            },
            large: {
              name: "large_20210717_190932.jpg",
              hash: "large_20210717_190932_5e3e527fb5",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 1000,
              height: 750,
              size: 188.38,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1629447581/large_20210717_190932_5e3e527fb5.jpg",
              provider_metadata: {
                public_id: "large_20210717_190932_5e3e527fb5",
                resource_type: "image",
              },
            },
            medium: {
              name: "medium_20210717_190932.jpg",
              hash: "medium_20210717_190932_5e3e527fb5",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 750,
              height: 563,
              size: 111.75,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1629447582/medium_20210717_190932_5e3e527fb5.jpg",
              provider_metadata: {
                public_id: "medium_20210717_190932_5e3e527fb5",
                resource_type: "image",
              },
            },
            small: {
              name: "small_20210717_190932.jpg",
              hash: "small_20210717_190932_5e3e527fb5",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 500,
              height: 375,
              size: 51.13,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1629447583/small_20210717_190932_5e3e527fb5.jpg",
              provider_metadata: {
                public_id: "small_20210717_190932_5e3e527fb5",
                resource_type: "image",
              },
            },
          },
          provider: "cloudinary",
          related: ["60c32116cad99f1f669bfdca"],
          createdAt: "2021-08-20T08:19:43.908Z",
          updatedAt: "2021-08-20T08:20:20.640Z",
          __v: 0,
          id: "611f659f4077440011adc085",
        },
        {
          _id: "60c3506aa1a74b00121f9dd1",
          name: "signal-2021-05-31-174839.jpeg",
          alternativeText: "",
          caption: "",
          hash: "signal_2021_05_31_174839_4bd8df55e2",
          ext: ".jpeg",
          mime: "image/jpeg",
          size: 619.89,
          width: 1536,
          height: 2048,
          url:
            "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412836/signal_2021_05_31_174839_4bd8df55e2.jpg",
          provider_metadata: {
            public_id: "signal_2021_05_31_174839_4bd8df55e2",
            resource_type: "image",
          },
          formats: {
            thumbnail: {
              name: "thumbnail_signal-2021-05-31-174839.jpeg",
              hash: "thumbnail_signal_2021_05_31_174839_4bd8df55e2",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 117,
              height: 156,
              size: 6.6,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412837/thumbnail_signal_2021_05_31_174839_4bd8df55e2.jpg",
              provider_metadata: {
                public_id: "thumbnail_signal_2021_05_31_174839_4bd8df55e2",
                resource_type: "image",
              },
            },
            large: {
              name: "large_signal-2021-05-31-174839.jpeg",
              hash: "large_signal_2021_05_31_174839_4bd8df55e2",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 750,
              height: 1000,
              size: 190.98,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412839/large_signal_2021_05_31_174839_4bd8df55e2.jpg",
              provider_metadata: {
                public_id: "large_signal_2021_05_31_174839_4bd8df55e2",
                resource_type: "image",
              },
            },
            medium: {
              name: "medium_signal-2021-05-31-174839.jpeg",
              hash: "medium_signal_2021_05_31_174839_4bd8df55e2",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 563,
              height: 750,
              size: 114.65,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412840/medium_signal_2021_05_31_174839_4bd8df55e2.jpg",
              provider_metadata: {
                public_id: "medium_signal_2021_05_31_174839_4bd8df55e2",
                resource_type: "image",
              },
            },
            small: {
              name: "small_signal-2021-05-31-174839.jpeg",
              hash: "small_signal_2021_05_31_174839_4bd8df55e2",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 375,
              height: 500,
              size: 52.12,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412842/small_signal_2021_05_31_174839_4bd8df55e2.jpg",
              provider_metadata: {
                public_id: "small_signal_2021_05_31_174839_4bd8df55e2",
                resource_type: "image",
              },
            },
          },
          provider: "cloudinary",
          related: ["60c32116cad99f1f669bfdca"],
          createdAt: "2021-06-11T12:00:42.472Z",
          updatedAt: "2021-06-11T12:00:49.841Z",
          __v: 0,
          id: "60c3506aa1a74b00121f9dd1",
        },
        {
          _id: "60c3506aa1a74b00121f9dd0",
          name: "signal-2021-05-30-192521_005.jpeg",
          alternativeText: "",
          caption: "",
          hash: "signal_2021_05_30_192521_005_96a1effe34",
          ext: ".jpeg",
          mime: "image/jpeg",
          size: 884.64,
          width: 2048,
          height: 1536,
          url:
            "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412836/signal_2021_05_30_192521_005_96a1effe34.jpg",
          provider_metadata: {
            public_id: "signal_2021_05_30_192521_005_96a1effe34",
            resource_type: "image",
          },
          formats: {
            thumbnail: {
              name: "thumbnail_signal-2021-05-30-192521_005.jpeg",
              hash: "thumbnail_signal_2021_05_30_192521_005_96a1effe34",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 208,
              height: 156,
              size: 10.73,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412837/thumbnail_signal_2021_05_30_192521_005_96a1effe34.jpg",
              provider_metadata: {
                public_id: "thumbnail_signal_2021_05_30_192521_005_96a1effe34",
                resource_type: "image",
              },
            },
            large: {
              name: "large_signal-2021-05-30-192521_005.jpeg",
              hash: "large_signal_2021_05_30_192521_005_96a1effe34",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 1000,
              height: 750,
              size: 219.97,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412839/large_signal_2021_05_30_192521_005_96a1effe34.jpg",
              provider_metadata: {
                public_id: "large_signal_2021_05_30_192521_005_96a1effe34",
                resource_type: "image",
              },
            },
            medium: {
              name: "medium_signal-2021-05-30-192521_005.jpeg",
              hash: "medium_signal_2021_05_30_192521_005_96a1effe34",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 750,
              height: 563,
              size: 126.87,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412840/medium_signal_2021_05_30_192521_005_96a1effe34.jpg",
              provider_metadata: {
                public_id: "medium_signal_2021_05_30_192521_005_96a1effe34",
                resource_type: "image",
              },
            },
            small: {
              name: "small_signal-2021-05-30-192521_005.jpeg",
              hash: "small_signal_2021_05_30_192521_005_96a1effe34",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 500,
              height: 375,
              size: 55.86,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412841/small_signal_2021_05_30_192521_005_96a1effe34.jpg",
              provider_metadata: {
                public_id: "small_signal_2021_05_30_192521_005_96a1effe34",
                resource_type: "image",
              },
            },
          },
          provider: "cloudinary",
          related: ["60c32116cad99f1f669bfdca"],
          createdAt: "2021-06-11T12:00:42.432Z",
          updatedAt: "2021-06-11T12:00:49.841Z",
          __v: 0,
          id: "60c3506aa1a74b00121f9dd0",
        },
        {
          _id: "60c35068a1a74b00121f9dce",
          name: "signal-2021-05-30-192521_002.jpeg",
          alternativeText: "",
          caption: "",
          hash: "signal_2021_05_30_192521_002_c0b24c7818",
          ext: ".jpeg",
          mime: "image/jpeg",
          size: 319.74,
          width: 1536,
          height: 2048,
          url:
            "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412834/signal_2021_05_30_192521_002_c0b24c7818.jpg",
          provider_metadata: {
            public_id: "signal_2021_05_30_192521_002_c0b24c7818",
            resource_type: "image",
          },
          formats: {
            thumbnail: {
              name: "thumbnail_signal-2021-05-30-192521_002.jpeg",
              hash: "thumbnail_signal_2021_05_30_192521_002_c0b24c7818",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 117,
              height: 156,
              size: 5.54,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412836/thumbnail_signal_2021_05_30_192521_002_c0b24c7818.jpg",
              provider_metadata: {
                public_id: "thumbnail_signal_2021_05_30_192521_002_c0b24c7818",
                resource_type: "image",
              },
            },
            large: {
              name: "large_signal-2021-05-30-192521_002.jpeg",
              hash: "large_signal_2021_05_30_192521_002_c0b24c7818",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 750,
              height: 1000,
              size: 108.18,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412837/large_signal_2021_05_30_192521_002_c0b24c7818.jpg",
              provider_metadata: {
                public_id: "large_signal_2021_05_30_192521_002_c0b24c7818",
                resource_type: "image",
              },
            },
            medium: {
              name: "medium_signal-2021-05-30-192521_002.jpeg",
              hash: "medium_signal_2021_05_30_192521_002_c0b24c7818",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 563,
              height: 750,
              size: 69.76,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412838/medium_signal_2021_05_30_192521_002_c0b24c7818.jpg",
              provider_metadata: {
                public_id: "medium_signal_2021_05_30_192521_002_c0b24c7818",
                resource_type: "image",
              },
            },
            small: {
              name: "small_signal-2021-05-30-192521_002.jpeg",
              hash: "small_signal_2021_05_30_192521_002_c0b24c7818",
              ext: ".jpeg",
              mime: "image/jpeg",
              width: 375,
              height: 500,
              size: 35.51,
              path: null,
              url:
                "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623412839/small_signal_2021_05_30_192521_002_c0b24c7818.jpg",
              provider_metadata: {
                public_id: "small_signal_2021_05_30_192521_002_c0b24c7818",
                resource_type: "image",
              },
            },
          },
          provider: "cloudinary",
          related: ["60c32116cad99f1f669bfdca"],
          createdAt: "2021-06-11T12:00:40.055Z",
          updatedAt: "2021-06-11T12:00:49.841Z",
          __v: 0,
          id: "60c35068a1a74b00121f9dce",
        },
      ];
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
