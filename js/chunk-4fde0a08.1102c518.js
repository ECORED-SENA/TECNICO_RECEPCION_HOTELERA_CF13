(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fde0a08"],{2549:function(t,e,n){},"2d67":function(t,e,n){"use strict";n("2549")},5270:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header container-fluid"},[s("div",{staticClass:"row align-items-center justify-content-between"},[s("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=t.$route.name?s("div",{staticClass:"header__menu me-4 me-sm-5",on:{click:function(e){return t.toggleMenu(!t.menuOpen)}}},[s("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":t.menuOpen}},[s("div",{staticClass:"line-2"}),s("div",{staticClass:"line-1"}),s("div",{staticClass:"line-3"})]),s("span",[t._v("MENÚ")])]):t._e(),s("img",{staticClass:"header__logo me-4 me-sm-5",attrs:{src:n("9eb5")}}),t.isInicio?s("div",{staticClass:"d-none d-md-flex align-items-center"},[s("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[t._v("Contenidos")])]):s("div",{staticClass:"header__componente-formativo"},[s("span",{domProps:{innerHTML:t._s(t.globalData.componenteFormativo)}})])]),t.isInicio?s("div",{staticClass:"col-auto"},[s("router-link",{staticClass:"boton",attrs:{to:{name:t.iniciarLnk.nombreRuta}}},[s("span",{staticClass:"me-1"},[t._v("Ver contenido")]),s("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])])},i=[],a=(n("b0c0"),n("ecc5")),o={name:"Header",mixins:[a["a"]],computed:{globalData:function(){return this.$config&&this.$config.global},isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(t){this.$store.dispatch("toggleMenu",t)}}},c=o,r=(n("2d67"),n("2877")),l=Object(r["a"])(c,s,i,!1,null,"a108b06a",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4fde0a08.1102c518.js.map