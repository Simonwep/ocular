if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AnimatedRouterView.c078c7bf.js",revision:null},{url:"assets/AnimatedRouterView.e98dcee7.css",revision:null},{url:"assets/AsyncComponent.2fd559de.js",revision:null},{url:"assets/AsyncComponent.cf02fa6b.css",revision:null},{url:"assets/BudgetPane.e4eef729.css",revision:null},{url:"assets/BudgetPane.eb2bfe8d.js",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.371fa6dc.js",revision:null},{url:"assets/Button.e02df8ae.css",revision:null},{url:"assets/ChartPlaceholder.7b180906.js",revision:null},{url:"assets/ChartPlaceholder.81436a12.css",revision:null},{url:"assets/Currency.vue_vue_type_script_setup_true_lang.b3ab1566.js",revision:null},{url:"assets/Dashboard.b158726f.js",revision:null},{url:"assets/Dashboard.c46f6e48.css",revision:null},{url:"assets/DevelopmentChart.1af7104e.css",revision:null},{url:"assets/DevelopmentChart.47d8644e.js",revision:null},{url:"assets/DistributionChart.2adaecc8.js",revision:null},{url:"assets/DistributionChart.8d919a64.css",revision:null},{url:"assets/Expenses.04f0ebdb.js",revision:null},{url:"assets/Frame.b7bc7496.css",revision:null},{url:"assets/Frame.cddc49a1.js",revision:null},{url:"assets/Icon.ac2ce4fd.css",revision:null},{url:"assets/Icon.af4d1354.js",revision:null},{url:"assets/Income.24ac2bef.js",revision:null},{url:"assets/index.221cc591.css",revision:null},{url:"assets/index.820b6770.js",revision:null},{url:"assets/installSVGRenderer.e40d1b43.js",revision:null},{url:"assets/Link.5c4f7287.js",revision:null},{url:"assets/Link.e30f78c8.css",revision:null},{url:"assets/Overview.7de36986.js",revision:null},{url:"assets/Overview.ae553666.css",revision:null},{url:"assets/Pane.22e45a0b.js",revision:null},{url:"assets/Pane.b6f0e537.css",revision:null},{url:"assets/Summary.895b9b83.css",revision:null},{url:"assets/Summary.d9d82e92.js",revision:null},{url:"assets/useMonthNames.84d2c4c4.js",revision:null},{url:"assets/useResizeObserver.37f31f9b.js",revision:null},{url:"assets/useThemeStyles.1f51dac5.js",revision:null},{url:"index.html",revision:"2015016b73b7cbca2a15a750aae7016a"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));