<template>
  <div class="card">
    <!-- <div class="avatar">
      <img
        src="../assets/avatar.jpg"
        alt
      />
    </div> -->
    <div class="intro">
      <p>Hi~我是7thSunday，如果你有任何问题或建议，欢迎联系我。</p>
      <!-- <p>如果你有定制纸模的需求，也可以找我。</p> -->
      <p><i
          class="iconfont icon-email"
          style="margin-right:12px"
        ></i>1064578256@qq.com</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  display: none;
  position: absolute;
  top: -65px;
  left: 60px;
  background: #9c5a83;
  width: 250px;
  // height: 260px;
  &::after {
    content: "";
    display: block;
    border-style: solid;
    border-width: 10px;
    border-color: #9c5a83 transparent transparent #9c5a83;
    position: absolute;
    left: -5px;
    bottom: 10px;
    // z-index: 2;
    transform: rotate(-45deg);
  }
  .intro {
    padding: 10px;
    line-height: 1.8;
    p:not(:last-child) {
      text-indent: 1em;
    }
  }
}
@media screen and (max-width: 321px) {
  .card {
    font-size: 14px;
    width: 240px;
    top: -60px;
  }
}
</style>
