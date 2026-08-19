import{Dn as mt,Et as Z,Fn as pT,Gt as dy,Jn as sl,K as Ne$1,L as Ky,Ln as pe$1,Lt as br,Nn as ol,On as ng,Rn as pg,Sn as m,T as Ir,U as Mi,Un as r1,Ut as dC,Vt as cT,Yt as fC,Z as Qa,Zn as te,Zt as fg,_ as G,_t as Wh,bn as lt$1,d as Dg,dn as il,dr as xe$1,et as Qo,gn as kv,h as Er,hr as zi,i as Be$1,k as Jm,kt as Zm,l as Cs,lr as wr,mn as jp,mr as z,o as Bn,r as Ap,rr as ug,rt as RE,s as C,sr as vI,t as $,tn as gg,v as Gh,vt as Wn,w as Ig,yn as le}from"./chunk-B3eT0c-t.js";import{i as W$1,s as ae$1}from"./chunk-Cv7FIPju.js";import{$ as V,G as H$1,K as He,U as Ct,W as Gt,X as Ot$1,Z as Se$1,a as d,at as sn,c as w$1,et as W$2,i as Ve,n as m$1,nt as Wt,o as je,ot as tn,q as Ii,r as P,rt as f,s as v$1,st as v,tt as We}from"./main-FXCFYKB6.js";var se=sn();function Y(o){return new st(o.get(Ve),o.get(lt$1))}var st=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=Ot$1(-this._previousScrollPosition.left),i.style.top=Ot$1(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,n=t.style,s=e.scrollBehavior||``,l=n.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),se&&(e.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),se&&(e.scrollBehavior=s,n.scrollBehavior=l)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};var rt=class{enable(){}disable(){}attach(){}};var M=class{positionStrategy;scrollStrategy=new rt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var de=(()=>{class o{_attachedOverlays=[];_document=m(lt$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||o)};static ɵprov=wr({token:o,factory:o.ɵfac})}return o})();var pe=(()=>{class o extends de{_ngZone=m(xe$1);_renderer=m(Ir).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let n=e.length-1;n>-1;n--){let s=e[n];if(this.canReceiveEvent(s,t,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||o)};static ɵprov=wr({token:o,factory:o.ɵfac})}return o})();var ue=(()=>{class o extends de{_platform=m(f);_ngZone=m(xe$1);_renderer=m(Ir).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,n={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(e,`pointerdown`,this._pointerDownListener,n),s.listen(e,`click`,this._clickListener,n),s.listen(e,`auxclick`,this._clickListener,n),s.listen(e,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=v(t)};_clickListener=t=>{let e=v(t),n=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let l=s.length-1;l>-1;l--){let r=s[l],c=r._outsidePointerEvents;if(!(!r.hasAttached()||!this.canReceiveEvent(r,t,c))){if(re(r.overlayElement,e)||re(r.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||o)};static ɵprov=wr({token:o,factory:o.ɵfac})}return o})();function re(o,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=i;for(;e;){if(e===o)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var fe=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=cT({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return o})();var St=(()=>{class o{_platform=m(f);_containerElement;_document=m(lt$1);_styleLoader=m(W$2);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||tn()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let s=0;s<n.length;s++)n[s].remove()}let e=this._document.createElement(`div`);e.classList.add(t),tn()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(fe)}static ɵfac=function(e){return new(e||o)};static ɵprov=wr({token:o,factory:o.ɵfac})}return o})();var wt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,n){this._renderer=t,this._ngZone=e,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ge(o){return o&&o.nodeType===1}var T=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Z;_attachments=new Z;_detachments=new Z;_positionStrategy;_scrollStrategy;_locationChanges=z.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Z;_outsidePointerEvents=new Z;_afterNextRenderRef;constructor(i,t,e,n,s,l,r,c,f,h=!1,d,_){this._portalOutlet=i,this._host=t,this._pane=e,this._config=n,this._ngZone=s,this._keyboardDispatcher=l,this._document=r,this._location=c,this._outsideClickDispatcher=f,this._animationsDisabled=h,this._injector=d,this._renderer=_,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=jp(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=$($({},this._config),i),this._updateElementSize()}setDirection(i){this._config=G($({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Ot$1(this._config.width),i.height=Ot$1(this._config.height),i.minWidth=Ot$1(this._config.minWidth),i.minHeight=Ot$1(this._config.minHeight),i.maxWidth=Ot$1(this._config.maxWidth),i.maxHeight=Ot$1(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ge(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new wt(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let n=Ct(t||[]).filter(s=>!!s);n.length&&(e?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=jp(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var ae=`cdk-global-overlay-wrapper`;function H(o){return new at}var at=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ae),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:n,height:s,maxWidth:l,maxHeight:r}=this._overlayRef.getConfig(),c=(n===`100%`||n===`100vw`)&&(!l||l===`100%`||l===`100vw`),f=(s===`100%`||s===`100vh`)&&(!r||r===`100%`||r===`100vh`),h=this._xPosition,d=this._xOffset,_=this._overlayRef.getConfig().direction===`rtl`,X=``,z=``,S=``;c?S=`flex-start`:h===`center`?(S=`center`,_?z=d:X=d):_?h===`left`||h===`end`?(S=`flex-end`,X=d):(h===`right`||h===`start`)&&(S=`flex-start`,z=d):h===`left`||h===`start`?(S=`flex-start`,X=d):(h===`right`||h===`end`)&&(S=`flex-end`,z=d),i.position=this._cssPosition,i.marginLeft=c?`0`:X,i.marginTop=f?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?`0`:z,t.justifyContent=S,t.alignItems=f?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(ae),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var me=new C(`OVERLAY_DEFAULT_CONFIG`);function Dt(o,i){o.get(W$2).load(fe);let t=o.get(St),e=o.get(lt$1),n=o.get(H$1),s=o.get(mt),l=o.get(m$1),r=o.get(Qa,null,{optional:!0})||o.get(Ir).createRenderer(null,null),c=new M(i),f=o.get(me,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||l.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=i?.usePopover??f;let h=e.createElement(`div`),d=e.createElement(`div`);h.id=n.getId(`cdk-overlay-`),h.classList.add(`cdk-overlay-pane`),d.appendChild(h),c.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let _=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return ge(_)?_.after(d):_?.type===`parent`?_.element.appendChild(d):t.getContainerElement().appendChild(d),new T(new P(h,s,o),d,h,c,o.get(xe$1),o.get(pe),e,o.get(W$1),o.get(ue),i?.disableAnimations??o.get(Ky,null,{optional:!0})===`NoopAnimations`,o.get(le),r)}function xe(o,i){}var w=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var kt=(()=>{class o extends d{_elementRef=m(br);_focusTrapFactory=m(Ii);_config;_interactivityChecker=m(We);_ngZone=m(xe$1);_focusMonitor=m(He);_renderer=m(Qa);_changeDetectorRef=m(r1);_injector=m(pe$1);_platform=m(f);_document=m(lt$1);_portalOutlet;_focusTrapped=new Z;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=m(w,{optional:!0})||new w,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{s(),l(),t.removeAttribute(`tabindex`)},s=this._renderer.listen(t,`blur`,n),l=this._renderer.listen(t,`mousedown`,n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(t){this._isDestroyed||jp(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let n=Gt(),s=this._elementRef.nativeElement;(!n||n===this._document.body||n===s||s.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Gt();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Gt()))}static ɵfac=function(e){return new(e||o)};static ɵcmp=cT({type:o,selectors:[[`cdk-dialog-container`]],viewQuery:function(e,n){if(e&1&&gg(je,7),e&2){let s;dC(s=fC())&&(n._portalOutlet=s.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(e,n){e&2&&ng(`id`,n._config.id||null)(`role`,n._config.role)(`aria-modal`,n._config.ariaModal)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null)},features:[Gh],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(e,n){e&1&&Wh(0,xe,0,0,`ng-template`,0)},dependencies:[je],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return o})();var k=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Z;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Se$1(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i=``,t=``){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}};var Ee=new C(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let o=m(pe$1);return()=>Y(o)}});var Pe=new C(`DialogData`);var Re=new C(`DefaultDialogConfig`);function Ae(o){let i=Qo(o),t=new Be$1;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}var ve=(()=>{class o{_injector=m(pe$1);_defaultOptions=m(Re,{optional:!0});_parentDialog=m(o,{optional:!0,skipSelf:!0});_overlayContainer=m(St);_idGenerator=m(H$1);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;_ariaHiddenElements=new Map;_scrollStrategy=m(Ee);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Zm(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(dy(void 0)));open(t,e){e=$($({},this._defaultOptions||new w),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let s=this._getOverlayConfig(e),l=Dt(this._injector,s),r=new k(l,e),c=this._attachContainer(l,r,e);if(r.containerInstance=c,!this.openDialogs.length){let f=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(Cs(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(f)}):this._hideNonDialogContentFromAssistiveTechnology(f)}return this._attachDialogContent(t,r,c,e),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){Ot(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Ot(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Ot(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new M({positionStrategy:t.positionStrategy||H().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){let s=n.injector||n.viewContainerRef?.injector,l=[{provide:w,useValue:n},{provide:k,useValue:e},{provide:T,useValue:t}],r;n.container?typeof n.container==`function`?r=n.container:(r=n.container.type,l.push(...n.container.providers(n))):r=kt;let c=new v$1(r,n.viewContainerRef,pe$1.create({parent:s||this._injector,providers:l}));return t.attach(c).instance}_attachDialogContent(t,e,n,s){if(t instanceof Er){let l=this._createInjector(s,e,n,void 0),r={$implicit:s.data,dialogRef:e};s.templateContext&&(r=$($({},r),typeof s.templateContext==`function`?s.templateContext():s.templateContext)),n.attachTemplatePortal(new w$1(t,null,r,l))}else{let l=this._createInjector(s,e,n,this._injector),r=n.attachComponentPortal(new v$1(t,s.viewContainerRef,l,null,s.bindings));e.componentRef=r,e.componentInstance=r.instance}}_createInjector(t,e,n,s){let l=t.injector||t.viewContainerRef?.injector,r=[{provide:Pe,useValue:t.data},{provide:k,useValue:e}];return t.providers&&(typeof t.providers==`function`?r.push(...t.providers(e,t,n)):r.push(...t.providers)),t.direction&&(!l||!l.get(m$1,null,{optional:!0}))&&r.push({provide:m$1,useValue:Ae(t.direction)}),pe$1.create({parent:l||s,providers:r})}_removeOpenDialog(t,e){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,l)=>{s?l.setAttribute(`aria-hidden`,s):l.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let s=e[n];s!==t&&s.nodeName!==`SCRIPT`&&s.nodeName!==`STYLE`&&!s.hasAttribute(`aria-live`)&&!s.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(s,s.getAttribute(`aria-hidden`)),s.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||o)};static ɵprov=wr({token:o,factory:o.ɵfac})}return o})();function Ot(o,i){let t=o.length;for(;t--;)i(o[t])}function Me(o,i){}var ct=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var xt=`mdc-dialog--open`;var be=`mdc-dialog--opening`;var Ce=`mdc-dialog--closing`;var Te=150;var Ie=75;var Fe=(()=>{class o extends kt{_animationStateChanged=new Be$1;_animationsEnabled=!Wt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Se(this._config.enterAnimationDuration)??Te:0;_exitAnimationDuration=this._animationsEnabled?Se(this._config.exitAnimationDuration)??Ie:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(we,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(be,xt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(xt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(xt),this._animationsEnabled?(this._hostElement.style.setProperty(we,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ce)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(be,Ce)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),e}static ɵfac=(()=>{let t;return function(n){return(t||(t=kv(o)))(n||o)}})();static ɵcmp=cT({type:o,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(e,n){e&2&&(ug(`id`,n._config.id),ng(`aria-modal`,n._config.ariaModal)(`role`,n._config.role)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null),Dg(`_mat-animation-noopable`,!n._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,n._actionSectionCount>0))},features:[Gh],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(e,n){e&1&&(Mi(0,`div`,0)(1,`div`,1),Wh(2,Me,0,0,`ng-template`,2),ol()())},dependencies:[je],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return o})();var we=`--mat-dialog-transition-duration`;function Se(o){return o==null?null:typeof o==`number`?o:o.endsWith(`ms`)?V(o.substring(0,o.length-2)):o.endsWith(`s`)?V(o.substring(0,o.length-1))*1e3:o===`0`?0:null}var lt=(function(o){return o[o.OPEN=0]=`OPEN`,o[o.CLOSING=1]=`CLOSING`,o[o.CLOSED=2]=`CLOSED`,o})(lt||{});var W=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Bn(1);_beforeClosed=new Bn(1);_result;_closeFallbackTimeout;_state=lt.OPEN;_closeInteractionType;constructor(i,t,e){this._ref=i,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=i.id,i.addPanelClass(`mat-mdc-dialog-panel`),e._animationStateChanged.pipe(Wn(n=>n.state===`opened`),Cs(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Wn(n=>n.state===`closed`),Cs(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Jm(this.backdropClick(),this.keydownEvents().pipe(Wn(n=>n.keyCode===27&&!this.disableClose&&!Se$1(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Be(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(i){let t=this._config.closePredicate;t&&!t(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(Wn(e=>e.state===`closing`),Cs(1)).subscribe(e=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=lt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let t=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?t.left(i.left):t.right(i.right):t.centerHorizontally(),i&&(i.top||i.bottom)?i.top?t.top(i.top):t.bottom(i.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(i=``,t=``){return this._ref.updateSize(i,t),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=lt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Be(o,i,t){return o._closeInteractionType=i,o.close(t)}var Et=new C(`MatMdcDialogData`);var Le=new C(`mat-mdc-dialog-default-options`);var Ne=new C(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=m(pe$1);return()=>Y(o)}});var De=(()=>{class o{_defaultOptions=m(Le,{optional:!0});_scrollStrategy=m(Ne);_parentDialog=m(o,{optional:!0,skipSelf:!0});_idGenerator=m(H$1);_injector=m(pe$1);_dialog=m(ve);_animationsDisabled=Wt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;dialogConfigClass=ct;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Zm(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(dy(void 0)));constructor(){this._dialogRefConstructor=W,this._dialogContainerType=Fe,this._dialogDataToken=Et}open(t,e){let n;e=$($({},this._defaultOptions||new ct),e),e.id=e.id||this._idGenerator.getId(`mat-mdc-dialog-`),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let s=this._dialog.open(t,G($({},e),{positionStrategy:H(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()===`0`||e.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:w,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(l,r,c)=>(n=new this._dialogRefConstructor(l,e,c),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n},{provide:k,useValue:null}])}));return n.componentRef=s.componentRef,n.componentInstance=s.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static ɵfac=function(e){return new(e||o)};static ɵprov=wr({token:o,factory:o.ɵfac})}return o})();var Ye=[`image`];var ht=class o{constructor(i){this.renderer=i}renderer;image;data=m(Et);dialogRef=m(W);scale=1;offsetX=0;offsetY=0;ngAfterViewInit(){document.addEventListener(`mousemove`,this.onMouseMove),this.updateCursorStyle()}onImageLoad(){let i=this.image.nativeElement.offsetWidth/this.image.nativeElement.offsetHeight;this.renderer.setStyle(this.image.nativeElement.parentNode,`aspect-ratio`,i)}updateImagePosition(){let i=this.image.nativeElement.parentNode,t=i.offsetWidth,e=i.offsetHeight,n=this.image.nativeElement.offsetWidth,s=this.image.nativeElement.offsetHeight;this.offsetX=Math.min(this.offsetX,(n*this.scale-t)/2),this.offsetY=Math.min(this.offsetY,(s*this.scale-e)/2),this.offsetX=Math.max(this.offsetX,-1*(n*this.scale-t)/2),this.offsetY=Math.max(this.offsetY,-1*(s*this.scale-e)/2),this.renderer.setStyle(this.image.nativeElement,`transform`,`translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`),this.updateCursorStyle()}updateCursorStyle(){this.renderer.setStyle(this.image.nativeElement,`cursor`,this.scale<=1?`zoom-in`:`zoom-out`)}onMouseMove=i=>{if(this.scale==1)return;let t=window.innerWidth/2,e=window.innerHeight/2,n=this.image.nativeElement.offsetWidth,s=this.image.nativeElement.offsetHeight,l=(t-i.clientX)/(n/2),r=(e-i.clientY)/(s/2),c=this.image.nativeElement.parentNode,f=c.offsetWidth,h=c.offsetHeight;this.offsetX=l*(n*this.scale-f)/2,this.offsetY=r*(s*this.scale-h)/2,this.updateImagePosition()};toggleZoomLevel(i){this.scale>1?this.scale=1:this.scale=2,this.onMouseMove(i),this.updateImagePosition(),this.updateCursorStyle()}closeDialog(){this.dialogRef.close()}ngOnDestroy(){document.removeEventListener(`mousemove`,this.onMouseMove)}static ɵfac=function(t){return new(t||o)(zi(Qa))};static ɵcmp=cT({type:o,selectors:[[`image-viewer-dialog`]],viewQuery:function(t,e){if(t&1&&gg(Ye,5),t&2){let n;dC(n=fC())&&(e.image=n.first)}},decls:3,vars:1,consts:[[`image`,``],[`id`,`image`,3,`load`,`click`,`src`]],template:function(t,e){t&1&&(il(0,`div`)(1,`img`,1,0),pg(`load`,function(){return e.onImageLoad()})(`click`,function(s){return e.toggleZoomLevel(s)}),sl()()),t&2&&(vI(),ug(`src`,e.data.imageUrl,Ap))},dependencies:[ae$1],styles:[`div[_ngcontent-%COMP%]{overflow:hidden;max-width:95vw;max-height:95vh}img[_ngcontent-%COMP%]{width:100%;will-change:transform}`]})};var dt=class o{constructor(i){this.dialog=i}dialog;emitImageClick(i){this.dialog.open(ht,{data:{imageUrl:i},maxWidth:`95vw`,maxHeight:`95vh`})}static ɵfac=function(t){return new(t||o)(Ne$1(De))};static ɵprov=te({token:o,factory:o.ɵfac,providedIn:`root`})};var Oe=class o{constructor(i,t,e){this.element=i;this.renderer=t;this.dialogImageService=e;jp(()=>{this.calculateSrcAttribute(),setTimeout(()=>this.afterViewInitFinished=!0),this.aspectRatio&&this.renderer.setStyle(this.element.nativeElement,`aspect-ratio`,this.getAspectRatioNumber()+``)})}element;renderer;dialogImageService;imgurId=``;aspectRatio=``;preventDialogOpening=!1;imgurUrlPattern=`https://imgur.com/`;minWidthToExpandModal=1500;imageSizesToImgurSuffixArray=[{width:320,suffix:`m`},{width:640,suffix:`l`},{width:1024,suffix:`h`}];lastCalculatedSuffix=void 0;lastCalculatedWidth=0;afterViewInitFinished=!1;errorOccurred=!1;onError(){this.errorOccurred=!0}onResize(){this.afterViewInitFinished&&this.calculateSrcAttribute()}onClick(){this.errorOccurred||!this.preventDialogOpening&&window.innerWidth>this.minWidthToExpandModal&&this.dialogImageService.emitImageClick(`${this.imgurUrlPattern}${this.imgurId}.jpg`)}get cursor(){return!this.afterViewInitFinished||this.preventDialogOpening?null:window.innerWidth>this.minWidthToExpandModal?`pointer`:null}calculateSrcAttribute(){let i=this.aspectRatio?this.getAspectRatioNumber():1.7777777777777777,t=this.element.nativeElement.width,e=i>1?t:t/i;if(e<this.lastCalculatedWidth)return;let n=this.chooseSuffix(e);if(this.lastCalculatedSuffix!=null&&n==this.lastCalculatedSuffix)return;this.lastCalculatedSuffix=n,this.lastCalculatedWidth=e;let s=`${this.imgurUrlPattern}${this.imgurId}${n}.jpg`;this.renderer.setAttribute(this.element.nativeElement,`src`,s)}chooseSuffix(i){for(let t of this.imageSizesToImgurSuffixArray)if(!(i>t.width))return t.suffix;return``}getAspectRatioNumber(){return Function(`"use strict"; return `+this.aspectRatio)()}static ɵfac=function(t){return new(t||o)(zi(br),zi(Qa),zi(dt))};static ɵdir=pT({type:o,selectors:[[``,`imgurId`,``]],hostVars:2,hostBindings:function(t,e){t&1&&fg(`error`,function(){return e.onError()})(`resize`,function(){return e.onResize()},RE)(`click`,function(){return e.onClick()}),t&2&&Ig(`cursor`,e.cursor)},inputs:{imgurId:`imgurId`,aspectRatio:`aspectRatio`,preventDialogOpening:`preventDialogOpening`}})};export{Oe as t};