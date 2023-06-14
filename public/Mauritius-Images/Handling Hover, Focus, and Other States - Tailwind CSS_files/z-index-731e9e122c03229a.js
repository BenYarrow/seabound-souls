(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9971],{21911:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/z-index",function(){return a(29723)}])},29723:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var t=a(85893),e=a(11151),p=a(72788),l=a(36336),i=a(94406),o=a(87633),c=a(44805);let u=p.L,r=l.X_;function d(n){let s=Object.assign({p:"p",code:"code",pre:"pre",hr:"hr",a:"a"},(0,e.ah)(),n.components),{Heading:a,Example:p,Editor:l}=s;return l||h("Editor",!0),p||h("Example",!0),a||h("Heading",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3},children:"Basic usage"}),"\n",(0,t.jsx)(a,{level:3,id:"setting-the-z-index",children:"Setting the z-index"}),"\n",(0,t.jsxs)(s.p,{children:["Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the ",(0,t.jsx)(s.code,{children:"z-{index}"})," utilities."]}),"\n",(0,t.jsx)(p,{containerClassName:"mt-4 -mb-3",html:'<div class="flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6">\n  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-40 dark:ring-slate-900">05</div>\n  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-30 dark:ring-slate-900">04</div>\n  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-20 dark:ring-slate-900">03</div>\n  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-10 dark:ring-slate-900">02</div>\n  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-0 dark:ring-slate-900">01</div>\n</div>'}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-40</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>05<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-30</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>04<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-20</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-10</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">z-0</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(a,{level:3,id:"using-negative-values",children:"Using negative values"}),"\n",(0,t.jsx)(s.p,{children:"To use a negative z-index value, prefix the class name with a dash to convert it to a negative value."}),"\n",(0,t.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">-z-50</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{ignore:!0,level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},children:"Applying conditionally"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"hover-focus-and-other-states",children:"Hover, focus, and other states"}),"\n",(0,t.jsx)(c.k,{defaultClass:"z-0",featuredClass:"z-50"}),"\n",(0,t.jsx)(a,{ignore:!0,level:3,id:"breakpoints-and-media-queries",children:"Breakpoints and media queries"}),"\n",(0,t.jsx)(o.p,{defaultClass:"z-0",featuredClass:"z-50"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(a,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3},children:"Using custom values"}),"\n",(0,t.jsx)(a,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Tailwind provides six numeric ",(0,t.jsx)(s.code,{children:"z-index"})," utilities and an ",(0,t.jsx)(s.code,{children:"auto"})," utility. You can customize these values by editing ",(0,t.jsx)(s.code,{children:"theme.zIndex"})," or ",(0,t.jsx)(s.code,{children:"theme.extend.zIndex"})," in your ",(0,t.jsx)(s.code,{children:"tailwind.config.js"})," file."]}),"\n",(0,t.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-diff-js"><code class="language-diff-js"><span class="token language-js unchanged"><span class="token plain">module</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token plain"> </span><span class="token operator">=</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token literal-property property">extend</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token literal-property property">zIndex</span><span class="token operator">:</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">        </span><span class="token string-property property">\'100\'</span><span class="token operator">:</span><span class="token plain"> </span><span class="token string">\'100\'</span><span class="token punctuation">,</span><span class="token plain"></span>\n</span><span class="token language-js inserted"><span class="token plain">      </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">    </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain">  </span><span class="token punctuation">}</span><span class="token plain"></span>\n</span><span class="token language-js unchanged"><span class="token plain"></span><span class="token punctuation">}</span>\n</span></code></pre>'}),"\n",(0,t.jsxs)(s.p,{children:["Learn more about customizing the default theme in the ",(0,t.jsx)(s.a,{href:"/docs/theme#customizing-the-default-theme",children:"theme customization"})," documentation."]}),"\n",(0,t.jsx)(a,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,t.jsx)(i.k,{property:"z-index",featuredClass:"z-[100]"})]})}function g(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(d,n)}))}var k=g;function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}g.layoutProps={Layout:u,classes:{utilities:{".z-0":{"z-index":"0"},".z-10":{"z-index":"10"},".z-20":{"z-index":"20"},".z-30":{"z-index":"30"},".z-40":{"z-index":"40"},".z-50":{"z-index":"50"},".z-auto":{"z-index":"auto"}}},meta:{title:"Z-Index",description:"Utilities for controlling the stack order of an element."},slug:"z-index",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the z-index",slug:"setting-the-z-index",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return i},ah:function(){return p}});var t=a(67294);let e=t.createContext({});function p(n){let s=t.useContext(e);return t.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let l={};function i({components:n,children:s,disableParentContext:a}){let i;return i=a?"function"==typeof n?n({}):n||l:p(n),t.createElement(e.Provider,{value:i},s)}}},function(n){n.O(0,[3430,4381,9495,224,7308,3983,9774,2888,179],function(){return n(n.s=21911)}),_N_E=n.O()}]);