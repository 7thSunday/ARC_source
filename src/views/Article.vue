<template>
  <div class="article">
    <div class="content" v-html="htmlTxt"></div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Article',
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.fetchArticle();
      },
      // 深度观察监听
      deep: true
    }
  },
  data() {
    return {
      htmlTxt: ''
    };
  },
  methods: {
    fetchArticle() {
      let path = `/data/articles/${this.$route.query.id}.json`;
      axios.get(path).then(res => {
        this.htmlTxt = res.data.content;
      });
    }
  },
  created() {
    this.fetchArticle();
  }
};
</script>
<style lang="scss">
.article {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 20px;
  .content {
    height: 100%;
    overflow: auto;
    width: 800px;
    margin: 0 auto;
    color: #fff;
    p {
      text-indent: 2em;
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
</style>
