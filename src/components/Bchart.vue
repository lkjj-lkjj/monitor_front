<template>
  <div id="bchart" style="height: 400px; width: 600px; margin: 100px auto"></div>
</template>

<script>
import * as echarts from 'echarts';

let option;
let myChart;

export default {
  name: "Bchart",
  mounted() {
    this.initChart();
    setInterval(()=>{
      option = {
        series: [
            {
              data: [Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000]
            }
        ]
      }
      myChart.setOption(option)
    }, 1000)
  },
  methods:{
    initChart() {
      myChart = echarts.init(document.getElementById('bchart'), 'dark')
      option = {
        backgroundColor:'rgba(0,0,0,0)',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            data: [120, 200, 150, 80, 70, 110, 130],
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