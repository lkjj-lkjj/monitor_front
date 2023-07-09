<template>
  <body>
  <nav>
    <Header></Header>
    <div style="display: flex; flex-wrap: wrap">
      <div style="padding-left: 20px; padding-top: 120px;width: 300px">
        <Aside/>
      </div>
      <router-view style="margin-top: 123px; margin-left: 10px"/>
    </div>
  </nav>
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";

export default {
  name: "Home",
  components: {Header, Aside},
  mounted() {
    sessionStorage.setItem("camera1url", "rtmp://47.92.211.14:1935/live/1")
    sessionStorage.setItem("camera4url", "rtmp://47.92.211.14:1935/live/2")
  }
}
</script>

<style scoped>
body {
  height: 969px;
  background-size: cover;
  background-image: linear-gradient(to bottom, #1b1e2e, #1e2433, #222a39, #26303e, #2a3643, #2f3d49, #34454f, #3a4c55, #43565d, #4c6165, #576b6d, #627675);
}
</style>