<template>
  <div>
    <van-cell class="title" :border="false">
      <template #title>
        <i></i>
        疫情热点
      </template>
    </van-cell>
    <van-steps direction="vertical" :active="-1">
      <van-step v-for="(item,index) in newsList" :key="index">
        <div>{{item.pubDateStr}}</div>
        <a :href="item.sourceUrl">
          <div class="summary">
            <div style="font-weight: 600">{{item.title}}</div>
            <div>{{item.summary|addEllipsis}}</div>
            <div style="color:#999;font-size:10px">>>查看详细内容</div>
          </div>
        </a> 
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
   return {
    newsList: []
   }
  },
  methods:{},
  mounted() {
    this.$api.getNcov({
      key: "333728c207903163d64817bfd2c5644a"
    }).then(res => {
      if(res.status == 200) {
        this.newsList = res.data.newslist[0].news
        console.log(this.newsList);
      }
    })
  },
  filters: {
    addEllipsis(value) {
      return value + "..."
    }
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
/deep/.van-step__circle {
  width:10px;
  height: 10px;
  background-color: #ee0a24;
}
.summary {
  margin-top: 5px;
  width: 95%;
  font-size: 12px;
  color: #333;
  padding: 6px 8px;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  text-overflow: ellipsis;
}
</style>