<template>
  <div class="wrapper">
    <div>
      <vue-markdown v-if="content.text" :source="content.text"></vue-markdown>
    </div>
    <img :src="imgSrc" alt="" />
  </div>
</template>

<script>
// import axios from "axios";
import VueMarkdown from "vue-markdown-render";

export default {
  name: "feestjes",
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
    // dynamic

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

    //hardcoded:

    getContent: function() {
      this.content = {
        photo: [
          {
            _id: "60c35171a1a74b00121f9dd8",
            name: "adi-goldstein-Hli3R6LKibo-unsplash (1).jpg",
            alternativeText: "",
            caption: "",
            hash: "adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 31.59,
            width: 640,
            height: 427,
            url:
              "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623413101/adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d.jpg",
            provider_metadata: {
              public_id: "adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d",
              resource_type: "image",
            },
            formats: {
              thumbnail: {
                name: "thumbnail_adi-goldstein-Hli3R6LKibo-unsplash (1).jpg",
                hash:
                  "thumbnail_adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d",
                ext: ".jpg",
                mime: "image/jpeg",
                width: 234,
                height: 156,
                size: 8.23,
                path: null,
                url:
                  "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623413102/thumbnail_adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d.jpg",
                provider_metadata: {
                  public_id:
                    "thumbnail_adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d",
                  resource_type: "image",
                },
              },
              small: {
                name: "small_adi-goldstein-Hli3R6LKibo-unsplash (1).jpg",
                hash:
                  "small_adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d",
                ext: ".jpg",
                mime: "image/jpeg",
                width: 500,
                height: 334,
                size: 22.7,
                path: null,
                url:
                  "https://res.cloudinary.com/dpnvadpzl/image/upload/v1623413104/small_adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d.jpg",
                provider_metadata: {
                  public_id:
                    "small_adi_goldstein_Hli3_R6_L_Kibo_unsplash_1_1bbb64156d",
                  resource_type: "image",
                },
              },
            },
            provider: "cloudinary",
            related: ["60c3213ecad99f1f669bfdcf"],
            createdAt: "2021-06-11T12:05:05.348Z",
            updatedAt: "2021-06-11T12:05:09.284Z",
            __v: 0,
            id: "60c35171a1a74b00121f9dd8",
          },
        ],
        _id: "60c3213ecad99f1f669bfdcf",
        order: 4,
        title: "Feestjes en partijen",
        text:
          "**Voor al jouw feesten en partijen!**\n\nWij zijn ook in te huren voor een BBQ, verjaardag of ander feestje.\nJe kunt een mailtje sturen naar [ijsengebakfiets@gmail.com](mailto:ijsengebakfiets@gmail.com) met je wensen, en dan gaan wij kijken of we die wens in vervulling kunnen brengen.",
        active: true,
        published_at: "2021-06-11T08:39:30.076Z",
        createdAt: "2021-06-11T08:39:26.161Z",
        updatedAt: "2021-06-12T19:15:18.976Z",
        __v: 0,
        route: "/feestjes-en-partijen",
        id: "60c3213ecad99f1f669bfdcf",
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
    width: 50px;
    order: -1;
  }
}
</style>
