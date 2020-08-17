(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(98),c=n(96),i=n(47),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,b=e.groupId,f=Object(o.a)(),d=f.tabGroupChoices,m=f.setTabGroupChoices,h=Object(r.useState)(i),O=h[0],j=h[1],y=Object(r.useState)(!1),v=y[0],g=y[1];if(null!=b){var w=d[b];null!=w&&w!==O&&p.some((function(e){return e.value===w}))&&j(w)}var T=function(e){j(e),null!=b&&m(b,e)},x=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},P=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",P)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),k(e)},onFocus:function(){return T(t)},onClick:function(){T(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},101:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(94)),c=n(100),i=n(101),s={title:"Authentication"},u={unversionedId:"authentication",id:"authentication",isDocsHomePage:!1,title:"Authentication",description:"To access our API, you just have to register using this link. After",source:"@site/docs/authentication.md",permalink:"/docs/docs/authentication",editUrl:"https://github.com/Leaf-Agriculture/docs/authentication.md",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/docs/"},next:{title:"Overview",permalink:"/docs/docs/satellite_overview"}},l=[],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To access our API, you just have to register using this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leafagriculture.com.br/registration/"}),"link"),". After\nconfirming your email, you will be able to request a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7519"}),"JWT")," through this\nendpoint:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"https://a.agrigate.io/api/authenticate\n")),Object(o.b)("p",null,"You will receive an access token as response."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"All set!")," Include this token in your API calls and you will have access to\nLeaf's API. The token lasts for 8h. After that, just make the same request to\nthe same endpoint and you will get a new access token. The examples below show\nyou how to login."),Object(o.b)(c.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\n\nconst endpoint = 'https://a.agrigate.io/api/authenticate'\n\nconst data = { username: 'username', password: 'password' }\n\naxios.post(endpoint, { data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(o.b)(i.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nendpoint = 'https://a.agrigate.io/api/authenticate'\n\njson = {\n    'username': 'username',\n    'password': 'password'\n}\n\nres = requests.post(endpoint, json=json)\nprint(res.json())\n"))),Object(o.b)(i.a,{value:"sh",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl -X POST \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{ "username": "username", "password": "password" }\' \\\n    \'https://a.agrigate.io/api/authenticate\'\n')))),Object(o.b)("p",null,"This request will return your access token to Leaf's API:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id_token" : "YOUR_TOKEN"\n}\n')))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},97:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},98:function(e,t,n){"use strict";var r=n(0),a=n(97);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);