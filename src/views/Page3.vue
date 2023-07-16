<template>
  <div style="width: 80%; display: flex">
    <div style="display: flex; flex-wrap: wrap; width: 1000px;">
      <div class="video" style="background-color: rgba(0,0,0,0.6)">
        <img :src="imgSrc" alt="" style="width: auto; height: 98%; border-radius: 10px">
      </div>
      <div class="table">
        <div style="transform: scale(0.9); margin-left: 200px;margin-top: -150px">
          <Lchart></Lchart>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; width: 550px; margin-left: 20px;">
      <div class="chart">
          <el-table :data="tableData" style="width: 100%; border-radius: 20px; padding:0 10px 10px 10px;opacity: 0.9" height="834">
            <el-table-column fixed prop="intrusion_time" label="Date" width="200" />
            <el-table-column prop="video_path" label="Path" width="400" />
            <el-table-column fixed="right" label="Video" width="120">
              <template #default="scope">
                <el-button link type="primary" @click="showVideo(scope.row.video_path)">play</el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" style="height: auto; width: 30%; padding: 0;">
      <div>
        <vue3-video-player :src="videoSrc" ></vue3-video-player>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bchart from "@/components/Bchart.vue";
import Lchart from "@/components/Lchart.vue";
import request from "@/utils/request";

export default {
  name: "Page3",
  components: {Lchart, Bchart},
  mounted() {
    request.get("/face/intrusion_record/uid/"+sessionStorage.getItem('id')+"/").then(res=>{
      const fieldsList = res.map((item) => item.fields);
      this.tableData = fieldsList
    })
  },
  data(){
    return{
      form:{
        switch1: true,
        switch2: false,
        switch3: false,
        switch4: false,
      },
      imgSrc: '/api/face/intrusion_recognition/uid/'+sessionStorage.getItem('id')+'/',
      tableData: [],
      videoSrc: '',
      dialogVisible: false,
    }
  },
  methods:{
    switchChange(){
      this.imgSrc = '/api/service/serviceid/'+(this.form.switch1?1:0)+'/'+(this.form.switch2?1:0)+'/'+(this.form.switch3?1:0)+'/'+(this.form.switch4?1:0)+'/'
    },
    showVideo(path){
      this.videoSrc="/api/face/intrusion_video/?path="+path
      this.dialogVisible = true
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
}
.chart{
  /*height: 840px;*/
  width: 550px;
  height: 834px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
}
.table{
  height: 200px;
  width: 1000px;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}
</style>