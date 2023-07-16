<template>
  <div style="width: 80%; display: flex">
    <div style="display: flex; flex-wrap: wrap; width: 1000px;">
      <div class="video" style="background-color: rgba(0,0,0,0.6)">
        <img :src="imgSrc" ref="imageRef" alt="" style="width: auto; height: 98%; border-radius: 10px">
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; width: 550px; margin-left: 20px;">
      <div class="chart">
        <div style="width: 190px; margin: 30px 20px 20px;padding: 30px 30px 10px;background-color: rgba(0,0,0,0.2); border-radius: 20px">
          <el-form>
            <el-form-item>
              <span style="color: #cecece">Emotion: </span>
              <el-switch
                  v-model="form.switch2"
                  class="ml-2"
                  inline-prompt
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px"
                  active-text="Y"
                  inactive-text="N"
                  @change="switchChange()"
              />
            </el-form-item>
            <el-form-item>
              <span style="color: #cecece">Expression: </span>
              <el-switch
                  v-model="form.switch3"
                  class="ml-2"
                  inline-prompt
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 6px"
                  active-text="Y"
                  inactive-text="N"
                  @change="switchChange()"
              />
            </el-form-item>
            <div style="background-color: #333333; border-radius: 10px; padding: 10px; margin-left: 0px; width: 130px; height: 60px">
              <el-form-item>
                <span style="color: #cecece">Fall : </span>
                <el-switch
                    v-model="form.switch5"
                    class="ml-2"
                    inline-prompt
                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px"
                    active-text="Y"
                    inactive-text="N"
                    @change="switchChange()"
                />
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div style="width: 280px; margin: 30px 20px 20px;padding: 30px 30px 10px;background-color: rgba(0,0,0,0.2); border-radius: 20px">
          <span style="color:#FFFFFF; font-size: 30px">3D to 2D</span>
          <el-upload
              ref="upload"
              class="upload-demo"
              action="/api/service/three_to_two/"
              :limit="1"
              :auto-upload="false"
              @success="handleUploadSuccess"
          >
            <template #trigger>
              <el-button style="margin-top: 20px" type="primary">select a ply file</el-button>
            </template>
            <template #tip>
              <div class="el-upload__tip text-red">
                limit 1 file, new file will cover the old file
              </div>
            </template>
            <el-button style="margin-top: 20px" class="ml-3" type="success" @click="submitUpload">
              upload and download
            </el-button>
          </el-upload>
        </div>
      </div>
      <div class="chartDown">
<!--        <button @click="uploadImage">上传图片</button>-->
        <div class="textarea">
          <el-input v-model="desc" type="textarea" style="opacity: 0.98; font-size: 20px" rows="7"/>
        </div>
        <Ripple style="margin-left: 165px; margin-top: 30px" @click="uploadImage"></Ripple>
      </div>
    </div>
  </div>
</template>

<script>
import Bchart from "@/components/Bchart.vue";
import Lchart from "@/components/Lchart.vue";
import request from "@/utils/request";
import Ripple from "@/components/Ripple.vue";

export default {
  name: "Page4",
  components: {Ripple, Lchart, Bchart},
  setup(){

  },
  data(){
    return{
      desc: 'Generate family image caption...',
      form:{
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
      },
      imgSrc: '/api/service/serviceid/0/0/0/0/',
    }
  },
  methods:{
    handleUploadSuccess(response, file, fileList) {
      if (response.code === 200) {
        // this.$message({
        //   type: "success",
        //   message: "Success"
        // })
        const path = response.data
        // const res = request.get('/service/image_download/?image_path='+encodeURIComponent(path), { responseType: 'blob' });
        // const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = "http://127.0.0.1:8000/service/image_download/?image_path="+encodeURIComponent(path);
        link.setAttribute('download', 'image.jpg'); // 下载的文件名
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }else {
        this.$message({
          type: "error",
          message: "Upload failed"
        })
      }
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    switchChange(){
      if(this.form.switch5 === false){
        this.imgSrc = '/api/service/serviceid/'+(this.form.switch1?1:0)+'/'+(this.form.switch2?1:0)+'/'+(this.form.switch3?1:0)+'/'+(this.form.switch4?1:0)+'/'
      }
      else{
        this.form.switch1 = false
        this.form.switch2 = false
        this.form.switch3 = false
        this.imgSrc = '/api/service/fall_recognition/'
      }
    },
    async uploadImage() {
      const image = this.$refs.imageRef;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // 设置画布尺寸与图片尺寸相同
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      // 在画布上绘制图像
      context.drawImage(image, 0, 0);

      // 从画布中获取截取的图像数据
      const imageData = canvas.toDataURL('image/jpeg');
      this.desc = "Waiting ..."
      request.post("/service/image_caption/", {image: imageData}).then(res=>{
        if(res.code === 200){
          this.desc = res.data
        }
      })
    },
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
  margin-top: 60px;
}
.chart{
  /*height: 840px;*/
  width: 550px;
  height: 340px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
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
.textarea{
  margin: 20px;
  background-color: rgba(0,0,0,0.2);
  border-radius: 20px;
  height: 330px;
  padding: 20px;
  overflow: hidden;
}
.el-input__inner {
  color: #ff0000;
}
</style>