<template>
  <body>
  <div class="content">
    <div class="video">
      <video ref="video" autoplay></video>
    </div>
    <Ripple @click="capture" style="transform: scale(1.5); margin-left: 190px"></Ripple>
    <a :href="downloadUrl" v-if="downloadUrl" download="captured-photo.jpg">下载照片</a>
  </div>
  </body>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import Ripple from "@/components/Ripple.vue";

export default {
  components: {Ripple},
  setup() {
    const video = ref(null);
    const capturedImage = reactive({ url: '' });
    const captureWidth = 1280; // 设置拍摄照片的宽度
    const captureHeight = 960; // 设置拍摄照片的高度
    let mediaStream = null; // 用于保存媒体流对象

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

    const capture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = captureWidth;
      canvas.height = captureHeight;
      const context = canvas.getContext('2d');

      // 将视频流绘制到画布上
      context.drawImage(video.value, 0, 0, captureWidth, captureHeight);

      // 将画布转换为图像数据（Base64格式）
      const imageData = canvas.toDataURL('image/jpeg');
      capturedImage.url = imageData;

      // 更新下载链接
      const downloadLink = document.createElement('a');
      downloadLink.href = imageData;
      downloadLink.download = 'captured-photo.jpg';
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    onMounted(() => {
      startCamera();
    });

    onBeforeUnmount(() => {
      stopCamera();
    });

    return {
      video,
      capture,
      downloadUrl: capturedImage.url
    };
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
  margin-left: 600px;
}
.video{
  width: 640px;
  height: 480px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #333333;
}
</style>