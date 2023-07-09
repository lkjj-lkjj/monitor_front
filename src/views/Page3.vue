<template>
  <div style="width: 80%; display: flex">
    <div style="display: flex; flex-wrap: wrap; width: 1000px;">
      <div class="video" style="background-color: rgba(0,0,0,0.6)">
        <img src="../assets/otherImg/captured-photo.jpg" alt="" style="width: auto; height: 98%; border-radius: 10px">
      </div>
      <div class="table">
        <div style="transform: scale(0.6); margin-top: -200px; margin-left: -60px">
          <Bchart></Bchart>
        </div>
        <div style="transform: scale(0.9); margin-left: 400px; margin-top: -550px">
          <Lchart></Lchart>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; width: 550px; margin-left: 20px;">
      <div class="chart">
        <div style="width: 180px; margin: 20px; padding: 30px 30px 10px;background-color: rgba(0,0,0,0.2); border-radius: 20px">
          <el-form>
            <el-form-item>
              <span style="color: #cecece">Algo1: </span>
              <el-switch
                  v-model="form.switch1"
                  class="ml-2"
                  inline-prompt
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px"
                  active-text="Y"
                  inactive-text="N"
              />
            </el-form-item>
            <el-form-item>
              <span style="color: #cecece">Algo2: </span>
              <el-switch
                  v-model="form.switch2"
                  class="ml-2"
                  inline-prompt
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px"
                  active-text="Y"
                  inactive-text="N"
              />
            </el-form-item>
            <el-form-item>
              <span style="color: #cecece">Algo3: </span>
              <el-switch
                  v-model="form.switch3"
                  class="ml-2"
                  inline-prompt
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px"
                  active-text="Y"
                  inactive-text="N"
              />
            </el-form-item>
            <el-form-item>
              <span style="color: #cecece">Algo3: </span>
              <el-switch
                  v-model="form.switch4"
                  class="ml-2"
                  inline-prompt
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px"
                  active-text="Y"
                  inactive-text="N"
              />
            </el-form-item>
            <el-form-item>
              <el-button style="margin-left: 20px; margin-top: 15px; border-radius: 20px;" type="success">Submit</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="chartDown">

      </div>
    </div>
  </div>
</template>

<script>
import Bchart from "@/components/Bchart.vue";
import Lchart from "@/components/Lchart.vue";

export default {
  name: "Page3",
  components: {Lchart, Bchart},
  data(){
    return{
      form:{
        switch1: true,
        switch2: false,
        switch3: false,
        switch4: false,
      }
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
  height: 340px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
}
.chartDown{
  width: 550px;
  height: 480px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 10px;
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