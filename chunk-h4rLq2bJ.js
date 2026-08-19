import{Gn as rg,Mn as og,Nn as ol,R as LC,U as Mi,Vt as cT,at as SE,sr as vI}from"./chunk-B3eT0c-t.js";import"./main-FXCFYKB6.js";import{n as I,o as k,r as T,t as F}from"./chunk-CmXRFFe9.js";var u=class d{pornhubCss=`
  /* step fantasy stuff */
  a[title~="step" i],
  a[title~="stepmom" i],
  a[title~="stepdad" i],
  a[title~="stepsis" i],
  a[title~="stepsister" i],
  a[title~="stepbro" i],
  a[title~="stepbrother" i],
  a[title~="stepdaughter" i],
  a[title~="stepcousin" i],
  a[data-title~="step" i],
  a[data-title~="stepmom" i],
  a[data-title~="stepdad" i],
  a[data-title~="stepsis" i],
  a[data-title~="stepsister" i],
  a[data-title~="stepbro" i],
  a[data-title~="stepbrother" i],
  a[data-title~="stepdaughter" i],
  a[data-title~="stepcousin" i] {
    visibility: hidden;
  }
  `;spanishDictCss=`
  /* Limited page view popup. */
  .ReactModalPortal {
    visibility: hidden;
  }
  `;twitterCss=`
  article:has([data-testid="socialContext"]) {
    display: none;
  }
  `;chatgptCss=`
  body {
    pointer-events: auto;
  }

  div[data-testid=modal-no-auth-rate-limit] {
    visibility: hidden;
    display: none;
  }
  `;youtubeCss=`
  ytd-emergency-onebox-renderer {
    display: none;
  }
  
  /* Rows of youtube shorts on the search page */
  ytd-reel-shelf-renderer {
    display: none !important;
  }
  
  /* Rows of youtube shorts on the home page */
  div#dismissible:has(span#title) {
    display: none;
  }
  
  /* Misc bullshit messaging */
  .ytd-statement-banner-renderer {
      display: none;
  }
  `;static ɵfac=function(l){return new(l||d)};static ɵcmp=cT({type:d,selectors:[[`css-injections-page`]],decls:70,vars:5,consts:[[1,`divider`],[1,`disclaimer`],[`href`,`https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld`,`target`,`_blank`],[`href`,`https://blog.logrocket.com/product-management/why-youtube-created-shorts/`,`target`,`_blank`],[1,`code-container`],[3,`innerHTML`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/CSS/:has`,`target`,`_blank`]],template:function(l,r){l&1&&(Mi(0,`mat-card`)(1,`mat-card-header`)(2,`h1`),LC(3,`CSS Injection`),ol()(),og(4,`div`,0),Mi(5,`mat-card-content`)(6,`p`,1),LC(7,`DISCLAIMER: I do not own the chrome extension, know it's developer, or have been paid to endorse it. My thoughts are my own.`),ol(),Mi(8,`p`),LC(9,` While ad blockers can make browsing the web a significantly different experience than without, there is still a lot of content that I don't like seeing online. Not that there is anything inherently wrong with the things I don't enjoy viewing, it's just my personal preferences. I thought "gee, wouldn't it be great if there was a Chrome extension that could inject custom CSS rules you create into websites of your choosing to hide things you don't want to see?" Sure enough, there are several extensions made to do just that! I tried a few and found one that works well and has a nice UI. `),ol(),Mi(10,`p`)(11,`a`,2),LC(12,` User JavaScript and CSS `),ol(),LC(13,` is a great extension that I've been using to great effect. Here are a few of my favorite custom CSS rules I've created for myself to make browsing certain websites more enjoyable. Here are a few of my favorite custom CSS rules I've created for myself to make browsing certain websites more enjoyable. `),ol(),Mi(14,`h2`),LC(15,`Youtube.com`),ol(),Mi(16,`p`),LC(17,`I really don't like Youtube Shorts, and the site force-feeds you them constantly. There is no way to disable Shorts as `),Mi(18,`a`,3),LC(19,`the company seems pressured to compete with Tiktok.`),ol(),LC(20,` I don't think it encourages healthy, intentional, or mindful viewing and it feels more like brainrot when you viewing Shorts, as if the Tiktok content model is something to aspire to copy. These injections will hide them from your view.`),ol(),Mi(21,`pre`,4),og(22,`code`,5),ol(),Mi(23,`h2`),LC(24,`Twitter.com`),ol(),Mi(25,`p`),LC(26,`I don't want to see what the people I follow like and retweet. I want to see `),Mi(27,`i`),LC(28,`their`),ol(),LC(29,` content!! Most of the retweets and likes from other people I see tend to be political, hot takes, or tiktok reposts. I don't miss this spam for the most part.`),ol(),Mi(30,`pre`,4),og(31,`code`,5),ol(),Mi(32,`h2`),LC(33,`Chatgpt.com`),ol(),Mi(34,`p`),LC(35,` I simply don't want to log in with my Google account, nor create an account. This clears the modals and allows usage of the basic models. `),ol(),Mi(36,`pre`,4),og(37,`code`,5),ol(),Mi(38,`h2`),LC(39,`Pornhub.com`),ol(),Mi(40,`p`),LC(41,`I'm not a fan of 'step fantasy' porn, where the actors pretend to be related. I really don't get this taboo appeal, but it's all over the platform. Sure you can set a Taste Profile if you have even a free account, but this only blocks categorical content on the My Recommendations page. Taste Profile doesn't apply when using the site in any other way than that.`),ol(),Mi(42,`pre`,4),og(43,`code`,5),ol(),Mi(44,`h2`),LC(45,`Spanishdict.com`),ol(),Mi(46,`p`),LC(47,`This is a great website for viewing verb conjugations if you're learning spanish. This removes a modal that blocks the screen on page load`),ol(),Mi(48,`pre`,4),og(49,`code`,5),ol(),Mi(50,`h2`),LC(51,`Shortcomings`),ol(),Mi(52,`p`),LC(53,`This (and any CSS injector) is not without it's shortcomings. There are some things that it can struggle with such as:`),ol(),Mi(54,`ul`)(55,`li`)(56,`b`),LC(57,`High barrier to entry:`),ol(),LC(58,` The percent of people who know how to write CSS selectors is relatively small, all things considered. `),ol(),Mi(59,`li`)(60,`b`),LC(61,`Easily broken when a website remodels:`),ol(),LC(62,` If a website overhauls itself, there is a good chance your selectors will break. These little 'hacks' usually are very dependent on the current iteration of the website's UI. `),ol(),Mi(63,`li`)(64,`b`),LC(65,`Difficult to create well:`),ol(),LC(66,` Inspecting the DOM of most big name websites reveal a lot of generated elements, random class names, and general obfuscation/minification. You rarely ever get so lucky as to find a <div> with a human readable and obvious class name. I think the `),Mi(67,`a`,6),LC(68,`:has selector`),ol(),LC(69,` will significantly help with this once it lands (assuming it's reasonably performant). `),ol()()()()),l&2&&(vI(22),rg(`innerHTML`,r.youtubeCss,SE),vI(9),rg(`innerHTML`,r.twitterCss,SE),vI(6),rg(`innerHTML`,r.chatgptCss,SE),vI(6),rg(`innerHTML`,r.pornhubCss,SE),vI(6),rg(`innerHTML`,r.spanishDictCss,SE))},dependencies:[T,I,F,k],styles:[`[_nghost-%COMP%]{display:block;margin:auto;padding-bottom:1px;width:fit-content}mat-card[_ngcontent-%COMP%]{margin:20px 5%;max-width:1400px}mat-card-title[_ngcontent-%COMP%]{margin-top:20px!important}.disclaimer[_ngcontent-%COMP%]{display:block;margin-bottom:20px;font-size:1.1rem}.divider[_ngcontent-%COMP%]{border-top:1px solid white;margin-bottom:1em}.code-container[_ngcontent-%COMP%]{max-width:fit-content;overflow-x:auto;width:auto}pre[_ngcontent-%COMP%]{background:#303030;border-radius:8px;color:#fff;padding-right:16px;width:fit-content}`]})};export{u as CssInjectionPage};