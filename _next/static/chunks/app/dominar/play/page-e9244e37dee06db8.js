(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400,971],{9004:function(e,n,t){Promise.resolve().then(t.bind(t,8583)),Promise.resolve().then(t.t.bind(t,1476,23)),Promise.resolve().then(t.t.bind(t,7330,23)),Promise.resolve().then(t.t.bind(t,7952,23))},8867:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let r=t(1801);t(745);let a=r._(t(9598));function l(e){return{default:(null==e?void 0:e.default)||e}}function o(e,n){let t=a.default,r={loading:e=>{let{error:n,isLoading:t,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e),Object.assign(r,n);let o=r.loader;return t({...r,loader:()=>null!=o?o().then(l):Promise.resolve(l(()=>null))})}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},5975:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{suspense:function(){return a},NoSSR:function(){return l}}),t(1801),t(745);let r=t(8242);function a(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function l(e){let{children:n}=e;return n}},9598:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let r=t(1801),a=r._(t(745)),l=t(5975),o=function(e){let n=Object.assign({loader:null,loading:null,ssr:!0},e);function t(e){let t=n.loading,r=a.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),o=n.ssr?a.default.Fragment:l.NoSSR,s=n.lazy;return a.default.createElement(a.default.Suspense,{fallback:r},a.default.createElement(o,null,a.default.createElement(s,e)))}return n.lazy=a.default.lazy(n.loader),t.displayName="LoadableComponent",t}},9728:function(e,n,t){"use strict";var r=t(1479),a=t.n(r);n.Z=!0===a().PRODUCTION?"https://cdn.jsdelivr.net/gh/kpverse/kpverse.github.io@latest/":"/"},8583:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(8668),a=t(9728),l=t(512),o=t.n(l),s=t(745);function i(e){let{isOpen:n}=e;return(0,r.jsx)("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n?(0,r.jsx)("path",{d:"M25.7856 6.22985C25.1799 5.62407 24.2013 5.62407 23.5955 6.22985L16 13.8099L8.40444 6.21431C7.79866 5.60853 6.82009 5.60853 6.21431 6.21431C5.60853 6.82009 5.60853 7.79866 6.21431 8.40444L13.8099 16L6.21431 23.5955C5.60853 24.2013 5.60853 25.1799 6.21431 25.7856C6.82009 26.3914 7.79866 26.3914 8.40444 25.7856L16 18.1901L23.5955 25.7856C24.2013 26.3914 25.1799 26.3914 25.7856 25.7856C26.3914 25.1799 26.3914 24.2013 25.7856 23.5955L18.1901 16L25.7856 8.40444C26.3759 7.81419 26.3759 6.82009 25.7856 6.22985Z",fill:"black"}):(0,r.jsx)("path",{d:"M2.13336 4.26672V6.40006H29.8667V4.26672H2.13336ZM2.13336 17.0667H29.8667V14.9334H2.13336V17.0667ZM2.13336 27.7334H29.8667V25.6001H2.13336V27.7334Z",fill:"black"})})}var u=t(8477),_=t.n(u),c=t(8867),f=t.n(c),d="".concat("/","about/"),v="".concat("/","archgemini/"),p="".concat("/","deploy-nextjs/"),b="".concat("/","dominar/"),h="".concat("/","dynamic-colors/"),m="".concat("/","sharer/");function x(e){let{style:n,runOnClick:t=()=>{}}=e;return(0,r.jsx)("div",{className:n.links,children:[{path:v,text:"ArchGemini"},{path:p,text:"Deploy Next JS"},{path:m,text:"Sharer"},{path:b,text:"Dominar"},{path:h,text:"Dynamic Colors"},{path:d,text:"About"}].map((e,a)=>(0,r.jsx)(_(),{href:e.path,className:n.link,onClick:t,children:(0,r.jsx)("span",{children:e.text})},a))})}function j(){let[e,n]=(0,s.useState)(!1),l=f()(function(){return Promise.all([t.e(599),t.e(202),t.e(70)]).then(t.bind(t,70))},{loadableGenerated:{webpack:()=>[70]},ssr:!1});return(0,r.jsxs)("nav",{className:o().navbar,children:[(0,r.jsxs)("div",{className:o().h_nav,children:[(0,r.jsxs)("div",{className:o().h_nav_left,children:[(0,r.jsx)(_(),{className:o().logo,href:"/",onClick:()=>{e&&n(!1)},children:(0,r.jsx)("img",{className:o().logo_img,src:a.Z+"kpverse.svg",alt:"KPVERSE"})}),(0,r.jsx)("div",{className:o().seperator}),(0,r.jsx)(x,{style:{links:o().links,link:o().link}})]}),(0,r.jsxs)("div",{className:o().h_nav_right,children:[(0,r.jsx)(l,{className:o().share_btn}),(0,r.jsx)("button",{className:o().menu_btn,onClick:()=>n(!e),children:(0,r.jsx)(i,{isOpen:e})})]})]}),(0,r.jsx)("div",{className:[o().v_nav,e?o().nav_visible:void 0].join(" "),children:(0,r.jsx)(x,{style:{links:o().links,link:o().link},runOnClick:()=>{n(!1)}})})]})}},1479:function(e){"use strict";e.exports={PRODUCTION:!0,GTM:"GTM-N7M5N3CW"}},7330:function(e){e.exports={footer:"Footer_footer__NzM_y"}},7952:function(e){e.exports={"iframe-container":"IframeComponent_iframe-container__3MeDZ",iframe:"IframeComponent_iframe__ZsqkU"}},512:function(e){e.exports={navbar:"navbar_navbar__bppcd",h_nav:"navbar_h_nav__rsDDN",v_nav:"navbar_v_nav__wCycW",h_nav_left:"navbar_h_nav_left__GjXlA",logo:"navbar_logo__OEWBE",logo_img:"navbar_logo_img__4MKmS",seperator:"navbar_seperator__hVVMD",links:"navbar_links__4_g6P",link:"navbar_link__J9yno",h_nav_right:"navbar_h_nav_right__phi6G",share_btn:"navbar_share_btn__d8WAu",menu_btn:"navbar_menu_btn__TMbD3",nav_visible:"navbar_nav_visible__ivQLm"}},5231:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(745),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,l={},u=null,_=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(_=n.ref),n)o.call(n,r)&&!i.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:a,type:e,key:u,ref:_,props:l,_owner:s.current}}n.Fragment=l,n.jsx=u,n.jsxs=u},8668:function(e,n,t){"use strict";e.exports=t(5231)},8477:function(e,n,t){e.exports=t(1476)}},function(e){e.O(0,[476,253,110,744],function(){return e(e.s=9004)}),_N_E=e.O()}]);