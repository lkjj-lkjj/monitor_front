<template>
  <div style="transform: scale(0.7); margin-top: -500px">
    <div class="big_div  big_div_001 " id="jiaoshe">
      <p id="title">小组成员</p>
      <div class="shell11">
        <div class="box1">
          <img src="../assets/accordion/lyx.jpg" title="lyx">
          <span>刘逸轩</span>
        </div>
        <div class="box1">
          <img src="../assets/accordion/ljy.jpg" title="ljy">
          <span>刘佳垚</span>
        </div>
        <div class="box1">
          <img src="../assets/accordion/lkj.jpg" title="lkj">
          <span>李可佳</span>
        </div>
        <div class="box1">
          <img src="../assets/accordion/lxq.jpg" title="lxq">
          <span>李雪奇</span>
        </div>
        <div class="box1">
          <img src="../assets/accordion/wyp.jpg" title="wyp">
          <span>汪怡芃</span>
        </div>
      </div>
    </div>

    <div class="big_div big_div_002">
      <div class="title" id="jsjs" style="color: #181818;">工作介绍</div>
      <div class="small-box">
        <div class="box-left">
          <img src="../assets/accordion/lyx.jpg" alt="">
        </div>
        <div class="box-right">
          <span>刘逸轩</span>
          <p>主要负责动作识别模型的实现和所有模型的评估。</p>
<!--          <p>由于年龄太小，她不能理解为什么妈妈没有按照约定回家陪自己玩，并决定自己跑去市里寻找妈妈。</p>-->
        </div>
      </div>

      <div class="small-box">
        <div class="box-left">
          <img src="../assets/accordion/ljy.jpg" alt="">

        </div>
        <div class="box-right">
          <span>刘佳垚</span>

          <p>主要负责情绪识别模型、微表情识别模型、人脸识别模型、眨眼识别模型、image caption模型、三维点云转二维平面图模型、手势识别模型的实现。</p>
<!--          <p>但说到底草壁皋月依然是一个小女孩，所以她才能和妹妹一起看到大人看不见的龙猫。性格温顺的她是家中的“小大人”。</p>-->
        </div>
      </div>

      <div class="small-box">
        <div class="box-left">
          <img src="../assets/accordion/lkj.jpg" alt="">

        </div>
        <div class="box-right">
          <span>李可佳</span>

          <p>主要负责前端架构、前端页面的实现和云服务器推拉流的实现。</p>
<!--          <p>草壁达郎工作忙碌而且要看望妻子，但是他始终对于两个女儿保持着关心。</p>-->
        </div>
      </div>

      <div class="small-box">
        <div class="box-left">
          <img src="../assets/accordion/lxq.jpg" alt="">
        </div>
        <div class="box-right">
          <span>李雪奇</span>
          <p>主要负责服务端行人和宠物识别模块、情绪识别模块、闯入检测模块、模型服务模块的实现，以及模型的对接和接口测试。</p>
<!--          <p>他曾经帮助姐妹二人使种子发芽，还曾经帮助草壁皋月找回了迷路的草壁梅。</p>-->
        </div>
      </div>

      <div class="small-box">
        <div class="box-left">
          <img src="../assets/accordion/wyp.jpg" alt="">
        </div>
        <div class="box-right">
          <span>汪怡芃</span>
          <p>主要负责用户管理模块和接口测试。</p>
