<template>
  <div class="wrapper">
    <img :src="imgSrc" alt="" />
    <div>
      <vue-markdown v-if="content.text" :source="content.text"></vue-markdown>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import VueMarkdown from "vue-markdown-render";

export default {
  name: "wie",
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
    // dynamic:

    // getContent: async function() {
    //   try {
    //     const { data } = await axios.get(
    //       `https://strapi-wlh52.ondigitalocean.app/pages?route=${this.$route.path}`
    //     );
    //     this.content = data[0];
    //     this.imgSrc = this.content.photo[0].formats.small.url;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // hardcoded:

    getContent: function() {
      this.content = {
        photo: [
          {
            _id: "60c34c9709dc672843e86ce8",
            name: "tekening.452226ca.jpeg",
            alternativeText: "",
            caption: "",
            hash: "tekening_452226ca_3699736da1",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 503.15,
            width: 1574,
            height: 2048,
            url:
              "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623411856/tekening_452226ca_3699736da1.jpg",
            provider_metadata: {
              public_id: "tekening_452226ca_3699736da1",
              resource_type: "image",
            },
            formats: {
              thumbnail: {
                name: "thumbnail_tekening.452226ca.jpeg",
                hash: "thumbnail_tekening_452226ca_3699736da1",
                ext: ".jpeg",
                mime: "image/jpeg",
                width: 120,
                height: 156,
                size: 4.16,
                path: null,
                url:
                  "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623411858/thumbnail_tekening_452226ca_3699736da1.jpg",
                provider_metadata: {
                  public_id: "thumbnail_tekening_452226ca_3699736da1",
                  resource_type: "image",
                },
              },
              large: {
                name: "large_tekening.452226ca.jpeg",
                hash: "large_tekening_452226ca_3699736da1",
                ext: ".jpeg",
                mime: "image/jpeg",
                width: 769,
                height: 1000,
                size: 96.75,
                path: null,
                url:
                  "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623411859/large_tekening_452226ca_3699736da1.jpg",
                provider_metadata: {
                  public_id: "large_tekening_452226ca_3699736da1",
                  resource_type: "image",
                },
              },
              medium: {
                name: "medium_tekening.452226ca.jpeg",
                hash: "medium_tekening_452226ca_3699736da1",
                ext: ".jpeg",
                mime: "image/jpeg",
                width: 576,
                height: 750,
                size: 54.53,
                path: null,
                url:
                  "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623411861/medium_tekening_452226ca_3699736da1.jpg",
                provider_metadata: {
                  public_id: "medium_tekening_452226ca_3699736da1",
                  resource_type: "image",
                },
              },
              small: {
                name: "small_tekening.452226ca.jpeg",
                hash: "small_tekening_452226ca_3699736da1",
                ext: ".jpeg",
                mime: "image/jpeg",
                width: 384,
                height: 500,
                size: 26.35,
                path: null,
                url:
                  "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623411863/small_tekening_452226ca_3699736da1.jpg",
                provider_metadata: {
                  public_id: "small_tekening_452226ca_3699736da1",
                  resource_type: "image",
                },
              },
            },
            provider: "cloudinary",
            related: ["60c32094cad99f1f669bfdc3"],
            createdAt: "2021-06-11T11:44:23.009Z",
            updatedAt: "2021-06-11T11:44:27.969Z",
            __v: 0,
            id: "60c34c9709dc672843e86ce8",
          },
        ],
        _id: "60c32094cad99f1f669bfdc3",
        order: 1,
        title: "Wie zijn wij?",
        text:
          "Wij zijn Kris en Kerstin, twee ijsliefhebbers. Samen verkopen wij ijs van [ijsboerderij de Morgen](https://www.ijsboerderijdemorgen.nl/) uit Montfoort, iets ten westen van Utrecht. \nOp onze bakfiets fietsen wij door Utrecht.\n\n\nWil jij weten waar we op dit moment zijn? Klik dan [hier](http://www.ijsengebakfiets.nl/waar-is-de-fiets).",
        active: true,
        published_at: "2021-06-11T08:36:41.813Z",
        createdAt: "2021-06-11T08:36:36.661Z",
        updatedAt: "2021-06-13T20:25:39.787Z",
        __v: 0,
        route: "/wie-zijn-wij",
        id: "60c32094cad99f1f669bfdc3",
      };
      this.imgSrc = this.content.photo[0].formats.small.url;
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
  border: 2px solid #ef476f;
}
@media only screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }
  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
</style>
