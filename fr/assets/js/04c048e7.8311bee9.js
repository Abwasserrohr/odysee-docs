"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[2900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7462),n=r(7294),o=r(6010),l=r(2389),i=r(7392),c=r(7094),s=r(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:p,groupId:b,className:v}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??g.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,i.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:T}=(0,c.U)(),[k,w]=(0,n.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=b){const e=O[b];null!=e&&e!==k&&y.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,r=x.indexOf(t),a=y[r].value;a!==k&&(E(t),w(a),null!=b&&T(b,String(a)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},y.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":k===t})}),r??t)}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},1557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={sidebar_position:1,sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},c="Emplacement du menu",s={unversionedId:"category-livestreaming/category-creatingalivestream/menulocation",id:"category-livestreaming/category-creatingalivestream/menulocation",title:"Emplacement du menu",description:"",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/category-livestreaming/category-creatingalivestream/menulocation.mdx",sourceDirName:"category-livestreaming/category-creatingalivestream",slug:"/category-livestreaming/category-creatingalivestream/menulocation",permalink:"/fr/category-livestreaming/category-creatingalivestream/menulocation",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/category-livestreaming/category-creatingalivestream/menulocation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_custom_props:{faIcon:"",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Cr\xe9ation d'un live-stream",permalink:"/fr/category-livestreaming/category-creatingalivestream/"},next:{title:"Settings and Customization",permalink:"/fr/category-livestreaming/category-creatingalivestream/settings"}},u={},m=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=d("OdyseeButtonRound"),b=d("OdyseeIcon"),v=d("Image"),g={toc:m};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emplacement-du-menu"},"Emplacement du menu"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web",label:"web",default:!0,mdxType:"TabItem"},"Pour faire du livestream, vous devez d'abord s\xe9lectionner l'ic\xf4ne de la cam\xe9ra vid\xe9o-Symbol ",(0,n.kt)(p,{url:"https://odysee.com/$/livestream",mdxType:"OdyseeButtonRound"},(0,n.kt)(b,{type:"Livestream",mdxType:"OdyseeIcon"}))," \xe0 c\xf4t\xe9 de la barre de recherche.",(0,n.kt)(v,{img:"/img/fr/Mallerendirect.png",mdxType:"Image"})),(0,n.kt)(l.Z,{value:"mobile",label:"mobile",mdxType:"TabItem"},"Sur les t\xe9l\xe9phones portables, cette option ",(0,n.kt)("a",{href:"https://odysee.com/$/livestream"},(0,n.kt)(b,{type:"Livestream",mdxType:"OdyseeIcon"})," Aller en direct"),"  se trouve en bas de la barre lat\xe9rale \xe9tendue.",(0,n.kt)(v,{img:"/img/fr/Mallerendirect.png",mdxType:"Image"}))))}y.isMDXComponent=!0}}]);