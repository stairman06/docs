"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[287],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5808:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},s="Search API",u={unversionedId:"tutorials/search",id:"tutorials/search",isDocsHomePage:!1,title:"Search API",description:"Searching projects is a common use case of the Modrinth API, but can be difficult to understand. By the end of this tutorial, you should have a high level understanding of how to search for projects using the API!",source:"@site/docs/tutorials/search.md",sourceDirName:"tutorials",slug:"/tutorials/search",permalink:"/docs/tutorials/search",editUrl:"https://github.com/modrinth/docs/edit/master/docs/tutorials/search.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"From API v1 to API v2",permalink:"/docs/api-information/migrations/v1-to-v2"},next:{title:"Modrinth Maven",permalink:"/docs/tutorials/maven"}},p=[{value:"Route",id:"route",children:[]},{value:"Details",id:"details",children:[{value:"Query",id:"query",children:[]},{value:"Sorting",id:"sorting",children:[]},{value:"Limiting results",id:"limiting-results",children:[]},{value:"Handling pagination",id:"handling-pagination",children:[]},{value:"Facets",id:"facets",children:[]},{value:"Filters",id:"filters",children:[]}]}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"search-api"},"Search API"),(0,i.kt)("p",null,"Searching projects is a common use case of the Modrinth API, but can be difficult to understand. By the end of this tutorial, you should have a high level understanding of how to search for projects using the API!"),(0,i.kt)("h2",{id:"route"},"Route"),(0,i.kt)("p",null,"The search API is available at ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-information/domains"},(0,i.kt)("inlineCode",{parentName:"a"},"{API_BASE}")),(0,i.kt)("inlineCode",{parentName:"p"},"/search"),"."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"In these examples, we'll be searching for a gravestones mod on Fabric 1.16.5."),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)("p",null,"Query Parameter: ",(0,i.kt)("inlineCode",{parentName:"p"},"query")),(0,i.kt)("p",null,"The query is the text you want to search for. In this example, a query might be ",(0,i.kt)("inlineCode",{parentName:"p"},"grave"),". You can see what the API response is\n",(0,i.kt)("a",{parentName:"p",href:"https://api.modrinth.com/v2/search?query=grave"},"here"),"."),(0,i.kt)("h3",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"Query Parameter: ",(0,i.kt)("inlineCode",{parentName:"p"},"index")),(0,i.kt)("p",null,"The index field changes the way the results will be sorted in the response. Modrinth supports the following indexes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"relevance")," => This sorts by the element that our system is the best match for your query, at least based on our query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"downloads")," => This sorts all matches by the order of downloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"follows")," => The same principle as ",(0,i.kt)("inlineCode",{parentName:"li"},"downloads"),", but sorted by the number of followers of this mod."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newest")," => Sorts by the newest mod created. This is based on the time of initial creation of the mod."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updated")," => Sorts by the newest mod updated. This is based on the time of the latest update of the mod (creation of a new version).")),(0,i.kt)("h3",{id:"limiting-results"},"Limiting results"),(0,i.kt)("p",null,"Query Parameter: ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")),(0,i.kt)("p",null,"The maximum number of results that will be returned in the response. The maximum limit is 100. "),(0,i.kt)("h3",{id:"handling-pagination"},"Handling pagination"),(0,i.kt)("p",null,"Query Parameter: ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")),(0,i.kt)("p",null,"The offset field allows for projects to be skipped from the result. When combined with the limit parameter, the offset field can be used to create powerful pagination."),(0,i.kt)("h3",{id:"facets"},"Facets"),(0,i.kt)("p",null,"Facets are an essential concept for understanding how to filter out results."),(0,i.kt)("h4",{id:"facet-types"},"Facet types"),(0,i.kt)("p",null,"A facet can be of multiple types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"categories")," => The loader or category to filter the results from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"versions")," => The minecraft version to filter the results from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"license")," => The license ID to filter the results from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"project_type")," => The project type to filter the results from")),(0,i.kt)("p",null,"Now you have all the facets types, to get a string representing both the type and the content, you have to use the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{type}:{value}\n")),(0,i.kt)("p",null,"Where type is one of the facet types defined above."),(0,i.kt)("h4",{id:"operators"},"Operators"),(0,i.kt)("p",null,"In search, the main operators are ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OR"),". The others are not supported as of now."),(0,i.kt)("p",null,"All facets search must be included in a JavaScript array."),(0,i.kt)("h5",{id:"or"},"OR"),(0,i.kt)("p",null,"All elements in a single array ",(0,i.kt)("strong",{parentName:"p"},"after the first one")," are considered in a single OR block.\nFor example, the search ",(0,i.kt)("inlineCode",{parentName:"p"},'[["versions:1.16.5", "versions:1.17.1"]]')," translates to ",(0,i.kt)("inlineCode",{parentName:"p"},"Projects that supports 1.16.5 OR 1.17.1")),(0,i.kt)("h5",{id:"and"},"AND"),(0,i.kt)("p",null,"All arrays in the top-level one are considered in a single AND block.\nFor example, the search ",(0,i.kt)("inlineCode",{parentName:"p"},'[["versions:1.16.5"], ["project_type:modpack"]]')," translates to ",(0,i.kt)("inlineCode",{parentName:"p"},"Projects that support 1.16.5 AND are modpacks")),(0,i.kt)("p",null,"If you want to learn more about facets, the documentation on them is available ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/features/faceted_search.html#using-facets"},"here")),(0,i.kt)("h4",{id:"example-query"},"Example Query"),(0,i.kt)("p",null,"Here's an example query if you are confused on how to use facets:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://api.modrinth.com/v2/search?limit=20&index=relevance&facets=%5B%5B%22categories:adventure%22%5D,%5B%22categories:fabric%22%5D,%5B%22versions:1.17.1%22%5D%5D"},'https://api.modrinth.com/v2/search?limit=20&index=relevance&facets=[["categories:adventure"],["categories:fabric"],["versions:1.17.1"]]')),(0,i.kt)("p",null,"This request searches for up to 20 projects sorted by relevance that are in the categories ",(0,i.kt)("inlineCode",{parentName:"p"},"adventure")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fabric")," and that support 1.17.1."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,"Filters are an alternative way to facets to filter out results. Filters are slower than facets."),(0,i.kt)("p",null,"The syntax for filters can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/features/filtering_and_faceted_search.html#using-filters"},"here"),"."))}d.isMDXComponent=!0}}]);