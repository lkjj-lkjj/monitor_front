<template>
  <div id="bchart" style="height: 400px; width: 600px; margin: 100px auto"></div>
</template>

<script>
import * as echarts from 'echarts';
import request from "@/utils/request";

let option;
let myChart;

export default {
  name: "Bchart",
  data() {
    return {
      xAxis: '',
      yAxis: '',
    }
  },
  mounted() {
    const myDate = new Date();
    let date = myDate.getDate()
    this.xAxis = [date - 6, date - 5, date - 4, date - 3, date - 2, date - 1, date]
    request.get("/recognition/week_record/uid/" + sessionStorage.getItem("id") + "/").then(res => {
      this.yAxis = JSON.parse(res.data)
      this.initChart();
    })
  },
  methods: {
    initChart() {
      myChart = echarts.init(document.getElementById('bchart'), 'dark')
      option = {
        backgroundColor: 'rgba(0,0,0,0)',
        xAxis: {
          type: 'category',
          data: this.xAxis,
          axisLabel: {
            fontSize: 22  // 设置 x 轴标签字体大小为 12
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 22  // 设置 x 轴标签字体大小为 12
          }
        },
        series: [
          {
            data: this.yAxis,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>