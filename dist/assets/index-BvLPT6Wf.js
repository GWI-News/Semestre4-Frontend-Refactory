(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function AS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ad={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function SS(){if(h_)return gl;h_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return gl.Fragment=e,gl.jsx=n,gl.jsxs=n,gl}var f_;function wS(){return f_||(f_=1,Ad.exports=SS()),Ad.exports}var Ne=wS(),Sd={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function bS(){if(d_)return we;d_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=R&&O[R]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,X={};function H(O,J,he){this.props=O,this.context=J,this.refs=X,this.updater=he||x}H.prototype.isReactComponent={},H.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},H.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Y(){}Y.prototype=H.prototype;function te(O,J,he){this.props=O,this.context=J,this.refs=X,this.updater=he||x}var W=te.prototype=new Y;W.constructor=te,B(W,H.prototype),W.isPureReactComponent=!0;var ue=Array.isArray,oe={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function N(O,J,he,re,se,be){return he=be.ref,{$$typeof:r,type:O,key:J,ref:he!==void 0?he:null,props:be}}function w(O,J){return N(O.type,J,void 0,void 0,void 0,O.props)}function S(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function C(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(he){return J[he]})}var k=/\/+/g;function P(O,J){return typeof O=="object"&&O!==null&&O.key!=null?C(""+O.key):J.toString(36)}function I(){}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ft(O,J,he,re,se){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(be){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case r:case e:Se=!0;break;case E:return Se=O._init,ft(Se(O._payload),J,he,re,se)}}if(Se)return se=se(O),Se=re===""?"."+P(O,0):re,ue(se)?(he="",Se!=null&&(he=Se.replace(k,"$&/")+"/"),ft(se,J,he,"",function(nt){return nt})):se!=null&&(S(se)&&(se=w(se,he+(se.key==null||O&&O.key===se.key?"":(""+se.key).replace(k,"$&/")+"/")+Se)),J.push(se)),1;Se=0;var dt=re===""?".":re+":";if(ue(O))for(var ze=0;ze<O.length;ze++)re=O[ze],be=dt+P(re,ze),Se+=ft(re,J,he,be,se);else if(ze=D(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(re=O.next()).done;)re=re.value,be=dt+P(re,ze++),Se+=ft(re,J,he,be,se);else if(be==="object"){if(typeof O.then=="function")return ft(_t(O),J,he,re,se);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function ie(O,J,he){if(O==null)return O;var re=[],se=0;return ft(O,re,"","",function(be){return J.call(he,be,se++)}),re}function ge(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(he){(O._status===0||O._status===-1)&&(O._status=1,O._result=he)},function(he){(O._status===0||O._status===-1)&&(O._status=2,O._result=he)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var de=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function je(){}return we.Children={map:ie,forEach:function(O,J,he){ie(O,function(){J.apply(this,arguments)},he)},count:function(O){var J=0;return ie(O,function(){J++}),J},toArray:function(O){return ie(O,function(J){return J})||[]},only:function(O){if(!S(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},we.Component=H,we.Fragment=n,we.Profiler=o,we.PureComponent=te,we.StrictMode=s,we.Suspense=p,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,we.act=function(){throw Error("act(...) is not supported in production builds of React.")},we.cache=function(O){return function(){return O.apply(null,arguments)}},we.cloneElement=function(O,J,he){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var re=B({},O.props),se=O.key,be=void 0;if(J!=null)for(Se in J.ref!==void 0&&(be=void 0),J.key!==void 0&&(se=""+J.key),J)!_e.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(re[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)re.children=he;else if(1<Se){for(var dt=Array(Se),ze=0;ze<Se;ze++)dt[ze]=arguments[ze+2];re.children=dt}return N(O.type,se,void 0,void 0,be,re)},we.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},we.createElement=function(O,J,he){var re,se={},be=null;if(J!=null)for(re in J.key!==void 0&&(be=""+J.key),J)_e.call(J,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(se[re]=J[re]);var Se=arguments.length-2;if(Se===1)se.children=he;else if(1<Se){for(var dt=Array(Se),ze=0;ze<Se;ze++)dt[ze]=arguments[ze+2];se.children=dt}if(O&&O.defaultProps)for(re in Se=O.defaultProps,Se)se[re]===void 0&&(se[re]=Se[re]);return N(O,be,void 0,void 0,null,se)},we.createRef=function(){return{current:null}},we.forwardRef=function(O){return{$$typeof:m,render:O}},we.isValidElement=S,we.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:ge}},we.memo=function(O,J){return{$$typeof:y,type:O,compare:J===void 0?null:J}},we.startTransition=function(O){var J=oe.T,he={};oe.T=he;try{var re=O(),se=oe.S;se!==null&&se(he,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(je,de)}catch(be){de(be)}finally{oe.T=J}},we.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},we.use=function(O){return oe.H.use(O)},we.useActionState=function(O,J,he){return oe.H.useActionState(O,J,he)},we.useCallback=function(O,J){return oe.H.useCallback(O,J)},we.useContext=function(O){return oe.H.useContext(O)},we.useDebugValue=function(){},we.useDeferredValue=function(O,J){return oe.H.useDeferredValue(O,J)},we.useEffect=function(O,J){return oe.H.useEffect(O,J)},we.useId=function(){return oe.H.useId()},we.useImperativeHandle=function(O,J,he){return oe.H.useImperativeHandle(O,J,he)},we.useInsertionEffect=function(O,J){return oe.H.useInsertionEffect(O,J)},we.useLayoutEffect=function(O,J){return oe.H.useLayoutEffect(O,J)},we.useMemo=function(O,J){return oe.H.useMemo(O,J)},we.useOptimistic=function(O,J){return oe.H.useOptimistic(O,J)},we.useReducer=function(O,J,he){return oe.H.useReducer(O,J,he)},we.useRef=function(O){return oe.H.useRef(O)},we.useState=function(O){return oe.H.useState(O)},we.useSyncExternalStore=function(O,J,he){return oe.H.useSyncExternalStore(O,J,he)},we.useTransition=function(){return oe.H.useTransition()},we.version="19.0.0",we}var m_;function Em(){return m_||(m_=1,Sd.exports=bS()),Sd.exports}var F=Em(),wd={exports:{}},yl={},bd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function RS(){return p_||(p_=1,function(r){function e(ie,ge){var de=ie.length;ie.push(ge);e:for(;0<de;){var je=de-1>>>1,O=ie[je];if(0<o(O,ge))ie[je]=ge,ie[de]=O,de=je;else break e}}function n(ie){return ie.length===0?null:ie[0]}function s(ie){if(ie.length===0)return null;var ge=ie[0],de=ie.pop();if(de!==ge){ie[0]=de;e:for(var je=0,O=ie.length,J=O>>>1;je<J;){var he=2*(je+1)-1,re=ie[he],se=he+1,be=ie[se];if(0>o(re,de))se<O&&0>o(be,re)?(ie[je]=be,ie[se]=de,je=se):(ie[je]=re,ie[he]=de,je=he);else if(se<O&&0>o(be,de))ie[je]=be,ie[se]=de,je=se;else break e}}return ge}function o(ie,ge){var de=ie.sortIndex-ge.sortIndex;return de!==0?de:ie.id-ge.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,R=null,D=3,x=!1,B=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function W(ie){for(var ge=n(y);ge!==null;){if(ge.callback===null)s(y);else if(ge.startTime<=ie)s(y),ge.sortIndex=ge.expirationTime,e(p,ge);else break;ge=n(y)}}function ue(ie){if(X=!1,W(ie),!B)if(n(p)!==null)B=!0,_t();else{var ge=n(y);ge!==null&&ft(ue,ge.startTime-ie)}}var oe=!1,_e=-1,N=5,w=-1;function S(){return!(r.unstable_now()-w<N)}function C(){if(oe){var ie=r.unstable_now();w=ie;var ge=!0;try{e:{B=!1,X&&(X=!1,Y(_e),_e=-1),x=!0;var de=D;try{t:{for(W(ie),R=n(p);R!==null&&!(R.expirationTime>ie&&S());){var je=R.callback;if(typeof je=="function"){R.callback=null,D=R.priorityLevel;var O=je(R.expirationTime<=ie);if(ie=r.unstable_now(),typeof O=="function"){R.callback=O,W(ie),ge=!0;break t}R===n(p)&&s(p),W(ie)}else s(p);R=n(p)}if(R!==null)ge=!0;else{var J=n(y);J!==null&&ft(ue,J.startTime-ie),ge=!1}}break e}finally{R=null,D=de,x=!1}ge=void 0}}finally{ge?k():oe=!1}}}var k;if(typeof te=="function")k=function(){te(C)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,I=P.port2;P.port1.onmessage=C,k=function(){I.postMessage(null)}}else k=function(){H(C,0)};function _t(){oe||(oe=!0,k())}function ft(ie,ge){_e=H(function(){ie(r.unstable_now())},ge)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ie){ie.callback=null},r.unstable_continueExecution=function(){B||x||(B=!0,_t())},r.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<ie?Math.floor(1e3/ie):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(ie){switch(D){case 1:case 2:case 3:var ge=3;break;default:ge=D}var de=D;D=ge;try{return ie()}finally{D=de}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ie,ge){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var de=D;D=ie;try{return ge()}finally{D=de}},r.unstable_scheduleCallback=function(ie,ge,de){var je=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?je+de:je):de=je,ie){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=de+O,ie={id:E++,callback:ge,priorityLevel:ie,startTime:de,expirationTime:O,sortIndex:-1},de>je?(ie.sortIndex=de,e(y,ie),n(p)===null&&ie===n(y)&&(X?(Y(_e),_e=-1):X=!0,ft(ue,de-je))):(ie.sortIndex=O,e(p,ie),B||x||(B=!0,_t())),ie},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(ie){var ge=D;return function(){var de=D;D=ge;try{return ie.apply(this,arguments)}finally{D=de}}}}(Rd)),Rd}var g_;function CS(){return g_||(g_=1,bd.exports=RS()),bd.exports}var Cd={exports:{}},jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function IS(){if(y_)return jt;y_=1;var r=Em();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:R==null?null:""+R,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jt.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,E)},jt.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},jt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},jt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},jt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,R=m(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,x=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:R,integrity:D,fetchPriority:x}):E==="script"&&s.d.X(p,{crossOrigin:R,integrity:D,fetchPriority:x,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},jt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},jt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,R=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},jt.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},jt.requestFormReset=function(p){s.d.r(p)},jt.unstable_batchedUpdates=function(p,y){return p(y)},jt.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},jt.useFormStatus=function(){return f.H.useHostTransitionStatus()},jt.version="19.0.0",jt}var __;function DS(){if(__)return Cd.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=IS(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function OS(){if(v_)return yl;v_=1;var r=CS(),e=Em(),n=DS();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),x=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),ue=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function _e(t){return t===null||typeof t!="object"?null:(t=oe&&t[oe]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function w(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case B:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return i=t.displayName||null,i!==null?i:w(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return w(t(i))}catch{}}return null}var S=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,k,P;function I(t){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||"",P=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+t+P}var _t=!1;function ft(t,i){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(G){var q=G}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(G){q=G}t.call(Z.prototype)}}else{try{throw Error()}catch(G){q=G}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(G){if(G&&q&&typeof G.stack=="string")return[G.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var b=v.split(`
`),V=T.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<V.length&&!V[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===V.length)for(l=b.length-1,h=V.length-1;1<=l&&0<=h&&b[l]!==V[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==V[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==V[h]){var K=`
`+b[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?I(a):""}function ie(t){switch(t.tag){case 26:case 27:case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return t=ft(t.type,!1),t;case 11:return t=ft(t.type.render,!1),t;case 1:return t=ft(t.type,!0),t;default:return""}}function ge(t){try{var i="";do i+=ie(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function je(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function O(t){if(de(t)!==t)throw Error(s(188))}function J(t){var i=t.alternate;if(!i){if(i=de(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return O(h),t;if(d===l)return O(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function he(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=he(t),i!==null)return i;t=t.sibling}return null}var re=Array.isArray,se=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},Se=[],dt=-1;function ze(t){return{current:t}}function nt(t){0>dt||(t.current=Se[dt],Se[dt]=null,dt--)}function Ge(t,i){dt++,Se[dt]=t.current,t.current=i}var Qt=ze(null),Ei=ze(null),yn=ze(null),nr=ze(null);function ir(t,i){switch(Ge(yn,i),Ge(Ei,t),Ge(Qt,null),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?By(i):0;break;default:if(t=t===8?i.parentNode:i,i=t.tagName,t=t.namespaceURI)t=By(t),i=qy(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}nt(Qt),Ge(Qt,i)}function Ti(){nt(Qt),nt(Ei),nt(yn)}function co(t){t.memoizedState!==null&&Ge(nr,t);var i=Qt.current,a=qy(i,t.type);i!==a&&(Ge(Ei,t),Ge(Qt,a))}function Ys(t){Ei.current===t&&(nt(Qt),nt(Ei)),nr.current===t&&(nt(nr),hl._currentValue=be)}var Xs=Object.prototype.hasOwnProperty,is=r.unstable_scheduleCallback,Zs=r.unstable_cancelCallback,Sh=r.unstable_shouldYield,ho=r.unstable_requestPaint,tn=r.unstable_now,$l=r.unstable_getCurrentPriorityLevel,vt=r.unstable_ImmediatePriority,Ct=r.unstable_UserBlockingPriority,Ai=r.unstable_NormalPriority,Ql=r.unstable_LowPriority,fo=r.unstable_IdlePriority,wh=r.log,rs=r.unstable_setDisableYieldValue,rr=null,qt=null;function mo(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(rr,t,void 0,(t.current.flags&128)===128)}catch{}}function Kn(t){if(typeof wh=="function"&&rs(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(rr,t)}catch{}}var Yt=Math.clz32?Math.clz32:Xl,po=Math.log,Yl=Math.LN2;function Xl(t){return t>>>=0,t===0?32:31-(po(t)/Yl|0)|0}var $n=128,sr=4194304;function Un(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _n(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=Un(a):(d&=T,d!==0?l=Un(d):t||(v=T&~v,v!==0&&(l=Un(v))))):(T=a&~h,T!==0?l=Un(T):d!==0?l=Un(d):t||(v=a&~v,v!==0&&(l=Un(v)))),l===0?0:i!==0&&i!==l&&!(i&h)&&(h=l&-l,v=i&-i,h>=v||h===32&&(v&4194176)!==0)?i:l}function ar(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ws(t,i){switch(t){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(){var t=$n;return $n<<=1,!($n&4194176)&&($n=128),t}function or(){var t=sr;return sr<<=1,!(sr&62914560)&&(sr=4194304),t}function Js(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function lt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zl(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,b=t.expirationTimes,V=t.hiddenUpdates;for(a=v&~a;0<a;){var K=31-Yt(a),Z=1<<K;T[K]=0,b[K]=-1;var q=V[K];if(q!==null)for(V[K]=null,K=0;K<q.length;K++){var G=q[K];G!==null&&(G.lane&=-536870913)}a&=~Z}l!==0&&lr(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function lr(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Yt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function ur(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Yt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function Wl(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Jl(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:s_(t.type))}function cr(t,i){var a=se.p;try{return se.p=t,i()}finally{se.p=a}}var Qn=Math.random().toString(36).slice(2),It="__reactFiber$"+Qn,Et="__reactProps$"+Qn,Si="__reactContainer$"+Qn,ss="__reactEvents$"+Qn,ea="__reactListeners$"+Qn,Yn="__reactHandles$"+Qn,yo="__reactResources$"+Qn,hr="__reactMarker$"+Qn;function as(t){delete t[It],delete t[Et],delete t[ss],delete t[ea],delete t[Yn]}function Pn(t){var i=t[It];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Si]||a[It]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Fy(t);t!==null;){if(a=t[It])return a;t=Fy(t)}return i}t=a,a=t.parentNode}return null}function wi(t){if(t=t[It]||t[Si]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function fr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function dr(t){var i=t[yo];return i||(i=t[yo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ze(t){t[hr]=!0}var _o=new Set,ta={};function un(t,i){nn(t,i),nn(t+"Capture",i)}function nn(t,i){for(ta[t]=i,t=0;t<i.length;t++)_o.add(i[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vo={},Eo={};function eu(t){return Xs.call(Eo,t)?!0:Xs.call(vo,t)?!1:bh.test(t)?Eo[t]=!0:(vo[t]=!0,!1)}function mr(t,i,a){if(eu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function pr(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function vn(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tu(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Rh(t){var i=tu(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function os(t){t._valueTracker||(t._valueTracker=Rh(t))}function To(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=tu(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function na(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var bi=/[\n"\\]/g;function it(t){return t.replace(bi,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function gr(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Xt(i)):t.value!==""+Xt(i)&&(t.value=""+Xt(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?ia(t,v,Xt(i)):a!=null?ia(t,v,Xt(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Xt(T):t.removeAttribute("name")}function ls(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Xt(a):"",i=i!=null?""+Xt(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function ia(t,i,a){i==="number"&&na(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Be(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Xt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function us(t,i,a){if(i!=null&&(i=""+Xt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Xt(a):""}function yr(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(re(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Xt(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function En(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ch=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ao(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Ch.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function nu(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Ao(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Ao(t,d,i[d])}function So(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(t){return Dh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Tn=null;function ra(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ri=null,Ci=null;function Ii(t){var i=wi(t);if(i&&(t=i.stateNode)){var a=t[Et]||null;e:switch(t=i.stateNode,i.type){case"input":if(gr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+it(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Et]||null;if(!h)throw Error(s(90));gr(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&To(l)}break e;case"textarea":us(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Be(t,!!a.multiple,i,!1)}}}var wo=!1;function iu(t,i,a){if(wo)return t(i,a);wo=!0;try{var l=t(i);return l}finally{if(wo=!1,(Ri!==null||Ci!==null)&&(Qu(),Ri&&(i=Ri,t=Ci,Ci=Ri=null,Ii(i),t)))for(i=0;i<t.length;i++)Ii(t[i])}}function cs(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Et]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var An=!1;if(cn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){An=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{An=!1}var Zn=null,_r=null,Di=null;function bo(){if(Di)return Di;var t,i=_r,a=i.length,l,h="value"in Zn?Zn.value:Zn.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Di=h.slice(t,1<l?1-l:void 0)}function Wn(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jn(){return!0}function Ro(){return!1}function Dt(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jn:Ro,this.isPropagationStopped=Ro,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=Dt(Fe),fs=C({},Fe,{view:0,detail:0}),ru=Dt(fs),aa,oa,ei,ds=C({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ei&&(ei&&t.type==="mousemove"?(aa=t.screenX-ei.screenX,oa=t.screenY-ei.screenY):oa=aa=0,ei=t),aa)},movementY:function(t){return"movementY"in t?t.movementY:oa}}),Sn=Dt(ds),su=C({},ds,{dataTransfer:0}),Oh=Dt(su),ms=C({},fs,{relatedTarget:0}),la=Dt(ms),Co=C({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),ua=Dt(Co),au=C({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ca=Dt(au),Nh=C({},Fe,{data:0}),Io=Dt(Nh),ps={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Do(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=lu[t])?!!i[t]:!1}function gs(){return Do}var uu=C({},fs,{key:function(t){if(t.key){var i=ps[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Wn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ou[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(t){return t.type==="keypress"?Wn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ha=Dt(uu),cu=C({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=Dt(cu),Oi=C({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),hu=Dt(Oi),fu=C({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),du=Dt(fu),mu=C({},ds,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fa=Dt(mu),Zt=C({},Fe,{newState:0,oldState:0}),pu=Dt(Zt),gu=[9,13,27,32],ti=cn&&"CompositionEvent"in window,c=null;cn&&"documentMode"in document&&(c=document.documentMode);var g=cn&&"TextEvent"in window&&!c,_=cn&&(!ti||c&&8<c&&11>=c),A=" ",U=!1;function j(t,i){switch(t){case"keyup":return gu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ee(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Me=!1;function Tt(t,i){switch(t){case"compositionend":return ee(i);case"keypress":return i.which!==32?null:(U=!0,A);case"textInput":return t=i.data,t===A&&U?null:t;default:return null}}function ke(t,i){if(Me)return t==="compositionend"||!ti&&j(t,i)?(t=bo(),Di=_r=Zn=null,Me=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ot={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function At(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ot[t.type]:i==="textarea"}function Ni(t,i,a,l){Ri?Ci?Ci.push(l):Ci=[l]:Ri=l,i=Ju(i,"onChange"),0<i.length&&(a=new sa("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var xt=null,ni=null;function No(t){xy(t,0)}function yu(t){var i=fr(t);if(To(i))return t}function cp(t,i){if(t==="change")return i}var hp=!1;if(cn){var Mh;if(cn){var kh="oninput"in document;if(!kh){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),kh=typeof fp.oninput=="function"}Mh=kh}else Mh=!1;hp=Mh&&(!document.documentMode||9<document.documentMode)}function dp(){xt&&(xt.detachEvent("onpropertychange",mp),ni=xt=null)}function mp(t){if(t.propertyName==="value"&&yu(ni)){var i=[];Ni(i,ni,t,ra(t)),iu(No,i)}}function W0(t,i,a){t==="focusin"?(dp(),xt=i,ni=a,xt.attachEvent("onpropertychange",mp)):t==="focusout"&&dp()}function J0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(ni)}function eA(t,i){if(t==="click")return yu(i)}function tA(t,i){if(t==="input"||t==="change")return yu(i)}function nA(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hn=typeof Object.is=="function"?Object.is:nA;function Mo(t,i){if(hn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Xs.call(i,h)||!hn(t[h],i[h]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,i){var a=pp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pp(a)}}function yp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function _p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=na(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=na(t.document)}return i}function Vh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function iA(t,i){var a=_p(i);i=t.focusedElem;var l=t.selectionRange;if(a!==i&&i&&i.ownerDocument&&yp(i.ownerDocument.documentElement,i)){if(l!==null&&Vh(i)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(a,i.value.length);else if(a=(t=i.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var h=i.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=gp(i,d);var v=gp(i,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=i;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)a=t[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var rA=cn&&"documentMode"in document&&11>=document.documentMode,da=null,xh=null,ko=null,Lh=!1;function vp(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lh||da==null||da!==na(l)||(l=da,"selectionStart"in l&&Vh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ko&&Mo(ko,l)||(ko=l,l=Ju(xh,"onSelect"),0<l.length&&(i=new sa("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=da)))}function ys(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ma={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Uh={},Ep={};cn&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function _s(t){if(Uh[t])return Uh[t];if(!ma[t])return t;var i=ma[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ep)return Uh[t]=i[a];return t}var Tp=_s("animationend"),Ap=_s("animationiteration"),Sp=_s("animationstart"),sA=_s("transitionrun"),aA=_s("transitionstart"),oA=_s("transitioncancel"),wp=_s("transitionend"),bp=new Map,Rp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function zn(t,i){bp.set(t,i),un(i,[t])}var wn=[],pa=0,Ph=0;function _u(){for(var t=pa,i=Ph=pa=0;i<t;){var a=wn[i];wn[i++]=null;var l=wn[i];wn[i++]=null;var h=wn[i];wn[i++]=null;var d=wn[i];if(wn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Cp(a,h,d)}}function vu(t,i,a,l){wn[pa++]=t,wn[pa++]=i,wn[pa++]=a,wn[pa++]=l,Ph|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function zh(t,i,a,l){return vu(t,i,a,l),Eu(t)}function vr(t,i){return vu(t,null,null,i),Eu(t)}function Cp(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&i!==null&&t.tag===3&&(d=t.stateNode,h=31-Yt(a),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[i]:t.push(i),i.lane=a|536870912)}function Eu(t){if(50<rl)throw rl=0,Kf=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ga={},Ip=new WeakMap;function bn(t,i){if(typeof t=="object"&&t!==null){var a=Ip.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ge(i)},Ip.set(t,i),i)}return{value:t,source:i,stack:ge(i)}}var ya=[],_a=0,Tu=null,Au=0,Rn=[],Cn=0,vs=null,Mi=1,ki="";function Es(t,i){ya[_a++]=Au,ya[_a++]=Tu,Tu=t,Au=i}function Dp(t,i,a){Rn[Cn++]=Mi,Rn[Cn++]=ki,Rn[Cn++]=vs,vs=t;var l=Mi;t=ki;var h=32-Yt(l)-1;l&=~(1<<h),a+=1;var d=32-Yt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Mi=1<<32-Yt(i)+h|a<<h|l,ki=d+t}else Mi=1<<d|a<<h|l,ki=t}function Bh(t){t.return!==null&&(Es(t,1),Dp(t,1,0))}function qh(t){for(;t===Tu;)Tu=ya[--_a],ya[_a]=null,Au=ya[--_a],ya[_a]=null;for(;t===vs;)vs=Rn[--Cn],Rn[Cn]=null,ki=Rn[--Cn],Rn[Cn]=null,Mi=Rn[--Cn],Rn[Cn]=null}var Wt=null,Lt=null,qe=!1,Bn=null,ii=!1,Hh=Error(s(519));function Ts(t){var i=Error(s(418,""));throw Lo(bn(i,t)),Hh}function Op(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[It]=t,i[Et]=l,a){case"dialog":Oe("cancel",i),Oe("close",i);break;case"iframe":case"object":case"embed":Oe("load",i);break;case"video":case"audio":for(a=0;a<al.length;a++)Oe(al[a],i);break;case"source":Oe("error",i);break;case"img":case"image":case"link":Oe("error",i),Oe("load",i);break;case"details":Oe("toggle",i);break;case"input":Oe("invalid",i),ls(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),os(i);break;case"select":Oe("invalid",i);break;case"textarea":Oe("invalid",i),yr(i,l.value,l.defaultValue,l.children),os(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||zy(i.textContent,a)?(l.popover!=null&&(Oe("beforetoggle",i),Oe("toggle",i)),l.onScroll!=null&&Oe("scroll",i),l.onScrollEnd!=null&&Oe("scrollend",i),l.onClick!=null&&(i.onclick=ec),i=!0):i=!1,i||Ts(t)}function Np(t){for(Wt=t.return;Wt;)switch(Wt.tag){case 3:case 27:ii=!0;return;case 5:case 13:ii=!1;return;default:Wt=Wt.return}}function Vo(t){if(t!==Wt)return!1;if(!qe)return Np(t),qe=!0,!1;var i=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&(i=!0),i&&Lt&&Ts(t),Np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){Lt=Hn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}Lt=null}}else Lt=Wt?Hn(t.stateNode.nextSibling):null;return!0}function xo(){Lt=Wt=null,qe=!1}function Lo(t){Bn===null?Bn=[t]:Bn.push(t)}var Uo=Error(s(460)),Mp=Error(s(474)),jh={then:function(){}};function kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Su(){}function Vp(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Su,Su),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Uo?Error(s(483)):t;default:if(typeof i.status=="string")i.then(Su,Su);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,t===Uo?Error(s(483)):t}throw Po=i,Uo}}var Po=null;function xp(){if(Po===null)throw Error(s(459));var t=Po;return Po=null,t}var va=null,zo=0;function wu(t){var i=zo;return zo+=1,va===null&&(va=[]),Vp(va,t,i)}function Bo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function bu(t,i){throw i.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Lp(t){var i=t._init;return i(t._payload)}function Up(t){function i(L,M){if(t){var z=L.deletions;z===null?(L.deletions=[M],L.flags|=16):z.push(M)}}function a(L,M){if(!t)return null;for(;M!==null;)i(L,M),M=M.sibling;return null}function l(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function h(L,M){return L=Nr(L,M),L.index=0,L.sibling=null,L}function d(L,M,z){return L.index=z,t?(z=L.alternate,z!==null?(z=z.index,z<M?(L.flags|=33554434,M):z):(L.flags|=33554434,M)):(L.flags|=1048576,M)}function v(L){return t&&L.alternate===null&&(L.flags|=33554434),L}function T(L,M,z,$){return M===null||M.tag!==6?(M=Pf(z,L.mode,$),M.return=L,M):(M=h(M,z),M.return=L,M)}function b(L,M,z,$){var le=z.type;return le===p?K(L,M,z.props.children,$,z.key):M!==null&&(M.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===te&&Lp(le)===M.type)?(M=h(M,z.props),Bo(M,z),M.return=L,M):(M=ju(z.type,z.key,z.props,null,L.mode,$),Bo(M,z),M.return=L,M)}function V(L,M,z,$){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=zf(z,L.mode,$),M.return=L,M):(M=h(M,z.children||[]),M.return=L,M)}function K(L,M,z,$,le){return M===null||M.tag!==7?(M=Ns(z,L.mode,$,le),M.return=L,M):(M=h(M,z),M.return=L,M)}function Z(L,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Pf(""+M,L.mode,z),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case f:return z=ju(M.type,M.key,M.props,null,L.mode,z),Bo(z,M),z.return=L,z;case m:return M=zf(M,L.mode,z),M.return=L,M;case te:var $=M._init;return M=$(M._payload),Z(L,M,z)}if(re(M)||_e(M))return M=Ns(M,L.mode,z,null),M.return=L,M;if(typeof M.then=="function")return Z(L,wu(M),z);if(M.$$typeof===x)return Z(L,Bu(L,M),z);bu(L,M)}return null}function q(L,M,z,$){var le=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return le!==null?null:T(L,M,""+z,$);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case f:return z.key===le?b(L,M,z,$):null;case m:return z.key===le?V(L,M,z,$):null;case te:return le=z._init,z=le(z._payload),q(L,M,z,$)}if(re(z)||_e(z))return le!==null?null:K(L,M,z,$,null);if(typeof z.then=="function")return q(L,M,wu(z),$);if(z.$$typeof===x)return q(L,M,Bu(L,z),$);bu(L,z)}return null}function G(L,M,z,$,le){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return L=L.get(z)||null,T(M,L,""+$,le);if(typeof $=="object"&&$!==null){switch($.$$typeof){case f:return L=L.get($.key===null?z:$.key)||null,b(M,L,$,le);case m:return L=L.get($.key===null?z:$.key)||null,V(M,L,$,le);case te:var Ce=$._init;return $=Ce($._payload),G(L,M,z,$,le)}if(re($)||_e($))return L=L.get(z)||null,K(M,L,$,le,null);if(typeof $.then=="function")return G(L,M,z,wu($),le);if($.$$typeof===x)return G(L,M,z,Bu(M,$),le);bu(M,$)}return null}function ce(L,M,z,$){for(var le=null,Ce=null,fe=M,me=M=0,kt=null;fe!==null&&me<z.length;me++){fe.index>me?(kt=fe,fe=null):kt=fe.sibling;var He=q(L,fe,z[me],$);if(He===null){fe===null&&(fe=kt);break}t&&fe&&He.alternate===null&&i(L,fe),M=d(He,M,me),Ce===null?le=He:Ce.sibling=He,Ce=He,fe=kt}if(me===z.length)return a(L,fe),qe&&Es(L,me),le;if(fe===null){for(;me<z.length;me++)fe=Z(L,z[me],$),fe!==null&&(M=d(fe,M,me),Ce===null?le=fe:Ce.sibling=fe,Ce=fe);return qe&&Es(L,me),le}for(fe=l(fe);me<z.length;me++)kt=G(fe,L,me,z[me],$),kt!==null&&(t&&kt.alternate!==null&&fe.delete(kt.key===null?me:kt.key),M=d(kt,M,me),Ce===null?le=kt:Ce.sibling=kt,Ce=kt);return t&&fe.forEach(function(Pr){return i(L,Pr)}),qe&&Es(L,me),le}function Ee(L,M,z,$){if(z==null)throw Error(s(151));for(var le=null,Ce=null,fe=M,me=M=0,kt=null,He=z.next();fe!==null&&!He.done;me++,He=z.next()){fe.index>me?(kt=fe,fe=null):kt=fe.sibling;var Pr=q(L,fe,He.value,$);if(Pr===null){fe===null&&(fe=kt);break}t&&fe&&Pr.alternate===null&&i(L,fe),M=d(Pr,M,me),Ce===null?le=Pr:Ce.sibling=Pr,Ce=Pr,fe=kt}if(He.done)return a(L,fe),qe&&Es(L,me),le;if(fe===null){for(;!He.done;me++,He=z.next())He=Z(L,He.value,$),He!==null&&(M=d(He,M,me),Ce===null?le=He:Ce.sibling=He,Ce=He);return qe&&Es(L,me),le}for(fe=l(fe);!He.done;me++,He=z.next())He=G(fe,L,me,He.value,$),He!==null&&(t&&He.alternate!==null&&fe.delete(He.key===null?me:He.key),M=d(He,M,me),Ce===null?le=He:Ce.sibling=He,Ce=He);return t&&fe.forEach(function(TS){return i(L,TS)}),qe&&Es(L,me),le}function at(L,M,z,$){if(typeof z=="object"&&z!==null&&z.type===p&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case f:e:{for(var le=z.key;M!==null;){if(M.key===le){if(le=z.type,le===p){if(M.tag===7){a(L,M.sibling),$=h(M,z.props.children),$.return=L,L=$;break e}}else if(M.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===te&&Lp(le)===M.type){a(L,M.sibling),$=h(M,z.props),Bo($,z),$.return=L,L=$;break e}a(L,M);break}else i(L,M);M=M.sibling}z.type===p?($=Ns(z.props.children,L.mode,$,z.key),$.return=L,L=$):($=ju(z.type,z.key,z.props,null,L.mode,$),Bo($,z),$.return=L,L=$)}return v(L);case m:e:{for(le=z.key;M!==null;){if(M.key===le)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){a(L,M.sibling),$=h(M,z.children||[]),$.return=L,L=$;break e}else{a(L,M);break}else i(L,M);M=M.sibling}$=zf(z,L.mode,$),$.return=L,L=$}return v(L);case te:return le=z._init,z=le(z._payload),at(L,M,z,$)}if(re(z))return ce(L,M,z,$);if(_e(z)){if(le=_e(z),typeof le!="function")throw Error(s(150));return z=le.call(z),Ee(L,M,z,$)}if(typeof z.then=="function")return at(L,M,wu(z),$);if(z.$$typeof===x)return at(L,M,Bu(L,z),$);bu(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(a(L,M.sibling),$=h(M,z),$.return=L,L=$):(a(L,M),$=Pf(z,L.mode,$),$.return=L,L=$),v(L)):a(L,M)}return function(L,M,z,$){try{zo=0;var le=at(L,M,z,$);return va=null,le}catch(fe){if(fe===Uo)throw fe;var Ce=Nn(29,fe,null,L.mode);return Ce.lanes=$,Ce.return=L,Ce}finally{}}}var As=Up(!0),Pp=Up(!1),Ea=ze(null),Ru=ze(0);function zp(t,i){t=Fi,Ge(Ru,t),Ge(Ea,i),Fi=t|i.baseLanes}function Fh(){Ge(Ru,Fi),Ge(Ea,Ea.current)}function Gh(){Fi=Ru.current,nt(Ea),nt(Ru)}var In=ze(null),ri=null;function Er(t){var i=t.alternate;Ge(St,St.current&1),Ge(In,t),ri===null&&(i===null||Ea.current!==null||i.memoizedState!==null)&&(ri=t)}function Bp(t){if(t.tag===22){if(Ge(St,St.current),Ge(In,t),ri===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(ri=t)}}else Tr()}function Tr(){Ge(St,St.current),Ge(In,In.current)}function Vi(t){nt(In),ri===t&&(ri=null),nt(St)}var St=ze(0);function Cu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},uA=r.unstable_scheduleCallback,cA=r.unstable_NormalPriority,wt={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kh(){return{controller:new lA,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&uA(cA,function(){t.controller.abort()})}var Ho=null,$h=0,Ta=0,Aa=null;function hA(t,i){if(Ho===null){var a=Ho=[];$h=0,Ta=ed(),Aa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $h++,i.then(qp,qp),i}function qp(){if(--$h===0&&Ho!==null){Aa!==null&&(Aa.status="fulfilled");var t=Ho;Ho=null,Ta=0,Aa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function fA(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Hp=S.S;S.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&hA(t,i),Hp!==null&&Hp(t,i)};var Ss=ze(null);function Qh(){var t=Ss.current;return t!==null?t:Ye.pooledCache}function Iu(t,i){i===null?Ge(Ss,Ss.current):Ge(Ss,i.pool)}function jp(){var t=Qh();return t===null?null:{parent:wt._currentValue,pool:t}}var Ar=0,Re=null,Ke=null,mt=null,Du=!1,Sa=!1,ws=!1,Ou=0,jo=0,wa=null,dA=0;function ut(){throw Error(s(321))}function Yh(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!hn(t[a],i[a]))return!1;return!0}function Xh(t,i,a,l,h,d){return Ar=d,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,S.H=t===null||t.memoizedState===null?bs:Sr,ws=!1,d=a(l,h),ws=!1,Sa&&(d=Gp(i,a,l,h)),Fp(t),d}function Fp(t){S.H=si;var i=Ke!==null&&Ke.next!==null;if(Ar=0,mt=Ke=Re=null,Du=!1,jo=0,wa=null,i)throw Error(s(300));t===null||Nt||(t=t.dependencies,t!==null&&zu(t)&&(Nt=!0))}function Gp(t,i,a,l){Re=t;var h=0;do{if(Sa&&(wa=null),jo=0,Sa=!1,25<=h)throw Error(s(301));if(h+=1,mt=Ke=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=Rs,d=i(a,l)}while(Sa);return d}function mA(){var t=S.H,i=t.useState()[0];return i=typeof i.then=="function"?Fo(i):i,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(Re.flags|=1024),i}function Zh(){var t=Ou!==0;return Ou=0,t}function Wh(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Jh(t){if(Du){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Du=!1}Ar=0,mt=Ke=Re=null,Sa=!1,jo=Ou=0,wa=null}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Re.memoizedState=mt=t:mt=mt.next=t,mt}function pt(){if(Ke===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var i=mt===null?Re.memoizedState:mt.next;if(i!==null)mt=i,Ke=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},mt===null?Re.memoizedState=mt=t:mt=mt.next=t}return mt}var Nu;Nu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Fo(t){var i=jo;return jo+=1,wa===null&&(wa=[]),t=Vp(wa,t,i),i=Re,(mt===null?i.memoizedState:mt.next)===null&&(i=i.alternate,S.H=i===null||i.memoizedState===null?bs:Sr),t}function Mu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===x)return Ht(t)}throw Error(s(438,String(t)))}function ef(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Nu(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=ue;return i.index++,a}function xi(t,i){return typeof i=="function"?i(t):i}function ku(t){var i=pt();return tf(i,Ke,t)}function tf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,b=null,V=i,K=!1;do{var Z=V.lane&-536870913;if(Z!==V.lane?(Ve&Z)===Z:(Ar&Z)===Z){var q=V.revertLane;if(q===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),Z===Ta&&(K=!0);else if((Ar&q)===q){V=V.next,q===Ta&&(K=!0);continue}else Z={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},b===null?(T=b=Z,v=d):b=b.next=Z,Re.lanes|=q,Mr|=q;Z=V.action,ws&&a(d,Z),d=V.hasEagerState?V.eagerState:a(d,Z)}else q={lane:Z,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},b===null?(T=b=q,v=d):b=b.next=q,Re.lanes|=Z,Mr|=Z;V=V.next}while(V!==null&&V!==i);if(b===null?v=d:b.next=T,!hn(d,t.memoizedState)&&(Nt=!0,K&&(a=Aa,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function nf(t){var i=pt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);hn(d,i.memoizedState)||(Nt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Kp(t,i,a){var l=Re,h=pt(),d=qe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!hn((Ke||h).memoizedState,a);if(v&&(h.memoizedState=a,Nt=!0),h=h.queue,af(Yp.bind(null,l,h,t),[t]),h.getSnapshot!==i||v||mt!==null&&mt.memoizedState.tag&1){if(l.flags|=2048,ba(9,Qp.bind(null,l,h,a,i),{destroy:void 0},null),Ye===null)throw Error(s(349));d||Ar&60||$p(l,i,a)}return a}function $p(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=Nu(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Qp(t,i,a,l){i.value=a,i.getSnapshot=l,Xp(i)&&Zp(t)}function Yp(t,i,a){return a(function(){Xp(i)&&Zp(t)})}function Xp(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!hn(t,a)}catch{return!0}}function Zp(t){var i=vr(t,2);i!==null&&Jt(i,t,2)}function rf(t){var i=rn();if(typeof t=="function"){var a=t;if(t=a(),ws){Kn(!0);try{a()}finally{Kn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:t},i}function Wp(t,i,a,l){return t.baseState=a,tf(t,Ke,typeof l=="function"?l:xi)}function pA(t,i,a,l,h){if(Lu(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Jp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Jp(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=S.T,v={};S.T=v;try{var T=a(h,l),b=S.S;b!==null&&b(v,T),eg(t,i,T)}catch(V){sf(t,i,V)}finally{S.T=d}}else try{d=a(h,l),eg(t,i,d)}catch(V){sf(t,i,V)}}function eg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){tg(t,i,l)},function(l){return sf(t,i,l)}):tg(t,i,a)}function tg(t,i,a){i.status="fulfilled",i.value=a,ng(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Jp(t,a)))}function sf(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,ng(i),i=i.next;while(i!==l)}t.action=null}function ng(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ig(t,i){return i}function rg(t,i){if(qe){var a=Ye.formState;if(a!==null){e:{var l=Re;if(qe){if(Lt){t:{for(var h=Lt,d=ii;h.nodeType!==8;){if(!d){h=null;break t}if(h=Hn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Lt=Hn(h.nextSibling),l=h.data==="F!";break e}}Ts(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ig,lastRenderedState:i},a.queue=l,a=Ag.bind(null,Re,l),l.dispatch=a,l=rf(!1),d=hf.bind(null,Re,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=pA.bind(null,Re,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function sg(t){var i=pt();return ag(i,Ke,t)}function ag(t,i,a){i=tf(t,i,ig)[0],t=ku(xi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?Fo(i):i;var l=pt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Re.flags|=2048,ba(9,gA.bind(null,h,a),{destroy:void 0},null)),[i,d,t]}function gA(t,i){t.action=i}function og(t){var i=pt(),a=Ke;if(a!==null)return ag(i,a,t);pt(),i=i.memoizedState,a=pt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function ba(t,i,a,l){return t={tag:t,create:i,inst:a,deps:l,next:null},i=Re.updateQueue,i===null&&(i=Nu(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function lg(){return pt().memoizedState}function Vu(t,i,a,l){var h=rn();Re.flags|=t,h.memoizedState=ba(1|i,a,{destroy:void 0},l===void 0?null:l)}function xu(t,i,a,l){var h=pt();l=l===void 0?null:l;var d=h.memoizedState.inst;Ke!==null&&l!==null&&Yh(l,Ke.memoizedState.deps)?h.memoizedState=ba(i,a,d,l):(Re.flags|=t,h.memoizedState=ba(1|i,a,d,l))}function ug(t,i){Vu(8390656,8,t,i)}function af(t,i){xu(2048,8,t,i)}function cg(t,i){return xu(4,2,t,i)}function hg(t,i){return xu(4,4,t,i)}function fg(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dg(t,i,a){a=a!=null?a.concat([t]):null,xu(4,4,fg.bind(null,i,t),a)}function of(){}function mg(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Yh(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function pg(t,i){var a=pt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Yh(i,l[1]))return l[0];if(l=t(),ws){Kn(!0);try{t()}finally{Kn(!1)}}return a.memoizedState=[l,i],l}function lf(t,i,a){return a===void 0||Ar&1073741824?t.memoizedState=i:(t.memoizedState=a,t=yy(),Re.lanes|=t,Mr|=t,a)}function gg(t,i,a,l){return hn(a,i)?a:Ea.current!==null?(t=lf(t,a,l),hn(t,i)||(Nt=!0),t):Ar&42?(t=yy(),Re.lanes|=t,Mr|=t,i):(Nt=!0,t.memoizedState=a)}function yg(t,i,a,l,h){var d=se.p;se.p=d!==0&&8>d?d:8;var v=S.T,T={};S.T=T,hf(t,!1,i,a);try{var b=h(),V=S.S;if(V!==null&&V(T,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var K=fA(b,l);Go(t,i,K,pn(t))}else Go(t,i,l,pn(t))}catch(Z){Go(t,i,{then:function(){},status:"rejected",reason:Z},pn())}finally{se.p=d,S.T=v}}function yA(){}function uf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=_g(t).queue;yg(t,h,i,be,a===null?yA:function(){return vg(t),a(l)})}function _g(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:be},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function vg(t){var i=_g(t).next.queue;Go(t,i,{},pn())}function cf(){return Ht(hl)}function Eg(){return pt().memoizedState}function Tg(){return pt().memoizedState}function _A(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=pn();t=Rr(a);var l=Cr(i,t,a);l!==null&&(Jt(l,i,a),Qo(l,i,a)),i={cache:Kh()},t.payload=i;return}i=i.return}}function vA(t,i,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Lu(t)?Sg(i,a):(a=zh(t,i,a,l),a!==null&&(Jt(a,t,l),wg(a,i,l)))}function Ag(t,i,a){var l=pn();Go(t,i,a,l)}function Go(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lu(t))Sg(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,hn(T,v))return vu(t,i,h,0),Ye===null&&_u(),!1}catch{}finally{}if(a=zh(t,i,h,l),a!==null)return Jt(a,t,l),wg(a,i,l),!0}return!1}function hf(t,i,a,l){if(l={lane:2,revertLane:ed(),action:l,hasEagerState:!1,eagerState:null,next:null},Lu(t)){if(i)throw Error(s(479))}else i=zh(t,a,l,2),i!==null&&Jt(i,t,2)}function Lu(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function Sg(t,i){Sa=Du=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function wg(t,i,a){if(a&4194176){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,ur(t,a)}}var si={readContext:Ht,use:Mu,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut};si.useCacheRefresh=ut,si.useMemoCache=ut,si.useHostTransitionStatus=ut,si.useFormState=ut,si.useActionState=ut,si.useOptimistic=ut;var bs={readContext:Ht,use:Mu,useCallback:function(t,i){return rn().memoizedState=[t,i===void 0?null:i],t},useContext:Ht,useEffect:ug,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Vu(4194308,4,fg.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Vu(4194308,4,t,i)},useInsertionEffect:function(t,i){Vu(4,2,t,i)},useMemo:function(t,i){var a=rn();i=i===void 0?null:i;var l=t();if(ws){Kn(!0);try{t()}finally{Kn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=rn();if(a!==void 0){var h=a(i);if(ws){Kn(!0);try{a(i)}finally{Kn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=vA.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=rn();return t={current:t},i.memoizedState=t},useState:function(t){t=rf(t);var i=t.queue,a=Ag.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:of,useDeferredValue:function(t,i){var a=rn();return lf(a,t,i)},useTransition:function(){var t=rf(!1);return t=yg.bind(null,Re,t.queue,!0,!1),rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=rn();if(qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ye===null)throw Error(s(349));Ve&60||$p(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ug(Yp.bind(null,l,d,t),[t]),l.flags|=2048,ba(9,Qp.bind(null,l,d,a,i),{destroy:void 0},null),a},useId:function(){var t=rn(),i=Ye.identifierPrefix;if(qe){var a=ki,l=Mi;a=(l&~(1<<32-Yt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ou++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=dA++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},useCacheRefresh:function(){return rn().memoizedState=_A.bind(null,Re)}};bs.useMemoCache=ef,bs.useHostTransitionStatus=cf,bs.useFormState=rg,bs.useActionState=rg,bs.useOptimistic=function(t){var i=rn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=hf.bind(null,Re,!0,a),a.dispatch=i,[t,i]};var Sr={readContext:Ht,use:Mu,useCallback:mg,useContext:Ht,useEffect:af,useImperativeHandle:dg,useInsertionEffect:cg,useLayoutEffect:hg,useMemo:pg,useReducer:ku,useRef:lg,useState:function(){return ku(xi)},useDebugValue:of,useDeferredValue:function(t,i){var a=pt();return gg(a,Ke.memoizedState,t,i)},useTransition:function(){var t=ku(xi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:Fo(t),i]},useSyncExternalStore:Kp,useId:Eg};Sr.useCacheRefresh=Tg,Sr.useMemoCache=ef,Sr.useHostTransitionStatus=cf,Sr.useFormState=sg,Sr.useActionState=sg,Sr.useOptimistic=function(t,i){var a=pt();return Wp(a,Ke,t,i)};var Rs={readContext:Ht,use:Mu,useCallback:mg,useContext:Ht,useEffect:af,useImperativeHandle:dg,useInsertionEffect:cg,useLayoutEffect:hg,useMemo:pg,useReducer:nf,useRef:lg,useState:function(){return nf(xi)},useDebugValue:of,useDeferredValue:function(t,i){var a=pt();return Ke===null?lf(a,t,i):gg(a,Ke.memoizedState,t,i)},useTransition:function(){var t=nf(xi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:Fo(t),i]},useSyncExternalStore:Kp,useId:Eg};Rs.useCacheRefresh=Tg,Rs.useMemoCache=ef,Rs.useHostTransitionStatus=cf,Rs.useFormState=og,Rs.useActionState=og,Rs.useOptimistic=function(t,i){var a=pt();return Ke!==null?Wp(a,Ke,t,i):(a.baseState=t,[t,a.queue.dispatch])};function ff(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:C({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var df={isMounted:function(t){return(t=t._reactInternals)?de(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=pn(),h=Rr(l);h.payload=i,a!=null&&(h.callback=a),i=Cr(t,h,l),i!==null&&(Jt(i,t,l),Qo(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=pn(),h=Rr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Cr(t,h,l),i!==null&&(Jt(i,t,l),Qo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=pn(),l=Rr(a);l.tag=2,i!=null&&(l.callback=i),i=Cr(t,l,a),i!==null&&(Jt(i,t,a),Qo(i,t,a))}};function bg(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,l)||!Mo(h,d):!0}function Rg(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&df.enqueueReplaceState(i,i.state,null)}function Cs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=C({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Uu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Cg(t){Uu(t)}function Ig(t){console.error(t)}function Dg(t){Uu(t)}function Pu(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Og(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function mf(t,i,a){return a=Rr(a),a.tag=3,a.payload={element:null},a.callback=function(){Pu(t,i)},a}function Ng(t){return t=Rr(t),t.tag=3,t}function Mg(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Og(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Og(i,a,l),typeof h!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function EA(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&$o(i,a,h,!0),a=In.current,a!==null){switch(a.tag){case 13:return ri===null?Yf():a.alternate===null&&st===0&&(st=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===jh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Zf(t,l,h)),!1;case 22:return a.flags|=65536,l===jh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Zf(t,l,h)),!1}throw Error(s(435,a.tag))}return Zf(t,l,h),Yf(),!1}if(qe)return i=In.current,i!==null?(!(i.flags&65536)&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Hh&&(t=Error(s(422),{cause:l}),Lo(bn(t,a)))):(l!==Hh&&(i=Error(s(423),{cause:l}),Lo(bn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=bn(l,a),h=mf(t.stateNode,l,h),Df(t,h),st!==4&&(st=2)),!1;var d=Error(s(520),{cause:l});if(d=bn(d,a),nl===null?nl=[d]:nl.push(d),st!==4&&(st=2),i===null)return!0;l=bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=mf(a.stateNode,l,t),Df(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(kr===null||!kr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Ng(h),Mg(h,t,a,l),Df(a,h),!1}a=a.return}while(a!==null);return!1}var kg=Error(s(461)),Nt=!1;function Ut(t,i,a,l){i.child=t===null?Pp(i,null,a,l):As(i,t.child,a,l)}function Vg(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ds(i),l=Xh(t,i,a,v,d,h),T=Zh(),t!==null&&!Nt?(Wh(t,i,h),Li(t,i,h)):(qe&&T&&Bh(i),i.flags|=1,Ut(t,i,l,h),i.child)}function xg(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Uf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Lg(t,i,d,l,h)):(t=ju(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Sf(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(v,l)&&t.ref===i.ref)return Li(t,i,h)}return i.flags|=1,t=Nr(d,l),t.ref=i.ref,t.return=i,i.child=t}function Lg(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Mo(d,l)&&t.ref===i.ref)if(Nt=!1,i.pendingProps=l=d,Sf(t,h))t.flags&131072&&(Nt=!0);else return i.lanes=t.lanes,Li(t,i,h)}return pf(t,i,a,l,h)}function Ug(t,i,a){var l=i.pendingProps,h=l.children,d=(i.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(Ko(t,i),l.mode==="hidden"||d){if(i.flags&128){if(l=v!==null?v.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Pg(t,i,l,a)}if(a&536870912)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Iu(i,v!==null?v.cachePool:null),v!==null?zp(i,v):Fh(),Bp(i);else return i.lanes=i.childLanes=536870912,Pg(t,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Iu(i,v.cachePool),zp(i,v),Tr(),i.memoizedState=null):(t!==null&&Iu(i,null),Fh(),Tr());return Ut(t,i,h,a),i.child}function Pg(t,i,a,l){var h=Qh();return h=h===null?null:{parent:wt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Iu(i,null),Fh(),Bp(i),t!==null&&$o(t,i,l,!0),null}function Ko(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=2097664)}}function pf(t,i,a,l,h){return Ds(i),a=Xh(t,i,a,l,void 0,h),l=Zh(),t!==null&&!Nt?(Wh(t,i,h),Li(t,i,h)):(qe&&l&&Bh(i),i.flags|=1,Ut(t,i,a,h),i.child)}function zg(t,i,a,l,h,d){return Ds(i),i.updateQueue=null,a=Gp(i,l,a,h),Fp(t),l=Zh(),t!==null&&!Nt?(Wh(t,i,d),Li(t,i,d)):(qe&&l&&Bh(i),i.flags|=1,Ut(t,i,a,d),i.child)}function Bg(t,i,a,l,h){if(Ds(i),i.stateNode===null){var d=ga,v=a.contextType;typeof v=="object"&&v!==null&&(d=Ht(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=df,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Cf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Ht(v):ga,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ff(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&df.enqueueReplaceState(d,d.state,null),Xo(i,l,d,h),Yo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,b=Cs(a,T);d.props=b;var V=d.context,K=a.contextType;v=ga,typeof K=="object"&&K!==null&&(v=Ht(K));var Z=a.getDerivedStateFromProps;K=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||V!==v)&&Rg(i,d,l,v),br=!1;var q=i.memoizedState;d.state=q,Xo(i,l,d,h),Yo(),V=i.memoizedState,T||q!==V||br?(typeof Z=="function"&&(ff(i,a,Z,l),V=i.memoizedState),(b=br||bg(i,a,b,l,q,V,v))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),d.props=l,d.state=V,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,If(t,i),v=i.memoizedProps,K=Cs(a,v),d.props=K,Z=i.pendingProps,q=d.context,V=a.contextType,b=ga,typeof V=="object"&&V!==null&&(b=Ht(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Z||q!==b)&&Rg(i,d,l,b),br=!1,q=i.memoizedState,d.state=q,Xo(i,l,d,h),Yo();var G=i.memoizedState;v!==Z||q!==G||br||t!==null&&t.dependencies!==null&&zu(t.dependencies)?(typeof T=="function"&&(ff(i,a,T,l),G=i.memoizedState),(K=br||bg(i,a,K,l,q,G,b)||t!==null&&t.dependencies!==null&&zu(t.dependencies))?(V||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,b)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=b,l=K):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ko(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=As(i,t.child,null,h),i.child=As(i,null,a,h)):Ut(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Li(t,i,h),t}function qg(t,i,a,l){return xo(),i.flags|=256,Ut(t,i,a,l),i.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function yf(t){return{baseLanes:t,cachePool:jp()}}function _f(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Mn),t}function Hg(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(qe){if(h?Er(i):Tr(),qe){var T=Lt,b;if(b=T){e:{for(b=T,T=ii;b.nodeType!==8;){if(!T){T=null;break e}if(b=Hn(b.nextSibling),b===null){T=null;break e}}T=b}T!==null?(i.memoizedState={dehydrated:T,treeContext:vs!==null?{id:Mi,overflow:ki}:null,retryLane:536870912},b=Nn(18,null,null,0),b.stateNode=T,b.return=i,i.child=b,Wt=i,Lt=null,b=!0):b=!1}b||Ts(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?i.lanes=16:i.lanes=536870912,null;Vi(i)}return T=l.children,l=l.fallback,h?(Tr(),h=i.mode,T=Ef({mode:"hidden",children:T},h),l=Ns(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=yf(a),h.childLanes=_f(t,v,a),i.memoizedState=gf,l):(Er(i),vf(i,T))}if(b=t.memoizedState,b!==null&&(T=b.dehydrated,T!==null)){if(d)i.flags&256?(Er(i),i.flags&=-257,i=Tf(t,i,a)):i.memoizedState!==null?(Tr(),i.child=t.child,i.flags|=128,i=null):(Tr(),h=l.fallback,T=i.mode,l=Ef({mode:"visible",children:l.children},T),h=Ns(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,As(i,t.child,null,a),l=i.child,l.memoizedState=yf(a),l.childLanes=_f(t,v,a),i.memoizedState=gf,i=h);else if(Er(i),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var V=v.dgst;v=V,l=Error(s(419)),l.stack="",l.digest=v,Lo({value:l,source:null,stack:null}),i=Tf(t,i,a)}else if(Nt||$o(t,i,a,!1),v=(a&t.childLanes)!==0,Nt||v){if(v=Ye,v!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(v.suspendedLanes|a)?0:l,l!==0&&l!==b.retryLane)throw b.retryLane=l,vr(t,l),Jt(v,t,l),kg}T.data==="$?"||Yf(),i=Tf(t,i,a)}else T.data==="$?"?(i.flags|=128,i.child=t.child,i=xA.bind(null,t),T._reactRetry=i,i=null):(t=b.treeContext,Lt=Hn(T.nextSibling),Wt=i,qe=!0,Bn=null,ii=!1,t!==null&&(Rn[Cn++]=Mi,Rn[Cn++]=ki,Rn[Cn++]=vs,Mi=t.id,ki=t.overflow,vs=i),i=vf(i,l.children),i.flags|=4096);return i}return h?(Tr(),h=l.fallback,T=i.mode,b=t.child,V=b.sibling,l=Nr(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&31457280,V!==null?h=Nr(V,h):(h=Ns(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=yf(a):(b=T.cachePool,b!==null?(V=wt._currentValue,b=b.parent!==V?{parent:V,pool:V}:b):b=jp(),T={baseLanes:T.baseLanes|a,cachePool:b}),h.memoizedState=T,h.childLanes=_f(t,v,a),i.memoizedState=gf,l):(Er(i),a=t.child,t=a.sibling,a=Nr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function vf(t,i){return i=Ef({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Ef(t,i){return my(t,i,0,null)}function Tf(t,i,a){return As(i,t.child,null,a),t=vf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function jg(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bf(t.return,i,a)}function Af(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Fg(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ut(t,i,l.children,a),l=St.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,a,i);else if(t.tag===19)jg(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Ge(St,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Cu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Af(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Cu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Af(i,!0,a,null,d);break;case"together":Af(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Li(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Mr|=i.lanes,!(a&i.childLanes))if(t!==null){if($o(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Nr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Nr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Sf(t,i){return t.lanes&i?!0:(t=t.dependencies,!!(t!==null&&zu(t)))}function TA(t,i,a){switch(i.tag){case 3:ir(i,i.stateNode.containerInfo),wr(i,wt,t.memoizedState.cache),xo();break;case 27:case 5:co(i);break;case 4:ir(i,i.stateNode.containerInfo);break;case 10:wr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Er(i),i.flags|=128,null):a&i.child.childLanes?Hg(t,i,a):(Er(i),t=Li(t,i,a),t!==null?t.sibling:null);Er(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||($o(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Fg(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ge(St,St.current),l)break;return null;case 22:case 23:return i.lanes=0,Ug(t,i,a);case 24:wr(i,wt,t.memoizedState.cache)}return Li(t,i,a)}function Gg(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Nt=!0;else{if(!Sf(t,a)&&!(i.flags&128))return Nt=!1,TA(t,i,a);Nt=!!(t.flags&131072)}else Nt=!1,qe&&i.flags&1048576&&Dp(i,Au,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Uf(l)?(t=Cs(l,t),i.tag=1,i=Bg(null,i,l,t,a)):(i.tag=0,i=pf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===B){i.tag=11,i=Vg(null,i,l,t,a);break e}else if(h===Y){i.tag=14,i=xg(null,i,l,t,a);break e}}throw i=w(l)||l,Error(s(306,i,""))}}return i;case 0:return pf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Cs(l,i.pendingProps),Bg(t,i,l,h,a);case 3:e:{if(ir(i,i.stateNode.containerInfo),t===null)throw Error(s(387));var d=i.pendingProps;h=i.memoizedState,l=h.element,If(t,i),Xo(i,d,null,a);var v=i.memoizedState;if(d=v.cache,wr(i,wt,d),d!==h.cache&&Rf(i,[wt],a,!0),Yo(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=qg(t,i,d,a);break e}else if(d!==l){l=bn(Error(s(424)),i),Lo(l),i=qg(t,i,d,a);break e}else for(Lt=Hn(i.stateNode.containerInfo.firstChild),Wt=i,qe=!0,Bn=null,ii=!0,a=Pp(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xo(),d===l){i=Li(t,i,a);break e}Ut(t,i,d,a)}i=i.child}return i;case 26:return Ko(t,i),t===null?(a=Qy(i.type,null,i.pendingProps,null))?i.memoizedState=a:qe||(a=i.type,t=i.pendingProps,l=tc(yn.current).createElement(a),l[It]=i,l[Et]=t,Pt(l,a,t),Ze(l),i.stateNode=l):i.memoizedState=Qy(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return co(i),t===null&&qe&&(l=i.stateNode=Gy(i.type,i.pendingProps,yn.current),Wt=i,ii=!0,Lt=Hn(l.firstChild)),l=i.pendingProps.children,t!==null||qe?Ut(t,i,l,a):i.child=As(i,null,l,a),Ko(t,i),i.child;case 5:return t===null&&qe&&((h=l=Lt)&&(l=ZA(l,i.type,i.pendingProps,ii),l!==null?(i.stateNode=l,Wt=i,Lt=Hn(l.firstChild),ii=!1,h=!0):h=!1),h||Ts(i)),co(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,ud(h,d)?l=null:v!==null&&ud(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Xh(t,i,mA,null,null,a),hl._currentValue=h),Ko(t,i),Ut(t,i,l,a),i.child;case 6:return t===null&&qe&&((t=a=Lt)&&(a=WA(a,i.pendingProps,ii),a!==null?(i.stateNode=a,Wt=i,Lt=null,t=!0):t=!1),t||Ts(i)),null;case 13:return Hg(t,i,a);case 4:return ir(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=As(i,null,l,a):Ut(t,i,l,a),i.child;case 11:return Vg(t,i,i.type,i.pendingProps,a);case 7:return Ut(t,i,i.pendingProps,a),i.child;case 8:return Ut(t,i,i.pendingProps.children,a),i.child;case 12:return Ut(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,wr(i,i.type,l.value),Ut(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ds(i),h=Ht(h),l=l(h),i.flags|=1,Ut(t,i,l,a),i.child;case 14:return xg(t,i,i.type,i.pendingProps,a);case 15:return Lg(t,i,i.type,i.pendingProps,a);case 19:return Fg(t,i,a);case 22:return Ug(t,i,a);case 24:return Ds(i),l=Ht(wt),t===null?(h=Qh(),h===null&&(h=Ye,d=Kh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Cf(i),wr(i,wt,h)):(t.lanes&a&&(If(t,i),Xo(i,null,null,a),Yo()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),wr(i,wt,l)):(l=d.cache,wr(i,wt,l),l!==h.cache&&Rf(i,[wt],a,!0))),Ut(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}var wf=ze(null),Is=null,Ui=null;function wr(t,i,a){Ge(wf,i._currentValue),i._currentValue=a}function Pi(t){t._currentValue=wf.current,nt(wf)}function bf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Rf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var b=0;b<i.length;b++)if(T.context===i[b]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),bf(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),bf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function $o(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if(h.flags&524288)d=!0;else if(h.flags&262144)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;hn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===nr.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(hl):t=[hl])}h=h.return}t!==null&&Rf(i,t,a,l),i.flags|=262144}function zu(t){for(t=t.firstContext;t!==null;){if(!hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){Is=t,Ui=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Kg(Is,t)}function Bu(t,i){return Is===null&&Ds(t),Kg(t,i)}function Kg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ui===null){if(t===null)throw Error(s(308));Ui=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ui=Ui.next=i;return a}var br=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,Je&2){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Eu(t),Cp(t,null,a),i}return vu(t,l,i,a),Eu(t)}function Qo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,ur(t,a)}}function Df(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Of=!1;function Yo(){if(Of){var t=Aa;if(t!==null)throw t}}function Xo(t,i,a,l){Of=!1;var h=t.updateQueue;br=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var b=T,V=b.next;b.next=null,v===null?d=V:v.next=V,v=b;var K=t.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=V:T.next=V,K.lastBaseUpdate=b))}if(d!==null){var Z=h.baseState;v=0,K=V=b=null,T=d;do{var q=T.lane&-536870913,G=q!==T.lane;if(G?(Ve&q)===q:(l&q)===q){q!==0&&q===Ta&&(Of=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ce=t,Ee=T;q=i;var at=a;switch(Ee.tag){case 1:if(ce=Ee.payload,typeof ce=="function"){Z=ce.call(at,Z,q);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=Ee.payload,q=typeof ce=="function"?ce.call(at,Z,q):ce,q==null)break e;Z=C({},Z,q);break e;case 2:br=!0}}q=T.callback,q!==null&&(t.flags|=64,G&&(t.flags|=8192),G=h.callbacks,G===null?h.callbacks=[q]:G.push(q))}else G={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(V=K=G,b=Z):K=K.next=G,v|=q;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;G=T,T=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);K===null&&(b=Z),h.baseState=b,h.firstBaseUpdate=V,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),Mr|=v,t.lanes=v,t.memoizedState=Z}}function $g(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Qg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$g(a[t],i)}function Zo(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Qe(i,i.return,T)}}function Ir(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var b=a;try{T()}catch(V){Qe(h,b,V)}}}l=l.next}while(l!==d)}}catch(V){Qe(i,i.return,V)}}function Yg(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Qg(i,a)}catch(l){Qe(t,t.return,l)}}}function Xg(t,i,a){a.props=Cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Qe(t,i,l)}}function Os(t,i){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?t.refCleanup=a(h):a.current=h}}catch(d){Qe(t,i,d)}}function fn(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Qe(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Qe(t,i,h)}else a.current=null}function Zg(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Qe(t,t.return,h)}}function Wg(t,i,a){try{var l=t.stateNode;KA(l,t.type,a,i),l[Et]=i}catch(h){Qe(t,t.return,h)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ec));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Mf(t,i,a),t=t.sibling;t!==null;)Mf(t,i,a),t=t.sibling}function qu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(qu(t,i,a),t=t.sibling;t!==null;)qu(t,i,a),t=t.sibling}var zi=!1,rt=!1,kf=!1,ey=typeof WeakSet=="function"?WeakSet:Set,Mt=null,ty=!1;function AA(t,i){if(t=t.containerInfo,od=oc,t=_p(t),Vh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,b=-1,V=0,K=0,Z=t,q=null;t:for(;;){for(var G;Z!==a||h!==0&&Z.nodeType!==3||(T=v+h),Z!==d||l!==0&&Z.nodeType!==3||(b=v+l),Z.nodeType===3&&(v+=Z.nodeValue.length),(G=Z.firstChild)!==null;)q=Z,Z=G;for(;;){if(Z===t)break t;if(q===a&&++V===h&&(T=v),q===d&&++K===l&&(b=v),(G=Z.nextSibling)!==null)break;Z=q,q=Z.parentNode}Z=G}a=T===-1||b===-1?null:{start:T,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(ld={focusedElem:t,selectionRange:a},oc=!1,Mt=i;Mt!==null;)if(i=Mt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Mt=t;else for(;Mt!==null;){switch(i=Mt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ce=Cs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ce,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ee){Qe(a,a.return,Ee)}}break;case 3:if(t&1024){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)fd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Mt=t;break}Mt=i.return}return ce=ty,ty=!1,ce}function ny(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),l&4&&Zo(5,a);break;case 1:if(qi(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(T){Qe(a,a.return,T)}else{var h=Cs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Qe(a,a.return,T)}}l&64&&Yg(a),l&512&&Os(a,a.return);break;case 3:if(qi(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Qg(l,t)}catch(T){Qe(a,a.return,T)}}break;case 26:qi(t,a),l&512&&Os(a,a.return);break;case 27:case 5:qi(t,a),i===null&&l&4&&Zg(a),l&512&&Os(a,a.return);break;case 12:qi(t,a);break;case 13:qi(t,a),l&4&&sy(t,a);break;case 22:if(h=a.memoizedState!==null||zi,!h){i=i!==null&&i.memoizedState!==null||rt;var d=zi,v=rt;zi=h,(rt=i)&&!v?Dr(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),zi=d,rt=v}l&512&&(a.memoizedProps.mode==="manual"?Os(a,a.return):fn(a,a.return));break;default:qi(t,a)}}function iy(t){var i=t.alternate;i!==null&&(t.alternate=null,iy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&as(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,dn=!1;function Bi(t,i,a){for(a=a.child;a!==null;)ry(t,i,a),a=a.sibling}function ry(t,i,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(rr,a)}catch{}switch(a.tag){case 26:rt||fn(a,i),Bi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rt||fn(a,i);var l=gt,h=dn;for(gt=a.stateNode,Bi(t,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);as(a),gt=l,dn=h;break;case 5:rt||fn(a,i);case 6:h=gt;var d=dn;if(gt=null,Bi(t,i,a),gt=h,dn=d,gt!==null)if(dn)try{t=gt,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(v){Qe(a,i,v)}else try{gt.removeChild(a.stateNode)}catch(v){Qe(a,i,v)}break;case 18:gt!==null&&(dn?(i=gt,a=a.stateNode,i.nodeType===8?hd(i.parentNode,a):i.nodeType===1&&hd(i,a),pl(i)):hd(gt,a.stateNode));break;case 4:l=gt,h=dn,gt=a.stateNode.containerInfo,dn=!0,Bi(t,i,a),gt=l,dn=h;break;case 0:case 11:case 14:case 15:rt||Ir(2,a,i),rt||Ir(4,a,i),Bi(t,i,a);break;case 1:rt||(fn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Xg(a,i,l)),Bi(t,i,a);break;case 21:Bi(t,i,a);break;case 22:rt||fn(a,i),rt=(l=rt)||a.memoizedState!==null,Bi(t,i,a),rt=l;break;default:Bi(t,i,a)}}function sy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pl(t)}catch(a){Qe(i,i.return,a)}}function SA(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ey),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ey),i;default:throw Error(s(435,t.tag))}}function Vf(t,i){var a=SA(t);i.forEach(function(l){var h=LA.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Dn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:gt=T.stateNode,dn=!1;break e;case 3:gt=T.stateNode.containerInfo,dn=!0;break e;case 4:gt=T.stateNode.containerInfo,dn=!0;break e}T=T.return}if(gt===null)throw Error(s(160));ry(d,v,h),gt=null,dn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)ay(i,t),i=i.sibling}var qn=null;function ay(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Dn(i,t),On(t),l&4&&(Ir(3,t,t.return),Zo(3,t),Ir(5,t,t.return));break;case 1:Dn(i,t),On(t),l&512&&(rt||a===null||fn(a,a.return)),l&64&&zi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=qn;if(Dn(i,t),On(t),l&512&&(rt||a===null||fn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[hr]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Pt(d,l,a),d[It]=t,Ze(d),l=d;break e;case"link":var v=Zy("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),Pt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Zy("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),Pt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[It]=t,Ze(d),l=d}t.stateNode=l}else Wy(h,t.type,t.stateNode);else t.stateNode=Xy(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Wy(h,t.type,t.stateNode):Xy(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Wg(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var b=h.firstChild;b;){var V=b.nextSibling,K=b.nodeName;b[hr]||K==="HEAD"||K==="BODY"||K==="SCRIPT"||K==="STYLE"||K==="LINK"&&b.rel.toLowerCase()==="stylesheet"||h.removeChild(b),b=V}for(var Z=t.type,q=h.attributes;q.length;)h.removeAttributeNode(q[0]);Pt(h,Z,d),h[It]=t,h[Et]=d}catch(ce){Qe(t,t.return,ce)}}case 5:if(Dn(i,t),On(t),l&512&&(rt||a===null||fn(a,a.return)),t.flags&32){h=t.stateNode;try{En(h,"")}catch(ce){Qe(t,t.return,ce)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Wg(t,h,a!==null?a.memoizedProps:h)),l&1024&&(kf=!0);break;case 6:if(Dn(i,t),On(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ce){Qe(t,t.return,ce)}}break;case 3:if(rc=null,h=qn,qn=nc(i.containerInfo),Dn(i,t),qn=h,On(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(i.containerInfo)}catch(ce){Qe(t,t.return,ce)}kf&&(kf=!1,oy(t));break;case 4:l=qn,qn=nc(t.stateNode.containerInfo),Dn(i,t),On(t),qn=l;break;case 12:Dn(i,t),On(t);break;case 13:Dn(i,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jf=tn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vf(t,l)));break;case 22:if(l&512&&(rt||a===null||fn(a,a.return)),b=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,K=zi,Z=rt,zi=K||b,rt=Z||V,Dn(i,t),rt=Z,zi=K,On(t),i=t.stateNode,i._current=t,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=b?i._visibility&-2:i._visibility|1,b&&(i=zi||rt,a===null||V||i||Ra(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,i=t;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){V=a=i;try{if(h=V.stateNode,b)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=V.stateNode,T=V.memoizedProps.style;var G=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ce){Qe(V,V.return,ce)}}}else if(i.tag===6){if(a===null){V=i;try{V.stateNode.nodeValue=b?"":V.memoizedProps}catch(ce){Qe(V,V.return,ce)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Vf(t,a))));break;case 19:Dn(i,t),On(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vf(t,l)));break;case 21:break;default:Dn(i,t),On(t)}}function On(t){var i=t.flags;if(i&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Jg(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=Nf(t);qu(t,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(En(v,""),l.flags&=-33);var T=Nf(t);qu(t,T,v);break;case 3:case 4:var b=l.stateNode.containerInfo,V=Nf(t);Mf(t,V,b);break;default:throw Error(s(161))}}}catch(K){Qe(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function oy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;oy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function qi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ny(t,i.alternate,i),i=i.sibling}function Ra(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ir(4,i,i.return),Ra(i);break;case 1:fn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Xg(i,i.return,a),Ra(i);break;case 26:case 27:case 5:fn(i,i.return),Ra(i);break;case 22:fn(i,i.return),i.memoizedState===null&&Ra(i);break;default:Ra(i)}t=t.sibling}}function Dr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Dr(h,d,a),Zo(4,d);break;case 1:if(Dr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(V){Qe(l,l.return,V)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)$g(b[h],T)}catch(V){Qe(l,l.return,V)}}a&&v&64&&Yg(d),Os(d,d.return);break;case 26:case 27:case 5:Dr(h,d,a),a&&l===null&&v&4&&Zg(d),Os(d,d.return);break;case 12:Dr(h,d,a);break;case 13:Dr(h,d,a),a&&v&4&&sy(h,d);break;case 22:d.memoizedState===null&&Dr(h,d,a),Os(d,d.return);break;default:Dr(h,d,a)}i=i.sibling}}function xf(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qo(a))}function Lf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t))}function Or(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ly(t,i,a,l),i=i.sibling}function ly(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Or(t,i,a,l),h&2048&&Zo(9,i);break;case 3:Or(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&qo(t)));break;case 12:if(h&2048){Or(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){Qe(i,i.return,b)}}else Or(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?Or(t,i,a,l):Wo(t,i):d._visibility&4?Or(t,i,a,l):(d._visibility|=4,Ca(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&xf(i.alternate,i);break;case 24:Or(t,i,a,l),h&2048&&Lf(i.alternate,i);break;default:Or(t,i,a,l)}}function Ca(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,b=l,V=v.flags;switch(v.tag){case 0:case 11:case 15:Ca(d,v,T,b,h),Zo(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&4?Ca(d,v,T,b,h):Wo(d,v):(K._visibility|=4,Ca(d,v,T,b,h)),h&&V&2048&&xf(v.alternate,v);break;case 24:Ca(d,v,T,b,h),h&&V&2048&&Lf(v.alternate,v);break;default:Ca(d,v,T,b,h)}i=i.sibling}}function Wo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:Wo(a,l),h&2048&&xf(l.alternate,l);break;case 24:Wo(a,l),h&2048&&Lf(l.alternate,l);break;default:Wo(a,l)}i=i.sibling}}var Jo=8192;function Ia(t){if(t.subtreeFlags&Jo)for(t=t.child;t!==null;)uy(t),t=t.sibling}function uy(t){switch(t.tag){case 26:Ia(t),t.flags&Jo&&t.memoizedState!==null&&hS(qn,t.memoizedState,t.memoizedProps);break;case 5:Ia(t);break;case 3:case 4:var i=qn;qn=nc(t.stateNode.containerInfo),Ia(t),qn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Jo,Jo=16777216,Ia(t),Jo=i):Ia(t));break;default:Ia(t)}}function cy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function el(t){var i=t.deletions;if(t.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Mt=l,fy(l,t)}cy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hy(t),t=t.sibling}function hy(t){switch(t.tag){case 0:case 11:case 15:el(t),t.flags&2048&&Ir(9,t,t.return);break;case 3:el(t);break;case 12:el(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&4&&(t.return===null||t.return.tag!==13)?(i._visibility&=-5,Hu(t)):el(t);break;default:el(t)}}function Hu(t){var i=t.deletions;if(t.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Mt=l,fy(l,t)}cy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ir(8,i,i.return),Hu(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Hu(i));break;default:Hu(i)}t=t.sibling}}function fy(t,i){for(;Mt!==null;){var a=Mt;switch(a.tag){case 0:case 11:case 15:Ir(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Mt=l;else e:for(a=t;Mt!==null;){l=Mt;var h=l.sibling,d=l.return;if(iy(l),l===a){Mt=null;break e}if(h!==null){h.return=d,Mt=h;break e}Mt=d}}}function wA(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,i,a,l){return new wA(t,i,a,l)}function Uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nr(t,i){var a=t.alternate;return a===null?(a=Nn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function dy(t,i){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ju(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")Uf(t)&&(v=1);else if(typeof t=="string")v=uS(t,a,Qt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return Ns(a.children,h,d,i);case y:v=8,h|=24;break;case E:return t=Nn(12,a,i,h|2),t.elementType=E,t.lanes=d,t;case X:return t=Nn(13,a,i,h),t.elementType=X,t.lanes=d,t;case H:return t=Nn(19,a,i,h),t.elementType=H,t.lanes=d,t;case W:return my(a,h,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:case x:v=10;break e;case D:v=9;break e;case B:v=11;break e;case Y:v=14;break e;case te:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=Nn(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ns(t,i,a,l){return t=Nn(7,t,l,i),t.lanes=a,t}function my(t,i,a,l){t=Nn(22,t,l,i),t.elementType=W,t.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if(!(h._pendingVisibility&2)){var v=vr(d,2);v!==null&&(h._pendingVisibility|=2,Jt(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if(h._pendingVisibility&2){var v=vr(d,2);v!==null&&(h._pendingVisibility&=-3,Jt(v,d,2))}}};return t.stateNode=h,t}function Pf(t,i,a){return t=Nn(6,t,null,i),t.lanes=a,t}function zf(t,i,a){return i=Nn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Hi(t){t.flags|=4}function py(t,i){if(i.type!=="stylesheet"||i.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Jy(i)){if(i=In.current,i!==null&&((Ve&4194176)===Ve?ri!==null:(Ve&62914560)!==Ve&&!(Ve&536870912)||i!==ri))throw Po=jh,Mp;t.flags|=8192}}function Fu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?or():536870912,t.lanes|=i,Oa|=i)}function tl(t,i){if(!qe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function We(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function bA(t,i,a){var l=i.pendingProps;switch(qh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(i),null;case 1:return We(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Pi(wt),Ti(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vo(i)?Hi(i):t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Bn!==null&&($f(Bn),Bn=null))),We(i),null;case 26:return a=i.memoizedState,t===null?(Hi(i),a!==null?(We(i),py(i,a)):(We(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Hi(i),We(i),py(i,a)):(We(i),i.flags&=-16777217):(t.memoizedProps!==l&&Hi(i),We(i),i.flags&=-16777217),null;case 27:Ys(i),a=yn.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return We(i),null}t=Qt.current,Vo(i)?Op(i):(t=Gy(h,l,a),i.stateNode=t,Hi(i))}return We(i),null;case 5:if(Ys(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return We(i),null}if(t=Qt.current,Vo(i))Op(i);else{switch(h=tc(yn.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[It]=i,t[Et]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Pt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Hi(i)}}return We(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Hi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=yn.current,Vo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=Wt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[It]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||zy(t.nodeValue,a)),t||Ts(i)}else t=tc(t).createTextNode(l),t[It]=i,i.stateNode=t}return We(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Vo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[It]=i}else xo(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;We(i),h=!1}else Bn!==null&&($f(Bn),Bn=null),h=!0;if(!h)return i.flags&256?(Vi(i),i):(Vi(i),null)}if(Vi(i),i.flags&128)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Fu(i,i.updateQueue),We(i),null;case 4:return Ti(),t===null&&rd(i.stateNode.containerInfo),We(i),null;case 10:return Pi(i.type),We(i),null;case 19:if(nt(St),h=i.memoizedState,h===null)return We(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)tl(h,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(d=Cu(t),d!==null){for(i.flags|=128,tl(h,!1),t=d.updateQueue,i.updateQueue=t,Fu(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)dy(a,t),a=a.sibling;return Ge(St,St.current&1|2),i.child}t=t.sibling}h.tail!==null&&tn()>Gu&&(i.flags|=128,l=!0,tl(h,!1),i.lanes=4194304)}else{if(!l)if(t=Cu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Fu(i,t),tl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qe)return We(i),null}else 2*tn()-h.renderingStartTime>Gu&&a!==536870912&&(i.flags|=128,l=!0,tl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=tn(),i.sibling=null,t=St.current,Ge(St,l?t&1|2:t&1),i):(We(i),null);case 22:case 23:return Vi(i),Gh(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?a&536870912&&!(i.flags&128)&&(We(i),i.subtreeFlags&6&&(i.flags|=8192)):We(i),a=i.updateQueue,a!==null&&Fu(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&nt(Ss),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Pi(wt),We(i),null;case 25:return null}throw Error(s(156,i.tag))}function RA(t,i){switch(qh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Pi(wt),Ti(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ys(i),null;case 13:if(Vi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));xo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return nt(St),null;case 4:return Ti(),null;case 10:return Pi(i.type),null;case 22:case 23:return Vi(i),Gh(),t!==null&&nt(Ss),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Pi(wt),null;case 25:return null;default:return null}}function gy(t,i){switch(qh(i),i.tag){case 3:Pi(wt),Ti();break;case 26:case 27:case 5:Ys(i);break;case 4:Ti();break;case 13:Vi(i);break;case 19:nt(St);break;case 10:Pi(i.type);break;case 22:case 23:Vi(i),Gh(),t!==null&&nt(Ss);break;case 24:Pi(wt)}}var CA={getCacheForType:function(t){var i=Ht(wt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},IA=typeof WeakMap=="function"?WeakMap:Map,Je=0,Ye=null,Ie=null,Ve=0,Xe=0,mn=null,ji=!1,Da=!1,Bf=!1,Fi=0,st=0,Mr=0,Ms=0,qf=0,Mn=0,Oa=0,nl=null,ai=null,Hf=!1,jf=0,Gu=1/0,Ku=null,kr=null,$u=!1,ks=null,il=0,Ff=0,Gf=null,rl=0,Kf=null;function pn(){if(Je&2&&Ve!==0)return Ve&-Ve;if(S.T!==null){var t=Ta;return t!==0?t:ed()}return Jl()}function yy(){Mn===0&&(Mn=!(Ve&536870912)||qe?go():536870912);var t=In.current;return t!==null&&(t.flags|=32),Mn}function Jt(t,i,a){(t===Ye&&Xe===2||t.cancelPendingCommit!==null)&&(Na(t,0),Gi(t,Ve,Mn,!1)),lt(t,a),(!(Je&2)||t!==Ye)&&(t===Ye&&(!(Je&2)&&(Ms|=a),st===4&&Gi(t,Ve,Mn,!1)),oi(t))}function _y(t,i,a){if(Je&6)throw Error(s(327));var l=!a&&(i&60)===0&&(i&t.expiredLanes)===0||ar(t,i),h=l?NA(t,i):Xf(t,i,!0),d=l;do{if(h===0){Da&&!l&&Gi(t,i,0,!1);break}else if(h===6)Gi(t,i,0,!ji);else{if(a=t.current.alternate,d&&!DA(a)){h=Xf(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=nl;var b=T.current.memoizedState.isDehydrated;if(b&&(Na(T,v).flags|=256),v=Xf(T,v,!1),v!==2){if(Bf&&!b){T.errorRecoveryDisabledLanes|=d,Ms|=d,h=4;break e}d=ai,ai=h,d!==null&&$f(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Na(t,0),Gi(t,i,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194176)===i){Gi(l,i,Mn,!ji);break e}break;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=i,(i&62914560)===i&&(d=jf+300-tn(),10<d)){if(Gi(l,i,Mn,!ji),_n(l,0)!==0)break e;l.timeoutHandle=Hy(vy.bind(null,l,a,ai,Ku,Hf,i,Mn,Ms,Oa,ji,2,-0,0),d);break e}vy(l,a,ai,Ku,Hf,i,Mn,Ms,Oa,ji,0,-0,0)}}break}while(!0);oi(t)}function $f(t){ai===null?ai=t:ai.push.apply(ai,t)}function vy(t,i,a,l,h,d,v,T,b,V,K,Z,q){var G=i.subtreeFlags;if((G&8192||(G&16785408)===16785408)&&(cl={stylesheets:null,count:0,unsuspend:cS},uy(i),i=fS(),i!==null)){t.cancelPendingCommit=i(Ry.bind(null,t,a,l,h,v,T,b,1,Z,q)),Gi(t,d,v,!V);return}Ry(t,a,l,h,v,T,b,K,Z,q)}function DA(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!hn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gi(t,i,a,l){i&=~qf,i&=~Ms,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Yt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&lr(t,a,i)}function Qu(){return Je&6?!0:(sl(0),!1)}function Qf(){if(Ie!==null){if(Xe===0)var t=Ie.return;else t=Ie,Ui=Is=null,Jh(t),va=null,zo=0,t=Ie;for(;t!==null;)gy(t.alternate,t),t=t.return;Ie=null}}function Na(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,QA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qf(),Ye=t,Ie=a=Nr(t.current,null),Ve=i,Xe=0,mn=null,ji=!1,Da=ar(t,i),Bf=!1,Oa=Mn=qf=Ms=Mr=st=0,ai=nl=null,Hf=!1,i&8&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Yt(l),d=1<<h;i|=t[h],l&=~d}return Fi=i,_u(),a}function Ey(t,i){Re=null,S.H=si,i===Uo?(i=xp(),Xe=3):i===Mp?(i=xp(),Xe=4):Xe=i===kg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Ie===null&&(st=1,Pu(t,bn(i,t.current)))}function Ty(){var t=S.H;return S.H=si,t===null?si:t}function Ay(){var t=S.A;return S.A=CA,t}function Yf(){st=4,ji||(Ve&4194176)!==Ve&&In.current!==null||(Da=!0),!(Mr&134217727)&&!(Ms&134217727)||Ye===null||Gi(Ye,Ve,Mn,!1)}function Xf(t,i,a){var l=Je;Je|=2;var h=Ty(),d=Ay();(Ye!==t||Ve!==i)&&(Ku=null,Na(t,i)),i=!1;var v=st;e:do try{if(Xe!==0&&Ie!==null){var T=Ie,b=mn;switch(Xe){case 8:Qf(),v=6;break e;case 3:case 2:case 6:In.current===null&&(i=!0);var V=Xe;if(Xe=0,mn=null,Ma(t,T,b,V),a&&Da){v=0;break e}break;default:V=Xe,Xe=0,mn=null,Ma(t,T,b,V)}}OA(),v=st;break}catch(K){Ey(t,K)}while(!0);return i&&t.shellSuspendCounter++,Ui=Is=null,Je=l,S.H=h,S.A=d,Ie===null&&(Ye=null,Ve=0,_u()),v}function OA(){for(;Ie!==null;)Sy(Ie)}function NA(t,i){var a=Je;Je|=2;var l=Ty(),h=Ay();Ye!==t||Ve!==i?(Ku=null,Gu=tn()+500,Na(t,i)):Da=ar(t,i);e:do try{if(Xe!==0&&Ie!==null){i=Ie;var d=mn;t:switch(Xe){case 1:Xe=0,mn=null,Ma(t,i,d,1);break;case 2:if(kp(d)){Xe=0,mn=null,wy(i);break}i=function(){Xe===2&&Ye===t&&(Xe=7),oi(t)},d.then(i,i);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:kp(d)?(Xe=0,mn=null,wy(i)):(Xe=0,mn=null,Ma(t,i,d,7));break;case 5:var v=null;switch(Ie.tag){case 26:v=Ie.memoizedState;case 5:case 27:var T=Ie;if(!v||Jy(v)){Xe=0,mn=null;var b=T.sibling;if(b!==null)Ie=b;else{var V=T.return;V!==null?(Ie=V,Yu(V)):Ie=null}break t}}Xe=0,mn=null,Ma(t,i,d,5);break;case 6:Xe=0,mn=null,Ma(t,i,d,6);break;case 8:Qf(),st=6;break e;default:throw Error(s(462))}}MA();break}catch(K){Ey(t,K)}while(!0);return Ui=Is=null,S.H=l,S.A=h,Je=a,Ie!==null?0:(Ye=null,Ve=0,_u(),st)}function MA(){for(;Ie!==null&&!Sh();)Sy(Ie)}function Sy(t){var i=Gg(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,i===null?Yu(t):Ie=i}function wy(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=zg(a,i,i.pendingProps,i.type,void 0,Ve);break;case 11:i=zg(a,i,i.pendingProps,i.type.render,i.ref,Ve);break;case 5:Jh(i);default:gy(a,i),i=Ie=dy(i,Fi),i=Gg(a,i,Fi)}t.memoizedProps=t.pendingProps,i===null?Yu(t):Ie=i}function Ma(t,i,a,l){Ui=Is=null,Jh(i),va=null,zo=0;var h=i.return;try{if(EA(t,h,i,a,Ve)){st=1,Pu(t,bn(a,t.current)),Ie=null;return}}catch(d){if(h!==null)throw Ie=h,d;st=1,Pu(t,bn(a,t.current)),Ie=null;return}i.flags&32768?(qe||l===1?t=!0:Da||Ve&536870912?t=!1:(ji=t=!0,(l===2||l===3||l===6)&&(l=In.current,l!==null&&l.tag===13&&(l.flags|=16384))),by(i,t)):Yu(i)}function Yu(t){var i=t;do{if(i.flags&32768){by(i,ji);return}t=i.return;var a=bA(i.alternate,i,Fi);if(a!==null){Ie=a;return}if(i=i.sibling,i!==null){Ie=i;return}Ie=i=t}while(i!==null);st===0&&(st=5)}function by(t,i){do{var a=RA(t.alternate,t);if(a!==null){a.flags&=32767,Ie=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ie=t;return}Ie=t=a}while(t!==null);st=6,Ie=null}function Ry(t,i,a,l,h,d,v,T,b,V){var K=S.T,Z=se.p;try{se.p=2,S.T=null,kA(t,i,a,l,Z,h,d,v,T,b,V)}finally{S.T=K,se.p=Z}}function kA(t,i,a,l,h,d,v,T){do ka();while(ks!==null);if(Je&6)throw Error(s(327));var b=t.finishedWork;if(l=t.finishedLanes,b===null)return null;if(t.finishedWork=null,t.finishedLanes=0,b===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=b.lanes|b.childLanes;if(V|=Ph,Zl(t,l,V,d,v,T),t===Ye&&(Ie=Ye=null,Ve=0),!(b.subtreeFlags&10256)&&!(b.flags&10256)||$u||($u=!0,Ff=V,Gf=a,UA(Ai,function(){return ka(),null})),a=(b.flags&15990)!==0,b.subtreeFlags&15990||a?(a=S.T,S.T=null,d=se.p,se.p=2,v=Je,Je|=4,AA(t,b),ay(b,t),iA(ld,t.containerInfo),oc=!!od,ld=od=null,t.current=b,ny(t,b.alternate,b),ho(),Je=v,se.p=d,S.T=a):t.current=b,$u?($u=!1,ks=t,il=l):Cy(t,V),V=t.pendingLanes,V===0&&(kr=null),mo(b.stateNode),oi(t),i!==null)for(h=t.onRecoverableError,b=0;b<i.length;b++)V=i[b],h(V.value,{componentStack:V.stack});return il&3&&ka(),V=t.pendingLanes,l&4194218&&V&42?t===Kf?rl++:(rl=0,Kf=t):rl=0,sl(0),null}function Cy(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,qo(i)))}function ka(){if(ks!==null){var t=ks,i=Ff;Ff=0;var a=Wl(il),l=S.T,h=se.p;try{if(se.p=32>a?32:a,S.T=null,ks===null)var d=!1;else{a=Gf,Gf=null;var v=ks,T=il;if(ks=null,il=0,Je&6)throw Error(s(331));var b=Je;if(Je|=4,hy(v.current),ly(v,v.current,T,a),Je=b,sl(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(rr,v)}catch{}d=!0}return d}finally{se.p=h,S.T=l,Cy(t,i)}}return!1}function Iy(t,i,a){i=bn(a,i),i=mf(t.stateNode,i,2),t=Cr(t,i,2),t!==null&&(lt(t,2),oi(t))}function Qe(t,i,a){if(t.tag===3)Iy(t,t,a);else for(;i!==null;){if(i.tag===3){Iy(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(kr===null||!kr.has(l))){t=bn(a,t),a=Ng(2),l=Cr(i,a,2),l!==null&&(Mg(a,l,i,t),lt(l,2),oi(l));break}}i=i.return}}function Zf(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new IA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Bf=!0,h.add(a),t=VA.bind(null,t,i,a),i.then(t,t))}function VA(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ve&a)===a&&(st===4||st===3&&(Ve&62914560)===Ve&&300>tn()-jf?!(Je&2)&&Na(t,0):qf|=a,Oa===Ve&&(Oa=0)),oi(t)}function Dy(t,i){i===0&&(i=or()),t=vr(t,i),t!==null&&(lt(t,i),oi(t))}function xA(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Dy(t,a)}function LA(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Dy(t,a)}function UA(t,i){return is(t,i)}var Xu=null,Va=null,Wf=!1,Zu=!1,Jf=!1,Vs=0;function oi(t){t!==Va&&t.next===null&&(Va===null?Xu=Va=t:Va=Va.next=t),Zu=!0,Wf||(Wf=!0,zA(PA))}function sl(t,i){if(!Jf&&Zu){Jf=!0;do for(var a=!1,l=Xu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Yt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,My(l,d))}else d=Ve,d=_n(l,l===Ye?d:0),!(d&3)||ar(l,d)||(a=!0,My(l,d));l=l.next}while(a);Jf=!1}}function PA(){Zu=Wf=!1;var t=0;Vs!==0&&($A()&&(t=Vs),Vs=0);for(var i=tn(),a=null,l=Xu;l!==null;){var h=l.next,d=Oy(l,i);d===0?(l.next=null,a===null?Xu=h:a.next=h,h===null&&(Va=a)):(a=l,(t!==0||d&3)&&(Zu=!0)),l=h}sl(t)}function Oy(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Yt(d),T=1<<v,b=h[v];b===-1?(!(T&a)||T&l)&&(h[v]=Ws(T,i)):b<=i&&(t.expiredLanes|=T),d&=~T}if(i=Ye,a=Ve,a=_n(t,t===i?a:0),l=t.callbackNode,a===0||t===i&&Xe===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Zs(l),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||ar(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Zs(l),Wl(a)){case 2:case 8:a=Ct;break;case 32:a=Ai;break;case 268435456:a=fo;break;default:a=Ai}return l=Ny.bind(null,t),a=is(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Zs(l),t.callbackPriority=2,t.callbackNode=null,2}function Ny(t,i){var a=t.callbackNode;if(ka()&&t.callbackNode!==a)return null;var l=Ve;return l=_n(t,t===Ye?l:0),l===0?null:(_y(t,l,i),Oy(t,tn()),t.callbackNode!=null&&t.callbackNode===a?Ny.bind(null,t):null)}function My(t,i){if(ka())return null;_y(t,i,!0)}function zA(t){YA(function(){Je&6?is(vt,t):t()})}function ed(){return Vs===0&&(Vs=go()),Vs}function ky(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xn(""+t)}function Vy(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function BA(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=ky((h[Et]||null).action),v=l.submitter;v&&(i=(i=v[Et]||null)?ky(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new sa("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Vs!==0){var b=v?Vy(h,v):new FormData(h);uf(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(T.preventDefault(),b=v?Vy(h,v):new FormData(h),uf(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var td=0;td<Rp.length;td++){var nd=Rp[td],qA=nd.toLowerCase(),HA=nd[0].toUpperCase()+nd.slice(1);zn(qA,"on"+HA)}zn(Tp,"onAnimationEnd"),zn(Ap,"onAnimationIteration"),zn(Sp,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(sA,"onTransitionRun"),zn(aA,"onTransitionStart"),zn(oA,"onTransitionCancel"),zn(wp,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function xy(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],b=T.instance,V=T.currentTarget;if(T=T.listener,b!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=V;try{d(h)}catch(K){Uu(K)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(T=l[v],b=T.instance,V=T.currentTarget,T=T.listener,b!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=V;try{d(h)}catch(K){Uu(K)}h.currentTarget=null,d=b}}}}function Oe(t,i){var a=i[ss];a===void 0&&(a=i[ss]=new Set);var l=t+"__bubble";a.has(l)||(Ly(i,t,2,!1),a.add(l))}function id(t,i,a){var l=0;i&&(l|=4),Ly(a,t,l,i)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[Wu]){t[Wu]=!0,_o.forEach(function(a){a!=="selectionchange"&&(jA.has(a)||id(a,!1,t),id(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Wu]||(i[Wu]=!0,id("selectionchange",!1,i))}}function Ly(t,i,a,l){switch(s_(i)){case 2:var h=pS;break;case 8:h=gS;break;default:h=yd}a=h.bind(null,i,a,t),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function sd(t,i,a,l,h){var d=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&(b=v.stateNode.containerInfo,b===h||b.nodeType===8&&b.parentNode===h))return;v=v.return}for(;T!==null;){if(v=Pn(T),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue e}T=T.parentNode}}l=l.return}iu(function(){var V=d,K=ra(a),Z=[];e:{var q=bp.get(t);if(q!==void 0){var G=sa,ce=t;switch(t){case"keypress":if(Wn(a)===0)break e;case"keydown":case"keyup":G=ha;break;case"focusin":ce="focus",G=la;break;case"focusout":ce="blur",G=la;break;case"beforeblur":case"afterblur":G=la;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=hu;break;case Tp:case Ap:case Sp:G=ua;break;case wp:G=du;break;case"scroll":case"scrollend":G=ru;break;case"wheel":G=fa;break;case"copy":case"cut":case"paste":G=ca;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Oo;break;case"toggle":case"beforetoggle":G=pu}var Ee=(i&4)!==0,at=!Ee&&(t==="scroll"||t==="scrollend"),L=Ee?q!==null?q+"Capture":null:q;Ee=[];for(var M=V,z;M!==null;){var $=M;if(z=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||z===null||L===null||($=cs(M,L),$!=null&&Ee.push(ol(M,$,z))),at)break;M=M.return}0<Ee.length&&(q=new G(q,ce,null,a,K),Z.push({event:q,listeners:Ee}))}}if(!(i&7)){e:{if(q=t==="mouseover"||t==="pointerover",G=t==="mouseout"||t==="pointerout",q&&a!==Tn&&(ce=a.relatedTarget||a.fromElement)&&(Pn(ce)||ce[Si]))break e;if((G||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,G?(ce=a.relatedTarget||a.toElement,G=V,ce=ce?Pn(ce):null,ce!==null&&(at=de(ce),Ee=ce.tag,ce!==at||Ee!==5&&Ee!==27&&Ee!==6)&&(ce=null)):(G=null,ce=V),G!==ce)){if(Ee=Sn,$="onMouseLeave",L="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(Ee=Oo,$="onPointerLeave",L="onPointerEnter",M="pointer"),at=G==null?q:fr(G),z=ce==null?q:fr(ce),q=new Ee($,M+"leave",G,a,K),q.target=at,q.relatedTarget=z,$=null,Pn(K)===V&&(Ee=new Ee(L,M+"enter",ce,a,K),Ee.target=z,Ee.relatedTarget=at,$=Ee),at=$,G&&ce)t:{for(Ee=G,L=ce,M=0,z=Ee;z;z=xa(z))M++;for(z=0,$=L;$;$=xa($))z++;for(;0<M-z;)Ee=xa(Ee),M--;for(;0<z-M;)L=xa(L),z--;for(;M--;){if(Ee===L||L!==null&&Ee===L.alternate)break t;Ee=xa(Ee),L=xa(L)}Ee=null}else Ee=null;G!==null&&Uy(Z,q,G,Ee,!1),ce!==null&&at!==null&&Uy(Z,at,ce,Ee,!0)}}e:{if(q=V?fr(V):window,G=q.nodeName&&q.nodeName.toLowerCase(),G==="select"||G==="input"&&q.type==="file")var le=cp;else if(At(q))if(hp)le=tA;else{le=J0;var Ce=W0}else G=q.nodeName,!G||G.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?V&&So(V.elementType)&&(le=cp):le=eA;if(le&&(le=le(t,V))){Ni(Z,le,a,K);break e}Ce&&Ce(t,q,V),t==="focusout"&&V&&q.type==="number"&&V.memoizedProps.value!=null&&ia(q,"number",q.value)}switch(Ce=V?fr(V):window,t){case"focusin":(At(Ce)||Ce.contentEditable==="true")&&(da=Ce,xh=V,ko=null);break;case"focusout":ko=xh=da=null;break;case"mousedown":Lh=!0;break;case"contextmenu":case"mouseup":case"dragend":Lh=!1,vp(Z,a,K);break;case"selectionchange":if(rA)break;case"keydown":case"keyup":vp(Z,a,K)}var fe;if(ti)e:{switch(t){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Me?j(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(_&&a.locale!=="ko"&&(Me||me!=="onCompositionStart"?me==="onCompositionEnd"&&Me&&(fe=bo()):(Zn=K,_r="value"in Zn?Zn.value:Zn.textContent,Me=!0)),Ce=Ju(V,me),0<Ce.length&&(me=new Io(me,t,null,a,K),Z.push({event:me,listeners:Ce}),fe?me.data=fe:(fe=ee(a),fe!==null&&(me.data=fe)))),(fe=g?Tt(t,a):ke(t,a))&&(me=Ju(V,"onBeforeInput"),0<me.length&&(Ce=new Io("onBeforeInput","beforeinput",null,a,K),Z.push({event:Ce,listeners:me}),Ce.data=fe)),BA(Z,t,V,a,K)}xy(Z,i)})}function ol(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Ju(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=cs(t,a),h!=null&&l.unshift(ol(t,h,d)),h=cs(t,i),h!=null&&l.push(ol(t,h,d))),t=t.return}return l}function xa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Uy(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,b=T.alternate,V=T.stateNode;if(T=T.tag,b!==null&&b===l)break;T!==5&&T!==26&&T!==27||V===null||(b=V,h?(V=cs(a,d),V!=null&&v.unshift(ol(a,V,b))):h||(V=cs(a,d),V!=null&&v.push(ol(a,V,b)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var FA=/\r\n?/g,GA=/\u0000|\uFFFD/g;function Py(t){return(typeof t=="string"?t:""+t).replace(FA,`
`).replace(GA,"")}function zy(t,i){return i=Py(i),Py(t)===i}function ec(){}function $e(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||En(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&En(t,""+l);break;case"className":pr(t,"class",l);break;case"tabIndex":pr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":pr(t,a,l);break;case"style":nu(t,l,d);break;case"data":if(i!=="object"){pr(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Xn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$e(t,i,"name",h.name,h,null),$e(t,i,"formEncType",h.formEncType,h,null),$e(t,i,"formMethod",h.formMethod,h,null),$e(t,i,"formTarget",h.formTarget,h,null)):($e(t,i,"encType",h.encType,h,null),$e(t,i,"method",h.method,h,null),$e(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Xn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ec);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Xn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Oe("beforetoggle",t),Oe("toggle",t),mr(t,"popover",l);break;case"xlinkActuate":vn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":vn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":vn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":vn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":vn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":vn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":vn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":vn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":vn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ih.get(a)||a,mr(t,a,l))}}function ad(t,i,a,l,h,d){switch(a){case"style":nu(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?En(t,l):(typeof l=="number"||typeof l=="bigint")&&En(t,""+l);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ta.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Et]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):mr(t,a,l)}}}function Pt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",t),Oe("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(t,i,d,v,a,null)}}h&&$e(t,i,"srcSet",a.srcSet,a,null),l&&$e(t,i,"src",a.src,a,null);return;case"input":Oe("invalid",t);var T=d=v=h=null,b=null,V=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":v=K;break;case"checked":b=K;break;case"defaultChecked":V=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:$e(t,i,l,K,a,null)}}ls(t,d,T,b,V,v,h,!1),os(t);return;case"select":Oe("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:$e(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Be(t,!!l,i,!1):a!=null&&Be(t,!!l,a,!0);return;case"textarea":Oe("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:$e(t,i,v,T,a,null)}yr(t,l,h,d),os(t);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$e(t,i,b,l,a,null)}return;case"dialog":Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":Oe("load",t);break;case"video":case"audio":for(l=0;l<al.length;l++)Oe(al[l],t);break;case"image":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"embed":case"source":case"link":Oe("error",t),Oe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(l=a[V],l!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(t,i,V,l,a,null)}return;default:if(So(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&ad(t,i,K,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&$e(t,i,T,l,a,null))}function KA(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,b=null,V=null,K=null;for(G in a){var Z=a[G];if(a.hasOwnProperty(G)&&Z!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":b=Z;default:l.hasOwnProperty(G)||$e(t,i,G,null,l,Z)}}for(var q in l){var G=l[q];if(Z=a[q],l.hasOwnProperty(q)&&(G!=null||Z!=null))switch(q){case"type":d=G;break;case"name":h=G;break;case"checked":V=G;break;case"defaultChecked":K=G;break;case"value":v=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:G!==Z&&$e(t,i,q,G,l,Z)}}gr(t,v,T,b,V,K,d,h);return;case"select":G=v=T=q=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":G=b;default:l.hasOwnProperty(d)||$e(t,i,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":q=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==b&&$e(t,i,h,d,l,b)}i=T,a=v,l=G,q!=null?Be(t,!!a,q,!1):!!l!=!!a&&(i!=null?Be(t,!!a,i,!0):Be(t,!!a,a?[]:"",!1));return;case"textarea":G=q=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$e(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":q=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$e(t,i,v,h,l,d)}us(t,q,G);return;case"option":for(var ce in a)if(q=a[ce],a.hasOwnProperty(ce)&&q!=null&&!l.hasOwnProperty(ce))switch(ce){case"selected":t.selected=!1;break;default:$e(t,i,ce,null,l,q)}for(b in l)if(q=l[b],G=a[b],l.hasOwnProperty(b)&&q!==G&&(q!=null||G!=null))switch(b){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:$e(t,i,b,q,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)q=a[Ee],a.hasOwnProperty(Ee)&&q!=null&&!l.hasOwnProperty(Ee)&&$e(t,i,Ee,null,l,q);for(V in l)if(q=l[V],G=a[V],l.hasOwnProperty(V)&&q!==G&&(q!=null||G!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:$e(t,i,V,q,l,G)}return;default:if(So(i)){for(var at in a)q=a[at],a.hasOwnProperty(at)&&q!==void 0&&!l.hasOwnProperty(at)&&ad(t,i,at,void 0,l,q);for(K in l)q=l[K],G=a[K],!l.hasOwnProperty(K)||q===G||q===void 0&&G===void 0||ad(t,i,K,q,l,G);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&$e(t,i,L,null,l,q);for(Z in l)q=l[Z],G=a[Z],!l.hasOwnProperty(Z)||q===G||q==null&&G==null||$e(t,i,Z,q,l,G)}var od=null,ld=null;function tc(t){return t.nodeType===9?t:t.ownerDocument}function By(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qy(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function ud(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cd=null;function $A(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Hy=typeof setTimeout=="function"?setTimeout:void 0,QA=typeof clearTimeout=="function"?clearTimeout:void 0,jy=typeof Promise=="function"?Promise:void 0,YA=typeof queueMicrotask=="function"?queueMicrotask:typeof jy<"u"?function(t){return jy.resolve(null).then(t).catch(XA)}:Hy;function XA(t){setTimeout(function(){throw t})}function hd(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),pl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);pl(i)}function fd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fd(a),as(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ZA(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[hr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Hn(t.nextSibling),t===null)break}return null}function WA(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Hn(t.nextSibling),t===null))return null;return t}function Hn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}function Fy(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function Gy(t,i,a){switch(i=tc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var kn=new Map,Ky=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Ki=se.d;se.d={f:JA,r:eS,D:tS,C:nS,L:iS,m:rS,X:aS,S:sS,M:oS};function JA(){var t=Ki.f(),i=Qu();return t||i}function eS(t){var i=wi(t);i!==null&&i.tag===5&&i.type==="form"?vg(i):Ki.r(t)}var La=typeof document>"u"?null:document;function $y(t,i,a){var l=La;if(l&&typeof i=="string"&&i){var h=it(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Ky.has(h)||(Ky.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Pt(i,"link",t),Ze(i),l.head.appendChild(i)))}}function tS(t){Ki.D(t),$y("dns-prefetch",t,null)}function nS(t,i){Ki.C(t,i),$y("preconnect",t,i)}function iS(t,i,a){Ki.L(t,i,a);var l=La;if(l&&t&&i){var h='link[rel="preload"][as="'+it(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+it(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+it(a.imageSizes)+'"]')):h+='[href="'+it(t)+'"]';var d=h;switch(i){case"style":d=Ua(t);break;case"script":d=Pa(t)}kn.has(d)||(t=C({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),kn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(ll(d))||i==="script"&&l.querySelector(ul(d))||(i=l.createElement("link"),Pt(i,"link",t),Ze(i),l.head.appendChild(i)))}}function rS(t,i){Ki.m(t,i);var a=La;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+it(l)+'"][href="'+it(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Pa(t)}if(!kn.has(d)&&(t=C({rel:"modulepreload",href:t},i),kn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ul(d)))return}l=a.createElement("link"),Pt(l,"link",t),Ze(l),a.head.appendChild(l)}}}function sS(t,i,a){Ki.S(t,i,a);var l=La;if(l&&t){var h=dr(l).hoistableStyles,d=Ua(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(ll(d)))T.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":i},a),(a=kn.get(d))&&dd(t,a);var b=v=l.createElement("link");Ze(b),Pt(b,"link",t),b._p=new Promise(function(V,K){b.onload=V,b.onerror=K}),b.addEventListener("load",function(){T.loading|=1}),b.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ic(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function aS(t,i){Ki.X(t,i);var a=La;if(a&&t){var l=dr(a).hoistableScripts,h=Pa(t),d=l.get(h);d||(d=a.querySelector(ul(h)),d||(t=C({src:t,async:!0},i),(i=kn.get(h))&&md(t,i),d=a.createElement("script"),Ze(d),Pt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function oS(t,i){Ki.M(t,i);var a=La;if(a&&t){var l=dr(a).hoistableScripts,h=Pa(t),d=l.get(h);d||(d=a.querySelector(ul(h)),d||(t=C({src:t,async:!0,type:"module"},i),(i=kn.get(h))&&md(t,i),d=a.createElement("script"),Ze(d),Pt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Qy(t,i,a,l){var h=(h=yn.current)?nc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ua(a.href),a=dr(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ua(a.href);var d=dr(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(ll(t)))&&!d._p&&(v.instance=d,v.state.loading=5),kn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(t,a),d||lS(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Pa(a),a=dr(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ua(t){return'href="'+it(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function Yy(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function lS(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Pt(i,"link",a),Ze(i),t.head.appendChild(i))}function Pa(t){return'[src="'+it(t)+'"]'}function ul(t){return"script[async]"+t}function Xy(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+it(a.href)+'"]');if(l)return i.instance=l,Ze(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ze(l),Pt(l,"style",h),ic(l,a.precedence,t),i.instance=l;case"stylesheet":h=Ua(a.href);var d=t.querySelector(ll(h));if(d)return i.state.loading|=4,i.instance=d,Ze(d),d;l=Yy(a),(h=kn.get(h))&&dd(l,h),d=(t.ownerDocument||t).createElement("link"),Ze(d);var v=d;return v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),Pt(d,"link",l),i.state.loading|=4,ic(d,a.precedence,t),i.instance=d;case"script":return d=Pa(a.src),(h=t.querySelector(ul(d)))?(i.instance=h,Ze(h),h):(l=a,(h=kn.get(d))&&(l=C({},a),md(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Ze(h),Pt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&!(i.state.loading&4)&&(l=i.instance,i.state.loading|=4,ic(l,a.precedence,t));return i.instance}function ic(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function dd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function md(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var rc=null;function Zy(t,i,a){if(rc===null){var l=new Map,h=rc=new Map;h.set(a,l)}else h=rc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[hr]||d[It]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function Wy(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function uS(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Jy(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var cl=null;function cS(){}function hS(t,i,a){if(cl===null)throw Error(s(475));var l=cl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var h=Ua(a.href),d=t.querySelector(ll(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=sc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,Ze(d);return}d=t.ownerDocument||t,a=Yy(a),(h=kn.get(h))&&dd(a,h),d=d.createElement("link"),Ze(d);var v=d;v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),Pt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&!(i.state.loading&3)&&(l.count++,i=sc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function fS(){if(cl===null)throw Error(s(475));var t=cl;return t.stylesheets&&t.count===0&&pd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&pd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function sc(){if(this.count--,this.count===0){if(this.stylesheets)pd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ac=null;function pd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,i.forEach(dS,t),ac=null,sc.call(t))}function dS(t,i){if(!(i.state.loading&4)){var a=ac.get(t);if(a)var l=a.get(null);else{a=new Map,ac.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=sc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var hl={$$typeof:x,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function mS(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.hiddenUpdates=Js(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function e_(t,i,a,l,h,d,v,T,b,V,K,Z){return t=new mS(t,i,a,v,T,b,V,Z),i=1,d===!0&&(i|=24),d=Nn(3,null,null,i),t.current=d,d.stateNode=t,i=Kh(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Cf(d),t}function t_(t){return t?(t=ga,t):ga}function n_(t,i,a,l,h,d){h=t_(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Cr(t,l,i),a!==null&&(Jt(a,t,i),Qo(a,t,i))}function i_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function gd(t,i){i_(t,i),(t=t.alternate)&&i_(t,i)}function r_(t){if(t.tag===13){var i=vr(t,67108864);i!==null&&Jt(i,t,67108864),gd(t,67108864)}}var oc=!0;function pS(t,i,a,l){var h=S.T;S.T=null;var d=se.p;try{se.p=2,yd(t,i,a,l)}finally{se.p=d,S.T=h}}function gS(t,i,a,l){var h=S.T;S.T=null;var d=se.p;try{se.p=8,yd(t,i,a,l)}finally{se.p=d,S.T=h}}function yd(t,i,a,l){if(oc){var h=_d(l);if(h===null)sd(t,i,l,lc,a),a_(t,l);else if(_S(h,t,i,a,l))l.stopPropagation();else if(a_(t,l),i&4&&-1<yS.indexOf(t)){for(;h!==null;){var d=wi(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Un(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var b=1<<31-Yt(v);T.entanglements[1]|=b,v&=~b}oi(d),!(Je&6)&&(Gu=tn()+500,sl(0))}}break;case 13:T=vr(d,2),T!==null&&Jt(T,d,2),Qu(),gd(d,2)}if(d=_d(l),d===null&&sd(t,i,l,lc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else sd(t,i,l,null,a)}}function _d(t){return t=ra(t),vd(t)}var lc=null;function vd(t){if(lc=null,t=Pn(t),t!==null){var i=de(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=je(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return lc=t,null}function s_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($l()){case vt:return 2;case Ct:return 8;case Ai:case Ql:return 32;case fo:return 268435456;default:return 32}default:return 32}}var Ed=!1,Vr=null,xr=null,Lr=null,fl=new Map,dl=new Map,Ur=[],yS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(t,i){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":fl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(i.pointerId)}}function ml(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=wi(i),i!==null&&r_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function _S(t,i,a,l,h){switch(i){case"focusin":return Vr=ml(Vr,t,i,a,l,h),!0;case"dragenter":return xr=ml(xr,t,i,a,l,h),!0;case"mouseover":return Lr=ml(Lr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return fl.set(d,ml(fl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,dl.set(d,ml(dl.get(d)||null,t,i,a,l,h)),!0}return!1}function o_(t){var i=Pn(t.target);if(i!==null){var a=de(i);if(a!==null){if(i=a.tag,i===13){if(i=je(a),i!==null){t.blockedOn=i,cr(t.priority,function(){if(a.tag===13){var l=pn(),h=vr(a,l);h!==null&&Jt(h,a,l),gd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=_d(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Tn=l,a.target.dispatchEvent(l),Tn=null}else return i=wi(a),i!==null&&r_(i),t.blockedOn=a,!1;i.shift()}return!0}function l_(t,i,a){uc(t)&&a.delete(i)}function vS(){Ed=!1,Vr!==null&&uc(Vr)&&(Vr=null),xr!==null&&uc(xr)&&(xr=null),Lr!==null&&uc(Lr)&&(Lr=null),fl.forEach(l_),dl.forEach(l_)}function cc(t,i){t.blockedOn===i&&(t.blockedOn=null,Ed||(Ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vS)))}var hc=null;function u_(t){hc!==t&&(hc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(vd(l||a)===null)continue;break}var d=wi(a);d!==null&&(t.splice(i,3),i-=3,uf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function pl(t){function i(b){return cc(b,t)}Vr!==null&&cc(Vr,t),xr!==null&&cc(xr,t),Lr!==null&&cc(Lr,t),fl.forEach(i),dl.forEach(i);for(var a=0;a<Ur.length;a++){var l=Ur[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ur.length&&(a=Ur[0],a.blockedOn===null);)o_(a),a.blockedOn===null&&Ur.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[Et]||null;if(typeof d=="function")v||u_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[Et]||null)T=v.formAction;else if(vd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),u_(a)}}}function Td(t){this._internalRoot=t}fc.prototype.render=Td.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=pn();n_(a,l,t,i,null,null)},fc.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;t.tag===0&&ka(),n_(t.current,2,null,t,null,null),Qu(),i[Si]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Jl();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ur.length&&i!==0&&i<Ur[a].priority;a++);Ur.splice(a,0,t),a===0&&o_(t)}};var c_=e.version;if(c_!=="19.0.0")throw Error(s(527,c_,"19.0.0"));se.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=J(i),t=t!==null?he(t):null,t=t===null?null:t.stateNode,t};var ES={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Pn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{rr=dc.inject(ES),qt=dc}catch{}}return yl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Cg,d=Ig,v=Dg,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=e_(t,1,!1,null,null,a,l,h,d,v,T,null),t[Si]=i.current,rd(t.nodeType===8?t.parentNode:t),new Td(i)},yl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Cg,v=Ig,T=Dg,b=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),i=e_(t,1,!0,i,a??null,l,h,d,v,T,b,V),i.context=t_(null),a=i.current,l=pn(),h=Rr(l),h.callback=null,Cr(a,h,l),i.current.lanes=l,lt(i,l),oi(i),t[Si]=i.current,rd(t),new fc(i)},yl.version="19.0.0",yl}var E_;function NS(){if(E_)return wd.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=OS(),wd.exports}var MS=NS(),_l={},T_;function kS(){if(T_)return _l;T_=1,Object.defineProperty(_l,"__esModule",{value:!0}),_l.parse=f,_l.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const D=function(){};return D.prototype=Object.create(null),D})();function f(D,x){const B=new u,X=D.length;if(X<2)return B;const H=(x==null?void 0:x.decode)||E;let Y=0;do{const te=D.indexOf("=",Y);if(te===-1)break;const W=D.indexOf(";",Y),ue=W===-1?X:W;if(te>ue){Y=D.lastIndexOf(";",te-1)+1;continue}const oe=m(D,Y,te),_e=p(D,te,oe),N=D.slice(oe,_e);if(B[N]===void 0){let w=m(D,te+1,ue),S=p(D,ue,w);const C=H(D.slice(w,S));B[N]=C}Y=ue+1}while(Y<X);return B}function m(D,x,B){do{const X=D.charCodeAt(x);if(X!==32&&X!==9)return x}while(++x<B);return B}function p(D,x,B){for(;x>B;){const X=D.charCodeAt(--x);if(X!==32&&X!==9)return x+1}return B}function y(D,x,B){const X=(B==null?void 0:B.encode)||encodeURIComponent;if(!r.test(D))throw new TypeError(`argument name is invalid: ${D}`);const H=X(x);if(!e.test(H))throw new TypeError(`argument val is invalid: ${x}`);let Y=D+"="+H;if(!B)return Y;if(B.maxAge!==void 0){if(!Number.isInteger(B.maxAge))throw new TypeError(`option maxAge is invalid: ${B.maxAge}`);Y+="; Max-Age="+B.maxAge}if(B.domain){if(!n.test(B.domain))throw new TypeError(`option domain is invalid: ${B.domain}`);Y+="; Domain="+B.domain}if(B.path){if(!s.test(B.path))throw new TypeError(`option path is invalid: ${B.path}`);Y+="; Path="+B.path}if(B.expires){if(!R(B.expires)||!Number.isFinite(B.expires.valueOf()))throw new TypeError(`option expires is invalid: ${B.expires}`);Y+="; Expires="+B.expires.toUTCString()}if(B.httpOnly&&(Y+="; HttpOnly"),B.secure&&(Y+="; Secure"),B.partitioned&&(Y+="; Partitioned"),B.priority)switch(typeof B.priority=="string"?B.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${B.priority}`)}if(B.sameSite)switch(typeof B.sameSite=="string"?B.sameSite.toLowerCase():B.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${B.sameSite}`)}return Y}function E(D){if(D.indexOf("%")===-1)return D;try{return decodeURIComponent(D)}catch{return D}}function R(D){return o.call(D)==="[object Date]"}return _l}kS();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var A_="popstate";function VS(r={}){function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return $d("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Dl(o)}return LS(e,n,null,r)}function et(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function di(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xS(){return Math.random().toString(36).substring(2,10)}function S_(r,e){return{usr:r.state,key:r.key,idx:e}}function $d(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?io(e):e,state:n,key:e&&e.key||s||xS()}}function Dl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function io(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function LS(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,y=E();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function E(){return(f.state||{idx:null}).idx}function R(){m="POP";let H=E(),Y=H==null?null:H-y;y=H,p&&p({action:m,location:X.location,delta:Y})}function D(H,Y){m="PUSH";let te=$d(X.location,H,Y);y=E()+1;let W=S_(te,y),ue=X.createHref(te);try{f.pushState(W,"",ue)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;o.location.assign(ue)}u&&p&&p({action:m,location:X.location,delta:1})}function x(H,Y){m="REPLACE";let te=$d(X.location,H,Y);y=E();let W=S_(te,y),ue=X.createHref(te);f.replaceState(W,"",ue),u&&p&&p({action:m,location:X.location,delta:0})}function B(H){let Y=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof H=="string"?H:Dl(H);return te=te.replace(/ $/,"%20"),et(Y,`No window.location.(origin|href) available to create URL for href: ${te}`),new URL(te,Y)}let X={get action(){return m},get location(){return r(o,f)},listen(H){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(A_,R),p=H,()=>{o.removeEventListener(A_,R),p=null}},createHref(H){return e(o,H)},createURL:B,encodeLocation(H){let Y=B(H);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:D,replace:x,go(H){return f.go(H)}};return X}function iE(r,e,n="/"){return US(r,e,n,!1)}function US(r,e,n,s){let o=typeof e=="string"?io(e):e,u=Xr(o.pathname||"/",n);if(u==null)return null;let f=rE(r);PS(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=YS(u);m=$S(f[p],y,s)}return m}function rE(r,e=[],n=[],s=""){let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(et(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=Xi([s,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(et(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),rE(u.children,e,E,y)),!(u.path==null&&!u.index)&&e.push({path:y,score:GS(y,u.index),routesMeta:E})};return r.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of sE(u.path))o(u,f,p)}),e}function sE(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=sE(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function PS(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:KS(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var zS=/^:[\w-]+$/,BS=3,qS=2,HS=1,jS=10,FS=-2,w_=r=>r==="*";function GS(r,e){let n=r.split("/"),s=n.length;return n.some(w_)&&(s+=FS),e&&(s+=qS),n.filter(o=>!w_(o)).reduce((o,u)=>o+(zS.test(u)?BS:u===""?HS:jS),s)}function KS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function $S(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",R=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),D=p.route;if(!R&&y&&n&&!s[s.length-1].route.index&&(R=Lc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!R)return null;Object.assign(o,R.params),f.push({params:o,pathname:Xi([u,R.pathname]),pathnameBase:JS(Xi([u,R.pathnameBase])),route:D}),R.pathnameBase!=="/"&&(u=Xi([u,R.pathnameBase]))}return f}function Lc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=QS(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:R},D)=>{if(E==="*"){let B=m[D]||"";f=u.slice(0,u.length-B.length).replace(/(.)\/+$/,"$1")}const x=m[D];return R&&!x?y[E]=void 0:y[E]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:f,pattern:r}}function QS(r,e=!1,n=!0){di(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function YS(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return di(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Xr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function XS(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?io(r):r;return{pathname:n?n.startsWith("/")?n:ZS(n,e):e,search:ew(s),hash:tw(o)}}function ZS(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Id(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function WS(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function aE(r){let e=WS(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function oE(r,e,n,s=!1){let o;typeof r=="string"?o=io(r):(o={...r},et(!o.pathname||!o.pathname.includes("?"),Id("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),Id("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),Id("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let R=e.length-1;if(!s&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),R-=1;o.pathname=D.join("/")}m=R>=0?e[R]:"/"}let p=XS(o,m),y=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Xi=r=>r.join("/").replace(/\/\/+/g,"/"),JS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ew=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,tw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function nw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var lE=["POST","PUT","PATCH","DELETE"];new Set(lE);var iw=["GET",...lE];new Set(iw);var ro=F.createContext(null);ro.displayName="DataRouter";var th=F.createContext(null);th.displayName="DataRouterState";var uE=F.createContext({isTransitioning:!1});uE.displayName="ViewTransition";var rw=F.createContext(new Map);rw.displayName="Fetchers";var sw=F.createContext(null);sw.displayName="Await";var yi=F.createContext(null);yi.displayName="Navigation";var Ll=F.createContext(null);Ll.displayName="Location";var tr=F.createContext({outlet:null,matches:[],isDataRoute:!1});tr.displayName="Route";var Tm=F.createContext(null);Tm.displayName="RouteError";function aw(r,{relative:e}={}){et(Ul(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=F.useContext(yi),{hash:o,pathname:u,search:f}=Pl(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:Xi([n,u])),s.createHref({pathname:m,search:f,hash:o})}function Ul(){return F.useContext(Ll)!=null}function Gs(){return et(Ul(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Ll).location}var cE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hE(r){F.useContext(yi).static||F.useLayoutEffect(r)}function ow(){let{isDataRoute:r}=F.useContext(tr);return r?Ew():lw()}function lw(){et(Ul(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(ro),{basename:e,navigator:n}=F.useContext(yi),{matches:s}=F.useContext(tr),{pathname:o}=Gs(),u=JSON.stringify(aE(s)),f=F.useRef(!1);return hE(()=>{f.current=!0}),F.useCallback((p,y={})=>{if(di(f.current,cE),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=oE(p,JSON.parse(u),o,y.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Xi([e,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[e,n,u,o,r])}F.createContext(null);function Pl(r,{relative:e}={}){let{matches:n}=F.useContext(tr),{pathname:s}=Gs(),o=JSON.stringify(aE(n));return F.useMemo(()=>oE(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function uw(r,e){return fE(r,e)}function fE(r,e,n,s){var te;et(Ul(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=F.useContext(yi),{matches:f}=F.useContext(tr),m=f[f.length-1],p=m?m.params:{},y=m?m.pathname:"/",E=m?m.pathnameBase:"/",R=m&&m.route;{let W=R&&R.path||"";dE(y,!R||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let D=Gs(),x;if(e){let W=typeof e=="string"?io(e):e;et(E==="/"||((te=W.pathname)==null?void 0:te.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${W.pathname}" was given in the \`location\` prop.`),x=W}else x=D;let B=x.pathname||"/",X=B;if(E!=="/"){let W=E.replace(/^\//,"").split("/");X="/"+B.replace(/^\//,"").split("/").slice(W.length).join("/")}let H=!u&&n&&n.matches&&n.matches.length>0?n.matches:iE(r,{pathname:X});di(R||H!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),di(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=mw(H&&H.map(W=>Object.assign({},W,{params:Object.assign({},p,W.params),pathname:Xi([E,o.encodeLocation?o.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?E:Xi([E,o.encodeLocation?o.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),f,n,s);return e&&Y?F.createElement(Ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},Y):Y}function cw(){let r=vw(),e=nw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:u},"ErrorBoundary")," or"," ",F.createElement("code",{style:u},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:o},n):null,f)}var hw=F.createElement(cw,null),fw=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?F.createElement(tr.Provider,{value:this.props.routeContext},F.createElement(Tm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dw({routeContext:r,match:e,children:n}){let s=F.useContext(ro);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(tr.Provider,{value:r},n)}function mw(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(n)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:E,errors:R}=n,D=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!R||R[y.route.id]===void 0);if(y.route.lazy||D){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let R,D=!1,x=null,B=null;n&&(R=u&&y.route.id?u[y.route.id]:void 0,x=y.route.errorElement||hw,f&&(m<0&&E===0?(dE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,B=null):m===E&&(D=!0,B=y.route.hydrateFallbackElement||null)));let X=e.concat(o.slice(0,E+1)),H=()=>{let Y;return R?Y=x:D?Y=B:y.route.Component?Y=F.createElement(y.route.Component,null):y.route.element?Y=y.route.element:Y=p,F.createElement(dw,{match:y,routeContext:{outlet:p,matches:X,isDataRoute:n!=null},children:Y})};return n&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?F.createElement(fw,{location:n.location,revalidation:n.revalidation,component:x,error:R,children:H(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):H()},null)}function Am(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pw(r){let e=F.useContext(ro);return et(e,Am(r)),e}function gw(r){let e=F.useContext(th);return et(e,Am(r)),e}function yw(r){let e=F.useContext(tr);return et(e,Am(r)),e}function Sm(r){let e=yw(r),n=e.matches[e.matches.length-1];return et(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function _w(){return Sm("useRouteId")}function vw(){var s;let r=F.useContext(Tm),e=gw("useRouteError"),n=Sm("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function Ew(){let{router:r}=pw("useNavigate"),e=Sm("useNavigate"),n=F.useRef(!1);return hE(()=>{n.current=!0}),F.useCallback(async(o,u={})=>{di(n.current,cE),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var b_={};function dE(r,e,n){!e&&!b_[r]&&(b_[r]=!0,di(!1,n))}F.memo(Tw);function Tw({routes:r,future:e,state:n}){return fE(r,void 0,n,e)}function mE(r){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Aw({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){et(!Ul(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=F.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=io(n));let{pathname:p="/",search:y="",hash:E="",state:R=null,key:D="default"}=n,x=F.useMemo(()=>{let B=Xr(p,f);return B==null?null:{location:{pathname:B,search:y,hash:E,state:R,key:D},navigationType:s}},[f,p,y,E,R,D,s]);return di(x!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:F.createElement(yi.Provider,{value:m},F.createElement(Ll.Provider,{children:e,value:x}))}function Sw({children:r,location:e}){return uw(Qd(r),e)}function Qd(r,e=[]){let n=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let u=[...e,o];if(s.type===F.Fragment){n.push.apply(n,Qd(s.props.children,u));return}et(s.type===mE,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Qd(s.props.children,u)),n.push(f)}),n}var wc="get",bc="application/x-www-form-urlencoded";function nh(r){return r!=null&&typeof r.tagName=="string"}function ww(r){return nh(r)&&r.tagName.toLowerCase()==="button"}function bw(r){return nh(r)&&r.tagName.toLowerCase()==="form"}function Rw(r){return nh(r)&&r.tagName.toLowerCase()==="input"}function Cw(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Iw(r,e){return r.button===0&&(!e||e==="_self")&&!Cw(r)}var mc=null;function Dw(){if(mc===null)try{new FormData(document.createElement("form"),0),mc=!1}catch{mc=!0}return mc}var Ow=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dd(r){return r!=null&&!Ow.has(r)?(di(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bc}"`),null):r}function Nw(r,e){let n,s,o,u,f;if(bw(r)){let m=r.getAttribute("action");s=m?Xr(m,e):null,n=r.getAttribute("method")||wc,o=Dd(r.getAttribute("enctype"))||bc,u=new FormData(r)}else if(ww(r)||Rw(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?Xr(p,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||wc,o=Dd(r.getAttribute("formenctype"))||Dd(m.getAttribute("enctype"))||bc,u=new FormData(m,r),!Dw()){let{name:y,type:E,value:R}=r;if(E==="image"){let D=y?`${y}.`:"";u.append(`${D}x`,"0"),u.append(`${D}y`,"0")}else y&&u.append(y,R)}}else{if(nh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=wc,s=null,o=bc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}function wm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Mw(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kw(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Vw(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await Mw(u,n);return f.links?f.links():[]}return[]}));return Pw(s.flat(1).filter(kw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function R_(r,e,n,s,o,u){let f=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>{var E;return n[y].pathname!==p.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,y)=>f(p,y)||m(p,y)):u==="data"?e.filter((p,y)=>{var R;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let D=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((R=n[0])==null?void 0:R.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function xw(r,e){return Lw(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function Lw(r){return[...new Set(r)]}function Uw(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function Pw(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(Uw(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function zw(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Bw(){let r=F.useContext(ro);return wm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function qw(){let r=F.useContext(th);return wm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bm=F.createContext(void 0);bm.displayName="FrameworkContext";function pE(){let r=F.useContext(bm);return wm(r,"You must render this element inside a <HydratedRouter> element"),r}function Hw(r,e){let n=F.useContext(bm),[s,o]=F.useState(!1),[u,f]=F.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:R}=e,D=F.useRef(null);F.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let X=Y=>{Y.forEach(te=>{f(te.isIntersecting)})},H=new IntersectionObserver(X,{threshold:.5});return D.current&&H.observe(D.current),()=>{H.disconnect()}}},[r]),F.useEffect(()=>{if(s){let X=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(X)}}},[s]);let x=()=>{o(!0)},B=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,D,{}]:[u,D,{onFocus:vl(m,x),onBlur:vl(p,B),onMouseEnter:vl(y,x),onMouseLeave:vl(E,B),onTouchStart:vl(R,x)}]:[!1,D,{}]}function vl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function jw({page:r,...e}){let{router:n}=Bw(),s=F.useMemo(()=>iE(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?F.createElement(Gw,{page:r,matches:s,...e}):null}function Fw(r){let{manifest:e,routeModules:n}=pE(),[s,o]=F.useState([]);return F.useEffect(()=>{let u=!1;return Vw(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function Gw({page:r,matches:e,...n}){let s=Gs(),{manifest:o,routeModules:u}=pE(),{loaderData:f,matches:m}=qw(),p=F.useMemo(()=>R_(r,e,m,o,s,"data"),[r,e,m,o,s]),y=F.useMemo(()=>R_(r,e,m,o,s,"assets"),[r,e,m,o,s]),E=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let x=new Set,B=!1;if(e.forEach(H=>{var te;let Y=o.routes[H.route.id];!Y||!Y.hasLoader||(!p.some(W=>W.route.id===H.route.id)&&H.route.id in f&&((te=u[H.route.id])!=null&&te.shouldRevalidate)||Y.hasClientLoader?B=!0:x.add(H.route.id))}),x.size===0)return[];let X=zw(r);return B&&x.size>0&&X.searchParams.set("_routes",e.filter(H=>x.has(H.route.id)).map(H=>H.route.id).join(",")),[X.pathname+X.search]},[f,s,o,p,e,r,u]),R=F.useMemo(()=>xw(y,o),[y,o]),D=Fw(y);return F.createElement(F.Fragment,null,E.map(x=>F.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),R.map(x=>F.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),D.map(({key:x,link:B})=>F.createElement("link",{key:x,...B})))}function Kw(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var gE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gE&&(window.__reactRouterVersion="7.1.5")}catch{}function $w({basename:r,children:e,window:n}){let s=F.useRef();s.current==null&&(s.current=VS({window:n,v5Compat:!0}));let o=s.current,[u,f]=F.useState({action:o.action,location:o.location}),m=F.useCallback(p=>{F.startTransition(()=>f(p))},[f]);return F.useLayoutEffect(()=>o.listen(m),[o,m]),F.createElement(Aw,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var yE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rm=F.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:y,preventScrollReset:E,viewTransition:R,...D},x){let{basename:B}=F.useContext(yi),X=typeof y=="string"&&yE.test(y),H,Y=!1;if(typeof y=="string"&&X&&(H=y,gE))try{let S=new URL(window.location.href),C=y.startsWith("//")?new URL(S.protocol+y):new URL(y),k=Xr(C.pathname,B);C.origin===S.origin&&k!=null?y=k+C.search+C.hash:Y=!0}catch{di(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=aw(y,{relative:o}),[W,ue,oe]=Hw(s,D),_e=Xw(y,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:R});function N(S){e&&e(S),S.defaultPrevented||_e(S)}let w=F.createElement("a",{...D,...oe,href:H||te,onClick:Y||u?e:N,ref:Kw(x,ue),target:p,"data-discover":!X&&n==="render"?"true":void 0});return W&&!X?F.createElement(F.Fragment,null,w,F.createElement(jw,{page:te})):w});Rm.displayName="Link";var _E=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...y},E){let R=Pl(f,{relative:y.relative}),D=Gs(),x=F.useContext(th),{navigator:B,basename:X}=F.useContext(yi),H=x!=null&&tb(R)&&m===!0,Y=B.encodeLocation?B.encodeLocation(R).pathname:R.pathname,te=D.pathname,W=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(te=te.toLowerCase(),W=W?W.toLowerCase():null,Y=Y.toLowerCase()),W&&X&&(W=Xr(W,X)||W);const ue=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let oe=te===Y||!o&&te.startsWith(Y)&&te.charAt(ue)==="/",_e=W!=null&&(W===Y||!o&&W.startsWith(Y)&&W.charAt(Y.length)==="/"),N={isActive:oe,isPending:_e,isTransitioning:H},w=oe?e:void 0,S;typeof s=="function"?S=s(N):S=[s,oe?"active":null,_e?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(N):u;return F.createElement(Rm,{...y,"aria-current":w,className:S,ref:E,style:C,to:f,viewTransition:m},typeof p=="function"?p(N):p)});_E.displayName="NavLink";var Qw=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=wc,action:m,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:R,...D},x)=>{let B=Jw(),X=eb(m,{relative:y}),H=f.toLowerCase()==="get"?"get":"post",Y=typeof m=="string"&&yE.test(m),te=W=>{if(p&&p(W),W.defaultPrevented)return;W.preventDefault();let ue=W.nativeEvent.submitter,oe=(ue==null?void 0:ue.getAttribute("formmethod"))||f;B(ue||W.currentTarget,{fetcherKey:e,method:oe,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:R})};return F.createElement("form",{ref:x,method:H,action:X,onSubmit:s?p:te,...D,"data-discover":!Y&&r==="render"?"true":void 0})});Qw.displayName="Form";function Yw(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vE(r){let e=F.useContext(ro);return et(e,Yw(r)),e}function Xw(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=ow(),p=Gs(),y=Pl(r,{relative:u});return F.useCallback(E=>{if(Iw(E,e)){E.preventDefault();let R=n!==void 0?n:Dl(p)===Dl(y);m(r,{replace:R,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,y,n,s,e,r,o,u,f])}var Zw=0,Ww=()=>`__${String(++Zw)}__`;function Jw(){let{router:r}=vE("useSubmit"),{basename:e}=F.useContext(yi),n=_w();return F.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:p,body:y}=Nw(s,e);if(o.navigate===!1){let E=o.fetcherKey||Ww();await r.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function eb(r,{relative:e}={}){let{basename:n}=F.useContext(yi),s=F.useContext(tr);et(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Pl(r||".",{relative:e})},f=Gs();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(R=>R).forEach(R=>m.append("index",R));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Xi([n,u.pathname])),Dl(u)}function tb(r,e={}){let n=F.useContext(uE);et(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=vE("useViewTransitionState"),o=Pl(r,{relative:e.relative});if(!n.isTransitioning)return!1;let u=Xr(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=Xr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Lc(o.pathname,f)!=null||Lc(o.pathname,u)!=null}new TextEncoder;const nb=F.createContext();function ib({children:r,value:e}){return Ne.jsx(nb.Provider,{value:e,children:r})}const rb="_headerContainer_o3cta_1",sb={headerContainer:rb};var Od={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var C_;function ab(){return C_||(C_=1,function(r){(function(){var e={}.hasOwnProperty;function n(){for(var u="",f=0;f<arguments.length;f++){var m=arguments[f];m&&(u=o(u,s(m)))}return u}function s(u){if(typeof u=="string"||typeof u=="number")return u;if(typeof u!="object")return"";if(Array.isArray(u))return n.apply(null,u);if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]"))return u.toString();var f="";for(var m in u)e.call(u,m)&&u[m]&&(f=o(f,m));return f}function o(u,f){return f?u?u+" "+f:u+f:u}r.exports?(n.default=n,r.exports=n):window.classNames=n})()}(Od)),Od.exports}var ob=ab();const xn=AS(ob),lb=["xxl","xl","lg","md","sm","xs"],ub="xs",EE=F.createContext({prefixes:{},breakpoints:lb,minBreakpoint:ub}),{Consumer:GN,Provider:KN}=EE;function Gn(r,e){const{prefixes:n}=F.useContext(EE);return r||n[e]||e}const TE=r=>F.forwardRef((e,n)=>Ne.jsx("div",{...e,ref:n,className:xn(e.className,r)})),Cm=F.forwardRef(({className:r,bsPrefix:e,as:n="div",...s},o)=>(e=Gn(e,"card-body"),Ne.jsx(n,{ref:o,className:xn(r,e),...s})));Cm.displayName="CardBody";const AE=F.forwardRef(({className:r,bsPrefix:e,as:n="div",...s},o)=>(e=Gn(e,"card-footer"),Ne.jsx(n,{ref:o,className:xn(r,e),...s})));AE.displayName="CardFooter";const SE=F.createContext(null);SE.displayName="CardHeaderContext";const wE=F.forwardRef(({bsPrefix:r,className:e,as:n="div",...s},o)=>{const u=Gn(r,"card-header"),f=F.useMemo(()=>({cardHeaderBsPrefix:u}),[u]);return Ne.jsx(SE.Provider,{value:f,children:Ne.jsx(n,{ref:o,...s,className:xn(e,u)})})});wE.displayName="CardHeader";const bE=F.forwardRef(({bsPrefix:r,className:e,variant:n,as:s="img",...o},u)=>{const f=Gn(r,"card-img");return Ne.jsx(s,{ref:u,className:xn(n?`${f}-${n}`:f,e),...o})});bE.displayName="CardImg";const RE=F.forwardRef(({className:r,bsPrefix:e,as:n="div",...s},o)=>(e=Gn(e,"card-img-overlay"),Ne.jsx(n,{ref:o,className:xn(r,e),...s})));RE.displayName="CardImgOverlay";const CE=F.forwardRef(({className:r,bsPrefix:e,as:n="a",...s},o)=>(e=Gn(e,"card-link"),Ne.jsx(n,{ref:o,className:xn(r,e),...s})));CE.displayName="CardLink";const cb=TE("h6"),IE=F.forwardRef(({className:r,bsPrefix:e,as:n=cb,...s},o)=>(e=Gn(e,"card-subtitle"),Ne.jsx(n,{ref:o,className:xn(r,e),...s})));IE.displayName="CardSubtitle";const DE=F.forwardRef(({className:r,bsPrefix:e,as:n="p",...s},o)=>(e=Gn(e,"card-text"),Ne.jsx(n,{ref:o,className:xn(r,e),...s})));DE.displayName="CardText";const hb=TE("h5"),OE=F.forwardRef(({className:r,bsPrefix:e,as:n=hb,...s},o)=>(e=Gn(e,"card-title"),Ne.jsx(n,{ref:o,className:xn(r,e),...s})));OE.displayName="CardTitle";const NE=F.forwardRef(({bsPrefix:r,className:e,bg:n,text:s,border:o,body:u=!1,children:f,as:m="div",...p},y)=>{const E=Gn(r,"card");return Ne.jsx(m,{ref:y,...p,className:xn(e,E,n&&`bg-${n}`,s&&`text-${s}`,o&&`border-${o}`),children:u?Ne.jsx(Cm,{children:f}):f})});NE.displayName="Card";const pc=Object.assign(NE,{Img:bE,Title:OE,Subtitle:IE,Body:Cm,Link:CE,Text:DE,Header:wE,Footer:AE,ImgOverlay:RE}),Im=F.forwardRef(({bsPrefix:r,fluid:e=!1,as:n="div",className:s,...o},u)=>{const f=Gn(r,"container"),m=typeof e=="string"?`-${e}`:"-fluid";return Ne.jsx(n,{ref:u,...o,className:xn(s,e?`${f}${m}`:f)})});Im.displayName="Container";const fb=()=>Ne.jsx(Im,{fluid:!0,className:`${sb.headerContainer} d-flex justify-content-center align-items-center w-100 ps-0 pe-0 pt-1 pb-1`,children:Ne.jsx(_E,{to:"/",className:"d-flex justify-content-center align-items-center w-100 h-100",children:Ne.jsx("img",{src:"/GwiNewsLogo.svg",alt:"GWI News Logo",className:"h-100 w-auto"})})}),db="_newsDashboardContainer_jmnrq_1",mb={newsDashboardContainer:db};var I_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},pb=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},kE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,R=(u&3)<<4|m>>4;let D=(m&15)<<2|y>>6,x=y&63;p||(x=64,f||(D=64)),s.push(n[E],n[R],n[D],n[x])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ME(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):pb(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const R=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||R==null)throw new gb;const D=u<<2|m>>4;if(s.push(D),y!==64){const x=m<<4&240|y>>2;if(s.push(x),R!==64){const B=y<<6&192|R;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yb=function(r){const e=ME(r);return kE.encodeByteArray(e,!0)},Uc=function(r){return yb(r).replace(/\./g,"")},VE=function(r){try{return kE.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=()=>_b().__FIREBASE_DEFAULTS__,Eb=()=>{if(typeof process>"u"||typeof I_>"u")return;const r=I_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Tb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&VE(r[1]);return e&&JSON.parse(e)},ih=()=>{try{return vb()||Eb()||Tb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xE=r=>{var e,n;return(n=(e=ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},LE=r=>{const e=xE(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},UE=()=>{var r;return(r=ih())===null||r===void 0?void 0:r.config},PE=r=>{var e;return(e=ih())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Uc(JSON.stringify(n)),Uc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function wb(){var r;const e=(r=ih())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Rb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cb(){const r=$t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ib(){return!wb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qE(){try{return typeof indexedDB=="object"}catch{return!1}}function HE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function Db(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="FirebaseError";class Ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ob,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?Nb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Ln(o,m,s)}}function Nb(r,e){return r.replace(Mb,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Mb=/\{\$([^}]+)}/g;function kb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ol(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(D_(u)&&D_(f)){if(!Ol(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function D_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vb(r,e){const n=new xb(r,e);return n.subscribe.bind(n)}class xb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Lb(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Nd),o.error===void 0&&(o.error=Nd),o.complete===void 0&&(o.complete=Nd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lb(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Nd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=1e3,Pb=2,zb=4*60*60*1e3,Bb=.5;function O_(r,e=Ub,n=Pb){const s=e*Math.pow(n,r),o=Math.round(Bb*s*(Math.random()-.5)*2);return Math.min(zb,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r){return r&&r._delegate?r._delegate:r}class Vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ab;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jb(e))try{this.getOrInitializeService({instanceIdentifier:xs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xs){return this.instances.has(e)}getOptions(e=xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xs){return this.component?this.component.multipleInstances?e:xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hb(r){return r===xs?void 0:r}function jb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(De||(De={}));const Gb={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},Kb=De.INFO,$b={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},Qb=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=$b[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rh{constructor(e){this.name=e,this._logLevel=Kb,this._logHandler=Qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const Yb=(r,e)=>e.some(n=>r instanceof n);let N_,M_;function Xb(){return N_||(N_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zb(){return M_||(M_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jE=new WeakMap,Yd=new WeakMap,FE=new WeakMap,Md=new WeakMap,Dm=new WeakMap;function Wb(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n($r(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&jE.set(n,r)}).catch(()=>{}),Dm.set(e,r),e}function Jb(r){if(Yd.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Yd.set(r,e)}let Xd={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Yd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||FE.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function eR(r){Xd=r(Xd)}function tR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(kd(this),e,...n);return FE.set(s,e.sort?e.sort():[e]),$r(s)}:Zb().includes(r)?function(...e){return r.apply(kd(this),e),$r(jE.get(this))}:function(...e){return $r(r.apply(kd(this),e))}}function nR(r){return typeof r=="function"?tR(r):(r instanceof IDBTransaction&&Jb(r),Yb(r,Xb())?new Proxy(r,Xd):r)}function $r(r){if(r instanceof IDBRequest)return Wb(r);if(Md.has(r))return Md.get(r);const e=nR(r);return e!==r&&(Md.set(r,e),Dm.set(e,r)),e}const kd=r=>Dm.get(r);function GE(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=$r(f);return s&&f.addEventListener("upgradeneeded",p=>{s($r(f.result),p.oldVersion,p.newVersion,$r(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const iR=["get","getKey","getAll","getAllKeys","count"],rR=["put","add","delete","clear"],Vd=new Map;function k_(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Vd.get(e))return Vd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=rR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||iR.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Vd.set(e,u),u}eR(r=>({...r,get:(e,n,s)=>k_(e,n)||r.get(e,n,s),has:(e,n)=>!!k_(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function aR(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",V_="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new rh("@firebase/app"),oR="@firebase/app-compat",lR="@firebase/analytics-compat",uR="@firebase/analytics",cR="@firebase/app-check-compat",hR="@firebase/app-check",fR="@firebase/auth",dR="@firebase/auth-compat",mR="@firebase/database",pR="@firebase/data-connect",gR="@firebase/database-compat",yR="@firebase/functions",_R="@firebase/functions-compat",vR="@firebase/installations",ER="@firebase/installations-compat",TR="@firebase/messaging",AR="@firebase/messaging-compat",SR="@firebase/performance",wR="@firebase/performance-compat",bR="@firebase/remote-config",RR="@firebase/remote-config-compat",CR="@firebase/storage",IR="@firebase/storage-compat",DR="@firebase/firestore",OR="@firebase/vertexai",NR="@firebase/firestore-compat",MR="firebase",kR="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="[DEFAULT]",VR={[Zd]:"fire-core",[oR]:"fire-core-compat",[uR]:"fire-analytics",[lR]:"fire-analytics-compat",[hR]:"fire-app-check",[cR]:"fire-app-check-compat",[fR]:"fire-auth",[dR]:"fire-auth-compat",[mR]:"fire-rtdb",[pR]:"fire-data-connect",[gR]:"fire-rtdb-compat",[yR]:"fire-fn",[_R]:"fire-fn-compat",[vR]:"fire-iid",[ER]:"fire-iid-compat",[TR]:"fire-fcm",[AR]:"fire-fcm-compat",[SR]:"fire-perf",[wR]:"fire-perf-compat",[bR]:"fire-rc",[RR]:"fire-rc-compat",[CR]:"fire-gcs",[IR]:"fire-gcs-compat",[DR]:"fire-fst",[NR]:"fire-fst-compat",[OR]:"fire-vertex","fire-js":"fire-js",[MR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map,xR=new Map,Jd=new Map;function x_(r,e){try{r.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Fn(r){const e=r.name;if(Jd.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;Jd.set(e,r);for(const n of Pc.values())x_(n,r);for(const n of xR.values())x_(n,r);return!0}function ns(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Fr(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Ks("app","Firebase",LR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=kR;function KE(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Qr.create("bad-app-name",{appName:String(o)});if(n||(n=UE()),!n)throw Qr.create("no-options");const u=Pc.get(o);if(u){if(Ol(n,u.options)&&Ol(s,u.config))return u;throw Qr.create("duplicate-app",{appName:o})}const f=new Fb(o);for(const p of Jd.values())f.addComponent(p);const m=new UR(n,s,f);return Pc.set(o,m),m}function sh(r=Wd){const e=Pc.get(r);if(!e&&r===Wd&&UE())return KE();if(!e)throw Qr.create("no-app",{appName:r});return e}function an(r,e,n){var s;let o=(s=VR[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(m.join(" "));return}Fn(new Vn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="firebase-heartbeat-database",zR=1,Nl="firebase-heartbeat-store";let xd=null;function $E(){return xd||(xd=GE(PR,zR,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Nl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qr.create("idb-open",{originalErrorMessage:r.message})})),xd}async function BR(r){try{const n=(await $E()).transaction(Nl),s=await n.objectStore(Nl).get(QE(r));return await n.done,s}catch(e){if(e instanceof Ln)Zi.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function L_(r,e){try{const s=(await $E()).transaction(Nl,"readwrite");await s.objectStore(Nl).put(e,QE(r)),await s.done}catch(n){if(n instanceof Ln)Zi.warn(n.message);else{const s=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(s.message)}}}function QE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=1024,HR=30*24*60*60*1e3;class jR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=U_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const m=new Date(f.date).valueOf();return Date.now()-m<=HR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Zi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U_(),{heartbeatsToSend:s,unsentEntries:o}=FR(this._heartbeatsCache.heartbeats),u=Uc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Zi.warn(n),""}}}function U_(){return new Date().toISOString().substring(0,10)}function FR(r,e=qR){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),P_(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),P_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class GR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qE()?HE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return L_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return L_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function P_(r){return Uc(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(r){Fn(new Vn("platform-logger",e=>new sR(e),"PRIVATE")),Fn(new Vn("heartbeat",e=>new jR(e),"PRIVATE")),an(Zd,V_,r),an(Zd,V_,"esm2017"),an("fire-js","")}KR("");var $R="firebase",QR="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an($R,QR,"app");const YE="@firebase/installations",Om="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=1e4,ZE=`w:${Om}`,WE="FIS_v2",YR="https://firebaseinstallations.googleapis.com/v1",XR=60*60*1e3,ZR="installations",WR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qs=new Ks(ZR,WR,JR);function JE(r){return r instanceof Ln&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT({projectId:r}){return`${YR}/projects/${r}/installations`}function tT(r){return{token:r.token,requestStatus:2,expiresIn:t1(r.expiresIn),creationTime:Date.now()}}async function nT(r,e){const s=(await e.json()).error;return qs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function iT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function e1(r,{refreshToken:e}){const n=iT(r);return n.append("Authorization",n1(e)),n}async function rT(r){const e=await r();return e.status>=500&&e.status<600?r():e}function t1(r){return Number(r.replace("s","000"))}function n1(r){return`${WE} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=eT(r),o=iT(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:WE,appId:r.appId,sdkVersion:ZE},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await rT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:tT(y.authToken)}}else throw await nT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=/^[cdef][\w-]{21}$/,em="";function a1(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=o1(r);return s1.test(n)?n:em}catch{return em}}function o1(r){return r1(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Map;function oT(r,e){const n=ah(r);lT(n,e),l1(n,e)}function lT(r,e){const n=aT.get(r);if(n)for(const s of n)s(e)}function l1(r,e){const n=u1();n&&n.postMessage({key:r,fid:e}),c1()}let Ls=null;function u1(){return!Ls&&"BroadcastChannel"in self&&(Ls=new BroadcastChannel("[Firebase] FID Change"),Ls.onmessage=r=>{lT(r.data.key,r.data.fid)}),Ls}function c1(){aT.size===0&&Ls&&(Ls.close(),Ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="firebase-installations-database",f1=1,Hs="firebase-installations-store";let Ld=null;function Nm(){return Ld||(Ld=GE(h1,f1,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Hs)}}})),Ld}async function zc(r,e){const n=ah(r),o=(await Nm()).transaction(Hs,"readwrite"),u=o.objectStore(Hs),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&oT(r,e.fid),e}async function uT(r){const e=ah(r),s=(await Nm()).transaction(Hs,"readwrite");await s.objectStore(Hs).delete(e),await s.done}async function oh(r,e){const n=ah(r),o=(await Nm()).transaction(Hs,"readwrite"),u=o.objectStore(Hs),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&oT(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(r){let e;const n=await oh(r.appConfig,s=>{const o=d1(s),u=m1(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===em?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function d1(r){const e=r||{fid:a1(),registrationStatus:0};return cT(e)}function m1(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(qs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=p1(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:g1(r)}:{installationEntry:e}}async function p1(r,e){try{const n=await i1(r,e);return zc(r.appConfig,n)}catch(n){throw JE(n)&&n.customData.serverCode===409?await uT(r.appConfig):await zc(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function g1(r){let e=await z_(r.appConfig);for(;e.registrationStatus===1;)await sT(100),e=await z_(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Mm(r);return s||n}return e}function z_(r){return oh(r,e=>{if(!e)throw qs.create("installation-not-found");return cT(e)})}function cT(r){return y1(r)?{fid:r.fid,registrationStatus:0}:r}function y1(r){return r.registrationStatus===1&&r.registrationTime+XE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1({appConfig:r,heartbeatServiceProvider:e},n){const s=v1(r,n),o=e1(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:ZE,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await rT(()=>fetch(s,m));if(p.ok){const y=await p.json();return tT(y)}else throw await nT("Generate Auth Token",p)}function v1(r,{fid:e}){return`${eT(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(r,e=!1){let n;const s=await oh(r.appConfig,u=>{if(!hT(u))throw qs.create("not-registered");const f=u.authToken;if(!e&&A1(f))return u;if(f.requestStatus===1)return n=E1(r,e),u;{if(!navigator.onLine)throw qs.create("app-offline");const m=w1(u);return n=T1(r,m),m}});return n?await n:s.authToken}async function E1(r,e){let n=await B_(r.appConfig);for(;n.authToken.requestStatus===1;)await sT(100),n=await B_(r.appConfig);const s=n.authToken;return s.requestStatus===0?km(r,e):s}function B_(r){return oh(r,e=>{if(!hT(e))throw qs.create("not-registered");const n=e.authToken;return b1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function T1(r,e){try{const n=await _1(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await zc(r.appConfig,s),n}catch(n){if(JE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uT(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zc(r.appConfig,s)}throw n}}function hT(r){return r!==void 0&&r.registrationStatus===2}function A1(r){return r.requestStatus===2&&!S1(r)}function S1(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+XR}function w1(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function b1(r){return r.requestStatus===1&&r.requestTime+XE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(r){const e=r,{installationEntry:n,registrationPromise:s}=await Mm(e);return s?s.catch(console.error):km(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(r,e=!1){const n=r;return await I1(n),(await km(n,e)).token}async function I1(r){const{registrationPromise:e}=await Mm(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(r){if(!r||!r.options)throw Ud("App Configuration");if(!r.name)throw Ud("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Ud(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ud(r){return qs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="installations",O1="installations-internal",N1=r=>{const e=r.getProvider("app").getImmediate(),n=D1(e),s=ns(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},M1=r=>{const e=r.getProvider("app").getImmediate(),n=ns(e,fT).getImmediate();return{getId:()=>R1(n),getToken:o=>C1(n,o)}};function k1(){Fn(new Vn(fT,N1,"PUBLIC")),Fn(new Vn(O1,M1,"PRIVATE"))}k1();an(YE,Om);an(YE,Om,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="analytics",V1="firebase_id",x1="origin",L1=60*1e3,U1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new rh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new Ks("analytics","Analytics",P1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(r){if(!r.startsWith(Vm)){const e=gn.create("invalid-gtag-resource",{gtagURL:r});return on.warn(e.message),""}return r}function dT(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function B1(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function q1(r,e){const n=B1("firebase-js-sdk-policy",{createScriptURL:z1}),s=document.createElement("script"),o=`${Vm}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function H1(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function j1(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await dT(n)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(m){on.error(m)}r("config",o,u)}async function F1(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await dT(n);for(const p of f){const y=m.find(R=>R.measurementId===p),E=y&&e[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){on.error(u)}}function G1(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await F1(r,e,n,m,p)}else if(u==="config"){const[m,p]=f;await j1(r,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){on.error(m)}}return o}function K1(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=G1(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function $1(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=30,Y1=1e3;class X1{constructor(e={},n=Y1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mT=new X1;function Z1(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function W1(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:Z1(s)},u=U1.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function J1(r,e=mT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw gn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw gn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new nC;return setTimeout(async()=>{m.abort()},L1),pT({appId:s,apiKey:o,measurementId:u},f,m,e)}async function pT(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=mT){var u;const{appId:f,measurementId:m}=r;try{await eC(s,e)}catch(p){if(m)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await W1(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!tC(y)){if(o.deleteThrottleMetadata(f),m)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?O_(n,o.intervalMillis,Q1):O_(n,o.intervalMillis),R={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,R),on.debug(`Calling attemptFetch again in ${E} millis`),pT(r,R,s,o)}}function eC(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(gn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tC(r){if(!(r instanceof Ln)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class nC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iC(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(){if(qE())try{await HE()}catch(r){return on.warn(gn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return on.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sC(r,e,n,s,o,u,f){var m;const p=J1(r);p.then(x=>{n[x.measurementId]=x.appId,r.options.measurementId&&x.measurementId!==r.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>on.error(x)),e.push(p);const y=rC().then(x=>{if(x)return s.getId()}),[E,R]=await Promise.all([p,y]);$1(u)||q1(u,E.measurementId),o("js",new Date);const D=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return D[x1]="firebase",D.update=!0,R!=null&&(D[V1]=R),o("config",E.measurementId,D),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.app=e}_delete(){return delete Sl[this.app.options.appId],Promise.resolve()}}let Sl={},q_=[];const H_={};let Pd="dataLayer",oC="gtag",j_,gT,F_=!1;function lC(){const r=[];if(BE()&&r.push("This is a browser extension environment."),Db()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=gn.create("invalid-analytics-context",{errorInfo:e});on.warn(n.message)}}function uC(r,e,n){lC();const s=r.options.appId;if(!s)throw gn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(Sl[s]!=null)throw gn.create("already-exists",{id:s});if(!F_){H1(Pd);const{wrappedGtag:u,gtagCore:f}=K1(Sl,q_,H_,Pd,oC);gT=u,j_=f,F_=!0}return Sl[s]=sC(r,q_,H_,e,j_,Pd,n),new aC(r)}function cC(r=sh()){r=_i(r);const e=ns(r,Bc);return e.isInitialized()?e.getImmediate():hC(r)}function hC(r,e={}){const n=ns(r,Bc);if(n.isInitialized()){const o=n.getImmediate();if(Ol(e,n.getOptions()))return o;throw gn.create("already-initialized")}return n.initialize({options:e})}function fC(r,e,n,s){r=_i(r),iC(gT,Sl[r.app.options.appId],e,n,s).catch(o=>on.error(o))}const G_="@firebase/analytics",K_="0.10.11";function dC(){Fn(new Vn(Bc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return uC(s,o,n)},"PUBLIC")),Fn(new Vn("analytics-internal",r,"PRIVATE")),an(G_,K_),an(G_,K_,"esm2017");function r(e){try{const n=e.getProvider(Bc).getImmediate();return{logEvent:(s,o,u)=>fC(n,s,o,u)}}catch(n){throw gn.create("interop-component-reg-failed",{reason:n})}}}dC();var $_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,yT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,w){function S(){}S.prototype=w.prototype,N.D=w.prototype,N.prototype=new S,N.prototype.constructor=N,N.C=function(C,k,P){for(var I=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)I[_t-2]=arguments[_t];return w.prototype[k].apply(C,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,w,S){S||(S=0);var C=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)C[k]=w.charCodeAt(S++)|w.charCodeAt(S++)<<8|w.charCodeAt(S++)<<16|w.charCodeAt(S++)<<24;else for(k=0;16>k;++k)C[k]=w[S++]|w[S++]<<8|w[S++]<<16|w[S++]<<24;w=N.g[0],S=N.g[1],k=N.g[2];var P=N.g[3],I=w+(P^S&(k^P))+C[0]+3614090360&4294967295;w=S+(I<<7&4294967295|I>>>25),I=P+(k^w&(S^k))+C[1]+3905402710&4294967295,P=w+(I<<12&4294967295|I>>>20),I=k+(S^P&(w^S))+C[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=S+(w^k&(P^w))+C[3]+3250441966&4294967295,S=k+(I<<22&4294967295|I>>>10),I=w+(P^S&(k^P))+C[4]+4118548399&4294967295,w=S+(I<<7&4294967295|I>>>25),I=P+(k^w&(S^k))+C[5]+1200080426&4294967295,P=w+(I<<12&4294967295|I>>>20),I=k+(S^P&(w^S))+C[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=S+(w^k&(P^w))+C[7]+4249261313&4294967295,S=k+(I<<22&4294967295|I>>>10),I=w+(P^S&(k^P))+C[8]+1770035416&4294967295,w=S+(I<<7&4294967295|I>>>25),I=P+(k^w&(S^k))+C[9]+2336552879&4294967295,P=w+(I<<12&4294967295|I>>>20),I=k+(S^P&(w^S))+C[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=S+(w^k&(P^w))+C[11]+2304563134&4294967295,S=k+(I<<22&4294967295|I>>>10),I=w+(P^S&(k^P))+C[12]+1804603682&4294967295,w=S+(I<<7&4294967295|I>>>25),I=P+(k^w&(S^k))+C[13]+4254626195&4294967295,P=w+(I<<12&4294967295|I>>>20),I=k+(S^P&(w^S))+C[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=S+(w^k&(P^w))+C[15]+1236535329&4294967295,S=k+(I<<22&4294967295|I>>>10),I=w+(k^P&(S^k))+C[1]+4129170786&4294967295,w=S+(I<<5&4294967295|I>>>27),I=P+(S^k&(w^S))+C[6]+3225465664&4294967295,P=w+(I<<9&4294967295|I>>>23),I=k+(w^S&(P^w))+C[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=S+(P^w&(k^P))+C[0]+3921069994&4294967295,S=k+(I<<20&4294967295|I>>>12),I=w+(k^P&(S^k))+C[5]+3593408605&4294967295,w=S+(I<<5&4294967295|I>>>27),I=P+(S^k&(w^S))+C[10]+38016083&4294967295,P=w+(I<<9&4294967295|I>>>23),I=k+(w^S&(P^w))+C[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=S+(P^w&(k^P))+C[4]+3889429448&4294967295,S=k+(I<<20&4294967295|I>>>12),I=w+(k^P&(S^k))+C[9]+568446438&4294967295,w=S+(I<<5&4294967295|I>>>27),I=P+(S^k&(w^S))+C[14]+3275163606&4294967295,P=w+(I<<9&4294967295|I>>>23),I=k+(w^S&(P^w))+C[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=S+(P^w&(k^P))+C[8]+1163531501&4294967295,S=k+(I<<20&4294967295|I>>>12),I=w+(k^P&(S^k))+C[13]+2850285829&4294967295,w=S+(I<<5&4294967295|I>>>27),I=P+(S^k&(w^S))+C[2]+4243563512&4294967295,P=w+(I<<9&4294967295|I>>>23),I=k+(w^S&(P^w))+C[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=S+(P^w&(k^P))+C[12]+2368359562&4294967295,S=k+(I<<20&4294967295|I>>>12),I=w+(S^k^P)+C[5]+4294588738&4294967295,w=S+(I<<4&4294967295|I>>>28),I=P+(w^S^k)+C[8]+2272392833&4294967295,P=w+(I<<11&4294967295|I>>>21),I=k+(P^w^S)+C[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=S+(k^P^w)+C[14]+4259657740&4294967295,S=k+(I<<23&4294967295|I>>>9),I=w+(S^k^P)+C[1]+2763975236&4294967295,w=S+(I<<4&4294967295|I>>>28),I=P+(w^S^k)+C[4]+1272893353&4294967295,P=w+(I<<11&4294967295|I>>>21),I=k+(P^w^S)+C[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=S+(k^P^w)+C[10]+3200236656&4294967295,S=k+(I<<23&4294967295|I>>>9),I=w+(S^k^P)+C[13]+681279174&4294967295,w=S+(I<<4&4294967295|I>>>28),I=P+(w^S^k)+C[0]+3936430074&4294967295,P=w+(I<<11&4294967295|I>>>21),I=k+(P^w^S)+C[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=S+(k^P^w)+C[6]+76029189&4294967295,S=k+(I<<23&4294967295|I>>>9),I=w+(S^k^P)+C[9]+3654602809&4294967295,w=S+(I<<4&4294967295|I>>>28),I=P+(w^S^k)+C[12]+3873151461&4294967295,P=w+(I<<11&4294967295|I>>>21),I=k+(P^w^S)+C[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=S+(k^P^w)+C[2]+3299628645&4294967295,S=k+(I<<23&4294967295|I>>>9),I=w+(k^(S|~P))+C[0]+4096336452&4294967295,w=S+(I<<6&4294967295|I>>>26),I=P+(S^(w|~k))+C[7]+1126891415&4294967295,P=w+(I<<10&4294967295|I>>>22),I=k+(w^(P|~S))+C[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=S+(P^(k|~w))+C[5]+4237533241&4294967295,S=k+(I<<21&4294967295|I>>>11),I=w+(k^(S|~P))+C[12]+1700485571&4294967295,w=S+(I<<6&4294967295|I>>>26),I=P+(S^(w|~k))+C[3]+2399980690&4294967295,P=w+(I<<10&4294967295|I>>>22),I=k+(w^(P|~S))+C[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=S+(P^(k|~w))+C[1]+2240044497&4294967295,S=k+(I<<21&4294967295|I>>>11),I=w+(k^(S|~P))+C[8]+1873313359&4294967295,w=S+(I<<6&4294967295|I>>>26),I=P+(S^(w|~k))+C[15]+4264355552&4294967295,P=w+(I<<10&4294967295|I>>>22),I=k+(w^(P|~S))+C[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=S+(P^(k|~w))+C[13]+1309151649&4294967295,S=k+(I<<21&4294967295|I>>>11),I=w+(k^(S|~P))+C[4]+4149444226&4294967295,w=S+(I<<6&4294967295|I>>>26),I=P+(S^(w|~k))+C[11]+3174756917&4294967295,P=w+(I<<10&4294967295|I>>>22),I=k+(w^(P|~S))+C[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=S+(P^(k|~w))+C[9]+3951481745&4294967295,N.g[0]=N.g[0]+w&4294967295,N.g[1]=N.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+k&4294967295,N.g[3]=N.g[3]+P&4294967295}s.prototype.u=function(N,w){w===void 0&&(w=N.length);for(var S=w-this.blockSize,C=this.B,k=this.h,P=0;P<w;){if(k==0)for(;P<=S;)o(this,N,P),P+=this.blockSize;if(typeof N=="string"){for(;P<w;)if(C[k++]=N.charCodeAt(P++),k==this.blockSize){o(this,C),k=0;break}}else for(;P<w;)if(C[k++]=N[P++],k==this.blockSize){o(this,C),k=0;break}}this.h=k,this.o+=w},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var w=1;w<N.length-8;++w)N[w]=0;var S=8*this.o;for(w=N.length-8;w<N.length;++w)N[w]=S&255,S/=256;for(this.u(N),N=Array(16),w=S=0;4>w;++w)for(var C=0;32>C;C+=8)N[S++]=this.g[w]>>>C&255;return N};function u(N,w){var S=m;return Object.prototype.hasOwnProperty.call(S,N)?S[N]:S[N]=w(N)}function f(N,w){this.h=w;for(var S=[],C=!0,k=N.length-1;0<=k;k--){var P=N[k]|0;C&&P==w||(S[k]=P,C=!1)}this.g=S}var m={};function p(N){return-128<=N&&128>N?u(N,function(w){return new f([w|0],0>w?-1:0)}):new f([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return R;if(0>N)return H(y(-N));for(var w=[],S=1,C=0;N>=S;C++)w[C]=N/S|0,S*=4294967296;return new f(w,0)}function E(N,w){if(N.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N.charAt(0)=="-")return H(E(N.substring(1),w));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(w,8)),C=R,k=0;k<N.length;k+=8){var P=Math.min(8,N.length-k),I=parseInt(N.substring(k,k+P),w);8>P?(P=y(Math.pow(w,P)),C=C.j(P).add(y(I))):(C=C.j(S),C=C.add(y(I)))}return C}var R=p(0),D=p(1),x=p(16777216);r=f.prototype,r.m=function(){if(X(this))return-H(this).m();for(var N=0,w=1,S=0;S<this.g.length;S++){var C=this.i(S);N+=(0<=C?C:4294967296+C)*w,w*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(B(this))return"0";if(X(this))return"-"+H(this).toString(N);for(var w=y(Math.pow(N,6)),S=this,C="";;){var k=ue(S,w).g;S=Y(S,k.j(w));var P=((0<S.g.length?S.g[0]:S.h)>>>0).toString(N);if(S=k,B(S))return P+C;for(;6>P.length;)P="0"+P;C=P+C}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function B(N){if(N.h!=0)return!1;for(var w=0;w<N.g.length;w++)if(N.g[w]!=0)return!1;return!0}function X(N){return N.h==-1}r.l=function(N){return N=Y(this,N),X(N)?-1:B(N)?0:1};function H(N){for(var w=N.g.length,S=[],C=0;C<w;C++)S[C]=~N.g[C];return new f(S,~N.h).add(D)}r.abs=function(){return X(this)?H(this):this},r.add=function(N){for(var w=Math.max(this.g.length,N.g.length),S=[],C=0,k=0;k<=w;k++){var P=C+(this.i(k)&65535)+(N.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(N.i(k)>>>16);C=I>>>16,P&=65535,I&=65535,S[k]=I<<16|P}return new f(S,S[S.length-1]&-2147483648?-1:0)};function Y(N,w){return N.add(H(w))}r.j=function(N){if(B(this)||B(N))return R;if(X(this))return X(N)?H(this).j(H(N)):H(H(this).j(N));if(X(N))return H(this.j(H(N)));if(0>this.l(x)&&0>N.l(x))return y(this.m()*N.m());for(var w=this.g.length+N.g.length,S=[],C=0;C<2*w;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<N.g.length;k++){var P=this.i(C)>>>16,I=this.i(C)&65535,_t=N.i(k)>>>16,ft=N.i(k)&65535;S[2*C+2*k]+=I*ft,te(S,2*C+2*k),S[2*C+2*k+1]+=P*ft,te(S,2*C+2*k+1),S[2*C+2*k+1]+=I*_t,te(S,2*C+2*k+1),S[2*C+2*k+2]+=P*_t,te(S,2*C+2*k+2)}for(C=0;C<w;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=w;C<2*w;C++)S[C]=0;return new f(S,0)};function te(N,w){for(;(N[w]&65535)!=N[w];)N[w+1]+=N[w]>>>16,N[w]&=65535,w++}function W(N,w){this.g=N,this.h=w}function ue(N,w){if(B(w))throw Error("division by zero");if(B(N))return new W(R,R);if(X(N))return w=ue(H(N),w),new W(H(w.g),H(w.h));if(X(w))return w=ue(N,H(w)),new W(H(w.g),w.h);if(30<N.g.length){if(X(N)||X(w))throw Error("slowDivide_ only works with positive integers.");for(var S=D,C=w;0>=C.l(N);)S=oe(S),C=oe(C);var k=_e(S,1),P=_e(C,1);for(C=_e(C,2),S=_e(S,2);!B(C);){var I=P.add(C);0>=I.l(N)&&(k=k.add(S),P=I),C=_e(C,1),S=_e(S,1)}return w=Y(N,k.j(w)),new W(k,w)}for(k=R;0<=N.l(w);){for(S=Math.max(1,Math.floor(N.m()/w.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),P=y(S),I=P.j(w);X(I)||0<I.l(N);)S-=C,P=y(S),I=P.j(w);B(P)&&(P=D),k=k.add(P),N=Y(N,I)}return new W(k,N)}r.A=function(N){return ue(this,N).h},r.and=function(N){for(var w=Math.max(this.g.length,N.g.length),S=[],C=0;C<w;C++)S[C]=this.i(C)&N.i(C);return new f(S,this.h&N.h)},r.or=function(N){for(var w=Math.max(this.g.length,N.g.length),S=[],C=0;C<w;C++)S[C]=this.i(C)|N.i(C);return new f(S,this.h|N.h)},r.xor=function(N){for(var w=Math.max(this.g.length,N.g.length),S=[],C=0;C<w;C++)S[C]=this.i(C)^N.i(C);return new f(S,this.h^N.h)};function oe(N){for(var w=N.g.length+1,S=[],C=0;C<w;C++)S[C]=N.i(C)<<1|N.i(C-1)>>>31;return new f(S,N.h)}function _e(N,w){var S=w>>5;w%=32;for(var C=N.g.length-S,k=[],P=0;P<C;P++)k[P]=0<w?N.i(P+S)>>>w|N.i(P+S+1)<<32-w:N.i(P+S);return new f(k,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,yT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Yr=f}).apply(typeof $_<"u"?$_:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _T,El,vT,Rc,tm,ET,TT,AT;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in _))break e;_=_[U]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&e(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,U={next:function(){if(!A&&_<c.length){var j=_++;return{value:g(j,c[j]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function R(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function D(c,g,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:R,D.apply(null,arguments)}function x(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function B(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,U,j){for(var ee=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)ee[Me-2]=arguments[Me];return g.prototype[U].apply(A,ee)}}function X(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function H(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const U=c.length||0,j=A.length||0;c.length=U+j;for(let ee=0;ee<j;ee++)c[U+ee]=A[ee]}else c.push(A)}}class Y{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function te(c){return/^[\s\xa0]*$/.test(c)}function W(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function ue(c){return ue[" "](c),c}ue[" "]=function(){};var oe=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function _e(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function N(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function w(c){const g={};for(const _ in c)g[_]=c[_];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,g){let _,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(_ in A)c[_]=A[_];for(let j=0;j<S.length;j++)_=S[j],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function k(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function P(c){m.setTimeout(()=>{throw c},0)}function I(){var c=je;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class _t{constructor(){this.h=this.g=null}add(g,_){const A=ft.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var ft=new Y(()=>new ie,c=>c.reset());class ie{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,de=!1,je=new _t,O=()=>{const c=m.Promise.resolve(void 0);ge=()=>{c.then(J)}};var J=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){P(_)}var g=ft;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}de=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var se=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function be(c,g){if(re.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(oe){e:{try{ue(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Se[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}B(be,re);var Se={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),ze=0;function nt(c,g,_,A,U){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=U,this.key=++ze,this.da=this.fa=!1}function Ge(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Qt(c){this.src=c,this.g={},this.h=0}Qt.prototype.add=function(c,g,_,A,U){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var ee=yn(c,g,A,U);return-1<ee?(g=c[ee],_||(g.fa=!1)):(g=new nt(g,this.src,j,!!A,U),g.fa=_,c.push(g)),g};function Ei(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],U=Array.prototype.indexOf.call(A,g,void 0),j;(j=0<=U)&&Array.prototype.splice.call(A,U,1),j&&(Ge(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function yn(c,g,_,A){for(var U=0;U<c.length;++U){var j=c[U];if(!j.da&&j.listener==g&&j.capture==!!_&&j.ha==A)return U}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),ir={};function Ti(c,g,_,A,U){if(Array.isArray(g)){for(var j=0;j<g.length;j++)Ti(c,g[j],_,A,U);return null}return _=$l(_),c&&c[dt]?c.K(g,_,y(A)?!!A.capture:!1,U):co(c,g,_,!1,A,U)}function co(c,g,_,A,U,j){if(!g)throw Error("Invalid event type");var ee=y(U)?!!U.capture:!!U,Me=ho(c);if(Me||(c[nr]=Me=new Qt(c)),_=Me.add(g,_,A,ee,j),_.proxy)return _;if(A=Ys(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)se||(U=ee),U===void 0&&(U=!1),c.addEventListener(g.toString(),A,U);else if(c.attachEvent)c.attachEvent(Zs(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ys(){function c(_){return g.call(c.src,c.listener,_)}const g=Sh;return c}function Xs(c,g,_,A,U){if(Array.isArray(g))for(var j=0;j<g.length;j++)Xs(c,g[j],_,A,U);else A=y(A)?!!A.capture:!!A,_=$l(_),c&&c[dt]?(c=c.i,g=String(g).toString(),g in c.g&&(j=c.g[g],_=yn(j,_,A,U),-1<_&&(Ge(j[_]),Array.prototype.splice.call(j,_,1),j.length==0&&(delete c.g[g],c.h--)))):c&&(c=ho(c))&&(g=c.g[g.toString()],c=-1,g&&(c=yn(g,_,A,U)),(_=-1<c?g[c]:null)&&is(_))}function is(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[dt])Ei(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(Zs(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=ho(g))?(Ei(_,c),_.h==0&&(_.src=null,g[nr]=null)):Ge(c)}}}function Zs(c){return c in ir?ir[c]:ir[c]="on"+c}function Sh(c,g){if(c.da)c=!0;else{g=new be(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&is(c),c=_.call(A,g)}return c}function ho(c){return c=c[nr],c instanceof Qt?c:null}var tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function $l(c){return typeof c=="function"?c:(c[tn]||(c[tn]=function(g){return c.handleEvent(g)}),c[tn])}function vt(){he.call(this),this.i=new Qt(this),this.M=this,this.F=null}B(vt,he),vt.prototype[dt]=!0,vt.prototype.removeEventListener=function(c,g,_,A){Xs(this,c,g,_,A)};function Ct(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new re(g,c);else if(g instanceof re)g.target=g.target||c;else{var U=g;g=new re(A,c),C(g,U)}if(U=!0,_)for(var j=_.length-1;0<=j;j--){var ee=g.g=_[j];U=Ai(ee,A,!0,g)&&U}if(ee=g.g=c,U=Ai(ee,A,!0,g)&&U,U=Ai(ee,A,!1,g)&&U,_)for(j=0;j<_.length;j++)ee=g.g=_[j],U=Ai(ee,A,!1,g)&&U}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Ge(_[A]);delete c.g[g],c.h--}}this.F=null},vt.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},vt.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function Ai(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,j=0;j<g.length;++j){var ee=g[j];if(ee&&!ee.da&&ee.capture==_){var Me=ee.listener,Tt=ee.ha||ee.src;ee.fa&&Ei(c.i,ee),U=Me.call(Tt,A)!==!1&&U}}return U&&!A.defaultPrevented}function Ql(c,g,_){if(typeof c=="function")_&&(c=D(c,_));else if(c&&typeof c.handleEvent=="function")c=D(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function fo(c){c.g=Ql(()=>{c.g=null,c.i&&(c.i=!1,fo(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class wh extends he{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:fo(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(c){he.call(this),this.h=c,this.g={}}B(rs,he);var rr=[];function qt(c){_e(c.g,function(g,_){this.g.hasOwnProperty(_)&&is(g)},c),c.g={}}rs.prototype.N=function(){rs.aa.N.call(this),qt(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mo=m.JSON.stringify,Kn=m.JSON.parse,Yt=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function po(){}po.prototype.h=null;function Yl(c){return c.h||(c.h=c.i())}function Xl(){}var $n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){re.call(this,"d")}B(sr,re);function Un(){re.call(this,"c")}B(Un,re);var _n={},ar=null;function Ws(){return ar=ar||new vt}_n.La="serverreachability";function go(c){re.call(this,_n.La,c)}B(go,re);function or(c){const g=Ws();Ct(g,new go(g))}_n.STAT_EVENT="statevent";function Js(c,g){re.call(this,_n.STAT_EVENT,c),this.stat=g}B(Js,re);function lt(c){const g=Ws();Ct(g,new Js(g,c))}_n.Ma="timingevent";function Zl(c,g){re.call(this,_n.Ma,c),this.size=g}B(Zl,re);function lr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function Wl(c,g,_,A,U,j){c.info(function(){if(c.g)if(j)for(var ee="",Me=j.split("&"),Tt=0;Tt<Me.length;Tt++){var ke=Me[Tt].split("=");if(1<ke.length){var Ot=ke[0];ke=ke[1];var At=Ot.split("_");ee=2<=At.length&&At[1]=="type"?ee+(Ot+"="+ke+"&"):ee+(Ot+"=redacted&")}}else ee=null;else ee=j;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+g+`
`+_+`
`+ee})}function Jl(c,g,_,A,U,j,ee){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+g+`
`+_+`
`+j+" "+ee})}function cr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+It(c,_)+(A?" "+A:"")})}function Qn(c,g){c.info(function(){return"TIMEOUT: "+g})}ur.prototype.info=function(){};function It(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var j=U[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ee=1;ee<U.length;ee++)U[ee]=""}}}}return mo(_)}catch{return g}}var Et={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ss;function ea(){}B(ea,po),ea.prototype.g=function(){return new XMLHttpRequest},ea.prototype.i=function(){return{}},ss=new ea;function Yn(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yo}function yo(){this.i=null,this.g="",this.h=!1}var hr={},as={};function Pn(c,g,_){c.L=1,c.v=us(it(g)),c.m=_,c.P=!0,wi(c,null)}function wi(c,g){c.F=Date.now(),Ze(c),c.A=it(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),Ci(_.i,"t",A),c.C=0,_=c.j.J,c.h=new yo,c.g=du(c.j,_?g:null,!c.m),0<c.O&&(c.M=new wh(D(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(rr[0]=U.toString()),U=rr);for(var j=0;j<U.length;j++){var ee=Ti(_,U[j],A||g.handleEvent,!1,g.h||g);if(!ee)break;g.g[ee.key]=ee}g=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),or(),Wl(c.i,c.u,c.A,c.l,c.R,c.m)}Yn.prototype.ca=function(c){c=c.target;const g=this.M;g&&Sn(c)==3?g.j():this.Y(c)},Yn.prototype.Y=function(c){try{if(c==this.g)e:{const At=Sn(this.g);var g=this.g.Ba();const Ni=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||su(this.g)))){this.J||At!=4||g==7||(g==8||0>=Ni?or(3):or(2)),ta(this);var _=this.g.Z();this.X=_;t:if(fr(this)){var A=su(this.g);c="";var U=A.length,j=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),un(this);var ee="";break t}this.h.i=new m.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(j&&g==U-1)});A.length=0,this.h.g+=c,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=_==200,Jl(this.i,this.u,this.A,this.l,this.R,At,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,Tt=this.g;if((Me=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Me)){var ke=Me;break t}}ke=null}if(_=ke)cr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cn(this,_);else{this.o=!1,this.s=3,lt(12),nn(this),un(this);break e}}if(this.P){_=!0;let xt;for(;!this.J&&this.C<ee.length;)if(xt=dr(this,ee),xt==as){At==4&&(this.s=4,lt(14),_=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==hr){this.s=4,lt(15),cr(this.i,this.l,ee,"[Invalid Chunk]"),_=!1;break}else cr(this.i,this.l,xt,null),cn(this,xt);if(fr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||ee.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)cr(this.i,this.l,ee,"[Invalid Chunked Response]"),nn(this),un(this);else if(0<ee.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),gs(Ot),Ot.M=!0,lt(11))}}else cr(this.i,this.l,ee,null),cn(this,ee);At==4&&nn(this),this.o&&!this.J&&(At==4?cu(this.j,this):(this.o=!1,Ze(this)))}else Oh(this.g),_==400&&0<ee.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),nn(this),un(this)}}}catch{}finally{}};function fr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function dr(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?as:(_=Number(g.substring(_,A)),isNaN(_)?hr:(A+=1,A+_>g.length?as:(g=g.slice(A,A+_),c.C=A+_,g)))}Yn.prototype.cancel=function(){this.J=!0,nn(this)};function Ze(c){c.S=Date.now()+c.I,_o(c,c.I)}function _o(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=lr(D(c.ba,c),g)}function ta(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Yn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Qn(this.i,this.A),this.L!=2&&(or(),lt(17)),nn(this),this.s=2,un(this)):_o(this,this.S-c)};function un(c){c.j.G==0||c.J||cu(c.j,c)}function nn(c){ta(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,qt(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function cn(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||mr(_.h,c))){if(!c.K&&mr(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ha(_),ua(_);else break e;Do(_),lt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=lr(D(_.Za,_),6e3));if(1>=eu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Oi(_,11)}else if((c.K||_.g==c)&&ha(_),!te(g))for(U=_.Da.g.parse(g),g=0;g<U.length;g++){let ke=U[g];if(_.T=ke[0],ke=ke[1],_.G==2)if(ke[0]=="c"){_.K=ke[1],_.ia=ke[2];const Ot=ke[3];Ot!=null&&(_.la=Ot,_.j.info("VER="+_.la));const At=ke[4];At!=null&&(_.Aa=At,_.j.info("SVER="+_.Aa));const Ni=ke[5];Ni!=null&&typeof Ni=="number"&&0<Ni&&(A=1.5*Ni,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const xt=c.g;if(xt){const ni=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var j=A.h;j.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(pr(j,j.h),j.h=null))}if(A.D){const No=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;No&&(A.ya=No,Be(A.I,A.D,No))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ee=c;if(A.qa=fu(A,A.J?A.ia:null,A.W),ee.K){vn(A.h,ee);var Me=ee,Tt=A.L;Tt&&(Me.I=Tt),Me.B&&(ta(Me),Ze(Me)),A.g=ee}else lu(A);0<_.i.length&&ca(_)}else ke[0]!="stop"&&ke[0]!="close"||Oi(_,7);else _.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Oi(_,7):Co(_):ke[0]!="noop"&&_.l&&_.l.ta(ke),_.v=0)}}or(4)}catch{}}var bh=class{constructor(c,g){this.g=c,this.map=g}};function vo(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function eu(c){return c.h?1:c.g?c.g.size:0}function mr(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function pr(c,g){c.g?c.g.add(g):c.h=g}function vn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}vo.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Xt(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return X(c.i)}function tu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function Rh(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function os(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=Rh(c),A=tu(c),U=A.length,j=0;j<U;j++)g.call(void 0,A[j],_&&_[j],c)}var To=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function na(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),U=null;if(0<=A){var j=c[_].substring(0,A);U=c[_].substring(A+1)}else j=c[_];g(j,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function bi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof bi){this.h=c.h,gr(this,c.j),this.o=c.o,this.g=c.g,ls(this,c.s),this.l=c.l;var g=c.i,_=new Xn;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),ia(this,_),this.m=c.m}else c&&(g=String(c).match(To))?(this.h=!1,gr(this,g[1]||"",!0),this.o=yr(g[2]||""),this.g=yr(g[3]||"",!0),ls(this,g[4]),this.l=yr(g[5]||"",!0),ia(this,g[6]||"",!0),this.m=yr(g[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}bi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(En(g,Ao,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(En(g,Ao,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(En(_,_.charAt(0)=="/"?So:nu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",En(_,Dh)),c.join("")};function it(c){return new bi(c)}function gr(c,g,_){c.j=_?yr(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ls(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function ia(c,g,_){g instanceof Xn?(c.i=g,wo(c.i,c.h)):(_||(g=En(g,Ih)),c.i=new Xn(g,c.h))}function Be(c,g,_){c.i.set(g,_)}function us(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function yr(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function En(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,Ch),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ch(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ao=/[#\/\?@]/g,nu=/[#\?:]/g,So=/[#\?]/g,Ih=/[#\?@]/g,Dh=/#/g;function Xn(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Tn(c){c.g||(c.g=new Map,c.h=0,c.i&&na(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=Xn.prototype,r.add=function(c,g){Tn(this),this.i=null,c=Ii(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function ra(c,g){Tn(c),g=Ii(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ri(c,g){return Tn(c),g=Ii(c,g),c.g.has(g)}r.forEach=function(c,g){Tn(this),this.g.forEach(function(_,A){_.forEach(function(U){c.call(g,U,A,this)},this)},this)},r.na=function(){Tn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const U=c[A];for(let j=0;j<U.length;j++)_.push(g[A])}return _},r.V=function(c){Tn(this);let g=[];if(typeof c=="string")Ri(this,c)&&(g=g.concat(this.g.get(Ii(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return Tn(this),this.i=null,c=Ii(this,c),Ri(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ci(c,g,_){ra(c,g),0<_.length&&(c.i=null,c.g.set(Ii(c,g),X(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const j=encodeURIComponent(String(A)),ee=this.V(A);for(A=0;A<ee.length;A++){var U=j;ee[A]!==""&&(U+="="+encodeURIComponent(String(ee[A]))),c.push(U)}}return this.i=c.join("&")};function Ii(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function wo(c,g){g&&!c.j&&(Tn(c),c.i=null,c.g.forEach(function(_,A){var U=A.toLowerCase();A!=U&&(ra(this,A),Ci(this,U,_))},c)),c.j=g}function iu(c,g){const _=new ur;if(m.Image){const A=new Image;A.onload=x(An,_,"TestLoadImage: loaded",!0,g,A),A.onerror=x(An,_,"TestLoadImage: error",!1,g,A),A.onabort=x(An,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=x(An,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function cs(c,g){const _=new ur,A=new AbortController,U=setTimeout(()=>{A.abort(),An(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(U),j.ok?An(_,"TestPingServer: ok",!0,g):An(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),An(_,"TestPingServer: error",!1,g)})}function An(c,g,_,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(_)}catch{}}function hs(){this.g=new Yt}function Zn(c,g,_){const A=_||"";try{os(c,function(U,j){let ee=U;y(U)&&(ee=mo(U)),g.push(A+j+"="+encodeURIComponent(ee))})}catch(U){throw g.push(A+"type="+encodeURIComponent("_badmap")),U}}function _r(c){this.l=c.Ub||null,this.j=c.eb||!1}B(_r,po),_r.prototype.g=function(){return new Di(this.l,this.j)},_r.prototype.i=function(c){return function(){return c}}({});function Di(c,g){vt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Di,vt),r=Di.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Jn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function bo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Wn(this):Jn(this),this.readyState==3&&bo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Wn(this))},r.Qa=function(c){this.g&&(this.response=c,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Jn(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function Jn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ro(c){let g="";return _e(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Dt(c,g,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=Ro(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Be(c,g,_))}function Fe(c){vt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Fe,vt);var sa=/^https?$/i,fs=["POST","PUT"];r=Fe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ss.g(),this.v=this.o?Yl(this.o):Yl(ss),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(j){ru(this,j);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)_.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())_.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(fs,g,void 0))||A||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of _)this.g.setRequestHeader(j,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ds(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){ru(this,j)}};function ru(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,aa(c),ei(c)}function aa(c){c.A||(c.A=!0,Ct(c,"complete"),Ct(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ct(this,"complete"),Ct(this,"abort"),ei(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ei(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?oa(this):this.bb())},r.bb=function(){oa(this)};function oa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)Ql(c.Ea,0,c);else if(Ct(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const ee=c.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var A;if(A=ee===0){var U=String(c.D).match(To)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),A=!sa.test(U?U.toLowerCase():"")}_=A}if(_)Ct(c,"complete"),Ct(c,"success");else{c.m=6;try{var j=2<Sn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",aa(c)}}finally{ei(c)}}}}function ei(c,g){if(c.g){ds(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ct(c,"ready");try{_.onreadystatechange=A}catch{}}}function ds(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Kn(g)}};function su(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Oh(c){const g={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(te(c[A]))continue;var _=k(c[A]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=g[U]||[];g[U]=j,j.push(_)}N(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function la(c){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,c),this.cb=ms("retryDelaySeedMs",1e4,c),this.Wa=ms("forwardChannelMaxRetries",2,c),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new vo(c&&c.concurrentRequestLimit),this.Da=new hs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=la.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){lt(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=fu(this,null,this.W),ca(this)};function Co(c){if(au(c),c.G==3){var g=c.U++,_=it(c.I);if(Be(_,"SID",c.K),Be(_,"RID",g),Be(_,"TYPE","terminate"),ps(c,_),g=new Yn(c,c.j,g),g.L=2,g.v=us(it(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=du(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Ze(g)}hu(c)}function ua(c){c.g&&(gs(c),c.g.cancel(),c.g=null)}function au(c){ua(c),c.u&&(m.clearTimeout(c.u),c.u=null),ha(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ca(c){if(!Eo(c.h)&&!c.s){c.s=!0;var g=c.Ga;ge||O(),de||(ge(),de=!0),je.add(g,c),c.B=0}}function Nh(c,g){return eu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=lr(D(c.Ga,c,g),Oo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Yn(this,this.j,c);let j=this.o;if(this.S&&(j?(j=w(j),C(j,this.S)):j=this.S),this.m!==null||this.O||(U.H=j,j=null),this.P)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=ou(this,U,g),_=it(this.I),Be(_,"RID",c),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),ps(this,_),j&&(this.O?g="headers="+encodeURIComponent(String(Ro(j)))+"&"+g:this.m&&Dt(_,this.m,j)),pr(this.h,U),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",g),Be(_,"SID","null"),U.T=!0,Pn(U,_,null)):Pn(U,_,g),this.G=2}}else this.G==3&&(c?Io(this,c):this.i.length==0||Eo(this.h)||Io(this))};function Io(c,g){var _;g?_=g.l:_=c.U++;const A=it(c.I);Be(A,"SID",c.K),Be(A,"RID",_),Be(A,"AID",c.T),ps(c,A),c.m&&c.o&&Dt(A,c.m,c.o),_=new Yn(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=ou(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),pr(c.h,_),Pn(_,A,g)}function ps(c,g){c.H&&_e(c.H,function(_,A){Be(g,A,_)}),c.l&&os({},function(_,A){Be(g,A,_)})}function ou(c,g,_){_=Math.min(c.i.length,_);var A=c.l?D(c.l.Na,c.l,c):null;e:{var U=c.i;let j=-1;for(;;){const ee=["count="+_];j==-1?0<_?(j=U[0].g,ee.push("ofs="+j)):j=0:ee.push("ofs="+j);let Me=!0;for(let Tt=0;Tt<_;Tt++){let ke=U[Tt].g;const Ot=U[Tt].map;if(ke-=j,0>ke)j=Math.max(0,U[Tt].g-100),Me=!1;else try{Zn(Ot,ee,"req"+ke+"_")}catch{A&&A(Ot)}}if(Me){A=ee.join("&");break e}}}return c=c.i.splice(0,_),g.D=c,A}function lu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;ge||O(),de||(ge(),de=!0),je.add(g,c),c.v=0}}function Do(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=lr(D(c.Fa,c),Oo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,uu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=lr(D(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),ua(this),uu(this))};function gs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function uu(c){c.g=new Yn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=it(c.qa);Be(g,"RID","rpc"),Be(g,"SID",c.K),Be(g,"AID",c.T),Be(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(g,"TO",c.ja),Be(g,"TYPE","xmlhttp"),ps(c,g),c.m&&c.o&&Dt(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=us(it(g)),_.m=null,_.P=!0,wi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ua(this),Do(this),lt(19))};function ha(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function cu(c,g){var _=null;if(c.g==g){ha(c),gs(c),c.g=null;var A=2}else if(mr(c.h,g))_=g.D,vn(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;A=Ws(),Ct(A,new Zl(A,_)),ca(c)}else lu(c);else if(U=g.s,U==3||U==0&&0<g.X||!(A==1&&Nh(c,g)||A==2&&Do(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),U){case 1:Oi(c,5);break;case 4:Oi(c,10);break;case 3:Oi(c,6);break;default:Oi(c,2)}}}function Oo(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Oi(c,g){if(c.j.info("Error code "+g),g==2){var _=D(c.fb,c),A=c.Xa;const U=!A;A=new bi(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||gr(A,"https"),us(A),U?iu(A.toString(),_):cs(A.toString(),_)}else lt(2);c.G=0,c.l&&c.l.sa(g),hu(c),au(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function hu(c){if(c.G=0,c.ka=[],c.l){const g=Xt(c.h);(g.length!=0||c.i.length!=0)&&(H(c.ka,g),H(c.ka,c.i),c.h.i.length=0,X(c.i),c.i.length=0),c.l.ra()}}function fu(c,g,_){var A=_ instanceof bi?it(_):new bi(_);if(A.g!="")g&&(A.g=g+"."+A.g),ls(A,A.s);else{var U=m.location;A=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var j=new bi(null);A&&gr(j,A),g&&(j.g=g),U&&ls(j,U),_&&(j.l=_),A=j}return _=c.D,g=c.ya,_&&g&&Be(A,_,g),Be(A,"VER",c.la),ps(c,A),A}function du(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Fe(new _r({eb:_})):new Fe(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function mu(){}r=mu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function fa(){}fa.prototype.g=function(c,g){return new Zt(c,g)};function Zt(c,g){vt.call(this),this.g=new la(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!te(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!te(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ti(this)}B(Zt,vt),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){Co(this.g)},Zt.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=mo(c),c=_);g.i.push(new bh(g.Ya++,c)),g.G==3&&ca(g)},Zt.prototype.N=function(){this.g.l=null,delete this.j,Co(this.g),delete this.g,Zt.aa.N.call(this)};function pu(c){sr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const _ in g){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}B(pu,sr);function gu(){Un.call(this),this.status=1}B(gu,Un);function ti(c){this.g=c}B(ti,mu),ti.prototype.ua=function(){Ct(this.g,"a")},ti.prototype.ta=function(c){Ct(this.g,new pu(c))},ti.prototype.sa=function(c){Ct(this.g,new gu)},ti.prototype.ra=function(){Ct(this.g,"b")},fa.prototype.createWebChannel=fa.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,AT=function(){return new fa},TT=function(){return Ws()},ET=_n,tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Et.NO_ERROR=0,Et.TIMEOUT=8,Et.HTTP_ERROR=6,Rc=Et,Si.COMPLETE="complete",vT=Si,Xl.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",vt.prototype.listen=vt.prototype.K,El=Xl,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,_T=Fe}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const Q_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new rh("@firebase/firestore");function za(){return js.logLevel}function ae(r,...e){if(js.logLevel<=De.DEBUG){const n=e.map(xm);js.debug(`Firestore (${so}): ${r}`,...n)}}function Wi(r,...e){if(js.logLevel<=De.ERROR){const n=e.map(xm);js.error(`Firestore (${so}): ${r}`,...n)}}function Xa(r,...e){if(js.logLevel<=De.WARN){const n=e.map(xm);js.warn(`Firestore (${so}): ${r}`,...n)}}function xm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(r="Unexpected state"){const e=`FIRESTORE (${so}) INTERNAL ASSERTION FAILED: `+r;throw Wi(e),new Error(e)}function tt(r,e){r||Ae()}function Ue(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Gt.UNAUTHENTICATED))}shutdown(){}}class pC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gC{constructor(e){this.t=e,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){tt(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Ps;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ps,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ps)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string"),new ST(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string"),new Gt(e)}}class yC{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _C{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new yC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){tt(this.o===void 0);const s=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(tt(typeof n.token=="string"),this.R=n.token,new vC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=TC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%e.length))}return s}}function Le(r,e){return r<e?-1:r>e?1:0}function Za(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{static now(){return ln.fromMillis(Date.now())}static fromDate(e){return ln.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ln(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new pe(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new pe(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new pe(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new ln(0,0))}static max(){return new Te(new ln(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ae(),s===void 0?s=e.length-n:s>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=li.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=li.isNumericId(e),o=li.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?li.extractNumericId(e).compare(li.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class ot extends li{construct(e,n,s){return new ot(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new pe(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const SC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends li{construct(e,n,s){return new en(e,n,s)}static isValidIdentifier(e){return SC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new en(["__name__"])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new pe(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new pe(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pe(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new pe(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(n)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(ot.fromString(e))}static fromName(e){return new ye(ot.fromString(e).popFirst(5))}static empty(){return new ye(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ot.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new ot(e.slice()))}}function wC(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new ln(n+1,0):new ln(n,s));return new Zr(o,ye.empty(),e)}function bC(r){return new Zr(r.readTime,r.key,-1)}class Zr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Zr(Te.min(),ye.empty(),-1)}static max(){return new Zr(Te.max(),ye.empty(),-1)}}function RC(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(r.documentKey,e.documentKey),n!==0?n:Le(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(r){if(r.code!==ne.FAILED_PRECONDITION||r.message!==CC)throw r;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.reject(n)}static resolve(e){return new Q((n,s)=>{n(e)})}static reject(e){return new Q((n,s)=>{s(e)})}static waitFor(e){return new Q((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(e){let n=Q.resolve(!1);for(const s of e)n=n.next(o=>o?Q.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new Q((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(e[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new Q((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function DC(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}uh.oe=-1;function ch(r){return r==null}function nm(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Y_(e)),e=NC(r.get(n),e);return Y_(e)}function NC(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case"":n+="";break;default:n+=u}}return n}function Y_(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function Bl(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function MC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.comparator=e,this.root=n||zt.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yc(this.root,e,this.comparator,!0)}}class yc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??zt.RED,this.left=o??zt.EMPTY,this.right=u??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new zt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return zt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(e,n,s,o,u){return this}insert(e,n,s){return new zt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Z_(this.data.getIterator())}getIteratorFrom(e){return new Z_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class Z_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new Gr([])}unionWith(e){let n=new Rt(en.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Gr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Za(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new wT("Invalid base64 string: "+u):u}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const kC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(r){if(tt(!!r),typeof r=="string"){let e=0;const n=kC.exec(r);if(tt(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(r.seconds),nanos:ct(r.nanos)}}function ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Jr(r){return typeof r=="string"?Bt.fromBase64String(r):Bt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hh(r){const e=r.mapValue.fields.__previous_value__;return Lm(e)?hh(e):e}function Ml(r){const e=Wr(r.mapValue.fields.__local_write_time__.timestampValue);return new ln(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,s,o,u,f,m,p,y){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}class kl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={mapValue:{}};function es(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Lm(r)?4:LC(r)?9007199254740991:xC(r)?10:11:Ae()}function mi(r,e){if(r===e)return!0;const n=es(r);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ml(r).isEqual(Ml(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Wr(o.timestampValue),m=Wr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Jr(o.bytesValue).isEqual(Jr(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return ct(o.geoPointValue.latitude)===ct(u.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ct(o.integerValue)===ct(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=ct(o.doubleValue),m=ct(u.doubleValue);return f===m?nm(f)===nm(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return Za(r.arrayValue.values||[],e.arrayValue.values||[],mi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(X_(f)!==X_(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!mi(f[p],m[p])))return!1;return!0}(r,e);default:return Ae()}}function Vl(r,e){return(r.values||[]).find(n=>mi(n,e))!==void 0}function Wa(r,e){if(r===e)return 0;const n=es(r),s=es(e);if(n!==s)return Le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=ct(u.integerValue||u.doubleValue),p=ct(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,e);case 3:return W_(r.timestampValue,e.timestampValue);case 4:return W_(Ml(r),Ml(e));case 5:return Le(r.stringValue,e.stringValue);case 6:return function(u,f){const m=Jr(u),p=Jr(f);return m.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Le(m[y],p[y]);if(E!==0)return E}return Le(m.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Le(ct(u.latitude),ct(f.latitude));return m!==0?m:Le(ct(u.longitude),ct(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return J_(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,y,E;const R=u.fields||{},D=f.fields||{},x=(m=R.value)===null||m===void 0?void 0:m.arrayValue,B=(p=D.value)===null||p===void 0?void 0:p.arrayValue,X=Le(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((E=B==null?void 0:B.values)===null||E===void 0?void 0:E.length)||0);return X!==0?X:J_(x,B)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===_c.mapValue&&f===_c.mapValue)return 0;if(u===_c.mapValue)return 1;if(f===_c.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let R=0;R<p.length&&R<E.length;++R){const D=Le(p[R],E[R]);if(D!==0)return D;const x=Wa(m[p[R]],y[E[R]]);if(x!==0)return x}return Le(p.length,E.length)}(r.mapValue,e.mapValue);default:throw Ae()}}function W_(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Le(r,e);const n=Wr(r),s=Wr(e),o=Le(n.seconds,s.seconds);return o!==0?o:Le(n.nanos,s.nanos)}function J_(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Wa(n[o],s[o]);if(u)return u}return Le(n.length,s.length)}function Ja(r){return im(r)}function im(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Wr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Jr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ye.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=im(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${im(n.fields[f])}`;return o+"}"}(r.mapValue):Ae()}function Cc(r){switch(es(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hh(r);return e?16+Cc(e):16;case 5:return 2*r.stringValue.length;case 6:return Jr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Cc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Bl(s.fields,(u,f)=>{o+=u.length+Cc(f)}),o}(r.mapValue);default:throw Ae()}}function rm(r){return!!r&&"integerValue"in r}function Um(r){return!!r&&"arrayValue"in r}function ev(r){return!!r&&"nullValue"in r}function tv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zd(r){return!!r&&"mapValue"in r}function xC(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function wl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Bl(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=wl(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wl(r.arrayValue.values[n]);return e}return Object.assign({},r)}function LC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.value=e}static empty(){return new ui({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wl(n)}setAll(e){let n=en.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=wl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());zd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];zd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){Bl(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new ui(wl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Kt(e,0,Te.min(),Te.min(),Te.min(),ui.empty(),0)}static newFoundDocument(e,n,s,o){return new Kt(e,1,n,Te.min(),s,o,0)}static newNoDocument(e,n){return new Kt(e,2,n,Te.min(),Te.min(),ui.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,Te.min(),Te.min(),ui.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ui.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ui.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.position=e,this.inclusive=n}}function nv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=ye.comparator(ye.fromName(f.referenceValue),n.key):s=Wa(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function iv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!mi(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n="asc"){this.field=e,this.dir=n}}function UC(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{}class bt extends bT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new zC(e,n,s):n==="array-contains"?new HC(e,s):n==="in"?new jC(e,s):n==="not-in"?new FC(e,s):n==="array-contains-any"?new GC(e,s):new bt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new BC(e,s):new qC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wa(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(Wa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pi extends bT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pi(e,n)}matches(e){return RT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function RT(r){return r.op==="and"}function CT(r){return PC(r)&&RT(r)}function PC(r){for(const e of r.filters)if(e instanceof pi)return!1;return!0}function sm(r){if(r instanceof bt)return r.field.canonicalString()+r.op.toString()+Ja(r.value);if(CT(r))return r.filters.map(e=>sm(e)).join(",");{const e=r.filters.map(n=>sm(n)).join(",");return`${r.op}(${e})`}}function IT(r,e){return r instanceof bt?function(s,o){return o instanceof bt&&s.op===o.op&&s.field.isEqual(o.field)&&mi(s.value,o.value)}(r,e):r instanceof pi?function(s,o){return o instanceof pi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&IT(f,o.filters[m]),!0):!1}(r,e):void Ae()}function DT(r){return r instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ja(n.value)}`}(r):r instanceof pi?function(n){return n.op.toString()+" {"+n.getFilters().map(DT).join(" ,")+"}"}(r):"Filter"}class zC extends bt{constructor(e,n,s){super(e,n,s),this.key=ye.fromName(s.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class BC extends bt{constructor(e,n){super(e,"in",n),this.keys=OT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qC extends bt{constructor(e,n){super(e,"not-in",n),this.keys=OT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OT(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ye.fromName(s.referenceValue))}class HC extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Um(n)&&Vl(n.arrayValue,this.value)}}class jC extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vl(this.value.arrayValue,n)}}class FC extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vl(this.value.arrayValue,n)}}class GC extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Um(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.ue=null}}function rv(r,e=null,n=[],s=[],o=null,u=null,f=null){return new KC(r,e,n,s,o,u,f)}function Pm(r){const e=Ue(r);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>sm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ja(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ja(s)).join(",")),e.ue=n}return e.ue}function zm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!UC(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!IT(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!iv(r.startAt,e.startAt)&&iv(r.endAt,e.endAt)}function am(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $C(r,e,n,s,o,u,f,m){return new fh(r,e,n,s,o,u,f,m)}function NT(r){return new fh(r)}function sv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function QC(r){return r.collectionGroup!==null}function bl(r){const e=Ue(r);if(e.ce===null){e.ce=[];const n=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Rt(en.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Hc(u,s))}),n.has(en.keyField().canonicalString())||e.ce.push(new Hc(en.keyField(),s))}return e.ce}function ci(r){const e=Ue(r);return e.le||(e.le=YC(e,bl(r))),e.le}function YC(r,e){if(r.limitType==="F")return rv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Hc(o.field,u)});const n=r.endAt?new qc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new qc(r.startAt.position,r.startAt.inclusive):null;return rv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function om(r,e,n){return new fh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function dh(r,e){return zm(ci(r),ci(e))&&r.limitType===e.limitType}function MT(r){return`${Pm(ci(r))}|lt:${r.limitType}`}function Ba(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>DT(o)).join(", ")}]`),ch(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Ja(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Ja(o)).join(",")),`Target(${s})`}(ci(r))}; limitType=${r.limitType})`}function mh(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ye.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of bl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=nv(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,bl(s),o)||s.endAt&&!function(f,m,p){const y=nv(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,bl(s),o))}(r,e)}function XC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function kT(r){return(e,n)=>{let s=!1;for(const o of bl(r)){const u=ZC(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function ZC(r,e,n){const s=r.field.isKeyField()?ye.comparator(e.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?Wa(p,y):Ae()}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Bl(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return MC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new ht(ye.comparator);function ts(){return WC}const VT=new ht(ye.comparator);function Tl(...r){let e=VT;for(const n of r)e=e.insert(n.key,n);return e}function JC(r){let e=VT;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Us(){return Rl()}function xT(){return Rl()}function Rl(){return new Qs(r=>r.toString(),(r,e)=>r.isEqual(e))}const eI=new Rt(ye.comparator);function Pe(...r){let e=eI;for(const n of r)e=e.add(n);return e}const tI=new Rt(Le);function nI(){return tI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nm(e)?"-0":e}}function rI(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this._=void 0}}function sI(r,e,n){return r instanceof lm?function(o,u){const f={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Lm(u)&&(u=hh(u)),u&&(f.fields.__previous_value__=u),{mapValue:f}}(n,e):r instanceof jc?LT(r,e):r instanceof Fc?UT(r,e):function(o,u){const f=oI(o,u),m=av(f)+av(o.Pe);return rm(f)&&rm(o.Pe)?rI(m):iI(o.serializer,m)}(r,e)}function aI(r,e,n){return r instanceof jc?LT(r,e):r instanceof Fc?UT(r,e):n}function oI(r,e){return r instanceof um?function(s){return rm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class lm extends ph{}class jc extends ph{constructor(e){super(),this.elements=e}}function LT(r,e){const n=PT(e);for(const s of r.elements)n.some(o=>mi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Fc extends ph{constructor(e){super(),this.elements=e}}function UT(r,e){let n=PT(e);for(const s of r.elements)n=n.filter(o=>!mi(o,s));return{arrayValue:{values:n}}}class um extends ph{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function av(r){return ct(r.integerValue||r.doubleValue)}function PT(r){return Um(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function lI(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof jc&&o instanceof jc||s instanceof Fc&&o instanceof Fc?Za(s.elements,o.elements,mi):s instanceof um&&o instanceof um?mi(s.Pe,o.Pe):s instanceof lm&&o instanceof lm}(r.transform,e.transform)}class zs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zs}static exists(e){return new zs(void 0,e)}static updateTime(e){return new zs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ic(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Bm{}function zT(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new cI(r.key,zs.none()):new qm(r.key,r.data,zs.none());{const n=r.data,s=ui.empty();let o=new Rt(en.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new gh(r.key,s,new Gr(o.toArray()),zs.none())}}function uI(r,e,n){r instanceof qm?function(o,u,f){const m=o.value.clone(),p=lv(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof gh?function(o,u,f){if(!Ic(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=lv(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(BT(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function Cl(r,e,n,s){return r instanceof qm?function(u,f,m,p){if(!Ic(u.precondition,f))return m;const y=u.value.clone(),E=uv(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,n,s):r instanceof gh?function(u,f,m,p){if(!Ic(u.precondition,f))return m;const y=uv(u.fieldTransforms,p,f),E=f.data;return E.setAll(BT(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(r,e,n,s):function(u,f,m){return Ic(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function ov(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Za(s,o,(u,f)=>lI(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class qm extends Bm{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gh extends Bm{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function BT(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function lv(r,e,n){const s=new Map;tt(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,aI(f,m,n[o]))}return s}function uv(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,sI(u,f,e))}return s}class cI extends Bm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&uI(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Cl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Cl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=xT();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=zT(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Za(this.mutations,e.mutations,(n,s)=>ov(n,s))&&Za(this.baseMutations,e.baseMutations,(n,s)=>ov(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,xe;function qT(r){if(r===void 0)return Wi("GRPC error has no .code"),ne.UNKNOWN;switch(r){case yt.OK:return ne.OK;case yt.CANCELLED:return ne.CANCELLED;case yt.UNKNOWN:return ne.UNKNOWN;case yt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case yt.INTERNAL:return ne.INTERNAL;case yt.UNAVAILABLE:return ne.UNAVAILABLE;case yt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case yt.NOT_FOUND:return ne.NOT_FOUND;case yt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case yt.ABORTED:return ne.ABORTED;case yt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case yt.DATA_LOSS:return ne.DATA_LOSS;default:return Ae()}}(xe=yt||(yt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new Yr([4294967295,4294967295],0);function cv(r){const e=mI().encode(r),n=new yT;return n.update(e),new Uint8Array(n.digest())}function hv(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Yr([n,s],0),new Yr([o,u],0)]}class Hm{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Al(`Invalid padding: ${n}`);if(s<0)throw new Al(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Al(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Al(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Yr.fromNumber(this.Te)}de(e,n,s){let o=e.add(n.multiply(Yr.fromNumber(s)));return o.compare(pI)===1&&(o=new Yr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=cv(e),[s,o]=hv(n);for(let u=0;u<this.hashCount;u++){const f=this.de(s,o,u);if(!this.Ee(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Hm(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.Te===0)return;const n=cv(e),[s,o]=hv(n);for(let u=0;u<this.hashCount;u++){const f=this.de(s,o,u);this.Ae(f)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new yh(Te.min(),o,new ht(Le),ts(),Pe())}}class ql{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ql(s,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,s,o){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=o}}class HT{constructor(e,n){this.targetId=e,this.me=n}}class jT{constructor(e,n,s=Bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class fv{constructor(){this.fe=0,this.ge=dv(),this.pe=Bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),n=Pe(),s=Pe();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ae()}}),new ql(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=dv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gI{constructor(e){this.Be=e,this.Le=new Map,this.ke=ts(),this.qe=vc(),this.Qe=vc(),this.Ke=new ht(Le)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:Ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((s,o)=>{this.je(o)&&n(o)})}Je(e){const n=e.targetId,s=e.me.count,o=this.Ye(n);if(o){const u=o.target;if(am(u))if(s===0){const f=new ye(u.path);this.We(n,f,Kt.newNoDocument(f,Te.min()))}else tt(s===1);else{const f=this.Ze(n);if(f!==s){const m=this.Xe(e),p=m?this.et(m,e,f):1;if(p!==0){this.He(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,y)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Jr(s).toUint8Array()}catch(p){if(p instanceof wT)return Xa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Hm(f,o,u)}catch(p){return Xa(p instanceof Al?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Te===0?null:m}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Be.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.Be.nt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(n,u,null),o++)}),o}it(e){const n=new Map;this.Le.forEach((u,f)=>{const m=this.Ye(f);if(m){if(u.current&&am(m.target)){const p=new ye(m.target.path);this.st(p).has(f)||this.ot(f,p)||this.We(f,p,Kt.newNoDocument(p,e))}u.be&&(n.set(f,u.ve()),u.Ce())}});let s=Pe();this.Qe.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,f)=>f.setReadTime(e));const o=new yh(e,n,this.Ke,this.ke,s);return this.ke=ts(),this.qe=vc(),this.Qe=vc(),this.Ke=new ht(Le),o}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,n)?o.Fe(n,1):o.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new fv,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Rt(Le),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Rt(Le),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new fv),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function vc(){return new ht(ye.comparator)}function dv(){return new ht(ye.comparator)}const yI={asc:"ASCENDING",desc:"DESCENDING"},_I={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vI={and:"AND",or:"OR"};class EI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cm(r,e){return r.useProto3Json||ch(e)?e:{value:e}}function TI(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function AI(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Fa(r){return tt(!!r),Te.fromTimestamp(function(n){const s=Wr(n);return new ln(s.seconds,s.nanos)}(r))}function SI(r,e){return hm(r,e).canonicalString()}function hm(r,e){const n=function(o){return new ot(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function FT(r){const e=ot.fromString(r);return tt(YT(e)),e}function Bd(r,e){const n=FT(e);if(n.get(1)!==r.databaseId.projectId)throw new pe(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new pe(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ye(KT(n))}function GT(r,e){return SI(r.databaseId,e)}function wI(r){const e=FT(r);return e.length===4?ot.emptyPath():KT(e)}function mv(r){return new ot(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function KT(r){return tt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function bI(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(tt(E===void 0||typeof E=="string"),Bt.fromBase64String(E||"")):(tt(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Bt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const E=y.code===void 0?ne.UNKNOWN:qT(y.code);return new pe(E,y.message||"")}(f);n=new jT(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Bd(r,s.document.name),u=Fa(s.document.updateTime),f=s.document.createTime?Fa(s.document.createTime):Te.min(),m=new ui({mapValue:{fields:s.document.fields}}),p=Kt.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Dc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Bd(r,s.document),u=s.readTime?Fa(s.readTime):Te.min(),f=Kt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Dc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Bd(r,s.document),u=s.removedTargetIds||[];n=new Dc([],u,o,null)}else{if(!("filter"in e))return Ae();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new dI(o,u),m=s.targetId;n=new HT(m,f)}}return n}function RI(r,e){return{documents:[GT(r,e.path)]}}function CI(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=GT(r,o);const u=function(y){if(y.length!==0)return QT(pi.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(D){return{field:qa(D.field),direction:OI(D.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=cm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:n,parent:o}}function II(r){let e=wI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){tt(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(R){const D=$T(R);return D instanceof pi&&CT(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(R){return R.map(D=>function(B){return new Hc(Ha(B.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(D))}(n.orderBy));let m=null;n.limit&&(m=function(R){let D;return D=typeof R=="object"?R.value:R,ch(D)?null:D}(n.limit));let p=null;n.startAt&&(p=function(R){const D=!!R.before,x=R.values||[];return new qc(x,D)}(n.startAt));let y=null;return n.endAt&&(y=function(R){const D=!R.before,x=R.values||[];return new qc(x,D)}(n.endAt)),$C(e,o,f,u,m,"F",p,y)}function DI(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $T(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ha(n.unaryFilter.field);return bt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ha(n.unaryFilter.field);return bt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ha(n.unaryFilter.field);return bt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ha(n.unaryFilter.field);return bt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(r):r.fieldFilter!==void 0?function(n){return bt.create(Ha(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return pi.create(n.compositeFilter.filters.map(s=>$T(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae()}}(n.compositeFilter.op))}(r):Ae()}function OI(r){return yI[r]}function NI(r){return _I[r]}function MI(r){return vI[r]}function qa(r){return{fieldPath:r.canonicalString()}}function Ha(r){return en.fromServerFormat(r.fieldPath)}function QT(r){return r instanceof bt?function(n){if(n.op==="=="){if(tv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NAN"}};if(ev(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tv(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NAN"}};if(ev(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(n.field),op:NI(n.op),value:n.value}}}(r):r instanceof pi?function(n){const s=n.getFilters().map(o=>QT(o));return s.length===1?s[0]:{compositeFilter:{op:MI(n.op),filters:s}}}(r):Ae()}function YT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s,o,u=Te.min(),f=Te.min(),m=Bt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.ht=e}}function VI(r){const e=II({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?om(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.ln=new LI}addToCollectionParentIndex(e,n){return this.ln.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return Q.resolve()}deleteFieldIndex(e,n){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,n){return Q.resolve()}getDocumentsMatchingTarget(e,n){return Q.resolve(null)}getIndexType(e,n){return Q.resolve(0)}getFieldIndexes(e,n){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,n){return Q.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return Q.resolve(Zr.min())}updateCollectionGroup(e,n,s){return Q.resolve()}updateIndexEntries(e,n){return Q.resolve()}}class LI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Rt(ot.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Rt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(41943040,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new eo(0)}static Qn(){return new eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv([r,e],[n,s]){const o=Le(r,n);return o===0?Le(e,s):o}class UI{constructor(e){this.Gn=e,this.buffer=new Rt(gv),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();gv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class PI{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ao(n)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await lh(n)}await this.Yn(3e5)})}}class zI{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return Q.resolve(uh.oe);const s=new UI(n);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(pv)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pv):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,f=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,n))).next(R=>(u=R,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(y=Date.now(),za()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${R} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function BI(r,e){return new zI(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.changes=new Qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Q.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Cl(s.mutation,o,Gr.empty(),ln.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Pe()){const o=Us();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Tl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Pe()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=ts();const f=Rl(),m=function(){return Rl()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof gh)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Cl(E.mutation,y,E.mutation.getFieldMask(),ln.now())):f.set(y.key,Gr.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var R;return m.set(y,new HI(E,(R=f.get(y))!==null&&R!==void 0?R:null))}),m))}recalculateAndSaveOverlays(e,n){const s=Rl();let o=new ht((f,m)=>f-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||Gr.empty();E=m.applyToLocalView(y,E),s.set(p,E);const R=(o.get(m.batchId)||Pe()).add(p);o=o.insert(m.batchId,R)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,R=xT();E.forEach(D=>{if(!u.has(D)){const x=zT(n.get(D),s.get(D));x!==null&&R.set(D,x),u=u.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,R))}return Q.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return ye.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):Q.resolve(Us());let m=-1,p=u;return f.next(y=>Q.forEach(y,(E,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(E)?Q.resolve():this.remoteDocumentCache.getEntry(e,E).next(D=>{p=p.insert(E,D)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,p,y,Pe())).next(E=>({batchId:m,changes:JC(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(s=>{let o=Tl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Tl();return this.indexManager.getCollectionParents(e,u).next(m=>Q.forEach(m,p=>{const y=function(R,D){return new fh(D,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((R,D)=>{f=f.insert(R,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Kt.newInvalidDocument(E)))});let m=Tl();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Cl(E.mutation,y,Gr.empty(),ln.now()),mh(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return Q.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Fa(o.createTime)}}(n)),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(o){return{name:o.name,query:VI(o.bundledQuery),readTime:Fa(o.readTime)}}(n)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.overlays=new ht(ye.comparator),this.dr=new Map}getOverlay(e,n){return Q.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Us();return Q.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.Tt(e,n,u)}),Q.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.dr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.dr.delete(s)),Q.resolve()}getOverlaysForCollection(e,n,s){const o=Us(),u=n.length+1,f=new ye(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new ht((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Us(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Us(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return Q.resolve(m)}Tt(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.dr.get(o.largestBatchId).delete(s.key);this.dr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new fI(n,s));let u=this.dr.get(n);u===void 0&&(u=Pe(),this.dr.set(n,u)),this.dr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.Er=new Rt(Vt.Ar),this.Rr=new Rt(Vt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const s=new Vt(e,n);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new Vt(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new ye(new ot([])),s=new Vt(n,e),o=new Vt(n,e+1),u=[];return this.Rr.forEachInRange([s,o],f=>{this.gr(f),u.push(f.key)}),u}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ye(new ot([])),s=new Vt(n,e),o=new Vt(n,e+1);let u=Pe();return this.Rr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Vt(e,0),s=this.Er.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Vt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ye.comparator(e.key,n.key)||Le(e.br,n.br)}static Vr(e,n){return Le(e.br,n.br)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Rt(Vt.Ar)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new hI(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.vr=this.vr.add(new Vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return Q.resolve(f)}lookupMutationBatch(e,n){return Q.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Fr(s),u=o<0?0:o;return Q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Vt(n,0),o=new Vt(n,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],f=>{const m=this.Cr(f.br);u.push(m)}),Q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Rt(Le);return n.forEach(o=>{const u=new Vt(o,0),f=new Vt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,f],m=>{s=s.add(m.br)})}),Q.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;ye.isDocumentKey(u)||(u=u.child(""));const f=new Vt(new ye(u),0);let m=new Rt(Le);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.br)),!0)},f),Q.resolve(this.Mr(m))}Mr(e){const n=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){tt(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return Q.forEach(n.mutations,o=>{const u=new Vt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,n){const s=new Vt(n,0),o=this.vr.firstAfterOrEqual(s);return Q.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.Nr=e,this.docs=function(){return new ht(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return Q.resolve(s?s.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Kt.newInvalidDocument(o))}),Q.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=ts();const f=n.path,m=new ye(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||RC(bC(E),s)<=0||(o.has(E.key)||mh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Q.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ae()}Br(e,n){return Q.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new YI(this)}getSize(e){return Q.resolve(this.size)}}class YI extends qI{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),Q.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.persistence=e,this.Lr=new Qs(n=>Pm(n),zm),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new jm,this.targetCount=0,this.Qr=eo.qn()}forEachTarget(e,n){return this.Lr.forEach((s,o)=>n(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),Q.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new eo(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.Un(n),Q.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.Lr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Lr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),Q.waitFor(u).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const s=this.Lr.get(n)||null;return Q.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),Q.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),Q.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return Q.resolve(s)}containsKey(e,n){return Q.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.Kr={},this.overlays={},this.$r=new uh(0),this.Ur=!1,this.Ur=!0,this.Wr=new KI,this.referenceDelegate=e(this),this.Gr=new XI(this),this.indexManager=new xI,this.remoteDocumentCache=function(o){return new QI(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new kI(n),this.jr=new FI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new $I(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){ae("MemoryPersistence","Starting transaction:",e);const o=new ZI(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,n){return Q.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class ZI extends IC{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Zr=new jm,this.Xr=null}static ei(e){return new Fm(e)}get ti(){if(this.Xr)return this.Xr;throw Ae()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),Q.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),Q.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.ti,s=>{const o=ye.fromPath(s);return this.ni(e,o).next(u=>{u||n.removeEntry(o,Te.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return Q.or([()=>Q.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Gc{constructor(e,n){this.persistence=e,this.ri=new Qs(s=>OC(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=BI(this,n)}static ei(e,n){return new Gc(e,n)}Hr(){}Jr(e){return Q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return Q.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?Q.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Br(e,f=>this.ir(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Te.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),Q.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),Q.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),Q.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Cc(e.data.value)),n}ir(e,n,s){return Q.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.ri.get(n);return Q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=o}static zi(e,n){let s=Pe(),o=Pe();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Gm(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Ib()?8:DC($t())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.Xi(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.es(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new WI;return this.ts(e,n,f).next(m=>{if(u.result=m,this.Hi)return this.ns(e,n,f,m.size)})}).next(()=>u.result)}ns(e,n,s,o){return s.documentReadCount<this.Ji?(za()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ba(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),Q.resolve()):(za()<=De.DEBUG&&ae("QueryEngine","Query:",Ba(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(za()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ba(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ci(n))):Q.resolve())}Xi(e,n){if(sv(n))return Q.resolve(null);let s=ci(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=om(n,null,"F"),s=ci(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Pe(...u);return this.Zi.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.rs(n,m);return this.ss(n,y,f,p.readTime)?this.Xi(e,om(n,null,"F")):this.os(e,y,n,p)}))})))}es(e,n,s,o){return sv(n)||o.isEqual(Te.min())?Q.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const f=this.rs(n,u);return this.ss(n,f,s,o)?Q.resolve(null):(za()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ba(n)),this.os(e,f,n,wC(o,-1)).next(m=>m))})}rs(e,n){let s=new Rt(kT(e));return n.forEach((o,u)=>{mh(e,u)&&(s=s.add(u))}),s}ss(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,n,s){return za()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ba(n)),this.Zi.getDocumentsMatchingQuery(e,n,Zr.min(),s)}os(e,n,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,s,o){this.persistence=e,this._s=n,this.serializer=o,this.us=new ht(Le),this.cs=new Qs(u=>Pm(u),zm),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jI(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function tD(r,e,n,s){return new eD(r,e,n,s)}async function ZT(r,e){const n=Ue(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Pe();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Ts:y,removedBatchIds:f,addedBatchIds:m}))})})}function WT(r){const e=Ue(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function nD(r,e){const n=Ue(r),s=e.snapshotVersion;let o=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.hs.newChangeBuffer({trackRemovals:!0});o=n.us;const m=[];e.targetChanges.forEach((E,R)=>{const D=o.get(R);if(!D)return;m.push(n.Gr.removeMatchingKeys(u,E.removedDocuments,R).next(()=>n.Gr.addMatchingKeys(u,E.addedDocuments,R)));let x=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?x=x.withResumeToken(Bt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(E.resumeToken,s)),o=o.insert(R,x),function(X,H,Y){return X.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(D,x,E)&&m.push(n.Gr.updateTargetData(u,x))});let p=ts(),y=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(iD(u,f,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!s.isEqual(Te.min())){const E=n.Gr.getLastRemoteSnapshotVersion(u).next(R=>n.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return Q.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.us=o,u))}function iD(r,e,n){let s=Pe(),o=Pe();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=ts();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):ae("LocalStore","Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Is:f,ds:o}})}function rD(r,e){const n=Ue(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Gr.getTargetData(s,e).next(u=>u?(o=u,Q.resolve(o)):n.Gr.allocateTargetId(s).next(f=>(o=new Kr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s})}async function fm(r,e,n){const s=Ue(r),o=s.us.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!ao(f))throw f;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${f}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function yv(r,e,n){const s=Ue(r);let o=Te.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const R=Ue(p),D=R.cs.get(E);return D!==void 0?Q.resolve(R.us.get(D)):R.Gr.getTargetData(y,E)}(s,f,ci(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s._s.getDocumentsMatchingQuery(f,e,n?o:Te.min(),n?u:Pe())).next(m=>(sD(s,XC(e),m),{documents:m,Es:u})))}function sD(r,e,n){let s=r.ls.get(e)||Te.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.ls.set(e,s)}class _v{constructor(){this.activeTargetIds=nI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aD{constructor(){this._o=new _v,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new _v,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec=null;function qd(){return Ec===null?Ec=function(){return 268435456+Math.round(2147483648*Math.random())}():Ec++,"0x"+Ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class cD extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(n,s,o,u,f){const m=qd(),p=this.No(n,s.toUriEncodedString());ae("RestConnection",`Sending RPC '${n}' ${m}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,u,f),this.Lo(n,p,y,o).then(E=>(ae("RestConnection",`Received RPC '${n}' ${m}: `,E),E),E=>{throw Xa("RestConnection",`RPC '${n}' ${m} failed with error: `,E,"url: ",p,"request:",o),E})}ko(n,s,o,u,f,m){return this.Oo(n,s,o,u,f)}Bo(n,s,o){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+so}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,f)=>n[f]=u),o&&o.headers.forEach((u,f)=>n[f]=u)}No(n,s){const o=lD[n];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,s,o){const u=qd();return new Promise((f,m)=>{const p=new _T;p.setWithCredentials(!0),p.listenOnce(vT.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Rc.NO_ERROR:const E=p.getResponseJson();ae(Ft,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case Rc.TIMEOUT:ae(Ft,`RPC '${e}' ${u} timed out`),m(new pe(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const R=p.getStatus();if(ae(Ft,`RPC '${e}' ${u} failed with status:`,R,"response text:",p.getResponseText()),R>0){let D=p.getResponseJson();Array.isArray(D)&&(D=D[0]);const x=D==null?void 0:D.error;if(x&&x.status&&x.message){const B=function(H){const Y=H.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(Y)>=0?Y:ne.UNKNOWN}(x.status);m(new pe(B,x.message))}else m(new pe(ne.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new pe(ne.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{ae(Ft,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(o);ae(Ft,`RPC '${e}' ${u} sending request:`,o),p.send(n,"POST",y,s,15)})}qo(e,n,s){const o=qd(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=AT(),m=TT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");ae(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,p);const R=f.createWebChannel(E,p);let D=!1,x=!1;const B=new uD({Eo:H=>{x?ae(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(D||(ae(Ft,`Opening RPC '${e}' stream ${o} transport.`),R.open(),D=!0),ae(Ft,`RPC '${e}' stream ${o} sending:`,H),R.send(H))},Ao:()=>R.close()}),X=(H,Y,te)=>{H.listen(Y,W=>{try{te(W)}catch(ue){setTimeout(()=>{throw ue},0)}})};return X(R,El.EventType.OPEN,()=>{x||(ae(Ft,`RPC '${e}' stream ${o} transport opened.`),B.So())}),X(R,El.EventType.CLOSE,()=>{x||(x=!0,ae(Ft,`RPC '${e}' stream ${o} transport closed`),B.Do())}),X(R,El.EventType.ERROR,H=>{x||(x=!0,Xa(Ft,`RPC '${e}' stream ${o} transport errored:`,H),B.Do(new pe(ne.UNAVAILABLE,"The operation could not be completed")))}),X(R,El.EventType.MESSAGE,H=>{var Y;if(!x){const te=H.data[0];tt(!!te);const W=te,ue=(W==null?void 0:W.error)||((Y=W[0])===null||Y===void 0?void 0:Y.error);if(ue){ae(Ft,`RPC '${e}' stream ${o} received error:`,ue);const oe=ue.status;let _e=function(S){const C=yt[S];if(C!==void 0)return qT(C)}(oe),N=ue.message;_e===void 0&&(_e=ne.INTERNAL,N="Unknown error status: "+oe+" with message "+ue.message),x=!0,B.Do(new pe(_e,N)),R.close()}else ae(Ft,`RPC '${e}' stream ${o} received:`,te),B.vo(te)}}),X(m,ET.STAT_EVENT,H=>{H.stat===tm.PROXY?ae(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===tm.NOPROXY&&ae(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{B.bo()},0),B}}function Hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(r){return new EI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,n-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,s,o,u,f,m,p){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new e0(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===ne.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===n&&this.I_(s,o)},s=>{e(()=>{const o=new pe(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(o)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.d_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fD extends hD{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=bI(this.serializer,e),s=function(u){if(!("targetChange"in u))return Te.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Te.min():f.readTime?Fa(f.readTime):Te.min()}(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=mv(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=am(p)?{documents:RI(u,p)}:{query:CI(u,p).ct},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=AI(u,f.resumeToken);const y=cm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Te.min())>0){m.readTime=TI(u,f.snapshotVersion.toTimestamp());const y=cm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=DI(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=mv(this.serializer),n.removeTarget=e,this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD extends class{}{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new pe(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Oo(e,hm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pe(ne.UNKNOWN,u.toString())})}ko(e,n,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.ko(e,hm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pe(ne.UNKNOWN,f.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class mD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Wi(n),this.C_=!1):ae("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(f=>{s.enqueueAndForget(async()=>{jl(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ue(p);y.k_.add(4),await Hl(y),y.K_.set("Unknown"),y.k_.delete(4),await _h(y)}(this))})}),this.K_=new mD(s,o)}}async function _h(r){if(jl(r))for(const e of r.q_)await e(!0)}async function Hl(r){for(const e of r.q_)await e(!1)}function t0(r,e){const n=Ue(r);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Ym(n)?Qm(n):oo(n).s_()&&$m(n,e))}function Km(r,e){const n=Ue(r),s=oo(n);n.L_.delete(e),s.s_()&&n0(n,e),n.L_.size===0&&(s.s_()?s.a_():jl(n)&&n.K_.set("Unknown"))}function $m(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oo(r).V_(e)}function n0(r,e){r.U_.xe(e),oo(r).m_(e)}function Qm(r){r.U_=new gI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.L_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),oo(r).start(),r.K_.F_()}function Ym(r){return jl(r)&&!oo(r).i_()&&r.L_.size>0}function jl(r){return Ue(r).k_.size===0}function i0(r){r.U_=void 0}async function gD(r){r.K_.set("Online")}async function yD(r){r.L_.forEach((e,n)=>{$m(r,e)})}async function _D(r,e){i0(r),Ym(r)?(r.K_.O_(e),Qm(r)):r.K_.set("Unknown")}async function vD(r,e,n){if(r.K_.set("Online"),e instanceof jT&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.L_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.L_.delete(m),o.U_.removeTarget(m))}(r,e)}catch(s){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ev(r,s)}else if(e instanceof Dc?r.U_.$e(e):e instanceof HT?r.U_.Je(e):r.U_.Ge(e),!n.isEqual(Te.min()))try{const s=await WT(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.U_.it(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.L_.get(y);E&&u.L_.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u.L_.get(p);if(!E)return;u.L_.set(p,E.withResumeToken(Bt.EMPTY_BYTE_STRING,E.snapshotVersion)),n0(u,p);const R=new Kr(E.target,p,y,E.sequenceNumber);$m(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){ae("RemoteStore","Failed to raise snapshot:",s),await Ev(r,s)}}async function Ev(r,e,n){if(!ao(e))throw e;r.k_.add(1),await Hl(r),r.K_.set("Offline"),n||(n=()=>WT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await n(),r.k_.delete(1),await _h(r)})}async function Tv(r,e){const n=Ue(r);n.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const s=jl(n);n.k_.add(3),await Hl(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await _h(n)}async function ED(r,e){const n=Ue(r);e?(n.k_.delete(2),await _h(n)):e||(n.k_.add(2),await Hl(n),n.K_.set("Unknown"))}function oo(r){return r.W_||(r.W_=function(n,s,o){const u=Ue(n);return u.b_(),new fD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Ro:gD.bind(null,r),mo:yD.bind(null,r),po:_D.bind(null,r),R_:vD.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Ym(r)?Qm(r):r.K_.set("Unknown")):(await r.W_.stop(),i0(r))})),r.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new Xm(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r0(r,e){if(Wi("AsyncQueue",`${e}: ${r}`),ao(r))return new pe(ne.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{static emptySet(e){return new Ga(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ye.comparator(n.key,s.key):(n,s)=>ye.comparator(n.key,s.key),this.keyedMap=Tl(),this.sortedSet=new ht(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ga)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ga;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.z_=new ht(ye.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Ae():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class to{constructor(e,n,s,o,u,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new to(e,n,Ga.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class AD{constructor(){this.queries=Sv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const o=Ue(n),u=o.queries;o.queries=Sv(),u.forEach((f,m)=>{for(const p of m.J_)p.onError(s)})})(this,new pe(ne.ABORTED,"Firestore shutting down"))}}function Sv(){return new Qs(r=>MT(r),dh)}async function SD(r,e){const n=Ue(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new TD,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await n.onListen(o,!0);break;case 1:u.H_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=r0(f,`Initialization of query '${Ba(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.J_.push(e),e.ea(n.onlineState),u.H_&&e.ta(u.H_)&&Zm(n)}async function wD(r,e){const n=Ue(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.J_.indexOf(e);f>=0&&(u.J_.splice(f,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function bD(r,e){const n=Ue(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.J_)m.ta(o)&&(s=!0);f.H_=o}}s&&Zm(n)}function RD(r,e,n){const s=Ue(r),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(n);s.queries.delete(e)}function Zm(r){r.X_.forEach(e=>{e.next()})}var dm,wv;(wv=dm||(dm={})).na="default",wv.Cache="cache";class CD{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new to(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.key=e}}class a0{constructor(e){this.key=e}}class ID{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=kT(e),this.ma=new Ga(this.Va)}get fa(){return this.Ea}ga(e,n){const s=n?n.pa:new Av,o=n?n.ma:this.ma;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,R)=>{const D=o.get(E),x=mh(this.query,R)?R:null,B=!!D&&this.mutatedKeys.has(D.key),X=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let H=!1;D&&x?D.data.isEqual(x.data)?B!==X&&(s.track({type:3,doc:x}),H=!0):this.ya(D,x)||(s.track({type:2,doc:x}),H=!0,(p&&this.Va(x,p)>0||y&&this.Va(x,y)<0)&&(m=!0)):!D&&x?(s.track({type:0,doc:x}),H=!0):D&&!x&&(s.track({type:1,doc:D}),H=!0,(p||y)&&(m=!0)),H&&(x?(f=f.add(x),u=X?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{ma:f,pa:s,ss:m,mutatedKeys:u}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const f=e.pa.j_();f.sort((E,R)=>function(x,B){const X=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return X(x)-X(B)}(E.type,R.type)||this.Va(E.doc,R.doc)),this.wa(s),o=o!=null&&o;const m=n&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,f.length!==0||y?{snapshot:new to(this.query,e.ma,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Av,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const n=[];return e.forEach(s=>{this.Ra.has(s)||n.push(new a0(s))}),this.Ra.forEach(s=>{e.has(s)||n.push(new s0(s))}),n}va(e){this.Ea=e.Es,this.Ra=Pe();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return to.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class DD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class OD{constructor(e){this.key=e,this.Fa=!1}}class ND{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Ma={},this.xa=new Qs(m=>MT(m),dh),this.Oa=new Map,this.Na=new Set,this.Ba=new ht(ye.comparator),this.La=new Map,this.ka=new jm,this.qa={},this.Qa=new Map,this.Ka=eo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function MD(r,e,n=!0){const s=h0(r);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await o0(s,e,n,!0),o}async function kD(r,e){const n=h0(r);await o0(n,e,!0,!1)}async function o0(r,e,n,s){const o=await rD(r.localStore,ci(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await VD(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&t0(r.remoteStore,o),m}async function VD(r,e,n,s,o){r.Ua=(R,D,x)=>async function(X,H,Y,te){let W=H.view.ga(Y);W.ss&&(W=await yv(X.localStore,H.query,!1).then(({documents:N})=>H.view.ga(N,W)));const ue=te&&te.targetChanges.get(H.targetId),oe=te&&te.targetMismatches.get(H.targetId)!=null,_e=H.view.applyChanges(W,X.isPrimaryClient,ue,oe);return Rv(X,H.targetId,_e.ba),_e.snapshot}(r,R,D,x);const u=await yv(r.localStore,e,!0),f=new ID(e,u.Es),m=f.ga(u.documents),p=ql.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);Rv(r,n,y.ba);const E=new DD(e,n,f);return r.xa.set(e,E),r.Oa.has(n)?r.Oa.get(n).push(e):r.Oa.set(n,[e]),y.snapshot}async function xD(r,e,n){const s=Ue(r),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(f=>!dh(f,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await fm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Km(s.remoteStore,o.targetId),mm(s,o.targetId)}).catch(lh)):(mm(s,o.targetId),await fm(s.localStore,o.targetId,!0))}async function LD(r,e){const n=Ue(r),s=n.xa.get(e),o=n.Oa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Km(n.remoteStore,s.targetId))}async function l0(r,e){const n=Ue(r);try{const s=await nD(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.La.get(u);f&&(tt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Fa=!0:o.modifiedDocuments.size>0?tt(f.Fa):o.removedDocuments.size>0&&(tt(f.Fa),f.Fa=!1))}),await c0(n,s,e)}catch(s){await lh(s)}}function bv(r,e,n){const s=Ue(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.xa.forEach((u,f)=>{const m=f.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Ue(f);p.onlineState=m;let y=!1;p.queries.forEach((E,R)=>{for(const D of R.J_)D.ea(m)&&(y=!0)}),y&&Zm(p)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function UD(r,e,n){const s=Ue(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.La.get(e),u=o&&o.key;if(u){let f=new ht(ye.comparator);f=f.insert(u,Kt.newNoDocument(u,Te.min()));const m=Pe().add(u),p=new yh(Te.min(),new Map,new ht(Le),f,m);await l0(s,p),s.Ba=s.Ba.remove(u),s.La.delete(e),Wm(s)}else await fm(s.localStore,e,!1).then(()=>mm(s,e,n)).catch(lh)}function mm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),n&&r.Ma.Wa(s,n);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||u0(r,s)})}function u0(r,e){r.Na.delete(e.path.canonicalString());const n=r.Ba.get(e);n!==null&&(Km(r.remoteStore,n),r.Ba=r.Ba.remove(e),r.La.delete(n),Wm(r))}function Rv(r,e,n){for(const s of n)s instanceof s0?(r.ka.addReference(s.key,e),PD(r,s)):s instanceof a0?(ae("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||u0(r,s.key)):Ae()}function PD(r,e){const n=e.key,s=n.path.canonicalString();r.Ba.get(n)||r.Na.has(s)||(ae("SyncEngine","New document in limbo: "+n),r.Na.add(s),Wm(r))}function Wm(r){for(;r.Na.size>0&&r.Ba.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const n=new ye(ot.fromString(e)),s=r.Ka.next();r.La.set(s,new OD(n)),r.Ba=r.Ba.insert(n,s),t0(r.remoteStore,new Kr(ci(NT(n.path)),s,"TargetPurposeLimboResolution",uh.oe))}}async function c0(r,e,n){const s=Ue(r),o=[],u=[],f=[];s.xa.isEmpty()||(s.xa.forEach((m,p)=>{f.push(s.Ua(p,e,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const R=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,R?"current":"not-current")}if(y){o.push(y);const R=Gm.zi(p.targetId,y);u.push(R)}}))}),await Promise.all(f),s.Ma.R_(o),await async function(p,y){const E=Ue(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>Q.forEach(y,D=>Q.forEach(D.Wi,x=>E.persistence.referenceDelegate.addReference(R,D.targetId,x)).next(()=>Q.forEach(D.Gi,x=>E.persistence.referenceDelegate.removeReference(R,D.targetId,x)))))}catch(R){if(!ao(R))throw R;ae("LocalStore","Failed to update sequence numbers: "+R)}for(const R of y){const D=R.targetId;if(!R.fromCache){const x=E.us.get(D),B=x.snapshotVersion,X=x.withLastLimboFreeSnapshotVersion(B);E.us=E.us.insert(D,X)}}}(s.localStore,u))}async function zD(r,e){const n=Ue(r);if(!n.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const s=await ZT(n.localStore,e);n.currentUser=e,function(u,f){u.Qa.forEach(m=>{m.forEach(p=>{p.reject(new pe(ne.CANCELLED,f))})}),u.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await c0(n,s.Ts)}}function BD(r,e){const n=Ue(r),s=n.La.get(e);if(s&&s.Fa)return Pe().add(s.key);{let o=Pe();const u=n.Oa.get(e);if(!u)return o;for(const f of u){const m=n.xa.get(f);o=o.unionWith(m.view.fa)}return o}}function h0(r){const e=Ue(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=l0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UD.bind(null,e),e.Ma.R_=bD.bind(null,e.eventManager),e.Ma.Wa=RD.bind(null,e.eventManager),e}class Kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=JT(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return tD(this.persistence,new JI,e.initialUser,this.serializer)}ja(e){return new XT(Fm.ei,this.serializer)}za(e){return new aD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kc.provider={build:()=>new Kc};class qD extends Kc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){tt(this.persistence.referenceDelegate instanceof Gc);const s=this.persistence.referenceDelegate.garbageCollector;return new PI(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new XT(s=>Gc.ei(s,n),this.serializer)}}class pm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zD.bind(null,this.syncEngine),await ED(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AD}()}createDatastore(e){const n=JT(e.databaseInfo.databaseId),s=function(u){return new cD(u)}(e.databaseInfo);return function(u,f,m,p){return new dD(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new pD(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>bv(this.syncEngine,n,0),function(){return vv.p()?new vv:new oD}())}createSyncEngine(e,n){return function(o,u,f,m,p,y,E){const R=new ND(o,u,f,m,p,y);return E&&(R.$a=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Ue(o);ae("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Hl(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pm.provider={build:()=>new pm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Wi("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Gt.UNAUTHENTICATED,this.clientId=AC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{ae("FirestoreClient","Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ae("FirestoreClient","Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=r0(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function jd(r,e){r.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await ZT(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Cv(r,e){r.asyncQueue.verifyOperationInProgress();const n=await FD(r);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Tv(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Tv(e.remoteStore,o)),r._onlineComponents=e}async function FD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await jd(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Xa("Error using user provided cache. Falling back to memory cache: "+n),await jd(r,new Kc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await jd(r,new qD(void 0));return r._offlineComponents}async function GD(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Cv(r,r._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Cv(r,new pm))),r._onlineComponents}async function KD(r){const e=await GD(r),n=e.eventManager;return n.onListen=MD.bind(null,e.syncEngine),n.onUnlisten=xD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LD.bind(null,e.syncEngine),n}function $D(r,e,n={}){const s=new Ps;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new HD({next:D=>{E.eu(),f.enqueueAndForget(()=>wD(u,R)),D.fromCache&&p.source==="server"?y.reject(new pe(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(D)},error:D=>y.reject(D)}),R=new CD(m,E,{includeMetadataChanges:!0,ua:!0});return SD(u,R)}(await KD(r),r.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=new Map;function QD(r,e,n,s){if(e===!0&&s===!0)throw new pe(ne.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Dv(r){if(ye.isDocumentKey(r))throw new pe(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function YD(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ae()}function gm(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new pe(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=YD(r);throw new pe(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new pe(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new pe(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new pe(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new pe(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jm{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ov({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ov(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new mC;switch(s.type){case"firstParty":return new _C(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pe(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Iv.get(n);s&&(ae("ComponentProvider","Removing Datastore"),Iv.delete(n),s.terminate())}(this),Promise.resolve()}}function XD(r,e,n,s={}){var o;const u=(r=gm(r,Jm))._getSettings(),f=`${e}:${n}`;if(u.host!=="firestore.googleapis.com"&&u.host!==f&&Xa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:f,ssl:!1})),s.mockUserToken){let m,p;if(typeof s.mockUserToken=="string")m=s.mockUserToken,p=Gt.MOCK_USER;else{m=zE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new pe(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Gt(y)}r._authCredentials=new pC(new ST(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new vh(this.firestore,e,this._query)}}class lo{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ka(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lo(this.firestore,e,this._key)}}class Ka extends vh{constructor(e,n,s){super(e,n,NT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lo(this.firestore,null,new ye(e))}withConverter(e){return new Ka(this.firestore,e,this._path)}}function ZD(r,e,...n){if(r=_i(r),r instanceof Jm){const s=ot.fromString(e,...n);return Dv(s),new Ka(r,null,s)}{if(!(r instanceof lo||r instanceof Ka))throw new pe(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ot.fromString(e,...n));return Dv(s),new Ka(r.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new e0(this,"async_queue_retry"),this.fu=()=>{const s=Hd();s&&ae("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=Hd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Ps;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ao(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw Wi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const o=Xm.createAndSchedule(this,e,n,s,u=>this.Su(u));return this.Eu.push(o),o}pu(){this.Au&&Ae()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class d0 extends Jm{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new Nv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nv(e),this._firestoreClient=void 0,await e}}}function WD(r,e){const n=typeof r=="object"?r:sh(),s=typeof r=="string"?r:"(default)",o=ns(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=LE("firestore");u&&XD(o,...u)}return o}function JD(r){if(r._terminated)throw new pe(ne.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||eO(r),r._firestoreClient}function eO(r){var e,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new VC(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,f0(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new jD(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $c(Bt.fromBase64String(e))}catch(n){throw new pe(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $c(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new pe(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new pe(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new pe(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}const iO=new RegExp("[~\\*/\\[\\]]");function rO(r,e,n){if(e.search(iO)>=0)throw Mv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new m0(...e.split("."))._internalPath}catch{throw Mv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Mv(r,e,n,s,o){let u=`Function ${e}() called with invalid data`;u+=". ";let f="";return new pe(ne.INVALID_ARGUMENT,u+r+f)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new lo(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(g0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sO extends p0{data(){return super.data()}}function g0(r,e){return typeof e=="string"?rO(r,e):e instanceof m0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pe(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oO{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Bl(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>ct(f.doubleValue));return new nO(u)}convertGeoPoint(e){return new tO(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ml(e));default:return null}}convertTimestamp(e){const n=Wr(e);return new ln(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ot.fromString(e);tt(YT(s));const o=new kl(s.get(1),s.get(3)),u=new ye(s.popFirst(5));return o.isEqual(n)||Wi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lO extends p0{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(g0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Oc extends lO{data(e={}){return super.data(e)}}class uO{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Tc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Oc(this._firestore,this._userDataWriter,s.key,s,new Tc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new pe(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Oc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Tc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Oc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Tc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:cO(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}class hO extends oO{constructor(e){super(),this.firestore=e}convertBytes(e){return new $c(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lo(this.firestore,null,n)}}function fO(r){r=gm(r,vh);const e=gm(r.firestore,d0),n=JD(e),s=new hO(e);return aO(r._query),$D(n,r._query).then(o=>new uO(e,s,r,o))}(function(e,n=!0){(function(o){so=o})($s),Fn(new Vn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new d0(new gC(s.getProvider("auth-internal")),new EC(s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pe(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kl(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),an(Q_,"4.7.6",e),an(Q_,"4.7.6","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="firebasestorage.googleapis.com",dO="storageBucket",mO=2*60*1e3,pO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Ln{constructor(e,n,s=0){super(Fd(e),`Firebase Storage: ${n} (${Fd(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gi;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gi||(gi={}));function Fd(r){return"storage/"+r}function gO(){const r="An unknown error occurred, please check the error payload for server response.";return new vi(gi.UNKNOWN,r)}function yO(){return new vi(gi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _O(){return new vi(gi.CANCELED,"User canceled the upload/download.")}function vO(r){return new vi(gi.INVALID_URL,"Invalid URL '"+r+"'.")}function EO(r){return new vi(gi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function kv(r){return new vi(gi.INVALID_ARGUMENT,r)}function _0(){return new vi(gi.APP_DELETED,"The Firebase app was deleted.")}function TO(r){return new vi(gi.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=jn.makeFromUrl(e,n)}catch{return new jn(e,"")}if(s.path==="")return s;throw EO(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ue){ue.path.charAt(ue.path.length-1)==="/"&&(ue.path_=ue.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function y(ue){ue.path_=decodeURIComponent(ue.path)}const E="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),D="(/([^?#]*).*)?$",x=new RegExp(`^https?://${R}/${E}/b/${o}/o${D}`,"i"),B={bucket:1,path:3},X=n===y0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,H="([^?#]*)",Y=new RegExp(`^https?://${X}/${o}/${H}`,"i"),W=[{regex:m,indices:p,postModify:u},{regex:x,indices:B,postModify:y},{regex:Y,indices:{bucket:1,path:2},postModify:y}];for(let ue=0;ue<W.length;ue++){const oe=W[ue],_e=oe.regex.exec(e);if(_e){const N=_e[oe.indices.bucket];let w=_e[oe.indices.path];w||(w=""),s=new jn(N,w),oe.postModify(s);break}}if(s==null)throw vO(e);return s}}class AO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(r,e,n){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let y=!1;function E(...H){y||(y=!0,e.apply(null,H))}function R(H){o=setTimeout(()=>{o=null,r(x,p())},H)}function D(){u&&clearTimeout(u)}function x(H,...Y){if(y){D();return}if(H){D(),E.call(null,H,...Y);return}if(p()||f){D(),E.call(null,H,...Y);return}s<64&&(s*=2);let W;m===1?(m=2,W=0):W=(s+Math.random())*1e3,R(W)}let B=!1;function X(H){B||(B=!0,D(),!y&&(o!==null?(H||(m=2),clearTimeout(o),R(0)):H||(m=1)))}return R(0),u=setTimeout(()=>{f=!0,X(!0)},n),X}function wO(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(r){return r!==void 0}function Vv(r,e,n,s){if(s<e)throw kv(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw kv(`Invalid value for '${r}'. Expected ${n} or less.`)}function RO(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const o=e(s)+"="+e(r[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Qc;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Qc||(Qc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(r,e){const n=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,u=e.indexOf(r)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,s,o,u,f,m,p,y,E,R,D=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=R,this.retry=D,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,B)=>{this.resolve_=x,this.reject_=B,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Ac(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===Qc.NO_ERROR,p=u.getStatus();if(!m||CO(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===Qc.ABORT;s(!1,new Ac(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new Ac(y,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());bO(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=gO();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?_0():_O();f(p)}else{const p=yO();f(p)}};this.canceled_?n(!1,new Ac(!1,null,!0)):this.backoffId_=SO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ac{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function DO(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function OO(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NO(r,e){e&&(r["X-Firebase-GMPID"]=e)}function MO(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function kO(r,e,n,s,o,u,f=!0){const m=RO(r.urlParams),p=r.url+m,y=Object.assign({},r.headers);return NO(y,e),DO(y,n),OO(y,u),MO(y,s),new IO(p,r.method,y,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function xO(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n){this._service=e,n instanceof jn?this._location=n:this._location=jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yc(e,n)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xO(this._location.path)}get storage(){return this._service}get parent(){const e=VO(this._location.path);if(e===null)return null;const n=new jn(this._location.bucket,e);return new Yc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw TO(e)}}function xv(r,e){const n=e==null?void 0:e[dO];return n==null?null:jn.makeFromBucketSpec(n,r)}function LO(r,e,n,s={}){r.host=`${e}:${n}`,r._protocol="http";const{mockUserToken:o}=s;o&&(r._overrideAuthToken=typeof o=="string"?o:zE(o,r.app.options.projectId))}class UO{constructor(e,n,s,o,u){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=y0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mO,this._maxUploadRetryTime=pO,this._requests=new Set,o!=null?this._bucket=jn.makeFromBucketSpec(o,this._host):this._bucket=xv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=xv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yc(this,e)}_makeRequest(e,n,s,o,u=!0){if(this._deleted)return new AO(_0());{const f=kO(e,this._appId,s,o,n,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const Lv="@firebase/storage",Uv="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="storage";function PO(r=sh(),e){r=_i(r);const s=ns(r,v0).getImmediate({identifier:e}),o=LE("storage");return o&&zO(s,...o),s}function zO(r,e,n,s={}){LO(r,e,n,s)}function BO(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new UO(n,s,o,e,$s)}function qO(){Fn(new Vn(v0,BO,"PUBLIC").setMultipleInstances(!0)),an(Lv,Uv,""),an(Lv,Uv,"esm2017")}qO();function ep(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function E0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HO=E0,T0=new Ks("auth","Firebase",E0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new rh("@firebase/auth");function jO(r,...e){Xc.logLevel<=De.WARN&&Xc.warn(`Auth (${$s}): ${r}`,...e)}function Nc(r,...e){Xc.logLevel<=De.ERROR&&Xc.error(`Auth (${$s}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(r,...e){throw tp(r,...e)}function hi(r,...e){return tp(r,...e)}function A0(r,e,n){const s=Object.assign(Object.assign({},HO()),{[e]:n});return new Ks("auth","Firebase",s).create(e,{appName:r.name})}function Bs(r){return A0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return T0.create(r,...e)}function ve(r,e,...n){if(!r)throw tp(e,...n)}function $i(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nc(e),new Error(e)}function er(r,e){r||$i(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function FO(){return Pv()==="http:"||Pv()==="https:"}function Pv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FO()||BE()||"connection"in navigator)?navigator.onLine:!0}function KO(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=Sb()||Rb()}get(){return GO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(r,e){er(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$i("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$i("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$i("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=new Fl(3e4,6e4);function ip(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function uo(r,e,n,s,o={}){return w0(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=zl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},u);return bb()||(y.referrerPolicy="no-referrer"),S0.fetch()(b0(r,r.config.apiHost,n,m),y)})}async function w0(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},$O),e);try{const o=new XO(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Sc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Sc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Sc(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw A0(r,E,y);Ji(r,E)}}catch(o){if(o instanceof Ln)throw o;Ji(r,"network-request-failed",{message:String(o)})}}async function YO(r,e,n,s,o={}){const u=await uo(r,e,n,s,o);return"mfaPendingCredential"in u&&Ji(r,"multi-factor-auth-required",{_serverResponse:u}),u}function b0(r,e,n,s){const o=`${e}${n}?${s}`;return r.config.emulator?np(r.config,o):`${r.config.apiScheme}://${o}`}class XO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hi(this.auth,"network-request-failed")),QO.get())})}}function Sc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=hi(r,e,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(r,e){return uo(r,"POST","/v1/accounts:delete",e)}async function R0(r,e){return uo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WO(r,e=!1){const n=_i(r),s=await n.getIdToken(e),o=rp(s);ve(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Il(Gd(o.auth_time)),issuedAtTime:Il(Gd(o.iat)),expirationTime:Il(Gd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Gd(r){return Number(r)*1e3}function rp(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const o=VE(n);return o?JSON.parse(o):(Nc("Failed to decode base64 JWT payload"),null)}catch(o){return Nc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function zv(r){const e=rp(r);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ln&&JO(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function JO({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Il(this.lastLoginAt),this.creationTime=Il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(r){var e;const n=r.auth,s=await r.getIdToken(),o=await xl(r,R0(n,{idToken:s}));ve(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?C0(u.providerUserInfo):[],m=n2(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new _m(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,R)}async function t2(r){const e=_i(r);await Zc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function n2(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function C0(r){return r.map(e=>{var{providerId:n}=e,s=ep(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(r,e){const n=await w0(r,{},async()=>{const s=zl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=b0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",S0.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r2(r,e){return uo(r,"POST","/v2/accounts:revokeToken",ip(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=zv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await i2(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new $a;return s&&(ve(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $a,this.toJSON())}_performRefresh(){return $i("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(r,e){ve(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=ep(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new e2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new _m(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await xl(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WO(this,e)}reload(){return t2(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Zc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fr(this.auth.app))return Promise.reject(Bs(this.auth));const e=await this.getIdToken();return await xl(this,ZO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,p,y,E;const R=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,x=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,B=(f=n.photoURL)!==null&&f!==void 0?f:void 0,X=(m=n.tenantId)!==null&&m!==void 0?m:void 0,H=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(y=n.createdAt)!==null&&y!==void 0?y:void 0,te=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:W,emailVerified:ue,isAnonymous:oe,providerData:_e,stsTokenManager:N}=n;ve(W&&N,e,"internal-error");const w=$a.fromJSON(this.name,N);ve(typeof W=="string",e,"internal-error"),zr(R,e.name),zr(D,e.name),ve(typeof ue=="boolean",e,"internal-error"),ve(typeof oe=="boolean",e,"internal-error"),zr(x,e.name),zr(B,e.name),zr(X,e.name),zr(H,e.name),zr(Y,e.name),zr(te,e.name);const S=new Qi({uid:W,auth:e,email:D,emailVerified:ue,displayName:R,isAnonymous:oe,photoURL:B,phoneNumber:x,tenantId:X,stsTokenManager:w,createdAt:Y,lastLoginAt:te});return _e&&Array.isArray(_e)&&(S.providerData=_e.map(C=>Object.assign({},C))),H&&(S._redirectEventId=H),S}static async _fromIdTokenResponse(e,n,s=!1){const o=new $a;o.updateFromServerResponse(n);const u=new Qi({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Zc(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?C0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new $a;m.updateFromIdToken(s);const p=new Qi({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _m(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new Map;function Yi(r){er(r instanceof Function,"Expected a class definition");let e=Bv.get(r);return e?(er(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I0.type="NONE";const qv=I0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r,e,n){return`firebase:${r}:${e}:${n}`}class Qa{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Mc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Mc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Qa(Yi(qv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Yi(qv);const f=Mc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){const R=Qi._fromJSON(e,E);y!==u&&(m=R),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Qa(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Qa(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V0(e))return"Blackberry";if(x0(e))return"Webos";if(O0(e))return"Safari";if((e.includes("chrome/")||N0(e))&&!e.includes("edge/"))return"Chrome";if(k0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function D0(r=$t()){return/firefox\//i.test(r)}function O0(r=$t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N0(r=$t()){return/crios\//i.test(r)}function M0(r=$t()){return/iemobile/i.test(r)}function k0(r=$t()){return/android/i.test(r)}function V0(r=$t()){return/blackberry/i.test(r)}function x0(r=$t()){return/webos/i.test(r)}function sp(r=$t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function s2(r=$t()){var e;return sp(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function a2(){return Cb()&&document.documentMode===10}function L0(r=$t()){return sp(r)||k0(r)||x0(r)||V0(r)||/windows phone/i.test(r)||M0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(r,e=[]){let n;switch(r){case"Browser":n=Hv($t());break;case"Worker":n=`${Hv($t())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(r,e={}){return uo(r,"GET","/v2/passwordPolicy",ip(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=6;class c2{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:u2,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jv(this),this.idTokenSubscription=new jv(this),this.beforeStateQueue=new o2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yi(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Qa.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await R0(this,{idToken:e}),s=await Qi._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fr(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fr(this.app))return Promise.reject(Bs(this));const n=e?_i(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fr(this.app)?Promise.reject(Bs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fr(this.app)?Promise.reject(Bs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await l2(this),n=new c2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await r2(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yi(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await Qa.create(this,[Yi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=U0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ap(r){return _i(r)}class jv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vb(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let op={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function f2(r){op=r}function d2(r){return op.loadJS(r)}function m2(){return op.gapiScript}function p2(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(r,e){const n=ns(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Ol(u,e??{}))return o;Ji(o,"already-initialized")}return n.initialize({options:e})}function y2(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yi);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _2(r,e,n){const s=ap(r);ve(s._canInitEmulator,s,"emulator-config-failed"),ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=P0(e),{host:f,port:m}=v2(e),p=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${f}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),E2()}function P0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function v2(r){const e=P0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Fv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Fv(f)}}}function Fv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function E2(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $i("not implemented")}_getIdTokenResponse(e){return $i("not implemented")}_linkToIdToken(e,n){return $i("not implemented")}_getReauthenticationResolver(e){return $i("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(r,e){return YO(r,"POST","/v1/accounts:signInWithIdp",ip(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="http://localhost";class Fs extends z0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ji("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=ep(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Fs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Ya(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ya(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ya(e,n)}buildRequest(){const e={requestUri:T2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends B0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Gl{constructor(){super("facebook.com")}static credential(e){return Fs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qr.credential(n,s)}catch{return null}}}qr.GOOGLE_SIGN_IN_METHOD="google.com";qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Gl{constructor(){super("github.com")}static credential(e){return Fs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Gl{constructor(){super("twitter.com")}static credential(e,n){return Fs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return jr.credential(n,s)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Qi._fromIdTokenResponse(e,s,o),f=Gv(s);return new no({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Gv(s);return new no({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Gv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Ln{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Wc(e,n,s,o)}}function q0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(r,u,e,s):u})}async function A2(r,e,n=!1){const s=await xl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return no._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S2(r,e,n=!1){const{auth:s}=r;if(Fr(s.app))return Promise.reject(Bs(s));const o="reauthenticate";try{const u=await xl(r,q0(s,o,e,r),n);ve(u.idToken,s,"internal-error");const f=rp(u.idToken);ve(f,s,"internal-error");const{sub:m}=f;return ve(r.uid===m,s,"user-mismatch"),no._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ji(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(r,e,n=!1){if(Fr(r.app))return Promise.reject(Bs(r));const s="signIn",o=await q0(r,s,e),u=await no._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function b2(r,e,n,s){return _i(r).onIdTokenChanged(e,n,s)}function R2(r,e,n){return _i(r).beforeAuthStateChanged(e,n)}const Jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jc,"1"),this.storage.removeItem(Jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=1e3,I2=10;class j0 extends H0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=L0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);a2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,I2):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}j0.type="LOCAL";const D2=j0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0 extends H0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}F0.type="SESSION";const G0=F0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Eh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await O2(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=lp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(R){const D=R;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){return window}function M2(r){fi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function k2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V2(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function x2(){return K0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="firebaseLocalStorageDb",L2=1,eh="firebaseLocalStorage",Q0="fbase_key";class Kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Th(r,e){return r.transaction([eh],e?"readwrite":"readonly").objectStore(eh)}function U2(){const r=indexedDB.deleteDatabase($0);return new Kl(r).toPromise()}function vm(){const r=indexedDB.open($0,L2);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(eh,{keyPath:Q0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(eh)?e(s):(s.close(),await U2(),e(await vm()))})})}async function Kv(r,e,n){const s=Th(r,!0).put({[Q0]:e,value:n});return new Kl(s).toPromise()}async function P2(r,e){const n=Th(r,!1).get(e),s=await new Kl(n).toPromise();return s===void 0?null:s.value}function $v(r,e){const n=Th(r,!0).delete(e);return new Kl(n).toPromise()}const z2=800,B2=3;class Y0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>B2)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eh._getInstance(x2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await k2(),!this.activeServiceWorker)return;this.sender=new N2(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vm();return await Kv(e,Jc,"1"),await $v(e,Jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>P2(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$v(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Th(o,!1).getAll();return new Kl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y0.type="LOCAL";const q2=Y0;new Fl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(r,e){return e?Yi(e):(ve(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends z0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ya(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ya(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ya(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function j2(r){return w2(r.auth,new up(r),r.bypassAuthState)}function F2(r){const{auth:e,user:n}=r;return ve(n,e,"internal-error"),S2(n,new up(r),r.bypassAuthState)}async function G2(r){const{auth:e,user:n}=r;return ve(n,e,"internal-error"),A2(n,new up(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j2;case"linkViaPopup":case"linkViaRedirect":return G2;case"reauthViaPopup":case"reauthViaRedirect":return F2;default:Ji(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=new Fl(2e3,1e4);class ja extends X0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ja.currentPopupAction&&ja.currentPopupAction.cancel(),ja.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ja.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,K2.get())};e()}}ja.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="pendingRedirect",kc=new Map;class Q2 extends X0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=kc.get(this.auth._key());if(!e){try{const s=await Y2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}kc.set(this.auth._key(),e)}return this.bypassAuthState||kc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y2(r,e){const n=W2(e),s=Z2(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function X2(r,e){kc.set(r._key(),e)}function Z2(r){return Yi(r._redirectPersistence)}function W2(r){return Mc($2,r.config.apiKey,r.name)}async function J2(r,e,n=!1){if(Fr(r.app))return Promise.reject(Bs(r));const s=ap(r),o=H2(s,e),f=await new Q2(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=10*60*1e3;class tN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Z0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(hi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qv(e))}saveEventToCache(e){this.cachedEventUids.add(Qv(e)),this.lastProcessedEventTime=Date.now()}}function Qv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Z0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(r,e={}){return uo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sN=/^https?/;async function aN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await iN(r);for(const n of e)try{if(oN(n))return}catch{}Ji(r,"unauthorized-domain")}function oN(r){const e=ym(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!sN.test(n))return!1;if(rN.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new Fl(3e4,6e4);function Yv(){const r=fi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function uN(r){return new Promise((e,n)=>{var s,o,u;function f(){Yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yv(),n(hi(r,"network-request-failed"))},timeout:lN.get()})}if(!((o=(s=fi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=fi().gapi)===null||u===void 0)&&u.load)f();else{const m=p2("iframefcb");return fi()[m]=()=>{gapi.load?f():n(hi(r,"network-request-failed"))},d2(`${m2()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw Vc=null,e})}let Vc=null;function cN(r){return Vc=Vc||uN(r),Vc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=new Fl(5e3,15e3),fN="__/auth/iframe",dN="emulator/auth/iframe",mN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gN(r){const e=r.config;ve(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?np(e,dN):`https://${r.config.authDomain}/${fN}`,s={apiKey:e.apiKey,appName:r.name,v:$s},o=pN.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${zl(s).slice(1)}`}async function yN(r){const e=await cN(r),n=fi().gapi;return ve(n,r,"internal-error"),e.open({where:document.body,url:gN(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=hi(r,"network-request-failed"),m=fi().setTimeout(()=>{u(f)},hN.get());function p(){fi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vN=500,EN=600,TN="_blank",AN="http://localhost";class Xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SN(r,e,n,s=vN,o=EN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},_N),{width:s.toString(),height:o.toString(),top:u,left:f}),y=$t().toLowerCase();n&&(m=N0(y)?TN:n),D0(y)&&(e=e||AN,p.scrollbars="yes");const E=Object.entries(p).reduce((D,[x,B])=>`${D}${x}=${B},`,"");if(s2(y)&&m!=="_self")return wN(e||"",m),new Xv(null);const R=window.open(e||"",m,E);ve(R,r,"popup-blocked");try{R.focus()}catch{}return new Xv(R)}function wN(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="__/auth/handler",RN="emulator/auth/handler",CN=encodeURIComponent("fac");async function Zv(r,e,n,s,o,u){ve(r.config.authDomain,r,"auth-domain-config-required"),ve(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:$s,eventId:o};if(e instanceof B0){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",kb(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,R]of Object.entries({}))f[E]=R}if(e instanceof Gl){const E=e.getScopes().filter(R=>R!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${CN}=${encodeURIComponent(p)}`:"";return`${IN(r)}?${zl(m).slice(1)}${y}`}function IN({config:r}){return r.emulator?np(r,RN):`https://${r.authDomain}/${bN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="webStorageSupport";class DN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G0,this._completeRedirectFn=J2,this._overrideRedirectResult=X2}async _openPopup(e,n,s,o){var u;er((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Zv(e,n,s,ym(),o);return SN(e,f,lp())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await Zv(e,n,s,ym(),o);return M2(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(er(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yN(e),s=new tN(e);return n.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kd,{type:Kd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Kd];f!==void 0&&n(!!f),Ji(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return L0()||O0()||sp()}}const ON=DN;var Wv="@firebase/auth",Jv="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kN(r){Fn(new Vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;ve(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:U0(r)},y=new h2(s,o,u,p);return y2(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fn(new Vn("auth-internal",e=>{const n=ap(e.getProvider("auth").getImmediate());return(s=>new NN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Wv,Jv,MN(r)),an(Wv,Jv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=5*60,xN=PE("authIdTokenMaxAge")||VN;let eE=null;const LN=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xN)return;const o=n==null?void 0:n.token;eE!==o&&(eE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function UN(r=sh()){const e=ns(r,"auth");if(e.isInitialized())return e.getImmediate();const n=g2(r,{popupRedirectResolver:ON,persistence:[q2,D2,G0]}),s=PE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=LN(u.toString());R2(n,f,()=>f(n.currentUser)),b2(n,m=>f(m))}}const o=xE("auth");return o&&_2(n,`http://${o}`),n}function PN(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}f2({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=hi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",PN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kN("Browser");let xc={};const tE=window.location.hostname;tE.includes("gwi-news")?xc=JSON.parse(`{
    "apiKey": "AIzaSyBlo_upI2kwLPk3GBKez86KnpZ2kPhxmyY",
    "authDomain": "gwinews-e715f.firebaseapp.com",
    "projectId": "gwinews-e715f",
    "storageBucket": "gwinews-e715f.appspot.com",
    "messagingSenderId": "1049545143586",
    "appId": "1:1049545143586:web:5e69fb8d76ed9849ef617b",
    "measurementId": "G-BXRDN9KNWT"
}`):tE.includes("test")?xc=JSON.parse(`{
    "apiKey": "AIzaSyDA6h0mzespQNhrTx0xEZ4DPGVpX8hb3ns",
    "authDomain": "gwinews-teste.firebaseapp.com",
    "databaseURL": "https://gwinews-teste-default-rtdb.firebaseio.com",
    "projectId": "gwinews-teste",
    "storageBucket": "gwinews-teste.appspot.com",
    "messagingSenderId": "453721244655",
    "appId": "1:453721244655:web:1d0833f203815bdaf8ec1a",
    "measurementId": "G-CY5NSZ046E"
}`):xc=JSON.parse(`{
    "apiKey": "AIzaSyA6MmENZ7Sk0K79kgZ8xXia0BuuT0SVGA8",
    "authDomain": "gwinews-development.firebaseapp.com",
    "projectId": "gwinews-development",
    "storageBucket": "gwinews-development.appspot.com",
    "messagingSenderId": "761484217666",
    "appId": "1:761484217666:web:c8515c2333d54ed167ccdb",
    "measurementId": "G-XE4D9VZC7Z"
}`);const Ah=KE(xc);cC(Ah);const zN=WD(Ah);PO(Ah);UN(Ah);const BN="_newsCard_1c8na_1",qN="_newsCardLinkTitle_1c8na_21",nE={newsCard:BN,newsCardLinkTitle:qN},HN=({newsItem:r})=>Ne.jsx(pc,{className:`${nE.newsCard} p-2 m-1`,children:Ne.jsxs(Rm,{to:`${r.category}/${r.id}`,className:`${nE.newsCardLinkTitle} text-decoration-none`,children:[Ne.jsx(pc.Img,{src:r.url_image}),Ne.jsx(pc.Body,{children:Ne.jsx(pc.Title,{children:r.title})})]})}),jN=()=>{const[r,e]=F.useState([]),n=ZD(zN,"News");return F.useEffect(()=>{(async()=>{const u=(await fO(n)).docs.map(f=>f.data());e(u)})()},[]),Ne.jsx(Im,{fluid:!0,className:`${mb.newsDashboardContainer} w-100 p-2 d-flex justify-content-center align-items-start flex-wrap`,children:r.map((s,o)=>Ne.jsx(HN,{newsItem:s},o))})};function FN(){const[r,e]=F.useState(void 0);return Ne.jsx(Ne.Fragment,{children:Ne.jsx(ib,{value:{user:r},children:Ne.jsxs($w,{children:[Ne.jsx(fb,{}),Ne.jsx(Sw,{children:Ne.jsx(mE,{path:"/",element:Ne.jsx(jN,{})})})]})})})}MS.createRoot(document.getElementById("root")).render(Ne.jsx(F.StrictMode,{children:Ne.jsx(FN,{})}));
