(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},102:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},103:function(e,t,n){"use strict";var r=n(0),a=n(102);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},104:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(103),c=n(100),i=n(47),u=n.n(i),s=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,b=e.groupId,f=Object(o.a)(),d=f.tabGroupChoices,m=f.setTabGroupChoices,O=Object(r.useState)(i),h=O[0],j=O[1],y=Object(r.useState)(!1),v=y[0],g=y[1];if(null!=b){var w=d[b];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&j(w)}var T=function(e){j(e),null!=b&&m(b,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},P=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",P)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":h===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return T(t)},onClick:function(){T(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},105:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(98)),c=n(104),i=n(105),u={title:"Authentication"},s={unversionedId:"authentication",id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"To access our API, you just have to register using this link. After",source:"@site/docs/authentication.md",permalink:"/docs/docs/authentication",editUrl:"https://github.com/Leaf-Agriculture/docs/authentication.md",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/docs/introduction"},next:{title:"Overview",permalink:"/docs/docs/user_management_overview"}},l=[],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To access our API, you just have to register using this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leafagriculture.com.br/registration/"}),"link"),". After\nconfirming your email, you will be able to request a token (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7519"}),"JWT"),") through\nthis endpoint:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"https://api.withleaf.io/api/authenticate\n")),Object(o.b)("p",null,"You will receive your Leaf Token as response."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"All set!")," Include this token in your API calls and you will have access to\nLeaf's API."),Object(o.b)("p",null,"Your Leaf Token lasts for 24h by default. Include ",Object(o.b)("inlineCode",{parentName:"p"},'"rememberMe": "true"')," in the\njson to make it last 30 days."),Object(o.b)("p",null,"After expiration, just make the same request to the same endpoint and you will\nget a new access token."),Object(o.b)(c.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\n\nconst endpoint = 'https://api.withleaf.io/api/authenticate'\n\nconst data = { username: 'username', password: 'password' }\n\naxios.post(endpoint, { data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(o.b)(i.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nendpoint = 'https://api.withleaf.io/api/authenticate'\n\njson = {\n    'username': 'username',\n    'password': 'password'\n}\n\nres = requests.post(endpoint, json=json)\nprint(res.json())\n"))),Object(o.b)(i.a,{value:"sh",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{ "username": "username", "password": "password" }\' \\\n    \'https://api.withleaf.io/api/authenticate\'\n')))),Object(o.b)("p",null,"This request will return your access token to Leaf's API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id_token" : "YOUR_LEAF_TOKEN"\n}\n')))}b.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);