<!--          <p>他曾在见到草壁一家人的时候就告诉姐妹二人说他们家是“鬼屋”，大垣勘太坚信这个说法，他也拒绝进入草壁家的屋子。</p>-->
        </div>
      </div>
      <div class="kong"></div>
    </div>


    <!-- 剧情介绍部份 -->
    <div class="big_div" id="plot">
      <img src="../assets/accordion/rocket.gif" style="cursor: pointer; transform: scale(1.3)" @click="toLogin()">
      <div><img src="../assets/accordion/last.gif" alt="" title="出发"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FrontBottom",
  methods:{
    toLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
table.tftable {
  font-size: 12px;
  color: #333333;
  width: 100%;
  border-width: 2px;
  border-color: #b5c9ff;
  border-collapse: collapse;
}

table.tftable:hover {
  scale: 1.002;
}

table.tftable th {
  font-size: 12px;
  background-color: #9bba83;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #9dcc7a;
  text-align: left;
}

table.tftable tr {
  background-color: #bedda7;
}

table.tftable td {
  font-size: 20px;
  border-width: 1px;
  padding: 18px;
  border-style: solid;
  border-color: #bccfad;
}
.big_div {
  width: 100%;
  text-align: center;
  border: 1px solid rgb(0, 0, 0);
  margin: 100px auto auto;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
}
.big_div p {
  margin-top: 30px;
  font-size: 40px;
  font-weight: 500;
}
.menu-box{
  /* 固定定位 右下角 */
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 10000;
}
/* 菜单按钮 */
.menu-button{
  width: 50px;
  height: 50px;
  background-color: #5c67ff;
  border-radius: 50%;
  /* 投影 */
  box-shadow: 0 0 0 4px rgba(92,103,255,0.3);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  /* 过渡 */
  transition: 0.2s ease-in;
}
.menu-button:hover{
  background-color: #4854ff;
  box-shadow: 0 0 0 8px rgba(92,103,255,0.3);
}
.menu-button .line-box{
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}
/* 菜单按钮图标（三条杠） */
.menu-button .line{
  background-color: #fff;
  width: 100%;
  height: 2px;
  border-radius: 2px;
}
/* 前后两条短，中间的长 */
.menu-button .line:first-child{
  width: 50%;
  /* 设置变换的基点 */
  transform-origin: right;
  /* 过渡效果 */
  transition: transform 0.3s ease-in-out;
}
.menu-button .line:last-child{
  width: 50%;
  align-self: flex-end;
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}
/* 菜单列表 */
.menu-list{
  width: 150px;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  list-style: none;
  padding: 6px;
  box-shadow: 0 0 4px 4px rgba(92,103,255,0.15);
  position: absolute;
  right: 15px;
  bottom: 15px;
  /* 默认隐藏 */
  opacity: 0;
  transform: scale(0);
  /* 设置变换的基点 */
  transform-origin: bottom right;
  /* 过渡效果 */
  transition: 0.3s ease;
  /* 过渡延迟 */
  transition-delay: 0.1s;
}
/* 菜单项 */
.menu-list li{
  display: flex;
  align-items: center;
  padding: 10px;
  color: #1c3991;
  cursor: pointer;
  position: relative;
  /* 默认隐藏 */
  opacity: 0;
  transform: translateX(-10px);
  transition: 0.2s ease-in;
}
.menu-list li:hover{
  color: #5c67ff;
}
/* 菜单项下边框 */
.menu-list li::before{
  content: "";
  width: calc(100% - 24px);
  height: 1px;
  background-color: rgba(92,103,255,0.1);
  position: absolute;
  bottom: 0;
  left: 12px;
}
/* 最后一项不用下边框 */
.menu-list li:last-child::before{
  display: none;
}
/* 菜单项图标 */
.menu-list .fa{
  font-size: 18px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 菜单项文本 */
.menu-list span {
  font-size: 20px;
  margin-left: 1px;
  font-weight: 500;
}

.menu-list span a{
  font-family: '华文新魏';
}
/* 活动态下的部分样式变化 */
/* 三条杠的变化 */
.active .line-box{
  transform: rotate(-45deg);
}
.active .line-box .line:first-child{
  transform: rotate(-90deg) translateX(1px);
}
.active .line-box .line:last-child{
  transform: rotate(-90deg) translateX(-1px);
}
/* 菜单列表的变化 */
.active .menu-list{
  opacity: 1;
  transform: scale(1);
}
.active .menu-list li{
  margin-top: 5px;
  /* 执行动画：动画名 时长 线性 停留在最后一帧 */
  animation: fade-in-item 0.4s linear forwards;
}
/* 接下来为每一项设置动画延迟时间 */
.active .menu-list li:nth-child(1){
  animation-delay: 0.1s;
}
.active .menu-list li:nth-child(2){
  animation-delay: 0.2s;
}
.active .menu-list li:nth-child(3){
  animation-delay: 0.3s;
}
.active .menu-list li:nth-child(4){
  animation-delay: 0.4s;
}

/* 定义动画 */
@keyframes fade-in-item {
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
/* 超小屏幕(<=575px) */
@media screen and (max-width:575px) {
  .head {
    display: none;
  }

  nav {
    position: fixed !important;
  }

  .nav-menu li a {
    font-size: 14px;
  }

  .nav-menu li a:hover {
    color: rgb(88, 224, 255);
    scale: 1.1;
    transition: 2s;
  }


  .nav-menu li {
    width: 46% !important;
    /* 上下间距 */
    margin: 5vh;
    transform: translateX(20px);
    opacity: 0;
  }

  /* 汉堡按钮被点开时，设置按钮过渡 */
  .burger.active div {
    transition: 0.3s ease-in-out 0.3s;
  }

  /* 第一条线旋转45度 */
  .burger.active .top-line {
    transform: rotate(45deg) translate(4px, 6px);
  }

  /* 第三条线旋转-45度 */
  .burger.active .bottom-line {
    transform: rotate(-45deg) translate(4px, -6px);
  }

  /* 中间线向右移动并变为透明 */
  .burger.active .middle-line {
    opacity: 0;
    transform: translateX(10px);
    transition: 0.3s ease-in-out;
  }



  /* 菜单项滑入动画 */
  @keyframes slideIn {
    from {
      transform: translateX(20px);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }


  body {
    background-color: white;
    background-image: none;
  }

  .nav {
    position: sticky;
  }

  .big_div {
    border: 0px;
    border-radius: 0;
  }

  .big_div_001 {
    display: none;
  }

  .big_div_004{
    display: none;
  }

  .big_div_002 {
    display: block;
    width: 100%;
    margin-top: 100px;
  }

  .big_div_002 .title {
    position: relative;
    top: 25px;
    font-size: 25px;
  }

  .big_div_003 {
    display: block;
    width: 100%;
    margin-top: 100px;
  }

  .big_div_003>.title {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .big_div_003>span {
    color: black;
    font-size: 17px;
  }

  .big_div_003>p {
    margin: auto;
    width: 90%;
    text-align: start;
    text-indent: 2em;
    color: black;
    font-size: 15px;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  .big_div_003>.kong {
    height: 10px;
  }

  .big_div_003>.img img {
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px;
  }


  .small-box {
    border: 1px solid rgb(210, 210, 210);
    position: relative;
    width: 90%;
    height: 250px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 20px;
    box-shadow: 10px 10px 20px rgb(9 75 82 / 50%);
  }

  .small-box:hover {
    scale: 1.01;
  }

  .box-left {
    position: absolute;
    height: 70%;
    width: 30%;
    left: 30px;
    top: -30px;
  }

  .box-left img {
    margin-top: 30px;
    margin-bottom: 10px;
    border: 2px solid rgb(220, 156, 133);
    width: 100%;
  }

  .box-left span {
    color: rgb(80 111 200);
    margin-top: 10px;
    font-size: 18px;
    font-family: '宋体';
    font-weight: 600;
  }

  .box-right {
    position: absolute;
    right: 10px;
    top: 15px;
    width: 55%;
  }

  .box-right span{
    font-size: 20px;
  }

  .box-right p {
    margin-left: 15px !important;
    width: 90%;
    text-indent: 2em;
    text-align: start;
    font-size: 15px !important;
    font-family: 'totoro' !important;
    color: black;
    margin-top: 25px !important;
  }

  #first {
    display: none;
  }

  .head {
    height: 70px;
  }

  footer {
    margin-top: 10px;
    height: 50px;
  }

  #base {
    display: none;
  }

  #plot {
    display: none;
  }

}

/* 小屏幕(576px <= width <= 768px) */
@media screen and (min-width:576px) {
  #first {
    font-size: 18px;
  }

  .nav-menu li a {
    font-size: 15px;
  }

  footer {
    height: 50px;
  }

  .footer {
    font-size: 20px;
    line-height: 50px;
  }

  .box-right p {
    font-size: 10px;
    margin-top: 15px;
  }

  .box-left {
    margin-top: 25px;
  }

  #base p {
    width: 100%;
    text-indent: 2em;
    font-size: 23px;
  }

  #base span {
    font-size: 25px;
  }

  #base table {
    width: 100%;
  }

  .menu-button {
    width: 50px !important;
    height: 50px !important;
  }

  .menu-list {
    width: 150px !important;
    height: 200px !important;
  }

  .menu-list span {
    font-size: 19px !important;
  }

  .menu-list li {
    padding: 8px !important;
  }

  .menu-list .fa {
    width: 15px !important;
  }
}

