if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AnimatedRouterView.5160f56f.css",revision:null},{url:"assets/AnimatedRouterView.a5ead4f2.js",revision:null},{url:"assets/AsyncComponent.3618c24c.css",revision:null},{url:"assets/AsyncComponent.6957f240.js",revision:null},{url:"assets/BudgetPane.0cf32970.css",revision:null},{url:"assets/BudgetPane.9b43693e.js",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.1bc63759.js",revision:null},{url:"assets/Button.90854678.css",revision:null},{url:"assets/ChartPlaceholder.de164889.css",revision:null},{url:"assets/ChartPlaceholder.fb1babdb.js",revision:null},{url:"assets/Currency.11a24762.js",revision:null},{url:"assets/Dashboard.1e61422b.css",revision:null},{url:"assets/Dashboard.a4bb2f45.js",revision:null},{url:"assets/DevelopmentChart.f20bb94a.js",revision:null},{url:"assets/DevelopmentChart.fc0785c4.css",revision:null},{url:"assets/DistributionChart.ea83ba93.css",revision:null},{url:"assets/DistributionChart.f7964551.js",revision:null},{url:"assets/Expenses.2dd07c28.js",revision:null},{url:"assets/Frame.57d483cc.css",revision:null},{url:"assets/Frame.d2fe7483.js",revision:null},{url:"assets/Icon.4040bbc7.js",revision:null},{url:"assets/Icon.db2c3e40.css",revision:null},{url:"assets/Income.4b2c3730.js",revision:null},{url:"assets/index.41e40cf5.css",revision:null},{url:"assets/index.a04044f7.js",revision:null},{url:"assets/installSVGRenderer.c4b75595.js",revision:null},{url:"assets/Link.0bac39e6.js",revision:null},{url:"assets/Link.5fac6190.css",revision:null},{url:"assets/Overview.6717a564.js",revision:null},{url:"assets/Overview.c9df85f7.css",revision:null},{url:"assets/Pane.31d84cff.css",revision:null},{url:"assets/Pane.fd63535d.js",revision:null},{url:"assets/Summary.1abd1833.js",revision:null},{url:"assets/Summary.89a61f57.css",revision:null},{url:"assets/useMonthNames.55a5f6a8.js",revision:null},{url:"assets/useResizeObserver.d20ebe49.js",revision:null},{url:"assets/useThemeStyles.4519d0d0.js",revision:null},{url:"index.html",revision:"7b64a0a3d7422538f7507ed233861f4c"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
