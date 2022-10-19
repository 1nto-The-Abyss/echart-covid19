<template>
  <div class="card">
    <van-tabs v-model="active" type="card">
      <van-tab title="国内疫情数据">
        <div class="panel">
          <div class="data">
            <div class="title">
              较昨日
              <span style="color:#ff5a3d">{{desc.currentConfirmedIncr|formatNum}}</span>
            </div>
            <div class="num" style="color:#ff5a3d">
              {{desc.currentConfirmedCount}}
            </div>
            <div>现存确诊</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color:#ff8705">{{desc.confirmedIncr|formatNum}}</span>
            </div>
            <div class="num" style="color:#ff8705">
              {{desc.confirmedCount}}
            </div>
            <div>累计确诊</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color:#a0655b">{{desc.suspectedIncr|formatNum}}</span>
            </div>
            <div class="num" style="color:#a0655b">
              {{desc.suspectedCount}}
            </div>
            <div>累计境外输入</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color: #b83131">{{desc.curedIncr|formatNum}}</span>
            </div>
            <div class="num" style="color: #b83131">
              {{desc.curedCount}}
            </div>
            <div>累计治愈</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color: #617195">{{desc.deadIncr|formatNum}}</span>
            </div>
            <div class="num" style="color: #617195">
              {{desc.deadCount}}
            </div>
            <div>累计死亡</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color: #30a39d">{{desc.seriousIncr|formatNum}}</span>
            </div>
            <div class="num" style="color: #30a39d">
              {{desc.seriousCount}}
            </div>
            <div>现存无症状</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="海外疫情数据">
        <div class="panel_foregin">
          <div class="data">
            <div class="title">
              较昨日
              <span style="color:#ff5a3d">{{foreignStatistics.currentConfirmedIncr|formatNum}}</span>
            </div>
            <div class="num" style="color:#ff5a3d">
              {{foreignStatistics.currentConfirmedCount}}
            </div>
            <div>现存确诊</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color:#ff8705">{{foreignStatistics.confirmedIncr|formatNum}}</span>
            </div>
            <div class="num" style="color:#ff8705">
              {{foreignStatistics.confirmedCount}}
            </div>
            <div>累计确诊</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color: #b83131">{{foreignStatistics.curedIncr|formatNum}}</span>
            </div>
            <div class="num" style="color: #b83131">
              {{foreignStatistics.curedCount}}
            </div>
            <div>累计治愈</div>
          </div>
          <div class="data">
            <div class="title">
              较昨日
              <span style="color: #617195">{{foreignStatistics.deadIncr|formatNum}}</span>
            </div>
            <div class="num" style="color: #617195">
              {{foreignStatistics.deadCount}}
            </div>
            <div>累计死亡</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div class="date">截至{{date}}</div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data(){
   return {
    active: 0,
    date: "",
    foreignStatistics: {}
   }
  },
  props: {
    desc: {
      type: Object,
      default: function(){}
    }
  },
  methods:{},
  watch: {
    desc: {
      deep: true,
      handler(newVal, oldVal) {
        const date = new Date(newVal.modifyTime).toLocaleString('zh-CN',{
          dateStyle: 'long',
          timeStyle: 'short',
          hour12: false
        })
        this.date = date
        this.foreignStatistics = newVal.foreignStatistics
      }
    }
  },
  filters: {
    formatNum(value) {
      if(value>0) {
        return "+" + value
      } else {
        return value
      }
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  top: 150px;
  left: -50%;
  right: -50%;
  z-index: 5;
  width: 90%;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0,0,0,.1);
  overflow: hidden;
  margin: 0 auto;
}
/deep/.van-tabs {
  &__nav--card {
    height: 40px !important;
    border: 0;
    margin: 0;
  }
  &__wrap {
    height: 40px !important;
  }
  .van-tab {
    font-size: 16px !important;
    color: #333 !important;
    background-color: #f1f1f1;
    border: 0;
  }
}
/deep/.van-tab--active {
  background-color: #fff !important;
}
.panel {
  display: flex;
  flex-wrap: wrap;
  .data {
    width: 33%;
    padding: 15px 0;
    text-align: center;
    font-weight: 600;
    .num {
      font-weight: 700;
      font-size: 22px;
    }
  }
  &_foregin {
    display: flex;
    flex-wrap: wrap;
    .data {
      width: 50%;
      padding: 15px 0;
      text-align: center;
      font-weight: 600;
      .num {
        font-weight: 700;
        font-size: 22px;
      }
    }
  }
}
.date {
  margin:0 0 10px 15px;
  font-size: 12px;
  color: #a9a9a9;
}
</style>