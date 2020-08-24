(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(91)),s=a(97),l=a(98),o={title:"Quickstart"},c={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Leaf Quickstart",source:"@site/docs/quickstart.md",permalink:"/docs/docs/quickstart",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/quickstart.md",sidebar:"docs",previous:{title:"Welcome",permalink:"/docs/docs/"},next:{title:"Introduction",permalink:"/docs/docs/introduction"}},p=[{value:"Leaf Quickstart",id:"leaf-quickstart",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Get sample Field with attached operations",id:"get-sample-field-with-attached-operations",children:[]},{value:"Get all sample operation files",id:"get-all-sample-operation-files",children:[]},{value:"Get specific sample operation file",id:"get-specific-sample-operation-file",children:[]},{value:"Get sample operation file summary",id:"get-sample-operation-file-summary",children:[]},{value:"Get sample operation file image",id:"get-sample-operation-file-image",children:[]},{value:"Get sample merged operation file",id:"get-sample-merged-operation-file",children:[]},{value:"Get sample satellite imagery",id:"get-sample-satellite-imagery",children:[]}],u={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"leaf-quickstart"},"Leaf Quickstart"),Object(i.b)("p",null,"This quickstart tutorial is written help you quickly experience and start building with Leaf.\nFirst, please ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://leafagriculture.com.br/registration/"}),"register on our website")," to receive your credentials.\nWe've included sample data in your account so you can begin querying data via Leaf immediately."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Leaf's Postman collection")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Below you'll find instructions using curl and python, and we've also built a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postman.com/"}),"Postman")," collection to accompany this tutorial. Please find it here: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-API-Postman-Collection"}),"Leaf Postman collection")))),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"After creating and confirming your account, the first step is to authenticate\nwith your email and password to retrieve a Leaf token. This token is what we'll\nuse in subsequent steps to talk to the API. Be sure to keep a copy of this token\nfor the remaining steps."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/api/authenticate\"\n\ndata = {'username':'your email', 'password':'your password', 'rememberMe':'true'}\n\nheaders = {'Content-Type': 'application/json'}\n\nresponse = requests.request(\"POST\", url, headers=headers, json=data)\n"))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n   -H \'Content-Type: application/json\' \\\n   -d \'{ "username":"username", "password":"password", "rememberMe":"true" }\' \\\n   \'https://api.withleaf.io/api/authenticate\'\n'))),Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\n\nconst endpoint = 'https://api.withleaf.io/api/authenticate'\n\nconst data = { username:'username', password:'password', rememberMe:'true'}\n\naxios.post(endpoint, { data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},'note: Your Leaf Token lasts for 30 days with "rememberMe": "true" in the\njson. If you want it to last only 24h, feel free to set "rememberMe" to "false".'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("em",{parentName:"p"},"After expiration, just make the same request to the same endpoint and you will\nget a new access token. ")),Object(i.b)("h2",{id:"get-sample-field-with-attached-operations"},"Get sample Field with attached operations"),Object(i.b)("p",null,"Inside your account, we've created a sample LeafUser and populated it with data.\nLet's take a look at the fields endpoint to see the sample field:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/fields/api/fields\"\nheaders = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("p",null,"It returns a JSON object representing the Fields and you can see that there are\noperations ids attached. Next section will explain how to get the operations by\nthose ids."),Object(i.b)("h2",{id:"get-all-sample-operation-files"},"Get all sample operation files"),Object(i.b)("p",null,"Next, let's look at operations data. 'Operations' refers to the data collected\nwhen a machine and any implements performed an operation on a farm. This command\nwill list operations files available across your whole account:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/operations/api/files'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/operations/api/files\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-specific-sample-operation-file"},"Get specific sample operation file"),Object(i.b)("p",null,"Now that you have a file ID, you can query for the operations data itself and a\nsummary as well."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/operations/api/files/{id}'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/operations/api/files/{file_id}\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-sample-operation-file-summary"},"Get sample operation file summary"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/operations/api/files/{id}/summary'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/operations/api/files/{file_id}/summary\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-sample-operation-file-image"},"Get sample operation file image"),Object(i.b)("p",null,"You may have already noticed that we're seeing a lot of operations files for\nthis one field and the timestamps span just a few days. This is because we're\nlooking at multiple files output from a machine that effectively represent one\nlarge operation - a harvest. Before we talk about merging these pieces into a\nsingle operation, let's look at an image from one of the pieces:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/operations/api/files/{id}/images'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/operations/api/files/{file_id}/images\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-sample-merged-operation-file"},"Get sample merged operation file"),Object(i.b)("p",null,"A single strip appears in that image which is no mistake. It's also not as\nuseful as seeing the whole operation across the whole field! To solve this, we\nallow you to request a merge of operations data and produce images for data of\nthe same type and timeframe. The sample data already includes a merged file."),Object(i.b)("p",null,"Let's take a look at that merged harvesting image which is colored to indicate\nthe range of wet mass collected. First, let's find the merged file by simply\nadding a parameter to filter to origin=merged"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/operations/api/files?origin=merged'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/operations/api/files?origin=merged\"\n\npayload = {}\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data = payload)\n")))),Object(i.b)("p",null,"And finally, use that file ID to retrieve a list of images, one for each\noperation property. From this response, you can load one of the sample images:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/operations/api/files/{id}/images'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/operations/api/files/{file_id}/images\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-sample-satellite-imagery"},"Get sample satellite imagery"),Object(i.b)("p",null,"Finally, let's take a look at some satellite imagery. Using data from Sentinel-2,\nwe produce NDVI images for fields you define to be monitored. We can pull up the\nsample NDVI image like this:"),Object(i.b)("p",null,"Finally, let's take a look at some satellite imagery. Using data from Sentinel-2,\nwe produce NDVI images for fields you define to be monitored. First we'll list\nthe fields being monitored from the satellite service:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/satellite/api/fields\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("p",null,"And then we can pull up the sample NDVI image of the sample field like this:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://api.withleaf.io/services/satellite/api/fields/{field_id}/processes'\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://api.withleaf.io/services/satellite/api/fields/{field_id}/processes\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))))}b.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||i;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},95:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},96:function(e,t,a){"use strict";var n=a(0),r=a(95);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(96),s=a(93),l=a(47),o=a.n(l),c=37,p=39;t.a=function(e){var t=e.block,a=e.children,l=e.defaultValue,u=e.values,b=e.groupId,m=Object(i.a)(),d=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(n.useState)(l),O=f[0],y=f[1],j=Object(n.useState)(!1),g=j[0],v=j[1];if(null!=b){var T=d[b];null!=T&&T!==O&&u.some((function(e){return e.value===T}))&&y(T)}var w=function(e){y(e),null!=b&&h(b,e)},N=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},x=function(){v(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",x)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),E(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);