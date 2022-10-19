<template>
  <div class="header">
    <div class="title">
      <h1>
        <span style="margin-right:8px;">科学防护</span>
        <span>共渡难关</span>
      </h1> 
      <h2>肺炎疫情实时动态播报</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
   return {}
  },
   methods:{}
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width:375px;
  height: 220px;
  margin-bottom: 180px;
  color: #fff;
  background-image: url("@/assets/img/header.png");
  background-position: top;
  background-size: cover;
}
.title {
  padding: 50px 0 0 20px;
}
</style>