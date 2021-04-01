<template>
  <div id="arc">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <navbar></navbar>
    <div class="admin">
      <div class="avatar">
        <img
          src="./assets/avatar.jpg"
          alt
        />
      </div>
      <card></card>
    </div>
    <!-- <side-list
      class="tutorial-list"
      :list="tutorialList"
      side="right"
      title="教程"
      @onSwitch="handleOnSwitch"
    ></side-list>
    <side-list
      class="intro-list"
      :list="introList"
      side="left"
      title="说明"
      @onSwitch="handleOnSwitch"
    ></side-list>-->
    <side-list
      :list="sideListData"
      side="left"
      title="说明&教程"
      @onSwitch="handleOnSwitch"
    ></side-list>
    <router-view />
    <!-- <div class="footer">ARC @2020</div> -->
    <div
      class="cover"
      v-show="showCover"
    ></div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import card from "@/components/card";
import sideList from "@/components/sideList";
import util from "./util.js";
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  components: {
    navbar,
    sideList,
    card,
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (val.path == "/gallery" || val.path == "/") {
          document.title = "ARC";
          this.changeGalleryFlag(true);
        } else {
          this.changeGalleryFlag(false);
        }
      },
      // 深度观察监听
      deep: true,
    },
  },
  computed: {
    ...mapState({
      isGridView: (state) => state.isGridView,
    }),
  },
  data() {
    return {
      // tutorialList: [],
      // introList: [],
      sideListData: [],
      showCover: false,
    };
  },
  methods: {
    ...mapMutations(["changeGalleryFlag"]),
    // fetchArticleList() {
    //   axios.get("/ARC/data/index.json").then(res => {
    //     res.data.forEach(element => {
    //       if (element.type != "album") {
    //         this.sideListData.push(element);
    //       }
    //       // switch (element.type) {
    //       //   case "intro":
    //       //     this.introList.push(element);
    //       //     break;
    //       //   case "tutorial":
    //       //     this.tutorialList.push(element);
    //       //     break;
    //       //   default:
    //       //     break;
    //       // }
    //     });
    //   });
    // },
    handleOnSwitch(flag) {
      this.showCover = flag;
    },
  },
  mounted() {
    util.fetchArticleList((res) => {
      res.data.forEach((element) => {
        if (element.type != "album") {
          this.sideListData.push(element);
        }
        // switch (element.type) {
        //   case "intro":
        //     this.introList.push(element);
        //     break;
        //   case "tutorial":
        //     this.tutorialList.push(element);
        //     break;
        //   default:
        //     break;
        // }
      });
    });
    // this.fetchArticleList();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: #532542;
    // background-image: -webkit-linear-gradient(
    //   45deg,
    //   rgba(255, 255, 255, 0.2) 25%,
    //   transparent 25%,
    //   transparent 50%,
    //   rgba(255, 255, 255, 0.2) 50%,
    //   rgba(255, 255, 255, 0.2) 75%,
    //   transparent 75%,
    //   transparent
    // );
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }
}
html {
  background-image: url("./assets/bg.jpg");
}
#arc {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 50px;
  background: rgba($color: #000000, $alpha: 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .admin {
    color: #fff;
    position: fixed;
    left: 10px;
    bottom: 50px;
    z-index: 2;
    &:hover .card {
      display: block;
    }
    .avatar {
      position: absolute;
      // top: 5px;
      // right: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.footer {
  position: absolute;
  bottom: 15px;
  z-index: 1;
  color: #fff;
  font-size: 14px;
  width: 100%;
  text-align: center;
}
.cover {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 3;
}
@media screen and (max-width: 769px) {
  * {
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
  }
  .footer {
    font-size: 12px;
    bottom: 5px;
  }
}
</style>