/* 中屏幕(768px <= width <= 992px) */
@media screen and (min-width:768px) {
  #first {
    font-size: 20px;
  }

  .nav-menu li a {
    font-size: 17px;
  }

  footer {
    height: 50px;
  }

  .footer {
    font-size: 22px;
    line-height: 50px;
  }

  .box-right p {
    font-size: 10px;
    margin-top: 15px;
  }

  .box-left {
    margin-top: 30px;
  }

  #base p {
    width: 100%;
    text-indent: 2em;
    font-size: 25px;
  }

  #base span {
    font-size: 30px;
  }

  #base table {
    width: 100%;
  }

  .menu-button {
    width: 50px !important;
    height: 50px !important;
  }

  .menu-list {
    width: 150px !important;
    height: 200px !important;
  }

  .menu-list span {
    font-size: 20px !important;
  }

  .menu-list li {
    padding: 10px !important;
  }

  .menu-list .fa {
    width: 18px !important;
  }
}

/* 大屏幕(992px <= width <= 1200px) */
@media screen and (min-width:992px) {
  #first {
    font-size: 22px;
  }

  .nav-menu li a {
    font-size: 17px;
  }

  footer {
    height: 60px;
  }

  .footer {
    font-size: 25px;
    line-height: 60px;
  }

  .box-right p {
    font-size: 10px;
    margin-top: 15px;
  }

  .box-left {
    margin-top: 30px;
  }

  #base p {
    width: 90%;
    text-indent: 2em;
    font-size: 30px;
  }

  #base span {
    font-size: 30px;
  }

  #base table {
    width: 80%;
  }

  .menu-button {
    width: 50px !important;
    height: 50px !important;
  }

  .menu-list {
    width: 150px !important;
    height: 200px !important;
  }

  .menu-list span {
    font-size: 20px !important;
  }

  .menu-list li {
    padding: 10px !important;
  }

  .menu-list .fa {
    width: 18px !important;
  }
}

