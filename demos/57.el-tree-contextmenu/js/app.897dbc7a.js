(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],f=0,s=[];f<i.length;f++)o=i[f],l[o]&&s.push(l[o][0]),l[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==l[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},l={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),l=n.n(r);l.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("el-tree",{attrs:{data:e.data,id:"el-tree",props:e.defaultProps},on:{"node-click":e.handleNodeClick}}),n("context-menu",{staticClass:"right-menu",attrs:{target:e.contextMenuTarget,show:e.contextMenuVisible},on:{"update:show":function(t){return e.contextMenuVisible=t}}},[n("a",{attrs:{href:"javascript:;"},on:{click:e.handleClick}},[e._v("操作1")]),n("a",{attrs:{href:"javascript:;"},on:{click:e.handleClick}},[e._v("操作2")]),n("a",{attrs:{href:"javascript:;"},on:{click:e.handleClick}},[e._v("操作3")])]),e._v("\n    当前右键获取到的节点为："+e._s(JSON.stringify(e.nodeData))+"\n  ")],1)])},a=[],o=(n("ac6a"),{data:function(){return{contextMenuTarget:null,contextMenuVisible:!1,nodeData:{},data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},mounted:function(){var e=this;this.$nextTick(function(){e.contextMenuTarget=document.querySelector("#el-tree");var t=document.querySelectorAll('#el-tree [role="treeitem"]');t.forEach(function(e){e.addEventListener("contextmenu",function(e){e.target.click()})})})},methods:{handleNodeClick:function(e){console.log(e),this.nodeData=e},handleClick:function(){this.contextMenuVisible=!1}}}),i=o,c=(n("034f"),n("2877")),u=Object(c["a"])(i,l,a,!1,null,null,null),d=u.exports,f=n("5c96"),s=n.n(f);n("0fae");r["default"].use(s.a);var p=n("32ed"),h=n.n(p);r["default"].use(h.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.897dbc7a.js.map