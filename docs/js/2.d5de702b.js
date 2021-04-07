(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0565":function(e,t,s){"use strict";s("16f0")},"16f0":function(e,t,s){},"8b24":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"page"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-xs-12 main-column input-column"},[s("div",{staticClass:"column-title"},[e._v("Step 1. Input JSON")]),s("div",{staticClass:"input-textarea-container"},[s("q-input",{staticClass:"input-textarea",attrs:{filled:"",type:"textarea",rows:"40"},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}})],1),s("q-btn",{staticStyle:{"margin-top":"20px",width:"100%"},attrs:{color:"primary",label:"Generate schema","icon-right":"send"},on:{click:e.jsonInputDoneClicked}})],1),s("div",{staticClass:"col-md-4 col-xs-12 main-column processing-column"},[s("div",{staticClass:"column-title"},[e._v("Step 2. Preview schema pseudocode")]),s("div",{staticClass:"preview-schema-container"},[s("code",{domProps:{innerHTML:e._s(e.schemaPreviewText)}})]),e.isSchemaPreviewSuccessful?s("q-select",{staticStyle:{"margin-top":"20px",width:"100%"},attrs:{outlined:"",options:e.targetTypes,label:"Select target type"},model:{value:e.target.type,callback:function(t){e.$set(e.target,"type",t)},expression:"target.type"}}):e._e(),e.target.type&&"java-pojo"==e.target.type.value?s("div",[s("q-btn",{staticStyle:{"margin-top":"20px",width:"100%"},attrs:{color:"primary",label:"Generate Java POJO","icon-right":"send"},on:{click:e.generateJavaPojoClicked}})],1):e._e()],1),s("div",{staticClass:"col-md-4 col-xs-12 main-column output-column"},[s("div",{staticClass:"column-title"},[e._v("Step 3. Enjoy generated code")]),s("div",{staticClass:"output-container"},e._l(e.generatedOutputFileList,(function(t){return s("div",{key:t.name,staticClass:"output-box"},[s("div",{staticClass:"output-box-title"},[e._v(e._s(t.name))]),s("div",[s("code",[s("pre",[e._v(e._s(t.content))])])])])})),0)])])])},l=[];s("ddb0");class i{constructor(e={onStringAndNumberCollision:"prefer-string",onNullCollision:"allow"}){this.opt=e,this.schema={}}_getType(e){return null===e?"null":"object"===typeof e?Array.isArray(e)?"array":"object":typeof e}_throwTypeMismatch(e,t,s){var a=`Type mismatch in: ${e}. Expected ${t}, received ${s}.`;throw new Error(a)}_process(e,t,s){let a=this._getType(e);if(t.type&&t.type!==a){if("allow"===this.opt.onNullCollision&&"null"===a)return void(t.allowNull=!0);if(("string"===a&&"number"===t.type||"number"===a&&"string"===t.type)&&"prefer-string"===this.opt.onStringAndNumberCollision)return t.type="string",void(t.coerce=!0);"allow"===this.opt.onNullCollision&&"null"===t.type?t.allowNull=!0:this._throwTypeMismatch(s,t.type,a)}if(t.type=a,"array"===a){t.childKey||(t.childKey=null);for(let a=0;a<e.length;a+=1){let l=e[a];t.childKey||(t.childKey={}),this._process(l,t.childKey,`${s}[${a}]`)}}else if("object"===a){t.keys||(t.keys={});let a=Object.keys(e);for(let l of a){let a=e[l];t.keys[l]||(t.keys[l]={}),this._process(a,t.keys[l],`${s}.${l}`)}}}process(e){return e=JSON.parse(JSON.stringify(e)),this._process(e,this.schema,"~"),this.schema}}s("5319");function r(e){return`${e}`.replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w+)/,"g"),((e,t,s)=>`${t.toUpperCase()+s.toLowerCase()}`)).replace(new RegExp(/\s/,"g"),"").replace(new RegExp(/\w/),(e=>e.toUpperCase()))}class n{constructor(){this.pojos={}}_makePojo(e,t){var s=this.pojos[t]={name:t,fields:{},isArray:"array"===e.type};if("array"===e.type&&(e=e.childKey),console.log(e),"object"!==e.type)throw new Error("Unforseen event: Expected Object.");for(let a in e.keys){let t=e.keys[a];if("null"!==t.type&&("array"!==t.type||null!==t.childKey&&"null"!==t.childKey.type))if(s.fields[a]={name:a,javaType:null},"object"===t.type){let e=r(a)+"Object";this._makePojo(t,e),s.fields[a].javaType=e}else if("array"===t.type)if(t=t.childKey,s.fields[a].isArray=!0,"object"===t.type){let e=r(a)+"Object";this._makePojo(t,e),s.fields[a].javaType=e}else if("array"===t.type);else switch(t.type){case"string":s.fields[a].javaType="String";break;case"number":s.fields[a].javaType="double";break;case"boolean":s.fields[a].javaType="boolean";break;default:throw new Error("Unforseen event: Expected Object.")}else switch(t.type){case"string":s.fields[a].javaType="String";break;case"number":s.fields[a].javaType="double";break;case"boolean":s.fields[a].javaType="boolean";break;default:throw new Error("Unforseen event: Expected Object.")}}}_generatePojoContent(e){const t="    ";let s=`public class ${e.name} {\n`;for(let a in e.fields){let l=e.fields[a];console.log(l),s+=`${t}private ${l.javaType}${l.isArray?"[]":""} ${l.name};\n`}s+="}\n",e.content=s}convert(e){e=JSON.parse(JSON.stringify(e)),this._makePojo(e,"RootObject");for(let s in this.pojos)this._generatePojoContent(this.pojos[s]);let t=Object.keys(this.pojos);return t.map((e=>this.pojos[e]))}}const o=[{userId:1,name:{first:"Abdur",last:"Rahim"},country:"Bangladesh",age:23,favoriteNumbers:[1,4,1],lastLogin:null,articles:[{title:"Hello",body:"World"},{title:"Hello 2",body:"World 1"}],test:{a:1,b:1,C:1,D:1,E:1,f:1,g:1,H:1,I:1,J:1,K:1,L:1,M:1,N:1,O:1}},{userId:2,name:{first:"Abd",middle:"Bin",last:"Karim"},country:"Saudi Arabia",age:43,favoriteNumbers:[333],lastLogin:"2021-04-06T09:32:07.911Z",articles:[{title:"Art",body:"of war",isPrivate:!0}]},{userId:3,name:{first:"John",last:null},country:"United States",age:34,favoriteNumbers:[32,4343,34],articles:[]},{userId:4,name:null,country:"Canada",isUnderage:!0,age:"5",favoriteNumbers:[9]}];var c={name:"PageIndex",data(){return{isSchemaPreviewSuccessful:!1,targetTypes:[{label:"Java POJO",value:"java-pojo"},{label:"SQL Tables",value:"sql-tables"}],target:{type:null},inputText:JSON.stringify(o,null,2),schema:null,schemaPreviewText:"",generatedOutputFileList:[],showWelcomeDialog:!0}},methods:{generateJavaPojoClicked(){let e=new n,t=e.convert(this.schema);console.log({generated:t}),this.generatedOutputFileList=t},prettyPrintSchemaAsHtml(e,t="&lt;root&gt;",s=""){let a="",l=e=>`<span class="st-name${0==e.indexOf("&lt;")?" st-name-sp":""}">${e}</span>`,i=e=>`<span class="st-type">${e}</span>`;if(a+=`${s}${l(t)}: ${i(e.type)}\n        ${e.allowNull?" (nullable)":""}${e.coerce?" (coerce)":""}<br>`,"array"===e.type&&e.childKey)a+=this.prettyPrintSchemaAsHtml(e.childKey,"&lt;array-item&gt;",s+'<span class="st-div"></span>');else if("object"===e.type)for(let r in e.keys)a+=this.prettyPrintSchemaAsHtml(e.keys[r],r,s+'<span class="st-div"></span>');return a},jsonInputDoneClicked(){this.isSchemaPreviewSuccessful=!1;try{let e=JSON.parse(this.inputText),t=new i,s=t.process(e);this.schema=s,console.log("Schema",s);let a=this.prettyPrintSchemaAsHtml(s);this.schemaPreviewText=a,this.isSchemaPreviewSuccessful=!0}catch(e){console.error(e),this.schemaPreviewText=`<span style="color: red;">${e.message}</span>`}}}},p=c,u=(s("0565"),s("2877")),d=s("9989"),y=s("27f9"),h=s("9c40"),m=s("ddd8"),f=s("eebe"),g=s.n(f),v=Object(u["a"])(p,a,l,!1,null,null,null);t["default"]=v.exports;g()(v,"components",{QPage:d["a"],QInput:y["a"],QBtn:h["a"],QSelect:m["a"]})}}]);