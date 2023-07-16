<template>
  <div style="display: flex; width: 80%">
    <div style="display: flex; flex-wrap: wrap; width: 1000px;margin-left: 160px">
      <div class="upload_url">
        <div style="padding: 20px 40px 40px;">
          <el-form label-position="left" label-width="150px" style="max-width: 460px; margin-left: 70px">
            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>Please set the camera url, the maximum number is 4. <br>Example: rtmp://xxxxx/xx/xx</p>
              </el-alert>
              <el-form-item label="Camera URL 1 :" class="settingItem">
                <el-input v-model="url1"/>
              </el-form-item>
              <el-form-item label="Camera URL 2 :" class="settingItem">
                <el-input v-model="url2"/>
              </el-form-item>
              <el-form-item label="Camera URL 3 :" class="settingItem">
                <el-input v-model="url3"/>
              </el-form-item>
              <el-form-item label="Camera URL 4 :" class="settingItem">
                <el-input v-model="url4"/>
              </el-form-item>
              <el-form-item style="margin-top: 10px">
                <el-button type="primary" @click="sendURLS()">Submit</el-button>
                <el-button style="position: absolute;right: 0;" @click="clear()">Clear</el-button>
              </el-form-item>
            </el-space>
          </el-form>
        </div>
      </div>
      <div class="upload_img">
        <div style="padding: 10px; border-radius: 10px; background-color: rgb(255,255,255); margin-left: 100px; margin-right: 100px">
          <el-upload
              ref="upload"
              class="upload-demo"
              drag
              :action=pic_url
              :auto-upload="false"
              :multiple="false"
              :limit="1"
              @success="handleUploadSuccess"
          >
            <el-icon class="el-icon--upload">
              <upload-filled/>
            </el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip" style="color: #000000">
                jpg files with a size less than 2Mb
              </div>
            </template>
          </el-upload>
        </div>
        <el-button class="ml-3" type="success" @click="submitUpload" style="margin-left: 300px; margin-top: 20px">
          upload to server
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {UploadFilled} from "@element-plus/icons";
import request from "@/utils/request";

export default {
  name: "Setting",
  components: {UploadFilled},
  data() {
    return {
      url1: sessionStorage.getItem("camera1url"),
      url2: sessionStorage.getItem("camera2url"),
      url3: sessionStorage.getItem("camera3url"),
      url4: sessionStorage.getItem("camera4url"),
      pic_url: "/api/face/upload_image/uid/" + sessionStorage.getItem('id') + "/"
    }
  },
  // mounted() {
  //   this.url1= sessionStorage.getItem("camera1url")
  //   this.url2= sessionStorage.getItem("camera2url")
  //   this.url3= sessionStorage.getItem("camera3url")
  //   this.url4= sessionStorage.getItem("camera4url")
  // },
  methods: {
    sendURLS() {
      request.post('/recognition/camera_url/', {
        uid: sessionStorage.getItem("id"),
        url1: this.url1,
        url2: this.url2,
        url3: this.url3,
        url4: this.url4
      })
          .then(res => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: "Success"
              })
            } else {
              this.$message({
                type: "error",
                message: "Server error"
              })
            }
          })
    },
    clear() {
      this.url1 = ''
      this.url2 = ''
      this.url3 = ''
      this.url4 = ''
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleUploadSuccess(response, file, fileList) {
      if (response.code === 200) {
        this.$message({
          type: "success",
          message: "Success"
        })
      } else if (response.code === 403) {
        this.$message({
          type: "warning",
          message: "No face"
        })
      } else {
        this.$message({
          type: "error",
          message: "Upload failed"
        })
      }
    }

  }
}
</script>

<style>
.upload_url {
  width: 800px;
  height: 450px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-left: 70px;
}

.upload_img {
  width: 800px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-left: 70px;
  padding: 20px;
}

.settingItem {
  margin-top: 20px;
}

.settingItem .el-form-item__label {
  color: #FFFFFF;
}
</style>