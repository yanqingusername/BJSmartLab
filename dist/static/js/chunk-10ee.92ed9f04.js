(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-10ee"],{NktK:function(t,e,a){"use strict";a.r(e);var s=a("YEIV"),i=a.n(s),n=(a("R7wM"),a("72z0"),a("vDqi")),l=a.n(n),r=a("MT78"),o={components:{tMap:a("tfpJ").a},data:function(){var t;return t={isMapShow:!1,dataForm:{actLng:0,actLat:0},provinceList:[],exception_detail:!1,OutTimeSendSampleInfo:!1,OutTimeReceiveSampleInfo:!1,OutTimeManageSampleInfo:!1,RepeatTestSampleInfo:!1,OutTimeTestSampleInfo:!1,OutTimeReportSampleInfo:!1,OutTimeNotReportSampleInfo:!1,xData:["北京南站方舱实验室","北京西站方舱实验室","医检所实验室"],yData:[],taskData:[],myChartStyle:{float:"left",width:"50%",height:"400px"},xData2:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],yData2:[],taskData2:[],myChartStyle2:{float:"left",width:"100%",height:"400px"},xData3:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],yData3:[],taskData3:[],allData:[],myChartStyle3:{float:"left",width:"50%",height:"400px"},xData4:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],yData4:[],taskData4:[],allData4:[],channel_title:"北京西站",myChartStyle4:{float:"left",width:"50%",height:"400px"},xData5:[],yData5:[],taskData5:[],allData5:[],xData6:[],yData6:[]},i()(t,"channel_title","北京西站"),i()(t,"myChartStyle5",{float:"left",width:"100%",height:"400px"}),i()(t,"convey",["danger"]),i()(t,"box_num",""),i()(t,"sample_source",[{value:"0",label:"卡尤迪"},{value:"1",label:"东软"}]),i()(t,"sample_source2",[{value:"0",label:"卡尤迪"},{value:"1",label:"东软"}]),i()(t,"sample_source3",[{value:"0",label:"卡尤迪"},{value:"1",label:"东软"}]),i()(t,"sample_source4",[{value:"0",label:"卡尤迪"},{value:"1",label:"东软"}]),i()(t,"sample_status",[{value:"1",label:"已接收"},{value:"2",label:"正在检测"},{value:"3",label:"检测结果确认"},{value:"4",label:"已出报告"}]),i()(t,"value",""),i()(t,"lislab",[{value:"YiJianSuo",label:"医检所实验室"},{value:"BeiJingXiZhan",label:"北京西站方舱实验室"},{value:"BeiJingNanZhan",label:"北京南站方舱实验室"},{value:"ZhongRi",label:"中日友好医院"},{value:"BoRen",label:"博仁方舱实验室"}]),i()(t,"value",""),i()(t,"lislab1",[{value:"YiJianSuo",label:"医检所实验室"},{value:"BeiJingXiZhan",label:"北京西站方舱实验室"},{value:"BeiJingNanZhan",label:"北京南站方舱实验室"},{value:"ZhongRi",label:"中日友好医院"},{value:"BoRen",label:"博仁方舱实验室"}]),i()(t,"value",""),i()(t,"sample",[]),i()(t,"channelList",[]),i()(t,"channelList2",[]),i()(t,"channelList3",[]),i()(t,"channelList4",[]),i()(t,"channelList5",[]),i()(t,"channelList6",[]),i()(t,"channelList7",[]),i()(t,"channelList8",[]),i()(t,"channelList9",[]),i()(t,"current",1),i()(t,"limit",7),i()(t,"searchObj",{sample_line_forest_time:new Date,sample_line_starttime:new Date,sample_detail_starttime:new Date,sample_detail_endtime:(new Date).setDate((new Date).getDate()+1),sample_starttime:new Date,sample_starttime1:new Date,sample_starttime2:new Date,sample_starttime3:new Date,sample_starttime4:new Date,sample_starttime5:new Date,sample_starttime6:new Date,sample_starttime7:new Date,sample_starttime8:new Date,company_serial2:"BeiJingXiZhan",company_serial3:"",channel_id:"146"}),i()(t,"list",[]),i()(t,"exception_total",0),i()(t,"exception_data",[]),i()(t,"out_time_send_sample_total",0),i()(t,"out_time_send_sample_data",[]),i()(t,"out_time_receive_sample_total",0),i()(t,"out_time_receive_sample_data",[]),i()(t,"out_time_manage_sample_total",0),i()(t,"out_time_manage_sample_data",[]),i()(t,"repeat_test_sample_total",0),i()(t,"repeat_test_manage_sample_data",[]),i()(t,"out_time_test_sample_total",0),i()(t,"out_time_test_sample_data",[]),i()(t,"out_time_report_sample_total",0),i()(t,"out_time_report_sample_data",[]),i()(t,"out_time_not_report_sample_total",0),i()(t,"out_time_not_report_sample_data",[]),i()(t,"sampleDetailTableData",[]),i()(t,"expectReceiveTotal","0"),i()(t,"alreadyReceiveTotal","0"),i()(t,"expectSampleTotal","0"),i()(t,"alreadySampleTotal","0"),i()(t,"multipleSelection",[]),i()(t,"url1","https://lisalarm.coyotebio-lab.com/lislab"),t},created:function(){this.init(),this.getChannel(),this.getAllSampleInfo()},mounted:function(){this.initEcharts2()},methods:i()({init:function(){var t=this;this.$nextTick(function(){t.isMapShow=!0})},nowLocation:function(t){this.$set(this.dataForm,"actLng",t.lng),this.$set(this.dataForm,"actLat",t.lat)},reflashLislabData:function(){this.getTotalSampleCount(),this.getReceiveSampleLineInfo()},reflashPrevSevenData:function(){this.searchObj.sample_starttime=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime1=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime2=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime3=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime4=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime5=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime6=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime7=this.timeFormat2((new Date).setDate((new Date).getDate()-7)),this.searchObj.sample_starttime8=this.timeFormat2((new Date).setDate((new Date).getDate()-7))},reflashPrevData:function(){this.searchObj.sample_starttime=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime1=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime2=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime3=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime4=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime5=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime6=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime7=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.searchObj.sample_starttime8=this.timeFormat2((new Date).setDate((new Date).getDate()-1)),this.getExceptionSampleInfo(),this.getOutTimeSendSampleInfo(),this.getOutTimeReceiveSampleInfo(),this.getOutTimeManageSampleInfo(),this.getRepeatTestSampleInfo(),this.getOutTimeTestSampleInfo(),this.getOutTimeReportSampleInfo(),this.getOutTimeNotReportSampleInfo()},reflashNextData:function(){this.searchObj.sample_starttime=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime1=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime2=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime3=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime4=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime5=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime6=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime7=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.searchObj.sample_starttime8=this.timeFormat2((new Date).setDate((new Date).getDate()+1)),this.getExceptionSampleInfo(),this.getOutTimeSendSampleInfo(),this.getOutTimeReceiveSampleInfo(),this.getOutTimeManageSampleInfo(),this.getRepeatTestSampleInfo(),this.getOutTimeTestSampleInfo(),this.getOutTimeReportSampleInfo(),this.getOutTimeNotReportSampleInfo()},initEcharts:function(){var t={xAxis:{data:this.xData},toolbox:{feature:{saveAsImage:{}}},legend:{data:["已收样未完成","已收样已完成"],top:"0%"},yAxis:{},series:[{type:"line",data:this.yData,name:"已收样未完成",smooth:!0,label:{show:!0,position:"top"}},{type:"line",data:this.taskData,name:"已收样已完成",smooth:!0,label:{show:!0,position:"top"}}]},e=r.init(document.getElementById("mychart"));e.setOption(t),window.addEventListener("resize",function(){e.resize()})},initEcharts2:function(){var t={xAxis:{data:this.xData2},toolbox:{feature:{saveAsImage:{}}},legend:{data:["预测接收量","检测能力"],top:"0%"},yAxis:{},series:[{type:"line",data:this.yData2,name:"预测接收量",smooth:!0,label:{show:!0,position:"top"}},{type:"line",data:this.taskData2,name:"检测能力",smooth:!0,label:{show:!0,position:"top"}}]},e=r.init(document.getElementById("mychart2"));e.setOption(t),window.addEventListener("resize",function(){e.resize()})},initEcharts3:function(){var t={grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis"},toolbox:{feature:{saveAsImage:{}}},xAxis:{data:this.xData3,type:"category",boundaryGap:!1},legend:{data:["今日","昨日","七日前"],top:"0%"},yAxis:{type:"value"},series:[{type:"line",data:this.yData3,name:"今日",smooth:!0,label:{show:!0,position:"top"}},{type:"line",data:this.taskData3,name:"昨日",smooth:!0,label:{show:!0,position:"top"}},{type:"line",data:this.allData,name:"七日前",smooth:!0,label:{show:!0,position:"top"}}]},e=r.init(document.getElementById("mychart3"));e.setOption(t),window.addEventListener("resize",function(){e.resize()})},initEcharts4:function(){var t={grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis"},toolbox:{feature:{saveAsImage:{}}},xAxis:{data:this.xData4},legend:{data:["今日","昨日","七日前"],top:"0%"},yAxis:{},series:[{type:"line",data:this.yData4,name:"今日",smooth:!0,label:{show:!0,position:"top"}},{type:"line",data:this.taskData4,name:"昨日",smooth:!0,label:{show:!0,position:"top"}},{type:"line",data:this.allData4,name:"七日前",smooth:!0,label:{show:!0,position:"top"}}]},e=r.init(document.getElementById("mychart4"));e.setOption(t),window.addEventListener("resize",function(){e.resize()})},initEcharts5:function(){var t={xAxis:{data:this.xData5,axisLabel:{interval:0,rotate:20}},toolbox:{feature:{saveAsImage:{}}},legend:{data:["待送样","已送样","总量"],top:"0%"},yAxis:{},series:[{type:"bar",data:this.taskData5,name:"已送样",smooth:!0,stack:"one",label:{show:!0,position:"top"}},{type:"bar",data:this.yData5,name:"待送样",smooth:!0,stack:"one",label:{show:!0,position:"top"}},{type:"bar",data:this.allData5,name:"总量",smooth:!0,label:{show:!0,position:"top"}}]},e=r.init(document.getElementById("mychart5"));e.setOption(t),window.addEventListener("resize",function(){e.resize()})},initEcharts6:function(){var t={xAxis:{data:this.xData6,axisLabel:{interval:0,rotate:20}},toolbox:{feature:{saveAsImage:{}}},legend:{data:["东软采样点"],top:"0%"},yAxis:{},series:[{type:"bar",data:this.yData6,name:"东软采样点",smooth:!0,label:{show:!0,position:"top"}}]},e=r.init(document.getElementById("mychart6"));e.setOption(t),window.addEventListener("resize",function(){e.resize()})},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t},resetForm:function(t){this.$refs[t].resetFields(),this.getSampleListInfo()},getChannel:function(){var t=this;l()({method:"get",url:this.url1+"/admin/channel/getChannelNameList.hn"}).then(function(e){t.channelList=e.data.channel_array,t.channelList2=e.data.channel_array,t.channelList3=e.data.channel_array,t.channelList4=e.data.channel_array,t.channelList5=e.data.channel_array,t.channelList6=e.data.channel_array,t.channelList7=e.data.channel_array,t.channelList8=e.data.channel_array,t.channelList9=e.data.channel_array}).catch(function(t){console.log(t)})},timeFormat2:function(t){var e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1;s=s<10?"0"+s:s;var i=e.getDate();i=i<10?"0"+i:i;var n=e.getHours();n=n<10?"0"+n:n;var l=e.getMinutes();l=l<10?"0"+l:l;var r=e.getSeconds();return a+"-"+s+"-"+i+" "+n+":"+l+":"+(r=r<10?"0"+r:r)},timeFormat1:function(t){var e=t.getFullYear(),a=t.getMonth()+1;a<10&&(a="0"+a);var s=t.getDate();s<10&&(s="0"+s);var i=t.getHours();i<10&&(i="0"+i);var n=t.getMinutes();n<10&&(n="0"+n);var l=t.getSeconds();return l<10&&(l="0"+l),e+"-"+a+"-"+s+" "+i+":"+n+":"+l},getEastSampleNumInfo:function(){var t=this;this.xData6=[],this.yData6=[],void 0!=this.searchObj.sample_detail_starttime&&"string"!=typeof this.searchObj.sample_detail_starttime&&(this.searchObj.sample_detail_starttime=this.timeFormat1(this.searchObj.sample_detail_starttime)),void 0!=this.searchObj.sample_detail_endtime&&"string"!=typeof this.searchObj.sample_detail_endtime&&(this.searchObj.sample_detail_endtime=this.timeFormat2(this.searchObj.sample_detail_endtime)),l()({method:"get",url:this.url1+"/warning/getEastSampleNumInfo.hn",params:{}}).then(function(e){e.data.sample_array.forEach(function(e){t.xData6.push(e.channel_name),t.yData6.push(e.case_num)}),t.initEcharts6()}).catch(function(t){console.log(t)})},getSampleChannelDetailInfo:function(){var t=this;this.xData5=[],this.yData5=[],this.taskData5=[],this.allData5=[],void 0!=this.searchObj.sample_detail_starttime&&"string"!=typeof this.searchObj.sample_detail_starttime&&(this.searchObj.sample_detail_starttime=this.timeFormat1(this.searchObj.sample_detail_starttime)),void 0!=this.searchObj.sample_detail_endtime&&"string"!=typeof this.searchObj.sample_detail_endtime&&(this.searchObj.sample_detail_endtime=this.timeFormat2(this.searchObj.sample_detail_endtime)),l()({method:"get",url:this.url1+"/warning/getSampleChannelDetailInfo.hn",params:{channel_id:this.searchObj.channel_id2,sample_source:this.searchObj.sample_source3,company_serial:this.searchObj.company_serial2,start_time:this.searchObj.sample_detail_starttime,end_time:this.searchObj.sample_detail_endtime}}).then(function(e){e.data.result1.forEach(function(e){t.xData5.push(e.channel_name),t.allData5.push(e.sample_sum1),t.taskData5.push(e.sample_sum2),t.yData5.push(e.sample_sum3)}),t.initEcharts5()}).catch(function(t){console.log(t)})},getSampleChannelInfo:function(){var t=this;this.yData4=[],this.taskData4=[],this.allData4=[],l()({method:"get",url:this.url1+"/warning/getSampleChannelInfo.hn",params:{channel_id:this.searchObj.channel_id,sample_source:this.searchObj.sample_source,company_serial:this.searchObj.company_serial2,start_time:this.searchObj.sample_line_forest_time}}).then(function(e){e.data.result1.forEach(function(e){t.yData4.push(e.sample_sum)}),e.data.result2.forEach(function(e){t.taskData4.push(e.sample_sum)}),e.data.result3.forEach(function(e){t.allData4.push(e.sample_sum)}),t.initEcharts4()}).catch(function(t){console.log(t)})},getSampleTrendInfo:function(){var t=this;l()({method:"get",url:this.url1+"/warning/getSampleTrendInfo.hn",params:{channel_id:this.searchObj.channel_id,sample_source:this.searchObj.sample_source,company_serial:this.searchObj.company_serial2,start_time:this.searchObj.sample_line_forest_time}}).then(function(e){e.data.result1.forEach(function(e){t.yData3.push(e.sample_sum)}),e.data.result2.forEach(function(e){t.taskData3.push(e.sample_sum)}),e.data.result3.forEach(function(e){t.allData.push(e.sample_sum)}),t.initEcharts3()}).catch(function(t){console.log(t)})},getAllSampleInfo:function(){var t=this;this.yData2=[],this.taskData2=[],void 0!=this.searchObj.sample_line_forest_time&&"string"!=typeof this.searchObj.sample_line_forest_time&&(this.searchObj.sample_line_forest_time=this.timeFormat1(this.searchObj.sample_line_forest_time)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getAllSampleInfo.hn",params:{page:this.current,limit:this.limit,channel_id:this.searchObj.channel_id,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial2,start_time:this.searchObj.sample_line_forest_time}}).then(function(e){for(var a=0;a<e.data.num.length;a++)t.yData2.push(e.data.num[a]);for(var s=0;s<e.data.tnum.length;s++)t.taskData2.push(e.data.tnum[s]);t.initEcharts2()}).catch(function(t){console.log(t)})},getReceiveSampleLineInfo:function(){var t=this;this.yData=[],this.taskData=[],void 0!=this.searchObj.sample_line_starttime&&(this.searchObj.sample_line_starttime=this.timeFormat1(this.searchObj.sample_line_starttime)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getReceiveSampleLineInfo.hn",params:{page:this.current,limit:this.limit,channel_id:this.searchObj.channel_id,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_line_starttime}}).then(function(e){console.log("-------------------------------------------------****************"+t.taskData),e.data.result1.forEach(function(e){t.taskData.push(e.receive_yes_sum)}),console.log("****************-------------------------------------------------"+t.taskData),e.data.result2.forEach(function(e){t.yData.push(e.receive_no_sum)}),t.initEcharts()}).catch(function(t){console.log(t)})},getReceiveTotalInfo:function(){var t=this;l()({method:"get",url:this.url1+"/warning/getReceiveTotalInfo.hn",params:{}}).then(function(e){t.expectReceiveTotal=e.data.expectReceiveTotal,t.alreadyReceiveTotal=e.data.alreadyReceiveTotal,t.expectSampleTotal=e.data.expectSampleTotal,t.alreadySampleTotal=e.data.alreadySampleTotal,console.log(t.list+"===========================")}).catch(function(t){console.log(t)})},getTotalSampleCount:function(){var t=this;void 0!=this.searchObj.sample_line_starttime&&"string"!=typeof this.searchObj.sample_line_starttime&&(this.searchObj.sample_line_starttime=this.timeFormat1(this.searchObj.sample_line_starttime)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getTotalSampleCount.hn",params:{page:this.current,limit:this.limit,channel_id:this.searchObj.channel_id,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_line_starttime}}).then(function(e){t.list=e.data.result_array1,console.log(t.list+"===========================")}).catch(function(t){console.log(t)})},getExceptionSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime1&&"string"!=typeof this.searchObj.sample_starttime1&&(this.searchObj.sample_starttime1=this.timeFormat1(this.searchObj.sample_starttime1)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getDeficiencySampleInfo.hn",params:{page:this.current,limit:this.limit,channel_id:this.searchObj.channel_id,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_starttime1}}).then(function(e){t.exception_data=e.data.result,t.exception_total=e.data.exception_total}).catch(function(t){console.log(t)})},reflushCondition:function(){this.searchObj.channel_id2="",this.searchObj.sample_id=""},getOutTimeSendSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime2&&"string"!=typeof this.searchObj.sample_starttime2&&(this.searchObj.sample_starttime2=this.timeFormat1(this.searchObj.sample_starttime2)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getOutTimeSendSampleInfo.hn",params:{page:this.current,limit:this.limit,sample_source:this.searchObj.sample_source,channel_id:this.searchObj.channel_id2,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_starttime2}}).then(function(e){t.out_time_send_sample_data=e.data.out_time_send_sample_result,t.out_time_send_sample_total=e.data.out_time_send_sample_total}).catch(function(t){console.log(t)})},getOutTimeReceiveSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime3&&"string"!=typeof this.searchObj.sample_starttime3&&(this.searchObj.sample_starttime3=this.timeFormat1(this.searchObj.sample_starttime3)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getOutTimeReceiveSampleInfo.hn",params:{page:this.current,limit:this.limit,channel_id:this.searchObj.channel_id2,sample_id:this.searchObj.sample_id,sample_source:this.searchObj.sample_source,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_starttime3}}).then(function(e){t.out_time_receive_sample_data=e.data.out_time_receive_sample_result,t.out_time_receive_sample_total=e.data.out_time_receive_sample_total}).catch(function(t){console.log(t)})},getOutTimeManageSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime4&&"string"!=typeof this.searchObj.sample_starttime4&&(this.searchObj.sample_starttime4=this.timeFormat1(this.searchObj.sample_starttime4)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getOutTimeManageSampleInfo.hn",params:{page:this.current,limit:this.limit,channel_id:this.searchObj.channel_id2,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_starttime4}}).then(function(e){t.out_time_manage_sample_data=e.data.out_time_manage_sample_result,t.out_time_manage_sample_total=e.data.out_time_manage_sample_total}).catch(function(t){console.log(t)})},getRepeatTestSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime5&&"string"!=typeof this.searchObj.sample_starttime5&&(this.searchObj.sample_starttime5=this.timeFormat1(this.searchObj.sample_starttime5)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:"http://localhost:8070/lislab_war_exploded/warning/getRepeatTestSampleInfo.hn",params:{page:this.current,limit:this.limit,channel_id:this.searchObj.channel_id2,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial3,start_time:this.searchObj.sample_starttime5}}).then(function(e){t.repeat_test_manage_sample_data=e.data.repeat_test_manage_sample_result,t.repeat_test_sample_total=e.data.repeat_test_sample_total}).catch(function(t){console.log(t)})},getOutTimeTestSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime6&&"string"!=typeof this.searchObj.sample_starttime6&&(this.searchObj.sample_starttime6=this.timeFormat1(this.searchObj.sample_starttime6)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getOutTimeTestSampleInfo.hn",params:{page:this.current,limit:this.limit,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_starttime6}}).then(function(e){t.out_time_test_sample_data=e.data.out_time_test_sample_result,t.out_time_test_sample_total=e.data.out_time_test_sample_total}).catch(function(t){console.log(t)})},getOutTimeReportSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime7&&"string"!=typeof this.searchObj.sample_starttime7&&(this.searchObj.sample_starttime7=this.timeFormat1(this.searchObj.sample_starttime7)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getOutTimeReportSampleInfo.hn",params:{page:this.current,limit:this.limit,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_starttime7}}).then(function(e){t.out_time_report_sample_data=e.data.out_time_report_sample_result,t.out_time_report_sample_total=e.data.out_time_report_sample_total}).catch(function(t){console.log(t)})},getOutTimeNotReportSampleInfo:function(){var t=this;void 0!=this.searchObj.sample_starttime8&&"string"!=typeof this.searchObj.sample_starttime8&&(this.searchObj.sample_starttime8=this.timeFormat1(this.searchObj.sample_starttime8)),console.log(this.multipleSelection+"------------------------------------"),l()({method:"get",url:this.url1+"/warning/getOutTimeNotReportSampleInfo.hn",params:{page:this.current,limit:this.limit,sample_id:this.searchObj.sample_id,company_serial:this.searchObj.company_serial,start_time:this.searchObj.sample_starttime8}}).then(function(e){t.out_time_report_sample_data=e.data.out_time_report_sample_result,t.out_time_not_report_sample_total=e.data.out_time_not_report_sample_total}).catch(function(t){console.log(t)})},resetData:function(){this.searchObj.companySerial=null,this.searchObj.lislabStatus=null,this.searchObj.dutyPersonName=null,this.getSampleListInfo(1)}},"handleSelectionChange",function(t){this.multipleSelection=t})},m=a("KHd+"),h=Object(m.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v(" "),a("h2",{staticStyle:{"margin-left":"5%"}},[t._v("实验室检测能力预测预警")]),t._v(" "),a("br"),t._v(" "),a("div",{staticStyle:{display:"block"}},[a("el-form",{ref:"searchObj",staticClass:"demo-form-inline",staticStyle:{"margin-left":"5%"},attrs:{inline:!0,model:t.searchObj}},[a("el-form-item",{attrs:{label:"时间范围",prop:"carNum"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请输入开始时间",format:"yyyy-MM-dd"},on:{change:function(e){t.getAllSampleInfo()}},model:{value:t.searchObj.sample_line_forest_time,callback:function(e){t.$set(t.searchObj,"sample_line_forest_time",e)},expression:"searchObj.sample_line_forest_time"}})],1)]),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"5%"},attrs:{label:"实验室",prop:"carNum"}},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"全部"},on:{change:function(e){t.getAllSampleInfo()}},model:{value:t.searchObj.company_serial2,callback:function(e){t.$set(t.searchObj,"company_serial2",e)},expression:"searchObj.company_serial2"}},t._l(t.lislab,function(t){return a("el-option",{key:t,attrs:{label:t.label,value:t.value}})}))],1)],1)],1),t._v(" "),a("el-div",{staticClass:"echart2",style:t.myChartStyle2,attrs:{id:"mychart2"}})],1)},[],!1,null,null,null);h.options.__file="sampleForecast.vue";e.default=h.exports},R7wM:function(t,e,a){"use strict";var s=a("t3Un");e.a={getSampleListInfo:function(t,e,a){return Object(s.a)({url:"/admin/classes-sample-info/showSampleListInfo/"+t+"/"+e,method:"post",data:a})},getList:function(t,e,a){return Object(s.a)({url:"/admin/classes-car-info/showClassesCarInfo/"+t+"/"+e,method:"post",data:a})},getCarById:function(t){return Object(s.a)({url:"/admin/classes-car-info/getCarById/"+t,method:"post"})},saveCar:function(t){return Object(s.a)({url:"/admin/classes-car-info/saveCar",method:"post",data:t})},updateCar:function(t){return Object(s.a)({url:"/admin/classes-car-info/updateCar",method:"post",data:t})},deleteCar:function(t){return Object(s.a)({url:"/admin/classes-car-info/deleteCar/"+t,method:"post"})},getAllCar:function(){return Object(s.a)({url:"/admin/classes-car-info/getAllCar",method:"get"})},getCarByCarNum:function(t){return Object(s.a)({url:"/admin/classes-car-info/getCarByCarNum/"+t,method:"post"})},getAllPerson:function(){return Object(s.a)({url:"/admin/classes-car-info/getAllPerson",method:"get"})},getPhoneByName:function(t){return Object(s.a)({url:"/admin/classes-car-info/getPhoneByName",method:"post",data:t})}}},tfpJ:function(t,e,a){"use strict";var s=a("UeDT"),i=a.n(s),n=a("vDqi"),l=a.n(n),r={data:function(){return{nowLat:39.867427,nowLng:116.377048,map:null,url1:"https://lisalarm.coyotebio-lab.com/lislab"}},created:function(){this.mapInit(this.nowLng,this.nowLat,12.5)},methods:{mapInit:function(t,e,a){var s=this;l()({method:"get",url:this.url1+"/warning/getSampleChannelMapDetailInfo.hn",params:{}}).then(function(n){var l=s;l.map=new i.a.Map(document.getElementById("container"),{center:new i.a.LatLng(e,t),zoom:a});for(var r=new i.a.MultiMarker({map:l.map,styles:{myStyle:new i.a.MarkerStyle({width:21,height:21,src:"coyote_logo.png",offset:{x:0,y:-20},anchor:{x:16,y:32}})}}),o=0;o<n.data.result1.length;o++)r.add([{id:n.data.result1[o].channel_id,styleId:"myStyle",position:new i.a.LatLng(n.data.result1[o].latitude,n.data.result1[o].longitude),content:n.data.result1[o].channel_name,properties:{title:n.data.result1[o].channel_name,sample_sum1:n.data.result1[o].sample_sum1,sample_sum2:n.data.result1[o].sample_sum2,sample_sum3:n.data.result1[o].sample_sum3,latitude:n.data.result1[o].latitude,longitude:n.data.result1[o].longitude,site_description:n.data.result1[o].site_description}}]);r.on("click",function(t){var e=new i.a.InfoWindow({map:l.map,position:new i.a.LatLng(t.geometry.properties.latitude,t.geometry.properties.longitude),offset:{x:0,y:-32}});e.close(),e.open(),e.setContent(t.geometry.properties.site_description+"<br>"+t.geometry.properties.title+"  采样总数："+t.geometry.properties.sample_sum1+" 已收样："+t.geometry.properties.sample_sum2+" 未收样："+t.geometry.properties.sample_sum3)})}).catch(function(t){console.log(t)}),this.$nextTick(function(){})}}},o=a("KHd+"),m=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"container"}})},[],!1,null,null,null);m.options.__file="tencent-map.vue";e.a=m.exports}}]);