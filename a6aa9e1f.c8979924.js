(window.webpackJsonp=window.webpackJsonp||[]).push([[28,7],{110:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(107),l=t.n(c),s=t(106),i=t(97);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(s.useHistory)(),{siteConfig:m={}}=Object(i.a)(),{baseUrl:d}=m,u=()=>{a.current||(Promise.all([fetch(d+"search-doc.json").then(e=>e.json()),fetch(d+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(40),t.e(43)]).then(t.bind(null,112)),t.e(29).then(t.t.bind(null,111,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=d+t.url;document.createElement("a").href=n,o.push(n)}})})(e,a,t)}),a.current=!0)},h=Object(n.useCallback)(a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:h,onBlur:h,ref:c}))}},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(97),l=t(109),s=t(119),i=t(105);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(c.a)(),i="/"===a.permalink?n:"Blog",{blogDescription:m}=a;return r.a.createElement(l.a,{title:i,description:m},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map(({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null))),r.a.createElement(o,{metadata:a})))))}}}]);