(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{101:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return f}));var n=a(2),r=a(6),i=(a(0),a(92)),c=(a(98),a(99),a(95)),o={title:"Overview"},b={unversionedId:"satellite_overview",id:"satellite_overview",isDocsHomePage:!1,title:"Overview",description:"About",source:"@site/docs/satellite_overview.md",permalink:"/docs/docs/satellite_overview",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/satellite_overview.md",sidebar:"docs",previous:{title:"Endpoints",permalink:"/docs/docs/operations_endpoints"},next:{title:"Endpoints",permalink:"/docs/docs/satellite_endpoints"}},l=[{value:"About",id:"about",children:[]}],s={rightToc:l};function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about"},"About"),Object(i.b)("p",null,"Using Leaf's Satellite service you will be able to easily implement a satellite\nimagery application and compare the field health evolution over time. Leaf's\nservice uses Sentinel-2 data which has the highest resolution publicly available\nand revisits each field every 3 to 5 days."),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"You can get historical images with Leaf.")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"By default, Leaf retrieves images from 30 days prior to the creation of your\nfield. But you can increase that to as far back in time as you want.\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/docs/satellite_endpoints#post-fields"}),"Here's how")))),Object(i.b)("img",{alt:"Field example",src:Object(c.a)("img/fieldovertime.png")}),Object(i.b)("p",null,"This API accepts field boundary polygons and returns processed, cropped, and color-corrected RGB and NDVI images every time there is a new image available.\nWe also provide information like percent cloud coverage of the field, the data coverage percentage, and the Sentinel tile source for each image as well."),Object(i.b)("p",null,"We generate a total of 18 images for each intersected field: A GeoTiff for each band from Sentinel and processed RGB and NDVI images.\nThe following table shows all the images with its resolutions and types:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Resolution"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B01.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"60 meters"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B02.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B03.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B04.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B05.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B06.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B07.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B08.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B09.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"60"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B10.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"60"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B11.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B12.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NDVI.png"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NULL"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"png")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NDVI.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ndvi")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NDVI_color.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif_colorized")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NDVI_absolute.png"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NULL"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"png")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RGB.png"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NULL"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"png")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RGB.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif_colorized")))),Object(i.b)("p",null,"PNG files do not have resolution because they are scaled up by 800%."),Object(i.b)("p",null,"We generate a colorized ",Object(i.b)("inlineCode",{parentName:"p"},"NDVI_color.tif")," using a custom-built color ramp. See\nthe image below. If you prefer to use your own ramp, we recommend using ",Object(i.b)("inlineCode",{parentName:"p"},"NDVI.tif"),",\nwhich is a pre calculated NDVI file. You can import it into any GIS software,\nlike ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qgis.org/en/site/"}),"QGis"),", and use it as you please."),Object(i.b)("p",null,"The difference between ",Object(i.b)("inlineCode",{parentName:"p"},"NDVI_color.png")," and ",Object(i.b)("inlineCode",{parentName:"p"},"NDVI_absolute.png")," is that for the\nfirst one we first normalize the data between the min/max of the data before\ncoloring it. For the second one we apply the color ramp as is. In practical terms\nthe normalized version will have it's lowest values as a bright red and its\nhighest values as a bright green (see example image below). The absolute version\nwill have the value at ",Object(i.b)("inlineCode",{parentName:"p"},"-1")," as the bright red and the value ",Object(i.b)("inlineCode",{parentName:"p"},"1")," as the bright\ngreen with the colors interpolated in between."),Object(i.b)("img",{alt:"NDVI example",src:Object(c.a)("img/ndviexample.png")}),Object(i.b)("p",null,"Currently, our Satellite service runs without a relationship between our Field Services, and the User Management Services.\nHowever, we are working to integrate it into the ",Object(i.b)("inlineCode",{parentName:"p"},"leafUser")," hierarchy, and the Fields Service."),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/docs/satellite_endpoints"}),"Satellite API Reference")," for more information."))}f.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),f=s(a),p=n,u=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return a?r.a.createElement(u,o(o({ref:t},l),{},{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";var n=a(0),r=a(20);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},94:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},95:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(93),r=a(101);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,b=i.absolute,l=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var s=!a.startsWith(t)?t+a.replace(/^\//,""):a;return l?e+s:s}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},96:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},97:function(e,t,a){"use strict";var n=a(0),r=a(96);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(97),c=a(94),o=a(48),b=a.n(o),l=37,s=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,f=e.values,d=e.groupId,p=Object(i.a)(),u=p.tabGroupChoices,O=p.setTabGroupChoices,m=Object(n.useState)(o),j=m[0],g=m[1],v=Object(n.useState)(!1),N=v[0],h=v[1];if(null!=d){var y=u[d];null!=y&&y!==j&&f.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=d&&O(d,e)},C=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},D=function(){h(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",D)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},f.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":j===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),x(e)},onFocus:function(){return w(t)},onClick:function(){w(t),h(!1)},onPointerDown:function(){return h(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},99:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);