"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[15133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function f(e){var t,n,a,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,d=p(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),b=f[0],v=f[1],k=g({queryString:u,groupId:s}),A=k[0],h=k[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=y[0],C=y[1],D=function(){var e=null!=A?A:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useEffect)((function(){D&&v(D)}),[D]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),h(e),C(e)}),[h,C,d]),tabValues:d}}var b=n(72389);const v="tabList__CuJ",k="tabItem_LNqP";function A(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(d(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;n=null!=(l=c[i])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(t){var l=n.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v)},r.createElement(A,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=(n(74866),n(85162),n(32408),["components"]),o={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE AirbnbRating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20AirbnbRating%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%7D%3B%0A%0Aconst%20ratingProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20isDisabled%3D%7Btrue%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%0A%20%20%20%20%20%20%20%20%20%20count%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20reviews%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20'Terrible'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Bad'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Meh'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'OK'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Hmm...'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Very%20Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Wow'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Amazing'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Unbelievable'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Jesus'%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20defaultRating%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0AheadingContainer%3A%20%7B%0A%20%20paddingTop%3A%2050%2C%0A%7D%2C%0AtitleText%3A%20%7B%0A%20%20fontSize%3A%2025%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20paddingVertical%3A%205%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20color%3A%20'%2327ae60'%2C%0A%7D%2C%0AsubtitleText%3A%20%7B%0A%20%20fontSize%3A%2018%2C%0A%20%20fontWeight%3A%20'400'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20color%3A%20'%2334495e'%2C%0A%7D%2C%0AviewContainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Arating%3A%20%7B%0A%20%20paddingVertical%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0;var s=["components"],c={id:"airbnbrating",title:"AirbnbRating"},d=void 0,p={unversionedId:"components/airbnbrating",id:"version-4.0.0-rc.2/components/airbnbrating",title:"AirbnbRating",description:"Ratings are used to collect measurable feedback from users.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/AirbnbRating.mdx",sourceDirName:"components",slug:"/components/airbnbrating",permalink:"/docs/4.0.0-rc.2/components/airbnbrating",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/AirbnbRating.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"airbnbrating",title:"AirbnbRating"},sidebar:"docs",previous:{title:"With Typescript",permalink:"/docs/4.0.0-rc.2/customization/typescript"},next:{title:"Avatar",permalink:"/docs/4.0.0-rc.2/components/avatar"}},m={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:g};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ratings are used to collect measurable feedback from users.\nUse Rating over an Input where imagery can increase user interaction.\nThis component is imported from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"),".\nThere are two types of rating - TapRating and SwipeRating.\nThis documentation is for Tap Rating version."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of ratings to displayDefault is 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"defaultRating")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Initial value for the ratingDefault is 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isDisabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the rating can be modiefied by the userDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onFinishRating")),(0,l.kt)("td",{parentName:"tr",align:null},"(number: any) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user finishes rating. Gives you the final rating value as a whole number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for rating containerDefault is none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reviewColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color value for review.Default is #f1c40f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reviewSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Size value for review.Default is 40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reviews")),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Labels to show when each value is tappede.g. If the first star is tapped, then value in index 0 will be used as the labelDefault is ","['Terrible', 'Bad', 'Okay', 'Good', 'Great']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"selectedColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color value for filled stars.Default is #004666")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showRating")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Determines if to show the reviews above the ratingDefault is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Size of rating imageDefault is 40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"starContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for star containerDefault is none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"starImage")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom base image source"))))))}b.isMDXComponent=!0}}]);