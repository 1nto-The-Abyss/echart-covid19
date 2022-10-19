<template>
  <div>
    <Header></Header>
    <Card :desc="desc"></Card>
    <Tabs></Tabs>
  </div>
</template>

<script>
import Header from '../components/Header'
import Card from '../components/Card'
import Tabs from '@/components/Tabs'
export default {
  name: 'Home',
  components: {
    Header,
    Card,
    Tabs
  },
  data() {
    return{
      active: 0,
      newsList:[],
      desc: {
        currentConfirmedCount: "",// 现存确诊人数
        confirmedCount: "",// 累计确诊人数
        suspectedCount: "",// 累计境外输入人数
        curedCount: "",// 累计治愈人数
        deadCount: "",//	累计死亡人数
        seriousCount: "",// 现存无症状人数
        suspectedIncr: "", //新增境外输入人数
        currentConfirmedIncr: "", //相比昨天现存确诊人数
        confirmedIncr: "", //相比昨天累计确诊人数
        curedIncr: "", //相比昨天新增治愈人数
        deadIncr: "", //相比昨天新增死亡人数
        seriousIncr: "", //相比昨天现存无症状人数
        yesterdayConfirmedCountIncr: "",//相比昨天新增累计确诊人数
        yesterdaySuspectedCountIncr: "",//相比昨天境外输入确诊人数
      },
      mapDate: []
    } 
  },
  mounted() {
    this.$api.getNcov({
      key: "333728c207903163d64817bfd2c5644a"
    }).then(res => {
      if(res.status == 200) {
        this.newsList = res.data.newslist[0].news
        this.desc = res.data.newslist[0].desc
      }
    })
  },
}
</script>
<style>
</style>

