(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f3df"],{"9giF":function(e,t,l){},bpsL:function(e,t,l){"use strict";l.r(t);var a=l("vDqi"),i=l.n(a),s={data:function(){return{dialogVisible:!1,fileType:[{id:1,type:"营业执照"},{id:2,type:"管理制度"},{id:3,type:"质量部"}],backUrls:[],backUrl:"",fileName:[],pages:1,pagesCount:10,searchObj:{},list:[],total:0,roleId:"",url1:"https://lisalarm.coyotebio-lab.com/lislab"}},created:function(){this.getpage(),this.getAllFileName()},methods:{showFile:function(e){var t=this;i()({method:"post",url:this.url1+"/smartLab/showLabAptitudeDetail.hn",params:{id:e}}).then(function(e){t.backUrls=e.data.data,console.log("000",t.backUrls),console.log(t.backUrls[0].fileUrl),t.backUrl=t.backUrls[0].fileUrl,t.dialogVisible=!0})},deleteLabFile:function(e){var t=this;console.log(e),i()({method:"post",url:this.url1+"/smartLab/deleteLabFile.hn",params:{id:e}}).then(function(e){console.log(e),t.getpage()})},getAllFileName:function(){var e=this;i()({method:"get",url:this.url1+"/smartLab/getAllFileName.hn",params:{labId:1}}).then(function(t){e.fileName=t.data.data})},getpage:function(){var e=this;i()({method:"post",url:this.url1+"/smartLab/showLabAptitude.hn",params:{labId:1,pages:this.pages-1,pageCount:this.pagesCount,fileName:this.searchObj.fileName,fileType:this.searchObj.fileType}}).then(function(t){e.list=t.data.root,e.total=t.data.total,console.log(t)}).catch(function(e){console.log(e)})}}},o=(l("kwG3"),l("KHd+")),n=Object(o.a)(s,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-form",{ref:"searchObj",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchObj}},[l("el-form-item",{attrs:{label:"文件名"}},[l("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择或输入文件名"},model:{value:e.searchObj.fileName,callback:function(t){e.$set(e.searchObj,"fileName",t)},expression:"searchObj.fileName"}},e._l(e.fileName,function(e){return l("el-option",{key:e.id,attrs:{label:e.fileName,value:e.fileName}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"文件类型"}},[l("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择或输入文件类型"},model:{value:e.searchObj.fileType,callback:function(t){e.$set(e.searchObj,"fileType",t)},expression:"searchObj.fileType"}},e._l(e.fileType,function(e){return l("el-option",{key:e.id,attrs:{label:e.type,value:e.type}})}))],1),e._v(" "),l("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.getpage()}}},[e._v("查询")])],1),e._v(" "),l("router-link",{attrs:{to:"/smartLab/labAptitudeAdd"}},[l("el-button",{staticStyle:{width:"100px"},attrs:{type:"success"}},[e._v("上传")])],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,stripe:""}},[l("el-table-column",{attrs:{prop:"fileName",label:"文件名称"}}),e._v(" "),l("el-table-column",{attrs:{prop:"fileType",label:"文件类型"}}),e._v(" "),l("el-table-column",{attrs:{prop:"createTime",label:"上传时间"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){e.showFile(t.row.id)}}},[e._v("查看详情")]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(l){e.deleteLabFile(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{visible:e.dialogVisible,width:"70%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-form",{staticStyle:{height:"500px"}},[l("el-form-item",[l("iframe",{attrs:{src:e.backUrl,width:"100%",height:"500px"}})])],1)],1),e._v(" "),l("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{"current-page":e.pages,"page-size":e.pagesCount,total:e.total,layout:"total, prev, pager, next, jumper"},on:{"update:currentPage":function(t){e.pages=t},"current-change":e.getpage}})],1)},[],!1,null,null,null);n.options.__file="labAptitude.vue";t.default=n.exports},kwG3:function(e,t,l){"use strict";var a=l("9giF");l.n(a).a}}]);