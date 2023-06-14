(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8919],{92341:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/responsive-design",function(){return a(59329)}])},59329:function(n,s,a){"use strict";a.r(s);var e=a(85893),t=a(11151),l=a(72788),o=a(36336),i=a(50224),c=a(30196);let p=l.L,r=o.X_;function d(n){let s=Object.assign({p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",strong:"strong",em:"em",ul:"ul",li:"li",hr:"hr",a:"a"},(0,t.ah)(),n.components),{Example:a,Editor:l}=s;return l||h("Editor",!0),a||h("Example",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.X,{hidden:!0,level:2,id:"overview",children:"Overview"}),"\n",(0,e.jsx)(s.p,{children:"Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML."}),"\n",(0,e.jsx)(s.p,{children:"There are five breakpoints by default, inspired by common device resolutions:"}),"\n",(0,e.jsxs)(s.table,{children:[(0,e.jsx)(s.thead,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.th,{children:"Breakpoint prefix"}),(0,e.jsx)(s.th,{children:"Minimum width"}),(0,e.jsx)(s.th,{children:"CSS"})]})}),(0,e.jsxs)(s.tbody,{children:[(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"sm"})}),(0,e.jsx)(s.td,{children:"640px"}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media (min-width: 640px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"md"})}),(0,e.jsx)(s.td,{children:"768px"}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media (min-width: 768px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"lg"})}),(0,e.jsx)(s.td,{children:"1024px"}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media (min-width: 1024px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"xl"})}),(0,e.jsx)(s.td,{children:"1280px"}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media (min-width: 1280px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"2xl"})}),(0,e.jsx)(s.td,{children:"1536px"}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media (min-width: 1536px) { ... }"})})]})]})]}),"\n",(0,e.jsxs)(s.p,{children:["To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the ",(0,e.jsx)(s.code,{children:":"})," character:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token comment">&lt;!-- Width of 16 by default, 32 on medium screens, and 48 on large screens --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-16 <span class="code-highlight bg-code-highlight">md:w-32</span> <span class="code-highlight bg-code-highlight">lg:w-48</span><span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["This works for ",(0,e.jsx)(s.strong,{children:"every utility class in the framework"}),", which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles."]}),"\n",(0,e.jsxs)(s.p,{children:["Here’s a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens ",(0,e.jsx)(s.em,{children:"(resize your browser to see it in action)"}),":"]}),"\n",(0,e.jsx)(a,Object.assign({containerClassName:"mt-4 -mb-3",html:'<iframe class="w-full h-[496px] pointer-events-none" src="/examples/responsive-design-demo"></iframe>'},{resizable:!0,p:"none"})),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden <span class="code-highlight bg-code-highlight">md:max-w-2xl</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">md:flex</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">md:shrink-0</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-48 w-full object-cover <span class="code-highlight bg-code-highlight">md:h-full md:w-48</span><span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/building.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Modern building architecture<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uppercase tracking-wide text-sm text-indigo-500 font-semibold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Company retreats<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block mt-1 text-lg leading-tight font-medium text-black hover:underline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Incredible accommodation for your team<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-2 text-slate-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(s.p,{children:"Here’s how the example above works:"}),"\n",(0,e.jsxs)(s.ul,{role:"list",children:["\n",(0,e.jsxs)(s.li,{children:["By default, the outer ",(0,e.jsx)(s.code,{children:"div"})," is ",(0,e.jsx)(s.code,{children:"display: block"}),", but by adding the ",(0,e.jsx)(s.code,{children:"md:flex"})," utility, it becomes ",(0,e.jsx)(s.code,{children:"display: flex"})," on medium screens and larger."]}),"\n",(0,e.jsxs)(s.li,{children:["When the parent is a flex container, we want to make sure the image never shrinks, so we’ve added ",(0,e.jsx)(s.code,{children:"md:shrink-0"})," to prevent shrinking on medium screens and larger. Technically we could have just used ",(0,e.jsx)(s.code,{children:"shrink-0"})," since it would do nothing on smaller screens, but since it only matters on ",(0,e.jsx)(s.code,{children:"md"})," screens, it’s a good idea to make that clear in the class name."]}),"\n",(0,e.jsxs)(s.li,{children:["On small screens the image is automatically full width by default. On medium screens and up, we’ve constrained the width to a fixed size and ensured the image is full height using ",(0,e.jsx)(s.code,{children:"md:h-full md:w-48"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(s.p,{children:["We’ve only used one breakpoint in this example, but you could easily customize this component at other sizes using the ",(0,e.jsx)(s.code,{children:"sm"}),", ",(0,e.jsx)(s.code,{children:"lg"}),", ",(0,e.jsx)(s.code,{children:"xl"}),", or ",(0,e.jsx)(s.code,{children:"2xl"})," responsive prefixes as well."]}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(i.X,{level:2,id:"working-mobile-first",children:"Working mobile-first"}),"\n",(0,e.jsx)(s.p,{children:"By default, Tailwind uses a mobile-first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap."}),"\n",(0,e.jsxs)(s.p,{children:["What this means is that unprefixed utilities (like ",(0,e.jsx)(s.code,{children:"uppercase"}),") take effect on all screen sizes, while prefixed utilities (like ",(0,e.jsx)(s.code,{children:"md:uppercase"}),") only take effect at the specified breakpoint ",(0,e.jsx)(s.em,{children:"and above"}),"."]}),"\n",(0,e.jsx)(i.X,{level:3,id:"targeting-mobile-screens",children:"Targeting mobile screens"}),"\n",(0,e.jsxs)(s.p,{children:["Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the ",(0,e.jsx)(s.code,{children:"sm:"})," prefixed version. Don’t think of ",(0,e.jsx)(s.code,{children:"sm:"})," as meaning “on small screens”, think of it as “at the small ",(0,e.jsx)(s.em,{children:"breakpoint"}),"“."]}),"\n",(0,e.jsxs)(c.qm,{children:["Don’t use ",(0,e.jsx)("code",{className:"text-sm font-bold text-slate-800",children:"sm:"})," to target mobile devices"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token comment">&lt;!-- This will only center text on screens 640px and wider, not on small screens --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sm:text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsx)(c.Vw,{children:"Use unprefixed utilities to target mobile, and override them at larger breakpoints"}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token comment">&lt;!-- This will center text on mobile, and left align it on screens 640px and wider --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center sm:text-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["For this reason, it’s often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for ",(0,e.jsx)(s.code,{children:"sm"})," screens, followed by ",(0,e.jsx)(s.code,{children:"md"})," screens, etc."]}),"\n",(0,e.jsx)(i.X,{level:3,id:"targeting-a-breakpoint-range",children:"Targeting a breakpoint range"}),"\n",(0,e.jsxs)(s.p,{children:["By default, styles applied by rules like ",(0,e.jsx)(s.code,{children:"md:flex"})," will apply at that breakpoint and stay applied at larger breakpoints."]}),"\n",(0,e.jsxs)(s.p,{children:["If you’d like to apply a utility ",(0,e.jsx)(s.em,{children:"only"})," when a specific breakpoint range is active, stack a responsive modifier like ",(0,e.jsx)(s.code,{children:"md"})," with a ",(0,e.jsx)(s.code,{children:"max-*"})," modifier to limit that style to a specific range:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>md:max-xl:flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["Tailwind generates a corresponding ",(0,e.jsx)(s.code,{children:"max-*"})," modifier for each breakpoint, so out of the box the following modifiers are available:"]}),"\n",(0,e.jsxs)(s.table,{children:[(0,e.jsx)(s.thead,{children:(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.th,{children:"Modifier"}),(0,e.jsx)(s.th,{children:"Media query"})]})}),(0,e.jsxs)(s.tbody,{children:[(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"max-sm"})}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media not all and (min-width: 640px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"max-md"})}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media not all and (min-width: 768px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"max-lg"})}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media not all and (min-width: 1024px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"max-xl"})}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media not all and (min-width: 1280px) { ... }"})})]}),(0,e.jsxs)(s.tr,{children:[(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"max-2xl"})}),(0,e.jsx)(s.td,{children:(0,e.jsx)(s.code,{children:"@media not all and (min-width: 1536px) { ... }"})})]})]})]}),"\n",(0,e.jsx)(i.X,{level:3,id:"targeting-a-single-breakpoint",children:"Targeting a single breakpoint"}),"\n",(0,e.jsxs)(s.p,{children:["To target a single breakpoint, target the range for that breakpoint by stacking a responsive modifier like ",(0,e.jsx)(s.code,{children:"md"})," with the ",(0,e.jsx)(s.code,{children:"max-*"})," modifier for the next breakpoint:"]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>md:max-lg:flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["Read about ",(0,e.jsx)(s.a,{href:"#targeting-a-breakpoint-range",children:"targeting breakpoint ranges"})," to learn more."]}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(i.X,{level:2,id:"using-custom-breakpoints",nextElement:{type:"heading",depth:3},children:"Using custom breakpoints"}),"\n",(0,e.jsx)(i.X,{level:3,id:"customizing-your-theme",children:"Customizing your theme"}),"\n",(0,e.jsxs)(s.p,{children:["You can completely customize your breakpoints in your ",(0,e.jsx)(s.code,{children:"tailwind.config.js"})," file:"]}),"\n",(0,e.jsx)(l,{filename:"tailwind.config.js",code:'<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">screens</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string-property property">\'tablet\'</span><span class="token operator">:</span> <span class="token string">\'640px\'</span><span class="token punctuation">,</span>\n      <span class="token comment">// => @media (min-width: 640px) { ... }</span>\n\n      <span class="token string-property property">\'laptop\'</span><span class="token operator">:</span> <span class="token string">\'1024px\'</span><span class="token punctuation">,</span>\n      <span class="token comment">// => @media (min-width: 1024px) { ... }</span>\n\n      <span class="token string-property property">\'desktop\'</span><span class="token operator">:</span> <span class="token string">\'1280px\'</span><span class="token punctuation">,</span>\n      <span class="token comment">// => @media (min-width: 1280px) { ... }</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>'}),"\n",(0,e.jsxs)(s.p,{children:["Learn more in the ",(0,e.jsx)(s.a,{href:"/docs/breakpoints",children:"customizing breakpoints documentation"}),"."]}),"\n",(0,e.jsx)(s.hr,{}),"\n",(0,e.jsx)(i.X,{level:3,id:"arbitrary-values",children:"Arbitrary values"}),"\n",(0,e.jsxs)(s.p,{children:["If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the ",(0,e.jsx)(s.code,{children:"min"})," or ",(0,e.jsx)(s.code,{children:"max"})," modifiers to generate a custom breakpoint on the fly using any arbitrary value."]}),"\n",(0,e.jsx)(s.pre,{className:"language-html",dangerouslySetInnerHTML:{__html:'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">min-[320px]:text-center</span> <span class="code-highlight bg-code-highlight">max-[600px]:bg-sky-300</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>'}}),"\n",(0,e.jsxs)(s.p,{children:["Learn more about arbitrary value support in the ",(0,e.jsx)(s.a,{href:"/docs/adding-custom-styles#using-arbitrary-values",children:"arbitrary values"})," documentation."]})]})}function u(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(r,Object.assign({},n,{children:(0,e.jsx)(d,n)}))}function h(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=u,u.layoutProps={Layout:p,meta:{title:"Responsive Design",description:"Using responsive utility variants to build adaptive user interfaces."},slug:"responsive-design",tableOfContents:[{title:"Overview",slug:"overview",children:[]},{title:"Working mobile-first",slug:"working-mobile-first",children:[{title:"Targeting mobile screens",slug:"targeting-mobile-screens",children:[]},{title:"Targeting a breakpoint range",slug:"targeting-a-breakpoint-range",children:[]},{title:"Targeting a single breakpoint",slug:"targeting-a-single-breakpoint",children:[]}]},{title:"Using custom breakpoints",slug:"using-custom-breakpoints",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]}},30196:function(n,s,a){"use strict";a.d(s,{$o:function(){return o},Vw:function(){return t},qm:function(){return l}});var e=a(85893);function t(n){let{children:s}=n;return(0,e.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,e.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:[(0,e.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,e.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full dark:bg-sky-400/30"})]}),(0,e.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:s})]})}function l(n){let{children:s}=n;return(0,e.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,e.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:[(0,e.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,e.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,e.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"})]}),(0,e.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200",children:s})]})}function o(n){let{children:s}=n;return(0,e.jsxs)("div",{className:"mt-6 -mb-1 flex space-x-2",children:[(0,e.jsx)("svg",{className:"flex-none w-5 h-5 text-slate-400 dark:text-slate-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,e.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,e.jsx)("p",{className:"m-0 text-slate-700 text-sm font-medium dark:text-slate-200",children:s})]})}},72788:function(n,s,a){"use strict";a.d(s,{L:function(){return i}});var e=a(85893),t=a(97903),l=a(77929),o=a(87308);function i(n){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.Dx,{children:n.layoutProps.meta.metaTitle||n.layoutProps.meta.title}),(0,e.jsx)(t.C,{nav:o.u,...n})]})}i.nav=o.u},11151:function(n,s,a){"use strict";a.d(s,{Zo:function(){return i},ah:function(){return l}});var e=a(67294);let t=e.createContext({});function l(n){let s=e.useContext(t);return e.useMemo(()=>"function"==typeof n?n(s):{...s,...n},[s,n])}let o={};function i({components:n,children:s,disableParentContext:a}){let i;return i=a?"function"==typeof n?n({}):n||o:l(n),e.createElement(t.Provider,{value:i},s)}}},function(n){n.O(0,[3430,4381,9495,224,7308,9774,2888,179],function(){return n(n.s=92341)}),_N_E=n.O()}]);