(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7f75"],{"341V":function(e,t,a){},Ho89:function(e,t,a){"use strict";var s=a("341V");a.n(s).a},MT9o:function(e,t,a){"use strict";a.r(t);var s=a("YEIV"),i=a.n(s),l=a("R7wM"),r=a("vDqi"),o=a.n(r),n=a("MT78"),c={data:function(){var e;return e={checkSampleResult:!1,radio1:"1",xData:["0","","","","","5","","","","","10","","","","","15","","","","","20","","","","","25","","","","","30"],FAM:[1,2,3],HEX:[3,2,1],ROX:[2,3,1],myChartStyle:{float:"left",width:"50%",height:"400px"},sample_result:"",sample_status:"",sample_id:"",test_result_time:"",embark_time:"",submit_time:"",test_result_person:"",embarker_num:"",injector_num:"",batch_list:[],checked1:0,batch_number:"",box_num:"",batch_status:[{value:"0",label:"已上传结果"},{value:"1",label:"未上传结果"}],value:"",test_type:[{value:"0",label:"普通12小时检测"},{value:"1",label:"加急6-8小时检测"}]},i()(e,"value",""),i()(e,"lislab",[{value:"YiJianSuo",label:"医检所实验室"},{value:"BeiJingXiZhan",label:"北京西站方舱实验室"},{value:"BeiJingNanZhan",label:"北京南站方舱实验室"},{value:"ZhongRi",label:"中日友好医院"},{value:"BoRen",label:"博仁方舱实验室"}]),i()(e,"value",""),i()(e,"sample",[]),i()(e,"channelList",[]),i()(e,"current",1),i()(e,"limit",7),i()(e,"searchObj",{}),i()(e,"list",[]),i()(e,"total",0),i()(e,"multipleSelection",[]),i()(e,"url1","https://lisalarm.coyotebio-lab.com/lislab"),e},created:function(){this.sample_id=this.$route.query.sample_id,this.getSampleDetailInfo(),this.getChannel()},mounted:function(){this.initEcharts()},methods:{initEcharts:function(){var e={xAxis:{data:this.xData},tooltip:{trigger:"axis"},legend:{data:["FAM","ROX","HEX"],top:"0%"},yAxis:{},series:[{type:"line",data:this.FAM,name:"FAM",smooth:!0,label:{show:!1,position:"top"}},{type:"line",data:this.ROX,name:"ROX",smooth:!0,label:{show:!1,position:"top"}},{type:"line",data:this.HEX,name:"HEX",smooth:!0,label:{show:!1,position:"top"}}]},t=n.init(document.getElementById("mychart"));t.setOption(e),window.addEventListener("resize",function(){t.resize()})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},resetForm:function(e){this.$refs[e].resetFields(),this.getSampleListInfo()},getChannel:function(){var e=this;console.log(this.multipleSelection+"////////////////////////////////////////"),o()({method:"get",url:this.url1+"/admin/channel/getChannelNameList.hn"}).then(function(t){e.channelList=t.data.channel_array}).catch(function(e){console.log(e)})},timeFormat1:function(e){var t=e.getFullYear(),a=e.getMonth()+1;a<10&&(a="0"+a);var s=e.getDate();s<10&&(s="0"+s);var i=e.getHours();i<10&&(i="0"+i);var l=e.getMinutes();l<10&&(l="0"+l);var r=e.getSeconds();return r<10&&(r="0"+r),t+"-"+a+"-"+s+" "+i+":"+l+":"+r},getSampleDetailInfo:function(e){var t=this;this.current=e,void 0!=this.searchObj.receive_starttime&&(this.searchObj.receive_starttime=this.timeFormat1(this.searchObj.receive_starttime)),void 0!=this.searchObj.receive_endtime&&(this.searchObj.receive_endtime=this.timeFormat1(this.searchObj.receive_endtime)),void 0!=this.searchObj.lislab_starttime&&(this.searchObj.lislab_starttime=this.timeFormat1(this.searchObj.lislab_starttime)),void 0!=this.searchObj.lislab_endtime&&(this.searchObj.lislab_endtime=this.timeFormat1(this.searchObj.lislab_endtime)),console.log(this.multipleSelection+"------------------------------------"),o()({method:"get",url:this.url1+"/sampleCenter/getSampleDetailInfo.hn",params:{page:this.current,limit:this.limit,checked:this.checked1,sample_id:this.sample_id}}).then(function(e){t.test_result_time=e.data.sample_array[0].test_result_time,t.sample_status=e.data.sample_array[0].sample_status,t.embark_time=e.data.sample_array[0].embark_time,t.submit_time=e.data.sample_array[0].submit_time,t.test_result_person=e.data.sample_array[0].test_result_person,t.embarker_num=e.data.sample_array[0].embarker_num,t.injector_num=e.data.sample_array[0].injector_num,t.sample_result=e.data.sample_array[0].test_result,t.FAM=e.data.FAM,t.ROX=e.data.ROX,t.HEX=e.data.HEX,t.initEcharts()}).catch(function(e){console.log(e)})},exportReceiveSampleData:function(){void 0!=this.searchObj.receive_starttime&&(this.searchObj.receive_starttime=this.timeFormat1(this.searchObj.receive_starttime)),void 0!=this.searchObj.receive_endtime&&(this.searchObj.receive_endtime=this.timeFormat1(this.searchObj.receive_endtime)),void 0!=this.searchObj.lislab_starttime&&(this.searchObj.lislab_starttime=this.timeFormat1(this.searchObj.lislab_starttime)),void 0!=this.searchObj.lislab_endtime&&(this.searchObj.lislab_endtime=this.timeFormat1(this.searchObj.lislab_endtime)),console.log(this.multipleSelection+"------------------------------------"),void 0==this.searchObj.batch_number&&(this.searchObj.batch_number=""),void 0==this.searchObj.channel_id&&(this.searchObj.channel_id=""),void 0==this.searchObj.lab_sample_status&&(this.searchObj.lab_sample_status=""),void 0==this.searchObj.lislab_starttime&&(this.searchObj.lislab_starttime=""),void 0==this.searchObj.lislab_endtime&&(this.searchObj.lislab_endtime=""),void 0==this.searchObj.receive_starttime&&(this.searchObj.receive_starttime=""),void 0==this.searchObj.receive_endtime&&(this.searchObj.receive_endtime="");var e=this.url1+"/sampleCenter/exportReceiveSampleInfo.hn";e=e+"?box_num="+this.searchObj.box_num+"&channel_id="+this.searchObj.channel_id+"&company_serial="+this.searchObj.company_serial+"&sample_id="+this.searchObj.sample_id+"&lislab_starttime="+this.searchObj.lislab_starttime+"&lislab_endtime="+this.searchObj.lislab_endtime+"&receive_starttime="+this.searchObj.receive_starttime+"&receive_endtime="+this.searchObj.receive_endtime,window.open(e)},getCompanySerial:function(){var e=this;l.a.getLabName().then(function(t){e.companySerial=t.data})},getDutyPersonName:function(){var e=this;l.a.getDutyname().then(function(t){e.dutyPersonName=t.data})},resetData:function(){this.searchObj.companySerial=null,this.searchObj.lislabStatus=null,this.searchObj.dutyPersonName=null,this.getSampleListInfo(1)}}},m=(a("Ho89"),a("KHd+")),h=Object(m.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-span",{staticStyle:{"font-size":"16px","font-weight":"600"}},[e._v("实验数据详情")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-form",{ref:"searchObj",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchObj}},[a("el-form-item",{attrs:{label:"样本编号",prop:"sample_id"}},[a("el-input",{staticClass:"box1",staticStyle:{color:"#0d0d0d","font-weight":"600"},attrs:{placeholder:"",disabled:!0,clearable:""},model:{value:this.sample_id,callback:function(t){e.$set(this,"sample_id",t)},expression:"this.sample_id"}})],1),e._v(" "),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"加样人 ",prop:"injector_num"}},[a("el-input",{staticClass:"box1",attrs:{placeholder:"",disabled:!0,clearable:""},model:{value:this.injector_num,callback:function(t){e.$set(this,"injector_num",t)},expression:"this.injector_num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上机人",prop:"embarker_num"}},[a("el-input",{staticClass:"box1",attrs:{placeholder:"",disabled:!0,clearable:""},model:{value:this.embarker_num,callback:function(t){e.$set(this,"embarker_num",t)},expression:"this.embarker_num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结果提交人",prop:"test_result_person"}},[a("el-input",{staticClass:"box1",attrs:{placeholder:"",disabled:!0,clearable:""},model:{value:this.test_result_person,callback:function(t){e.$set(this,"test_result_person",t)},expression:"this.test_result_person"}})],1),e._v(" "),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"上机时间",prop:"embark_time"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",disabled:!0,placeholder:""},model:{value:this.embark_time,callback:function(t){e.$set(this,"embark_time",t)},expression:"this.embark_time"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"提交结果时间",prop:"test_result_time"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",disabled:!0,placeholder:""},model:{value:this.test_result_time,callback:function(t){e.$set(this,"test_result_time",t)},expression:"this.test_result_time"}})],1)]),e._v(" "),a("el-form-item")],1),e._v(" "),a("el-div",{staticClass:"echart",style:e.myChartStyle,attrs:{id:"mychart"}}),e._v(" "),""==this.submit_time?a("h1",{staticStyle:{"margin-left":"5%",color:"#1a4db1"}},[e._v("待提交结果")]):"3"==this.sample_status?a("h1",{staticStyle:{"margin-left":"5%",color:"#1a4db1"}},[e._v("待生成报告")]):"4"==this.sample_status?a("h1",{staticStyle:{"margin-left":"5%",color:"#1a4db1"}},[e._v("已报告")]):e._e(),e._v(" "),a("br"),e._v(" "),a("el-span",{staticStyle:{"font-size":"16px","font-weight":"600"}},[e._v("实验结果")]),e._v(" "),a("br"),e._v(" "),"阴性"==this.sample_result?a("h1",{staticStyle:{"margin-left":"5%",color:"green"}},[e._v(e._s(e.sample_result))]):e._e(),e._v(" "),"阳性"==this.sample_result?a("h1",{staticStyle:{"margin-left":"5%",color:"red"}},[e._v(e._s(e.sample_result))]):e._e(),e._v(" "),"复检"==this.sample_result?a("h1",{staticStyle:{"margin-left":"5%",color:"yellow"}},[e._v(e._s(e.sample_result))]):e._e(),e._v(" "),a("br"),e._v(" "),a("el-div",[a("el-button",{staticStyle:{"background-color":"#DCDFE6","border-color":"#DCDFE6",color:"#303133"},attrs:{type:"info"}},[e._v("FAM: 65.325"+e._s(e.sample_total))]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#DCDFE6","border-color":"#DCDFE6",color:"#303133"},attrs:{type:"info"}},[e._v("ROX: 45.635"+e._s(e.convey_total))]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#DCDFE6","border-color":"#DCDFE6",color:"#303133"},attrs:{type:"info"}},[e._v("HEX: 45.656")]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#DCDFE6","border-color":"#DCDFE6",color:"#303133"},attrs:{type:"info"}},[e._v("CY5: 45.656")])],1),e._v(" "),a("br"),a("br"),e._v(" "),a("el-div",{staticStyle:{"margin-left":"15%"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.checkSampleResult=!0}}},[e._v("审核结果")]),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.checkSampleResult,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.checkSampleResult=t}}},[a("el-radio",{staticStyle:{"margin-left":"35%",width:"200px"},attrs:{label:"1",border:""},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("阴性")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-radio",{staticStyle:{"margin-left":"35%",width:"200px"},attrs:{label:"2",border:""},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("复检")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-radio",{staticStyle:{"margin-left":"35%",width:"200px"},attrs:{label:"3",border:""},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("重采")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-radio",{staticStyle:{"margin-left":"35%",width:"200px"},attrs:{label:"4",border:""},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("空管")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.checkSampleResult=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.checkSampleResult=!1}}},[e._v("确 定")])],1)],1)],1)],1)},[],!1,null,null,null);h.options.__file="select_detail.vue";t.default=h.exports},R7wM:function(e,t,a){"use strict";var s=a("t3Un");t.a={getSampleListInfo:function(e,t,a){return Object(s.a)({url:"/admin/classes-sample-info/showSampleListInfo/"+e+"/"+t,method:"post",data:a})},getList:function(e,t,a){return Object(s.a)({url:"/admin/classes-car-info/showClassesCarInfo/"+e+"/"+t,method:"post",data:a})},getCarById:function(e){return Object(s.a)({url:"/admin/classes-car-info/getCarById/"+e,method:"post"})},saveCar:function(e){return Object(s.a)({url:"/admin/classes-car-info/saveCar",method:"post",data:e})},updateCar:function(e){return Object(s.a)({url:"/admin/classes-car-info/updateCar",method:"post",data:e})},deleteCar:function(e){return Object(s.a)({url:"/admin/classes-car-info/deleteCar/"+e,method:"post"})},getAllCar:function(){return Object(s.a)({url:"/admin/classes-car-info/getAllCar",method:"get"})},getCarByCarNum:function(e){return Object(s.a)({url:"/admin/classes-car-info/getCarByCarNum/"+e,method:"post"})},getAllPerson:function(){return Object(s.a)({url:"/admin/classes-car-info/getAllPerson",method:"get"})},getPhoneByName:function(e){return Object(s.a)({url:"/admin/classes-car-info/getPhoneByName",method:"post",data:e})}}}}]);