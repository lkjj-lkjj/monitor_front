<template>
  <div style="width: 80%; display: flex;">
    <div style="display: flex; flex-wrap: wrap; width: 1000px;">
      <div class="video" style="background-color: rgba(0,0,0,0.5)">
<!--        <img src="../assets/otherImg/captured-photo.jpg" alt="" style="width: auto; height: 93%; border-radius: 10px">-->
<!--        <img src="http://127.0.0.1:8000/recognition/object_recognition/" alt="" style="width: auto; height: 96%; border-radius: 5px; margin-top: 10px">-->
        <div
            v-show="(activeIndex === 0 || (activeIndex === -1 && (isAnimating === 0 || isAnimating === -1))) && this.form.switch1"
            class="box"
            :class="{ 'expanded': activeIndex === 0, 'collapsed': isAnimating === -1 && activeIndex !== 0 }"
            @dblclick="toggleExpand(0)"
        >
          <!-- 内容 -->
          <img :src=curl1 alt="" style="width: auto; height: 96%; border-radius: 5px; margin: auto 0" />
        </div>
        <div
            v-show="(activeIndex === 1 || (activeIndex === -1 && (isAnimating === 1 || isAnimating === -1))) && this.form.switch2"
            class="box"
            :class="{ 'expanded': activeIndex === 1, 'collapsed': isAnimating !== -1 && activeIndex !== 1 }"
            @dblclick="toggleExpand(1)"
            style="right: 0;"
        >
          <!-- 内容 -->
          <img :src=curl2 alt="" style="width: auto; height: 96%; border-radius: 5px; margin: auto 0" />
<!--          <img src="http://127.0.0.1:8000/recognition/object_recognition/" alt="" style="width: auto; height: 96%; border-radius: 5px; margin: auto 0">-->
        </div>
        <div
            v-show="(activeIndex === 2 || (activeIndex === -1 && (isAnimating === 2 || isAnimating === -1))) && this.form.switch3"
            class="box"
            :class="{ 'expanded': activeIndex === 2, 'collapsed': isAnimating !== -1 && activeIndex !== 2 }"
            @dblclick="toggleExpand(2)"
            style="bottom: 0;"
        >
          <!-- 内容 -->
          <img :src=curl3 alt="" style="width: auto; height: 96%; border-radius: 5px; margin: auto 0" />
<!--          <img src="http://127.0.0.1:8000/recognition/object_recognition/" alt="" style="width: auto; height: 96%; border-radius: 5px; margin: auto 0">-->
        </div>
        <div
            v-show="(activeIndex === 3 || (activeIndex === -1 && (isAnimating === 3 || isAnimating === -1))) && this.form.switch4"
            class="box"
            :class="{ 'expanded': activeIndex === 3, 'collapsed': isAnimating !== -1 && activeIndex !== 3 }"
            @dblclick="toggleExpand(3)"
            style="bottom: 0; right: 0"
        >
          <!-- 内容 -->
          <img :src=curl4 alt="" style="width: auto; height: 96%; border-radius: 5px; margin: auto 0" />
<!--          <img src="http://127.0.0.1:8000/recognition/object_recognition/" alt="" style="width: auto; height: 96%; border-radius: 5px; margin: auto 0">-->
        </div>
      </div>
      <div style="margin-left: 50px; display: flex; margin-top: 635px">
