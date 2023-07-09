<template>
  <div id="chart" style="height: 300px; width: 600px; margin: 100px auto"></div>
</template>

<script>
import * as echarts from 'echarts';

let myChart;
let option;
export default {
  name: "Lchart",
  mounted() {
    this.initChart()
  },
  methods:{
    initChart(){
      myChart = echarts.init(document.getElementById('chart'), 'dark')
      option = {
        backgroundColor:'rgba(0,0,0,0)',
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 23, 19],
            type: 'line',
            areaStyle: {},
            smooth: true
          },
          {
            data: [25, 14, 23, 35, 10],
            type: 'line',
            areaStyle: {
              color: '#ff0',
              opacity: 0.5
            },
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