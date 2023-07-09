<template>
  <body >
  <div class="shell">
    <div class="box">
      <img src="../assets/accordion/ljy.jpg">
      <span>刘佳垚</span>
    </div>
    <div class="box">
      <img src="../assets/accordion/lkj.jpg">
      <span>李可佳</span>
    </div>
    <div class="box">
      <img src="../assets/accordion/lyx.jpg">
      <span>刘逸轩</span>
    </div>
    <div class="box">
      <img src="../assets/accordion/lxq.jpg">
      <span>李雪奇</span>
    </div>
    <div class="box">
      <img src="../assets/accordion/wyp.jpg">
      <span>汪怡芃</span>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "Accordion"
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(243, 230, 241);
}
.shell{
  width: 90%;
  height: 800px;
  display: flex;
  transform: scale(0.6);
}
.box{
  flex: 1;
  overflow: hidden;
  transition: .5s;
  margin: 0 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
  border-radius: 20px;
  border: 10px solid #fff;
  background-color: #fff;
}
.box>img{
  width: 200%;
  height: 85%;
  object-fit: cover;
  transition: .5s;
}
.box>span{
  font: 200 45px '优设标题黑';
  text-align: center;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box:hover{
  flex-basis: 40%;
}
.box:hover>img{
  width: 100%;
  height: 100%;
}
</style>