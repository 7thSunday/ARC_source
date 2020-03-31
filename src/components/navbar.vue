<template>
  <div class="nav">
    <div class="logo">
      <img alt="logo" src="../assets/logo.png" />
      <span>Atelier Red Crow</span>
    </div>
    <div class="admin">
      <div class="avatar">
        <img src="../assets/avatar.jpg" alt="" />
      </div>
      <card v-show="showCard"></card>
    </div>
  </div>
</template>
<script>
import card from '@/components/card';
export default {
  name: 'navbar',
  components: { card },
  data() {
    return {
      showCard: false
    };
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
  .logo {
    margin-top: 10px;
    height: 30px;
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
</style>
