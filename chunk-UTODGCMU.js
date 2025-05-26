import{a as c,f as p}from"./chunk-XVNCFNIM.js";import"./chunk-QOKAHIDB.js";import{Ga as a,La as o,ab as s,fb as i,ga as m,gb as e,hb as n,ub as t,xb as h}from"./chunk-EFDBRRIF.js";var b=(()=>{class r{constructor(){this.pornhubCss=`
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
  `,this.spanishDictCss=`
  /* Limited page view popup. */
  .ReactModalPortal {
    visibility: hidden;
  }
  `,this.twitterCss=`
  article:has([data-testid="socialContext"]) {
    display: none;
  }
  `,this.youtubeCss=`
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
  `}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=m({type:r,selectors:[["css-injections-page"]],standalone:!0,features:[h],decls:62,vars:4,consts:[[2,"text-align","center"],[1,"divider"],[1,"disclaimer"],["href","https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld","target","_blank"],["href","https://blog.logrocket.com/product-management/why-youtube-created-shorts/"],[1,"code-container"],[3,"innerHTML"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/:has","target","_blank"]],template:function(l,d){l&1&&(i(0,"mat-card")(1,"h1",0),t(2,"CSS Injection"),e(),n(3,"div",1),i(4,"p",2),t(5,"DISCLAIMER: I do not own the chrome extension, know it's developer, or have been paid to endorse it. My thoughts are my own."),e(),i(6,"p"),t(7,` While ad blockers can make browsing the web a significantly different experience than without, there is still a lot of content that I don't like seeing online. Not that there is anything inherently wrong with the things I don't enjoy viewing, it's just my personal preferences. I thought "gee, wouldn't it be great if there was a Chrome extension that could inject custom CSS rules you create into websites of your choosing to hide things you don't want to see?" Sure enough, there are several extensions made to do just that! I tried a few and found one that works well and has a nice UI. `),e(),i(8,"p")(9,"a",3),t(10," User JavaScript and CSS "),e(),t(11," is a great extension that I've been using to great effect. Here are a few of my favorite custom CSS rules I've created for myself to make browsing certain websites more enjoyable. Here are a few of my favorite custom CSS rules I've created for myself to make browsing certain websites more enjoyable. "),e(),i(12,"h1"),t(13,"Youtube.com"),e(),i(14,"p"),t(15,"I really don't like Youtube Shorts, and the site force-feeds you them constantly. There is no way to disable Shorts as "),i(16,"a",4),t(17,"the company seems pressured to compete with Tiktok."),e(),t(18," I don't think it encourages healthy, intentional, or mindful viewing and it feels more like brainrot when you viewing Shorts, as if the Tiktok content model is something to aspire to copy. These injections will hide them from your view."),e(),i(19,"pre",5),n(20,"code",6),e(),i(21,"h1"),t(22,"Twitter.com"),e(),i(23,"p"),t(24,"I don't want to see what the people I follow like and retweet. I want to see "),i(25,"i"),t(26,"their"),e(),t(27," content!! Most of the retweets and likes from other people I see tend to be political, hot takes, or tiktok reposts. I don't miss this spam for the most part."),e(),i(28,"pre",5),n(29,"code",6),e(),i(30,"h1"),t(31,"Pornhub.com"),e(),i(32,"p"),t(33,"I'm not a fan of 'step fantasy' porn, where the actors pretend to be related. I really don't get this taboo appeal, but it's all over the platform. Sure you can set a Taste Profile if you have even a free account, but this only blocks categorical content on the My Recommendations page. Taste Profile doesn't apply when using the site in any other way than that."),e(),i(34,"pre",5),n(35,"code",6),e(),i(36,"h1"),t(37,"Spanishdict.com"),e(),i(38,"p"),t(39,"This is a great website for viewing verb conjugations if you're learning spanish. This removes a modal that blocks the screen on page load"),e(),i(40,"pre",5),n(41,"code",6),e(),i(42,"h1"),t(43,"Shortcomings"),e(),i(44,"p"),t(45,"This (and any CSS injector) is not without it's shortcomings. There are some things that it can struggle with such as:"),e(),i(46,"ul")(47,"li")(48,"b"),t(49,"High barrier to entry:"),e(),t(50," The percent of people who know how to write CSS selectors is relatively small, all things considered. "),e(),i(51,"li")(52,"b"),t(53,"Easily broken when a website remodels:"),e(),t(54," If a website overhauls itself, there is a good chance your selectors will break. These little 'hacks' usually are very dependent on the current iteration of the website's UI. "),e(),i(55,"li")(56,"b"),t(57,"Difficult to create well:"),e(),t(58," Inspecting the DOM of most big name websites reveal a lot of generated elements, random class names, and general obfuscation/minification. You rarely ever get so lucky as to find a <div> with a human readable and obvious class name. I think the "),i(59,"a",7),t(60,":has selector"),e(),t(61," will significantly help with this once it lands (assuming it's reasonably performant). "),e()()()),l&2&&(o(20),s("innerHTML",d.youtubeCss,a),o(9),s("innerHTML",d.twitterCss,a),o(6),s("innerHTML",d.pornhubCss,a),o(6),s("innerHTML",d.spanishDictCss,a))},dependencies:[p,c],styles:["mat-card[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]{margin:20px 5%}mat-card-title[_ngcontent-%COMP%]{margin-top:20px!important}.disclaimer[_ngcontent-%COMP%]{display:block;margin-bottom:20px;font-size:1.1rem}.divider[_ngcontent-%COMP%]{border-top:1px solid white;margin-bottom:1em}.code-container[_ngcontent-%COMP%]{max-width:fit-content;overflow-x:auto;width:auto}h1[_ngcontent-%COMP%]{margin-top:40px}pre[_ngcontent-%COMP%]{background:#303030;border-radius:8px;padding-right:16px;width:fit-content}"]})}}return r})();export{b as CssInjectionPage};
