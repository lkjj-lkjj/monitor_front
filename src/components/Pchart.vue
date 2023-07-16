<template>
  <div id="pchart" style="height: 400px; width: 600px; margin: 0 auto"></div>
</template>

<script>
import * as echarts from 'echarts';
import request from "@/utils/request";

let option;
let myChart;

export default {
  name: 'Pchart',
  data() {
    return {
      data: [],
    }
  },
  mounted() {

    request.get("/recognition/camera_record/uid/" + sessionStorage.getItem("id") + "/").then(res => {
      let resData = JSON.parse(res.data)
      this.data = [
        {value: resData[0], name: 'Camera1'},
        {value: resData[1], name: 'Camera2'},
        {value: resData[2], name: 'Camera3'},
        {value: resData[3], name: 'Camera4'}
      ]
      this.initChart();
    })
  },
  methods: {
    initChart() {
      // 在这里设置你的图表数据和配置
      myChart = echarts.init(document.getElementById('pchart'), 'dark');
      option = {
        backgroundColor: 'rgba(0,0,0,0)',
        title: {
          text: '饼图程序调用高亮示例',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Camera1', 'Camera2', 'Camera3', 'Camera4'],
          textStyle: {
            fontSize: 18, // 设置图例字体大小
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              show: true,
              fontSize: 18, // 设置数据标签字体大小
            },
          }
        ]
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>

</style>