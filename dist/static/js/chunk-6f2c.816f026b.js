(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6f2c"],{DdA5:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{url1:"https://lisalarm.coyotebio-lab.com/lislab",rules:{personName:[{required:!0,message:"请输入人员姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],personPhone:[{required:!0,message:"请输入人员手机号",trigger:"blur"},{min:11,max:11,message:"请输入11位手机号",trigger:"blur"}],fileMing:[{required:!0,message:"请输入资质文件名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],personType:[{required:!0,message:"请选择人员类型",trigger:"change"}],file:[{required:!1,message:"请选择文件",trigger:"blur"}]},form:{position:""},fileArr:[],PersonInformation:{personName:"",fileMing:"",personType:"",file:""},type:[{id:1,type:"护士"},{id:2,type:"检验员"}]}},created:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!!"),!1;t.submitUpload()})},submitUpload:function(){this.$refs.upload.submit()},uploadUrl:function(){return"http://lisalarm.coyotebio-lab.com:9000/admin/smartLab/uploadPerson.hn?personName="+this.PersonInformation.personName+"&personPhone="+this.PersonInformation.personPhone+"&fileName="+this.PersonInformation.fileMing+"&personType="+this.PersonInformation.personType},beforeUpload:function(e){var t=e.name.substring(e.name.lastIndexOf(".")+1);if(e.size/1024/1024<10||(this.$message.error("上传文件大小不能超过 10MB!"),console.log("上传文件大小不能超过 10MB!")),-1===["pdf","jpg","jpeg","png"].indexOf(t))return this.$msg("上传文件只能是 pdf、jpg、jpeg、png","error"),!1},imgPreview:function(e){this.fileArr=[],this.fileArr.push(e),this.form.position="",console.log(e),this.form.position=e.name;var t=e.name;console.log("打印file大小"),console.log(e.size),e.size/1024/1024<10||(this.$message.error("上传文件大小不能超过 10MB!"),console.log("上传文件大小不能超过 10MB!")),/(.jpg|.jpeg|.gif|.png|.pdf)$/.test(t.toLowerCase())?(this.Lab.upLoadImgUrl=URL.createObjectURL(e.raw),this.Lab.pdfUrl=this.getPdfUrl(e),console.log("========>",this.upLoadImgUrl),console.log("--------\x3e",this.pdfUrl)):this.$message.error("请选择图片或pdf文件")},upSuccess:function(e){this.$message({message:"上传成功",type:"success"}),this.$router.push({path:"/smartLab/personInformation"})},upError:function(e){this.$message({message:"上传失败",type:"error"})},getPdfUrl:function(e){var t=this,o=window.URL.createObjectURL(e.raw);return pdf.createLoadingTask(o).promise.then(function(e){t.numPages=e.numPages,console.log("numPages",t.numPages)}).catch(function(e){console.error("pdf 加载失败",e)}),o}}},n=(o("odxs"),o("KHd+")),s=Object(n.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-form",{ref:"PersonInformation",attrs:{"label-width":"120px",model:e.PersonInformation,enctype:"multipart/form-data",rules:e.rules}},[o("el-form-item",{staticStyle:{width:"auto","padding-top":"20px"},attrs:{label:"人员姓名",prop:"personName"}},[o("el-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入人员"},model:{value:e.PersonInformation.personName,callback:function(t){e.$set(e.PersonInformation,"personName",t)},expression:"PersonInformation.personName"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"auto","padding-top":"20px"},attrs:{label:"人员手机号",prop:"personPhone"}},[o("el-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入人员手机号"},model:{value:e.PersonInformation.personPhone,callback:function(t){e.$set(e.PersonInformation,"personPhone",t)},expression:"PersonInformation.personPhone"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"auto","padding-top":"20px"},attrs:{label:"资质文件名",prop:"fileMing"}},[o("el-input",{staticStyle:{width:"30%"},attrs:{placeholder:"请输入资质名称"},model:{value:e.PersonInformation.fileMing,callback:function(t){e.$set(e.PersonInformation,"fileMing",t)},expression:"PersonInformation.fileMing"}})],1),e._v(" "),o("el-form-item",{staticStyle:{"padding-top":"20px"},attrs:{label:"人员类型",prop:"personType"}},[o("el-select",{attrs:{placeholder:"请选择人员类型"},model:{value:e.PersonInformation.personType,callback:function(t){e.$set(e.PersonInformation,"personType",t)},expression:"PersonInformation.personType"}},e._l(e.type,function(e){return o("el-option",{key:e.id,attrs:{label:e.type,value:e.type}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"auto","padding-top":"20px"},attrs:{label:"选择文件",prop:"file"}},[o("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{width:"30%"},attrs:{accept:".pdf, .jpg, .jpeg, .png",action:e.uploadUrl(),"file-list":e.fileArr,data:e.uploadData,"show-file-list":!1,"auto-upload":!1,"before-upload":e.beforeUpload,"on-success":e.upSuccess,"on-error":e.upError,"on-change":e.imgPreview,name:"file",showFileList:!0}},[o("el-button",{staticClass:"upload-input",staticStyle:{width:"200px"},attrs:{type:"pramary"}},[e._v("\n          点击选择上传文件\n        ")])],1)],1),e._v(" "),o("el-form-item",[o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(t){e.submitForm("PersonInformation")}}},[e._v("保存")]),e._v(" "),o("router-link",{attrs:{to:"/smartLab/personInformation"}},[o("el-button",{staticStyle:{"margin-left":"15px"}},[e._v("取消")])],1)],1)],1)],1)},[],!1,null,null,null);s.options.__file="personInformationAdd.vue";t.default=s.exports},odxs:function(e,t,o){"use strict";var r=o("x8+3");o.n(r).a},"x8+3":function(e,t,o){}}]);