(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0cDL":function(e,n,t){"use strict";t.r(n),t.d(n,"AboutMeRoutingModule",function(){return d}),t.d(n,"AboutMePageModule",function(){return g});var i=t("fXoL"),c=t("wZkO"),o=t("tyNb"),r=t("ofXK");function l(e,n){1&e&&i.Mb(0,"div",8)}function a(e,n){if(1&e&&(i.Ob(0,"div",1),i.Ob(1,"div",2),i.Ob(2,"span"),i.lc(3),i.Nb(),i.Ob(4,"div",3),i.Mb(5,"div",4),i.kc(6,l,1,0,"div",5),i.Nb(),i.Nb(),i.Ob(7,"div",6),i.Mb(8,"span",7),i.Nb(),i.Nb()),2&e){const e=n.$implicit,t=n.index,c=i.Xb();i.Bb(3),i.mc(c.calculateTimelineDate(e.date)),i.Bb(3),i.ac("ngIf",t!=c.timelineEvents.length-1),i.Bb(2),i.ac("innerHtml",e.content,i.gc)}}let b=(()=>{class e{constructor(){this.timelineEvents=[]}calculateTimelineDate(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"}).format(e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["timeline"]],inputs:{timelineEvents:"timelineEvents"},decls:1,vars:1,consts:[["class","timeline-block",4,"ngFor","ngForOf"],[1,"timeline-block"],[1,"timeline-bar-container"],[1,"timeline-bar"],[1,"timeline-node"],["class","timeline-line",4,"ngIf"],[1,"timeline-content"],[3,"innerHtml"],[1,"timeline-line"]],template:function(e,n){1&e&&i.kc(0,a,9,3,"div",0),2&e&&i.ac("ngForOf",n.timelineEvents)},directives:[r.h,r.i],styles:[".timeline-bar-container[_ngcontent-%COMP%], .timeline-block[_ngcontent-%COMP%]{display:flex}.timeline-bar-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:115px;white-space:nowrap;text-align:right;padding:6px 10px 0 0}.timeline-bar[_ngcontent-%COMP%]{display:inline-block}.timeline-node[_ngcontent-%COMP%]{border:3px solid grey}.timeline-line[_ngcontent-%COMP%]{border:2px solid grey;height:calc(100% - 35px);margin:auto;min-height:30px;width:0}.timeline-node[_ngcontent-%COMP%]{border-radius:18px;border-color:grey;height:25px;width:25px}.timeline-content[_ngcontent-%COMP%]{padding:0 0 20px 20px;flex-grow:1}"]}),e})(),s=(()=>{class e{constructor(){this.projectTimeline=[]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["about-me-page"]],decls:10,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","","routerLink","/projects"],["mat-tab-link","","routerLink","/"],["mat-tab-link","","routerLink","/about"],[3,"timelineEvents"]],template:function(e,n){1&e&&(i.Ob(0,"nav",0),i.Ob(1,"a",1),i.lc(2,"Projects"),i.Nb(),i.Ob(3,"a",2),i.lc(4,"Home"),i.Nb(),i.Ob(5,"a",3),i.lc(6,"About"),i.Nb(),i.Nb(),i.Ob(7,"p"),i.lc(8,"My name is Blake Williams, I'm a software engineer."),i.Nb(),i.Mb(9,"timeline",4)),2&e&&(i.Bb(9),i.ac("timelineEvents",n.projectTimeline))},directives:[c.b,o.b,c.a,b],encapsulation:2}),e})();var m=t("Wp6s");let p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({imports:[[r.b,m.b]]}),e})();const u=[{path:"",component:s}];let d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({imports:[[o.c.forChild(u)],o.c]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({imports:[[r.b,p,c.c,d,m.b]]}),e})()}}]);