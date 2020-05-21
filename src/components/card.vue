<template>
  <div class="card">
    <div class="avatar">
      <img src="../assets/avatar.jpg" alt />
    </div>
    <div class="intro">
      <p>Hi~我是7thSunday，如果你有任何问题或建议，欢迎联系我。</p>
      <p>e-mail：1064578256@qq.com</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  display: none;
  position: absolute;
  top: 50px;
  background: #9c5a83;
  width: 250px;
  height: 260px;
  right: 0;
  &::after {
    content: "";
    display: block;
    border-style: solid;
    border-width: 10px;
    border-color: #9c5a83 transparent transparent #9c5a83;
    position: absolute;
    top: -5px;
    right: 10px;
    z-index: 2;
    transform: rotate(45deg);
  }
  .avatar {
    margin: 20px auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .intro {
    padding: 10px;
    line-height: 1.8;
  }
}
@media screen and (max-width: 769px) {
  .card {
    height: 240px;
  }
}
@media screen and (max-width: 769px) {
  .card {
    width: 200px;
    .avatar {
      width: 70px;
      height: 70px;
      margin: 10px auto;
    }
  }
}
</style>
