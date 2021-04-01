<template>
  <div class="nav">
    <div
      class="logo"
      @click="handleClickLogo"
    >
      <img
        alt="logo"
        src="../assets/logo.png"
      />
      <span>Atelier Red Crow</span>
    </div>
    <div
      class="btn-switch-view"
      v-show="isGallery"
      @click="handleClickSwitchView"
    >
      <i
        class="iconfont icon-grid"
        v-if="isGridView"
      ></i>
      <i
        class="iconfont icon-list"
        v-else
      ></i>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapState({
      isGridView: (state) => state.isGridView,
      isGallery: (state) => state.isGallery,
    }),
  },
  data() {
    return {
      // showCard: false
    };
  },
  methods: {
    ...mapMutations(["changeView"]),
    handleClickLogo() {
      if (this.$router.currentRoute.path == "/gallery") return;
      this.$router.push({ path: "/gallery" });
    },
    handleClickSwitchView() {
      this.changeView();
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  color: #fff;
  background: #755669;
  z-index: 2;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .logo {
    height: 100%;
    padding: 10px;
    cursor: pointer;
    float: left;
    transition: 0.3s;
    * {
      vertical-align: middle;
    }
    img {
      height: 100%;
      margin-right: 10px;
    }
    &:hover {
      background: #643051;
    }
  }
  .btn-switch-view {
    float: right;
    margin: 9px;
    .iconfont {
      font-size: 30px;
    }
  }
}
@media screen and (max-width: 769px) {
  .nav {
    height: 40px;
    font-size: 14px;
    .admin {
      right: 10px;
      .avatar {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
