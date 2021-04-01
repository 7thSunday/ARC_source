<template>
  <div
    class="search-item"
    @click="handleClickSearchItem"
  >
    <div class="img">
      <img :src="thumbnail" />
    </div>
    <div class="type">
      <i
        class="iconfont"
        :class="getTypeIcon"
      ></i>
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    thumbnail: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    getTypeIcon() {
      switch (this.type) {
        case "album":
          return "icon-photo";
        case "intro":
          return "icon-document";
        case "tutorial":
          return "icon-scissors";
      }
    },
  },
  methods: {
    handleClickSearchItem() {
      this.$router.push({ path: "/article", query: { id: this.id } });
    },
  },
};
</script>
<style lang="scss">
.search-item {
  overflow: hidden;
  padding: 10px;
  color: #ffffff;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: #66475a;
  }
  * {
    float: left;
  }
  .img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .type,
  .title {
    line-height: 40px;
  }
  .type {
    width: 50px;
    color: rgb(240, 172, 172);
    display: flex;
    justify-content: center;
  }
  .title {
    width: 650px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media screen and (max-width: 769px) {
  .search-item {
    padding: 10px 20px;
    .type,
    .title {
      font-size: 14px;
    }
    .type {
      width: 40px;
    }
    .title {
      width: 630px;
    }
  }
}
@media screen and (max-width: 414px) {
  .search-item {
    padding: 6px 20px;
    .title {
      width: 276px;
    }
  }
}
@media screen and (max-width: 376px) {
  .search-item .title {
    width: 240px;
  }
}
@media screen and (max-width: 361px) {
  .search-item .title {
    width: 225px;
  }
}
@media screen and (max-width: 321px) {
  .search-item {
    .title {
      width: 185px;
    }
  }
}
</style>