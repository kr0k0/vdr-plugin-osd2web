!function(t){function e(s){if(n[s])return n[s].exports;var o=n[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=16)}([function(t,e){t.exports=function(t,e,n,s,o){var a,r=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,r=t.default);var c="function"==typeof r?r.options:r;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),s&&(c._scopeId=s);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(t,e){return l.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:r,options:c}}},function(t,e){t.exports=common},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var s=n(17),o=n(1);o.Icon.register({skinfocus:{width:2048,height:1792,paths:[{d:"M1792 1248v-960q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v960q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zM1920 288v960q0 66-47 113t-113 47h-736v128h352q14 0 23 9t9 23v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-128h-736q-66 0-113-47t-47-113v-960q0-66 47-113t113-47h1600q66 0 113 47t47 113z"}]}});var a=o.Vue;a.component("o2w-event",n(32)),a.component("o2w-textmenu",n(29)),a.component("o2w-textarea",n(28)),a.component("o2w-actual",n(31)),a.component("o2w-timer",n(30)),a.component("o2w-navigation",n(23)),a.component("o2w-remote",n(25)),a.component("o2w-osd",n(24)),a.component("o2w-statusmessage",n(27)),a.component("o2w-overview",n(33)),a.component("o2w-replaycontrol",n(26));var r={data:{isOnlyView:/[?&]onlyView/.test(location.search),isActive:!1,skinAttached:!1,hasChannelLogos:!1,curView:"actual",menuItems:[],menuItemsRight:[],keyMap:{38:"Up",40:"Down",13:"Ok",8:"Back",27:"Back",37:"Left",39:"Right",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9"}},render:function(t){return t(n(21))},methods:{sendKey:function(t,e){this.$socket.send({event:"keypress",object:{key:t,repeat:e||1}})},mapKey:function(t){var e=this.keyMap[t];e&&this.sendKey(e)},formatDateTime:function(t){if(!t)return"";var e=new Date(1e3*t);return new Intl.DateTimeFormat("de-DE",{weekday:"short",year:"numeric",month:"long",day:"numeric"}).format(e)+" "+new String(100+e.getHours()).slice(1)+":"+new String(100+e.getMinutes()).slice(1)},formatDateTimeLong:function(t){if(!t)return"";var e=new Date(1e3*t);return new Intl.DateTimeFormat("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(e)+" "+new String(100+e.getHours()).slice(1)+":"+new String(100+e.getMinutes()).slice(1)},formatDateLong:function(t){if(!t)return"";var e=new Date(1e3*t);return new Intl.DateTimeFormat("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(e)},formatTime:function(t){if(!t)return"";var e=new Date(1e3*t);return new String(100+e.getHours()).slice(1)+":"+new String(100+e.getMinutes()).slice(1)},formatTimeLong:function(t){if(!t)return"";var e=new Date(1e3*t);return new String(100+e.getHours()).slice(1)+":"+new String(100+e.getMinutes()).slice(1)+":"+new String(100+e.getSeconds()).slice(1)}},created:function(){var t=this;try{if(this.$socket=new s.a({url:"ws://"+location.host,protocol:"osd2vdr",autoReconnectInterval:1e4,onopen:function(){null===t.isActive&&t.$socket.send({event:"login",object:{type:+(t.isOnlyView?1:0)}})},onclose:function(){t.isActive=null},onmessage:function(e){try{var n=JSON.parse(e.data.replace());t.$emit(n.event,n.object)}catch(t){console.log(t)}}}),!this.$socket)return!(this.$el.innerHTML="Your Browser will not support Websockets!");this.$socket.send({event:"login",object:{type:+(this.isOnlyView?1:0)}}),this.$on("send",this.$socket.send),this.$on("rolechange",function(e){t.isActive="active"==e.role,t.hasChannelLogos=1==e.havelogos}),this.$on("curView",function(e){t.curView=e||"actual"});var e={label:"",on:!1,icon:"skinfocus",func:function(t){t.$root.$emit("send",{event:this.on?"leavefocus":"takefocus"})}};if(this.$on("skinstate",function(n){t.skinAttached=1==n.attached,t.$root.$set(e,"on",t.skinAttached)}),this.menuItemsRight.push(e),this.isOnlyView){var n=document.scrollingElement||document.documentElement;window.autoScroll=function(t){var e=document.body.scrollHeight>document.body.clientHeight,s=document.body.currentStyle||window.getComputedStyle(document.body,"");e="visible"==s.overflow||"visible"==s.overflowY||e&&"auto"==s.overflow||e&&"auto"==s.overflowY;var o=3e3;if(e){var a=n.scrollTop;n.scrollTop+=t,a==n.scrollTop&&(t*=-1),o=80}window.setTimeout(window.autoScroll,o,t)},window.autoScroll(0)}else window.addEventListener("keyup",function(e){t.mapKey((e.altKey?"alt.":"")+(e.ctrlKey?"ctrl.":"")+(e.shiftKey?"shift.":"")+e.keyCode)});window.addEventListener("unload",function(){t.$socket.send({event:"logout",object:{}})})}catch(t){alert("<p>Error"+t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"o2w-app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"o2wEvent",props:{event:Object},data:function(){return{now:parseInt((new Date).getTime()/1e3,10)}},computed:{description:function(){return this.event.description?this.event.description.replace(/\n/g,"<br />"):""},progress:function(){var t=this;return this.event.title&&window.setTimeout(function(){t.now=parseInt((new Date).getTime()/1e3,10)},6e4),Math.max(parseInt((this.now-this.event.starttime)/this.event.duration*100,10),0)},imagecnt:function(){var t=this.event.epg2vdr?parseInt(this.event.epg2vdr.imagecount,10):0;return isNaN(t)?0:t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"o2wNavigation",props:{items:Array,itemsRight:Array},methods:{checkHeight:function(){var t=document.getElementById("topnav");t&&(t.style.height=t.firstChild.offsetHeight+"px")},isHidden:function(t){return"function"==typeof t.isHidden?t.isHidden.call(t,this):t.isHidden},handleSelect:function(t){t&&(t.func?t.func.call(t,this):t.key&&this.$root.sendKey(t.key))},renderLabel:function(t){var e=null,n=t.label.replace(/_(.)_/,function(t,n){return e=n.toLowerCase(),"<u>"+n+"</u>"});return e&&(this.keys[e]=t),n}},mounted:function(){window.setTimeout(this.checkHeight,300)},updated:function(){this.checkHeight()},created:function(){var t=this;this.keys={},window.addEventListener("keyup",function(e){e.altKey&&t.keys[e.key]&&(t.handleSelect(t.keys[e.key]),e.stopPropagation())}),window.addEventListener("resize",this.checkHeight)}}},function(t,e,n){"use strict";function s(){return{title:"",category:-1,pageUp:!1,pageDn:!1,event:{},buttons:[],maxLines:a}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);o.Icon.register({"osd-back":{width:1280,height:1792,paths:[{d:"M1171 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"}]}});var a=0;e.default={name:"o2wOsd",data:function(){return s()},created:function(){var t=this,e={label:"_O_SD",isHidden:function(t){return!t.$root.isActive},key:"menu"};if(this.$root.$data.menuItems.push(e),this.$root.$on("clearmenu",function(n){var o=s();for(var a in o)t[a]=o[a];t.$root.$set(e,"on",!1)}),this.$root.$on("menu",function(n){t.category=n.category,t.title=n.title,t.$root.$set(e,"on",!0)}),this.$root.$on("scrollbar",function(e){t.pageUp=e.Offset>0,t.pageDn=e.Total-a>e.Offset}),this.$root.$on("event",function(e){t.event=e}),this.$root.$on("buttons",function(e){t.buttons=[];for(var n in e)t.buttons.push({color:n,label:e[n]})}),this.$root.$on("rolechange",function(e){t.sendMaxLines(null,t.$root.isOnlyView?null:50)}),this.$root.isOnlyView){var n=function t(e){r?(new Date).getTime()-o>500&&(i.sendMaxLines(null),r=!!window.clearInterval(r)):r=window.setInterval(t,500),o=(new Date).getTime()},o=0,r=!1,i=this;window.addEventListener("resize",n)}},updated:function(){this.title?(this.$root.$emit("curView","osd"),this.$root.isOnlyView&&window.addEventListener("resize",this.sendMaxLines)):(this.$root.$emit("curView",null),window.removeEventListener("resize",this.sendMaxLines))},methods:{sendMaxLines:function(t,e){var n=e||o.maxLinesCalc.getMax();if(n!=a){a=n;for(var s=[],i=0;i<r.length;i++)s.push({category:i,maxlines:n,shape:r[i].shape});this.$root.$emit("send",{event:"maxlines",object:{categories:s}})}}}};var r=[{category:"mcUnknown",maxlines:100,shape:1},{category:"mcMain",maxlines:100,shape:1},{category:"mcSchedule",maxlines:100,shape:1},{category:"mcScheduleNow",maxlines:100,shape:1},{category:"mcScheduleNext",maxlines:100,shape:1},{category:"mcChannel",maxlines:100,shape:1},{category:"mcChannelEdit",maxlines:100,shape:1},{category:"mcTimer",maxlines:100,shape:1},{category:"mcTimerEdit",maxlines:100,shape:1},{category:"mcRecording",maxlines:100,shape:1},{category:"mcRecordingInfo",maxlines:100,shape:1},{category:"mcRecordingEdit",maxlines:100,shape:1},{category:"mcPlugin",maxlines:100,shape:1},{category:"mcPluginSetup",maxlines:100,shape:1},{category:"mcSetup",maxlines:100,shape:1},{category:"mcSetupOsd",maxlines:100,shape:1},{category:"mcSetupEpg",maxlines:100,shape:1},{category:"mcSetupDvb",maxlines:100,shape:1},{category:"mcSetupLnb",maxlines:100,shape:1},{category:"mcSetupCam",maxlines:100,shape:1},{category:"mcSetupRecord",maxlines:100,shape:1},{category:"mcSetupReplay",maxlines:100,shape:1},{category:"mcSetupMisc",maxlines:100,shape:1},{category:"mcSetupPlugins",maxlines:100,shape:1},{category:"mcCommand",maxlines:100,shape:1},{category:"mcEvent",maxlines:100,shape:1},{category:"mcText",maxlines:100,shape:1},{category:"mcFolder",maxlines:100,shape:1},{category:"mcCam",maxlines:100,shape:1}];r[-1]={category:"mcUndefined",maxlines:100,shape:1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(1).Icon.register({remote:{width:1408,height:1792,paths:[{d:"M384 1344q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zM896 1467q2 28-17 48-18 21-47 21h-135q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5t-391.5-184.5q-25-2-41.5-20t-16.5-43v-135q0-29 21-47 17-17 43-17h5q160 13 306 80.5t259 181.5q114 113 181.5 259t80.5 306zM1408 1469q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5t-19.5-42.5q-12-215-101-408.5t-231.5-336-336-231.5-408.5-102q-25-1-42.5-19.5t-17.5-43.5v-143q0-28 20-46 18-18 44-18h3q262 13 501.5 120t425.5 294q187 186 294 425.5t120 501.5z"}]}}),e.default={name:"o2wRemote",data:function(){return{menuItem:{label:"",on:!1,icon:"remote",func:function(t){this.on=!this.on,t.$root.isActive||t.$root.$socket.reopen()}}}},methods:{handleClick:function(t){t.target&&t.target.alt&&this.$root.sendKey(t.target.alt)}},created:function(){this.$root.$data.menuItems.push(this.menuItem)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1);s.Icon.register({pause:{width:1536,height:1792,paths:[{d:"M1536 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zM640 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z"}]}}),s.Icon.register({play:{width:1408,height:1792,paths:[{d:"M1384 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"}]}}),s.Icon.register({stop:{width:1536,height:1792,paths:[{d:"M1536 192v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z"}]}}),s.Icon.register({"fast-backward":{width:1792,height:1792,paths:[{d:"M1747 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v710q0 26-13 32t-32-13l-710-710q-9-9-13-19v678q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h128q26 0 45 19t19 45v678q4-10 13-19l710-710q19-19 32-13t13 32v710q4-10 13-19z"}]}}),s.Icon.register({"fast-forward":{width:1792,height:1792,paths:[{d:"M45 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q9 9 13 19v-710q0-26 13-32t32 13l710 710q9 9 13 19v-678q0-26 19-45t45-19h128q26 0 45 19t19 45v1408q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-678q-4 10-13 19l-710 710q-19 19-32 13t-13-32v-710q-4 10-13 19z"}]}});var o=[{key:"FastRew",icon:"fast-backward"},{key:"Play",icon:"play"},{key:"Pause",icon:"pause"},{key:"Stop",icon:"stop"},{key:"FastFwd",icon:"fast-forward"}];e.default={name:"o2wReplayControl",data:function(){return{buttons:{},controlInfo:null}},created:function(){var t=this;this.$root.$on("actual",function(e){t.buttons=null,t.controlInfo=null}),this.$root.$on("replay",function(e){t.controlInfo=e.filename}),this.$root.$on("replaycontrol",function(e){t.buttons=o,1==e.play&&(t.buttons[1].color="red"),e.speed>=0&&(t.buttons[1==e.forward?4:0].color="red")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=["-success","-info","-warning","-danger"];e.default={name:"o2wStatusmessage",data:function(){return{msg:"",type:0}},created:function(){var t=this;this.$root.$on("message",function(e){t.msg=e.message,t.type="alert"+(s[e.type]||"")}),this.$root.$on("channelgroup",function(e){t.msg=e.name,t.type="alert-info"})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"o2wTextarea",data:function(){return{text:""}},created:function(){var t=this;this.$root.$on("menutext",function(e){t.text=e.text.replace(/\n/g,"<br />")}),this.$root.$on("textscroll",function(t){t.page?t.up?document.body.scrollLeft=Math.max(0,document.body.scrollLeft-document.body.clientWidth):document.body.scrollLeft+=document.body.clientWidth:t.up?document.body.scrollTop=Math.max(0,document.body.scrollTop-document.body.clientHeight):document.body.scrollTop=document.body.scrollTop+document.body.clientHeight})}}},function(t,e,n){"use strict";function s(){return{rows:[],colCount:0,textmenucurrent:0,canEdit:0}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1).Icon;o.register({"caret-left":{width:640,height:1792,paths:[{d:"M640 448v896q0 26-19 45t-45 19-45-19l-448-448q-19-19-19-45t19-45l448-448q19-19 45-19t45 19 19 45z"}]}}),o.register({"caret-right":{width:640,height:1792,paths:[{d:"M576 896q0 26-19 45l-448 448q-19 19-45 19t-45-19-19-45v-896q0-26 19-45t45-19 45 19l448 448q19 19 19 45z"}]}}),o.register({"caret-down":{width:1024,height:1792,paths:[{d:"M1024 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"}]}}),o.register({"caret-up":{width:1024,height:1792,paths:[{d:"M1024 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"}]}}),e.default={name:"o2wTextmenu",data:function(){return s()},created:function(){var t=this;this.$root.$on("clearmenu",function(e){var n=s();for(var o in n)t[o]=n[o]}),this.$root.$on("menu",function(e){t.canEdit=e.editable||0,t.colCount=-1}),this.$root.$on("menuitem",function(e){t.colCount<0&&e.text&&(t.colCount=e.text.split("\t").length,2==t.colCount&&t.canEdit?t.colCount++:t.canEdit=0),t.$set(t.rows,e.index,{cols:e.text?e.text.split("\t"):new Array(t.colCount),selectable:e.selectable,textEdit:t.canEdit&&/.+\\t.*\[.\]/.test(e.text)}),e.current&&(t.textmenucurrent=e.index)})},methods:{doAction:function(t,e){var n=t-this.textmenucurrent;if(0!=n){var s=0,o=void 0;if(n>0){for(n=this.textmenucurrent;n<t;n++)(o=this.rows[n])&&o.selectable&&s++;this.$root.sendKey("Down",s)}else{for(n=t;n<this.textmenucurrent;n++)(o=this.rows[n])&&o.selectable&&s++;this.$root.sendKey("Up",s)}}else this.$root.sendKey(e||"Ok")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"o2wTimer",data:function(){return{timers:null,detail:-1}},created:function(){var t=this;this.$root.$on("timers",function(e){t.timers=e&&e.length?e:null,t.timers&&t.timers.forEach(function(t,e){t.id=t.id||e})})},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"o2wActual",data:function(){return{channel:{},present:{},following:{}}},created:function(){var t=this;this.$root.$on("actual",function(e){t.channel=e.channel,t.present=e.present,t.following=e.following}),this.$root.$on("replay",function(e){t.channel={},t.following={};var n=e.event||{};e.event||(n.title=e.name,n.duration=e.lengthinseconds),n.starttime=parseInt((new Date).getTime()/1e3,10),n.endtime=n.starttime+n.duration,t.present=n})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(1).Vue.component("o2w-fullevent",n(22)),e.default={name:"o2wEvent",props:{event:Object},data:function(){return{now:parseInt((new Date).getTime()/1e3,10),isFullevent:"o2w-actual"!=this.$parent.$options._componentTag}},computed:{description:function(){return this.event.epg2vdr&&this.event.epg2vdr.longdescription?this.event.epg2vdr.longdescription.replace(/\n/g,"<br />"):this.event.epg2vdr&&this.event.epg2vdr.shortdescription?this.event.epg2vdr.shortdescription.replace(/\n/g,"<br />"):""},progress:function(){var t=this;return this.event.title&&window.setTimeout(function(){t.now=parseInt((new Date).getTime()/1e3,10)},6e4),Math.max(parseInt((this.now-this.event.starttime)/this.event.duration*100,10),0)},elapsed:function(){var t=this;return this.event.title&&window.setTimeout(function(){t.now=parseInt((new Date).getTime()/1e3,10)},6e4),Math.max(parseInt((this.now-this.event.starttime)/60,10),0)},imagecnt:function(){var t=this.event.epg2vdr?parseInt(this.event.epg2vdr.imagecount,10):0;return isNaN(t)?0:t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"o2wOverview",data:function(){return{now:parseInt((new Date).getTime()/1e3,10)}},computed:{actualtime:function(){var t=this;return window.setTimeout(function(){t.now=parseInt((new Date).getTime()/1e3,10)},1e3),this.$root.formatTimeLong(this.now)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2);window.v=new s.a({mixins:[s.b]}).$mount("#app")},function(t,e,n){"use strict";function s(t){if(!window.WebSocket)return!1;var e=this,n=[];this.onclose=function(){console.log("websocket connection closed")},this.onerror=function(t){console.log("websocket error: ",t)};for(var s in t)this[s]=t[s];return this.reconnect=function(t){e.autoReconnectInterval&&(console.log("WebSocketClient: retry in "+e.autoReconnectInterval+"ms",t),setTimeout(function(){console.log("WebSocketClient: reconnecting..."),e.open()},e.autoReconnectInterval))},this.send=function(t){n?n.push(t):e.ws.send(JSON.stringify(t))},this.open=function(){e.ws=new WebSocket(e.url,e.protocol),e.ws.onopen=function(t){if(n){for(var s=void 0;s=n.shift();)e.ws.send(JSON.stringify(s));n=null}e.onopen&&e.onopen(t)},e.ws.onmessage=e.onmessage,e.ws.onclose=function(t){switch(n=[],t){case 1e3:console.log("WebSocket: closed");break;default:e.reconnect(t)}e.onclose&&e.onclose(t)},e.ws.onerror=function(t){switch(t.code){case"ECONNREFUSED":e.reconnect(t);break;default:e.onerror||e.onerror(t)}}},this.reopen=function(){e.ws.onerror=e.ws.onclose=e.ws.onmessage=null,e.ws.close(),e.open()},this.open(),this}e.a=s},,,function(t,e,n){t.exports=n.p+"remotecontrol.jpg"},function(t,e,n){var s=n(0)(n(3),n(35),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(4),n(42),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(5),n(44),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(6),n(38),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(7),n(40),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(8),n(36),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(9),n(41),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(10),n(46),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(11),n(45),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(12),n(43),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(13),n(39),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(14),n(37),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(15),n(34),null,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row dataarea"},[n("o2w-actual",{staticClass:"eventarea col-12 col-md-9"}),t._v(" "),n("o2w-timer",{staticClass:"timerarea col-12 col-md-3"})],1),t._v(" "),n("div",{staticClass:"card statusbar"},[n("div",{staticClass:"row my-auto ml-auto"},[n("div",{staticClass:"my-auto mr-3 sdatetxt"},[t._v(t._s(t.$root.formatDateLong(parseInt((new Date).getTime()/1e3,10))))]),t._v(" "),n("div",{staticClass:"col text-right my-auto mr-4 stimetxt"},[t._v(t._s(t.actualtime))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"viewport",attrs:{id:"app-view"}},[t.$root.isOnlyView?t._e():n("o2w-navigation",{attrs:{items:t.$root.menuItems,itemsRight:t.$root.menuItemsRight}}),t._v(" "),n("o2w-statusmessage"),t._v(" "),n("div",{staticClass:"d-flex flex-row"},[t.$root.isOnlyView?t._e():n("o2w-remote"),t._v(" "),n("div",{staticClass:"container-fluid",attrs:{id:"o2wContainer"}},[n("o2w-osd",{attrs:{name:"osd"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"osd"!=t.$root.curView,expression:"$root.curView !='osd'"}],attrs:{id:"o2wContent"}},[n("o2w-overview")],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.buttons?n("div",[n("div",[t._v(t._s(t.controlInfo))]),t._v(" "),n("div",{staticClass:"btn-group btn-group-sm justify-content-center"},t._l(t.buttons,function(e,s){return n("a",{staticClass:"btn btn-secondary",style:{color:e.color},on:{click:function(n){t.$root.sendKey(e.key)}}},[n("icon",{attrs:{name:e.icon}})],1)}))]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isFullevent?n("o2w-fullevent",{attrs:{event:t.event}}):n("div",{staticClass:"event card mt-1"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.event.title,expression:"event.title"}],staticStyle:{height:"100%"}},[n("div",{staticClass:"card-block p-1",staticStyle:{height:"100%"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.progress,expression:"progress"}],staticClass:"progress"},[n("div",{staticClass:"progress-bar",style:{width:t.progress+"%"},attrs:{role:"progressbar","aria-valuenow":{progress:t.progress},"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.progress)+"%")])]),t._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"card-title col-12 col-md-10 titletxt"},[t._v(t._s(t.$root.formatTime(t.event.starttime))+" "+t._s(t.event.title))]),t._v(" "),t.elapsed>0?n("div",{staticClass:"ml-auto col-12 col-md-2 desctxt"},[t._v(t._s(t.elapsed)+"/"+t._s(parseInt(t.event.duration/60,10))+" min")]):t._e(),t._v(" "),t.elapsed<=0?n("div",{staticClass:"ml-auto col-12 col-md-2 desctxt"},[t._v(t._s(parseInt(t.event.duration/60,10))+" min")]):t._e()]),t._v(" "),n("div",{staticClass:"clearfix"},[t.event.epg2vdr?n("div",{staticClass:"img-fluid float-right img-thumbnail carousel slide",attrs:{id:"evImages"+t.event.eventid,"data-ride":"carousel","data-interval":"5000"}},[n("div",{staticClass:"carousel-inner epg-image",attrs:{role:"listbox"}},t._l(t.imagecnt,function(e){return n("div",{staticClass:"carousel-item",class:{active:1==e}},[n("img",{staticClass:"d-block",staticStyle:{width:"100%"},attrs:{src:"/data/eventimg?id="+t.event.eventid+"&no="+(e-1),alt:""}})])}))]):t._e(),t._v(" "),t.event.epg2vdr?n("div",[t.event.epg2vdr.shorttext?n("div",{staticClass:"card-text htxt"},[t._v(t._s(t.event.shorttext))]):t._e(),t._v(" "),t.event.epg2vdr.genre?n("div",{staticClass:"card-text htxt"},[t._v(t._s(t.event.epg2vdr.genre)+" / "+t._s(t.event.epg2vdr.category))]):t._e(),t._v(" "),t.event.epg2vdr.episodepartname?n("div",{staticClass:"card-text htxt"},[t._v(t._s(t.event.epg2vdr.episodepartname))]):t._e(),t._v(" "),t.event.epg2vdr.country?n("div",{staticClass:"card-text htxt"},[t._v(t._s(t.event.epg2vdr.country)+" "+t._s(t.event.epg2vdr.year))]):t._e(),t._v(" "),t.event.epg2vdr.tipp?n("div",{staticClass:"card-text htxt"},[t._v(t._s(t.event.epg2vdr.tipp)+"  "+t._s(t.event.epg2vdr.txtrating))]):t._e()]):n("div",{staticClass:"col-12 col-md-9"},[t.event.shorttext?n("div",{staticClass:"card-text htxt"},[t._v(t._s(t.event.shorttext))]):t._e()]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.description,expression:"description"}],staticClass:"desctxt",domProps:{innerHTML:t._s(t.description)}})])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:"osd"==t.$root.curView,expression:"$root.curView == 'osd'"}],attrs:{id:"osdCon"}},[n("div",{staticClass:"container",on:{click:function(e){t.$root.sendKey("Back")}}},[n("h3",{},[t.$root.isOnlyView?t._e():n("icon",{attrs:{name:"osd-back"}}),t._v(" "+t._s(t.title))],1)]),t._v(" "),n("o2w-textmenu"),t._v(" "),n("o2w-event",{attrs:{event:t.event}}),t._v(" "),n("o2w-textarea"),t._v(" "),n("div",{staticClass:"btn-group btn-group-sm justify-content-center fixed-bottom",attrs:{id:"buttons"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.pageUp,expression:"pageUp"}],staticClass:"btn btn-secondary",on:{click:function(e){t.$root.sendKey("Up",t.maxLines)}}},[n("icon",{attrs:{name:"caret-up"}})],1),t._v(" "),t._l(t.buttons,function(e,s){return n("button",{staticClass:"btn btn-primary",class:"but-"+e.color,attrs:{type:"button"},on:{click:function(n){t.$root.sendKey(e.color)}}},[t._v(t._s(e.label))])}),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.pageDn,expression:"pageDn"}],staticClass:"btn btn-secondary",on:{click:function(e){t.$root.sendKey("Down",t.maxLines)}}},[n("icon",{attrs:{name:"caret-down"}})],1)],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Actual"}},[n("o2w-replaycontrol"),t._v(" "),t.channel.channelid?n("div",{staticClass:"channel card mt-1"},[n("div",{staticClass:"row",staticStyle:{height:"100%"}},[n("h3",{staticClass:"d-block my-auto ml-3 card-title htxt chtxt"},[t._v(" "+t._s(t.channel.channelnumber))]),t._v(" "),n("h3",{staticClass:"d-block my-auto card-title chtxt"},[t._v(" "+t._s(t.channel.channelname))]),t._v(" "),t.$root.hasChannelLogos?n("div",{staticClass:"media my-auto d-flex flex-column ml-auto p-1 chlogo"},[n("img",{staticClass:"d-block",staticStyle:{"max-height":"95%"},attrs:{align:"right",src:"/data/channellogo?name="+t.channel.channelname+"&id="+t.channel.channelid}})]):t._e()])]):t._e(),t._v(" "),n("o2w-event",{attrs:{event:t.present}}),t._v(" "),n("o2w-event",{attrs:{event:t.following}})],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuItem.on,expression:"menuItem.on"}],staticStyle:{"min-width":"180px","min-height":"385px"}},[s("img",{staticStyle:{position:"fixed","z-index":"999"},attrs:{src:n(20),width:"162",height:"378",border:"0",usemap:"#remote",alt:""}}),t._v(" "),s("map",{attrs:{name:"remote"},on:{click:function(e){t.handleClick(e)}}},[s("area",{attrs:{shape:"circle",coords:"37,36,10",alt:"Power"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"27,60,59,75",alt:"1"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"64,59,98,75",alt:"2"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"103,59,137,75",alt:"3"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"25,82,60,98",alt:"4"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"65,82,98,99",alt:"5"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"103,83,137,99",alt:"6"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"26,106,60,121",alt:"7"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"65,105,97,121",alt:"8"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"104,106,137,122",alt:"9"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"66,128,98,144",alt:"0"}}),t._v(" "),s("area",{attrs:{shape:"circle",coords:"37,157,13",alt:"Volume+"}}),t._v(" "),s("area",{attrs:{shape:"circle",coords:"37,190,13",alt:"Volume-"}}),t._v(" "),s("area",{attrs:{shape:"circle",coords:"125,157,13",alt:"Channel+"}}),t._v(" "),s("area",{attrs:{shape:"circle",coords:"125,190,13",alt:"Channel-"}}),t._v(" "),s("area",{attrs:{shape:"circle",coords:"81,174,8",alt:"Mute"}}),t._v(" "),s("area",{attrs:{shape:"circle",coords:"81,202,11",alt:"Recordings"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"39,215,29,227,30,235,39,236,51,222,49,215,43,213",alt:"Menu"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"119,213,127,219,135,230,132,235,127,236,119,231,114,223,113,215",alt:"Back"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"33,289,31,298,43,310,51,308,54,300,41,287",alt:"Subtitles"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"131,289,133,298,122,310,112,308,110,300,122,287",alt:"Audio"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"58,230,70,223,82,223,91,223,105,231,96,240,87,237,78,236,69,240,66,241,58,232",alt:"Up"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"111,237,119,249,121,259,119,275,113,285,109,284,101,276,104,270,107,260,106,253,101,245",alt:"Right"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"66,281,75,285,86,285,95,281,106,291,100,295,87,300,73,300,58,291,57,289,58,289",alt:"Down"}}),t._v(" "),s("area",{attrs:{shape:"poly",coords:"51,236,61,245,56,256,57,266,61,277,52,285,47,278,42,264,43,252,49,240",alt:"Left"}}),t._v(" "),s("area",{attrs:{shape:"circle",coords:"81,261,17",alt:"Ok"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"25,324,52,339",alt:"Red"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"53,324,81,339",alt:"Green"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"83,324,109,339",alt:"Yellow"}}),t._v(" "),s("area",{attrs:{shape:"rect",coords:"110,324,137,339",alt:"Blue"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.msg,expression:"msg"}],staticClass:"alert alert-dismissible fade show",class:t.type},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){t.msg=""}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),n("p",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.event.title,expression:"event.title"}],staticClass:"card"},[n("div",{staticClass:"card-block"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.event.title))]),t._v(" "),n("div",{staticClass:"card-text"},[t._v(t._s(t.event.shorttext))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.progress,expression:"progress"}],staticClass:"progress"},[n("div",{staticClass:"progress-bar",style:{width:t.progress+"%"},attrs:{role:"progressbar","aria-valuenow":{progress:t.progress},"aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.progress)+"%")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._v("\n              "+t._s(t.$root.formatDateTime(t.event.starttime))+" - "+t._s(t.$root.formatTime(t.event.endtime))+"\n          ")]),t._v(" "),n("div",{staticClass:"col text-right"},[t._v("\n              "+t._s(parseInt(t.event.duration/60,10))+" min")])]),t._v(" "),t.event.epg2vdr?n("div",{staticClass:"carousel slide",attrs:{id:"evImages"+t.event.eventid,"data-ride":"carousel","data-interval":"5000"}},[n("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},t._l(t.imagecnt,function(e){return n("div",{staticClass:"carousel-item",class:{active:1==e}},[n("img",{staticClass:"d-block",attrs:{src:"/data/eventimg?id="+t.event.eventid+"&no="+(e-1),alt:""}})])})),t._v(" "),n("a",{staticClass:"carousel-control-prev",attrs:{href:"#evImages"+t.event.eventid,role:"button","data-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._v(" "),n("a",{staticClass:"carousel-control-next",attrs:{href:"#evImages"+t.event.eventid,role:"button","data-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Next")])]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.event.epg2vdr.longdescription)}})]):t._e()]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"card-block"},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.description,expression:"description"}],domProps:{innerHTML:t._s(t.description)}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.timers?n("div",{staticClass:"list-group",staticStyle:{overflow:"hidden"},attrs:{id:"actual-timer"}},[t.$root.isOnlyView?t._e():n("h3",[t._v("Timer")]),t._v(" "),t._l(t.timers,function(e,s){return n("div",{staticClass:"mt-2"},[n("a",{staticClass:"list-group-item list-group-item-action flex-column align-items-start p-1 active",class:{timeron:e.recording,timer:!e.recording},on:{click:function(n){n.stopPropagation(),t.detail=t.detail==e.id?-1:e.id}}},[n("div",{staticClass:"d-flex w-100 justify-content-between tmtxt"},[n("div",{},[t._v(t._s(e.file))]),t._v(" "),n("div",[e.channel?n("small",{staticClass:"tltmch"},[t._v(t._s(e.channel.channelname))]):t._e(),t._v(" "),e.epg2vdr?n("small",{staticClass:"tlvdrtxt"},[t._v("["+t._s(e.epg2vdr.vdrname)+"]")]):t._e(),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"tltmtxt"},[t._v(t._s(t.$root.formatDateTime(e.starttime)))])])])]),t._v(" "),t.detail==e.id?n("o2w-event",{attrs:{event:e.event}}):t._e()],1)})],2):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-toggleable-xl navbar-light bg-faded fixed-top"},[t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[n("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.items,function(e){return t.isHidden(e)?t._e():n("li",{staticClass:"nav-item",class:{active:e.on},on:{click:function(n){t.handleSelect(e)}}},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[e.icon?n("icon",{attrs:{name:e.icon}}):t._e(),n("span",{domProps:{innerHTML:t._s(t.renderLabel(e))}})],1)])})),t._v(" "),t.$root.isActive?n("ul",{staticClass:"navbar-nav ml-auto"},t._l(t.itemsRight,function(e){return t.isHidden(e)?t._e():n("li",{staticClass:"nav-item",class:{active:e.on},on:{click:function(n){t.handleSelect(e)}}},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[e.icon?n("icon",{attrs:{name:e.icon}}):t._e(),n("span",{domProps:{innerHTML:t._s(t.renderLabel(e))}})],1)])})):t._e()])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.colCount>0?n("table",{staticClass:"table table-hover textmenu",class:{"text-nowrap":t.$root.isOnlyView}},[n("tbody",t._l(t.rows,function(e,s){return n("tr",{key:s,class:{"table-active":s==t.textmenucurrent,"textmenu-current":s==t.textmenucurrent},on:{click:function(n){e.selectable&&t.doAction(s)}}},[t._l(e.cols,function(e,o){return n("td",{key:o,class:{"bg-warning":s==t.textmenucurrent&&1==o&&1==t.canEdit}},[t._v(t._s(e))])}),t._v(" "),e.selectable&&1==t.canEdit?n("td",{staticClass:"btn-group btn-group-sm"},[n("a",{staticClass:"btn btn-secondary",on:{click:function(e){e.stopPropagation(),t.doAction(s,"Left")}}},[n("icon",{attrs:{name:"caret-left"}})],1),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.textEdit,expression:"row.textEdit"}],staticClass:"btn btn-secondary",on:{click:function(e){e.stopPropagation(),t.$root.sendKey("Up")}}},[n("icon",{attrs:{name:"caret-up"}})],1),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.textEdit,expression:"row.textEdit"}],staticClass:"btn btn-secondary",on:{click:function(e){e.stopPropagation(),t.$root.sendKey("Down")}}},[n("icon",{attrs:{name:"caret-down"}})],1),t._v(" "),n("a",{staticClass:"btn btn-secondary",on:{click:function(e){e.stopPropagation(),t.doAction(s,"Right")}}},[n("icon",{attrs:{name:"caret-right"}})],1)]):t._e()],2)}))]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.text,expression:"text"}],staticClass:"card"},[n("div",{staticClass:"card-block",domProps:{innerHTML:t._s(t.text)}})])},staticRenderFns:[]}}]);
//# sourceMappingURL=skin.js.map