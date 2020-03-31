<template>
  <div class="card">
    <div class="avatar">
      <img src="../assets/avatar.jpg" alt="" />
    </div>
    <div class="intro">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate
      assumenda ab nihil, dignissimos modi inventore ducimus ratione ea, autem
      non unde necessitatibus ipsum reiciendis perferendis, repellat totam
      consectetur voluptatem.
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  position: absolute;
  top: 60px;
  background: #66475a;
  width: 250px;
  height: 300px;
  right: 0;
  &::after {
    content: '';
    display: block;
    border-style: solid;
    border-width: 10px;
    border-color: #66475a transparent transparent #66475a;
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
  }
}
</style>
