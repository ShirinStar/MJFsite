(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/qmn":function(t,r,n){var e=n("2oRo");t.exports=e.Promise},"58Bg":function(t,r,n){"use strict";var e,o=this&&this.__extends||(e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var s=i(n("0Dz7")),c=i(n("q1tI")),u=function(t){function r(r){var n=t.call(this,r)||this;return n.wrapper=null,n.state=a(a({},r),{canvas:null,wrapper:n.wrapper}),n}return o(r,t),r.getDerivedStateFromProps=function(t,r){if(r.sketch!==t.sketch){var n=t.sketch,e=new s.default(n,r.wrapper);return r.canvas.remove(),a(a({},r),{sketch:n,canvas:e})}return r.canvas&&r.canvas.myCustomRedrawAccordingToNewPropsHandler&&r.canvas.myCustomRedrawAccordingToNewPropsHandler(t),r},r.prototype.componentDidMount=function(){var t=new s.default(this.state.sketch,this.wrapper);t.myCustomRedrawAccordingToNewPropsHandler&&t.myCustomRedrawAccordingToNewPropsHandler(this.props),this.setState(a(a({},this.state),{canvas:t,wrapper:this.wrapper}))},r.prototype.componentWillUnmount=function(){null!==this.state.canvas&&this.state.canvas.remove()},r.prototype.render=function(){var t=this;return c.default.createElement("div",a({},this.state.attributes,{ref:function(r){return t.wrapper=r},"data-testid":"canvas-wrapper"}),this.props.children)},r}(c.default.Component);r.default=u},"8GlL":function(t,r,n){"use strict";var e=n("HAuM"),o=function(t){var r,n;this.promise=new t((function(t,e){if(void 0!==r||void 0!==n)throw TypeError("Bad Promise constructor");r=t,n=e})),this.resolve=e(r),this.reject=e(n)};t.exports.f=function(t){return new o(t)}},QFcT:function(t,r,n){var e=n("I+eb"),o=Math.hypot,a=Math.abs,i=Math.sqrt;e({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,r){for(var n,e,o=0,s=0,c=arguments.length,u=0;s<c;)u<(n=a(arguments[s++]))?(o=o*(e=u/n)*e+1,u=n):o+=n>0?(e=n/u)*e:n;return u===1/0?1/0:u*i(o)}})},SEBh:function(t,r,n){var e=n("glrk"),o=n("HAuM"),a=n("tiKp")("species");t.exports=function(t,r){var n,i=e(t).constructor;return void 0===i||null==(n=e(i)[a])?r:o(n)}},p532:function(t,r,n){"use strict";var e=n("I+eb"),o=n("xDBR"),a=n("/qmn"),i=n("0Dky"),s=n("0GbY"),c=n("SEBh"),u=n("zfnd"),p=n("busE");if(e({target:"Promise",proto:!0,real:!0,forced:!!a&&i((function(){a.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var r=c(this,s("Promise")),n="function"==typeof t;return this.then(n?function(n){return u(r,t()).then((function(){return n}))}:t,n?function(n){return u(r,t()).then((function(){throw n}))}:t)}}),!o&&"function"==typeof a){var f=s("Promise").prototype.finally;a.prototype.finally!==f&&p(a.prototype,"finally",f,{unsafe:!0})}},zfnd:function(t,r,n){var e=n("glrk"),o=n("hh1v"),a=n("8GlL");t.exports=function(t,r){if(e(t),o(r)&&r.constructor===t)return r;var n=a.f(t);return(0,n.resolve)(r),n.promise}}}]);
//# sourceMappingURL=19-ee4c570cfabe40ffca58.js.map