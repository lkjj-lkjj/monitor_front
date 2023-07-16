<template>
  <div style="display: flex; width: 80%">
    <div style="display: flex; flex-wrap: wrap; width: 1000px;margin-left: 160px">
      <div class="upload_url">
        <div style="padding: 40px 40px 40px;">
          <span style="font-size: 30px; color: rgba(255,255,255,0.9);">My Information :</span>
          <el-descriptions
              class="margin-top"
              :column="3"
              :size="'large'"
              border
              style="margin-top: 20px; opacity: 0.95;"
          >
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <user />
                  </el-icon>
                  Username
                </div>
              </template>
              {{username}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <iphone />
                  </el-icon>
                  Email
                </div>
              </template>
              {{email}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <location />
                  </el-icon>
                  Place
                </div>
              </template>
              BeiJing
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <tickets />
                  </el-icon>
                  School
                </div>
              </template>
              <el-tag size="small">School</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <office-building />
                  </el-icon>
                  Address
                </div>
              </template>
              Beijing Jiaotong University, Beixiaguan Street
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
      <div class="upload_img">
        <span style="font-size: 30px; color: rgba(255,255,255,0.9); margin-left: 20px">All Users :</span>
        <div style="padding: 10px; border-radius: 10px; background-color: rgb(255,255,255); margin-left: 50px; margin-right: 50px;margin-top: 20px">
          <el-table :data="tableData" style="width: 100%" height="400">
            <el-table-column fixed prop="id" label="ID" width="100" />
            <el-table-column fixed prop="username" label="Username" width="150" />
            <el-table-column prop="email" label="Email" width="200" />
            <el-table-column prop="camera_urls" label="URLs" width="1500" />
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "Page6",
  data(){
    return{
      tableData: [],
      username: sessionStorage.getItem("username"),
      email: sessionStorage.getItem("email")
    }
  },
  mounted() {
    request.get("/user/allinformation/").then(res=>{
      this.tableData = res.data
    })
  }
}
</script>

<style scoped>
.upload_url {
  width: 800px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-left: 70px;
}

.upload_img {
  width: 800px;
  height: 550px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-left: 70px;
  padding: 20px;
}
</style>