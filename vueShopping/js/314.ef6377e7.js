"use strict";(self["webpackChunkvue_shhopping"]=self["webpackChunkvue_shhopping"]||[]).push([[314],{7314:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});e(4114);var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"},on:{click:function(s){return t.$router.push("/category")}}})]},proxy:!0}])}),t._m(0),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item"},[t._v("综合")]),s("div",{staticClass:"sort-item"},[t._v("销量")]),s("div",{staticClass:"sort-item"},[t._v("价格 ")])])}],a=e(8821),n=e(7867),i={name:"SearchIndex",components:{GoodsItem:a.A},computed:{querySearch(){return this.$route.query.search}},data(){return{page:1,proList:[]}},async created(){const{data:{list:t}}=await(0,n.Cd)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data}},c=i,u=e(1656),d=(0,u.A)(c,r,o,!1,null,"2f8c81b0",null),l=d.exports},7867:function(t,s,e){e.d(s,{B7:function(){return a},Cd:function(){return o},Yv:function(){return n}});var r=e(5720);const o=t=>{const{categoryId:s,goodsName:e,page:o}=t;return r.A.get("/goods/list",{params:{categoryId:s,goodsName:e,page:o}})},a=t=>r.A.get("/goods/detail",{params:{goodsId:t}}),n=(t,s)=>r.A.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=314.ef6377e7.js.map