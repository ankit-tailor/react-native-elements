"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[55296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,A=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(A,i(i({ref:t},c),{},{components:r})):n.createElement(A,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),l=r(16550),s=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function A(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,r,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=p(e),f=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),C=f[0],v=f[1],g=A({queryString:s,groupId:u}),y=g[0],b=g[1],D=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),h=D[0],E=D[1],k=function(){var e=null!=y?y:h;return m({value:e,tabValues:d})?e:null}();return(0,a.useEffect)((function(){k&&v(k)}),[k]),{selectedValue:C,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),E(e)}),[b,E,d]),tabValues:d}}var C=r(72389);const v="tabList__CuJ",g="tabItem_LNqP";function y(e){var t=e.className,r=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(d(t),s(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;r=null!=(o=c[i])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=r?r:t)})))}function b(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function D(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function h(e){var t=(0,C.Z)();return a.createElement(D,(0,n.Z)({key:String(t)},e))}},36990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>C,frontMatter:()=>c,metadata:()=>p,toc:()=>A});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(74866),r(85162),r(32408),["components"]),l={toc:[]};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Card","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%2C%20Image%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Card%2C%20Button%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20users%20%3D%20%5B%0A%7B%0A%20%20name%3A%20'brynn'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2F1H_7AxP0.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'thot%20leader'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages.pexels.com%2Fphotos%2F598745%2Fpexels-photo-598745.jpeg%3Fcrop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26auto%3Dcompress%26cs%3Dtinysrgb'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'jsa'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FbUkmHPKs.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'talhaconcepts'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F4.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'andy%20vitale'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FNY9hnAbp.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'katy%20friedson'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FM%2FMV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE%40._V1_UY256_CR16%2C0%2C172%2C256_AL_.jpg'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20CardsComponentsProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Cards%3A%20React.FunctionComponent%3CCardsComponentsProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3ECARD%20WITH%20DIVIDER%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7Busers.map((u%2C%20i)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20key%3D%7Bi%7D%20style%3D%7Bstyles.user%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.image%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20u.avatar%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.name%7D%3E%7Bu.name%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%20containerStyle%3D%7B%7B%20marginTop%3A%2015%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EFONTS%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h1%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h2%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h2%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h3%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h3%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h4%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h4%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%3ENormal%20Text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EHELLO%20WORLD%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Image%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20padding%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20marginBottom%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20idea%20with%20React%20Native%20Elements%20is%20more%20about%20component%0A%20%20%20%20%20%20%20%20%20%20%20%20structure%20than%20actual%20design.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22code%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23ffffff%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginLeft%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginRight%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22VIEW%20NOW%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Afonts%3A%20%7B%0A%20%20marginBottom%3A%208%2C%0A%7D%2C%0Auser%3A%20%7B%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginBottom%3A%206%2C%0A%7D%2C%0Aimage%3A%20%7B%0A%20%20width%3A%2030%2C%0A%20%20height%3A%2030%2C%0A%20%20marginRight%3A%2010%2C%0A%7D%2C%0Aname%3A%20%7B%0A%20%20fontSize%3A%2016%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Cards%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var u=["components"],c={id:"card",title:"Card"},d=void 0,p={unversionedId:"components/card",id:"version-4.0.0-rc.1/components/card",title:"Card",description:"Cards are a great way to display information, usually containing content and actions about a single subject.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/Card.mdx",sourceDirName:"components",slug:"/components/card",permalink:"/docs/4.0.0-rc.1/components/card",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/Card.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"card",title:"Card"},sidebar:"docs",previous:{title:"ButtonGroup",permalink:"/docs/4.0.0-rc.1/components/buttongroup"},next:{title:"Card.Divider",permalink:"/docs/4.0.0-rc.1/components/card_divider"}},m={},A=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:A};function C(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cards are a great way to display information, usually containing content and actions about a single subject.\nCards can contain images, buttons, text and more.\nCards are mainly used for informative purpose."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(s,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Outer container style.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"View Style"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Inner container style."))))))}C.isMDXComponent=!0}}]);