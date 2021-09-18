(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("q-header",{attrs:{elevated:""}},[o("q-toolbar",[o("q-toolbar-title",{staticClass:"alignq-center"},[o("q-avatar",{attrs:{rounded:""}},[o("img",{attrs:{alt:"JSON R.E. logo",src:a("8038")}})]),t._v("\n\n        JSON Reverse Engineering Toolkit\n      ")],1),o("q-btn",{staticStyle:{color:"white","margin-right":"2px","margin-left":"8px"},attrs:{color:"bg-primary",icon:"help",label:"About",rounded:"",outline:""},on:{click:t.helpClicked}})],1)],1),o("q-dialog",{attrs:{"transition-show":"flip-down","transition-hide":"flip-up"},model:{value:t.showWelcomeDialog,callback:function(e){t.showWelcomeDialog=e},expression:"showWelcomeDialog"}},[o("q-card",{staticClass:"bg-primary text-white"},[o("q-bar",[o("q-avatar",{attrs:{rounded:""}},[o("img",{attrs:{alt:"JSON R.E. logo",src:a("8038")}})]),o("div",[t._v("JSON R.E. Toolkit")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("\n          Generate Java POJOs & SQL tables directly from JSON.\n        ")])]),o("q-card-section",{staticClass:"q-pt-none",staticStyle:{"overflow-x":"auto"}},[o("img",{staticStyle:{"max-width":"500px",display:"block","text-align":"center","margin-left":"auto","margin-right":"auto","margin-top":"-10px"},attrs:{alt:"JSON R.E. logo",src:a("d377")}}),o("div",{staticStyle:{"font-weight":"bold"}},[t._v("How it works?")]),o("div",{staticStyle:{"margin-left":"8px"}},[t._v("\n          1. Enter your JSON. "),o("br"),t._v("\n          2. JSON R.E. Toolkit will intelligently reverse engineer it and\n          generate schema.\n          "),o("br"),t._v("\n          3. From the schema we can instantly generate Java POJO, SQL Tables\n          and more.\n\n          "),o("div",{staticStyle:{"margin-top":"8px","font-style":"italic"}},[t._v("\n            Coming soon - MongoDb Schema, Mongoose, Joi validation, TypeScript\n            objects, SQL sequelize.\n          ")])]),o("div",{staticStyle:{"margin-top":"20px","text-align":"center"}},[t._v("\n          This is a completely FOSS tool. The\n          "),o("a",{staticStyle:{"font-weight":"bold",color:"white"},attrs:{href:"https://github.com/iShafayet/json-re",target:"_blank"}},[t._v("source code")]),t._v("\n          is under the MIT License.\n          "),o("br"),t._v("\n          2021 ©\n          "),o("a",{staticStyle:{"font-weight":"bold",color:"white"},attrs:{href:"https://github.com/iShafayet",target:"_blank"}},[t._v("Sayem Shafayet")])]),o("div",{staticStyle:{margin:"8px","font-size":"10px","text-align":"center"}},[t._v("\n          v"+t._s(t.appVersion)+"/b"+t._s(t.appBuild)+t._s(t.tag)+"\n        ")])])],1)],1),o("q-page-container",[o("router-view")],1)],1)},i=[],n={name:"MainLayout",components:{},data(){const t="json-re--hasWelcomeDialogBeenShown";let e=!0;return localStorage.getItem(t)&&(e=!1),{showWelcomeDialog:!0,appVersion:"0.3.1",tag:" (Beta)",appBuild:24}},methods:{helpClicked(){this.showWelcomeDialog=!0}}},l=n,r=a("2877"),s=a("4d5a"),c=a("e359"),p=a("65c6"),g=a("6ac5"),d=a("cb32"),h=a("9c40"),m=a("24e8"),v=a("f09f"),u=a("d847"),b=a("2c91"),S=a("05c0"),w=a("a370"),f=a("09e3"),y=a("7f67"),_=a("eebe"),x=a.n(_),q=Object(r["a"])(l,o,i,!1,null,null,null);e["default"]=q.exports;x()(q,"components",{QLayout:s["a"],QHeader:c["a"],QToolbar:p["a"],QToolbarTitle:g["a"],QAvatar:d["a"],QBtn:h["a"],QDialog:m["a"],QCard:v["a"],QBar:u["a"],QSpace:b["a"],QTooltip:S["a"],QCardSection:w["a"],QPageContainer:f["a"]}),x()(q,"directives",{ClosePopup:y["a"]})},8038:function(t,e,a){t.exports=a.p+"img/logo-main.c7343472.png"},d377:function(t,e,a){t.exports=a.p+"img/welcome-graphics-1.24800ec7.png"}}]);