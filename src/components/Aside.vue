<template>
  <div class="nav">
    <div class="btn">
      <div class="btn-item"></div>
      <div class="btn-item"></div>
      <div class="btn-item"></div>
    </div>
    <div class="icon">
      <div class="icon-img"><img src="../assets/otherImg/eric.jpg" alt="" /></div>
      <div class="icon-con">
        <p>Good Day</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="title">
      <p>User</p>
    </div>
    <div class="menu">
      <div class="item" @click="toPage1()">
        <div class="light"></div>
        <div class="licon"><el-icon :size="30"><House/></el-icon></div>
        <div class="con">Object</div>
        <div class="ricon"><el-icon :size="20"><Star/></el-icon></div>
      </div>
      <div class="item" @click="toPage2()">
        <div class="light"></div>
        <div class="licon"><el-icon :size="30"><Notebook/></el-icon></div>
        <div class="con">Region</div>
        <div class="ricon"><el-icon :size="20"><Pointer/></el-icon></div>
      </div>
      <div class="item" @click="toPage3()">
        <div class="light"></div>
        <div class="licon"><el-icon :size="30"><Message/></el-icon></div>
        <div class="con">Auth</div>
        <div class="ricon"><el-icon :size="20"><View/></el-icon></div>
      </div>
      <div class="item" @click="toPage4()">
        <div class="light"></div>
        <div class="licon"><el-icon :size="30"><Files/></el-icon></div>
        <div class="con">Emotion</div>
        <div class="ricon"><el-icon :size="20"><Edit/></el-icon></div>
      </div>
    </div>
    <div class="line"></div>
    <div class="title">
      <p>Admin</p>
    </div>
    <div class="serve">
      <div class="item" @click="toPage6()">
        <div class="licon"><el-icon :size="30"><User/></el-icon></div>
        <div class="con">Information</div>
        <div class="ricon">
          <span class="iconfont icon-Dashboard"></span>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="item" @click="toSetting()" style="margin-top: 15px">
        <div class="light"></div>
        <div class="licon"><el-icon :size="30"><Setting/></el-icon></div>
        <div class="con">Setting</div>
        <div class="ricon"><el-icon :size="20"><Setting/></el-icon></div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Menu,
  Share,
  User,
  Notebook,
  Document,
  Star,
  Pointer,
  View,
  House,
  Edit,
  Message,
  Files,
  Setting,
  Fold
} from "@element-plus/icons";


export default {
  name: "Aside",
  components: {Fold, Share, User, Menu, Notebook, Document, Star, Pointer, View, House, Edit,Message, Files, Setting},
  methods:{
    toPage1(){
      this.$store.commit('setSlide', this.slideWhere(1))
      this.$router.push("/page1")
      sessionStorage.setItem("curPage", "1")
    },
    toPage2(){
      this.$store.commit('setSlide', this.slideWhere(2))
      this.$router.push("/page2")
      sessionStorage.setItem("curPage", "2")
    },
    toPage3(){
      this.$store.commit('setSlide', this.slideWhere(3))
      this.$router.push("/page3")
      sessionStorage.setItem("curPage", "3")
    },
    toPage4(){
      this.$store.commit('setSlide', this.slideWhere(4))
      this.$router.push("/page4")
      sessionStorage.setItem("curPage", "4")
    },
    toPage6(){
      this.$store.commit('setSlide', this.slideWhere(5))
      this.$router.push("/page5")
      sessionStorage.setItem("curPage", "5")
    },
    toSetting(){
      this.$store.commit('setSlide', this.slideWhere(6))
      this.$router.push("/page6")
      sessionStorage.setItem("curPage", "6")
    },
    slideWhere(page){
      if(page > parseInt(sessionStorage.getItem("curPage"))){
        return "slide-left"
      }
      else
        return "slide-right"
    },
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.6);
}

.wrap {
  width: 100%;
  height: 100vh;
  background: url("../assets/otherImg/bg.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  width: 110px;
  /*    width: 280px;*/
  margin-right: 180px;
  height: 840px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  z-index: 1;
}

.nav:hover {
  width: 280px;
}

.btn {
  width: 60px;
  height: 10px;
  display: flex;
  justify-content: space-around;
  margin-left: 25px;
  margin-top: 25px;
}

.btn-item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.btn-item:nth-child(1) {
  background: #eb5a56;
}

.btn-item:nth-child(2) {
  background: #f8bc33;
}

.btn-item:nth-child(3) {
  background: #62cb44;
}

.icon {
  width: 250px;
  height: 60px;
  margin-left: 25px;
  margin-top: 20px;
  display: flex;
}

.icon-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.icon-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.icon-con {
  height: 60px;
  margin-left: 25px;
}

.icon-con p {
  padding-top: 5px;
}

.icon-con h2 {
  font-weight: 400;
}

.line {
  width: 60px;
  height: 1px;
  background: rgba(245, 253, 255, 0.5);
  margin: 20px 25px;
  transition: 0.5s;
}

.nav:hover .line {
  width: 230px;
}

.title {
  width: 60px;
  margin-left: 25px;
  margin-bottom: 20px;
}

.title p {
  font-size: 14px;
}

.menu {
  width: 230px;
  margin-left: 25px;
}

.item {
  display: flex;
  position: relative;
  transition: 0.5s;
  border-radius: 6px;
  cursor: pointer;
}

.item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.licon {
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.con {
  width: 0px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  left: -20px;
  opacity: 0;
}

.nav:hover .con {
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.ricon {
  width: 0px;
  height: 50px;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
}

.nav:hover .ricon {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.iconfont {
  font-size: 26px;
}

.ricon .iconfont {
  font-size: 20px;
  color: #62cb44;
}

.light {
  width: 6px;
  height: 50px;
  background: #eb5a56;
  position: absolute;
  left: -25px;
  transition: 0.5s;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: 0;
}

.item:hover .light {
  opacity: 1;
}

.serve {
  width: 60px;
  /*    background: rgba(98, 203, 68, 0.5);*/
  background: rgba(0, 0, 0, 0.5);
  margin-left: 25px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
}

.nav:hover .serve {
  width: 230px;
}
</style>