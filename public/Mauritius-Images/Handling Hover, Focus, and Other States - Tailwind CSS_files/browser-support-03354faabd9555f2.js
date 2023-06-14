(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5410],{13783:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/browser-support",function(){return s(71379)}])},71379:function(n,e,s){"use strict";s.r(e);var t=s(85893),a=s(11151),o=s(72788),r=s(36336);let i=o.L,p=r.X_;function l(n){let e=Object.assign({p:"p",code:"code",a:"a",hr:"hr",pre:"pre"},(0,a.ah)(),n.components),{Heading:s}=e;return s||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"In general, Tailwind CSS v3.0 is designed for and tested on the latest stable versions of Chrome, Firefox, Edge, and Safari. It does not support any version of IE, including IE 11."}),"\n",(0,t.jsxs)(e.p,{children:["While most of the features in Tailwind CSS will work in all modern browsers, Tailwind also includes APIs for several bleeding-edge features that aren’t yet supported by all browsers, for example the ",(0,t.jsx)(e.code,{children:":focus-visible"})," pseudo-class and ",(0,t.jsx)(e.code,{children:"backdrop-filter"})," utilities."]}),"\n",(0,t.jsx)(e.p,{children:"Since Tailwind is such a low-level framework, it’s easy to avoid these features if you can’t use them by simply not using the utility or modifier that’s not supported, much like how you just wouldn’t use those CSS features in your CSS."}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.a,{href:"https://caniuse.com/?search=focus-visible",children:"Can I Use"})," database is a great resource when you’re unsure about the support for an unfamiliar CSS feature."]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(s,{level:2,id:"vendor-prefixes",children:"Vendor Prefixes"}),"\n",(0,t.jsxs)(e.p,{children:["Many CSS properties require vendor prefixes to be understood by browsers, for example ",(0,t.jsx)(e.code,{children:"background-clip: text"})," needs the ",(0,t.jsx)(e.code,{children:"-webkit"})," prefix to work in most browsers:"]}),"\n",(0,t.jsx)(e.pre,{className:"language-css",dangerouslySetInnerHTML:{__html:'<code class="language-css"><span class="token selector"><span class="token class">.bg-clip-text</span></span> <span class="token punctuation">{</span>\n  <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>\n  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,t.jsx)(e.p,{children:"If you’re using the Tailwind CLI tool, vendor prefixes like this will be added automatically."}),"\n",(0,t.jsxs)(e.p,{children:["If not, we recommend that you use ",(0,t.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",children:"Autoprefixer"}),", which is a PostCSS plugin that automatically adds any necessary vendor prefixes based on the browsers you tell it you need to support."]}),"\n",(0,t.jsx)(e.p,{children:"To use it, install it via npm:"}),"\n",(0,t.jsx)(e.pre,{className:"language-shell",dangerouslySetInnerHTML:{__html:'<code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> autoprefixer</code>'}}),"\n",(0,t.jsx)(e.p,{children:"Then add it to the very end of your plugin list in your PostCSS configuration:"}),"\n",(0,t.jsx)(e.pre,{className:"language-js",dangerouslySetInnerHTML:{__html:'<code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tailwindcss\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'autoprefixer\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code>'}}),"\n",(0,t.jsxs)(e.p,{children:["To learn more about specifying which browsers you need to support, check out ",(0,t.jsx)(e.a,{href:"https://github.com/browserslist/browserslist",children:"Browserslist"})," which is the standard way to define target browsers in front-end tooling."]})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(p,Object.assign({},n,{children:(0,t.jsx)(l,n)}))}e.default=c,c.layoutProps={Layout:i,meta:{title:"Browser Support",description:"Understanding which browsers Tailwind supports and how to manage vendor prefixes."},slug:"browser-support",tableOfContents:[{title:"Vendor Prefixes",slug:"vendor-prefixes",children:[]}]}},72788:function(n,e,s){"use strict";s.d(e,{L:function(){return i}});var t=s(85893),a=s(97903),o=s(77929),r=s(87308);function i(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,t.jsx)(a.C,{nav:r.u,...n})]})}i.nav=r.u},11151:function(n,e,s){"use strict";s.d(e,{Zo:function(){return i},ah:function(){return o}});var t=s(67294);let a=t.createContext({});function o(n){let e=t.useContext(a);return t.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let r={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||r:o(n),t.createElement(a.Provider,{value:i},e)}}},function(n){n.O(0,[3430,4381,9495,224,7308,9774,2888,179],function(){return n(n.s=13783)}),_N_E=n.O()}]);