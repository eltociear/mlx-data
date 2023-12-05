/*! For license information please see bootstrap.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
    d : (e, i) => {
      for (var n in i)
        t.o(i, n) && !t.o(e, n) &&
            Object.defineProperty(e, n, {enumerable : !0, get : i[n]})
    },
    o : (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    r : t => {
      "undefined" != typeof Symbol && Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {value : "Module"}),
          Object.defineProperty(t, "__esModule", {value : !0})
    }
  },
      e = {};
  t.r(e), t.d(e, {
    afterMain : () => w,
    afterRead : () => b,
    afterWrite : () => T,
    applyStyles : () => D,
    arrow : () => G,
    auto : () => r,
    basePlacements : () => a,
    beforeMain : () => v,
    beforeRead : () => g,
    beforeWrite : () => E,
    bottom : () => n,
    clippingParents : () => h,
    computeStyles : () => et,
    createPopper : () => St,
    createPopperBase : () => Lt,
    createPopperLite : () => Dt,
    detectOverflow : () => gt,
    end : () => c,
    eventListeners : () => nt,
    flip : () => _t,
    hide : () => yt,
    left : () => o,
    main : () => y,
    modifierPhases : () => C,
    offset : () => wt,
    placements : () => m,
    popper : () => u,
    popperGenerator : () => kt,
    popperOffsets : () => Et,
    preventOverflow : () => At,
    read : () => _,
    reference : () => f,
    right : () => s,
    start : () => l,
    top : () => i,
    variationPlacements : () => p,
    viewport : () => d,
    write : () => A
  });
  var i = "top", n = "bottom", s = "right", o = "left", r = "auto",
      a = [ i, n, s, o ], l = "start", c = "end", h = "clippingParents",
      d = "viewport", u = "popper", f = "reference",
      p = a.reduce(
          (function(t, e) {
            return t.concat([ e + "-" + l, e + "-" + c ])
          }),
          []),
      m = [].concat(a, [ r ]).reduce(
          (function(t, e) {
            return t.concat([ e, e + "-" + l, e + "-" + c ])
          }),
          []),
      g = "beforeRead", _ = "read", b = "afterRead", v = "beforeMain",
      y = "main", w = "afterMain", E = "beforeWrite", A = "write",
      T = "afterWrite", C = [ g, _, b, v, y, w, E, A, T ];
  function O(t) {
    return t ? (t.nodeName || "").toLowerCase() : null
  }
  function x(t) {
    if (null == t)
      return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window
    }
    return t
  }
  function k(t) {
    return t instanceof x(t).Element || t instanceof Element
  }
  function L(t) {
    return t instanceof x(t).HTMLElement || t instanceof HTMLElement
  }
  function S(t) {
    return "undefined" != typeof ShadowRoot &&
        (t instanceof x(t).ShadowRoot || t instanceof ShadowRoot)
  }
  const D = {
    name : "applyStyles",
    enabled : !0,
    phase : "write",
    fn : function(t) {
      var e = t.state;
      Object.keys(e.elements).forEach((function(t) {
        var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
        L(s) && O(s) &&
            (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
              var e = n[t];
              !1 === e ? s.removeAttribute(t)
                       : s.setAttribute(t, !0 === e ? "" : e)
            })))
      }))
    },
    effect : function(t) {
      var e = t.state, i = {
        popper : {
          position : e.options.strategy,
          left : "0",
          top : "0",
          margin : "0"
        },
        arrow : {position : "absolute"},
        reference : {}
      };
      return Object.assign(e.elements.popper.style, i.popper),
             e.styles = i,
             e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
             function() {
               Object.keys(e.elements).forEach((function(t) {
                 var n = e.elements[t], s = e.attributes[t] || {},
                     o = Object
                             .keys(
                                 e.styles.hasOwnProperty(t) ? e.styles[t]
                                                            : i[t])
                             .reduce(
                                 (function(t, e) {
                                   return t[e] = "", t
                                 }),
                                 {});
                 L(n) && O(n) &&
                     (Object.assign(n.style, o),
                      Object.keys(s).forEach((function(t) {
                        n.removeAttribute(t)
                      })))
               }))
             }
    },
    requires : [ "computeStyles" ]
  };
  function $(t) {
    return t.split("-")[0]
  }
  var I = Math.max, N = Math.min, P = Math.round;
  function M() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands)
        ? t.brands
              .map((function(t) {
                return t.brand + "/" + t.version
              }))
              .join(" ")
        : navigator.userAgent
  }
  function j() {
    return !/^((?!chrome|android).)*safari/i.test(M())
  }
  function F(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(), s = 1, o = 1;
    e && L(t) &&
        (s = t.offsetWidth > 0 && P(n.width) / t.offsetWidth || 1,
         o = t.offsetHeight > 0 && P(n.height) / t.offsetHeight || 1);
    var r = (k(t) ? x(t) : window).visualViewport, a = !j() && i,
        l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
        c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s,
        d = n.height / o;
    return {
      width: h, height: d, top: c, right: l + h, bottom: c + d, left: l, x: l,
          y: c
    }
  }
  function H(t) {
    var e = F(t), i = t.offsetWidth, n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width),
           Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft, y: t.offsetTop, width: i, height: n
    }
  }
  function B(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e))
      return !0;
    if (i && S(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n))
          return !0;
        n = n.parentNode || n.host
      } while (n)
    }
    return !1
  }
  function W(t) {
    return x(t).getComputedStyle(t)
  }
  function z(t) {
    return [ "table", "td", "th" ].indexOf(O(t)) >= 0
  }
  function R(t) {
    return ((k(t) ? t.ownerDocument : t.document) || window.document)
        .documentElement
  }
  function q(t) {
    return "html" === O(t)
        ? t
        : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || R(t)
  }
  function V(t) {
    return L(t) && "fixed" !== W(t).position ? t.offsetParent : null
  }
  function Y(t) {
    for (var e = x(t), i = V(t); i && z(i) && "static" === W(i).position;)
      i = V(i);
    return i &&
            ("html" === O(i) || "body" === O(i) && "static" === W(i).position)
        ? e
        : i || function(t) {
            var e = /firefox/i.test(M());
            if (/Trident/i.test(M()) && L(t) && "fixed" === W(t).position)
              return null;
            var i = q(t);
            for (S(i) && (i = i.host);
                 L(i) && [ "html", "body" ].indexOf(O(i)) < 0;) {
              var n = W(i);
              if ("none" !== n.transform || "none" !== n.perspective ||
                  "paint" === n.contain ||
                  -1 !== [ "transform", "perspective" ].indexOf(n.willChange) ||
                  e && "filter" === n.willChange ||
                  e && n.filter && "none" !== n.filter)
                return i;
              i = i.parentNode
            }
            return null
          }(t) || e
  }
  function K(t) {
    return [ "top", "bottom" ].indexOf(t) >= 0 ? "x" : "y"
  }
  function Q(t, e, i) {
    return I(t, N(e, i))
  }
  function X(t) {
    return Object.assign({}, {top : 0, right : 0, bottom : 0, left : 0}, t)
  }
  function U(t, e) {
    return e.reduce(
        (function(e, i) {
          return e[i] = t, e
        }),
        {})
  }
  const G = {
    name : "arrow",
    enabled : !0,
    phase : "main",
    fn : function(t) {
      var e, r = t.state, l = t.name, c = t.options, h = r.elements.arrow,
             d = r.modifiersData.popperOffsets, u = $(r.placement), f = K(u),
             p = [ o, s ].indexOf(u) >= 0 ? "height" : "width";
      if (h && d) {
        var m =
                function(t, e) {
          return X("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:U(t,a))
        }(c.padding, r),
            g = H(h), _ = "y" === f ? i : o, b = "y" === f ? n : s,
            v = r.rects.reference[p] + r.rects.reference[f] - d[f] -
            r.rects.popper[p],
            y = d[f] - r.rects.reference[f], w = Y(h),
            E = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
            A = v / 2 - y / 2, T = m[_], C = E - g[p] - m[b],
            O = E / 2 - g[p] / 2 + A, x = Q(T, O, C), k = f;
        r.modifiersData[l] = ((e = {})[k] = x, e.centerOffset = x - O, e)
      }
    },
    effect : function(t) {
      var e = t.state, i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
          ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
          B(e.elements.popper, n) && (e.elements.arrow = n)
    },
    requires : [ "popperOffsets" ],
    requiresIfExists : [ "preventOverflow" ]
  };
  function J(t) {
    return t.split("-")[1]
  }
  var Z = {top : "auto", right : "auto", bottom : "auto", left : "auto"};
  function tt(t) {
    var e, r = t.popper, a = t.popperRect, l = t.placement, h = t.variation,
           d = t.offsets, u = t.position, f = t.gpuAcceleration, p = t.adaptive,
           m = t.roundOffsets, g = t.isFixed, _ = d.x, b = void 0 === _ ? 0 : _,
           v = d.y, y = void 0 === v ? 0 : v,
           w = "function" == typeof m ? m({x : b, y}) : {x : b, y};
    b = w.x, y = w.y;
    var E = d.hasOwnProperty("x"), A = d.hasOwnProperty("y"), T = o, C = i,
        O = window;
    if (p) {
      var k = Y(r), L = "clientHeight", S = "clientWidth";
      k === x(r) && "static" !== W(k = R(r)).position && "absolute" === u &&
          (L = "scrollHeight", S = "scrollWidth"),
          (l === i || (l === o || l === s) && h === c) &&
          (C = n,
           y -=
           (g && k === O && O.visualViewport ? O.visualViewport.height : k[L]) -
               a.height,
           y *= f ? 1 : -1),
          l !== o && (l !== i && l !== n || h !== c) ||
          (T = s,
           b -=
           (g && k === O && O.visualViewport ? O.visualViewport.width : k[S]) -
               a.width,
           b *= f ? 1 : -1)
    }
    var D, $ = Object.assign({position : u}, p && Z),
           I = !0 === m ? function(t, e) {
             var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
             return {
               x: P(i * s) / s || 0, y: P(n * s) / s || 0
             }
           }({x : b, y}, x(r)) : {x : b, y};
    return b = I.x, y = I.y,
           f ? Object.assign(
                   {},
                   $,
                   ((D = {})[C] = A ? "0" : "",
                    D[T] = E ? "0" : "",
                    D.transform = (O.devicePixelRatio || 1) <= 1
                        ? "translate(" + b + "px, " + y + "px)"
                        : "translate3d(" + b + "px, " + y + "px, 0)",
                    D))
             : Object.assign(
                   {},
                   $,
                   ((e = {})[C] = A ? y + "px" : "",
                    e[T] = E ? b + "px" : "",
                    e.transform = "",
                    e))
  }
  const et = {
    name : "computeStyles",
    enabled : !0,
    phase : "beforeWrite",
    fn : function(t) {
      var e = t.state, i = t.options, n = i.gpuAcceleration,
          s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o,
          a = i.roundOffsets, l = void 0 === a || a, c = {
            placement : $(e.placement),
            variation : J(e.placement),
            popper : e.elements.popper,
            popperRect : e.rects.popper,
            gpuAcceleration : s,
            isFixed : "fixed" === e.options.strategy
          };
      null != e.modifiersData.popperOffsets &&
          (e.styles.popper =
               Object.assign({}, e.styles.popper, tt(Object.assign({}, c, {
                               offsets : e.modifiersData.popperOffsets,
                               position : e.options.strategy,
                               adaptive : r,
                               roundOffsets : l
                             })))),
          null != e.modifiersData.arrow &&
          (e.styles.arrow =
               Object.assign({}, e.styles.arrow, tt(Object.assign({}, c, {
                               offsets : e.modifiersData.arrow,
                               position : "absolute",
                               adaptive : !1,
                               roundOffsets : l
                             })))),
          e.attributes.popper = Object.assign(
              {}, e.attributes.popper, {"data-popper-placement" : e.placement})
    },
    data : {}
  };
  var it = {passive : !0};
  const nt = {
    name : "eventListeners",
    enabled : !0,
    phase : "write",
    fn : function() {},
    effect : function(t) {
      var e = t.state, i = t.instance, n = t.options, s = n.scroll,
          o = void 0 === s || s, r = n.resize, a = void 0 === r || r,
          l = x(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach((function(t) {
        t.addEventListener("scroll", i.update, it)
      })),
             a && l.addEventListener("resize", i.update, it), function() {
               o && c.forEach((function(t) {
                 t.removeEventListener("scroll", i.update, it)
               })),
                   a && l.removeEventListener("resize", i.update, it)
             }
    },
    data : {}
  };
  var st = {left : "right", right : "left", bottom : "top", top : "bottom"};
  function ot(t) {
    return t.replace(/left|right|bottom|top/g, (function(t) {
                       return st[t]
                     }))
  }
  var rt = {start : "end", end : "start"};
  function at(t) {
    return t.replace(/start|end/g, (function(t) {
                       return rt[t]
                     }))
  }
  function lt(t) {
    var e = x(t);
    return {
      scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset
    }
  }
  function ct(t) {
    return F(R(t)).left + lt(t).scrollLeft
  }
  function ht(t) {
    var e = W(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n)
  }
  function dt(t) {
    return [ "html", "body", "#document" ].indexOf(O(t)) >= 0
        ? t.ownerDocument.body
        : L(t) && ht(t) ? t
                        : dt(q(t))
  }
  function ut(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = dt(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = x(n),
        r = s ? [ o ].concat(o.visualViewport || [], ht(n) ? n : []) : n,
        a = e.concat(r);
    return s ? a : a.concat(ut(q(r)))
  }
  function ft(t) {
    return Object.assign(
        {},
        t,
        {left : t.x, top : t.y, right : t.x + t.width, bottom : t.y + t.height})
  }
  function pt(t, e, i) {
    return e===d?ft(function(t,e){var i=x(t),n=R(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=j();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+ct(t),y:l}}(t,i)):k(e)?function(t,e){var i=F(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):ft(function(t){var e,i=R(t),n=lt(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=I(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=I(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ct(t),l=-n.scrollTop;return"rtl"===W(s||i).direction&&(a+=I(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(R(t)))
  }
  function mt(t) {
    var e, r = t.reference, a = t.element, h = t.placement, d = h ? $(h) : null,
           u = h ? J(h) : null, f = r.x + r.width / 2 - a.width / 2,
           p = r.y + r.height / 2 - a.height / 2;
    switch (d) {
      case i:
        e = {x : f, y : r.y - a.height};
        break;
      case n:
        e = {x : f, y : r.y + r.height};
        break;
      case s:
        e = {x : r.x + r.width, y : p};
        break;
      case o:
        e = {x : r.x - a.width, y : p};
        break;
      default:
        e = { x : r.x, y : r.y }
    }
    var m = d ? K(d) : null;
    if (null != m) {
      var g = "y" === m ? "height" : "width";
      switch (u) {
        case l:
          e[m] = e[m] - (r[g] / 2 - a[g] / 2);
          break;
        case c:
          e[m] = e[m] + (r[g] / 2 - a[g] / 2)
      }
    }
    return e
  }
  function gt(t, e) {
    void 0 === e && (e = {});
    var o = e, r = o.placement, l = void 0 === r ? t.placement : r,
        c = o.strategy, p = void 0 === c ? t.strategy : c, m = o.boundary,
        g = void 0 === m ? h : m, _ = o.rootBoundary, b = void 0 === _ ? d : _,
        v = o.elementContext, y = void 0 === v ? u : v, w = o.altBoundary,
        E = void 0 !== w && w, A = o.padding, T = void 0 === A ? 0 : A,
        C = X("number" != typeof T ? T : U(T, a)), x = y === u ? f : u,
        S = t.rects.popper, D = t.elements[E ? x : y],
        $ =
            function(t, e, i, n) {
          var s="clippingParents"===e?function(t){var e=ut(q(t)),i=["absolute","fixed"].indexOf(W(t).position)>=0&&L(t)?Y(t):t;return k(i)?e.filter((function(t){return k(t)&&B(t,i)&&"body"!==O(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=pt(t,i,n);return e.top=I(s.top,e.top),e.right=N(s.right,e.right),e.bottom=N(s.bottom,e.bottom),e.left=I(s.left,e.left),e}),pt(t,r,n));
          return a.width = a.right - a.left, a.height = a.bottom - a.top,
                 a.x = a.left, a.y = a.top, a
        }(k(D) ? D : D.contextElement || R(t.elements.popper), g, b, p),
        P = F(t.elements.reference),
        M = mt(
            {reference : P, element : S, strategy : "absolute", placement : l}),
        j = ft(Object.assign({}, S, M)), H = y === u ? j : P, z = {
          top : $.top - H.top + C.top,
          bottom : H.bottom - $.bottom + C.bottom,
          left : $.left - H.left + C.left,
          right : H.right - $.right + C.right
        },
        V = t.modifiersData.offset;
    if (y === u && V) {
      var K = V[l];
      Object.keys(z).forEach((function(t) {
        var e = [ s, n ].indexOf(t) >= 0 ? 1 : -1,
            o = [ i, n ].indexOf(t) >= 0 ? "y" : "x";
        z[t] += K[o] * e
      }))
    }
    return z
  }
  const _t = {
    name : "flip",
    enabled : !0,
    phase : "main",
    fn : function(t) {
      var e = t.state, c = t.options, h = t.name;
      if (!e.modifiersData[h]._skip) {
        for(var d=c.mainAxis,u=void 0===d||d,f=c.altAxis,g=void 0===f||f,_=c.fallbackPlacements,b=c.padding,v=c.boundary,y=c.rootBoundary,w=c.altBoundary,E=c.flipVariations,A=void 0===E||E,T=c.allowedAutoPlacements,C=e.options.placement,O=$(C),x=_||(O!==C&&A?function(t){if($(t)===r)return[];var e=ot(t);return[at(t),e,at(e)]}(C):[ot(C)]),k=[C].concat(x).reduce((function(t,i){return t.concat($(i)===r?function(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,l=i.flipVariations,c=i.allowedAutoPlacements,h=void 0===c?m:c,d=J(n),u=d?l?p:p.filter((function(t){return J(t)===d})):a,f=u.filter((function(t){return h.indexOf(t)>=0}));0===f.length&&(f=u);var g=f.reduce((function(e,i){return e[i]=gt(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[$(i)],e}),{});return Object.keys(g).sort((function(t,e){return g[t]-g[e]}))}(e,{placement:i,boundary:v,rootBoundary:y,padding:b,flipVariations:A,allowedAutoPlacements:T}):i)}),[]),L=e.rects.reference,S=e.rects.popper,D=new Map,I=!0,N=k[0],P=0;P<k.length;P++){
          var M = k[P], j = $(M), F = J(M) === l, H = [ i, n ].indexOf(j) >= 0,
              B = H ? "width" : "height", W = gt(e, {
                                            placement : M,
                                            boundary : v,
                                            rootBoundary : y,
                                            altBoundary : w,
                                            padding : b
                                          }),
              z = H ? F ? s : o
              : F   ? n
                    : i;
          L[B] > S[B] && (z = ot(z));
          var R = ot(z), q = [];
          if (u && q.push(W[j] <= 0),
              g && q.push(W[z] <= 0, W[R] <= 0),
              q.every((function(t) {
                return t
              }))) {
            N = M, I = !1;
            break
          }
          D.set(M, q)
        }
        if (I)
          for (var V = function(t) {
                 var e = k.find((function(e) {
                   var i = D.get(e);
                   if (i)
                     return i.slice(0, t).every((function(t) {
                       return t
                     }))
                 }));
                 if (e)
                   return N = e, "break"
               }, Y = A ? 3 : 1; Y > 0 && "break" !== V(Y); Y--)
            ;
        e.placement !== N &&
            (e.modifiersData[h]._skip = !0, e.placement = N, e.reset = !0)
      }
    },
    requiresIfExists : [ "offset" ],
    data : {_skip : !1}
  };
  function bt(t, e, i) {
    return void 0 === i && (i = {x : 0, y : 0}), {
      top: t.top - e.height - i.y, right: t.right - e.width + i.x,
          bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x
    }
  }
  function vt(t) {
    return [ i, s, n, o ].some((function(e) {
      return t[e] >= 0
    }))
  }
  const yt = {
    name : "hide",
    enabled : !0,
    phase : "main",
    requiresIfExists : [ "preventOverflow" ],
    fn : function(t) {
      var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = gt(e, {elementContext : "reference"}),
          a = gt(e, {altBoundary : !0}), l = bt(r, n), c = bt(a, s, o),
          h = vt(l), d = vt(c);
      e.modifiersData[i] = {
        referenceClippingOffsets : l,
        popperEscapeOffsets : c,
        isReferenceHidden : h,
        hasPopperEscaped : d
      },
      e.attributes.popper = Object.assign(
          {},
          e.attributes.popper,
          {"data-popper-reference-hidden" : h, "data-popper-escaped" : d})
    }
  },
        wt = {
          name : "offset",
          enabled : !0,
          phase : "main",
          requires : [ "popperOffsets" ],
          fn : function(t) {
            var e = t.state, n = t.options, r = t.name, a = n.offset,
                l = void 0 === a ? [ 0, 0 ] : a,
                c = m.reduce(
                    (function(t, n) {
                      return t[n] = function(t, e, n) {
                        var r = $(t), a = [ o, i ].indexOf(r) >= 0 ? -1 : 1,
                            l = "function" == typeof n
                            ? n(Object.assign({}, e, {placement : t}))
                            : n,
                            c = l[0], h = l[1];
                        return c = c || 0, h = (h || 0) * a,
                               [ o, s ].indexOf(r) >= 0 ? {x : h, y : c}
                                                        : {x : c, y : h}
                      }(n, e.rects, l), t
                    }),
                    {}),
                h = c[e.placement], d = h.x, u = h.y;
            null != e.modifiersData.popperOffsets &&
                (e.modifiersData.popperOffsets.x += d,
                 e.modifiersData.popperOffsets.y += u),
                e.modifiersData[r] = c
          }
        },
        Et = {
          name : "popperOffsets",
          enabled : !0,
          phase : "read",
          fn : function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = mt({
              reference : e.rects.reference,
              element : e.rects.popper,
              strategy : "absolute",
              placement : e.placement
            })
          },
          data : {}
        },
        At = {
          name : "preventOverflow",
          enabled : !0,
          phase : "main",
          fn : function(t) {
            var e = t.state, r = t.options, a = t.name, c = r.mainAxis,
                h = void 0 === c || c, d = r.altAxis, u = void 0 !== d && d,
                f = r.boundary, p = r.rootBoundary, m = r.altBoundary,
                g = r.padding, _ = r.tether, b = void 0 === _ || _,
                v = r.tetherOffset, y = void 0 === v ? 0 : v,
                w = gt(e, {
                  boundary : f,
                  rootBoundary : p,
                  padding : g,
                  altBoundary : m
                }),
                E = $(e.placement), A = J(e.placement), T = !A, C = K(E),
                O = "x" === C ? "y" : "x", x = e.modifiersData.popperOffsets,
                k = e.rects.reference, L = e.rects.popper,
                S = "function" == typeof y
                ? y(Object.assign({}, e.rects, {placement : e.placement}))
                : y,
                D = "number" == typeof S
                ? {mainAxis : S, altAxis : S}
                : Object.assign({mainAxis : 0, altAxis : 0}, S),
                P = e.modifiersData.offset ? e.modifiersData.offset[e.placement]
                                           : null,
                M = {x : 0, y : 0};
            if (x) {
              if (h) {
                var j,
                    F = "y" === C ? i : o, B = "y" === C ? n : s,
                    W = "y" === C ? "height" : "width", z = x[C], R = z + w[F],
                    q = z - w[B], V = b ? -L[W] / 2 : 0,
                    X = A === l ? k[W] : L[W], U = A === l ? -L[W] : -k[W],
                    G = e.elements.arrow,
                    Z = b && G ? H(G) : {width : 0, height : 0},
                    tt = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : {top : 0, right : 0, bottom : 0, left : 0},
                    et = tt[F], it = tt[B], nt = Q(0, k[W], Z[W]),
                    st = T ? k[W] / 2 - V - nt - et - D.mainAxis
                           : X - nt - et - D.mainAxis,
                    ot = T ? -k[W] / 2 + V + nt + it + D.mainAxis
                           : U + nt + it + D.mainAxis,
                    rt = e.elements.arrow && Y(e.elements.arrow),
                    at = rt ? "y" === C ? rt.clientTop || 0 : rt.clientLeft || 0
                            : 0,
                    lt = null != (j = null == P ? void 0 : P[C]) ? j : 0,
                    ct = z + ot - lt,
                    ht = Q(b ? N(R, z + st - lt - at) : R, z, b ? I(q, ct) : q);
                x[C] = ht, M[C] = ht - z
              }
              if (u) {
                var dt, ut = "x" === C ? i : o, ft = "x" === C ? n : s,
                        pt = x[O], mt = "y" === O ? "height" : "width",
                        _t = pt + w[ut], bt = pt - w[ft],
                        vt = -1 !== [ i, o ].indexOf(E),
                        yt = null != (dt = null == P ? void 0 : P[O]) ? dt : 0,
                        wt = vt ? _t : pt - k[mt] - L[mt] - yt + D.altAxis,
                        Et = vt ? pt + k[mt] + L[mt] - yt - D.altAxis : bt,
                        At = b && vt ? function(t, e, i) {
                          var n = Q(t, e, i);
                          return n > i ? i : n
                        }(wt, pt, Et) : Q(b ? wt : _t, pt, b ? Et : bt);
                x[O] = At, M[O] = At - pt
              }
              e.modifiersData[a] = M
            }
          },
          requiresIfExists : [ "offset" ]
        };
  function Tt(t, e, i) {
    void 0 === i && (i = !1);
    var n, s, o = L(e), r = L(e) && function(t) {
      var e = t.getBoundingClientRect(), i = P(e.width) / t.offsetWidth || 1,
          n = P(e.height) / t.offsetHeight || 1;
      return 1 !== i || 1 !== n
    }(e), a = R(e), l = F(t, r, i), c = {scrollLeft : 0, scrollTop : 0}, h = {
      x : 0,
      y : 0
    };
    return (o || !o && !i) &&
               (("body" !== O(e) || ht(a)) &&
                    (c = (n = e) !== x(n) && L(n) ? {
                      scrollLeft : (s = n).scrollLeft,
                      scrollTop : s.scrollTop
                    }
                                                  : lt(n)),
                L(e) ? ((h = F(e, !0)).x += e.clientLeft, h.y += e.clientTop)
                     : a && (h.x = ct(a))),
    {
      x: l.left + c.scrollLeft - h.x, y: l.top + c.scrollTop - h.y,
          width: l.width, height: l.height
    }
  }
  function Ct(t) {
    var e = new Map, i = new Set, n = [];
    function s(t) {
      i.add(t.name),
          [].concat(t.requires || [], t.requiresIfExists || [])
              .forEach((function(t) {
                if (!i.has(t)) {
                  var n = e.get(t);
                  n && s(n)
                }
              })),
          n.push(t)
    }
    return t.forEach((function(t) {
      e.set(t.name, t)
    })),
           t.forEach((function(t) {
             i.has(t.name) || s(t)
           })),
           n
  }
  var Ot = {placement : "bottom", modifiers : [], strategy : "absolute"};
  function xt() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some((function(t) {
      return !(t && "function" == typeof t.getBoundingClientRect)
    }))
  }
  function kt(t) {
    void 0 === t && (t = {});
    var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i,
        s = e.defaultOptions, o = void 0 === s ? Ot : s;
    return function(t, e, i) {
      void 0 === i && (i = o);
      var s, r,
          a = {
            placement : "bottom",
            orderedModifiers : [],
            options : Object.assign({}, Ot, o),
            modifiersData : {},
            elements : {reference : t, popper : e},
            attributes : {},
            styles : {}
          },
          l = [], c = !1, h = {
            state : a,
            setOptions : function(i) {
              var s = "function" == typeof i ? i(a.options) : i;
              d(), a.options = Object.assign({}, o, a.options, s),
                   a.scrollParents = {
                     reference : k(t)       ? ut(t)
                         : t.contextElement ? ut(t.contextElement)
                                            : [],
                     popper : ut(e)
                   };
              var r, c,
                  u =
                      function(t) {
                    var e = Ct(t);
                    return C.reduce(
                        (function(t, i) {
                          return t.concat(e.filter((function(t) {
                            return t.phase === i
                          })))
                        }),
                        [])
                  }((r = [].concat(n, a.options.modifiers),
                      c = r.reduce(
                          (function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                              options : Object.assign({}, i.options, e.options),
                              data : Object.assign({}, i.data, e.data)
                            })
                                                 : e,
                                   t
                          }),
                          {}),
                      Object.keys(c).map((function(t) {
                        return c[t]
                      }))));
              return a.orderedModifiers = u.filter((function(t) {
                return t.enabled
              })),
                     a.orderedModifiers.forEach((function(t) {
                       var e = t.name, i = t.options, n = void 0 === i ? {} : i,
                           s = t.effect;
                       if ("function" == typeof s) {
                         var o = s(
                             {state : a, name : e, instance : h, options : n});
                         l.push(o || function() {})
                       }
                     })),
                     h.update()
            },
            forceUpdate : function() {
              if (!c) {
                var t = a.elements, e = t.reference, i = t.popper;
                if (xt(e, i)) {
                  a.rects = {
                    reference : Tt(e, Y(i), "fixed" === a.options.strategy),
                    popper : H(i)
                  },
                  a.reset = !1, a.placement = a.options.placement,
                  a.orderedModifiers.forEach((function(t) {
                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                  }));
                  for (var n = 0; n < a.orderedModifiers.length; n++)
                    if (!0 !== a.reset) {
                      var s = a.orderedModifiers[n], o = s.fn, r = s.options,
                          l = void 0 === r ? {} : r, d = s.name;
                      "function" == typeof o &&
                          (a = o({
                                 state : a,
                                 options : l,
                                 name : d,
                                 instance : h
                               }) ||
                               a)
                    } else
                      a.reset = !1, n = -1
                }
              }
            },
            update :
                (s =
                     function() {
                       return new Promise((function(t) {
                         h.forceUpdate(), t(a)
                       }))
                     },
                 function() {
                   return r || (r = new Promise((function(t) {
                                  Promise.resolve().then((function() {
                                    r = void 0, t(s())
                                  }))
                                }))),
                          r
                 }),
            destroy : function() {
              d(), c = !0
            }
          };
      if (!xt(t, e))
        return h;
      function d() {
        l.forEach((function(t) {
          return t()
        })),
            l = []
      }
      return h.setOptions(i).then((function(t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t)
      })),
             h
    }
  }
  var Lt = kt(),
      St = kt({defaultModifiers : [ nt, Et, et, D, wt, _t, At, G, yt ]}),
      Dt = kt({defaultModifiers : [ nt, Et, et, D ]});
  const $t = new Map, It = {
    set(t, e, i) {
      $t.has(t) || $t.set(t, new Map);
      const n = $t.get(t);
      n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                    Array.from(n.keys())[0]}.`)
    },
    get : (t, e) => $t.has(t) && $t.get(t).get(e) || null,
    remove(t, e) {
      if (!$t.has(t))
        return;
      const i = $t.get(t);
      i.delete(e), 0 === i.size && $t.delete(t)
    }
  },
        Nt = "transitionend",
        Pt = t =>
            (t && window.CSS && window.CSS.escape &&
                 (t = t.replace(
                      /#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))),
             t),
        Mt = t => { t.dispatchEvent(new Event(Nt)) },
        jt = t => !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Ft = t => jt(t)                      ? t.jquery ? t[0] : t
      : "string" == typeof t && t.length > 0 ? document.querySelector(Pt(t))
                                             : null,
        Ht =
            t => {
              if (!jt(t) || 0 === t.getClientRects().length)
                return !1;
              const e = "visible" ===
                  getComputedStyle(t).getPropertyValue("visibility"),
                    i = t.closest("details:not([open])");
              if (!i)
                return e;
              if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i)
                  return !1;
                if (null === e)
                  return !1
              }
              return e
            },
        Bt = t => !t || t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled ? t.disabled
                             : t.hasAttribute("disabled") &&
               "false" !== t.getAttribute("disabled")),
        Wt =
            t => {
              if (!document.documentElement.attachShadow)
                return null;
              if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
              }
              return t instanceof ShadowRoot ? t
                  : t.parentNode             ? Wt(t.parentNode)
                                             : null
            },
        zt = () => {}, Rt = t => { t.offsetHeight },
        qt = () =>
            window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
        Vt = [], Yt = () => "rtl" === document.documentElement.dir,
        Kt =
            t => {
              var e;
              e =
                  () => {
                    const e = qt();
                    if (e) {
                      const i = t.NAME, n = e.fn[i];
                      e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t,
                      e.fn[i].noConflict = () =>
                          (e.fn[i] = n, t.jQueryInterface)
                    }
                  },
              "loading" === document.readyState
                  ? (Vt.length ||
                         document.addEventListener("DOMContentLoaded", (() => {
                                                     for (const t of Vt)
                                                       t()
                                                   })),
                     Vt.push(e))
                  : e()
            },
        Qt = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
        Xt = (t, e, i = !0) => {
          if (!i)
            return void Qt(t);
          const n =
              (t => {
                if (!t)
                  return 0;
                let {transitionDuration : e, transitionDelay : i} =
                    window.getComputedStyle(t);
                const n = Number.parseFloat(e), s = Number.parseFloat(i);
                return n || s
                    ? (e = e.split(",")[0],
                       i = i.split(",")[0],
                       1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                    : 0
              })(e) +
              5;
          let s = !1;
          const o = ({
            target : i
          }) => { i === e && (s = !0, e.removeEventListener(Nt, o), Qt(t)) };
          e.addEventListener(Nt, o), setTimeout((() => {s || Mt(e)}), n)
        }, Ut = (t, e, i, n) => {
          const s = t.length;
          let o = t.indexOf(e);
          return -1 === o ? !i && n ? t[s - 1] : t[0]
                          : (o += i ? 1 : -1,
                             n && (o = (o + s) % s),
                             t[Math.max(0, Math.min(o, s - 1))])
        }, Gt = /[^.]*(?=\..*)\.|.*/, Jt = /\..*/, Zt = /::\d+$/, te = {};
  let ee = 1;
  const ie = {mouseenter : "mouseover", mouseleave : "mouseout"},
        ne = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll"
        ]);
  function se(t, e) {
    return e && `${e}::${ee++}` || t.uidEvent || ee++
  }
  function oe(t) {
    const e = se(t);
    return t.uidEvent = e, te[e] = te[e] || {}, te[e]
  }
  function re(t, e, i = null) {
    return Object.values(t).find(
        (t => t.callable === e && t.delegationSelector === i))
  }
  function ae(t, e, i) {
    const n = "string" == typeof e, s = n ? i : e || i;
    let o = de(t);
    return ne.has(o) || (o = t), [ n, s, o ]
  }
  function le(t, e, i, n, s) {
    if ("string" != typeof e || !t)
      return;
    let [o, r, a] = ae(e, i, n);
    if (e in ie) {
      const t = t => function(e) {
        if (!e.relatedTarget ||
            e.relatedTarget !== e.delegateTarget &&
                !e.delegateTarget.contains(e.relatedTarget))
          return t.call(this, e)
      };
      r = t(r)
    }
    const l = oe(t), c = l[a] || (l[a] = {}), h = re(c, r, o ? i : null);
    if (h)
      return void (h.oneOff = h.oneOff && s);
    const d = se(r, e.replace(Gt, "")), u = o ? function(t, e, i) {
      return function n(s) {
        const o = t.querySelectorAll(e);
        for (let {target : r} = s; r && r !== this; r = r.parentNode)
          for (const a of o)
            if (a === r)
              return fe(s, {delegateTarget : r}),
                     n.oneOff && ue.off(t, s.type, e, i), i.apply(r, [ s ])
      }
    }(t, i, r) : function(t, e) {
      return function i(n) {
        return fe(n, {delegateTarget : t}), i.oneOff && ue.off(t, n.type, e),
               e.apply(t, [ n ])
      }
    }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s,
    u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
  }
  function ce(t, e, i, n, s) {
    const o = re(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
  }
  function he(t, e, i, n) {
    const s = e[i] || {};
    for (const [o, r] of Object.entries(s))
      o.includes(n) && ce(t, e, i, r.callable, r.delegationSelector)
  }
  function de(t) {
    return t = t.replace(Jt, ""), ie[t] || t
  }
  const ue = {
    on(t, e, i, n) {
      le(t, e, i, n, !1)
    },
    one(t, e, i, n) {
      le(t, e, i, n, !0)
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t)
        return;
      const [s, o, r] = ae(e, i, n), a = r !== e, l = oe(t), c = l[r] || {},
                   h = e.startsWith(".");
      if (void 0 === o) {
        if (h)
          for (const i of Object.keys(l))
            he(t, l, i, e.slice(1));
        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(Zt, "");
          a && !e.includes(s) || ce(t, l, r, n.callable, n.delegationSelector)
        }
      } else {
        if (!Object.keys(c).length)
          return;
        ce(t, l, r, o, s ? i : null)
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t)
        return null;
      const n = qt();
      let s = null, o = !0, r = !0, a = !1;
      e !== de(e) && n &&
          (s = n.Event(e, i),
           n(t).trigger(s),
           o = !s.isPropagationStopped(),
           r = !s.isImmediatePropagationStopped(),
           a = s.isDefaultPrevented());
      const l = fe(new Event(e, {bubbles : o, cancelable : !0}), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l),
             l.defaultPrevented && s && s.preventDefault(), l
    }
  };
  function fe(t, e = {}) {
    for (const [i, n] of Object.entries(e))
      try {
        t[i] = n
      } catch (e) {
        Object.defineProperty(t, i, {configurable : !0, get : () => n})
      }
    return t
  }
  function pe(t) {
    if ("true" === t)
      return !0;
    if ("false" === t)
      return !1;
    if (t === Number(t).toString())
      return Number(t);
    if ("" === t || "null" === t)
      return null;
    if ("string" != typeof t)
      return t;
    try {
      return JSON.parse(decodeURIComponent(t))
    } catch (e) {
      return t
    }
  }
  function me(t) {
    return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
  }
  const ge = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${me(e)}`, i)
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${me(e)}`)
    },
    getDataAttributes(t) {
      if (!t)
        return {};
      const e = {},
            i = Object.keys(t.dataset).filter(
                (t => t.startsWith("bs") && !t.startsWith("bsConfig")));
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
        e[i] = pe(t.dataset[n])
      }
      return e
    },
    getDataAttribute : (t, e) => pe(t.getAttribute(`data-bs-${me(e)}`))
  };
  class _e {
    static get Default() {
      return {}
    }
    static get DefaultType() {
      return {}
    }
    static get NAME() {
      throw new Error(
          'You have to implement the static method "NAME", for each component!')
    }
    _getConfig(t) {
      return t = this._mergeConfigObj(t), t = this._configAfterMerge(t),
             this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
      return t
    }
    _mergeConfigObj(t, e) {
      const i = jt(e) ? ge.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default, ..."object" == typeof i ? i : {},
            ...jt(e) ? ge.getDataAttributes(e) : {},
            ..."object" == typeof t ? t : {}
      }
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [n, s] of Object.entries(e)) {
        const e = t[n],
              o = jt(e)       ? "element"
            : null == (i = e) ? `${i}`
                              : Object.prototype.toString.call(i)
                                    .match(/\s([a-z]+)/i)[1]
                                    .toLowerCase();
        if (!new RegExp(s).test(o))
          throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${
                  n}" provided type "${o}" but expected type "${s}".`)
      }
      var i
    }
  }
  class be extends _e {
    constructor(t, e) {
      super(),
          (t = Ft(t)) &&
          (this._element = t,
           this._config = this._getConfig(e),
           It.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
      It.remove(this._element, this.constructor.DATA_KEY),
          ue.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this))
        this[t] = null
    }
    _queueCallback(t, e, i = !0) {
      Xt(t, e, i)
    }
    _getConfig(t) {
      return t = this._mergeConfigObj(t, this._element),
             t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    static getInstance(t) {
      return It.get(Ft(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
    }
    static get VERSION() {
      return "5.3.2"
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`
    }
  }
  const ve =
            t => {
              let e = t.getAttribute("data-bs-target");
              if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith("."))
                  return null;
                i.includes("#") && !i.startsWith("#") &&
                    (i = `#${i.split("#")[1]}`),
                    e = i && "#" !== i ? Pt(i.trim()) : null
              }
              return e
            },
        ye = {
          find : (t, e = document.documentElement) => [].concat(
              ...Element.prototype.querySelectorAll.call(e, t)),
          findOne : (t, e = document.documentElement) =>
              Element.prototype.querySelector.call(e, t),
          children :
              (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
          parents(t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for (; n;)
              i.push(n), n = n.parentNode.closest(e);
            return i
          },
          prev(t, e) {
            let i = t.previousElementSibling;
            for (; i;) {
              if (i.matches(e))
                return [ i ];
              i = i.previousElementSibling
            }
            return []
          },
          next(t, e) {
            let i = t.nextElementSibling;
            for (; i;) {
              if (i.matches(e))
                return [ i ];
              i = i.nextElementSibling
            }
            return []
          },
          focusableChildren(t) {
            const e =
                [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]'
                ].map((t => `${t}:not([tabindex^="-"])`))
                    .join(",");
            return this.find(e, t).filter((t => !Bt(t) && Ht(t)))
          },
          getSelectorFromElement(t) {
            const e = ve(t);
            return e && ye.findOne(e) ? e : null
          },
          getElementFromSelector(t) {
            const e = ve(t);
            return e ? ye.findOne(e) : null
          },
          getMultipleElementsFromSelector(t) {
            const e = ve(t);
            return e ? ye.find(e) : []
          }
        },
        we = (t, e = "hide") => {
          const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
          ue.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
                  if ([ "A", "AREA" ].includes(this.tagName) &&
                          i.preventDefault(),
                      Bt(this))
                    return;
                  const s =
                      ye.getElementFromSelector(this) || this.closest(`.${n}`);
                  t.getOrCreateInstance(s)[e]()
                }))
        }, Ee = ".bs.alert", Ae = `close${Ee}`, Te = `closed${Ee}`;
  class Ce extends be {
    static get NAME() {
      return "alert"
    }
    close() {
      if (ue.trigger(this._element, Ae).defaultPrevented)
        return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback((() => this._destroyElement()), this._element, t)
    }
    _destroyElement() {
      this._element.remove(), ue.trigger(this._element, Te), this.dispose()
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = Ce.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }
  we(Ce, "close"), Kt(Ce);
  const Oe = '[data-bs-toggle="button"]';
  class xe extends be {
    static get NAME() {
      return "button"
    }
    toggle() {
      this._element.setAttribute(
          "aria-pressed", this._element.classList.toggle("active"))
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = xe.getOrCreateInstance(this);
        "toggle" === t && e[t]()
      }))
    }
  }
  ue.on(document, "click.bs.button.data-api", Oe, (t => {
          t.preventDefault();
          const e = t.target.closest(Oe);
          xe.getOrCreateInstance(e).toggle()
        })),
      Kt(xe);
  const ke = ".bs.swipe", Le = `touchstart${ke}`, Se = `touchmove${ke}`,
        De = `touchend${ke}`, $e = `pointerdown${ke}`, Ie = `pointerup${ke}`,
        Ne = {endCallback : null, leftCallback : null, rightCallback : null},
        Pe = {
          endCallback : "(function|null)",
          leftCallback : "(function|null)",
          rightCallback : "(function|null)"
        };
  class Me extends _e {
    constructor(t, e) {
      super(), this._element = t,
               t && Me.isSupported() &&
          (this._config = this._getConfig(e),
           this._deltaX = 0,
           this._supportPointerEvents = Boolean(window.PointerEvent),
           this._initEvents())
    }
    static get Default() {
      return Ne
    }
    static get DefaultType() {
      return Pe
    }
    static get NAME() {
      return "swipe"
    }
    dispose() {
      ue.off(this._element, ke)
    }
    _start(t) {
      this._supportPointerEvents
          ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
          : this._deltaX = t.touches[0].clientX
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
          (this._deltaX = t.clientX - this._deltaX),
          this._handleSwipe(), Qt(this._config.endCallback)
    }
    _move(t) {
      this._deltaX = t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40)
        return;
      const e = t / this._deltaX;
      this._deltaX = 0,
      e && Qt(e > 0 ? this._config.rightCallback : this._config.leftCallback)
    }
    _initEvents() {
      this._supportPointerEvents
          ? (ue.on(this._element, $e, (t => this._start(t))),
             ue.on(this._element, Ie, (t => this._end(t))),
             this._element.classList.add("pointer-event"))
          : (ue.on(this._element, Le, (t => this._start(t))),
             ue.on(this._element, Se, (t => this._move(t))),
             ue.on(this._element, De, (t => this._end(t))))
    }
    _eventIsPointerPenTouch(t) {
      return this._supportPointerEvents &&
          ("pen" === t.pointerType || "touch" === t.pointerType)
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
    }
  }
  const je = ".bs.carousel", Fe = ".data-api", He = "next", Be = "prev",
        We = "left", ze = "right", Re = `slide${je}`, qe = `slid${je}`,
        Ve = `keydown${je}`, Ye = `mouseenter${je}`, Ke = `mouseleave${je}`,
        Qe = `dragstart${je}`, Xe = `load${je}${Fe}`, Ue = `click${je}${Fe}`,
        Ge = "carousel", Je = "active", Ze = ".active", ti = ".carousel-item",
        ei = Ze + ti, ii = {ArrowLeft : ze, ArrowRight : We}, ni = {
          interval : 5e3,
          keyboard : !0,
          pause : "hover",
          ride : !1,
          touch : !0,
          wrap : !0
        },
        si = {
          interval : "(number|boolean)",
          keyboard : "boolean",
          pause : "(string|boolean)",
          ride : "(boolean|string)",
          touch : "boolean",
          wrap : "boolean"
        };
  class oi extends be {
    constructor(t, e) {
      super(t, e), this._interval = null, this._activeElement = null,
                   this._isSliding = !1, this.touchTimeout = null,
                   this._swipeHelper = null,
                   this._indicatorsElement =
                       ye.findOne(".carousel-indicators", this._element),
                   this._addEventListeners(),
                   this._config.ride === Ge && this.cycle()
    }
    static get Default() {
      return ni
    }
    static get DefaultType() {
      return si
    }
    static get NAME() {
      return "carousel"
    }
    next() {
      this._slide(He)
    }
    nextWhenVisible() {
      !document.hidden && Ht(this._element) && this.next()
    }
    prev() {
      this._slide(Be)
    }
    pause() {
      this._isSliding && Mt(this._element), this._clearInterval()
    }
    cycle() {
      this._clearInterval(), this._updateInterval(),
          this._interval =
              setInterval((() => this.nextWhenVisible()), this._config.interval)
    }
    _maybeEnableCycle() {
      this._config.ride &&
          (this._isSliding ? ue.one(this._element, qe, (() => this.cycle()))
                           : this.cycle())
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0)
        return;
      if (this._isSliding)
        return void ue.one(this._element, qe, (() => this.to(t)));
      const i = this._getItemIndex(this._getActive());
      if (i === t)
        return;
      const n = t > i ? He : Be;
      this._slide(n, e[t])
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }
    _configAfterMerge(t) {
      return t.defaultInterval = t.interval, t
    }
    _addEventListeners() {
      this._config.keyboard &&
          ue.on(this._element, Ve, (t => this._keydown(t))),
          "hover" === this._config.pause &&
          (ue.on(this._element, Ye, (() => this.pause())),
           ue.on(this._element, Ke, (() => this._maybeEnableCycle()))),
          this._config.touch && Me.isSupported() &&
          this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
      for (const t of ye.find(".carousel-item img", this._element))
        ue.on(t, Qe, (t => t.preventDefault()));
      const t = {
        leftCallback : () => this._slide(this._directionToOrder(We)),
        rightCallback : () => this._slide(this._directionToOrder(ze)),
        endCallback : () => {
          "hover" === this._config.pause &&
              (this.pause(),
               this.touchTimeout && clearTimeout(this.touchTimeout),
               this.touchTimeout = setTimeout(
                   (() => this._maybeEnableCycle()),
                   500 + this._config.interval))
        }
      };
      this._swipeHelper = new Me(this._element, t)
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName))
        return;
      const e = ii[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t)
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement)
        return;
      const e = ye.findOne(Ze, this._indicatorsElement);
      e.classList.remove(Je), e.removeAttribute("aria-current");
      const i =
          ye.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(Je), i.setAttribute("aria-current", "true"))
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t)
        return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval
    }
    _slide(t, e = null) {
      if (this._isSliding)
        return;
      const i = this._getActive(), n = t === He,
            s = e || Ut(this._getItems(), i, n, this._config.wrap);
      if (s === i)
        return;
      const o = this._getItemIndex(s), r = e => ue.trigger(this._element, e, {
        relatedTarget : s,
        direction : this._orderToDirection(t),
        from : this._getItemIndex(i),
        to : o
      });
      if (r(Re).defaultPrevented)
        return;
      if (!i || !s)
        return;
      const a = Boolean(this._interval);
      this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o),
                    this._activeElement = s;
      const l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c), Rt(s), i.classList.add(l), s.classList.add(l),
          this._queueCallback(
              (() => {
                s.classList.remove(l, c),
                s.classList.add(Je),
                i.classList.remove(Je, c, l),
                this._isSliding = !1,
                r(qe)
              }),
              i,
              this._isAnimated()),
          a && this.cycle()
    }
    _isAnimated() {
      return this._element.classList.contains("slide")
    }
    _getActive() {
      return ye.findOne(ei, this._element)
    }
    _getItems() {
      return ye.find(ti, this._element)
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null)
    }
    _directionToOrder(t) {
      return Yt() ? t === We ? Be : He : t === We ? He : Be
    }
    _orderToDirection(t) {
      return Yt() ? t === Be ? We : ze : t === Be ? ze : We
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = oi.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]()
          }
        } else
          e.to(t)
      }))
    }
  }
  ue.on(document, Ue, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
          const e = ye.getElementFromSelector(this);
          if (!e || !e.classList.contains(Ge))
            return;
          t.preventDefault();
          const i = oi.getOrCreateInstance(e),
                n = this.getAttribute("data-bs-slide-to");
          return n ? (i.to(n), void i._maybeEnableCycle())
              : "next" === ge.getDataAttribute(this, "slide")
              ? (i.next(), void i._maybeEnableCycle())
              : (i.prev(), void i._maybeEnableCycle())
        })),
      ue.on(window, Xe, (() => {
              const t = ye.find('[data-bs-ride="carousel"]');
              for (const e of t)
                oi.getOrCreateInstance(e)
            })),
      Kt(oi);
  const ri = ".bs.collapse", ai = `show${ri}`, li = `shown${ri}`,
        ci = `hide${ri}`, hi = `hidden${ri}`, di = `click${ri}.data-api`,
        ui = "show", fi = "collapse", pi = "collapsing",
        mi = `:scope .${fi} .${fi}`, gi = '[data-bs-toggle="collapse"]',
        _i = {parent : null, toggle : !0},
        bi = {parent : "(null|element)", toggle : "boolean"};
  class vi extends be {
    constructor(t, e) {
      super(t, e), this._isTransitioning = !1, this._triggerArray = [];
      const i = ye.find(gi);
      for (const t of i) {
        const e = ye.getSelectorFromElement(t),
              i = ye.find(e).filter((t => t === this._element));
        null !== e && i.length && this._triggerArray.push(t)
      }
      this._initializeChildren(),
          this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle()
    }
    static get Default() {
      return _i
    }
    static get DefaultType() {
      return bi
    }
    static get NAME() {
      return "collapse"
    }
    toggle() {
      this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let t = [];
      if (this._config.parent &&
              (t = this._getFirstLevelChildren(
                           ".collapse.show, .collapse.collapsing")
                       .filter((t => t !== this._element))
                       .map((t => vi.getOrCreateInstance(t, {toggle : !1})))),
          t.length && t[0]._isTransitioning)
        return;
      if (ue.trigger(this._element, ai).defaultPrevented)
        return;
      for (const e of t)
        e.hide();
      const e = this._getDimension();
      this._element.classList.remove(fi), this._element.classList.add(pi),
          this._element.style[e] = 0,
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          this._isTransitioning = !0;
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
          (() => {
            this._isTransitioning = !1,
            this._element.classList.remove(pi),
            this._element.classList.add(fi, ui),
            this._element.style[e] = "",
            ue.trigger(this._element, li)
          }),
          this._element,
          !0),
          this._element.style[e] = `${this._element[i]}px`
    }
    hide() {
      if (this._isTransitioning || !this._isShown())
        return;
      if (ue.trigger(this._element, ci).defaultPrevented)
        return;
      const t = this._getDimension();
      this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
      Rt(this._element), this._element.classList.add(pi),
      this._element.classList.remove(fi, ui);
      for (const t of this._triggerArray) {
        const e = ye.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([ t ], !1)
      }
      this._isTransitioning = !0, this._element.style[t] = "",
      this._queueCallback(
          (() => {
            this._isTransitioning = !1,
            this._element.classList.remove(pi),
            this._element.classList.add(fi),
            ue.trigger(this._element, hi)
          }),
          this._element,
          !0)
    }
    _isShown(t = this._element) {
      return t.classList.contains(ui)
    }
    _configAfterMerge(t) {
      return t.toggle = Boolean(t.toggle), t.parent = Ft(t.parent), t
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width"
                                                                     : "height"
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const t = this._getFirstLevelChildren(gi);
      for (const e of t) {
        const t = ye.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([ e ], this._isShown(t))
      }
    }
    _getFirstLevelChildren(t) {
      const e = ye.find(mi, this._config.parent);
      return ye.find(t, this._config.parent).filter((t => !e.includes(t)))
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
              i.setAttribute("aria-expanded", e)
    }
    static jQueryInterface(t) {
      const e = {};
      return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
             this.each((function() {
               const i = vi.getOrCreateInstance(this, e);
               if ("string" == typeof t) {
                 if (void 0 === i[t])
                   throw new TypeError(`No method named "${t}"`);
                 i[t]()
               }
             }))
    }
  }
  ue.on(document, di, gi, (function(t) {
          ("A" === t.target.tagName ||
           t.delegateTarget && "A" === t.delegateTarget.tagName) &&
              t.preventDefault();
          for (const t of ye.getMultipleElementsFromSelector(this))
            vi.getOrCreateInstance(t, {toggle : !1}).toggle()
        })),
      Kt(vi);
  const yi = "dropdown", wi = ".bs.dropdown", Ei = ".data-api", Ai = "ArrowUp",
        Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`,
        xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ei}`,
        Si = `keydown${wi}${Ei}`, Di = `keyup${wi}${Ei}`, $i = "show",
        Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu",
        Mi = Yt() ? "top-end" : "top-start",
        ji = Yt() ? "top-start" : "top-end",
        Fi = Yt() ? "bottom-end" : "bottom-start",
        Hi = Yt() ? "bottom-start" : "bottom-end",
        Bi = Yt() ? "left-start" : "right-start",
        Wi = Yt() ? "right-start" : "left-start", zi = {
          autoClose : !0,
          boundary : "clippingParents",
          display : "dynamic",
          offset : [ 0, 2 ],
          popperConfig : null,
          reference : "toggle"
        },
        Ri = {
          autoClose : "(boolean|string)",
          boundary : "(string|element)",
          display : "string",
          offset : "(array|string|function)",
          popperConfig : "(null|object|function)",
          reference : "(string|element|object)"
        };
  class qi extends be {
    constructor(t, e) {
      super(t, e), this._popper = null, this._parent = this._element.parentNode,
                   this._menu = ye.next(this._element, Pi)[0] ||
          ye.prev(this._element, Pi)[0] || ye.findOne(Pi, this._parent),
                   this._inNavbar = this._detectNavbar()
    }
    static get Default() {
      return zi
    }
    static get DefaultType() {
      return Ri
    }
    static get NAME() {
      return yi
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (Bt(this._element) || this._isShown())
        return;
      const t = {relatedTarget : this._element};
      if (!ue.trigger(this._element, xi, t).defaultPrevented) {
        if (this._createPopper(),
            "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
          for (const t of [].concat(...document.body.children))
            ue.on(t, "mouseover", zt);
        this._element.focus(), this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add($i), this._element.classList.add($i),
            ue.trigger(this._element, ki, t)
      }
    }
    hide() {
      if (Bt(this._element) || !this._isShown())
        return;
      const t = {relatedTarget : this._element};
      this._completeHide(t)
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
      this._inNavbar = this._detectNavbar(),
      this._popper && this._popper.update()
    }
    _completeHide(t) {
      if (!ue.trigger(this._element, Ci, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            ue.off(t, "mouseover", zt);
        this._popper && this._popper.destroy(), this._menu.classList.remove($i),
            this._element.classList.remove($i),
            this._element.setAttribute("aria-expanded", "false"),
            ge.removeDataAttribute(this._menu, "popper"),
            ue.trigger(this._element, Oi, t)
      }
    }
    _getConfig(t) {
      if ("object" == typeof (t = super._getConfig(t)).reference &&
          !jt(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
        throw new TypeError(`${
            yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t
    }
    _createPopper() {
      if (void 0 === e)
        throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t = this._element;
      "parent" === this._config.reference ? t = this._parent
          : jt(this._config.reference)
          ? t = Ft(this._config.reference)
          : "object" == typeof this._config.reference &&
              (t = this._config.reference);
      const i = this._getPopperConfig();
      this._popper = St(t, this._menu, i)
    }
    _isShown() {
      return this._menu.classList.contains($i)
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend"))
        return Bi;
      if (t.classList.contains("dropstart"))
        return Wi;
      if (t.classList.contains("dropup-center"))
        return "top";
      if (t.classList.contains("dropdown-center"))
        return "bottom";
      const e = "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }
    _getOffset() {
      const {offset : t} = this._config;
      return "string" == typeof t
          ? t.split(",").map((t => Number.parseInt(t, 10)))
          : "function" == typeof t ? e => t(e, this._element)
                                   : t
    }
    _getPopperConfig() {
      const t = {
        placement : this._getPlacement(),
        modifiers : [
          {
            name : "preventOverflow",
            options : {boundary : this._config.boundary}
          },
          {name : "offset", options : {offset : this._getOffset()}}
        ]
      };
      return (this._inNavbar || "static" === this._config.display) &&
                 (ge.setDataAttribute(this._menu, "popper", "static"),
                  t.modifiers = [ {name : "applyStyles", enabled : !1} ]),
      {
        ...t, ...Qt(this._config.popperConfig, [ t ])
      }
    }
    _selectMenuItem({key : t, target: e}) {
      const i =
          ye.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu)
              .filter((t => Ht(t)));
      i.length && Ut(i, e, t === Ti, !i.includes(e)).focus()
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = qi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
    static clearMenus(t) {
      if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
        return;
      const e = ye.find(Ni);
      for (const i of e) {
        const e = qi.getInstance(i);
        if (!e || !1 === e._config.autoClose)
          continue;
        const n = t.composedPath(), s = n.includes(e._menu);
        if (n.includes(e._element) || "inside" === e._config.autoClose && !s ||
            "outside" === e._config.autoClose && s)
          continue;
        if (e._menu.contains(t.target) &&
            ("keyup" === t.type && "Tab" === t.key ||
             /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        const o = {relatedTarget : e._element};
        "click" === t.type && (o.clickEvent = t), e._completeHide(o)
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key, n = [ Ai, Ti ].includes(t.key);
      if (!n && !i)
        return;
      if (e && !i)
        return;
      t.preventDefault();
      const s = this.matches(Ii)
          ? this
          : ye.prev(this, Ii)[0] || ye.next(this, Ii)[0] ||
              ye.findOne(Ii, t.delegateTarget.parentNode),
            o = qi.getOrCreateInstance(s);
      if (n)
        return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
    }
  }
  ue.on(document, Si, Ii, qi.dataApiKeydownHandler),
      ue.on(document, Si, Pi, qi.dataApiKeydownHandler),
      ue.on(document, Li, qi.clearMenus), ue.on(document, Di, qi.clearMenus),
      ue.on(document, Li, Ii, (function(t) {
              t.preventDefault(), qi.getOrCreateInstance(this).toggle()
            })),
      Kt(qi);
  const Vi = "backdrop", Yi = "show", Ki = `mousedown.bs.${Vi}`, Qi = {
    className : "modal-backdrop",
    clickCallback : null,
    isAnimated : !1,
    isVisible : !0,
    rootElement : "body"
  },
        Xi = {
          className : "string",
          clickCallback : "(function|null)",
          isAnimated : "boolean",
          isVisible : "boolean",
          rootElement : "(element|string)"
        };
  class Ui extends _e {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isAppended = !1,
               this._element = null
    }
    static get Default() {
      return Qi
    }
    static get DefaultType() {
      return Xi
    }
    static get NAME() {
      return Vi
    }
    show(t) {
      if (!this._config.isVisible)
        return void Qt(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && Rt(e), e.classList.add(Yi),
          this._emulateAnimation((() => {Qt(t)}))
    }
    hide(t) {
      this._config.isVisible
          ? (this._getElement().classList.remove(Yi),
             this._emulateAnimation((() => {this.dispose(), Qt(t)})))
          : Qt(t)
    }
    dispose() {
      this._isAppended &&
          (ue.off(this._element, Ki),
           this._element.remove(),
           this._isAppended = !1)
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = this._config.className,
        this._config.isAnimated && t.classList.add("fade"), this._element = t
      }
      return this._element
    }
    _configAfterMerge(t) {
      return t.rootElement = Ft(t.rootElement), t
    }
    _append() {
      if (this._isAppended)
        return;
      const t = this._getElement();
      this._config.rootElement.append(t),
          ue.on(t, Ki, (() => {Qt(this._config.clickCallback)})),
          this._isAppended = !0
    }
    _emulateAnimation(t) {
      Xt(t, this._getElement(), this._config.isAnimated)
    }
  }
  const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`,
        tn = "backward", en = {autofocus : !0, trapElement : null},
        nn = {autofocus : "boolean", trapElement : "element"};
  class sn extends _e {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isActive = !1,
               this._lastTabNavDirection = null
    }
    static get Default() {
      return en
    }
    static get DefaultType() {
      return nn
    }
    static get NAME() {
      return "focustrap"
    }
    activate() {
      this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
           ue.off(document, Gi),
           ue.on(document, Ji, (t => this._handleFocusin(t))),
           ue.on(document, Zi, (t => this._handleKeydown(t))),
           this._isActive = !0)
    }
    deactivate() {
      this._isActive && (this._isActive = !1, ue.off(document, Gi))
    }
    _handleFocusin(t) {
      const {trapElement : e} = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = ye.focusableChildren(e);
      0 === i.length                         ? e.focus()
          : this._lastTabNavDirection === tn ? i[i.length - 1].focus()
                                             : i[0].focus()
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
          (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
    }
  }
  const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        rn = ".sticky-top", an = "padding-right", ln = "margin-right";
  class cn {
    constructor() {
      this._element = document.body
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t)
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
          this._setElementAttributes(this._element, an, (e => e + t)),
          this._setElementAttributes(on, an, (e => e + t)),
          this._setElementAttributes(rn, ln, (e => e - t))
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, an),
          this._resetElementAttributes(on, an),
          this._resetElementAttributes(rn, ln)
    }
    isOverflowing() {
      return this.getWidth() > 0
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
          this._element.style.overflow = "hidden"
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(
          t, (t => {
            if (t !== this._element && window.innerWidth > t.clientWidth + n)
              return;
            this._saveInitialAttribute(t, e);
            const s = window.getComputedStyle(t).getPropertyValue(e);
            t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
          }))
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && ge.setDataAttribute(t, e, i)
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t => {
                                        const i = ge.getDataAttribute(t, e);
                                        null !== i
                                            ? (ge.removeDataAttribute(t, e),
                                               t.style.setProperty(e, i))
                                            : t.style.removeProperty(e)
                                      }))
    }
    _applyManipulationCallback(t, e) {
      if (jt(t))
        e(t);
      else
        for (const i of ye.find(t, this._element))
          e(i)
    }
  }
  const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`,
        fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`,
        gn = `resize${hn}`, _n = `click.dismiss${hn}`,
        bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`,
        yn = `click${hn}.data-api`, wn = "modal-open", En = "show",
        An = "modal-static", Tn = {backdrop : !0, focus : !0, keyboard : !0},
        Cn = {
          backdrop : "(boolean|string)",
          focus : "boolean",
          keyboard : "boolean"
        };
  class On extends be {
    constructor(t, e) {
      super(t, e), this._dialog = ye.findOne(".modal-dialog", this._element),
                   this._backdrop = this._initializeBackDrop(),
                   this._focustrap = this._initializeFocusTrap(),
                   this._isShown = !1, this._isTransitioning = !1,
                   this._scrollBar = new cn, this._addEventListeners()
    }
    static get Default() {
      return Tn
    }
    static get DefaultType() {
      return Cn
    }
    static get NAME() {
      return "modal"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown || this._isTransitioning ||
          ue.trigger(this._element, pn, {relatedTarget : t}).defaultPrevented ||
          (this._isShown = !0,
           this._isTransitioning = !0,
           this._scrollBar.hide(),
           document.body.classList.add(wn),
           this._adjustDialog(),
           this._backdrop.show((() => this._showElement(t))))
    }
    hide() {
      this._isShown && !this._isTransitioning &&
          (ue.trigger(this._element, dn).defaultPrevented ||
           (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(En),
            this._queueCallback(
                (() => this._hideModal()), this._element, this._isAnimated())))
    }
    dispose() {
      ue.off(window, hn), ue.off(this._dialog, hn), this._backdrop.dispose(),
          this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
      this._adjustDialog()
    }
    _initializeBackDrop() {
      return new Ui({
        isVisible : Boolean(this._config.backdrop),
        isAnimated : this._isAnimated()
      })
    }
    _initializeFocusTrap() {
      return new sn({trapElement : this._element})
    }
    _showElement(t) {
      document.body.contains(this._element) ||
          document.body.append(this._element),
          this._element.style.display = "block",
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.scrollTop = 0;
      const e = ye.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0), Rt(this._element),
          this._element.classList.add(En),
          this._queueCallback(
              (() => {
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                ue.trigger(this._element, mn, {relatedTarget : t})
              }),
              this._dialog,
              this._isAnimated())
    }
    _addEventListeners() {
      ue.on(
          this._element,
          vn,
          (t => {
               "Escape" === t.key &&
               (this._config.keyboard ? this.hide()
                                      : this._triggerBackdropTransition())})),
          ue.on(
              window,
              gn,
              (() => {
                   this._isShown && !this._isTransitioning &&
                   this._adjustDialog()})),
          ue.on(
              this._element,
              bn,
              (t => {ue.one(
                   this._element,
                   _n,
                   (e => {
                        this._element === t.target &&
                        this._element === e.target &&
                        ("static" !== this._config.backdrop
                             ? this._config.backdrop && this.hide()
                             : this._triggerBackdropTransition())}))}))
    }
    _hideModal() {
      this._element.style.display = "none",
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"), this._isTransitioning = !1,
      this._backdrop.hide((() => {
        document.body.classList.remove(wn),
        this._resetAdjustments(),
        this._scrollBar.reset(),
        ue.trigger(this._element, fn)
      }))
    }
    _isAnimated() {
      return this._element.classList.contains("fade")
    }
    _triggerBackdropTransition() {
      if (ue.trigger(this._element, un).defaultPrevented)
        return;
      const t = this._element.scrollHeight >
          document.documentElement.clientHeight,
            e = this._element.style.overflowY;
      "hidden" === e || this._element.classList.contains(An) ||
          (t || (this._element.style.overflowY = "hidden"),
           this._element.classList.add(An),
           this._queueCallback(
               (() => {
                 this._element.classList.remove(An),
                 this._queueCallback(
                     (() => {this._element.style.overflowY = e}), this._dialog)
               }),
               this._dialog),
           this._element.focus())
    }
    _adjustDialog() {
      const t = this._element.scrollHeight >
          document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(), i = e > 0;
      if (i && !t) {
        const t = Yt() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`
      }
      if (!i && t) {
        const t = Yt() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "",
      this._element.style.paddingRight = ""
    }
    static jQueryInterface(t, e) {
      return this.each((function() {
        const i = On.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t])
            throw new TypeError(`No method named "${t}"`);
          i[t](e)
        }
      }))
    }
  }
  ue.on(document, yn, '[data-bs-toggle="modal"]', (function(t) {
          const e = ye.getElementFromSelector(this);
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              ue.one(
                  e,
                  pn,
                  (t => {
                       t.defaultPrevented ||
                       ue.one(e, fn, (() => {Ht(this) && this.focus()}))}));
          const i = ye.findOne(".modal.show");
          i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this)
        })),
      we(On), Kt(On);
  const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`,
        Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show",
        Nn = `show${xn}`, Pn = `shown${xn}`, Mn = `hide${xn}`,
        jn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`,
        Bn = `click${xn}${kn}`, Wn = `keydown.dismiss${xn}`,
        zn = {backdrop : !0, keyboard : !0, scroll : !1}, Rn = {
          backdrop : "(boolean|string)",
          keyboard : "boolean",
          scroll : "boolean"
        };
  class qn extends be {
    constructor(t, e) {
      super(t, e), this._isShown = !1,
                   this._backdrop = this._initializeBackDrop(),
                   this._focustrap = this._initializeFocusTrap(),
                   this._addEventListeners()
    }
    static get Default() {
      return zn
    }
    static get DefaultType() {
      return Rn
    }
    static get NAME() {
      return "offcanvas"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown ||
          ue.trigger(this._element, Nn, {relatedTarget : t}).defaultPrevented ||
          (this._isShown = !0,
           this._backdrop.show(),
           this._config.scroll || (new cn).hide(),
           this._element.setAttribute("aria-modal", !0),
           this._element.setAttribute("role", "dialog"),
           this._element.classList.add(Dn),
           this._queueCallback(
               (() => {
                 this._config.scroll && !this._config.backdrop ||
                     this._focustrap.activate(),
                 this._element.classList.add(Sn),
                 this._element.classList.remove(Dn),
                 ue.trigger(this._element, Pn, {relatedTarget : t})
               }),
               this._element,
               !0))
    }
    hide() {
      this._isShown &&
          (ue.trigger(this._element, Mn).defaultPrevented ||
           (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add($n),
            this._backdrop.hide(),
            this._queueCallback(
                (() => {
                  this._element.classList.remove(Sn, $n),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || (new cn).reset(),
                  ue.trigger(this._element, Fn)
                }),
                this._element,
                !0)))
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new Ui({
        className : "offcanvas-backdrop",
        isVisible : t,
        isAnimated : !0,
        rootElement : this._element.parentNode,
        clickCallback : t
            ? () => {"static" !== this._config.backdrop ? this.hide() : ue.trigger(this._element, jn)}
            : null
      })
    }
    _initializeFocusTrap() {
      return new sn({trapElement : this._element})
    }
    _addEventListeners() {
      ue.on(
          this._element,
          Wn,
          (t => {
               "Escape" === t.key &&
               (this._config.keyboard ? this.hide()
                                      : ue.trigger(this._element, jn))}))
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = qn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }
  ue.on(document, Bn, '[data-bs-toggle="offcanvas"]', (function(t) {
          const e = ye.getElementFromSelector(this);
          if ([ "A", "AREA" ].includes(this.tagName) && t.preventDefault(),
              Bt(this))
            return;
          ue.one(e, Fn, (() => {Ht(this) && this.focus()}));
          const i = ye.findOne(In);
          i && i !== e && qn.getInstance(i).hide(),
              qn.getOrCreateInstance(e).toggle(this)
        })),
      ue.on(window, Ln, (() => {
              for (const t of ye.find(In))
                qn.getOrCreateInstance(t).show()
            })),
      ue.on(window, Hn, (() => {
              for (const t of ye.find(
                       "[aria-modal][class*=show][class*=offcanvas-]"))
                "fixed" !== getComputedStyle(t).position &&
                    qn.getOrCreateInstance(t).hide()
            })),
      we(qn), Kt(qn);
  const Vn = {
    "*" : [ "class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i ],
    a : [ "target", "href", "title", "rel" ],
    area : [],
    b : [],
    br : [],
    col : [],
    code : [],
    div : [],
    em : [],
    hr : [],
    h1 : [],
    h2 : [],
    h3 : [],
    h4 : [],
    h5 : [],
    h6 : [],
    i : [],
    img : [ "src", "srcset", "alt", "title", "width", "height" ],
    li : [],
    ol : [],
    p : [],
    pre : [],
    s : [],
    small : [],
    span : [],
    sub : [],
    sup : [],
    strong : [],
    u : [],
    ul : []
  },
        Yn = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href"
        ]),
        Kn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Qn =
            (t, e) => {
              const i = t.nodeName.toLowerCase();
              return e.includes(i)
                  ? !Yn.has(i) || Boolean(Kn.test(t.nodeValue))
                  : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
            },
        Xn = {
          allowList : Vn,
          content : {},
          extraClass : "",
          html : !1,
          sanitize : !0,
          sanitizeFn : null,
          template : "<div></div>"
        },
        Un = {
          allowList : "object",
          content : "object",
          extraClass : "(string|function)",
          html : "boolean",
          sanitize : "boolean",
          sanitizeFn : "(null|function)",
          template : "string"
        },
        Gn = {
          entry : "(string|element|function|null)",
          selector : "(string|element)"
        };
  class Jn extends _e {
    constructor(t) {
      super(), this._config = this._getConfig(t)
    }
    static get Default() {
      return Xn
    }
    static get DefaultType() {
      return Un
    }
    static get NAME() {
      return "TemplateFactory"
    }
    getContent() {
      return Object.values(this._config.content)
          .map((t => this._resolvePossibleFunction(t)))
          .filter(Boolean)
    }
    hasContent() {
      return this.getContent().length > 0
    }
    changeContent(t) {
      return this._checkContent(t),
             this._config.content = {...this._config.content, ...t}, this
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content)
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({selector : e, entry : i}, Gn)
    }
    _setContent(t, e, i) {
      const n = ye.findOne(i, t);
      n &&
          ((e = this._resolvePossibleFunction(e)) ? jt(e)
                   ? this._putElementInTemplate(Ft(e), n)
                   : this._config.html ? n.innerHTML = this._maybeSanitize(e)
                                       : n.textContent = e
                                                  : n.remove())
    }
    _maybeSanitize(t) {
      return this._config.sanitize ? function(t, e, i) {
        if (!t.length)
          return t;
        if (i && "function" == typeof i)
          return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
        for (const t of s) {
          const i = t.nodeName.toLowerCase();
          if (!Object.keys(e).includes(i)) {
            t.remove();
            continue
          }
          const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
          for (const e of n)
            Qn(e, s) || t.removeAttribute(e.nodeName)
        }
        return n.body.innerHTML
      }(t, this._config.allowList, this._config.sanitizeFn) : t
    }
    _resolvePossibleFunction(t) {
      return Qt(t, [ this ])
    }
    _putElementInTemplate(t, e) {
      if (this._config.html)
        return e.innerHTML = "", void e.append(t);
      e.textContent = t.textContent
    }
  }
  const Zn=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",es="show",is=".modal",ns="hide.bs.modal",ss="hover",os="focus",rs={AUTO:"auto",TOP:"top",RIGHT:Yt()?"left":"right",BOTTOM:"bottom",LEFT:Yt()?"right":"left"},as={allowList:Vn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ls={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};
  class cs extends be {
    constructor(t, i) {
      if (void 0 === e)
        throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t, i), this._isEnabled = !0, this._timeout = 0,
                   this._isHovered = null, this._activeTrigger = {},
                   this._popper = null, this._templateFactory = null,
                   this._newContent = null, this.tip = null,
                   this._setListeners(),
                   this._config.selector || this._fixTitle()
    }
    static get Default() {
      return as
    }
    static get DefaultType() {
      return ls
    }
    static get NAME() {
      return "tooltip"
    }
    enable() {
      this._isEnabled = !0
    }
    disable() {
      this._isEnabled = !1
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }
    toggle() {
      this._isEnabled &&
          (this._activeTrigger.click = !this._activeTrigger.click,
           this._isShown() ? this._leave() : this._enter())
    }
    dispose() {
      clearTimeout(this._timeout),
          ue.off(this._element.closest(is), ns, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
              "title", this._element.getAttribute("data-bs-original-title")),
          this._disposePopper(), super.dispose()
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled)
        return;
      const t = ue.trigger(this._element, this.constructor.eventName("show")),
            e = (Wt(this._element) ||
                 this._element.ownerDocument.documentElement)
                    .contains(this._element);
      if (t.defaultPrevented || !e)
        return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const {container : n} = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (n.append(i),
               ue.trigger(
                   this._element, this.constructor.eventName("inserted"))),
          this._popper = this._createPopper(i),
          i.classList.add(es),
          "ontouchstart" in document.documentElement)
        for (const t of [].concat(...document.body.children))
          ue.on(t, "mouseover", zt);
      this._queueCallback(
          (() => {
            ue.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            this._isHovered = !1
          }),
          this.tip,
          this._isAnimated())
    }
    hide() {
      if (this._isShown() &&
          !ue.trigger(this._element, this.constructor.eventName("hide"))
               .defaultPrevented) {
        if (this._getTipElement().classList.remove(es),
            "ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            ue.off(t, "mouseover", zt);
        this._activeTrigger.click = !1, this._activeTrigger[os] = !1,
        this._activeTrigger[ss] = !1, this._isHovered = null,
        this._queueCallback(
            (() => {
                 this._isWithActiveTrigger() ||
                 (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  ue.trigger(
                      this._element, this.constructor.eventName("hidden")))}),
            this.tip,
            this._isAnimated())
      }
    }
    update() {
      this._popper && this._popper.update()
    }
    _isWithContent() {
      return Boolean(this._getTitle())
    }
    _getTipElement() {
      return this.tip ||
                 (this.tip = this._createTipElement(
                      this._newContent || this._getContentForTemplate())),
             this.tip
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e)
        return null;
      e.classList.remove(ts, es),
          e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = (t => {
                  do {
                    t += Math.floor(1e6 * Math.random())
                  } while (document.getElementById(t));
                  return t
                })(this.constructor.NAME)
                    .toString();
      return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts),
             e
    }
    setContent(t) {
      this._newContent = t,
      this._isShown() && (this._disposePopper(), this.show())
    }
    _getTemplateFactory(t) {
      return this._templateFactory
                 ? this._templateFactory.changeContent(t)
                 : this._templateFactory = new Jn({
                     ...this._config,
                     content : t,
                     extraClass :
                         this._resolvePossibleFunction(this._config.customClass)
                   }),
                   this._templateFactory
    }
    _getContentForTemplate() {
      return {
        ".tooltip-inner": this._getTitle()
      }
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
          t.delegateTarget, this._getDelegateConfig())
    }
    _isAnimated() {
      return this._config.animation ||
          this.tip && this.tip.classList.contains(ts)
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(es)
    }
    _createPopper(t) {
      const e = Qt(this._config.placement, [ this, t, this._element ]),
            i = rs[e.toUpperCase()];
      return St(this._element, t, this._getPopperConfig(i))
    }
    _getOffset() {
      const {offset : t} = this._config;
      return "string" == typeof t
          ? t.split(",").map((t => Number.parseInt(t, 10)))
          : "function" == typeof t ? e => t(e, this._element)
                                   : t
    }
    _resolvePossibleFunction(t) {
      return Qt(t, [ this._element ])
    }
    _getPopperConfig(t) {
      const e = {
        placement : t,
        modifiers : [
          {
            name : "flip",
            options : {fallbackPlacements : this._config.fallbackPlacements}
          },
          {name : "offset", options : {offset : this._getOffset()}},
          {
            name : "preventOverflow",
            options : {boundary : this._config.boundary}
          },
          {
            name : "arrow",
            options : {element : `.${this.constructor.NAME}-arrow`}
          },
          {
            name : "preSetPlacement",
            enabled : !0,
            phase : "beforeMain",
            fn : t => {
              this._getTipElement().setAttribute(
                  "data-popper-placement", t.state.placement)
            }
          }
        ]
      };
      return {
        ...e, ...Qt(this._config.popperConfig, [ e ])
      }
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          ue.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (t => {this._initializeOnDelegatedTarget(t).toggle()}));
        else if ("manual" !== e) {
          const t = e === ss ? this.constructor.eventName("mouseenter")
                             : this.constructor.eventName("focusin"),
                i = e === ss ? this.constructor.eventName("mouseleave")
                             : this.constructor.eventName("focusout");
          ue.on(this._element, t, this._config.selector, (t => {
                  const e = this._initializeOnDelegatedTarget(t);
                  e._activeTrigger["focusin" === t.type ? os : ss] = !0,
                                                               e._enter()
                })),
              ue.on(this._element, i, this._config.selector, (t => {
                      const e = this._initializeOnDelegatedTarget(t);
                      e._activeTrigger["focusout" === t.type ? os : ss] =
                          e._element.contains(t.relatedTarget),
                                                                    e._leave()
                    }))
        }
      this._hideModalHandler = () => { this._element && this.hide() },
      ue.on(this._element.closest(is), ns, this._hideModalHandler)
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
          (this._element.getAttribute("aria-label") ||
               this._element.textContent.trim() ||
               this._element.setAttribute("aria-label", t),
           this._element.setAttribute("data-bs-original-title", t),
           this._element.removeAttribute("title"))
    }
    _enter() {
      this._isShown() || this._isHovered
          ? this._isHovered = !0
          : (this._isHovered = !0,
             this._setTimeout(
                 (() => {this._isHovered && this.show()}),
                 this._config.delay.show))
    }
    _leave() {
      this._isWithActiveTrigger() ||
          (this._isHovered = !1,
           this._setTimeout(
               (() => {this._isHovered || this.hide()}),
               this._config.delay.hide))
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0)
    }
    _getConfig(t) {
      const e = ge.getDataAttributes(this._element);
      for (const t of Object.keys(e))
        Zn.has(t) && delete e[t];
      return t = {...e, ..."object" == typeof t && t ? t : {}},
             t = this._mergeConfigObj(t), t = this._configAfterMerge(t),
             this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
      return t.container = !1 === t.container ? document.body : Ft(t.container),
             "number" == typeof t.delay &&
                 (t.delay = {show : t.delay, hide : t.delay}),
             "number" == typeof t.title && (t.title = t.title.toString()),
             "number" == typeof t.content && (t.content = t.content.toString()),
             t
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i);
      return t.selector = !1, t.trigger = "manual", t
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null),
          this.tip && (this.tip.remove(), this.tip = null)
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = cs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  Kt(cs);
  const hs = {
    ...cs.Default,
    content : "",
    offset : [ 0, 8 ],
    placement : "right",
    template :
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger : "click"
  },
        ds = {...cs.DefaultType, content : "(null|string|element|function)"};
  class us extends cs {
    static get Default() {
      return hs
    }
    static get DefaultType() {
      return ds
    }
    static get NAME() {
      return "popover"
    }
    _isWithContent() {
      return this._getTitle() || this._getContent()
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(), ".popover-body": this._getContent()
      }
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = us.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  Kt(us);
  const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`,
        gs = `load${fs}.data-api`, _s = "active", bs = "[href]",
        vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
        ws = {
          offset : null,
          rootMargin : "0px 0px -25%",
          smoothScroll : !1,
          target : null,
          threshold : [ .1, .5, 1 ]
        },
        Es = {
          offset : "(number|null)",
          rootMargin : "string",
          smoothScroll : "boolean",
          target : "element",
          threshold : "array"
        };
  class As extends be {
    constructor(t, e) {
      super(t, e),
          this._targetLinks = new Map, this._observableSections = new Map,
          this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
          ? null
          : this._element,
          this._activeTarget = null, this._observer = null,
          this._previousScrollData = {visibleEntryTop : 0, parentScrollTop : 0},
          this.refresh()
    }
    static get Default() {
      return ws
    }
    static get DefaultType() {
      return Es
    }
    static get NAME() {
      return "scrollspy"
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(),
          this._observer ? this._observer.disconnect()
                         : this._observer = this._getNewObserver();
      for (const t of this._observableSections.values())
        this._observer.observe(t)
    }
    dispose() {
      this._observer.disconnect(), super.dispose()
    }
    _configAfterMerge(t) {
      return t.target = Ft(t.target) || document.body,
             t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
             "string" == typeof t.threshold &&
                 (t.threshold =
                      t.threshold.split(",").map((t => Number.parseFloat(t)))),
             t
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
          (ue.off(this._config.target, ms),
           ue.on(this._config.target, ms, bs, (t => {
                   const e = this._observableSections.get(t.target.hash);
                   if (e) {
                     t.preventDefault();
                     const i = this._rootElement || window,
                           n = e.offsetTop - this._element.offsetTop;
                     if (i.scrollTo)
                       return void i.scrollTo({top : n, behavior : "smooth"});
                     i.scrollTop = n
                   }
                 })))
    }
    _getNewObserver() {
      const t = {
        root : this._rootElement,
        threshold : this._config.threshold,
        rootMargin : this._config.rootMargin
      };
      return new IntersectionObserver((t => this._observerCallback(t)), t)
    }
    _observerCallback(t) {
      const e = t => this._targetLinks.get(`#${t.target.id}`),
            i =
                t => {
                  this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                  this._process(e(t))
                },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e(o));
          continue
        }
        const t =
            o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if (i(o), !n)
            return
        } else
          s || t || i(o)
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = new Map, this._observableSections = new Map;
      const t = ye.find(bs, this._config.target);
      for (const e of t) {
        if (!e.hash || Bt(e))
          continue;
        const t = ye.findOne(decodeURI(e.hash), this._element);
        Ht(t) &&
            (this._targetLinks.set(decodeURI(e.hash), e),
             this._observableSections.set(e.hash, t))
      }
    }
    _process(t) {
      this._activeTarget !== t &&
          (this._clearActiveClass(this._config.target),
           this._activeTarget = t,
           t.classList.add(_s),
           this._activateParents(t),
           ue.trigger(this._element, ps, {relatedTarget : t}))
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        ye.findOne(".dropdown-toggle", t.closest(".dropdown"))
            .classList.add(_s);
      else
        for (const e of ye.parents(t, ".nav, .list-group"))
          for (const t of ye.prev(e, ys))
            t.classList.add(_s)
    }
    _clearActiveClass(t) {
      t.classList.remove(_s);
      const e = ye.find(`${bs}.${_s}`, t);
      for (const t of e)
        t.classList.remove(_s)
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = As.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  ue.on(window, gs, (() => {
          for (const t of ye.find('[data-bs-spy="scroll"]'))
            As.getOrCreateInstance(t)
        })),
      Kt(As);
  const
      Ts = ".bs.tab",
      Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`,
      Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`,
      $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown",
      Ms = "Home", js = "End", Fs = "active", Hs = "fade", Bs = "show",
      Ws = ".dropdown-toggle", zs = `:not(${Ws})`,
      Rs =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
      Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${
          Fs}[data-bs-toggle="list"]`;
  class Ys extends be {
    constructor(t) {
      super(t),
          this._parent =
              this._element.closest('.list-group, .nav, [role="tablist"]'),
          this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
           ue.on(this._element, Ss, (t => this._keydown(t))))
    }
    static get NAME() {
      return "tab"
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t))
        return;
      const e = this._getActiveElem(),
            i = e ? ue.trigger(e, Cs, {relatedTarget : t}) : null;
      ue.trigger(t, xs, {relatedTarget : e}).defaultPrevented ||
          i && i.defaultPrevented ||
          (this._deactivate(e, t), this._activate(t, e))
    }
    _activate(t, e) {
      t &&
          (t.classList.add(Fs),
           this._activate(ye.getElementFromSelector(t)),
           this._queueCallback(
               (() => {
                    "tab" === t.getAttribute("role")
                        ? (t.removeAttribute("tabindex"),
                           t.setAttribute("aria-selected", !0),
                           this._toggleDropDown(t, !0),
                           ue.trigger(t, ks, {relatedTarget : e}))
                        : t.classList.add(Bs)}),
               t,
               t.classList.contains(Hs)))
    }
    _deactivate(t, e) {
      t &&
          (t.classList.remove(Fs),
           t.blur(),
           this._deactivate(ye.getElementFromSelector(t)),
           this._queueCallback(
               (() => {
                    "tab" === t.getAttribute("role")
                        ? (t.setAttribute("aria-selected", !1),
                           t.setAttribute("tabindex", "-1"),
                           this._toggleDropDown(t, !1),
                           ue.trigger(t, Os, {relatedTarget : e}))
                        : t.classList.remove(Bs)}),
               t,
               t.classList.contains(Hs)))
    }
    _keydown(t) {
      if (![$s, Is, Ns, Ps, Ms, js].includes(t.key))
        return;
      t.stopPropagation(), t.preventDefault();
      const e = this._getChildren().filter((t => !Bt(t)));
      let i;
      if ([ Ms, js ].includes(t.key))
        i = e[t.key === Ms ? 0 : e.length - 1];
      else {
        const n = [ Is, Ps ].includes(t.key);
        i = Ut(e, t.target, n, !0)
      }
      i && (i.focus({preventScroll : !0}), Ys.getOrCreateInstance(i).show())
    }
    _getChildren() {
      return ye.find(qs, this._parent)
    }
    _getActiveElem() {
      return this._getChildren().find((t => this._elemIsActive(t))) || null
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e)
        this._setInitialAttributesOnChild(t)
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t), i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
          i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
          e || t.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(t, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(t)
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = ye.getElementFromSelector(t);
      e &&
          (this._setAttributeIfNotExists(e, "role", "tabpanel"),
           t.id &&
               this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown"))
        return;
      const n = (t, n) => {
        const s = ye.findOne(t, i);
        s && s.classList.toggle(n, e)
      };
      n(Ws, Fs), n(".dropdown-menu", Bs), i.setAttribute("aria-expanded", e)
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i)
    }
    _elemIsActive(t) {
      return t.classList.contains(Fs)
    }
    _getInnerElement(t) {
      return t.matches(qs) ? t : ye.findOne(qs, t)
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = Ys.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }
  ue.on(document, Ls, Rs, (function(t) {
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
              Bt(this) || Ys.getOrCreateInstance(this).show()
        })),
      ue.on(window, Ds, (() => {
              for (const t of ye.find(Vs))
                Ys.getOrCreateInstance(t)
            })),
      Kt(Ys);
  const Ks = ".bs.toast", Qs = `mouseover${Ks}`, Xs = `mouseout${Ks}`,
        Us = `focusin${Ks}`, Gs = `focusout${Ks}`, Js = `hide${Ks}`,
        Zs = `hidden${Ks}`, to = `show${Ks}`, eo = `shown${Ks}`, io = "hide",
        no = "show", so = "showing",
        oo = {animation : "boolean", autohide : "boolean", delay : "number"},
        ro = {animation : !0, autohide : !0, delay : 5e3};
  class ao extends be {
    constructor(t, e) {
      super(t, e), this._timeout = null, this._hasMouseInteraction = !1,
                   this._hasKeyboardInteraction = !1, this._setListeners()
    }
    static get Default() {
      return ro
    }
    static get DefaultType() {
      return oo
    }
    static get NAME() {
      return "toast"
    }
    show() {
      ue.trigger(this._element, to).defaultPrevented ||
          (this._clearTimeout(),
           this._config.animation && this._element.classList.add("fade"),
           this._element.classList.remove(io),
           Rt(this._element),
           this._element.classList.add(no, so),
           this._queueCallback(
               (() => {
                 this._element.classList.remove(so),
                 ue.trigger(this._element, eo),
                 this._maybeScheduleHide()
               }),
               this._element,
               this._config.animation))
    }
    hide() {
      this.isShown() &&
          (ue.trigger(this._element, Js).defaultPrevented ||
           (this._element.classList.add(so),
            this._queueCallback(
                (() => {
                  this._element.classList.add(io),
                  this._element.classList.remove(so, no),
                  ue.trigger(this._element, Zs)
                }),
                this._element,
                this._config.animation)))
    }
    dispose() {
      this._clearTimeout(),
          this.isShown() && this._element.classList.remove(no), super.dispose()
    }
    isShown() {
      return this._element.classList.contains(no)
    }
    _maybeScheduleHide() {
      this._config.autohide &&
          (this._hasMouseInteraction || this._hasKeyboardInteraction ||
           (this._timeout =
                setTimeout((() => {this.hide()}), this._config.delay)))
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e
      }
      if (e)
        return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i || this._element.contains(i) ||
          this._maybeScheduleHide()
    }
    _setListeners() {
      ue.on(this._element, Qs, (t => this._onInteraction(t, !0))),
          ue.on(this._element, Xs, (t => this._onInteraction(t, !1))),
          ue.on(this._element, Us, (t => this._onInteraction(t, !0))),
          ue.on(this._element, Gs, (t => this._onInteraction(t, !1)))
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null
    }
    static jQueryInterface(t) {
      return this.each((function() {
        const e = ao.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t])
            throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }
  function lo(t) {
    "loading" != document.readyState
        ? t()
        : document.addEventListener("DOMContentLoaded", t)
  }
  we(ao), Kt(ao), lo((function() {
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map((function(t) {
          return new cs(t, {delay : {show : 500, hide : 100}})
        }))
  })),
      lo((function() {
        document.getElementById("pst-back-to-top")
            .addEventListener("click", (function() {
                                document.body.scrollTop = 0,
                                document.documentElement.scrollTop = 0
                              }))
      })),
      lo((function() {
        var t = document.getElementById("pst-back-to-top"),
            e = document.getElementsByClassName("bd-header")[0]
                    .getBoundingClientRect();
        window.addEventListener("scroll", (function() {
                                  this.oldScroll > this.scrollY&& this.scrollY >
                                          e.bottom
                                      ? t.style.display = "block"
                                      : t.style.display = "none",
                                        this.oldScroll = this.scrollY
                                }))
      }))
})();
//# sourceMappingURL=bootstrap.js.map