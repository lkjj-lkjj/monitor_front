<template>
  <div id="chart" style="height: 300px; width: 600px; margin: 100px auto"></div>
</template>

<script>
import * as echarts from 'echarts';
import request from "@/utils/request";

let myChart;
let option;
export default {
  name: "Lchart",
  data(){
    return{
      xAxis: '',
      yAxis: ''
    }
  },
  mounted() {
    const myDate = new Date();
    let date = myDate.getDate()
    this.xAxis = [date-6, date-5, date-4, date-3, date-2, date-1, date]
    request.get("/face/week_record/uid/"+sessionStorage.getItem("id")+"/").then(res=>{
      this.yAxis = JSON.parse(res.data)
      this.initChart()
    })
  },
  methods:{
    initChart(){
      myChart = echarts.init(document.getElementById('chart'), 'dark')
      option = {
        backgroundColor:'rgba(0,0,0,0)',
        xAxis: {
          data: this.xAxis
        },
        yAxis: {
        },
        series: [
          {
            data: this.yAxis,
            type: 'line',
            areaStyle: {},
            smooth: true
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>