(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{36:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return h}));var n=r(42),o=r.n(n),i="bf0957773382584d05a14ff44449aecb",a="https://api.themoviedb.org/3",c=function(){return o.a.get("".concat(a,"/trending/movie/day?api_key=").concat(i)).then((function(t){return t.data.results}))},s=function(t){return o.a.get("".concat(a,"/search/movie?query=").concat(t,"&api_key=").concat(i))},u=function(t){return o.a.get("".concat(a,"/search/movie").concat(t,"&api_key=").concat(i))},h=function(t){return o.a.get("".concat(a,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US&append_to_response=reviews,credits"))}},39:function(t,e,r){t.exports=r(40)},40:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",v="completed",d={};function y(){}function m(){}function j(){}var b={};b[i]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==r&&n.call(w,i)&&(b=w);var O=j.prototype=y.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return m.prototype=O.constructor=j,j.constructor=m,m.displayName=s(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,c,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},41:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},71:function(t,e,r){t.exports={movie__card:"MovieCard_movie__card__2JkrU",movie__poster:"MovieCard_movie__poster__3PyFm",movie__info:"MovieCard_movie__info__159z_"}},72:function(t,e,r){t.exports={container:"MovieDetailsView_container__202r1",returnBtn:"MovieDetailsView_returnBtn__2DUFR",addInfo:"MovieDetailsView_addInfo__1BYhI"}},76:function(t,e,r){"use strict";r.r(e);var n=r(39),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=r(41),u=r(34),h=r(35),l=r(38),f=r(37),p=r(0),v=r(9),d=r(2),y=r(1),m=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={cast:[]},t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.setState({cast:this.props.cast})}},{key:"render",value:function(){return Object(y.jsx)("ul",{children:this.state.cast.map((function(t){return Object(y.jsxs)("li",{children:[t.profile_path&&Object(y.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(t.profile_path),alt:t.name}),Object(y.jsx)("p",{children:t.name}),Object(y.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}}]),r}(p.Component),j=r(71),b=r.n(j),g=function(t){var e=t.poster_path,r=t.title,n=t.vote_average,o=t.overview,i=t.genres;return Object(y.jsxs)("div",{className:b.a.movie__card,children:[Object(y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:r,className:b.a.movie__poster,style:{width:260}}),Object(y.jsxs)("div",{className:b.a.movie__info,children:[Object(y.jsx)("h2",{children:r}),Object(y.jsxs)("p",{children:["User score: ",n]}),Object(y.jsx)("h3",{children:"Overview"}),Object(y.jsx)("p",{children:o}),Object(y.jsx)("h3",{children:"Genres"}),Object(y.jsx)("p",{children:i.map((function(t){return Object(y.jsxs)("span",{children:[t.name," "]},t.name)}))})]})]})},w=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={reviews:[]},t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.setState({reviews:this.props.reviews})}},{key:"render",value:function(){return Object(y.jsx)("ul",{children:this.state.reviews.length>0?this.state.reviews.map((function(t){return Object(y.jsxs)("li",{children:[Object(y.jsx)("h2",{children:t.author}),Object(y.jsx)("p",{children:t.content})]},t.id)})):Object(y.jsx)("p",{children:"We don't have any revies about this movie."})})}}]),r}(p.Component),O=r(7),x=r(36),_=r(72),L=r.n(_),k=function(t){Object(l.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={id:null,poster_path:"",title:"",vote_average:null,overview:"",genres:[],credits:null,reviews:null},t.handleGoBack=function(){var e,r=t.props,n=r.location;r.history.push((null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.from)||O.a.home)},t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,Object(x.a)(e);case 3:r=t.sent,this.setState(c({},r.data));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.poster_path,r=t.title,n=t.vote_average,o=t.overview,i=t.genres,a=t.reviews,s=t.credits,u=this.props.location;return Object(y.jsxs)("div",{className:L.a.container,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:L.a.returnBtn,type:"button",onClick:this.handleGoBack,children:"Go back"}),this.state.id&&Object(y.jsx)(g,{poster_path:e,title:r,vote_average:n,overview:o,genres:i})]}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:L.a.addInfo,children:[Object(y.jsx)("p",{children:"Additional information"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(v.b,{to:{pathname:"".concat(this.props.match.url,"/cast"),state:{from:u.state.from}},children:"Cast"})}),Object(y.jsx)("li",{children:Object(y.jsx)(v.b,{to:{pathname:"".concat(this.props.match.url,"/reviews"),state:{from:u.state.from}},children:"Reviews"})})]})]}),Object(y.jsx)(d.b,{exact:!0,path:"".concat(this.props.match.path,"/cast"),render:function(t){return Object(y.jsx)(m,c(c({},t),{},{cast:s.cast}))}}),Object(y.jsx)(d.b,{exact:!0,path:"".concat(this.props.match.path,"/reviews"),render:function(t){return Object(y.jsx)(w,c(c({},t),{},{reviews:a.results}))}})]})]})}}]),r}(p.Component);e.default=k}}]);
//# sourceMappingURL=movie-details-view.dc0baf45.chunk.js.map