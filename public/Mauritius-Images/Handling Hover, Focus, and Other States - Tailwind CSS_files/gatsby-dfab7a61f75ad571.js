(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7373],{54359:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/gatsby",function(){return s(89141)}])},52196:function(e,t,s){"use strict";s.d(t,{a:function(){return l}});var n=s(85893),i=s(76239);function l(e){let{title:t,description:s,children:l}=e;return(0,n.jsxs)(i.i,{children:[(0,n.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,n.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,n.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,n.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:t}),(0,n.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:s})]})}),(0,n.jsx)("section",{className:"mb-16 relative",children:l})]})}},89141:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return c},default:function(){return d}});var n=s(85893),i=s(72788),l=s(52196),a=s(39897);let o=[{title:"Create your project",body:()=>(0,n.jsxs)("p",{children:["Start by creating a new Gatsby project if you don’t have one set up already. The most common approach is to use"," ",(0,n.jsx)("a",{href:"https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli",children:"Gatsby CLI"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"gatsby new my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:()=>(0,n.jsxs)("p",{children:["Using npm, install ",(0,n.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, as well as"," ",(0,n.jsx)("code",{children:"gatsby-plugin-postcss"}),", and then run the init command to generate both"," ",(0,n.jsx)("code",{children:"tailwind.config.js"})," and ",(0,n.jsx)("code",{children:"postcss.config.js"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss\nnpx tailwindcss init -p"}},{title:"Enable the Gatsby PostCSS plugin",body:()=>(0,n.jsxs)("p",{children:["In your ",(0,n.jsx)("code",{children:"gatsby-config.js"})," file, enable the ",(0,n.jsx)("code",{children:"gatsby-plugin-postcss"}),". See"," ",(0,n.jsx)("a",{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss/",children:"the plugin's documentation"})," ","for more information."]}),code:{name:"gatsby-config.js",lang:"js",code:`  module.exports = {
    plugins: [
>     'gatsby-plugin-postcss',
      // ...
    ],
  }`}},{title:"Configure your template paths",body:()=>(0,n.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,n.jsx)("code",{children:"tailwind.config.js"})," file."]}),code:{name:"tailwind.config.js",lang:"js",code:`  /** @type {import('tailwindcss').Config} */
  module.exports = {
>   content: [
>     "./src/pages/**/*.{js,jsx,ts,tsx}",
>     "./src/components/**/*.{js,jsx,ts,tsx}",
>   ],
    theme: {
      extend: {},
    },
    plugins: [],
  }`}},{title:"Add the Tailwind directives to your CSS",body:()=>(0,n.jsxs)("p",{children:["Create a ",(0,n.jsx)("code",{children:"./src/styles/global.css"})," file and add the ",(0,n.jsx)("code",{children:"@tailwind"})," ","directives for each of Tailwind’s layers."]}),code:{name:"global.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Import the CSS file",body:()=>(0,n.jsxs)("p",{children:["Create a ",(0,n.jsx)("code",{children:"gatsby-browser.js"})," file at the root of your project if it doesn’t already exist, and import your newly-created ",(0,n.jsx)("code",{children:"./src/styles/global.css"})," file."]}),code:{name:"gatsby-browser.js",lang:"css",code:"> import './src/styles/global.css'"}},{title:"Start your build process",body:()=>(0,n.jsxs)("p",{children:["Run your build process with ",(0,n.jsx)("code",{children:"gatsby develop"}),"."]}),code:{name:"Terminal",lang:"terminal",code:"gatsby develop"}},{title:"Start using Tailwind in your project",body:()=>(0,n.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."}),code:{name:"index.js",lang:"jsx",code:`  export default function IndexPage() {
    return (
      <Layout>
>       <h1 className="text-3xl font-bold underline">
>         Hello world!
>       </h1>
      </Layout>
    )
  }`}}];var c=!0;function d(e){let{code:t}=e;return(0,n.jsx)(l.a,{title:"Install Tailwind CSS with Gatsby",description:"Setting up Tailwind CSS in a Gatsby project.",children:(0,n.jsx)(a.R,{steps:o,code:t})})}d.layoutProps={meta:{title:"Install Tailwind CSS with Gatsby",description:"Setting up Tailwind CSS in a Gatsby project.",section:"Installation"},Layout:i.L,allowOverflow:!1}}},function(e){e.O(0,[9495,7308,7667,9774,2888,179],function(){return e(e.s=54359)}),_N_E=e.O()}]);