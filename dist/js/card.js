!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(11)},function(e,t,n){Nova.booting(function(e,t,a){e.component("plausible-most-visited-pages",n(2))})},function(e,t,n){var a=n(8)(n(9),n(10),!1,function(e){n(3)},"data-v-142196aa",null);e.exports=a.exports},function(e,t,n){var a=n(4);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(6)("11633329",a,!0,{})},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".card-panel[data-v-142196aa]{height:auto!important}.most-visited-pages-list[data-v-142196aa]{list-style:none;padding:0;margin:0}.page-item[data-v-142196aa]{border-bottom:1px solid #bacad6}.page-item[data-v-142196aa]:last-of-type{border-bottom:none}.number-badge[data-v-142196aa]{background-color:#3c4b5f;border-radius:15px;color:#fff;font-size:.8rem;font-weight:700;padding:2px 6px;margin-left:5px}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(s=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(7),o={},s=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,u=0,l=!1,c=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e){for(var t=0;t<e.length;t++){var n=e[t],a=o[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(g(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(g(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,a=document.querySelector("style["+p+'~="'+e.id+'"]');if(a){if(l)return c;a.parentNode.removeChild(a)}if(f){var r=u++;a=i||(i=h()),t=b.bind(null,a,r,!1),n=b.bind(null,a,r,!0)}else a=h(),t=function(e,t){var n=t.css,a=t.media,r=t.sourceMap;a&&e.setAttribute("media",a);d.ssrId&&e.setAttribute(p,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}e.exports=function(e,t,n,a){l=n,d=a||{};var s=r(e,t);return v(s),function(t){for(var n=[],a=0;a<s.length;a++){var i=s[a];(u=o[i.id]).refs--,n.push(u)}t?v(s=r(e,t)):s=[];for(a=0;a<n.length;a++){var u;if(0===(u=n[a]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete o[u.id]}}}};var m,_=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function b(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var o=t[r],s=o[0],i={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};a[s]?a[s].parts.push(i):n.push(a[s]={id:s,parts:[i]})}return n}},function(e,t){e.exports=function(e,t,n,a,r,o){var s,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,i=e.default);var l,c="function"==typeof i?i.options:i;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=a),l){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:s,exports:i,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["card"],data:function(){return{pages:[],duration:"1"}},methods:{updateDuration:function(e){this.duration=e.target.value,this.getPages()},getPages:function(){var e=this;Nova.request().get("/nova-vendor/nova-plausible-analytics/plausible-most-visited-pages?duration="+this.duration).then(function(t){e.pages=t.data})}},mounted:function(){this.getPages()}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",{staticClass:"px-4 py-4"},[n("div",{staticClass:"flex mb-4"},[n("h3",{staticClass:"mr-3 text-base text-80 font-bold"},[e._v(e._s(e.__("Most Visited Pages")))]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"duration"}],staticClass:"select-box-sm ml-auto min-w-24 h-6 text-xs appearance-none bg-40 pl-2 pr-6 active:outline-none active:shadow-outline focus:outline-none focus:shadow-outline",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.duration=t.target.multiple?n:n[0]},e.updateDuration]}},[n("option",{attrs:{value:"1"}},[e._v("\n            "+e._s(e.__("Today"))+"\n        ")]),e._v(" "),n("option",{attrs:{value:"30"}},[e._v("\n            "+e._s(e.__("Last 30 Days"))+"\n        ")]),e._v(" "),n("option",{attrs:{value:"week"}},[e._v("\n            "+e._s(e.__("This Week"))+"\n        ")]),e._v(" "),n("option",{attrs:{value:"month"}},[e._v("\n            "+e._s(e.__("This Month"))+"\n        ")]),e._v(" "),n("option",{attrs:{value:"year"}},[e._v("\n            "+e._s(e.__("This Year"))+"\n        ")])])]),e._v(" "),e.pages?n("div",{staticClass:"flex items-center"},[n("ul",{staticClass:"most-visited-pages-list w-full"},e._l(e.pages,function(t){return n("li",{staticClass:"page-item align-middle"},[n("div",{staticClass:"flex justify-between py-2"},[n("div",[n("a",{staticClass:"flex-1 text-base text-primary no-underline",attrs:{href:"https://"+t.hostname+t.path,target:"_blank"}},[e._v("\n                        "+e._s(t.name)+"\n                    ")])]),e._v(" "),n("div",[n("span",{staticClass:"number-badge font-bold"},[e._v("\n                               "+e._s(t.visits)+"\n                           ")])])])])}),0)]):n("div",{staticClass:"flex items-center"},[n("p",{staticClass:"text-80 font-bold"},[e._v("\n        "+e._s(e.__("No Data"))+"\n    ")])])])},staticRenderFns:[]}},function(e,t){}]);