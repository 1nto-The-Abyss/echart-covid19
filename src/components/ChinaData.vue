<template>
  <div>
    <ChinaMap></ChinaMap>
    <ChinaLine></ChinaLine>
  </div>
</template>
<script>
import ChinaMap from "./Map//ChinaMap"
import ChinaLine from "./Line/ChinaLine"
export default {
  name: "ChinaData",
  components: {
    ChinaMap,
    ChinaLine
  },
  data(){
   return {}
  },
  methods:{}
}
</script>
<style lang="less" scoped>
</style>