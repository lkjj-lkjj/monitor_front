<template>
  <body>
  <nav>
    <Header></Header>
    <div class="btnStyle">
      <el-button :type="btnType" :icon="icon" round @click="gestureToggle">{{ btnText }}</el-button>
    </div>
    <div style="display: flex; flex-wrap: wrap">
      <div style="padding-left: 20px; padding-top: 120px;width: 300px">
        <Aside/>
      </div>
      <div style="overflow: hidden; display: flex; flex-wrap: wrap; margin-left: 10px">
        <router-view v-slot="{ Component }" style="margin-top: 123px; margin-left: 10px;">
          <transition :name="this.$store.state.slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </nav>
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import { Check, Close } from "@element-plus/icons";
import request from "@/utils/request";

export default {
  name: "Home",
  components: { Header, Aside },
  data() {
    return {
      icon: Close,
      btnType: "danger",
      btnText: "Gesture",
      gestureActive: false,
      stream: null,
    };
  },
  methods: {
    gestureToggle() {
      if (this.gestureActive) {
        this.gestureActive = false
        this.stopGesture();
      } else {
        this.gestureActive = true
        this.startGesture();
      }
    },
    startGesture() {
      this.btnType = "success";
      this.icon = Check;
      this.btnText = "Stop Gesture";

      // Get the user media (camera) stream
      navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            this.stream = stream;

            // Create a video element to display the camera stream
            const video = document.createElement("video");
            video.srcObject = stream;
            video.autoplay = true;

            // Create a canvas element to capture the video frames
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Set the canvas size to match the video element
            video.onloadedmetadata = () => {
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
            };

            // Start capturing and sending frames to the backend every second
            this.captureInterval = setInterval(() => {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              const imageData = canvas.toDataURL("image/jpeg");

              // Send imageData (base64 encoded) to the backend
              this.sendImageToBackend(imageData);
            }, 2000);
          })
          .catch((error) => {
            console.error("Error accessing camera:", error);
          });
    },
    stopGesture() {
      this.btnType = "danger";
      this.icon = Close;
      this.btnText = "Gesture";

      // Stop capturing and sending frames
      clearInterval(this.captureInterval);
      this.captureInterval = null;

      // Stop the camera stream
      if (this.stream) {
        const tracks = this.stream.getTracks();
        tracks.forEach((track) => track.stop());
        this.stream = null;
      }
    },
    sendImageToBackend(imageData) {
      // Send the image data to the backend using an API request or WebSocket
      // Replace the placeholder code with your actual implementation
      request.post("/service/gesture_recognition/", {image: imageData}).then(res=>{
        console.log(res.data)
        if(res.data === "left"){
          this.$store.commit('setSlide', "slide-right")
          let page = parseInt(sessionStorage.getItem("curPage"))
          page = page - 1
          if(page <= 1){
            page = 1
          }
          sessionStorage.setItem("curPage", page.toString())
          this.$router.push('/page'+page)
        }else if(res.data === "wait"){
          this.$store.commit('setSlide', "slide-left")
          let page = parseInt(sessionStorage.getItem("curPage"))
          page = page + 1
          if(page >= 6){
            page = 6
          }
          sessionStorage.setItem("curPage", page.toString())
          this.$router.push('/page'+page)
        }
      })
    },
  },
};
</script>

<style scoped>
body {
  height: 969px;
  background-size: cover;
  background-image: linear-gradient(to bottom, #1b1e2e, #1e2433, #222a39, #26303e, #2a3643, #2f3d49, #34454f, #3a4c55, #43565d, #4c6165, #576b6d, #627675);
}
.btnStyle{
  position: fixed;
  top: 6%;
  left: 95%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>