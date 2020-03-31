<template>
  <div id="arc">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <navbar></navbar>
    <side-list
      class="tutorial-list"
      :list="tutorialList"
      side="right"
      pinTxt="教程"
    ></side-list>
    <side-list
      class="intro-list"
      :list="introList"
      side="left"
      pinTxt="说明"
    ></side-list>
    <router-view />
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import sideList from '@/components/sideList';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    navbar,
    sideList
  },
  data() {
    return {
      tutorialList: [],
      introList: []
    };
  },
  methods: {
    fetchArticleList() {
      axios.get('/data/index.json').then(res => {
        res.data.forEach(element => {
          switch (element.type) {
            case 'intro':
              this.introList.push(element);
              break;
            case 'tutorial':
              this.tutorialList.push(element);
              break;
            default:
              break;
          }
        });
      });
    }
  },
  mounted() {
    this.fetchArticleList();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
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
  background-image: url('./assets/bg.jpg');
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
  overflow: auto;
}
</style>
