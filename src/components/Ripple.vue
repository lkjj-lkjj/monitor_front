<template>
  <div class="container">
    <button class="btn ripple-effect" @click="ripple">Capture
      <span class="ripple"></span>
    </button>
  </div>
</template>

<script>

export default {
  name: "Ripple",
  methods:{
    ripple(event) {
      let btn = event.currentTarget;
      let ripple = btn.querySelector(".ripple");
      ripple.classList.add("animated");
      let size = Math.max(btn.offsetWidth, btn.offsetHeight);
      ripple.style.width = size + "px";
      ripple.style.height = size + "px";
      ripple.style.top = -(btn.offsetHeight - event.offsetY) + "px";
      ripple.style.left = -(btn.offsetWidth / 2 - event.offsetX) + "px";
      setTimeout(function () {
        ripple.classList.remove("animated");
      }, 800);
    },
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  width: 100px;
  height: 50px;
  margin: 50px auto;
  position: relative;
}
.btn{
  display: inline-block;
  width: 100px;
  height: 35px;
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  /*transform: translate(-50%,-50%);*/
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0,0,0,.3);
}
.btn:hover {
  color: #5da9ee; /* Set the text color when hovering */
  transform: scale(1.1);
}

.ripple-effect {
  display: inline-block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 1;
}
.ripple-effect .ripple {
  display: block;
  position: absolute;
  border-radius: 100%;
  /*设置背景为彩虹渐变，可以换成其他颜色*/
  background: linear-gradient(45deg,
  rgba(255,0,0,.5),
  rgba(255,255,0,.5),
  rgba(0,255,255,.5),
  rgba(0,0,255,.5)
  );
  -webkit-transform: scale(0);
  transform: scale(0);
  pointer-events: none;
}

.ripple-effect .animated {
  -webkit-animation: ripple 1s linear;
  animation: ripple 1s linear;
}
@keyframes ripple {
  100% {
    opacity: 0;
    -webkit-transform: scale(2.5);
    transform: scale(2.5);
  }
}
</style>