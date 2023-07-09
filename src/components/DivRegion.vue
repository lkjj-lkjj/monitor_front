<template>
  <div class="container">
    <div
        v-show="activeIndex === 0 || (activeIndex === -1 && (isAnimating === 0 || isAnimating === -1))"
        class="box"
        :class="{ 'expanded': activeIndex === 0, 'collapsed': isAnimating === -1 && activeIndex !== 0 }"
        @dblclick="toggleExpand(0)"
    >
      <!-- 内容 -->
    </div>
    <div
        v-show="activeIndex === 1 || (activeIndex === -1 && (isAnimating === 1 || isAnimating === -1))"
        class="box"
        :class="{ 'expanded': activeIndex === 1, 'collapsed': isAnimating !== -1 && activeIndex !== 1 }"
        @dblclick="toggleExpand(1)"
        style="right: 0;"
    >
      <!-- 内容 -->
    </div>
    <div
        v-show="activeIndex === 2 || (activeIndex === -1 && (isAnimating === 2 || isAnimating === -1))"
        class="box"
        :class="{ 'expanded': activeIndex === 2, 'collapsed': isAnimating !== -1 && activeIndex !== 2 }"
        @dblclick="toggleExpand(2)"
        style="bottom: 0;"
    >
      <!-- 内容 -->
    </div>
    <div
        v-show="activeIndex === 3 || (activeIndex === -1 && (isAnimating === 3 || isAnimating === -1))"
        class="box"
        :class="{ 'expanded': activeIndex === 3, 'collapsed': isAnimating !== -1 && activeIndex !== 3 }"
        @dblclick="toggleExpand(3)"
        style="bottom: 0; right: 0"
    >
      <!-- 内容 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: -1,
      isAnimating: -1,
    };
  },
  methods: {
    toggleExpand(index) {
      if (this.activeIndex === index) {
        // 如果已经展开，则收缩
        this.isAnimating = this.activeIndex;
        this.activeIndex = -1;
        setTimeout(() => {
          this.isAnimating = -1;
        }, 200); // 根据过渡动画的时间设置延迟
      } else {
        // 如果未展开，则展开
        this.activeIndex = index;
      }
    }
  }
};
</script>

<style>
.container {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  height: 600px;
}

.box {
  position: absolute;
  width: 47%;
  height: 45%;
  transition: all 0.3s;
  background: #333333;
  margin: 20px;
}

.box.expanded {
  width: 100%;
  height: 100%;
}
</style>