/* 超大屏幕(width >= 1200px) */
@media screen and (min-width:1200px) {
  #first {
    font-size: 25px;
  }

  footer {
    height: 80px;
  }

  .footer {
    font-size: 30px;
    line-height: 80px;
  }

  .box-right p {
    font-size: 15px;
    margin-top: 20px;
  }

  .box-left {
    margin-top: 30px;
  }

  #base p {
    width: 90%;
    text-indent: 2em;
    font-size: 30px;
  }

  #base span {
    font-size: 30px;
  }

  #base table {
    width: 80%;
  }

  .menu-button {
    width: 50px !important;
    height: 50px !important;
  }

  .menu-list {
    width: 150px !important;
    height: 200px !important;
  }

  .menu-list span {
    font-size: 20px !important;
  }

  .menu-list li {
    padding: 10px !important;
  }

  .menu-list .fa {
    width: 18px !important;
  }
}
.shell11{
  width: 95%;
  height: 500px;
  display: flex;
  top: 200px;
  margin: 10px auto 100px;
}
.box1{
  flex: 1;
  overflow: hidden;
  transition: .5s;
  margin: 0 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
  border-radius: 20px;
  border: 10px solid #fff;
  background-color: #fff;
}
.box1>img{
  width: 100%;
  height: 60%;
  object-fit: cover;
  transition: .5s;
}
.box1>span{
  font: 200 45px '优设标题黑';
  text-align: center;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #181818;
}
.box1:hover{
  flex-basis: 10%;
}
.box1:hover>img{
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: 'totoro' !important;
}


a:active {
  color: #b000ff;
}

a:visited {
  color: rgb(255 0 0);
}

span:hover {
  transform: scale(1.05);
}

tr {
  font-size: 20px;
}

#title {
  font-family: '华文行楷' !important;
  color: rgb(0, 0, 0) !important;
  font-size: 40px !important;
  font-weight: 500 !important;
  margin-bottom: 15px;
}

