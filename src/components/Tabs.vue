<template>
  <div class="tabs">
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab title="国内疫情">
        <ChinaData></ChinaData>
      </van-tab>
      <van-tab title="全球疫情">
        <GlobalData></GlobalData>
      </van-tab>
      <van-tab title="疫情动态">
        <News></News>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import ChinaData from '@/components/ChinaData'
import GlobalData from '@/components/GlobalData'
import News from '@/components/News'

export default {
  name: "Tabs",
  data(){
   return {
    active: 0
   }
  },
  components: {
    ChinaData,
    GlobalData,
    News
  },
  methods:{}
}
</script>
<style scoped>
</style>