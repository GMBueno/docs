(window.webpackJsonp=window.webpackJsonp||[]).push([[20,7],{110:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(107),s=n.n(c),l=n(106),i=n(97);a.a=e=>{const a=Object(t.useRef)(!1),c=Object(t.useRef)(null),o=Object(l.useHistory)(),{siteConfig:h={}}=Object(i.a)(),{baseUrl:u}=h,d=()=>{a.current||(Promise.all([fetch(u+"search-doc.json").then(e=>e.json()),fetch(u+"lunr-index.json").then(e=>e.json()),Promise.all([n.e(40),n.e(43)]).then(n.bind(null,112)),n.e(29).then(n.t.bind(null,111,7))]).then(([e,a,{default:n}])=>{((e,a,n)=>{new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,n)=>{const t=u+n.url;document.createElement("a").href=t,o.push(t)}})})(e,a,n)}),a.current=!0)},p=Object(t.useCallback)(a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:c}))}},76:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(109);a.default=function(){return r.a.createElement(c.a,{title:"Hello"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"20px"}},r.a.createElement("p",null,"Poking around, hm?"),r.a.createElement("img",{width:"400",src:"https://withleaf.io/wp-content/uploads/2020/08/FO515DB56CD07-flat-1.png",alt:"loading..."})))}}}]);