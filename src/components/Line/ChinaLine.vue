<template>
  <div>
    <van-cell class="title" :border="false">
      <i></i>
      全国疫情新增趋势
    </van-cell>
    <div id="increase" class="chart"></div>
    <van-cell class="title" :border="false">
      <i></i>
      全国疫情累计趋势
    </van-cell>
    <div id="confirm" class="chart"></div>
  </div>
</template>
<script>
export default {
  name: "ChinaLine",
  data(){
   return {
    increaseList: {
      titileData: ['新增确诊', '新增疑似', '新增治愈', '新增死亡'],
      xData: [],
      series: [
        {
          name: '新增确诊',
          type: 'line',
          areaStyle: {},
          smooth: true,
          color: '#f39494',
          data: []
        },
        {
          name: '新增无症状',
          type: 'line',
          areaStyle: {},
          smooth: true,
          color: '#fbd88a',
          data: []
        },
        {
          name: '新增治愈',
          type: 'line',
          areaStyle: {},
          smooth: true,
          color: '#b2db9e',
          data: []
        },
        {
          name: '新增死亡',
          type: 'line',
          areaStyle: {},
          smooth: true,
          color: '#879bd7',
          data: []
        }
      ]
    },
    confirmList: {
      titileData: ['累计确诊', '累计治愈', '累计死亡'],
      xData: [],
      series: [
        {
          name: '累计确诊',
          type: 'line',
          areaStyle: {},
          smooth: true,
          color: '#f39494',
          data: []
        },
        {
          name: '累计治愈',
          type: 'line',
          areaStyle: {},
          smooth: true,
          color: '#b2db9e',
          data: []
        },
        {
          name: '累计死亡',
          type: 'line',
          areaStyle: {},
          smooth: true,
          color: '#879bd7',
          data: []
        }
      ]
    }
   }
  },
  methods:{
    setIncrease(value) {
      for(let i=0; i< value.length; i++) {
        // x轴
        this.increaseList.xData.push(value[i].date) 
        // y轴
        this.increaseList.series[0].data.push(value[i].confirm) //新增确诊
        this.increaseList.series[1].data.push(value[i].infect) //新增无症状
        this.increaseList.series[2].data.push(value[i].heal) //新增治愈
        this.increaseList.series[3].data.push(value[i].dead) //新增死亡
      }
      this.$charts.line('increase',this.increaseList)
    },
    setConfirm(value) {
      for(let i=0; i< value.length; i++) {
        // x轴
        this.confirmList.xData.push(value[i].date)
        // y轴
        this.confirmList.series[0].data.push(value[i].confirm) //累计确诊
        this.confirmList.series[1].data.push(value[i].heal) //累计治愈
        this.confirmList.series[2].data.push(value[i].dead) //累计死亡
      }
      this.$charts.line('confirm',this.confirmList)
    },
  },
  mounted() {
    this.$api.getNcovTrend().then(res => {
      const increaseArr = res.data.data.chinaDayAddList
      const confirmArr = res.data.data.chinaDayList
      this.setIncrease(increaseArr)
      this.setConfirm(confirmArr)
    })
  }
}
</script>
<style lang="less" scoped>
.title {
  i {
    display: inline-block;
    flex-shrink: 0;
    width: 4px;
    height: 16px;
    margin-right: 5px;
    vertical-align: middle;
    background: #ee0a24;
  }
}
.chart {
  width: 100%;
  height: 250px;
  margin: 0 auto;
  background-color: #f3f3f3;
}
</style>