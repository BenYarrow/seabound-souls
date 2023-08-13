"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9994],{77960:function(e,t,n){n.d(t,{E:function(){return o},W:function(){return i}});var r=n(85893);function i(e){let{token:t,parentTypes:n,children:i}=e;return(0,r.jsx)("span",{className:`token ${t[0]}`,children:i})}function o(e){let{tokens:t,parentTypes:n=[],transformTokens:s=e=>e,tokenProps:l={},tokenComponent:a=i}=e,c=Array.isArray(t)?t:[t];return c.map((e,t)=>{let i=s(e,c,t);return"string"==typeof i?i:i[0]===n[n.length-1]?(0,r.jsx)(o,{tokens:i[1],parentTypes:n,tokenComponent:a,tokenProps:l,transformTokens:s},t):(0,r.jsx)(a,{token:i,tokenIndex:t,tokens:c,parentTypes:n,...l,children:(0,r.jsx)(o,{tokens:i[1],parentTypes:[...n,i[0]],tokenComponent:a,tokenProps:l,transformTokens:s})},t)})}},57938:function(e,t,n){n.d(t,{u:function(){return a},y:function(){return l}});var r=n(85893),i=n(86010),o=n(67294),s=n(77960);function l(e){let{children:t,className:n,border:o=!0}=e;return(0,r.jsx)("div",{className:(0,i.Z)("relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10",n),children:(0,r.jsxs)("div",{className:"relative w-full flex flex-col",children:[(0,r.jsx)("div",{className:(0,i.Z)("flex-none",o&&"border-b border-slate-500/30"),children:(0,r.jsxs)("div",{className:"flex items-center h-8 space-x-1.5 px-3",children:[(0,r.jsx)("div",{className:"w-2.5 h-2.5 bg-slate-600 rounded-full"}),(0,r.jsx)("div",{className:"w-2.5 h-2.5 bg-slate-600 rounded-full"}),(0,r.jsx)("div",{className:"w-2.5 h-2.5 bg-slate-600 rounded-full"})]})}),(0,r.jsx)("div",{className:"relative min-h-0 flex-auto flex flex-col",children:t})]})})}function a(e){let{types:t,empty:n}=e,r=t.length;return 1===r&&"plain"===t[0]?n?"inline-block":void 0:[...t,n?"inline-block":"token"].join(" ")}l.Code=(0,o.forwardRef)((e,t)=>{let{tokens:n,initialLineNumber:i=1,...l}=e,a=(0,o.useMemo)(()=>{let e=n.flat(1/0),t=i+1,r=`${i}
`;for(let n=0;n<e.length;n++)if("string"==typeof e[n]){let i=e[n].match(/\n/g);if(null!==i)for(let e=0;e<i.length;e++)r+=`${t++}
`}return r},[n]);return(0,r.jsx)("div",{className:"w-full flex-auto flex min-h-0 overflow-auto",children:(0,r.jsx)("div",{ref:t,className:"w-full relative flex-auto",children:(0,r.jsxs)("pre",{className:"flex min-h-full text-sm leading-6",children:[(0,r.jsx)("div",{"aria-hidden":"true",className:"hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none",style:{width:50},children:a}),(0,r.jsx)("code",{className:"flex-auto relative block text-slate-50 pt-4 pb-4 px-4 overflow-auto",children:(0,r.jsx)(s.E,{tokens:n,...l})})]})})})}),l.Code2=(0,o.forwardRef)((e,t)=>{let{lines:n=0,showLineNumbers:s=!0,initialLineNumber:l=1,overflow:a=!0,wrap:c=!1,className:u,children:d,language:h}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.Z)(u,"w-full flex-auto flex min-h-0",{"overflow-auto":!0===a||"y"===a}),children:(0,r.jsx)("div",{className:"w-full relative flex-auto",children:(0,r.jsxs)("pre",{className:(0,i.Z)("flex min-h-full text-sm leading-6",h&&`language-${h}`),children:[s&&(0,r.jsx)("div",{"aria-hidden":"true",className:"hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none w-[3.125rem]",children:Array.from({length:n}).map((e,t)=>0===t?t+l:(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("br",{}),t+l]},t+l))}),(0,r.jsx)("code",{className:(0,i.Z)("flex-auto relative block text-slate-50",{"overflow-auto":!0===a||"x"===a,"whitespace-pre-wrap":c,"p-4":s},h&&`language-${h}`),children:d})]})})})})},70131:function(e,t,n){n.d(t,{YD:function(){return p}});var r=n(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=new Map,l=new WeakMap,a=0,c=void 0;function u(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=c),void 0===window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var t=Object.keys(e).sort().filter(function(t){return void 0!==e[t]}).map(function(t){var n;return t+"_"+("root"===t?(n=e.root)?(l.has(n)||(a+=1,l.set(n,a.toString())),l.get(n)):"0":e[t])}).toString(),n=s.get(t);if(!n){var r,i=new Map,o=new IntersectionObserver(function(t){t.forEach(function(t){var n,o=t.isIntersecting&&r.some(function(e){return t.intersectionRatio>=e});e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach(function(e){e(o,t)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},s.set(t,n)}return n}(n),u=o.id,d=o.observer,h=o.elements,f=h.get(e)||[];return h.has(e)||h.set(e,f),f.push(t),d.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(h.delete(e),d.unobserve(e)),0===h.size&&(d.disconnect(),s.delete(u))}}var d=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function h(e){return"function"!=typeof e.children}var f=function(e){function t(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){!n.node||(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),h(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,o(n,e);var n,s=t.prototype;return s.componentDidUpdate=function(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,o=e.delay,s=e.fallbackInView;this._unobserveCb=u(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o},s)}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!h(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,s=o.children,l=o.as,a=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(o,d);return r.createElement(l||"div",i({ref:this.handleNode},a),s)},t}(r.Component);function p(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,o=t.trackVisibility,s=t.rootMargin,l=t.root,a=t.triggerOnce,c=t.skip,d=t.initialInView,h=t.fallbackInView,f=r.useRef(),p=r.useState({inView:!!d}),v=p[0],g=p[1],b=r.useCallback(function(e){void 0!==f.current&&(f.current(),f.current=void 0),!c&&e&&(f.current=u(e,function(e,t){g({inView:e,entry:t}),t.isIntersecting&&a&&f.current&&(f.current(),f.current=void 0)},{root:l,rootMargin:s,threshold:n,trackVisibility:o,delay:i},h))},[Array.isArray(n)?n.toString():n,l,s,a,c,o,h,i]);(0,r.useEffect)(function(){f.current||!v.entry||a||c||g({inView:!!d})});var x=[b,v.inView,v.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}}]);