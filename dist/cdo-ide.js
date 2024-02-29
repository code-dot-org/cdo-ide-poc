import ge, { createContext as $e, useContext as Ge, useMemo as Ee, useState as K, useRef as Je, useEffect as H, useReducer as ze } from "react";
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var se = { exports: {} }, q = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Xe() {
  if (he)
    return q;
  he = 1;
  var n = ge, o = 60103;
  if (q.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var l = Symbol.for;
    o = l("react.element"), q.Fragment = l("react.fragment");
  }
  var t = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(g, w, O) {
    var _, m = {}, S = null, k = null;
    O !== void 0 && (S = "" + O), w.key !== void 0 && (S = "" + w.key), w.ref !== void 0 && (k = w.ref);
    for (_ in w)
      s.call(w, _) && !c.hasOwnProperty(_) && (m[_] = w[_]);
    if (g && g.defaultProps)
      for (_ in w = g.defaultProps, w)
        m[_] === void 0 && (m[_] = w[_]);
    return { $$typeof: o, type: g, key: S, ref: k, props: m, _owner: t.current };
  }
  return q.jsx = h, q.jsxs = h, q;
}
var ae = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Ze() {
  return ve || (ve = 1, function(n) {
    process.env.NODE_ENV !== "production" && function() {
      var o = ge, l = 60103, t = 60106;
      n.Fragment = 60107;
      var s = 60108, c = 60114, h = 60109, g = 60110, w = 60112, O = 60113, _ = 60120, m = 60115, S = 60116, k = 60121, F = 60122, C = 60117, v = 60129, u = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var r = Symbol.for;
        l = r("react.element"), t = r("react.portal"), n.Fragment = r("react.fragment"), s = r("react.strict_mode"), c = r("react.profiler"), h = r("react.provider"), g = r("react.context"), w = r("react.forward_ref"), O = r("react.suspense"), _ = r("react.suspense_list"), m = r("react.memo"), S = r("react.lazy"), k = r("react.block"), F = r("react.server.block"), C = r("react.fundamental"), r("react.scope"), r("react.opaque.id"), v = r("react.debug_trace_mode"), r("react.offscreen"), u = r("react.legacy_hidden");
      }
      var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
      function T(e) {
        if (e === null || typeof e != "object")
          return null;
        var i = d && e[d] || e[f];
        return typeof i == "function" ? i : null;
      }
      var b = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function j(e) {
        {
          for (var i = arguments.length, p = new Array(i > 1 ? i - 1 : 0), E = 1; E < i; E++)
            p[E - 1] = arguments[E];
          D("error", e, p);
        }
      }
      function D(e, i, p) {
        {
          var E = b.ReactDebugCurrentFrame, P = "";
          if (U) {
            var R = N(U.type), x = U._owner;
            P += Oe(R, U._source, x && N(x.type));
          }
          P += E.getStackAddendum(), P !== "" && (i += "%s", p = p.concat([P]));
          var y = p.map(function(I) {
            return "" + I;
          });
          y.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, y);
        }
      }
      var $ = !1;
      function xe(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === n.Fragment || e === c || e === v || e === s || e === O || e === _ || e === u || $ || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === m || e.$$typeof === h || e.$$typeof === g || e.$$typeof === w || e.$$typeof === C || e.$$typeof === k || e[0] === F));
      }
      var X = /^(.*)[\\\/]/;
      function Oe(e, i, p) {
        var E = "";
        if (i) {
          var P = i.fileName, R = P.replace(X, "");
          if (/^index\./.test(R)) {
            var x = P.match(X);
            if (x) {
              var y = x[1];
              if (y) {
                var I = y.replace(X, "");
                R = I + "/" + R;
              }
            }
          }
          E = " (at " + R + ":" + i.lineNumber + ")";
        } else
          p && (E = " (created by " + p + ")");
        return `
    in ` + (e || "Unknown") + E;
      }
      var we = 1;
      function Se(e) {
        return e._status === we ? e._result : null;
      }
      function je(e, i, p) {
        var E = i.displayName || i.name || "";
        return e.displayName || (E !== "" ? p + "(" + E + ")" : p);
      }
      function N(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && j("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case n.Fragment:
            return "Fragment";
          case t:
            return "Portal";
          case c:
            return "Profiler";
          case s:
            return "StrictMode";
          case O:
            return "Suspense";
          case _:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case g:
              return "Context.Consumer";
            case h:
              return "Context.Provider";
            case w:
              return je(e, e.render, "ForwardRef");
            case m:
              return N(e.type);
            case k:
              return N(e.render);
            case S: {
              var i = e, p = Se(i);
              if (p)
                return N(p);
              break;
            }
          }
        return null;
      }
      var oe = {};
      b.ReactDebugCurrentFrame;
      var U = null;
      function J(e) {
        U = e;
      }
      function Pe(e, i, p, E, P) {
        {
          var R = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var x in e)
            if (R(e, x)) {
              var y = void 0;
              try {
                if (typeof e[x] != "function") {
                  var I = Error((E || "React class") + ": " + p + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw I.name = "Invariant Violation", I;
                }
                y = e[x](i, x, E, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (A) {
                y = A;
              }
              y && !(y instanceof Error) && (J(P), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", p, x, typeof y), J(null)), y instanceof Error && !(y.message in oe) && (oe[y.message] = !0, J(P), j("Failed %s type: %s", p, y.message), J(null));
            }
        }
      }
      var G = b.ReactCurrentOwner, Z = Object.prototype.hasOwnProperty, Re = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, le, ce, Q;
      Q = {};
      function ke(e) {
        if (Z.call(e, "ref")) {
          var i = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Te(e) {
        if (Z.call(e, "key")) {
          var i = Object.getOwnPropertyDescriptor(e, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Me(e, i) {
        if (typeof e.ref == "string" && G.current && i && G.current.stateNode !== i) {
          var p = N(G.current.type);
          Q[p] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(G.current.type), e.ref), Q[p] = !0);
        }
      }
      function Ie(e, i) {
        {
          var p = function() {
            le || (le = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          p.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: p,
            configurable: !0
          });
        }
      }
      function Ne(e, i) {
        {
          var p = function() {
            ce || (ce = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          p.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: p,
            configurable: !0
          });
        }
      }
      var Le = function(e, i, p, E, P, R, x) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: l,
          // Built-in properties that belong on the element
          type: e,
          key: i,
          ref: p,
          props: x,
          // Record the component responsible for creating this element.
          _owner: R
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: E
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: P
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Ae(e, i, p, E, P) {
        {
          var R, x = {}, y = null, I = null;
          p !== void 0 && (y = "" + p), Te(i) && (y = "" + i.key), ke(i) && (I = i.ref, Me(i, P));
          for (R in i)
            Z.call(i, R) && !Re.hasOwnProperty(R) && (x[R] = i[R]);
          if (e && e.defaultProps) {
            var A = e.defaultProps;
            for (R in A)
              x[R] === void 0 && (x[R] = A[R]);
          }
          if (y || I) {
            var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            y && Ie(x, W), I && Ne(x, W);
          }
          return Le(e, y, I, P, E, G.current, x);
        }
      }
      var ee = b.ReactCurrentOwner;
      b.ReactDebugCurrentFrame;
      function V(e) {
        U = e;
      }
      var ne;
      ne = !1;
      function te(e) {
        return typeof e == "object" && e !== null && e.$$typeof === l;
      }
      function ue() {
        {
          if (ee.current) {
            var e = N(ee.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Fe(e) {
        {
          if (e !== void 0) {
            var i = e.fileName.replace(/^.*[\\\/]/, ""), p = e.lineNumber;
            return `

Check your code at ` + i + ":" + p + ".";
          }
          return "";
        }
      }
      var de = {};
      function De(e) {
        {
          var i = ue();
          if (!i) {
            var p = typeof e == "string" ? e : e.displayName || e.name;
            p && (i = `

Check the top-level render call using <` + p + ">.");
          }
          return i;
        }
      }
      function fe(e, i) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var p = De(i);
          if (de[p])
            return;
          de[p] = !0;
          var E = "";
          e && e._owner && e._owner !== ee.current && (E = " It was passed a child from " + N(e._owner.type) + "."), V(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, E), V(null);
        }
      }
      function pe(e, i) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var p = 0; p < e.length; p++) {
              var E = e[p];
              te(E) && fe(E, i);
            }
          else if (te(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var P = T(e);
            if (typeof P == "function" && P !== e.entries)
              for (var R = P.call(e), x; !(x = R.next()).done; )
                te(x.value) && fe(x.value, i);
          }
        }
      }
      function We(e) {
        {
          var i = e.type;
          if (i == null || typeof i == "string")
            return;
          var p;
          if (typeof i == "function")
            p = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === m))
            p = i.propTypes;
          else
            return;
          if (p) {
            var E = N(i);
            Pe(p, e.props, "prop", E, e);
          } else if (i.PropTypes !== void 0 && !ne) {
            ne = !0;
            var P = N(i);
            j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ye(e) {
        {
          for (var i = Object.keys(e.props), p = 0; p < i.length; p++) {
            var E = i[p];
            if (E !== "children" && E !== "key") {
              V(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), V(null);
              break;
            }
          }
          e.ref !== null && (V(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
        }
      }
      function me(e, i, p, E, P, R) {
        {
          var x = xe(e);
          if (!x) {
            var y = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var I = Fe(P);
            I ? y += I : y += ue();
            var A;
            e === null ? A = "null" : Array.isArray(e) ? A = "array" : e !== void 0 && e.$$typeof === l ? (A = "<" + (N(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, y);
          }
          var W = Ae(e, i, p, P, R);
          if (W == null)
            return W;
          if (x) {
            var B = i.children;
            if (B !== void 0)
              if (E)
                if (Array.isArray(B)) {
                  for (var re = 0; re < B.length; re++)
                    pe(B[re], e);
                  Object.freeze && Object.freeze(B);
                } else
                  j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                pe(B, e);
          }
          return e === n.Fragment ? Ye(W) : We(W), W;
        }
      }
      function Ue(e, i, p) {
        return me(e, i, p, !0);
      }
      function Ve(e, i, p) {
        return me(e, i, p, !1);
      }
      var Be = Ve, qe = Ue;
      n.jsx = Be, n.jsxs = qe;
    }();
  }(ae)), ae;
}
process.env.NODE_ENV === "production" ? se.exports = Xe() : se.exports = Ze();
var a = se.exports;
const ye = $e(null), L = () => {
  const n = Ge(ye);
  if (n === null)
    throw new Error("CDO IDE Context has not been provided!");
  return n;
}, Qe = ({
  children: n,
  value: o
}) => /* @__PURE__ */ a.jsx(ye.Provider, { value: o, children: n }), M = {
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
}, Y = "0", en = "Add your changes to ${fileName}", nn = (n) => String(Math.max(...n.map((o) => Number(o.id))) + 1), tn = (n) => String(Math.max(...n.map((o) => Number(o.id))) + 1), ie = (n, o) => o.reduce((l, t) => (t.parentId === n && l.push(t.id, ...ie(t.id, o)), l), []), rn = (n, o, l) => {
  const t = new Set(
    l ? [n, ...ie(n, l)] : [n]
  );
  return o.reduce((s, c) => (t.has(c.folderId) && s.push(c.id), s), []);
}, an = (n) => Ee(() => {
  const o = {
    newFile: ({
      fileId: l,
      fileName: t,
      folderId: s = Y,
      contents: c = en
    }) => {
      n({
        type: M.NEW_FILE,
        payload: {
          fileId: l,
          fileName: t,
          folderId: s,
          contents: c.replace(/\${fileName}/g, t)
        }
      }), o.setActiveFile(l);
    },
    renameFile: (l, t) => {
      n({
        type: M.RENAME_FILE,
        payload: { fileId: l, newName: t }
      });
    },
    saveFile: (l, t) => {
      n({
        type: M.SAVE_FILE,
        payload: { fileId: l, contents: t }
      });
    },
    openFile: (l) => {
      n({
        type: M.OPEN_FILE,
        payload: { fileId: l }
      });
    },
    closeFile: (l) => {
      n({
        type: M.CLOSE_FILE,
        payload: { fileId: l }
      });
    },
    deleteFile: (l) => {
      n({
        type: M.DELETE_FILE,
        payload: { fileId: l }
      });
    },
    setActiveFile: (l) => {
      n({
        type: M.ACTIVATE_FILE,
        payload: { fileId: l }
      });
    },
    newFolder: ({
      folderId: l,
      folderName: t,
      parentId: s = Y
    }) => {
      n({
        type: M.NEW_FOLDER,
        payload: { folderId: l, folderName: t, parentId: s }
      });
    },
    renameFolder: (l, t) => {
      n({
        type: M.RENAME_FOLDER,
        payload: { folderId: l, newName: t }
      });
    },
    toggleOpenFolder: (l) => {
      n({
        type: M.TOGGLE_OPEN_FOLDER,
        payload: { folderId: l }
      });
    },
    deleteFolder: (l) => {
      n({
        type: M.DELETE_FOLDER,
        payload: { folderId: l }
      });
    }
  };
  return o;
}, [n]), sn = (n, o) => {
  var l;
  switch (o.type) {
    case M.NEW_FILE: {
      const { fileId: t, fileName: s, folderId: c, contents: h = "" } = o.payload, g = { ...n, files: { ...n.files } }, [w, O] = s.split(".");
      return g.files[t] = {
        id: t,
        name: s,
        language: O || "html",
        contents: h,
        folderId: c
      }, g;
    }
    case M.RENAME_FILE: {
      const { fileId: t, newName: s } = o.payload;
      return {
        ...n,
        files: {
          ...n.files,
          [t]: { ...n.files[t], name: s }
        }
      };
    }
    case M.SAVE_FILE: {
      const { fileId: t, contents: s } = o.payload;
      return {
        ...n,
        files: {
          ...n.files,
          [t]: { ...n.files[t], contents: s }
        }
      };
    }
    case M.OPEN_FILE:
    case M.ACTIVATE_FILE: {
      const { fileId: t } = o.payload, s = (l = Object.values(n.files).filter(
        (h) => h.active
      )) == null ? void 0 : l[0];
      if ((s == null ? void 0 : s.id) === t)
        return n;
      const c = {
        ...n,
        files: {
          ...n.files,
          [t]: { ...n.files[t], active: !0, open: !0 }
        }
      };
      return s && (c.files[s.id].active = !1), c;
    }
    case M.CLOSE_FILE: {
      const { fileId: t } = o.payload;
      return {
        ...n,
        files: {
          ...n.files,
          [t]: { ...n.files[t], open: !1, active: !1 }
        }
      };
    }
    case M.DELETE_FILE: {
      const { fileId: t } = o.payload, s = {
        ...n,
        files: {
          ...n.files
        }
      };
      return delete s.files[t], s;
    }
    case M.NEW_FOLDER: {
      const { folderId: t, folderName: s, parentId: c } = o.payload, h = { ...n, folders: { ...n.folders } };
      return h.folders[t] = {
        id: t,
        name: s,
        parentId: c
      }, h;
    }
    case M.TOGGLE_OPEN_FOLDER: {
      const { folderId: t } = o.payload;
      return {
        ...n,
        folders: {
          ...n.folders,
          [t]: {
            ...n.folders[t],
            open: !n.folders[t].open
          }
        }
      };
    }
    case M.DELETE_FOLDER: {
      const { folderId: t } = o.payload, s = {
        ...n,
        folders: {
          ...n.folders
        }
      }, c = new Set(
        ie(t, Object.values(n.folders))
      ), h = new Set(
        rn(
          t,
          Object.values(n.files),
          Object.values(n.folders)
        )
      );
      return delete s.folders[t], Object.values(s.folders).filter((g) => c.has(g.id)).forEach((g) => delete s.folders[g.id]), h.size && (s.files = { ...s.files }, Object.values(s.files).filter((g) => h.has(g.id)).forEach((g) => delete s.files[g.id])), s;
    }
    case M.RENAME_FOLDER: {
      const { folderId: t, newName: s } = o.payload;
      return {
        ...n,
        folders: {
          ...n.folders,
          [t]: { ...n.folders[t], name: s }
        }
      };
    }
    default:
      return n;
  }
}, on = ({ setActivePane: n, activePane: o }) => {
  const {
    config: { leftNav: l }
  } = L();
  return /* @__PURE__ */ a.jsx("div", { className: "nav-bar", children: l.map((t) => /* @__PURE__ */ a.jsx(
    "div",
    {
      onClick: () => n(t.component),
      style: {
        cursor: "pointer",
        backgroundColor: t.component === o ? "#666" : ""
      },
      children: /* @__PURE__ */ a.jsx("i", { className: `fa-regular fa-2xl ${t.icon}` })
    },
    t.icon
  )) });
}, ln = () => {
  const {
    config: { sideBar: n }
  } = L();
  return /* @__PURE__ */ a.jsx("div", { className: "left-side-bar", children: n.map((o) => /* @__PURE__ */ a.jsx(
    "div",
    {
      onClick: () => alert("not implemented"),
      style: { cursor: "pointer" },
      children: /* @__PURE__ */ a.jsx("i", { className: `fa-regular fa-2xl ${o}` })
    },
    o
  )) });
}, be = ({
  parentId: n,
  folders: o,
  files: l,
  newFolderPrompt: t,
  newFilePrompt: s,
  renameFilePrompt: c,
  renameFolderPrompt: h
}) => {
  const {
    openFile: g,
    deleteFile: w,
    toggleOpenFolder: O,
    deleteFolder: _
  } = L();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    Object.values(o).filter((m) => m.parentId === n).sort((m, S) => m.name.localeCompare(S.name)).map((m) => {
      const S = /* @__PURE__ */ a.jsx(
        "i",
        {
          className: m.open ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"
        }
      );
      return /* @__PURE__ */ a.jsxs("li", { children: [
        /* @__PURE__ */ a.jsxs("span", { className: "label", children: [
          /* @__PURE__ */ a.jsxs("span", { className: "title", children: [
            /* @__PURE__ */ a.jsx(
              "span",
              {
                className: "caret",
                onClick: () => O(m.id),
                children: S
              }
            ),
            /* @__PURE__ */ a.jsx("span", { children: m.name })
          ] }),
          /* @__PURE__ */ a.jsxs("span", { className: "button-bar", children: [
            /* @__PURE__ */ a.jsx("span", { onClick: () => h(m.id), children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-pencil" }) }),
            /* @__PURE__ */ a.jsx("span", { onClick: () => t(m.id), children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-folder-plus" }) }),
            /* @__PURE__ */ a.jsx("span", { onClick: () => s(m.id), children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-plus" }) }),
            /* @__PURE__ */ a.jsx("span", { onClick: () => _(m.id), children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-trash" }) })
          ] })
        ] }),
        m.open && /* @__PURE__ */ a.jsx("ul", { children: /* @__PURE__ */ a.jsx(
          be,
          {
            folders: o,
            newFolderPrompt: t,
            parentId: m.id,
            files: l,
            newFilePrompt: s,
            renameFilePrompt: c,
            renameFolderPrompt: h
          }
        ) })
      ] }, m.id + m.open);
    }),
    Object.values(l).filter((m) => m.folderId === n).sort((m, S) => m.name.localeCompare(S.name)).map((m) => /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsxs("span", { className: "label", children: [
      /* @__PURE__ */ a.jsx("span", { onClick: () => g(m.id), children: m.name }),
      /* @__PURE__ */ a.jsxs("span", { className: "button-bar", children: [
        /* @__PURE__ */ a.jsx("span", { onClick: () => c(m.id), children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-pencil" }) }),
        /* @__PURE__ */ a.jsx("span", { onClick: () => w(m.id), children: /* @__PURE__ */ a.jsx("i", { className: "fa-solid fa-trash" }) })
      ] })
    ] }) }, m.id))
  ] });
}, cn = () => {
  const {
    project: n,
    newFile: o,
    renameFile: l,
    renameFolder: t,
    newFolder: s
  } = L(), c = (O = Y) => {
    const _ = tn(Object.values(n.folders)), m = window.prompt("Please name your new folder");
    if (!m)
      return;
    if (Object.values(n.folders).find(
      (k) => k.name === m && k.parentId === O
    )) {
      alert("Folder already exists");
      return;
    }
    s({ parentId: O, folderName: m, folderId: _ });
  }, h = (O = Y) => {
    var C;
    const _ = (C = window.prompt("Please name your new file")) == null ? void 0 : C.replace(/[^\w.]+/g, "");
    if (!_)
      return;
    if (Object.values(n.files).find(
      (v) => v.name === _ && v.folderId === O
    )) {
      alert("File already exists");
      return;
    }
    const [S, k] = _.split(".");
    if (!k) {
      window.alert("Files must have extensions");
      return;
    }
    const F = nn(Object.values(n.files));
    o({
      fileId: F,
      fileName: _,
      folderId: O
    });
  }, g = (O) => {
    const _ = n.files[O], m = window.prompt("Rename file", _.name);
    if (m === null || m === _.name)
      return;
    if (Object.values(n.files).find(
      (k) => k.name === m && k.folderId === _.folderId
    )) {
      alert("File already exists");
      return;
    }
    l(O, m);
  }, w = (O) => {
    const _ = n.folders[O], m = window.prompt("Rename folder", _.name);
    if (m === null || m === _.name)
      return;
    if (Object.values(n.folders).find(
      (k) => k.name === m && k.parentId === _.parentId
    )) {
      alert("Folder already exists");
      return;
    }
    t(_.id, m);
  };
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "files-toolbar", children: [
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => c(), children: "New Folder" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => h(), children: "New File" })
    ] }),
    /* @__PURE__ */ a.jsx("ul", { children: /* @__PURE__ */ a.jsx(
      be,
      {
        parentId: Y,
        folders: n.folders,
        newFolderPrompt: c,
        files: n.files,
        newFilePrompt: h,
        renameFilePrompt: g,
        renameFolderPrompt: w
      }
    ) })
  ] });
}, un = () => {
  const {
    config: { instructions: n }
  } = L();
  return /* @__PURE__ */ a.jsx("div", { className: "instructions", children: n });
}, dn = () => /* @__PURE__ */ a.jsx("div", { children: "Search is not yet implemented. Sorry." }), fn = {
  Instructions: un,
  Files: cn,
  Search: dn
}, pn = () => {
  const { config: n } = L(), [o, l] = K(
    n.activeLeftNav || n.leftNav[0].component
  ), t = fn[o];
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "left-pane-outer",
      style: { gridTemplateColumns: n.showSideBar ? "1fr 9fr" : "1fr" },
      children: [
        n.showSideBar && /* @__PURE__ */ a.jsx(ln, {}),
        /* @__PURE__ */ a.jsxs("div", { className: "left-pane-inner", children: [
          /* @__PURE__ */ a.jsx("div", { className: "left-nav", children: /* @__PURE__ */ a.jsx(on, { setActivePane: l, activePane: o }) }),
          /* @__PURE__ */ a.jsx("div", { className: "left-main", children: /* @__PURE__ */ a.jsx(t, {}) })
        ] })
      ]
    }
  );
}, mn = () => {
  const { project: n, closeFile: o, setActiveFile: l } = L(), t = Object.values(n.files).filter((s) => s.open).sort((s, c) => s.name.localeCompare(c.name));
  return /* @__PURE__ */ a.jsx("div", { className: "files-nav-bar", children: t.map((s) => /* @__PURE__ */ a.jsxs("div", { className: "file-tab", style: { cursor: "pointer" }, children: [
    /* @__PURE__ */ a.jsx(
      "span",
      {
        onClick: () => l(s.id),
        style: { fontWeight: s.active ? "bold" : "normal" },
        children: s.name
      }
    ),
    /* @__PURE__ */ a.jsx("span", { onClick: () => o(s.id), children: "X" })
  ] }, s.id)) });
}, hn = () => /* @__PURE__ */ a.jsx("div", { children: "Sorry, editor is disabled. Please pass in a component!" }), vn = () => {
  const { config: n } = L(), o = n.EditorComponent || hn;
  return /* @__PURE__ */ a.jsxs("div", { className: "center-pane", children: [
    /* @__PURE__ */ a.jsx("div", { className: "center-nav", children: /* @__PURE__ */ a.jsx(mn, {}) }),
    /* @__PURE__ */ a.jsx("div", { className: "center-main", children: /* @__PURE__ */ a.jsx(o, {}) })
  ] });
}, _n = ({ file: n }) => {
  const o = Je(null), {
    project: { files: l, folders: t }
  } = L(), s = Ee(() => n ? n.contents.replace(
    new RegExp('<link rel="stylesheet" href="([^"]+)"></style>', "g"),
    (h, g) => {
      const w = g.split("/"), O = w.pop(), _ = w.reduce(
        (S, k) => (Object.values(t).find(
          (C) => C.name === k && C.parentId === S
        ) || { id: Y }).id,
        Y
      ), m = Object.values(l).find(
        (S) => S.name === O && S.folderId === _
      );
      return `
          <style>
            ${m == null ? void 0 : m.contents}
          </style>
      `;
    }
  ) : "", [l, n]);
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: n && /* @__PURE__ */ a.jsx(
    "iframe",
    {
      allow: "self",
      title: "Web Preview",
      ref: o,
      id: "preview",
      style: { width: "100%", height: "100%" },
      srcDoc: s
    }
  ) });
};
var Ce = { exports: {} };
(function(n, o) {
  (function(t, s) {
    n.exports = s();
  })(He, function() {
    return (
      /******/
      function(l) {
        var t = {};
        function s(c) {
          if (t[c])
            return t[c].exports;
          var h = t[c] = {
            /******/
            i: c,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return l[c].call(h.exports, h, h.exports, s), h.l = !0, h.exports;
        }
        return s.m = l, s.c = t, s.i = function(c) {
          return c;
        }, s.d = function(c, h, g) {
          s.o(c, h) || Object.defineProperty(c, h, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: g
            /******/
          });
        }, s.n = function(c) {
          var h = c && c.__esModule ? (
            /******/
            function() {
              return c.default;
            }
          ) : (
            /******/
            function() {
              return c;
            }
          );
          return s.d(h, "a", h), h;
        }, s.o = function(c, h) {
          return Object.prototype.hasOwnProperty.call(c, h);
        }, s.p = "", s(s.s = 3);
      }([
        /* 0 */
        /***/
        function(l, t, s) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          var c = Object.assign || function(v) {
            for (var u = 1; u < arguments.length; u++) {
              var r = arguments[u];
              for (var d in r)
                Object.prototype.hasOwnProperty.call(r, d) && (v[d] = r[d]);
            }
            return v;
          }, h = /* @__PURE__ */ function() {
            function v(u, r) {
              for (var d = 0; d < r.length; d++) {
                var f = r[d];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(u, f.key, f);
              }
            }
            return function(u, r, d) {
              return r && v(u.prototype, r), d && v(u, d), u;
            };
          }();
          function g(v) {
            if (Array.isArray(v)) {
              for (var u = 0, r = Array(v.length); u < v.length; u++)
                r[u] = v[u];
              return r;
            } else
              return Array.from(v);
          }
          function w(v, u) {
            if (!(v instanceof u))
              throw new TypeError("Cannot call a class as a function");
          }
          var O = t.TYPE_MESSAGE = "message", _ = t.TYPE_RESPONSE = "response", m = t.TYPE_SET_INTERFACE = "set-interface", S = t.TYPE_SERVICE_MESSAGE = "service-message", k = !!window.MSInputMethodContext && !!document.documentMode, F = {
            //Will not affect IE11 because there sandboxed iframe has not 'null' origin
            //but base URL of iframe's src
            allowedSenderOrigin: void 0
          }, C = function() {
            function v(u, r, d) {
              var f = this;
              w(this, v), this.options = c({}, F, d), this.incrementalID = Math.floor(Math.random() * 1e5), this.postMessage = u, this.remote = {}, this.callbacks = {}, this.remoteMethodsWaitPromise = new Promise(function(T) {
                f._resolveRemoteMethodsPromise = T;
              }), r(function() {
                return f.onMessageListener.apply(f, arguments);
              });
            }
            return h(v, [{
              key: "onMessageListener",
              value: function(r) {
                var d = this, f = r.data, T = this.options.allowedSenderOrigin;
                T && r.origin !== T && !k || (f.type === _ ? this.popCallback(f.callId, f.success, f.result) : f.type === O ? this.callLocalApi(f.methodName, f.arguments).then(function(b) {
                  return d.responseOtherSide(f.callId, b);
                }).catch(function(b) {
                  return d.responseOtherSide(f.callId, b, !1);
                }) : f.type === m ? (this.setInterface(f.apiMethods), this.responseOtherSide(f.callId)) : f.type === S && this.callLocalServiceMethod(f.methodName, f.arguments).then(function(b) {
                  return d.responseOtherSide(f.callId, b);
                }).catch(function(b) {
                  return d.responseOtherSide(f.callId, b, !1);
                }));
              }
            }, {
              key: "postMessageToOtherSide",
              value: function(r) {
                this.postMessage(r, "*");
              }
              /**
                 * Sets remote interface methods
                 * @param remote - hash with keys of remote API methods. Values is ignored
                 */
            }, {
              key: "setInterface",
              value: function(r) {
                var d = this;
                this.remote = {}, r.forEach(function(f) {
                  return d.remote[f] = d.createMethodWrapper(f);
                }), this._resolveRemoteMethodsPromise();
              }
            }, {
              key: "setLocalApi",
              value: function(r) {
                var d = this;
                return new Promise(function(f, T) {
                  var b = d.registerCallback(f, T);
                  d.postMessageToOtherSide({
                    callId: b,
                    apiMethods: Object.keys(r),
                    type: m
                  });
                }).then(function() {
                  return d.localApi = r;
                });
              }
            }, {
              key: "setServiceMethods",
              value: function(r) {
                this.serviceMethods = r;
              }
              /**
                 * Calls local method
                 * @param methodName
                 * @param args
                 * @returns {Promise.<*>|string}
                 */
            }, {
              key: "callLocalApi",
              value: function(r, d) {
                var f;
                return Promise.resolve((f = this.localApi)[r].apply(f, g(d)));
              }
              /**
                 * Calls local method registered as "service method"
                 * @param methodName
                 * @param args
                 * @returns {Promise.<*>}
                 */
            }, {
              key: "callLocalServiceMethod",
              value: function(r, d) {
                var f;
                if (!this.serviceMethods[r])
                  throw new Error("Serivce method " + r + " is not registered");
                return Promise.resolve((f = this.serviceMethods)[r].apply(f, g(d)));
              }
              /**
                 * Wraps remote method with callback storing code
                 * @param methodName - method to wrap
                 * @returns {Function} - function to call as remote API interface
                 */
            }, {
              key: "createMethodWrapper",
              value: function(r) {
                var d = this;
                return function() {
                  for (var f = arguments.length, T = Array(f), b = 0; b < f; b++)
                    T[b] = arguments[b];
                  return d.callRemoteMethod.apply(d, [r].concat(T));
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
              value: function(r) {
                for (var d = this, f = arguments.length, T = Array(f > 1 ? f - 1 : 0), b = 1; b < f; b++)
                  T[b - 1] = arguments[b];
                return new Promise(function(j, D) {
                  var $ = d.registerCallback(j, D);
                  d.postMessageToOtherSide({
                    callId: $,
                    methodName: r,
                    type: O,
                    arguments: T
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
              value: function(r) {
                for (var d = this, f = arguments.length, T = Array(f > 1 ? f - 1 : 0), b = 1; b < f; b++)
                  T[b - 1] = arguments[b];
                return new Promise(function(j, D) {
                  var $ = d.registerCallback(j, D);
                  d.postMessageToOtherSide({
                    callId: $,
                    methodName: r,
                    type: S,
                    arguments: T
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
              value: function(r, d) {
                var f = this, T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
                d instanceof Error && (d = [].concat(g(Object.keys(d)), ["message"]).reduce(function(j, D) {
                  return j[D] = d[D], j;
                }, {}));
                var b = function() {
                  return f.postMessage({
                    callId: r,
                    type: _,
                    success: T,
                    result: d
                  }, "*");
                };
                try {
                  b();
                } catch (j) {
                  console.error("Failed to post response, recovering...", j), j instanceof DOMException && (d = JSON.parse(JSON.stringify(d)), b());
                }
              }
              /**
                 * Stores callbacks to call later when remote call will be answered
                 * @param successCallback
                 * @param failureCallback
                 */
            }, {
              key: "registerCallback",
              value: function(r, d) {
                var f = (++this.incrementalID).toString();
                return this.callbacks[f] = { successCallback: r, failureCallback: d }, f;
              }
              /**
                 * Calls and delete stored callback
                 * @param id - call id
                 * @param success - was call successful
                 * @param result - result of remote call
                 */
            }, {
              key: "popCallback",
              value: function(r, d, f) {
                d ? this.callbacks[r].successCallback(f) : this.callbacks[r].failureCallback(f), delete this.callbacks[r];
              }
            }]), v;
          }();
          t.default = C;
        },
        /* 1 */
        /***/
        function(l, t) {
          l.exports = `/******/ (function(modules) { // webpackBootstrap
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
        function(l, t, s) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.BaseOptions = void 0;
          var c = Object.assign || function(C) {
            for (var v = 1; v < arguments.length; v++) {
              var u = arguments[v];
              for (var r in u)
                Object.prototype.hasOwnProperty.call(u, r) && (C[r] = u[r]);
            }
            return C;
          }, h = /* @__PURE__ */ function() {
            function C(v, u) {
              for (var r = 0; r < u.length; r++) {
                var d = u[r];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(v, d.key, d);
              }
            }
            return function(v, u, r) {
              return u && C(v.prototype, u), r && C(v, r), v;
            };
          }(), g = s(0), w = m(g), O = s(1), _ = m(O);
          function m(C) {
            return C && C.__esModule ? C : { default: C };
          }
          function S(C, v) {
            if (!(C instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          var k = t.BaseOptions = {
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
          }, F = function() {
            h(C, null, [{
              key: "create",
              /**
               * Creates sandbox instancea
               * @param {?Object} localApi Api of this side. Will be available for sandboxed code as remoteApi
               * @param {?SandboxOptions} options Options of created sandbox
               */
              value: function(u) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return new C(u, c(k, r));
              }
              /**
               * {Constructor}
               * @param {?Object} localApi
               * @param {?SandboxOptions} options
               */
            }]);
            function C(v, u) {
              var r = this;
              S(this, C), this.options = u, this.iframe = this.createIframe(), this.promise = new Promise(function(d) {
                r.connection = new w.default(r.iframe.contentWindow.postMessage.bind(r.iframe.contentWindow), function(f) {
                  var T = function(j) {
                    if (j.source === r.iframe.contentWindow)
                      return f(j);
                  };
                  window.addEventListener("message", T), r.removeMessageListener = function() {
                    return window.removeEventListener("message", T);
                  };
                }, { allowedSenderOrigin: "null" }), r.connection.setServiceMethods({
                  iframeInitialized: function() {
                    return r.connection.setLocalApi(v).then(function() {
                      return d(r);
                    });
                  }
                });
              });
            }
            return h(C, [{
              key: "_prepareFrameContent",
              value: function(u) {
                var r = u.frameContent.replace("</head>", "<script>" + _.default + `<\/script>
</head>`);
                return u.initialStyles && (r = r.replace("</head>", "<style>" + u.initialStyles + `</style>
</head>`)), u.baseUrl && (r = r.replace("<head>", `<head>
<base href="` + u.baseUrl + '"/>')), u.codeToRunBeforeInit && (r = r.replace("<head>", `<head>
<script>` + u.codeToRunBeforeInit + "<\/script>")), r;
              }
            }, {
              key: "createIframe",
              value: function() {
                var u = this.options.frameContainer, r = typeof u == "string" ? document.querySelector(u) : u;
                if (!r)
                  throw new Error("Websandbox: Cannot find container for sandbox " + r);
                var d = document.createElement("iframe");
                if (d.sandbox = "allow-scripts " + this.options.sandboxAdditionalAttributes, d.className = this.options.frameClassName, this.options.allowFullScreen && (d.allowfullscreen = "true"), this.options.frameSrc)
                  return d.src = this.options.frameSrc, r.appendChild(d), d;
                if (this.options.frameContent.indexOf("<head>") < 0)
                  throw new Error('Websandbox: iFrame content must have "<head>" tag.');
                return d.setAttribute("srcdoc", this._prepareFrameContent(this.options)), r.appendChild(d), d;
              }
            }, {
              key: "destroy",
              value: function() {
                this.iframe.remove(), this.removeMessageListener();
              }
            }, {
              key: "_runCode",
              value: function(u) {
                return this.connection.callRemoteServiceMethod("runCode", u);
              }
            }, {
              key: "_runFunction",
              value: function(u) {
                return this._runCode("(" + u.toString() + ")()");
              }
            }, {
              key: "run",
              value: function(u) {
                return u.name ? this._runFunction(u) : this._runCode(u);
              }
            }, {
              key: "importScript",
              value: function(u) {
                return this.connection.callRemoteServiceMethod("importScript", u);
              }
            }, {
              key: "injectStyle",
              value: function(u) {
                return this.connection.callRemoteServiceMethod("injectStyle", u);
              }
            }]), C;
          }();
          t.default = F;
        }
        /******/
      ])
    );
  });
})(Ce);
var gn = Ce.exports;
const En = /* @__PURE__ */ Ke(gn), yn = ({ output: n }) => {
  const [o, l] = K(n);
  return H(() => l(n), [n]), /* @__PURE__ */ a.jsxs("div", { className: "debugger-pane", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "debugger-title-bar", children: [
      /* @__PURE__ */ a.jsx("div", { className: "debugger-title", children: "Console" }),
      /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => l(void 0), children: "Clear console" })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "debugger-view", children: o == null ? void 0 : o.map((t) => t.join(", ")).join(`
`) })
  ] });
}, bn = ({
  contentFrameHeight: n = "1fr",
  debuggerOutput: o,
  children: l
}) => {
  const { config: t } = L();
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "debugger-wrapper",
      style: {
        gridTemplateRows: t.showDebug ? `${n} 1fr` : "auto"
      },
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "debugger-wrapper-child", children: l }),
        t.showDebug && /* @__PURE__ */ a.jsx(yn, { output: o })
      ]
    }
  );
}, Cn = ({ file: n }) => {
  const [o, l] = K([]), t = () => {
    const s = {
      consoleLog: (...c) => (l((h) => [...h, c]), Promise.resolve("messaged"))
    };
    for (let c of document.getElementsByClassName("js-preview-output"))
      c.innerHTML = "";
    En.create(s, {
      frameContainer: ".js-preview-output"
    }).promise.then(function(c) {
      l([]), c.run(
        `
        console.log = Websandbox.connection.remote.consoleLog;
        ${n.contents}
      `
      );
    });
  };
  return /* @__PURE__ */ a.jsx(bn, { contentFrameHeight: "1fr", debuggerOutput: o, children: /* @__PURE__ */ a.jsxs("div", { className: "js-preview-container", children: [
    /* @__PURE__ */ a.jsx("div", { className: "js-preview-output", children: "pending..." }),
    /* @__PURE__ */ a.jsx("div", { className: "button-bar", children: /* @__PURE__ */ a.jsx("button", { onClick: t, children: "Run" }) })
  ] }) });
}, xn = (n) => typeof n == "string" ? n : n instanceof Error ? n.message : "", On = ({ file: n }) => {
  let o = "";
  try {
    o = JSON.stringify(JSON.parse(n.contents), void 0, 2);
  } catch (l) {
    const t = xn(l);
    return /* @__PURE__ */ a.jsxs("div", { className: "json-preview", children: [
      "Cannot display json: invalid format.",
      t
    ] });
  }
  return /* @__PURE__ */ a.jsx("div", { className: "json-preview", children: o });
}, z = (n) => (/* @__PURE__ */ new Set(["html", "js", "json"])).has(n), _e = {
  html: _n,
  js: Cn,
  json: On
}, wn = (n) => n ? _e[n == null ? void 0 : n.language] ? _e[n == null ? void 0 : n.language] : () => /* @__PURE__ */ a.jsxs("div", { children: [
  "Cannot preview files of type ",
  n == null ? void 0 : n.language
] }) : () => "", Sn = () => {
  const {
    project: { files: n }
  } = L(), [o, l] = K(
    Object.values(n).find((c) => c.name === "index.html" && !c.folderId)
  ), t = Object.values(n).find(
    (c) => c.active && z(c.language)
  );
  H(() => {
    z(t == null ? void 0 : t.language) && l(t);
  }, [t]), H(() => {
    o && !n[o.id] && l(
      Object.values(n).find((c) => z(c.language))
    );
  }, [o, n]);
  const s = wn(o);
  return /* @__PURE__ */ a.jsxs("div", { className: "right-pane", children: [
    /* @__PURE__ */ a.jsx(
      "select",
      {
        onChange: (c) => {
          const h = Object.values(n).find(
            (g) => g.id === c.target.value
          );
          l(h);
        },
        value: o == null ? void 0 : o.id,
        children: Object.values(n).sort().filter((c) => z(c.language)).map((c) => /* @__PURE__ */ a.jsx("option", { value: c.id, children: c.name }, c.id))
      }
    ),
    o && /* @__PURE__ */ a.jsx(s, { file: o })
  ] });
}, jn = () => /* @__PURE__ */ a.jsxs("div", { className: "run-bar", children: [
  /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => alert("not implemented"), children: "Share" }) }),
  /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx("button", { type: "button", onClick: () => alert("not implemented"), children: "Finish" }) })
] }), Rn = ({
  project: n,
  config: o,
  setProject: l,
  setConfig: t
}) => {
  const [s, c] = ze(sn, n), h = an(c);
  return H(() => {
    l(s);
  }, [s]), /* @__PURE__ */ a.jsx(
    Qe,
    {
      value: {
        project: s,
        config: o,
        setProject: l,
        setConfig: t,
        ...h
      },
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "cdo-ide-outer",
          style: { gridTemplateRows: o.showRunBar ? "auto 40px" : "auto" },
          children: [
            /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "cdo-ide-inner",
                style: {
                  gridTemplateColumns: o.showPreview ? "1fr 2fr 2fr" : "1fr 2fr"
                },
                children: [
                  /* @__PURE__ */ a.jsx("div", { className: "cdo-ide-area", children: /* @__PURE__ */ a.jsx(pn, {}) }),
                  /* @__PURE__ */ a.jsx("div", { className: "cdo-ide-area", children: /* @__PURE__ */ a.jsx(vn, {}) }),
                  o.showPreview && /* @__PURE__ */ a.jsx(Sn, {})
                ]
              }
            ),
            o.showRunBar && /* @__PURE__ */ a.jsx(jn, {})
          ]
        }
      )
    }
  );
};
export {
  Rn as CDOIDE,
  ye as CDOIDEContext,
  Qe as CDOIDEContextProvider,
  M as PROJECT_REDUCER_ACTIONS,
  rn as findFiles,
  ie as findSubFolders,
  nn as getNextFileId,
  tn as getNextFolderId,
  sn as projectReducer,
  L as useCDOIDEContext,
  an as useProjectUtilities
};
//# sourceMappingURL=cdo-ide.js.map
