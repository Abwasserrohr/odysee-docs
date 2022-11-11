"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[9113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||o;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3,description:"After creating your livestream, you'll need to set a destination.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"orange"}},i="Setting a Stream Destination",s={unversionedId:"category-livestreaming/streamingdestination",id:"category-livestreaming/streamingdestination",title:"Setting a Stream Destination",description:"After creating your livestream, you'll need to set a destination.",source:"@site/docs/category-livestreaming/streamingdestination.mdx",sourceDirName:"category-livestreaming",slug:"/category-livestreaming/streamingdestination",permalink:"/category-livestreaming/streamingdestination",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/docs/category-livestreaming/streamingdestination.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"After creating your livestream, you'll need to set a destination.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"orange"}},sidebar:"helphub",previous:{title:"Settings and Customization",permalink:"/category-livestreaming/category-creatingalivestream/settings"},next:{title:"Reusing the Stream Server/Key",permalink:"/category-livestreaming/streaminfo"}},l={},c=[{value:"OBS",id:"obs",level:2},{value:"Streamyard",id:"streamyard",level:2},{value:"Restream",id:"restream",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-a-stream-destination"},"Setting a Stream Destination"),(0,a.kt)("p",null,"After your livestream has been created, switch to the ",(0,a.kt)("strong",{parentName:"p"},"Local Setup")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4419).Z,width:"1358",height:"517"})),(0,a.kt)("p",null,"Your stream server and stream key are used to tell your streaming software where to send your livestream to. You'll copy these and enter them where needed on your streaming software."),(0,a.kt)("h2",{id:"obs"},"OBS"),(0,a.kt)("p",null,"On OBS, you'll click File > Settings > Stream."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8346).Z,width:"1920",height:"647"})),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"Service"),", you'll select ",(0,a.kt)("em",{parentName:"p"},"Custom"),"."),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"Server"),", you'll enter the stream server provided on Odysee."),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"Stream Key"),", you'll enter the stream key provided on Odysee."),(0,a.kt)("p",null,"If everything is correct, you'll click ",(0,a.kt)("strong",{parentName:"p"},"Ok"),"."),(0,a.kt)("h2",{id:"streamyard"},"Streamyard"),(0,a.kt)("admonition",{title:"Note:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To livestream to Odysee using Streamyard, you'll need to have the paid version of Restream.")),(0,a.kt)("p",null,"From the main Streamyard screen after logging in, you'll select ",(0,a.kt)("strong",{parentName:"p"},"Destinations")," on the right side."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2141).Z,width:"1100",height:"600"})),(0,a.kt)("p",null,"From here, you'll select ",(0,a.kt)("strong",{parentName:"p"},"Add Destination")," and ",(0,a.kt)("strong",{parentName:"p"},"Custom RTMP"),"."),(0,a.kt)("p",null,"On the next screen, you'll begin entering your stream information."),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"RTMP server URL"),", you'll enter the stream server provided on Odysee."),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"Stream Key"),", you'll enter the stream key provided on Odysee."),(0,a.kt)("p",null,"If everything is correct, you'll click ",(0,a.kt)("strong",{parentName:"p"},"Add RTMP Server"),"."),(0,a.kt)("h2",{id:"restream"},"Restream"),(0,a.kt)("admonition",{title:"Note:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To livestream to Odysee using Restream, you'll need to have the paid version of Restream.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8170).Z,width:"1620",height:"718"})),(0,a.kt)("p",null,"From the main Restream screen after logging in, you'll select ",(0,a.kt)("strong",{parentName:"p"},"Stream With Studio"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7772).Z,width:"1900",height:"970"})),(0,a.kt)("p",null,"Once you're in the studio, you'll select ",(0,a.kt)("strong",{parentName:"p"},"Add Destination")," and ",(0,a.kt)("strong",{parentName:"p"},"Custom RTMP"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3371).Z,width:"1101",height:"835"})),(0,a.kt)("p",null,"From here, you'll begin entering your stream information."),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"RTMP URL"),", you'll enter the stream server provided on Odysee."),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"Stream Key"),", you'll enter the stream key provided on Odysee."),(0,a.kt)("p",null,"If everything is correct, you'll click ",(0,a.kt)("strong",{parentName:"p"},"Add Channel"),"."))}m.isMDXComponent=!0},4419:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/category-livestreaming4-40f37f6a388763a71ebf4d1d8c82a20c.png"},8346:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/category-livestreaming5-bca7684df823a06d3d5189fa81527612.png"},2141:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/category-livestreaming6-affc4c854eedc067cb3401d19a9f6e17.png"},8170:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/category-livestreaming7-54416b6a3c64ecacc397701fd5d3bf6f.png"},7772:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/category-livestreaming8-aa847b4e3ad448cc5bb5d0cf5ffe6238.png"},3371:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/category-livestreaming9-11d8d37891a6efc9757b695bbda41ce0.png"}}]);