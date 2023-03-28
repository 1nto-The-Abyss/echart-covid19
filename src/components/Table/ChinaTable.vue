<template>
  <div>
    <van-cell class="title" :border="false">
      <i></i>
      全国疫情新增趋势
    </van-cell>
  </div>
</template>
<script>
export default {
  name: "ChinaTable",
  data(){
   return {}
  },
  methods:{}
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
</style>