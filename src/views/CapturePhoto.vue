<template>
  <body>
  <div class="content">
    <div class="progress-container">
      <el-progress type="circle" :percentage=percentage :status=circleStatue></el-progress>
    </div>
      <div class="video">
        <video style="margin-left: -100px" ref="video" autoplay></video>
      </div>
    <div style="margin-left: 160px; margin-top: 20px;">
      <span style="font-size: 30px; color: #ee8c47">Please blink!</span>
    </div>
    <Ripple @click="startCapture" style="transform: scale(1.5); margin-left: 119px; margin-top: -5px"></Ripple>
  </div>
  </body>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import Ripple from "@/components/Ripple.vue";
import request from "@/utils/request";
import { useRouter } from 'vue-router';

export default {
  components: { Ripple },
  setup() {
    const video = ref(null);
    const capturedImages = reactive({ urls: [] });
    const captureWidth = 640; // 设置拍摄照片的宽度
    const captureHeight = 480; // 设置拍摄照片的高度
    let mediaStream = null; // 用于保存媒体流对象
    let captureInterval = null; // 用于保存定时器

    const percentage = ref(0);
    const circleStatue = ref("");
    const router = useRouter();

    const startCamera = async () => {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.value.srcObject = mediaStream;
      } catch (error) {
        console.error('无法访问摄像头', error);
      }
    };

    const stopCamera = () => {
      if (mediaStream) {
        mediaStream.getVideoTracks().forEach((track) => {
          track.stop();
        });
      }
    };

    const sleep = (milliseconds) => {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    };

    const capture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = captureWidth;
      canvas.height = captureHeight;
      const context = canvas.getContext('2d');

      // 将视频流绘制到画布上
      context.drawImage(video.value, 0, 0, captureWidth, captureHeight);

      // 将画布转换为图像数据（Base64格式）
      const imageData = canvas.toDataURL('image/jpeg');
      capturedImages.urls.push(imageData);

      percentage.value = percentage.value + 8
      console.log(percentage.value)
    };

    const startCapture = () => {
      capturedImages.urls = []; // Clear previous captured images
      capture(); // Capture an image immediately
      captureInterval = setInterval(capture, 250); // Capture an image every 250 milliseconds (4 images per second)

      // Stop capturing after 5 seconds (20 images)
      setTimeout(stopCapture, 2900);
    };

    const stopCapture = async () => {
      clearInterval(captureInterval);
      request.post("/face/face_login/", {image: capturedImages.urls}).then(res=>{
        if(res.code === 200){
          percentage.value = 100
          circleStatue.value = "success"
          sessionStorage.setItem("id",res.data.id)
          sessionStorage.setItem("username", res.data.username)
          sessionStorage.setItem("email", res.data.email)
          sessionStorage.setItem("curPage", "1")
          let camera_urls = JSON.parse(res.data.camera_urls.replace(/'/g, "\""))
          sessionStorage.setItem("camera1url", camera_urls.url1)
          sessionStorage.setItem("camera2url", camera_urls.url2)
          sessionStorage.setItem("camera3url", camera_urls.url3)
          sessionStorage.setItem("camera4url", camera_urls.url4)
        }
        else{
          percentage.value = 100
          circleStatue.value = "exception"
        }
      })
      await sleep(5000);
      if(circleStatue.value === "success")
        router.push('/page1');
      else{
        percentage.value = 0
        circleStatue.value = ''
      }
    };

    onMounted(() => {
      startCamera();
    });

    onBeforeUnmount(() => {
      stopCamera();
    });

    return {
      video,
      startCapture,
      downloadUrl: capturedImages.urls[capturedImages.urls.length - 1],
      percentage,
      circleStatue
    };
  },
  data(){
    return{

    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right top, #b1a9b3, #b9b7c4, #c0c6d3, #c8d6e1, #d1e5ec, #d3ecf1, #d5f2f4, #d8f9f7, #d0f9f7, #c8f9f6, #c0f9f6, #b8f9f5);
}
.content{
  margin-top: 100px;
  position: absolute;
  width: 640px;
  height: 500px;
  margin-left: 700px;
}
.video{
  width: 480px;
  height: 480px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #333333;
}
.progress-container {
  position: absolute;
  width: 480px;
  height: 480px;
  margin: 0 auto;
}

.el-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(4);
}
</style>