(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(98)),i={title:"Endpoints"},p={unversionedId:"converters_endpoints",id:"converters_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"About",source:"@site/docs/converters_endpoints.md",permalink:"/docs/docs/converters_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/converters_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/converters_overview"}},c=[{value:"About",id:"about",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"<code>POST /{input}-{output}</code>",id:"post-input-output",children:[]},{value:"<code>POST /</code>",id:"post-",children:[]}]}],s={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"about"},"About"),Object(a.b)("p",null,"All HTTP methods should be prepended by this service's endpoint:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"https://api.withleaf.io/services/converters/api\n")),Object(a.b)("p",null,"This service has the following endpoints available:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"POST   /{input}-{output}\nPOST   /\n")),Object(a.b)("h2",{id:"endpoints"},"Endpoints"),Object(a.b)("p",null,"List of all the available endpoints."),Object(a.b)("h3",{id:"post-input-output"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /{input}-{output}")),Object(a.b)("p",null,"Posts a file, passed as a multipart to the service. The file will be converted from the format specified in ",Object(a.b)("inlineCode",{parentName:"p"},"input")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"output")," format. All The valid combinations of input and output are described ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/docs/docs/converters_overview#available-converters"}),"in this table"))),Object(a.b)("p",null,"It is possible to link this conversion with a Leaf User created, passing his ID as a query parameter: ",Object(a.b)("inlineCode",{parentName:"p"},"userId"),". But its use is not mandatory."),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"curl -X POST \\\n-H 'Content-Type: multipart/form-data' \\\n-H 'Accept: application/json' \\\n-H 'Authorization: Bearer token' {\"type\":\"formData\"} \\\n'https://api.withleaf.io/services/converters/api/geojson-shapefile?userId=uuid' \\\n--form 'file=@path'\n")),Object(a.b)("p",null,"Response sample:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "uri": "uri to an S3 bucket",\n    "message": "Success"\n}\n')),Object(a.b)("h3",{id:"post-"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /")),Object(a.b)("p",null,"It performs exactly the same as the previous endpoint, but, instead of passing\nvariables in the path, you pass them via params. Like so:"),Object(a.b)("h4",{id:"example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"curl -X POST \\\n--header 'Content-Type: multipart/form-data' \\\n--header 'Accept: application/json' \\\n--header 'Authorization: Bearer token' {\"type\":\"formData\"} \\\n'https://api.withleaf.io/services/converters/api/?input=geojson&output=shapefile&userId=uuid' \\\n--form 'file=@path'\n")),Object(a.b)("p",null,"This example is equivalent to the example in the previous endpoint. The input and output obey the same rules as well."))}l.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,p(p({ref:t},s),{},{components:n})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);