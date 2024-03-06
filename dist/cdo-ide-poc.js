import './style.css';
var Gl = Object.defineProperty;
var Yl = (e, t, r) => t in e ? Gl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var at = (e, t, r) => (Yl(e, typeof t != "symbol" ? t + "" : t, r), r);
import Xo, { createContext as Jl, useContext as Kl, useMemo as Qo, useState as gn, useRef as Xl, useEffect as on, useReducer as Ql } from "react";
var Zl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ec(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gs = { exports: {} }, Mt = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qi;
function tc() {
  if (qi)
    return Mt;
  qi = 1;
  var e = Xo, t = 60103;
  if (Mt.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var r = Symbol.for;
    t = r("react.element"), Mt.Fragment = r("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, p, c) {
    var u, o = {}, f = null, h = null;
    c !== void 0 && (f = "" + c), p.key !== void 0 && (f = "" + p.key), p.ref !== void 0 && (h = p.ref);
    for (u in p)
      s.call(p, u) && !i.hasOwnProperty(u) && (o[u] = p[u]);
    if (l && l.defaultProps)
      for (u in p = l.defaultProps, p)
        o[u] === void 0 && (o[u] = p[u]);
    return { $$typeof: t, type: l, key: f, ref: h, props: o, _owner: n.current };
  }
  return Mt.jsx = a, Mt.jsxs = a, Mt;
}
var Xn = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function rc() {
  return Wi || (Wi = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = Xo, r = 60103, n = 60106;
      e.Fragment = 60107;
      var s = 60108, i = 60114, a = 60109, l = 60110, p = 60112, c = 60113, u = 60120, o = 60115, f = 60116, h = 60121, m = 60122, d = 60117, D = 60129, y = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var g = Symbol.for;
        r = g("react.element"), n = g("react.portal"), e.Fragment = g("react.fragment"), s = g("react.strict_mode"), i = g("react.profiler"), a = g("react.provider"), l = g("react.context"), p = g("react.forward_ref"), c = g("react.suspense"), u = g("react.suspense_list"), o = g("react.memo"), f = g("react.lazy"), h = g("react.block"), m = g("react.server.block"), d = g("react.fundamental"), g("react.scope"), g("react.opaque.id"), D = g("react.debug_trace_mode"), g("react.offscreen"), y = g("react.legacy_hidden");
      }
      var v = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
      function w(k) {
        if (k === null || typeof k != "object")
          return null;
        var $ = v && k[v] || k[b];
        return typeof $ == "function" ? $ : null;
      }
      var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function E(k) {
        {
          for (var $ = arguments.length, P = new Array($ > 1 ? $ - 1 : 0), H = 1; H < $; H++)
            P[H - 1] = arguments[H];
          x("error", k, P);
        }
      }
      function x(k, $, P) {
        {
          var H = C.ReactDebugCurrentFrame, X = "";
          if (pe) {
            var Q = O(pe.type), G = pe._owner;
            X += M(Q, pe._source, G && O(G.type));
          }
          X += H.getStackAddendum(), X !== "" && ($ += "%s", P = P.concat([X]));
          var U = P.map(function(he) {
            return "" + he;
          });
          U.unshift("Warning: " + $), Function.prototype.apply.call(console[k], console, U);
        }
      }
      var F = !1;
      function B(k) {
        return !!(typeof k == "string" || typeof k == "function" || k === e.Fragment || k === i || k === D || k === s || k === c || k === u || k === y || F || typeof k == "object" && k !== null && (k.$$typeof === f || k.$$typeof === o || k.$$typeof === a || k.$$typeof === l || k.$$typeof === p || k.$$typeof === d || k.$$typeof === h || k[0] === m));
      }
      var N = /^(.*)[\\\/]/;
      function M(k, $, P) {
        var H = "";
        if ($) {
          var X = $.fileName, Q = X.replace(N, "");
          if (/^index\./.test(Q)) {
            var G = X.match(N);
            if (G) {
              var U = G[1];
              if (U) {
                var he = U.replace(N, "");
                Q = he + "/" + Q;
              }
            }
          }
          H = " (at " + Q + ":" + $.lineNumber + ")";
        } else
          P && (H = " (created by " + P + ")");
        return `
    in ` + (k || "Unknown") + H;
      }
      var R = 1;
      function I(k) {
        return k._status === R ? k._result : null;
      }
      function j(k, $, P) {
        var H = $.displayName || $.name || "";
        return k.displayName || (H !== "" ? P + "(" + H + ")" : P);
      }
      function O(k) {
        if (k == null)
          return null;
        if (typeof k.tag == "number" && E("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof k == "function")
          return k.displayName || k.name || null;
        if (typeof k == "string")
          return k;
        switch (k) {
          case e.Fragment:
            return "Fragment";
          case n:
            return "Portal";
          case i:
            return "Profiler";
          case s:
            return "StrictMode";
          case c:
            return "Suspense";
          case u:
            return "SuspenseList";
        }
        if (typeof k == "object")
          switch (k.$$typeof) {
            case l:
              return "Context.Consumer";
            case a:
              return "Context.Provider";
            case p:
              return j(k, k.render, "ForwardRef");
            case o:
              return O(k.type);
            case h:
              return O(k.render);
            case f: {
              var $ = k, P = I($);
              if (P)
                return O(P);
              break;
            }
          }
        return null;
      }
      var Y = {};
      C.ReactDebugCurrentFrame;
      var pe = null;
      function ge(k) {
        pe = k;
      }
      function tt(k, $, P, H, X) {
        {
          var Q = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var G in k)
            if (Q(k, G)) {
              var U = void 0;
              try {
                if (typeof k[G] != "function") {
                  var he = Error((H || "React class") + ": " + P + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw he.name = "Invariant Violation", he;
                }
                U = k[G]($, G, H, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (je) {
                U = je;
              }
              U && !(U instanceof Error) && (ge(X), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", P, G, typeof U), ge(null)), U instanceof Error && !(U.message in Y) && (Y[U.message] = !0, ge(X), E("Failed %s type: %s", P, U.message), ge(null));
            }
        }
      }
      var Ee = C.ReactCurrentOwner, Pe = Object.prototype.hasOwnProperty, rt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, J, nt, gt;
      gt = {};
      function L(k) {
        if (Pe.call(k, "ref")) {
          var $ = Object.getOwnPropertyDescriptor(k, "ref").get;
          if ($ && $.isReactWarning)
            return !1;
        }
        return k.ref !== void 0;
      }
      function _(k) {
        if (Pe.call(k, "key")) {
          var $ = Object.getOwnPropertyDescriptor(k, "key").get;
          if ($ && $.isReactWarning)
            return !1;
        }
        return k.key !== void 0;
      }
      function S(k, $) {
        if (typeof k.ref == "string" && Ee.current && $ && Ee.current.stateNode !== $) {
          var P = O(Ee.current.type);
          gt[P] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(Ee.current.type), k.ref), gt[P] = !0);
        }
      }
      function W(k, $) {
        {
          var P = function() {
            J || (J = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
          };
          P.isReactWarning = !0, Object.defineProperty(k, "key", {
            get: P,
            configurable: !0
          });
        }
      }
      function z(k, $) {
        {
          var P = function() {
            nt || (nt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
          };
          P.isReactWarning = !0, Object.defineProperty(k, "ref", {
            get: P,
            configurable: !0
          });
        }
      }
      var K = function(k, $, P, H, X, Q, G) {
        var U = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: k,
          key: $,
          ref: P,
          props: G,
          // Record the component responsible for creating this element.
          _owner: Q
        };
        return U._store = {}, Object.defineProperty(U._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(U, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(U, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
      };
      function ke(k, $, P, H, X) {
        {
          var Q, G = {}, U = null, he = null;
          P !== void 0 && (U = "" + P), _($) && (U = "" + $.key), L($) && (he = $.ref, S($, X));
          for (Q in $)
            Pe.call($, Q) && !rt.hasOwnProperty(Q) && (G[Q] = $[Q]);
          if (k && k.defaultProps) {
            var je = k.defaultProps;
            for (Q in je)
              G[Q] === void 0 && (G[Q] = je[Q]);
          }
          if (U || he) {
            var ot = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
            U && W(G, ot), he && z(G, ot);
          }
          return K(k, U, he, X, H, Ee.current, G);
        }
      }
      var xe = C.ReactCurrentOwner;
      C.ReactDebugCurrentFrame;
      function le(k) {
        pe = k;
      }
      var st;
      st = !1;
      function It(k) {
        return typeof k == "object" && k !== null && k.$$typeof === r;
      }
      function Ve() {
        {
          if (xe.current) {
            var k = O(xe.current.type);
            if (k)
              return `

Check the render method of \`` + k + "`.";
          }
          return "";
        }
      }
      function Ie(k) {
        {
          if (k !== void 0) {
            var $ = k.fileName.replace(/^.*[\\\/]/, ""), P = k.lineNumber;
            return `

Check your code at ` + $ + ":" + P + ".";
          }
          return "";
        }
      }
      var it = {};
      function jt(k) {
        {
          var $ = Ve();
          if (!$) {
            var P = typeof k == "string" ? k : k.displayName || k.name;
            P && ($ = `

Check the top-level render call using <` + P + ">.");
          }
          return $;
        }
      }
      function vt(k, $) {
        {
          if (!k._store || k._store.validated || k.key != null)
            return;
          k._store.validated = !0;
          var P = jt($);
          if (it[P])
            return;
          it[P] = !0;
          var H = "";
          k && k._owner && k._owner !== xe.current && (H = " It was passed a child from " + O(k._owner.type) + "."), le(k), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, H), le(null);
        }
      }
      function Dt(k, $) {
        {
          if (typeof k != "object")
            return;
          if (Array.isArray(k))
            for (var P = 0; P < k.length; P++) {
              var H = k[P];
              It(H) && vt(H, $);
            }
          else if (It(k))
            k._store && (k._store.validated = !0);
          else if (k) {
            var X = w(k);
            if (typeof X == "function" && X !== k.entries)
              for (var Q = X.call(k), G; !(G = Q.next()).done; )
                It(G.value) && vt(G.value, $);
          }
        }
      }
      function ql(k) {
        {
          var $ = k.type;
          if ($ == null || typeof $ == "string")
            return;
          var P;
          if (typeof $ == "function")
            P = $.propTypes;
          else if (typeof $ == "object" && ($.$$typeof === p || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          $.$$typeof === o))
            P = $.propTypes;
          else
            return;
          if (P) {
            var H = O($);
            tt(P, k.props, "prop", H, k);
          } else if ($.PropTypes !== void 0 && !st) {
            st = !0;
            var X = O($);
            E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wl(k) {
        {
          for (var $ = Object.keys(k.props), P = 0; P < $.length; P++) {
            var H = $[P];
            if (H !== "children" && H !== "key") {
              le(k), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), le(null);
              break;
            }
          }
          k.ref !== null && (le(k), E("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
        }
      }
      function Mi(k, $, P, H, X, Q) {
        {
          var G = B(k);
          if (!G) {
            var U = "";
            (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var he = Ie(X);
            he ? U += he : U += Ve();
            var je;
            k === null ? je = "null" : Array.isArray(k) ? je = "array" : k !== void 0 && k.$$typeof === r ? (je = "<" + (O(k.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : je = typeof k, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, U);
          }
          var ot = ke(k, $, P, X, Q);
          if (ot == null)
            return ot;
          if (G) {
            var Rt = $.children;
            if (Rt !== void 0)
              if (H)
                if (Array.isArray(Rt)) {
                  for (var Kn = 0; Kn < Rt.length; Kn++)
                    Dt(Rt[Kn], k);
                  Object.freeze && Object.freeze(Rt);
                } else
                  E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Dt(Rt, k);
          }
          return k === e.Fragment ? Wl(ot) : ql(ot), ot;
        }
      }
      function Hl(k, $, P) {
        return Mi(k, $, P, !0);
      }
      function Ul(k, $, P) {
        return Mi(k, $, P, !1);
      }
      var Vl = Ul, zl = Hl;
      e.jsx = Vl, e.jsxs = zl;
    }();
  }(Xn)), Xn;
}
process.env.NODE_ENV === "production" ? gs.exports = tc() : gs.exports = rc();
var A = gs.exports;
const Zo = Jl(null), Ne = () => {
  const e = Kl(Zo);
  if (e === null)
    throw new Error("CDO IDE Context has not been provided!");
  return e;
}, nc = ({
  children: e,
  value: t
}) => /* @__PURE__ */ A.jsx(Zo.Provider, { value: t, children: e }), ee = {
  NEW_FILE: "NEW_FILE",
  RENAME_FILE: "RENAME_FILE",
  SAVE_FILE: "SAVE_FILE",
  OPEN_FILE: "OPEN_FILE",
  ACTIVATE_FILE: "ACTIVATE_FILE",
  CLOSE_FILE: "CLOSE_FILE",
  DELETE_FILE: "DELETE_FILE",
  NEW_FOLDER: "NEW_FOLDER",
  TOGGLE_OPEN_FOLDER: "TOGGLE_OPEN_FOLDER",
  DELETE_FOLDER: "DELETE_FOLDER",
  RENAME_FOLDER: "RENAME_FOLDER"
}, xt = "0", sc = "Add your changes to ${fileName}", ic = (e) => String(Math.max(...e.map((t) => Number(t.id))) + 1), oc = (e) => String(Math.max(...e.map((t) => Number(t.id))) + 1), Ps = (e, t) => t.reduce((r, n) => (n.parentId === e && r.push(n.id, ...Ps(n.id, t)), r), []), ac = (e, t, r) => {
  const n = new Set(
    r ? [e, ...Ps(e, r)] : [e]
  );
  return t.reduce((s, i) => (n.has(i.folderId) && s.push(i.id), s), []);
}, uc = (e) => Qo(() => {
  const t = {
    newFile: ({
      fileId: r,
      fileName: n,
      folderId: s = xt,
      contents: i = sc
    }) => {
      e({
        type: ee.NEW_FILE,
        payload: {
          fileId: r,
          fileName: n,
          folderId: s,
          contents: i.replace(/\${fileName}/g, n)
        }
      }), t.setActiveFile(r);
    },
    renameFile: (r, n) => {
      e({
        type: ee.RENAME_FILE,
        payload: { fileId: r, newName: n }
      });
    },
    saveFile: (r, n) => {
      e({
        type: ee.SAVE_FILE,
        payload: { fileId: r, contents: n }
      });
    },
    openFile: (r) => {
      e({
        type: ee.OPEN_FILE,
        payload: { fileId: r }
      });
    },
    closeFile: (r) => {
      e({
        type: ee.CLOSE_FILE,
        payload: { fileId: r }
      });
    },
    deleteFile: (r) => {
      e({
        type: ee.DELETE_FILE,
        payload: { fileId: r }
      });
    },
    setActiveFile: (r) => {
      e({
        type: ee.ACTIVATE_FILE,
        payload: { fileId: r }
      });
    },
    newFolder: ({
      folderId: r,
      folderName: n,
      parentId: s = xt
    }) => {
      e({
        type: ee.NEW_FOLDER,
        payload: { folderId: r, folderName: n, parentId: s }
      });
    },
    renameFolder: (r, n) => {
      e({
        type: ee.RENAME_FOLDER,
        payload: { folderId: r, newName: n }
      });
    },
    toggleOpenFolder: (r) => {
      e({
        type: ee.TOGGLE_OPEN_FOLDER,
        payload: { folderId: r }
      });
    },
    deleteFolder: (r) => {
      e({
        type: ee.DELETE_FOLDER,
        payload: { folderId: r }
      });
    }
  };
  return t;
}, [e]), lc = (e, t) => {
  var r;
  switch (t.type) {
    case ee.NEW_FILE: {
      const { fileId: n, fileName: s, folderId: i, contents: a = "" } = t.payload, l = { ...e, files: { ...e.files } }, [p, c] = s.split(".");
      return l.files[n] = {
        id: n,
        name: s,
        language: c || "html",
        contents: a,
        folderId: i
      }, l;
    }
    case ee.RENAME_FILE: {
      const { fileId: n, newName: s } = t.payload;
      return {
        ...e,
        files: {
          ...e.files,
          [n]: { ...e.files[n], name: s }
        }
      };
    }
    case ee.SAVE_FILE: {
      const { fileId: n, contents: s } = t.payload;
      return {
        ...e,
        files: {
          ...e.files,
          [n]: { ...e.files[n], contents: s }
        }
      };
    }
    case ee.OPEN_FILE:
    case ee.ACTIVATE_FILE: {
      const { fileId: n } = t.payload, s = (r = Object.values(e.files).filter(
        (a) => a.active
      )) == null ? void 0 : r[0];
      if ((s == null ? void 0 : s.id) === n)
        return e;
      const i = {
        ...e,
        files: {
          ...e.files,
          [n]: { ...e.files[n], active: !0, open: !0 }
        }
      };
      return s && (i.files[s.id].active = !1), i;
    }
    case ee.CLOSE_FILE: {
      const { fileId: n } = t.payload;
      return {
        ...e,
        files: {
          ...e.files,
          [n]: { ...e.files[n], open: !1, active: !1 }
        }
      };
    }
    case ee.DELETE_FILE: {
      const { fileId: n } = t.payload, s = {
        ...e,
        files: {
          ...e.files
        }
      };
      return delete s.files[n], s;
    }
    case ee.NEW_FOLDER: {
      const { folderId: n, folderName: s, parentId: i } = t.payload, a = { ...e, folders: { ...e.folders } };
      return a.folders[n] = {
        id: n,
        name: s,
        parentId: i
      }, a;
    }
    case ee.TOGGLE_OPEN_FOLDER: {
      const { folderId: n } = t.payload;
      return {
        ...e,
        folders: {
          ...e.folders,
          [n]: {
            ...e.folders[n],
            open: !e.folders[n].open
          }
        }
      };
    }
    case ee.DELETE_FOLDER: {
      const { folderId: n } = t.payload, s = {
        ...e,
        folders: {
          ...e.folders
        }
      }, i = new Set(
        Ps(n, Object.values(e.folders))
      ), a = new Set(
        ac(
          n,
          Object.values(e.files),
          Object.values(e.folders)
        )
      );
      return delete s.folders[n], Object.values(s.folders).filter((l) => i.has(l.id)).forEach((l) => delete s.folders[l.id]), a.size && (s.files = { ...s.files }, Object.values(s.files).filter((l) => a.has(l.id)).forEach((l) => delete s.files[l.id])), s;
    }
    case ee.RENAME_FOLDER: {
      const { folderId: n, newName: s } = t.payload;
      return {
        ...e,
        folders: {
          ...e.folders,
          [n]: { ...e.folders[n], name: s }
        }
      };
    }
    default:
      return e;
  }
}, cc = ({ setActivePane: e, activePane: t }) => {
  const {
    config: { leftNav: r }
  } = Ne();
  return /* @__PURE__ */ A.jsx("div", { className: "nav-bar", children: r.map((n) => /* @__PURE__ */ A.jsx(
    "div",
    {
      onClick: () => e(n.component),
      style: {
        cursor: "pointer",
        backgroundColor: n.component === t ? "#666" : ""
      },
      children: /* @__PURE__ */ A.jsx("i", { className: `fa-regular fa-2xl ${n.icon}` })
    },
    n.icon
  )) });
}, pc = () => {
  const {
    config: { sideBar: e }
  } = Ne();
  return /* @__PURE__ */ A.jsx("div", { className: "left-side-bar", children: e.map((t) => /* @__PURE__ */ A.jsx(
    "div",
    {
      onClick: () => alert("not implemented"),
      style: { cursor: "pointer" },
      children: /* @__PURE__ */ A.jsx("i", { className: `fa-regular fa-2xl ${t}` })
    },
    t
  )) });
}, ea = ({
  parentId: e,
  folders: t,
  files: r,
  newFolderPrompt: n,
  newFilePrompt: s,
  renameFilePrompt: i,
  renameFolderPrompt: a
}) => {
  const {
    openFile: l,
    deleteFile: p,
    toggleOpenFolder: c,
    deleteFolder: u
  } = Ne();
  return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    Object.values(t).filter((o) => o.parentId === e).sort((o, f) => o.name.localeCompare(f.name)).map((o) => {
      const f = /* @__PURE__ */ A.jsx(
        "i",
        {
          className: o.open ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"
        }
      );
      return /* @__PURE__ */ A.jsxs("li", { children: [
        /* @__PURE__ */ A.jsxs("span", { className: "label", children: [
          /* @__PURE__ */ A.jsxs("span", { className: "title", children: [
            /* @__PURE__ */ A.jsx(
              "span",
              {
                className: "caret-container",
                onClick: () => c(o.id),
                children: f
              }
            ),
            /* @__PURE__ */ A.jsx("span", { children: o.name })
          ] }),
          /* @__PURE__ */ A.jsxs("span", { className: "button-bar", children: [
            /* @__PURE__ */ A.jsx("span", { onClick: () => a(o.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }) }),
            /* @__PURE__ */ A.jsx("span", { onClick: () => n(o.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-folder-plus" }) }),
            /* @__PURE__ */ A.jsx("span", { onClick: () => s(o.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-plus" }) }),
            /* @__PURE__ */ A.jsx("span", { onClick: () => u(o.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash" }) })
          ] })
        ] }),
        o.open && /* @__PURE__ */ A.jsx("ul", { children: /* @__PURE__ */ A.jsx(
          ea,
          {
            folders: t,
            newFolderPrompt: n,
            parentId: o.id,
            files: r,
            newFilePrompt: s,
            renameFilePrompt: i,
            renameFolderPrompt: a
          }
        ) })
      ] }, o.id + o.open);
    }),
    Object.values(r).filter((o) => o.folderId === e).sort((o, f) => o.name.localeCompare(f.name)).map((o) => /* @__PURE__ */ A.jsx("li", { children: /* @__PURE__ */ A.jsxs("span", { className: "label", children: [
      /* @__PURE__ */ A.jsx("span", { onClick: () => l(o.id), children: o.name }),
      /* @__PURE__ */ A.jsxs("span", { className: "button-bar", children: [
        /* @__PURE__ */ A.jsx("span", { onClick: () => i(o.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-pencil" }) }),
        /* @__PURE__ */ A.jsx("span", { onClick: () => p(o.id), children: /* @__PURE__ */ A.jsx("i", { className: "fa-solid fa-trash" }) })
      ] })
    ] }) }, o.id))
  ] });
}, hc = () => {
  const {
    project: e,
    newFile: t,
    renameFile: r,
    renameFolder: n,
    newFolder: s
  } = Ne(), i = (c = xt) => {
    const u = oc(Object.values(e.folders)), o = window.prompt("Please name your new folder");
    if (!o)
      return;
    if (Object.values(e.folders).find(
      (h) => h.name === o && h.parentId === c
    )) {
      alert("Folder already exists");
      return;
    }
    s({ parentId: c, folderName: o, folderId: u });
  }, a = (c = xt) => {
    var d;
    const u = (d = window.prompt("Please name your new file")) == null ? void 0 : d.replace(/[^\w.]+/g, "");
    if (!u)
      return;
    if (Object.values(e.files).find(
      (D) => D.name === u && D.folderId === c
    )) {
      alert("File already exists");
      return;
    }
    const [f, h] = u.split(".");
    if (!h) {
      window.alert("Files must have extensions");
      return;
    }
    const m = ic(Object.values(e.files));
    t({
      fileId: m,
      fileName: u,
      folderId: c
    });
  }, l = (c) => {
    const u = e.files[c], o = window.prompt("Rename file", u.name);
    if (o === null || o === u.name)
      return;
    if (Object.values(e.files).find(
      (h) => h.name === o && h.folderId === u.folderId
    )) {
      alert("File already exists");
      return;
    }
    r(c, o);
  }, p = (c) => {
    const u = e.folders[c], o = window.prompt("Rename folder", u.name);
    if (o === null || o === u.name)
      return;
    if (Object.values(e.folders).find(
      (h) => h.name === o && h.parentId === u.parentId
    )) {
      alert("Folder already exists");
      return;
    }
    n(u.id, o);
  };
  return /* @__PURE__ */ A.jsxs("div", { children: [
    /* @__PURE__ */ A.jsxs("div", { className: "files-toolbar", children: [
      /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => i(), children: "New Folder" }),
      /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => a(), children: "New File" })
    ] }),
    /* @__PURE__ */ A.jsx("ul", { children: /* @__PURE__ */ A.jsx(
      ea,
      {
        parentId: xt,
        folders: e.folders,
        newFolderPrompt: i,
        files: e.files,
        newFilePrompt: a,
        renameFilePrompt: l,
        renameFolderPrompt: p
      }
    ) })
  ] });
}, dc = () => {
  const {
    config: { instructions: e }
  } = Ne();
  return /* @__PURE__ */ A.jsx("div", { className: "instructions", children: e });
}, fc = () => /* @__PURE__ */ A.jsx("div", { children: "Search is not yet implemented. Sorry." }), mc = {
  Instructions: dc,
  Files: hc,
  Search: fc
}, gc = () => {
  const { config: e } = Ne(), [t, r] = gn(
    e.activeLeftNav || e.leftNav[0].component
  ), n = mc[t];
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: "left-pane-outer",
      style: { gridTemplateColumns: e.showSideBar ? "1fr 9fr" : "1fr" },
      children: [
        e.showSideBar && /* @__PURE__ */ A.jsx(pc, {}),
        /* @__PURE__ */ A.jsxs("div", { className: "left-pane-inner", children: [
          /* @__PURE__ */ A.jsx("div", { className: "left-nav", children: /* @__PURE__ */ A.jsx(cc, { setActivePane: r, activePane: t }) }),
          /* @__PURE__ */ A.jsx("div", { className: "left-main", children: /* @__PURE__ */ A.jsx(n, {}) })
        ] })
      ]
    }
  );
}, vc = () => {
  const { project: e, closeFile: t, setActiveFile: r } = Ne(), n = Object.values(e.files).filter((s) => s.open).sort((s, i) => s.name.localeCompare(i.name));
  return /* @__PURE__ */ A.jsx("div", { className: "files-nav-bar", children: n.map((s) => /* @__PURE__ */ A.jsxs("div", { className: "file-tab", style: { cursor: "pointer" }, children: [
    /* @__PURE__ */ A.jsx(
      "span",
      {
        onClick: () => r(s.id),
        style: { fontWeight: s.active ? "bold" : "normal" },
        children: s.name
      }
    ),
    /* @__PURE__ */ A.jsx("span", { onClick: () => t(s.id), children: "X" })
  ] }, s.id)) });
}, Dc = () => /* @__PURE__ */ A.jsx("div", { children: "Sorry, editor is disabled. Please pass in a component!" }), yc = () => {
  const { config: e } = Ne(), t = e.EditorComponent || Dc;
  return /* @__PURE__ */ A.jsxs("div", { className: "center-pane", children: [
    /* @__PURE__ */ A.jsx("div", { className: "center-nav", children: /* @__PURE__ */ A.jsx(vc, {}) }),
    /* @__PURE__ */ A.jsx("div", { className: "center-main", children: /* @__PURE__ */ A.jsx(t, {}) })
  ] });
}, wc = ({ file: e }) => {
  const t = Xl(null), {
    project: { files: r, folders: n }
  } = Ne(), s = Qo(() => e ? e.contents.replace(
    new RegExp('<link rel="stylesheet" href="([^"]+)"></style>', "g"),
    (a, l) => {
      const p = l.split("/"), c = p.pop(), u = p.reduce(
        (f, h) => (Object.values(n).find(
          (d) => d.name === h && d.parentId === f
        ) || { id: xt }).id,
        xt
      ), o = Object.values(r).find(
        (f) => f.name === c && f.folderId === u
      );
      return `
          <style>
            ${o == null ? void 0 : o.contents}
          </style>
      `;
    }
  ) : "", [r, e]);
  return /* @__PURE__ */ A.jsx(A.Fragment, { children: e && /* @__PURE__ */ A.jsx(
    "iframe",
    {
      allow: "self",
      title: "Web Preview",
      ref: t,
      id: "preview",
      style: { width: "100%", height: "100%" },
      srcDoc: s
    }
  ) });
};
var ta = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(Zl, function() {
    return (
      /******/
      function(r) {
        var n = {};
        function s(i) {
          if (n[i])
            return n[i].exports;
          var a = n[i] = {
            /******/
            i,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[i].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
        }
        return s.m = r, s.c = n, s.i = function(i) {
          return i;
        }, s.d = function(i, a, l) {
          s.o(i, a) || Object.defineProperty(i, a, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: l
            /******/
          });
        }, s.n = function(i) {
          var a = i && i.__esModule ? (
            /******/
            function() {
              return i.default;
            }
          ) : (
            /******/
            function() {
              return i;
            }
          );
          return s.d(a, "a", a), a;
        }, s.o = function(i, a) {
          return Object.prototype.hasOwnProperty.call(i, a);
        }, s.p = "", s(s.s = 3);
      }([
        /* 0 */
        /***/
        function(r, n, s) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          });
          var i = Object.assign || function(D) {
            for (var y = 1; y < arguments.length; y++) {
              var g = arguments[y];
              for (var v in g)
                Object.prototype.hasOwnProperty.call(g, v) && (D[v] = g[v]);
            }
            return D;
          }, a = /* @__PURE__ */ function() {
            function D(y, g) {
              for (var v = 0; v < g.length; v++) {
                var b = g[v];
                b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(y, b.key, b);
              }
            }
            return function(y, g, v) {
              return g && D(y.prototype, g), v && D(y, v), y;
            };
          }();
          function l(D) {
            if (Array.isArray(D)) {
              for (var y = 0, g = Array(D.length); y < D.length; y++)
                g[y] = D[y];
              return g;
            } else
              return Array.from(D);
          }
          function p(D, y) {
            if (!(D instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          var c = n.TYPE_MESSAGE = "message", u = n.TYPE_RESPONSE = "response", o = n.TYPE_SET_INTERFACE = "set-interface", f = n.TYPE_SERVICE_MESSAGE = "service-message", h = !!window.MSInputMethodContext && !!document.documentMode, m = {
            //Will not affect IE11 because there sandboxed iframe has not 'null' origin
            //but base URL of iframe's src
            allowedSenderOrigin: void 0
          }, d = function() {
            function D(y, g, v) {
              var b = this;
              p(this, D), this.options = i({}, m, v), this.incrementalID = Math.floor(Math.random() * 1e5), this.postMessage = y, this.remote = {}, this.callbacks = {}, this.remoteMethodsWaitPromise = new Promise(function(w) {
                b._resolveRemoteMethodsPromise = w;
              }), g(function() {
                return b.onMessageListener.apply(b, arguments);
              });
            }
            return a(D, [{
              key: "onMessageListener",
              value: function(g) {
                var v = this, b = g.data, w = this.options.allowedSenderOrigin;
                w && g.origin !== w && !h || (b.type === u ? this.popCallback(b.callId, b.success, b.result) : b.type === c ? this.callLocalApi(b.methodName, b.arguments).then(function(C) {
                  return v.responseOtherSide(b.callId, C);
                }).catch(function(C) {
                  return v.responseOtherSide(b.callId, C, !1);
                }) : b.type === o ? (this.setInterface(b.apiMethods), this.responseOtherSide(b.callId)) : b.type === f && this.callLocalServiceMethod(b.methodName, b.arguments).then(function(C) {
                  return v.responseOtherSide(b.callId, C);
                }).catch(function(C) {
                  return v.responseOtherSide(b.callId, C, !1);
                }));
              }
            }, {
              key: "postMessageToOtherSide",
              value: function(g) {
                this.postMessage(g, "*");
              }
              /**
                 * Sets remote interface methods
                 * @param remote - hash with keys of remote API methods. Values is ignored
                 */
            }, {
              key: "setInterface",
              value: function(g) {
                var v = this;
                this.remote = {}, g.forEach(function(b) {
                  return v.remote[b] = v.createMethodWrapper(b);
                }), this._resolveRemoteMethodsPromise();
              }
            }, {
              key: "setLocalApi",
              value: function(g) {
                var v = this;
                return new Promise(function(b, w) {
                  var C = v.registerCallback(b, w);
                  v.postMessageToOtherSide({
                    callId: C,
                    apiMethods: Object.keys(g),
                    type: o
                  });
                }).then(function() {
                  return v.localApi = g;
                });
              }
            }, {
              key: "setServiceMethods",
              value: function(g) {
                this.serviceMethods = g;
              }
              /**
                 * Calls local method
                 * @param methodName
                 * @param args
                 * @returns {Promise.<*>|string}
                 */
            }, {
              key: "callLocalApi",
              value: function(g, v) {
                var b;
                return Promise.resolve((b = this.localApi)[g].apply(b, l(v)));
              }
              /**
                 * Calls local method registered as "service method"
                 * @param methodName
                 * @param args
                 * @returns {Promise.<*>}
                 */
            }, {
              key: "callLocalServiceMethod",
              value: function(g, v) {
                var b;
                if (!this.serviceMethods[g])
                  throw new Error("Serivce method " + g + " is not registered");
                return Promise.resolve((b = this.serviceMethods)[g].apply(b, l(v)));
              }
              /**
                 * Wraps remote method with callback storing code
                 * @param methodName - method to wrap
                 * @returns {Function} - function to call as remote API interface
                 */
            }, {
              key: "createMethodWrapper",
              value: function(g) {
                var v = this;
                return function() {
                  for (var b = arguments.length, w = Array(b), C = 0; C < b; C++)
                    w[C] = arguments[C];
                  return v.callRemoteMethod.apply(v, [g].concat(w));
                };
              }
              /**
                 * Calls other side with arguments provided
                 * @param id
                 * @param methodName
                 * @param args
                 */
            }, {
              key: "callRemoteMethod",
              value: function(g) {
                for (var v = this, b = arguments.length, w = Array(b > 1 ? b - 1 : 0), C = 1; C < b; C++)
                  w[C - 1] = arguments[C];
                return new Promise(function(E, x) {
                  var F = v.registerCallback(E, x);
                  v.postMessageToOtherSide({
                    callId: F,
                    methodName: g,
                    type: c,
                    arguments: w
                  });
                });
              }
              /**
                 * Calls remote service method
                 * @param methodName
                 * @param args
                 * @returns {*}
                 */
            }, {
              key: "callRemoteServiceMethod",
              value: function(g) {
                for (var v = this, b = arguments.length, w = Array(b > 1 ? b - 1 : 0), C = 1; C < b; C++)
                  w[C - 1] = arguments[C];
                return new Promise(function(E, x) {
                  var F = v.registerCallback(E, x);
                  v.postMessageToOtherSide({
                    callId: F,
                    methodName: g,
                    type: f,
                    arguments: w
                  });
                });
              }
              /**
                 * Respond to remote call
                 * @param id - remote call ID
                 * @param result - result to pass to calling function
                 */
            }, {
              key: "responseOtherSide",
              value: function(g, v) {
                var b = this, w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                v instanceof Error && (v = [].concat(l(Object.keys(v)), ["message"]).reduce(function(E, x) {
                  return E[x] = v[x], E;
                }, {}));
                var C = function() {
                  return b.postMessage({
                    callId: g,
                    type: u,
                    success: w,
                    result: v
                  }, "*");
                };
                try {
                  C();
                } catch (E) {
                  console.error("Failed to post response, recovering...", E), E instanceof DOMException && (v = JSON.parse(JSON.stringify(v)), C());
                }
              }
              /**
                 * Stores callbacks to call later when remote call will be answered
                 * @param successCallback
                 * @param failureCallback
                 */
            }, {
              key: "registerCallback",
              value: function(g, v) {
                var b = (++this.incrementalID).toString();
                return this.callbacks[b] = { successCallback: g, failureCallback: v }, b;
              }
              /**
                 * Calls and delete stored callback
                 * @param id - call id
                 * @param success - was call successful
                 * @param result - result of remote call
                 */
            }, {
              key: "popCallback",
              value: function(g, v, b) {
                v ? this.callbacks[g].successCallback(b) : this.callbacks[g].failureCallback(b), delete this.callbacks[g];
              }
            }]), D;
          }();
          n.default = d;
        },
        /* 1 */
        /***/
        function(r, n) {
          r.exports = `/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TYPE_MESSAGE = exports.TYPE_MESSAGE = 'message';
var TYPE_RESPONSE = exports.TYPE_RESPONSE = 'response';
var TYPE_SET_INTERFACE = exports.TYPE_SET_INTERFACE = 'set-interface';
var TYPE_SERVICE_MESSAGE = exports.TYPE_SERVICE_MESSAGE = 'service-message';

var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

var defaultOptions = {
  //Will not affect IE11 because there sandboxed iframe has not 'null' origin
  //but base URL of iframe's src
  allowedSenderOrigin: undefined
};

var Connection = function () {
  function Connection(postMessage, registerOnMessageListener, options) {
    var _this = this;

    _classCallCheck(this, Connection);

    this.options = _extends({}, defaultOptions, options);
    //Random number between 0 and 100000
    this.incrementalID = Math.floor(Math.random() * 100000);

    this.postMessage = postMessage;
    this.remote = {};
    this.callbacks = {};

    this.remoteMethodsWaitPromise = new Promise(function (resolve) {
      _this._resolveRemoteMethodsPromise = resolve;
    });

    registerOnMessageListener(function () {
      return _this.onMessageListener.apply(_this, arguments);
    });
  }

  /**
     * Listens to remote messages. Calls local method if it is called outside or call stored callback if it is response.
     * @param e - onMessage event
     */


  _createClass(Connection, [{
    key: 'onMessageListener',
    value: function onMessageListener(e) {
      var _this2 = this;

      var data = e.data;

      var allowedSenderOrigin = this.options.allowedSenderOrigin;

      if (allowedSenderOrigin && e.origin !== allowedSenderOrigin && !isIE11) {
        return;
      }

      if (data.type === TYPE_RESPONSE) {
        this.popCallback(data.callId, data.success, data.result);
      } else if (data.type === TYPE_MESSAGE) {
        this.callLocalApi(data.methodName, data.arguments).then(function (res) {
          return _this2.responseOtherSide(data.callId, res);
        }).catch(function (err) {
          return _this2.responseOtherSide(data.callId, err, false);
        });
      } else if (data.type === TYPE_SET_INTERFACE) {
        this.setInterface(data.apiMethods);
        this.responseOtherSide(data.callId);
      } else if (data.type === TYPE_SERVICE_MESSAGE) {
        this.callLocalServiceMethod(data.methodName, data.arguments).then(function (res) {
          return _this2.responseOtherSide(data.callId, res);
        }).catch(function (err) {
          return _this2.responseOtherSide(data.callId, err, false);
        });
      }
    }
  }, {
    key: 'postMessageToOtherSide',
    value: function postMessageToOtherSide(dataToPost) {
      this.postMessage(dataToPost, '*');
    }

    /**
       * Sets remote interface methods
       * @param remote - hash with keys of remote API methods. Values is ignored
       */

  }, {
    key: 'setInterface',
    value: function setInterface(remoteMethods) {
      var _this3 = this;

      this.remote = {};

      remoteMethods.forEach(function (key) {
        return _this3.remote[key] = _this3.createMethodWrapper(key);
      });

      this._resolveRemoteMethodsPromise();
    }
  }, {
    key: 'setLocalApi',
    value: function setLocalApi(api) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var id = _this4.registerCallback(resolve, reject);
        _this4.postMessageToOtherSide({
          callId: id,
          apiMethods: Object.keys(api),
          type: TYPE_SET_INTERFACE
        });
      }).then(function () {
        return _this4.localApi = api;
      });
    }
  }, {
    key: 'setServiceMethods',
    value: function setServiceMethods(api) {
      this.serviceMethods = api;
    }

    /**
       * Calls local method
       * @param methodName
       * @param args
       * @returns {Promise.<*>|string}
       */

  }, {
    key: 'callLocalApi',
    value: function callLocalApi(methodName, args) {
      var _localApi;

      return Promise.resolve((_localApi = this.localApi)[methodName].apply(_localApi, _toConsumableArray(args)));
    }

    /**
       * Calls local method registered as "service method"
       * @param methodName
       * @param args
       * @returns {Promise.<*>}
       */

  }, {
    key: 'callLocalServiceMethod',
    value: function callLocalServiceMethod(methodName, args) {
      var _serviceMethods;

      if (!this.serviceMethods[methodName]) {
        throw new Error('Serivce method ' + methodName + ' is not registered');
      }
      return Promise.resolve((_serviceMethods = this.serviceMethods)[methodName].apply(_serviceMethods, _toConsumableArray(args)));
    }

    /**
       * Wraps remote method with callback storing code
       * @param methodName - method to wrap
       * @returns {Function} - function to call as remote API interface
       */

  }, {
    key: 'createMethodWrapper',
    value: function createMethodWrapper(methodName) {
      var _this5 = this;

      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _this5.callRemoteMethod.apply(_this5, [methodName].concat(args));
      };
    }

    /**
       * Calls other side with arguments provided
       * @param id
       * @param methodName
       * @param args
       */

  }, {
    key: 'callRemoteMethod',
    value: function callRemoteMethod(methodName) {
      var _this6 = this;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return new Promise(function (resolve, reject) {
        var id = _this6.registerCallback(resolve, reject);
        _this6.postMessageToOtherSide({
          callId: id,
          methodName: methodName,
          type: TYPE_MESSAGE,
          arguments: args
        });
      });
    }

    /**
       * Calls remote service method
       * @param methodName
       * @param args
       * @returns {*}
       */

  }, {
    key: 'callRemoteServiceMethod',
    value: function callRemoteServiceMethod(methodName) {
      var _this7 = this;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return new Promise(function (resolve, reject) {
        var id = _this7.registerCallback(resolve, reject);
        _this7.postMessageToOtherSide({
          callId: id,
          methodName: methodName,
          type: TYPE_SERVICE_MESSAGE,
          arguments: args
        });
      });
    }

    /**
       * Respond to remote call
       * @param id - remote call ID
       * @param result - result to pass to calling function
       */

  }, {
    key: 'responseOtherSide',
    value: function responseOtherSide(id, result) {
      var _this8 = this;

      var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (result instanceof Error) {
        // Error could be non-serializable, so we copy properties manually
        result = [].concat(_toConsumableArray(Object.keys(result)), ['message']).reduce(function (acc, it) {
          acc[it] = result[it];
          return acc;
        }, {});
      }

      var doPost = function doPost() {
        return _this8.postMessage({
          callId: id,
          type: TYPE_RESPONSE,
          success: success,
          result: result
        }, '*');
      };

      try {
        doPost();
      } catch (err) {
        console.error('Failed to post response, recovering...', err); // eslint-disable-line no-console
        if (err instanceof DOMException) {
          result = JSON.parse(JSON.stringify(result));
          doPost();
        }
      }
    }

    /**
       * Stores callbacks to call later when remote call will be answered
       * @param successCallback
       * @param failureCallback
       */

  }, {
    key: 'registerCallback',
    value: function registerCallback(successCallback, failureCallback) {
      var id = (++this.incrementalID).toString();
      this.callbacks[id] = { successCallback: successCallback, failureCallback: failureCallback };
      return id;
    }

    /**
       * Calls and delete stored callback
       * @param id - call id
       * @param success - was call successful
       * @param result - result of remote call
       */

  }, {
    key: 'popCallback',
    value: function popCallback(id, success, result) {
      if (success) {
        this.callbacks[id].successCallback(result);
      } else {
        this.callbacks[id].failureCallback(result);
      }
      delete this.callbacks[id];
    }
  }]);

  return Connection;
}();

exports.default = Connection;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _connection = __webpack_require__(0);

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Frame = function () {
  function Frame() {
    var _this = this;

    _classCallCheck(this, Frame);

    this.connection = new _connection2.default(window.parent.postMessage.bind(window.parent), function (listener) {
      window.addEventListener('message', listener);
    });

    this.connection.setServiceMethods({
      runCode: function runCode(code) {
        return _this.runCode(code);
      },
      importScript: function importScript(path) {
        return _this.importScript(path);
      },
      injectStyle: function injectStyle(style) {
        return _this.injectStyle(style);
      },
      importStyle: function importStyle(path) {
        return _this.importStyle(path);
      }
    });

    this.connection.callRemoteServiceMethod('iframeInitialized');
  }

  /**
     * Creates script tag with passed code and attaches it. Runs synchronous
     * @param code
     */


  _createClass(Frame, [{
    key: 'runCode',
    value: function runCode(code) {
      var scriptTag = document.createElement('script');
      scriptTag.innerHTML = code;
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    }
  }, {
    key: 'importScript',
    value: function importScript(scriptUrl) {
      var scriptTag = document.createElement('script');
      scriptTag.src = scriptUrl;
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
      return new Promise(function (resolve) {
        return scriptTag.onload = function () {
          return resolve();
        };
      });
    }
  }, {
    key: 'injectStyle',
    value: function injectStyle(style) {
      var styleTag = document.createElement('style');
      styleTag.innerHTML = style;
      document.getElementsByTagName('head')[0].appendChild(styleTag);
    }
  }, {
    key: 'importStyle',
    value: function importStyle(styleUrl) {
      var linkTag = document.createElement('link');
      linkTag.rel = 'stylesheet';
      linkTag.href = styleUrl;
      document.getElementsByTagName('head')[0].appendChild(linkTag);
    }
  }]);

  return Frame;
}();

var Websandbox = new Frame();
window.Websandbox = window.Websandbox || Websandbox;
module.exports = Websandbox; // eslint-disable-line

/***/ })
/******/ ]);
//# sourceMappingURL=compile-loader-file-name.js.map`;
        },
        ,
        /* 3 */
        /***/
        function(r, n, s) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.BaseOptions = void 0;
          var i = Object.assign || function(d) {
            for (var D = 1; D < arguments.length; D++) {
              var y = arguments[D];
              for (var g in y)
                Object.prototype.hasOwnProperty.call(y, g) && (d[g] = y[g]);
            }
            return d;
          }, a = /* @__PURE__ */ function() {
            function d(D, y) {
              for (var g = 0; g < y.length; g++) {
                var v = y[g];
                v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(D, v.key, v);
              }
            }
            return function(D, y, g) {
              return y && d(D.prototype, y), g && d(D, g), D;
            };
          }(), l = s(0), p = o(l), c = s(1), u = o(c);
          function o(d) {
            return d && d.__esModule ? d : { default: d };
          }
          function f(d, D) {
            if (!(d instanceof D))
              throw new TypeError("Cannot call a class as a function");
          }
          var h = n.BaseOptions = {
            frameContainer: "body",
            frameClassName: "websandbox__frame",
            frameSrc: null,
            frameContent: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body></body>
</html>
  `,
            codeToRunBeforeInit: null,
            initialStyles: null,
            baseUrl: null,
            allowPointerLock: !1,
            allowFullScreen: !1,
            sandboxAdditionalAttributes: ""
          }, m = function() {
            a(d, null, [{
              key: "create",
              /**
               * Creates sandbox instancea
               * @param {?Object} localApi Api of this side. Will be available for sandboxed code as remoteApi
               * @param {?SandboxOptions} options Options of created sandbox
               */
              value: function(y) {
                var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return new d(y, i(h, g));
              }
              /**
               * {Constructor}
               * @param {?Object} localApi
               * @param {?SandboxOptions} options
               */
            }]);
            function d(D, y) {
              var g = this;
              f(this, d), this.options = y, this.iframe = this.createIframe(), this.promise = new Promise(function(v) {
                g.connection = new p.default(g.iframe.contentWindow.postMessage.bind(g.iframe.contentWindow), function(b) {
                  var w = function(E) {
                    if (E.source === g.iframe.contentWindow)
                      return b(E);
                  };
                  window.addEventListener("message", w), g.removeMessageListener = function() {
                    return window.removeEventListener("message", w);
                  };
                }, { allowedSenderOrigin: "null" }), g.connection.setServiceMethods({
                  iframeInitialized: function() {
                    return g.connection.setLocalApi(D).then(function() {
                      return v(g);
                    });
                  }
                });
              });
            }
            return a(d, [{
              key: "_prepareFrameContent",
              value: function(y) {
                var g = y.frameContent.replace("</head>", "<script>" + u.default + `<\/script>
</head>`);
                return y.initialStyles && (g = g.replace("</head>", "<style>" + y.initialStyles + `</style>
</head>`)), y.baseUrl && (g = g.replace("<head>", `<head>
<base href="` + y.baseUrl + '"/>')), y.codeToRunBeforeInit && (g = g.replace("<head>", `<head>
<script>` + y.codeToRunBeforeInit + "<\/script>")), g;
              }
            }, {
              key: "createIframe",
              value: function() {
                var y = this.options.frameContainer, g = typeof y == "string" ? document.querySelector(y) : y;
                if (!g)
                  throw new Error("Websandbox: Cannot find container for sandbox " + g);
                var v = document.createElement("iframe");
                if (v.sandbox = "allow-scripts " + this.options.sandboxAdditionalAttributes, v.className = this.options.frameClassName, this.options.allowFullScreen && (v.allowfullscreen = "true"), this.options.frameSrc)
                  return v.src = this.options.frameSrc, g.appendChild(v), v;
                if (this.options.frameContent.indexOf("<head>") < 0)
                  throw new Error('Websandbox: iFrame content must have "<head>" tag.');
                return v.setAttribute("srcdoc", this._prepareFrameContent(this.options)), g.appendChild(v), v;
              }
            }, {
              key: "destroy",
              value: function() {
                this.iframe.remove(), this.removeMessageListener();
              }
            }, {
              key: "_runCode",
              value: function(y) {
                return this.connection.callRemoteServiceMethod("runCode", y);
              }
            }, {
              key: "_runFunction",
              value: function(y) {
                return this._runCode("(" + y.toString() + ")()");
              }
            }, {
              key: "run",
              value: function(y) {
                return y.name ? this._runFunction(y) : this._runCode(y);
              }
            }, {
              key: "importScript",
              value: function(y) {
                return this.connection.callRemoteServiceMethod("importScript", y);
              }
            }, {
              key: "injectStyle",
              value: function(y) {
                return this.connection.callRemoteServiceMethod("injectStyle", y);
              }
            }]), d;
          }();
          n.default = m;
        }
        /******/
      ])
    );
  });
})(ta);
var bc = ta.exports;
const Cc = /* @__PURE__ */ ec(bc), Ec = ({ output: e }) => {
  const [t, r] = gn(e);
  return on(() => r(e), [e]), /* @__PURE__ */ A.jsxs("div", { className: "debugger-pane", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "debugger-title-bar", children: [
      /* @__PURE__ */ A.jsx("div", { className: "debugger-title", children: "Console" }),
      /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => r(void 0), children: "Clear console" })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "debugger-view", children: t == null ? void 0 : t.map((n) => n.join(", ")).join(`
`) })
  ] });
}, kc = ({
  contentFrameHeight: e = "1fr",
  debuggerOutput: t,
  children: r
}) => {
  const { config: n } = Ne();
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: "debugger-wrapper",
      style: {
        gridTemplateRows: n.showDebug ? `${e} 1fr` : "auto"
      },
      children: [
        /* @__PURE__ */ A.jsx("div", { className: "debugger-wrapper-child", children: r }),
        n.showDebug && /* @__PURE__ */ A.jsx(Ec, { output: t })
      ]
    }
  );
}, xc = ({ file: e }) => {
  const [t, r] = gn([]), n = () => {
    const s = {
      consoleLog: (...i) => (r((a) => [...a, i]), Promise.resolve("messaged"))
    };
    for (let i of document.getElementsByClassName("js-preview-output"))
      i.innerHTML = "";
    Cc.create(s, {
      frameContainer: ".js-preview-output"
    }).promise.then(function(i) {
      r([]), i.run(
        `
        console.log = Websandbox.connection.remote.consoleLog;
        ${e.contents}
      `
      );
    });
  };
  return /* @__PURE__ */ A.jsx(kc, { contentFrameHeight: "1fr", debuggerOutput: t, children: /* @__PURE__ */ A.jsxs("div", { className: "js-preview-container", children: [
    /* @__PURE__ */ A.jsx("div", { className: "js-preview-output", children: "pending..." }),
    /* @__PURE__ */ A.jsx("div", { className: "button-bar", children: /* @__PURE__ */ A.jsx("button", { onClick: n, children: "Run" }) })
  ] }) });
}, _c = (e) => typeof e == "string" ? e : e instanceof Error ? e.message : "", Fc = ({ file: e }) => {
  let t = "";
  try {
    t = JSON.stringify(JSON.parse(e.contents), void 0, 2);
  } catch (r) {
    const n = _c(r);
    return /* @__PURE__ */ A.jsxs("div", { className: "json-preview", children: [
      "Cannot display json: invalid format.",
      n
    ] });
  }
  return /* @__PURE__ */ A.jsx("div", { className: "json-preview", children: t });
}, Sc = ["html", "css", "js", "json"], k1 = (e, t = Sc) => new Set(t).has(e), Ac = ["html", "js", "json"], Mr = (e, t = Ac) => new Set(t).has(e);
var Tc = Object.create, vn = Object.defineProperty, Bc = Object.getOwnPropertyDescriptor, $c = Object.getOwnPropertyNames, Oc = Object.getPrototypeOf, Lc = Object.prototype.hasOwnProperty, Nc = (e, t) => () => (e && (t = e(e = 0)), t), Dn = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), yn = (e, t) => {
  for (var r in t)
    vn(e, r, { get: t[r], enumerable: !0 });
}, ra = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s of $c(t))
      !Lc.call(e, s) && s !== r && vn(e, s, { get: () => t[s], enumerable: !(n = Bc(t, s)) || n.enumerable });
  return e;
}, _r = (e, t, r) => (r = e != null ? Tc(Oc(e)) : {}, ra(t || !e || !e.__esModule ? vn(r, "default", { value: e, enumerable: !0 }) : r, e)), Pc = (e) => ra(vn({}, "__esModule", { value: !0 }), e), Ic = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, Hi = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, or = (e, t, r) => (Ic(e, t, "access private method"), r), jc = Dn((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
  function t() {
  }
  t.prototype = { diff: function(s, i) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = a.callback;
    typeof a == "function" && (l = a, a = {}), this.options = a;
    var p = this;
    function c(g) {
      return l ? (setTimeout(function() {
        l(void 0, g);
      }, 0), !0) : g;
    }
    s = this.castInput(s), i = this.castInput(i), s = this.removeEmpty(this.tokenize(s)), i = this.removeEmpty(this.tokenize(i));
    var u = i.length, o = s.length, f = 1, h = u + o;
    a.maxEditLength && (h = Math.min(h, a.maxEditLength));
    var m = [{ newPos: -1, components: [] }], d = this.extractCommon(m[0], i, s, 0);
    if (m[0].newPos + 1 >= u && d + 1 >= o)
      return c([{ value: this.join(i), count: i.length }]);
    function D() {
      for (var g = -1 * f; g <= f; g += 2) {
        var v = void 0, b = m[g - 1], w = m[g + 1], C = (w ? w.newPos : 0) - g;
        b && (m[g - 1] = void 0);
        var E = b && b.newPos + 1 < u, x = w && 0 <= C && C < o;
        if (!E && !x) {
          m[g] = void 0;
          continue;
        }
        if (!E || x && b.newPos < w.newPos ? (v = n(w), p.pushComponent(v.components, void 0, !0)) : (v = b, v.newPos++, p.pushComponent(v.components, !0, void 0)), C = p.extractCommon(v, i, s, g), v.newPos + 1 >= u && C + 1 >= o)
          return c(r(p, v.components, i, s, p.useLongestToken));
        m[g] = v;
      }
      f++;
    }
    if (l)
      (function g() {
        setTimeout(function() {
          if (f > h)
            return l();
          D() || g();
        }, 0);
      })();
    else
      for (; f <= h; ) {
        var y = D();
        if (y)
          return y;
      }
  }, pushComponent: function(s, i, a) {
    var l = s[s.length - 1];
    l && l.added === i && l.removed === a ? s[s.length - 1] = { count: l.count + 1, added: i, removed: a } : s.push({ count: 1, added: i, removed: a });
  }, extractCommon: function(s, i, a, l) {
    for (var p = i.length, c = a.length, u = s.newPos, o = u - l, f = 0; u + 1 < p && o + 1 < c && this.equals(i[u + 1], a[o + 1]); )
      u++, o++, f++;
    return f && s.components.push({ count: f }), s.newPos = u, o;
  }, equals: function(s, i) {
    return this.options.comparator ? this.options.comparator(s, i) : s === i || this.options.ignoreCase && s.toLowerCase() === i.toLowerCase();
  }, removeEmpty: function(s) {
    for (var i = [], a = 0; a < s.length; a++)
      s[a] && i.push(s[a]);
    return i;
  }, castInput: function(s) {
    return s;
  }, tokenize: function(s) {
    return s.split("");
  }, join: function(s) {
    return s.join("");
  } };
  function r(s, i, a, l, p) {
    for (var c = 0, u = i.length, o = 0, f = 0; c < u; c++) {
      var h = i[c];
      if (h.removed) {
        if (h.value = s.join(l.slice(f, f + h.count)), f += h.count, c && i[c - 1].added) {
          var m = i[c - 1];
          i[c - 1] = i[c], i[c] = m;
        }
      } else {
        if (!h.added && p) {
          var d = a.slice(o, o + h.count);
          d = d.map(function(y, g) {
            var v = l[f + g];
            return v.length > y.length ? v : y;
          }), h.value = s.join(d);
        } else
          h.value = s.join(a.slice(o, o + h.count));
        o += h.count, h.added || (f += h.count);
      }
    }
    var D = i[u - 1];
    return u > 1 && typeof D.value == "string" && (D.added || D.removed) && s.equals("", D.value) && (i[u - 2].value += D.value, i.pop()), i;
  }
  function n(s) {
    return { newPos: s.newPos, components: s.components.slice(0) };
  }
}), Rc = Dn((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.diffArrays = s, e.arrayDiff = void 0;
  var t = r(jc());
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = new t.default();
  e.arrayDiff = n, n.tokenize = function(i) {
    return i.slice();
  }, n.join = n.removeEmpty = function(i) {
    return i;
  };
  function s(i, a, l) {
    return n.diff(i, a, l);
  }
}), wn = Dn((e, t) => {
  var r = new Proxy(String, { get: () => r });
  t.exports = r;
}), na = {};
yn(na, { default: () => ia, shouldHighlight: () => sa });
var sa, ia, Mc = Nc(() => {
  sa = () => !1, ia = String;
}), qc = Dn((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = o, e.default = f;
  var t = (Mc(), Pc(na)), r = s(wn(), !0);
  function n(h) {
    if (typeof WeakMap != "function")
      return null;
    var m = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (n = function(D) {
      return D ? d : m;
    })(h);
  }
  function s(h, m) {
    if (!m && h && h.__esModule)
      return h;
    if (h === null || typeof h != "object" && typeof h != "function")
      return { default: h };
    var d = n(m);
    if (d && d.has(h))
      return d.get(h);
    var D = { __proto__: null }, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var g in h)
      if (g !== "default" && Object.prototype.hasOwnProperty.call(h, g)) {
        var v = y ? Object.getOwnPropertyDescriptor(h, g) : null;
        v && (v.get || v.set) ? Object.defineProperty(D, g, v) : D[g] = h[g];
      }
    return D.default = h, d && d.set(h, D), D;
  }
  var i;
  function a(h) {
    return h ? (i != null || (i = new r.default.constructor({ enabled: !0, level: 1 })), i) : r.default;
  }
  var l = !1;
  function p(h) {
    return { gutter: h.grey, marker: h.red.bold, message: h.red.bold };
  }
  var c = /\r\n|[\n\r\u2028\u2029]/;
  function u(h, m, d) {
    let D = Object.assign({ column: 0, line: -1 }, h.start), y = Object.assign({}, D, h.end), { linesAbove: g = 2, linesBelow: v = 3 } = d || {}, b = D.line, w = D.column, C = y.line, E = y.column, x = Math.max(b - (g + 1), 0), F = Math.min(m.length, C + v);
    b === -1 && (x = 0), C === -1 && (F = m.length);
    let B = C - b, N = {};
    if (B)
      for (let M = 0; M <= B; M++) {
        let R = M + b;
        if (!w)
          N[R] = !0;
        else if (M === 0) {
          let I = m[R - 1].length;
          N[R] = [w, I - w + 1];
        } else if (M === B)
          N[R] = [0, E];
        else {
          let I = m[R - M].length;
          N[R] = [0, I];
        }
      }
    else
      w === E ? w ? N[b] = [w, 0] : N[b] = !0 : N[b] = [w, E - w];
    return { start: x, end: F, markerLines: N };
  }
  function o(h, m, d = {}) {
    let D = (d.highlightCode || d.forceColor) && (0, t.shouldHighlight)(d), y = a(d.forceColor), g = p(y), v = (N, M) => D ? N(M) : M, b = h.split(c), { start: w, end: C, markerLines: E } = u(m, b, d), x = m.start && typeof m.start.column == "number", F = String(C).length, B = (D ? (0, t.default)(h, d) : h).split(c, C).slice(w, C).map((N, M) => {
      let R = w + 1 + M, I = ` ${` ${R}`.slice(-F)} |`, j = E[R], O = !E[R + 1];
      if (j) {
        let Y = "";
        if (Array.isArray(j)) {
          let pe = N.slice(0, Math.max(j[0] - 1, 0)).replace(/[^\t]/g, " "), ge = j[1] || 1;
          Y = [`
 `, v(g.gutter, I.replace(/\d/g, " ")), " ", pe, v(g.marker, "^").repeat(ge)].join(""), O && d.message && (Y += " " + v(g.message, d.message));
        }
        return [v(g.marker, ">"), v(g.gutter, I), N.length > 0 ? ` ${N}` : "", Y].join("");
      } else
        return ` ${v(g.gutter, I)}${N.length > 0 ? ` ${N}` : ""}`;
    }).join(`
`);
    return d.message && !x && (B = `${" ".repeat(F + 1)}${d.message}
${B}`), D ? y.reset(B) : B;
  }
  function f(h, m, d, D = {}) {
    if (!l) {
      l = !0;
      let y = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      {
        let g = new Error(y);
        g.name = "DeprecationWarning", console.warn(new Error(y));
      }
    }
    return d = Math.max(d, 0), o(h, { start: { column: d, line: m } }, D);
  }
}), oa = {};
yn(oa, { __debug: () => jd, check: () => Pd, doc: () => Ua, format: () => Ga, formatWithCursor: () => za, getSupportInfo: () => Id, util: () => Va, version: () => hd });
var Wc = (e, t, r, n) => {
  if (!(e && t == null))
    return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, bn = Wc, Hc = _r(Rc(), 1);
function Uc(e) {
  let t = e.indexOf("\r");
  return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function Is(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function aa(e, t) {
  let r;
  switch (t) {
    case `
`:
      r = /\n/g;
      break;
    case "\r":
      r = /\r/g;
      break;
    case `\r
`:
      r = /\r\n/g;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function Vc(e) {
  return bn(!1, e, /\r\n?/g, `
`);
}
var Bt = "string", ht = "array", $t = "cursor", Ye = "indent", Je = "align", Ke = "trim", fe = "group", Ae = "fill", we = "if-break", Xe = "indent-if-break", Qe = "line-suffix", Ze = "line-suffix-boundary", oe = "line", He = "label", Te = "break-parent", ua = /* @__PURE__ */ new Set([$t, Ye, Je, Ke, fe, Ae, we, Xe, Qe, Ze, oe, He, Te]);
function zc(e) {
  if (typeof e == "string")
    return Bt;
  if (Array.isArray(e))
    return ht;
  if (!e)
    return;
  let { type: t } = e;
  if (ua.has(t))
    return t;
}
var Ot = zc, Gc = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Yc(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object")
    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Ot(e))
    throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]")
    return `Unexpected doc '${r}'.`;
  let n = Gc([...ua].map((s) => `'${s}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Jc = class extends Error {
  constructor(r) {
    super(Yc(r));
    at(this, "name", "InvalidDocError");
    this.doc = r;
  }
}, Xt = Jc, Ui = {};
function Kc(e, t, r, n) {
  let s = [e];
  for (; s.length > 0; ) {
    let i = s.pop();
    if (i === Ui) {
      r(s.pop());
      continue;
    }
    r && s.push(i, Ui);
    let a = Ot(i);
    if (!a)
      throw new Xt(i);
    if ((t == null ? void 0 : t(i)) !== !1)
      switch (a) {
        case ht:
        case Ae: {
          let l = a === ht ? i : i.parts;
          for (let p = l.length, c = p - 1; c >= 0; --c)
            s.push(l[c]);
          break;
        }
        case we:
          s.push(i.flatContents, i.breakContents);
          break;
        case fe:
          if (n && i.expandedStates)
            for (let l = i.expandedStates.length, p = l - 1; p >= 0; --p)
              s.push(i.expandedStates[p]);
          else
            s.push(i.contents);
          break;
        case Je:
        case Ye:
        case Xe:
        case He:
        case Qe:
          s.push(i.contents);
          break;
        case Bt:
        case $t:
        case Ke:
        case Ze:
        case oe:
        case Te:
          break;
        default:
          throw new Xt(i);
      }
  }
}
var js = Kc, Xc = () => {
}, Qc = Xc;
function an(e) {
  return { type: Ye, contents: e };
}
function Qt(e, t) {
  return { type: Je, contents: t, n: e };
}
function la(e, t = {}) {
  return Qc(t.expandedStates), { type: fe, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Zc(e) {
  return Qt(Number.NEGATIVE_INFINITY, e);
}
function ep(e) {
  return Qt({ type: "root" }, e);
}
function tp(e) {
  return Qt(-1, e);
}
function rp(e, t) {
  return la(e[0], { ...t, expandedStates: e });
}
function ca(e) {
  return { type: Ae, parts: e };
}
function np(e, t = "", r = {}) {
  return { type: we, breakContents: e, flatContents: t, groupId: r.groupId };
}
function sp(e, t) {
  return { type: Xe, contents: e, groupId: t.groupId, negate: t.negate };
}
function vs(e) {
  return { type: Qe, contents: e };
}
var ip = { type: Ze }, Cn = { type: Te }, op = { type: Ke }, Rs = { type: oe, hard: !0 }, pa = { type: oe, hard: !0, literal: !0 }, ha = { type: oe }, ap = { type: oe, soft: !0 }, _t = [Rs, Cn], da = [pa, Cn], Ds = { type: $t };
function fa(e, t) {
  let r = [];
  for (let n = 0; n < t.length; n++)
    n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function ma(e, t, r) {
  let n = e;
  if (t > 0) {
    for (let s = 0; s < Math.floor(t / r); ++s)
      n = an(n);
    n = Qt(t % r, n), n = Qt(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function up(e, t) {
  return e ? { type: He, label: e, contents: t } : t;
}
function ze(e) {
  var t;
  if (!e)
    return "";
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e)
      if (Array.isArray(n))
        r.push(...ze(n));
      else {
        let s = ze(n);
        s !== "" && r.push(s);
      }
    return r;
  }
  return e.type === we ? { ...e, breakContents: ze(e.breakContents), flatContents: ze(e.flatContents) } : e.type === fe ? { ...e, contents: ze(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(ze) } : e.type === Ae ? { type: "fill", parts: e.parts.map(ze) } : e.contents ? { ...e, contents: ze(e.contents) } : e;
}
function lp(e) {
  let t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return n(ze(e));
  function n(i, a, l) {
    var p, c;
    if (typeof i == "string")
      return JSON.stringify(i);
    if (Array.isArray(i)) {
      let u = i.map(n).filter(Boolean);
      return u.length === 1 ? u[0] : `[${u.join(", ")}]`;
    }
    if (i.type === oe) {
      let u = ((p = l == null ? void 0 : l[a + 1]) == null ? void 0 : p.type) === Te;
      return i.literal ? u ? "literalline" : "literallineWithoutBreakParent" : i.hard ? u ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
    }
    if (i.type === Te)
      return ((c = l == null ? void 0 : l[a - 1]) == null ? void 0 : c.type) === oe && l[a - 1].hard ? void 0 : "breakParent";
    if (i.type === Ke)
      return "trim";
    if (i.type === Ye)
      return "indent(" + n(i.contents) + ")";
    if (i.type === Je)
      return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(i.contents) + ")" : i.n < 0 ? "dedent(" + n(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + n(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + n(i.contents) + ")";
    if (i.type === we)
      return "ifBreak(" + n(i.breakContents) + (i.flatContents ? ", " + n(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${s(i.groupId)} }` : "") + ")";
    if (i.type === Xe) {
      let u = [];
      i.negate && u.push("negate: true"), i.groupId && u.push(`groupId: ${s(i.groupId)}`);
      let o = u.length > 0 ? `, { ${u.join(", ")} }` : "";
      return `indentIfBreak(${n(i.contents)}${o})`;
    }
    if (i.type === fe) {
      let u = [];
      i.break && i.break !== "propagated" && u.push("shouldBreak: true"), i.id && u.push(`id: ${s(i.id)}`);
      let o = u.length > 0 ? `, { ${u.join(", ")} }` : "";
      return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((f) => n(f)).join(",")}]${o})` : `group(${n(i.contents)}${o})`;
    }
    if (i.type === Ae)
      return `fill([${i.parts.map((u) => n(u)).join(", ")}])`;
    if (i.type === Qe)
      return "lineSuffix(" + n(i.contents) + ")";
    if (i.type === Ze)
      return "lineSuffixBoundary";
    if (i.type === He)
      return `label(${JSON.stringify(i.label)}, ${n(i.contents)})`;
    throw new Error("Unknown doc type " + i.type);
  }
  function s(i) {
    if (typeof i != "symbol")
      return JSON.stringify(String(i));
    if (i in t)
      return t[i];
    let a = i.description || "symbol";
    for (let l = 0; ; l++) {
      let p = a + (l > 0 ? ` #${l}` : "");
      if (!r.has(p))
        return r.add(p), t[i] = `Symbol.for(${JSON.stringify(p)})`;
    }
  }
}
var cp = (e, t, r) => {
  if (!(e && t == null))
    return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, re = cp, pp = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function hp(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function dp(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var fp = (e) => !(hp(e) || dp(e)), mp = /[^\x20-\x7F]/;
function gp(e) {
  if (!e)
    return 0;
  if (!mp.test(e))
    return e.length;
  e = e.replace(pp(), "  ");
  let t = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += fp(n) ? 1 : 2);
  }
  return t;
}
var Ms = gp, vp = (e) => {
  if (Array.isArray(e))
    return e;
  if (e.type !== Ae)
    throw new Error(`Expect doc to be 'array' or '${Ae}'.`);
  return e.parts;
};
function En(e, t) {
  if (typeof e == "string")
    return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(i) {
    if (r.has(i))
      return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (Ot(i)) {
      case ht:
        return t(i.map(n));
      case Ae:
        return t({ ...i, parts: i.parts.map(n) });
      case we:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case fe: {
        let { expandedStates: a, contents: l } = i;
        return a ? (a = a.map(n), l = a[0]) : l = n(l), t({ ...i, contents: l, expandedStates: a });
      }
      case Je:
      case Ye:
      case Xe:
      case He:
      case Qe:
        return t({ ...i, contents: n(i.contents) });
      case Bt:
      case $t:
      case Ke:
      case Ze:
      case oe:
      case Te:
        return t(i);
      default:
        throw new Xt(i);
    }
  }
}
function qs(e, t, r) {
  let n = r, s = !1;
  function i(a) {
    if (s)
      return !1;
    let l = t(a);
    l !== void 0 && (s = !0, n = l);
  }
  return js(e, i), n;
}
function Dp(e) {
  if (e.type === fe && e.break || e.type === oe && e.hard || e.type === Te)
    return !0;
}
function yp(e) {
  return qs(e, Dp, !1);
}
function Vi(e) {
  if (e.length > 0) {
    let t = re(!1, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function wp(e) {
  let t = /* @__PURE__ */ new Set(), r = [];
  function n(i) {
    if (i.type === Te && Vi(r), i.type === fe) {
      if (r.push(i), t.has(i))
        return !1;
      t.add(i);
    }
  }
  function s(i) {
    i.type === fe && r.pop().break && Vi(r);
  }
  js(e, n, s, !0);
}
function bp(e) {
  return e.type === oe && !e.hard ? e.soft ? "" : " " : e.type === we ? e.flatContents : e;
}
function Cp(e) {
  return En(e, bp);
}
function zi(e) {
  for (e = [...e]; e.length >= 2 && re(!1, e, -2).type === oe && re(!1, e, -1).type === Te; )
    e.length -= 2;
  if (e.length > 0) {
    let t = mr(re(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function mr(e) {
  switch (Ot(e)) {
    case Je:
    case Ye:
    case Xe:
    case fe:
    case Qe:
    case He: {
      let t = mr(e.contents);
      return { ...e, contents: t };
    }
    case we:
      return { ...e, breakContents: mr(e.breakContents), flatContents: mr(e.flatContents) };
    case Ae:
      return { ...e, parts: zi(e.parts) };
    case ht:
      return zi(e);
    case Bt:
      return e.replace(/[\n\r]*$/, "");
    case $t:
    case Ke:
    case Ze:
    case oe:
    case Te:
      break;
    default:
      throw new Xt(e);
  }
  return e;
}
function ga(e) {
  return mr(kp(e));
}
function Ep(e) {
  switch (Ot(e)) {
    case Ae:
      if (e.parts.every((t) => t === ""))
        return "";
      break;
    case fe:
      if (!e.contents && !e.id && !e.break && !e.expandedStates)
        return "";
      if (e.contents.type === fe && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates)
        return e.contents;
      break;
    case Je:
    case Ye:
    case Xe:
    case Qe:
      if (!e.contents)
        return "";
      break;
    case we:
      if (!e.flatContents && !e.breakContents)
        return "";
      break;
    case ht: {
      let t = [];
      for (let r of e) {
        if (!r)
          continue;
        let [n, ...s] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof re(!1, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...s);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Bt:
    case $t:
    case Ke:
    case Ze:
    case oe:
    case He:
    case Te:
      break;
    default:
      throw new Xt(e);
  }
  return e;
}
function kp(e) {
  return En(e, (t) => Ep(t));
}
function xp(e, t = da) {
  return En(e, (r) => typeof r == "string" ? fa(t, r.split(`
`)) : r);
}
function _p(e) {
  if (e.type === oe)
    return !0;
}
function Fp(e) {
  return qs(e, _p, !1);
}
function va(e, t) {
  return e.type === He ? { ...e, contents: t(e.contents) } : t(e);
}
var de = Symbol("MODE_BREAK"), Me = Symbol("MODE_FLAT"), gr = Symbol("cursor");
function Da() {
  return { value: "", length: 0, queue: [] };
}
function Sp(e, t) {
  return ys(e, { type: "indent" }, t);
}
function Ap(e, t, r) {
  return t === Number.NEGATIVE_INFINITY ? e.root || Da() : t < 0 ? ys(e, { type: "dedent" }, r) : t ? t.type === "root" ? { ...e, root: e } : ys(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r) : e;
}
function ys(e, t, r) {
  let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], s = "", i = 0, a = 0, l = 0;
  for (let m of n)
    switch (m.type) {
      case "indent":
        u(), r.useTabs ? p(1) : c(r.tabWidth);
        break;
      case "stringAlign":
        u(), s += m.n, i += m.n.length;
        break;
      case "numberAlign":
        a += 1, l += m.n;
        break;
      default:
        throw new Error(`Unexpected type '${m.type}'`);
    }
  return f(), { ...e, value: s, length: i, queue: n };
  function p(m) {
    s += "	".repeat(m), i += r.tabWidth * m;
  }
  function c(m) {
    s += " ".repeat(m), i += m;
  }
  function u() {
    r.useTabs ? o() : f();
  }
  function o() {
    a > 0 && p(a), h();
  }
  function f() {
    l > 0 && c(l), h();
  }
  function h() {
    a = 0, l = 0;
  }
}
function ws(e) {
  let t = 0, r = 0, n = e.length;
  e:
    for (; n--; ) {
      let s = e[n];
      if (s === gr) {
        r++;
        continue;
      }
      for (let i = s.length - 1; i >= 0; i--) {
        let a = s[i];
        if (a === " " || a === "	")
          t++;
        else {
          e[n] = s.slice(0, i + 1);
          break e;
        }
      }
    }
  if (t > 0 || r > 0)
    for (e.length = n + 1; r-- > 0; )
      e.push(gr);
  return t;
}
function qr(e, t, r, n, s, i) {
  if (r === Number.POSITIVE_INFINITY)
    return !0;
  let a = t.length, l = [e], p = [];
  for (; r >= 0; ) {
    if (l.length === 0) {
      if (a === 0)
        return !0;
      l.push(t[--a]);
      continue;
    }
    let { mode: c, doc: u } = l.pop();
    switch (Ot(u)) {
      case Bt:
        p.push(u), r -= Ms(u);
        break;
      case ht:
      case Ae: {
        let o = vp(u);
        for (let f = o.length - 1; f >= 0; f--)
          l.push({ mode: c, doc: o[f] });
        break;
      }
      case Ye:
      case Je:
      case Xe:
      case He:
        l.push({ mode: c, doc: u.contents });
        break;
      case Ke:
        r += ws(p);
        break;
      case fe: {
        if (i && u.break)
          return !1;
        let o = u.break ? de : c, f = u.expandedStates && o === de ? re(!1, u.expandedStates, -1) : u.contents;
        l.push({ mode: o, doc: f });
        break;
      }
      case we: {
        let o = (u.groupId ? s[u.groupId] || Me : c) === de ? u.breakContents : u.flatContents;
        o && l.push({ mode: c, doc: o });
        break;
      }
      case oe:
        if (c === de || u.hard)
          return !0;
        u.soft || (p.push(" "), r--);
        break;
      case Qe:
        n = !0;
        break;
      case Ze:
        if (n)
          return !1;
        break;
    }
  }
  return !1;
}
function kn(e, t) {
  let r = {}, n = t.printWidth, s = Is(t.endOfLine), i = 0, a = [{ ind: Da(), mode: de, doc: e }], l = [], p = !1, c = [], u = 0;
  for (wp(e); a.length > 0; ) {
    let { ind: f, mode: h, doc: m } = a.pop();
    switch (Ot(m)) {
      case Bt: {
        let d = s !== `
` ? bn(!1, m, `
`, s) : m;
        l.push(d), a.length > 0 && (i += Ms(d));
        break;
      }
      case ht:
        for (let d = m.length - 1; d >= 0; d--)
          a.push({ ind: f, mode: h, doc: m[d] });
        break;
      case $t:
        if (u >= 2)
          throw new Error("There are too many 'cursor' in doc.");
        l.push(gr), u++;
        break;
      case Ye:
        a.push({ ind: Sp(f, t), mode: h, doc: m.contents });
        break;
      case Je:
        a.push({ ind: Ap(f, m.n, t), mode: h, doc: m.contents });
        break;
      case Ke:
        i -= ws(l);
        break;
      case fe:
        switch (h) {
          case Me:
            if (!p) {
              a.push({ ind: f, mode: m.break ? de : Me, doc: m.contents });
              break;
            }
          case de: {
            p = !1;
            let d = { ind: f, mode: Me, doc: m.contents }, D = n - i, y = c.length > 0;
            if (!m.break && qr(d, a, D, y, r))
              a.push(d);
            else if (m.expandedStates) {
              let g = re(!1, m.expandedStates, -1);
              if (m.break) {
                a.push({ ind: f, mode: de, doc: g });
                break;
              } else
                for (let v = 1; v < m.expandedStates.length + 1; v++)
                  if (v >= m.expandedStates.length) {
                    a.push({ ind: f, mode: de, doc: g });
                    break;
                  } else {
                    let b = m.expandedStates[v], w = { ind: f, mode: Me, doc: b };
                    if (qr(w, a, D, y, r)) {
                      a.push(w);
                      break;
                    }
                  }
            } else
              a.push({ ind: f, mode: de, doc: m.contents });
            break;
          }
        }
        m.id && (r[m.id] = re(!1, a, -1).mode);
        break;
      case Ae: {
        let d = n - i, { parts: D } = m;
        if (D.length === 0)
          break;
        let [y, g] = D, v = { ind: f, mode: Me, doc: y }, b = { ind: f, mode: de, doc: y }, w = qr(v, [], d, c.length > 0, r, !0);
        if (D.length === 1) {
          w ? a.push(v) : a.push(b);
          break;
        }
        let C = { ind: f, mode: Me, doc: g }, E = { ind: f, mode: de, doc: g };
        if (D.length === 2) {
          w ? a.push(C, v) : a.push(E, b);
          break;
        }
        D.splice(0, 2);
        let x = { ind: f, mode: h, doc: ca(D) }, F = D[0];
        qr({ ind: f, mode: Me, doc: [y, g, F] }, [], d, c.length > 0, r, !0) ? a.push(x, C, v) : w ? a.push(x, E, v) : a.push(x, E, b);
        break;
      }
      case we:
      case Xe: {
        let d = m.groupId ? r[m.groupId] : h;
        if (d === de) {
          let D = m.type === we ? m.breakContents : m.negate ? m.contents : an(m.contents);
          D && a.push({ ind: f, mode: h, doc: D });
        }
        if (d === Me) {
          let D = m.type === we ? m.flatContents : m.negate ? an(m.contents) : m.contents;
          D && a.push({ ind: f, mode: h, doc: D });
        }
        break;
      }
      case Qe:
        c.push({ ind: f, mode: h, doc: m.contents });
        break;
      case Ze:
        c.length > 0 && a.push({ ind: f, mode: h, doc: Rs });
        break;
      case oe:
        switch (h) {
          case Me:
            if (m.hard)
              p = !0;
            else {
              m.soft || (l.push(" "), i += 1);
              break;
            }
          case de:
            if (c.length > 0) {
              a.push({ ind: f, mode: h, doc: m }, ...c.reverse()), c.length = 0;
              break;
            }
            m.literal ? f.root ? (l.push(s, f.root.value), i = f.root.length) : (l.push(s), i = 0) : (i -= ws(l), l.push(s + f.value), i = f.length);
            break;
        }
        break;
      case He:
        a.push({ ind: f, mode: h, doc: m.contents });
        break;
      case Te:
        break;
      default:
        throw new Xt(m);
    }
    a.length === 0 && c.length > 0 && (a.push(...c.reverse()), c.length = 0);
  }
  let o = l.indexOf(gr);
  if (o !== -1) {
    let f = l.indexOf(gr, o + 1), h = l.slice(0, o).join(""), m = l.slice(o + 1, f).join(""), d = l.slice(f + 1).join("");
    return { formatted: h + m + d, cursorNodeStart: h.length, cursorNodeText: m };
  }
  return { formatted: l.join("") };
}
function Tp(e, t, r = 0) {
  let n = 0;
  for (let s = r; s < e.length; ++s)
    e[s] === "	" ? n = n + t - n % t : n++;
  return n;
}
var Ws = Tp, Xr, bs, dr, Qr, Bp = class {
  constructor(t) {
    Hi(this, Xr), Hi(this, dr), this.stack = [t];
  }
  get key() {
    let { stack: t, siblings: r } = this;
    return re(!1, t, r === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : re(!1, this.stack, -2);
  }
  get node() {
    return re(!1, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return this.siblings !== null;
  }
  get siblings() {
    let { stack: t } = this, r = re(!1, t, -3);
    return Array.isArray(r) ? r : null;
  }
  get next() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index + 1];
  }
  get previous() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: t, index: r } = this;
    return t !== null && r === t.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...or(this, dr, Qr).call(this)];
  }
  getName() {
    let { stack: t } = this, { length: r } = t;
    return r > 1 ? re(!1, t, -2) : null;
  }
  getValue() {
    return re(!1, this.stack, -1);
  }
  getNode(t = 0) {
    let r = or(this, Xr, bs).call(this, t);
    return r === -1 ? null : this.stack[r];
  }
  getParentNode(t = 0) {
    return this.getNode(t + 1);
  }
  call(t, ...r) {
    let { stack: n } = this, { length: s } = n, i = re(!1, n, -1);
    for (let a of r)
      i = i[a], n.push(a, i);
    try {
      return t(this);
    } finally {
      n.length = s;
    }
  }
  callParent(t, r = 0) {
    let n = or(this, Xr, bs).call(this, r + 1), s = this.stack.splice(n + 1);
    try {
      return t(this);
    } finally {
      this.stack.push(...s);
    }
  }
  each(t, ...r) {
    let { stack: n } = this, { length: s } = n, i = re(!1, n, -1);
    for (let a of r)
      i = i[a], n.push(a, i);
    try {
      for (let a = 0; a < i.length; ++a)
        n.push(a, i[a]), t(this, a, i), n.length -= 2;
    } finally {
      n.length = s;
    }
  }
  map(t, ...r) {
    let n = [];
    return this.each((s, i, a) => {
      n[i] = t(s, i, a);
    }, ...r), n;
  }
  match(...t) {
    let r = this.stack.length - 1, n = null, s = this.stack[r--];
    for (let i of t) {
      if (s === void 0)
        return !1;
      let a = null;
      if (typeof n == "number" && (a = n, n = this.stack[r--], s = this.stack[r--]), i && !i(s, n, a))
        return !1;
      n = this.stack[r--], s = this.stack[r--];
    }
    return !0;
  }
  findAncestor(t) {
    for (let r of or(this, dr, Qr).call(this))
      if (t(r))
        return r;
  }
  hasAncestor(t) {
    for (let r of or(this, dr, Qr).call(this))
      if (t(r))
        return !0;
    return !1;
  }
};
Xr = /* @__PURE__ */ new WeakSet(), bs = function(e) {
  let { stack: t } = this;
  for (let r = t.length - 1; r >= 0; r -= 2)
    if (!Array.isArray(t[r]) && --e < 0)
      return r;
  return -1;
}, dr = /* @__PURE__ */ new WeakSet(), Qr = function* () {
  let { stack: e } = this;
  for (let t = e.length - 3; t >= 0; t -= 2) {
    let r = e[t];
    Array.isArray(r) || (yield r);
  }
};
var $p = Bp, ya = new Proxy(() => {
}, { get: () => ya }), Cs = ya;
function Op(e) {
  return e !== null && typeof e == "object";
}
var Lp = Op;
function* wa(e, t) {
  let { getVisitorKeys: r, filter: n = () => !0 } = t, s = (i) => Lp(i) && n(i);
  for (let i of r(e)) {
    let a = e[i];
    if (Array.isArray(a))
      for (let l of a)
        s(l) && (yield l);
    else
      s(a) && (yield a);
  }
}
function* Np(e, t) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let s = r[n];
    for (let i of wa(s, t))
      yield i, r.push(i);
  }
}
function Fr(e) {
  return (t, r, n) => {
    let s = !!(n != null && n.backwards);
    if (r === !1)
      return !1;
    let { length: i } = t, a = r;
    for (; a >= 0 && a < i; ) {
      let l = t.charAt(a);
      if (e instanceof RegExp) {
        if (!e.test(l))
          return a;
      } else if (!e.includes(l))
        return a;
      s ? a-- : a++;
    }
    return a === -1 || a === i ? a : !1;
  };
}
var Pp = Fr(/\s/), dt = Fr(" 	"), ba = Fr(",; 	"), Ca = Fr(/[^\n\r]/);
function Ip(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === !1)
    return !1;
  let s = e.charAt(t);
  if (n) {
    if (e.charAt(t - 1) === "\r" && s === `
`)
      return t - 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029")
      return t - 1;
  } else {
    if (s === "\r" && e.charAt(t + 1) === `
`)
      return t + 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029")
      return t + 1;
  }
  return t;
}
var Ft = Ip;
function jp(e, t, r = {}) {
  let n = dt(e, r.backwards ? t - 1 : t, r), s = Ft(e, n, r);
  return n !== s;
}
var pt = jp;
function Rp(e) {
  return Array.isArray(e) && e.length > 0;
}
var Mp = Rp, Ea = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), qp = (e) => Object.keys(e).filter((t) => !Ea.has(t));
function Wp(e) {
  return e ? (t) => e(t, Ea) : qp;
}
var xn = Wp;
function Hp(e) {
  let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function Hs(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = Hp(e);
}
function Gt(e, t) {
  t.leading = !0, t.trailing = !1, Hs(e, t);
}
function wt(e, t, r) {
  t.leading = !1, t.trailing = !1, r && (t.marker = r), Hs(e, t);
}
function Yt(e, t) {
  t.leading = !1, t.trailing = !0, Hs(e, t);
}
var Qn = /* @__PURE__ */ new WeakMap();
function Us(e, t) {
  if (Qn.has(e))
    return Qn.get(e);
  let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: s }, locStart: i, locEnd: a } = t;
  if (!n)
    return [];
  let l = ((r == null ? void 0 : r(e, t)) ?? [...wa(e, { getVisitorKeys: xn(s) })]).flatMap((p) => n(p) ? [p] : Us(p, t));
  return l.sort((p, c) => i(p) - i(c) || a(p) - a(c)), Qn.set(e, l), l;
}
function ka(e, t, r, n) {
  let { locStart: s, locEnd: i } = r, a = s(t), l = i(t), p = Us(e, r), c, u, o = 0, f = p.length;
  for (; o < f; ) {
    let h = o + f >> 1, m = p[h], d = s(m), D = i(m);
    if (d <= a && l <= D)
      return ka(m, t, r, m);
    if (D <= a) {
      c = m, o = h + 1;
      continue;
    }
    if (l <= d) {
      u = m, f = h;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
    let { quasis: h } = n, m = es(h, t, r);
    c && es(h, c, r) !== m && (c = null), u && es(h, u, r) !== m && (u = null);
  }
  return { enclosingNode: n, precedingNode: c, followingNode: u };
}
var Zn = () => !1;
function Up(e, t) {
  let { comments: r } = e;
  if (delete e.comments, !Mp(r) || !t.printer.canAttachComment)
    return;
  let n = [], { locStart: s, locEnd: i, printer: { experimentalFeatures: { avoidAstMutation: a = !1 } = {}, handleComments: l = {} }, originalText: p } = t, { ownLine: c = Zn, endOfLine: u = Zn, remaining: o = Zn } = l, f = r.map((h, m) => ({ ...ka(e, h, t), comment: h, text: p, options: t, ast: e, isLastComment: r.length - 1 === m }));
  for (let [h, m] of f.entries()) {
    let { comment: d, precedingNode: D, enclosingNode: y, followingNode: g, text: v, options: b, ast: w, isLastComment: C } = m;
    if (b.parser === "json" || b.parser === "json5" || b.parser === "jsonc" || b.parser === "__js_expression" || b.parser === "__ts_expression" || b.parser === "__vue_expression" || b.parser === "__vue_ts_expression") {
      if (s(d) - s(w) <= 0) {
        Gt(w, d);
        continue;
      }
      if (i(d) - i(w) >= 0) {
        Yt(w, d);
        continue;
      }
    }
    let E;
    if (a ? E = [m] : (d.enclosingNode = y, d.precedingNode = D, d.followingNode = g, E = [d, v, b, w, C]), Vp(v, b, f, h))
      d.placement = "ownLine", c(...E) || (g ? Gt(g, d) : D ? Yt(D, d) : wt(y || w, d));
    else if (zp(v, b, f, h))
      d.placement = "endOfLine", u(...E) || (D ? Yt(D, d) : g ? Gt(g, d) : wt(y || w, d));
    else if (d.placement = "remaining", !o(...E))
      if (D && g) {
        let x = n.length;
        x > 0 && n[x - 1].followingNode !== g && Gi(n, b), n.push(m);
      } else
        D ? Yt(D, d) : g ? Gt(g, d) : wt(y || w, d);
  }
  if (Gi(n, t), !a)
    for (let h of r)
      delete h.precedingNode, delete h.enclosingNode, delete h.followingNode;
}
var xa = (e) => !/[\S\n\u2028\u2029]/.test(e);
function Vp(e, t, r, n) {
  let { comment: s, precedingNode: i } = r[n], { locStart: a, locEnd: l } = t, p = a(s);
  if (i)
    for (let c = n - 1; c >= 0; c--) {
      let { comment: u, precedingNode: o } = r[c];
      if (o !== i || !xa(e.slice(l(u), p)))
        break;
      p = a(u);
    }
  return pt(e, p, { backwards: !0 });
}
function zp(e, t, r, n) {
  let { comment: s, followingNode: i } = r[n], { locStart: a, locEnd: l } = t, p = l(s);
  if (i)
    for (let c = n + 1; c < r.length; c++) {
      let { comment: u, followingNode: o } = r[c];
      if (o !== i || !xa(e.slice(p, a(u))))
        break;
      p = l(u);
    }
  return pt(e, p);
}
function Gi(e, t) {
  var r, n;
  let s = e.length;
  if (s === 0)
    return;
  let { precedingNode: i, followingNode: a } = e[0], l = t.locStart(a), p;
  for (p = s; p > 0; --p) {
    let { comment: c, precedingNode: u, followingNode: o } = e[p - 1];
    Cs.strictEqual(u, i), Cs.strictEqual(o, a);
    let f = t.originalText.slice(t.locEnd(c), l);
    if (((n = (r = t.printer).isGap) == null ? void 0 : n.call(r, f, t)) ?? /^[\s(]*$/.test(f))
      l = t.locStart(c);
    else
      break;
  }
  for (let [c, { comment: u }] of e.entries())
    c < p ? Yt(i, u) : Gt(a, u);
  for (let c of [i, a])
    c.comments && c.comments.length > 1 && c.comments.sort((u, o) => t.locStart(u) - t.locStart(o));
  e.length = 0;
}
function es(e, t, r) {
  let n = r.locStart(t) - 1;
  for (let s = 1; s < e.length; ++s)
    if (n < r.locStart(e[s]))
      return s - 1;
  return 0;
}
function Gp(e, t) {
  let r = t - 1;
  r = dt(e, r, { backwards: !0 }), r = Ft(e, r, { backwards: !0 }), r = dt(e, r, { backwards: !0 });
  let n = Ft(e, r, { backwards: !0 });
  return r !== n;
}
var Vs = Gp;
function _a(e, t) {
  let r = e.node;
  return r.printed = !0, t.printer.printComment(e, t);
}
function Yp(e, t) {
  var r;
  let n = e.node, s = [_a(e, t)], { printer: i, originalText: a, locStart: l, locEnd: p } = t;
  if ((r = i.isBlockComment) != null && r.call(i, n)) {
    let u = pt(a, p(n)) ? pt(a, l(n), { backwards: !0 }) ? _t : ha : " ";
    s.push(u);
  } else
    s.push(_t);
  let c = Ft(a, dt(a, p(n)));
  return c !== !1 && pt(a, c) && s.push(_t), s;
}
function Jp(e, t, r) {
  var n;
  let s = e.node, i = _a(e, t), { printer: a, originalText: l, locStart: p } = t, c = (n = a.isBlockComment) == null ? void 0 : n.call(a, s);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || pt(l, p(s), { backwards: !0 })) {
    let u = Vs(l, p(s));
    return { doc: vs([_t, u ? _t : "", i]), isBlock: c, hasLineSuffix: !0 };
  }
  return !c || r != null && r.hasLineSuffix ? { doc: [vs([" ", i]), Cn], isBlock: c, hasLineSuffix: !0 } : { doc: [" ", i], isBlock: c, hasLineSuffix: !1 };
}
function Kp(e, t) {
  let r = e.node;
  if (!r)
    return {};
  let n = t[Symbol.for("printedComments")];
  if ((r.comments || []).filter((l) => !n.has(l)).length === 0)
    return { leading: "", trailing: "" };
  let s = [], i = [], a;
  return e.each(() => {
    let l = e.node;
    if (n != null && n.has(l))
      return;
    let { leading: p, trailing: c } = l;
    p ? s.push(Yp(e, t)) : c && (a = Jp(e, t, a), i.push(a.doc));
  }, "comments"), { leading: s, trailing: i };
}
function Xp(e, t, r) {
  let { leading: n, trailing: s } = Kp(e, r);
  return !n && !s ? t : va(t, (i) => [n, i, s]);
}
function Qp(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e;
  for (let n of t) {
    if (!n.printed && !r.has(n))
      throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
var Fa = class extends Error {
  constructor() {
    super(...arguments);
    at(this, "name", "ConfigError");
  }
}, Yi = class extends Error {
  constructor() {
    super(...arguments);
    at(this, "name", "UndefinedParserError");
  }
}, Zp = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: !0, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: !1, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function Sa({ plugins: e = [], showDeprecated: t = !1 } = {}) {
  let r = e.flatMap((s) => s.languages ?? []), n = [];
  for (let s of th(Object.assign({}, ...e.map(({ options: i }) => i), Zp)))
    !t && s.deprecated || (Array.isArray(s.choices) && (t || (s.choices = s.choices.filter((i) => !i.deprecated)), s.name === "parser" && (s.choices = [...s.choices, ...eh(s.choices, r, e)])), s.pluginDefaults = Object.fromEntries(e.filter((i) => {
      var a;
      return ((a = i.defaultOptions) == null ? void 0 : a[s.name]) !== void 0;
    }).map((i) => [i.name, i.defaultOptions[s.name]])), n.push(s));
  return { languages: r, options: n };
}
function* eh(e, t, r) {
  let n = new Set(e.map((s) => s.value));
  for (let s of t)
    if (s.parsers) {
      for (let i of s.parsers)
        if (!n.has(i)) {
          n.add(i);
          let a = r.find((p) => p.parsers && Object.prototype.hasOwnProperty.call(p.parsers, i)), l = s.name;
          a != null && a.name && (l += ` (plugin: ${a.name})`), yield { value: i, description: l };
        }
    }
}
function th(e) {
  let t = [];
  for (let [r, n] of Object.entries(e)) {
    let s = { name: r, ...n };
    Array.isArray(s.default) && (s.default = re(!1, s.default, -1).value), t.push(s);
  }
  return t;
}
var rh = (e) => String(e).split(/[/\\]/).pop();
function Ji(e, t) {
  if (!t)
    return;
  let r = rh(t).toLowerCase();
  return e.find(({ filenames: n }) => n == null ? void 0 : n.some((s) => s.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((s) => r.endsWith(s)));
}
function nh(e, t) {
  if (t)
    return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(t)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t}`));
}
function sh(e, t) {
  let r = e.plugins.flatMap((s) => s.languages ?? []), n = nh(r, t.language) ?? Ji(r, t.physicalFile) ?? Ji(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var ih = sh, Jt = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object")
    return JSON.stringify(e);
  if (Array.isArray(e))
    return `[${e.map((r) => Jt.value(r)).join(", ")}]`;
  let t = Object.keys(e);
  return t.length === 0 ? "{}" : `{ ${t.map((r) => `${Jt.key(r)}: ${Jt.value(e[r])}`).join(", ")} }`;
}, pair: ({ key: e, value: t }) => Jt.value({ [e]: t }) }, Ki = _r(wn(), 1), oh = (e, t, { descriptor: r }) => {
  let n = [`${Ki.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
  return t && n.push(`we now treat it as ${Ki.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
}, Kt = _r(wn(), 1), Aa = Symbol.for("vnopts.VALUE_NOT_EXIST"), Zr = Symbol.for("vnopts.VALUE_UNCHANGED"), Xi = " ".repeat(2), ah = (e, t, r) => {
  let { text: n, list: s } = r.normalizeExpectedResult(r.schemas[e].expected(r)), i = [];
  return n && i.push(Qi(e, t, n, r.descriptor)), s && i.push([Qi(e, t, s.title, r.descriptor)].concat(s.values.map((a) => Ta(a, r.loggerPrintWidth))).join(`
`)), Ba(i, r.loggerPrintWidth);
};
function Qi(e, t, r, n) {
  return [`Invalid ${Kt.default.red(n.key(e))} value.`, `Expected ${Kt.default.blue(r)},`, `but received ${t === Aa ? Kt.default.gray("nothing") : Kt.default.red(n.value(t))}.`].join(" ");
}
function Ta({ text: e, list: t }, r) {
  let n = [];
  return e && n.push(`- ${Kt.default.blue(e)}`), t && n.push([`- ${Kt.default.blue(t.title)}:`].concat(t.values.map((s) => Ta(s, r - Xi.length).replace(/^|\n/g, `$&${Xi}`))).join(`
`)), Ba(n, r);
}
function Ba(e, t) {
  if (e.length === 1)
    return e[0];
  let [r, n] = e, [s, i] = e.map((a) => a.split(`
`, 1)[0].length);
  return s > t && s > i ? n : r;
}
var Zi = _r(wn(), 1), ts = [], eo = [];
function uh(e, t) {
  if (e === t)
    return 0;
  let r = e;
  e.length > t.length && (e = t, t = r);
  let n = e.length, s = t.length;
  for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-s); )
    n--, s--;
  let i = 0;
  for (; i < n && e.charCodeAt(i) === t.charCodeAt(i); )
    i++;
  if (n -= i, s -= i, n === 0)
    return s;
  let a, l, p, c, u = 0, o = 0;
  for (; u < n; )
    eo[u] = e.charCodeAt(i + u), ts[u] = ++u;
  for (; o < s; )
    for (a = t.charCodeAt(i + o), p = o++, l = o, u = 0; u < n; u++)
      c = a === eo[u] ? p : p + 1, p = ts[u], l = ts[u] = p > l ? c > l ? l + 1 : c : c > p ? p + 1 : c;
  return l;
}
var $a = (e, t, { descriptor: r, logger: n, schemas: s }) => {
  let i = [`Ignored unknown option ${Zi.default.yellow(r.pair({ key: e, value: t }))}.`], a = Object.keys(s).sort().find((l) => uh(e, l) < 3);
  a && i.push(`Did you mean ${Zi.default.blue(r.key(a))}?`), n.warn(i.join(" "));
}, lh = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function ch(e, t) {
  let r = new e(t), n = Object.create(r);
  for (let s of lh)
    s in t && (n[s] = ph(t[s], r, ft.prototype[s].length));
  return n;
}
var ft = class {
  static create(t) {
    return ch(this, t);
  }
  constructor(t) {
    this.name = t.name;
  }
  default(t) {
  }
  expected(t) {
    return "nothing";
  }
  validate(t, r) {
    return !1;
  }
  deprecated(t, r) {
    return !1;
  }
  forward(t, r) {
  }
  redirect(t, r) {
  }
  overlap(t, r, n) {
    return t;
  }
  preprocess(t, r) {
    return t;
  }
  postprocess(t, r) {
    return Zr;
  }
};
function ph(e, t, r) {
  return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e;
}
var hh = class extends ft {
  constructor(t) {
    super(t), this._sourceName = t.sourceName;
  }
  expected(t) {
    return t.schemas[this._sourceName].expected(t);
  }
  validate(t, r) {
    return r.schemas[this._sourceName].validate(t, r);
  }
  redirect(t, r) {
    return this._sourceName;
  }
}, dh = class extends ft {
  expected() {
    return "anything";
  }
  validate() {
    return !0;
  }
}, fh = class extends ft {
  constructor({ valueSchema: t, name: r = t.name, ...n }) {
    super({ ...n, name: r }), this._valueSchema = t;
  }
  expected(t) {
    let { text: r, list: n } = t.normalizeExpectedResult(this._valueSchema.expected(t));
    return { text: r && `an array of ${r}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
  }
  validate(t, r) {
    if (!Array.isArray(t))
      return !1;
    let n = [];
    for (let s of t) {
      let i = r.normalizeValidateResult(this._valueSchema.validate(s, r), s);
      i !== !0 && n.push(i.value);
    }
    return n.length === 0 ? !0 : { value: n };
  }
  deprecated(t, r) {
    let n = [];
    for (let s of t) {
      let i = r.normalizeDeprecatedResult(this._valueSchema.deprecated(s, r), s);
      i !== !1 && n.push(...i.map(({ value: a }) => ({ value: [a] })));
    }
    return n;
  }
  forward(t, r) {
    let n = [];
    for (let s of t) {
      let i = r.normalizeForwardResult(this._valueSchema.forward(s, r), s);
      n.push(...i.map(to));
    }
    return n;
  }
  redirect(t, r) {
    let n = [], s = [];
    for (let i of t) {
      let a = r.normalizeRedirectResult(this._valueSchema.redirect(i, r), i);
      "remain" in a && n.push(a.remain), s.push(...a.redirect.map(to));
    }
    return n.length === 0 ? { redirect: s } : { redirect: s, remain: n };
  }
  overlap(t, r) {
    return t.concat(r);
  }
};
function to({ from: e, to: t }) {
  return { from: [e], to: t };
}
var mh = class extends ft {
  expected() {
    return "true or false";
  }
  validate(t) {
    return typeof t == "boolean";
  }
};
function gh(e, t) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of e) {
    let s = n[t];
    if (r[s])
      throw new Error(`Duplicate ${t} ${JSON.stringify(s)}`);
    r[s] = n;
  }
  return r;
}
function vh(e, t) {
  let r = /* @__PURE__ */ new Map();
  for (let n of e) {
    let s = n[t];
    if (r.has(s))
      throw new Error(`Duplicate ${t} ${JSON.stringify(s)}`);
    r.set(s, n);
  }
  return r;
}
function Dh() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let r = JSON.stringify(t);
    return e[r] ? !0 : (e[r] = !0, !1);
  };
}
function yh(e, t) {
  let r = [], n = [];
  for (let s of e)
    t(s) ? r.push(s) : n.push(s);
  return [r, n];
}
function wh(e) {
  return e === Math.floor(e);
}
function bh(e, t) {
  if (e === t)
    return 0;
  let r = typeof e, n = typeof t, s = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? s.indexOf(r) - s.indexOf(n) : r !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function Ch(e) {
  return (...t) => {
    let r = e(...t);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function ro(e) {
  return e === void 0 ? {} : e;
}
function Oa(e) {
  if (typeof e == "string")
    return { text: e };
  let { text: t, list: r } = e;
  return Eh((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: t, list: { title: r.title, values: r.values.map(Oa) } } : { text: t };
}
function no(e, t) {
  return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function so(e, t, r = !1) {
  return e === !1 ? !1 : e === !0 ? r ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function io(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function Es(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => io(r, t)) : [io(e, t)];
}
function oo(e, t) {
  let r = Es(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return r.length === 0 ? { remain: t, redirect: r } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: r } : { redirect: r };
}
function Eh(e, t) {
  if (!e)
    throw new Error(t);
}
var kh = class extends ft {
  constructor(t) {
    super(t), this._choices = vh(t.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
  }
  expected({ descriptor: t }) {
    let r = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(bh).map(t.value), n = r.slice(0, -2), s = r.slice(-2);
    return { text: n.concat(s.join(" or ")).join(", "), list: { title: "one of the following values", values: r } };
  }
  validate(t) {
    return this._choices.has(t);
  }
  deprecated(t) {
    let r = this._choices.get(t);
    return r && r.deprecated ? { value: t } : !1;
  }
  forward(t) {
    let r = this._choices.get(t);
    return r ? r.forward : void 0;
  }
  redirect(t) {
    let r = this._choices.get(t);
    return r ? r.redirect : void 0;
  }
}, xh = class extends ft {
  expected() {
    return "a number";
  }
  validate(t, r) {
    return typeof t == "number";
  }
}, _h = class extends xh {
  expected() {
    return "an integer";
  }
  validate(t, r) {
    return r.normalizeValidateResult(super.validate(t, r), t) === !0 && wh(t);
  }
}, ao = class extends ft {
  expected() {
    return "a string";
  }
  validate(t) {
    return typeof t == "string";
  }
}, Fh = Jt, Sh = $a, Ah = ah, Th = oh, Bh = class {
  constructor(t, r) {
    let { logger: n = console, loggerPrintWidth: s = 80, descriptor: i = Fh, unknown: a = Sh, invalid: l = Ah, deprecated: p = Th, missing: c = () => !1, required: u = () => !1, preprocess: o = (h) => h, postprocess: f = () => Zr } = r || {};
    this._utils = { descriptor: i, logger: n || { warn: () => {
    } }, loggerPrintWidth: s, schemas: gh(t, "name"), normalizeDefaultResult: ro, normalizeExpectedResult: Oa, normalizeDeprecatedResult: so, normalizeForwardResult: Es, normalizeRedirectResult: oo, normalizeValidateResult: no }, this._unknownHandler = a, this._invalidHandler = Ch(l), this._deprecatedHandler = p, this._identifyMissing = (h, m) => !(h in m) || c(h, m), this._identifyRequired = u, this._preprocess = o, this._postprocess = f, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = Dh();
  }
  normalize(t) {
    let r = {}, n = [this._preprocess(t, this._utils)], s = () => {
      for (; n.length !== 0; ) {
        let i = n.shift(), a = this._applyNormalization(i, r);
        n.push(...a);
      }
    };
    s();
    for (let i of Object.keys(this._utils.schemas)) {
      let a = this._utils.schemas[i];
      if (!(i in r)) {
        let l = ro(a.default(this._utils));
        "value" in l && n.push({ [i]: l.value });
      }
    }
    s();
    for (let i of Object.keys(this._utils.schemas)) {
      if (!(i in r))
        continue;
      let a = this._utils.schemas[i], l = r[i], p = a.postprocess(l, this._utils);
      p !== Zr && (this._applyValidation(p, i, a), r[i] = p);
    }
    return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
  }
  _applyNormalization(t, r) {
    let n = [], { knownKeys: s, unknownKeys: i } = this._partitionOptionKeys(t);
    for (let a of s) {
      let l = this._utils.schemas[a], p = l.preprocess(t[a], this._utils);
      this._applyValidation(p, a, l);
      let c = ({ from: f, to: h }) => {
        n.push(typeof h == "string" ? { [h]: f } : { [h.key]: h.value });
      }, u = ({ value: f, redirectTo: h }) => {
        let m = so(l.deprecated(f, this._utils), p, !0);
        if (m !== !1)
          if (m === !0)
            this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, h, this._utils));
          else
            for (let { value: d } of m) {
              let D = { key: a, value: d };
              if (!this._hasDeprecationWarned(D)) {
                let y = typeof h == "string" ? { key: h, value: d } : h;
                this._utils.logger.warn(this._deprecatedHandler(D, y, this._utils));
              }
            }
      };
      Es(l.forward(p, this._utils), p).forEach(c);
      let o = oo(l.redirect(p, this._utils), p);
      if (o.redirect.forEach(c), "remain" in o) {
        let f = o.remain;
        r[a] = a in r ? l.overlap(r[a], f, this._utils) : f, u({ value: f });
      }
      for (let { from: f, to: h } of o.redirect)
        u({ value: f, redirectTo: h });
    }
    for (let a of i) {
      let l = t[a];
      this._applyUnknownHandler(a, l, r, (p, c) => {
        n.push({ [p]: c });
      });
    }
    return n;
  }
  _applyRequiredCheck(t) {
    for (let r of Object.keys(this._utils.schemas))
      if (this._identifyMissing(r, t) && this._identifyRequired(r))
        throw this._invalidHandler(r, Aa, this._utils);
  }
  _partitionOptionKeys(t) {
    let [r, n] = yh(Object.keys(t).filter((s) => !this._identifyMissing(s, t)), (s) => s in this._utils.schemas);
    return { knownKeys: r, unknownKeys: n };
  }
  _applyValidation(t, r, n) {
    let s = no(n.validate(t, this._utils), t);
    if (s !== !0)
      throw this._invalidHandler(r, s.value, this._utils);
  }
  _applyUnknownHandler(t, r, n, s) {
    let i = this._unknownHandler(t, r, this._utils);
    if (i)
      for (let a of Object.keys(i)) {
        if (this._identifyMissing(a, i))
          continue;
        let l = i[a];
        a in this._utils.schemas ? s(a, l) : n[a] = l;
      }
  }
  _applyPostprocess(t) {
    let r = this._postprocess(t, this._utils);
    if (r !== Zr) {
      if (r.delete)
        for (let n of r.delete)
          delete t[n];
      if (r.override) {
        let { knownKeys: n, unknownKeys: s } = this._partitionOptionKeys(r.override);
        for (let i of n) {
          let a = r.override[i];
          this._applyValidation(a, i, this._utils.schemas[i]), t[i] = a;
        }
        for (let i of s) {
          let a = r.override[i];
          this._applyUnknownHandler(i, a, t, (l, p) => {
            let c = this._utils.schemas[l];
            this._applyValidation(p, l, c), t[l] = p;
          });
        }
      }
    }
  }
}, rs;
function $h(e, t, { logger: r = !1, isCLI: n = !1, passThrough: s = !1, FlagSchema: i, descriptor: a } = {}) {
  if (n) {
    if (!i)
      throw new Error("'FlagSchema' option is required.");
    if (!a)
      throw new Error("'descriptor' option is required.");
  } else
    a = Jt;
  let l = s ? Array.isArray(s) ? (f, h) => s.includes(f) ? { [f]: h } : void 0 : (f, h) => ({ [f]: h }) : (f, h, m) => {
    let { _: d, ...D } = m.schemas;
    return $a(f, h, { ...m, schemas: D });
  }, p = Oh(t, { isCLI: n, FlagSchema: i }), c = new Bh(p, { logger: r, unknown: l, descriptor: a }), u = r !== !1;
  u && rs && (c._hasDeprecationWarned = rs);
  let o = c.normalize(e);
  return u && (rs = c._hasDeprecationWarned), o;
}
function Oh(e, { isCLI: t, FlagSchema: r }) {
  let n = [];
  t && n.push(dh.create({ name: "_" }));
  for (let s of e)
    n.push(Lh(s, { isCLI: t, optionInfos: e, FlagSchema: r })), s.alias && t && n.push(hh.create({ name: s.alias, sourceName: s.name }));
  return n;
}
function Lh(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
  let { name: s } = e, i = { name: s }, a, l = {};
  switch (e.type) {
    case "int":
      a = _h, t && (i.preprocess = Number);
      break;
    case "string":
      a = ao;
      break;
    case "choice":
      a = kh, i.choices = e.choices.map((p) => p != null && p.redirect ? { ...p, redirect: { to: { key: e.name, value: p.redirect } } } : p);
      break;
    case "boolean":
      a = mh;
      break;
    case "flag":
      a = n, i.flags = r.flatMap((p) => [p.alias, p.description && p.name, p.oppositeDescription && `no-${p.name}`].filter(Boolean));
      break;
    case "path":
      a = ao;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? i.validate = (p, c, u) => e.exception(p) || c.validate(p, u) : i.validate = (p, c, u) => p === void 0 || c.validate(p, u), e.redirect && (l.redirect = (p) => p ? { to: { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (l.deprecated = !0), t && !e.array) {
    let p = i.preprocess || ((c) => c);
    i.preprocess = (c, u, o) => u.preprocess(p(Array.isArray(c) ? re(!1, c, -1) : c), o);
  }
  return e.array ? fh.create({ ...t ? { preprocess: (p) => Array.isArray(p) ? p : [p] } : {}, ...l, valueSchema: a.create(i) }) : a.create({ ...i, ...l });
}
var Nh = $h, Ph = (e, t, r) => {
  if (!(e && t == null)) {
    if (t.findLast)
      return t.findLast(r);
    for (let n = t.length - 1; n >= 0; n--) {
      let s = t[n];
      if (r(s, n, t))
        return s;
    }
  }
}, La = Ph;
function Na(e, t) {
  if (!t)
    throw new Error("parserName is required.");
  let r = La(!1, e, (s) => s.parsers && Object.prototype.hasOwnProperty.call(s.parsers, t));
  if (r)
    return r;
  let n = `Couldn't resolve parser "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Fa(n);
}
function Ih(e, t) {
  if (!t)
    throw new Error("astFormat is required.");
  let r = La(!1, e, (s) => s.printers && Object.prototype.hasOwnProperty.call(s.printers, t));
  if (r)
    return r;
  let n = `Couldn't find plugin for AST format "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Fa(n);
}
function Pa({ plugins: e, parser: t }) {
  let r = Na(e, t);
  return Ia(r, t);
}
function Ia(e, t) {
  let r = e.parsers[t];
  return typeof r == "function" ? r() : r;
}
function jh(e, t) {
  let r = e.printers[t];
  return typeof r == "function" ? r() : r;
}
var uo = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function Rh(e, t = {}) {
  var r;
  let n = { ...e };
  if (!n.parser)
    if (n.filepath) {
      if (n.parser = ih(n, { physicalFile: n.filepath }), !n.parser)
        throw new Yi(`No parser could be inferred for file "${n.filepath}".`);
    } else
      throw new Yi("No parser and no file path given, couldn't infer a parser.");
  let s = Sa({ plugins: e.plugins, showDeprecated: !0 }).options, i = { ...uo, ...Object.fromEntries(s.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, a = Na(n.plugins, n.parser), l = await Ia(a, n.parser);
  n.astFormat = l.astFormat, n.locEnd = l.locEnd, n.locStart = l.locStart;
  let p = (r = a.printers) != null && r[l.astFormat] ? a : Ih(n.plugins, l.astFormat), c = await jh(p, l.astFormat);
  n.printer = c;
  let u = p.defaultOptions ? Object.fromEntries(Object.entries(p.defaultOptions).filter(([, f]) => f !== void 0)) : {}, o = { ...i, ...u };
  for (let [f, h] of Object.entries(o))
    (n[f] === null || n[f] === void 0) && (n[f] = h);
  return n.parser === "json" && (n.trailingComma = "none"), Nh(n, s, { passThrough: Object.keys(uo), ...t });
}
var er = Rh, Mh = _r(qc(), 1);
async function qh(e, t) {
  let r = await Pa(t), n = r.preprocess ? r.preprocess(e, t) : e;
  t.originalText = n;
  let s;
  try {
    s = await r.parse(n, t, t);
  } catch (i) {
    Wh(i, e);
  }
  return { text: n, ast: s };
}
function Wh(e, t) {
  let { loc: r } = e;
  if (r) {
    let n = (0, Mh.codeFrameColumns)(t, r, { highlightCode: !0 });
    throw e.message += `
` + n, e.codeFrame = n, e;
  }
  throw e;
}
var Sr = qh;
async function Hh(e, t, r, n, s) {
  let { embeddedLanguageFormatting: i, printer: { embed: a, hasPrettierIgnore: l = () => !1, getVisitorKeys: p } } = r;
  if (!a || i !== "auto")
    return;
  if (a.length > 2)
    throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let c = xn(a.getVisitorKeys ?? p), u = [];
  h();
  let o = e.stack;
  for (let { print: m, node: d, pathStack: D } of u)
    try {
      e.stack = D;
      let y = await m(f, t, e, r);
      y && s.set(d, y);
    } catch (y) {
      if (globalThis.PRETTIER_DEBUG)
        throw y;
    }
  e.stack = o;
  function f(m, d) {
    return Uh(m, d, r, n);
  }
  function h() {
    let { node: m } = e;
    if (m === null || typeof m != "object" || l(e))
      return;
    for (let D of c(m))
      Array.isArray(m[D]) ? e.each(h, D) : e.call(h, D);
    let d = a(e, r);
    if (d) {
      if (typeof d == "function") {
        u.push({ print: d, node: m, pathStack: [...e.stack] });
        return;
      }
      s.set(m, d);
    }
  }
}
async function Uh(e, t, r, n) {
  let s = await er({ ...r, ...t, parentParser: r.parser, originalText: e }, { passThrough: !0 }), { ast: i } = await Sr(e, s), a = await n(i, s);
  return ga(a);
}
function Vh(e, t) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: s, locEnd: i, [Symbol.for("printedComments")]: a } = t, { node: l } = e, p = s(l), c = i(l);
  for (let u of n)
    s(u) >= p && i(u) <= c && a.add(u);
  return r.slice(p, c);
}
var zh = Vh;
async function _n(e, t) {
  ({ ast: e } = await ja(e, t));
  let r = /* @__PURE__ */ new Map(), n = new $p(e), s = /* @__PURE__ */ new Map();
  await Hh(n, a, t, _n, s);
  let i = await lo(n, t, a, void 0, s);
  return Qp(t), i;
  function a(p, c) {
    return p === void 0 || p === n ? l(c) : Array.isArray(p) ? n.call(() => l(c), ...p) : n.call(() => l(c), p);
  }
  function l(p) {
    let c = n.node;
    if (c == null)
      return "";
    let u = c && typeof c == "object" && p === void 0;
    if (u && r.has(c))
      return r.get(c);
    let o = lo(n, t, a, p, s);
    return u && r.set(c, o), o;
  }
}
function lo(e, t, r, n, s) {
  var i;
  let { node: a } = e, { printer: l } = t, p;
  return (i = l.hasPrettierIgnore) != null && i.call(l, e) ? p = zh(e, t) : s.has(a) ? p = s.get(a) : p = l.print(e, t, r, n), a === t.cursorNode && (p = va(p, (c) => [Ds, c, Ds])), l.printComment && (!l.willPrintOwnComments || !l.willPrintOwnComments(e, t)) && (p = Xp(e, p, t)), p;
}
async function ja(e, t) {
  let r = e.comments ?? [];
  t[Symbol.for("comments")] = r, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Up(e, t);
  let { printer: { preprocess: n } } = t;
  return e = n ? await n(e, t) : e, { ast: e, comments: r };
}
function Gh(e, t) {
  let { cursorOffset: r, locStart: n, locEnd: s } = t, i = xn(t.printer.getVisitorKeys), a = (p) => n(p) <= r && s(p) >= r, l = e;
  for (let p of Np(e, { getVisitorKeys: i, filter: a }))
    l = p;
  return l;
}
var Yh = Gh;
function Jh(e, t) {
  let { printer: { massageAstNode: r, getVisitorKeys: n } } = t;
  if (!r)
    return e;
  let s = xn(n), i = r.ignoredProperties ?? /* @__PURE__ */ new Set();
  return a(e);
  function a(l, p) {
    if (!(l !== null && typeof l == "object"))
      return l;
    if (Array.isArray(l))
      return l.map((f) => a(f, p)).filter(Boolean);
    let c = {}, u = new Set(s(l));
    for (let f in l)
      !Object.prototype.hasOwnProperty.call(l, f) || i.has(f) || (u.has(f) ? c[f] = a(l[f], l) : c[f] = l[f]);
    let o = r(l, c, p);
    if (o !== null)
      return o ?? c;
  }
}
var Kh = Jh, Xh = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function Qh(e, t) {
  let r = [e.node, ...e.parentNodes], n = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
  return r.find((s) => Ra.has(s.type) && n.has(s));
}
function co(e) {
  let t = e.length - 1;
  for (; ; ) {
    let r = e[t];
    if ((r == null ? void 0 : r.type) === "Program" || (r == null ? void 0 : r.type) === "File")
      t--;
    else
      break;
  }
  return e.slice(0, t + 1);
}
function Zh(e, t, { locStart: r, locEnd: n }) {
  let s = e.node, i = t.node;
  if (s === i)
    return { startNode: s, endNode: i };
  let a = r(e.node);
  for (let p of co(t.parentNodes))
    if (r(p) >= a)
      i = p;
    else
      break;
  let l = n(t.node);
  for (let p of co(e.parentNodes)) {
    if (n(p) <= l)
      s = p;
    else
      break;
    if (s === i)
      break;
  }
  return { startNode: s, endNode: i };
}
function ks(e, t, r, n, s = [], i) {
  let { locStart: a, locEnd: l } = r, p = a(e), c = l(e);
  if (!(t > c || t < p || i === "rangeEnd" && t === p || i === "rangeStart" && t === c)) {
    for (let u of Us(e, r)) {
      let o = ks(u, t, r, n, [e, ...s], i);
      if (o)
        return o;
    }
    if (!n || n(e, s[0]))
      return { node: e, parentNodes: s };
  }
}
function ed(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var Ra = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), td = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function po(e, t, r) {
  if (!t)
    return !1;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return ed(t.type, r == null ? void 0 : r.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return Ra.has(t.type);
    case "graphql":
      return td.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return !1;
}
function rd(e, t, r) {
  let { rangeStart: n, rangeEnd: s, locStart: i, locEnd: a } = t;
  Cs.ok(s > n);
  let l = e.slice(n, s).search(/\S/), p = l === -1;
  if (!p)
    for (n += l; s > n && !/\S/.test(e[s - 1]); --s)
      ;
  let c = ks(r, n, t, (h, m) => po(t, h, m), [], "rangeStart"), u = p ? c : ks(r, s, t, (h) => po(t, h), [], "rangeEnd");
  if (!c || !u)
    return { rangeStart: 0, rangeEnd: 0 };
  let o, f;
  if (Xh(t)) {
    let h = Qh(c, u);
    o = h, f = h;
  } else
    ({ startNode: o, endNode: f } = Zh(c, u, t));
  return { rangeStart: Math.min(i(o), i(f)), rangeEnd: Math.max(a(o), a(f)) };
}
var Ma = "\uFEFF", ho = Symbol("cursor");
async function qa(e, t, r = 0) {
  if (!e || e.trim().length === 0)
    return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: s } = await Sr(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = Yh(n, t));
  let i = await _n(n, t);
  r > 0 && (i = ma([_t, i], r, t.tabWidth));
  let a = kn(i, t);
  if (r > 0) {
    let p = a.formatted.trim();
    a.cursorNodeStart !== void 0 && (a.cursorNodeStart -= a.formatted.indexOf(p)), a.formatted = p + Is(t.endOfLine);
  }
  let l = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let p, c, u, o, f;
    if (t.cursorNode && a.cursorNodeText ? (p = t.locStart(t.cursorNode), c = s.slice(p, t.locEnd(t.cursorNode)), u = t.cursorOffset - p, o = a.cursorNodeStart, f = a.cursorNodeText) : (p = 0, c = s, u = t.cursorOffset, o = 0, f = a.formatted), c === f)
      return { formatted: a.formatted, cursorOffset: o + u, comments: l };
    let h = c.split("");
    h.splice(u, 0, ho);
    let m = f.split(""), d = (0, Hc.diffArrays)(h, m), D = o;
    for (let y of d)
      if (y.removed) {
        if (y.value.includes(ho))
          break;
      } else
        D += y.count;
    return { formatted: a.formatted, cursorOffset: D, comments: l };
  }
  return { formatted: a.formatted, cursorOffset: -1, comments: l };
}
async function nd(e, t) {
  let { ast: r, text: n } = await Sr(e, t), { rangeStart: s, rangeEnd: i } = rd(n, t, r), a = n.slice(s, i), l = Math.min(s, n.lastIndexOf(`
`, s) + 1), p = n.slice(l, s).match(/^\s*/)[0], c = Ws(p, t.tabWidth), u = await qa(a, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > s && t.cursorOffset <= i ? t.cursorOffset - s : -1, endOfLine: "lf" }, c), o = u.formatted.trimEnd(), { cursorOffset: f } = t;
  f > i ? f += o.length - a.length : u.cursorOffset >= 0 && (f = u.cursorOffset + s);
  let h = n.slice(0, s) + o + n.slice(i);
  if (t.endOfLine !== "lf") {
    let m = Is(t.endOfLine);
    f >= 0 && m === `\r
` && (f += aa(h.slice(0, f), `
`)), h = bn(!1, h, `
`, m);
  }
  return { formatted: h, cursorOffset: f, comments: u.comments };
}
function ns(e, t, r) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
}
function fo(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: s } = t;
  return r = ns(e, r, -1), n = ns(e, n, 0), s = ns(e, s, e.length), { ...t, cursorOffset: r, rangeStart: n, rangeEnd: s };
}
function Wa(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: s, endOfLine: i } = fo(e, t), a = e.charAt(0) === Ma;
  if (a && (e = e.slice(1), r--, n--, s--), i === "auto" && (i = Uc(e)), e.includes("\r")) {
    let l = (p) => aa(e.slice(0, Math.max(p, 0)), `\r
`);
    r -= l(r), n -= l(n), s -= l(s), e = Vc(e);
  }
  return { hasBOM: a, text: e, options: fo(e, { ...t, cursorOffset: r, rangeStart: n, rangeEnd: s, endOfLine: i }) };
}
async function mo(e, t) {
  let r = await Pa(t);
  return !r.hasPragma || r.hasPragma(e);
}
async function Ha(e, t) {
  let { hasBOM: r, text: n, options: s } = Wa(e, await er(t));
  if (s.rangeStart >= s.rangeEnd && n !== "" || s.requirePragma && !await mo(n, s))
    return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let i;
  return s.rangeStart > 0 || s.rangeEnd < n.length ? i = await nd(n, s) : (!s.requirePragma && s.insertPragma && s.printer.insertPragma && !await mo(n, s) && (n = s.printer.insertPragma(n)), i = await qa(n, s)), r && (i.formatted = Ma + i.formatted, i.cursorOffset >= 0 && i.cursorOffset++), i;
}
async function sd(e, t, r) {
  let { text: n, options: s } = Wa(e, await er(t)), i = await Sr(n, s);
  return r && (r.preprocessForPrint && (i.ast = await ja(i.ast, s)), r.massage && (i.ast = Kh(i.ast, s))), i;
}
async function id(e, t) {
  t = await er(t);
  let r = await _n(e, t);
  return kn(r, t);
}
async function od(e, t) {
  let r = lp(e), { formatted: n } = await Ha(r, { ...t, parser: "__js_expression" });
  return n;
}
async function ad(e, t) {
  t = await er(t);
  let { ast: r } = await Sr(e, t);
  return _n(r, t);
}
async function ud(e, t) {
  return kn(e, await er(t));
}
var Ua = {};
yn(Ua, { builders: () => ld, printer: () => cd, utils: () => pd });
var ld = { join: fa, line: ha, softline: ap, hardline: _t, literalline: da, group: la, conditionalGroup: rp, fill: ca, lineSuffix: vs, lineSuffixBoundary: ip, cursor: Ds, breakParent: Cn, ifBreak: np, trim: op, indent: an, indentIfBreak: sp, align: Qt, addAlignmentToDoc: ma, markAsRoot: ep, dedentToRoot: Zc, dedent: tp, hardlineWithoutBreakParent: Rs, literallineWithoutBreakParent: pa, label: up, concat: (e) => e }, cd = { printDocToString: kn }, pd = { willBreak: yp, traverseDoc: js, findInDoc: qs, mapDoc: En, removeLines: Cp, stripTrailingHardline: ga, replaceEndOfLine: xp, canBreak: Fp }, hd = "3.2.5", Va = {};
yn(Va, { addDanglingComment: () => wt, addLeadingComment: () => Gt, addTrailingComment: () => Yt, getAlignmentSize: () => Ws, getIndentSize: () => Dd, getMaxContinuousCount: () => bd, getNextNonSpaceNonCommentCharacter: () => Ed, getNextNonSpaceNonCommentCharacterIndex: () => Bd, getStringWidth: () => Ms, hasNewline: () => pt, hasNewlineInRange: () => xd, hasSpaces: () => Fd, isNextLineEmpty: () => Nd, isNextLineEmptyAfterIndex: () => Js, isPreviousLineEmpty: () => Od, makeString: () => Ad, skip: () => Fr, skipEverythingButNewLine: () => Ca, skipInlineComment: () => zs, skipNewline: () => Ft, skipSpaces: () => dt, skipToLineEnd: () => ba, skipTrailingComment: () => Gs, skipWhitespace: () => Pp });
function dd(e, t) {
  if (t === !1)
    return !1;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e.length; ++r)
      if (e.charAt(r) === "*" && e.charAt(r + 1) === "/")
        return r + 2;
  }
  return t;
}
var zs = dd;
function fd(e, t) {
  return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? Ca(e, t) : t;
}
var Gs = fd;
function md(e, t) {
  let r = null, n = t;
  for (; n !== r; )
    r = n, n = dt(e, n), n = zs(e, n), n = Gs(e, n), n = Ft(e, n);
  return n;
}
var Ys = md;
function gd(e, t) {
  let r = null, n = t;
  for (; n !== r; )
    r = n, n = ba(e, n), n = zs(e, n), n = dt(e, n);
  return n = Gs(e, n), n = Ft(e, n), n !== !1 && pt(e, n);
}
var Js = gd;
function vd(e, t) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : Ws(e.slice(r + 1).match(/^[\t ]*/)[0], t);
}
var Dd = vd;
function yd(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function wd(e, t) {
  let r = e.match(new RegExp(`(${yd(t)})+`, "g"));
  return r === null ? 0 : r.reduce((n, s) => Math.max(n, s.length / t.length), 0);
}
var bd = wd;
function Cd(e, t) {
  let r = Ys(e, t);
  return r === !1 ? "" : e.charAt(r);
}
var Ed = Cd;
function kd(e, t, r) {
  for (let n = t; n < r; ++n)
    if (e.charAt(n) === `
`)
      return !0;
  return !1;
}
var xd = kd;
function _d(e, t, r = {}) {
  return dt(e, r.backwards ? t - 1 : t, r) !== t;
}
var Fd = _d;
function Sd(e, t, r) {
  let n = t === '"' ? "'" : '"', s = bn(!1, e, /\\(.)|(["'])/gs, (i, a, l) => a === n ? a : l === t ? "\\" + l : l || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(a) ? a : "\\" + a));
  return t + s + t;
}
var Ad = Sd;
function Td(e, t, r) {
  return Ys(e, r(t));
}
function Bd(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Ys(e, t) : Td(...arguments);
}
function $d(e, t, r) {
  return Vs(e, r(t));
}
function Od(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Vs(e, t) : $d(...arguments);
}
function Ld(e, t, r) {
  return Js(e, r(t));
}
function Nd(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Js(e, t) : Ld(...arguments);
}
function Ct(e, t = 1) {
  return async (...r) => {
    let n = r[t] ?? {}, s = n.plugins ?? [];
    return r[t] = { ...n, plugins: Array.isArray(s) ? s : Object.values(s) }, e(...r);
  };
}
var za = Ct(Ha);
async function Ga(e, t) {
  let { formatted: r } = await za(e, { ...t, cursorOffset: -1 });
  return r;
}
async function Pd(e, t) {
  return await Ga(e, t) === e;
}
var Id = Ct(Sa, 0), jd = { parse: Ct(sd), formatAST: Ct(id), formatDoc: Ct(od), printToDoc: Ct(ad), printDocToString: Ct(ud) }, Rd = oa, Md = Object.defineProperty, Ya = (e, t) => {
  for (var r in t)
    Md(e, r, { get: t[r], enumerable: !0 });
}, Ja = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, ut = (e, t, r) => (Ja(e, t, "read from private field"), r ? r.call(e) : t.get(e)), qd = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, Wd = (e, t, r, n) => (Ja(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ka = {};
Ya(Ka, { languages: () => Sg, options: () => Tg, parsers: () => Tu, printers: () => N2 });
var Hd = (e, t, r, n) => {
  if (!(e && t == null))
    return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, be = Hd, Ks = "string", Xs = "array", Qs = "cursor", Fn = "indent", Sn = "align", Zs = "trim", br = "group", An = "fill", Tn = "if-break", Bn = "indent-if-break", ei = "line-suffix", ti = "line-suffix-boundary", Lt = "line", ri = "label", $n = "break-parent", Xa = /* @__PURE__ */ new Set([Qs, Fn, Sn, Zs, br, An, Tn, Bn, ei, ti, Lt, ri, $n]);
function Ud(e) {
  if (typeof e == "string")
    return Ks;
  if (Array.isArray(e))
    return Xs;
  if (!e)
    return;
  let { type: t } = e;
  if (Xa.has(t))
    return t;
}
var ni = Ud, Vd = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function zd(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object")
    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (ni(e))
    throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]")
    return `Unexpected doc '${r}'.`;
  let n = Vd([...Xa].map((s) => `'${s}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Gd = class extends Error {
  constructor(t) {
    super(zd(t));
    at(this, "name", "InvalidDocError");
    this.doc = t;
  }
}, Qa = Gd, Yd = () => {
}, Jd = Yd;
function et(e) {
  return { type: Fn, contents: e };
}
function Za(e, t) {
  return { type: Sn, contents: t, n: e };
}
function ue(e, t = {}) {
  return Jd(t.expandedStates), { type: br, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Kd(e) {
  return Za(Number.NEGATIVE_INFINITY, e);
}
function Xd(e) {
  return Za({ type: "root" }, e);
}
function eu(e) {
  return { type: An, parts: e };
}
function un(e, t = "", r = {}) {
  return { type: Tn, breakContents: e, flatContents: t, groupId: r.groupId };
}
function Qd(e, t) {
  return { type: Bn, contents: e, groupId: t.groupId, negate: t.negate };
}
var Ar = { type: $n }, Zd = { type: Lt, hard: !0 }, ef = { type: Lt, hard: !0, literal: !0 }, ie = { type: Lt }, ae = { type: Lt, soft: !0 }, Z = [Zd, Ar], tf = [ef, Ar];
function tr(e, t) {
  let r = [];
  for (let n = 0; n < t.length; n++)
    n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
var rf = (e, t, r) => {
  if (!(e && t == null))
    return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, Tr = rf;
function si(e, t) {
  if (typeof e == "string")
    return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(i) {
    if (r.has(i))
      return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (ni(i)) {
      case Xs:
        return t(i.map(n));
      case An:
        return t({ ...i, parts: i.parts.map(n) });
      case Tn:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case br: {
        let { expandedStates: a, contents: l } = i;
        return a ? (a = a.map(n), l = a[0]) : l = n(l), t({ ...i, contents: l, expandedStates: a });
      }
      case Sn:
      case Fn:
      case Bn:
      case ri:
      case ei:
        return t({ ...i, contents: n(i.contents) });
      case Ks:
      case Qs:
      case Zs:
      case ti:
      case Lt:
      case $n:
        return t(i);
      default:
        throw new Qa(i);
    }
  }
}
function nf(e) {
  switch (ni(e)) {
    case An:
      if (e.parts.every((t) => t === ""))
        return "";
      break;
    case br:
      if (!e.contents && !e.id && !e.break && !e.expandedStates)
        return "";
      if (e.contents.type === br && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates)
        return e.contents;
      break;
    case Sn:
    case Fn:
    case Bn:
    case ei:
      if (!e.contents)
        return "";
      break;
    case Tn:
      if (!e.flatContents && !e.breakContents)
        return "";
      break;
    case Xs: {
      let t = [];
      for (let r of e) {
        if (!r)
          continue;
        let [n, ...s] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof Tr(!1, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...s);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Ks:
    case Qs:
    case Zs:
    case ti:
    case Lt:
    case ri:
    case $n:
      break;
    default:
      throw new Qa(e);
  }
  return e;
}
function sf(e) {
  return si(e, (t) => nf(t));
}
function Le(e, t = tf) {
  return si(e, (r) => typeof r == "string" ? tr(t, r.split(`
`)) : r);
}
var Wr = "'", go = '"';
function of(e, t) {
  let r = t === !0 || t === Wr ? Wr : go, n = r === Wr ? go : Wr, s = 0, i = 0;
  for (let a of e)
    a === r ? s++ : a === n && i++;
  return s > i ? n : r;
}
var af = of;
function uf(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var Be, lf = class {
  constructor(e) {
    qd(this, Be, void 0), Wd(this, Be, new Set(e));
  }
  getLeadingWhitespaceCount(e) {
    let t = ut(this, Be), r = 0;
    for (let n = 0; n < e.length && t.has(e.charAt(n)); n++)
      r++;
    return r;
  }
  getTrailingWhitespaceCount(e) {
    let t = ut(this, Be), r = 0;
    for (let n = e.length - 1; n >= 0 && t.has(e.charAt(n)); n--)
      r++;
    return r;
  }
  getLeadingWhitespace(e) {
    let t = this.getLeadingWhitespaceCount(e);
    return e.slice(0, t);
  }
  getTrailingWhitespace(e) {
    let t = this.getTrailingWhitespaceCount(e);
    return e.slice(e.length - t);
  }
  hasLeadingWhitespace(e) {
    return ut(this, Be).has(e.charAt(0));
  }
  hasTrailingWhitespace(e) {
    return ut(this, Be).has(Tr(!1, e, -1));
  }
  trimStart(e) {
    let t = this.getLeadingWhitespaceCount(e);
    return e.slice(t);
  }
  trimEnd(e) {
    let t = this.getTrailingWhitespaceCount(e);
    return e.slice(0, e.length - t);
  }
  trim(e) {
    return this.trimEnd(this.trimStart(e));
  }
  split(e, t = !1) {
    let r = `[${uf([...ut(this, Be)].join(""))}]+`, n = new RegExp(t ? `(${r})` : r);
    return e.split(n);
  }
  hasWhitespaceCharacter(e) {
    let t = ut(this, Be);
    return Array.prototype.some.call(e, (r) => t.has(r));
  }
  hasNonWhitespaceCharacter(e) {
    let t = ut(this, Be);
    return Array.prototype.some.call(e, (r) => !t.has(r));
  }
  isWhitespaceOnly(e) {
    let t = ut(this, Be);
    return Array.prototype.every.call(e, (r) => t.has(r));
  }
};
Be = /* @__PURE__ */ new WeakMap();
var cf = lf, pf = ["	", `
`, "\f", "\r", " "], hf = new cf(pf), qe = hf, df = class extends Error {
  constructor(t, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`);
    at(this, "name", "UnexpectedNodeError");
    this.node = t;
  }
}, ff = df;
function mf(e) {
  return (e == null ? void 0 : e.type) === "front-matter";
}
var On = mf, gf = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]), vf = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function tu(e, t) {
  var r;
  if (e.type === "text" || e.type === "comment" || On(e) || e.type === "yaml" || e.type === "toml")
    return null;
  if (e.type === "attribute" && delete t.value, e.type === "docType" && delete t.value, e.type === "angularControlFlowBlock" && (r = t.parameters) != null && r.children)
    for (let n of t.parameters.children)
      vf.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
  e.type === "angularIcuExpression" && (t.switchValue = e.switchValue.trim());
}
tu.ignoredProperties = gf;
var Df = tu;
async function yf(e, t) {
  if (e.lang === "yaml") {
    let r = e.value.trim(), n = r ? await t(r, { parser: "yaml" }) : "";
    return Xd([e.startDelimiter, Z, n, n ? Z : "", e.endDelimiter]);
  }
}
var wf = yf;
function Ln(e, t = !0) {
  return [et([ae, e]), t ? ae : ""];
}
function rr(e, t) {
  let r = e.type === "NGRoot" ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression" ? e.node.body[0].expression : e.node : e.type === "JsExpressionRoot" ? e.node : e;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function We(e, t, r, n) {
  r = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...r };
  let s = !0;
  n && (r.__onHtmlBindingRoot = (a, l) => {
    s = n(a, l);
  });
  let i = await t(e, r, t);
  return s ? ue(i) : Ln(i);
}
function bf(e, t, r, n) {
  let { node: s } = r, i = n.originalText.slice(s.sourceSpan.start.offset, s.sourceSpan.end.offset);
  return /^\s*$/.test(i) ? "" : We(i, e, { parser: "__ng_directive", __isInHtmlAttribute: !1, trailingComma: "none" }, rr);
}
var Cf = bf, Ef = (e) => String(e).split(/[/\\]/).pop();
function vo(e, t) {
  if (!t)
    return;
  let r = Ef(t).toLowerCase();
  return e.find(({ filenames: n }) => n == null ? void 0 : n.some((s) => s.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((s) => r.endsWith(s)));
}
function kf(e, t) {
  if (t)
    return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(t)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t}`));
}
function xf(e, t) {
  let r = e.plugins.flatMap((s) => s.languages ?? []), n = kf(r, t.language) ?? vo(r, t.physicalFile) ?? vo(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var Nn = xf, _f = "inline", Ff = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", marquee: "inline-block", source: "block", track: "block", details: "block", summary: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, Sf = "normal", Af = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function Tf(e) {
  return e.type === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
var Cr = Tf, Bf = (e) => be(!1, e, /^[\t\f\r ]*\n/g, ""), ru = (e) => Bf(qe.trimEnd(e)), $f = (e) => {
  let t = e, r = qe.getLeadingWhitespace(t);
  r && (t = t.slice(r.length));
  let n = qe.getTrailingWhitespace(t);
  return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
};
function nu(e, t) {
  return !!(e.type === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || e.type === "ieConditionalComment" && !e.complete || Zt(e) && e.children.some((r) => r.type !== "text" && r.type !== "interpolation") || oi(e, t) && !Ge(e) && e.type !== "interpolation");
}
function Pn(e) {
  return e.type === "attribute" || !e.parent || !e.prev ? !1 : Of(e.prev);
}
function Of(e) {
  return e.type === "comment" && e.value.trim() === "prettier-ignore";
}
function Fe(e) {
  return e.type === "text" || e.type === "comment";
}
function Ge(e) {
  return e.type === "element" && (e.fullName === "script" || e.fullName === "style" || e.fullName === "svg:style" || e.fullName === "svg:script" || Cr(e) && (e.name === "script" || e.name === "style"));
}
function Lf(e) {
  return e.children && !Ge(e);
}
function Nf(e) {
  return Ge(e) || e.type === "interpolation" || su(e);
}
function su(e) {
  return pu(e).startsWith("pre");
}
function Pf(e, t) {
  var r, n;
  let s = i();
  if (s && !e.prev && (n = (r = e.parent) == null ? void 0 : r.tagDefinition) != null && n.ignoreFirstLf)
    return e.type === "interpolation";
  return s;
  function i() {
    return On(e) || e.type === "angularControlFlowBlock" ? !1 : (e.type === "text" || e.type === "interpolation") && e.prev && (e.prev.type === "text" || e.prev.type === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : Zt(e.parent) ? !0 : !(!e.prev && (e.parent.type === "root" || Zt(e) && e.parent || Ge(e.parent) || In(e.parent, t) || !Vf(e.parent.cssDisplay)) || e.prev && !Yf(e.prev.cssDisplay));
  }
}
function If(e, t) {
  return On(e) || e.type === "angularControlFlowBlock" ? !1 : (e.type === "text" || e.type === "interpolation") && e.next && (e.next.type === "text" || e.next.type === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : Zt(e.parent) ? !0 : !(!e.next && (e.parent.type === "root" || Zt(e) && e.parent || Ge(e.parent) || In(e.parent, t) || !zf(e.parent.cssDisplay)) || e.next && !Gf(e.next.cssDisplay));
}
function jf(e) {
  return Jf(e.cssDisplay) && !Ge(e);
}
function Hr(e) {
  return On(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
}
function Rf(e) {
  return iu(e) || e.type === "element" && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some((t) => qf(t))) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.type !== "text" && au(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || uu(e.lastChild));
}
function iu(e) {
  return e.type === "element" && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && e.cssDisplay !== "table-cell");
}
function ss(e) {
  return lu(e) || e.prev && Mf(e.prev) || ou(e);
}
function Mf(e) {
  return lu(e) || e.type === "element" && e.fullName === "br" || ou(e);
}
function ou(e) {
  return au(e) && uu(e);
}
function au(e) {
  return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : e.parent.type === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function uu(e) {
  return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : e.parent.type === "root" || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function lu(e) {
  switch (e.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return !0;
    case "element":
      return ["script", "select"].includes(e.name);
  }
  return !1;
}
function ii(e) {
  return e.lastChild ? ii(e.lastChild) : e;
}
function qf(e) {
  var t;
  return (t = e.children) == null ? void 0 : t.some((r) => r.type !== "text");
}
function cu(e) {
  if (e)
    switch (e) {
      case "module":
      case "text/javascript":
      case "text/babel":
      case "application/javascript":
        return "babel";
      case "application/x-typescript":
        return "typescript";
      case "text/markdown":
        return "markdown";
      case "text/html":
        return "html";
      case "text/x-handlebars-template":
        return "glimmer";
      default:
        if (e.endsWith("json") || e.endsWith("importmap") || e === "speculationrules")
          return "json";
    }
}
function Wf(e, t) {
  let { name: r, attrMap: n } = e;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src"))
    return;
  let { type: s, lang: i } = e.attrMap;
  return !i && !s ? "babel" : Nn(t, { language: i }) ?? cu(s);
}
function Hf(e, t) {
  if (!oi(e, t))
    return;
  let { attrMap: r } = e;
  if (Object.prototype.hasOwnProperty.call(r, "src"))
    return;
  let { type: n, lang: s } = r;
  return Nn(t, { language: s }) ?? cu(n);
}
function Uf(e, t) {
  if (e.name !== "style")
    return;
  let { lang: r } = e.attrMap;
  return r ? Nn(t, { language: r }) : "css";
}
function Do(e, t) {
  return Wf(e, t) ?? Uf(e, t) ?? Hf(e, t);
}
function Br(e) {
  return e === "block" || e === "list-item" || e.startsWith("table");
}
function Vf(e) {
  return !Br(e) && e !== "inline-block";
}
function zf(e) {
  return !Br(e) && e !== "inline-block";
}
function Gf(e) {
  return !Br(e);
}
function Yf(e) {
  return !Br(e);
}
function Jf(e) {
  return !Br(e) && e !== "inline-block";
}
function Zt(e) {
  return pu(e).startsWith("pre");
}
function Kf(e, t) {
  let r = e;
  for (; r; ) {
    if (t(r))
      return !0;
    r = r.parent;
  }
  return !1;
}
function Xf(e, t) {
  var r;
  if (nr(e, t))
    return "block";
  if (((r = e.prev) == null ? void 0 : r.type) === "comment") {
    let s = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
    if (s)
      return s[1];
  }
  let n = !1;
  if (e.type === "element" && e.namespace === "svg")
    if (Kf(e, (s) => s.fullName === "svg:foreignObject"))
      n = !0;
    else
      return e.name === "svg" ? "inline-block" : "block";
  switch (t.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return e.type === "element" && (!e.namespace || n || Cr(e)) && Ff[e.name] || _f;
  }
}
function pu(e) {
  return e.type === "element" && (!e.namespace || Cr(e)) && Af[e.name] || Sf;
}
function Qf(e) {
  let t = Number.POSITIVE_INFINITY;
  for (let r of e.split(`
`)) {
    if (r.length === 0)
      continue;
    let n = qe.getLeadingWhitespaceCount(r);
    if (n === 0)
      return 0;
    r.length !== n && n < t && (t = n);
  }
  return t === Number.POSITIVE_INFINITY ? 0 : t;
}
function hu(e, t = Qf(e)) {
  return t === 0 ? e : e.split(`
`).map((r) => r.slice(t)).join(`
`);
}
function du(e) {
  return be(!1, be(!1, e, "&apos;", "'"), "&quot;", '"');
}
function mt(e) {
  return du(e.value);
}
var Zf = /* @__PURE__ */ new Set(["template", "style", "script"]);
function In(e, t) {
  return nr(e, t) && !Zf.has(e.fullName);
}
function nr(e, t) {
  return t.parser === "vue" && e.type === "element" && e.parent.type === "root" && e.fullName.toLowerCase() !== "html";
}
function oi(e, t) {
  return nr(e, t) && (In(e, t) || e.attrMap.lang && e.attrMap.lang !== "html");
}
function em(e) {
  let t = e.fullName;
  return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function tm(e, t) {
  let r = e.parent;
  if (!nr(r, t))
    return !1;
  let n = r.fullName, s = e.fullName;
  return n === "script" && s === "setup" || n === "style" && s === "vars";
}
function fu(e, t = e.value) {
  return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? Le(t) : Le(hu(ru(t)), Z) : tr(ie, qe.split(t));
}
function mu(e, t) {
  return nr(e, t) && e.name === "script";
}
var gu = /{{(.+?)}}/s;
async function rm(e, t) {
  let r = [];
  for (let [n, s] of e.split(gu).entries())
    if (n % 2 === 0)
      r.push(Le(s));
    else
      try {
        r.push(ue(["{{", et([ie, await We(s, t, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0, trailingComma: "none" })]), ie, "}}"]));
      } catch {
        r.push("{{", Le(s), "}}");
      }
  return r;
}
function ai({ parser: e }) {
  return (t, r, n) => We(mt(n.node), t, { parser: e, trailingComma: "none" }, rr);
}
var nm = ai({ parser: "__ng_action" }), sm = ai({ parser: "__ng_binding" }), im = ai({ parser: "__ng_directive" });
function om(e, t) {
  if (t.parser !== "angular")
    return;
  let { node: r } = e, n = r.fullName;
  if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-"))
    return nm;
  if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/.test(n) || /^ng-(?:if|show|hide|class|style)$/.test(n))
    return sm;
  if (n.startsWith("*"))
    return im;
  let s = mt(r);
  if (/^i18n(?:-.+)?$/.test(n))
    return () => Ln(eu(fu(r, s.trim())), !s.includes("@@"));
  if (gu.test(s))
    return (i) => rm(s, i);
}
var am = om;
function um(e, t) {
  let { node: r } = e, n = mt(r);
  if (r.fullName === "class" && !t.parentParser && !n.includes("{{"))
    return () => n.trim().split(/\s+/).join(" ");
}
var lm = um;
function yo(e) {
  return e === "	" || e === `
` || e === "\f" || e === "\r" || e === " ";
}
var cm = /^[ \t\n\r\u000c]+/, pm = /^[, \t\n\r\u000c]+/, hm = /^[^ \t\n\r\u000c]+/, dm = /[,]+$/, wo = /^\d+$/, fm = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function mm(e) {
  let t = e.length, r, n, s, i, a, l = 0, p;
  function c(h) {
    let m, d = h.exec(e.substring(l));
    if (d)
      return [m] = d, l += m.length, m;
  }
  let u = [];
  for (; ; ) {
    if (c(pm), l >= t) {
      if (u.length === 0)
        throw new Error("Must contain one or more image candidate strings.");
      return u;
    }
    p = l, r = c(hm), n = [], r.slice(-1) === "," ? (r = r.replace(dm, ""), f()) : o();
  }
  function o() {
    for (c(cm), s = "", i = "in descriptor"; ; ) {
      if (a = e.charAt(l), i === "in descriptor")
        if (yo(a))
          s && (n.push(s), s = "", i = "after descriptor");
        else if (a === ",") {
          l += 1, s && n.push(s), f();
          return;
        } else if (a === "(")
          s += a, i = "in parens";
        else if (a === "") {
          s && n.push(s), f();
          return;
        } else
          s += a;
      else if (i === "in parens")
        if (a === ")")
          s += a, i = "in descriptor";
        else if (a === "") {
          n.push(s), f();
          return;
        } else
          s += a;
      else if (i === "after descriptor" && !yo(a))
        if (a === "") {
          f();
          return;
        } else
          i = "in descriptor", l -= 1;
      l += 1;
    }
  }
  function f() {
    let h = !1, m, d, D, y, g = {}, v, b, w, C, E;
    for (y = 0; y < n.length; y++)
      v = n[y], b = v[v.length - 1], w = v.substring(0, v.length - 1), C = parseInt(w, 10), E = parseFloat(w), wo.test(w) && b === "w" ? ((m || d) && (h = !0), C === 0 ? h = !0 : m = C) : fm.test(w) && b === "x" ? ((m || d || D) && (h = !0), E < 0 ? h = !0 : d = E) : wo.test(w) && b === "h" ? ((D || d) && (h = !0), C === 0 ? h = !0 : D = C) : h = !0;
    if (!h)
      g.source = { value: r, startOffset: p }, m && (g.width = { value: m }), d && (g.density = { value: d }), D && (g.height = { value: D }), u.push(g);
    else
      throw new Error(`Invalid srcset descriptor found in "${e}" at "${v}".`);
  }
}
var gm = mm;
function vm(e) {
  if (e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source"))
    return () => ym(mt(e.node));
}
var vu = { width: "w", height: "h", density: "x" }, Dm = Object.keys(vu);
function ym(e) {
  let t = gm(e), r = Dm.filter((u) => t.some((o) => Object.prototype.hasOwnProperty.call(o, u)));
  if (r.length > 1)
    throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r, s = vu[n], i = t.map((u) => u.source.value), a = Math.max(...i.map((u) => u.length)), l = t.map((u) => u[n] ? String(u[n].value) : ""), p = l.map((u) => {
    let o = u.indexOf(".");
    return o === -1 ? u.length : o;
  }), c = Math.max(...p);
  return Ln(tr([",", ie], i.map((u, o) => {
    let f = [u], h = l[o];
    if (h) {
      let m = a - u.length + 1, d = c - p[o], D = " ".repeat(m + d);
      f.push(un(D, " "), h + s);
    }
    return f;
  })));
}
var wm = vm;
function bm(e, t) {
  let { node: r } = e, n = mt(e.node).trim();
  if (r.fullName === "style" && !t.parentParser && !n.includes("{{"))
    return async (s) => Ln(await s(n, { parser: "css", __isHTMLStyleAttribute: !0 }));
}
var is = /* @__PURE__ */ new WeakMap();
function Cm(e, t) {
  let { root: r } = e;
  return is.has(r) || is.set(r, r.children.some((n) => mu(n, t) && ["ts", "typescript"].includes(n.attrMap.lang))), is.get(r);
}
var ui = Cm;
function Em(e, t, r) {
  let { node: n } = r, s = mt(n);
  return We(`type T<${s}> = any`, e, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: !0 }, rr);
}
function km(e, t, { parseWithTs: r }) {
  return We(`function _(${e}) {}`, t, { parser: r ? "babel-ts" : "babel", __isVueBindings: !0 });
}
function xm(e) {
  let t = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, r = /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i, n = e.trim();
  return t.test(n) || r.test(n);
}
async function _m(e, t, r, n) {
  let s = mt(r.node), { left: i, operator: a, right: l } = Fm(s), p = ui(r, n);
  return [ue(await We(`function _(${i}) {}`, e, { parser: p ? "babel-ts" : "babel", __isVueForBindingLeft: !0 })), " ", a, " ", await We(l, e, { parser: p ? "__ts_expression" : "__js_expression" })];
}
function Fm(e) {
  let t = /(.*?)\s+(in|of)\s+(.*)/s, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/, n = /^\(|\)$/g, s = e.match(t);
  if (!s)
    return;
  let i = {};
  if (i.for = s[3].trim(), !i.for)
    return;
  let a = be(!1, s[1].trim(), n, ""), l = a.match(r);
  l ? (i.alias = a.replace(r, ""), i.iterator1 = l[1].trim(), l[2] && (i.iterator2 = l[2].trim())) : i.alias = a;
  let p = [i.alias, i.iterator1, i.iterator2];
  if (!p.some((c, u) => !c && (u === 0 || p.slice(u + 1).some(Boolean))))
    return { left: p.filter(Boolean).join(","), operator: s[2], right: i.for };
}
function Sm(e, t) {
  if (t.parser !== "vue")
    return;
  let { node: r } = e, n = r.fullName;
  if (n === "v-for")
    return _m;
  if (n === "generic" && mu(r.parent, t))
    return Em;
  let s = mt(r), i = ui(e, t);
  if (em(r) || tm(r, t))
    return (a) => km(s, a, { parseWithTs: i });
  if (n.startsWith("@") || n.startsWith("v-on:"))
    return (a) => Am(s, a, { parseWithTs: i });
  if (n.startsWith(":") || n.startsWith("v-bind:"))
    return (a) => Tm(s, a, { parseWithTs: i });
  if (n.startsWith("v-"))
    return (a) => Du(s, a, { parseWithTs: i });
}
function Am(e, t, { parseWithTs: r }) {
  return xm(e) ? Du(e, t, { parseWithTs: r }) : We(e, t, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, rr);
}
function Tm(e, t, { parseWithTs: r }) {
  return We(e, t, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, rr);
}
function Du(e, t, { parseWithTs: r }) {
  return We(e, t, { parser: r ? "__ts_expression" : "__js_expression" }, rr);
}
var Bm = Sm;
function $m(e, t) {
  let { node: r } = e;
  if (r.value) {
    if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(t.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || t.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}"))
      return [r.rawName, "=", r.value];
    for (let n of [wm, bm, lm, Bm, am]) {
      let s = n(e, t);
      if (s)
        return Om(s);
    }
  }
}
function Om(e) {
  return async (t, r, n, s) => {
    let i = await e(t, r, n, s);
    if (i)
      return i = si(i, (a) => typeof a == "string" ? be(!1, a, '"', "&quot;") : a), [n.node.rawName, '="', ue(i), '"'];
  };
}
var Lm = $m, yu = new Proxy(() => {
}, { get: () => yu }), wu = yu;
function Nm(e) {
  return Array.isArray(e) && e.length > 0;
}
var li = Nm;
function jn(e) {
  return e.sourceSpan.start.offset;
}
function Rn(e) {
  return e.sourceSpan.end.offset;
}
function xs(e, t) {
  return [e.isSelfClosing ? "" : Pm(e, t), vr(e, t)];
}
function Pm(e, t) {
  return e.lastChild && Er(e.lastChild) ? "" : [Im(e, t), ci(e, t)];
}
function vr(e, t) {
  return (e.next ? At(e.next) : Or(e.parent)) ? "" : [$r(e, t), St(e, t)];
}
function Im(e, t) {
  return Or(e) ? $r(e.lastChild, t) : "";
}
function St(e, t) {
  return Er(e) ? ci(e.parent, t) : Mn(e) ? pi(e.next) : "";
}
function ci(e, t) {
  if (wu(!e.isSelfClosing), bu(e, t))
    return "";
  switch (e.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e.hasHtmComponentClosingTag)
        return "<//";
    default:
      return `</${e.rawName}`;
  }
}
function $r(e, t) {
  if (bu(e, t))
    return "";
  switch (e.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (e.isSelfClosing)
        return "/>";
    default:
      return ">";
  }
}
function bu(e, t) {
  return !e.isSelfClosing && !e.endSourceSpan && (Pn(e) || nu(e.parent, t));
}
function At(e) {
  return e.prev && e.prev.type !== "docType" && e.type !== "angularControlFlowBlock" && !Fe(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function Or(e) {
  var t;
  return ((t = e.lastChild) == null ? void 0 : t.isTrailingSpaceSensitive) && !e.lastChild.hasTrailingSpaces && !Fe(ii(e.lastChild)) && !Zt(e);
}
function Er(e) {
  return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Fe(ii(e));
}
function Mn(e) {
  return e.next && !Fe(e.next) && Fe(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function jm(e) {
  let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
  return t ? t[1] ? t[1].split(/\s+/) : !0 : !1;
}
function qn(e) {
  return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function Rm(e, t, r) {
  var n;
  let { node: s } = e;
  if (!li(s.attrs))
    return s.isSelfClosing ? " " : "";
  let i = ((n = s.prev) == null ? void 0 : n.type) === "comment" && jm(s.prev.value), a = typeof i == "boolean" ? () => i : Array.isArray(i) ? (o) => i.includes(o.rawName) : () => !1, l = e.map(({ node: o }) => a(o) ? Le(t.originalText.slice(jn(o), Rn(o))) : r(), "attrs"), p = s.type === "element" && s.fullName === "script" && s.attrs.length === 1 && s.attrs[0].fullName === "src" && s.children.length === 0, c = t.singleAttributePerLine && s.attrs.length > 1 && !nr(s, t) ? Z : ie, u = [et([p ? " " : ie, tr(c, l)])];
  return s.firstChild && qn(s.firstChild) || s.isSelfClosing && Or(s.parent) || p ? u.push(s.isSelfClosing ? " " : "") : u.push(t.bracketSameLine ? s.isSelfClosing ? " " : "" : s.isSelfClosing ? ie : ae), u;
}
function Mm(e) {
  return e.firstChild && qn(e.firstChild) ? "" : hi(e);
}
function _s(e, t, r) {
  let { node: n } = e;
  return [Dr(n, t), Rm(e, t, r), n.isSelfClosing ? "" : Mm(n)];
}
function Dr(e, t) {
  return e.prev && Mn(e.prev) ? "" : [Tt(e, t), pi(e)];
}
function Tt(e, t) {
  return qn(e) ? hi(e.parent) : At(e) ? $r(e.prev, t) : "";
}
function pi(e) {
  switch (e.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${e.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType":
      return e.value === "html" ? "<!doctype" : "<!DOCTYPE";
    case "angularIcuExpression":
      return "{";
    case "element":
      if (e.condition)
        return `<!--[if ${e.condition}]><!--><${e.rawName}`;
    default:
      return `<${e.rawName}`;
  }
}
function hi(e) {
  switch (wu(!e.isSelfClosing), e.type) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e.condition)
        return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function qm(e, t) {
  if (!e.endSourceSpan)
    return "";
  let r = e.startSourceSpan.end.offset;
  e.firstChild && qn(e.firstChild) && (r -= hi(e).length);
  let n = e.endSourceSpan.start.offset;
  return e.lastChild && Er(e.lastChild) ? n += ci(e, t).length : Or(e) && (n -= $r(e.lastChild, t).length), t.originalText.slice(r, n);
}
var Cu = qm, Wm = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function Hm(e, t) {
  let { node: r } = e;
  switch (r.type) {
    case "element":
      if (Ge(r) || r.type === "interpolation")
        return;
      if (!r.isSelfClosing && oi(r, t)) {
        let n = Do(r, t);
        return n ? async (s, i) => {
          let a = Cu(r, t), l = /^\s*$/.test(a), p = "";
          return l || (p = await s(ru(a), { parser: n, __embeddedInHtml: !0 }), l = p === ""), [Tt(r, t), ue(_s(e, t, i)), l ? "" : Z, p, l ? "" : Z, xs(r, t), St(r, t)];
        } : void 0;
      }
      break;
    case "text":
      if (Ge(r.parent)) {
        let n = Do(r.parent, t);
        if (n)
          return async (s) => {
            let i = n === "markdown" ? hu(r.value.replace(/^[^\S\n]*\n/, "")) : r.value, a = { parser: n, __embeddedInHtml: !0 };
            if (t.parser === "html" && n === "babel") {
              let l = "script", { attrMap: p } = r.parent;
              p && (p.type === "module" || p.type === "text/babel" && p["data-type"] === "module") && (l = "module"), a.__babelSourceType = l;
            }
            return [Ar, Tt(r, t), await s(i, a), St(r, t)];
          };
      } else if (r.parent.type === "interpolation")
        return async (n) => {
          let s = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
          return t.parser === "angular" ? (s.parser = "__ng_interpolation", s.trailingComma = "none") : t.parser === "vue" ? s.parser = ui(e, t) ? "__vue_ts_expression" : "__vue_expression" : s.parser = "__js_expression", [et([ie, await n(r.value, s)]), r.parent.next && At(r.parent.next) ? " " : ie];
        };
      break;
    case "attribute":
      return Lm(e, t);
    case "front-matter":
      return (n) => wf(r, n);
    case "angularControlFlowBlockParameters":
      return Wm.has(e.parent.name) ? Cf : void 0;
  }
}
var Um = Hm, ar = null;
function yr(e) {
  if (ar !== null && typeof ar.property) {
    let t = ar;
    return ar = yr.prototype = null, t;
  }
  return ar = yr.prototype = e ?? /* @__PURE__ */ Object.create(null), new yr();
}
var Vm = 10;
for (let e = 0; e <= Vm; e++)
  yr();
function zm(e) {
  return yr(e);
}
function Gm(e, t = "type") {
  zm(e);
  function r(n) {
    let s = n[t], i = e[s];
    if (!Array.isArray(i))
      throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
    return i;
  }
  return r;
}
var Ym = Gm, Jm = { "front-matter": [], root: ["children"], element: ["attrs", "children"], ieConditionalComment: ["children"], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ["children"], text: ["children"], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: ["children"], angularControlFlowBlockParameter: [], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] }, Km = Jm, Xm = Ym(Km), Qm = Xm;
function Zm(e) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e);
}
function eg(e) {
  return `<!-- @format -->

` + e;
}
var tg = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
function Eu(e) {
  let t = Rn(e);
  return e.type === "element" && !e.endSourceSpan && li(e.children) ? Math.max(t, Eu(Tr(!1, e.children, -1))) : t;
}
function ur(e, t, r) {
  let n = e.node;
  if (Pn(n)) {
    let s = Eu(n);
    return [Tt(n, t), Le(qe.trimEnd(t.originalText.slice(jn(n) + (n.prev && Mn(n.prev) ? pi(n).length : 0), s - (n.next && At(n.next) ? $r(n, t).length : 0)))), St(n, t)];
  }
  return r();
}
function Ur(e, t) {
  return Fe(e) && Fe(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? ss(t) ? Z : ie : "" : ss(t) ? Z : ae : Mn(e) && (Pn(t) || t.firstChild || t.isSelfClosing || t.type === "element" && t.attrs.length > 0) || e.type === "element" && e.isSelfClosing && At(t) ? "" : !t.isLeadingSpaceSensitive || ss(t) || At(t) && e.lastChild && Er(e.lastChild) && e.lastChild.lastChild && Er(e.lastChild.lastChild) ? Z : t.hasLeadingSpaces ? ie : ae;
}
function di(e, t, r) {
  let { node: n } = e;
  if (iu(n))
    return [Ar, ...e.map((i) => {
      let a = i.node, l = a.prev ? Ur(a.prev, a) : "";
      return [l ? [l, Hr(a.prev) ? Z : ""] : "", ur(i, t, r)];
    }, "children")];
  let s = n.children.map(() => Symbol(""));
  return e.map((i, a) => {
    let l = i.node;
    if (Fe(l)) {
      if (l.prev && Fe(l.prev)) {
        let m = Ur(l.prev, l);
        if (m)
          return Hr(l.prev) ? [Z, Z, ur(i, t, r)] : [m, ur(i, t, r)];
      }
      return ur(i, t, r);
    }
    let p = [], c = [], u = [], o = [], f = l.prev ? Ur(l.prev, l) : "", h = l.next ? Ur(l, l.next) : "";
    return f && (Hr(l.prev) ? p.push(Z, Z) : f === Z ? p.push(Z) : Fe(l.prev) ? c.push(f) : c.push(un("", ae, { groupId: s[a - 1] }))), h && (Hr(l) ? Fe(l.next) && o.push(Z, Z) : h === Z ? Fe(l.next) && o.push(Z) : u.push(h)), [...p, ue([...c, ue([ur(i, t, r), ...u], { id: s[a] })]), ...o];
  }, "children");
}
function rg(e, t, r) {
  let { node: n } = e, s = [];
  ng(e) && s.push("} "), s.push("@", n.name), n.parameters && s.push(" (", ue(r("parameters")), ")"), s.push(" {");
  let i = ku(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = !0, n.lastChild.hasTrailingSpaces = !0, s.push(et([Z, di(e, t, r)])), i && s.push(Z, "}")) : i && s.push("}"), ue(s, { shouldBreak: !0 });
}
function ku(e) {
  var t, r;
  return !(((t = e.next) == null ? void 0 : t.type) === "angularControlFlowBlock" && (r = tg.get(e.name)) != null && r.has(e.next.name));
}
function ng(e) {
  let { previous: t } = e;
  return (t == null ? void 0 : t.type) === "angularControlFlowBlock" && !Pn(t) && !ku(t);
}
function sg(e, t, r) {
  return [et([ae, tr([";", ie], e.map(r, "children"))]), ae];
}
function ig(e, t, r) {
  let { node: n } = e;
  return [Dr(n, t), ue([n.switchValue.trim(), ", ", n.clause, n.cases.length > 0 ? [",", et([ie, tr(ie, e.map(r, "cases"))])] : "", ae]), vr(n, t)];
}
function og(e, t, r) {
  let { node: n } = e;
  return [n.value, " {", ue([et([ae, e.map(({ node: s }) => s.type === "text" && !qe.trim(s.value) ? "" : r(), "expression")]), ae]), "}"];
}
function ag(e, t, r) {
  let { node: n } = e;
  if (nu(n, t))
    return [Tt(n, t), ue(_s(e, t, r)), Le(Cu(n, t)), ...xs(n, t), St(n, t)];
  let s = n.children.length === 1 && (n.firstChild.type === "interpolation" || n.firstChild.type === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id"), a = (u) => ue([ue(_s(e, t, r), { id: i }), u, xs(n, t)]), l = (u) => s ? Qd(u, { groupId: i }) : (Ge(n) || In(n, t)) && n.parent.type === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? u : et(u), p = () => s ? un(ae, "", { groupId: i }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? ie : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? Kd(ae) : ae, c = () => (n.next ? At(n.next) : Or(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : s ? un(ae, "", { groupId: i }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? ie : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`).test(n.lastChild.value) ? "" : ae;
  return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? ie : "") : a([Rf(n) ? Ar : "", l([p(), di(e, t, r)]), c()]);
}
function fi(e) {
  return e >= 9 && e <= 32 || e == 160;
}
function xu(e) {
  return 48 <= e && e <= 57;
}
function mi(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ug(e) {
  return e >= 97 && e <= 102 || e >= 65 && e <= 70 || xu(e);
}
function _u(e) {
  return e === 10 || e === 13;
}
function bo(e) {
  return 48 <= e && e <= 55;
}
function Co(e) {
  return e === 39 || e === 34 || e === 96;
}
var lg = /-+([a-z0-9])/g;
function cg(e) {
  return e.replace(lg, (...t) => t[1].toUpperCase());
}
var Fs = class Fu {
  constructor(t, r, n, s) {
    this.file = t, this.offset = r, this.line = n, this.col = s;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(t) {
    let r = this.file.content, n = r.length, s = this.offset, i = this.line, a = this.col;
    for (; s > 0 && t < 0; )
      if (s--, t++, r.charCodeAt(s) == 10) {
        i--;
        let l = r.substring(0, s - 1).lastIndexOf(`
`);
        a = l > 0 ? s - l : s;
      } else
        a--;
    for (; s < n && t > 0; ) {
      let l = r.charCodeAt(s);
      s++, t--, l == 10 ? (i++, a = 0) : a++;
    }
    return new Fu(this.file, s, i, a);
  }
  getContext(t, r) {
    let n = this.file.content, s = this.offset;
    if (s != null) {
      s > n.length - 1 && (s = n.length - 1);
      let i = s, a = 0, l = 0;
      for (; a < t && s > 0 && (s--, a++, !(n[s] == `
` && ++l == r)); )
        ;
      for (a = 0, l = 0; a < t && i < n.length - 1 && (i++, a++, !(n[i] == `
` && ++l == r)); )
        ;
      return { before: n.substring(s, this.offset), after: n.substring(this.offset, i + 1) };
    }
    return null;
  }
}, Su = class {
  constructor(t, r) {
    this.content = t, this.url = r;
  }
}, V = class {
  constructor(e, t, r = e, n = null) {
    this.start = e, this.end = t, this.fullStart = r, this.details = n;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
}, ln;
(function(e) {
  e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR";
})(ln || (ln = {}));
var Au = class {
  constructor(t, r, n = ln.ERROR) {
    this.span = t, this.msg = r, this.level = n;
  }
  contextualMessage() {
    let t = this.span.start.getContext(100, 3);
    return t ? `${this.msg} ("${t.before}[${ln[this.level]} ->]${t.after}")` : this.msg;
  }
  toString() {
    let t = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${t}`;
  }
}, pg = [dg, fg, gg, Dg, yg, Cg, wg, bg, Eg, vg];
function hg(e, t) {
  for (let r of pg)
    r(e, t);
  return e;
}
function dg(e) {
  e.walk((t) => {
    if (t.type === "element" && t.tagDefinition.ignoreFirstLf && t.children.length > 0 && t.children[0].type === "text" && t.children[0].value[0] === `
`) {
      let r = t.children[0];
      r.value.length === 1 ? t.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function fg(e) {
  let t = (r) => {
    var n, s;
    return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((s = r.firstChild) == null ? void 0 : s.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  };
  e.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!t(s))
          continue;
        let i = s.prev, a = s.firstChild;
        r.removeChild(i), n--;
        let l = new V(i.sourceSpan.start, a.sourceSpan.end), p = new V(l.start, s.sourceSpan.end);
        s.condition = i.condition, s.sourceSpan = p, s.startSourceSpan = l, s.removeChild(a);
      }
  });
}
function mg(e, t, r) {
  e.walk((n) => {
    if (n.children)
      for (let s = 0; s < n.children.length; s++) {
        let i = n.children[s];
        if (i.type !== "text" && !t(i))
          continue;
        i.type !== "text" && (i.type = "text", i.value = r(i));
        let a = i.prev;
        !a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new V(a.sourceSpan.start, i.sourceSpan.end), n.removeChild(i), s--);
      }
  });
}
function gg(e) {
  return mg(e, (t) => t.type === "cdata", (t) => `<![CDATA[${t.value}]]>`);
}
function vg(e) {
  let t = (r) => {
    var n, s;
    return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !qe.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((s = r.next) == null ? void 0 : s.type) === "text";
  };
  e.walk((r) => {
    if (r.children)
      for (let n = 0; n < r.children.length; n++) {
        let s = r.children[n];
        if (!t(s))
          continue;
        let i = s.prev, a = s.next;
        i.value += `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value, i.sourceSpan = new V(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(s), n--, r.removeChild(a);
      }
  });
}
function Dg(e, t) {
  if (t.parser === "html")
    return;
  let r = /{{(.+?)}}/s;
  e.walk((n) => {
    if (Lf(n))
      for (let s of n.children) {
        if (s.type !== "text")
          continue;
        let i = s.sourceSpan.start, a = null, l = s.value.split(r);
        for (let p = 0; p < l.length; p++, i = a) {
          let c = l[p];
          if (p % 2 === 0) {
            a = i.moveBy(c.length), c.length > 0 && n.insertChildBefore(s, { type: "text", value: c, sourceSpan: new V(i, a) });
            continue;
          }
          a = i.moveBy(c.length + 4), n.insertChildBefore(s, { type: "interpolation", sourceSpan: new V(i, a), children: c.length === 0 ? [] : [{ type: "text", value: c, sourceSpan: new V(i.moveBy(2), a.moveBy(-2)) }] });
        }
        n.removeChild(s);
      }
  });
}
function yg(e) {
  e.walk((t) => {
    if (!t.children)
      return;
    if (t.children.length === 0 || t.children.length === 1 && t.children[0].type === "text" && qe.trim(t.children[0].value).length === 0) {
      t.hasDanglingSpaces = t.children.length > 0, t.children = [];
      return;
    }
    let r = Nf(t), n = su(t);
    if (!r)
      for (let s = 0; s < t.children.length; s++) {
        let i = t.children[s];
        if (i.type !== "text")
          continue;
        let { leadingWhitespace: a, text: l, trailingWhitespace: p } = $f(i.value), c = i.prev, u = i.next;
        l ? (i.value = l, i.sourceSpan = new V(i.sourceSpan.start.moveBy(a.length), i.sourceSpan.end.moveBy(-p.length)), a && (c && (c.hasTrailingSpaces = !0), i.hasLeadingSpaces = !0), p && (i.hasTrailingSpaces = !0, u && (u.hasLeadingSpaces = !0))) : (t.removeChild(i), s--, (a || p) && (c && (c.hasTrailingSpaces = !0), u && (u.hasLeadingSpaces = !0)));
      }
    t.isWhitespaceSensitive = r, t.isIndentationSensitive = n;
  });
}
function wg(e) {
  e.walk((t) => {
    t.isSelfClosing = !t.children || t.type === "element" && (t.tagDefinition.isVoid || t.endSourceSpan && t.startSourceSpan.start === t.endSourceSpan.start && t.startSourceSpan.end === t.endSourceSpan.end);
  });
}
function bg(e, t) {
  e.walk((r) => {
    r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function Cg(e, t) {
  e.walk((r) => {
    r.cssDisplay = Xf(r, t);
  });
}
function Eg(e, t) {
  e.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = jf(r);
        return;
      }
      for (let s of n)
        s.isLeadingSpaceSensitive = Pf(s, t), s.isTrailingSpaceSensitive = If(s, t);
      for (let s = 0; s < n.length; s++) {
        let i = n[s];
        i.isLeadingSpaceSensitive = (s === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (s === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
      }
    }
  });
}
var kg = hg;
function xg(e, t, r) {
  let { node: n } = e;
  switch (n.type) {
    case "front-matter":
      return Le(n.raw);
    case "root":
      return t.__onHtmlRoot && t.__onHtmlRoot(n), [ue(di(e, t, r)), Z];
    case "element":
    case "ieConditionalComment":
      return ag(e, t, r);
    case "angularControlFlowBlock":
      return rg(e, t, r);
    case "angularControlFlowBlockParameters":
      return sg(e, t, r);
    case "angularControlFlowBlockParameter":
      return qe.trim(n.expression);
    case "angularIcuExpression":
      return ig(e, t, r);
    case "angularIcuCase":
      return og(e, t, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [Dr(n), vr(n)];
    case "interpolation":
      return [Dr(n, t), ...e.map(r, "children"), vr(n, t)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let i = /\n[^\S\n]*$/, a = i.test(n.value), l = a ? n.value.replace(i, "") : n.value;
        return [Le(l), a ? Z : ""];
      }
      let s = sf([Tt(n, t), ...fu(n), St(n, t)]);
      return Array.isArray(s) ? eu(s) : s;
    }
    case "docType":
      return [ue([Dr(n, t), " ", be(!1, n.value.replace(/^html\b/i, "html"), /\s+/g, " ")]), vr(n, t)];
    case "comment":
      return [Tt(n, t), Le(t.originalText.slice(jn(n), Rn(n))), St(n, t)];
    case "attribute": {
      if (n.value === null)
        return n.rawName;
      let s = du(n.value), i = af(s, '"');
      return [n.rawName, "=", i, Le(i === '"' ? be(!1, s, '"', "&quot;") : be(!1, s, "'", "&apos;")), i];
    }
    case "cdata":
    default:
      throw new ff(n, "HTML");
  }
}
var _g = { preprocess: kg, print: xg, insertPragma: eg, massageAstNode: Df, embed: Um, getVisitorKeys: Qm }, Fg = _g, Sg = [{ linguistLanguageId: 146, name: "Angular", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".component.html"], parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: ["html"], vscodeLanguageIds: ["html"] }, { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }], Eo = { bracketSpacing: { category: "Common", type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." } }, ko = "HTML", Ag = { bracketSameLine: Eo.bracketSameLine, htmlWhitespaceSensitivity: { category: ko, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: Eo.singleAttributePerLine, vueIndentScriptAndStyle: { category: ko, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } }, Tg = Ag, Tu = {};
Ya(Tu, { angular: () => $2, html: () => B2, lwc: () => L2, vue: () => O2 });
var xo;
(function(e) {
  e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom";
})(xo || (xo = {}));
var _o;
(function(e) {
  e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default";
})(_o || (_o = {}));
var Fo = { name: "custom-elements" }, So = { name: "no-errors-schema" }, Et;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL";
})(Et || (Et = {}));
var Ao;
(function(e) {
  e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore";
})(Ao || (Ao = {}));
var Oe;
(function(e) {
  e[e.RAW_TEXT = 0] = "RAW_TEXT", e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA";
})(Oe || (Oe = {}));
function Wn(e) {
  if (e[0] != ":")
    return [null, e];
  let t = e.indexOf(":", 1);
  if (t === -1)
    throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
  return [e.slice(1, t), e.slice(t + 1)];
}
function To(e) {
  return Wn(e)[1] === "ng-container";
}
function Bo(e) {
  return Wn(e)[1] === "ng-content";
}
function en(e) {
  return e === null ? null : Wn(e)[0];
}
function cn(e, t) {
  return e ? `:${e}:${t}` : t;
}
var tn;
function $o() {
  return tn || (tn = {}, Vr(Et.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Vr(Et.STYLE, ["*|style"]), Vr(Et.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Vr(Et.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), tn;
}
function Vr(e, t) {
  for (let r of t)
    tn[r.toLowerCase()] = e;
}
var Bg = class {
}, $g = "boolean", Og = "number", Lg = "string", Ng = "object", Pg = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|"], Bu = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" })), Ig = Array.from(Bu).reduce((e, [t, r]) => (e.set(t, r), e), /* @__PURE__ */ new Map()), jg = class extends Bg {
  constructor() {
    super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), Pg.forEach((t) => {
      let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), [s, i] = t.split("|"), a = i.split(","), [l, p] = s.split("^");
      l.split(",").forEach((u) => {
        this._schema.set(u.toLowerCase(), r), this._eventSchema.set(u.toLowerCase(), n);
      });
      let c = p && this._schema.get(p.toLowerCase());
      if (c) {
        for (let [u, o] of c)
          r.set(u, o);
        for (let u of this._eventSchema.get(p.toLowerCase()))
          n.add(u);
      }
      a.forEach((u) => {
        if (u.length > 0)
          switch (u[0]) {
            case "*":
              n.add(u.substring(1));
              break;
            case "!":
              r.set(u.substring(1), $g);
              break;
            case "#":
              r.set(u.substring(1), Og);
              break;
            case "%":
              r.set(u.substring(1), Ng);
              break;
            default:
              r.set(u, Lg);
          }
      });
    });
  }
  hasProperty(t, r, n) {
    if (n.some((s) => s.name === So.name))
      return !0;
    if (t.indexOf("-") > -1) {
      if (To(t) || Bo(t))
        return !1;
      if (n.some((s) => s.name === Fo.name))
        return !0;
    }
    return (this._schema.get(t.toLowerCase()) || this._schema.get("unknown")).has(r);
  }
  hasElement(t, r) {
    return r.some((n) => n.name === So.name) || t.indexOf("-") > -1 && (To(t) || Bo(t) || r.some((n) => n.name === Fo.name)) ? !0 : this._schema.has(t.toLowerCase());
  }
  securityContext(t, r, n) {
    n && (r = this.getMappedPropName(r)), t = t.toLowerCase(), r = r.toLowerCase();
    let s = $o()[t + "|" + r];
    return s || (s = $o()["*|" + r], s || Et.NONE);
  }
  getMappedPropName(t) {
    return Bu.get(t) ?? t;
  }
  getDefaultComponentElementName() {
    return "ng-component";
  }
  validateProperty(t) {
    return t.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event property '${t}' is disallowed for security reasons, please use (${t.slice(2)})=...
If '${t}' is a directive input, make sure the directive is imported by the current module.` } : { error: !1 };
  }
  validateAttribute(t) {
    return t.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event attribute '${t}' is disallowed for security reasons, please use (${t.slice(2)})=...` } : { error: !1 };
  }
  allKnownElementNames() {
    return Array.from(this._schema.keys());
  }
  allKnownAttributesOfElement(t) {
    let r = this._schema.get(t.toLowerCase()) || this._schema.get("unknown");
    return Array.from(r.keys()).map((n) => Ig.get(n) ?? n);
  }
  allKnownEventsOfElement(t) {
    return Array.from(this._eventSchema.get(t.toLowerCase()) ?? []);
  }
  normalizeAnimationStyleProperty(t) {
    return cg(t);
  }
  normalizeAnimationStyleValue(t, r, n) {
    let s = "", i = n.toString().trim(), a = null;
    if (Rg(t) && n !== 0 && n !== "0")
      if (typeof n == "number")
        s = "px";
      else {
        let l = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
        l && l[1].length == 0 && (a = `Please provide a CSS unit value for ${r}:${n}`);
      }
    return { error: a, value: i + s };
  }
};
function Rg(e) {
  switch (e) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return !0;
    default:
      return !1;
  }
}
var q = class {
  constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: r = Oe.PARSABLE_DATA, closedByParent: n = !1, isVoid: s = !1, ignoreFirstLf: i = !1, preventNamespaceInheritance: a = !1, canSelfClose: l = !1 } = {}) {
    this.closedByChildren = {}, this.closedByParent = !1, e && e.length > 0 && e.forEach((p) => this.closedByChildren[p] = !0), this.isVoid = s, this.closedByParent = n || s, this.implicitNamespacePrefix = t || null, this.contentType = r, this.ignoreFirstLf = i, this.preventNamespaceInheritance = a, this.canSelfClose = l ?? s;
  }
  isClosedByChild(e) {
    return this.isVoid || e.toLowerCase() in this.closedByChildren;
  }
  getContentType(e) {
    return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
  }
}, Oo, lr;
function Ss(e) {
  return lr || (Oo = new q({ canSelfClose: !0 }), lr = Object.assign(/* @__PURE__ */ Object.create(null), { base: new q({ isVoid: !0 }), meta: new q({ isVoid: !0 }), area: new q({ isVoid: !0 }), embed: new q({ isVoid: !0 }), link: new q({ isVoid: !0 }), img: new q({ isVoid: !0 }), input: new q({ isVoid: !0 }), param: new q({ isVoid: !0 }), hr: new q({ isVoid: !0 }), br: new q({ isVoid: !0 }), source: new q({ isVoid: !0 }), track: new q({ isVoid: !0 }), wbr: new q({ isVoid: !0 }), p: new q({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new q({ closedByChildren: ["tbody", "tfoot"] }), tbody: new q({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new q({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new q({ closedByChildren: ["tr"], closedByParent: !0 }), td: new q({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new q({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new q({ isVoid: !0 }), svg: new q({ implicitNamespacePrefix: "svg" }), foreignObject: new q({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: !0 }), math: new q({ implicitNamespacePrefix: "math" }), li: new q({ closedByChildren: ["li"], closedByParent: !0 }), dt: new q({ closedByChildren: ["dt", "dd"] }), dd: new q({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new q({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new q({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new q({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new q({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new q({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new q({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new q({ ignoreFirstLf: !0 }), listing: new q({ ignoreFirstLf: !0 }), style: new q({ contentType: Oe.RAW_TEXT }), script: new q({ contentType: Oe.RAW_TEXT }), title: new q({ contentType: { default: Oe.ESCAPABLE_RAW_TEXT, svg: Oe.PARSABLE_DATA } }), textarea: new q({ contentType: Oe.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), new jg().allKnownElementNames().forEach((t) => {
    !lr[t] && en(t) === null && (lr[t] = new q({ canSelfClose: !1 }));
  })), lr[e] ?? Oo;
}
var Lr = class {
  constructor(t, r) {
    this.sourceSpan = t, this.i18n = r;
  }
}, Mg = class extends Lr {
  constructor(t, r, n, s) {
    super(r, s), this.value = t, this.tokens = n, this.type = "text";
  }
  visit(t, r) {
    return t.visitText(this, r);
  }
}, qg = class extends Lr {
  constructor(t, r, n, s) {
    super(r, s), this.value = t, this.tokens = n, this.type = "cdata";
  }
  visit(t, r) {
    return t.visitCdata(this, r);
  }
}, Wg = class extends Lr {
  constructor(t, r, n, s, i, a) {
    super(s, a), this.switchValue = t, this.type = r, this.cases = n, this.switchValueSourceSpan = i;
  }
  visit(t, r) {
    return t.visitExpansion(this, r);
  }
}, Hg = class {
  constructor(t, r, n, s, i) {
    this.value = t, this.expression = r, this.sourceSpan = n, this.valueSourceSpan = s, this.expSourceSpan = i, this.type = "expansionCase";
  }
  visit(t, r) {
    return t.visitExpansionCase(this, r);
  }
}, Ug = class extends Lr {
  constructor(e, t, r, n, s, i, a) {
    super(r, a), this.name = e, this.value = t, this.keySpan = n, this.valueSpan = s, this.valueTokens = i, this.type = "attribute";
  }
  visit(e, t) {
    return e.visitAttribute(this, t);
  }
  get nameSpan() {
    return this.keySpan;
  }
}, lt = class extends Lr {
  constructor(t, r, n, s, i, a = null, l = null, p) {
    super(s, p), this.name = t, this.attrs = r, this.children = n, this.startSourceSpan = i, this.endSourceSpan = a, this.nameSpan = l, this.type = "element";
  }
  visit(t, r) {
    return t.visitElement(this, r);
  }
}, Vg = class {
  constructor(t, r) {
    this.value = t, this.sourceSpan = r, this.type = "comment";
  }
  visit(t, r) {
    return t.visitComment(this, r);
  }
}, zg = class {
  constructor(t, r) {
    this.value = t, this.sourceSpan = r, this.type = "docType";
  }
  visit(t, r) {
    return t.visitDocType(this, r);
  }
}, qt = class {
  constructor(t, r, n, s, i, a = null) {
    this.name = t, this.parameters = r, this.children = n, this.sourceSpan = s, this.startSourceSpan = i, this.endSourceSpan = a, this.type = "block";
  }
  visit(t, r) {
    return t.visitBlock(this, r);
  }
}, Lo = class {
  constructor(t, r) {
    this.expression = t, this.sourceSpan = r, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(t, r) {
    return t.visitBlockParameter(this, r);
  }
};
function $u(e, t, r = null) {
  let n = [], s = e.visit ? (i) => e.visit(i, r) || i.visit(e, r) : (i) => i.visit(e, r);
  return t.forEach((i) => {
    let a = s(i);
    a && n.push(a);
  }), n;
}
var Gg = class {
  constructor() {
  }
  visitElement(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs), r(e.children);
    });
  }
  visitAttribute(e, t) {
  }
  visitText(e, t) {
  }
  visitCdata(e, t) {
  }
  visitComment(e, t) {
  }
  visitDocType(e, t) {
  }
  visitExpansion(e, t) {
    return this.visitChildren(t, (r) => {
      r(e.cases);
    });
  }
  visitExpansionCase(e, t) {
  }
  visitBlock(e, t) {
    this.visitChildren(t, (r) => {
      r(e.parameters), r(e.children);
    });
  }
  visitBlockParameter(e, t) {
  }
  visitChildren(e, t) {
    let r = [], n = this;
    function s(i) {
      i && r.push($u(n, i, e));
    }
    return t(s), Array.prototype.concat.apply([], r);
  }
}, pn = { AElig: "Æ", AMP: "&", amp: "&", Aacute: "Á", Abreve: "Ă", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", af: "⁡", Aring: "Å", angst: "Å", Ascr: "𝒜", Assign: "≔", colone: "≔", coloneq: "≔", Atilde: "Ã", Auml: "Ä", Backslash: "∖", setminus: "∖", setmn: "∖", smallsetminus: "∖", ssetmn: "∖", Barv: "⫧", Barwed: "⌆", doublebarwedge: "⌆", Bcy: "Б", Because: "∵", becaus: "∵", because: "∵", Bernoullis: "ℬ", Bscr: "ℬ", bernou: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", breve: "˘", Bumpeq: "≎", HumpDownHump: "≎", bump: "≎", CHcy: "Ч", COPY: "©", copy: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", DD: "ⅅ", Cayleys: "ℭ", Cfr: "ℭ", Ccaron: "Č", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", cedil: "¸", CenterDot: "·", centerdot: "·", middot: "·", Chi: "Χ", CircleDot: "⊙", odot: "⊙", CircleMinus: "⊖", ominus: "⊖", CirclePlus: "⊕", oplus: "⊕", CircleTimes: "⊗", otimes: "⊗", ClockwiseContourIntegral: "∲", cwconint: "∲", CloseCurlyDoubleQuote: "”", rdquo: "”", rdquor: "”", CloseCurlyQuote: "’", rsquo: "’", rsquor: "’", Colon: "∷", Proportion: "∷", Colone: "⩴", Congruent: "≡", equiv: "≡", Conint: "∯", DoubleContourIntegral: "∯", ContourIntegral: "∮", conint: "∮", oint: "∮", Copf: "ℂ", complexes: "ℂ", Coproduct: "∐", coprod: "∐", CounterClockwiseContourIntegral: "∳", awconint: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", asympeq: "≍", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", ddagger: "‡", Darr: "↡", Dashv: "⫤", DoubleLeftTee: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", nabla: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", acute: "´", DiacriticalDot: "˙", dot: "˙", DiacriticalDoubleAcute: "˝", dblac: "˝", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "˜", tilde: "˜", Diamond: "⋄", diam: "⋄", diamond: "⋄", DifferentialD: "ⅆ", dd: "ⅆ", Dopf: "𝔻", Dot: "¨", DoubleDot: "¨", die: "¨", uml: "¨", DotDot: "⃜", DotEqual: "≐", doteq: "≐", esdot: "≐", DoubleDownArrow: "⇓", Downarrow: "⇓", dArr: "⇓", DoubleLeftArrow: "⇐", Leftarrow: "⇐", lArr: "⇐", DoubleLeftRightArrow: "⇔", Leftrightarrow: "⇔", hArr: "⇔", iff: "⇔", DoubleLongLeftArrow: "⟸", Longleftarrow: "⟸", xlArr: "⟸", DoubleLongLeftRightArrow: "⟺", Longleftrightarrow: "⟺", xhArr: "⟺", DoubleLongRightArrow: "⟹", Longrightarrow: "⟹", xrArr: "⟹", DoubleRightArrow: "⇒", Implies: "⇒", Rightarrow: "⇒", rArr: "⇒", DoubleRightTee: "⊨", vDash: "⊨", DoubleUpArrow: "⇑", Uparrow: "⇑", uArr: "⇑", DoubleUpDownArrow: "⇕", Updownarrow: "⇕", vArr: "⇕", DoubleVerticalBar: "∥", par: "∥", parallel: "∥", shortparallel: "∥", spar: "∥", DownArrow: "↓", ShortDownArrow: "↓", darr: "↓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", duarr: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", leftharpoondown: "↽", lhard: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", rhard: "⇁", rightharpoondown: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", top: "⊤", DownTeeArrow: "↧", mapstodown: "↧", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ETH: "Ð", Eacute: "É", Ecaron: "Ě", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrave: "È", Element: "∈", in: "∈", isin: "∈", isinv: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", eqsim: "≂", esim: "≂", Equilibrium: "⇌", rightleftharpoons: "⇌", rlhar: "⇌", Escr: "ℰ", expectation: "ℰ", Esim: "⩳", Eta: "Η", Euml: "Ë", Exists: "∃", exist: "∃", ExponentialE: "ⅇ", ee: "ⅇ", exponentiale: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", blacksquare: "▪", squarf: "▪", squf: "▪", Fopf: "𝔽", ForAll: "∀", forall: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", GT: ">", gt: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", ggg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", ge: "≥", geq: "≥", GreaterEqualLess: "⋛", gel: "⋛", gtreqless: "⋛", GreaterFullEqual: "≧", gE: "≧", geqq: "≧", GreaterGreater: "⪢", GreaterLess: "≷", gl: "≷", gtrless: "≷", GreaterSlantEqual: "⩾", geqslant: "⩾", ges: "⩾", GreaterTilde: "≳", gsim: "≳", gtrsim: "≳", Gscr: "𝒢", Gt: "≫", NestedGreaterGreater: "≫", gg: "≫", HARDcy: "Ъ", Hacek: "ˇ", caron: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", Poincareplane: "ℌ", HilbertSpace: "ℋ", Hscr: "ℋ", hamilt: "ℋ", Hopf: "ℍ", quaternions: "ℍ", HorizontalLine: "─", boxh: "─", Hstrok: "Ħ", HumpEqual: "≏", bumpe: "≏", bumpeq: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacute: "Í", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Im: "ℑ", image: "ℑ", imagpart: "ℑ", Igrave: "Ì", Imacr: "Ī", ImaginaryI: "ⅈ", ii: "ⅈ", Int: "∬", Integral: "∫", int: "∫", Intersection: "⋂", bigcap: "⋂", xcap: "⋂", InvisibleComma: "⁣", ic: "⁣", InvisibleTimes: "⁢", it: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", imagline: "ℐ", Itilde: "Ĩ", Iukcy: "І", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", LT: "<", lt: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Lscr: "ℒ", lagran: "ℒ", Larr: "↞", twoheadleftarrow: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", lang: "⟨", langle: "⟨", LeftArrow: "←", ShortLeftArrow: "←", larr: "←", leftarrow: "←", slarr: "←", LeftArrowBar: "⇤", larrb: "⇤", LeftArrowRightArrow: "⇆", leftrightarrows: "⇆", lrarr: "⇆", LeftCeiling: "⌈", lceil: "⌈", LeftDoubleBracket: "⟦", lobrk: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", dharl: "⇃", downharpoonleft: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", lfloor: "⌊", LeftRightArrow: "↔", harr: "↔", leftrightarrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", dashv: "⊣", LeftTeeArrow: "↤", mapstoleft: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", vartriangleleft: "⊲", vltri: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", ltrie: "⊴", trianglelefteq: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", uharl: "↿", upharpoonleft: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", leftharpoonup: "↼", lharu: "↼", LeftVectorBar: "⥒", LessEqualGreater: "⋚", leg: "⋚", lesseqgtr: "⋚", LessFullEqual: "≦", lE: "≦", leqq: "≦", LessGreater: "≶", lessgtr: "≶", lg: "≶", LessLess: "⪡", LessSlantEqual: "⩽", leqslant: "⩽", les: "⩽", LessTilde: "≲", lesssim: "≲", lsim: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", lAarr: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", longleftarrow: "⟵", xlarr: "⟵", LongLeftRightArrow: "⟷", longleftrightarrow: "⟷", xharr: "⟷", LongRightArrow: "⟶", longrightarrow: "⟶", xrarr: "⟶", Lopf: "𝕃", LowerLeftArrow: "↙", swarr: "↙", swarrow: "↙", LowerRightArrow: "↘", searr: "↘", searrow: "↘", Lsh: "↰", lsh: "↰", Lstrok: "Ł", Lt: "≪", NestedLessLess: "≪", ll: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mscr: "ℳ", phmmat: "ℳ", Mfr: "𝔐", MinusPlus: "∓", mnplus: "∓", mp: "∓", Mopf: "𝕄", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", ZeroWidthSpace: "​", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", nbsp: " ", Nopf: "ℕ", naturals: "ℕ", Not: "⫬", NotCongruent: "≢", nequiv: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", npar: "∦", nparallel: "∦", nshortparallel: "∦", nspar: "∦", NotElement: "∉", notin: "∉", notinva: "∉", NotEqual: "≠", ne: "≠", NotEqualTilde: "≂̸", nesim: "≂̸", NotExists: "∄", nexist: "∄", nexists: "∄", NotGreater: "≯", ngt: "≯", ngtr: "≯", NotGreaterEqual: "≱", nge: "≱", ngeq: "≱", NotGreaterFullEqual: "≧̸", ngE: "≧̸", ngeqq: "≧̸", NotGreaterGreater: "≫̸", nGtv: "≫̸", NotGreaterLess: "≹", ntgl: "≹", NotGreaterSlantEqual: "⩾̸", ngeqslant: "⩾̸", nges: "⩾̸", NotGreaterTilde: "≵", ngsim: "≵", NotHumpDownHump: "≎̸", nbump: "≎̸", NotHumpEqual: "≏̸", nbumpe: "≏̸", NotLeftTriangle: "⋪", nltri: "⋪", ntriangleleft: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", nltrie: "⋬", ntrianglelefteq: "⋬", NotLess: "≮", nless: "≮", nlt: "≮", NotLessEqual: "≰", nle: "≰", nleq: "≰", NotLessGreater: "≸", ntlg: "≸", NotLessLess: "≪̸", nLtv: "≪̸", NotLessSlantEqual: "⩽̸", nleqslant: "⩽̸", nles: "⩽̸", NotLessTilde: "≴", nlsim: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", npr: "⊀", nprec: "⊀", NotPrecedesEqual: "⪯̸", npre: "⪯̸", npreceq: "⪯̸", NotPrecedesSlantEqual: "⋠", nprcue: "⋠", NotReverseElement: "∌", notni: "∌", notniva: "∌", NotRightTriangle: "⋫", nrtri: "⋫", ntriangleright: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", nrtrie: "⋭", ntrianglerighteq: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", nsqsube: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", nsqsupe: "⋣", NotSubset: "⊂⃒", nsubset: "⊂⃒", vnsub: "⊂⃒", NotSubsetEqual: "⊈", nsube: "⊈", nsubseteq: "⊈", NotSucceeds: "⊁", nsc: "⊁", nsucc: "⊁", NotSucceedsEqual: "⪰̸", nsce: "⪰̸", nsucceq: "⪰̸", NotSucceedsSlantEqual: "⋡", nsccue: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", nsupset: "⊃⃒", vnsup: "⊃⃒", NotSupersetEqual: "⊉", nsupe: "⊉", nsupseteq: "⊉", NotTilde: "≁", nsim: "≁", NotTildeEqual: "≄", nsime: "≄", nsimeq: "≄", NotTildeFullEqual: "≇", ncong: "≇", NotTildeTilde: "≉", nap: "≉", napprox: "≉", NotVerticalBar: "∤", nmid: "∤", nshortmid: "∤", nsmid: "∤", Nscr: "𝒩", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacute: "Ó", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", ohm: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", ldquo: "“", OpenCurlyQuote: "‘", lsquo: "‘", Or: "⩔", Oscr: "𝒪", Oslash: "Ø", Otilde: "Õ", Otimes: "⨷", Ouml: "Ö", OverBar: "‾", oline: "‾", OverBrace: "⏞", OverBracket: "⎴", tbrk: "⎴", OverParenthesis: "⏜", PartialD: "∂", part: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", plusmn: "±", pm: "±", Popf: "ℙ", primes: "ℙ", Pr: "⪻", Precedes: "≺", pr: "≺", prec: "≺", PrecedesEqual: "⪯", pre: "⪯", preceq: "⪯", PrecedesSlantEqual: "≼", prcue: "≼", preccurlyeq: "≼", PrecedesTilde: "≾", precsim: "≾", prsim: "≾", Prime: "″", Product: "∏", prod: "∏", Proportional: "∝", prop: "∝", propto: "∝", varpropto: "∝", vprop: "∝", Pscr: "𝒫", Psi: "Ψ", QUOT: '"', quot: '"', Qfr: "𝔔", Qopf: "ℚ", rationals: "ℚ", Qscr: "𝒬", RBarr: "⤐", drbkarow: "⤐", REG: "®", circledR: "®", reg: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", twoheadrightarrow: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", Rfr: "ℜ", real: "ℜ", realpart: "ℜ", ReverseElement: "∋", SuchThat: "∋", ni: "∋", niv: "∋", ReverseEquilibrium: "⇋", leftrightharpoons: "⇋", lrhar: "⇋", ReverseUpEquilibrium: "⥯", duhar: "⥯", Rho: "Ρ", RightAngleBracket: "⟩", rang: "⟩", rangle: "⟩", RightArrow: "→", ShortRightArrow: "→", rarr: "→", rightarrow: "→", srarr: "→", RightArrowBar: "⇥", rarrb: "⇥", RightArrowLeftArrow: "⇄", rightleftarrows: "⇄", rlarr: "⇄", RightCeiling: "⌉", rceil: "⌉", RightDoubleBracket: "⟧", robrk: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", dharr: "⇂", downharpoonright: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rfloor: "⌋", RightTee: "⊢", vdash: "⊢", RightTeeArrow: "↦", map: "↦", mapsto: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", vartriangleright: "⊳", vrtri: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", rtrie: "⊵", trianglerighteq: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", uharr: "↾", upharpoonright: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", rharu: "⇀", rightharpoonup: "⇀", RightVectorBar: "⥓", Ropf: "ℝ", reals: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", rAarr: "⇛", Rscr: "ℛ", realine: "ℛ", Rsh: "↱", rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortUpArrow: "↑", UpArrow: "↑", uarr: "↑", uparrow: "↑", Sigma: "Σ", SmallCircle: "∘", compfn: "∘", Sopf: "𝕊", Sqrt: "√", radic: "√", Square: "□", squ: "□", square: "□", SquareIntersection: "⊓", sqcap: "⊓", SquareSubset: "⊏", sqsub: "⊏", sqsubset: "⊏", SquareSubsetEqual: "⊑", sqsube: "⊑", sqsubseteq: "⊑", SquareSuperset: "⊐", sqsup: "⊐", sqsupset: "⊐", SquareSupersetEqual: "⊒", sqsupe: "⊒", sqsupseteq: "⊒", SquareUnion: "⊔", sqcup: "⊔", Sscr: "𝒮", Star: "⋆", sstarf: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", sube: "⊆", subseteq: "⊆", Succeeds: "≻", sc: "≻", succ: "≻", SucceedsEqual: "⪰", sce: "⪰", succeq: "⪰", SucceedsSlantEqual: "≽", sccue: "≽", succcurlyeq: "≽", SucceedsTilde: "≿", scsim: "≿", succsim: "≿", Sum: "∑", sum: "∑", Sup: "⋑", Supset: "⋑", Superset: "⊃", sup: "⊃", supset: "⊃", SupersetEqual: "⊇", supe: "⊇", supseteq: "⊇", THORN: "Þ", TRADE: "™", trade: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", there4: "∴", therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", Tilde: "∼", sim: "∼", thicksim: "∼", thksim: "∼", TildeEqual: "≃", sime: "≃", simeq: "≃", TildeFullEqual: "≅", cong: "≅", TildeTilde: "≈", ap: "≈", approx: "≈", asymp: "≈", thickapprox: "≈", thkap: "≈", Topf: "𝕋", TripleDot: "⃛", tdot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", lowbar: "_", UnderBrace: "⏟", UnderBracket: "⎵", bbrk: "⎵", UnderParenthesis: "⏝", Union: "⋃", bigcup: "⋃", xcup: "⋃", UnionPlus: "⊎", uplus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", udarr: "⇅", UpDownArrow: "↕", updownarrow: "↕", varr: "↕", UpEquilibrium: "⥮", udhar: "⥮", UpTee: "⊥", bot: "⊥", bottom: "⊥", perp: "⊥", UpTeeArrow: "↥", mapstoup: "↥", UpperLeftArrow: "↖", nwarr: "↖", nwarrow: "↖", UpperRightArrow: "↗", nearr: "↗", nearrow: "↗", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", bigvee: "⋁", xvee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", mid: "∣", shortmid: "∣", smid: "∣", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "❘", VerticalTilde: "≀", wr: "≀", wreath: "≀", VeryThinSpace: " ", hairsp: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", bigwedge: "⋀", xwedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", Zeta: "Ζ", Zfr: "ℨ", zeetrf: "ℨ", Zopf: "ℤ", integers: "ℤ", Zscr: "𝒵", aacute: "á", abreve: "ă", ac: "∾", mstpos: "∾", acE: "∾̳", acd: "∿", acirc: "â", acy: "а", aelig: "æ", afr: "𝔞", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", and: "∧", wedge: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", angle: "∠", ange: "⦤", angmsd: "∡", measuredangle: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angzarr: "⍼", aogon: "ą", aopf: "𝕒", apE: "⩰", apacir: "⩯", ape: "≊", approxeq: "≊", apid: "≋", apos: "'", aring: "å", ascr: "𝒶", ast: "*", midast: "*", atilde: "ã", auml: "ä", awint: "⨑", bNot: "⫭", backcong: "≌", bcong: "≌", backepsilon: "϶", bepsi: "϶", backprime: "‵", bprime: "‵", backsim: "∽", bsim: "∽", backsimeq: "⋍", bsime: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrktbrk: "⎶", bcy: "б", bdquo: "„", ldquor: "„", bemptyv: "⦰", beta: "β", beth: "ℶ", between: "≬", twixt: "≬", bfr: "𝔟", bigcirc: "◯", xcirc: "◯", bigodot: "⨀", xodot: "⨀", bigoplus: "⨁", xoplus: "⨁", bigotimes: "⨂", xotime: "⨂", bigsqcup: "⨆", xsqcup: "⨆", bigstar: "★", starf: "★", bigtriangledown: "▽", xdtri: "▽", bigtriangleup: "△", xutri: "△", biguplus: "⨄", xuplus: "⨄", bkarow: "⤍", rbarr: "⤍", blacklozenge: "⧫", lozf: "⧫", blacktriangle: "▴", utrif: "▴", blacktriangledown: "▾", dtrif: "▾", blacktriangleleft: "◂", ltrif: "◂", blacktriangleright: "▸", rtrif: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", minusb: "⊟", boxplus: "⊞", plusb: "⊞", boxtimes: "⊠", timesb: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bumpE: "⪮", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", ccaps: "⩍", ccaron: "č", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cemptyv: "⦲", cent: "¢", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", cire: "≗", circlearrowleft: "↺", olarr: "↺", circlearrowright: "↻", orarr: "↻", circledS: "Ⓢ", oS: "Ⓢ", circledast: "⊛", oast: "⊛", circledcirc: "⊚", ocir: "⊚", circleddash: "⊝", odash: "⊝", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", comma: ",", commat: "@", comp: "∁", complement: "∁", congdot: "⩭", copf: "𝕔", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", curlyeqprec: "⋞", cuesc: "⋟", curlyeqsucc: "⋟", cularr: "↶", curvearrowleft: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curvearrowright: "↷", curarrm: "⤼", curlyvee: "⋎", cuvee: "⋎", curlywedge: "⋏", cuwed: "⋏", curren: "¤", cwint: "∱", cylcty: "⌭", dHar: "⥥", dagger: "†", daleth: "ℸ", dash: "‐", hyphen: "‐", dbkarow: "⤏", rBarr: "⤏", dcaron: "ď", dcy: "д", ddarr: "⇊", downdownarrows: "⇊", ddotseq: "⩷", eDDot: "⩷", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", diamondsuit: "♦", diams: "♦", digamma: "ϝ", gammad: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", llcorner: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", doteqdot: "≑", eDot: "≑", dotminus: "∸", minusd: "∸", dotplus: "∔", plusdo: "∔", dotsquare: "⊡", sdotb: "⊡", drcorn: "⌟", lrcorner: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", triangledown: "▿", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "≖", eqcirc: "≖", ecirc: "ê", ecolon: "≕", eqcolon: "≕", ecy: "э", edot: "ė", efDot: "≒", fallingdotseq: "≒", efr: "𝔢", eg: "⪚", egrave: "è", egs: "⪖", eqslantgtr: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", eqslantless: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", varnothing: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", straightepsilon: "ϵ", varepsilon: "ϵ", equals: "=", equest: "≟", questeq: "≟", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", risingdotseq: "≓", erarr: "⥱", escr: "ℯ", eta: "η", eth: "ð", euml: "ë", euro: "€", excl: "!", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", fork: "⋔", pitchfork: "⋔", forkv: "⫙", fpartint: "⨍", frac12: "½", half: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", sfrown: "⌢", fscr: "𝒻", gEl: "⪌", gtreqqless: "⪌", gacute: "ǵ", gamma: "γ", gap: "⪆", gtrapprox: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gimel: "ℷ", gjcy: "ѓ", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gneqq: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gnsim: "⋧", gopf: "𝕘", gscr: "ℊ", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtrdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrarr: "⥸", gvertneqq: "≩︀", gvnE: "≩︀", hardcy: "ъ", harrcir: "⥈", harrw: "↭", leftrightsquigarrow: "↭", hbar: "ℏ", hslash: "ℏ", planck: "ℏ", plankv: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", mldr: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", searhk: "⤥", hkswarow: "⤦", swarhk: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", larrhk: "↩", hookrightarrow: "↪", rarrhk: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hstrok: "ħ", hybull: "⁃", iacute: "í", icirc: "î", icy: "и", iecy: "е", iexcl: "¡", ifr: "𝔦", igrave: "ì", iiiint: "⨌", qint: "⨌", iiint: "∭", tint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", imath: "ı", inodot: "ı", imof: "⊷", imped: "Ƶ", incare: "℅", infin: "∞", infintie: "⧝", intcal: "⊺", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iquest: "¿", iscr: "𝒾", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", itilde: "ĩ", iukcy: "і", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", varkappa: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAtail: "⤛", lBarr: "⤎", lEg: "⪋", lesseqqgtr: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lambda: "λ", langd: "⦑", lap: "⪅", lessapprox: "⪅", laquo: "«", larrbfs: "⤟", larrfs: "⤝", larrlp: "↫", looparrowleft: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", leftarrowtail: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lcy: "л", ldca: "⤶", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leq: "≤", leftleftarrows: "⇇", llarr: "⇇", leftthreetimes: "⋋", lthree: "⋋", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessdot: "⋖", ltdot: "⋖", lfisht: "⥼", lfr: "𝔩", lgE: "⪑", lharul: "⥪", lhblk: "▄", ljcy: "љ", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lneqq: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lnsim: "⋦", loang: "⟬", loarr: "⇽", longmapsto: "⟼", xmap: "⟼", looparrowright: "↬", rarrlp: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", loz: "◊", lozenge: "◊", lpar: "(", lparlt: "⦓", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsime: "⪍", lsimg: "⪏", lsquor: "‚", sbquo: "‚", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", triangleleft: "◃", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", macr: "¯", strns: "¯", male: "♂", malt: "✠", maltese: "✠", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", mfr: "𝔪", mho: "℧", micro: "µ", midcir: "⫰", minus: "−", minusdu: "⨪", mlcp: "⫛", models: "⊧", mopf: "𝕞", mscr: "𝓂", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nLeftarrow: "⇍", nlArr: "⇍", nLeftrightarrow: "⇎", nhArr: "⇎", nLl: "⋘̸", nLt: "≪⃒", nRightarrow: "⇏", nrArr: "⇏", nVDash: "⊯", nVdash: "⊮", nacute: "ń", nang: "∠⃒", napE: "⩰̸", napid: "≋̸", napos: "ŉ", natur: "♮", natural: "♮", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", neArr: "⇗", nearhk: "⤤", nedot: "≐̸", nesear: "⤨", toea: "⤨", nfr: "𝔫", nharr: "↮", nleftrightarrow: "↮", nhpar: "⫲", nis: "⋼", nisd: "⋺", njcy: "њ", nlE: "≦̸", nleqq: "≦̸", nlarr: "↚", nleftarrow: "↚", nldr: "‥", nopf: "𝕟", not: "¬", notinE: "⋹̸", notindot: "⋵̸", notinvb: "⋷", notinvc: "⋶", notnivb: "⋾", notnivc: "⋽", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", nrarr: "↛", nrightarrow: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nscr: "𝓃", nsub: "⊄", nsubE: "⫅̸", nsubseteqq: "⫅̸", nsup: "⊅", nsupE: "⫆̸", nsupseteqq: "⫆̸", ntilde: "ñ", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwnear: "⤧", oacute: "ó", ocirc: "ô", ocy: "о", odblac: "ő", odiv: "⨸", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograve: "ò", ogt: "⧁", ohbar: "⦵", olcir: "⦾", olcross: "⦻", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", oopf: "𝕠", opar: "⦷", operp: "⦹", or: "∨", vee: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", oscr: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oslash: "ø", osol: "⊘", otilde: "õ", otimesas: "⨶", ouml: "ö", ovbar: "⌽", para: "¶", parsim: "⫳", parsl: "⫽", pcy: "п", percnt: "%", period: ".", permil: "‰", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", straightphi: "ϕ", varphi: "ϕ", phone: "☎", pi: "π", piv: "ϖ", varpi: "ϖ", planckh: "ℎ", plus: "+", plusacir: "⨣", pluscir: "⨢", plusdu: "⨥", pluse: "⩲", plussim: "⨦", plustwo: "⨧", pointint: "⨕", popf: "𝕡", pound: "£", prE: "⪳", prap: "⪷", precapprox: "⪷", precnapprox: "⪹", prnap: "⪹", precneqq: "⪵", prnE: "⪵", precnsim: "⋨", prnsim: "⋨", prime: "′", profalar: "⌮", profline: "⌒", profsurf: "⌓", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quatint: "⨖", quest: "?", rAtail: "⤜", rHar: "⥤", race: "∽̱", racute: "ŕ", raemptyv: "⦳", rangd: "⦒", range: "⦥", raquo: "»", rarrap: "⥵", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rightarrowtail: "↣", rarrw: "↝", rightsquigarrow: "↝", ratail: "⤚", ratio: "∶", rbbrk: "❳", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdsh: "↳", rect: "▭", rfisht: "⥽", rfr: "𝔯", rharul: "⥬", rho: "ρ", rhov: "ϱ", varrho: "ϱ", rightrightarrows: "⇉", rrarr: "⇉", rightthreetimes: "⋌", rthree: "⋌", ring: "˚", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rsaquo: "›", rscr: "𝓇", rtimes: "⋊", rtri: "▹", triangleright: "▹", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", scE: "⪴", scap: "⪸", succapprox: "⪸", scaron: "š", scedil: "ş", scirc: "ŝ", scnE: "⪶", succneqq: "⪶", scnap: "⪺", succnapprox: "⪺", scnsim: "⋩", succnsim: "⋩", scpolint: "⨓", scy: "с", sdot: "⋅", sdote: "⩦", seArr: "⇘", sect: "§", semi: ";", seswar: "⤩", tosa: "⤩", sext: "✶", sfr: "𝔰", sharp: "♯", shchcy: "щ", shcy: "ш", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", varsigma: "ς", simdot: "⩪", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", smashp: "⨳", smeparsl: "⧤", smile: "⌣", ssmile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", sqcaps: "⊓︀", sqcups: "⊔︀", sscr: "𝓈", star: "☆", sub: "⊂", subset: "⊂", subE: "⫅", subseteqq: "⫅", subdot: "⪽", subedot: "⫃", submult: "⫁", subnE: "⫋", subsetneqq: "⫋", subne: "⊊", subsetneq: "⊊", subplus: "⪿", subrarr: "⥹", subsim: "⫇", subsub: "⫕", subsup: "⫓", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supseteqq: "⫆", supdot: "⪾", supdsub: "⫘", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supsetneqq: "⫌", supne: "⊋", supsetneq: "⊋", supplus: "⫀", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swnwar: "⤪", szlig: "ß", target: "⌖", tau: "τ", tcaron: "ť", tcedil: "ţ", tcy: "т", telrec: "⌕", tfr: "𝔱", theta: "θ", thetasym: "ϑ", thetav: "ϑ", vartheta: "ϑ", thorn: "þ", times: "×", timesbar: "⨱", timesd: "⨰", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tprime: "‴", triangle: "▵", utri: "▵", triangleq: "≜", trie: "≜", tridot: "◬", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", uHar: "⥣", uacute: "ú", ubrcy: "ў", ubreve: "ŭ", ucirc: "û", ucy: "у", udblac: "ű", ufisht: "⥾", ufr: "𝔲", ugrave: "ù", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", uogon: "ų", uopf: "𝕦", upsi: "υ", upsilon: "υ", upuparrows: "⇈", uuarr: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", uuml: "ü", uwangle: "⦧", vBar: "⫨", vBarv: "⫩", vangrt: "⦜", varsubsetneq: "⊊︀", vsubne: "⊊︀", varsubsetneqq: "⫋︀", vsubnE: "⫋︀", varsupsetneq: "⊋︀", vsupne: "⊋︀", varsupsetneqq: "⫌︀", vsupnE: "⫌︀", vcy: "в", veebar: "⊻", veeeq: "≚", vellip: "⋮", vfr: "𝔳", vopf: "𝕧", vscr: "𝓋", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedgeq: "≙", weierp: "℘", wp: "℘", wfr: "𝔴", wopf: "𝕨", wscr: "𝓌", xfr: "𝔵", xi: "ξ", xnis: "⋻", xopf: "𝕩", xscr: "𝓍", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" }, Yg = "";
pn.ngsp = Yg;
var Jg = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function Kg(e, t) {
  if (t != null && !(Array.isArray(t) && t.length == 2))
    throw new Error(`Expected '${e}' to be an array, [start, end].`);
  if (t != null) {
    let r = t[0], n = t[1];
    Jg.forEach((s) => {
      if (s.test(r) || s.test(n))
        throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
    });
  }
}
var Xg = class Ou {
  static fromArray(t) {
    return t ? (Kg("interpolation", t), new Ou(t[0], t[1])) : Lu;
  }
  constructor(t, r) {
    this.start = t, this.end = r;
  }
}, Lu = new Xg("{{", "}}"), os = class extends Au {
  constructor(e, t, r) {
    super(r, e), this.tokenType = t;
  }
}, Qg = class {
  constructor(e, t, r) {
    this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = r;
  }
};
function Zg(e, t, r, n = {}) {
  let s = new r2(new Su(e, t), r, n);
  return s.tokenize(), new Qg(u2(s.tokens), s.errors, s.nonNormalizedIcuExpressions);
}
var e2 = /\r\n?/g;
function Wt(e) {
  return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function No(e) {
  return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function t2(e, t) {
  return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
var hn;
(function(e) {
  e.HEX = "hexadecimal", e.DEC = "decimal";
})(hn || (hn = {}));
var as = class {
  constructor(t) {
    this.error = t;
  }
}, r2 = class {
  constructor(e, t, r) {
    this._getTagContentType = t, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = r.tokenizeExpansionForms || !1, this._interpolationConfig = r.interpolationConfig || Lu, this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((s) => s.codePointAt(0) || 0), this._canSelfClose = r.canSelfClose || !1, this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || !1;
    let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = r.escapedString ? new l2(e, n) : new Nu(e, n), this._preserveLineEndings = r.preserveLineEndings || !1, this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || !1, this._tokenizeBlocks = r.tokenizeBlocks ?? !0;
    try {
      this._cursor.init();
    } catch (s) {
      this.handleError(s);
    }
  }
  _processCarriageReturns(e) {
    return this._preserveLineEndings ? e : e.replace(e2, `
`);
  }
  tokenize() {
    for (; this._cursor.peek() !== 0; ) {
      let e = this._cursor.clone();
      try {
        if (this._attemptCharCode(60))
          if (this._attemptCharCode(33))
            this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
          else if (this._attemptCharCode(47))
            this._consumeTagClose(e);
          else {
            let t = this._cursor.clone();
            this._attemptCharCode(63) ? (this._cursor = t, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
          }
        else
          this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
      } catch (t) {
        this.handleError(t);
      }
    }
    this._beginToken(30), this._endToken([]);
  }
  _getBlockName() {
    let e = !1, t = this._cursor.clone();
    return this._attemptCharCodeUntilFn((r) => fi(r) ? !e : jo(r) ? (e = !0, !1) : !0), this._cursor.getChars(t).trim();
  }
  _consumeBlockStart(e) {
    this._beginToken(25, e);
    let t = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40)
      if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(ne), this._attemptCharCode(41))
        this._attemptCharCodeUntilFn(ne);
      else {
        t.type = 29;
        return;
      }
    this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : t.type = 29;
  }
  _consumeBlockEnd(e) {
    this._beginToken(27, e), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(Ro); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(28);
      let e = this._cursor.clone(), t = null, r = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || t !== null; ) {
        let n = this._cursor.peek();
        if (n === 92)
          this._cursor.advance();
        else if (n === t)
          t = null;
        else if (t === null && Co(n))
          t = n;
        else if (n === 40 && t === null)
          r++;
        else if (n === 41 && t === null) {
          if (r === 0)
            break;
          r > 0 && r--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Ro);
    }
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart())
      return this._consumeExpansionFormStart(), !0;
    if (o2(this._cursor.peek()) && this._isInExpansionForm())
      return this._consumeExpansionCaseStart(), !0;
    if (this._cursor.peek() === 125) {
      if (this._isInExpansionCase())
        return this._consumeExpansionCaseEnd(), !0;
      if (this._isInExpansionForm())
        return this._consumeExpansionFormEnd(), !0;
    }
    return !1;
  }
  _beginToken(e, t = this._cursor.clone()) {
    this._currentTokenStart = t, this._currentTokenType = e;
  }
  _endToken(e, t) {
    if (this._currentTokenStart === null)
      throw new os("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(t));
    if (this._currentTokenType === null)
      throw new os("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
    let r = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
    return this.tokens.push(r), this._currentTokenStart = null, this._currentTokenType = null, r;
  }
  _createError(e, t) {
    this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
    let r = new os(e, this._currentTokenType, t);
    return this._currentTokenStart = null, this._currentTokenType = null, new as(r);
  }
  handleError(e) {
    if (e instanceof gi && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof as)
      this.errors.push(e.error);
    else
      throw e;
  }
  _attemptCharCode(e) {
    return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1;
  }
  _attemptCharCodeCaseInsensitive(e) {
    return a2(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1;
  }
  _requireCharCode(e) {
    let t = this._cursor.clone();
    if (!this._attemptCharCode(e))
      throw this._createError(Wt(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _attemptStr(e) {
    let t = e.length;
    if (this._cursor.charsLeft() < t)
      return !1;
    let r = this._cursor.clone();
    for (let n = 0; n < t; n++)
      if (!this._attemptCharCode(e.charCodeAt(n)))
        return this._cursor = r, !1;
    return !0;
  }
  _attemptStrCaseInsensitive(e) {
    for (let t = 0; t < e.length; t++)
      if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t)))
        return !1;
    return !0;
  }
  _requireStr(e) {
    let t = this._cursor.clone();
    if (!this._attemptStr(e))
      throw this._createError(Wt(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _requireStrCaseInsensitive(e) {
    let t = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e))
      throw this._createError(Wt(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _attemptCharCodeUntilFn(e) {
    for (; !e(this._cursor.peek()); )
      this._cursor.advance();
  }
  _requireCharCodeUntilFn(e, t) {
    let r = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t)
      throw this._createError(Wt(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptUntilChar(e) {
    for (; this._cursor.peek() !== e; )
      this._cursor.advance();
  }
  _readChar() {
    let e = String.fromCodePoint(this._cursor.peek());
    return this._cursor.advance(), e;
  }
  _consumeEntity(e) {
    this._beginToken(9);
    let t = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let r = this._attemptCharCode(120) || this._attemptCharCode(88), n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(s2), this._cursor.peek() != 59) {
        this._cursor.advance();
        let i = r ? hn.HEX : hn.DEC;
        throw this._createError(t2(i, this._cursor.getChars(t)), this._cursor.getSpan());
      }
      let s = this._cursor.getChars(n);
      this._cursor.advance();
      try {
        let i = parseInt(s, r ? 16 : 10);
        this._endToken([String.fromCharCode(i), this._cursor.getChars(t)]);
      } catch {
        throw this._createError(No(this._cursor.getChars(t)), this._cursor.getSpan());
      }
    } else {
      let r = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(i2), this._cursor.peek() != 59)
        this._beginToken(e, t), this._cursor = r, this._endToken(["&"]);
      else {
        let n = this._cursor.getChars(r);
        this._cursor.advance();
        let s = pn[n];
        if (!s)
          throw this._createError(No(n), this._cursor.getSpan(t));
        this._endToken([s, `&${n};`]);
      }
    }
  }
  _consumeRawText(e, t) {
    this._beginToken(e ? 6 : 7);
    let r = [];
    for (; ; ) {
      let n = this._cursor.clone(), s = t();
      if (this._cursor = n, s)
        break;
      e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(r.join(""))]), r.length = 0, this._consumeEntity(6), this._beginToken(6)) : r.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(r.join(""))]);
  }
  _consumeComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e) {
    this._beginToken(12, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e) {
    this._beginToken(18, e), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
  }
  _consumePrefixAndName() {
    let e = this._cursor.clone(), t = "";
    for (; this._cursor.peek() !== 58 && !n2(this._cursor.peek()); )
      this._cursor.advance();
    let r;
    this._cursor.peek() === 58 ? (t = this._cursor.getChars(e), this._cursor.advance(), r = this._cursor.clone()) : r = e, this._requireCharCodeUntilFn(Po, t === "" ? 0 : 1);
    let n = this._cursor.getChars(r);
    return [t, n];
  }
  _consumeTagOpen(e) {
    let t, r, n, s = [];
    try {
      if (!mi(this._cursor.peek()))
        throw this._createError(Wt(this._cursor.peek()), this._cursor.getSpan(e));
      for (n = this._consumeTagOpenStart(e), r = n.parts[0], t = n.parts[1], this._attemptCharCodeUntilFn(ne); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
        let [a, l] = this._consumeAttributeName();
        if (this._attemptCharCodeUntilFn(ne), this._attemptCharCode(61)) {
          this._attemptCharCodeUntilFn(ne);
          let p = this._consumeAttributeValue();
          s.push({ prefix: a, name: l, value: p });
        } else
          s.push({ prefix: a, name: l });
        this._attemptCharCodeUntilFn(ne);
      }
      this._consumeTagOpenEnd();
    } catch (a) {
      if (a instanceof as) {
        n ? n.type = 4 : (this._beginToken(5, e), this._endToken(["<"]));
        return;
      }
      throw a;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2)
      return;
    let i = this._getTagContentType(t, r, this._fullNameStack.length > 0, s);
    this._handleFullNameStackForTagOpen(r, t), i === Oe.RAW_TEXT ? this._consumeRawTextWithTagClose(r, t, !1) : i === Oe.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r, t, !0);
  }
  _consumeRawTextWithTagClose(e, t, r) {
    this._consumeRawText(r, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(ne), !this._attemptStrCaseInsensitive(e ? `${e}:${t}` : t)) ? !1 : (this._attemptCharCodeUntilFn(ne), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((n) => n === 62, 3), this._cursor.advance(), this._endToken([e, t]), this._handleFullNameStackForTagClose(e, t);
  }
  _consumeTagOpenStart(e) {
    this._beginToken(0, e);
    let t = this._consumePrefixAndName();
    return this._endToken(t);
  }
  _consumeAttributeName() {
    let e = this._cursor.peek();
    if (e === 39 || e === 34)
      throw this._createError(Wt(e), this._cursor.getSpan());
    this._beginToken(14);
    let t = this._consumePrefixAndName();
    return this._endToken(t), t;
  }
  _consumeAttributeValue() {
    let e;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let t = this._cursor.peek();
      this._consumeQuote(t);
      let r = () => this._cursor.peek() === t;
      e = this._consumeWithInterpolation(16, 17, r, r), this._consumeQuote(t);
    } else {
      let t = () => Po(this._cursor.peek());
      e = this._consumeWithInterpolation(16, 17, t, t);
    }
    return e;
  }
  _consumeQuote(e) {
    this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
  }
  _consumeTagOpenEnd() {
    let e = this._attemptCharCode(47) ? 2 : 1;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e) {
    if (this._beginToken(3, e), this._attemptCharCodeUntilFn(ne), this._allowHtmComponentClosingTags && this._attemptCharCode(47))
      this._attemptCharCodeUntilFn(ne), this._requireCharCode(62), this._endToken([]);
    else {
      let [t, r] = this._consumePrefixAndName();
      this._attemptCharCodeUntilFn(ne), this._requireCharCode(62), this._endToken([t, r]), this._handleFullNameStackForTagClose(t, r);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
    let e = this._readUntil(44), t = this._processCarriageReturns(e);
    if (this._i18nNormalizeLineEndingsInICUs)
      this._endToken([t]);
    else {
      let n = this._endToken([e]);
      t !== e && this.nonNormalizedIcuExpressions.push(n);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(ne), this._beginToken(7);
    let r = this._readUntil(44);
    this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(ne);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(21);
    let e = this._readUntil(123).trim();
    this._endToken([e]), this._attemptCharCodeUntilFn(ne), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(ne), this._expansionCaseStack.push(22);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(ne), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e, t, r, n) {
    this._beginToken(e);
    let s = [];
    for (; !r(); ) {
      let a = this._cursor.clone();
      this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(s.join(""))], a), s.length = 0, this._consumeInterpolation(t, a, n), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(s.join(""))]), s.length = 0, this._consumeEntity(e), this._beginToken(e)) : s.push(this._readChar());
    }
    this._inInterpolation = !1;
    let i = this._processCarriageReturns(s.join(""));
    return this._endToken([i]), i;
  }
  _consumeInterpolation(e, t, r) {
    let n = [];
    this._beginToken(e, t), n.push(this._interpolationConfig.start);
    let s = this._cursor.clone(), i = null, a = !1;
    for (; this._cursor.peek() !== 0 && (r === null || !r()); ) {
      let l = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = l, n.push(this._getProcessedChars(s, l)), this._endToken(n);
        return;
      }
      if (i === null)
        if (this._attemptStr(this._interpolationConfig.end)) {
          n.push(this._getProcessedChars(s, l)), n.push(this._interpolationConfig.end), this._endToken(n);
          return;
        } else
          this._attemptStr("//") && (a = !0);
      let p = this._cursor.peek();
      this._cursor.advance(), p === 92 ? this._cursor.advance() : p === i ? i = null : !a && i === null && Co(p) && (i = p);
    }
    n.push(this._getProcessedChars(s, this._cursor)), this._endToken(n);
  }
  _getProcessedChars(e, t) {
    return this._processCarriageReturns(t.getChars(e));
  }
  _isTextEnd() {
    return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 125));
  }
  _isTagStart() {
    if (this._cursor.peek() === 60) {
      let e = this._cursor.clone();
      e.advance();
      let t = e.peek();
      if (97 <= t && t <= 122 || 65 <= t && t <= 90 || t === 47 || t === 33)
        return !0;
    }
    return !1;
  }
  _isBlockStart() {
    if (this._tokenizeBlocks && this._cursor.peek() === 64) {
      let e = this._cursor.clone();
      if (e.advance(), jo(e.peek()))
        return !0;
    }
    return !1;
  }
  _readUntil(e) {
    let t = this._cursor.clone();
    return this._attemptUntilChar(e), this._cursor.getChars(t);
  }
  _isInExpansion() {
    return this._isInExpansionCase() || this._isInExpansionForm();
  }
  _isInExpansionCase() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123)
      return !1;
    if (this._interpolationConfig) {
      let e = this._cursor.clone(), t = this._attemptStr(this._interpolationConfig.start);
      return this._cursor = e, !t;
    }
    return !0;
  }
  _handleFullNameStackForTagOpen(e, t) {
    let r = cn(e, t);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
  }
  _handleFullNameStackForTagClose(e, t) {
    let r = cn(e, t);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
  }
};
function ne(e) {
  return !fi(e) || e === 0;
}
function Po(e) {
  return fi(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function n2(e) {
  return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function s2(e) {
  return e === 59 || e === 0 || !ug(e);
}
function i2(e) {
  return e === 59 || e === 0 || !mi(e);
}
function o2(e) {
  return e !== 125;
}
function a2(e, t) {
  return Io(e) === Io(t);
}
function Io(e) {
  return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function jo(e) {
  return mi(e) || xu(e) || e === 95;
}
function Ro(e) {
  return e !== 59 && ne(e);
}
function u2(e) {
  let t = [], r;
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    r && r.type === 5 && s.type === 5 || r && r.type === 16 && s.type === 16 ? (r.parts[0] += s.parts[0], r.sourceSpan.end = s.sourceSpan.end) : (r = s, t.push(r));
  }
  return t;
}
var Nu = class As {
  constructor(t, r) {
    if (t instanceof As) {
      this.file = t.file, this.input = t.input, this.end = t.end;
      let n = t.state;
      this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
    } else {
      if (!r)
        throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = t, this.input = t.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
    }
  }
  clone() {
    return new As(this);
  }
  peek() {
    return this.state.peek;
  }
  charsLeft() {
    return this.end - this.state.offset;
  }
  diff(t) {
    return this.state.offset - t.state.offset;
  }
  advance() {
    this.advanceState(this.state);
  }
  init() {
    this.updatePeek(this.state);
  }
  getSpan(t, r) {
    t = t || this;
    let n = t;
    if (r)
      for (; this.diff(t) > 0 && r.indexOf(t.peek()) !== -1; )
        n === t && (t = t.clone()), t.advance();
    let s = this.locationFromCursor(t), i = this.locationFromCursor(this), a = n !== t ? this.locationFromCursor(n) : s;
    return new V(s, i, a);
  }
  getChars(t) {
    return this.input.substring(t.state.offset, this.state.offset);
  }
  charAt(t) {
    return this.input.charCodeAt(t);
  }
  advanceState(t) {
    if (t.offset >= this.end)
      throw this.state = t, new gi('Unexpected character "EOF"', this);
    let r = this.charAt(t.offset);
    r === 10 ? (t.line++, t.column = 0) : _u(r) || t.column++, t.offset++, this.updatePeek(t);
  }
  updatePeek(t) {
    t.peek = t.offset >= this.end ? 0 : this.charAt(t.offset);
  }
  locationFromCursor(t) {
    return new Fs(t.file, t.state.offset, t.state.line, t.state.column);
  }
}, l2 = class Ts extends Nu {
  constructor(t, r) {
    t instanceof Ts ? (super(t), this.internalState = { ...t.internalState }) : (super(t, r), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new Ts(this);
  }
  getChars(t) {
    let r = t.clone(), n = "";
    for (; r.internalState.offset < this.internalState.offset; )
      n += String.fromCodePoint(r.peek()), r.advance();
    return n;
  }
  processEscapeSequence() {
    let t = () => this.internalState.peek;
    if (t() === 92)
      if (this.internalState = { ...this.state }, this.advanceState(this.internalState), t() === 110)
        this.state.peek = 10;
      else if (t() === 114)
        this.state.peek = 13;
      else if (t() === 118)
        this.state.peek = 11;
      else if (t() === 116)
        this.state.peek = 9;
      else if (t() === 98)
        this.state.peek = 8;
      else if (t() === 102)
        this.state.peek = 12;
      else if (t() === 117)
        if (this.advanceState(this.internalState), t() === 123) {
          this.advanceState(this.internalState);
          let r = this.clone(), n = 0;
          for (; t() !== 125; )
            this.advanceState(this.internalState), n++;
          this.state.peek = this.decodeHexDigits(r, n);
        } else {
          let r = this.clone();
          this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
        }
      else if (t() === 120) {
        this.advanceState(this.internalState);
        let r = this.clone();
        this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
      } else if (bo(t())) {
        let r = "", n = 0, s = this.clone();
        for (; bo(t()) && n < 3; )
          s = this.clone(), r += String.fromCodePoint(t()), this.advanceState(this.internalState), n++;
        this.state.peek = parseInt(r, 8), this.internalState = s.internalState;
      } else
        _u(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(t, r) {
    let n = this.input.slice(t.internalState.offset, t.internalState.offset + r), s = parseInt(n, 16);
    if (isNaN(s))
      throw t.state = t.internalState, new gi("Invalid hexadecimal escape sequence", t);
    return s;
  }
}, gi = class {
  constructor(e, t) {
    this.msg = e, this.cursor = t;
  }
}, _e = class Pu extends Au {
  static create(t, r, n) {
    return new Pu(t, r, n);
  }
  constructor(t, r, n) {
    super(r, n), this.elementName = t;
  }
}, c2 = class {
  constructor(e, t) {
    this.rootNodes = e, this.errors = t;
  }
}, p2 = class {
  constructor(t) {
    this.getTagDefinition = t;
  }
  parse(t, r, n, s = !1, i) {
    let a = (m) => (d, ...D) => m(d.toLowerCase(), ...D), l = s ? this.getTagDefinition : a(this.getTagDefinition), p = (m) => l(m).getContentType(), c = s ? i : a(i), u = Zg(t, r, i ? (m, d, D, y) => {
      let g = c(m, d, D, y);
      return g !== void 0 ? g : p(m);
    } : p, n), o = n && n.canSelfClose || !1, f = n && n.allowHtmComponentClosingTags || !1, h = new h2(u.tokens, l, o, f, s);
    return h.build(), new c2(h.rootNodes, u.errors.concat(h.errors));
  }
}, h2 = class Iu {
  constructor(t, r, n, s, i) {
    this.tokens = t, this.getTagDefinition = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = s, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
  }
  build() {
    for (; this._peek.type !== 30; )
      this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._advance();
    for (let t of this._containerStack)
      t instanceof qt && this.errors.push(_e.create(t.name, t.sourceSpan, `Unclosed block "${t.name}"`));
  }
  _advance() {
    let t = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], t;
  }
  _advanceIf(t) {
    return this._peek.type === t ? this._advance() : null;
  }
  _consumeCdata(t) {
    let r = this._advance(), n = this._getText(r), s = this._advanceIf(13);
    this._addToParent(new qg(n, new V(t.sourceSpan.start, (s || r).sourceSpan.end), [r]));
  }
  _consumeComment(t) {
    let r = this._advanceIf(7), n = this._advanceIf(11), s = r != null ? r.parts[0].trim() : null, i = new V(t.sourceSpan.start, (n || r || t).sourceSpan.end);
    this._addToParent(new Vg(s, i));
  }
  _consumeDocType(t) {
    let r = this._advanceIf(7), n = this._advanceIf(19), s = r != null ? r.parts[0].trim() : null, i = new V(t.sourceSpan.start, (n || r || t).sourceSpan.end);
    this._addToParent(new zg(s, i));
  }
  _consumeExpansion(t) {
    let r = this._advance(), n = this._advance(), s = [];
    for (; this._peek.type === 21; ) {
      let a = this._parseExpansionCase();
      if (!a)
        return;
      s.push(a);
    }
    if (this._peek.type !== 24) {
      this.errors.push(_e.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let i = new V(t.sourceSpan.start, this._peek.sourceSpan.end, t.sourceSpan.fullStart);
    this._addToParent(new Wg(r.parts[0], n.parts[0], s, i, r.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let t = this._advance();
    if (this._peek.type !== 22)
      return this.errors.push(_e.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r = this._advance(), n = this._collectExpansionExpTokens(r);
    if (!n)
      return null;
    let s = this._advance();
    n.push({ type: 30, parts: [], sourceSpan: s.sourceSpan });
    let i = new Iu(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (i.build(), i.errors.length > 0)
      return this.errors = this.errors.concat(i.errors), null;
    let a = new V(t.sourceSpan.start, s.sourceSpan.end, t.sourceSpan.fullStart), l = new V(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
    return new Hg(t.parts[0], i.rootNodes, a, t.sourceSpan, l);
  }
  _collectExpansionExpTokens(t) {
    let r = [], n = [22];
    for (; ; ) {
      if ((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23)
        if (Mo(n, 22)) {
          if (n.pop(), n.length === 0)
            return r;
        } else
          return this.errors.push(_e.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 24)
        if (Mo(n, 20))
          n.pop();
        else
          return this.errors.push(_e.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 30)
        return this.errors.push(_e.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      r.push(this._advance());
    }
  }
  _getText(t) {
    let r = t.parts[0];
    if (r.length > 0 && r[0] == `
`) {
      let n = this._getClosestParentElement();
      n != null && n.children.length == 0 && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1));
    }
    return r;
  }
  _consumeText(t) {
    let r = [t], n = t.sourceSpan, s = t.parts[0];
    if (s.length > 0 && s[0] === `
`) {
      let i = this._getContainer();
      i != null && i.children.length === 0 && this.getTagDefinition(i.name).ignoreFirstLf && (s = s.substring(1), r[0] = { type: t.type, sourceSpan: t.sourceSpan, parts: [s] });
    }
    for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; )
      t = this._advance(), r.push(t), t.type === 8 ? s += t.parts.join("").replace(/&([^;]+);/g, qo) : t.type === 9 ? s += t.parts[0] : s += t.parts.join("");
    if (s.length > 0) {
      let i = t.sourceSpan;
      this._addToParent(new Mg(s, new V(n.start, i.end, n.fullStart, n.details), r));
    }
  }
  _closeVoidElement() {
    let t = this._getContainer();
    t instanceof lt && this.getTagDefinition(t.name).isVoid && this._containerStack.pop();
  }
  _consumeStartTag(t) {
    let [r, n] = t.parts, s = [];
    for (; this._peek.type === 14; )
      s.push(this._consumeAttr(this._advance()));
    let i = this._getElementFullName(r, n, this._getClosestParentElement()), a = !1;
    if (this._peek.type === 2) {
      this._advance(), a = !0;
      let h = this.getTagDefinition(i);
      this.canSelfClose || h.canSelfClose || en(i) !== null || h.isVoid || this.errors.push(_e.create(i, t.sourceSpan, `Only void, custom and foreign elements can be self closed "${t.parts[1]}"`));
    } else
      this._peek.type === 1 && (this._advance(), a = !1);
    let l = this._peek.sourceSpan.fullStart, p = new V(t.sourceSpan.start, l, t.sourceSpan.fullStart), c = new V(t.sourceSpan.start, l, t.sourceSpan.fullStart), u = new V(t.sourceSpan.start.moveBy(1), t.sourceSpan.end), o = new lt(i, s, [], p, c, void 0, u), f = this._getContainer();
    this._pushContainer(o, f instanceof lt && this.getTagDefinition(f.name).isClosedByChild(o.name)), a ? this._popContainer(i, lt, p) : t.type === 4 && (this._popContainer(i, lt, null), this.errors.push(_e.create(i, p, `Opening tag "${i}" not terminated.`)));
  }
  _pushContainer(t, r) {
    r && this._containerStack.pop(), this._addToParent(t), this._containerStack.push(t);
  }
  _consumeEndTag(t) {
    let r = this.allowHtmComponentClosingTags && t.parts.length === 0 ? null : this._getElementFullName(t.parts[0], t.parts[1], this._getClosestParentElement());
    if (r && this.getTagDefinition(r).isVoid)
      this.errors.push(_e.create(r, t.sourceSpan, `Void elements do not have end tags "${t.parts[1]}"`));
    else if (!this._popContainer(r, lt, t.sourceSpan)) {
      let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(_e.create(r, t.sourceSpan, n));
    }
  }
  _popContainer(t, r, n) {
    let s = !1;
    for (let i = this._containerStack.length - 1; i >= 0; i--) {
      let a = this._containerStack[i];
      if (en(a.name) ? a.name === t : (t == null || a.name.toLowerCase() === t.toLowerCase()) && a instanceof r)
        return a.endSourceSpan = n, a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !s;
      (a instanceof qt || a instanceof lt && !this.getTagDefinition(a.name).closedByParent) && (s = !0);
    }
    return !1;
  }
  _consumeAttr(t) {
    let r = cn(t.parts[0], t.parts[1]), n = t.sourceSpan.end, s;
    this._peek.type === 15 && (s = this._advance());
    let i = "", a = [], l, p;
    if (this._peek.type === 16)
      for (l = this._peek.sourceSpan, p = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
        let u = this._advance();
        a.push(u), u.type === 17 ? i += u.parts.join("").replace(/&([^;]+);/g, qo) : u.type === 9 ? i += u.parts[0] : i += u.parts.join(""), p = n = u.sourceSpan.end;
      }
    this._peek.type === 15 && (p = n = this._advance().sourceSpan.end);
    let c = l && p && new V((s == null ? void 0 : s.sourceSpan.start) ?? l.start, p, (s == null ? void 0 : s.sourceSpan.fullStart) ?? l.fullStart);
    return new Ug(r, i, new V(t.sourceSpan.start, n, t.sourceSpan.fullStart), t.sourceSpan, c, a.length > 0 ? a : void 0, void 0);
  }
  _consumeBlockOpen(t) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let l = this._advance();
      r.push(new Lo(l.parts[0], l.sourceSpan));
    }
    this._peek.type === 26 && this._advance();
    let n = this._peek.sourceSpan.fullStart, s = new V(t.sourceSpan.start, n, t.sourceSpan.fullStart), i = new V(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new qt(t.parts[0], r, [], s, i);
    this._pushContainer(a, !1);
  }
  _consumeBlockClose(t) {
    this._popContainer(null, qt, t.sourceSpan) || this.errors.push(_e.create(null, t.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
  }
  _consumeIncompleteBlock(t) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let l = this._advance();
      r.push(new Lo(l.parts[0], l.sourceSpan));
    }
    let n = this._peek.sourceSpan.fullStart, s = new V(t.sourceSpan.start, n, t.sourceSpan.fullStart), i = new V(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new qt(t.parts[0], r, [], s, i);
    this._pushContainer(a, !1), this._popContainer(null, qt, null), this.errors.push(_e.create(t.parts[0], s, `Incomplete block "${t.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestParentElement() {
    for (let t = this._containerStack.length - 1; t > -1; t--)
      if (this._containerStack[t] instanceof lt)
        return this._containerStack[t];
    return null;
  }
  _addToParent(t) {
    let r = this._getContainer();
    r === null ? this.rootNodes.push(t) : r.children.push(t);
  }
  _getElementFullName(t, r, n) {
    if (t === "" && (t = this.getTagDefinition(r).implicitNamespacePrefix || "", t === "" && n != null)) {
      let s = Wn(n.name)[1];
      this.getTagDefinition(s).preventNamespaceInheritance || (t = en(n.name));
    }
    return cn(t, r);
  }
};
function Mo(e, t) {
  return e.length > 0 && e[e.length - 1] === t;
}
function qo(e, t) {
  return pn[t] !== void 0 ? pn[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
}
var d2 = class extends p2 {
  constructor() {
    super(Ss);
  }
  parse(e, t, r, n = !1, s) {
    return super.parse(e, t, r, n, s);
  }
}, us = null, f2 = () => (us || (us = new d2()), us);
function Wo(e, t = {}) {
  let { canSelfClose: r = !1, allowHtmComponentClosingTags: n = !1, isTagNameCaseSensitive: s = !1, getTagContentType: i, tokenizeAngularBlocks: a = !1 } = t;
  return f2().parse(e, "angular-html-parser", { tokenizeExpansionForms: a, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a }, s, i);
}
function m2(e, t) {
  let r = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
var g2 = m2, v2 = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
function D2(e) {
  let t = e.match(v2);
  if (!t)
    return { content: e };
  let { startDelimiter: r, language: n, value: s = "", endDelimiter: i } = t.groups, a = n.trim() || "yaml";
  if (r === "+++" && (a = "toml"), a !== "yaml" && r !== i)
    return { content: e };
  let [l] = t;
  return { frontMatter: { type: "front-matter", lang: a, value: s, startDelimiter: r, endDelimiter: i, raw: l.replace(/\n$/, "") }, content: be(!1, l, /[^\n]/g, " ") + e.slice(l.length) };
}
var y2 = D2, zr = { attrs: !0, children: !0, cases: !0, expression: !0 }, Ho = /* @__PURE__ */ new Set(["parent"]), w2 = class fr {
  constructor(t = {}) {
    for (let r of /* @__PURE__ */ new Set([...Ho, ...Object.keys(t)]))
      this.setProperty(r, t[r]);
  }
  setProperty(t, r) {
    if (this[t] !== r) {
      if (t in zr && (r = r.map((n) => this.createChild(n))), !Ho.has(t)) {
        this[t] = r;
        return;
      }
      Object.defineProperty(this, t, { value: r, enumerable: !1, configurable: !0 });
    }
  }
  map(t) {
    let r;
    for (let n in zr) {
      let s = this[n];
      if (s) {
        let i = b2(s, (a) => a.map(t));
        r !== s && (r || (r = new fr({ parent: this.parent })), r.setProperty(n, i));
      }
    }
    if (r)
      for (let n in this)
        n in zr || (r[n] = this[n]);
    return t(r || this);
  }
  walk(t) {
    for (let r in zr) {
      let n = this[r];
      if (n)
        for (let s = 0; s < n.length; s++)
          n[s].walk(t);
    }
    t(this);
  }
  createChild(t) {
    let r = t instanceof fr ? t.clone() : new fr(t);
    return r.setProperty("parent", this), r;
  }
  insertChildBefore(t, r) {
    this.children.splice(this.children.indexOf(t), 0, this.createChild(r));
  }
  removeChild(t) {
    this.children.splice(this.children.indexOf(t), 1);
  }
  replaceChild(t, r) {
    this.children[this.children.indexOf(t)] = this.createChild(r);
  }
  clone() {
    return new fr(this);
  }
  get firstChild() {
    var t;
    return (t = this.children) == null ? void 0 : t[0];
  }
  get lastChild() {
    var t;
    return (t = this.children) == null ? void 0 : t[this.children.length - 1];
  }
  get prev() {
    var t, r;
    return (r = (t = this.parent) == null ? void 0 : t.children) == null ? void 0 : r[this.parent.children.indexOf(this) - 1];
  }
  get next() {
    var t, r;
    return (r = (t = this.parent) == null ? void 0 : t.children) == null ? void 0 : r[this.parent.children.indexOf(this) + 1];
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
  get attrMap() {
    return Object.fromEntries(this.attrs.map((t) => [t.fullName, t.value]));
  }
};
function b2(e, t) {
  let r = e.map(t);
  return r.some((n, s) => n !== e[s]) ? r : e;
}
var C2 = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: k2 }, { regex: /^\[if([^\]]*)]><!$/, parse: x2 }, { regex: /^<!\s*\[endif]$/, parse: _2 }];
function E2(e, t) {
  if (e.value)
    for (let { regex: r, parse: n } of C2) {
      let s = e.value.match(r);
      if (s)
        return n(e, t, s);
    }
  return null;
}
function k2(e, t, r) {
  let [, n, s, i] = r, a = 4 + n.length, l = e.sourceSpan.start.moveBy(a), p = l.moveBy(i.length), [c, u] = (() => {
    try {
      return [!0, t(i, l).children];
    } catch {
      return [!1, [{ type: "text", value: i, sourceSpan: new V(l, p) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: c, children: u, condition: be(!1, s.trim(), /\s+/g, " "), sourceSpan: e.sourceSpan, startSourceSpan: new V(e.sourceSpan.start, l), endSourceSpan: new V(p, e.sourceSpan.end) };
}
function x2(e, t, r) {
  let [, n] = r;
  return { type: "ieConditionalStartComment", condition: be(!1, n.trim(), /\s+/g, " "), sourceSpan: e.sourceSpan };
}
function _2(e) {
  return { type: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
}
var ls = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootdelegatesfocus", "shadowrootmode"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]), F2 = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
function S2(e) {
  if (e.type === "block") {
    if (e.name = be(!1, e.name.toLowerCase(), /\s+/g, " ").trim(), e.type = "angularControlFlowBlock", !li(e.parameters)) {
      delete e.parameters;
      return;
    }
    for (let t of e.parameters)
      t.type = "angularControlFlowBlockParameter";
    e.parameters = { type: "angularControlFlowBlockParameters", children: e.parameters, sourceSpan: new V(e.parameters[0].sourceSpan.start, Tr(!1, e.parameters, -1).sourceSpan.end) };
  }
}
function A2(e) {
  (e.type === "plural" || e.type === "select") && (e.clause = e.type, e.type = "angularIcuExpression"), e.type === "expansionCase" && (e.type = "angularIcuCase");
}
function ju(e, t, r) {
  let { name: n, canSelfClose: s = !0, normalizeTagName: i = !1, normalizeAttributeName: a = !1, allowHtmComponentClosingTags: l = !1, isTagNameCaseSensitive: p = !1, shouldParseAsRawText: c } = t, { rootNodes: u, errors: o } = Wo(e, { canSelfClose: s, allowHtmComponentClosingTags: l, isTagNameCaseSensitive: p, getTagContentType: c ? (...g) => c(...g) ? Oe.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: n === "angular" ? !0 : void 0 });
  if (n === "vue") {
    if (u.some((w) => w.type === "docType" && w.value === "html" || w.type === "element" && w.name.toLowerCase() === "html"))
      return ju(e, Mu, r);
    let g, v = () => g ?? (g = Wo(e, { canSelfClose: s, allowHtmComponentClosingTags: l, isTagNameCaseSensitive: p })), b = (w) => v().rootNodes.find(({ startSourceSpan: C }) => C && C.start.offset === w.startSourceSpan.start.offset) ?? w;
    for (let [w, C] of u.entries()) {
      let { endSourceSpan: E, startSourceSpan: x } = C;
      if (E === null)
        o = v().errors, u[w] = b(C);
      else if (T2(C, r)) {
        let F = v().errors.find((B) => B.span.start.offset > x.start.offset && B.span.start.offset < E.end.offset);
        F && Uo(F), u[w] = b(C);
      }
    }
  }
  o.length > 0 && Uo(o[0]);
  let f = (g) => {
    let v = g.name.startsWith(":") ? g.name.slice(1).split(":")[0] : null, b = g.nameSpan.toString(), w = v !== null && b.startsWith(`${v}:`), C = w ? b.slice(v.length + 1) : b;
    g.name = C, g.namespace = v, g.hasExplicitNamespace = w;
  }, h = (g) => {
    switch (g.type) {
      case "element":
        f(g);
        for (let v of g.attrs)
          f(v), v.valueSpan ? (v.value = v.valueSpan.toString(), /["']/.test(v.value[0]) && (v.value = v.value.slice(1, -1))) : v.value = null;
        break;
      case "comment":
        g.value = g.sourceSpan.toString().slice(4, -3);
        break;
      case "text":
        g.value = g.sourceSpan.toString();
        break;
    }
  }, m = (g, v) => {
    let b = g.toLowerCase();
    return v(b) ? b : g;
  }, d = (g) => {
    if (g.type === "element" && (i && (!g.namespace || g.namespace === g.tagDefinition.implicitNamespacePrefix || Cr(g)) && (g.name = m(g.name, (v) => F2.has(v))), a))
      for (let v of g.attrs)
        v.namespace || (v.name = m(v.name, (b) => ls.has(g.name) && (ls.get("*").has(b) || ls.get(g.name).has(b))));
  }, D = (g) => {
    g.sourceSpan && g.endSourceSpan && (g.sourceSpan = new V(g.sourceSpan.start, g.endSourceSpan.end));
  }, y = (g) => {
    if (g.type === "element") {
      let v = Ss(p ? g.name : g.name.toLowerCase());
      !g.namespace || g.namespace === v.implicitNamespacePrefix || Cr(g) ? g.tagDefinition = v : g.tagDefinition = Ss("");
    }
  };
  return $u(new class extends Gg {
    visitExpansionCase(g, v) {
      n === "angular" && this.visitChildren(v, (b) => {
        b(g.expression);
      });
    }
    visit(g) {
      h(g), y(g), d(g), D(g);
    }
  }(), u), u;
}
function T2(e, t) {
  var r;
  if (e.type !== "element" || e.name !== "template")
    return !1;
  let n = (r = e.attrs.find((s) => s.name === "lang")) == null ? void 0 : r.value;
  return !n || Nn(t, { language: n }) === "html";
}
function Uo(e) {
  let { msg: t, span: { start: r, end: n } } = e;
  throw g2(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e });
}
function Ru(e, t, r = {}, n = !0) {
  let { frontMatter: s, content: i } = n ? y2(e) : { frontMatter: null, content: e }, a = new Su(e, r.filepath), l = new Fs(a, 0, 0, 0), p = l.moveBy(e.length), c = { type: "root", sourceSpan: new V(l, p), children: ju(i, t, r) };
  if (s) {
    let f = new Fs(a, 0, 0, 0), h = f.moveBy(s.raw.length);
    s.sourceSpan = new V(f, h), c.children.unshift(s);
  }
  let u = new w2(c), o = (f, h) => {
    let { offset: m } = h, d = be(!1, e.slice(0, m), /[^\n\r]/g, " "), D = Ru(d + f, t, r, !1);
    D.sourceSpan = new V(h, Tr(!1, D.children, -1).sourceSpan.end);
    let y = D.children[0];
    return y.length === m ? D.children.shift() : (y.sourceSpan = new V(y.sourceSpan.start.moveBy(m), y.sourceSpan.end), y.value = y.value.slice(m)), D;
  };
  return u.walk((f) => {
    if (f.type === "comment") {
      let h = E2(f, o);
      h && f.parent.replaceChild(f, h);
    }
    S2(f), A2(f);
  }), u;
}
function Hn(e) {
  return { parse: (t, r) => Ru(t, e, r), hasPragma: Zm, astFormat: "html", locStart: jn, locEnd: Rn };
}
var Mu = { name: "html", normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 }, B2 = Hn(Mu), $2 = Hn({ name: "angular" }), O2 = Hn({ name: "vue", isTagNameCaseSensitive: !0, shouldParseAsRawText(e, t, r, n) {
  return e.toLowerCase() !== "html" && !r && (e !== "template" || n.some(({ name: s, value: i }) => s === "lang" && i !== "html" && i !== "" && i !== void 0));
} }), L2 = Hn({ name: "lwc", canSelfClose: !1 }), N2 = { html: Fg }, P2 = Ka, I2 = Object.create, vi = Object.defineProperty, j2 = Object.getOwnPropertyDescriptor, R2 = Object.getOwnPropertyNames, M2 = Object.getPrototypeOf, q2 = Object.prototype.hasOwnProperty, T = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), qu = (e, t) => {
  for (var r in t)
    vi(e, r, { get: t[r], enumerable: !0 });
}, W2 = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s of R2(t))
      !q2.call(e, s) && s !== r && vi(e, s, { get: () => t[s], enumerable: !(n = j2(t, s)) || n.enumerable });
  return e;
}, Nt = (e, t, r) => (r = e != null ? I2(M2(e)) : {}, W2(t || !e || !e.__esModule ? vi(r, "default", { value: e, enumerable: !0 }) : r, e)), H2 = T((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extract = u, e.parse = f, e.parseWithComments = h, e.print = m, e.strip = o;
  var t = /\*\/$/, r = /^\/\*\*?/, n = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, s = /(^|\s+)\/\/([^\r\n]*)/g, i = /^(\r?\n)+/, a = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, l = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, p = /(\r?\n|^) *\* ?/g, c = [];
  function u(D) {
    let y = D.match(n);
    return y ? y[0].trimLeft() : "";
  }
  function o(D) {
    let y = D.match(n);
    return y && y[0] ? D.substring(y[0].length) : D;
  }
  function f(D) {
    return h(D).pragmas;
  }
  function h(D) {
    let y = `
`;
    D = D.replace(r, "").replace(t, "").replace(p, "$1");
    let g = "";
    for (; g !== D; )
      g = D, D = D.replace(a, `${y}$1 $2${y}`);
    D = D.replace(i, "").trimRight();
    let v = /* @__PURE__ */ Object.create(null), b = D.replace(l, "").replace(i, "").trimRight(), w;
    for (; w = l.exec(D); ) {
      let C = w[2].replace(s, "");
      typeof v[w[1]] == "string" || Array.isArray(v[w[1]]) ? v[w[1]] = c.concat(v[w[1]], C) : v[w[1]] = C;
    }
    return { comments: b, pragmas: v };
  }
  function m({ comments: D = "", pragmas: y = {} }) {
    let g = `
`, v = "/**", b = " *", w = " */", C = Object.keys(y), E = C.flatMap((F) => d(F, y[F])).map((F) => `${b} ${F}${g}`).join("");
    if (!D) {
      if (C.length === 0)
        return "";
      if (C.length === 1 && !Array.isArray(y[C[0]])) {
        let F = y[C[0]];
        return `${v} ${d(C[0], F)[0]}${w}`;
      }
    }
    let x = D.split(g).map((F) => `${b} ${F}`).join(g) + g;
    return v + g + (D ? x : "") + (D && C.length ? b + g : "") + E + w;
  }
  function d(D, y) {
    return c.concat(y).map((g) => `@${D} ${g}`.trim());
  }
}), Di = T((e, t) => {
  t.exports.isClean = Symbol("isClean"), t.exports.my = Symbol("my");
}), U2 = T((e, t) => {
  var r = String, n = function() {
    return { isColorSupported: !1, reset: r, bold: r, dim: r, italic: r, underline: r, inverse: r, hidden: r, strikethrough: r, black: r, red: r, green: r, yellow: r, blue: r, magenta: r, cyan: r, white: r, gray: r, bgBlack: r, bgRed: r, bgGreen: r, bgYellow: r, bgBlue: r, bgMagenta: r, bgCyan: r, bgWhite: r };
  };
  t.exports = n(), t.exports.createColors = n;
}), Wu = T(() => {
}), yi = T((e, t) => {
  var r = U2(), n = Wu(), s = class Hu extends Error {
    constructor(a, l, p, c, u, o) {
      super(a), this.name = "CssSyntaxError", this.reason = a, u && (this.file = u), c && (this.source = c), o && (this.plugin = o), typeof l < "u" && typeof p < "u" && (typeof l == "number" ? (this.line = l, this.column = p) : (this.line = l.line, this.column = l.column, this.endLine = p.line, this.endColumn = p.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Hu);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(a) {
      if (!this.source)
        return "";
      let l = this.source;
      a == null && (a = r.isColorSupported), n && a && (l = n(l));
      let p = l.split(/\r?\n/), c = Math.max(this.line - 3, 0), u = Math.min(this.line + 2, p.length), o = String(u).length, f, h;
      if (a) {
        let { bold: m, gray: d, red: D } = r.createColors(!0);
        f = (y) => m(D(y)), h = (y) => d(y);
      } else
        f = h = (m) => m;
      return p.slice(c, u).map((m, d) => {
        let D = c + 1 + d, y = " " + (" " + D).slice(-o) + " | ";
        if (D === this.line) {
          let g = h(y.replace(/\d/g, " ")) + m.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return f(">") + h(y) + m + `
 ` + g + f("^");
        }
        return " " + h(y) + m;
      }).join(`
`);
    }
    toString() {
      let a = this.showSourceCode();
      return a && (a = `

` + a + `
`), this.name + ": " + this.message + a;
    }
  };
  t.exports = s, s.default = s;
}), wi = T((e, t) => {
  var r = { after: `
`, beforeClose: `
`, beforeComment: `
`, beforeDecl: `
`, beforeOpen: " ", beforeRule: `
`, colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: !1 };
  function n(i) {
    return i[0].toUpperCase() + i.slice(1);
  }
  var s = class {
    constructor(i) {
      this.builder = i;
    }
    atrule(i, a) {
      let l = "@" + i.name, p = i.params ? this.rawValue(i, "params") : "";
      if (typeof i.raws.afterName < "u" ? l += i.raws.afterName : p && (l += " "), i.nodes)
        this.block(i, l + p);
      else {
        let c = (i.raws.between || "") + (a ? ";" : "");
        this.builder(l + p + c, i);
      }
    }
    beforeAfter(i, a) {
      let l;
      i.type === "decl" ? l = this.raw(i, null, "beforeDecl") : i.type === "comment" ? l = this.raw(i, null, "beforeComment") : a === "before" ? l = this.raw(i, null, "beforeRule") : l = this.raw(i, null, "beforeClose");
      let p = i.parent, c = 0;
      for (; p && p.type !== "root"; )
        c += 1, p = p.parent;
      if (l.includes(`
`)) {
        let u = this.raw(i, null, "indent");
        if (u.length)
          for (let o = 0; o < c; o++)
            l += u;
      }
      return l;
    }
    block(i, a) {
      let l = this.raw(i, "between", "beforeOpen");
      this.builder(a + l + "{", i, "start");
      let p;
      i.nodes && i.nodes.length ? (this.body(i), p = this.raw(i, "after")) : p = this.raw(i, "after", "emptyBody"), p && this.builder(p), this.builder("}", i, "end");
    }
    body(i) {
      let a = i.nodes.length - 1;
      for (; a > 0 && i.nodes[a].type === "comment"; )
        a -= 1;
      let l = this.raw(i, "semicolon");
      for (let p = 0; p < i.nodes.length; p++) {
        let c = i.nodes[p], u = this.raw(c, "before");
        u && this.builder(u), this.stringify(c, a !== p || l);
      }
    }
    comment(i) {
      let a = this.raw(i, "left", "commentLeft"), l = this.raw(i, "right", "commentRight");
      this.builder("/*" + a + i.text + l + "*/", i);
    }
    decl(i, a) {
      let l = this.raw(i, "between", "colon"), p = i.prop + l + this.rawValue(i, "value");
      i.important && (p += i.raws.important || " !important"), a && (p += ";"), this.builder(p, i);
    }
    document(i) {
      this.body(i);
    }
    raw(i, a, l) {
      let p;
      if (l || (l = a), a && (p = i.raws[a], typeof p < "u"))
        return p;
      let c = i.parent;
      if (l === "before" && (!c || c.type === "root" && c.first === i || c && c.type === "document"))
        return "";
      if (!c)
        return r[l];
      let u = i.root();
      if (u.rawCache || (u.rawCache = {}), typeof u.rawCache[l] < "u")
        return u.rawCache[l];
      if (l === "before" || l === "after")
        return this.beforeAfter(i, l);
      {
        let o = "raw" + n(l);
        this[o] ? p = this[o](u, i) : u.walk((f) => {
          if (p = f.raws[a], typeof p < "u")
            return !1;
        });
      }
      return typeof p > "u" && (p = r[l]), u.rawCache[l] = p, p;
    }
    rawBeforeClose(i) {
      let a;
      return i.walk((l) => {
        if (l.nodes && l.nodes.length > 0 && typeof l.raws.after < "u")
          return a = l.raws.after, a.includes(`
`) && (a = a.replace(/[^\n]+$/, "")), !1;
      }), a && (a = a.replace(/\S/g, "")), a;
    }
    rawBeforeComment(i, a) {
      let l;
      return i.walkComments((p) => {
        if (typeof p.raws.before < "u")
          return l = p.raws.before, l.includes(`
`) && (l = l.replace(/[^\n]+$/, "")), !1;
      }), typeof l > "u" ? l = this.raw(a, null, "beforeDecl") : l && (l = l.replace(/\S/g, "")), l;
    }
    rawBeforeDecl(i, a) {
      let l;
      return i.walkDecls((p) => {
        if (typeof p.raws.before < "u")
          return l = p.raws.before, l.includes(`
`) && (l = l.replace(/[^\n]+$/, "")), !1;
      }), typeof l > "u" ? l = this.raw(a, null, "beforeRule") : l && (l = l.replace(/\S/g, "")), l;
    }
    rawBeforeOpen(i) {
      let a;
      return i.walk((l) => {
        if (l.type !== "decl" && (a = l.raws.between, typeof a < "u"))
          return !1;
      }), a;
    }
    rawBeforeRule(i) {
      let a;
      return i.walk((l) => {
        if (l.nodes && (l.parent !== i || i.first !== l) && typeof l.raws.before < "u")
          return a = l.raws.before, a.includes(`
`) && (a = a.replace(/[^\n]+$/, "")), !1;
      }), a && (a = a.replace(/\S/g, "")), a;
    }
    rawColon(i) {
      let a;
      return i.walkDecls((l) => {
        if (typeof l.raws.between < "u")
          return a = l.raws.between.replace(/[^\s:]/g, ""), !1;
      }), a;
    }
    rawEmptyBody(i) {
      let a;
      return i.walk((l) => {
        if (l.nodes && l.nodes.length === 0 && (a = l.raws.after, typeof a < "u"))
          return !1;
      }), a;
    }
    rawIndent(i) {
      if (i.raws.indent)
        return i.raws.indent;
      let a;
      return i.walk((l) => {
        let p = l.parent;
        if (p && p !== i && p.parent && p.parent === i && typeof l.raws.before < "u") {
          let c = l.raws.before.split(`
`);
          return a = c[c.length - 1], a = a.replace(/\S/g, ""), !1;
        }
      }), a;
    }
    rawSemicolon(i) {
      let a;
      return i.walk((l) => {
        if (l.nodes && l.nodes.length && l.last.type === "decl" && (a = l.raws.semicolon, typeof a < "u"))
          return !1;
      }), a;
    }
    rawValue(i, a) {
      let l = i[a], p = i.raws[a];
      return p && p.value === l ? p.raw : l;
    }
    root(i) {
      this.body(i), i.raws.after && this.builder(i.raws.after);
    }
    rule(i) {
      this.block(i, this.rawValue(i, "selector")), i.raws.ownSemicolon && this.builder(i.raws.ownSemicolon, i, "end");
    }
    stringify(i, a) {
      if (!this[i.type])
        throw new Error("Unknown AST node type " + i.type + ". Maybe you need to change PostCSS stringifier.");
      this[i.type](i, a);
    }
  };
  t.exports = s, s.default = s;
}), Un = T((e, t) => {
  var r = wi();
  function n(s, i) {
    new r(i).stringify(s);
  }
  t.exports = n, n.default = n;
}), Vn = T((e, t) => {
  var { isClean: r, my: n } = Di(), s = yi(), i = wi(), a = Un();
  function l(c, u) {
    let o = new c.constructor();
    for (let f in c) {
      if (!Object.prototype.hasOwnProperty.call(c, f) || f === "proxyCache")
        continue;
      let h = c[f], m = typeof h;
      f === "parent" && m === "object" ? u && (o[f] = u) : f === "source" ? o[f] = h : Array.isArray(h) ? o[f] = h.map((d) => l(d, o)) : (m === "object" && h !== null && (h = l(h)), o[f] = h);
    }
    return o;
  }
  var p = class {
    constructor(c = {}) {
      this.raws = {}, this[r] = !1, this[n] = !0;
      for (let u in c)
        if (u === "nodes") {
          this.nodes = [];
          for (let o of c[u])
            typeof o.clone == "function" ? this.append(o.clone()) : this.append(o);
        } else
          this[u] = c[u];
    }
    addToError(c) {
      if (c.postcssNode = this, c.stack && this.source && /\n\s{4}at /.test(c.stack)) {
        let u = this.source;
        c.stack = c.stack.replace(/\n\s{4}at /, `$&${u.input.from}:${u.start.line}:${u.start.column}$&`);
      }
      return c;
    }
    after(c) {
      return this.parent.insertAfter(this, c), this;
    }
    assign(c = {}) {
      for (let u in c)
        this[u] = c[u];
      return this;
    }
    before(c) {
      return this.parent.insertBefore(this, c), this;
    }
    cleanRaws(c) {
      delete this.raws.before, delete this.raws.after, c || delete this.raws.between;
    }
    clone(c = {}) {
      let u = l(this);
      for (let o in c)
        u[o] = c[o];
      return u;
    }
    cloneAfter(c = {}) {
      let u = this.clone(c);
      return this.parent.insertAfter(this, u), u;
    }
    cloneBefore(c = {}) {
      let u = this.clone(c);
      return this.parent.insertBefore(this, u), u;
    }
    error(c, u = {}) {
      if (this.source) {
        let { end: o, start: f } = this.rangeBy(u);
        return this.source.input.error(c, { column: f.column, line: f.line }, { column: o.column, line: o.line }, u);
      }
      return new s(c);
    }
    getProxyProcessor() {
      return { get(c, u) {
        return u === "proxyOf" ? c : u === "root" ? () => c.root().toProxy() : c[u];
      }, set(c, u, o) {
        return c[u] === o || (c[u] = o, (u === "prop" || u === "value" || u === "name" || u === "params" || u === "important" || u === "text") && c.markDirty()), !0;
      } };
    }
    markDirty() {
      if (this[r]) {
        this[r] = !1;
        let c = this;
        for (; c = c.parent; )
          c[r] = !1;
      }
    }
    next() {
      if (!this.parent)
        return;
      let c = this.parent.index(this);
      return this.parent.nodes[c + 1];
    }
    positionBy(c, u) {
      let o = this.source.start;
      if (c.index)
        o = this.positionInside(c.index, u);
      else if (c.word) {
        u = this.toString();
        let f = u.indexOf(c.word);
        f !== -1 && (o = this.positionInside(f, u));
      }
      return o;
    }
    positionInside(c, u) {
      let o = u || this.toString(), f = this.source.start.column, h = this.source.start.line;
      for (let m = 0; m < c; m++)
        o[m] === `
` ? (f = 1, h += 1) : f += 1;
      return { column: f, line: h };
    }
    prev() {
      if (!this.parent)
        return;
      let c = this.parent.index(this);
      return this.parent.nodes[c - 1];
    }
    rangeBy(c) {
      let u = { column: this.source.start.column, line: this.source.start.line }, o = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: u.column + 1, line: u.line };
      if (c.word) {
        let f = this.toString(), h = f.indexOf(c.word);
        h !== -1 && (u = this.positionInside(h, f), o = this.positionInside(h + c.word.length, f));
      } else
        c.start ? u = { column: c.start.column, line: c.start.line } : c.index && (u = this.positionInside(c.index)), c.end ? o = { column: c.end.column, line: c.end.line } : c.endIndex ? o = this.positionInside(c.endIndex) : c.index && (o = this.positionInside(c.index + 1));
      return (o.line < u.line || o.line === u.line && o.column <= u.column) && (o = { column: u.column + 1, line: u.line }), { end: o, start: u };
    }
    raw(c, u) {
      return new i().raw(this, c, u);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...c) {
      if (this.parent) {
        let u = this, o = !1;
        for (let f of c)
          f === this ? o = !0 : o ? (this.parent.insertAfter(u, f), u = f) : this.parent.insertBefore(u, f);
        o || this.remove();
      }
      return this;
    }
    root() {
      let c = this;
      for (; c.parent && c.parent.type !== "document"; )
        c = c.parent;
      return c;
    }
    toJSON(c, u) {
      let o = {}, f = u == null;
      u = u || /* @__PURE__ */ new Map();
      let h = 0;
      for (let m in this) {
        if (!Object.prototype.hasOwnProperty.call(this, m) || m === "parent" || m === "proxyCache")
          continue;
        let d = this[m];
        if (Array.isArray(d))
          o[m] = d.map((D) => typeof D == "object" && D.toJSON ? D.toJSON(null, u) : D);
        else if (typeof d == "object" && d.toJSON)
          o[m] = d.toJSON(null, u);
        else if (m === "source") {
          let D = u.get(d.input);
          D == null && (D = h, u.set(d.input, h), h++), o[m] = { end: d.end, inputId: D, start: d.start };
        } else
          o[m] = d;
      }
      return f && (o.inputs = [...u.keys()].map((m) => m.toJSON())), o;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(c = a) {
      c.stringify && (c = c.stringify);
      let u = "";
      return c(this, (o) => {
        u += o;
      }), u;
    }
    warn(c, u, o) {
      let f = { node: this };
      for (let h in o)
        f[h] = o[h];
      return c.warn(u, f);
    }
    get proxyOf() {
      return this;
    }
  };
  t.exports = p, p.default = p;
}), zn = T((e, t) => {
  var r = Vn(), n = class extends r {
    constructor(s) {
      s && typeof s.value < "u" && typeof s.value != "string" && (s = { ...s, value: String(s.value) }), super(s), this.type = "decl";
    }
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
  };
  t.exports = n, n.default = n;
}), Nr = T((e, t) => {
  var r = Vn(), n = class extends r {
    constructor(s) {
      super(s), this.type = "comment";
    }
  };
  t.exports = n, n.default = n;
}), Pt = T((e, t) => {
  var { isClean: r, my: n } = Di(), s = zn(), i = Nr(), a = Vn(), l, p, c, u;
  function o(m) {
    return m.map((d) => (d.nodes && (d.nodes = o(d.nodes)), delete d.source, d));
  }
  function f(m) {
    if (m[r] = !1, m.proxyOf.nodes)
      for (let d of m.proxyOf.nodes)
        f(d);
  }
  var h = class Uu extends a {
    append(...d) {
      for (let D of d) {
        let y = this.normalize(D, this.last);
        for (let g of y)
          this.proxyOf.nodes.push(g);
      }
      return this.markDirty(), this;
    }
    cleanRaws(d) {
      if (super.cleanRaws(d), this.nodes)
        for (let D of this.nodes)
          D.cleanRaws(d);
    }
    each(d) {
      if (!this.proxyOf.nodes)
        return;
      let D = this.getIterator(), y, g;
      for (; this.indexes[D] < this.proxyOf.nodes.length && (y = this.indexes[D], g = d(this.proxyOf.nodes[y], y), g !== !1); )
        this.indexes[D] += 1;
      return delete this.indexes[D], g;
    }
    every(d) {
      return this.nodes.every(d);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let d = this.lastEach;
      return this.indexes[d] = 0, d;
    }
    getProxyProcessor() {
      return { get(d, D) {
        return D === "proxyOf" ? d : d[D] ? D === "each" || typeof D == "string" && D.startsWith("walk") ? (...y) => d[D](...y.map((g) => typeof g == "function" ? (v, b) => g(v.toProxy(), b) : g)) : D === "every" || D === "some" ? (y) => d[D]((g, ...v) => y(g.toProxy(), ...v)) : D === "root" ? () => d.root().toProxy() : D === "nodes" ? d.nodes.map((y) => y.toProxy()) : D === "first" || D === "last" ? d[D].toProxy() : d[D] : d[D];
      }, set(d, D, y) {
        return d[D] === y || (d[D] = y, (D === "name" || D === "params" || D === "selector") && d.markDirty()), !0;
      } };
    }
    index(d) {
      return typeof d == "number" ? d : (d.proxyOf && (d = d.proxyOf), this.proxyOf.nodes.indexOf(d));
    }
    insertAfter(d, D) {
      let y = this.index(d), g = this.normalize(D, this.proxyOf.nodes[y]).reverse();
      y = this.index(d);
      for (let b of g)
        this.proxyOf.nodes.splice(y + 1, 0, b);
      let v;
      for (let b in this.indexes)
        v = this.indexes[b], y < v && (this.indexes[b] = v + g.length);
      return this.markDirty(), this;
    }
    insertBefore(d, D) {
      let y = this.index(d), g = y === 0 ? "prepend" : !1, v = this.normalize(D, this.proxyOf.nodes[y], g).reverse();
      y = this.index(d);
      for (let w of v)
        this.proxyOf.nodes.splice(y, 0, w);
      let b;
      for (let w in this.indexes)
        b = this.indexes[w], y <= b && (this.indexes[w] = b + v.length);
      return this.markDirty(), this;
    }
    normalize(d, D) {
      if (typeof d == "string")
        d = o(l(d).nodes);
      else if (Array.isArray(d)) {
        d = d.slice(0);
        for (let y of d)
          y.parent && y.parent.removeChild(y, "ignore");
      } else if (d.type === "root" && this.type !== "document") {
        d = d.nodes.slice(0);
        for (let y of d)
          y.parent && y.parent.removeChild(y, "ignore");
      } else if (d.type)
        d = [d];
      else if (d.prop) {
        if (typeof d.value > "u")
          throw new Error("Value field is missed in node creation");
        typeof d.value != "string" && (d.value = String(d.value)), d = [new s(d)];
      } else if (d.selector)
        d = [new p(d)];
      else if (d.name)
        d = [new c(d)];
      else if (d.text)
        d = [new i(d)];
      else
        throw new Error("Unknown node type in node creation");
      return d.map((y) => (y[n] || Uu.rebuild(y), y = y.proxyOf, y.parent && y.parent.removeChild(y), y[r] && f(y), typeof y.raws.before > "u" && D && typeof D.raws.before < "u" && (y.raws.before = D.raws.before.replace(/\S/g, "")), y.parent = this.proxyOf, y));
    }
    prepend(...d) {
      d = d.reverse();
      for (let D of d) {
        let y = this.normalize(D, this.first, "prepend").reverse();
        for (let g of y)
          this.proxyOf.nodes.unshift(g);
        for (let g in this.indexes)
          this.indexes[g] = this.indexes[g] + y.length;
      }
      return this.markDirty(), this;
    }
    push(d) {
      return d.parent = this, this.proxyOf.nodes.push(d), this;
    }
    removeAll() {
      for (let d of this.proxyOf.nodes)
        d.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(d) {
      d = this.index(d), this.proxyOf.nodes[d].parent = void 0, this.proxyOf.nodes.splice(d, 1);
      let D;
      for (let y in this.indexes)
        D = this.indexes[y], D >= d && (this.indexes[y] = D - 1);
      return this.markDirty(), this;
    }
    replaceValues(d, D, y) {
      return y || (y = D, D = {}), this.walkDecls((g) => {
        D.props && !D.props.includes(g.prop) || D.fast && !g.value.includes(D.fast) || (g.value = g.value.replace(d, y));
      }), this.markDirty(), this;
    }
    some(d) {
      return this.nodes.some(d);
    }
    walk(d) {
      return this.each((D, y) => {
        let g;
        try {
          g = d(D, y);
        } catch (v) {
          throw D.addToError(v);
        }
        return g !== !1 && D.walk && (g = D.walk(d)), g;
      });
    }
    walkAtRules(d, D) {
      return D ? d instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "atrule" && d.test(y.name))
          return D(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "atrule" && y.name === d)
          return D(y, g);
      }) : (D = d, this.walk((y, g) => {
        if (y.type === "atrule")
          return D(y, g);
      }));
    }
    walkComments(d) {
      return this.walk((D, y) => {
        if (D.type === "comment")
          return d(D, y);
      });
    }
    walkDecls(d, D) {
      return D ? d instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "decl" && d.test(y.prop))
          return D(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "decl" && y.prop === d)
          return D(y, g);
      }) : (D = d, this.walk((y, g) => {
        if (y.type === "decl")
          return D(y, g);
      }));
    }
    walkRules(d, D) {
      return D ? d instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "rule" && d.test(y.selector))
          return D(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "rule" && y.selector === d)
          return D(y, g);
      }) : (D = d, this.walk((y, g) => {
        if (y.type === "rule")
          return D(y, g);
      }));
    }
    get first() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
  };
  h.registerParse = (m) => {
    l = m;
  }, h.registerRule = (m) => {
    p = m;
  }, h.registerAtRule = (m) => {
    c = m;
  }, h.registerRoot = (m) => {
    u = m;
  }, t.exports = h, h.default = h, h.rebuild = (m) => {
    m.type === "atrule" ? Object.setPrototypeOf(m, c.prototype) : m.type === "rule" ? Object.setPrototypeOf(m, p.prototype) : m.type === "decl" ? Object.setPrototypeOf(m, s.prototype) : m.type === "comment" ? Object.setPrototypeOf(m, i.prototype) : m.type === "root" && Object.setPrototypeOf(m, u.prototype), m[n] = !0, m.nodes && m.nodes.forEach((d) => {
      h.rebuild(d);
    });
  };
}), bi = T((e, t) => {
  var r = /[\t\n\f\r "#'()/;[\\\]{}]/g, n = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, s = /.[\r\n"'(/\\]/, i = /[\da-f]/i;
  t.exports = function(a, l = {}) {
    let p = a.css.valueOf(), c = l.ignoreErrors, u, o, f, h, m, d, D, y, g, v, b = p.length, w = 0, C = [], E = [];
    function x() {
      return w;
    }
    function F(R) {
      throw a.error("Unclosed " + R, w);
    }
    function B() {
      return E.length === 0 && w >= b;
    }
    function N(R) {
      if (E.length)
        return E.pop();
      if (w >= b)
        return;
      let I = R ? R.ignoreUnclosed : !1;
      switch (u = p.charCodeAt(w), u) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12: {
          o = w;
          do
            o += 1, u = p.charCodeAt(o);
          while (u === 32 || u === 10 || u === 9 || u === 13 || u === 12);
          v = ["space", p.slice(w, o)], w = o - 1;
          break;
        }
        case 91:
        case 93:
        case 123:
        case 125:
        case 58:
        case 59:
        case 41: {
          let j = String.fromCharCode(u);
          v = [j, j, w];
          break;
        }
        case 40: {
          if (y = C.length ? C.pop()[1] : "", g = p.charCodeAt(w + 1), y === "url" && g !== 39 && g !== 34 && g !== 32 && g !== 10 && g !== 9 && g !== 12 && g !== 13) {
            o = w;
            do {
              if (d = !1, o = p.indexOf(")", o + 1), o === -1)
                if (c || I) {
                  o = w;
                  break;
                } else
                  F("bracket");
              for (D = o; p.charCodeAt(D - 1) === 92; )
                D -= 1, d = !d;
            } while (d);
            v = ["brackets", p.slice(w, o + 1), w, o], w = o;
          } else
            o = p.indexOf(")", w + 1), h = p.slice(w, o + 1), o === -1 || s.test(h) ? v = ["(", "(", w] : (v = ["brackets", h, w, o], w = o);
          break;
        }
        case 39:
        case 34: {
          f = u === 39 ? "'" : '"', o = w;
          do {
            if (d = !1, o = p.indexOf(f, o + 1), o === -1)
              if (c || I) {
                o = w + 1;
                break;
              } else
                F("string");
            for (D = o; p.charCodeAt(D - 1) === 92; )
              D -= 1, d = !d;
          } while (d);
          v = ["string", p.slice(w, o + 1), w, o], w = o;
          break;
        }
        case 64: {
          r.lastIndex = w + 1, r.test(p), r.lastIndex === 0 ? o = p.length - 1 : o = r.lastIndex - 2, v = ["at-word", p.slice(w, o + 1), w, o], w = o;
          break;
        }
        case 92: {
          for (o = w, m = !0; p.charCodeAt(o + 1) === 92; )
            o += 1, m = !m;
          if (u = p.charCodeAt(o + 1), m && u !== 47 && u !== 32 && u !== 10 && u !== 9 && u !== 13 && u !== 12 && (o += 1, i.test(p.charAt(o)))) {
            for (; i.test(p.charAt(o + 1)); )
              o += 1;
            p.charCodeAt(o + 1) === 32 && (o += 1);
          }
          v = ["word", p.slice(w, o + 1), w, o], w = o;
          break;
        }
        default: {
          u === 47 && p.charCodeAt(w + 1) === 42 ? (o = p.indexOf("*/", w + 2) + 1, o === 0 && (c || I ? o = p.length : F("comment")), v = ["comment", p.slice(w, o + 1), w, o], w = o) : (n.lastIndex = w + 1, n.test(p), n.lastIndex === 0 ? o = p.length - 1 : o = n.lastIndex - 2, v = ["word", p.slice(w, o + 1), w, o], C.push(v), w = o);
          break;
        }
      }
      return w++, v;
    }
    function M(R) {
      E.push(R);
    }
    return { back: M, endOfFile: B, nextToken: N, position: x };
  };
}), Ci = T((e, t) => {
  var r = Pt(), n = class extends r {
    constructor(s) {
      super(s), this.type = "atrule";
    }
    append(...s) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...s);
    }
    prepend(...s) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...s);
    }
  };
  t.exports = n, n.default = n, r.registerAtRule(n);
}), Pr = T((e, t) => {
  var r = Pt(), n, s, i = class extends r {
    constructor(a) {
      super(a), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(a, l, p) {
      let c = super.normalize(a);
      if (l) {
        if (p === "prepend")
          this.nodes.length > 1 ? l.raws.before = this.nodes[1].raws.before : delete l.raws.before;
        else if (this.first !== l)
          for (let u of c)
            u.raws.before = l.raws.before;
      }
      return c;
    }
    removeChild(a, l) {
      let p = this.index(a);
      return !l && p === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[p].raws.before), super.removeChild(a);
    }
    toResult(a = {}) {
      return new n(new s(), this, a).stringify();
    }
  };
  i.registerLazyResult = (a) => {
    n = a;
  }, i.registerProcessor = (a) => {
    s = a;
  }, t.exports = i, i.default = i, r.registerRoot(i);
}), Vu = T((e, t) => {
  var r = { comma(n) {
    return r.split(n, [","], !0);
  }, space(n) {
    let s = [" ", `
`, "	"];
    return r.split(n, s);
  }, split(n, s, i) {
    let a = [], l = "", p = !1, c = 0, u = !1, o = "", f = !1;
    for (let h of n)
      f ? f = !1 : h === "\\" ? f = !0 : u ? h === o && (u = !1) : h === '"' || h === "'" ? (u = !0, o = h) : h === "(" ? c += 1 : h === ")" ? c > 0 && (c -= 1) : c === 0 && s.includes(h) && (p = !0), p ? (l !== "" && a.push(l.trim()), l = "", p = !1) : l += h;
    return (i || l !== "") && a.push(l.trim()), a;
  } };
  t.exports = r, r.default = r;
}), Ei = T((e, t) => {
  var r = Pt(), n = Vu(), s = class extends r {
    constructor(i) {
      super(i), this.type = "rule", this.nodes || (this.nodes = []);
    }
    get selectors() {
      return n.comma(this.selector);
    }
    set selectors(i) {
      let a = this.selector ? this.selector.match(/,\s*/) : null, l = a ? a[0] : "," + this.raw("between", "beforeOpen");
      this.selector = i.join(l);
    }
  };
  t.exports = s, s.default = s, r.registerRule(s);
}), ki = T((e, t) => {
  var r = zn(), n = bi(), s = Nr(), i = Ci(), a = Pr(), l = Ei(), p = { empty: !0, space: !0 };
  function c(o) {
    for (let f = o.length - 1; f >= 0; f--) {
      let h = o[f], m = h[3] || h[2];
      if (m)
        return m;
    }
  }
  var u = class {
    constructor(o) {
      this.input = o, this.root = new a(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.customProperty = !1, this.createTokenizer(), this.root.source = { input: o, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(o) {
      let f = new i();
      f.name = o[1].slice(1), f.name === "" && this.unnamedAtrule(f, o), this.init(f, o[2]);
      let h, m, d, D = !1, y = !1, g = [], v = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (o = this.tokenizer.nextToken(), h = o[0], h === "(" || h === "[" ? v.push(h === "(" ? ")" : "]") : h === "{" && v.length > 0 ? v.push("}") : h === v[v.length - 1] && v.pop(), v.length === 0)
          if (h === ";") {
            f.source.end = this.getPosition(o[2]), f.source.end.offset++, this.semicolon = !0;
            break;
          } else if (h === "{") {
            y = !0;
            break;
          } else if (h === "}") {
            if (g.length > 0) {
              for (d = g.length - 1, m = g[d]; m && m[0] === "space"; )
                m = g[--d];
              m && (f.source.end = this.getPosition(m[3] || m[2]), f.source.end.offset++);
            }
            this.end(o);
            break;
          } else
            g.push(o);
        else
          g.push(o);
        if (this.tokenizer.endOfFile()) {
          D = !0;
          break;
        }
      }
      f.raws.between = this.spacesAndCommentsFromEnd(g), g.length ? (f.raws.afterName = this.spacesAndCommentsFromStart(g), this.raw(f, "params", g), D && (o = g[g.length - 1], f.source.end = this.getPosition(o[3] || o[2]), f.source.end.offset++, this.spaces = f.raws.between, f.raws.between = "")) : (f.raws.afterName = "", f.params = ""), y && (f.nodes = [], this.current = f);
    }
    checkMissedSemicolon(o) {
      let f = this.colon(o);
      if (f === !1)
        return;
      let h = 0, m;
      for (let d = f - 1; d >= 0 && (m = o[d], !(m[0] !== "space" && (h += 1, h === 2))); d--)
        ;
      throw this.input.error("Missed semicolon", m[0] === "word" ? m[3] + 1 : m[2]);
    }
    colon(o) {
      let f = 0, h, m, d;
      for (let [D, y] of o.entries()) {
        if (h = y, m = h[0], m === "(" && (f += 1), m === ")" && (f -= 1), f === 0 && m === ":")
          if (!d)
            this.doubleColon(h);
          else {
            if (d[0] === "word" && d[1] === "progid")
              continue;
            return D;
          }
        d = h;
      }
      return !1;
    }
    comment(o) {
      let f = new s();
      this.init(f, o[2]), f.source.end = this.getPosition(o[3] || o[2]), f.source.end.offset++;
      let h = o[1].slice(2, -2);
      if (/^\s*$/.test(h))
        f.text = "", f.raws.left = h, f.raws.right = "";
      else {
        let m = h.match(/^(\s*)([^]*\S)(\s*)$/);
        f.text = m[2], f.raws.left = m[1], f.raws.right = m[3];
      }
    }
    createTokenizer() {
      this.tokenizer = n(this.input);
    }
    decl(o, f) {
      let h = new r();
      this.init(h, o[0][2]);
      let m = o[o.length - 1];
      for (m[0] === ";" && (this.semicolon = !0, o.pop()), h.source.end = this.getPosition(m[3] || m[2] || c(o)), h.source.end.offset++; o[0][0] !== "word"; )
        o.length === 1 && this.unknownWord(o), h.raws.before += o.shift()[1];
      for (h.source.start = this.getPosition(o[0][2]), h.prop = ""; o.length; ) {
        let g = o[0][0];
        if (g === ":" || g === "space" || g === "comment")
          break;
        h.prop += o.shift()[1];
      }
      h.raws.between = "";
      let d;
      for (; o.length; )
        if (d = o.shift(), d[0] === ":") {
          h.raws.between += d[1];
          break;
        } else
          d[0] === "word" && /\w/.test(d[1]) && this.unknownWord([d]), h.raws.between += d[1];
      (h.prop[0] === "_" || h.prop[0] === "*") && (h.raws.before += h.prop[0], h.prop = h.prop.slice(1));
      let D = [], y;
      for (; o.length && (y = o[0][0], !(y !== "space" && y !== "comment")); )
        D.push(o.shift());
      this.precheckMissedSemicolon(o);
      for (let g = o.length - 1; g >= 0; g--) {
        if (d = o[g], d[1].toLowerCase() === "!important") {
          h.important = !0;
          let v = this.stringFrom(o, g);
          v = this.spacesFromEnd(o) + v, v !== " !important" && (h.raws.important = v);
          break;
        } else if (d[1].toLowerCase() === "important") {
          let v = o.slice(0), b = "";
          for (let w = g; w > 0; w--) {
            let C = v[w][0];
            if (b.trim().indexOf("!") === 0 && C !== "space")
              break;
            b = v.pop()[1] + b;
          }
          b.trim().indexOf("!") === 0 && (h.important = !0, h.raws.important = b, o = v);
        }
        if (d[0] !== "space" && d[0] !== "comment")
          break;
      }
      o.some((g) => g[0] !== "space" && g[0] !== "comment") && (h.raws.between += D.map((g) => g[1]).join(""), D = []), this.raw(h, "value", D.concat(o), f), h.value.includes(":") && !f && this.checkMissedSemicolon(o);
    }
    doubleColon(o) {
      throw this.input.error("Double colon", { offset: o[2] }, { offset: o[2] + o[1].length });
    }
    emptyRule(o) {
      let f = new l();
      this.init(f, o[2]), f.selector = "", f.raws.between = "", this.current = f;
    }
    end(o) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(o[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(o);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(o) {
      if (this.spaces += o[1], this.current.nodes) {
        let f = this.current.nodes[this.current.nodes.length - 1];
        f && f.type === "rule" && !f.raws.ownSemicolon && (f.raws.ownSemicolon = this.spaces, this.spaces = "");
      }
    }
    getPosition(o) {
      let f = this.input.fromOffset(o);
      return { column: f.col, line: f.line, offset: o };
    }
    init(o, f) {
      this.current.push(o), o.source = { input: this.input, start: this.getPosition(f) }, o.raws.before = this.spaces, this.spaces = "", o.type !== "comment" && (this.semicolon = !1);
    }
    other(o) {
      let f = !1, h = null, m = !1, d = null, D = [], y = o[1].startsWith("--"), g = [], v = o;
      for (; v; ) {
        if (h = v[0], g.push(v), h === "(" || h === "[")
          d || (d = v), D.push(h === "(" ? ")" : "]");
        else if (y && m && h === "{")
          d || (d = v), D.push("}");
        else if (D.length === 0)
          if (h === ";")
            if (m) {
              this.decl(g, y);
              return;
            } else
              break;
          else if (h === "{") {
            this.rule(g);
            return;
          } else if (h === "}") {
            this.tokenizer.back(g.pop()), f = !0;
            break;
          } else
            h === ":" && (m = !0);
        else
          h === D[D.length - 1] && (D.pop(), D.length === 0 && (d = null));
        v = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (f = !0), D.length > 0 && this.unclosedBracket(d), f && m) {
        if (!y)
          for (; g.length && (v = g[g.length - 1][0], !(v !== "space" && v !== "comment")); )
            this.tokenizer.back(g.pop());
        this.decl(g, y);
      } else
        this.unknownWord(g);
    }
    parse() {
      let o;
      for (; !this.tokenizer.endOfFile(); )
        switch (o = this.tokenizer.nextToken(), o[0]) {
          case "space":
            this.spaces += o[1];
            break;
          case ";":
            this.freeSemicolon(o);
            break;
          case "}":
            this.end(o);
            break;
          case "comment":
            this.comment(o);
            break;
          case "at-word":
            this.atrule(o);
            break;
          case "{":
            this.emptyRule(o);
            break;
          default:
            this.other(o);
            break;
        }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(o, f, h, m) {
      let d, D, y = h.length, g = "", v = !0, b, w;
      for (let C = 0; C < y; C += 1)
        d = h[C], D = d[0], D === "space" && C === y - 1 && !m ? v = !1 : D === "comment" ? (w = h[C - 1] ? h[C - 1][0] : "empty", b = h[C + 1] ? h[C + 1][0] : "empty", !p[w] && !p[b] ? g.slice(-1) === "," ? v = !1 : g += d[1] : v = !1) : g += d[1];
      if (!v) {
        let C = h.reduce((E, x) => E + x[1], "");
        o.raws[f] = { raw: C, value: g };
      }
      o[f] = g;
    }
    rule(o) {
      o.pop();
      let f = new l();
      this.init(f, o[0][2]), f.raws.between = this.spacesAndCommentsFromEnd(o), this.raw(f, "selector", o), this.current = f;
    }
    spacesAndCommentsFromEnd(o) {
      let f, h = "";
      for (; o.length && (f = o[o.length - 1][0], !(f !== "space" && f !== "comment")); )
        h = o.pop()[1] + h;
      return h;
    }
    spacesAndCommentsFromStart(o) {
      let f, h = "";
      for (; o.length && (f = o[0][0], !(f !== "space" && f !== "comment")); )
        h += o.shift()[1];
      return h;
    }
    spacesFromEnd(o) {
      let f, h = "";
      for (; o.length && (f = o[o.length - 1][0], f === "space"); )
        h = o.pop()[1] + h;
      return h;
    }
    stringFrom(o, f) {
      let h = "";
      for (let m = f; m < o.length; m++)
        h += o[m][1];
      return o.splice(f, o.length - f), h;
    }
    unclosedBlock() {
      let o = this.current.source.start;
      throw this.input.error("Unclosed block", o.line, o.column);
    }
    unclosedBracket(o) {
      throw this.input.error("Unclosed bracket", { offset: o[2] }, { offset: o[2] + 1 });
    }
    unexpectedClose(o) {
      throw this.input.error("Unexpected }", { offset: o[2] }, { offset: o[2] + 1 });
    }
    unknownWord(o) {
      throw this.input.error("Unknown word", { offset: o[0][2] }, { offset: o[0][2] + o[0][1].length });
    }
    unnamedAtrule(o, f) {
      throw this.input.error("At-rule without name", { offset: f[2] }, { offset: f[2] + f[1].length });
    }
  };
  t.exports = u;
}), V2 = T(() => {
}), z2 = T((e, t) => {
  var r = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", n = (i, a = 21) => (l = a) => {
    let p = "", c = l;
    for (; c--; )
      p += i[Math.random() * i.length | 0];
    return p;
  }, s = (i = 21) => {
    let a = "", l = i;
    for (; l--; )
      a += r[Math.random() * 64 | 0];
    return a;
  };
  t.exports = { nanoid: s, customAlphabet: n };
}), zu = T((e, t) => {
  t.exports = class {
  };
}), Ir = T((e, t) => {
  var { SourceMapConsumer: r, SourceMapGenerator: n } = V2(), { fileURLToPath: s, pathToFileURL: i } = {}, { isAbsolute: a, resolve: l } = {}, { nanoid: p } = z2(), c = Wu(), u = yi(), o = zu(), f = Symbol("fromOffsetCache"), h = !!(r && n), m = !!(l && a), d = class {
    constructor(D, y = {}) {
      if (D === null || typeof D > "u" || typeof D == "object" && !D.toString)
        throw new Error(`PostCSS received ${D} instead of CSS string`);
      if (this.css = D.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, y.from && (!m || /^\w+:\/\//.test(y.from) || a(y.from) ? this.file = y.from : this.file = l(y.from)), m && h) {
        let g = new o(this.css, y);
        if (g.text) {
          this.map = g;
          let v = g.consumer().file;
          !this.file && v && (this.file = this.mapResolve(v));
        }
      }
      this.file || (this.id = "<input css " + p(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(D, y, g, v = {}) {
      let b, w, C;
      if (y && typeof y == "object") {
        let x = y, F = g;
        if (typeof x.offset == "number") {
          let B = this.fromOffset(x.offset);
          y = B.line, g = B.col;
        } else
          y = x.line, g = x.column;
        if (typeof F.offset == "number") {
          let B = this.fromOffset(F.offset);
          w = B.line, C = B.col;
        } else
          w = F.line, C = F.column;
      } else if (!g) {
        let x = this.fromOffset(y);
        y = x.line, g = x.col;
      }
      let E = this.origin(y, g, w, C);
      return E ? b = new u(D, E.endLine === void 0 ? E.line : { column: E.column, line: E.line }, E.endLine === void 0 ? E.column : { column: E.endColumn, line: E.endLine }, E.source, E.file, v.plugin) : b = new u(D, w === void 0 ? y : { column: g, line: y }, w === void 0 ? g : { column: C, line: w }, this.css, this.file, v.plugin), b.input = { column: g, endColumn: C, endLine: w, line: y, source: this.css }, this.file && (i && (b.input.url = i(this.file).toString()), b.input.file = this.file), b;
    }
    fromOffset(D) {
      let y, g;
      if (this[f])
        g = this[f];
      else {
        let b = this.css.split(`
`);
        g = new Array(b.length);
        let w = 0;
        for (let C = 0, E = b.length; C < E; C++)
          g[C] = w, w += b[C].length + 1;
        this[f] = g;
      }
      y = g[g.length - 1];
      let v = 0;
      if (D >= y)
        v = g.length - 1;
      else {
        let b = g.length - 2, w;
        for (; v < b; )
          if (w = v + (b - v >> 1), D < g[w])
            b = w - 1;
          else if (D >= g[w + 1])
            v = w + 1;
          else {
            v = w;
            break;
          }
      }
      return { col: D - g[v] + 1, line: v + 1 };
    }
    mapResolve(D) {
      return /^\w+:\/\//.test(D) ? D : l(this.map.consumer().sourceRoot || this.map.root || ".", D);
    }
    origin(D, y, g, v) {
      if (!this.map)
        return !1;
      let b = this.map.consumer(), w = b.originalPositionFor({ column: y, line: D });
      if (!w.source)
        return !1;
      let C;
      typeof g == "number" && (C = b.originalPositionFor({ column: v, line: g }));
      let E;
      a(w.source) ? E = i(w.source) : E = new URL(w.source, this.map.consumer().sourceRoot || i(this.map.mapFile));
      let x = { column: w.column, endColumn: C && C.column, endLine: C && C.line, line: w.line, url: E.toString() };
      if (E.protocol === "file:")
        if (s)
          x.file = s(E);
        else
          throw new Error("file: protocol is not available in this PostCSS build");
      let F = b.sourceContentFor(w.source);
      return F && (x.source = F), x;
    }
    toJSON() {
      let D = {};
      for (let y of ["hasBOM", "css", "file", "id"])
        this[y] != null && (D[y] = this[y]);
      return this.map && (D.map = { ...this.map }, D.map.consumerCache && (D.map.consumerCache = void 0)), D;
    }
    get from() {
      return this.file || this.id;
    }
  };
  t.exports = d, d.default = d, c && c.registerInput && c.registerInput(d);
}), Gn = T((e, t) => {
  var r = Pt(), n = ki(), s = Ir();
  function i(a, l) {
    let p = new s(a, l), c = new n(p);
    try {
      c.parse();
    } catch (u) {
      throw u;
    }
    return c.root;
  }
  t.exports = i, i.default = i, r.registerParse(i);
}), G2 = T((e, t) => {
  var r = bi(), n = Ir();
  t.exports = { isInlineComment(s) {
    if (s[0] === "word" && s[1].slice(0, 2) === "//") {
      let i = s, a = [], l, p;
      for (; s; ) {
        if (/\r?\n/.test(s[1])) {
          if (/['"].*\r?\n/.test(s[1])) {
            a.push(s[1].substring(0, s[1].indexOf(`
`))), p = s[1].substring(s[1].indexOf(`
`));
            let u = this.input.css.valueOf().substring(this.tokenizer.position());
            p += u, l = s[3] + u.length - p.length;
          } else
            this.tokenizer.back(s);
          break;
        }
        a.push(s[1]), l = s[2], s = this.tokenizer.nextToken({ ignoreUnclosed: !0 });
      }
      let c = ["comment", a.join(""), i[2], l];
      return this.inlineComment(c), p && (this.input = new n(p), this.tokenizer = r(this.input)), !0;
    } else if (s[1] === "/") {
      let i = this.tokenizer.nextToken({ ignoreUnclosed: !0 });
      if (i[0] === "comment" && /^\/\*/.test(i[1]))
        return i[0] = "word", i[1] = i[1].slice(1), s[1] = "//", this.tokenizer.back(i), t.exports.isInlineComment.bind(this)(s);
    }
    return !1;
  } };
}), Y2 = T((e, t) => {
  t.exports = { interpolation(r) {
    let n = [r, this.tokenizer.nextToken()], s = ["word", "}"];
    if (n[0][1].length > 1 || n[1][0] !== "{")
      return this.tokenizer.back(n[1]), !1;
    for (r = this.tokenizer.nextToken(); r && s.includes(r[0]); )
      n.push(r), r = this.tokenizer.nextToken();
    let i = n.map((c) => c[1]), [a] = n, l = n.pop(), p = ["word", i.join(""), a[2], l[2]];
    return this.tokenizer.back(r), this.tokenizer.back(p), !0;
  } };
}), J2 = T((e, t) => {
  var r = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/, n = /\.[0-9]/, s = (i) => {
    let [, a] = i, [l] = a;
    return (l === "." || l === "#") && r.test(a) === !1 && n.test(a) === !1;
  };
  t.exports = { isMixinToken: s };
}), K2 = T((e, t) => {
  var r = bi(), n = /^url\((.+)\)/;
  t.exports = (s) => {
    let { name: i, params: a = "" } = s;
    if (i === "import" && a.length) {
      s.import = !0;
      let l = r({ css: a });
      for (s.filename = a.replace(n, "$1"); !l.endOfFile(); ) {
        let [p, c] = l.nextToken();
        if (p === "word" && c === "url")
          return;
        if (p === "brackets") {
          s.options = c, s.filename = a.replace(c, "").trim();
          break;
        }
      }
    }
  };
}), X2 = T((e, t) => {
  var r = /:$/, n = /^:(\s+)?/;
  t.exports = (s) => {
    let { name: i, params: a = "" } = s;
    if (s.name.slice(-1) === ":") {
      if (r.test(i)) {
        let [l] = i.match(r);
        s.name = i.replace(l, ""), s.raws.afterName = l + (s.raws.afterName || ""), s.variable = !0, s.value = s.params;
      }
      if (n.test(a)) {
        let [l] = a.match(n);
        s.value = a.replace(l, ""), s.raws.afterName = (s.raws.afterName || "") + l, s.variable = !0;
      }
    }
  };
}), Q2 = T((e, t) => {
  var r = Nr(), n = ki(), { isInlineComment: s } = G2(), { interpolation: i } = Y2(), { isMixinToken: a } = J2(), l = K2(), p = X2(), c = /(!\s*important)$/i;
  t.exports = class extends n {
    constructor(...u) {
      super(...u), this.lastNode = null;
    }
    atrule(u) {
      i.bind(this)(u) || (super.atrule(u), l(this.lastNode), p(this.lastNode));
    }
    decl(...u) {
      super.decl(...u), /extend\(.+\)/i.test(this.lastNode.value) && (this.lastNode.extend = !0);
    }
    each(u) {
      u[0][1] = ` ${u[0][1]}`;
      let o = u.findIndex((d) => d[0] === "("), f = u.reverse().find((d) => d[0] === ")"), h = u.reverse().indexOf(f), m = u.splice(o, h).map((d) => d[1]).join("");
      for (let d of u.reverse())
        this.tokenizer.back(d);
      this.atrule(this.tokenizer.nextToken()), this.lastNode.function = !0, this.lastNode.params = m;
    }
    init(u, o, f) {
      super.init(u, o, f), this.lastNode = u;
    }
    inlineComment(u) {
      let o = new r(), f = u[1].slice(2);
      if (this.init(o, u[2]), o.source.end = this.getPosition(u[3] || u[2]), o.inline = !0, o.raws.begin = "//", /^\s*$/.test(f))
        o.text = "", o.raws.left = f, o.raws.right = "";
      else {
        let h = f.match(/^(\s*)([^]*[^\s])(\s*)$/);
        [, o.raws.left, o.text, o.raws.right] = h;
      }
    }
    mixin(u) {
      let [o] = u, f = o[1].slice(0, 1), h = u.findIndex((g) => g[0] === "brackets"), m = u.findIndex((g) => g[0] === "("), d = "";
      if ((h < 0 || h > 3) && m > 0) {
        let g = u.reduce((N, M, R) => M[0] === ")" ? R : N), v = u.slice(m, g + m).map((N) => N[1]).join(""), [b] = u.slice(m), w = [b[2], b[3]], [C] = u.slice(g, g + 1), E = [C[2], C[3]], x = ["brackets", v].concat(w, E), F = u.slice(0, m), B = u.slice(g + 1);
        u = F, u.push(x), u = u.concat(B);
      }
      let D = [];
      for (let g of u)
        if ((g[1] === "!" || D.length) && D.push(g), g[1] === "important")
          break;
      if (D.length) {
        let [g] = D, v = u.indexOf(g), b = D[D.length - 1], w = [g[2], g[3]], C = [b[4], b[5]], E = ["word", D.map((x) => x[1]).join("")].concat(w, C);
        u.splice(v, D.length, E);
      }
      let y = u.findIndex((g) => c.test(g[1]));
      y > 0 && ([, d] = u[y], u.splice(y, 1));
      for (let g of u.reverse())
        this.tokenizer.back(g);
      this.atrule(this.tokenizer.nextToken()), this.lastNode.mixin = !0, this.lastNode.raws.identifier = f, d && (this.lastNode.important = !0, this.lastNode.raws.important = d);
    }
    other(u) {
      s.bind(this)(u) || super.other(u);
    }
    rule(u) {
      let o = u[u.length - 1], f = u[u.length - 2];
      if (f[0] === "at-word" && o[0] === "{" && (this.tokenizer.back(o), i.bind(this)(f))) {
        let h = this.tokenizer.nextToken();
        u = u.slice(0, u.length - 2).concat([h]);
        for (let m of u.reverse())
          this.tokenizer.back(m);
        return;
      }
      super.rule(u), /:extend\(.+\)/i.test(this.lastNode.selector) && (this.lastNode.extend = !0);
    }
    unknownWord(u) {
      let [o] = u;
      if (u[0][1] === "each" && u[1][0] === "(") {
        this.each(u);
        return;
      }
      if (a(o)) {
        this.mixin(u);
        return;
      }
      super.unknownWord(u);
    }
  };
}), Z2 = T((e, t) => {
  var r = wi();
  t.exports = class extends r {
    atrule(n, s) {
      if (!n.mixin && !n.variable && !n.function) {
        super.atrule(n, s);
        return;
      }
      let i = `${n.function ? "" : n.raws.identifier || "@"}${n.name}`, a = n.params ? this.rawValue(n, "params") : "", l = n.raws.important || "";
      if (n.variable && (a = n.value), typeof n.raws.afterName < "u" ? i += n.raws.afterName : a && (i += " "), n.nodes)
        this.block(n, i + a + l);
      else {
        let p = (n.raws.between || "") + l + (s ? ";" : "");
        this.builder(i + a + p, n);
      }
    }
    comment(n) {
      if (n.inline) {
        let s = this.raw(n, "left", "commentLeft"), i = this.raw(n, "right", "commentRight");
        this.builder(`//${s}${n.text}${i}`, n);
      } else
        super.comment(n);
    }
  };
}), ev = T((e, t) => {
  var r = Ir(), n = Q2(), s = Z2();
  t.exports = { parse(i, a) {
    let l = new r(i, a), p = new n(l);
    return p.parse(), p.root.walk((c) => {
      let u = l.css.lastIndexOf(c.source.input.css);
      if (u === 0)
        return;
      if (u + c.source.input.css.length !== l.css.length)
        throw new Error("Invalid state detected in postcss-less");
      let o = u + c.source.start.offset, f = l.fromOffset(u + c.source.start.offset);
      if (c.source.start = { offset: o, line: f.line, column: f.col }, c.source.end) {
        let h = u + c.source.end.offset, m = l.fromOffset(u + c.source.end.offset);
        c.source.end = { offset: h, line: m.line, column: m.col };
      }
    }), p.root;
  }, stringify(i, a) {
    new s(a).stringify(i);
  }, nodeToString(i) {
    let a = "";
    return t.exports.stringify(i, (l) => {
      a += l;
    }), a;
  } };
}), Gu = T((e, t) => {
  t.exports = class {
    generate() {
    }
  };
}), xi = T((e, t) => {
  var r = Pt(), n, s, i = class extends r {
    constructor(a) {
      super({ type: "document", ...a }), this.nodes || (this.nodes = []);
    }
    toResult(a = {}) {
      return new n(new s(), this, a).stringify();
    }
  };
  i.registerLazyResult = (a) => {
    n = a;
  }, i.registerProcessor = (a) => {
    s = a;
  }, t.exports = i, i.default = i;
}), Yu = T((e, t) => {
  var r = {};
  t.exports = function(n) {
    r[n] || (r[n] = !0, typeof console < "u" && console.warn && console.warn(n));
  };
}), Ju = T((e, t) => {
  var r = class {
    constructor(n, s = {}) {
      if (this.type = "warning", this.text = n, s.node && s.node.source) {
        let i = s.node.rangeBy(s);
        this.line = i.start.line, this.column = i.start.column, this.endLine = i.end.line, this.endColumn = i.end.column;
      }
      for (let i in s)
        this[i] = s[i];
    }
    toString() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  };
  t.exports = r, r.default = r;
}), _i = T((e, t) => {
  var r = Ju(), n = class {
    constructor(s, i, a) {
      this.processor = s, this.messages = [], this.root = i, this.opts = a, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(s, i = {}) {
      i.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (i.plugin = this.lastPlugin.postcssPlugin);
      let a = new r(s, i);
      return this.messages.push(a), a;
    }
    warnings() {
      return this.messages.filter((s) => s.type === "warning");
    }
    get content() {
      return this.css;
    }
  };
  t.exports = n, n.default = n;
}), Ku = T((e, t) => {
  var { isClean: r, my: n } = Di(), s = Gu(), i = Un(), a = Pt(), l = xi();
  Yu();
  var p = _i(), c = Gn(), u = Pr(), o = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, f = { AtRule: !0, AtRuleExit: !0, Comment: !0, CommentExit: !0, Declaration: !0, DeclarationExit: !0, Document: !0, DocumentExit: !0, Once: !0, OnceExit: !0, postcssPlugin: !0, prepare: !0, Root: !0, RootExit: !0, Rule: !0, RuleExit: !0 }, h = { Once: !0, postcssPlugin: !0, prepare: !0 }, m = 0;
  function d(w) {
    return typeof w == "object" && typeof w.then == "function";
  }
  function D(w) {
    let C = !1, E = o[w.type];
    return w.type === "decl" ? C = w.prop.toLowerCase() : w.type === "atrule" && (C = w.name.toLowerCase()), C && w.append ? [E, E + "-" + C, m, E + "Exit", E + "Exit-" + C] : C ? [E, E + "-" + C, E + "Exit", E + "Exit-" + C] : w.append ? [E, m, E + "Exit"] : [E, E + "Exit"];
  }
  function y(w) {
    let C;
    return w.type === "document" ? C = ["Document", m, "DocumentExit"] : w.type === "root" ? C = ["Root", m, "RootExit"] : C = D(w), { eventIndex: 0, events: C, iterator: 0, node: w, visitorIndex: 0, visitors: [] };
  }
  function g(w) {
    return w[r] = !1, w.nodes && w.nodes.forEach((C) => g(C)), w;
  }
  var v = {}, b = class Xu {
    constructor(C, E, x) {
      this.stringified = !1, this.processed = !1;
      let F;
      if (typeof E == "object" && E !== null && (E.type === "root" || E.type === "document"))
        F = g(E);
      else if (E instanceof Xu || E instanceof p)
        F = g(E.root), E.map && (typeof x.map > "u" && (x.map = {}), x.map.inline || (x.map.inline = !1), x.map.prev = E.map);
      else {
        let B = c;
        x.syntax && (B = x.syntax.parse), x.parser && (B = x.parser), B.parse && (B = B.parse);
        try {
          F = B(E, x);
        } catch (N) {
          this.processed = !0, this.error = N;
        }
        F && !F[n] && a.rebuild(F);
      }
      this.result = new p(C, F, x), this.helpers = { ...v, postcss: v, result: this.result }, this.plugins = this.processor.plugins.map((B) => typeof B == "object" && B.prepare ? { ...B, ...B.prepare(this.result) } : B);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(C) {
      return this.async().catch(C);
    }
    finally(C) {
      return this.async().then(C, C);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(C, E) {
      let x = this.result.lastPlugin;
      try {
        E && E.addToError(C), this.error = C, C.name === "CssSyntaxError" && !C.plugin ? (C.plugin = x.postcssPlugin, C.setMessage()) : x.postcssVersion;
      } catch (F) {
        console && console.error && console.error(F);
      }
      return C;
    }
    prepareVisitors() {
      this.listeners = {};
      let C = (E, x, F) => {
        this.listeners[x] || (this.listeners[x] = []), this.listeners[x].push([E, F]);
      };
      for (let E of this.plugins)
        if (typeof E == "object")
          for (let x in E) {
            if (!f[x] && /^[A-Z]/.test(x))
              throw new Error(`Unknown event ${x} in ${E.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
            if (!h[x])
              if (typeof E[x] == "object")
                for (let F in E[x])
                  F === "*" ? C(E, x, E[x][F]) : C(E, x + "-" + F.toLowerCase(), E[x][F]);
              else
                typeof E[x] == "function" && C(E, x, E[x]);
          }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let C = 0; C < this.plugins.length; C++) {
        let E = this.plugins[C], x = this.runOnRoot(E);
        if (d(x))
          try {
            await x;
          } catch (F) {
            throw this.handleError(F);
          }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let C = this.result.root;
        for (; !C[r]; ) {
          C[r] = !0;
          let E = [y(C)];
          for (; E.length > 0; ) {
            let x = this.visitTick(E);
            if (d(x))
              try {
                await x;
              } catch (F) {
                let B = E[E.length - 1].node;
                throw this.handleError(F, B);
              }
          }
        }
        if (this.listeners.OnceExit)
          for (let [E, x] of this.listeners.OnceExit) {
            this.result.lastPlugin = E;
            try {
              if (C.type === "document") {
                let F = C.nodes.map((B) => x(B, this.helpers));
                await Promise.all(F);
              } else
                await x(C, this.helpers);
            } catch (F) {
              throw this.handleError(F);
            }
          }
      }
      return this.processed = !0, this.stringify();
    }
    runOnRoot(C) {
      this.result.lastPlugin = C;
      try {
        if (typeof C == "object" && C.Once) {
          if (this.result.root.type === "document") {
            let E = this.result.root.nodes.map((x) => C.Once(x, this.helpers));
            return d(E[0]) ? Promise.all(E) : E;
          }
          return C.Once(this.result.root, this.helpers);
        } else if (typeof C == "function")
          return C(this.result.root, this.result);
      } catch (E) {
        throw this.handleError(E);
      }
    }
    stringify() {
      if (this.error)
        throw this.error;
      if (this.stringified)
        return this.result;
      this.stringified = !0, this.sync();
      let C = this.result.opts, E = i;
      C.syntax && (E = C.syntax.stringify), C.stringifier && (E = C.stringifier), E.stringify && (E = E.stringify);
      let x = new s(E, this.result.root, this.result.opts).generate();
      return this.result.css = x[0], this.result.map = x[1], this.result;
    }
    sync() {
      if (this.error)
        throw this.error;
      if (this.processed)
        return this.result;
      if (this.processed = !0, this.processing)
        throw this.getAsyncError();
      for (let C of this.plugins) {
        let E = this.runOnRoot(C);
        if (d(E))
          throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let C = this.result.root;
        for (; !C[r]; )
          C[r] = !0, this.walkSync(C);
        if (this.listeners.OnceExit)
          if (C.type === "document")
            for (let E of C.nodes)
              this.visitSync(this.listeners.OnceExit, E);
          else
            this.visitSync(this.listeners.OnceExit, C);
      }
      return this.result;
    }
    then(C, E) {
      return this.async().then(C, E);
    }
    toString() {
      return this.css;
    }
    visitSync(C, E) {
      for (let [x, F] of C) {
        this.result.lastPlugin = x;
        let B;
        try {
          B = F(E, this.helpers);
        } catch (N) {
          throw this.handleError(N, E.proxyOf);
        }
        if (E.type !== "root" && E.type !== "document" && !E.parent)
          return !0;
        if (d(B))
          throw this.getAsyncError();
      }
    }
    visitTick(C) {
      let E = C[C.length - 1], { node: x, visitors: F } = E;
      if (x.type !== "root" && x.type !== "document" && !x.parent) {
        C.pop();
        return;
      }
      if (F.length > 0 && E.visitorIndex < F.length) {
        let [N, M] = F[E.visitorIndex];
        E.visitorIndex += 1, E.visitorIndex === F.length && (E.visitors = [], E.visitorIndex = 0), this.result.lastPlugin = N;
        try {
          return M(x.toProxy(), this.helpers);
        } catch (R) {
          throw this.handleError(R, x);
        }
      }
      if (E.iterator !== 0) {
        let N = E.iterator, M;
        for (; M = x.nodes[x.indexes[N]]; )
          if (x.indexes[N] += 1, !M[r]) {
            M[r] = !0, C.push(y(M));
            return;
          }
        E.iterator = 0, delete x.indexes[N];
      }
      let B = E.events;
      for (; E.eventIndex < B.length; ) {
        let N = B[E.eventIndex];
        if (E.eventIndex += 1, N === m) {
          x.nodes && x.nodes.length && (x[r] = !0, E.iterator = x.getIterator());
          return;
        } else if (this.listeners[N]) {
          E.visitors = this.listeners[N];
          return;
        }
      }
      C.pop();
    }
    walkSync(C) {
      C[r] = !0;
      let E = D(C);
      for (let x of E)
        if (x === m)
          C.nodes && C.each((F) => {
            F[r] || this.walkSync(F);
          });
        else {
          let F = this.listeners[x];
          if (F && this.visitSync(F, C.toProxy()))
            return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
  };
  b.registerPostcss = (w) => {
    v = w;
  }, t.exports = b, b.default = b, u.registerLazyResult(b), l.registerLazyResult(b);
}), tv = T((e, t) => {
  var r = Gu(), n = Un();
  Yu();
  var s = Gn(), i = _i(), a = class {
    constructor(l, p, c) {
      p = p.toString(), this.stringified = !1, this._processor = l, this._css = p, this._opts = c, this._map = void 0;
      let u, o = n;
      this.result = new i(this._processor, u, this._opts), this.result.css = p;
      let f = this;
      Object.defineProperty(this.result, "root", { get() {
        return f.root;
      } });
      let h = new r(o, u, this._opts, p);
      if (h.isMap()) {
        let [m, d] = h.generate();
        m && (this.result.css = m), d && (this.result.map = d);
      } else
        h.clearAnnotation(), this.result.css = h.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(l) {
      return this.async().catch(l);
    }
    finally(l) {
      return this.async().then(l, l);
    }
    sync() {
      if (this.error)
        throw this.error;
      return this.result;
    }
    then(l, p) {
      return this.async().then(l, p);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root)
        return this._root;
      let l, p = s;
      try {
        l = p(this._css, this._opts);
      } catch (c) {
        this.error = c;
      }
      if (this.error)
        throw this.error;
      return this._root = l, l;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
  };
  t.exports = a, a.default = a;
}), rv = T((e, t) => {
  var r = tv(), n = Ku(), s = xi(), i = Pr(), a = class {
    constructor(l = []) {
      this.version = "8.4.33", this.plugins = this.normalize(l);
    }
    normalize(l) {
      let p = [];
      for (let c of l)
        if (c.postcss === !0 ? c = c() : c.postcss && (c = c.postcss), typeof c == "object" && Array.isArray(c.plugins))
          p = p.concat(c.plugins);
        else if (typeof c == "object" && c.postcssPlugin)
          p.push(c);
        else if (typeof c == "function")
          p.push(c);
        else if (!(typeof c == "object" && (c.parse || c.stringify)))
          throw new Error(c + " is not a PostCSS plugin");
      return p;
    }
    process(l, p = {}) {
      return !this.plugins.length && !p.parser && !p.stringifier && !p.syntax ? new r(this, l, p) : new n(this, l, p);
    }
    use(l) {
      return this.plugins = this.plugins.concat(this.normalize([l])), this;
    }
  };
  t.exports = a, a.default = a, i.registerProcessor(a), s.registerProcessor(a);
}), nv = T((e, t) => {
  var r = zn(), n = zu(), s = Nr(), i = Ci(), a = Ir(), l = Pr(), p = Ei();
  function c(u, o) {
    if (Array.isArray(u))
      return u.map((m) => c(m));
    let { inputs: f, ...h } = u;
    if (f) {
      o = [];
      for (let m of f) {
        let d = { ...m, __proto__: a.prototype };
        d.map && (d.map = { ...d.map, __proto__: n.prototype }), o.push(d);
      }
    }
    if (h.nodes && (h.nodes = u.nodes.map((m) => c(m, o))), h.source) {
      let { inputId: m, ...d } = h.source;
      h.source = d, m != null && (h.source.input = o[m]);
    }
    if (h.type === "root")
      return new l(h);
    if (h.type === "decl")
      return new r(h);
    if (h.type === "rule")
      return new p(h);
    if (h.type === "comment")
      return new s(h);
    if (h.type === "atrule")
      return new i(h);
    throw new Error("Unknown node type: " + u.type);
  }
  t.exports = c, c.default = c;
}), Fi = T((e, t) => {
  var r = yi(), n = zn(), s = Ku(), i = Pt(), a = rv(), l = Un(), p = nv(), c = xi(), u = Ju(), o = Nr(), f = Ci(), h = _i(), m = Ir(), d = Gn(), D = Vu(), y = Ei(), g = Pr(), v = Vn();
  function b(...w) {
    return w.length === 1 && Array.isArray(w[0]) && (w = w[0]), new a(w);
  }
  b.plugin = function(w, C) {
    let E = !1;
    function x(...B) {
      console && console.warn && !E && (E = !0, console.warn(w + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`));
      let N = C(...B);
      return N.postcssPlugin = w, N.postcssVersion = new a().version, N;
    }
    let F;
    return Object.defineProperty(x, "postcss", { get() {
      return F || (F = x()), F;
    } }), x.process = function(B, N, M) {
      return b([x(M)]).process(B, N);
    }, x;
  }, b.stringify = l, b.parse = d, b.fromJSON = p, b.list = D, b.comment = (w) => new o(w), b.atRule = (w) => new f(w), b.decl = (w) => new n(w), b.rule = (w) => new y(w), b.root = (w) => new g(w), b.document = (w) => new c(w), b.CssSyntaxError = r, b.Declaration = n, b.Container = i, b.Processor = a, b.Document = c, b.Comment = o, b.Warning = u, b.AtRule = f, b.Result = h, b.Input = m, b.Rule = y, b.Root = g, b.Node = v, s.registerPostcss(b), t.exports = b, b.default = b;
}), sv = T((e, t) => {
  var { Container: r } = Fi(), n = class extends r {
    constructor(s) {
      super(s), this.type = "decl", this.isNested = !0, this.nodes || (this.nodes = []);
    }
  };
  t.exports = n;
}), iv = T((e, t) => {
  var r = /[\t\n\f\r "#'()/;[\\\]{}]/g, n = /[,\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, s = /.[\r\n"'(/\\]/, i = /[\da-f]/i, a = /[\n\f\r]/g;
  t.exports = function(l, p = {}) {
    let c = l.css.valueOf(), u = p.ignoreErrors, o, f, h, m, d, D, y, g, v, b = c.length, w = 0, C = [], E = [], x;
    function F() {
      return w;
    }
    function B(j) {
      throw l.error("Unclosed " + j, w);
    }
    function N() {
      return E.length === 0 && w >= b;
    }
    function M() {
      let j = 1, O = !1, Y = !1;
      for (; j > 0; )
        f += 1, c.length <= f && B("interpolation"), o = c.charCodeAt(f), g = c.charCodeAt(f + 1), O ? !Y && o === O ? (O = !1, Y = !1) : o === 92 ? Y = !Y : Y && (Y = !1) : o === 39 || o === 34 ? O = o : o === 125 ? j -= 1 : o === 35 && g === 123 && (j += 1);
    }
    function R(j) {
      if (E.length)
        return E.pop();
      if (w >= b)
        return;
      let O = j ? j.ignoreUnclosed : !1;
      switch (o = c.charCodeAt(w), o) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12: {
          f = w;
          do
            f += 1, o = c.charCodeAt(f);
          while (o === 32 || o === 10 || o === 9 || o === 13 || o === 12);
          v = ["space", c.slice(w, f)], w = f - 1;
          break;
        }
        case 91:
        case 93:
        case 123:
        case 125:
        case 58:
        case 59:
        case 41: {
          let Y = String.fromCharCode(o);
          v = [Y, Y, w];
          break;
        }
        case 44: {
          v = ["word", ",", w, w + 1];
          break;
        }
        case 40: {
          if (y = C.length ? C.pop()[1] : "", g = c.charCodeAt(w + 1), y === "url" && g !== 39 && g !== 34) {
            for (x = 1, D = !1, f = w + 1; f <= c.length - 1; ) {
              if (g = c.charCodeAt(f), g === 92)
                D = !D;
              else if (g === 40)
                x += 1;
              else if (g === 41 && (x -= 1, x === 0))
                break;
              f += 1;
            }
            m = c.slice(w, f + 1), v = ["brackets", m, w, f], w = f;
          } else
            f = c.indexOf(")", w + 1), m = c.slice(w, f + 1), f === -1 || s.test(m) ? v = ["(", "(", w] : (v = ["brackets", m, w, f], w = f);
          break;
        }
        case 39:
        case 34: {
          for (h = o, f = w, D = !1; f < b && (f++, f === b && B("string"), o = c.charCodeAt(f), g = c.charCodeAt(f + 1), !(!D && o === h)); )
            o === 92 ? D = !D : D ? D = !1 : o === 35 && g === 123 && M();
          v = ["string", c.slice(w, f + 1), w, f], w = f;
          break;
        }
        case 64: {
          r.lastIndex = w + 1, r.test(c), r.lastIndex === 0 ? f = c.length - 1 : f = r.lastIndex - 2, v = ["at-word", c.slice(w, f + 1), w, f], w = f;
          break;
        }
        case 92: {
          for (f = w, d = !0; c.charCodeAt(f + 1) === 92; )
            f += 1, d = !d;
          if (o = c.charCodeAt(f + 1), d && o !== 47 && o !== 32 && o !== 10 && o !== 9 && o !== 13 && o !== 12 && (f += 1, i.test(c.charAt(f)))) {
            for (; i.test(c.charAt(f + 1)); )
              f += 1;
            c.charCodeAt(f + 1) === 32 && (f += 1);
          }
          v = ["word", c.slice(w, f + 1), w, f], w = f;
          break;
        }
        default:
          g = c.charCodeAt(w + 1), o === 35 && g === 123 ? (f = w, M(), m = c.slice(w, f + 1), v = ["word", m, w, f], w = f) : o === 47 && g === 42 ? (f = c.indexOf("*/", w + 2) + 1, f === 0 && (u || O ? f = c.length : B("comment")), v = ["comment", c.slice(w, f + 1), w, f], w = f) : o === 47 && g === 47 ? (a.lastIndex = w + 1, a.test(c), a.lastIndex === 0 ? f = c.length - 1 : f = a.lastIndex - 2, m = c.slice(w, f + 1), v = ["comment", m, w, f, "inline"], w = f) : (n.lastIndex = w + 1, n.test(c), n.lastIndex === 0 ? f = c.length - 1 : f = n.lastIndex - 2, v = ["word", c.slice(w, f + 1), w, f], C.push(v), w = f);
          break;
      }
      return w++, v;
    }
    function I(j) {
      E.push(j);
    }
    return { back: I, endOfFile: N, nextToken: R, position: F };
  };
}), ov = T((e, t) => {
  var { Comment: r } = Fi(), n = ki(), s = sv(), i = iv(), a = class extends n {
    atrule(l) {
      let p = l[1], c = l;
      for (; !this.tokenizer.endOfFile(); ) {
        let u = this.tokenizer.nextToken();
        if (u[0] === "word" && u[2] === c[3] + 1)
          p += u[1], c = u;
        else {
          this.tokenizer.back(u);
          break;
        }
      }
      super.atrule(["at-word", p, l[2], c[3]]);
    }
    comment(l) {
      if (l[4] === "inline") {
        let p = new r();
        this.init(p, l[2]), p.raws.inline = !0;
        let c = this.input.fromOffset(l[3]);
        p.source.end = { column: c.col, line: c.line, offset: l[3] + 1 };
        let u = l[1].slice(2);
        if (/^\s*$/.test(u))
          p.text = "", p.raws.left = u, p.raws.right = "";
        else {
          let o = u.match(/^(\s*)([^]*\S)(\s*)$/), f = o[2].replace(/(\*\/|\/\*)/g, "*//*");
          p.text = f, p.raws.left = o[1], p.raws.right = o[3], p.raws.text = o[2];
        }
      } else
        super.comment(l);
    }
    createTokenizer() {
      this.tokenizer = i(this.input);
    }
    raw(l, p, c, u) {
      if (super.raw(l, p, c, u), l.raws[p]) {
        let o = l.raws[p].raw;
        l.raws[p].raw = c.reduce((f, h) => {
          if (h[0] === "comment" && h[4] === "inline") {
            let m = h[1].slice(2).replace(/(\*\/|\/\*)/g, "*//*");
            return f + "/*" + m + "*/";
          } else
            return f + h[1];
        }, ""), o !== l.raws[p].raw && (l.raws[p].scss = o);
      }
    }
    rule(l) {
      let p = !1, c = 0, u = "";
      for (let o of l)
        if (p)
          o[0] !== "comment" && o[0] !== "{" && (u += o[1]);
        else {
          if (o[0] === "space" && o[1].includes(`
`))
            break;
          o[0] === "(" ? c += 1 : o[0] === ")" ? c -= 1 : c === 0 && o[0] === ":" && (p = !0);
        }
      if (!p || u.trim() === "" || /^[#:A-Za-z-]/.test(u))
        super.rule(l);
      else {
        l.pop();
        let o = new s();
        this.init(o, l[0][2]);
        let f;
        for (let m = l.length - 1; m >= 0; m--)
          if (l[m][0] !== "space") {
            f = l[m];
            break;
          }
        if (f[3]) {
          let m = this.input.fromOffset(f[3]);
          o.source.end = { column: m.col, line: m.line, offset: f[3] + 1 };
        } else {
          let m = this.input.fromOffset(f[2]);
          o.source.end = { column: m.col, line: m.line, offset: f[2] + 1 };
        }
        for (; l[0][0] !== "word"; )
          o.raws.before += l.shift()[1];
        if (l[0][2]) {
          let m = this.input.fromOffset(l[0][2]);
          o.source.start = { column: m.col, line: m.line, offset: l[0][2] };
        }
        for (o.prop = ""; l.length; ) {
          let m = l[0][0];
          if (m === ":" || m === "space" || m === "comment")
            break;
          o.prop += l.shift()[1];
        }
        o.raws.between = "";
        let h;
        for (; l.length; )
          if (h = l.shift(), h[0] === ":") {
            o.raws.between += h[1];
            break;
          } else
            o.raws.between += h[1];
        (o.prop[0] === "_" || o.prop[0] === "*") && (o.raws.before += o.prop[0], o.prop = o.prop.slice(1)), o.raws.between += this.spacesAndCommentsFromStart(l), this.precheckMissedSemicolon(l);
        for (let m = l.length - 1; m > 0; m--) {
          if (h = l[m], h[1] === "!important") {
            o.important = !0;
            let d = this.stringFrom(l, m);
            d = this.spacesFromEnd(l) + d, d !== " !important" && (o.raws.important = d);
            break;
          } else if (h[1] === "important") {
            let d = l.slice(0), D = "";
            for (let y = m; y > 0; y--) {
              let g = d[y][0];
              if (D.trim().indexOf("!") === 0 && g !== "space")
                break;
              D = d.pop()[1] + D;
            }
            D.trim().indexOf("!") === 0 && (o.important = !0, o.raws.important = D, l = d);
          }
          if (h[0] !== "space" && h[0] !== "comment")
            break;
        }
        this.raw(o, "value", l), o.value.includes(":") && this.checkMissedSemicolon(l), this.current = o;
      }
    }
  };
  t.exports = a;
}), av = T((e, t) => {
  var { Input: r } = Fi(), n = ov();
  t.exports = function(s, i) {
    let a = new r(s, i), l = new n(a);
    return l.parse(), l.root;
  };
}), Qu = T((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(r) {
    this.after = r.after, this.before = r.before, this.type = r.type, this.value = r.value, this.sourceIndex = r.sourceIndex;
  }
  e.default = t;
}), Zu = T((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Qu(), r = n(t);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function s(i) {
    var a = this;
    this.constructor(i), this.nodes = i.nodes, this.after === void 0 && (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : ""), this.before === void 0 && (this.before = this.nodes.length > 0 ? this.nodes[0].before : ""), this.sourceIndex === void 0 && (this.sourceIndex = this.before.length), this.nodes.forEach(function(l) {
      l.parent = a;
    });
  }
  s.prototype = Object.create(r.default.prototype), s.constructor = r.default, s.prototype.walk = function(i, a) {
    for (var l = typeof i == "string" || i instanceof RegExp, p = l ? a : i, c = typeof i == "string" ? new RegExp(i) : i, u = 0; u < this.nodes.length; u++) {
      var o = this.nodes[u], f = l ? c.test(o.type) : !0;
      if (f && p && p(o, u, this.nodes) === !1 || o.nodes && o.walk(i, a) === !1)
        return !1;
    }
    return !0;
  }, s.prototype.each = function() {
    for (var i = arguments.length <= 0 || arguments[0] === void 0 ? function() {
    } : arguments[0], a = 0; a < this.nodes.length; a++) {
      var l = this.nodes[a];
      if (i(l, a, this.nodes) === !1)
        return !1;
    }
    return !0;
  }, e.default = s;
}), uv = T((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.parseMediaFeature = a, e.parseMediaQuery = l, e.parseMediaList = p;
  var t = Qu(), r = i(t), n = Zu(), s = i(n);
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function a(c) {
    var u = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], o = [{ mode: "normal", character: null }], f = [], h = 0, m = "", d = null, D = null, y = u, g = c;
    c[0] === "(" && c[c.length - 1] === ")" && (g = c.substring(1, c.length - 1), y++);
    for (var v = 0; v < g.length; v++) {
      var b = g[v];
      if ((b === "'" || b === '"') && (o[h].isCalculationEnabled === !0 ? (o.push({ mode: "string", isCalculationEnabled: !1, character: b }), h++) : o[h].mode === "string" && o[h].character === b && g[v - 1] !== "\\" && (o.pop(), h--)), b === "{" ? (o.push({ mode: "interpolation", isCalculationEnabled: !0 }), h++) : b === "}" && (o.pop(), h--), o[h].mode === "normal" && b === ":") {
        var w = g.substring(v + 1);
        D = { type: "value", before: /^(\s*)/.exec(w)[1], after: /(\s*)$/.exec(w)[1], value: w.trim() }, D.sourceIndex = D.before.length + v + 1 + y, d = { type: "colon", sourceIndex: v + y, after: D.before, value: ":" };
        break;
      }
      m += b;
    }
    return m = { type: "media-feature", before: /^(\s*)/.exec(m)[1], after: /(\s*)$/.exec(m)[1], value: m.trim() }, m.sourceIndex = m.before.length + y, f.push(m), d !== null && (d.before = m.after, f.push(d)), D !== null && f.push(D), f;
  }
  function l(c) {
    var u = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], o = [], f = 0, h = !1, m = void 0;
    function d() {
      return { before: "", after: "", value: "" };
    }
    m = d();
    for (var D = 0; D < c.length; D++) {
      var y = c[D];
      h ? (m.value += y, (y === "{" || y === "(") && f++, (y === ")" || y === "}") && f--) : y.search(/\s/) !== -1 ? m.before += y : (y === "(" && (m.type = "media-feature-expression", f++), m.value = y, m.sourceIndex = u + D, h = !0), h && f === 0 && (y === ")" || D === c.length - 1 || c[D + 1].search(/\s/) !== -1) && (["not", "only", "and"].indexOf(m.value) !== -1 && (m.type = "keyword"), m.type === "media-feature-expression" && (m.nodes = a(m.value, m.sourceIndex)), o.push(Array.isArray(m.nodes) ? new s.default(m) : new r.default(m)), m = d(), h = !1);
    }
    for (var g = 0; g < o.length; g++)
      if (m = o[g], g > 0 && (o[g - 1].after = m.before), m.type === void 0) {
        if (g > 0) {
          if (o[g - 1].type === "media-feature-expression") {
            m.type = "keyword";
            continue;
          }
          if (o[g - 1].value === "not" || o[g - 1].value === "only") {
            m.type = "media-type";
            continue;
          }
          if (o[g - 1].value === "and") {
            m.type = "media-feature-expression";
            continue;
          }
          o[g - 1].type === "media-type" && (o[g + 1] ? m.type = o[g + 1].type === "media-feature-expression" ? "keyword" : "media-feature-expression" : m.type = "media-feature-expression");
        }
        if (g === 0) {
          if (!o[g + 1]) {
            m.type = "media-type";
            continue;
          }
          if (o[g + 1] && (o[g + 1].type === "media-feature-expression" || o[g + 1].type === "keyword")) {
            m.type = "media-type";
            continue;
          }
          if (o[g + 2]) {
            if (o[g + 2].type === "media-feature-expression") {
              m.type = "media-type", o[g + 1].type = "keyword";
              continue;
            }
            if (o[g + 2].type === "keyword") {
              m.type = "keyword", o[g + 1].type = "media-type";
              continue;
            }
          }
          if (o[g + 3] && o[g + 3].type === "media-feature-expression") {
            m.type = "keyword", o[g + 1].type = "media-type", o[g + 2].type = "keyword";
            continue;
          }
        }
      }
    return o;
  }
  function p(c) {
    var u = [], o = 0, f = 0, h = /^(\s*)url\s*\(/.exec(c);
    if (h !== null) {
      for (var m = h[0].length, d = 1; d > 0; ) {
        var D = c[m];
        D === "(" && d++, D === ")" && d--, m++;
      }
      u.unshift(new r.default({ type: "url", value: c.substring(0, m).trim(), sourceIndex: h[1].length, before: h[1], after: /^(\s*)/.exec(c.substring(m))[1] })), o = m;
    }
    for (var y = o; y < c.length; y++) {
      var g = c[y];
      if (g === "(" && f++, g === ")" && f--, f === 0 && g === ",") {
        var v = c.substring(o, y), b = /^(\s*)/.exec(v)[1];
        u.push(new s.default({ type: "media-query", value: v.trim(), sourceIndex: o + b.length, nodes: l(v, o), before: b, after: /(\s*)$/.exec(v)[1] })), o = y + 1;
      }
    }
    var w = c.substring(o), C = /^(\s*)/.exec(w)[1];
    return u.push(new s.default({ type: "media-query", value: w.trim(), sourceIndex: o + C.length, nodes: l(w, o), before: C, after: /(\s*)$/.exec(w)[1] })), u;
  }
}), lv = T((e) => {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
  var t = Zu(), r = s(t), n = uv();
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return new r.default({ nodes: (0, n.parseMediaList)(a), type: "media-query-list", value: a.trim() });
  }
}), el = T((e, t) => {
  t.exports = function(r, n) {
    if (n = typeof n == "number" ? n : 1 / 0, !n)
      return Array.isArray(r) ? r.map(function(i) {
        return i;
      }) : r;
    return s(r, 1);
    function s(i, a) {
      return i.reduce(function(l, p) {
        return Array.isArray(p) && a < n ? l.concat(s(p, a + 1)) : l.concat(p);
      }, []);
    }
  };
}), tl = T((e, t) => {
  t.exports = function(r, n) {
    for (var s = -1, i = []; (s = r.indexOf(n, s + 1)) !== -1; )
      i.push(s);
    return i;
  };
}), rl = T((e, t) => {
  function r(i, a) {
    for (var l = 1, p = i.length, c = i[0], u = i[0], o = 1; o < p; ++o)
      if (u = c, c = i[o], a(c, u)) {
        if (o === l) {
          l++;
          continue;
        }
        i[l++] = c;
      }
    return i.length = l, i;
  }
  function n(i) {
    for (var a = 1, l = i.length, p = i[0], c = i[0], u = 1; u < l; ++u, c = p)
      if (c = p, p = i[u], p !== c) {
        if (u === a) {
          a++;
          continue;
        }
        i[a++] = p;
      }
    return i.length = a, i;
  }
  function s(i, a, l) {
    return i.length === 0 ? i : a ? (l || i.sort(a), r(i, a)) : (l || i.sort(), n(i));
  }
  t.exports = s;
}), sr = T((e, t) => {
  e.__esModule = !0;
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  };
  function n(a, l) {
    if (!(a instanceof l))
      throw new TypeError("Cannot call a class as a function");
  }
  var s = function a(l, p) {
    if ((typeof l > "u" ? "undefined" : r(l)) !== "object")
      return l;
    var c = new l.constructor();
    for (var u in l)
      if (l.hasOwnProperty(u)) {
        var o = l[u], f = typeof o > "u" ? "undefined" : r(o);
        u === "parent" && f === "object" ? p && (c[u] = p) : o instanceof Array ? c[u] = o.map(function(h) {
          return a(h, c);
        }) : c[u] = a(o, c);
      }
    return c;
  }, i = function() {
    function a() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      n(this, a);
      for (var p in l)
        this[p] = l[p];
      var c = l.spaces;
      c = c === void 0 ? {} : c;
      var u = c.before, o = u === void 0 ? "" : u, f = c.after, h = f === void 0 ? "" : f;
      this.spaces = { before: o, after: h };
    }
    return a.prototype.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, a.prototype.replaceWith = function() {
      if (this.parent) {
        for (var l in arguments)
          this.parent.insertBefore(this, arguments[l]);
        this.remove();
      }
      return this;
    }, a.prototype.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, a.prototype.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, a.prototype.clone = function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, p = s(this);
      for (var c in l)
        p[c] = l[c];
      return p;
    }, a.prototype.toString = function() {
      return [this.spaces.before, String(this.value), this.spaces.after].join("");
    }, a;
  }();
  e.default = i, t.exports = e.default;
}), me = T((e) => {
  e.__esModule = !0, e.TAG = "tag", e.STRING = "string", e.SELECTOR = "selector", e.ROOT = "root", e.PSEUDO = "pseudo", e.NESTING = "nesting", e.ID = "id", e.COMMENT = "comment", e.COMBINATOR = "combinator", e.CLASS = "class", e.ATTRIBUTE = "attribute", e.UNIVERSAL = "universal";
}), Si = T((e, t) => {
  e.__esModule = !0;
  var r = /* @__PURE__ */ function() {
    function h(m, d) {
      for (var D = 0; D < d.length; D++) {
        var y = d[D];
        y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(m, y.key, y);
      }
    }
    return function(m, d, D) {
      return d && h(m.prototype, d), D && h(m, D), m;
    };
  }(), n = sr(), s = p(n), i = me(), a = l(i);
  function l(h) {
    if (h && h.__esModule)
      return h;
    var m = {};
    if (h != null)
      for (var d in h)
        Object.prototype.hasOwnProperty.call(h, d) && (m[d] = h[d]);
    return m.default = h, m;
  }
  function p(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function c(h, m) {
    if (!(h instanceof m))
      throw new TypeError("Cannot call a class as a function");
  }
  function u(h, m) {
    if (!h)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return m && (typeof m == "object" || typeof m == "function") ? m : h;
  }
  function o(h, m) {
    if (typeof m != "function" && m !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof m);
    h.prototype = Object.create(m && m.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m);
  }
  var f = function(h) {
    o(m, h);
    function m(d) {
      c(this, m);
      var D = u(this, h.call(this, d));
      return D.nodes || (D.nodes = []), D;
    }
    return m.prototype.append = function(d) {
      return d.parent = this, this.nodes.push(d), this;
    }, m.prototype.prepend = function(d) {
      return d.parent = this, this.nodes.unshift(d), this;
    }, m.prototype.at = function(d) {
      return this.nodes[d];
    }, m.prototype.index = function(d) {
      return typeof d == "number" ? d : this.nodes.indexOf(d);
    }, m.prototype.removeChild = function(d) {
      d = this.index(d), this.at(d).parent = void 0, this.nodes.splice(d, 1);
      var D = void 0;
      for (var y in this.indexes)
        D = this.indexes[y], D >= d && (this.indexes[y] = D - 1);
      return this;
    }, m.prototype.removeAll = function() {
      for (var y = this.nodes, d = Array.isArray(y), D = 0, y = d ? y : y[Symbol.iterator](); ; ) {
        var g;
        if (d) {
          if (D >= y.length)
            break;
          g = y[D++];
        } else {
          if (D = y.next(), D.done)
            break;
          g = D.value;
        }
        var v = g;
        v.parent = void 0;
      }
      return this.nodes = [], this;
    }, m.prototype.empty = function() {
      return this.removeAll();
    }, m.prototype.insertAfter = function(d, D) {
      var y = this.index(d);
      this.nodes.splice(y + 1, 0, D);
      var g = void 0;
      for (var v in this.indexes)
        g = this.indexes[v], y <= g && (this.indexes[v] = g + this.nodes.length);
      return this;
    }, m.prototype.insertBefore = function(d, D) {
      var y = this.index(d);
      this.nodes.splice(y, 0, D);
      var g = void 0;
      for (var v in this.indexes)
        g = this.indexes[v], y <= g && (this.indexes[v] = g + this.nodes.length);
      return this;
    }, m.prototype.each = function(d) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var D = this.lastEach;
      if (this.indexes[D] = 0, !!this.length) {
        for (var y = void 0, g = void 0; this.indexes[D] < this.length && (y = this.indexes[D], g = d(this.at(y), y), g !== !1); )
          this.indexes[D] += 1;
        if (delete this.indexes[D], g === !1)
          return !1;
      }
    }, m.prototype.walk = function(d) {
      return this.each(function(D, y) {
        var g = d(D, y);
        if (g !== !1 && D.length && (g = D.walk(d)), g === !1)
          return !1;
      });
    }, m.prototype.walkAttributes = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.ATTRIBUTE)
          return d.call(D, y);
      });
    }, m.prototype.walkClasses = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.CLASS)
          return d.call(D, y);
      });
    }, m.prototype.walkCombinators = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.COMBINATOR)
          return d.call(D, y);
      });
    }, m.prototype.walkComments = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.COMMENT)
          return d.call(D, y);
      });
    }, m.prototype.walkIds = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.ID)
          return d.call(D, y);
      });
    }, m.prototype.walkNesting = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.NESTING)
          return d.call(D, y);
      });
    }, m.prototype.walkPseudos = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.PSEUDO)
          return d.call(D, y);
      });
    }, m.prototype.walkTags = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.TAG)
          return d.call(D, y);
      });
    }, m.prototype.walkUniversals = function(d) {
      var D = this;
      return this.walk(function(y) {
        if (y.type === a.UNIVERSAL)
          return d.call(D, y);
      });
    }, m.prototype.split = function(d) {
      var D = this, y = [];
      return this.reduce(function(g, v, b) {
        var w = d.call(D, v);
        return y.push(v), w ? (g.push(y), y = []) : b === D.length - 1 && g.push(y), g;
      }, []);
    }, m.prototype.map = function(d) {
      return this.nodes.map(d);
    }, m.prototype.reduce = function(d, D) {
      return this.nodes.reduce(d, D);
    }, m.prototype.every = function(d) {
      return this.nodes.every(d);
    }, m.prototype.some = function(d) {
      return this.nodes.some(d);
    }, m.prototype.filter = function(d) {
      return this.nodes.filter(d);
    }, m.prototype.sort = function(d) {
      return this.nodes.sort(d);
    }, m.prototype.toString = function() {
      return this.map(String).join("");
    }, r(m, [{ key: "first", get: function() {
      return this.at(0);
    } }, { key: "last", get: function() {
      return this.at(this.length - 1);
    } }, { key: "length", get: function() {
      return this.nodes.length;
    } }]), m;
  }(s.default);
  e.default = f, t.exports = e.default;
}), cv = T((e, t) => {
  e.__esModule = !0;
  var r = Si(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.ROOT, h;
    }
    return o.prototype.toString = function() {
      var f = this.reduce(function(h, m) {
        var d = String(m);
        return d ? h + d + "," : "";
      }, "").slice(0, -1);
      return this.trailingComma ? f + "," : f;
    }, o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), pv = T((e, t) => {
  e.__esModule = !0;
  var r = Si(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.SELECTOR, h;
    }
    return o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), jr = T((e, t) => {
  e.__esModule = !0;
  var r = /* @__PURE__ */ function() {
    function u(o, f) {
      for (var h = 0; h < f.length; h++) {
        var m = f[h];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(o, m.key, m);
      }
    }
    return function(o, f, h) {
      return f && u(o.prototype, f), h && u(o, h), o;
    };
  }(), n = sr(), s = i(n);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o() {
      return a(this, o), l(this, u.apply(this, arguments));
    }
    return o.prototype.toString = function() {
      return [this.spaces.before, this.ns, String(this.value), this.spaces.after].join("");
    }, r(o, [{ key: "ns", get: function() {
      var f = this.namespace;
      return f ? (typeof f == "string" ? f : "") + "|" : "";
    } }]), o;
  }(s.default);
  e.default = c, t.exports = e.default;
}), hv = T((e, t) => {
  e.__esModule = !0;
  var r = jr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.CLASS, h;
    }
    return o.prototype.toString = function() {
      return [this.spaces.before, this.ns, "." + this.value, this.spaces.after].join("");
    }, o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), dv = T((e, t) => {
  e.__esModule = !0;
  var r = sr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.COMMENT, h;
    }
    return o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), fv = T((e, t) => {
  e.__esModule = !0;
  var r = jr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.ID, h;
    }
    return o.prototype.toString = function() {
      return [this.spaces.before, this.ns, "#" + this.value, this.spaces.after].join("");
    }, o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), mv = T((e, t) => {
  e.__esModule = !0;
  var r = jr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.TAG, h;
    }
    return o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), gv = T((e, t) => {
  e.__esModule = !0;
  var r = sr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.STRING, h;
    }
    return o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), vv = T((e, t) => {
  e.__esModule = !0;
  var r = Si(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.PSEUDO, h;
    }
    return o.prototype.toString = function() {
      var f = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.spaces.before, String(this.value), f, this.spaces.after].join("");
    }, o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), Dv = T((e, t) => {
  e.__esModule = !0;
  var r = jr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.ATTRIBUTE, h.raws = {}, h;
    }
    return o.prototype.toString = function() {
      var f = [this.spaces.before, "[", this.ns, this.attribute];
      return this.operator && f.push(this.operator), this.value && f.push(this.value), this.raws.insensitive ? f.push(this.raws.insensitive) : this.insensitive && f.push(" i"), f.push("]"), f.concat(this.spaces.after).join("");
    }, o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), yv = T((e, t) => {
  e.__esModule = !0;
  var r = jr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.UNIVERSAL, h.value = "*", h;
    }
    return o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), wv = T((e, t) => {
  e.__esModule = !0;
  var r = sr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.COMBINATOR, h;
    }
    return o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), bv = T((e, t) => {
  e.__esModule = !0;
  var r = sr(), n = i(r), s = me();
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(u, o) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o && (typeof o == "object" || typeof o == "function") ? o : u;
  }
  function p(u, o) {
    if (typeof o != "function" && o !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof o);
    u.prototype = Object.create(o && o.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(u, o) : u.__proto__ = o);
  }
  var c = function(u) {
    p(o, u);
    function o(f) {
      a(this, o);
      var h = l(this, u.call(this, f));
      return h.type = s.NESTING, h.value = "&", h;
    }
    return o;
  }(n.default);
  e.default = c, t.exports = e.default;
}), Cv = T((e, t) => {
  e.__esModule = !0, e.default = r;
  function r(n) {
    return n.sort(function(s, i) {
      return s - i;
    });
  }
  t.exports = e.default;
}), Ev = T((e, t) => {
  e.__esModule = !0, e.default = N;
  var r = 39, n = 34, s = 92, i = 47, a = 10, l = 32, p = 12, c = 9, u = 13, o = 43, f = 62, h = 126, m = 124, d = 44, D = 40, y = 41, g = 91, v = 93, b = 59, w = 42, C = 58, E = 38, x = 64, F = /[ \n\t\r\{\(\)'"\\;/]/g, B = /[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
  function N(M) {
    for (var R = [], I = M.css.valueOf(), j = void 0, O = void 0, Y = void 0, pe = void 0, ge = void 0, tt = void 0, Ee = void 0, Pe = void 0, rt = void 0, J = void 0, nt = void 0, gt = I.length, L = -1, _ = 1, S = 0, W = function(z, K) {
      if (M.safe)
        I += K, O = I.length - 1;
      else
        throw M.error("Unclosed " + z, _, S - L, S);
    }; S < gt; ) {
      switch (j = I.charCodeAt(S), j === a && (L = S, _ += 1), j) {
        case a:
        case l:
        case c:
        case u:
        case p:
          O = S;
          do
            O += 1, j = I.charCodeAt(O), j === a && (L = O, _ += 1);
          while (j === l || j === a || j === c || j === u || j === p);
          R.push(["space", I.slice(S, O), _, S - L, S]), S = O - 1;
          break;
        case o:
        case f:
        case h:
        case m:
          O = S;
          do
            O += 1, j = I.charCodeAt(O);
          while (j === o || j === f || j === h || j === m);
          R.push(["combinator", I.slice(S, O), _, S - L, S]), S = O - 1;
          break;
        case w:
          R.push(["*", "*", _, S - L, S]);
          break;
        case E:
          R.push(["&", "&", _, S - L, S]);
          break;
        case d:
          R.push([",", ",", _, S - L, S]);
          break;
        case g:
          R.push(["[", "[", _, S - L, S]);
          break;
        case v:
          R.push(["]", "]", _, S - L, S]);
          break;
        case C:
          R.push([":", ":", _, S - L, S]);
          break;
        case b:
          R.push([";", ";", _, S - L, S]);
          break;
        case D:
          R.push(["(", "(", _, S - L, S]);
          break;
        case y:
          R.push([")", ")", _, S - L, S]);
          break;
        case r:
        case n:
          Y = j === r ? "'" : '"', O = S;
          do
            for (J = !1, O = I.indexOf(Y, O + 1), O === -1 && W("quote", Y), nt = O; I.charCodeAt(nt - 1) === s; )
              nt -= 1, J = !J;
          while (J);
          R.push(["string", I.slice(S, O + 1), _, S - L, _, O - L, S]), S = O;
          break;
        case x:
          F.lastIndex = S + 1, F.test(I), F.lastIndex === 0 ? O = I.length - 1 : O = F.lastIndex - 2, R.push(["at-word", I.slice(S, O + 1), _, S - L, _, O - L, S]), S = O;
          break;
        case s:
          for (O = S, Ee = !0; I.charCodeAt(O + 1) === s; )
            O += 1, Ee = !Ee;
          j = I.charCodeAt(O + 1), Ee && j !== i && j !== l && j !== a && j !== c && j !== u && j !== p && (O += 1), R.push(["word", I.slice(S, O + 1), _, S - L, _, O - L, S]), S = O;
          break;
        default:
          j === i && I.charCodeAt(S + 1) === w ? (O = I.indexOf("*/", S + 2) + 1, O === 0 && W("comment", "*/"), tt = I.slice(S, O + 1), pe = tt.split(`
`), ge = pe.length - 1, ge > 0 ? (Pe = _ + ge, rt = O - pe[ge].length) : (Pe = _, rt = L), R.push(["comment", tt, _, S - L, Pe, O - rt, S]), L = rt, _ = Pe, S = O) : (B.lastIndex = S + 1, B.test(I), B.lastIndex === 0 ? O = I.length - 1 : O = B.lastIndex - 2, R.push(["word", I.slice(S, O + 1), _, S - L, _, O - L, S]), S = O);
          break;
      }
      S++;
    }
    return R;
  }
  t.exports = e.default;
}), kv = T((e, t) => {
  e.__esModule = !0;
  var r = /* @__PURE__ */ function() {
    function L(_, S) {
      for (var W = 0; W < S.length; W++) {
        var z = S[W];
        z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(_, z.key, z);
      }
    }
    return function(_, S, W) {
      return S && L(_.prototype, S), W && L(_, W), _;
    };
  }(), n = el(), s = J(n), i = tl(), a = J(i), l = rl(), p = J(l), c = cv(), u = J(c), o = pv(), f = J(o), h = hv(), m = J(h), d = dv(), D = J(d), y = fv(), g = J(y), v = mv(), b = J(v), w = gv(), C = J(w), E = vv(), x = J(E), F = Dv(), B = J(F), N = yv(), M = J(N), R = wv(), I = J(R), j = bv(), O = J(j), Y = Cv(), pe = J(Y), ge = Ev(), tt = J(ge), Ee = me(), Pe = rt(Ee);
  function rt(L) {
    if (L && L.__esModule)
      return L;
    var _ = {};
    if (L != null)
      for (var S in L)
        Object.prototype.hasOwnProperty.call(L, S) && (_[S] = L[S]);
    return _.default = L, _;
  }
  function J(L) {
    return L && L.__esModule ? L : { default: L };
  }
  function nt(L, _) {
    if (!(L instanceof _))
      throw new TypeError("Cannot call a class as a function");
  }
  var gt = function() {
    function L(_) {
      nt(this, L), this.input = _, this.lossy = _.options.lossless === !1, this.position = 0, this.root = new u.default();
      var S = new f.default();
      return this.root.append(S), this.current = S, this.lossy ? this.tokens = (0, tt.default)({ safe: _.safe, css: _.css.trim() }) : this.tokens = (0, tt.default)(_), this.loop();
    }
    return L.prototype.attribute = function() {
      var _ = "", S = void 0, W = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[0] !== "]"; )
        _ += this.tokens[this.position][1], this.position++;
      this.position === this.tokens.length && !~_.indexOf("]") && this.error("Expected a closing square bracket.");
      var z = _.split(/((?:[*~^$|]?=))([^]*)/), K = z[0].split(/(\|)/g), ke = { operator: z[1], value: z[2], source: { start: { line: W[2], column: W[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: W[4] };
      if (K.length > 1 ? (K[0] === "" && (K[0] = !0), ke.attribute = this.parseValue(K[2]), ke.namespace = this.parseNamespace(K[0])) : ke.attribute = this.parseValue(z[0]), S = new B.default(ke), z[2]) {
        var xe = z[2].split(/(\s+i\s*?)$/), le = xe[0].trim();
        S.value = this.lossy ? le : xe[0], xe[1] && (S.insensitive = !0, this.lossy || (S.raws.insensitive = xe[1])), S.quoted = le[0] === "'" || le[0] === '"', S.raws.unquoted = S.quoted ? le.slice(1, -1) : le;
      }
      this.newNode(S), this.position++;
    }, L.prototype.combinator = function() {
      if (this.currToken[1] === "|")
        return this.namespace();
      for (var _ = new I.default({ value: "", source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] }); this.position < this.tokens.length && this.currToken && (this.currToken[0] === "space" || this.currToken[0] === "combinator"); )
        this.nextToken && this.nextToken[0] === "combinator" ? (_.spaces.before = this.parseSpace(this.currToken[1]), _.source.start.line = this.nextToken[2], _.source.start.column = this.nextToken[3], _.source.end.column = this.nextToken[3], _.source.end.line = this.nextToken[2], _.sourceIndex = this.nextToken[4]) : this.prevToken && this.prevToken[0] === "combinator" ? _.spaces.after = this.parseSpace(this.currToken[1]) : this.currToken[0] === "combinator" ? _.value = this.currToken[1] : this.currToken[0] === "space" && (_.value = this.parseSpace(this.currToken[1], " ")), this.position++;
      return this.newNode(_);
    }, L.prototype.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = !0, this.position++;
        return;
      }
      var _ = new f.default();
      this.current.parent.append(_), this.current = _, this.position++;
    }, L.prototype.comment = function() {
      var _ = new D.default({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] });
      this.newNode(_), this.position++;
    }, L.prototype.error = function(_) {
      throw new this.input.error(_);
    }, L.prototype.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.");
    }, L.prototype.missingParenthesis = function() {
      return this.error("Expected opening parenthesis.");
    }, L.prototype.missingSquareBracket = function() {
      return this.error("Expected opening square bracket.");
    }, L.prototype.namespace = function() {
      var _ = this.prevToken && this.prevToken[1] || !0;
      if (this.nextToken[0] === "word")
        return this.position++, this.word(_);
      if (this.nextToken[0] === "*")
        return this.position++, this.universal(_);
    }, L.prototype.nesting = function() {
      this.newNode(new O.default({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] })), this.position++;
    }, L.prototype.parentheses = function() {
      var _ = this.current.last;
      if (_ && _.type === Pe.PSEUDO) {
        var S = new f.default(), W = this.current;
        _.append(S), this.current = S;
        var z = 1;
        for (this.position++; this.position < this.tokens.length && z; )
          this.currToken[0] === "(" && z++, this.currToken[0] === ")" && z--, z ? this.parse() : (S.parent.source.end.line = this.currToken[2], S.parent.source.end.column = this.currToken[3], this.position++);
        z && this.error("Expected closing parenthesis."), this.current = W;
      } else {
        var K = 1;
        for (this.position++, _.value += "("; this.position < this.tokens.length && K; )
          this.currToken[0] === "(" && K++, this.currToken[0] === ")" && K--, _.value += this.parseParenthesisToken(this.currToken), this.position++;
        K && this.error("Expected closing parenthesis.");
      }
    }, L.prototype.pseudo = function() {
      for (var _ = this, S = "", W = this.currToken; this.currToken && this.currToken[0] === ":"; )
        S += this.currToken[1], this.position++;
      if (!this.currToken)
        return this.error("Expected pseudo-class or pseudo-element");
      if (this.currToken[0] === "word") {
        var z = void 0;
        this.splitWord(!1, function(K, ke) {
          S += K, z = new x.default({ value: S, source: { start: { line: W[2], column: W[3] }, end: { line: _.currToken[4], column: _.currToken[5] } }, sourceIndex: W[4] }), _.newNode(z), ke > 1 && _.nextToken && _.nextToken[0] === "(" && _.error("Misplaced parenthesis.");
        });
      } else
        this.error('Unexpected "' + this.currToken[0] + '" found.');
    }, L.prototype.space = function() {
      var _ = this.currToken;
      this.position === 0 || this.prevToken[0] === "," || this.prevToken[0] === "(" ? (this.spaces = this.parseSpace(_[1]), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[0] === "," || this.nextToken[0] === ")" ? (this.current.last.spaces.after = this.parseSpace(_[1]), this.position++) : this.combinator();
    }, L.prototype.string = function() {
      var _ = this.currToken;
      this.newNode(new C.default({ value: this.currToken[1], source: { start: { line: _[2], column: _[3] }, end: { line: _[4], column: _[5] } }, sourceIndex: _[6] })), this.position++;
    }, L.prototype.universal = function(_) {
      var S = this.nextToken;
      if (S && S[1] === "|")
        return this.position++, this.namespace();
      this.newNode(new M.default({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] }), _), this.position++;
    }, L.prototype.splitWord = function(_, S) {
      for (var W = this, z = this.nextToken, K = this.currToken[1]; z && z[0] === "word"; ) {
        this.position++;
        var ke = this.currToken[1];
        if (K += ke, ke.lastIndexOf("\\") === ke.length - 1) {
          var xe = this.nextToken;
          xe && xe[0] === "space" && (K += this.parseSpace(xe[1], " "), this.position++);
        }
        z = this.nextToken;
      }
      var le = (0, a.default)(K, "."), st = (0, a.default)(K, "#"), It = (0, a.default)(K, "#{");
      It.length && (st = st.filter(function(Ie) {
        return !~It.indexOf(Ie);
      }));
      var Ve = (0, pe.default)((0, p.default)((0, s.default)([[0], le, st])));
      Ve.forEach(function(Ie, it) {
        var jt = Ve[it + 1] || K.length, vt = K.slice(Ie, jt);
        if (it === 0 && S)
          return S.call(W, vt, Ve.length);
        var Dt = void 0;
        ~le.indexOf(Ie) ? Dt = new m.default({ value: vt.slice(1), source: { start: { line: W.currToken[2], column: W.currToken[3] + Ie }, end: { line: W.currToken[4], column: W.currToken[3] + (jt - 1) } }, sourceIndex: W.currToken[6] + Ve[it] }) : ~st.indexOf(Ie) ? Dt = new g.default({ value: vt.slice(1), source: { start: { line: W.currToken[2], column: W.currToken[3] + Ie }, end: { line: W.currToken[4], column: W.currToken[3] + (jt - 1) } }, sourceIndex: W.currToken[6] + Ve[it] }) : Dt = new b.default({ value: vt, source: { start: { line: W.currToken[2], column: W.currToken[3] + Ie }, end: { line: W.currToken[4], column: W.currToken[3] + (jt - 1) } }, sourceIndex: W.currToken[6] + Ve[it] }), W.newNode(Dt, _);
      }), this.position++;
    }, L.prototype.word = function(_) {
      var S = this.nextToken;
      return S && S[1] === "|" ? (this.position++, this.namespace()) : this.splitWord(_);
    }, L.prototype.loop = function() {
      for (; this.position < this.tokens.length; )
        this.parse(!0);
      return this.root;
    }, L.prototype.parse = function(_) {
      switch (this.currToken[0]) {
        case "space":
          this.space();
          break;
        case "comment":
          this.comment();
          break;
        case "(":
          this.parentheses();
          break;
        case ")":
          _ && this.missingParenthesis();
          break;
        case "[":
          this.attribute();
          break;
        case "]":
          this.missingSquareBracket();
          break;
        case "at-word":
        case "word":
          this.word();
          break;
        case ":":
          this.pseudo();
          break;
        case ";":
          this.missingBackslash();
          break;
        case ",":
          this.comma();
          break;
        case "*":
          this.universal();
          break;
        case "&":
          this.nesting();
          break;
        case "combinator":
          this.combinator();
          break;
        case "string":
          this.string();
          break;
      }
    }, L.prototype.parseNamespace = function(_) {
      if (this.lossy && typeof _ == "string") {
        var S = _.trim();
        return S.length ? S : !0;
      }
      return _;
    }, L.prototype.parseSpace = function(_, S) {
      return this.lossy ? S || "" : _;
    }, L.prototype.parseValue = function(_) {
      return this.lossy && _ && typeof _ == "string" ? _.trim() : _;
    }, L.prototype.parseParenthesisToken = function(_) {
      return this.lossy ? _[0] === "space" ? this.parseSpace(_[1], " ") : this.parseValue(_[1]) : _[1];
    }, L.prototype.newNode = function(_, S) {
      return S && (_.namespace = this.parseNamespace(S)), this.spaces && (_.spaces.before = this.spaces, this.spaces = ""), this.current.append(_);
    }, r(L, [{ key: "currToken", get: function() {
      return this.tokens[this.position];
    } }, { key: "nextToken", get: function() {
      return this.tokens[this.position + 1];
    } }, { key: "prevToken", get: function() {
      return this.tokens[this.position - 1];
    } }]), L;
  }();
  e.default = gt, t.exports = e.default;
}), xv = T((e, t) => {
  e.__esModule = !0;
  var r = /* @__PURE__ */ function() {
    function p(c, u) {
      for (var o = 0; o < u.length; o++) {
        var f = u[o];
        f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(c, f.key, f);
      }
    }
    return function(c, u, o) {
      return u && p(c.prototype, u), o && p(c, o), c;
    };
  }(), n = kv(), s = i(n);
  function i(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function a(p, c) {
    if (!(p instanceof c))
      throw new TypeError("Cannot call a class as a function");
  }
  var l = function() {
    function p(c) {
      return a(this, p), this.func = c || function() {
      }, this;
    }
    return p.prototype.process = function(c) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = new s.default({ css: c, error: function(f) {
        throw new Error(f);
      }, options: u });
      return this.res = o, this.func(o), this;
    }, r(p, [{ key: "result", get: function() {
      return String(this.res);
    } }]), p;
  }();
  e.default = l, t.exports = e.default;
}), Ue = T((e, t) => {
  var r = function(n, s) {
    let i = new n.constructor();
    for (let a in n) {
      if (!n.hasOwnProperty(a))
        continue;
      let l = n[a], p = typeof l;
      a === "parent" && p === "object" ? s && (i[a] = s) : a === "source" ? i[a] = l : l instanceof Array ? i[a] = l.map((c) => r(c, i)) : a !== "before" && a !== "after" && a !== "between" && a !== "semicolon" && (p === "object" && l !== null && (l = r(l)), i[a] = l);
    }
    return i;
  };
  t.exports = class {
    constructor(n) {
      n = n || {}, this.raws = { before: "", after: "" };
      for (let s in n)
        this[s] = n[s];
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    toString() {
      return [this.raws.before, String(this.value), this.raws.after].join("");
    }
    clone(n) {
      n = n || {};
      let s = r(this);
      for (let i in n)
        s[i] = n[i];
      return s;
    }
    cloneBefore(n) {
      n = n || {};
      let s = this.clone(n);
      return this.parent.insertBefore(this, s), s;
    }
    cloneAfter(n) {
      n = n || {};
      let s = this.clone(n);
      return this.parent.insertAfter(this, s), s;
    }
    replaceWith() {
      let n = Array.prototype.slice.call(arguments);
      if (this.parent) {
        for (let s of n)
          this.parent.insertBefore(this, s);
        this.remove();
      }
      return this;
    }
    moveTo(n) {
      return this.cleanRaws(this.root() === n.root()), this.remove(), n.append(this), this;
    }
    moveBefore(n) {
      return this.cleanRaws(this.root() === n.root()), this.remove(), n.parent.insertBefore(n, this), this;
    }
    moveAfter(n) {
      return this.cleanRaws(this.root() === n.root()), this.remove(), n.parent.insertAfter(n, this), this;
    }
    next() {
      let n = this.parent.index(this);
      return this.parent.nodes[n + 1];
    }
    prev() {
      let n = this.parent.index(this);
      return this.parent.nodes[n - 1];
    }
    toJSON() {
      let n = {};
      for (let s in this) {
        if (!this.hasOwnProperty(s) || s === "parent")
          continue;
        let i = this[s];
        i instanceof Array ? n[s] = i.map((a) => typeof a == "object" && a.toJSON ? a.toJSON() : a) : typeof i == "object" && i.toJSON ? n[s] = i.toJSON() : n[s] = i;
      }
      return n;
    }
    root() {
      let n = this;
      for (; n.parent; )
        n = n.parent;
      return n;
    }
    cleanRaws(n) {
      delete this.raws.before, delete this.raws.after, n || delete this.raws.between;
    }
    positionInside(n) {
      let s = this.toString(), i = this.source.start.column, a = this.source.start.line;
      for (let l = 0; l < n; l++)
        s[l] === `
` ? (i = 1, a += 1) : i += 1;
      return { line: a, column: i };
    }
    positionBy(n) {
      let s = this.source.start;
      if (Object(n).index)
        s = this.positionInside(n.index);
      else if (Object(n).word) {
        let i = this.toString().indexOf(n.word);
        i !== -1 && (s = this.positionInside(i));
      }
      return s;
    }
  };
}), Ce = T((e, t) => {
  var r = Ue(), n = class extends r {
    constructor(s) {
      super(s), this.nodes || (this.nodes = []);
    }
    push(s) {
      return s.parent = this, this.nodes.push(s), this;
    }
    each(s) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let i = this.lastEach, a, l;
      if (this.indexes[i] = 0, !!this.nodes) {
        for (; this.indexes[i] < this.nodes.length && (a = this.indexes[i], l = s(this.nodes[a], a), l !== !1); )
          this.indexes[i] += 1;
        return delete this.indexes[i], l;
      }
    }
    walk(s) {
      return this.each((i, a) => {
        let l = s(i, a);
        return l !== !1 && i.walk && (l = i.walk(s)), l;
      });
    }
    walkType(s, i) {
      if (!s || !i)
        throw new Error("Parameters {type} and {callback} are required.");
      let a = typeof s == "function";
      return this.walk((l, p) => {
        if (a && l instanceof s || !a && l.type === s)
          return i.call(this, l, p);
      });
    }
    append(s) {
      return s.parent = this, this.nodes.push(s), this;
    }
    prepend(s) {
      return s.parent = this, this.nodes.unshift(s), this;
    }
    cleanRaws(s) {
      if (super.cleanRaws(s), this.nodes)
        for (let i of this.nodes)
          i.cleanRaws(s);
    }
    insertAfter(s, i) {
      let a = this.index(s), l;
      this.nodes.splice(a + 1, 0, i);
      for (let p in this.indexes)
        l = this.indexes[p], a <= l && (this.indexes[p] = l + this.nodes.length);
      return this;
    }
    insertBefore(s, i) {
      let a = this.index(s), l;
      this.nodes.splice(a, 0, i);
      for (let p in this.indexes)
        l = this.indexes[p], a <= l && (this.indexes[p] = l + this.nodes.length);
      return this;
    }
    removeChild(s) {
      s = this.index(s), this.nodes[s].parent = void 0, this.nodes.splice(s, 1);
      let i;
      for (let a in this.indexes)
        i = this.indexes[a], i >= s && (this.indexes[a] = i - 1);
      return this;
    }
    removeAll() {
      for (let s of this.nodes)
        s.parent = void 0;
      return this.nodes = [], this;
    }
    every(s) {
      return this.nodes.every(s);
    }
    some(s) {
      return this.nodes.some(s);
    }
    index(s) {
      return typeof s == "number" ? s : this.nodes.indexOf(s);
    }
    get first() {
      if (this.nodes)
        return this.nodes[0];
    }
    get last() {
      if (this.nodes)
        return this.nodes[this.nodes.length - 1];
    }
    toString() {
      let s = this.nodes.map(String).join("");
      return this.value && (s = this.value + s), this.raws.before && (s = this.raws.before + s), this.raws.after && (s += this.raws.after), s;
    }
  };
  n.registerWalker = (s) => {
    let i = "walk" + s.name;
    i.lastIndexOf("s") !== i.length - 1 && (i += "s"), !n.prototype[i] && (n.prototype[i] = function(a) {
      return this.walkType(s, a);
    });
  }, t.exports = n;
}), _v = T((e, t) => {
  var r = Ce();
  t.exports = class extends r {
    constructor(n) {
      super(n), this.type = "root";
    }
  };
}), Fv = T((e, t) => {
  var r = Ce();
  t.exports = class extends r {
    constructor(n) {
      super(n), this.type = "value", this.unbalanced = 0;
    }
  };
}), Sv = T((e, t) => {
  var r = Ce(), n = class extends r {
    constructor(s) {
      super(s), this.type = "atword";
    }
    toString() {
      return this.quoted && this.raws.quote, [this.raws.before, "@", String.prototype.toString.call(this.value), this.raws.after].join("");
    }
  };
  r.registerWalker(n), t.exports = n;
}), Av = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "colon";
    }
  };
  r.registerWalker(s), t.exports = s;
}), Tv = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "comma";
    }
  };
  r.registerWalker(s), t.exports = s;
}), Bv = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "comment", this.inline = Object(i).inline || !1;
    }
    toString() {
      return [this.raws.before, this.inline ? "//" : "/*", String(this.value), this.inline ? "" : "*/", this.raws.after].join("");
    }
  };
  r.registerWalker(s), t.exports = s;
}), $v = T((e, t) => {
  var r = Ce(), n = class extends r {
    constructor(s) {
      super(s), this.type = "func", this.unbalanced = -1;
    }
  };
  r.registerWalker(n), t.exports = n;
}), Ov = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "number", this.unit = Object(i).unit || "";
    }
    toString() {
      return [this.raws.before, String(this.value), this.unit, this.raws.after].join("");
    }
  };
  r.registerWalker(s), t.exports = s;
}), Lv = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "operator";
    }
  };
  r.registerWalker(s), t.exports = s;
}), Nv = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "paren", this.parenType = "";
    }
  };
  r.registerWalker(s), t.exports = s;
}), Pv = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "string";
    }
    toString() {
      let i = this.quoted ? this.raws.quote : "";
      return [this.raws.before, i, this.value + "", i, this.raws.after].join("");
    }
  };
  r.registerWalker(s), t.exports = s;
}), Iv = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "word";
    }
  };
  r.registerWalker(s), t.exports = s;
}), jv = T((e, t) => {
  var r = Ce(), n = Ue(), s = class extends n {
    constructor(i) {
      super(i), this.type = "unicode-range";
    }
  };
  r.registerWalker(s), t.exports = s;
}), Rv = T((e, t) => {
  var r = class extends Error {
    constructor(n) {
      super(n), this.name = this.constructor.name, this.message = n || "An error ocurred while tokzenizing.", typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(n).stack;
    }
  };
  t.exports = r;
}), Mv = T((e, t) => {
  var r = /[ \n\t\r\{\(\)'"\\;,/]/g, n = /[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g, s = /[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g, i = /^[a-z0-9]/i, a = /^[a-f0-9?\-]/i, l = Rv();
  t.exports = function(p, c) {
    c = c || {};
    let u = [], o = p.valueOf(), f = o.length, h = -1, m = 1, d = 0, D = 0, y = null, g, v, b, w, C, E, x, F, B, N, M;
    function R(I) {
      let j = `Unclosed ${I} at line: ${m}, column: ${d - h}, token: ${d}`;
      throw new l(j);
    }
    for (; d < f; ) {
      switch (g = o.charCodeAt(d), g === 10 && (h = d, m += 1), g) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12:
          v = d;
          do
            v += 1, g = o.charCodeAt(v), g === 10 && (h = v, m += 1);
          while (g === 32 || g === 10 || g === 9 || g === 13 || g === 12);
          u.push(["space", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
          break;
        case 58:
          v = d + 1, u.push(["colon", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
          break;
        case 44:
          v = d + 1, u.push(["comma", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
          break;
        case 123:
          u.push(["{", "{", m, d - h, m, v - h, d]);
          break;
        case 125:
          u.push(["}", "}", m, d - h, m, v - h, d]);
          break;
        case 40:
          D++, y = !y && D === 1 && u.length > 0 && u[u.length - 1][0] === "word" && u[u.length - 1][1] === "url", u.push(["(", "(", m, d - h, m, v - h, d]);
          break;
        case 41:
          D--, y = y && D > 0, u.push([")", ")", m, d - h, m, v - h, d]);
          break;
        case 39:
        case 34:
          b = g === 39 ? "'" : '"', v = d;
          do
            for (B = !1, v = o.indexOf(b, v + 1), v === -1 && R("quote"), N = v; o.charCodeAt(N - 1) === 92; )
              N -= 1, B = !B;
          while (B);
          u.push(["string", o.slice(d, v + 1), m, d - h, m, v - h, d]), d = v;
          break;
        case 64:
          r.lastIndex = d + 1, r.test(o), r.lastIndex === 0 ? v = o.length - 1 : v = r.lastIndex - 2, u.push(["atword", o.slice(d, v + 1), m, d - h, m, v - h, d]), d = v;
          break;
        case 92:
          v = d, g = o.charCodeAt(v + 1), u.push(["word", o.slice(d, v + 1), m, d - h, m, v - h, d]), d = v;
          break;
        case 43:
        case 45:
        case 42:
          if (v = d + 1, M = o.slice(d + 1, v + 1), o.slice(d - 1, d), g === 45 && M.charCodeAt(0) === 45) {
            v++, u.push(["word", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
            break;
          }
          u.push(["operator", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
          break;
        default:
          if (g === 47 && (o.charCodeAt(d + 1) === 42 || c.loose && !y && o.charCodeAt(d + 1) === 47)) {
            if (o.charCodeAt(d + 1) === 42)
              v = o.indexOf("*/", d + 2) + 1, v === 0 && R("comment");
            else {
              let I = o.indexOf(`
`, d + 2);
              v = I !== -1 ? I - 1 : f;
            }
            E = o.slice(d, v + 1), w = E.split(`
`), C = w.length - 1, C > 0 ? (x = m + C, F = v - w[C].length) : (x = m, F = h), u.push(["comment", E, m, d - h, x, v - F, d]), h = F, m = x, d = v;
          } else if (g === 35 && !i.test(o.slice(d + 1, d + 2)))
            v = d + 1, u.push(["#", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
          else if ((g === 117 || g === 85) && o.charCodeAt(d + 1) === 43) {
            v = d + 2;
            do
              v += 1, g = o.charCodeAt(v);
            while (v < f && a.test(o.slice(v, v + 1)));
            u.push(["unicoderange", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
          } else if (g === 47)
            v = d + 1, u.push(["operator", o.slice(d, v), m, d - h, m, v - h, d]), d = v - 1;
          else {
            let I = n;
            if (g >= 48 && g <= 57 && (I = s), I.lastIndex = d + 1, I.test(o), I.lastIndex === 0 ? v = o.length - 1 : v = I.lastIndex - 2, I === s || g === 46) {
              let j = o.charCodeAt(v), O = o.charCodeAt(v + 1), Y = o.charCodeAt(v + 2);
              (j === 101 || j === 69) && (O === 45 || O === 43) && Y >= 48 && Y <= 57 && (s.lastIndex = v + 2, s.test(o), s.lastIndex === 0 ? v = o.length - 1 : v = s.lastIndex - 2);
            }
            u.push(["word", o.slice(d, v + 1), m, d - h, m, v - h, d]), d = v;
          }
          break;
      }
      d++;
    }
    return u;
  };
}), qv = T((e, t) => {
  var r = class extends Error {
    constructor(n) {
      super(n), this.name = this.constructor.name, this.message = n || "An error ocurred while parsing.", typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(n).stack;
    }
  };
  t.exports = r;
}), Wv = T((e, t) => {
  var r = _v(), n = Fv(), s = Sv(), i = Av(), a = Tv(), l = Bv(), p = $v(), c = Ov(), u = Lv(), o = Nv(), f = Pv(), h = Iv(), m = jv(), d = Mv(), D = el(), y = tl(), g = rl(), v = qv();
  function b(w) {
    return w.sort((C, E) => C - E);
  }
  t.exports = class {
    constructor(w, C) {
      let E = { loose: !1 };
      this.cache = [], this.input = w, this.options = Object.assign({}, E, C), this.position = 0, this.unbalanced = 0, this.root = new r();
      let x = new n();
      this.root.append(x), this.current = x, this.tokens = d(w, this.options);
    }
    parse() {
      return this.loop();
    }
    colon() {
      let w = this.currToken;
      this.newNode(new i({ value: w[1], source: { start: { line: w[2], column: w[3] }, end: { line: w[4], column: w[5] } }, sourceIndex: w[6] })), this.position++;
    }
    comma() {
      let w = this.currToken;
      this.newNode(new a({ value: w[1], source: { start: { line: w[2], column: w[3] }, end: { line: w[4], column: w[5] } }, sourceIndex: w[6] })), this.position++;
    }
    comment() {
      let w = !1, C = this.currToken[1].replace(/\/\*|\*\//g, ""), E;
      this.options.loose && C.startsWith("//") && (C = C.substring(2), w = !0), E = new l({ value: C, inline: w, source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] }), this.newNode(E), this.position++;
    }
    error(w, C) {
      throw new v(w + ` at line: ${C[2]}, column ${C[3]}`);
    }
    loop() {
      for (; this.position < this.tokens.length; )
        this.parseTokens();
      return !this.current.last && this.spaces ? this.current.raws.before += this.spaces : this.spaces && (this.current.last.raws.after += this.spaces), this.spaces = "", this.root;
    }
    operator() {
      let w = this.currToken[1], C;
      if (w === "+" || w === "-") {
        if (this.options.loose || this.position > 0 && (this.current.type === "func" && this.current.value === "calc" ? this.prevToken[0] !== "space" && this.prevToken[0] !== "(" ? this.error("Syntax Error", this.currToken) : this.nextToken[0] !== "space" && this.nextToken[0] !== "word" ? this.error("Syntax Error", this.currToken) : this.nextToken[0] === "word" && this.current.last.type !== "operator" && this.current.last.value !== "(" && this.error("Syntax Error", this.currToken) : (this.nextToken[0] === "space" || this.nextToken[0] === "operator" || this.prevToken[0] === "operator") && this.error("Syntax Error", this.currToken)), this.options.loose) {
          if ((!this.current.nodes.length || this.current.last && this.current.last.type === "operator") && this.nextToken[0] === "word")
            return this.word();
        } else if (this.nextToken[0] === "word")
          return this.word();
      }
      return C = new u({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] }), this.position++, this.newNode(C);
    }
    parseTokens() {
      switch (this.currToken[0]) {
        case "space":
          this.space();
          break;
        case "colon":
          this.colon();
          break;
        case "comma":
          this.comma();
          break;
        case "comment":
          this.comment();
          break;
        case "(":
          this.parenOpen();
          break;
        case ")":
          this.parenClose();
          break;
        case "atword":
        case "word":
          this.word();
          break;
        case "operator":
          this.operator();
          break;
        case "string":
          this.string();
          break;
        case "unicoderange":
          this.unicodeRange();
          break;
        default:
          this.word();
          break;
      }
    }
    parenOpen() {
      let w = 1, C = this.position + 1, E = this.currToken, x;
      for (; C < this.tokens.length && w; ) {
        let F = this.tokens[C];
        F[0] === "(" && w++, F[0] === ")" && w--, C++;
      }
      if (w && this.error("Expected closing parenthesis", E), x = this.current.last, x && x.type === "func" && x.unbalanced < 0 && (x.unbalanced = 0, this.current = x), this.current.unbalanced++, this.newNode(new o({ value: E[1], source: { start: { line: E[2], column: E[3] }, end: { line: E[4], column: E[5] } }, sourceIndex: E[6] })), this.position++, this.current.type === "func" && this.current.unbalanced && this.current.value === "url" && this.currToken[0] !== "string" && this.currToken[0] !== ")" && !this.options.loose) {
        let F = this.nextToken, B = this.currToken[1], N = { line: this.currToken[2], column: this.currToken[3] };
        for (; F && F[0] !== ")" && this.current.unbalanced; )
          this.position++, B += this.currToken[1], F = this.nextToken;
        this.position !== this.tokens.length - 1 && (this.position++, this.newNode(new h({ value: B, source: { start: N, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] })));
      }
    }
    parenClose() {
      let w = this.currToken;
      this.newNode(new o({ value: w[1], source: { start: { line: w[2], column: w[3] }, end: { line: w[4], column: w[5] } }, sourceIndex: w[6] })), this.position++, !(this.position >= this.tokens.length - 1 && !this.current.unbalanced) && (this.current.unbalanced--, this.current.unbalanced < 0 && this.error("Expected opening parenthesis", w), !this.current.unbalanced && this.cache.length && (this.current = this.cache.pop()));
    }
    space() {
      let w = this.currToken;
      this.position === this.tokens.length - 1 || this.nextToken[0] === "," || this.nextToken[0] === ")" ? (this.current.last.raws.after += w[1], this.position++) : (this.spaces = w[1], this.position++);
    }
    unicodeRange() {
      let w = this.currToken;
      this.newNode(new m({ value: w[1], source: { start: { line: w[2], column: w[3] }, end: { line: w[4], column: w[5] } }, sourceIndex: w[6] })), this.position++;
    }
    splitWord() {
      let w = this.nextToken, C = this.currToken[1], E = /^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/, x = /^(?!\#([a-z0-9]+))[\#\{\}]/gi, F, B;
      if (!x.test(C))
        for (; w && w[0] === "word"; ) {
          this.position++;
          let N = this.currToken[1];
          C += N, w = this.nextToken;
        }
      F = y(C, "@"), B = b(g(D([[0], F]))), B.forEach((N, M) => {
        let R = B[M + 1] || C.length, I = C.slice(N, R), j;
        if (~F.indexOf(N))
          j = new s({ value: I.slice(1), source: { start: { line: this.currToken[2], column: this.currToken[3] + N }, end: { line: this.currToken[4], column: this.currToken[3] + (R - 1) } }, sourceIndex: this.currToken[6] + B[M] });
        else if (E.test(this.currToken[1])) {
          let O = I.replace(E, "");
          j = new c({ value: I.replace(O, ""), source: { start: { line: this.currToken[2], column: this.currToken[3] + N }, end: { line: this.currToken[4], column: this.currToken[3] + (R - 1) } }, sourceIndex: this.currToken[6] + B[M], unit: O });
        } else
          j = new (w && w[0] === "(" ? p : h)({ value: I, source: { start: { line: this.currToken[2], column: this.currToken[3] + N }, end: { line: this.currToken[4], column: this.currToken[3] + (R - 1) } }, sourceIndex: this.currToken[6] + B[M] }), j.type === "word" ? (j.isHex = /^#(.+)/.test(I), j.isColor = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(I)) : this.cache.push(this.current);
        this.newNode(j);
      }), this.position++;
    }
    string() {
      let w = this.currToken, C = this.currToken[1], E = /^(\"|\')/, x = E.test(C), F = "", B;
      x && (F = C.match(E)[0], C = C.slice(1, C.length - 1)), B = new f({ value: C, source: { start: { line: w[2], column: w[3] }, end: { line: w[4], column: w[5] } }, sourceIndex: w[6], quoted: x }), B.raws.quote = F, this.newNode(B), this.position++;
    }
    word() {
      return this.splitWord();
    }
    newNode(w) {
      return this.spaces && (w.raws.before += this.spaces, this.spaces = ""), this.current.append(w);
    }
    get currToken() {
      return this.tokens[this.position];
    }
    get nextToken() {
      return this.tokens[this.position + 1];
    }
    get prevToken() {
      return this.tokens[this.position - 1];
    }
  };
}), nl = {};
qu(nl, { languages: () => L0, options: () => I0, parsers: () => Ol, printers: () => v1 });
var Hv = (e, t, r, n) => {
  if (!(e && t == null))
    return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, se = Hv, sl = "string", il = "array", ol = "cursor", Ai = "indent", Ti = "align", al = "trim", Bi = "group", kr = "fill", Yn = "if-break", ul = "indent-if-break", ll = "line-suffix", cl = "line-suffix-boundary", ir = "line", pl = "label", $i = "break-parent", hl = /* @__PURE__ */ new Set([ol, Ai, Ti, al, Bi, kr, Yn, ul, ll, cl, ir, pl, $i]);
function Uv(e) {
  if (typeof e == "string")
    return sl;
  if (Array.isArray(e))
    return il;
  if (!e)
    return;
  let { type: t } = e;
  if (hl.has(t))
    return t;
}
var dl = Uv, Vv = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function zv(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object")
    return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (dl(e))
    throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]")
    return `Unexpected doc '${r}'.`;
  let n = Vv([...hl].map((s) => `'${s}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Gv = class extends Error {
  constructor(t) {
    super(zv(t));
    at(this, "name", "InvalidDocError");
    this.doc = t;
  }
}, Yv = Gv, Jv = () => {
}, Kv = Jv;
function ve(e) {
  return { type: Ai, contents: e };
}
function fl(e, t) {
  return { type: Ti, contents: t, n: e };
}
function Se(e, t = {}) {
  return Kv(t.expandedStates), { type: Bi, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Xv(e) {
  return fl({ type: "root" }, e);
}
function dn(e) {
  return fl(-1, e);
}
function Bs(e) {
  return { type: kr, parts: e };
}
function ml(e, t = "", r = {}) {
  return { type: Yn, breakContents: e, flatContents: t, groupId: r.groupId };
}
var Oi = { type: $i }, Qv = { type: ir, hard: !0 }, ce = { type: ir }, $e = { type: ir, soft: !0 }, te = [Qv, Oi];
function kt(e, t) {
  let r = [];
  for (let n = 0; n < t.length; n++)
    n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
var Zv = (e, t, r) => {
  if (!(e && t == null))
    return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, xr = Zv, eD = (e) => {
  if (Array.isArray(e))
    return e;
  if (e.type !== kr)
    throw new Error(`Expect doc to be 'array' or '${kr}'.`);
  return e.parts;
};
function tD(e, t) {
  if (typeof e == "string")
    return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(i) {
    if (r.has(i))
      return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (dl(i)) {
      case il:
        return t(i.map(n));
      case kr:
        return t({ ...i, parts: i.parts.map(n) });
      case Yn:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case Bi: {
        let { expandedStates: a, contents: l } = i;
        return a ? (a = a.map(n), l = a[0]) : l = n(l), t({ ...i, contents: l, expandedStates: a });
      }
      case Ti:
      case Ai:
      case ul:
      case pl:
      case ll:
        return t({ ...i, contents: n(i.contents) });
      case sl:
      case ol:
      case al:
      case cl:
      case ir:
      case $i:
        return t(i);
      default:
        throw new Yv(i);
    }
  }
}
function rD(e) {
  return e.type === ir && !e.hard ? e.soft ? "" : " " : e.type === Yn ? e.flatContents : e;
}
function nD(e) {
  return tD(e, rD);
}
function sD(e) {
  return Array.isArray(e) && e.length > 0;
}
var Jn = sD, Gr = "'", Vo = '"';
function iD(e, t) {
  let r = t === !0 || t === Gr ? Gr : Vo, n = r === Gr ? Vo : Gr, s = 0, i = 0;
  for (let a of e)
    a === r ? s++ : a === n && i++;
  return s > i ? n : r;
}
var oD = iD;
function aD(e, t, r) {
  let n = t === '"' ? "'" : '"', s = se(!1, e, /\\(.)|(["'])/gs, (i, a, l) => a === n ? a : l === t ? "\\" + l : l || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(a) ? a : "\\" + a));
  return t + s + t;
}
var uD = aD;
function lD(e, t) {
  let r = e.slice(1, -1), n = t.parser === "json" || t.parser === "jsonc" || t.parser === "json5" && t.quoteProps === "preserve" && !t.singleQuote ? '"' : t.__isInHtmlAttribute ? "'" : oD(r, t.singleQuote);
  return uD(r, n, !(t.parser === "css" || t.parser === "less" || t.parser === "scss" || t.__embeddedInHtml));
}
var gl = lD, cD = class extends Error {
  constructor(t, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`);
    at(this, "name", "UnexpectedNodeError");
    this.node = t;
  }
}, pD = cD;
function hD(e) {
  return (e == null ? void 0 : e.type) === "front-matter";
}
var fn = hD, dD = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma", "spaces"]);
function vl(e, t, r) {
  if (fn(e) && e.lang === "yaml" && delete t.value, e.type === "css-comment" && r.type === "css-root" && r.nodes.length > 0 && ((r.nodes[0] === e || fn(r.nodes[0]) && r.nodes[1] === e) && (delete t.text, /^\*\s*@(?:format|prettier)\s*$/.test(e.text)) || r.type === "css-root" && xr(!1, r.nodes, -1) === e))
    return null;
  if (e.type === "value-root" && delete t.text, (e.type === "media-query" || e.type === "media-query-list" || e.type === "media-feature-expression") && delete t.value, e.type === "css-rule" && delete t.params, e.type === "selector-combinator" && (t.value = se(!1, t.value, /\s+/g, " ")), e.type === "media-feature" && (t.value = se(!1, t.value, " ", "")), (e.type === "value-word" && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.toLowerCase())) || e.type === "media-feature" || e.type === "selector-root-invalid" || e.type === "selector-pseudo") && (t.value = t.value.toLowerCase()), e.type === "css-decl" && (t.prop = t.prop.toLowerCase()), (e.type === "css-atrule" || e.type === "css-import") && (t.name = t.name.toLowerCase()), e.type === "value-number" && (t.unit = t.unit.toLowerCase()), e.type === "value-unknown" && (t.value = se(!1, t.value, /;$/g, "")), (e.type === "media-feature" || e.type === "media-keyword" || e.type === "media-type" || e.type === "media-unknown" || e.type === "media-url" || e.type === "media-value" || e.type === "selector-attribute" || e.type === "selector-string" || e.type === "selector-class" || e.type === "selector-combinator" || e.type === "value-string") && t.value && (t.value = fD(t.value)), e.type === "selector-attribute" && (t.attribute = t.attribute.trim(), t.namespace && typeof t.namespace == "string" && (t.namespace = t.namespace.trim(), t.namespace.length === 0 && (t.namespace = !0)), t.value && (t.value = se(!1, t.value.trim(), /^["']|["']$/g, ""), delete t.quoted)), (e.type === "media-value" || e.type === "media-type" || e.type === "value-number" || e.type === "selector-root-invalid" || e.type === "selector-class" || e.type === "selector-combinator" || e.type === "selector-tag") && t.value && (t.value = se(!1, t.value, /([\d+.e-]+)([a-z]*)/gi, (n, s, i) => {
    let a = Number(s);
    return Number.isNaN(a) ? n : a + i.toLowerCase();
  })), e.type === "selector-tag") {
    let n = e.value.toLowerCase();
    ["from", "to"].includes(n) && (t.value = n);
  }
  if (e.type === "css-atrule" && e.name.toLowerCase() === "supports" && delete t.value, e.type === "selector-unknown" && delete t.value, e.type === "value-comma_group") {
    let n = e.groups.findIndex((s) => s.type === "value-number" && s.unit === "...");
    n !== -1 && (t.groups[n].unit = "", t.groups.splice(n + 1, 0, { type: "value-word", value: "...", isColor: !1, isHex: !1 }));
  }
  if (e.type === "value-comma_group" && e.groups.some((n) => n.type === "value-atword" && n.value.endsWith("[") || n.type === "value-word" && n.value.startsWith("]")))
    return { type: "value-atword", value: e.groups.map((n) => n.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
}
vl.ignoredProperties = dD;
function fD(e) {
  return se(!1, se(!1, e, "'", '"'), /\\([^\da-f])/gi, "$1");
}
var mD = vl;
async function gD(e, t) {
  if (e.lang === "yaml") {
    let r = e.value.trim(), n = r ? await t(r, { parser: "yaml" }) : "";
    return Xv([e.startDelimiter, te, n, n ? te : "", e.endDelimiter]);
  }
}
var vD = gD;
function Dl(e) {
  let { node: t } = e;
  if (t.type === "front-matter")
    return async (r) => {
      let n = await vD(t, r);
      return n ? [n, te] : void 0;
    };
}
Dl.getVisitorKeys = (e) => e.type === "css-root" ? ["frontMatter"] : [];
var DD = Dl, cr = null;
function wr(e) {
  if (cr !== null && typeof cr.property) {
    let t = cr;
    return cr = wr.prototype = null, t;
  }
  return cr = wr.prototype = e ?? /* @__PURE__ */ Object.create(null), new wr();
}
var yD = 10;
for (let e = 0; e <= yD; e++)
  wr();
function wD(e) {
  return wr(e);
}
function bD(e, t = "type") {
  wD(e);
  function r(n) {
    let s = n[t], i = e[s];
    if (!Array.isArray(i))
      throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
    return i;
  }
  return r;
}
var CD = bD, ED = { "front-matter": [], "css-root": ["frontMatter", "nodes"], "css-comment": [], "css-rule": ["selector", "nodes"], "css-decl": ["value", "selector", "nodes"], "css-atrule": ["selector", "params", "value", "nodes"], "media-query-list": ["nodes"], "media-query": ["nodes"], "media-type": [], "media-feature-expression": ["nodes"], "media-feature": [], "media-colon": [], "media-value": [], "media-keyword": [], "media-url": [], "media-unknown": [], "selector-root": ["nodes"], "selector-selector": ["nodes"], "selector-comment": [], "selector-string": [], "selector-tag": [], "selector-id": [], "selector-class": [], "selector-attribute": [], "selector-combinator": ["nodes"], "selector-universal": [], "selector-pseudo": ["nodes"], "selector-nesting": [], "selector-unknown": [], "value-value": ["group"], "value-root": ["group"], "value-comment": [], "value-comma_group": ["groups"], "value-paren_group": ["open", "groups", "close"], "value-func": ["group"], "value-paren": [], "value-number": [], "value-operator": [], "value-word": [], "value-colon": [], "value-comma": [], "value-string": [], "value-atword": [], "value-unicode-range": [], "value-unknown": [] }, kD = ED, xD = CD(kD), _D = xD;
function FD(e, t) {
  let r = 0;
  for (let n = 0; n < e.line - 1; ++n)
    r = t.indexOf(`
`, r) + 1;
  return r + e.column;
}
var yl = FD;
function Li(e) {
  return (t, r, n) => {
    let s = !!(n != null && n.backwards);
    if (r === !1)
      return !1;
    let { length: i } = t, a = r;
    for (; a >= 0 && a < i; ) {
      let l = t.charAt(a);
      if (e instanceof RegExp) {
        if (!e.test(l))
          return a;
      } else if (!e.includes(l))
        return a;
      s ? a-- : a++;
    }
    return a === -1 || a === i ? a : !1;
  };
}
var wl = Li(" 	"), SD = Li(",; 	"), bl = Li(/[^\n\r]/);
function Cl(e, t) {
  var r, n, s;
  if (typeof ((n = (r = e.source) == null ? void 0 : r.start) == null ? void 0 : n.offset) == "number")
    return e.source.start.offset;
  if (typeof e.sourceIndex == "number")
    return e.sourceIndex;
  if ((s = e.source) != null && s.start)
    return yl(e.source.start, t);
  throw Object.assign(new Error("Can not locate node."), { node: e });
}
function Ni(e, t) {
  var r, n;
  if (e.type === "css-comment" && e.inline)
    return bl(t, e.source.startOffset);
  if (typeof ((n = (r = e.source) == null ? void 0 : r.end) == null ? void 0 : n.offset) == "number")
    return e.source.end.offset;
  if (e.source) {
    if (e.source.end)
      return yl(e.source.end, t);
    if (Jn(e.nodes))
      return Ni(xr(!1, e.nodes, -1), t);
  }
  return null;
}
function El(e, t) {
  e.source && (e.source.startOffset = Cl(e, t), e.source.endOffset = Ni(e, t));
  for (let r in e) {
    let n = e[r];
    r === "source" || !n || typeof n != "object" || (n.type === "value-root" || n.type === "value-unknown" ? kl(n, AD(e), n.text || n.value) : El(n, t));
  }
}
function kl(e, t, r) {
  e.source && (e.source.startOffset = Cl(e, r) + t, e.source.endOffset = Ni(e, r) + t);
  for (let n in e) {
    let s = e[n];
    n === "source" || !s || typeof s != "object" || kl(s, t, r);
  }
}
function AD(e) {
  var t;
  let r = e.source.startOffset;
  return typeof e.prop == "string" && (r += e.prop.length), e.type === "css-atrule" && typeof e.name == "string" && (r += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length), e.type !== "css-atrule" && typeof ((t = e.raws) == null ? void 0 : t.between) == "string" && (r += e.raws.between.length), r;
}
function TD(e) {
  let t = "initial", r = "initial", n, s = !1, i = [];
  for (let a = 0; a < e.length; a++) {
    let l = e[a];
    switch (t) {
      case "initial":
        if (l === "'") {
          t = "single-quotes";
          continue;
        }
        if (l === '"') {
          t = "double-quotes";
          continue;
        }
        if ((l === "u" || l === "U") && e.slice(a, a + 4).toLowerCase() === "url(") {
          t = "url", a += 3;
          continue;
        }
        if (l === "*" && e[a - 1] === "/") {
          t = "comment-block";
          continue;
        }
        if (l === "/" && e[a - 1] === "/") {
          t = "comment-inline", n = a - 1;
          continue;
        }
        continue;
      case "single-quotes":
        if (l === "'" && e[a - 1] !== "\\" && (t = r, r = "initial"), l === `
` || l === "\r")
          return e;
        continue;
      case "double-quotes":
        if (l === '"' && e[a - 1] !== "\\" && (t = r, r = "initial"), l === `
` || l === "\r")
          return e;
        continue;
      case "url":
        if (l === ")" && (t = "initial"), l === `
` || l === "\r")
          return e;
        if (l === "'") {
          t = "single-quotes", r = "url";
          continue;
        }
        if (l === '"') {
          t = "double-quotes", r = "url";
          continue;
        }
        continue;
      case "comment-block":
        l === "/" && e[a - 1] === "*" && (t = "initial");
        continue;
      case "comment-inline":
        (l === '"' || l === "'" || l === "*") && (s = !0), (l === `
` || l === "\r") && (s && i.push([n, a]), t = "initial", s = !1);
        continue;
    }
  }
  for (let [a, l] of i)
    e = e.slice(0, a) + se(!1, e.slice(a, l), /["'*]/g, " ") + e.slice(l);
  return e;
}
function ye(e) {
  var t;
  return (t = e.source) == null ? void 0 : t.startOffset;
}
function De(e) {
  var t;
  return (t = e.source) == null ? void 0 : t.endOffset;
}
var mn = Nt(H2(), 1);
function BD(e) {
  if (!e.startsWith("#!"))
    return "";
  let t = e.indexOf(`
`);
  return t === -1 ? e : e.slice(0, t);
}
var $D = BD;
function xl(e) {
  let t = $D(e);
  t && (e = e.slice(t.length + 1));
  let r = (0, mn.extract)(e), { pragmas: n, comments: s } = (0, mn.parseWithComments)(r);
  return { shebang: t, text: e, pragmas: n, comments: s };
}
function OD(e) {
  let { pragmas: t } = xl(e);
  return Object.prototype.hasOwnProperty.call(t, "prettier") || Object.prototype.hasOwnProperty.call(t, "format");
}
function LD(e) {
  let { shebang: t, text: r, pragmas: n, comments: s } = xl(e), i = (0, mn.strip)(r), a = (0, mn.print)({ pragmas: { format: "", ...n }, comments: s.trimStart() });
  return (t ? `${t}
` : "") + a + (i.startsWith(`
`) ? `
` : `

`) + i;
}
var ND = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
function PD(e) {
  let t = e.match(ND);
  if (!t)
    return { content: e };
  let { startDelimiter: r, language: n, value: s = "", endDelimiter: i } = t.groups, a = n.trim() || "yaml";
  if (r === "+++" && (a = "toml"), a !== "yaml" && r !== i)
    return { content: e };
  let [l] = t;
  return { frontMatter: { type: "front-matter", lang: a, value: s, startDelimiter: r, endDelimiter: i, raw: l.replace(/\n$/, "") }, content: se(!1, l, /[^\n]/g, " ") + e.slice(l.length) };
}
var Pi = PD;
function ID(e) {
  return OD(Pi(e).content);
}
function jD(e) {
  let { frontMatter: t, content: r } = Pi(e);
  return (t ? t.raw + `

` : "") + LD(r);
}
var RD = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
function MD(e) {
  var t, r;
  return (r = (t = e.findAncestor((n) => n.type === "css-decl")) == null ? void 0 : t.prop) == null ? void 0 : r.toLowerCase();
}
var qD = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
function WD(e) {
  return qD.has(e.toLowerCase());
}
function HD(e, t) {
  var r;
  let n = e.findAncestor((s) => s.type === "css-atrule");
  return ((r = n == null ? void 0 : n.name) == null ? void 0 : r.toLowerCase().endsWith("keyframes")) && ["from", "to"].includes(t.toLowerCase());
}
function Vt(e) {
  return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase();
}
function rn(e, t) {
  var r;
  let n = e.findAncestor((s) => s.type === "value-func");
  return ((r = n == null ? void 0 : n.value) == null ? void 0 : r.toLowerCase()) === t;
}
function UD(e) {
  var t;
  let r = e.findAncestor((s) => s.type === "css-rule"), n = (t = r == null ? void 0 : r.raws) == null ? void 0 : t.selector;
  return n && (n.startsWith(":import") || n.startsWith(":export"));
}
function nn(e, t) {
  let r = Array.isArray(t) ? t : [t], n = e.findAncestor((s) => s.type === "css-atrule");
  return n && r.includes(n.name.toLowerCase());
}
function VD(e) {
  var t;
  let { node: r } = e;
  return r.groups[0].value === "url" && r.groups.length === 2 && ((t = e.findAncestor((n) => n.type === "css-atrule")) == null ? void 0 : t.name) === "import";
}
function zD(e) {
  return e.type === "value-func" && e.value.toLowerCase() === "url";
}
function GD(e) {
  return e.type === "value-func" && e.value.toLowerCase() === "var";
}
function cs(e, t) {
  var r;
  let n = (r = e.parent) == null ? void 0 : r.nodes;
  return n && n.indexOf(t) === n.length - 1;
}
function YD(e) {
  let { selector: t } = e;
  return t ? typeof t == "string" && /^@.+:.*$/.test(t) || t.value && /^@.+:.*$/.test(t.value) : !1;
}
function JD(e) {
  return e.type === "value-word" && ["from", "through", "end"].includes(e.value);
}
function KD(e) {
  return e.type === "value-word" && ["and", "or", "not"].includes(e.value);
}
function XD(e) {
  return e.type === "value-word" && e.value === "in";
}
function $s(e) {
  return e.type === "value-operator" && e.value === "*";
}
function sn(e) {
  return e.type === "value-operator" && e.value === "/";
}
function ct(e) {
  return e.type === "value-operator" && e.value === "+";
}
function zt(e) {
  return e.type === "value-operator" && e.value === "-";
}
function QD(e) {
  return e.type === "value-operator" && e.value === "%";
}
function ps(e) {
  return $s(e) || sn(e) || ct(e) || zt(e) || QD(e);
}
function ZD(e) {
  return e.type === "value-word" && ["==", "!="].includes(e.value);
}
function e0(e) {
  return e.type === "value-word" && ["<", ">", "<=", ">="].includes(e.value);
}
function Os(e, t) {
  return t.parser === "scss" && e.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(e.name);
}
function zo(e) {
  var t;
  return ((t = e.raws) == null ? void 0 : t.params) && /^\(\s*\)$/.test(e.raws.params);
}
function hs(e) {
  return e.name.startsWith("prettier-placeholder");
}
function t0(e) {
  return e.prop.startsWith("@prettier-placeholder");
}
function r0(e, t) {
  return e.value === "$$" && e.type === "value-func" && (t == null ? void 0 : t.type) === "value-word" && !t.raws.before;
}
function n0(e) {
  var t, r;
  return ((t = e.value) == null ? void 0 : t.type) === "value-root" && ((r = e.value.group) == null ? void 0 : r.type) === "value-value" && e.prop.toLowerCase() === "composes";
}
function s0(e) {
  var t, r, n;
  return ((n = (r = (t = e.value) == null ? void 0 : t.group) == null ? void 0 : r.group) == null ? void 0 : n.type) === "value-paren_group" && e.value.group.group.open !== null && e.value.group.group.close !== null;
}
function Ht(e) {
  var t;
  return ((t = e.raws) == null ? void 0 : t.before) === "";
}
function Ii(e) {
  var t, r;
  return e.type === "value-comma_group" && ((r = (t = e.groups) == null ? void 0 : t[1]) == null ? void 0 : r.type) === "value-colon";
}
function ds(e) {
  var t;
  return e.type === "value-paren_group" && ((t = e.groups) == null ? void 0 : t[0]) && Ii(e.groups[0]);
}
function _l(e, t) {
  var r;
  if (t.parser !== "scss")
    return !1;
  let { node: n } = e;
  if (n.groups.length === 0)
    return !1;
  let s = e.grandparent;
  if (!ds(n) && !(s && ds(s)))
    return !1;
  let i = e.findAncestor((a) => a.type === "css-decl");
  return !!((r = i == null ? void 0 : i.prop) != null && r.startsWith("$") || ds(s) || s.type === "value-func");
}
function Go(e) {
  return e.type === "value-comment" && e.inline;
}
function fs(e) {
  return e.type === "value-word" && e.value === "#";
}
function Yo(e) {
  return e.type === "value-word" && e.value === "{";
}
function ms(e) {
  return e.type === "value-word" && e.value === "}";
}
function Yr(e) {
  return ["value-word", "value-atword"].includes(e.type);
}
function Ls(e) {
  return (e == null ? void 0 : e.type) === "value-colon";
}
function i0(e, t) {
  if (!Ii(t))
    return !1;
  let { groups: r } = t, n = r.indexOf(e);
  return n === -1 ? !1 : Ls(r[n + 1]);
}
function o0(e) {
  return e.value && ["not", "and", "or"].includes(e.value.toLowerCase());
}
function a0(e) {
  return e.type !== "value-func" ? !1 : RD.has(e.value.toLowerCase());
}
function pr(e) {
  return /\/\//.test(e.split(/[\n\r]/).pop());
}
function Jr(e) {
  return (e == null ? void 0 : e.type) === "value-atword" && e.value.startsWith("prettier-placeholder-");
}
function u0(e, t) {
  var r, n;
  if (((r = e.open) == null ? void 0 : r.value) !== "(" || ((n = e.close) == null ? void 0 : n.value) !== ")" || e.groups.some((s) => s.type !== "value-comma_group"))
    return !1;
  if (t.type === "value-comma_group") {
    let s = t.groups.indexOf(e) - 1, i = t.groups[s];
    if ((i == null ? void 0 : i.type) === "value-word" && i.value === "with")
      return !0;
  }
  return !1;
}
function Kr(e) {
  var t, r;
  return e.type === "value-paren_group" && ((t = e.open) == null ? void 0 : t.value) === "(" && ((r = e.close) == null ? void 0 : r.value) === ")";
}
function l0(e, t, r) {
  var n;
  let { node: s } = e, i = e.parent, a = e.grandparent, l = MD(e), p = l && i.type === "value-value" && (l === "grid" || l.startsWith("grid-template")), c = e.findAncestor((y) => y.type === "css-atrule"), u = c && Os(c, t), o = s.groups.some((y) => Go(y)), f = e.map(r, "groups"), h = [], m = rn(e, "url"), d = !1, D = !1;
  for (let y = 0; y < s.groups.length; ++y) {
    h.push(f[y]);
    let g = s.groups[y - 1], v = s.groups[y], b = s.groups[y + 1], w = s.groups[y + 2];
    if (m) {
      (b && ct(b) || ct(v)) && h.push(" ");
      continue;
    }
    if (nn(e, "forward") && v.type === "value-word" && v.value && g !== void 0 && g.type === "value-word" && g.value === "as" && b.type === "value-operator" && b.value === "*" || !b || v.type === "value-word" && v.value.endsWith("-") && Jr(b))
      continue;
    if (v.type === "value-string" && v.quoted) {
      let N = v.value.lastIndexOf("#{"), M = v.value.lastIndexOf("}");
      N !== -1 && M !== -1 ? d = N > M : N !== -1 ? d = !0 : M !== -1 && (d = !1);
    }
    if (d || Ls(v) || Ls(b) || v.type === "value-atword" && (v.value === "" || v.value.endsWith("[")) || b.type === "value-word" && b.value.startsWith("]") || v.value === "~" || v.type !== "value-string" && v.value && v.value.includes("\\") && b && b.type !== "value-comment" || g != null && g.value && g.value.indexOf("\\") === g.value.length - 1 && v.type === "value-operator" && v.value === "/" || v.value === "\\" || r0(v, b) || fs(v) || Yo(v) || ms(b) || Yo(b) && Ht(b) || ms(v) && Ht(b) || v.value === "--" && fs(b))
      continue;
    let C = ps(v), E = ps(b);
    if ((C && fs(b) || E && ms(v)) && Ht(b) || !g && sn(v) || rn(e, "calc") && (ct(v) || ct(b) || zt(v) || zt(b)) && Ht(b))
      continue;
    let x = (ct(v) || zt(v)) && y === 0 && (b.type === "value-number" || b.isHex) && a && a0(a) && !Ht(b), F = (w == null ? void 0 : w.type) === "value-func" || w && Yr(w) || v.type === "value-func" || Yr(v), B = b.type === "value-func" || Yr(b) || (g == null ? void 0 : g.type) === "value-func" || g && Yr(g);
    if (t.parser === "scss" && C && v.value === "-" && b.type === "value-func" && De(v) !== ye(b)) {
      h.push(" ");
      continue;
    }
    if (!(!($s(b) || $s(v)) && !rn(e, "calc") && !x && (sn(b) && !F || sn(v) && !B || ct(b) && !F || ct(v) && !B || zt(b) || zt(v)) && (Ht(b) || C && (!g || g && ps(g)))) && !((t.parser === "scss" || t.parser === "less") && C && v.value === "-" && Kr(b) && De(v) === ye(b.open) && b.open.value === "(")) {
      if (Go(v)) {
        if (i.type === "value-paren_group") {
          h.push(dn(te));
          continue;
        }
        h.push(te);
        continue;
      }
      if (u && (ZD(b) || e0(b) || KD(b) || XD(v) || JD(v))) {
        h.push(" ");
        continue;
      }
      if (c && c.name.toLowerCase() === "namespace") {
        h.push(" ");
        continue;
      }
      if (p) {
        v.source && b.source && v.source.start.line !== b.source.start.line ? (h.push(te), D = !0) : h.push(" ");
        continue;
      }
      if (E) {
        h.push(" ");
        continue;
      }
      if ((b == null ? void 0 : b.value) !== "..." && !(Jr(v) && Jr(b) && De(v) === ye(b))) {
        if (Jr(v) && Kr(b) && De(v) === ye(b.open)) {
          h.push($e);
          continue;
        }
        if (v.value === "with" && Kr(b)) {
          h.push(" ");
          continue;
        }
        (n = v.value) != null && n.endsWith("#") && b.value === "{" && Kr(b.group) || h.push(ce);
      }
    }
  }
  return o && h.push(Oi), D && h.unshift(te), u ? Se(ve(h)) : VD(e) ? Se(Bs(h)) : Se(ve(Bs(h)));
}
var c0 = l0;
function p0(e) {
  return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
}
var h0 = p0, Jo = /* @__PURE__ */ new Map([["em", "em"], ["rem", "rem"], ["ex", "ex"], ["rex", "rex"], ["cap", "cap"], ["rcap", "rcap"], ["ch", "ch"], ["rch", "rch"], ["ic", "ic"], ["ric", "ric"], ["lh", "lh"], ["rlh", "rlh"], ["vw", "vw"], ["svw", "svw"], ["lvw", "lvw"], ["dvw", "dvw"], ["vh", "vh"], ["svh", "svh"], ["lvh", "lvh"], ["dvh", "dvh"], ["vi", "vi"], ["svi", "svi"], ["lvi", "lvi"], ["dvi", "dvi"], ["vb", "vb"], ["svb", "svb"], ["lvb", "lvb"], ["dvb", "dvb"], ["vmin", "vmin"], ["svmin", "svmin"], ["lvmin", "lvmin"], ["dvmin", "dvmin"], ["vmax", "vmax"], ["svmax", "svmax"], ["lvmax", "lvmax"], ["dvmax", "dvmax"], ["cm", "cm"], ["mm", "mm"], ["q", "Q"], ["in", "in"], ["pt", "pt"], ["pc", "pc"], ["px", "px"], ["deg", "deg"], ["grad", "grad"], ["rad", "rad"], ["turn", "turn"], ["s", "s"], ["ms", "ms"], ["hz", "Hz"], ["khz", "kHz"], ["dpi", "dpi"], ["dpcm", "dpcm"], ["dppx", "dppx"], ["x", "x"], ["cqw", "cqw"], ["cqh", "cqh"], ["cqi", "cqi"], ["cqb", "cqb"], ["cqmin", "cqmin"], ["cqmax", "cqmax"]]);
function d0(e) {
  let t = e.toLowerCase();
  return Jo.has(t) ? Jo.get(t) : e;
}
var Fl = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, f0 = /(?:\d*\.\d+|\d+\.?)(?:e[+-]?\d+)?/gi, m0 = /[a-z]+/gi, g0 = /[$@]?[_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/gi, v0 = new RegExp(Fl.source + `|(${g0.source})?(${f0.source})(${m0.source})?`, "gi");
function Re(e, t) {
  return se(!1, e, Fl, (r) => gl(r, t));
}
function D0(e, t) {
  let r = t.singleQuote ? "'" : '"';
  return e.includes('"') || e.includes("'") ? e : r + e + r;
}
function Ut(e) {
  return se(!1, e, v0, (t, r, n, s, i) => !n && s ? Sl(s) + Vt(i || "") : t);
}
function Sl(e) {
  return h0(e).replace(/\.0(?=$|e)/, "");
}
function y0(e) {
  return e.trailingComma === "es5" || e.trailingComma === "all";
}
function w0(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === !1)
    return !1;
  let s = e.charAt(t);
  if (n) {
    if (e.charAt(t - 1) === "\r" && s === `
`)
      return t - 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029")
      return t - 1;
  } else {
    if (s === "\r" && e.charAt(t + 1) === `
`)
      return t + 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029")
      return t + 1;
  }
  return t;
}
var Al = w0;
function b0(e, t, r = {}) {
  let n = wl(e, r.backwards ? t - 1 : t, r), s = Al(e, n, r);
  return n !== s;
}
var Tl = b0;
function C0(e, t) {
  if (t === !1)
    return !1;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e.length; ++r)
      if (e.charAt(r) === "*" && e.charAt(r + 1) === "/")
        return r + 2;
  }
  return t;
}
var E0 = C0;
function k0(e, t) {
  return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? bl(e, t) : t;
}
var x0 = k0;
function _0(e, t) {
  let r = null, n = t;
  for (; n !== r; )
    r = n, n = SD(e, n), n = E0(e, n), n = wl(e, n);
  return n = x0(e, n), n = Al(e, n), n !== !1 && Tl(e, n);
}
var Bl = _0;
function F0({ node: e, parent: t }, r) {
  return !!(e.source && r.originalText.slice(ye(e), ye(t.close)).trimEnd().endsWith(","));
}
function S0(e, t) {
  return GD(e.grandparent) && F0(e, t) ? "," : e.node.type !== "value-comment" && !(e.node.type === "value-comma_group" && e.node.groups.every((r) => r.type === "value-comment")) && y0(t) && e.callParent(() => _l(e, t)) ? ml(",") : "";
}
function A0(e, t, r) {
  let { node: n, parent: s } = e, i = e.map(({ node: h }) => typeof h == "string" ? h : r(), "groups");
  if (s && zD(s) && (n.groups.length === 1 || n.groups.length > 0 && n.groups[0].type === "value-comma_group" && n.groups[0].groups.length > 0 && n.groups[0].groups[0].type === "value-word" && n.groups[0].groups[0].value.startsWith("data:")))
    return [n.open ? r("open") : "", kt(",", i), n.close ? r("close") : ""];
  if (!n.open) {
    let h = $l(e), m = kt([",", h ? te : ce], i);
    return ve(h ? [te, m] : Se(Bs(m)));
  }
  let a = e.map(({ node: h, isLast: m, index: d }) => {
    var D;
    let y = i[d];
    if (Ii(h) && h.type === "value-comma_group" && h.groups && h.groups[0].type !== "value-paren_group" && ((D = h.groups[2]) == null ? void 0 : D.type) === "value-paren_group") {
      let v = eD(y.contents.contents);
      v[1] = Se(v[1]), y = Se(dn(y));
    }
    let g = [y, m ? S0(e, t) : ","];
    if (!m && h.type === "value-comma_group" && Jn(h.groups)) {
      let v = xr(!1, h.groups, -1);
      !v.source && v.close && (v = v.close), v.source && Bl(t.originalText, De(v)) && g.push(te);
    }
    return g;
  }, "groups"), l = i0(n, s), p = u0(n, s), c = _l(e, t), u = p || c && !l, o = p || l, f = Se([n.open ? r("open") : "", ve([$e, kt(ce, a)]), $e, n.close ? r("close") : ""], { shouldBreak: u });
  return o ? dn(f) : f;
}
function $l(e) {
  return e.match((t) => t.type === "value-paren_group" && !t.open && t.groups.some((r) => r.type === "value-comma_group"), (t, r) => r === "group" && t.type === "value-value", (t, r) => r === "group" && t.type === "value-root", (t, r) => r === "value" && (t.type === "css-decl" && !t.prop.startsWith("--") || t.type === "css-atrule" && t.variable));
}
function T0(e, t, r) {
  let n = [];
  return e.each(() => {
    let { node: s, previous: i } = e;
    if ((i == null ? void 0 : i.type) === "css-comment" && i.text.trim() === "prettier-ignore" ? n.push(t.originalText.slice(ye(s), De(s))) : n.push(r()), e.isLast)
      return;
    let { next: a } = e;
    a.type === "css-comment" && !Tl(t.originalText, ye(a), { backwards: !0 }) && !fn(s) || a.type === "css-atrule" && a.name === "else" && s.type !== "css-comment" ? n.push(" ") : (n.push(t.__isHTMLStyleAttribute ? ce : te), Bl(t.originalText, De(s)) && !fn(s) && n.push(te));
  }, "nodes"), n;
}
var hr = T0;
function B0(e, t, r) {
  var n, s, i, a, l, p;
  let { node: c } = e;
  switch (c.type) {
    case "front-matter":
      return [c.raw, te];
    case "css-root": {
      let u = hr(e, t, r), o = c.raws.after.trim();
      return o.startsWith(";") && (o = o.slice(1).trim()), [c.frontMatter ? [r("frontMatter"), te] : "", u, o ? ` ${o}` : "", c.nodes.length > 0 ? te : ""];
    }
    case "css-comment": {
      let u = c.inline || c.raws.inline, o = t.originalText.slice(ye(c), De(c));
      return u ? o.trimEnd() : o;
    }
    case "css-rule":
      return [r("selector"), c.important ? " !important" : "", c.nodes ? [((n = c.selector) == null ? void 0 : n.type) === "selector-unknown" && pr(c.selector.value) ? ce : c.selector ? " " : "", "{", c.nodes.length > 0 ? ve([te, hr(e, t, r)]) : "", te, "}", YD(c) ? ";" : ""] : ";"];
    case "css-decl": {
      let u = e.parent, { between: o } = c.raws, f = o.trim(), h = f === ":", m = typeof c.value == "string" && /^ *$/.test(c.value), d = typeof c.value == "string" ? c.value : r("value");
      return d = n0(c) ? nD(d) : d, !h && pr(f) && !((i = (s = c.value) == null ? void 0 : s.group) != null && i.group && e.call(() => $l(e), "value", "group", "group")) && (d = ve([te, dn(d)])), [se(!1, c.raws.before, /[\s;]/g, ""), u.type === "css-atrule" && u.variable || UD(e) ? c.prop : Vt(c.prop), f.startsWith("//") ? " " : "", f, c.extend || m ? "" : " ", t.parser === "less" && c.extend && c.selector ? ["extend(", r("selector"), ")"] : "", d, c.raws.important ? c.raws.important.replace(/\s*!\s*important/i, " !important") : c.important ? " !important" : "", c.raws.scssDefault ? c.raws.scssDefault.replace(/\s*!default/i, " !default") : c.scssDefault ? " !default" : "", c.raws.scssGlobal ? c.raws.scssGlobal.replace(/\s*!global/i, " !global") : c.scssGlobal ? " !global" : "", c.nodes ? [" {", ve([$e, hr(e, t, r)]), $e, "}"] : t0(c) && !u.raws.semicolon && t.originalText[De(c) - 1] !== ";" ? "" : t.__isHTMLStyleAttribute && cs(e, c) ? ml(";") : ";"];
    }
    case "css-atrule": {
      let u = e.parent, o = hs(c) && !u.raws.semicolon && t.originalText[De(c) - 1] !== ";";
      if (t.parser === "less") {
        if (c.mixin)
          return [r("selector"), c.important ? " !important" : "", o ? "" : ";"];
        if (c.function)
          return [c.name, typeof c.params == "string" ? c.params : r("params"), o ? "" : ";"];
        if (c.variable)
          return ["@", c.name, ": ", c.value ? r("value") : "", c.raws.between.trim() ? c.raws.between.trim() + " " : "", c.nodes ? ["{", ve([c.nodes.length > 0 ? $e : "", hr(e, t, r)]), $e, "}"] : "", o ? "" : ";"];
      }
      let f = c.name === "import" && ((a = c.params) == null ? void 0 : a.type) === "value-unknown" && c.params.value.endsWith(";");
      return ["@", zo(c) || c.name.endsWith(":") || hs(c) ? c.name : Vt(c.name), c.params ? [zo(c) ? "" : hs(c) ? c.raws.afterName === "" ? "" : c.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(c.raws.afterName) ? [te, te] : /^\s*\n/.test(c.raws.afterName) ? te : " " : " ", typeof c.params == "string" ? c.params : r("params")] : "", c.selector ? ve([" ", r("selector")]) : "", c.value ? Se([" ", r("value"), Os(c, t) ? s0(c) ? " " : ce : ""]) : c.name === "else" ? " " : "", c.nodes ? [Os(c, t) ? "" : c.selector && !c.selector.nodes && typeof c.selector.value == "string" && pr(c.selector.value) || !c.selector && typeof c.params == "string" && pr(c.params) ? ce : " ", "{", ve([c.nodes.length > 0 ? $e : "", hr(e, t, r)]), $e, "}"] : o || f ? "" : ";"];
    }
    case "media-query-list": {
      let u = [];
      return e.each(({ node: o }) => {
        o.type === "media-query" && o.value === "" || u.push(r());
      }, "nodes"), Se(ve(kt(ce, u)));
    }
    case "media-query":
      return [kt(" ", e.map(r, "nodes")), cs(e, c) ? "" : ","];
    case "media-type":
      return Ut(Re(c.value, t));
    case "media-feature-expression":
      return c.nodes ? ["(", ...e.map(r, "nodes"), ")"] : c.value;
    case "media-feature":
      return Vt(Re(se(!1, c.value, / +/g, " "), t));
    case "media-colon":
      return [c.value, " "];
    case "media-value":
      return Ut(Re(c.value, t));
    case "media-keyword":
      return Re(c.value, t);
    case "media-url":
      return Re(se(!1, se(!1, c.value, /^url\(\s+/gi, "url("), /\s+\)$/g, ")"), t);
    case "media-unknown":
      return c.value;
    case "selector-root":
      return Se([nn(e, "custom-selector") ? [e.findAncestor((u) => u.type === "css-atrule").customSelector, ce] : "", kt([",", nn(e, ["extend", "custom-selector", "nest"]) ? ce : te], e.map(r, "nodes"))]);
    case "selector-selector":
      return Se(ve(e.map(r, "nodes")));
    case "selector-comment":
      return c.value;
    case "selector-string":
      return Re(c.value, t);
    case "selector-tag":
      return [c.namespace ? [c.namespace === !0 ? "" : c.namespace.trim(), "|"] : "", ((l = e.previous) == null ? void 0 : l.type) === "selector-nesting" ? c.value : Ut(HD(e, c.value) ? c.value.toLowerCase() : c.value)];
    case "selector-id":
      return ["#", c.value];
    case "selector-class":
      return [".", Ut(Re(c.value, t))];
    case "selector-attribute":
      return ["[", c.namespace ? [c.namespace === !0 ? "" : c.namespace.trim(), "|"] : "", c.attribute.trim(), c.operator ?? "", c.value ? D0(Re(c.value.trim(), t), t) : "", c.insensitive ? " i" : "", "]"];
    case "selector-combinator": {
      if (c.value === "+" || c.value === ">" || c.value === "~" || c.value === ">>>") {
        let f = e.parent;
        return [f.type === "selector-selector" && f.nodes[0] === c ? "" : ce, c.value, cs(e, c) ? "" : " "];
      }
      let u = c.value.trim().startsWith("(") ? ce : "", o = Ut(Re(c.value.trim(), t)) || ce;
      return [u, o];
    }
    case "selector-universal":
      return [c.namespace ? [c.namespace === !0 ? "" : c.namespace.trim(), "|"] : "", c.value];
    case "selector-pseudo":
      return [Vt(c.value), Jn(c.nodes) ? Se(["(", ve([$e, kt([",", ce], e.map(r, "nodes"))]), $e, ")"]) : ""];
    case "selector-nesting":
      return c.value;
    case "selector-unknown": {
      let u = e.findAncestor((h) => h.type === "css-rule");
      if (u != null && u.isSCSSNesterProperty)
        return Ut(Re(Vt(c.value), t));
      let o = e.parent;
      if ((p = o.raws) != null && p.selector) {
        let h = ye(o), m = h + o.raws.selector.length;
        return t.originalText.slice(h, m).trim();
      }
      let f = e.grandparent;
      if (o.type === "value-paren_group" && (f == null ? void 0 : f.type) === "value-func" && f.value === "selector") {
        let h = De(o.open) + 1, m = ye(o.close), d = t.originalText.slice(h, m).trim();
        return pr(d) ? [Oi, d] : d;
      }
      return c.value;
    }
    case "value-value":
    case "value-root":
      return r("group");
    case "value-comment":
      return t.originalText.slice(ye(c), De(c));
    case "value-comma_group":
      return c0(e, t, r);
    case "value-paren_group":
      return A0(e, t, r);
    case "value-func":
      return [c.value, nn(e, "supports") && o0(c) ? " " : "", r("group")];
    case "value-paren":
      return c.value;
    case "value-number":
      return [Sl(c.value), d0(c.unit)];
    case "value-operator":
      return c.value;
    case "value-word":
      return c.isColor && c.isHex || WD(c.value) ? c.value.toLowerCase() : c.value;
    case "value-colon": {
      let { previous: u } = e;
      return [c.value, typeof (u == null ? void 0 : u.value) == "string" && u.value.endsWith("\\") || rn(e, "url") ? "" : ce];
    }
    case "value-string":
      return gl(c.raws.quote + c.value + c.raws.quote, t);
    case "value-atword":
      return ["@", c.value];
    case "value-unicode-range":
      return c.value;
    case "value-unknown":
      return c.value;
    case "value-comma":
    default:
      throw new pD(c, "PostCSS");
  }
}
var $0 = { print: B0, embed: DD, insertPragma: jD, massageAstNode: mD, getVisitorKeys: _D }, O0 = $0, L0 = [{ linguistLanguageId: 50, name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css", ".wxss"], parsers: ["css"], vscodeLanguageIds: ["css"] }, { linguistLanguageId: 262764437, name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", parsers: ["css"], vscodeLanguageIds: ["postcss"] }, { linguistLanguageId: 198, name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", parsers: ["less"], vscodeLanguageIds: ["less"] }, { linguistLanguageId: 329, name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], parsers: ["scss"], vscodeLanguageIds: ["scss"] }], N0 = { bracketSpacing: { category: "Common", type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." } }, P0 = { singleQuote: N0.singleQuote }, I0 = P0, Ol = {};
qu(Ol, { css: () => f1, less: () => m1, scss: () => g1 });
var j0 = Nt(Gn(), 1), R0 = Nt(ev(), 1), M0 = Nt(av(), 1);
function q0(e, t) {
  let r = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
var W0 = q0, H0 = Nt(lv(), 1);
function Rr(e, t, r) {
  if (e && typeof e == "object") {
    delete e.parent;
    for (let n in e)
      Rr(e[n], t, r), n === "type" && typeof e[n] == "string" && !e[n].startsWith(t) && (!r || !r.test(e[n])) && (e[n] = t + e[n]);
  }
  return e;
}
function Ll(e) {
  if (e && typeof e == "object") {
    delete e.parent;
    for (let t in e)
      Ll(e[t]);
    !Array.isArray(e) && e.value && !e.type && (e.type = "unknown");
  }
  return e;
}
var U0 = H0.default.default;
function V0(e) {
  let t;
  try {
    t = U0(e);
  } catch {
    return { type: "selector-unknown", value: e };
  }
  return Rr(Ll(t), "media-");
}
var z0 = V0, G0 = Nt(xv(), 1);
function Y0(e) {
  if (/\/\/|\/\*/.test(e))
    return { type: "selector-unknown", value: e.trim() };
  let t;
  try {
    new G0.default((r) => {
      t = r;
    }).process(e);
  } catch {
    return { type: "selector-unknown", value: e };
  }
  return Rr(t, "selector-");
}
var bt = Y0, J0 = Nt(Wv(), 1), K0 = (e) => {
  for (; e.parent; )
    e = e.parent;
  return e;
}, Nl = K0;
function X0(e) {
  return Nl(e).text.slice(e.group.open.sourceIndex + 1, e.group.close.sourceIndex).trim();
}
var Q0 = X0;
function Z0(e) {
  if (Jn(e)) {
    for (let t = e.length - 1; t > 0; t--)
      if (e[t].type === "word" && e[t].value === "{" && e[t - 1].type === "word" && e[t - 1].value.endsWith("#"))
        return !0;
  }
  return !1;
}
var e1 = Z0;
function t1(e) {
  return e.some((t) => t.type === "string" || t.type === "func" && !t.value.endsWith("\\"));
}
var r1 = t1;
function n1(e, t) {
  return !!(t.parser === "scss" && (e == null ? void 0 : e.type) === "word" && e.value.startsWith("$"));
}
var s1 = n1;
function i1(e, t) {
  var r;
  let { nodes: n } = e, s = { open: null, close: null, groups: [], type: "paren_group" }, i = [s], a = s, l = { groups: [], type: "comma_group" }, p = [l];
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (t.parser === "scss" && u.type === "number" && u.unit === ".." && u.value.endsWith(".") && (u.value = u.value.slice(0, -1), u.unit = "..."), u.type === "func" && u.value === "selector" && (u.group.groups = [bt(Nl(e).text.slice(u.group.open.sourceIndex + 1, u.group.close.sourceIndex))]), u.type === "func" && u.value === "url") {
      let o = ((r = u.group) == null ? void 0 : r.groups) ?? [], f = [];
      for (let h = 0; h < o.length; h++) {
        let m = o[h];
        m.type === "comma_group" ? f = [...f, ...m.groups] : f.push(m);
      }
      (e1(f) || !r1(f) && !s1(f[0], t)) && (u.group.groups = [Q0(u)]);
    }
    if (u.type === "paren" && u.value === "(")
      s = { open: u, close: null, groups: [], type: "paren_group" }, i.push(s), l = { groups: [], type: "comma_group" }, p.push(l);
    else if (u.type === "paren" && u.value === ")") {
      if (l.groups.length > 0 && s.groups.push(l), s.close = u, p.length === 1)
        throw new Error("Unbalanced parenthesis");
      p.pop(), l = xr(!1, p, -1), l.groups.push(s), i.pop(), s = xr(!1, i, -1);
    } else
      u.type === "comma" ? (s.groups.push(l), l = { groups: [], type: "comma_group" }, p[p.length - 1] = l) : l.groups.push(u);
  }
  return l.groups.length > 0 && s.groups.push(l), a;
}
function Ns(e) {
  return e.type === "paren_group" && !e.open && !e.close && e.groups.length === 1 || e.type === "comma_group" && e.groups.length === 1 ? Ns(e.groups[0]) : e.type === "paren_group" || e.type === "comma_group" ? { ...e, groups: e.groups.map(Ns) } : e;
}
function Pl(e, t) {
  if (e && typeof e == "object")
    for (let r in e)
      r !== "parent" && (Pl(e[r], t), r === "nodes" && (e.group = Ns(i1(e, t)), delete e[r]));
  return e;
}
function o1(e, t) {
  if (t.parser === "less" && e.startsWith("~`"))
    return { type: "value-unknown", value: e };
  let r = null;
  try {
    r = new J0.default(e, { loose: !0 }).parse();
  } catch {
    return { type: "value-unknown", value: e };
  }
  r.text = e;
  let n = Pl(r, t);
  return Rr(n, "value-", /^selector-/);
}
var yt = o1, a1 = /* @__PURE__ */ new Set(["import", "use", "forward"]);
function u1(e) {
  return a1.has(e);
}
var l1 = u1;
function c1(e, t) {
  return t.parser !== "scss" || !e.selector ? !1 : e.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*\n/, "").trim().endsWith(":");
}
var p1 = c1, h1 = /(\s*)(!default).*$/, d1 = /(\s*)(!global).*$/;
function Il(e, t) {
  var r, n;
  if (e && typeof e == "object") {
    delete e.parent;
    for (let l in e)
      Il(e[l], t);
    if (!e.type)
      return e;
    if (e.raws ?? (e.raws = {}), e.type === "css-decl" && typeof e.prop == "string" && e.prop.startsWith("--") && typeof e.value == "string" && e.value.startsWith("{")) {
      let l;
      if (e.value.trimEnd().endsWith("}")) {
        let p = t.originalText.slice(0, e.source.start.offset), c = "a".repeat(e.prop.length) + t.originalText.slice(e.source.start.offset + e.prop.length, e.source.end.offset), u = se(!1, p, /[^\n]/g, " ") + c, o;
        t.parser === "scss" ? o = Ml : t.parser === "less" ? o = Rl : o = jl;
        let f;
        try {
          f = o(u, { ...t });
        } catch {
        }
        ((r = f == null ? void 0 : f.nodes) == null ? void 0 : r.length) === 1 && f.nodes[0].type === "css-rule" && (l = f.nodes[0].nodes);
      }
      return l ? e.value = { type: "css-rule", nodes: l } : e.value = { type: "value-unknown", value: e.raws.value.raw }, e;
    }
    let s = "";
    typeof e.selector == "string" && (s = e.raws.selector ? e.raws.selector.scss ?? e.raws.selector.raw : e.selector, e.raws.between && e.raws.between.trim().length > 0 && (s += e.raws.between), e.raws.selector = s);
    let i = "";
    typeof e.value == "string" && (i = e.raws.value ? e.raws.value.scss ?? e.raws.value.raw : e.value, i = i.trim(), e.raws.value = i);
    let a = "";
    if (typeof e.params == "string" && (a = e.raws.params ? e.raws.params.scss ?? e.raws.params.raw : e.params, e.raws.afterName && e.raws.afterName.trim().length > 0 && (a = e.raws.afterName + a), e.raws.between && e.raws.between.trim().length > 0 && (a = a + e.raws.between), a = a.trim(), e.raws.params = a), s.trim().length > 0)
      return s.startsWith("@") && s.endsWith(":") ? e : e.mixin ? (e.selector = yt(s, t), e) : (p1(e, t) && (e.isSCSSNesterProperty = !0), e.selector = bt(s), e);
    if (i.length > 0) {
      let l = i.match(h1);
      l && (i = i.slice(0, l.index), e.scssDefault = !0, l[0].trim() !== "!default" && (e.raws.scssDefault = l[0]));
      let p = i.match(d1);
      if (p && (i = i.slice(0, p.index), e.scssGlobal = !0, p[0].trim() !== "!global" && (e.raws.scssGlobal = p[0])), i.startsWith("progid:"))
        return { type: "value-unknown", value: i };
      e.value = yt(i, t);
    }
    if (t.parser === "less" && e.type === "css-decl" && i.startsWith("extend(") && (e.extend || (e.extend = e.raws.between === ":"), e.extend && !e.selector && (delete e.value, e.selector = bt(i.slice(7, -1)))), e.type === "css-atrule") {
      if (t.parser === "less") {
        if (e.mixin) {
          let l = e.raws.identifier + e.name + e.raws.afterName + e.raws.params;
          return e.selector = bt(l), delete e.params, e;
        }
        if (e.function)
          return e;
      }
      if (t.parser === "css" && e.name === "custom-selector") {
        let l = e.params.match(/:--\S+\s+/)[0].trim();
        return e.customSelector = l, e.selector = bt(e.params.slice(l.length).trim()), delete e.params, e;
      }
      if (t.parser === "less") {
        if (e.name.includes(":") && !e.params) {
          e.variable = !0;
          let l = e.name.split(":");
          e.name = l[0], e.value = yt(l.slice(1).join(":"), t);
        }
        if (!["page", "nest", "keyframes"].includes(e.name) && ((n = e.params) == null ? void 0 : n[0]) === ":") {
          e.variable = !0;
          let l = e.params.slice(1);
          l && (e.value = yt(l, t)), e.raws.afterName += ":";
        }
        if (e.variable)
          return delete e.params, e.value || delete e.value, e;
      }
    }
    if (e.type === "css-atrule" && a.length > 0) {
      let { name: l } = e, p = e.name.toLowerCase();
      return l === "warn" || l === "error" ? (e.params = { type: "media-unknown", value: a }, e) : l === "extend" || l === "nest" ? (e.selector = bt(a), delete e.params, e) : l === "at-root" ? (/^\(\s*(?:without|with)\s*:.+\)$/s.test(a) ? e.params = yt(a, t) : (e.selector = bt(a), delete e.params), e) : l1(p) ? (e.import = !0, delete e.filename, e.params = yt(a, t), e) : ["namespace", "supports", "if", "else", "for", "each", "while", "debug", "mixin", "include", "function", "return", "define-mixin", "add-mixin"].includes(l) ? (a = a.replace(/(\$\S+?)(\s+)?\.{3}/, "$1...$2"), a = a.replace(/^(?!if)(\S+)(\s+)\(/, "$1($2"), e.value = yt(a, t), delete e.params, e) : ["media", "custom-media"].includes(p) ? a.includes("#{") ? { type: "media-unknown", value: a } : (e.params = z0(a), e) : (e.params = a, e);
    }
  }
  return e;
}
function ji(e, t, r) {
  let n = Pi(t), { frontMatter: s } = n;
  t = n.content;
  let i;
  try {
    i = e(t, { map: !1 });
  } catch (a) {
    let { name: l, reason: p, line: c, column: u } = a;
    throw typeof c != "number" ? a : W0(`${l}: ${p}`, { loc: { start: { line: c, column: u } }, cause: a });
  }
  return r.originalText = t, i = Il(Rr(i, "css-"), r), El(i, t), s && (s.source = { startOffset: 0, endOffset: s.raw.length }, i.frontMatter = s), i;
}
function jl(e, t = {}) {
  return ji(j0.default.default, e, t);
}
function Rl(e, t = {}) {
  return ji((r) => R0.default.parse(TD(r)), e, t);
}
function Ml(e, t = {}) {
  return ji(M0.default, e, t);
}
var Ri = { astFormat: "postcss", hasPragma: ID, locStart: ye, locEnd: De }, f1 = { ...Ri, parse: jl }, m1 = { ...Ri, parse: Rl }, g1 = { ...Ri, parse: Ml }, v1 = { postcss: O0 }, D1 = nl;
const ty = async (e, t) => t !== "html" && t !== "css" ? e : await Rd.format(e, {
  parser: t,
  plugins: [D1, P2],
  tabWidth: 2,
  htmlWhitespaceSensitivity: "ignore"
}), Ko = {
  html: wc,
  js: xc,
  json: Fc
}, y1 = (e) => e ? Ko[e == null ? void 0 : e.language] ? Ko[e == null ? void 0 : e.language] : () => /* @__PURE__ */ A.jsxs("div", { children: [
  "Cannot preview files of type ",
  e == null ? void 0 : e.language
] }) : () => "", w1 = () => {
  const {
    project: { files: e },
    config: { previewFileTypes: t }
  } = Ne(), [r, n] = gn(
    Object.values(e).find((a) => a.name === "index.html" && !a.folderId)
  ), s = Object.values(e).find(
    (a) => a.active && Mr(a.language)
  );
  on(() => {
    Mr(s == null ? void 0 : s.language, t) && n(s);
  }, [s]), on(() => {
    r && !e[r.id] && n(
      Object.values(e).find(
        (a) => Mr(a.language, t)
      )
    );
  }, [r, e]);
  const i = y1(r);
  return /* @__PURE__ */ A.jsxs("div", { className: "right-pane", children: [
    /* @__PURE__ */ A.jsx(
      "select",
      {
        onChange: (a) => {
          const l = Object.values(e).find(
            (p) => p.id === a.target.value
          );
          n(l);
        },
        value: r == null ? void 0 : r.id,
        children: Object.values(e).sort().filter((a) => Mr(a.language, t)).map((a) => /* @__PURE__ */ A.jsx("option", { value: a.id, children: a.name }, a.id))
      }
    ),
    r && /* @__PURE__ */ A.jsx(i, { file: r })
  ] });
}, b1 = () => /* @__PURE__ */ A.jsxs("div", { className: "run-bar", children: [
  /* @__PURE__ */ A.jsx("div", { children: /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => alert("not implemented"), children: "Share" }) }),
  /* @__PURE__ */ A.jsx("div", { children: /* @__PURE__ */ A.jsx("button", { type: "button", onClick: () => alert("not implemented"), children: "Finish" }) })
] }), ry = ({
  project: e,
  config: t,
  setProject: r,
  setConfig: n
}) => {
  const [s, i] = Ql(lc, e), a = uc(i);
  return on(() => {
    r(s);
  }, [s]), /* @__PURE__ */ A.jsx(
    nc,
    {
      value: {
        project: s,
        config: t,
        setProject: r,
        setConfig: n,
        ...a
      },
      children: /* @__PURE__ */ A.jsxs(
        "div",
        {
          className: "cdo-ide-outer",
          style: { gridTemplateRows: t.showRunBar ? "auto 40px" : "auto" },
          children: [
            /* @__PURE__ */ A.jsxs(
              "div",
              {
                className: "cdo-ide-inner",
                style: {
                  gridTemplateColumns: t.showPreview ? "1fr 2fr 2fr" : "1fr 2fr"
                },
                children: [
                  /* @__PURE__ */ A.jsx("div", { className: "cdo-ide-area", children: /* @__PURE__ */ A.jsx(gc, {}) }),
                  /* @__PURE__ */ A.jsx("div", { className: "cdo-ide-area", children: /* @__PURE__ */ A.jsx(yc, {}) }),
                  t.showPreview && /* @__PURE__ */ A.jsx(w1, {})
                ]
              }
            ),
            t.showRunBar && /* @__PURE__ */ A.jsx(b1, {})
          ]
        }
      )
    }
  );
};
export {
  ry as CDOIDE,
  Zo as CDOIDEContext,
  nc as CDOIDEContextProvider,
  ee as PROJECT_REDUCER_ACTIONS,
  k1 as editableFileType,
  ac as findFiles,
  Ps as findSubFolders,
  ic as getNextFileId,
  oc as getNextFolderId,
  ty as prettify,
  Mr as previewFileType,
  lc as projectReducer,
  Ne as useCDOIDEContext,
  uc as useProjectUtilities
};
//# sourceMappingURL=cdo-ide-poc.js.map
