(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0565":function(e,t,a){"use strict";a("16f0")},"087a":function(e,t,a){"use strict";a("d8df")},"16f0":function(e,t,a){},"1f21":function(e,t,a){},"27b8":function(e,t,a){"use strict";a("77ad")},2973:function(e,t,a){"use strict";a("e5b2")},"77ad":function(e,t,a){},"8b24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"page index-page"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column col"},[a("q-tabs",{staticClass:"bg-primary text-white shadow-1 input-tabs",attrs:{"inline-label":"",align:"justify",raised:""},model:{value:e.inputTab,callback:function(t){e.inputTab=t},expression:"inputTab"}},[a("q-tab",{attrs:{name:"json",icon:"code",label:"JSON"}}),a("q-tab",{attrs:{name:"schema",icon:"preview",label:"Schema preview"}})],1),a("JsonInput",{ref:"jsonInputRef",attrs:{hidden:"json"!==e.inputTab},on:{"schema-generated":e.schemaGenerated}}),a("SchemaPreview",{ref:"schemaPreviewRef",attrs:{hidden:"schema"!==e.inputTab}})],1),a("div",{staticClass:"column col"},[a("q-tabs",{staticClass:"bg-primary text-white shadow-1 output-tabs",attrs:{"inline-label":"",align:"justify"},model:{value:e.outputTab,callback:function(t){e.outputTab=t},expression:"outputTab"}},[a("q-tab",{attrs:{name:"configuration",icon:"settings",label:"Configure output"}}),a("q-tab",{attrs:{name:"generated",icon:"code",label:"Generated code"}})],1),a("CodeOutput",{ref:"codeOutputRef",attrs:{hidden:"generated"!==e.outputTab,schema:e.schema,target:e.target,generated:e.generated}}),a("CodeGenerationConfig",{ref:"configRef",attrs:{hidden:"configuration"!==e.outputTab,schema:e.schema},on:{"config-updated":e.configUpdated}})],1)])])},n=[];const l=[{userId:1,name:{first:"Abdur",last:"Rahim"},country:"Bangladesh",age:23,favoriteNumbers:[1,4,1],lastLogin:null,articles:[{title:"Hello",body:"World"},{title:"Hello 2",body:"World 1"}]},{b:"sdsds",userId:2,name:{first:"Abd",middle:"Bin",last:"Karim"},country:"Saudi Arabia",age:43,favoriteNumbers:[333],lastLogin:"2021-04-06T09:32:07.911Z",articles:[{title:"Art",body:"of war",isPrivate:!0}]},{userId:3,name:{first:"John",last:null},country:"United States",age:34,favoriteNumbers:[32,4343,34],articles:[]},{userId:4,name:null,country:"Canada",isUnderage:!0,age:"5",favoriteNumbers:[9]}];a("ddb0"),a("5319");function r(e){return`${e}`.replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w+)/,"g"),((e,t,a)=>`${t.toUpperCase()+a.toLowerCase()}`)).replace(new RegExp(/\s/,"g"),"").replace(new RegExp(/\w/),(e=>e.toUpperCase()))}function i(e){return e=r(e),0===e.length||(e=e[0].toLowerCase()+e.substring(1)),e}function o(e){return e=i(e),e.split("").map((e=>e==e.toUpperCase()?"_"+e.toLowerCase():e)).join("")}class c{constructor(){this.pojos={}}_makePojo(e,t){var a=this.pojos[t]={name:t,fields:{},isArray:"array"===e.type};if("array"===e.type&&(e=e.childKey),"object"!==e.type)throw new Error("Unforseen event: Expected Object.");for(let s in e.keys){let t=e.keys[s];if("null"!==t.type&&("array"!==t.type||null!==t.childKey&&"null"!==t.childKey.type))if(a.fields[s]={name:s,javaType:null},"object"===t.type){let e=r(s)+"Object";this._makePojo(t,e),a.fields[s].javaType=e}else if("array"===t.type)if(t=t.childKey,a.fields[s].isArray=!0,"object"===t.type){let e=r(s)+"Object";this._makePojo(t,e),a.fields[s].javaType=e}else if("array"===t.type);else switch(t.type){case"string":a.fields[s].javaType="String";break;case"number":a.fields[s].javaType="double";break;case"boolean":a.fields[s].javaType="boolean";break;default:throw new Error("Unforseen event: Expected Object.")}else switch(t.type){case"string":a.fields[s].javaType="String";break;case"number":a.fields[s].javaType="double";break;case"boolean":a.fields[s].javaType="boolean";break;default:throw new Error("Unforseen event: Expected Object.")}}}_generatePojoContent(e){const t="    ";let a=`public class ${e.name} {\n`;for(let s in e.fields){let n=e.fields[s];a+=`${t}private ${n.javaType}${n.isArray?"[]":""} ${n.name};\n`}a+="}\n",e.content=a}_convertNullToNullableString(e){if("array"===e.type)return this._convertNullToNullableString(e.childKey);if("object"!==e.type)return"null"===e.type?(e.type="string",void(e.allowNull=!0)):void 0;for(let t in e.keys)this._convertNullToNullableString(e.keys[t])}convert(e,t){e=JSON.parse(JSON.stringify(e)),t.treatNullAsString&&this._convertNullToNullableString(e),this._makePojo(e,"RootObject");for(let s in this.pojos)this._generatePojoContent(this.pojos[s]);let a=Object.keys(this.pojos);return a.map((e=>this.pojos[e]))}}class u{constructor(){this.tables={}}_makeTable(e,t){var a=this.tables[t]={name:t,fields:{},isArray:"array"===e.type};if("array"===e.type&&(e=e.childKey),"object"!==e.type)throw new Error("Unforseen event: Expected Object.");for(let s in e.keys){let t=e.keys[s];if("null"!==t.type&&("array"!==t.type||null!==t.childKey&&"null"!==t.childKey.type))if(a.fields[s]={name:s,sqlType:null,allowNull:t.allowNull},"object"===t.type){let e=o(s)+"_table";this._makeTable(t,e),a.fields[s].sqlType="INT(11)",a.fields[s].foreignKeyOf=e,a.fields[s].name=e+"_id"}else if("array"===t.type)if(t=t.childKey,a.fields[s].isArray=!0,"object"===t.type){let e=o(s)+"_table";this._makeTable(t,e),a.fields[s].sqlType="INT(11)",a.fields[s].foreignKeyOf=e,a.fields[s].name=e+"_id"}else if("array"===t.type);else switch(t.type){case"string":a.fields[s].sqlType="VARCHAR(255)";break;case"number":a.fields[s].sqlType="DOUBLE(11, 10)";break;case"boolean":a.fields[s].sqlType="BOOL";break;default:throw new Error("Unforseen event: Expected Object.")}else switch(t.type){case"string":a.fields[s].sqlType="VARCHAR(255)";break;case"number":a.fields[s].sqlType="DOUBLE(11, 10)";break;case"boolean":a.fields[s].sqlType="BOOL";break;default:throw new Error("Unforseen event: Expected Object.")}}}_generateTableContent(e){const t="    ";let a=`CREATE TABLE ${e.name} (\n`,s=Object.keys(e.fields);"id"in e.fields||(s.unshift("id"),e.fields.id={type:"number",sqlType:"INT(11)",name:"id"}),e.fields.id.isPrimaryKey=!0;for(let n=0;n<s.length;n++){let l=s[n],r=e.fields[l],i=n+1<s.length?",":"";a+=`${t}${o(r.name)}`,a+=` ${r.sqlType}`,r.allowNull||(a+=" NOT NULL"),r.isPrimaryKey&&(a+=" PRIMARY KEY"),r.foreignKeyOf&&(a+=`${i}\n`,a+=`${t}${t}CONSTRAINT fk_${o(r.name)} \n`,a+=`${t}${t}FOREIGN KEY (${o(r.name)}) \n`,a+=`${t}${t}REFERENCES ${r.foreignKeyOf}(id)`),a+=`${i}\n`}a+=");\n",a=a.replace(/\ ,/g,","),a=a.replace(/\ ,/g,","),e.content=a}_convertNullToNullableString(e){if("array"===e.type)return this._convertNullToNullableString(e.childKey);if("object"!==e.type)return"null"===e.type?(e.type="string",void(e.allowNull=!0)):void 0;for(let t in e.keys)this._convertNullToNullableString(e.keys[t])}convert(e,t){e=JSON.parse(JSON.stringify(e)),t.treatNullAsString&&this._convertNullToNullableString(e),this._makeTable(e,o("RootTable"));for(let s in this.tables)this._generateTableContent(this.tables[s]);let a=Object.keys(this.tables);return a.map((e=>this.tables[e]))}}var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column input-column"},[a("div",{staticClass:"input-textarea-container"},[a("prism-editor",{staticClass:"json-editor height-300",attrs:{highlight:e.highlighter,"line-numbers":!0},on:{input:e.inputTextChangedInternal},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}})],1),e.errorMessage?a("div",{staticClass:"error-message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e()])},d=[];class h{constructor(e={onStringAndNumberCollision:"prefer-string",onNullCollision:"allow"}){this.opt=e,this.schema={}}_getType(e){return null===e?"null":"object"===typeof e?Array.isArray(e)?"array":"object":typeof e}_throwTypeMismatch(e,t,a){var s=`Type mismatch in: ${e}. Expected ${t}, received ${a}.`;throw new Error(s)}_process(e,t,a){let s=this._getType(e);if(t.type&&t.type!==s){if("allow"===this.opt.onNullCollision&&"null"===s)return void(t.allowNull=!0);if(("string"===s&&"number"===t.type||"number"===s&&"string"===t.type)&&"prefer-string"===this.opt.onStringAndNumberCollision)return t.type="string",void(t.coerce=!0);"allow"===this.opt.onNullCollision&&"null"===t.type?t.allowNull=!0:this._throwTypeMismatch(a,t.type,s)}if(t.type=s,"array"===s){t.childKey||(t.childKey=null);for(let s=0;s<e.length;s+=1){let n=e[s];t.childKey||(t.childKey={}),this._process(n,t.childKey,`${a}[${s}]`)}}else if("object"===s){t.keys||(t.keys={});let s=Object.keys(e);for(let n of s){let s=e[n];t.keys[n]||(t.keys[n]={}),this._process(s,t.keys[n],`${a}.${n}`)}}}process(e){return e=JSON.parse(JSON.stringify(e)),this._process(e,this.schema,"~"),this.schema}}var g=a("c197"),f=a.n(g),y=(a("f393"),a("e57a")),b=(a("cabf"),a("b012")),m={name:"JsonInput",props:{},components:{PrismEditor:y["a"]},data(){return{inputText:JSON.stringify(l,null,2),errorMessage:"",enableDoneButton:!0}},methods:{highlighter(e){return f.a.highlight(e,f.a.languages.json,"json")},kickstart(){this.inputTextChanged()},inputTextChangedInternal:Object(b["debounce"])((function(e){this.inputTextChanged()}),200),inputTextChanged(){this.errorMessage="";let e=null;try{e=JSON.parse(this.inputText)}catch(t){console.warn(t),this.errorMessage=t.message}this.generateSchema(e)},generateSchema(e){let t=null;if(null!==e){try{let a=new h;t=a.process(e),console.log({schema:t})}catch(a){console.warn(a),this.errorMessage=a.message}this.$emit("schema-generated",t)}else this.$emit("schema-generated",null)}}},v=m,T=(a("087a"),a("a847"),a("2877")),j=Object(T["a"])(v,p,d,!1,null,null,null),w=j.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column processing-column"},[a("div",{staticClass:"preview-schema-container"},[e.schema?e._e():a("div",{staticClass:"no-schema-message"},[e._v("\n      Enter a valid json data in the previous tab to continue.\n    ")]),e.schema?a("code",{domProps:{innerHTML:e._s(e.schemaPreviewText)}}):e._e()])])},O=[],_={name:"SchemaPreview",props:{},data(){return{schemaPreviewText:"",schema:null}},methods:{prettyPrintSchemaAsHtml(e,t="&lt;root&gt;",a=""){let s="",n=e=>`<span class="st-name${0==e.indexOf("&lt;")?" st-name-sp":""}">${e}</span>`,l=e=>`<span class="st-type">${e}</span>`;if(s+=`${a}${n(t)}: ${l(e.type)}\n        ${e.allowNull?" (nullable)":""}${e.coerce?" (coerce)":""}<br>`,"array"===e.type&&e.childKey)s+=this.prettyPrintSchemaAsHtml(e.childKey,"&lt;array-item&gt;",a+'<span class="st-div"></span>');else if("object"===e.type)for(let r in e.keys)s+=this.prettyPrintSchemaAsHtml(e.keys[r],r,a+'<span class="st-div"></span>');return s},generatePreview(e){if(this.schema=e,null!==e){let t=this.prettyPrintSchemaAsHtml(e);this.schemaPreviewText=t}}}},k=_,N=(a("2973"),Object(T["a"])(k,C,O,!1,null,null,null)),$=N.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column code-generating-column"},[e.schema?a("div",[a("q-select",{staticStyle:{"margin-top":"20px",width:"100%"},attrs:{outlined:"",options:e.targetTypes,label:"Select target type"},on:{input:e.generateCode},model:{value:e.target.type,callback:function(t){e.$set(e.target,"type",t)},expression:"target.type"}}),a("div",{staticStyle:{"margin-top":"20px"}}),a("q-checkbox",{attrs:{label:"Treat null values as nullable string."},on:{input:e.generateCode},model:{value:e.target.treatNullAsString,callback:function(t){e.$set(e.target,"treatNullAsString",t)},expression:"target.treatNullAsString"}})],1):e._e()])},x=[],E={name:"CodeGenerationConfig",props:{schema:{type:Object,default:null}},data(){return{targetTypes:[{label:"Java POJO",value:"java-pojo"},{label:"SQL Tables",value:"sql-tables"}],target:{type:{label:"Java POJO",value:"java-pojo"},treatNullAsString:!0}}},methods:{kickstart(){this.generateCode()},generateCode(){this.$emit("config-updated",this.target)}}},P=E,A=(a("27b8"),a("ddd8")),R=a("8f8e"),q=a("eebe"),K=a.n(q),J=Object(T["a"])(P,S,x,!1,null,null,null),L=J.exports;K()(J,"components",{QSelect:A["a"],QCheckbox:R["a"]});var I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column code-output-column"},[a("div",{staticClass:"output-container"},[e.schema?e._e():a("div",{staticClass:"no-schema-message"},[e._v("\n      Enter a valid json data in the previous tab to continue.\n    ")]),e.schema?a("div",e._l(e.generatedOutputFileList,(function(t){return a("div",{key:t.name,staticClass:"output-box"},[a("div",{staticClass:"output-box-title"},[e._v(e._s(t.name))]),a("div",[a("pre",[a("code",{domProps:{innerHTML:e._s(t.content)}},[e._v(" ")])])])])})),0):e._e()])])},U=[],M=(a("922d"),a("af8a"),{name:"CodeOutput",props:{schema:{type:Object,default:null},target:{type:Object,default:null},generated:{type:Array,default:null}},data(){return{generatedOutputFileList:[]}},methods:{displayOutput(){if(null===this.generated)return;let e="javascript",t=f.a.languages.javascript;"sql-tables"===this.target.type.value?(e="sql",t=f.a.languages.sql):"java-pojo"===this.target.type.value&&(e="java",t=f.a.languages.java);let a=this.generated;for(let s of a)s.content=f.a.highlight(s.content,t,e);this.generatedOutputFileList=a}}}),H=M,B=(a("a834"),Object(T["a"])(H,I,U,!1,null,null,null)),G=B.exports,Q={name:"PageIndex",components:{JsonInput:w,SchemaPreview:$,CodeGenerationConfig:L,CodeOutput:G},data(){return{inputTab:"json",outputTab:"generated",target:null,schema:null,generated:null}},mounted(){this.$refs.configRef.kickstart(),this.$refs.jsonInputRef.kickstart()},methods:{generateJavaPojo(){let e=new c,t=e.convert(this.schema,this.target);console.log({generated:t}),this.generated=t,setTimeout((()=>{this.$refs.codeOutputRef.displayOutput()}),100)},generateSql(){let e=new u,t=e.convert(this.schema,this.target);console.log({generated:t}),this.generated=t,setTimeout((()=>{this.$refs.codeOutputRef.displayOutput()}),100)},generateCode(){this.target&&this.target.type&&this.schema&&("java-pojo"===this.target.type.value?this.generateJavaPojo():"sql-tables"===this.target.type.value&&this.generateSql())},configUpdated(e){this.target=e,console.log({target:e}),this.generateCode()},schemaGenerated(e){this.schema=e,null===this.schema&&(this.generated=null),this.$refs.schemaPreviewRef.generatePreview(this.schema),this.generateCode()}}},F=Q,D=(a("0565"),a("9989")),Y=a("429b"),V=a("7460"),W=Object(T["a"])(F,s,n,!1,null,null,null);t["default"]=W.exports;K()(W,"components",{QPage:D["a"],QTabs:Y["a"],QTab:V["a"]})},a834:function(e,t,a){"use strict";a("1f21")},a847:function(e,t,a){"use strict";a("c66b")},c66b:function(e,t,a){},d8df:function(e,t,a){},e5b2:function(e,t,a){}}]);