<template>
  <div class="side-list" ref="sideList">
    <div class="pin" ref="pin" @click.stop="handleClickSwitch">
      <span>{{ pinTxt }}</span>
    </div>
    <div class="container">
      <div
        class="side-list-item"
        v-for="(item, i) in list"
        :key="i"
        @click.stop="handleClickSideItem(item.id)"
      >
        <div class="img">
          <img :src="item.thumbnail" />
        </div>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    side: {
      type: String,
      default: "left"
    },
    pinTxt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    fixPin() {
      if (this.side == "left") {
        this.$refs.pin.classList.add("left");
      } else {
        this.$refs.pin.classList.add("right");
      }
    },
    fixPosition() {
      if (this.side == "left") {
        this.$refs.sideList.classList.add("left");
      } else {
        this.$refs.sideList.classList.add("right");
      }
    },
    hidePanel() {
      this.isVisible = false;
      this.$refs.sideList.classList.remove("show");
      this.$emit("onSwitch", false);
    },
    handleClickSwitch() {
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        this.$refs.sideList.classList.add("show");
      } else {
        this.$refs.sideList.classList.remove("show");
      }
      this.$emit("onSwitch", this.isVisible);
    },
    handleClickSideItem(id) {
      if (this.$route.query.id == id) return;
      this.$router.push({ path: "/article", query: { id: id } });
      this.hidePanel();
    }
  },
  mounted() {
    this.fixPin();
    this.fixPosition();
    window.addEventListener("click", () => {
      if (this.isVisible) this.hidePanel();
    });
  }
};
</script>
<style lang="scss">
.side-list {
  z-index: 2;
  color: #fff;
  position: absolute;
  background: #66475a;
  width: 300px;
  top: 100px;
  height: 70%;
  padding: 10px 0;
  transition: 300ms;
  &.left {
    left: -300px;
    &.show {
      left: 0;
      z-index: 4;
    }
  }
  &.right {
    right: -300px;
    &.show {
      right: 0;
      z-index: 4;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .pin {
    font-size: 14px;
    position: absolute;
    top: 25px;
    width: 20px;
    height: 50px;
    background: #66475a;
    cursor: pointer;
    span {
      display: block;
      width: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &.left {
      right: -19px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    &.right {
      left: -19px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
  &-item {
    padding: 5px 10px;
    font-size: 0;
    transition: 300ms;
    &:hover {
      background: #643051;
      cursor: pointer;
    }
    * {
      vertical-align: middle;
    }
    .img {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      font-size: 14px;
      display: inline-block;
      width: 220px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
@media screen and (max-width: 321px) {
  .side-list {
    width: 260px;
    padding: 0;
    &.left {
      left: -260px;
    }
    &.right {
      right: -260px;
    }
    &-item {
      padding: 8px;
      .img {
        margin-right: 8px;
      }
      span {
        width: 206px;
      }
    }
  }
}
</style>
