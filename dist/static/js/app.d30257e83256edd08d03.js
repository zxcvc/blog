webpackJsonp([9],{"+BTi":function(t,e){},"+Rdb":function(t,e){},"/SNI":function(t,e){},Dte2:function(t,e){},Dzb6:function(t,e){},GXEp:function(t,e){},J84p:function(t,e){},Jmt5:function(t,e){},LL4n:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("cwe7"),n("+BTi");var s=n("2X9z"),o=n.n(s),a=(n("LL4n"),n("BrEC")),i=n.n(a),r=(n("U/ZW"),n("+nRk")),c=n.n(r),l=(n("Dzb6"),n("o6kb")),u=n.n(l),d=(n("xBlb"),n("dVA0")),m=n.n(d),p=(n("Yq4J"),n("qubY")),f=n.n(p),g=(n("Dte2"),n("q4le")),h=n.n(g),v=(n("isE6"),n("LR6y")),b=n.n(v),_=(n("X+ky"),n("HJMx")),w=n.n(_),x=(n("+Rdb"),n("Mezo")),k=n.n(x),C=(n("qunJ"),n("vqwl")),y=n.n(C),F=(n("GXEp"),n("mtrD")),I=n.n(F),V=(n("Q6SQ"),n("LQMI")),$=n.n(V),S=n("7+uW"),j=n("/ocq"),L=n("NYxO");S.default.use(L.a);var D=new L.a.Store({state:{dialogFormVisible:!1,show:!1,album:[{id:1,src:"https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"},{id:1,src:"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"},{id:1,src:"https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"},{id:1,src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg"},{id:1,src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg"},{id:1,src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1451330793,2242997567&fm=27&gp=0.jpg"},{id:1,src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg"}]},getters:{getAlbum:t=>t.album,dialogFormVisible:t=>t.dialogFormVisible},mutations:{loginregin(t){t.show=!t.show},changeDialogFormVisible(t,e){t.dialogFormVisible=e}}});S.default.use(j.a);var E=new j.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:function(){return n.e(1).then(n.bind(null,"26dS"))}},{path:"/allArticles",component:function(){return n.e(7).then(n.bind(null,"DEZr"))}},{path:"/messageboard",component:function(){return n.e(4).then(n.bind(null,"ijPn"))}},{path:"/albumcard",component:function(){return n.e(0).then(n.bind(null,"h8j3"))}},{path:"/album",component:function(){return n.e(2).then(n.bind(null,"Emcu"))}},{path:"/article",name:"detile",component:function(){return n.e(5).then(n.bind(null,"t3Gv"))}},{path:"/register",component:function(){return n.e(6).then(n.bind(null,"c2lw"))}},{path:"/addArticle",component:function(){return n.e(3).then(n.bind(null,"8ILX"))},beforeEnter:function(t,e,n){localStorage.getItem("user")?n():D.commit("changeDialogFormVisible",!0)}}]}),J=n("Dd8w"),N=n.n(J),O=n("Xxa5"),q=n.n(O),T=n("mvHQ"),H=n.n(T),Q=n("exGp"),R=n.n(Q),U={data:function(){return{tipShow:!1,success:!1,error:!1,timeId:null,username:"",password:"",nick:"",tips:"",formLabelWidth:"120px"}},computed:{dialogFormVisible:{get:function(){return this.$store.getters.dialogFormVisible},set:function(t){this.$store.commit("changeDialogFormVisible",t)}}},methods:{check:function(){this.asyncCheck()},asyncCheck:function(){var t=this;return R()(q.a.mark(function e(){var n,s,o;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.username,password:t.password},e.next=3,t.$axios.post("/api/login",t.$qs.stringify(n));case 3:if(s=e.sent,(o=s.data).success){e.next=9;break}return t.error=!0,t.tips=o.msg,e.abrupt("return");case 9:localStorage.setItem("user",H()({username:o.username})),t.success=!0,t.error=!1,clearTimeout(t.timeId),t.timeId=setTimeout(function(){t.$emit("toLogOut"),t.dialogFormVisible=!1,t.success=!1,clearTimeout(t.timeId)},1e3);case 14:case"end":return e.stop()}},e,t)}))()},toRegister:function(){this.dialogFormVisible=!1,this.$router.push("/register")}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("span",{staticClass:"btn btn-success",on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("登录")]),t._v(" "),n("el-dialog",{attrs:{title:"登录",visible:t.dialogFormVisible,"append-to-body":!0},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"username"}},[t._v("用户名")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"email",id:"username",autocomplete:"off"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("密码")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.check(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("h5",{directives:[{name:"show",rawName:"v-show",value:t.success,expression:"success"}],staticClass:"text-success text-center"},[t._v("登陆成功")]),t._v(" "),n("h5",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"text-danger text-center"},[t._v("登录失败")]),t._v(" "),n("h5",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"text-danger text-center"},[t._v(t._s(t.tips))])]),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.check}},[t._v("登录")]),t._v(" "),n("el-button",{attrs:{type:"warning"},on:{click:t.toRegister}},[t._v("还没账号 点击注册")])],1)])],1)},staticRenderFns:[]};var Y={data:function(){return{username:""}},methods:{logout:function(){localStorage.removeItem("user"),this.$emit("toLogIn"),this.$router.push("/home")},getUser:function(){if(localStorage.getItem("user")){var t=JSON.parse(localStorage.getItem("user"));this.username=t.username}else this.$emit("toLogIn")}},created:function(){this.$nextTick(this.getUser())},beforeUpdate:function(){this.$nextTick(this.getUser())}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-dropdown",{attrs:{"hide-on-click":!1}},[e("span",{staticClass:"el-dropdown-link"},[this._v("\n      "+this._s(this.username)+"\n      "),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),this._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{on:{click:this.logout}},[e("a",{attrs:{href:"#"},on:{click:this.logout}},[this._v("注销")])])],1)],1)],1)},staticRenderFns:[]};var G={data:function(){return{componentId:"logout"}},components:{login:n("VU/8")(U,W,!1,function(t){n("J84p")},"data-v-726f4fc4",null).exports,logout:n("VU/8")(Y,z,!1,function(t){n("/SNI")},"data-v-7e58b2c7",null).exports},methods:{toLogIn:function(){this.componentId="login"},toLogOut:function(){this.componentId="logout"}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[n("ul",{staticClass:"nav navbar-nav",attrs:{id:"ul"}},[n("li",[n("router-link",{attrs:{to:"/home"}},[t._v("主页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/allArticles"}},[t._v("所有文章")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/messageboard"}},[t._v("留言")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/albumcard"}},[t._v("相册")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#",id:"last"}},["login"===t.componentId?n("login",{on:{toLogOut:t.toLogOut}}):t._e(),t._v(" "),"logout"===t.componentId?n("logout",{on:{toLogIn:t.toLogIn}}):t._e()],1)]),t._v(" "),n("li",[n("router-link",{staticClass:"add",attrs:{to:"/addArticle"}},[n("span",{staticClass:"glyphicon glyphicon-edit"})])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})])])}]};var A=n("VU/8")(G,M,!1,function(t){n("rzDC")},"data-v-71fc383e",null).exports,X={data:function(){return{}},methods:N()({},Object(L.b)(["loginregin"])),components:{mynav:A}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("mynav",{}),this._v(" "),e("div",{staticClass:"main"},[e("router-view",{})],1)],1)},staticRenderFns:[]};var K=n("VU/8")(X,B,!1,function(t){n("gIJb")},"data-v-d96691b4",null).exports,Z=(n("jcZh"),n("7t+N"),n("mtWM")),P=n.n(Z),tt=(n("K3J8"),n("Jmt5"),n("ibnl")),et=n.n(tt),nt=n("cTzj"),st=n.n(nt),ot=(n("tOCg"),n("mw3O")),at=n.n(ot);S.default.use(et.a),S.default.use($.a),S.default.use(I.a),S.default.use(y.a),S.default.use(k.a),S.default.use(w.a),S.default.use(b.a),S.default.use(h.a),S.default.use(f.a),S.default.use(m.a),S.default.use(u.a),S.default.use(c.a),S.default.use(i.a),S.default.use(st.a,{loading:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558333261095&di=fa650d5707f50387f99a7934326c94e2&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160127%2Fmp56791937_1453886827459_16.gif"}),S.default.prototype.$Message=o.a,P.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded"},S.default.prototype.$axios=P.a,S.default.prototype.$qs=at.a,S.default.filter("fmTime",function(t){if(!t)return"";var e=new Date(t),n=e.getFullYear(),s=e.getMonth()+1,o=e.getDate(),a=e.getHours(),i=e.getMinutes(),r=e.getSeconds();return n+"-"+s+"-"+o+" "+(a=a>=10?a:"0"+a)+":"+(i=i>=10?i:"0"+i)+":"+(r=r>=10?r:"0"+r)}),new S.default({el:"#app",data:function(){return{}},router:E,store:D,render:function(t){return t(K)}})},Q6SQ:function(t,e){},"U/ZW":function(t,e){},"X+ky":function(t,e){},Yq4J:function(t,e){},cwe7:function(t,e){},gIJb:function(t,e){},isE6:function(t,e){},jcZh:function(t,e){},qunJ:function(t,e){},rzDC:function(t,e){},tOCg:function(t,e){},xBlb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d30257e83256edd08d03.js.map