_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"2qVx":function(e,t,r){"use strict";r.r(t);var n=r("rePB");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r("o0o1"),c=r.n(o),s=r("HaE+"),u=r("wTIg"),f=r("q1tI"),l=r.n(f),p=r("nOHt"),d=r("xWvD"),h=r("Gq1r"),m=r("80PL"),b=r("qKvR"),y=r("7xvl"),v=r("1UYf"),g=r("sPpI"),O=r("DejG");r("dtb4"),l.a.createElement;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=Object(u.a)("div",{target:"e11n6apd0"})({name:"1feckq",styles:"@media (min-width:768px){display:grid;grid-template-columns:2fr 1fr;column-gap:2rem;}"}),E=Object(u.a)("p",{target:"e11n6apd1"})({name:"2vahkx",styles:"padding:.5rem 2rem;background-color:#DA552F;color:#fff;text-transform:uppercase;font-weight:bold;display:inline-block;text-align:center;"}),P={name:"1ap128e",styles:"text-align:center;margin-top:5rem;"},R={name:"aeoew",styles:"margin-top:5rem;"},A={name:"11unw44",styles:"text-align:center;font-weight:700;font-size:3rem;"},S={name:"xqqg40",styles:"margin:2rem 0;"},T={name:"1x0f0jw",styles:"border:1px solid #e1e1e1;padding:2rem;"},k={name:"rwqtsj",styles:"font-size:1.3rem;"},C={name:"in3yi3",styles:"font-weight:bold;"};t.default=function(){var e=Object(f.useState)({}),t=e[0],r=e[1],i=Object(f.useState)(!1),o=i[0],u=i[1],w=Object(f.useState)({}),_=w[0],D=w[1],I=Object(f.useState)(!0),N=I[0],q=I[1],M=Object(p.useRouter)(),F=M.query.id,z=Object(f.useContext)(d.a),H=z.firebase,V=z.usuario;if(Object(f.useEffect)((function(){F&&N&&function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.db.collection("productos").doc(F);case 2:return t=e.sent,e.next=5,t.get();case 5:(n=e.sent).exists?(r(n.data()),q(!1)):(u(!0),q(!1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[F,t]),0===Object.keys(t).length&&!o)return Object(b.c)("p",null,"Cargando...");var U=t.comentarios,W=t.creado,$=t.descripcion,L=t.empresa,B=t.nombre,G=t.url,X=t.urlImagen,J=t.votos,K=t.creador,Y=t.haVotado,Q=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V){e.next=2;break}return e.abrupt("return",M.push("/login"));case 2:if(K.id===V.uid){e.next=4;break}return e.abrupt("return",M.push("/"));case 4:return e.prev=4,e.next=7,H.db.collection("productos").doc(F).delete();case 7:M.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return Object(b.c)(m.a,null,Object(b.c)(l.a.Fragment,null,o?Object(b.c)(h.a,null):Object(b.c)("div",{className:"contenedor"},Object(b.c)("h1",{css:P},B),Object(b.c)(j,null,Object(b.c)("div",null,Object(b.c)("p",null,"Publicado hace: ",Object(y.a)(new Date(W),{locale:v.a})),Object(b.c)("p",null,"Por: ",K.nombre," de ",L),Object(b.c)("img",{src:X,alt:"Imagen del Producto"}),Object(b.c)("p",null,$),Object(b.c)("div",{css:R},Object(b.c)("p",{css:A}," ",J," Votos"),V&&Object(b.c)(O.a,{onClick:function(){if(!V)return M.push("/login");var e=J+1;if(!Y.includes(V.uid)){var n=[].concat(a(Y),[V.uid]);H.db.collection("productos").doc(F).update({votos:e,haVotado:n}),r(x(x({},t),{},{votos:e})),q(!0)}}},"Votar")),V&&Object(b.c)(l.a.Fragment,null,Object(b.c)("h2",null,"Agrega tu comentario"),Object(b.c)("form",{onSubmit:function(e){if(e.preventDefault(),!V)return M.push("/login");_.usuarioId=V.uid,_.usuarioNombre=V.displayName;var n=[].concat(a(U),[_]);H.db.collection("productos").doc(F).update({comentarios:n}),r(x(x({},t),{},{comentario:n})),q(!0)}},Object(b.c)(g.a,null,Object(b.c)("input",{type:"text",name:"mensaje",onChange:function(e){D(x(x({},_),{},Object(n.a)({},e.target.name,e.target.value)))}})),Object(b.c)(g.d,{type:"submit",value:"Agregar Comentario"}))),Object(b.c)("h2",{css:S}," Comentarios"),0===U.length?"Aun no hay Comentarios":Object(b.c)("ul",null,U.map((function(e,t){return Object(b.c)("li",{key:"".concat(e.usuarioId,"-").concat(t),css:T},Object(b.c)("p",null,e.mensaje),Object(b.c)("p",{css:k}," Escrito por:",Object(b.c)("span",{css:C}," ",e.usuarioNombre)),function(e){if(K.id===e)return!0}(e.usuarioId)&&Object(b.c)(E,null,"Es Creador"))})))),Object(b.c)("aside",null,Object(b.c)(O.a,{target:"_blank",bgColor:"true",href:G},"   Visitar URL"))),!!V&&(K.id===V.uid||void 0)&&Object(b.c)(O.a,{onClick:Q},"   Eliminar Producto"))))}},Gq1r:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),a=r("qKvR");i.a.createElement;var o={name:"u2wvoe",styles:"margin-top:5rem;text-align:center;"};t.a=function(){return Object(a.c)("h1",{css:o},"No se puede mostrar")}},N6Fi:function(e,t,r){"use strict";var n=r("lSNA");function i(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.pathToRegexp=t.default=t.customRouteMatcherOptions=t.matcherOptions=void 0;var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r("zOyy"));function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}t.pathToRegexp=s;var f={sensitive:!1,delimiter:"/",decode:function(e){try{return decodeURIComponent(e)}catch(r){var t=new Error("failed to decode param");throw t.code="DECODE_FAILED",t}}};t.matcherOptions=f;var l=c(c({},f),{},{strict:!0});t.customRouteMatcherOptions=l;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){var r=[],n=s.pathToRegexp(t,r,e?l:f),a=s.regexpToFunction(n,r,f);return function(t,n){var o=null!=t&&a(t);if(!o)return!1;if(e){var s,u=i(r);try{for(u.s();!(s=u.n()).done;){var f=s.value;"number"===typeof f.name&&delete o.params[f.name]}}catch(l){u.e(l)}finally{u.f()}}return c(c({},n),o.params)}}}},"VWc+":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[id]",function(){return r("2qVx")}])},dtb4:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.route=void 0;var n,i=(n=r("N6Fi"))&&n.__esModule?n:{default:n},a=r("X24+");const o=(0,i.default)();t.route=o;const c=new Set(["rewrite","redirect","header"]);function s(e,t){return t.replace(e,"")||"/"}t.default=class{constructor({basePath:e="",headers:t=[],fsRoutes:r=[],rewrites:n=[],redirects:i=[],catchAllRoute:a,dynamicRoutes:o=[],pageChecker:c,useFileSystemPublicRoutes:s}){this.basePath=void 0,this.headers=void 0,this.fsRoutes=void 0,this.rewrites=void 0,this.redirects=void 0,this.catchAllRoute=void 0,this.pageChecker=void 0,this.dynamicRoutes=void 0,this.useFileSystemPublicRoutes=void 0,this.basePath=e,this.headers=t,this.fsRoutes=r,this.rewrites=n,this.redirects=i,this.pageChecker=c,this.catchAllRoute=a,this.dynamicRoutes=o,this.useFileSystemPublicRoutes=s}setDynamicRoutes(e=[]){this.dynamicRoutes=e}addFsRoute(e){this.fsRoutes.unshift(e)}async execute(e,t,r){const n={},i=async e=>{if(n[e])return n[e];const t=this.pageChecker(e);return n[e]=t,t};let u=r;const f=[...this.headers,...this.redirects,...this.fsRoutes,...this.useFileSystemPublicRoutes?[{type:"route",name:"page checker",requireBasePath:!1,match:o("/:path*"),fn:async(e,t,r,n)=>{let{pathname:o}=n;return o=(0,a.removePathTrailingSlash)(o||"/"),o&&await i(o)?this.catchAllRoute.fn(e,t,r,n):{finished:!1}}}]:[],...this.rewrites,...this.useFileSystemPublicRoutes?[this.catchAllRoute]:[]],l=!this.basePath||e._nextHadBasePath;for(const a of f){let r=u.pathname;const n=r,o=!1!==a.requireBasePath,f=c.has(a.type),p="public folder catchall"===a.name,d=f||p;d||(r=s(this.basePath,r));const h=a.match(r);if(h){if(!d){if(!l&&!e._nextDidRewrite){if(o)return!1;continue}u.pathname=r}const c=await a.fn(e,t,h,u);if(c.finished)return!0;if(d||(u.pathname=n),c.pathname&&(u.pathname=c.pathname),c.query&&(u.query={...u.query,...c.query}),!0===a.check){const r=u.pathname,n=s(this.basePath,r);for(const i of this.fsRoutes){const a=i.match(n);if(a){u.pathname=n;if((await i.fn(e,t,a,u)).finished)return!0;u.pathname=r}}let a=await i(n);if(!a)for(const e of this.dynamicRoutes)e.match(n)&&(a=!0);if(a){u.pathname=n;const r=this.catchAllRoute.match(u.pathname);return await this.catchAllRoute.fn(e,t,r,u),!0}}}}return!1}}},sPpI:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r("wTIg");var i=Object(n.a)("form",{target:"e1fsgs3o0"})({name:"1eyfksy",styles:"max-width:600px;width:95%;margin:5rem auto 0 auto;fieldset{margin:2rem 0;border:1px solid #e1e1e1;font-size:2rem;padding:2rem;}@media (max-width:768px){max-width:100%}"}),a=Object(n.a)("div",{target:"e1fsgs3o1"})({name:"1h5pbd9",styles:"margin-bottom:2rem;display:flex;align-items:center;label{flex:0 0 150px;font-size:1.8rem;}@media (max-width:768px){label{flex:0 0 80px;}}input,textarea{flex:1;padding:1rem;}textarea{height:400px;}@media (max-width:768px){textarea{height:200px;}}"}),o=Object(n.a)("input",{target:"e1fsgs3o2"})({name:"19f44wq",styles:"background-color:var(--naranja);width:100%;padding:1.5rem;text-align:center;color:white;font-size:1.8rem;text-transform:uppercase;border:none;font-family:'PT Sans' sans-serif;font-weight:700;&:hover{cursor:pointer;}"}),c=Object(n.a)("p",{target:"e1fsgs3o3"})({name:"wli2uz",styles:"background-color:red;padding:1rem;font-family:'PT Sans',sans-serif;font-weight:700;font-size:1.4rem;color:#fff;text-align:center;text-transform:uppercase;margin:2rem 0;"})},zOyy:function(e,t,r){"use strict";function n(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var i=1,a="";if("?"===e[c=r+1])throw new TypeError('Pattern cannot start with "?" at '+c);for(;c<e.length;)if("\\"!==e[c]){if(")"===e[c]){if(0===--i){c++;break}}else if("("===e[c]&&(i++,"?"!==e[c+1]))throw new TypeError("Capturing groups are not allowed at "+c);a+=e[c++]}else a+=e[c++]+e[c++];if(i)throw new TypeError("Unbalanced pattern at "+r);if(!a)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:a}),r=c}else{for(var o="",c=r+1;c<e.length;){var s=e.charCodeAt(c);if(!(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||95===s))break;o+=e[c++]}if(!o)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:o}),r=c}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,a="[^"+o(t.delimiter||"/#?")+"]+?",c=[],s=0,u=0,f="",l=function(e){if(u<r.length&&r[u].type===e)return r[u++].value},p=function(e){var t=l(e);if(void 0!==t)return t;var n=r[u],i=n.type,a=n.index;throw new TypeError("Unexpected "+i+" at "+a+", expected "+e)},d=function(){for(var e,t="";e=l("CHAR")||l("ESCAPED_CHAR");)t+=e;return t};u<r.length;){var h=l("CHAR"),m=l("NAME"),b=l("PATTERN");if(m||b){var y=h||"";-1===i.indexOf(y)&&(f+=y,y=""),f&&(c.push(f),f=""),c.push({name:m||s++,prefix:y,suffix:"",pattern:b||a,modifier:l("MODIFIER")||""})}else{var v=h||l("ESCAPED_CHAR");if(v)f+=v;else if(f&&(c.push(f),f=""),l("OPEN")){y=d();var g=l("NAME")||"",O=l("PATTERN")||"",w=d();p("CLOSE"),c.push({name:g||(O?s++:""),pattern:g&&!O?a:O,prefix:y,suffix:w,modifier:l("MODIFIER")||""})}else p("END")}}return c}function i(e,t){void 0===t&&(t={});var r=c(t),n=t.encode,i=void 0===n?function(e){return e}:n,a=t.validate,o=void 0===a||a,s=e.map((function(e){if("object"===typeof e)return new RegExp("^(?:"+e.pattern+")$",r)}));return function(t){for(var r="",n=0;n<e.length;n++){var a=e[n];if("string"!==typeof a){var c=t?t[a.name]:void 0,u="?"===a.modifier||"*"===a.modifier,f="*"===a.modifier||"+"===a.modifier;if(Array.isArray(c)){if(!f)throw new TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===c.length){if(u)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var l=0;l<c.length;l++){var p=i(c[l],a);if(o&&!s[n].test(p))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix}}else if("string"!==typeof c&&"number"!==typeof c){if(!u){var d=f?"an array":"a string";throw new TypeError('Expected "'+a.name+'" to be '+d)}}else{p=i(String(c),a);if(o&&!s[n].test(p))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix}}else r+=a}return r}}function a(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var a=n[0],o=n.index,c=Object.create(null),s=function(e){if(void 0===n[e])return"continue";var r=t[e-1];"*"===r.modifier||"+"===r.modifier?c[r.name]=n[e].split(r.prefix+r.suffix).map((function(e){return i(e,r)})):c[r.name]=i(n[e],r)},u=1;u<n.length;u++)s(u);return{path:a,index:o,params:c}}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function c(e){return e&&e.sensitive?"":"i"}function s(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,a=r.start,s=void 0===a||a,u=r.end,f=void 0===u||u,l=r.encode,p=void 0===l?function(e){return e}:l,d="["+o(r.endsWith||"")+"]|$",h="["+o(r.delimiter||"/#?")+"]",m=s?"^":"",b=0,y=e;b<y.length;b++){var v=y[b];if("string"===typeof v)m+=o(p(v));else{var g=o(p(v.prefix)),O=o(p(v.suffix));if(v.pattern)if(t&&t.push(v),g||O)if("+"===v.modifier||"*"===v.modifier){var w="*"===v.modifier?"?":"";m+="(?:"+g+"((?:"+v.pattern+")(?:"+O+g+"(?:"+v.pattern+"))*)"+O+")"+w}else m+="(?:"+g+"("+v.pattern+")"+O+")"+v.modifier;else m+="("+v.pattern+")"+v.modifier;else m+="(?:"+g+O+")"+v.modifier}}if(f)i||(m+=h+"?"),m+=r.endsWith?"(?="+d+")":"$";else{var x=e[e.length-1],j="string"===typeof x?h.indexOf(x[x.length-1])>-1:void 0===x;i||(m+="(?:"+h+"(?="+d+"))?"),j||(m+="(?="+h+"|"+d+")")}return new RegExp(m,c(r))}function u(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?function(e,t,r){var n=e.map((function(e){return u(e,t,r).source}));return new RegExp("(?:"+n.join("|")+")",c(r))}(e,t,r):function(e,t,r){return s(n(e,r),t,r)}(e,t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=n,t.compile=function(e,t){return i(n(e,t),t)},t.tokensToFunction=i,t.match=function(e,t){var r=[];return a(u(e,r,t),r,t)},t.regexpToFunction=a,t.tokensToRegexp=s,t.pathToRegexp=u}},[["VWc+",1,2,3,4,0,5,6,7]]]);