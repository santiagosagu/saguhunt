_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"+DjP":function(e,t,n){"use strict";var r=n("rePB"),o=n("q1tI");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e,t,n){var a=Object(o.useState)(e),c=a[0],u=a[1],s=Object(o.useState)({}),l=s[0],p=s[1],d=Object(o.useState)(!1),f=d[0],m=d[1];Object(o.useEffect)((function(){f&&(0===Object.keys(l).length&&n(),m(!1))}),[l]);return{valores:c,errores:l,handleSubmit:function(e){e.preventDefault();var n=t(c);p(n),m(!0)},handleChange:function(e){u(i(i({},c),{},Object(r.a)({},e.target.name,e.target.value)))},handlerBlur:function(){var e=t(c);p(e),m(!0)}}}},Gq1r:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("qKvR");o.a.createElement;var i={name:"u2wvoe",styles:"margin-top:5rem;text-align:center;"};t.a=function(){return Object(a.c)("h1",{css:i},"No se puede mostrar")}},KQpA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=s(a),c=s(n("zpNE")),u=s(n("hu/m"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e){var t=/(?:\.([^.]+))?$/.exec(e);return null!=t&&null!=t[0]?t[0]:""}var f=function(e){function t(){var e,n,r;l(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.uploadTasks=[],r.handleFileSelection=function(e){for(var t=e.target.files,n=0;n<t.length;n++)r.startUpload(t[n])},p(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cancelRunningUploads()}},{key:"cancelRunningUploads",value:function(){for(;this.uploadTasks.length>0;){var e=this.uploadTasks.pop();"running"===e.snapshot.state&&e.cancel()}}},{key:"removeTask",value:function(e){for(var t=0;t<this.uploadTasks.length;t++)if(this.uploadTasks[t]===e)return void this.uploadTasks.splice(t,1)}},{key:"startUpload",value:function(e){var t=this,n=this.props,r=n.onUploadStart,o=n.onProgress,a=n.onUploadError,i=n.onUploadSuccess,s=n.storageRef,l=n.metadata,p=n.randomizeFilename,f=n.filename,m=void 0;d(m=f?"function"===typeof f?f(e):f:p?(0,c.default)():e.name)||(m+=d(e.name)),Promise.resolve().then((function(){return e.type.match(/image.*/)&&(t.props.maxWidth||t.props.maxHeight)?(0,u.default)(e,t.props.maxWidth,t.props.maxHeight):e})).then((function(e){var n=s.child(m).put(e,l);r&&r(e,n),n.on("state_changed",(function(e){return o&&o(Math.round(100*e.bytesTransferred/e.totalBytes),n)}),(function(e){return a&&a(e,n)}),(function(){return t.removeTask(n),i&&i(n.snapshot.metadata.name,n)})),t.uploadTasks.push(n)}))}},{key:"render",value:function(){var e=this.props,t=(e.storageRef,e.onUploadStart,e.onProgress,e.onUploadSuccess,e.onUploadError,e.randomizeFilename,e.metadata,e.filename,e.maxWidth,e.maxHeight,e.hidden),n=e.as,o=void 0===n?"input":n,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["storageRef","onUploadStart","onProgress","onUploadSuccess","onUploadError","randomizeFilename","metadata","filename","maxWidth","maxHeight","hidden","as"]),c=t?Object.assign({},a.style,{width:"0.1px",height:"0.1px",opacity:0,overflow:"hidden",position:"absolute",zIndex:-1}):a.style;return i.default.createElement(o,r({type:"file",onChange:this.handleFileSelection},a,{style:c}))}}]),t}(a.Component);t.default=f},Sfbb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var r=atob(this.toDataURL(t,n).split(",")[1]),o=r.length,a=new Uint8Array(o),i=0;i<o;i++)a[i]=r.charCodeAt(i);e(new Blob([a],{type:t||"image/png"}))}})}},TCLN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nuevo-producto",function(){return n("cf6P")}])},V5hS:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},cf6P:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("q1tI"),c=n.n(i),u=n("80PL"),s=n("sPpI"),l=n("qKvR"),p=n("nOHt"),d=n("KQpA"),f=n.n(d),m=n("xWvD"),b=n("Gq1r"),h=n("+DjP");function g(e){var t={};return e.nombre||(t.nombre="El nombre es Obligatorio"),e.empresa||(t.empresa="El nombre de Empresa es Obligatorio"),e.url?/^(ftp|http|https):\/\/[^ "]+$/.test(e.url)||(t.url="URL la Formateada o no valida"):t.url="La URL del Producto es Obligatoria",e.descripcion||(t.descripcion="Agrega una descripcion de tu Producto"),t}c.a.createElement;var v={name:"1ap128e",styles:"text-align:center;margin-top:5rem;"};function y(){var e=Object(i.useState)(""),t=(e[0],e[1]),n=Object(i.useState)(!1),r=(n[0],n[1]),d=Object(i.useState)(0),y=(d[0],d[1]),O=Object(i.useState)(""),j=O[0],w=O[1],x=Object(i.useState)(!1),P=x[0],S=(x[1],Object(h.a)({nombre:"",empresa:"",url:"",descripcion:""},g,(function(){return M.apply(this,arguments)}))),_=S.valores,E=S.errores,k=S.handleSubmit,U=S.handleChange,C=S.handlerBlur,R=_.nombre,T=_.empresa,N=_.url,D=_.descripcion,F=Object(p.useRouter)(),z=Object(i.useContext)(m.a),I=z.usuario,L=z.firebase;function M(){return(M=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P){e.next=2;break}return e.abrupt("return");case 2:if(I){e.next=4;break}return e.abrupt("return",F.push("/login"));case 4:return t={nombre:R,empresa:T,url:N,urlImagen:j,descripcion:D,votos:0,comentarios:[],creado:Date.now(),creador:{id:I.uid,nombre:I.displayName},haVotado:[]},L.db.collection("productos").add(t),e.abrupt("return",F.push("/"));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.c)("div",null,Object(l.c)(u.a,null,I?Object(l.c)(c.a.Fragment,null,Object(l.c)("h1",{css:v},"   Nuevo Producto"),Object(l.c)(s.c,{onSubmit:k,noValidate:!0},Object(l.c)(s.a,null,Object(l.c)("label",{htmlFor:"nombre"},"Nombre"),Object(l.c)("input",{type:"text",id:"nombre",placeholder:"Nombre del producto",name:"nombre",value:R,onChange:U,onBlur:C})),E.nombre&&Object(l.c)(s.b,null,E.nombre),Object(l.c)(s.a,null,Object(l.c)("label",{htmlFor:"empresa"},"Empresa"),Object(l.c)("input",{type:"text",id:"empresa",placeholder:"Nombre empresa o compa\xf1ia",name:"empresa",value:T,onChange:U})),E.empresa&&Object(l.c)(s.b,null,E.empresa),Object(l.c)(s.a,null,Object(l.c)("label",{htmlFor:"imagen"},"Imagen"),Object(l.c)(f.a,{accept:"image/*",id:"imagen",name:"imagen",randomizeFilename:!0,storageRef:L.storage.ref("productos"),onUploadStart:function(){y(0),r(!0)},onUploadError:function(e){r(e),console.error(e)},onUploadSuccess:function(e){y(100),r(!1),t(e),L.storage.ref("productos").child(e).getDownloadURL().then((function(e){console.log(e),w(e)}))},onProgress:function(e){return y({progreso:e})}})),Object(l.c)(s.a,null,Object(l.c)("label",{htmlFor:"url"},"URL"),Object(l.c)("input",{type:"text",id:"url",name:"url",placeholder:"https://www.midominio.com",value:N,onChange:U})),E.url&&Object(l.c)(s.b,null,E.url),Object(l.c)(s.a,null,Object(l.c)("textarea",{id:"descripcion",name:"descripcion",placeholder:"Descripcion de tu Producto",value:D,onChange:U})),E.descripcion&&Object(l.c)(s.b,null,E.descripcion),P&&Object(l.c)(s.b,null,P),Object(l.c)(s.d,{type:"submit",value:"Crear Producto"}))):Object(l.c)(b.a,null)))}},"hu/m":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){HTMLCanvasElement.prototype.toBlob||(0,a.default)();return new Promise((function(r,o){var a=new FileReader;a.onload=function(a){var i=new Image;i.onload=function(a){var c=document.createElement("canvas"),u=t||i.width,s=n||i.height;c.width=u,c.height=s;var l=u/i.width,p=s/i.height,d=Math.max(l,p),f=d*i.width,m=d*i.height,b=Math.min((s-m)/2,0),h=Math.min((u-f)/2,0),g=c.getContext("2d");if(!g)return o("Could not get the context of the canvas element");g.drawImage(i,h,b,f,m),c.toBlob((function(e){r(e)}),e.type)},i.src=a.target.result},a.readAsDataURL(e)}))};var r,o=n("Sfbb"),a=(r=o)&&r.__esModule?r:{default:r}},rnWd:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},sPpI:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("wTIg");var o=Object(r.a)("form",{target:"e1fsgs3o0"})({name:"1eyfksy",styles:"max-width:600px;width:95%;margin:5rem auto 0 auto;fieldset{margin:2rem 0;border:1px solid #e1e1e1;font-size:2rem;padding:2rem;}@media (max-width:768px){max-width:100%}"}),a=Object(r.a)("div",{target:"e1fsgs3o1"})({name:"1h5pbd9",styles:"margin-bottom:2rem;display:flex;align-items:center;label{flex:0 0 150px;font-size:1.8rem;}@media (max-width:768px){label{flex:0 0 80px;}}input,textarea{flex:1;padding:1rem;}textarea{height:400px;}@media (max-width:768px){textarea{height:200px;}}"}),i=Object(r.a)("input",{target:"e1fsgs3o2"})({name:"19f44wq",styles:"background-color:var(--naranja);width:100%;padding:1.5rem;text-align:center;color:white;font-size:1.8rem;text-transform:uppercase;border:none;font-family:'PT Sans' sans-serif;font-weight:700;&:hover{cursor:pointer;}"}),c=Object(r.a)("p",{target:"e1fsgs3o3"})({name:"wli2uz",styles:"background-color:red;padding:1rem;font-family:'PT Sans',sans-serif;font-weight:700;font-size:1.4rem;color:#fff;text-align:center;text-transform:uppercase;margin:2rem 0;"})},zpNE:function(e,t,n){var r=n("V5hS"),o=n("rnWd");e.exports=function(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[a+c]=i[c];return t||o(i)}}},[["TCLN",1,2,3,4,0,5,6]]]);