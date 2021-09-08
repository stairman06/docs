"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[287],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5808:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Search API",id:"api_search"},s=void 0,c={unversionedId:"tutorials/api_search",id:"tutorials/api_search",isDocsHomePage:!1,title:"Search API",description:"Welcome!",source:"@site/docs/tutorials/search.md",sourceDirName:"tutorials",slug:"/tutorials/api_search",permalink:"/docs/tutorials/api_search",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/search.md",version:"current",frontMatter:{title:"Search API",id:"api_search"},sidebar:"tutorialSidebar",previous:{title:"Modpack API",permalink:"/docs/tutorials/api_modpacks"},next:{title:"Using Modrinth's Maven repository",permalink:"/docs/tutorials/maven"}},u=[{value:"High level view of the search API call",id:"high-level-view-of-the-search-api-call",children:[]},{value:"Details",id:"details",children:[{value:"Query",id:"query",children:[]},{value:"Index",id:"index",children:[]},{value:"Limit",id:"limit",children:[]},{value:"Offset",id:"offset",children:[]},{value:"Filters",id:"filters",children:[]},{value:"Facets",id:"facets",children:[]}]}],p={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome!"),(0,i.kt)("p",null,"This tutorial will explain how search works, first in a nutshell, then in details."),(0,i.kt)("p",null,"After this tutorial, you should be able to make your own searches using our api!"),(0,i.kt)("h2",{id:"high-level-view-of-the-search-api-call"},"High level view of the search API call"),(0,i.kt)("p",null,"The API search is available at the following route: ",(0,i.kt)("inlineCode",{parentName:"p"},"{API_BASE}/search")," (if you are thinking at what {API_BASE} means, ",(0,i.kt)("a",{parentName:"p",href:"/docs/details/domains"},"look here")),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"For the future examples, let's say I want to search a mod about monkes, that is on Fabric 1.17, and it is a great adventure mod ;)"),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)("p",null,"The query is the text you want to search by.\nIn our example, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"Monke")),(0,i.kt)("h3",{id:"index"},"Index"),(0,i.kt)("p",null,"Index is the way we sort elements out of our search, if we have more than one.\nModrinth supports the following indexes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"relevance")," => This sorts by the element that our system is the best match for your query, at least based on our query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downloads")," => This sorts all matches by the order of downloads.\nIn our example, the mod ",(0,i.kt)("inlineCode",{parentName:"li"},"Monke")," will be ranked lower than ",(0,i.kt)("inlineCode",{parentName:"li"},"Monkes: The lost island")," if the second has more downloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"follows")," => The same principle as ",(0,i.kt)("inlineCode",{parentName:"li"},"downloads"),", but sorted by the number of followers of this mod."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newest")," => Sorts by the newest mod created. This is based on the time of initial creation of the mod."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updated")," => Sorts by the newest mod updated. This is based on the time of the latest update of the mod (creation of a new version).")),(0,i.kt)("h3",{id:"limit"},"Limit"),(0,i.kt)("p",null,"The maximum number of matches that will be returned in the API call.\nIf it's higher than 100, it will return an error."),(0,i.kt)("h3",{id:"offset"},"Offset"),(0,i.kt)("p",null,"Offset is the number of matches that you skip from the beginning.\nThere's no limit, and if used with ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),", you are easily able to make paging in any customized way you want."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,"Filters are a more powerful version of Query for search.\nMore documentation on how to use this query parameters is underway."),(0,i.kt)("h3",{id:"facets"},"Facets"),(0,i.kt)("p",null,"Facets may be the most difficult thing to understand in search, but is necessary for the majority of searches."),(0,i.kt)("h4",{id:"facet-types"},"Facet types"),(0,i.kt)("p",null,"A facet can be of multiple types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"categories")," => A loader or a general category. A way to get a list of all categories is available ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/statics"},"here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"versions")," => A minecraft version. A way to get a list of all minecraft versions is available ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/statics"},"here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"license")," => A licence for projects (LGPL, WTFPL...) A way to get a list of all licenses is available ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/statics"},"here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"project_type")," => A project type, the only supported values currently are ",(0,i.kt)("inlineCode",{parentName:"li"},"modpack")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"mod"))),(0,i.kt)("p",null,"Now you have all the facets types, to get a string representing both the type and the content, you have to use the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{type}:{value}\n")),(0,i.kt)("p",null,"Where type is one of the facet types defined above."),(0,i.kt)("h4",{id:"operators"},"Operators"),(0,i.kt)("p",null,"In search, the main operators are ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OR"),". The others are not supported as of now."),(0,i.kt)("p",null,"First of all, all facets search must be included in a javascript array."),(0,i.kt)("h5",{id:"or"},"OR"),(0,i.kt)("p",null,"All elements in a single array ",(0,i.kt)("strong",{parentName:"p"},"after the first one")," are considered in a single OR block.\nFor example, the search ",(0,i.kt)("inlineCode",{parentName:"p"},'[["versions:1.16.5", "versions:1.17.1"]]')," translates to ",(0,i.kt)("inlineCode",{parentName:"p"},"Projects that supports 1.16.5 OR 1.17.1")),(0,i.kt)("h5",{id:"and"},"AND"),(0,i.kt)("p",null,"All arrays in the top-level one are considered in a single AND block.\nFor example, the search ",(0,i.kt)("inlineCode",{parentName:"p"},'[["versions:1.16.5"], ["project_type:modpack"]]')," translates to ",(0,i.kt)("inlineCode",{parentName:"p"},"Projects that support 1.16.5 AND are modpacks")),(0,i.kt)("p",null,"If you want to learn more about facets, the documentation on them is available ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/features/faceted_search.html#using-facets"},"here")))}d.isMDXComponent=!0}}]);