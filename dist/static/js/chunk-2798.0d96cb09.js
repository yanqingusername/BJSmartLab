(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2798"],{"2dwA":function(e,t,n){"use strict";var o=n("An8B");n.n(o).a},An8B:function(e,t,n){},GQeE:function(e,t,n){e.exports={default:n("iq4v"),__esModule:!0}},KTTK:function(e,t,n){"use strict";var o=n("t3Un");t.a={getChannelNameList:function(){return Object(o.a)({url:"http://localhost:8070/lis_appointment_war_exploded/admin/channel/getChannelNameList.hn",method:"get"})},getAllCity:function(){return Object(o.a)({url:"/admin/common/getAllCity",method:"post"})},getAllArea:function(){return Object(o.a)({url:"/admin/common/getAllArea",method:"get"})},getAllChannel:function(e){return Object(o.a)({url:"/admin/common/getAllChannel/"+e,method:"post"})},getPhone:function(e){return Object(o.a)({url:"/admin/common/getPhone",method:"get",params:{samplingLeader:e}})},getAllLab:function(e){return Object(o.a)({url:"/admin/common/getAllLab/"+e,method:"get"})},getAllLeader:function(){return Object(o.a)({url:"/admin/common/getAllLeader",method:"get"})},getAllpaytype:function(){return Object(o.a)({url:"/admin/common/getAllPaytype",method:"get"})},getAllsource:function(){return Object(o.a)({url:"/admin/common/getAllSource",method:"get"})}}},MDep:function(e,t,n){"use strict";n.r(t);var o=n("gDS+"),a=n.n(o),i=n("GQeE"),l=n.n(i),r=n("reOz"),s=n("KTTK"),u=n("X4fA"),c={data:function(){var e=this;return{rules:{startTime:[{required:!0,message:"请选择开始时间",trigger:"change"}],endTime:[{required:!0,message:"请选择结束时间",trigger:"change"}],objective:[{required:!0,message:"请选择目的",trigger:"change"}],site:[{required:!0,message:"请选择节点",trigger:"change"}]},routeId:0,routeName:"",startTime:"",endTime:"",dialogSave:!1,i:1,rowsIndex:1,columnsIndex:"",chuan:{},dialogVisible:!1,issiteType:"0",SaveRoute:{},rowsdata:[{1:{}}],columnIndex:1,lab:{},channel:{},tabheight:0,columndata:[{title:"名称",key:"name",width:150,fixed:"left",resizable:!0,render:function(e,t){return e("div",[e("Input",{props:{placeholder:"车辆"+(t.index+1),disabled:!0},style:{width:"75%",float:"left"}})])}},{title:"途径站点/时间/目的",key:"1",width:240,resizable:!0,render:function(t,n){var o=n.index+1;return t("div",{on:{click:function(){e.dialogVisible=!0,console.log(o),e.rowsIndex=o,e.columnsIndex=n.column.key,e.lieIndex=n.column.key.split("value")[1],console.log("----\x3e:",n.column.key.split("value")[1])}}},[null==e.rowsdata[o-1][n.column.key].time&&null==e.rowsdata[o-1][n.column.key].site&&null==e.rowsdata[o-1][n.column.key].objective?t("p",{style:{color:"#D3D3D3"}},""):t("div",{},[t("p",{},""+e.rowsdata[o-1][n.column.key].time),t("p",{},""+e.rowsdata[o-1][n.column.key].site),t("p",{},""+e.rowsdata[o-1][n.column.key].objective)])])},renderHeader:function(t,n){var o=e;return t("div",[t("Input",{props:{value:n.column.title,disabled:!0},style:{width:"70%",float:"left"},on:{"on-change":function(e){o.columndata[n.index]=n.column}}})])}}]}},created:function(){if(this.selectAllChannel(),this.$route.params&&this.$route.params.id){var e=this.$route.params.id;this.SaveRoute.id=e,console.log("======>888",this.SaveRoute.id),this.getRouteById(e)}},methods:{back:function(){this.$router.push({path:"/car/route/list"})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!!"),!1;console.log(t.scheduleSet),t.addSite()})},exportData:function(){console.log("调用了导出"),this.$refs.table.exportCsv({filename:"The original data",columns:this.columndata,data:this.rowsdata})},beginCloumn:function(){var e=this;this.columnIndex++;var t={title:"途径站点/时间/目的",key:this.columnIndex,width:240,resizable:!0,render:function(t,n){var o=n.index+1;return t("div",{on:{click:function(){e.dialogVisible=!0,console.log(o),e.rowsIndex=o,e.columnsIndex=n.column.key,e.lieIndex=n.column.key.split("value")[1],console.log("----\x3e:",n.column.key.split("value")[1])}}},[null==e.rowsdata[o-1][n.column.key].time&&null==e.rowsdata[o-1][n.column.key].site&&null==e.rowsdata[o-1][n.column.key].objective?t("p",{style:{color:"#D3D3D3"}},""):t("div",{},[t("p",{},""+e.rowsdata[o-1][n.column.key].time),t("p",{},""+e.rowsdata[o-1][n.column.key].site),t("p",{},""+e.rowsdata[o-1][n.column.key].objective)])])},renderHeader:function(t,n){var o=e;return t("div",[t("Input",{props:{value:n.column.title,disabled:!0},style:{width:"70%",float:"left"},on:{"on-change":function(e){n.column.title=e.target.value,o.columndata[n.index]=n.column}}})])}};this.columndata.push(t),console.log(this.rowsdata)},getRouteById:function(e){var t=this;r.a.getRouteById(e).then(function(e){t.rowsdata=JSON.parse(e.data);for(var n=t.rowsdata,o=0,a=t.rowsdata[0],i=0;i<n.length;i++){var r=t.rowsdata[i],s=l()(r);s.length>o&&(o=s.length,console.log("0099999888888",o))}if("personName"in a){console.log("-000000--------");for(var u=0;u<o-3;u++)t.beginCloumn()}else{console.log("0000000000000000000");for(var c=0;c<o-1;c++)t.beginCloumn()}console.log("==================>>>",t.rowsdata)})},saveRoute:function(){var e=this;this.dialogSave=!1,this.SaveRoute.rowsdata=this.rowsdata,console.log(this.rowsdata),r.a.saveRoute(this.SaveRoute).then(function(t){e.$message({type:"success",message:"添加成功!"}),e.$router.push({path:"/car/route/list"})})},addSite:function(){console.log("172387128",this.rowsIndex,this.columnsIndex);var e=[];this.chuan.startTime==this.chuan.endTime?this.chuan.time=this.chuan.startTime:this.chuan.time=this.chuan.startTime+"-"+this.chuan.endTime,this.rowsdata[this.rowsIndex-1][this.columnsIndex]={time:this.chuan.time,objective:this.chuan.objective,site:this.chuan.site},e=this.rowsdata,this.rowsdata=[],this.rowsdata=e,e=[],this.chuan={},this.dialogVisible=!1,this.startTime="",this.endTime="",console.log("----\x3e:",this.rowsdata,"123123",this.rowsdata[this.rowsIndex-1][this.columnsIndex])},selectAllLab:function(){var e=this;r.a.selectAllLab().then(function(t){e.lab=t.data})},selectAllChannel:function(){var e=this;s.a.getAllChannel(Object(u.a)()).then(function(t){e.channel=t.data})},AddRow:function(){var e=JSON.parse(a()(this.rowsdata[0]));for(var t in e)e[t]="name"==t?"车辆"+this.rowsdata.length:{};this.rowsdata.push(e),console.log(this.rowsdata)},AddColumn:function(){var e=this;this.columnIndex++;var t=this.columnIndex;this.rowsdata.forEach(function(e,n){e[t]={}});var n={title:"途径站点/时间/目的",key:t,width:240,resizable:!0,render:function(t,n){var o=n.index+1;return t("div",{on:{click:function(){e.dialogVisible=!0,console.log(o),e.rowsIndex=o,e.columnsIndex=n.column.key,e.lieIndex=n.column.key.split("value")[1],console.log("----\x3e:",n.column.key.split("value")[1])}}},[null==e.rowsdata[o-1][n.column.key].time&&null==e.rowsdata[o-1][n.column.key].site&&null==e.rowsdata[o-1][n.column.key].objective?t("p",{style:{color:"#D3D3D3"}},""):t("div",{},[t("p",{},""+e.rowsdata[o-1][n.column.key].time),t("p",{},""+e.rowsdata[o-1][n.column.key].site),t("p",{},""+e.rowsdata[o-1][n.column.key].objective)])])},renderHeader:function(t,n){var o=e;return t("div",[t("Input",{props:{value:n.column.title,disabled:!0},style:{width:"70%",float:"left"},on:{"on-change":function(e){n.column.title=e.target.value,o.columndata[n.index]=n.column}}})])}};this.columndata.push(n),console.log(this.rowsdata)}},mounted:function(){this.tabheight=.8*window.innerHeight}},d=(n("2dwA"),n("KHd+")),m=Object(d.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-box"},[n("div",{staticClass:"botom-box"},[null!=this.SaveRoute.id?n("a",{attrs:{href:"http://lisalarm.coyotebio-lab.com:8201/admin/route/downRoute?routeId="+e.SaveRoute.id,target:"_blank",method:"get"}},[n("Button",{attrs:{type:"success",size:"large"}},[e._v("导出")])],1):e._e(),e._v(" "),n("Button",{attrs:{type:"error",size:"large"},on:{click:e.back}},[e._v("取消")])],1),e._v(" "),n("div",{ref:"tabdiv",staticClass:"data-box"},[n("Table",{ref:"table",staticClass:"table-css",attrs:{height:e.tabheight,border:"",columns:e.columndata,data:e.rowsdata}})],1),e._v(" "),n("el-dialog",{attrs:{title:"保存路线",visible:e.dialogSave,width:"30%"},on:{"update:visible":function(t){e.dialogSave=t}}},[n("el-input",{attrs:{placeholder:"请填写方案名称"},model:{value:e.SaveRoute.routeName,callback:function(t){e.$set(e.SaveRoute,"routeName",t)},expression:"SaveRoute.routeName"}}),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveRoute()}}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:function(t){e.dialogSave=!1}}},[e._v("取 消")])],1)],1)],1)},[],!1,null,"73dc0f66",null);m.options.__file="show.vue";t.default=m.exports},Mqbl:function(e,t,n){var o=n("JB68"),a=n("w6GO");n("zn7N")("keys",function(){return function(e){return a(o(e))}})},"gDS+":function(e,t,n){e.exports={default:n("oh+g"),__esModule:!0}},iq4v:function(e,t,n){n("Mqbl"),e.exports=n("WEpk").Object.keys},"oh+g":function(e,t,n){var o=n("WEpk"),a=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},reOz:function(e,t,n){"use strict";var o=n("t3Un");t.a={getList:function(e,t,n){return Object(o.a)({url:"/admin/route/showRoute/"+e+"/"+t,method:"post",data:n})},getCarById:function(e){return Object(o.a)({url:"/admin/classes-car-info/getCarById/"+e,method:"post"})},saveCar:function(e){return Object(o.a)({url:"/admin/classes-car-info/saveCar",method:"post",data:e})},updateCar:function(e){return Object(o.a)({url:"/admin/classes-car-info/updateCar",method:"post",data:e})},deleteCar:function(e){return Object(o.a)({url:"/admin/classes-car-info/deleteCar/"+e,method:"post"})},selectAllChannel:function(e){return Object(o.a)({url:"/admin/common/getAllChannel/"+e,method:"get"})},selectAllLab:function(){return Object(o.a)({url:"/admin/common/getAllLab",method:"get"})},saveRoute:function(e){return Object(o.a)({url:"/admin/route/saveRoute",method:"post",data:e})},saveSchedule:function(e){return Object(o.a)({url:"/admin/route/saveSchedule",method:"post",data:e})},getRouteById:function(e){return Object(o.a)({url:"/admin/route/getRouteById/"+e,method:"post"})},getScheduleById:function(e){return Object(o.a)({url:"/admin/route/getScheduleById/"+e,method:"post"})},deleteRouteById:function(e){return Object(o.a)({url:"/admin/route/deleteRouteById/"+e,method:"post"})},getAllRoute:function(){return Object(o.a)({url:"/admin/route/getAllRoute",method:"get"})},getScheduleTimeById:function(e){return Object(o.a)({url:"/admin/route/getScheduleTimeById/"+e,method:"post"})}}},zn7N:function(e,t,n){var o=n("Y7ZC"),a=n("WEpk"),i=n("KUxP");e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],l={};l[e]=t(n),o(o.S+o.F*i(function(){n(1)}),"Object",l)}}}]);