footer {
  /* position: absolute; */
  width: 100%;
  height: 80px;
  background-color: white;
  /* bottom: 0; */
}

.footer {
  margin: auto;
  width: fit-content;
  /*实现div居中，宽度自适应 */
  line-height: 80px;
  /* position: absolute;
  top: 20px;
  right: 31vw; */
  color: rgb(255, 165, 180);
  font-size: 30px;
  font-family: '楷体';
}

.head {
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: white;
}

nav {
  position: absolute;
  position: sticky;
  z-index: 100011111;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* 左右padding */
  padding: 0 5vw;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.445);
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
}

#jiaoshe {
  margin-top: 100px !important;
}


.nav-menu li {
  width: 40%;
  list-style: none;
  color: #dadbdd;
  font-weight: 600;
  text-align: center;
}

.nav-menu li a {
  color: rgba(0, 0, 0, 0.716);
}

.burger div {
  /* 设置汉堡按钮三层条 */
  width: 25px;
  height: 3px;
  background-color: #dadbdd;
  margin: 4px;
}

.burger {
  display: none;
}

.big_div_002 {
  display: block;
  width: 100%;
  margin-top: 100px;
}

.big_div_002 .kong{
  height: 50px;
}

.big_div_002 .title {
  position: relative;
  top: 25px;
  font-size: 35px;
}

.box-left {
  position: absolute;
  width: 15%;
  left: 100px;
  top: -40px;
  margin-top: 50px !important;
}

.box-left img {
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
}

.box-right span {
  color: black;
  margin-top: 10px;
  font-size: 30px;
  font-weight: 600;
}

.box-right {
  position: absolute;
  right: 10px;
  top: 35px;
  width: 65%;
}

.box-right p {
  margin-left: 15px !important;
  width: 90%;
  text-indent: 2em;
  text-align: start;
  font-size: 25px !important;
  font-family: 'totoro';
  color: black;
  margin-top: 35px !important;
}

.small-box {
  border: 1px solid rgb(210, 210, 210);
  position: relative;
  width: 90%;
  height: 340px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  box-shadow: 10px 10px 20px rgb(9 75 82 / 50%);
}

.small-box:hover {
  scale: 1.01;
}

.big_div_003{
  display: none;
}

.big_div_004 {
  display: block;
  width: 100%;
  margin-top: 900px !important;
}

.big_div_004>.title {
  font-size: 35px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.big_div_004>.you>span {
  color: black;
  font-size: 40px;
}

.big_div_004>.you>p {
  margin: auto;
  width: 90%;
  text-align: start !important;
  text-indent: 2em !important;
  color: black;
  font-size: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
}

.big_div_004>.kong {
  height: 10px;
}

.big_div_004>.img {
  display: inline-block;
  width: 45%;
}

.big_div_004>.img img {
  width: 90%;
  overflow: hidden;
  margin-bottom: 10px;
}

.big_div_004>.you {
  float: right;
  width: 50%;
  margin-left: 30px;
  margin-bottom: 40px;
  margin-top: 30px;
}

.big_div_004>.you>.totoro12{
  width: 90%;
}

.big_div_004>.you>.totoro12>img {
  width: 24%;
}

#base {
  padding: 30px;
  margin-top: 60px;
}

#base p {
  width: 90%;
  text-indent: 2em;
  text-align: start;
  margin: auto;
  margin-top: 20px;
  font-size: 30px;
  color: rgb(0 25 8 / 76%);
  font-family: cursive;
}

#base span {
  font-size: 30px;
  color: rgb(60, 85, 94);
  font-family: 翩翩体-简;
  margin-top: 20px;
}

#base table {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

#plot {
  padding: 30px;
  margin-top: 60px;
  margin-bottom: 100px;
}

#plot p {
  width: 90%;
  text-indent: 2em;
  text-align: start;
  margin: auto;
  margin-top: 20px;
  font-size: 30px;
  color: black;
  font-family: cursive;
}

#plot div {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 40px;
}

#plot div img {
  width: 100%;
  border: 1px solid rgb(0, 0, 0);
  box-shadow: 0 0 10px rgb(0 0 0 / 70%);
}
</style>