<!--        <el-date-picker-->
<!--            v-model="date"-->
<!--            type="daterange"-->
<!--            unlink-panels-->
<!--            range-separator="-"-->
<!--            start-placeholder="Start date"-->
<!--            end-placeholder="End date"-->
<!--            :shortcuts="shortcuts"-->
<!--            style="border-radius: 20px; background: rgba(0,0,0,0.4);"-->
<!--        />-->
        <el-button @click="search()" style="margin-left: 20px; background: rgba(0,0,0,0.4); color: #FFF; border-color: #a0a5a8; border-radius: 20px">Refresh</el-button>
      </div>
      <div class="table">
        <div>
          <el-table :data="tableData" style="width: 100%; border-radius: 20px; padding: 0 10px 10px 10px;opacity: 0.4" height="170">
            <el-table-column fixed prop="time" label="Date" width="250" />
            <el-table-column prop="number" label="Object num" width="180" />
            <el-table-column prop="camera_url" label="Camera url" width="350" />
            <el-table-column fixed="right" label="Photo" width="120">
              <template #default="scope">
                <el-button link type="primary" @click="showPic(scope.row.time, scope.row.camera_url)">view</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; width: 570px; margin-left: 20px;">
      <div class="chart">
        <div>
          <Bchart style="transform: scale(0.65); margin-left: 90px; margin-top: -50px"></Bchart>
          <el-divider style="margin-top: -170px; opacity: 0.5"/>
        </div>
        <div>
          <Pchart style="transform: scale(0.8); margin-left: -25px; margin-top: -50px"></Pchart>
          <el-divider style="margin-top: -60px; opacity: 0.5"/>
        </div>
        <div style="height: 150px; margin-top: -40px; display: flex; flex-wrap: wrap;">
          <div style="width: 150px; margin-top: -530px; margin-left: 20px; background-color: rgba(0,0,0,0.5); padding: 10px 10px 10px 20px;border-radius: 20px; height: 200px; position: absolute">
            <el-form>
              <el-form-item>
                <span style="color: #cecece">Url1: </span>
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
                <span style="color: #cecece">Url2: </span>
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
                <span style="color: #cecece">Url3: </span>
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
                <span style="color: #cecece">Url4: </span>
                <el-switch
                    v-model="form.switch4"
                    class="ml-2"
                    inline-prompt
                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px"
                    active-text="Y"
                    inactive-text="N"
                />
<!--                <el-button style="margin-left: 20px; margin-top: 15px; border-radius: 20px;" type="success">Submit</el-button>-->
              </el-form-item>
            </el-form>
          </div>
          <div style="height: 250px; width: 100%; margin-left: -30px; margin-top: 15px">
            <div style="overflow: hidden; border-radius: 10px; margin-left: 80px; margin-top: 10px;width: 462px">
<!--              <el-transfer style="border-radius: 20px; height: 220px; &#45;&#45;el-transfer-panel-width: 133px;" v-model="transValue" :data="trans" />-->
              <el-transfer
                  style="border-radius: 5px; height: 220px; --el-transfer-panel-width: 150px;"
                  filterable
                  :filter-method="filterMethod"
                  filter-placeholder="please check object"
                  v-model="value"
                  :data="data">
              </el-transfer>
            </div>
          </div>
          <div style="position: absolute; margin-left: 245px; margin-top: 210px">
            <el-button type="success" @click="objectDetect()">Submit</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" style="height: auto; width: 30%">
      <img style="width: 100%" :src="imgSrc" alt="">
    </el-dialog>
  </div>
</template>

