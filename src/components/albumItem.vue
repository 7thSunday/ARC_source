<template>
  <div class="album-item" @click="handleClickAlbumItem">
    <img :src="path" :alt="title" />
  </div>
</template>
<script>
export default {
  name: "albumItem",
  props: {
    path: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClickAlbumItem() {
      this.$router.push({ path: "/article", query: { id: this.id } });
    }
  }
};
</script>
<style lang="scss" scoped>
.album-item {
  float: left;
  font-size: 0;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
  margin: 8px;
  border-style: solid;
  border-color: transparent;
  border-width: 4px;
  transition: 300ms;
  &:hover {
    border-color: #a87194;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 769px) {
  .album-item {
    border-radius: 10px;
    width: 76px;
    height: 76px;
    margin: 6px;
  }
}
@media screen and (max-width: 361px) {
  .album-item {
    margin: 5px;
  }
}
@media screen and (max-width: 321px) {
  .album-item {
    width: 68px;
    height: 68px;
    margin: 3px;
  }
}
</style>
