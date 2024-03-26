(()=>{"use strict";var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var r=function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function n(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(u=0)),u;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=e.call(t,u)}catch(t){s=[6,t],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function u(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}function s(t){return this instanceof s?(this.v=t,this):new s(t)}function c(t){return"function"==typeof t}function a(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var l=a((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function f(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var d=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,r,n,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var f=o(a),d=f.next();!d.done;d=f.next())d.value.remove(this)}catch(e){t={error:e}}finally{try{d&&!d.done&&(e=f.return)&&e.call(f)}finally{if(t)throw t.error}}else a.remove(this);var h=this.initialTeardown;if(c(h))try{h()}catch(t){s=t instanceof l?t.errors:[t]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var y=o(v),b=y.next();!b.done;b=y.next()){var m=b.value;try{p(m)}catch(t){s=null!=s?s:[],t instanceof l?s=u(u([],i(s)),i(t.errors)):s.push(t)}}}catch(t){r={error:t}}finally{try{b&&!b.done&&(n=y.return)&&n.call(y)}finally{if(r)throw r.error}}}if(s)throw new l(s)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)p(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&f(e,t)},t.prototype.remove=function(e){var r=this._finalizers;r&&f(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();function h(t){return t instanceof d||t&&"closed"in t&&c(t.remove)&&c(t.add)&&c(t.unsubscribe)}function p(t){c(t)?t():t.unsubscribe()}d.EMPTY;var v=function(t){function r(e,r){return t.call(this)||this}return e(r,t),r.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},r}(d),y={setInterval:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=y.delegate;return(null==o?void 0:o.setInterval)?o.setInterval.apply(o,u([t,e],i(r))):setInterval.apply(void 0,u([t,e],i(r)))},clearInterval:function(t){var e=y.delegate;return((null==e?void 0:e.clearInterval)||clearInterval)(t)},delegate:void 0},b=function(t){function r(e,r){var n=t.call(this,e,r)||this;return n.scheduler=e,n.work=r,n.pending=!1,n}return e(r,t),r.prototype.schedule=function(t,e){var r;if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,e)),this.pending=!0,this.delay=e,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(o,this.id,e),this},r.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),y.setInterval(t.flush.bind(t,this),r)},r.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!=r&&this.delay===r&&!1===this.pending)return e;null!=e&&y.clearInterval(e)},r.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,e){var r,n=!1;try{this.work(t)}catch(t){n=!0,r=t||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r},r.prototype.unsubscribe=function(){if(!this.closed){var e=this.id,r=this.scheduler,n=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,f(n,this),null!=e&&(this.id=this.recycleAsyncId(r,e,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},r}(v),m={now:function(){return(m.delegate||Date).now()},delegate:void 0},w=function(){function t(e,r){void 0===r&&(r=t.now),this.schedulerActionCtor=e,this.now=r}return t.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.schedulerActionCtor(this,t).schedule(r,e)},t.now=m.now,t}(),g=new(function(t){function r(e,r){void 0===r&&(r=w.now);var n=t.call(this,e,r)||this;return n.actions=[],n._active=!1,n}return e(r,t),r.prototype.flush=function(t){var e=this.actions;if(this._active)e.push(t);else{var r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},r}(w))(b),x=g,S={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},E={setTimeout:function(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o=E.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,u([t,e],i(r))):setTimeout.apply(void 0,u([t,e],i(r)))},clearTimeout:function(t){var e=E.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function _(t){E.setTimeout((function(){var e=S.onUnhandledError;if(!e)throw t;e(t)}))}function T(){}var P=I("C",void 0,void 0);function I(t,e,r){return{kind:t,value:e,error:r}}var j=null,O=function(t){function r(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,h(e)&&e.add(r)):r.destination=U,r}return e(r,t),r.create=function(t,e,r){return new R(t,e,r)},r.prototype.next=function(t){this.isStopped?D(function(t){return I("N",t,void 0)}(t),this):this._next(t)},r.prototype.error=function(t){this.isStopped?D(I("E",void 0,t),this):(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped?D(P,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(d),A=Function.prototype.bind;function L(t,e){return A.call(t,e)}var C=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){k(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){k(t)}else k(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){k(t)}},t}(),R=function(t){function r(e,r,n){var o,i,u=t.call(this)||this;return c(e)||!e?o={next:null!=e?e:void 0,error:null!=r?r:void 0,complete:null!=n?n:void 0}:u&&S.useDeprecatedNextContext?((i=Object.create(e)).unsubscribe=function(){return u.unsubscribe()},o={next:e.next&&L(e.next,i),error:e.error&&L(e.error,i),complete:e.complete&&L(e.complete,i)}):o=e,u.destination=new C(o),u}return e(r,t),r}(O);function k(t){var e;S.useDeprecatedSynchronousErrorHandling?(e=t,S.useDeprecatedSynchronousErrorHandling&&j&&(j.errorThrown=!0,j.error=e)):_(t)}function D(t,e){var r=S.onStoppedNotification;r&&E.setTimeout((function(){return r(t,e)}))}var U={closed:!0,next:T,error:function(t){throw t},complete:T},H="function"==typeof Symbol&&Symbol.observable||"@@observable";function N(t){return t}var q=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n,o=this,i=(n=t)&&n instanceof O||function(t){return t&&c(t.next)&&c(t.error)&&c(t.complete)}(n)&&h(n)?t:new R(t,e,r);return function(t){if(S.useDeprecatedSynchronousErrorHandling){var e=!j;if(e&&(j={errorThrown:!1,error:null}),t(),e){var r=j,n=r.errorThrown,o=r.error;if(j=null,n)throw o}}else t()}((function(){var t=o,e=t.operator,r=t.source;i.add(e?e.call(i,r):r?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=M(e))((function(e,n){var o=new R({next:function(e){try{t(e)}catch(t){n(t),o.unsubscribe()}},error:n,complete:e});r.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[H]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return(0===(r=t).length?N:1===r.length?r[0]:function(t){return r.reduce((function(t,e){return e(t)}),t)})(this);var r},t.prototype.toPromise=function(t){var e=this;return new(t=M(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function M(t){var e;return null!==(e=null!=t?t:S.Promise)&&void 0!==e?e:Promise}function z(t){return t&&c(t.schedule)}function F(t){return function(e){if(function(t){return c(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function $(t,e,r,n,o){return new X(t,e,r,n,o)}var X=function(t){function r(e,r,n,o,i,u){var s=t.call(this,e)||this;return s.onFinalize=i,s.shouldUnsubscribe=u,s._next=r?function(t){try{r(t)}catch(t){e.error(t)}}:t.prototype._next,s._error=o?function(t){try{o(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=n?function(){try{n()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e(r,t),r.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},r}(O);function Y(t,e){return F((function(r,n){var o=0;r.subscribe($(n,(function(r){n.next(t.call(e,r,o++))})))}))}var B=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function G(t){return c(null==t?void 0:t.then)}function J(t){return c(t[H])}function V(t){return Symbol.asyncIterator&&c(null==t?void 0:t[Symbol.asyncIterator])}function K(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var Q="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function W(t){return c(null==t?void 0:t[Q])}function Z(t){return function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},u("next"),u("throw"),u("return"),n[Symbol.asyncIterator]=function(){return this},n;function u(t){o[t]&&(n[t]=function(e){return new Promise((function(r,n){i.push([t,e,r,n])>1||c(t,e)}))})}function c(t,e){try{(r=o[t](e)).value instanceof s?Promise.resolve(r.value.v).then(a,l):f(i[0][2],r)}catch(t){f(i[0][3],t)}var r}function a(t){c("next",t)}function l(t){c("throw",t)}function f(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}}(this,arguments,(function(){var e,r,o;return n(this,(function(n){switch(n.label){case 0:e=t.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,s(e.read())];case 3:return r=n.sent(),o=r.value,r.done?[4,s(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,s(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}function tt(t){return c(null==t?void 0:t.getReader)}function et(t){if(t instanceof q)return t;if(null!=t){if(J(t))return i=t,new q((function(t){var e=i[H]();if(c(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(B(t))return n=t,new q((function(t){for(var e=0;e<n.length&&!t.closed;e++)t.next(n[e]);t.complete()}));if(G(t))return r=t,new q((function(t){r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,_)}));if(V(t))return rt(t);if(W(t))return e=t,new q((function(t){var r,n;try{for(var i=o(e),u=i.next();!u.done;u=i.next()){var s=u.value;if(t.next(s),t.closed)return}}catch(t){r={error:t}}finally{try{u&&!u.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}t.complete()}));if(tt(t))return rt(Z(t))}var e,r,n,i;throw K(t)}function rt(t){return new q((function(e){(function(t,e){var r,i,u,s,c,a,l,f;return c=this,a=void 0,f=function(){var c,a;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),r=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=o(t),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise((function(n,o){!function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)}(n,o,(e=t[r](e)).done,e.value)}))}}}(t),n.label=1;case 1:return[4,r.next()];case 2:if((i=n.sent()).done)return[3,4];if(c=i.value,e.next(c),e.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=n.sent(),u={error:a},[3,11];case 6:return n.trys.push([6,,9,10]),i&&!i.done&&(s=r.return)?[4,s.call(r)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(t,e){function r(t){try{o(f.next(t))}catch(t){e(t)}}function n(t){try{o(f.throw(t))}catch(t){e(t)}}function o(e){var o;e.done?t(e.value):(o=e.value,o instanceof l?o:new l((function(t){t(o)}))).then(r,n)}o((f=f.apply(c,a||[])).next())}))})(t,e).catch((function(t){return e.error(t)}))}))}function nt(t,e,r,n,o){void 0===n&&(n=0),void 0===o&&(o=!1);var i=e.schedule((function(){r(),o?t.add(this.schedule(null,n)):this.unsubscribe()}),n);if(t.add(i),!o)return i}function ot(t){return F((function(e,r){var n,o=null,i=!1;o=e.subscribe($(r,void 0,void 0,(function(u){n=et(t(u,ot(t)(e))),o?(o.unsubscribe(),o=null,n.subscribe(r)):i=!0}))),i&&(o.unsubscribe(),o=null,n.subscribe(r))}))}function it(t,e){return void 0===e&&(e=0),F((function(r,n){r.subscribe($(n,(function(r){return nt(n,t,(function(){return n.next(r)}),e)}),(function(){return nt(n,t,(function(){return n.complete()}),e)}),(function(r){return nt(n,t,(function(){return n.error(r)}),e)})))}))}function ut(t,e){return void 0===e&&(e=0),F((function(r,n){n.add(t.schedule((function(){return r.subscribe(n)}),e))}))}function st(t,e){if(!t)throw new Error("Iterable cannot be null");return new q((function(r){nt(r,e,(function(){var n=t[Symbol.asyncIterator]();nt(r,e,(function(){n.next().then((function(t){t.done?r.complete():r.next(t.value)}))}),0,!0)}))}))}function ct(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=function(t){return z((e=t)[e.length-1])?t.pop():void 0;var e}(t);return function(t,e){return e?function(t,e){if(null!=t){if(J(t))return function(t,e){return et(t).pipe(ut(e),it(e))}(t,e);if(B(t))return function(t,e){return new q((function(r){var n=0;return e.schedule((function(){n===t.length?r.complete():(r.next(t[n++]),r.closed||this.schedule())}))}))}(t,e);if(G(t))return function(t,e){return et(t).pipe(ut(e),it(e))}(t,e);if(V(t))return st(t,e);if(W(t))return function(t,e){return new q((function(r){var n;return nt(r,e,(function(){n=t[Q](),nt(r,e,(function(){var t,e,o;try{e=(t=n.next()).value,o=t.done}catch(t){return void r.error(t)}o?r.complete():r.next(e)}),0,!0)})),function(){return c(null==n?void 0:n.return)&&n.return()}}))}(t,e);if(tt(t))return function(t,e){return st(Z(t),e)}(t,e)}throw K(t)}(t,e):et(t)}(t,r)}function at(t){switch(t.responseType){case"json":if("response"in t)return t.response;var e=t;return JSON.parse(e.responseText);case"document":return t.responseXML;default:return"response"in t?t.response:(e=t).responseText}}var lt=function(t,e,r,n){void 0===n&&(n="download_load"),this.originalEvent=t,this.xhr=e,this.request=r,this.type=n;var o=e.status,i=e.responseType;this.status=null!=o?o:0,this.responseType=null!=i?i:"";var u=e.getAllResponseHeaders();this.responseHeaders=u?u.split("\n").reduce((function(t,e){var r=e.indexOf(": ");return t[e.slice(0,r)]=e.slice(r+2),t}),{}):{},this.response=at(e);var s=t.loaded,c=t.total;this.loaded=s,this.total=c},ft=a((function(t){return function(t,e,r){var n;this.message=t,this.name="AjaxError",this.xhr=e,this.request=r,this.status=e.status,this.responseType=e.responseType;try{n=at(e)}catch(t){n=e.responseText}this.response=n}})),dt=function(){function t(t,e){return ft.call(this,"ajax timeout",t,e),this.name="AjaxTimeoutError",this}return t.prototype=Object.create(ft.prototype),t}();var ht=Y((function(t){return t.response}));var pt,vt=(pt=function(t){var e;return e="string"==typeof t?{url:t}:t,new q((function(t){var n,o,i,u=r({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},e),s=u.queryParams,c=u.body,a=u.headers,l=u.url;if(!l)throw new TypeError("url is required");if(s)if(l.includes("?")){var f=l.split("?");if(2<f.length)throw new TypeError("invalid url");i=new URLSearchParams(f[1]),new URLSearchParams(s).forEach((function(t,e){return i.set(e,t)})),l=f[0]+"?"+i}else l=l+"?"+(i=new URLSearchParams(s));var d={};if(a)for(var h in a)a.hasOwnProperty(h)&&(d[h.toLowerCase()]=a[h]);var p=u.crossDomain;p||"x-requested-with"in d||(d["x-requested-with"]="XMLHttpRequest");var v=u.withCredentials,y=u.xsrfCookieName,b=u.xsrfHeaderName;if((v||!p)&&y&&b){var m=null!==(o=null===(n=null===document||void 0===document?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)")))||void 0===n?void 0:n.pop())&&void 0!==o?o:"";m&&(d[b]=m)}var w,g=function(t,e){var r;if(!t||"string"==typeof t||function(t){return"undefined"!=typeof FormData&&t instanceof FormData}(t)||function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}(t)||function(t){return St(t,"ArrayBuffer")}(t)||function(t){return St(t,"File")}(t)||function(t){return St(t,"Blob")}(t)||function(t){return"undefined"!=typeof ReadableStream&&t instanceof ReadableStream}(t))return t;if(function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(t)}(t))return t.buffer;if("object"==typeof t)return e["content-type"]=null!==(r=e["content-type"])&&void 0!==r?r:"application/json;charset=utf-8",JSON.stringify(t);throw new TypeError("Unknown body type")}(c,d),x=r(r({},u),{url:l,headers:d,body:g});w=e.createXHR?e.createXHR():new XMLHttpRequest;var S=e.progressSubscriber,E=e.includeDownloadProgress,_=void 0!==E&&E,T=e.includeUploadProgress,P=void 0!==T&&T,I=function(e,r){w.addEventListener(e,(function(){var e,n=r();null===(e=null==S?void 0:S.error)||void 0===e||e.call(S,n),t.error(n)}))};I("timeout",(function(){return new dt(w,x)})),I("abort",(function(){return new ft("aborted",w,x)}));var j=function(t,e){return new lt(e,w,x,t+"_"+e.type)},O=function(e,r,n){e.addEventListener(r,(function(e){t.next(j(n,e))}))};P&&[mt,wt,gt].forEach((function(t){return O(w.upload,t,yt)})),S&&[mt,wt].forEach((function(t){return w.upload.addEventListener(t,(function(t){var e;return null===(e=null==S?void 0:S.next)||void 0===e?void 0:e.call(S,t)}))})),_&&[mt,wt].forEach((function(t){return O(w,t,bt)}));var A=function(e){var r="ajax error"+(e?" "+e:"");t.error(new ft(r,w,x))};w.addEventListener("error",(function(t){var e;null===(e=null==S?void 0:S.error)||void 0===e||e.call(S,t),A()})),w.addEventListener(gt,(function(e){var r,n,o=w.status;if(o<400){null===(r=null==S?void 0:S.complete)||void 0===r||r.call(S);var i=void 0;try{i=j(bt,e)}catch(e){return void t.error(e)}t.next(i),t.complete()}else null===(n=null==S?void 0:S.error)||void 0===n||n.call(S,e),A(o)}));var L=x.user,C=x.method,R=x.async;for(var h in L?w.open(C,l,R,L,x.password):w.open(C,l,R),R&&(w.timeout=x.timeout,w.responseType=x.responseType),"withCredentials"in w&&(w.withCredentials=x.withCredentials),d)d.hasOwnProperty(h)&&w.setRequestHeader(h,d[h]);return g?w.send(g):w.send(),function(){w&&4!==w.readyState&&w.abort()}}))},pt.get=function(t,e){return vt({method:"GET",url:t,headers:e})},pt.post=function(t,e,r){return vt({method:"POST",url:t,body:e,headers:r})},pt.delete=function(t,e){return vt({method:"DELETE",url:t,headers:e})},pt.put=function(t,e,r){return vt({method:"PUT",url:t,body:e,headers:r})},pt.patch=function(t,e,r){return vt({method:"PATCH",url:t,body:e,headers:r})},pt.getJSON=function(t,e){return ht(vt({method:"GET",url:t,headers:e}))},pt),yt="upload",bt="download",mt="loadstart",wt="progress",gt="load",xt=Object.prototype.toString;function St(t,e){return xt.call(t)==="[object "+e+"]"}const Et=document.querySelector(".container-mail"),_t=new class{constructor(t){this.container=t}renderMessage(t){const e=document.createElement("UL"),r=document.createElement("LI"),n=document.createElement("P"),o=document.createElement("LI"),i=document.createElement("P"),u=document.createElement("LI"),s=document.createElement("P");e.classList.add("list-message"),e.setAttribute("id",t.id),r.classList.add("email"),n.classList.add("email-text"),o.classList.add("subject"),i.classList.add("subject-text"),u.classList.add("created"),s.classList.add("date_of_creation"),n.textContent=t.from,i.textContent=t.subject.length>15?`${t.subject.slice(0,15)}...`:t.subject,s.textContent=function(t){const e=new Date(t);return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")} ${e.getDate().toString().padStart(2,"0")}.${(e.getMonth()+1).toString().padStart(2,"0")}.${e.getFullYear()}`}(t.received),this.container.prepend(e),e.append(r),e.append(o),e.append(u),r.append(n),o.append(i),u.append(s)}}(Et),Tt=new Set;var Pt,It;(Pt=1e3,void 0===Pt&&(Pt=0),void 0===It&&(It=g),Pt<0&&(Pt=0),function(t,e,r){void 0===t&&(t=0),void 0===r&&(r=x);var n=-1;return null!=e&&(z(e)?r=e:n=e),new q((function(e){var o,i=(o=t)instanceof Date&&!isNaN(o)?+t-r.now():t;i<0&&(i=0);var u=0;return r.schedule((function(){e.closed||(e.next(u++),0<=n?this.schedule(void 0,n):e.complete())}),i)}))}(Pt,Pt,It)).pipe(function t(e,r,n){return void 0===n&&(n=1/0),c(r)?t((function(t,n){return Y((function(e,o){return r(t,e,n,o)}))(et(e(t,n)))}),n):("number"==typeof r&&(n=r),F((function(t,r){return function(t,e,r,n,o,i,u,s){var c=[],a=0,l=0,f=!1,d=function(){!f||c.length||a||e.complete()},h=function(t){return a<n?p(t):c.push(t)},p=function(t){a++;var o=!1;et(r(t,l++)).subscribe($(e,(function(t){e.next(t)}),(function(){o=!0}),void 0,(function(){if(o)try{a--;for(;c.length&&a<n;)t=void 0,t=c.shift(),p(t);d()}catch(t){e.error(t)}var t})))};return t.subscribe($(e,h,(function(){f=!0,d()}))),function(){}}(t,r,e,n)})))}((()=>vt.getJSON("http://localhost:9000/messages/unread").pipe(ot((t=>(console.log("error: ",t),ct(null)))))))).subscribe({next:t=>{const e=t.messages.reduce(((t,e)=>(Tt.has(e.id)||(Tt.add(e.id),t.push(e)),t)),[]);for(const t of e)_t.renderMessage(t)},error:t=>console.log(t)})})();
//# sourceMappingURL=main.js.map