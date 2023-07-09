<template>
  <div id="pchart" style="height: 400px; width: 600px; margin: 0 auto"></div>
</template>

<script>
import * as echarts from 'echarts';

let option;
let myChart;

export default {
  name: 'Pchart',
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 在这里设置你的图表数据和配置
      myChart = echarts.init(document.getElementById('pchart'), 'dark');
      option = {
        backgroundColor:'rgba(0,0,0,0)',
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
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
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
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
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