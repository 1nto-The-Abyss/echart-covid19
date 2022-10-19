import axios from "../utils/request";

const base = {
  baseUrl: "http://api.tianapi.com",
  ncov: "/ncov/index",
  ncovCity: "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf",
  ncovTrend: "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,nowConfirmStatis,provinceCompare",
  ncovGlobal: "https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoCountryConfirmAdd,WomWorld,WomAboard"
}

const api = {
  // 疫情人数
  getNcov(params) {
    return axios.get(base.baseUrl + base.ncov , {
      params
    })
  },
  // 中国各省疫情
  getNcovCity() {
    return axios.get(base.ncovCity)
  },
  // 疫情趋势
  getNcovTrend() {
    return axios.get(base.ncovTrend)
  },
  // 世界各国疫情
  getNcovGlobal() {
    return axios.get(base.ncovGlobal)
  },
}

export default api