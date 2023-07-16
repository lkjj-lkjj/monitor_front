<template>
  <body>
  <el-button @click="scroll()"
             style="margin-top: 45px; margin-left: 1760px; border: none; color: #FF627B; font-size: 20px">start
  </el-button>
  <div class="logo">
    <img src="../assets/img/logo.svg" alt=""/>
    <h3>Home monitor</h3>
  </div>
  <div class="menu"><img src="../assets/img/menu.svg" alt=""/></div>

  <div class="section">
    <div class="slogan">
      <h3 class="rellax" data-rellax-speed="6">Home monitor</h3>
      <h1 class="rellax" data-rellax-speed="5">Bring Security</h1>
      <p class="rellax" data-rellax-speed="3">
        With the development of society, home security has become increasingly
        important. Traditional home surveillance systems primarily rely on CCTV cameras, but they have limited
        functionality and scalability, often only providing features such as video recording and remote viewing.
      </p>
    </div>
    <img class="img1 rellax" data-rellax-speed="-2" src="../assets/img/1.png" alt=""/>
    <img class="img2 rellax" data-rellax-speed="9" src="../assets/img/2.png" alt=""/>
    <img class="img3 rellax" data-rellax-speed="5" src="../assets/img/3.png" alt=""/>
    <img class="img4 rellax" data-rellax-speed="-4" src="../assets/img/4.png" alt=""/>
    <img class="img5 rellax" data-rellax-speed="0" src="../assets/img/5.png" alt=""/>
    <img class="img6 rellax" data-rellax-speed="-5" src="../assets/img/6.png" alt=""/>
    <img class="img7 rellax" data-rellax-speed="4" src="../assets/img/8.png" alt=""/>
    <img class="img8 rellax" data-rellax-speed="-3" src="../assets/img/9.png" alt=""/>
  </div>
  <div class="section">
    <div class="slogan">
      <h3>Started</h3>
      <h1>All Started With A Simple Smile</h1>
      <p>
        We have developed a home surveillance web system based on computer vision algorithms,
        which retrieves video feed from network cameras to better meet the needs of real-time monitoring,
        versatility, and user-friendliness. The main features include user management,
        pedestrian and pet recognition, emotion recognition, intrusion detection, and model services.
      </p>
    </div>
    <img
        src="../assets/img/y1.png"
        class="img8 rellax"
        data-rellax-speed="-4"
        data-rellax-vertical-scroll-axis="x"
        alt=""
    />
    <img
        src="../assets/img/y2.png"
        class="img9 rellax"
        data-rellax-speed="7"
        data-rellax-vertical-scroll-axis="x"
        alt=""
    />
  </div>
  <div class="section"></div>
  </body>
  <FrontBottom style="margin-top: -1200px"></FrontBottom>
</template>

<script>
import Rellax from 'rellax'
import FrontBottom from '@/components/FrontBottom.vue'

export default {
  name: "Front",
  mounted() {
    this.rellax = new Rellax('.rellax', {horizontal: true})
  },
  components: {
    FrontBottom
  },
  methods: {
    scroll() {
      this.smoothScrollTo(document.body.scrollHeight, 2500, 10000);
    },
    smoothScrollTo(targetPosition, stopPosition, duration) {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
      let stopScroll = false;

      function scrollToTop(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentPosition = startPosition + (distance / duration) * progress;

        window.scrollTo(0, currentPosition);

        if (currentPosition >= stopPosition) {
          stopScroll = true;
        }

        if (progress < duration && !stopScroll) {
          requestAnimationFrame(scrollToTop);
        }
      }

      requestAnimationFrame(scrollToTop);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #FF627B;
}

body {
  overflow-x: hidden;
}

.el-button{
  --el-button-hover-bg-color:#ffeaea;
}

.logo {
  width: 60px;
  display: flex;
  position: absolute;
  left: 80px;
  top: 50px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo h3 {
  padding-left: 20px;
  font-weight: 600;
  font-size: 16px;
}

.menu {
  width: 60px;
  position: absolute;
  right: 80px;
  top: 80px;
}

.menu img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slogan {
  width: 50%;
  height: 20%;
  margin-top: -12%;
  text-align: center;
  z-index: 1;
}

.slogan h3 {
  font-size: 35px;
  font-weight: 300;
}

.slogan h1 {
  font-size: 100px;
  font-weight: 400;
}

.slogan p {
  font-size: 16px;
  color: #707070;
  line-height: 1.8;
  padding-top: 20px;
}


.img1 {
  position: absolute;
  top: 5%;
  left: 10%;
}

.img2 {
  position: absolute;
  top: 10%;
  right: 20%;
}

.img3 {
  position: absolute;
  top: 40%;
  left: 37%;
}

.img4 {
  position: absolute;
  top: 50%;
  right: 20%;
}

.img5 {
  position: absolute;
  top: 50%;
  left: -10%;
}

.img6 {
  position: absolute;
  top: 50%;
  left: 23%;
}

.img7 {
  position: absolute;
  top: 60%;
  right: 25%;
}

.img8 {
  position: absolute;
  top: 40%;
  right: -10%;
}

.img9 {
  position: absolute;
  top: 55%;
  left: 0%;
}

.img10 {
  position: absolute;
  top: 55%;
  right: 0%;
}
</style>