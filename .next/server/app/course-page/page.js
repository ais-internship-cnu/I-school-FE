(()=>{var e={};e.id=621,e.ids=[621],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9287:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>l,routeModule:()=>x,tree:()=>u});var t=s(482),a=s(9108),o=s(2563),i=s.n(o),n=s(8300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);s.d(r,c);let u=["",{children:["course-page",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,158)),"C:\\Users\\Gijun\\Desktop\\새 폴더\\I-school-FE\\src\\app\\course-page\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,489)),"C:\\Users\\Gijun\\Desktop\\새 폴더\\I-school-FE\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\Gijun\\Desktop\\새 폴더\\I-school-FE\\src\\app\\course-page\\page.tsx"],p="/course-page/page",d={require:s,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/course-page/page",pathname:"/course-page",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},6266:(e,r,s)=>{Promise.resolve().then(s.bind(s,14))},822:(e,r,s)=>{"use strict";var t=s(9286);r.Z=void 0;var a=t(s(389)),o=s(5344);r.Z=(0,a.default)((0,o.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew")},1541:(e,r,s)=>{"use strict";var t=s(1983);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,r,s,a,o,i){if(i!==t){var n=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function r(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:a};return s.PropTypes=s,s}},7470:(e,r,s)=>{e.exports=s(1541)()},1983:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},14:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>v});var t=s(5344),a=s(3729),o=s(1532),i=s(3472),n=s(7470),c=s.n(n),u=s(4235);let l=({courseName:e,professor:r,rating:s,courseId:a})=>(0,t.jsxs)("button",{className:"course-block",onClick:()=>{let s=a.toString()[0];window.location.href=`/review-page/${e}/${r}/${s}`},children:[t.jsx("h3",{children:e}),(0,t.jsxs)("p",{children:[r," 교수님"]}),t.jsx("p",{children:t.jsx(u.Z,{name:"course-rating",value:s,precision:.5,readOnly:!0,sx:{fontSize:"0.8rem"}})})]});l.propTypes={courseName:c().string.isRequired,professor:c().string.isRequired,rating:c().number.isRequired},s(3617);let p=({courses:e})=>t.jsx(i.ZP,{container:!0,direction:"column",spacing:0,children:e.map((e,r)=>t.jsx(i.ZP,{item:!0,children:t.jsx(l,{courseName:e.courseName,professor:e.professor,rating:e.rating,courseId:e.courseId})},r))}),d=({placeholder:e,onChange:r,onKeyDown:s,onClick:o})=>{let[i,n]=(0,a.useState)("");return(0,t.jsxs)("div",{className:"search-container",children:[t.jsx("input",{type:"text",className:"search-bar",placeholder:e,onChange:e=>{n(e.target.value),r(e.target.value)},onKeyDown:s}),t.jsx("button",{className:"search-button",onClick:e=>{o(e)},children:"⌕"})]})};d.propTypes={placeholder:c().string.isRequired,onChange:c().func.isRequired};var x=s(6923),h=s(443),m=s(8428);s(1483);var g=s(822);let f=()=>{let e=(0,m.useRouter)();return t.jsx(h.Z,{onClick:()=>{e.back()},children:t.jsx(g.Z,{})})},v=()=>{let{courseList:e,fetchAllCourses:r}=(0,x.Z)(),[s,i]=(0,a.useState)([]),[n,c]=(0,a.useState)("");(0,a.useEffect)(()=>{r()},[]),(0,a.useEffect)(()=>{u(n)},[e]);let u=r=>{Array.isArray(e)?i(e.filter(e=>e.courseName.toLowerCase().includes(r.toLowerCase())||e.professor.toLowerCase().includes(r.toLowerCase()))):(console.error("courseList is not an array",e),i([]))};return t.jsx(o.default,{title:"CoursesPage",children:(0,t.jsxs)("div",{className:"component-arrangement",children:[(0,t.jsxs)("div",{className:"fix-top",children:[(0,t.jsxs)("div",{className:"header-container",children:[(0,t.jsxs)("div",{className:"arrow-icon",children:[t.jsx(f,{})," "]}),t.jsx("div",{className:"header",children:"강의실"})]}),t.jsx("div",{className:"search-container-alignment",children:t.jsx(d,{placeholder:"교수명, 강의명 검색",onChange:e=>{c(e)},onKeyDown:e=>{"Enter"===e.key&&u(n)},onClick:()=>u(n)})})]}),t.jsx("div",{className:"courses-container",children:t.jsx(p,{courses:s})})]})})}},1532:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});var t=s(5344),a=s(6013),o=s(2896);let i=({title:e,children:r})=>(0,t.jsxs)(t.Fragment,{children:[t.jsx("title",{children:`${e}`}),t.jsx(a.zt,{store:o.h,children:r})]})},6923:(e,r,s)=>{"use strict";s.d(r,{Z:()=>o});var t=s(6013),a=s(2929);let o=()=>{let e=(0,t.I0)();return{fetchAllCourses:()=>{e((0,a.gS)())},courseList:(0,t.v9)(e=>e.courses.courseList)}}},158:(e,r,s)=>{"use strict";s.r(r),s.d(r,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});let t=(0,s(6843).createProxy)(String.raw`C:\Users\Gijun\Desktop\새 폴더\I-school-FE\src\app\course-page\page.tsx`),{__esModule:a,$$typeof:o}=t,i=t.default},3881:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});var t=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3617:()=>{},1483:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[638,952,337,953,461,235,476],()=>s(9287));module.exports=t})();