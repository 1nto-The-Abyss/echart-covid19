<template>
  <div>
    <van-cell class="title" :border="false">
      <i></i>
      疫情地图
    </van-cell>
    <div class="button">
      <van-button :class="active?'button_active': ''" @click="buttonClick1()">现存确诊</van-button>
      <van-button :class="!active?'button_active': ''" @click="buttonClick2()">累计确诊</van-button>
    </div>
    <div id="chart"></div>
  </div>
</template>
<script>
export default {
  name: "ChinaMap",
  data(){
   return {
    active: true,
    title: "现存确诊",
    nowConfirmDate: [],//现存确诊
    confirmDate: [] //累计确诊
   }
  },
  props: {
    mapDate: {
      type: Array,
      default: function() {}
    }
  },
  methods:{
    buttonClick1() {
      this.active = true
      this.title = "现存确诊"
      this.$nextTick(() => {
        this.$charts.chinaMap("chart",this.nowConfirmDate,this.title)
      })
    },
    buttonClick2() {
      this.active = false
      this.title = "累计确诊"
      this.$nextTick(() => {
        this.$charts.chinaMap("chart",this.confirmDate,this.title)
      })
    },
    // 取出现存确诊数据并渲染
    setNowConfirm(value) {
      for (let i = 0; i < value.length; i++) {
        const obj = {}
        obj.name = value[i].name
        obj.value = value[i].total.nowConfirm
        this.nowConfirmDate.push(obj)
      }
    },
    // 取出累计确诊数据并渲染
    setConfirm(value) {
      for (let i = 0; i < value.length; i++) {
        const obj = {}
        obj.name = value[i].name
        obj.value = value[i].total.confirm
        this.confirmDate.push(obj)
      }
    }
  },
  mounted() {
    this.$api.getNcovCity().then(res => {
      const mapDate = res.data.data.diseaseh5Shelf.areaTree[0].children
      this.setNowConfirm(mapDate)
      this.setConfirm(mapDate)
      this.$charts.chinaMap("chart",this.nowConfirmDate,this.title)
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
.button {
  width: 96%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  &_active {
    border-color: #ce4733;
    background-color: #fef7f7;
    color: #ce2c1e;
  }
  .van-button {
    width: 48%;
    border-radius: 4px;
  }
}
#chart {
  width: 96%;
  height: 350px;
  margin: 0 auto;
}
</style>