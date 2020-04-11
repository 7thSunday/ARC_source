<template>
  <div class="gallery">
    <div class="input-bar">
      <el-input
        width="500"
        placeholder="快速查找"
        prefix-icon="el-icon-search"
        v-model.trim="keywords"
        @input="handleInput"
        clearable
      ></el-input>
    </div>
    <div class="search-list" v-if="searchMode">
      <search-item
        v-for="item in searchList"
        :key="item.id"
        :thumbnail="item.thumbnail"
        :type="item.type"
        :title="item.title"
        :id="item.id"
      ></search-item>
      <div class="hint" v-if="searchList.length==0">什么都没有~换个关键字试试看吧。</div>
    </div>
    <div class="album-list" v-else>
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
import axios from "axios";
import albumItem from "@/components/albumItem.vue";
import searchItem from "@/components/searchItem.vue";
export default {
  name: "Gallery",
  components: {
    albumItem,
    searchItem
  },
  data() {
    return {
      keywords: "",
      albumList: [],
      articleList: [],
      searchList: [],
      searchMode: false
    };
  },
  methods: {
    fetchArticleList() {
      axios.get("/ARC/data/index.json").then(res => {
        this.articleList = res.data;
        this.albumList = res.data.filter(item => item.type == "album");
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
    },
    handleInput() {
      if (!this.keywords) {
        this.searchMode = false;
      } else {
        this.searchMode = true;
        this.runFilter();
      }
    },
    runFilter() {
      this.searchList = [];
      for (let item of this.articleList) {
        if (item.title.indexOf(this.keywords) > -1) {
          this.searchList.push(item);
        }
      }
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
    margin: 0 auto;
    margin-top: 30px;
  }
  .album-list,
  .search-list {
    width: 784px;
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    overflow: auto;
  }
  .search-list {
    background: rgba($color: #000000, $alpha: 0.3);
    .hint {
      color: #ffffff;
      text-align: center;
      margin-top: 50px;
    }
  }
}
@media screen and (max-width: 1367px) {
  .gallery {
    .album-list,
    .search-list {
      top: 120px;
      bottom: 25px;
    }
  }
}
@media screen and (max-width: 769px) {
  .gallery {
    .input-bar {
      margin-top: 0px;
    }
    .album-list,
    .search-list {
      top: 60px;
      width: 100%;
    }
    .album-list {
      padding-left: 32px;
    }
  }
}
@media screen and (max-width: 415px) {
  .gallery .album-list {
    padding-left: 30px;
  }
}
@media screen and (max-width: 376px) {
  .gallery .album-list {
    padding-left: 10px;
  }
}
@media screen and (max-width: 361px) {
  .gallery .album-list {
    padding-left: 8px;
  }
}
@media screen and (max-width: 321px) {
  .gallery {
    top: 50px;
    .input-bar {
      margin-top: 0px;
      width: 300px;
    }
    .album-list,
    .search-list {
      top: 45px;
    }
    .album-list {
      padding-left: 12px;
    }
  }
}
</style>
