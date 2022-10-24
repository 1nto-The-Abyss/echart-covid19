(function(){var t={68842:function(t,a,e){"use strict";var i=e(36369),s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o=e(1001),r={},c=(0,o.Z)(r,s,n,!1,null,null,null),l=c.exports,d=e(72631),u=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("Header"),a("Card",{attrs:{desc:t.desc}}),a("Tabs")],1)},m=[],v=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[a("h1",[a("span",{staticStyle:{"margin-right":"8px"}},[t._v("科学防护")]),a("span",[t._v("共渡难关")])]),a("h2",[t._v("肺炎疫情实时动态播报")])])])}],h={name:"Header",data(){return{}},methods:{}},p=h,C=(0,o.Z)(p,v,f,!1,null,"6ef0847e",null),b=C.exports,_=function(){var t=this,a=t._self._c;return a("div",{staticClass:"card"},[a("van-tabs",{attrs:{type:"card"},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[a("van-tab",{attrs:{title:"国内疫情数据"}},[a("div",{staticClass:"panel"},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#ff5a3d"}},[t._v(t._s(t._f("formatNum")(t.desc.currentConfirmedIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#ff5a3d"}},[t._v(" "+t._s(t.desc.currentConfirmedCount)+" ")]),a("div",[t._v("现存确诊")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#ff8705"}},[t._v(t._s(t._f("formatNum")(t.desc.confirmedIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#ff8705"}},[t._v(" "+t._s(t.desc.confirmedCount)+" ")]),a("div",[t._v("累计确诊")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#a0655b"}},[t._v(t._s(t._f("formatNum")(t.desc.suspectedIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#a0655b"}},[t._v(" "+t._s(t.desc.suspectedCount)+" ")]),a("div",[t._v("累计境外输入")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#b83131"}},[t._v(t._s(t._f("formatNum")(t.desc.curedIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#b83131"}},[t._v(" "+t._s(t.desc.curedCount)+" ")]),a("div",[t._v("累计治愈")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#617195"}},[t._v(t._s(t._f("formatNum")(t.desc.deadIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#617195"}},[t._v(" "+t._s(t.desc.deadCount)+" ")]),a("div",[t._v("累计死亡")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#30a39d"}},[t._v(t._s(t._f("formatNum")(t.desc.seriousIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#30a39d"}},[t._v(" "+t._s(t.desc.seriousCount)+" ")]),a("div",[t._v("现存无症状")])])])]),a("van-tab",{attrs:{title:"海外疫情数据"}},[a("div",{staticClass:"panel_foregin"},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#ff5a3d"}},[t._v(t._s(t._f("formatNum")(t.foreignStatistics.currentConfirmedIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#ff5a3d"}},[t._v(" "+t._s(t.foreignStatistics.currentConfirmedCount)+" ")]),a("div",[t._v("现存确诊")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#ff8705"}},[t._v(t._s(t._f("formatNum")(t.foreignStatistics.confirmedIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#ff8705"}},[t._v(" "+t._s(t.foreignStatistics.confirmedCount)+" ")]),a("div",[t._v("累计确诊")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#b83131"}},[t._v(t._s(t._f("formatNum")(t.foreignStatistics.curedIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#b83131"}},[t._v(" "+t._s(t.foreignStatistics.curedCount)+" ")]),a("div",[t._v("累计治愈")])]),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[t._v(" 较昨日 "),a("span",{staticStyle:{color:"#617195"}},[t._v(t._s(t._f("formatNum")(t.foreignStatistics.deadIncr)))])]),a("div",{staticClass:"num",staticStyle:{color:"#617195"}},[t._v(" "+t._s(t.foreignStatistics.deadCount)+" ")]),a("div",[t._v("累计死亡")])])])])],1),a("div",{staticClass:"date"},[t._v("截至"+t._s(t.date))])],1)},y=[],g={name:"Card",data(){return{active:0,date:"",foreignStatistics:{}}},props:{desc:{type:Object,default:function(){}}},methods:{},watch:{desc:{deep:!0,handler(t,a){const e=new Date(t.modifyTime).toLocaleString("zh-CN",{dateStyle:"long",timeStyle:"short",hour12:!1});this.date=e,this.foreignStatistics=t.foreignStatistics}}},filters:{formatNum(t){return t>0?"+"+t:t}}},S=g,w=(0,o.Z)(S,_,y,!1,null,"46b168f1",null),x=w.exports,k=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tabs"},[a("van-tabs",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[a("van-tab",{attrs:{title:"国内疫情"}},[a("ChinaData")],1),a("van-tab",{attrs:{title:"全球疫情"}},[a("GlobalData")],1),a("van-tab",{attrs:{title:"疫情动态"}},[a("News")],1)],1)],1)},D=[],I=function(){var t=this,a=t._self._c;return a("div",[a("ChinaMap"),a("ChinaLine")],1)},L=[],N=function(){var t=this,a=t._self._c;return a("div",[a("van-cell",{staticClass:"title",attrs:{border:!1}},[a("i"),t._v(" 疫情地图 ")]),a("div",{staticClass:"button"},[a("van-button",{class:t.active?"button_active":"",on:{click:function(a){return t.buttonClick1()}}},[t._v("现存确诊")]),a("van-button",{class:t.active?"":"button_active",on:{click:function(a){return t.buttonClick2()}}},[t._v("累计确诊")])],1),a("div",{attrs:{id:"chart"}})],1)},F=[],Z=(e(57658),{name:"ChinaMap",data(){return{active:!0,title:"现存确诊",nowConfirmDate:[],confirmDate:[]}},props:{mapDate:{type:Array,default:function(){}}},methods:{buttonClick1(){this.active=!0,this.title="现存确诊",this.$nextTick((()=>{this.$charts.chinaMap("chart",this.nowConfirmDate,this.title)}))},buttonClick2(){this.active=!1,this.title="累计确诊",this.$nextTick((()=>{this.$charts.chinaMap("chart",this.confirmDate,this.title)}))},setNowConfirm(t){for(let a=0;a<t.length;a++){const e={};e.name=t[a].name,e.value=t[a].total.nowConfirm,this.nowConfirmDate.push(e)}},setConfirm(t){for(let a=0;a<t.length;a++){const e={};e.name=t[a].name,e.value=t[a].total.confirm,this.confirmDate.push(e)}}},mounted(){this.$api.getNcovCity().then((t=>{const a=t.data.data.diseaseh5Shelf.areaTree[0].children;this.setNowConfirm(a),this.setConfirm(a),this.$charts.chinaMap("chart",this.nowConfirmDate,this.title)}))}}),M=Z,T=(0,o.Z)(M,N,F,!1,null,"46bbcc56",null),P=T.exports,G=function(){var t=this,a=t._self._c;return a("div",[a("van-cell",{staticClass:"title",attrs:{border:!1}},[a("i"),t._v(" 全国疫情新增趋势 ")]),a("div",{staticClass:"chart",attrs:{id:"increase"}}),a("van-cell",{staticClass:"title",attrs:{border:!1}},[a("i"),t._v(" 全国疫情累计趋势 ")]),a("div",{staticClass:"chart",attrs:{id:"confirm"}})],1)},A=[],z={name:"ChinaLine",data(){return{increaseList:{titileData:["新增确诊","新增疑似","新增治愈","新增死亡"],xData:[],series:[{name:"新增确诊",type:"line",areaStyle:{},smooth:!0,color:"#f39494",data:[]},{name:"新增无症状",type:"line",areaStyle:{},smooth:!0,color:"#fbd88a",data:[]},{name:"新增治愈",type:"line",areaStyle:{},smooth:!0,color:"#b2db9e",data:[]},{name:"新增死亡",type:"line",areaStyle:{},smooth:!0,color:"#879bd7",data:[]}]},confirmList:{titileData:["累计确诊","累计治愈","累计死亡"],xData:[],series:[{name:"累计确诊",type:"line",areaStyle:{},smooth:!0,color:"#f39494",data:[]},{name:"累计治愈",type:"line",areaStyle:{},smooth:!0,color:"#b2db9e",data:[]},{name:"累计死亡",type:"line",areaStyle:{},smooth:!0,color:"#879bd7",data:[]}]}}},methods:{setIncrease(t){for(let a=0;a<t.length;a++)this.increaseList.xData.push(t[a].date),this.increaseList.series[0].data.push(t[a].confirm),this.increaseList.series[1].data.push(t[a].infect),this.increaseList.series[2].data.push(t[a].heal),this.increaseList.series[3].data.push(t[a].dead);this.$charts.line("increase",this.increaseList)},setConfirm(t){for(let a=0;a<t.length;a++)this.confirmList.xData.push(t[a].date),this.confirmList.series[0].data.push(t[a].confirm),this.confirmList.series[1].data.push(t[a].heal),this.confirmList.series[2].data.push(t[a].dead);this.$charts.line("confirm",this.confirmList)}},mounted(){this.$api.getNcovTrend().then((t=>{const a=t.data.data.chinaDayAddList,e=t.data.data.chinaDayList;this.setIncrease(a),this.setConfirm(e)}))}},B=z,O=(0,o.Z)(B,G,A,!1,null,"34547a00",null),$=O.exports,E={name:"ChinaData",components:{ChinaMap:P,ChinaLine:$},data(){return{}},methods:{}},q=E,j=(0,o.Z)(q,I,L,!1,null,"7799eb96",null),R=j.exports,U=function(){var t=this,a=t._self._c;return a("div",[a("GlobalMap")],1)},H=[],K=function(){var t=this,a=t._self._c;return a("div",[a("van-cell",{staticClass:"title",attrs:{border:!1}},[a("i"),t._v(" 疫情地图 ")]),a("div",{staticClass:"button"},[a("van-button",{class:t.active?"button_active":"",on:{click:function(a){return t.buttonClick1()}}},[t._v("现存确诊")]),a("van-button",{class:t.active?"":"button_active",on:{click:function(a){return t.buttonClick2()}}},[t._v("累计确诊")])],1),a("div",{attrs:{id:"globalChart"}})],1)},W=[],V={name:"ChinaMap",data(){return{active:!0,title:"现存确诊",nowConfirmDate:[],confirmDate:[]}},props:{mapDate:{type:Array,default:function(){}}},methods:{buttonClick1(){this.active=!0,this.title="现存确诊",this.$nextTick((()=>{this.$charts.globalMap("globalChart",this.nowConfirmDate,this.title)}))},buttonClick2(){this.active=!1,this.title="累计确诊",this.$nextTick((()=>{this.$charts.globalMap("globalChart",this.confirmDate,this.title)}))},setNowConfirm(t){for(let a=0;a<t.length;a++){const e={};e.name=t[a].name,e.value=t[a].nowConfirm,this.nowConfirmDate.push(e)}},setConfirm(t){for(let a=0;a<t.length;a++){const e={};e.name=t[a].name,e.value=t[a].confirm,this.confirmDate.push(e)}}},mounted(){this.$api.getNcovGlobal().then((t=>{const a=t.data.data.WomAboard;console.log(a),this.setNowConfirm(a),this.setConfirm(a),this.$charts.globalMap("globalChart",this.nowConfirmDate,this.title)}))}},J=V,Y=(0,o.Z)(J,K,W,!1,null,"e85d0036",null),X=Y.exports,Q={name:"GlobalData",data(){return{}},components:{GlobalMap:X},methods:{}},tt=Q,at=(0,o.Z)(tt,U,H,!1,null,"76e85f6c",null),et=at.exports,it=function(){var t=this,a=t._self._c;return a("div",[a("van-cell",{staticClass:"title",attrs:{border:!1},scopedSlots:t._u([{key:"title",fn:function(){return[a("i"),t._v(" 疫情热点 ")]},proxy:!0}])}),a("van-steps",{attrs:{direction:"vertical",active:-1}},t._l(t.newsList,(function(e,i){return a("van-step",{key:i},[a("div",[t._v(t._s(e.pubDateStr))]),a("a",{attrs:{href:e.sourceUrl}},[a("div",{staticClass:"summary"},[a("div",{staticStyle:{"font-weight":"600"}},[t._v(t._s(e.title))]),a("div",[t._v(t._s(t._f("addEllipsis")(e.summary)))]),a("div",{staticStyle:{color:"#999","font-size":"10px"}},[t._v(">>查看详细内容")])])])])})),1)],1)},st=[],nt={name:"News",data(){return{newsList:[]}},methods:{},mounted(){this.$api.getNcov({key:"333728c207903163d64817bfd2c5644a"}).then((t=>{200==t.status&&(this.newsList=t.data.newslist[0].news,console.log(this.newsList))}))},filters:{addEllipsis(t){return t+"..."}}},ot=nt,rt=(0,o.Z)(ot,it,st,!1,null,"13ea2b80",null),ct=rt.exports,lt={name:"Tabs",data(){return{active:0}},components:{ChinaData:R,GlobalData:et,News:ct},methods:{}},dt=lt,ut=(0,o.Z)(dt,k,D,!1,null,"3f383f9d",null),mt=ut.exports,vt={name:"Home",components:{Header:b,Card:x,Tabs:mt},data(){return{active:0,newsList:[],desc:{currentConfirmedCount:"",confirmedCount:"",suspectedCount:"",curedCount:"",deadCount:"",seriousCount:"",suspectedIncr:"",currentConfirmedIncr:"",confirmedIncr:"",curedIncr:"",deadIncr:"",seriousIncr:"",yesterdayConfirmedCountIncr:"",yesterdaySuspectedCountIncr:""},mapDate:[]}},mounted(){this.$api.getNcov({key:"333728c207903163d64817bfd2c5644a"}).then((t=>{200==t.status&&(this.newsList=t.data.newslist[0].news,this.desc=t.data.newslist[0].desc)}))}},ft=vt,ht=(0,o.Z)(ft,u,m,!1,null,null,null),pt=ht.exports;i.ZP.use(d.ZP);const Ct=[{path:"/",name:"home",component:pt}],bt=new d.ZP({mode:"history",base:"/",routes:Ct});var _t=bt,yt=e(63822);i.ZP.use(yt.ZP);var gt=new yt.ZP.Store({state:{person:{name:"张三",age:"18"}},getters:{},mutations:{changeName(t,a){t.name=a}},actions:{},modules:{}}),St=e(80070),wt=(e(23465),e(78799)),xt=(e(27228),e(39864)),kt=(e(10008),e(95094)),Dt=(e(84805),e(39469)),It=(e(46884),e(83710)),Lt=(e(71094),e(40334)),Nt=(e(88206),e(91648));function Ft(){i.ZP.use(wt.Z).use(xt.Z).use(kt.Z).use(Dt.Z).use(It.Z).use(Lt.Z).use(Nt.Z)}e(41552);var Zt=e(1708),Mt=e.n(Zt);const Tt=function(t){Object.defineProperties(t.prototype,{$charts:{get(){return{line(t,a){let e=Mt().init(document.getElementById(t)),i={grid:{left:"18%"},tooltip:{trigger:"axis"},legend:{titleData:a.titleData,top:"4%"},xAxis:{type:"category",data:a.xData},yAxis:{type:"value",nameTextStyle:{fontSize:8}},series:a.series};e.setOption(i)},chinaMap(t,a,e){const i=Mt().init(document.getElementById(t)),s={backgroundColor:"#F3F3F3",tooltip:{triggerOn:"click",formatter(t){return"<div>"+t.name+e+":"+t.value+"</div>"}},series:[{y:"10%",name:"省",type:"map",map:"china",roam:!0,zoom:1.2,aspectScale:.75,label:{normal:{show:!0,textStyle:{color:"rgba(0,0,0,.6)",fontSize:8}}},itemStyle:{normal:{areaColor:"rgba(0,255,236,0)",borderColor:"rgba(0,0,0,0.2)"},emphasis:{areaColor:"#45cfff",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:20,borderWidth:0}},data:a}],visualMap:[{orient:"vertical",type:"piecewise",itemGap:3,bottom:"5px",textStyle:{fontSize:10},pieces:[{min:0,max:0,color:"#FFFFFF"},{min:1,max:9,color:"#FDFDCF"},{min:10,max:99,color:"#FE9E83"},{min:100,max:499,color:"#cc745c"},{min:500,max:999,color:"#9c513c"},{min:1e3,max:1e4,color:"#5a1c16"},{min:1e4,color:"#300b08"}]}]};i.setOption(s)},globalMap(t,a,e){const i=Mt().init(document.getElementById(t)),s={backgroundColor:"#F3F3F3",tooltip:{triggerOn:"click",formatter(t){return"<div>"+t.name+e+":"+t.value+"</div>"}},nameMap:{Afghanistan:"阿富汗",Angola:"安哥拉",Albania:"阿尔巴尼亚",Algeria:"阿尔及利亚",Argentina:"阿根廷",Armenia:"亚美尼亚",Australia:"澳大利亚",Austria:"奥地利",Azerbaijan:"阿塞拜疆",Bahamas:"巴哈马",Bangladesh:"孟加拉国",Belgium:"比利时",Benin:"贝宁","Burkina Faso":"布基纳法索",Burundi:"布隆迪",Bulgaria:"保加利亚","Bosnia and Herz.":"波斯尼亚和黑塞哥维那",Belarus:"白俄罗斯",Belize:"伯利兹",Bermuda:"百慕大群岛",Bolivia:"玻利维亚",Brazil:"巴西",Brunei:"文莱",Bhutan:"不丹",Botswana:"博茨瓦纳",Cambodia:"柬埔寨",Cameroon:"喀麦隆",Canada:"加拿大","Central African Rep.":"中非共和国",Chad:"乍得",Chile:"智利",China:"中国",Colombia:"哥伦比亚",Congo:"刚果","Costa Rica":"哥斯达黎加","Côte d'Ivoire":"科特迪瓦",Croatia:"克罗地亚",Cuba:"古巴",Cyprus:"塞浦路斯","Czech Rep.":"捷克共和国","Dem. Rep. Korea":"韩国","Dem. Rep. Congo":"民主刚果",Denmark:"丹麦",Djibouti:"吉布提","Dominican Rep.":"多米尼加共和国",Ecuador:"厄瓜多尔",Egypt:"埃及","El Salvador":"萨尔瓦多","Eq. Guinea":"赤道几内亚",Eritrea:"厄立特里亚",Estonia:"爱沙尼亚",Ethiopia:"埃塞俄比亚","Falkland Is.":"福克兰群岛",Fiji:"斐济",Finland:"芬兰",France:"法国","French Guiana":"法属圭亚那","Fr. S. Antarctic Lands":"法属南部领地",Gabon:"加蓬",Gambia:"冈比亚",Germany:"德国",Georgia:"佐治亚州",Ghana:"加纳",Greece:"希腊",Greenland:"格陵兰",Guatemala:"危地马拉",Guinea:"几内亚","Guinea-Bissau":"几内亚比绍",Guyana:"圭亚那",Haiti:"海地","Heard I. and McDonald Is.":"赫德岛和麦克唐纳群岛",Honduras:"洪都拉斯",Hungary:"匈牙利",Iceland:"冰岛",India:"印度",Indonesia:"印度尼西亚",Iran:"伊朗",Iraq:"伊拉克",Ireland:"爱尔兰",Israel:"以色列",Italy:"意大利","Ivory Coast":"象牙海岸",Jamaica:"牙买加",Japan:"日本",Jordan:"乔丹",Kashmir:"克什米尔",Kazakhstan:"哈萨克斯坦",Kenya:"肯尼亚",Kosovo:"科索沃",Kuwait:"科威特",Kyrgyzstan:"吉尔吉斯斯坦",Laos:"老挝","Lao PDR":"老挝人民民主共和国",Latvia:"拉脱维亚",Lebanon:"黎巴嫩",Lesotho:"莱索托",Liberia:"利比里亚",Libya:"利比亚",Lithuania:"立陶宛",Luxembourg:"卢森堡",Madagascar:"马达加斯加",Macedonia:"马其顿",Malawi:"马拉维",Malaysia:"马来西亚",Mali:"马里",Mauritania:"毛里塔尼亚",Mexico:"墨西哥",Moldova:"摩尔多瓦",Mongolia:"蒙古",Montenegro:"黑山",Morocco:"摩洛哥",Mozambique:"莫桑比克",Myanmar:"缅甸",Namibia:"纳米比亚",Netherlands:"荷兰","New Caledonia":"新喀里多尼亚","New Zealand":"新西兰",Nepal:"尼泊尔",Nicaragua:"尼加拉瓜",Niger:"尼日尔",Nigeria:"尼日利亚",Korea:"朝鲜","Northern Cyprus":"北塞浦路斯",Norway:"挪威",Oman:"阿曼",Pakistan:"巴基斯坦",Panama:"巴拿马","Papua New Guinea":"巴布亚新几内亚",Paraguay:"巴拉圭",Peru:"秘鲁","Republic of the Congo":"刚果共和国",Philippines:"菲律宾",Poland:"波兰",Portugal:"葡萄牙","Puerto Rico":"波多黎各",Qatar:"卡塔尔","Republic of Seychelles":"塞舌尔共和国",Romania:"罗马尼亚",Russia:"俄罗斯",Rwanda:"卢旺达","Saint Helena":"圣海伦娜",Samoa:"萨摩亚","Saudi Arabia":"沙特阿拉伯",Seychelles:"塞舌尔",Senegal:"塞内加尔",Serbia:"塞尔维亚","Sierra Leone":"塞拉利昂",Slovakia:"斯洛伐克",Slovenia:"斯洛文尼亚","Solomon Is.":"所罗门群岛",Somaliland:"索马里兰",Somalia:"索马里","South Africa":"南非","S. Geo. and S. Sandw. Is.":"南乔治亚和南桑德威奇群岛","S. Sudan":"南苏丹",Spain:"西班牙","Sri Lanka":"斯里兰卡",Sudan:"苏丹",Suriname:"苏里南","St. Vin. and Gren.":"圣文森特和格林纳丁斯","St. Pierre and Miquelon":"圣皮埃尔和密克隆群岛",Swaziland:"斯威士兰",Sweden:"瑞典",Switzerland:"瑞士",Syria:"叙利亚",Tajikistan:"塔吉克斯坦",Tanzania:"坦桑尼亚",Thailand:"泰国","The Kingdom of Tonga":"汤加王国","Timor-Leste":"东帝汶","Tonga ":"汤加",Togo:"多哥","Trinidad and Tobago":"特立尼达和多巴哥","Turks and Caicos Is.":"特克斯和凯科斯群岛",Tunisia:"突尼斯",Turkey:"土耳其",Turkmenistan:"土库曼斯坦",Uganda:"乌干达",Ukraine:"乌克兰","United Arab Emirates":"阿拉伯联合酋长国","United Kingdom":"大不列颠联合王国","United Republic of Tanzania":"坦桑尼亚联合共和国","United States":"美国","United States of America":"美利坚合众国",Uruguay:"乌拉圭","U.S. Virgin Is.":"圣母玛利亚",Uzbekistan:"乌兹别克斯坦",Vanuatu:"瓦努阿图",Venezuela:"委内瑞拉",Vietnam:"越南","West Bank":"西岸","W. Sahara":"西撒哈拉",Yemen:"也门",Zambia:"赞比亚",Zimbabwe:"津巴布韦"},series:[{y:"10%",type:"map",map:"world",zoom:1.2,aspectScale:.75,label:{normal:{show:!0,textStyle:{color:"transparent",fontSize:8}}},itemStyle:{normal:{areaColor:"rgba(0,255,236,0)",borderColor:"rgba(0,0,0,0.2)"},emphasis:{areaColor:"#45cfff",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:20,borderWidth:0}},data:a}],visualMap:[{orient:"vertical",type:"piecewise",itemGap:3,bottom:"5px",textStyle:{fontSize:10},pieces:[{min:0,max:0,color:"#FFFFFF"},{min:1,max:999,color:"#FDFDCF"},{min:1e3,max:9999,color:"#FE9E83"},{min:1e4,max:49999,color:"#cc745c"},{min:5e4,max:99999,color:"#9c513c"},{min:1e5,max:1e6,color:"#5a1c16"},{min:1e6,color:"#300b08"}]}]};i.setOption(s)}}}}})};var Pt=Tt,Gt=(e(65693),e(96572),e(95410)),At=e.n(Gt);const zt=(t,a)=>{switch(t){case 400:console.log("语义错误，不能被服务器理解");break;case 401:console.log("服务器认证失败");break;case 403:console.log("服务器拒绝请求");break;case 404:console.log("地址错误");break;case 500:console.log("服务器遇到未知状态");break;case 502:console.log("服务器无响应");break;default:console.log(a);break}},Bt=St.ZP.create({timeout:5e3});Bt.interceptors.request.use((t=>("post"===t.method&&(t.data=At().stringify(t.data)),t)),(t=>Promise.reject(t))),Bt.interceptors.response.use((t=>200===t.status?Promise.resolve(t):Promise.reject(t)),(t=>{const{response:a}=t;zt(a.status,a.info)}));var Ot=Bt;const $t={baseUrl:"http://api.tianapi.com",ncov:"/ncov/index",ncovCity:"https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf",ncovTrend:"https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,nowConfirmStatis,provinceCompare",ncovGlobal:"https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoCountryConfirmAdd,WomWorld,WomAboard"},Et={getNcov(t){return Ot.get($t.baseUrl+$t.ncov,{params:t})},getNcovCity(){return Ot.get($t.ncovCity)},getNcovTrend(){return Ot.get($t.ncovTrend)},getNcovGlobal(){return Ot.get($t.ncovGlobal)}};var qt=Et;i.ZP.prototype.$axios=St.ZP,i.ZP.prototype.$api=qt,i.ZP.config.productionTip=!1,Ft(),i.ZP.use(Pt),new i.ZP({router:_t,store:gt,render:t=>t(l)}).$mount("#app")},24654:function(){}},a={};function e(i){var s=a[i];if(void 0!==s)return s.exports;var n=a[i]={exports:{}};return t[i].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(a,i,s,n){if(!i){var o=1/0;for(d=0;d<t.length;d++){i=t[d][0],s=t[d][1],n=t[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&n||o>=n)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var l=s();void 0!==l&&(a=l)}}return a}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[i,s,n]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,i){var s,n,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(a){return 0!==t[a]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(c)var d=c(e)}for(a&&a(i);l<o.length;l++)n=o[l],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(d)},i=self["webpackChunkvue_echarts"]=self["webpackChunkvue_echarts"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(68842)}));i=e.O(i)})();
//# sourceMappingURL=app.6124c7c5.js.map