(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0565":function(e,t,a){"use strict";a("16f0")},"087a":function(e,t,a){"use strict";a("d8df")},"16f0":function(e,t,a){},"1f21":function(e,t,a){},"27b8":function(e,t,a){"use strict";a("77ad")},2973:function(e,t,a){"use strict";a("e5b2")},"331e":function(e,t,a){},"77ad":function(e,t,a){},"8b24":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"page index-page"},[e.isUnified?a("q-tabs",{staticClass:"bg-primary text-white shadow-1 input-tabs",attrs:{"mobile-arrows":"","outside-arrows":"","inline-label":"",align:"justify",raised:""},model:{value:e.unifiedTab,callback:function(t){e.unifiedTab=t},expression:"unifiedTab"}},[a("q-tab",{attrs:{name:"json",icon:"code",label:"JSON"}}),a("q-tab",{attrs:{name:"schema",icon:"preview",label:"Schema editor"}}),a("q-tab",{attrs:{name:"configuration",icon:"settings",label:"Configure output"}}),a("q-tab",{attrs:{name:"generated",icon:"code",label:"Generated code"}})],1):e._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"column col",class:{"col-6":!e.isUnified,"col-12":e.isUnified},attrs:{hidden:!(e.isUnified&&"json"!==e.unifiedTab&&"schema"!==e.unifiedTab)}},[e.isUnified?e._e():a("q-tabs",{staticClass:"bg-primary text-white shadow-1 input-tabs",attrs:{"inline-label":"",align:"justify",raised:""},model:{value:e.inputTab,callback:function(t){e.inputTab=t},expression:"inputTab"}},[a("q-tab",{attrs:{name:"json",icon:"code",label:"JSON"}}),a("q-tab",{attrs:{name:"schema",icon:"preview",label:"Schema editor"}})],1),a("JsonInput",{ref:"jsonInputRef",attrs:{hidden:!e.isUnified&&"json"!==e.inputTab||e.isUnified&&"json"!==e.unifiedTab},on:{"schema-generated":e.schemaGenerated}}),a("SchemaPreview",{ref:"schemaPreviewRef",attrs:{hidden:!e.isUnified&&"schema"!==e.inputTab||e.isUnified&&"schema"!==e.unifiedTab},on:{"schema-modified":e.schemaModifiedDebouncer}})],1),a("div",{staticClass:"column col",class:{"col-6":!e.isUnified,"col-12":e.isUnified},attrs:{hidden:!(e.isUnified&&"configuration"!==e.unifiedTab&&"generated"!==e.unifiedTab)}},[e.isUnified?e._e():a("q-tabs",{staticClass:"bg-primary text-white shadow-1 output-tabs",attrs:{"inline-label":"",align:"justify"},model:{value:e.outputTab,callback:function(t){e.outputTab=t},expression:"outputTab"}},[a("q-tab",{attrs:{name:"configuration",icon:"settings",label:"Configure output"}}),a("q-tab",{attrs:{name:"generated",icon:"code",label:"Generated code"}})],1),a("CodeOutput",{ref:"codeOutputRef",attrs:{hidden:!e.isUnified&&"generated"!==e.outputTab||e.isUnified&&"generated"!==e.unifiedTab,schema:e.schema,target:e.target,generated:e.generated}}),a("CodeGenerationConfig",{ref:"configRef",attrs:{hidden:!e.isUnified&&"configuration"!==e.outputTab||e.isUnified&&"configuration"!==e.unifiedTab,schema:e.schema},on:{"config-updated":e.configUpdated}})],1)])],1)},n=[];const s=[{userId:1,name:{first:"Abdur",last:"Rahim"},country:"Bangladesh",age:23,favoriteNumbers:[1,4,1],lastLogin:null,articles:[{title:"Hello",body:"World"},{title:"Hello 2",body:"World 1"}],preferredLanguage:null},{userId:2,name:{first:"Abd",middle:"Bin",last:"Karim"},country:"Saudi Arabia",age:43,favoriteNumbers:[333],lastLogin:"2021-04-06T09:32:07.911Z",articles:[{title:"Art",body:"of war",isPrivate:!0}]},{userId:3,name:{first:"John",last:null},country:"United States",age:34,favoriteNumbers:[32,4343,34],articles:[]},{userId:4,name:null,country:"Canada",isUnderage:!0,age:"5",favoriteNumbers:[9]}],o={userId:19999999999999124e5,shortKey:"A very long value repeated again and again many times in order to test the UI limits of the application",shortKey2:"averylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplicationaverylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplication",averylongkeywithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplicationaverylongkeywithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplication:"averylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplicationaverylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplication",populousObject:{}};for(let ue=0;ue<100;ue++)o.populousObject["key"+ue]=!0;a("ddb0"),a("5319");function l(e){return`${e}`.replace(new RegExp(/[-_]+/,"g")," ").replace(new RegExp(/[^\w\s]/,"g"),"").replace(new RegExp(/\s+(.)(\w+)/,"g"),((e,t,a)=>`${t.toUpperCase()+a.toLowerCase()}`)).replace(new RegExp(/\s/,"g"),"").replace(new RegExp(/\w/),(e=>e.toUpperCase()))}function r(e){return e=l(e),0===e.length||(e=e[0].toLowerCase()+e.substring(1)),e}function c(e){return e=r(e),e.split("").map((e=>e==e.toUpperCase()?"_"+e.toLowerCase():e)).join("")}const u="RootObject",d="Object";class m{constructor(){this.pojos={}}_makePojo(e,t){var a={name:t,fields:{},arrayDepth:"array"===e.type?1:0};if(this.pojos[t]=a,"array"===e.type&&(e=e.childKey),"object"!==e.type)throw new Error("Unforseen event: Expected Object.");for(let i in e.keys){let t=e.keys[i];if("null"!==t.type&&("array"!==t.type||null!==t.childKey&&"null"!==t.childKey.type)){a.fields[i]={name:i,javaType:null,schema:t},a.fields[i].arrayDepth=0;while("array"===t.type)t=t.childKey,a.fields[i].arrayDepth+=1;if("object"===t.type){let e=this._getPojoName(i,t);this._makePojo(t,e),a.fields[i].javaType=e}else switch(t.type){case"string":a.fields[i].javaType="String";break;case"number":a.fields[i].javaType="double";break;case"boolean":a.fields[i].javaType="boolean";break;default:throw new Error("Unforseen event: Expected known type.")}}}}_generatePojoContent(e,t){let{options:a}=t;const i="    ";let n=[];a.lombokGetter&&n.push("@Getter"),a.lombokSetter&&n.push("@Setter"),a.lombokData&&n.push("@Data"),a.lombokBuilder&&n.push("@Builder"),0!==n.length&&n.push("");let s=n.join("\n")+`public class ${e.name} {\n`,o=Object.keys(e.fields);for(let l=0;l<o.length;l++){let t=o[l],n=e.fields[t];a.javaxValidations&&(n.schema.allowNull||(s+=`${i}@NotNull\n`),"string"===n.schema.type&&"minLen"in n.schema&&"maxLen"in n.schema&&(s+=`${i}@Size(min=${n.schema.minLen}, max=${n.schema.maxLen})\n`),"number"===n.schema.type&&"min"in n.schema&&"max"in n.schema&&(s+=`${i}@Min(value=${n.schema.min})\n`,s+=`${i}@Max(value=${n.schema.max})\n`));let r="";for(let e=0;e<n.arrayDepth;e++)r+="[]";s+=`${i}private ${n.javaType}${r} ${n.name};\n`,a.javaxValidations&&l!==o.length-1&&(s+="\n")}s+="}\n",e.content=s}convert(e,t){e=JSON.parse(JSON.stringify(e));let a=this._getRootPojoName(e);this._makePojo(e,a);for(let n in this.pojos)this._generatePojoContent(this.pojos[n],t);let i=Object.keys(this.pojos);return i.map((e=>this.pojos[e]))}_getRootPojoName(e){let t=u;return"object"===e.type&&e.preferredName&&(t=e.preferredName),"array"===e.type&&e.childKey&&"object"===e.childKey.type&&e.childKey.preferredName&&(t=e.childKey.preferredName),t}_getPojoName(e,t){return t.preferredName?t.preferredName:l(e)+d}}class p{constructor(){this.tables={}}_makeTable(e,t){var a=this.tables[t]={name:t,fields:{},isArray:"array"===e.type};if("array"===e.type&&(e=e.childKey),"object"!==e.type)throw new Error("Unforseen event: Expected Object.");for(let i in e.keys){let t=e.keys[i];if("null"!==t.type&&("array"!==t.type||null!==t.childKey&&"null"!==t.childKey.type))if(a.fields[i]={name:i,sqlType:null,allowNull:t.allowNull},"object"===t.type){let e=c(i)+"_table";this._makeTable(t,e),a.fields[i].sqlType="INT(11)",a.fields[i].foreignKeyOf=e,a.fields[i].name=e+"_id"}else if("array"===t.type)if(t=t.childKey,a.fields[i].isArray=!0,"object"===t.type){let e=c(i)+"_table";this._makeTable(t,e),a.fields[i].sqlType="INT(11)",a.fields[i].foreignKeyOf=e,a.fields[i].name=e+"_id"}else if("array"===t.type);else switch(t.type){case"string":a.fields[i].sqlType="VARCHAR(255)";break;case"number":a.fields[i].sqlType="DOUBLE(11, 10)";break;case"boolean":a.fields[i].sqlType="BOOL";break;default:throw new Error("Unforseen event: Expected Object.")}else switch(t.type){case"string":a.fields[i].sqlType="VARCHAR(255)";break;case"number":a.fields[i].sqlType="DOUBLE(11, 10)";break;case"boolean":a.fields[i].sqlType="BOOL";break;default:throw new Error("Unforseen event: Expected Object.")}}}_generateTableContent(e){const t="    ";let a=`CREATE TABLE ${e.name} (\n`,i=Object.keys(e.fields);"id"in e.fields||(i.unshift("id"),e.fields.id={type:"number",sqlType:"INT(11)",name:"id"}),e.fields.id.isPrimaryKey=!0;for(let n=0;n<i.length;n++){let s=i[n],o=e.fields[s],l=n+1<i.length?",":"";a+=`${t}${c(o.name)}`,a+=` ${o.sqlType}`,o.allowNull||(a+=" NOT NULL"),o.isPrimaryKey&&(a+=" PRIMARY KEY"),o.foreignKeyOf&&(a+=`${l}\n`,a+=`${t}${t}CONSTRAINT fk_${c(o.name)} \n`,a+=`${t}${t}FOREIGN KEY (${c(o.name)}) \n`,a+=`${t}${t}REFERENCES ${o.foreignKeyOf}(id)`),a+=`${l}\n`}a+=");\n",a=a.replace(/\ ,/g,","),a=a.replace(/\ ,/g,","),e.content=a}convert(e,t){e=JSON.parse(JSON.stringify(e)),this._makeTable(e,c("RootTable"));for(let i in this.tables)this._generateTableContent(this.tables[i]);let a=Object.keys(this.tables);return a.map((e=>this.tables[e]))}}var h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column input-column"},[a("div",{staticClass:"input-textarea-container"},[a("prism-editor",{staticClass:"json-editor",attrs:{highlight:e.highlighter,"line-numbers":!0},on:{input:e.inputTextChangedDebouncer},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}})],1),e.errorMessage?a("div",{staticClass:"error-message row items-center",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e(),e.errorMessage?e._e():a("div",{staticClass:"config-area"},[a("q-checkbox",{attrs:{label:"Treat null values as nullable string."},on:{input:e.inputTextChangedDebouncer},model:{value:e.treatNullAsString,callback:function(t){e.treatNullAsString=t},expression:"treatNullAsString"}})],1)])},f=[];a("e6cf");class g{constructor(e={onStringAndNumberCollision:"prefer-string",onNullCollision:"allow"}){this.opt=e,this.schema={}}_getType(e){return null===e?"null":"object"===typeof e?Array.isArray(e)?"array":"object":typeof e}_throwTypeMismatch(e,t,a){var i=`Type mismatch in: ${e}. Expected ${t}, received ${a}.`;throw new Error(i)}_process(e,t,a){let i=this._getType(e);if(t.type&&t.type!==i){if("allow"===this.opt.onNullCollision&&"null"===i)return t.allowNull=!0,void(t.hadNullCollision=!0);("string"===i&&"number"===t.type||"number"===i&&"string"===t.type)&&"prefer-string"===this.opt.onStringAndNumberCollision?(i="string",t.wasCoerced=!0):"allow"===this.opt.onNullCollision&&"null"===t.type?t.allowNull=!0:this._throwTypeMismatch(a,t.type,i)}if(t.type=i,"array"===i){t.childKey||(t.childKey=null);for(let i=0;i<e.length;i+=1){let n=e[i];t.childKey||(t.childKey={}),this._process(n,t.childKey,`${a}[${i}]`)}}else if("object"===i){t.keys||(t.keys={});let i=Object.keys(e);for(let n of i){let i=e[n];t.keys[n]||(t.keys[n]={}),this._process(i,t.keys[n],`${a}.${n}`)}}else("string"==i||"number"==i)&&this._guessStringLengthBounds(e,t,a)}process(e){return e=JSON.parse(JSON.stringify(e)),this._process(e,this.schema,"~"),this.schema}_guessStringLengthBounds(e,t,a){"string"!==t.type&&"number"!==t.type||("minLen"in t||(t.minLen=Number.MAX_SAFE_INTEGER),"maxLen"in t||(t.maxLen=0),String(e).length<t.minLen&&(t.minLen=String(e).length),String(e).length>t.maxLen&&(t.maxLen=String(e).length)),"number"===t.type&&("min"in t||(t.min=Number.MAX_SAFE_INTEGER),"max"in t||(t.max=0),e<t.min&&(t.min=e),e>t.max&&(t.max=e))}}let b=e=>{if("array"===e.type)return b(e.childKey);if("object"!==e.type)return"null"===e.type?(e.type="string",void(e.allowNull=!0)):void 0;for(let t in e.keys)b(e.keys[t])},y=(e,t="Root")=>{if("array"===e.type)y(e.childKey,t);else if("object"===e.type){e.preferredName=l(t);for(let t in e.keys)y(e.keys[t],t)}};var v=a("c197"),x=a.n(v),j=(a("f393"),a("e57a")),w=(a("cabf"),a("b012")),C=a("bd4c");let T={methods:{toDatetimeStamp(e){return e&&new Date(e).getTime()||null},toDateString(e){return e?new Date(e).toISOString().split("T")[0]:""},formatDate(e,t){return C["a"].formatDate(e,t)},async sleep(e){return new Promise((t=>{setTimeout(t,e)}))},alert(e,t){return new Promise((a=>{this.$q.dialog({title:e,message:t}).onOk((()=>{a(!0)})).onCancel((()=>{a(!1)})).onDismiss((()=>{a(!1)}))}))},confirm(e,t){return new Promise((a=>{this.$q.dialog({title:e,message:t,cancel:!0,persistent:!0}).onOk((()=>{a(!0)})).onCancel((()=>{a(!1)})).onDismiss((()=>{a(!1)}))}))}}};var k={name:"JsonInput",props:{},mixins:[T],components:{PrismEditor:j["a"]},data(){return{inputText:JSON.stringify(s,null,2),errorMessage:"",enableDoneButton:!0,treatNullAsString:!0,previous:{inputText:null,treatNullAsString:!0},isSchemaExternallyModified:!1}},methods:{notifyOfSchemaModification(){this.isSchemaExternallyModified=!0},highlighter(e){return x.a.highlight(e,x.a.languages.json,"json")},kickstart(){this.inputTextChanged()},inputTextChangedDebouncer:Object(w["debounce"])((function(e=null){this.inputTextChanged()}),200),async inputTextChanged(){if(this.errorMessage="",null!==this.previous.inputText&&this.isSchemaExternallyModified){let e="The changes you made to the schema will be lost. Continue?",t=await this.confirm("Confirm change",e);if(!t)return this.inputText=this.previous.inputText,void(this.treatNullAsString=this.previous.treatNullAsString);this.isSchemaExternallyModified=!1}this.previous.inputText=this.inputText,this.previous.treatNullAsString=this.treatNullAsString;let e=null;try{e=JSON.parse(this.inputText)}catch(t){console.warn(t),this.errorMessage=t.message}this.generateSchema(e)},generateSchema(e){let t=null;if(null!==e){try{let a=new g;t=a.process(e),this.treatNullAsString&&b(t),y(t),console.log({schema:t})}catch(a){console.warn(a),this.errorMessage=a.message}this.$emit("schema-generated",t)}else this.$emit("schema-generated",null)}}},_=k,N=(a("087a"),a("a847"),a("2877")),S=a("8f8e"),$=a("eebe"),O=a.n($),E=Object(N["a"])(_,h,f,!1,null,null,null),L=E.exports;O()(E,"components",{QCheckbox:S["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column processing-column"},[a("div",{staticClass:"preview-schema-container"},[e.schema?e._e():a("div",{staticClass:"no-schema-message"},[e._v("\n      Enter a valid json data in the first tab to continue.\n    ")]),a("EditableJsonEntity",{attrs:{indent:0,injectedSchema:e.schema,baseName:"<root>"},on:{"schema-modified":e.schemaModifiedInEditableEntity}})],1)])},q=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"editable-json-entity"},[e.schema?[e.baseName?[a("span",{staticClass:"baseNameText"},[e._v(e._s(e.baseName))]),a("span",{staticClass:"colonText"},[e._v(": ")])]:e._e(),a("span",{staticClass:"typeText"},[e._v(e._s(e.schema.type)+" ")]),"object"==e.schema.type?a("span",{staticClass:"optionText"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.schema.preferredName,expression:"schema.preferredName"}],staticClass:"input nameInput",domProps:{value:e.schema.preferredName},on:{input:[function(t){t.target.composing||e.$set(e.schema,"preferredName",t.target.value)},e.schemaModified]}})]):e._e(),a("span",{staticClass:"optionText"},[e._v("nullable("),a("input",{directives:[{name:"model",rawName:"v-model",value:e.schema.allowNull,expression:"schema.allowNull"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.schema.allowNull)?e._i(e.schema.allowNull,null)>-1:e.schema.allowNull},on:{input:e.schemaModified,change:function(t){var a=e.schema.allowNull,i=t.target,n=!!i.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);i.checked?o<0&&e.$set(e.schema,"allowNull",a.concat([s])):o>-1&&e.$set(e.schema,"allowNull",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.schema,"allowNull",n)}}}),e._v(")")]),"string"==e.schema.type?a("span",{staticClass:"optionText"},[e._v("\n      minlen("),a("input",{directives:[{name:"model",rawName:"v-model",value:e.schema.minLen,expression:"schema.minLen"}],staticClass:"input minLenInput",attrs:{type:"number",min:"-1"},domProps:{value:e.schema.minLen},on:{input:[function(t){t.target.composing||e.$set(e.schema,"minLen",t.target.value)},e.schemaModified]}}),e._v(") maxlen("),a("input",{directives:[{name:"model",rawName:"v-model",value:e.schema.maxLen,expression:"schema.maxLen"}],staticClass:"input maxLenInput",attrs:{type:"number",min:"-1"},domProps:{value:e.schema.maxLen},on:{input:[function(t){t.target.composing||e.$set(e.schema,"maxLen",t.target.value)},e.schemaModified]}}),e._v(")\n    ")]):e._e(),"number"==e.schema.type?a("span",{staticClass:"optionText"},[e._v("\n      min("),a("input",{directives:[{name:"model",rawName:"v-model",value:e.schema.min,expression:"schema.min"}],staticClass:"input minInput",attrs:{type:"number",min:"-1"},domProps:{value:e.schema.min},on:{input:[function(t){t.target.composing||e.$set(e.schema,"min",t.target.value)},e.schemaModified]}}),e._v(") max("),a("input",{directives:[{name:"model",rawName:"v-model",value:e.schema.max,expression:"schema.max"}],staticClass:"input maxInput",attrs:{type:"number",min:"-1"},domProps:{value:e.schema.max},on:{input:[function(t){t.target.composing||e.$set(e.schema,"max",t.target.value)},e.schemaModified]}}),e._v(")\n    ")]):e._e(),a("br"),"array"==e.schema.type?[a("span",{domProps:{innerHTML:e._s(e.spacify(e.indent+1))}}),a("EditableJsonEntity",{attrs:{indent:e.indent+1,injectedSchema:e.schema.childKey,baseName:"<array-item>"},on:{"schema-modified":e.schemaModifiedFromChild}})]:"object"==e.schema.type?e._l(Object.keys(e.schema.keys),(function(t){return a("span",{key:t},[a("span",{domProps:{innerHTML:e._s(e.spacify(e.indent+1))}}),a("span",{staticClass:"keyText"},[e._v(e._s(t))]),a("span",{staticClass:"colonText"},[e._v(": ")]),a("EditableJsonEntity",{attrs:{indent:e.indent+1,injectedSchema:e.schema.keys[t]},on:{"schema-modified":e.schemaModifiedFromChild}})],1)})):e._e()]:e._e()],2)},P=[],U={name:"EditableJsonEntity",props:{injectedSchema:{type:Object,value:null},indent:{type:Number,value:0},baseName:{type:String,value:""}},data(){return{schema:null}},watch:{injectedSchema:{immediate:!0,handler(e){this.schema=e}}},methods:{spacify(e){e*=2;let t="";while(e--)t+="&nbsp;";return t},schemaModified(e){this.$emit("schema-modified")},schemaModifiedFromChild(){this.$emit("schema-modified")}}},R=U,K=(a("f6ba"),Object(N["a"])(R,A,P,!1,null,null,null)),I=K.exports,D={name:"SchemaPreview",props:{},components:{EditableJsonEntity:I},data(){return{schema:null}},methods:{generatePreview(e){this.schema=e},schemaModifiedInEditableEntity(){this.schema.isModified=!0,this.$emit("schema-modified",this.schema),console.log("Modified schema",this.schema)}}},J=D,G=(a("2973"),Object(N["a"])(J,M,q,!1,null,null,null)),B=G.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column code-generating-column"},[a("div",{staticClass:"code-generation-config-container"},[e.schema?e._e():a("div",{staticClass:"no-schema-message"},[e._v("\n      Enter a valid json data in the first tab to continue.\n    ")]),e.schema?a("div",[a("q-select",{staticStyle:{"margin-top":"20px",width:"100%"},attrs:{outlined:"",options:e.targetTypes,label:"Select target type"},on:{input:e.generateCode},model:{value:e.target.type,callback:function(t){e.$set(e.target,"type",t)},expression:"target.type"}}),a("div",{staticStyle:{"margin-top":"20px"}}),"java-pojo"==e.target.type.value?a("div",{staticClass:"java-pojo-options"},[a("div",{staticClass:"option-group"},[a("div",{staticClass:"option-group-title"},[e._v("\n            Apply javax.validation.constraints\n          ")]),a("q-checkbox",{attrs:{label:"Generate validation annotations"},on:{input:e.generateCode},model:{value:e.target.options.javaxValidations,callback:function(t){e.$set(e.target.options,"javaxValidations",t)},expression:"target.options.javaxValidations"}})],1),a("div",{staticClass:"option-group"},[a("div",{staticClass:"option-group-title"},[e._v("\n            Apply lombok annotations\n          ")]),a("q-checkbox",{attrs:{label:"@Builder"},on:{input:e.generateCode},model:{value:e.target.options.lombokBuilder,callback:function(t){e.$set(e.target.options,"lombokBuilder",t)},expression:"target.options.lombokBuilder"}}),a("q-checkbox",{attrs:{label:"@Data"},on:{input:e.generateCode},model:{value:e.target.options.lombokData,callback:function(t){e.$set(e.target.options,"lombokData",t)},expression:"target.options.lombokData"}}),a("q-checkbox",{attrs:{label:"@Getter"},on:{input:e.generateCode},model:{value:e.target.options.lombokGetter,callback:function(t){e.$set(e.target.options,"lombokGetter",t)},expression:"target.options.lombokGetter"}}),a("q-checkbox",{attrs:{label:"@Setter"},on:{input:e.generateCode},model:{value:e.target.options.lombokSetter,callback:function(t){e.$set(e.target.options,"lombokSetter",t)},expression:"target.options.lombokSetter"}})],1)]):e._e()],1):e._e()])])},H=[],V={name:"CodeGenerationConfig",props:{schema:{type:Object,default:null}},data(){return{targetTypes:[{label:"Java POJO",value:"java-pojo"},{label:"SQL Tables",value:"sql-tables"}],target:{type:{label:"Java POJO",value:"java-pojo"},options:{javaxValidations:!0,lombokGetter:!1,lombokSetter:!1,lombokData:!0,lombokBuilder:!0}}}},methods:{kickstart(){this.generateCode()},generateCode(){this.$emit("config-updated",this.target)}}},Q=V,Y=(a("27b8"),a("ddd8")),W=Object(N["a"])(Q,F,H,!1,null,null,null),X=W.exports;O()(W,"components",{QSelect:Y["a"],QCheckbox:S["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-column code-output-column"},[a("div",{staticClass:"output-container"},[e.schema?e._e():a("div",{staticClass:"no-schema-message"},[e._v("\n      Enter a valid json data in the first tab to continue.\n    ")]),e.schema?a("div",e._l(e.generatedOutputFileList,(function(t){return a("div",{key:t.name,staticClass:"output-box"},[a("div",{staticClass:"output-box-title"},[e._v(e._s(t.name))]),a("div",[a("pre",{staticClass:"output-pre"},[a("code",{staticClass:"output-code",domProps:{innerHTML:e._s(t.content)}})])])])})),0):e._e()])])},Z=[],ee=(a("922d"),a("af8a"),{name:"CodeOutput",props:{schema:{type:Object,default:null},target:{type:Object,default:null},generated:{type:Array,default:null}},data(){return{generatedOutputFileList:[]}},methods:{displayOutput(){if(null===this.generated)return;let e="javascript",t=x.a.languages.javascript;"sql-tables"===this.target.type.value?(e="sql",t=x.a.languages.sql):"java-pojo"===this.target.type.value&&(e="java",t=x.a.languages.java);let a=this.generated;for(let i of a)i.content=x.a.highlight(i.content,t,e);this.generatedOutputFileList=a}}}),te=ee,ae=(a("a834"),Object(N["a"])(te,z,Z,!1,null,null,null)),ie=ae.exports,ne={name:"PageIndex",components:{JsonInput:L,SchemaPreview:B,CodeGenerationConfig:X,CodeOutput:ie},data(){return{isUnified:!1,unifiedTab:"json",inputTab:"json",outputTab:"generated",target:null,schema:null,generated:null}},mounted(){this.isUnified=this.$q.platform.is.mobile,this.$refs.configRef.kickstart(),this.$refs.jsonInputRef.kickstart()},methods:{generateJavaPojo(){let e=new m,t=e.convert(this.schema,this.target);console.log({generated:t}),this.generated=t,setTimeout((()=>{this.$refs.codeOutputRef.displayOutput()}),100)},generateSql(){let e=new p,t=e.convert(this.schema,this.target);console.log({generated:t}),this.generated=t,setTimeout((()=>{this.$refs.codeOutputRef.displayOutput()}),100)},generateCode(){this.target&&this.target.type&&this.schema&&("java-pojo"===this.target.type.value?this.generateJavaPojo():"sql-tables"===this.target.type.value&&this.generateSql())},configUpdated(e){this.target=e,console.log({target:e}),this.generateCode()},schemaGenerated(e){this.schema=e,null===this.schema&&(this.generated=null),this.$refs.schemaPreviewRef.generatePreview(this.schema),this.generateCode()},schemaModifiedDebouncer:Object(w["debounce"])((function(e){this.schemaModified(e)}),200),schemaModified(e){this.schema=e,null===this.schema&&(this.generated=null),this.$refs.jsonInputRef.notifyOfSchemaModification(),this.generateCode()}}},se=ne,oe=(a("0565"),a("9989")),le=a("429b"),re=a("7460"),ce=Object(N["a"])(se,i,n,!1,null,null,null);t["default"]=ce.exports;O()(ce,"components",{QPage:oe["a"],QTabs:le["a"],QTab:re["a"]})},a834:function(e,t,a){"use strict";a("1f21")},a847:function(e,t,a){"use strict";a("c66b")},c66b:function(e,t,a){},d8df:function(e,t,a){},e5b2:function(e,t,a){},f6ba:function(e,t,a){"use strict";a("331e")}}]);