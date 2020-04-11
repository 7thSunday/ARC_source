<template>
  <div class="nav">
    <div class="logo" @click="handleClickLogo">
      <img alt="logo" src="../assets/logo.png" />
      <span>Atelier Red Crow</span>
    </div>
    <div class="admin">
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt />
      </div>
      <card></card>
    </div>
  </div>
</template>
<script>
import card from "@/components/card";
export default {
  name: "navbar",
  components: { card },
  data() {
    return {
      // showCard: false
    };
  },
  methods: {
    handleClickLogo() {
      if (this.$router.currentRoute.path == "/gallery") return;
      this.$router.push({ path: "/gallery" });
    }
  }
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
  .logo {
    margin-top: 10px;
    height: 30px;
    cursor: pointer;
    float: left;
    * {
      vertical-align: middle;
    }
    img {
      height: 100%;
      margin: 0 10px;
    }
  }
  .admin {
    position: absolute;
    right: 40px;
    top: 0;
    &:hover .card {
      display: block;
    }
    .avatar {
      position: absolute;
      top: 5px;
      right: 0;
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
@media screen and (max-width: 769px) {
  .nav {
    height: 40px;
    font-size: 14px;
    .logo {
      height: 20px;
    }
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
