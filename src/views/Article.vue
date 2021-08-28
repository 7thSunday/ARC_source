<template>
  <div class="article">
    <div
      class="content"
      v-html="htmlTxt"
    ></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Article",
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.fetchArticle();
      },
      // 深度观察监听
      deep: true,
    },
  },
  data() {
    return {
      htmlTxt: "",
    };
  },
  methods: {
    fetchArticle() {
      let path = `/ARC/data/articles/${this.$route.query.id}.json`;
      axios.get(path).then((res) => {
        document.title = `ARC - ${res.data.title}`;
        this.htmlTxt = `<h2>${res.data.title}</h2>`;
        this.htmlTxt += res.data.content;
      });
    },
  },
  created() {
    this.fetchArticle();
  },
};
</script>
<style lang="scss">
.article {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 40px;
  overflow: auto;
  .content {
    height: 100%;
    width: 800px;
    margin: 0 auto;
    color: #fff;
    h2 {
      font-weight: normal;
      margin: 20px 0;
      border-bottom: 1px solid #ffffff;
    }
    p {
      text-indent: 2em;
      line-height: 1.8;
      a {
        color: #ffff00;
      }
    }
    img {
      max-width: 100%;
      display: block;
      margin: 10px 0;
    }
  }
}
@media screen and (max-width: 769px) {
  .article {
    top: 40px;
    .content {
      width: 100%;
      padding: 0 10px;
      font-size: 14px;
      h2 {
        font-size: 16px;
        margin: 10px 0;
      }
    }
  }
}
</style>
