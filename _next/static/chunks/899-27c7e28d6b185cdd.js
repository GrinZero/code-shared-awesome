(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{25182:function(e,t,o){"use strict";o.d(t,{Z:function(){return T}});var n=o(52983),i=o(24788),r=o(49639),l=(0,n.createContext)({}),s=o(33955),a=function(){return a=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},u=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o},p={shape:"circle",autoFixFontSize:!0,triggerType:"button"},c=(0,n.forwardRef)((function(e,t){var o,c=(0,n.useContext)(r.E_),f=c.getPrefixCls,d=c.componentConfig,g=c.rtl,h=f("avatar"),m=(0,n.useContext)(l),v=a(a(a(a({},p),null===d||void 0===d?void 0:d.Avatar),m),e),y=v.className,b=v.shape,P=v.size,C=v.children,O=v.autoFixFontSize,w=v.triggerIcon,E=v.triggerIconStyle,x=v.triggerType,T=v.onClick,M=u(v,["className","shape","size","children","autoFixFontSize","triggerIcon","triggerIconStyle","triggerType","onClick"]),S=a(a({},m.style),e.style),N=(0,n.useRef)(null),k=(0,n.useRef)(null);(0,n.useEffect)((function(){O&&function(){if(N.current){var t=N.current.clientWidth,o=e.size||k.current.offsetWidth,n=o/(t+8);o&&n<1&&(N.current.style.transform="scale("+n+") translateX(-50%)")}}()}),[P,C]),(0,n.useImperativeHandle)(t,(function(){return k.current}));var D=(0,i.Z)(h,h+"-"+b,((o={})[h+"-with-trigger-icon"]=w,o[h+"-rtl"]=g,o),y),V=C&&n.isValidElement(C)&&("img"===C.type||"picture"===C.type),H=E||{};return"button"===x&&(!E||E&&!E.color)&&S&&S.backgroundColor&&(H.color=S.backgroundColor),n.createElement("div",a({ref:k,onClick:T},M,{style:a({width:P,height:P,fontSize:(0,s.hj)(P)?P/2:""},S),className:D}),V?n.createElement("span",{className:h+"-image"},C):null,!V&&n.createElement("span",{ref:N,className:h+"-text"},C),w&&n.createElement("div",{className:h+"-trigger-icon-"+x,style:H},w))}));c.displayName="Avatar";var f=c,d=o(20404),g=o(67797),h=function(){return h=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},h.apply(this,arguments)},m=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o},v={position:"top",trigger:"hover",unmountOnExit:!0};var y=(0,n.forwardRef)((function(e,t){var o,l=(0,n.useContext)(r.E_),s=l.getPrefixCls,a=l.componentConfig,u=l.rtl,p=(0,g.Z)(e,v,null===a||void 0===a?void 0:a.Popover),c=p.style,f=p.className,y=p.children,b=p.position,P=p.getPopupContainer,C=p.trigger,O=p.defaultPopupVisible,w=p.popupVisible,E=p.triggerProps,x=p.unmountOnExit,T=p.onVisibleChange,M=p.content,S=p.title,N=m(p,["style","className","children","position","getPopupContainer","trigger","defaultPopupVisible","popupVisible","triggerProps","unmountOnExit","onVisibleChange","content","title"]),k=s("popover");return n.createElement(d.Z,h({},N,{ref:t,style:h({maxWidth:350},c),className:f,prefixCls:k,getPopupContainer:P,position:b,trigger:C,content:n.createElement("div",{className:(0,i.Z)(k+"-inner",(o={},o[k+"-inner-rtl"]=u,o))},S?n.createElement("div",{className:k+"-title"},S):null,n.createElement("div",{className:k+"-inner-content"},M)),popupHoverStay:!0,unmountOnExit:x,triggerProps:E,defaultPopupVisible:O,onVisibleChange:T||(E?E.onVisibleChange:void 0),childrenPrefix:k},"popupVisible"in p?{popupVisible:w}:{}),"string"===typeof y?n.createElement("span",null,y):y)}));y.displayName="Popover";var b=y,P=function(){return P=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},P.apply(this,arguments)},C=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o},O={shape:"circle",autoFixFontSize:!0};var w=(0,n.forwardRef)((function(e,t){var o,a=(0,n.useContext)(r.E_),u=a.getPrefixCls,p=a.componentConfig,c=a.rtl,d=(0,g.Z)(e,O,null===p||void 0===p?void 0:p["Avatar.Group"]),h=d.className,m=d.style,v=d.children,y=d.size,w=d.shape,E=d.autoFixFontSize,x=d.zIndexAscend,T=d.maxCount,M=d.maxStyle,S=d.maxPopoverTriggerProps,N=C(d,["className","style","children","size","shape","autoFixFontSize","zIndexAscend","maxCount","maxStyle","maxPopoverTriggerProps"]),k=u("avatar-group"),D=(0,i.Z)(k,((o={})[k+"-rtl"]=c,o),h),V=n.Children.toArray(v),H=V.length,z=V;if((0,s.hj)(T)&&T>=0&&H>T){var W=V.slice(T);(z=V.slice(0,T)).push(n.createElement(f,{key:"_arco_avatar_group_popup",style:M,className:k+"-max-count-avatar"},n.createElement(b,{triggerProps:S,content:n.createElement(l.Provider,{value:{size:y,shape:w,autoFixFontSize:E}},n.createElement("div",{className:k+"-popover"},W))},"+",W.length)))}return n.createElement("div",P({ref:t,style:m,className:D},N),z.map((function(e,t){var o=c?t===z.length-1:0===t,i={zIndex:x?t+1:H-t,marginLeft:y?o?0:-y/4:""};return n.createElement(l.Provider,{key:t,value:{size:y,shape:w,autoFixFontSize:E,style:i}},e)})))}));w.displayName="AvatarGroup";var E=w,x=f;x.Group=E;var T=x},20404:function(e,t,o){"use strict";var n=o(52983),i=o(24788),r=o(81449),l=o(49639),s=o(13521),a=o(67797),u=o(33955),p=function(){return p=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},p.apply(this,arguments)},c=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o},f={position:"top",trigger:"hover",escToClose:!1,unmountOnExit:!0,blurToHide:!0,popupHoverStay:!0};var d=(0,n.forwardRef)((function(e,t){var o=(0,n.useContext)(l.E_),d=o.getPrefixCls,g=o.componentConfig,h=(0,a.Z)(e,f,null===g||void 0===g?void 0:g.Tooltip),m=h.style,v=h.className,y=h.children,b=h.trigger,P=h.escToClose,C=h.defaultPopupVisible,O=h.position,w=h.unmountOnExit,E=h.popupVisible,x=h.prefixCls,T=h.blurToHide,M=h.popupHoverStay,S=h.disabled,N=h.onVisibleChange,k=h.triggerProps,D=h.childrenPrefix,V=h.getPopupContainer,H=h.content,z=h.mini,W=h.color,j=c(h,["style","className","children","trigger","escToClose","defaultPopupVisible","position","unmountOnExit","popupVisible","prefixCls","blurToHide","popupHoverStay","disabled","onVisibleChange","triggerProps","childrenPrefix","getPopupContainer","content","mini","color"]),R=(0,n.useRef)(),F=function(e,t){void 0===e&&(e=0),R.current&&R.current.updatePopupPosition(e,t)};(0,n.useImperativeHandle)(t,(function(){return{updatePopupPosition:F}}),[]);var L=x||d("tooltip"),A=p(p(p({},(0,s.Z)(j,r.C)),(0,s.m)(j)),k),_=(0,u.mf)(H)?H():H;return"popupVisible"in h?A.popupVisible=E:function(e){return null===e||void 0===e||!1===e||"string"===typeof e&&""===e.trim()}(_)&&(A.popupVisible=!1),(!1!==A.showArrow||A.arrowProps)&&(A.arrowProps=A.arrowProps||{},W&&(A.arrowProps.style=p({backgroundColor:W},A.arrowProps.style))),n.createElement(r.Z,p({style:p({maxWidth:350},m),className:v,ref:R,classNames:"zoomInFadeOut",duration:{enter:300,exit:100},popup:function(){var e;return n.createElement("div",{style:{backgroundColor:W},className:(0,i.Z)(L+"-content",L+"-content-"+O,(e={},e[L+"-mini"]=z,e)),role:"tooltip"},n.createElement("div",{className:L+"-content-inner"},_))},position:O,disabled:S,trigger:b,escToClose:P,showArrow:!0,popupAlign:{left:12,right:12,top:12,bottom:12},mouseEnterDelay:200,mouseLeaveDelay:200,unmountOnExit:w,popupHoverStay:M,blurToHide:T,childrenPrefix:D||L,getPopupContainer:V,onVisibleChange:N,defaultPopupVisible:C},A),y)}));d.displayName="Tooltip",t.Z=d},81449:function(e,t,o){"use strict";o.d(t,{C:function(){return k},Z:function(){return H}});var n=o(52983),i=o(63730),r=o(93144),l=o(20759),s=o(87209),a=o(33955),u=o(13521),p=o(84661),c=o(11113),f=function(e){var t=e.getContainer,o=e.children,r=(0,n.useRef)();return!(0,c.Z)()&&null!==r.current||s.ET||(r.current=t()),(0,n.useEffect)((function(){return function(){var e=r.current;e&&e.parentNode&&(e.parentNode.removeChild(e),r.current=null)}}),[]),r.current?i.createPortal(o,r.current):null},d=o(90903),g=o(24788),h=o(49639),m=function(){return m=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},m.apply(this,arguments)};var v=function(e,t,o){return o<e?e:o>t?t:o},y=function(e,t,o,n,i){var r=e.autoAlignPopupWidth,l=e.autoAlignPopupMinWidth,u=e.alignPoint,p=e.style;if(!o||!t||!n)return{};var c={},f=function(e,t){return t?{left:t.clientX,top:t.clientY,width:0,height:0,right:t.clientX,bottom:t.clientY}:e.getBoundingClientRect()}(o,u&&i),d=function(e,t,o){if(!o||!e||s.ET)return{left:0,width:0,height:0,top:0};var n=function(e){return document.documentElement[e]||document.body[e]},i=o===document.body?n("scrollTop"):o.scrollTop,r=o===document.body?n("scrollLeft"):o.scrollLeft,l=t.left,a=t.top,u=t.width,p=t.height;return{left:l+r-(o===document.body?0:o.getBoundingClientRect().left),top:a+i-(o===document.body?0:o.getBoundingClientRect().top),width:u,height:p}}(o,f,n),g=d.left,h=d.top,y=d.width,b=d.height,P=function(e,t){var o=0,n=0,i={};for(var r in i=m(t?{left:12,right:12,top:12,bottom:12}:{},e))if((0,a.kJ)(i[r])){var l=0;["top","bottom"].indexOf(r)>-1?(l=1,o=i[r][0]):n=i[r][1],i[r]=i[r][l]}return m(m({},i),{horizontalOffset:o,verticalOffset:n})}(e.popupAlign,e.showArrow),C=P.left||0,O=P.right||0,w=P.top||0,E=P.bottom||0;r&&void 0===(null===p||void 0===p?void 0:p.width)&&(t.style.width=o.offsetWidth+"px"),l&&(t.style.minWidth=o.offsetWidth+"px");var x=e.position,T={},M=function(o){var i,r;if(e.autoFitPosition){var l=(null===(i=document.documentElement)||void 0===i?void 0:i.clientHeight)||window.innerHeight,s=(null===(r=document.documentElement)||void 0===r?void 0:r.clientWidth)||window.innerWidth,a=!1,u={left:g-f.left,top:h-f.top},p=c.top,d=void 0===p?0:p,m=c.left,v=void 0===m?0:m;if("top"!==o&&"bottom"!==o||(u.left>v&&f.right>12?(c.left=Math.max(u.left,g-t.clientWidth),c.left=Math.max(c.left,g-t.clientWidth+24)):v-u.left+t.clientWidth>s&&s-f.left>12&&(c.left=Math.max(u.left,u.left+s-t.clientWidth),c.left=Math.max(c.left,g-t.clientWidth+24))),"left"!==o&&"right"!==o||(u.top>d&&f.bottom>12?(c.top=u.top,c.top=Math.max(c.top,h-t.clientHeight+f.height/2)):d-u.top+t.clientHeight>l&&l-f.top>12&&(c.top=Math.max(u.top,u.top+l-t.clientHeight),c.top=Math.max(c.top,h-t.clientHeight+f.height/2))),"top"===o&&u.top>d&&(f.top<l-f.bottom?(c.top=Math.min(h+b+(w||0),u.top+l-t.clientHeight),a=!0):c.top=u.top),"bottom"===o&&d-u.top+t.clientHeight>l&&(l-f.bottom<f.top?(c.top=Math.max(h-t.clientHeight-(E||0),u.top),a=!0):c.top=u.top+l-t.clientHeight),"left"===o&&u.left>v&&(f.left<s-f.right?(c.left=Math.min(y+g+O,u.left+s-t.clientWidth),a=!0):c.left=u.left),"right"===o&&v-u.left+t.clientWidth>s&&(s-f.right<f.left?(c.left=Math.max(g-t.clientWidth-C,u.left),a=!0):c.left=u.left+s-t.clientWidth),c.left<0)c.left=0;else{var P=n.scrollWidth-t.clientWidth;c.left=Math.min(P,c.left)}return a}},S=P.horizontalOffset||0,N=P.verticalOffset||0;switch(e.position){case"top":c.top=h-t.clientHeight-w,c.left=g+y/2-t.clientWidth/2,M("top")&&(x="bottom"),c.left+=S;var k=g-Number(c.left)+y/2;T.left=v(12,t.clientWidth-12,k);break;case"tl":c.top=h-t.clientHeight-w,c.left=g,M("top")&&(x="bl"),c.left+=S;var D=g-Number(c.left)+Math.min(y/2,50);T.left=v(12,t.clientWidth-12,D);break;case"tr":c.top=-t.clientHeight+h-w,c.left=g+y-t.clientWidth,M("top")&&(x="br"),c.left+=S,D=g-Number(c.left)+Math.max(y/2,y-50),T.left=v(12,t.clientWidth-12,D);break;case"bottom":c.top=b+h+E,c.left=g+y/2-t.clientWidth/2,M("bottom")&&(x="top"),c.left+=S;var V=g-Number(c.left)+y/2;T.left=v(12,t.clientWidth-12,V);break;case"bl":c.top=b+h+E,c.left=g,M("bottom")&&(x="tl"),c.left+=S,D=g-Number(c.left)+Math.min(y/2,50),T.left=v(12,t.clientWidth-12,D);break;case"br":c.top=b+h+E,c.left=g+y-t.clientWidth,M("bottom")&&(x="tr"),c.left+=S,D=g-Number(c.left)+Math.max(y/2,y-50),T.left=v(12,t.clientWidth-12,D);break;case"left":c.top=h+b/2-t.clientHeight/2,c.left=g-t.clientWidth-C,M("left")&&(x="right"),c.top+=N;var H=h-Number(c.top)+b/2;T.top=v(12,t.clientHeight-12,H);break;case"lt":c.top=h,c.left=g-t.clientWidth-C,M("left")&&(x="rt"),c.top+=N;var z=h-Number(c.top)+Math.min(b/2,50);T.top=v(12,t.clientHeight-12,z);break;case"lb":c.top=h+b-t.clientHeight,c.left=g-t.clientWidth-C,M("left")&&(x="rb"),c.top+=N,z=h-Number(c.top)+Math.max(b/2,b-50),T.top=v(12,t.clientHeight-12,z);break;case"right":c.top=h+b/2-t.clientHeight/2,c.left=y+g+O,M("right")&&(x="left"),c.top+=N;var W=h-Number(c.top)+b/2;T.top=v(12,t.clientHeight-12,W);break;case"rt":c.top=h,c.left=y+g+O,M("right")&&(x="lt"),c.top+=N,z=h-Number(c.top)+Math.min(b/2,50),T.top=v(12,t.clientHeight-12,z);break;case"rb":c.top=h+b-t.clientHeight,c.left=y+g+O,M("right")&&(x="lb"),c.top+=N,z=h-Number(c.top)+Math.max(b/2,b-50),T.top=v(12,t.clientHeight-12,z)}return{style:c,arrowStyle:T,realPosition:x}},b="undefined"===typeof window?o.g:window,P=b.requestAnimationFrame,C=b.cancelAnimationFrame;if((!P||!C)&&(["webkit","ms","moz","o"].some((function(e){return P=b[e+"RequestAnimationFrame"],C=b[e+"CancelAnimationFrame"]||b[e+"CancelRequestAnimationFrame"],P&&C})),!P||!C)){var O=0;P=function(e){var t=Date.now(),o=Math.max(0,16-(t-O));return setTimeout((function(){e(),O=t+o}),o)},C=function(e){clearTimeout(e)}}P=P.bind(b),C=C.bind(b);var w=function(e,t){var o="function"===typeof Symbol&&e[Symbol.iterator];if(!o)return e;var n,i,r=o.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=r.next()).done;)l.push(n.value)}catch(s){i={error:s}}finally{try{n&&!n.done&&(o=r.return)&&o.call(r)}finally{if(i)throw i.error}}return l},E=function(e,t,o){if(o||2===arguments.length)for(var n,i=0,r=t.length;i<r;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};function x(e){var t=null,o=function(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];t&&C(t),t=P((function(){e.apply(void 0,E([],w(o),!1)),t=null}))};return o.cancel=function(){C(t),t=null},o}var T=function(){return T=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},T.apply(this,arguments)};var M=function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},e(t,o)};return function(t,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),S=function(){return S=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},S.apply(this,arguments)};function N(e){if(!e)return{};var t=e.getBoundingClientRect();return{width:t.width,height:t.height,left:t.left,right:t.right}}var k=["onClick","onMouseEnter","onMouseLeave","onMouseMove","onFocus","onBlur","onContextMenu","onKeyDown"];var D={blurToHide:!0,clickToClose:!0,classNames:"fadeIn",trigger:"hover",position:"bottom",duration:200,unmountOnExit:!0,popupAlign:{},popupHoverStay:!0,clickOutsideToClose:!0,escToClose:!1,mouseLeaveToClose:!0,containerScrollToClose:!1,getDocument:function(){return window.document},autoFixPosition:!0,mouseEnterDelay:100,mouseLeaveDelay:100,autoFitPosition:!0},V=function(e){function t(t,o){var r=e.call(this,t,o)||this;r.delayTimer=null,r.updatePositionTimer=null,r.popupOpen=!1,r.mousedownToHide=!1,r.hasPopupMouseDown=!1,r.unmount=!1,r.isDidMount=!1,r.mouseLocation={clientX:0,clientY:0},r.observerContainer=null,r.scrollElements=null,r.resizeObserver=new l.Z((function(){r.handleUpdatePosition()})),r.childrenDom=null,r.childrenDomSize={},r.getMergedProps=function(e){var t=r.context.componentConfig,o=function(e,t,o){var n=T(T({},t),o),i=T({},e);for(var r in n)void 0===i[r]&&(i[r]=n[r]);return i}(e||r.props,D,null===t||void 0===t?void 0:t.Trigger);return o},r.getRootElement=function(){return r.childrenDom=(0,i.findDOMNode)(r),r.childrenDom},r.offScrollListeners=function(){(r.scrollElements||[]).forEach((function(e){(0,s.S1)(e,"scroll",r.handleScroll)})),r.scrollElements=null},r.offWindowResize=function(){r.handleWindowResize=!1,(0,s.S1)(window,"resize",r.handleUpdatePosition)},r.offContainerResize=function(){r.resizeObserver&&r.observerContainer&&(r.resizeObserver.unobserve(r.observerContainer),r.observerContainer=null)},r.handleScroll=function(){var e=r.getMergedProps();e.containerScrollToClose?r.setPopupVisible(!1):e.updateOnScroll&&r.handleUpdatePosition()},r.onContainersScroll=function(){var e;r.scrollElements||(r.scrollElements=(0,s.IF)(r.childrenDom,null===(e=r.popupContainer)||void 0===e?void 0:e.parentNode),r.scrollElements.forEach((function(e){(0,s.on)(e,"scroll",r.handleScroll)})))},r.onContainerResize=function(){var e,t=null===(e=r.popupContainer)||void 0===e?void 0:e.parentNode;r.resizeObserver&&r.observerContainer!==t&&(r.offContainerResize(),t&&r.resizeObserver.observe(t),r.observerContainer=t)},r.handleUpdatePosition=x((function(){r.updatePopupPosition()})),r.isClickTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("click")>-1},r.isFocusTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("focus")>-1},r.isHoverTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("hover")>-1},r.isContextMenuTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("contextMenu")>-1},r.isMouseLeaveToClose=function(){return r.isHoverTrigger()&&r.getMergedProps().mouseLeaveToClose},r.isPopupHoverHide=function(){return r.isHoverTrigger()&&!r.getMergedProps().popupHoverStay},r.isClickToHide=function(){return(r.isClickTrigger()||r.isContextMenuTrigger())&&r.getMergedProps().clickToClose},r.isBlurToHide=function(){return r.isFocusTrigger()&&r.getMergedProps().blurToHide},r.clearTimer=function(){r.updatePositionTimer&&(r.updatePositionTimer.cancel?r.updatePositionTimer.cancel():(clearTimeout(r.updatePositionTimer),r.updatePositionTimer=null)),r.delayTimer&&(clearTimeout(r.delayTimer),r.delayTimer=null),r.mouseDownTimeout&&(clearTimeout(r.mouseDownTimeout),r.mouseDownTimeout=null)},r.offClickOutside=function(){if(r.handleClickOutside){var e=r.getMergedProps().getDocument,t=(0,a.mf)(e)&&e();(0,s.S1)(t,"mousedown",r.onClickOutside),r.handleClickOutside=!1}},r.getTransformOrigin=function(e){var t,o,n=r.triggerRef;if(!n)return{};var i=r.getMergedProps(),l=i.showArrow,s=i.classNames,a=l&&(null===(t=r.arrowStyle)||void 0===t?void 0:t.top)||0,u=l&&(null===(o=r.arrowStyle)||void 0===o?void 0:o.left)||0;a=a?a+"px":"";var p={top:((u=u?u+"px":"")||"50%")+" 100% 0",tl:(u||"15px")+" 100% 0",tr:(u||n.clientWidth-15+"px")+" 100% 0",bottom:(u||"50%")+" 0 0",bl:(u||"15px")+" 0 0",br:(u||n.clientWidth-15+"px")+" 0 0",left:"100% "+(a||"50%")+" 0",lt:"100% "+(a||"15px")+" 0",lb:"100% "+(a||n.clientHeight-15+"px")+" 0",right:"0 "+(a||"50%")+" 0",rt:"0 "+(a||"15px")+" 0",rb:"0 "+(a||n.clientHeight-15+"px")+" 0"};if(s&&s.indexOf("zoom")>-1)return{transformOrigin:p[e]};if("slideDynamicOrigin"===s){var c="0% 0%";return["top","tl","tr"].indexOf(e)>-1&&(c="100% 100%"),{transformOrigin:c}}return{}},r.getTransformTranslate=function(){if("slideDynamicOrigin"!==r.getMergedProps().classNames)return"";switch(r.realPosition){case"bottom":case"bl":case"br":return"scaleY(0.9) translateY(-4px)";case"top":case"tl":case"tr":return"scaleY(0.9) translateY(4px)";default:return""}},r.getPopupStyle=function(){if(!r.unmount&&r.popupContainer){var e=r.popupContainer,t=r.triggerRef,o=r.getRootElement(),n=y(r.getMergedProps(),t,o,e,r.mouseLocation),i=n.style,l=n.arrowStyle,s=n.realPosition;return r.realPosition=s||r.getMergedProps().position,r.arrowStyle=l||{},S(S({},i),r.getTransformOrigin(r.realPosition))}},r.showPopup=function(e){void 0===e&&(e=function(){});var t=r.getPopupStyle();r.setState({popupStyle:t},e)},r.update=x((function(e){if(!r.unmount&&r.state.popupVisible){var t=r.getPopupStyle();r.setState({popupStyle:t},(function(){e&&e()}))}})),r.updatePopupPosition=function(e,t){void 0===e&&(e=0),r.state.popupVisible&&(r.updatePositionTimer=e<4?r.update(t):setTimeout((function(){var e=r.getPopupStyle();r.setState({popupStyle:e},(function(){t&&t()}))}),e))},r.setPopupVisible=function(e,t,o){void 0===t&&(t=0);var n=r.getMergedProps(),i=n.onVisibleChange,l=r.state.popupVisible;e!==l?r.delayToDo(t,(function(){i&&i(e),"popupVisible"in n?o&&o():e?r.setState({popupVisible:!0},(function(){r.showPopup(o)})):r.setState({popupVisible:!1},(function(){o&&o()}))})):o&&o()},r.delayToDo=function(e,t){e?(r.clearDelayTimer(),r.delayTimer=setTimeout((function(){t(),r.clearDelayTimer()}),e)):t()},r.onClickOutside=function(e){var t=r.getMergedProps(),o=t.onClickOutside,n=t.clickOutsideToClose,i=r.triggerRef,l=r.getRootElement();(0,s.r3)(i,e.target)||(0,s.r3)(l,e.target)||r.hasPopupMouseDown||(o&&o(),n&&(r.isBlurToHide()||r.isHoverTrigger()||r.setPopupVisible(!1)))},r.onKeyDown=function(e){var t=e.keyCode||e.which;r.triggerPropsEvent("onKeyDown",e),t===p.AV.code&&r.onPressEsc(e)},r.onPressEsc=function(e){r.getMergedProps().escToClose&&e&&e.key===p.AV.key&&r.state.popupVisible&&r.setPopupVisible(!1)},r.onMouseEnter=function(e){var t=r.getMergedProps().mouseEnterDelay;r.triggerPropsEvent("onMouseEnter",e),r.clearDelayTimer(),r.setPopupVisible(!0,t||0)},r.onMouseMove=function(e){r.triggerPropsEvent("onMouseMove",e),r.setMouseLocation(e),r.state.popupVisible&&r.update()},r.onMouseLeave=function(e){var t=r.getMergedProps().mouseLeaveDelay;r.clearDelayTimer(),r.triggerPropsEvent("onMouseLeave",e),r.isMouseLeaveToClose()&&r.state.popupVisible&&r.setPopupVisible(!1,t||0)},r.onPopupMouseEnter=function(){r.clearDelayTimer()},r.onPopupMouseLeave=function(e){r.onMouseLeave(e)},r.setMouseLocation=function(e){r.getMergedProps().alignPoint&&(r.mouseLocation={clientX:e.clientX,clientY:e.clientY})},r.onContextMenu=function(e){e.preventDefault(),r.triggerPropsEvent("onContextMenu",e),r.setMouseLocation(e),r.state.popupVisible?r.getMergedProps().alignPoint&&r.update():r.setPopupVisible(!0,0)},r.hideContextMenu=function(e){var t=r.state.popupVisible;t&&(r.mousedownToHide=!0),r.triggerPropsEvent("onClick",e),r.isClickToHide()&&t&&r.setPopupVisible(!t,0)},r.onClick=function(e){var t=r.state.popupVisible;t&&(r.mousedownToHide=!0),r.triggerPropsEvent("onClick",e),r.setMouseLocation(e),!r.isClickToHide()&&t||r.setPopupVisible(!t,0)},r.onFocus=function(e){var t=r.getMergedProps().focusDelay,o=function(){r.triggerPropsEvent("onFocus",e)};r.clearDelayTimer(),r.mousedownToHide||(r.state.popupVisible?o&&o():r.setPopupVisible(!0,t||0,o)),r.mousedownToHide=!1},r.onBlur=function(e){r.setPopupVisible(!1,200,(function(){return r.triggerPropsEvent("onBlur",e)}))},r.onResize=function(){r.getMergedProps().autoFixPosition&&r.state.popupVisible&&r.updatePopupPosition()},r.onPopupMouseDown=function(){r.hasPopupMouseDown=!0,clearTimeout(r.mouseDownTimeout),r.mouseDownTimeout=setTimeout((function(){r.hasPopupMouseDown=!1}),0)},r.getChild=function(){var e=r.props.children,t=e,o=t&&"string"!==typeof t&&t.type,i=e;if(["string","number"].indexOf(typeof e)>-1||n.Children.count(e)>1)i=n.createElement("span",null,e);else if(t&&o&&(!0===o.__BYTE_BUTTON||!0===o.__BYTE_CHECKBOX||!0===o.__BYTE_SWITCH||!0===o.__BYTE_RADIO||"button"===o)&&t.props.disabled){var l=function(e,t){var o={},n=S({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete n[t])})),{picked:o,omitted:n}}(t.props.style,["position","left","right","top","bottom","float","display","zIndex"]),s=l.picked,a=l.omitted;i=n.createElement("span",{className:t.props.className,style:S(S({display:"inline-block"},s),{cursor:"not-allowed"})},n.cloneElement(t,{style:S(S({},a),{pointerEvents:"none"}),className:void 0}))}return i||n.createElement("span",null)},r.appendToContainer=function(e){if(C(r.rafId),r.isDidMount){var t=r.context.getPopupContainer,o=(r.getMergedProps().getPopupContainer||t)(r.getRootElement());if(o)return void o.appendChild(e)}r.rafId=P((function(){r.appendToContainer(e)}))},r.getContainer=function(){var e=document.createElement("div");return e.style.width="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",r.popupContainer=e,r.appendToContainer(e),e},r.triggerPropsEvent=function(e,t){var o=r.getChild(),n=o&&o.props&&o.props[e],i=r.getMergedProps();(0,a.mf)(n)&&n(t),(0,a.mf)(i[e])&&i[e](t)},r.triggerOriginEvent=function(e){var t=r.getChild(),o=t&&t.props&&t.props[e],n=r.getMergedProps()[e];return(0,a.mf)(n)&&(0,a.mf)(o)?function(e){o(e),n(e)}:o||n};var u=r.getMergedProps(t),c="popupVisible"in u?u.popupVisible:u.defaultPopupVisible;return r.popupOpen=!!c,r.state={popupVisible:!!c,popupStyle:{}},r}return M(t,e),t.getDerivedStateFromProps=function(e,t){return"popupVisible"in e&&e.popupVisible!==t.popupVisible?{popupVisible:e.popupVisible}:null},t.prototype.componentDidMount=function(){this.componentDidUpdate(this.getMergedProps()),this.isDidMount=!0,this.unmount=!1,this.childrenDom=this.getRootElement(),this.state.popupVisible&&(this.childrenDomSize=N(this.childrenDom))},t.prototype.componentDidUpdate=function(e){var t=this.getMergedProps(e),o=this.getMergedProps();!t.popupVisible&&o.popupVisible&&this.update();var n=this.state.popupVisible;this.popupOpen=n;var i=o.getDocument;if(!n)return this.offClickOutside(),this.offContainerResize(),this.offWindowResize(),void this.offScrollListeners();var r=N(this.childrenDom);if(JSON.stringify(r)!==JSON.stringify(this.childrenDomSize)&&(this.updatePopupPosition(),this.childrenDomSize=r),this.onContainerResize(),(o.updateOnScroll||o.containerScrollToClose)&&this.onContainersScroll(),this.handleWindowResize||((0,s.on)(window,"resize",this.handleUpdatePosition),this.handleWindowResize=!0),!this.handleClickOutside){var l=(0,a.mf)(i)&&i();l&&((0,s.on)(l,"mousedown",this.onClickOutside),this.handleClickOutside=!0)}},t.prototype.componentWillUnmount=function(){this.unmount=!0,this.offClickOutside(),this.clearTimer(),this.offWindowResize(),this.offScrollListeners(),this.offContainerResize(),C(this.rafId)},t.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},t.prototype.render=function(){var e,t,o,i,l=this,s=this.getMergedProps(),a=s.children,p=s.style,c=s.className,h=s.arrowProps,m=s.disabled,v=s.popup,y=s.classNames,b=s.duration,P=s.unmountOnExit,C=s.alignPoint,O=s.autoAlignPopupWidth,w=s.position,E=s.childrenPrefix,x=s.showArrow,T=s.popupStyle,M=a||0===a,N=this.context,k=N.getPrefixCls,D=N.zIndex,V=N.rtl,H=this.state,z=H.popupVisible,W=H.popupStyle;if(!v)return null;var j={},R={onMouseDown:this.onPopupMouseDown};this.isHoverTrigger()&&!m?(j.onMouseEnter=this.onMouseEnter,j.onMouseLeave=this.onMouseLeave,C&&(j.onMouseMove=this.onMouseMove),this.isPopupHoverHide()||(R.onMouseEnter=this.onPopupMouseEnter,R.onMouseLeave=this.onPopupMouseLeave)):(j.onMouseEnter=this.triggerOriginEvent("onMouseEnter"),j.onMouseLeave=this.triggerOriginEvent("onMouseLeave")),this.isContextMenuTrigger()&&!m?(j.onContextMenu=this.onContextMenu,j.onClick=this.hideContextMenu):j.onContextMenu=this.triggerOriginEvent("onContextMenu"),this.isClickTrigger()&&!m?j.onClick=this.onClick:j.onClick=j.onClick||this.triggerOriginEvent("onClick"),this.isFocusTrigger()&&!m?(j.onFocus=this.onFocus,this.isBlurToHide()&&(j.onBlur=this.onBlur)):(j.onFocus=this.triggerOriginEvent("onFocus"),j.onBlur=this.triggerOriginEvent("onBlur")),j.onKeyDown=m?this.triggerOriginEvent("onKeyDown"):this.onKeyDown;var F=this.getChild(),L=n.Children.only(v());F.props.className&&(j.className=F.props.className),E&&z&&(j.className=j.className?j.className+" "+E+"-open":E+"-open"),this.isFocusTrigger()&&(j.tabIndex=m?-1:0);var A=k("trigger"),_=(0,g.Z)(A,E,A+"-position-"+w,((e={})[A+"-rtl"]=V,e),c),I=M&&n.createElement(d.Z,{onResize:this.onResize},n.cloneElement(F,S({},j))),Z=n.createElement(r.Z,{in:!!z,timeout:b,classNames:y,unmountOnExit:P,appear:!0,mountOnEnter:!0,onEnter:function(e){e.style.display="initial",e.style.pointerEvents="none","slideDynamicOrigin"===y&&(e.style.transform=l.getTransformTranslate())},onEntering:function(e){"slideDynamicOrigin"===y&&(e.style.transform="")},onEntered:function(e){e.style.pointerEvents="auto",l.forceUpdate()},onExit:function(e){e.style.pointerEvents="none"},onExited:function(e){e.style.display="none",P&&(l.triggerRef=null),l.setState({popupStyle:{}})}},n.createElement(d.Z,{onResize:this.onResize},n.createElement("span",S({ref:function(e){return l.triggerRef=e},"trigger-placement":this.realPosition,style:S(S(S({width:O&&void 0===(null===p||void 0===p?void 0:p.width)?null===(i=this.childrenDomSize)||void 0===i?void 0:i.width:""},W),{position:"absolute",zIndex:D||""}),p)},R,{className:_},(0,u.m)(this.props)),n.createElement(L.type,S({ref:L.ref},L.props,{style:S(S({},L.props.style),T)})),(x||h)&&n.createElement("div",{className:(0,g.Z)(A+"-arrow-container",(t={},t[E+"-arrow-container"]=E,t))},n.createElement("div",S({},h,{className:(0,g.Z)(A+"-arrow",(o={},o[E+"-arrow"]=E,o),null===h||void 0===h?void 0:h.className),style:S(S({},this.arrowStyle),null===h||void 0===h?void 0:h.style)})))))),B=z||this.triggerRef?n.createElement(f,{getContainer:this.getContainer},Z):null;return M?n.createElement(n.Fragment,null,I,B):B},t.displayName="Trigger",t.contextType=h.E_,t}(n.PureComponent),H=V},34095:function(e,t,o){"use strict";o.d(t,{dG:function(){return n}});var n=function(){}},87209:function(e,t,o){"use strict";o.d(t,{ET:function(){return i},IF:function(){return u},S1:function(){return l},on:function(){return r},r3:function(){return s}});var n=o(34095),i=function(){try{return!("undefined"!==typeof window&&void 0!==document)}catch(e){return!0}}(),r=i?n.dG:function(e,t,o,n){e&&e.addEventListener(t,o,n||!1)},l=i?n.dG:function(e,t,o,n){e&&e.removeEventListener(t,o,n||!1)},s=function(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var o=t;o;){if(o===e)return!0;o=o.parentNode}return!1},a=function(e){return e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth},u=function(e,t){void 0===t&&(t=document.documentElement);for(var o=[],n=e;n&&n!==t;)a(n)&&o.push(n),n=n.parentElement;return o}},11113:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var n=o(52983);function i(){var e=(0,n.useRef)(!0);return(0,n.useEffect)((function(){e.current=!1}),[]),e.current}},84661:function(e,t,o){"use strict";o.d(t,{AV:function(){return i},Ce:function(){return n},K5:function(){return l},Xd:function(){return s},a2:function(){return r},ol:function(){return a}});var n={key:"Enter",code:13},i={key:"Escape",code:27},r={key:"ArrowUp",code:38},l={key:"ArrowDown",code:40},s={key:"ArrowLeft",code:37},a={key:"ArrowRight",code:39}},13521:function(e,t,o){"use strict";function n(e,t){var o={};return t.forEach((function(t){var n=t;t in e&&(o[n]=e[n])})),o}function i(e){var t={};return e&&Object.keys(e).forEach((function(o){var n=String(o);0===n.indexOf("data-")&&(t[n]=e[n]),0===n.indexOf("aria-")&&(t[n]=e[n])})),t}o.d(t,{Z:function(){return n},m:function(){return i}})},9346:function(e,t,o){"use strict";var n=o(87998),i=o(79889),r=o(52983),l=o(38710);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){(0,i.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){var o=(0,r.useContext)(l.P).prefixCls,i=void 0===o?"arco":o,s=e.spin,u=e.className,p=a(a({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(u?u+" ":"").concat(i,"-icon ").concat(i,"-icon-star")});return s&&(p.className="".concat(p.className," ").concat(i,"-icon-loading")),delete p.spin,delete p.isIcon,r.createElement("svg",(0,n.Z)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},p),r.createElement("path",{d:"M22.552 6.908a.5.5 0 0 1 .896 0l5.02 10.17a.5.5 0 0 0 .376.274l11.224 1.631a.5.5 0 0 1 .277.853l-8.122 7.916a.5.5 0 0 0-.143.443l1.917 11.178a.5.5 0 0 1-.726.527l-10.038-5.278a.5.5 0 0 0-.466 0L12.73 39.9a.5.5 0 0 1-.726-.527l1.918-11.178a.5.5 0 0 0-.144-.443l-8.122-7.916a.5.5 0 0 1 .278-.853l11.223-1.63a.5.5 0 0 0 .376-.274l5.02-10.17Z"}))}var p=r.forwardRef(u);p.defaultProps={isIcon:!0},p.displayName="IconStar",t.Z=p},31631:function(e,t,o){e.exports=o(67135)}}]);