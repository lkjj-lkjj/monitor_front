<template>
  <div style="display: flex; width: 80%">
    <div style="display: flex; flex-wrap: wrap; width: 1000px;margin-left: 160px">
      <div style="margin-top: 50px; transform: scale(1.5); margin-left: 270px">
        <el-radio-group v-model="radio" size="large" style="--el-color-primary: rgb(108,108,108); color: #FFFFFF">
          <el-radio-button label="Camera 1" />
          <el-radio-button label="Camera 2" />
          <el-radio-button label="Camera 3" />
          <el-radio-button label="Camera 4" />
        </el-radio-group>
      </div>
      <div v-if="radio === 'Camera 1'" class="video" style="background-color: rgba(0,0,0,0.6); overflow: hidden; position: relative; margin-top: -140px">
        <img :src="imgSrc1" alt="" style="width: auto; height: 96%; border-radius: 10px; margin-top: 10px" ref="outerDiv">
        <DragDiv style="margin-left: 15px" ref="innerDiv"></DragDiv>
      </div>
      <div v-if="radio === 'Camera 2'" class="video" style="background-color: rgba(0,0,0,0.6); overflow: hidden; position: relative; margin-top: -140px">
        <img :src="imgSrc2" alt="" style="width: auto; height: 96%; border-radius: 10px; margin-top: 10px" ref="outerDiv">
        <DragDiv style="margin-left: 15px" ref="innerDiv"></DragDiv>
      </div>
      <div v-if="radio === 'Camera 3'" class="video" style="background-color: rgba(0,0,0,0.6); overflow: hidden; position: relative; margin-top: -140px">
        <img :src="imgSrc3" alt="" style="width: auto; height: 96%; border-radius: 10px; margin-top: 10px" ref="outerDiv">
        <DragDiv style="margin-left: 15px" ref="innerDiv"></DragDiv>
      </div>
      <div v-if="radio === 'Camera 4'" class="video" style="background-color: rgba(0,0,0,0.6); overflow: hidden; position: relative; margin-top: -140px">
        <img :src="imgSrc4" alt="" style="width: auto; height: 96%; border-radius: 10px; margin-top: 10px" ref="outerDiv">
        <DragDiv style="margin-left: 15px" ref="innerDiv"></DragDiv>
      </div>
      <div style="position: absolute; margin-top: 660px; transform: scale(1.4); margin-left: 355px">
        <Ripple @click="updatePosition()"></Ripple>
      </div>
    </div>

  </div>
</template>

<script>
import DragDiv from "@/components/DragDiv.vue";
import request from "@/utils/request";
import Ripple from "@/components/Ripple.vue";

export default {
  name: "Page2",
  components:{
    Ripple,
    DragDiv
  },
  data(){
    return{
      radio:'Camera 1',
      region: {
        url:'',
        ltx:'',
        lty:'',
        rbx:'',
        rby:''
      },
      imgSrc1: '',
      imgSrc2: '',
      imgSrc3: '',
      imgSrc4: ''
    }
  },
  // mounted() {
  //   const observer = new ResizeObserver(this.updatePosition);
  //   observer.observe(this.$refs.outerDiv);
  // },
  mounted() {
    if(sessionStorage.getItem('camera1url') !== "")
      this.imgSrc1 = "/api/recognition/first_image/?camera_url=" + encodeURIComponent(sessionStorage.getItem('camera1url'))
    if(sessionStorage.getItem('camera2url') !== "")
      this.imgSrc2 = "/api/recognition/first_image/?camera_url=" + encodeURIComponent(sessionStorage.getItem('camera2url'))
    if(sessionStorage.getItem('camera3url') !== "")
      this.imgSrc3 = "/api/recognition/first_image/?camera_url=" + encodeURIComponent(sessionStorage.getItem('camera3url'))
    if(sessionStorage.getItem('camera4url') !== "")
      this.imgSrc4 = "/api/recognition/first_image/?camera_url=" + encodeURIComponent(sessionStorage.getItem('camera4url'))


    // if(sessionStorage.getItem('camera1url') !== null){
    //   request.get("/recognition/first_image/?camera_url="+encodeURIComponent(sessionStorage.getItem("camera1url"))).then(res=>{
    //     console.log(res)
    //     this.imgSrc1 = res
    //   })
    // }
  },
  methods: {
    updatePosition() {
      const outerRect = this.$refs.outerDiv.getBoundingClientRect();
      const innerRect = this.$refs.innerDiv.$el.getBoundingClientRect();

      let leftPercentage = ((innerRect.left - outerRect.left) / outerRect.width);
      let topPercentage = ((innerRect.top - outerRect.top) / outerRect.height);
      let rightPercentage = 1-((outerRect.right - innerRect.right) / outerRect.width);
      let bottomPercentage = 1-((outerRect.bottom - innerRect.bottom) / outerRect.height);

      if(leftPercentage<0)
        leftPercentage = 0;
      if(topPercentage<0)
        topPercentage = 0;
      if(rightPercentage>1)
        rightPercentage = 1;
      if(bottomPercentage>1)
        bottomPercentage = 1;

      this.region.ltx = leftPercentage;
      this.region.lty = topPercentage;
      this.region.rbx = rightPercentage;
      this.region.rby = bottomPercentage;

      let cid;
      if(this.radio === 'Camera 1')
        cid = 1;
      else if(this.radio === 'Camera 2')
        cid = 2;
      else if(this.radio === 'Camera 3')
        cid = 3;
      else
        cid = 4;

      this.region.url = sessionStorage.getItem("camera"+cid+"url")

      request.post("/recognition/range_coordinate/",this.region).then(res=>{
        this.$message({
          type: 'success',
          message: 'Success!'
        })
      })
      //
      //
      // console.log('Left percentage:', leftPercentage);
      // console.log('Top percentage:', topPercentage);
      // console.log('Right percentage:', rightPercentage);
      // console.log('Bottom percentage:', bottomPercentage);
      // console.log(this.radio)
    }
  }
}
</script>

<style scoped>
.video{
  height: 630px;
  width: 1000px;
  background-color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -210px;
  position: absolute;
}
</style>