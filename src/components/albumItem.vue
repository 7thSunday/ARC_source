<template>
  <div class="album-item" @click="handleClickAlbumItem">
    <img :src="path" :alt="title" />
  </div>
</template>
<script>
export default {
  name: 'albumItem',
  props: {
    path: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClickAlbumItem() {
      this.$router.push({ path: '/article', query: { id: this.id } });
    }
  }
};
</script>
<style lang="scss" scoped>
.album-item {
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
  margin: 5px;
  border-style: solid;
  border-color: transparent;
  border-width: 3px;
  transition: 300ms;
  &:hover {
    border-color: #a87194;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
