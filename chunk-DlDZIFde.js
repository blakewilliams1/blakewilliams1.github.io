import{An as qg,C as HE,Ct as Yn,D as Iy,Ft as bg,Gt as eg,H as Nr,Ht as dl,I as Mr,J as Qp,Jt as fg,Mt as ay,Nn as re$1,Nt as b,O as Ja,R as NI,Rn as se$1,Rt as bs,S as G,T as Ig,Un as ul,Vt as de,Xt as ft,Yn as vt,Yt as fl,a as Bp,cr as xg,ct as Tw,er as wg,gn as m1,gt as X,hn as m,ht as Wn,it as TT,k as Jo,kn as q,m as Dw,n as Ag,ot as Tg,pt as Uv,r as Ai,sn as iy,sr as xe$1,st as Tr,t as Ae$1,tr as wr,ur as yT,ut as Ue,wt as Zi,xn as ng,zn as sv}from"./chunk-CbdW2v9C.js";import{g as ue$1,s as Z}from"./chunk-Do2WuadP.js";import{$ as W,G as Dt$1,J as Mi,K as G$1,Q as Ve,U as $t,X as Se$1,Y as Ot$1,Z as V,a as We$1,at as m$1,c as w$1,et as We,i as Te$1,n as y,o as d,ot as ns,r as O,rt as is,s as v$1,st as v,tt as Wt}from"./main-7CVFOYPV.js";var se=ns();function Y(n){return new rt(n.get(Te$1),n.get(ft))}var rt=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=Dt$1(-this._previousScrollPosition.left),i.style.top=Dt$1(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,o=t.style,a=e.scrollBehavior||``,r=o.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),se&&(e.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),se&&(e.scrollBehavior=a,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};var lt=class{enable(){}disable(){}attach(){}};var M=class{positionStrategy;scrollStrategy=new lt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var ge=(()=>{class n{_attachedOverlays=[];_document=m(ft);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();var ue=(()=>{class n extends ge{_ngZone=m(Ae$1);_renderer=m(wr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let a=e[o];if(this.canReceiveEvent(a,t,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();var me=(()=>{class n extends ge{_platform=m(m$1);_ngZone=m(Ae$1);_renderer=m(wr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,`pointerdown`,this._pointerDownListener,o),a.listen(e,`click`,this._clickListener,o),a.listen(e,`auxclick`,this._clickListener,o),a.listen(e,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=v(t)};_clickListener=t=>{let e=v(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let s=a[r],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,c))){if(re(s.overlayElement,e)||re(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();function re(n,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=i;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var fe=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=yT({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})();var Dt=(()=>{class n{_platform=m(m$1);_containerElement;_document=m(ft);_styleLoader=m(W);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||is()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let a=0;a<o.length;a++)o[a].remove()}let e=this._document.createElement(`div`);e.classList.add(t),is()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(fe)}static ɵfac=function(e){return new(e||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();var St=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,o){this._renderer=t,this._ngZone=e,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function _e(n){return n&&n.nodeType===1}var Ot=Jo([]);var I=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new X;_attachments=new X;_detachments=new X;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new X;_outsidePointerEvents=new X;_afterNextRenderRef;constructor(i,t,e,o,a,r,s,c,u,d=!1,h,_){this._portalOutlet=i,this._host=t,this._pane=e,this._config=o,this._ngZone=a,this._keyboardDispatcher=r,this._document=s,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=h,this._renderer=_,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),qg(()=>{Ot.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Qp(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),qg(()=>{Ot.update(t=>t.filter(e=>e!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,qg(()=>{Ot.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=G(G({},this._config),i),this._updateElementSize()}setDirection(i){this._config=q(G({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Dt$1(this._config.width),i.height=Dt$1(this._config.height),i.minWidth=Dt$1(this._config.minWidth),i.minHeight=Dt$1(this._config.minHeight),i.maxWidth=Dt$1(this._config.maxWidth),i.maxHeight=Dt$1(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;_e(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new St(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let o=Ot$1(t||[]).filter(a=>!!a);o.length&&(e?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Qp(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var le=`cdk-global-overlay-wrapper`;function z(n){return new ct}var ct=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(le),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:a,maxWidth:r,maxHeight:s}=this._overlayRef.getConfig(),c=(o===`100%`||o===`100vw`)&&(!r||r===`100%`||r===`100vw`),u=(a===`100%`||a===`100vh`)&&(!s||s===`100%`||s===`100vh`),d=this._xPosition,h=this._xOffset,_=this._overlayRef.getConfig().direction===`rtl`,W=``,X=``,k=``;c?k=`flex-start`:d===`center`?(k=`center`,_?X=h:W=h):_?d===`left`||d===`end`?(k=`flex-end`,W=h):(d===`right`||d===`start`)&&(k=`flex-start`,X=h):d===`left`||d===`start`?(k=`flex-start`,W=h):(d===`right`||d===`end`)&&(k=`flex-end`,X=h),i.position=this._cssPosition,i.marginLeft=c?`0`:W,i.marginTop=u?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?`0`:X,t.justifyContent=k,t.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(le),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var ye=new b(`OVERLAY_DEFAULT_CONFIG`);function xt(n,i){n.get(W).load(fe);let t=n.get(Dt),e=n.get(ft),o=n.get(V),a=n.get(vt),r=n.get(y),s=n.get(Ja,null,{optional:!0})||n.get(wr).createRenderer(null,null),c=new M(i),u=n.get(ye,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=i?.usePopover??u;let d=e.createElement(`div`),h=e.createElement(`div`);d.id=o.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),h.appendChild(d),c.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let _=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return _e(_)?_.after(h):_?.type===`parent`?_.element.appendChild(h):t.getContainerElement().appendChild(h),new I(new O(d,a,n),h,d,c,n.get(Ae$1),n.get(ue),e,n.get(Z),n.get(me),i?.disableAnimations??n.get(sv,null,{optional:!0})===`NoopAnimations`,n.get(de),s)}var w=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Pt=(()=>{class n extends d{_elementRef=m(Mr);_focusTrapFactory=m(Mi);_config;_interactivityChecker=m(We);_ngZone=m(Ae$1);_focusMonitor=m(Ve);_renderer=m(Ja);_changeDetectorRef=m(m1);_injector=m(se$1);_platform=m(m$1);_document=m(ft);_portalOutlet;_focusTrapped=new X;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=m(w,{optional:!0})||new w,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{a(),r(),t.removeAttribute(`tabindex`)},a=this._renderer.listen(t,`blur`,o),r=this._renderer.listen(t,`mousedown`,o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(t){this._isDestroyed||Qp(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||e.focus(t);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,t);break;default:this._focusByCssSelector(this._config.autoFocus,t)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t==`string`?e=this._document.querySelector(t):typeof t==`boolean`?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus==`function`){let o=$t(),a=this._elementRef.nativeElement;(!o||o===this._document.body||o===a||a.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=$t();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=$t()))}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){function t(e,o){}return yT({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(o,a){if(o&1&&bg(We$1,7),o&2){let r;Dw(r=Tw())&&(a._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(o,a){o&2&&fg(`id`,a._config.id||null)(`role`,a._config.role)(`aria-modal`,a._config.ariaModal)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null)},features:[eg],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(o,a){o&1&&ng(0,t,0,0,`ng-template`,0)},dependencies:[We$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var D=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new X;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Se$1(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i=``,t=``){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}};var Pe=new b(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=m(se$1);return()=>Y(n)}});var Re=new b(`DialogData`);var Ae=new b(`DefaultDialogConfig`);function Me(n){let i=Jo(n),t=new Ue;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}var Ce=(()=>{class n{_injector=m(se$1);_defaultOptions=m(Ae,{optional:!0});_parentDialog=m(n,{optional:!0,skipSelf:!0});_overlayContainer=m(Dt);_idGenerator=m(V);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new X;_afterOpenedAtThisLevel=new X;_ariaHiddenElements=new Map;_scrollStrategy=m(Pe);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=iy(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Iy(void 0)));open(t,e){let o=this._defaultOptions||new w;e=G(G({},o),e),e.id=e.id||this._idGenerator.getId(`cdk-dialog-`),e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),r=xt(this._injector,a),s=new D(r,e),c=this._attachContainer(r,s,e);if(s.containerInstance=c,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(bs(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(t,s,c,e),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Et(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){Et(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Et(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new M({positionStrategy:t.positionStrategy||z().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let a=o.injector||o.viewContainerRef?.injector,r=[{provide:w,useValue:o},{provide:D,useValue:e},{provide:I,useValue:t}],s;o.container?typeof o.container==`function`?s=o.container:(s=o.container.type,r.push(...o.container.providers(o))):s=Pt;let c=new v$1(s,o.viewContainerRef,se$1.create({parent:a||this._injector,providers:r}));return t.attach(c).instance}_attachDialogContent(t,e,o,a){if(t instanceof Tr){let r=this._createInjector(a,e,o,void 0),s={$implicit:a.data,dialogRef:e};a.templateContext&&(s=G(G({},s),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),o.attachTemplatePortal(new w$1(t,null,s,r))}else{let r=this._createInjector(a,e,o,this._injector),s=o.attachComponentPortal(new v$1(t,a.viewContainerRef,r,null,a.bindings));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,o,a){let r=t.injector||t.viewContainerRef?.injector,s=[{provide:Re,useValue:t.data},{provide:D,useValue:e}];return t.providers&&(typeof t.providers==`function`?s.push(...t.providers(e,t,o)):s.push(...t.providers)),t.direction&&(!r||!r.get(y,null,{optional:!0}))&&s.push({provide:y,useValue:Me(t.direction)}),se$1.create({parent:r||a,providers:s})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute(`aria-hidden`,a):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let a=e[o];a!==t&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(e){return new(e||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();function Et(n,i){let t=n.length;for(;t--;)i(n[t])}var ht=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Rt=`mdc-dialog--open`;var we=`mdc-dialog--opening`;var ke=`mdc-dialog--closing`;var Ie=150;var Te=75;var Be=(()=>{class n extends Pt{_animationStateChanged=new Ue;_animationsEnabled=!Wt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Se(this._config.enterAnimationDuration)??Ie:0;_exitAnimationDuration=this._animationsEnabled?Se(this._config.exitAnimationDuration)??Te:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Oe,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(we,Rt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Rt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Rt),this._animationsEnabled?(this._hostElement.style.setProperty(Oe,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ke)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(we,ke)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),e}static ɵfac=(()=>{let t;return function(o){return(t||(t=Uv(n)))(o||n)}})();static ɵcmp=(function(){function t(e,o){}return yT({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(o,a){o&2&&(Ig(`id`,a._config.id),fg(`aria-modal`,a._config.ariaModal)(`role`,a._config.role)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null),Ag(`_mat-animation-noopable`,!a._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,a._actionSectionCount>0))},features:[eg],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(o,a){o&1&&(Ai(0,`div`,0)(1,`div`,1),ng(2,t,0,0,`ng-template`,2),ul()())},dependencies:[We$1],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var Oe=`--mat-dialog-transition-duration`;function Se(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?G$1(n.substring(0,n.length-2)):n.endsWith(`s`)?G$1(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var dt=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(dt||{});var H=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Wn(1);_beforeClosed=new Wn(1);_result;_closeFallbackTimeout;_state=dt.OPEN;_closeInteractionType;constructor(i,t,e){this._ref=i,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=i.id,i.addPanelClass(`mat-mdc-dialog-panel`),e._animationStateChanged.pipe(Yn(o=>o.state===`opened`),bs(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Yn(o=>o.state===`closed`),bs(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ay(this.backdropClick(),this.keydownEvents().pipe(Yn(o=>o.keyCode===27&&!this.disableClose&&!Se$1(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),Le(this,o.type===`keydown`?`keyboard`:`mouse`))})}close(i){let t=this._config.closePredicate;t&&!t(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(Yn(e=>e.state===`closing`),bs(1)).subscribe(e=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=dt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let t=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?t.left(i.left):t.right(i.right):t.centerHorizontally(),i&&(i.top||i.bottom)?i.top?t.top(i.top):t.bottom(i.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(i=``,t=``){return this._ref.updateSize(i,t),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=dt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Le(n,i,t){return n._closeInteractionType=i,n.close(t)}var At=new b(`MatMdcDialogData`);var Fe=new b(`mat-mdc-dialog-default-options`);var Ne=new b(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(se$1);return()=>Y(n)}});var De=(()=>{class n{_defaultOptions=m(Fe,{optional:!0});_scrollStrategy=m(Ne);_parentDialog=m(n,{optional:!0,skipSelf:!0});_idGenerator=m(V);_injector=m(se$1);_dialog=m(Ce);_animationsDisabled=Wt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new X;_afterOpenedAtThisLevel=new X;dialogConfigClass=ht;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=iy(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Iy(void 0)));constructor(){this._dialogRefConstructor=H,this._dialogContainerType=Be,this._dialogDataToken=At}open(t,e){let o;e=G(G({},this._defaultOptions||new ht),e),e.id=e.id||this._idGenerator.getId(`mat-mdc-dialog-`),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,q(G({},e),{positionStrategy:z(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()===`0`||e.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:w,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(r,s,c)=>(o=new this._dialogRefConstructor(r,e,c),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o},{provide:D,useValue:null}])}));return o.componentRef=a.componentRef,o.componentInstance=a.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(o);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static ɵfac=function(e){return new(e||n)};static ɵprov=Nr({token:n,factory:n.ɵfac})}return n})();var Ye=[`image`];var pt=class n{constructor(i){this.renderer=i}renderer;image;data=m(At);dialogRef=m(H);scale=1;offsetX=0;offsetY=0;ngAfterViewInit(){document.addEventListener(`mousemove`,this.onMouseMove),this.updateCursorStyle()}onImageLoad(){let i=this.image.nativeElement.offsetWidth/this.image.nativeElement.offsetHeight;this.renderer.setStyle(this.image.nativeElement.parentNode,`aspect-ratio`,i)}updateImagePosition(){let i=this.image.nativeElement.parentNode,t=i.offsetWidth,e=i.offsetHeight,o=this.image.nativeElement.offsetWidth,a=this.image.nativeElement.offsetHeight;this.offsetX=Math.min(this.offsetX,(o*this.scale-t)/2),this.offsetY=Math.min(this.offsetY,(a*this.scale-e)/2),this.offsetX=Math.max(this.offsetX,-1*(o*this.scale-t)/2),this.offsetY=Math.max(this.offsetY,-1*(a*this.scale-e)/2),this.renderer.setStyle(this.image.nativeElement,`transform`,`translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`),this.updateCursorStyle()}updateCursorStyle(){this.renderer.setStyle(this.image.nativeElement,`cursor`,this.scale<=1?`zoom-in`:`zoom-out`)}onMouseMove=i=>{if(this.scale==1)return;let t=window.innerWidth/2,e=window.innerHeight/2,o=this.image.nativeElement.offsetWidth,a=this.image.nativeElement.offsetHeight,r=(t-i.clientX)/(o/2),s=(e-i.clientY)/(a/2),c=this.image.nativeElement.parentNode,u=c.offsetWidth,d=c.offsetHeight;this.offsetX=r*(o*this.scale-u)/2,this.offsetY=s*(a*this.scale-d)/2,this.updateImagePosition()};toggleZoomLevel(i){this.scale>1?this.scale=1:this.scale=2,this.onMouseMove(i),this.updateImagePosition(),this.updateCursorStyle()}closeDialog(){this.dialogRef.close()}ngOnDestroy(){document.removeEventListener(`mousemove`,this.onMouseMove)}static ɵfac=function(t){return new(t||n)(Zi(Ja))};static ɵcmp=yT({type:n,selectors:[[`image-viewer-dialog`]],viewQuery:function(t,e){if(t&1&&bg(Ye,5),t&2){let o;Dw(o=Tw())&&(e.image=o.first)}},decls:3,vars:1,consts:[[`image`,``],[`id`,`image`,3,`load`,`click`,`src`]],template:function(t,e){t&1&&(dl(0,`div`)(1,`img`,1,0),wg(`load`,function(){return e.onImageLoad()})(`click`,function(a){return e.toggleZoomLevel(a)}),fl()()),t&2&&(NI(),Ig(`src`,e.data.imageUrl,Bp))},dependencies:[ue$1],styles:[`div[_ngcontent-%COMP%]{overflow:hidden;max-width:95vw;max-height:95vh}img[_ngcontent-%COMP%]{width:100%;will-change:transform}`]})};var gt=class n{constructor(i){this.dialog=i}dialog;emitImageClick(i){this.dialog.open(pt,{data:{imageUrl:i},maxWidth:`95vw`,maxHeight:`95vh`})}static ɵfac=function(t){return new(t||n)(xe$1(De))};static ɵprov=re$1({token:n,factory:n.ɵfac,providedIn:`root`})};var xe=class n{constructor(i,t,e){this.element=i;this.renderer=t;this.dialogImageService=e;Qp(()=>{this.calculateSrcAttribute(),setTimeout(()=>this.afterViewInitFinished=!0),this.aspectRatio&&this.renderer.setStyle(this.element.nativeElement,`aspect-ratio`,this.getAspectRatioNumber()+``)})}element;renderer;dialogImageService;imgurId=``;aspectRatio=``;preventDialogOpening=!1;imgurUrlPattern=`https://imgur.com/`;minWidthToExpandModal=1500;imageSizesToImgurSuffixArray=[{width:320,suffix:`m`},{width:640,suffix:`l`},{width:1024,suffix:`h`}];lastCalculatedSuffix=void 0;lastCalculatedWidth=0;afterViewInitFinished=!1;errorOccurred=!1;onError(){this.errorOccurred=!0}onResize(){this.afterViewInitFinished&&this.calculateSrcAttribute()}onClick(){this.errorOccurred||!this.preventDialogOpening&&window.innerWidth>this.minWidthToExpandModal&&this.dialogImageService.emitImageClick(`${this.imgurUrlPattern}${this.imgurId}.jpg`)}get cursor(){return!this.afterViewInitFinished||this.preventDialogOpening?null:window.innerWidth>this.minWidthToExpandModal?`pointer`:null}calculateSrcAttribute(){let i=this.aspectRatio?this.getAspectRatioNumber():1.7777777777777777,t=this.element.nativeElement.width,e=i>1?t:t/i;if(e<this.lastCalculatedWidth)return;let o=this.chooseSuffix(e);if(this.lastCalculatedSuffix!=null&&o==this.lastCalculatedSuffix)return;this.lastCalculatedSuffix=o,this.lastCalculatedWidth=e;let a=`${this.imgurUrlPattern}${this.imgurId}${o}.jpg`;this.renderer.setAttribute(this.element.nativeElement,`src`,a)}chooseSuffix(i){for(let t of this.imageSizesToImgurSuffixArray)if(!(i>t.width))return t.suffix;return``}getAspectRatioNumber(){return Function(`"use strict"; return `+this.aspectRatio)()}static ɵfac=function(t){return new(t||n)(Zi(Mr),Zi(Ja),Zi(gt))};static ɵdir=TT({type:n,selectors:[[``,`imgurId`,``]],hostVars:2,hostBindings:function(t,e){t&1&&Tg(`error`,function(){return e.onError()})(`resize`,function(){return e.onResize()},HE)(`click`,function(){return e.onClick()}),t&2&&xg(`cursor`,e.cursor)},inputs:{imgurId:`imgurId`,aspectRatio:`aspectRatio`,preventDialogOpening:`preventDialogOpening`}})};export{xe as t};