<script>
import Bchart from "@/components/Bchart.vue";
import Pchart from "@/components/Pchart.vue";
import Letter from "@/components/Letter.vue";
import request from "@/utils/request";
import {onBeforeUnmount} from 'vue';
export default {
  name: "Page1",
  mounted() {
    if(sessionStorage.getItem('camera1url')!== "")
      this.curl1 = "http://127.0.0.1:8000/recognition/camera/uid/"+sessionStorage.getItem("id")+"/cid/1"
    if(sessionStorage.getItem('camera2url')!== "")
      this.curl2 = "http://127.0.0.1:8000/recognition/camera/uid/"+sessionStorage.getItem("id")+"/cid/2"
    if(sessionStorage.getItem('camera3url')!== "")
      this.curl3 = "http://127.0.0.1:8000/recognition/camera/uid/"+sessionStorage.getItem("id")+"/cid/3"
    if(sessionStorage.getItem('camera4url')!== "")
      this.curl4 = "http://127.0.0.1:8000/recognition/camera/uid/"+sessionStorage.getItem("id")+"/cid/4"
    request.get("/recognition/record/uid/"+sessionStorage.getItem("id")+"/").then(res=>{
      const fieldsList = res.map((item) => item.fields);
      this.tableData = fieldsList
    })
  },
  data(){
    const generateData = _ => {
      const data = [];
      const cities = ['person', 'bicycle', 'car', 'motorbike', 'aeroplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'sofa', 'pottedplant', 'bed', 'diningtable', 'toilet', 'tvmonitor', 'laptop', 'mouse', 'remote', 'keyboard', 'phone', 'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush', 'Cola']
      const pinyin = ['person', 'bicycle', 'car', 'motorbike', 'aeroplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'sofa', 'pottedplant', 'bed', 'diningtable', 'toilet', 'tvmonitor', 'laptop', 'mouse', 'remote', 'keyboard', 'phone', 'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush', 'Cola'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return{
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.label.indexOf(query) > -1;
      },
      objects: [],
      date: "",
      curl1: '',
      curl2: '',
      curl3: '',
      curl4: '',
      imgSrc: '',
      dialogVisible: false,

      form: {
        switch1: true,
        switch2: true,
        switch3: true,
        switch4: true
      },
      activeIndex: -1,
      isAnimating: -1,
      tableData: []
    }
  },
  components:{
    Letter,
    Bchart,
    Pchart
  },
  methods: {
    showPic(time, url) {
      this.imgSrc = "/api/recognition/object_image/?camera_url="+encodeURIComponent(url)+"&time="+time
      this.dialogVisible = true
    },
    search(){
      request.get("/recognition/record/uid/"+sessionStorage.getItem("id")+"/").then(res=>{
        const fieldsList = res.map((item) => item.fields);
        this.tableData = fieldsList
      })
    },
    objectDetect(){
      this.objects = []
      this.value.forEach(index => {
        if (index >= 0 && index < this.data.length) {
          this.objects.push(this.data[index].label);
        }
      });
      request.post("/recognition/active_objects/", {data: this.objects}).then(res=>{
        if(res.code === 200){
          this.$message({
            type:"success",
            message:"Success!"
          })
        }else{
          this.$message({
            type:"error",
            message:"Server error"
          })
        }
      })
    },
    toggleExpand(index) {
      if (this.activeIndex === index) {
        // 如果已经展开，则收缩
        this.isAnimating = this.activeIndex;
        this.activeIndex = -1;
        setTimeout(() => {
          this.isAnimating = -1;
        }, 200); // 根据过渡动画的时间设置延迟
      } else {
        // 如果未展开，则展开
        this.activeIndex = index;
      }
    },
  },
  beforeUnmount() {
    // 清除图片的URL连接
    this.curl1 = '';
    this.curl2 = '';
    this.curl3 = '';
    this.curl4 = '';
  },
}
</script>

<style scoped>
.video{
  height: 630px;
  width: 1000px;
  background-color: black;
  border-radius: 20px;
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
  position: absolute;
  flex-wrap: wrap;
}
.table{
  height: 170px;
  width: 900px;
  margin-left: 50px;
  /*margin-top: 5px;*/
  border-radius: 20px;
}
.chart{
  height: 840px;
  width: 570px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
  margin-left: 40px;
}
.el-table {
  --el-table-border-color: var(--el-border-color-lighter);
  --el-table-border: 1px solid var(--el-table-border-color);
  --el-table-text-color: #FFF;
  --el-table-header-text-color: #FFF;
  --el-table-row-hover-bg-color: #5b5b5b;
  --el-table-current-row-bg-color: black;
  --el-table-header-bg-color: black;
  --el-table-fixed-box-shadow: var(--el-box-shadow-light);
  --el-table-bg-color: black;
  --el-table-tr-bg-color: black;
  --el-table-expanded-cell-bg-color: black;
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-bg-color: black;
}
.box {
  position: absolute;
  width: 47%;
  height: 45%;
  transition: all 0.3s;
  background: #333333;
  margin: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 20px;
}

.box.expanded {
  width: 95%;
  height: 94%;
}
</style>