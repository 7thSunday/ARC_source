<template>
  <div class="gallery">
    <div class="input-bar">
      <el-input
        width="500"
        placeholder="快速查找"
        prefix-icon="el-icon-search"
        v-model="keywords"
      ></el-input>
    </div>
    <div class="album-list">
      <album-item
        v-for="(item, i) in albumList"
        :key="i"
        :path="item.thumbnail"
        :title="item.title"
        :id="item.id"
      ></album-item>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import albumItem from '@/components/albumItem.vue';
export default {
  name: 'Gallery',
  components: {
    albumItem
  },
  data() {
    return {
      keywords: '',
      albumList: []
    };
  },
  methods: {
    fetchArticleList() {
      axios.get('/data/index.json').then(res => {
        this.albumList = res.data.filter(item => item.type == 'album');
        // res.data.forEach(element => {
        //   switch (element.type) {
        //     case 'album':
        //       this.albumList.push(element);
        //       break;
        //     default:
        //       break;
        //   }
        // });
      });
    }
  },
  mounted() {
    this.fetchArticleList();
  }
};
</script>

<style lang="scss">
.gallery {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  .input-bar {
    width: 350px;
    margin: 30px auto 50px auto;
  }
  .album-list {
    width: 720px;
    margin: 0 auto;
  }
}
</style>
