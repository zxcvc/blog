webpackJsonp([2],{Emcu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("NYxO");var i={data:function(){return{preview:this.$route.query.id}},computed:{imgSrc:function(){var e=this;return this.$store.getters.getAlbum.filter(function(t){return t.id===parseInt(e.$route.query.id)})}},methods:{}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("ul",{staticClass:"row"},this._l(this.imgSrc,function(e){return t("li",{key:e.src,staticClass:"col-lg-4 col-md-6  col-sm-6 col-xs-12 myclass"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"item.src"}],attrs:{preview:"item.id","preview-text":"描述文字"}})])}),0)])},staticRenderFns:[]};var n=r("VU/8")(i,s,!1,function(e){r("RelL")},"data-v-7d216802",null);t.default=n.exports},RelL:function(e,t){}});
//# sourceMappingURL=2.7b4547727174d4666bfa.js.map