(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],u=0,h=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,l=1;l<i.length;l++){var r=i[l];0!==n[r]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00e6":function(t,e,i){},"0bc6":function(t,e,i){},"2a55":function(t,e,i){"use strict";var s=i("4cf6"),n=i.n(s);e["default"]=n.a},"3ced":function(t,e,i){"use strict";var s=i("4015"),n=i.n(s);n.a},4015:function(t,e,i){},"4cf6":function(t,e){},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),n=i("fb19"),a=i.n(n),o=(i("278f"),i("5363"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("task-bar",{attrs:{apps:t.sortedApps},on:{"window-launch":t.windowLaunch,"window-hide":t.windowHide,"window-focus":t.windowFocus}}),t._l(t.openWindows,(function(e,s){return i("fake-window",{directives:[{name:"show",rawName:"v-show",value:!e.minimized,expression:"!win.minimized"}],key:e.name,staticClass:"relative",style:{zIndex:e.z},attrs:{name:e.name,xpos:e.xpos,ypos:e.ypos,width:e.width,height:e.height,"min-width":e.width,"min-height":e.height,resizable:e.resizable},on:{"window-focus":function(i){return t.windowFocus(e)},"window-hide":function(i){return t.windowHide(e)},"window-close":function(e){return t.windowClose(s)},"window-save-pos":function(i){return t.windowSavePos(e,i)}}},[i(e.name+"-app",{tag:"component"})],1)}))],2)}),l=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"absolute bottom-0 flex justify-center w-full bg-gray-700 text-white text-4xl"},t._l(t.apps,(function(e){return i("button",{key:e.name+"ico",staticClass:"px-5",class:{"bg-gray-500":e.open},on:{click:function(i){return t.launchApp(e)}}},[i("span",{class:"mdi mdi-"+e.icon})])})),0)},c=[],d={name:"task-bar",props:{apps:{type:Array,required:!0}},methods:{launchApp(t){t.open?t.minimized?(t.minimized=!1,this.$emit("window-focus",t)):this.$emit("window-hide",t):(t.open=!0,this.$emit("window-launch",t))}}},u=d,h=i("2877"),p=Object(h["a"])(u,r,c,!1,null,null,null),m=p.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-draggable-resizable",{staticClass:"rounded-lg shadow-lg bg-white flex flex-col select-none",attrs:{x:t.x,y:t.y,w:t.w,h:t.h,"min-width":t.minWidth,resizable:t.resizable,"min-height":t.minHeight,"drag-handle":t.handle,parent:""},on:{activated:t.focusWindow,deactivated:t.unfocusWindow,dragging:t.moveWindow,resizing:t.resizeWindow}},[i("div",{staticClass:"header flex-none relative bg-gray-700 rounded-t h-6 text-white"},[i("p",{staticClass:"absolute left-0 pl-2"},[t._v(t._s(t.name))]),i("div",{staticClass:"absolute right-0 pr-2"},[i("button",{staticClass:"mdi mdi-window-minimize",on:{click:t.minWindow}}),i("button",{staticClass:"mdi mdi-window-maximize px-2",on:{click:t.maxWindow}}),i("button",{staticClass:"mdi mdi-close-circle",on:{click:t.closeWindow}})])]),i("div",{staticClass:"flex-auto overflow-hidden relative"},[t._t("default")],2)])},g=[],w={components:{"vue-draggable-resizable":a.a},props:{name:String,xpos:{type:Number,default:0},ypos:{type:Number,default:0},width:{type:Number,default:200},height:{type:Number,default:200},minWidth:{type:Number,default:200},minHeight:{type:Number,default:200},resizable:{type:Boolean,default:!0}},data(){return{w:this.width,h:this.height,x:this.xpos,y:this.ypos,handle:void 0}},methods:{focusWindow(){this.$emit("window-focus"),this.$nextTick(()=>{this.handle=".header"})},unfocusWindow(){this.handle=void 0},resizeWindow(t,e,i,s){this.x=t,this.y=e,this.w=i,this.h=s},moveWindow(t,e){this.x=t,this.y=e},minWindow(){this.$emit("window-hide")},maxWindow(){0==this.x&&0==this.y?(this.w=this.width,this.h=this.height,this.$nextTick(()=>{this.x=this.xpos,this.y=this.ypos})):(this.$emit("window-save-pos",{x:this.x,y:this.y}),this.x=0,this.y=0,this.w=window.innerWidth,this.h=window.innerHeight)},closeWindow(){this.$emit("window-close")}}},x=w,v=(i("a5cb"),Object(h["a"])(x,f,g,!1,null,null,null)),y=v.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex h-full"},[i("div",{staticClass:"flex-initial flex flex-col px-2 text-4xl text-gray-500"},[t._l(t.tools,(function(e){return i("button",{key:e.name,staticClass:"leading-snug",class:e.name==t.using.name?"text-purple-400":"",on:{click:function(i){return t.toolButton(e)}}},[i("span",{class:"mdi mdi-"+e.icon})])})),i("button",{on:{click:t.newDocument}},[i("span",{staticClass:"mdi mdi-file"})]),t._l(t.colors,(function(e){return i("button",{key:e,staticClass:"h-8 my-1 border",class:{"border-purple-500":t.color==e},style:"background-color:"+e,on:{click:function(i){return t.selectColor(e)}}})})),i("a",{staticClass:"absolute bottom-0",attrs:{href:t.art,download:"art.png"},on:{click:t.save}},[i("span",{staticClass:"mdi mdi-floppy"})])],2),i("div",{staticClass:"flex-auto bg-gray-200 rounded-br-lg overflow-hidden"},[i("canvas",{ref:"canvas",on:{mousedown:t.mouseDown,mousemove:t.mouseMove,touchmove:t.mouseMove,touchend:function(e){t.skipFrame=!0}}})]),i("popup-card",{attrs:{active:t.options},on:{close:t.toggleOptions}},[i("p",[t._v("Tool Options "),i("span",{class:"mdi mdi-"+t.using.icon})]),i("div",{staticClass:"flex pt-2"},[i("button",{on:{click:function(e){return t.decreaseSize(t.using)}}},[i("span",{staticClass:"mdi mdi-minus"})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.using.size,expression:"using.size"}],staticClass:"w-40 mx-2",attrs:{type:"range",min:"1",max:t.using.max},domProps:{value:t.using.size},on:{__r:function(e){return t.$set(t.using,"size",e.target.value)}}}),i("button",{on:{click:function(e){return t.increaseSize(t.using)}}},[i("span",{staticClass:"mdi mdi-plus"})]),i("p",{staticClass:"w-10"},[t._v(t._s(t.using.size)+"px")])])])],1)},C=[],k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"absolute w-full h-full"},[i("div",{staticClass:"absolute w-full h-full",on:{click:function(e){return t.$emit("close")}}}),i("div",{staticClass:"absolute w-full mt-10 flex justify-center pointer-events-none"},[i("div",{staticClass:"p-6 rounded-lg bg-white shadow-md text-gray-700 relative pointer-events-auto"},[t._t("default",[t._v("Content")]),i("button",{staticClass:"absolute top-0 right-0 m-6",on:{click:function(e){return t.$emit("close")}}},[i("span",{staticClass:"mdi mdi-close-circle"})])],2)])])},z=[],_={props:{active:{type:Boolean,default:!1}}},$=_,P=Object(h["a"])($,k,z,!1,null,null,null),W=P.exports,S={components:{PopupCard:W},data(){return{tools:[{name:"paintbrush",icon:"brush",size:2,max:100},{name:"pixel",icon:"checkbox-blank",size:1,max:100},{name:"glitter",icon:"creation",size:50,max:200}],colors:["#ffffff","#e7e8f3","#8c83c3","#634d8f","#120b19"],using:null,color:"",canvas:null,ctx:null,mouse:{prevX:0,prevY:0,x:0,y:0},art:"",skipFrame:!0,options:!1}},methods:{toolButton(t){t==this.using?this.toggleOptions():this.selectTool(t)},selectTool(t){this.using=t;let e=this.ctx;switch(e.lineWidth=t.size,e.strokeStyle=this.color,e.fillStyle=this.color,t.name){case"paintbrush":e.lineCap="round";break;case"pixel":e.lineCap="square";break}},selectColor(t){this.color=t,this.selectTool(this.using)},increaseSize(t){t.size++,t.size>t.max&&(t.size=t.max)},decreaseSize(t){t.size--,t.size<1&&(t.size=1)},toggleOptions(){this.options=!this.options,this.options||this.selectTool(this.using)},updateMouse(t){let e=t.touches?t.touches[0].clientX:t.clientX,i=t.touches?t.touches[0].clientY:t.clientY,s=this.canvas.getBoundingClientRect();this.mouse.x=e-s.left,this.mouse.y=i-s.top},mouseDown(t){if(!this.options){switch(this.updateMouse(t),this.ctx.beginPath(),this.using.name){case"paintbrush":this.ctx.arc(this.mouse.x,this.mouse.y,this.using.size/2,0,2*Math.PI);break;case"pixel":this.ctx.fillRect(this.mouse.x,this.mouse.y,this.using.size,this.using.size);break;case"glitter":this.drawGlitter(this.mouse.x,this.mouse.y);break}this.ctx.fill(),this.ctx.closePath()}},mouseMove(t){if(t.buttons||t.touches){let e=this.mouse.x,i=this.mouse.y;if(this.updateMouse(t),this.skipFrame)this.skipFrame=!1;else{let t=this.ctx;"glitter"==this.using.name?this.drawGlitter(this.mouse.x,this.mouse.y):(t.beginPath(),t.moveTo(e,i),t.lineTo(this.mouse.x,this.mouse.y),t.stroke(),t.closePath())}}else this.skipFrame=!0},drawGlitter(t,e){let i=0,s=0;for(var n=0;n<this.using.size;n++)i=Math.random()*n,s=Math.random()*n,this.ctx.fillRect(t+i,e+s,1,1),this.ctx.fillRect(t+i,e-s,1,1),this.ctx.fillRect(t-i,e-s,1,1),this.ctx.fillRect(t-i,e+s,1,1)},newDocument(){let t=this.canvas,e=this.ctx;t.width=t.parentNode.offsetWidth,t.height=t.parentNode.offsetHeight,e.fillStyle=this.colors[1],e.fillRect(0,0,t.width,t.height)},save(){this.art=this.canvas.toDataURL("image/png")}},created(){this.using=this.tools[0]},mounted(){this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.$nextTick(()=>{this.$nextTick(()=>{this.newDocument(),this.color=this.colors[this.colors.length-1],this.art=this.canvas.toDataURL("image/png"),this.selectTool(this.tools[0])})})}},T=S,V=Object(h["a"])(T,b,C,!1,null,null,null),N=V.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"w-full p-3 rounded-b-lg bg-pink-200",staticStyle:{height:"100%",resize:"none"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})},j=[],E={data(){return{text:""}},created(){this.text=this.$root.appdata.notepad||""},destroyed(){this.$root.appdata.notepad=this.text}},M=E,A=Object(h["a"])(M,O,j,!1,null,null,null),R=A.exports,B=i("ef3b"),D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-full flex flex-col"},[i("div",{ref:"messages",staticClass:"flex-auto px-3 max-h-full overflow-y-auto"},[i("p",{staticClass:"py-3 text-gray-600"},[t._v("This is the start of your magnificent chat with ygg.")]),i("hr",{staticClass:"h-2"}),t._l(t.chat,(function(e,s){return i("div",{key:s,class:t.textSide(e)},[i("transition",{attrs:{appear:""}},[i("div",{staticClass:"mt-2"},[e.sender?i("p",{staticClass:"text-sm"},[t._v("@"+t._s(e.sender))]):t._e(),i("p",{class:t.textProps(e)},[t._v(t._s(e.message))])])])],1)})),i("div",{staticClass:"h-10"})],2),i("div",{staticClass:"flex-initial flex w-full bg-gray-400 p-3 rounded-b-lg"},[i("div",{staticClass:"flex-auto rounded-sm bg-white"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"w-full px-3",domProps:{value:t.message},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(e)},input:function(e){e.target.composing||(t.message=e.target.value)}}})]),i("button",{staticClass:"flex-initial pl-3 text-purple-500 mdi mdi-send",on:{click:t.send}})])])},L=[],F={name:"chat-app",data(){return{chat:[{sender:null,message:"im listening to kpop"},{sender:null,message:"and dying"},{sender:"ygg",message:"why are you dying"},{sender:null,message:"its a constant mood"}],message:""}},methods:{scrollToEnd(){this.$nextTick(()=>{let t=this.$refs.messages;t.scrollTop=t.scrollHeight})},send(){/\S/.test(this.message)&&(this.chat.push({sender:null,message:this.message}),this.message="",this.scrollToEnd())},textSide(t){return null!==t.sender?"flex justify-start":"flex justify-end"},textProps(t){return null!==t.sender?"rounded-lg p-3 mr-20 bg-gray-400":"rounded-lg p-3 ml-20 bg-purple-300"}},created(){let t=this.$root.appdata.chat;t&&(this.chat=t),this.scrollToEnd()},destroyed(){this.$root.appdata.chat=this.chat}},H=F,I=Object(h["a"])(H,D,L,!1,null,null,null),G=I.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"px-3 h-full rounded-b-lg bg-purple-500 text-white"},[i("div",{key:"player",staticClass:"hidden",attrs:{id:"player"}}),i("div",{staticClass:"flex align-center"},[i("button",{class:{"text-purple-700 cursor-default":t.hasPrevVideo},attrs:{disabled:t.hasPrevVideo},on:{click:t.prevVideo}},[i("span",{staticClass:"mdi mdi-rewind text-2xl"})]),i("button",{directives:[{name:"show",rawName:"v-show",value:!t.playing,expression:"!playing"}],on:{click:t.playVideo}},[i("span",{staticClass:"mdi mdi-play text-4xl mx-2"})]),i("button",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],on:{click:t.pauseVideo}},[i("span",{staticClass:"mdi mdi-pause text-4xl mx-2"})]),i("button",{class:{"text-purple-700 cursor-default":t.hasNextVideo},attrs:{disabled:t.hasNextVideo},on:{click:t.nextVideo}},[i("span",{staticClass:"mdi mdi-fast-forward text-2xl"})])]),i("p",[t._v(t._s(t.videos[t.currentVideo][1]))])])},q=[],J={name:"music-app",data(){return{tag:null,player:null,playerLoaded:!1,playing:!1,videos:[["Rs2y4Nqku2o","Scars of Time - Chrono Cross"],["EL0YNmt1q4E","Stayin' Alive - Bee Gees (Vaporwave)"],["rmDiNAIccW8","Black Rain - Creeper"],["J67nkzoJ_2M","Stickerbrush Symphony - Donkey Kong Country 2"],["i8wghCdMncU","Resuscitated Hope - Gosick"],["d-nxW9qBtxQ","Ga1ahad and Scientific Witchery - Mili"]],currentVideo:0}},computed:{hasPrevVideo(){return this.currentVideo<1},hasNextVideo(){return this.currentVideo>=this.videos.length-1}},methods:{loadPlayer(){this.player=new YT.Player("player",{height:"200",width:"200",videoId:this.videos[0][0],events:{onReady:()=>{this.playerLoaded=!0},onStateChange:t=>{t.data==YT.PlayerState.ENDED&&(this.playing=!1)}}})},playVideo(){this.playerLoaded&&(this.player.playVideo(),this.playing=!0)},pauseVideo(){this.player.pauseVideo(),this.playing=!1},nextVideo(){this.currentVideo++,this.player.loadVideoById(this.videos[this.currentVideo][0]),this.playing=!0},prevVideo(){this.currentVideo--,this.player.loadVideoById(this.videos[this.currentVideo][0]),this.playing=!0}},mounted(){this.$root.appdata.music||(this.$root.appdata.music={}),this.$root.appdata.music.apiLoaded?this.loadPlayer():(this.tag=document.createElement("script"),this.tag.src="https://www.youtube.com/iframe_api",window.firstScriptTag=document.getElementsByTagName("script")[0],firstScriptTag.parentNode.insertBefore(this.tag,firstScriptTag),window.onYouTubeIframeAPIReady=()=>{this.$root.appdata.music.apiLoaded=!0,this.loadPlayer()})}},U=J,X=(i("8733"),Object(h["a"])(U,Y,q,!1,null,"5d7fe97b",null)),K=X.exports,Q={name:"app",components:{TaskBar:m,FakeWindow:y,PaintApp:N,NotepadApp:R,GameApp:B["default"],ChatApp:G,MusicApp:K},data(){return{apps:{paint:{name:"paint",icon:"brush",xpos:400,ypos:100,width:500,height:500,z:0,minimized:!1,open:!0},notepad:{name:"notepad",icon:"file-document-outline",xpos:200,ypos:370,width:400,height:300,z:0,minimized:!1,open:!0},game:{name:"game",icon:"gamepad-square",xpos:290,ypos:130,width:640,height:480,z:0,minimized:!1,open:!1,resizable:!1},music:{name:"music",icon:"music-box-multiple",xpos:20,ypos:30,width:300,height:150,z:0,minimized:!1,open:!0},chat:{name:"chat",icon:"message",xpos:40,ypos:50,width:300,height:500,z:0,minimized:!1,open:!0}},sortedApps:[],openWindows:[]}},created(){this.sortedApps=[this.apps.chat,this.apps.music,this.apps.paint,this.apps.notepad,this.apps.game];for(let t of this.sortedApps)t.open&&this.windowLaunch(t)},methods:{windowLaunch(t){t.z=this.openWindows.length,this.openWindows.push(t)},windowHide(t){t.minimized=!0},windowFocus(t){for(let e of this.openWindows)e.z>t.z&&e.z--;t.z=this.openWindows.length},windowClose(t){let e=this.openWindows.splice(t,1);e[0].open=!1},windowSavePos(t,{x:e,y:i}){t.xpos=e,t.ypos=i}}},Z=Q,tt=(i("3ced"),Object(h["a"])(Z,o,l,!1,null,"46a097f4",null)),et=tt.exports;s["a"].use(a.a),new s["a"]({data:{appdata:{}},render:t=>t(et)}).$mount("#app")},"59e6":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("pong")])},n=[]},8733:function(t,e,i){"use strict";var s=i("0bc6"),n=i.n(s);n.a},a5cb:function(t,e,i){"use strict";var s=i("00e6"),n=i.n(s);n.a},ef3b:function(t,e,i){"use strict";var s=i("59e6"),n=i("2a55"),a=i("2877"),o=Object(a["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports}});
//# sourceMappingURL=app.5d042b95.js.map