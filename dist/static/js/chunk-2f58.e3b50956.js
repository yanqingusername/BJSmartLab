(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2f58"],{KTTK:function(e,t,a){"use strict";var l=a("t3Un");t.a={getChannelNameList:function(){return Object(l.a)({url:"http://localhost:8070/lis_appointment_war_exploded/admin/channel/getChannelNameList.hn",method:"get"})},getAllCity:function(){return Object(l.a)({url:"/admin/common/getAllCity",method:"post"})},getAllArea:function(){return Object(l.a)({url:"/admin/common/getAllArea",method:"get"})},getAllChannel:function(e){return Object(l.a)({url:"/admin/common/getAllChannel/"+e,method:"post"})},getPhone:function(e){return Object(l.a)({url:"/admin/common/getPhone",method:"get",params:{samplingLeader:e}})},getAllLab:function(e){return Object(l.a)({url:"/admin/common/getAllLab/"+e,method:"get"})},getAllLeader:function(){return Object(l.a)({url:"/admin/common/getAllLeader",method:"get"})},getAllpaytype:function(){return Object(l.a)({url:"/admin/common/getAllPaytype",method:"get"})},getAllsource:function(){return Object(l.a)({url:"/admin/common/getAllSource",method:"get"})}}},Qxxd:function(e,t,a){"use strict";a.r(t);var l=a("YEIV"),i=a.n(l),s=a("R7wM"),r=(a("KTTK"),a("vDqi")),n=a.n(r),c={data:function(){var e;return e={src:"https://xmr.coyotebio-lab.com:8443/data/newLislab/%E6%A0%B7%E6%9C%AC%E4%B8%AD%E5%BF%83.pdf",box_num:"",sample_status:[{value:"1",label:"已接收"},{value:"2",label:"正在检测"},{value:"3",label:"检测结果确认"},{value:"4",label:"已出报告"}],value:"",lislab:[{value:"YiJianSuo",label:"医检所实验室"},{value:"BeiJingXiZhan",label:"北京西站方舱实验室"},{value:"BeiJingNanZhan",label:"北京南站方舱实验室"},{value:"ZhongRi",label:"中日友好医院"},{value:"BoRen",label:"博仁方舱实验室"}]},i()(e,"value",""),i()(e,"sample",[]),i()(e,"channelList",[]),i()(e,"areaList",[]),i()(e,"current",1),i()(e,"limit",7),i()(e,"searchObj",{}),i()(e,"list",[]),i()(e,"total",0),i()(e,"multipleSelection",[]),i()(e,"sample_id",""),i()(e,"url1","https://lisalarm.coyotebio-lab.com/lislab"),e},created:function(){this.getSampleListInfo(),this.getChannel(),this.getAreaInfo()},methods:i()({getBatchNumber2:function(){this.sample_id=this.multipleSelection[0].sample_id,this.$router.push({path:"/sample/select_detail",query:{sample_id:this.sample_id}})},getBatchNumber:function(){this.$router.push({path:"/sample/pdf1"})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},resetForm:function(e){this.$refs[e].resetFields(),this.getSampleListInfo()},getChannel:function(){var e=this;n()({method:"get",url:this.url1+"/admin/channel/getChannelNameList.hn"}).then(function(t){e.channelList=t.data.channel_array}).catch(function(e){console.log(e)})},getAreaInfo:function(){var e=this;n()({method:"get",url:this.url1+"/admin/channel/getAreaNameList.hn"}).then(function(t){e.areaList=t.data.area_array}).catch(function(e){console.log(e)})},timeFormat1:function(e){var t=e.getFullYear(),a=e.getMonth()+1;a<10&&(a="0"+a);var l=e.getDate();l<10&&(l="0"+l);var i=e.getHours();i<10&&(i="0"+i);var s=e.getMinutes();s<10&&(s="0"+s);var r=e.getSeconds();return r<10&&(r="0"+r),t+"-"+a+"-"+l+" "+i+":"+s+":"+r},getSampleListInfo:function(e){var t=this;this.current=e,void 0!=this.searchObj.receive_starttime&&"string"!=typeof this.searchObj.receive_starttime&&(this.searchObj.receive_starttime=this.timeFormat1(this.searchObj.receive_starttime)),void 0!=this.searchObj.receive_endtime&&"string"!=typeof this.searchObj.receive_endtime&&(this.searchObj.receive_endtime=this.timeFormat1(this.searchObj.receive_endtime)),void 0!=this.searchObj.lislab_starttime&&"string"!=typeof this.searchObj.lislab_starttime&&(this.searchObj.lislab_starttime=this.timeFormat1(this.searchObj.lislab_starttime)),void 0!=this.searchObj.lislab_endtime&&"string"!=typeof this.searchObj.lislab_endtime&&(this.searchObj.lislab_endtime=this.timeFormat1(this.searchObj.lislab_endtime)),console.log(this.multipleSelection+"------------------------------------"),n()({method:"get",url:this.url1+"/sampleCenter/getSampleListInfo.hn",params:{page:this.current,limit:this.limit,box_num:this.searchObj.box_num,channel_id:this.searchObj.channel_id,sample_status:this.searchObj.sample_status,company_serial:this.searchObj.company_serial,sample_id:this.searchObj.sample_id,lislab_starttime:this.searchObj.lislab_starttime,lislab_endtime:this.searchObj.lislab_endtime,receive_starttime:this.searchObj.receive_starttime,receive_endtime:this.searchObj.receive_endtime}}).then(function(e){t.list=e.data.sample_array,t.total=e.data.total}).catch(function(e){console.log(e)})},exportSampleData:function(){void 0!=this.searchObj.receive_starttime&&""!=this.searchObj.receive_starttime&&(this.searchObj.receive_starttime=this.timeFormat1(this.searchObj.receive_starttime)),void 0!=this.searchObj.receive_endtime&&""!=this.searchObj.receive_endtime&&(this.searchObj.receive_endtime=this.timeFormat1(this.searchObj.receive_endtime)),void 0!=this.searchObj.lislab_starttime&&""!=this.searchObj.lislab_starttime&&(this.searchObj.lislab_starttime=this.timeFormat1(this.searchObj.lislab_starttime)),void 0!=this.searchObj.lislab_endtime&&""!=this.searchObj.lislab_endtime&&(this.searchObj.lislab_endtime=this.timeFormat1(this.searchObj.lislab_endtime)),console.log(this.multipleSelection+"------------------------------------"),void 0==this.searchObj.box_num&&(this.searchObj.box_num=""),void 0==this.searchObj.channel_id&&(this.searchObj.channel_id=""),void 0==this.searchObj.sample_id&&(this.searchObj.sample_id=""),void 0==this.searchObj.lislab_starttime&&(this.searchObj.lislab_starttime=""),void 0==this.searchObj.lislab_endtime&&(this.searchObj.lislab_endtime=""),void 0==this.searchObj.receive_starttime&&(this.searchObj.receive_starttime=""),void 0==this.searchObj.receive_endtime&&(this.searchObj.receive_endtime=""),void 0==this.searchObj.company_serial&&(this.searchObj.company_serial=""),void 0==this.searchObj.sample_status&&(this.searchObj.sample_status="");var e=this.url1+"/sampleCenter/exportSampleData.hn";e=e+"?box_num="+this.searchObj.box_num+"&channel_id="+this.searchObj.channel_id+"&sample_status="+this.searchObj.sample_status+"&company_serial="+this.searchObj.company_serial+"&sample_id="+this.searchObj.sample_id+"&lislab_starttime="+this.searchObj.lislab_starttime+"&lislab_endtime="+this.searchObj.lislab_endtime+"&receive_starttime="+this.searchObj.receive_starttime+"&receive_endtime="+this.searchObj.receive_endtime,window.open(e)},lockPoint:function(e,t){var a=this;s.a.lockHospSet(e,t).then(function(e){a.getSampleListInfo()})},getCompanySerial:function(){var e=this;s.a.getLabName().then(function(t){e.companySerial=t.data})},getDutyPersonName:function(){var e=this;s.a.getDutyname().then(function(t){e.dutyPersonName=t.data})},resetData:function(){this.searchObj.companySerial=null,this.searchObj.lislabStatus=null,this.searchObj.dutyPersonName=null,this.getSampleListInfo(1)}},"handleSelectionChange",function(e){this.multipleSelection=e})},o=a("KHd+"),m=Object(o.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getBatchNumber()}}},[e._v("查看样本中心说明")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-form",{ref:"searchObj",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchObj}},[a("el-form-item",{attrs:{label:"采样点",prop:"channelName"}},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"全部"},model:{value:e.searchObj.channel_id,callback:function(t){e.$set(e.searchObj,"channel_id",t)},expression:"searchObj.channel_id"}},e._l(e.channelList,function(e){return a("el-option",{key:e.channel_id,attrs:{label:e.channel_name,value:e.channel_id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"实验室",prop:"carNum"}},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"全部"},model:{value:e.searchObj.company_serial,callback:function(t){e.$set(e.searchObj,"company_serial",t)},expression:"searchObj.company_serial"}},e._l(e.lislab,function(e){return a("el-option",{key:e,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"样本状态",prop:"personPhone"}},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"全部"},model:{value:e.searchObj.sample_status,callback:function(t){e.$set(e.searchObj,"sample_status",t)},expression:"searchObj.sample_status"}},e._l(e.sample_status,function(e){return a("el-option",{key:e,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"箱码",prop:"box_num"}},[a("el-input",{staticClass:"box1",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.searchObj.box_num,callback:function(t){e.$set(e.searchObj,"box_num",t)},expression:"searchObj.box_num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"样本编号",prop:"sample_id"}},[a("el-input",{staticClass:"box1",attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.searchObj.sample_id,callback:function(t){e.$set(e.searchObj,"sample_id",t)},expression:"searchObj.sample_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"采样时间",prop:"carNum"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请输入开始采样时间"},model:{value:e.searchObj.lislab_starttime,callback:function(t){e.$set(e.searchObj,"lislab_starttime",t)},expression:"searchObj.lislab_starttime"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"至",prop:""}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请输入结束采样时间"},model:{value:e.searchObj.lislab_endtime,callback:function(t){e.$set(e.searchObj,"lislab_endtime",t)},expression:"searchObj.lislab_endtime"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"接收时间",prop:"carNum"}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请输入开始接收时间"},model:{value:e.searchObj.receive_starttime,callback:function(t){e.$set(e.searchObj,"receive_starttime",t)},expression:"searchObj.receive_starttime"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"至",prop:""}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请输入结束接收时间"},model:{value:e.searchObj.receive_endtime,callback:function(t){e.$set(e.searchObj,"receive_endtime",t)},expression:"searchObj.receive_endtime"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"地区",prop:"area_name"}},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"全部"},model:{value:e.searchObj.id,callback:function(t){e.$set(e.searchObj,"id",t)},expression:"searchObj.id"}},e._l(e.areaList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.getSampleListInfo()}}},[e._v("查询")])],1)],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.exportSampleData()}}},[e._v("导出数据")]),e._v(" "),this.multipleSelection.length<=1?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getBatchNumber2()}}},[e._v("查看实验数据")]):e._e(),e._v(" "),a("br"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",label:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sample_id",width:"120",label:"样本编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"company_serial",width:"120",label:"送检实验室"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sample_status",label:"样本状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"box_num",label:"箱码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"channel_name",label:"采样点"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sampling_time",label:"采样时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"convey_time",label:"转运时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"receive_time",label:"接收时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"test_time",label:"开始检测时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"test_result_time",label:"检测结果确认时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"report_time",label:"报告时间"}})],1),e._v(" "),a("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":e.current,"page-size":e.limit,total:e.total,layout:"total, prev, pager, next, jumper"},on:{"current-change":e.getSampleListInfo}})],1)},[],!1,null,null,null);m.options.__file="select.vue";t.default=m.exports},R7wM:function(e,t,a){"use strict";var l=a("t3Un");t.a={getSampleListInfo:function(e,t,a){return Object(l.a)({url:"/admin/classes-sample-info/showSampleListInfo/"+e+"/"+t,method:"post",data:a})},getList:function(e,t,a){return Object(l.a)({url:"/admin/classes-car-info/showClassesCarInfo/"+e+"/"+t,method:"post",data:a})},getCarById:function(e){return Object(l.a)({url:"/admin/classes-car-info/getCarById/"+e,method:"post"})},saveCar:function(e){return Object(l.a)({url:"/admin/classes-car-info/saveCar",method:"post",data:e})},updateCar:function(e){return Object(l.a)({url:"/admin/classes-car-info/updateCar",method:"post",data:e})},deleteCar:function(e){return Object(l.a)({url:"/admin/classes-car-info/deleteCar/"+e,method:"post"})},getAllCar:function(){return Object(l.a)({url:"/admin/classes-car-info/getAllCar",method:"get"})},getCarByCarNum:function(e){return Object(l.a)({url:"/admin/classes-car-info/getCarByCarNum/"+e,method:"post"})},getAllPerson:function(){return Object(l.a)({url:"/admin/classes-car-info/getAllPerson",method:"get"})},getPhoneByName:function(e){return Object(l.a)({url:"/admin/classes-car-info/getPhoneByName",method:"post",data:e})}}}}]);