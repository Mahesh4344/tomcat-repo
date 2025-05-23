/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, true) : function(a2) {
    if (!a2.document) throw new Error("jQuery requires a window with a document");
    return b(a2);
  } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "1.12.4", n = function(a2, b2) {
    return new n.fn.init(a2, b2);
  }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a2, b2) {
    return b2.toUpperCase();
  };
  n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() {
    return e.call(this);
  }, get: function(a2) {
    return null != a2 ? 0 > a2 ? this[a2 + this.length] : this[a2] : e.call(this);
  }, pushStack: function(a2) {
    var b2 = n.merge(this.constructor(), a2);
    return b2.prevObject = this, b2.context = this.context, b2;
  }, each: function(a2) {
    return n.each(this, a2);
  }, map: function(a2) {
    return this.pushStack(n.map(this, function(b2, c2) {
      return a2.call(b2, c2, b2);
    }));
  }, slice: function() {
    return this.pushStack(e.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, eq: function(a2) {
    var b2 = this.length, c2 = +a2 + (0 > a2 ? b2 : 0);
    return this.pushStack(c2 >= 0 && b2 > c2 ? [this[c2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() {
    var a2, b2, c2, d2, e2, f2, g2 = arguments[0] || {}, h2 = 1, i2 = arguments.length, j2 = false;
    for ("boolean" == typeof g2 && (j2 = g2, g2 = arguments[h2] || {}, h2++), "object" == typeof g2 || n.isFunction(g2) || (g2 = {}), h2 === i2 && (g2 = this, h2--); i2 > h2; h2++) if (null != (e2 = arguments[h2])) for (d2 in e2) a2 = g2[d2], c2 = e2[d2], g2 !== c2 && (j2 && c2 && (n.isPlainObject(c2) || (b2 = n.isArray(c2))) ? (b2 ? (b2 = false, f2 = a2 && n.isArray(a2) ? a2 : []) : f2 = a2 && n.isPlainObject(a2) ? a2 : {}, g2[d2] = n.extend(j2, f2, c2)) : void 0 !== c2 && (g2[d2] = c2));
    return g2;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: true, error: function(a2) {
    throw new Error(a2);
  }, noop: function() {
  }, isFunction: function(a2) {
    return "function" === n.type(a2);
  }, isArray: Array.isArray || function(a2) {
    return "array" === n.type(a2);
  }, isWindow: function(a2) {
    return null != a2 && a2 == a2.window;
  }, isNumeric: function(a2) {
    var b2 = a2 && a2.toString();
    return !n.isArray(a2) && b2 - parseFloat(b2) + 1 >= 0;
  }, isEmptyObject: function(a2) {
    var b2;
    for (b2 in a2) return false;
    return true;
  }, isPlainObject: function(a2) {
    var b2;
    if (!a2 || "object" !== n.type(a2) || a2.nodeType || n.isWindow(a2)) return false;
    try {
      if (a2.constructor && !k.call(a2, "constructor") && !k.call(a2.constructor.prototype, "isPrototypeOf")) return false;
    } catch (c2) {
      return false;
    }
    if (!l.ownFirst) for (b2 in a2) return k.call(a2, b2);
    for (b2 in a2) ;
    return void 0 === b2 || k.call(a2, b2);
  }, type: function(a2) {
    return null == a2 ? a2 + "" : "object" == typeof a2 || "function" == typeof a2 ? i[j.call(a2)] || "object" : typeof a2;
  }, globalEval: function(b2) {
    b2 && n.trim(b2) && (a.execScript || function(b3) {
      a.eval.call(a, b3);
    })(b2);
  }, camelCase: function(a2) {
    return a2.replace(p, "ms-").replace(q, r);
  }, nodeName: function(a2, b2) {
    return a2.nodeName && a2.nodeName.toLowerCase() === b2.toLowerCase();
  }, each: function(a2, b2) {
    var c2, d2 = 0;
    if (s(a2)) {
      for (c2 = a2.length; c2 > d2; d2++) if (b2.call(a2[d2], d2, a2[d2]) === false) break;
    } else for (d2 in a2) if (b2.call(a2[d2], d2, a2[d2]) === false) break;
    return a2;
  }, trim: function(a2) {
    return null == a2 ? "" : (a2 + "").replace(o, "");
  }, makeArray: function(a2, b2) {
    var c2 = b2 || [];
    return null != a2 && (s(Object(a2)) ? n.merge(c2, "string" == typeof a2 ? [a2] : a2) : g.call(c2, a2)), c2;
  }, inArray: function(a2, b2, c2) {
    var d2;
    if (b2) {
      if (h) return h.call(b2, a2, c2);
      for (d2 = b2.length, c2 = c2 ? 0 > c2 ? Math.max(0, d2 + c2) : c2 : 0; d2 > c2; c2++) if (c2 in b2 && b2[c2] === a2) return c2;
    }
    return -1;
  }, merge: function(a2, b2) {
    var c2 = +b2.length, d2 = 0, e2 = a2.length;
    while (c2 > d2) a2[e2++] = b2[d2++];
    if (c2 !== c2) while (void 0 !== b2[d2]) a2[e2++] = b2[d2++];
    return a2.length = e2, a2;
  }, grep: function(a2, b2, c2) {
    for (var d2, e2 = [], f2 = 0, g2 = a2.length, h2 = !c2; g2 > f2; f2++) d2 = !b2(a2[f2], f2), d2 !== h2 && e2.push(a2[f2]);
    return e2;
  }, map: function(a2, b2, c2) {
    var d2, e2, g2 = 0, h2 = [];
    if (s(a2)) for (d2 = a2.length; d2 > g2; g2++) e2 = b2(a2[g2], g2, c2), null != e2 && h2.push(e2);
    else for (g2 in a2) e2 = b2(a2[g2], g2, c2), null != e2 && h2.push(e2);
    return f.apply([], h2);
  }, guid: 1, proxy: function(a2, b2) {
    var c2, d2, f2;
    return "string" == typeof b2 && (f2 = a2[b2], b2 = a2, a2 = f2), n.isFunction(a2) ? (c2 = e.call(arguments, 2), d2 = function() {
      return a2.apply(b2 || this, c2.concat(e.call(arguments)));
    }, d2.guid = a2.guid = a2.guid || n.guid++, d2) : void 0;
  }, now: function() {
    return +/* @__PURE__ */ new Date();
  }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a2, b2) {
    i["[object " + b2 + "]"] = b2.toLowerCase();
  });
  function s(a2) {
    var b2 = !!a2 && "length" in a2 && a2.length, c2 = n.type(a2);
    return "function" === c2 || n.isWindow(a2) ? false : "array" === c2 || 0 === b2 || "number" == typeof b2 && b2 > 0 && b2 - 1 in a2;
  }
  var t = function(a2) {
    var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), v2 = a2.document, w2 = 0, x2 = 0, y2 = ga2(), z2 = ga2(), A2 = ga2(), B2 = function(a3, b3) {
      return a3 === b3 && (l2 = true), 0;
    }, C2 = 1 << 31, D2 = {}.hasOwnProperty, E2 = [], F2 = E2.pop, G2 = E2.push, H2 = E2.push, I2 = E2.slice, J2 = function(a3, b3) {
      for (var c3 = 0, d3 = a3.length; d3 > c3; c3++) if (a3[c3] === b3) return c3;
      return -1;
    }, K2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L2 = "[\\x20\\t\\r\\n\\f]", M2 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N2 = "\\[" + L2 + "*(" + M2 + ")(?:" + L2 + "*([*^$|!~]?=)" + L2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + M2 + "))|)" + L2 + "*\\]", O2 = ":(" + M2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + N2 + ")*)|.*)\\)|)", P2 = new RegExp(L2 + "+", "g"), Q2 = new RegExp("^" + L2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L2 + "+$", "g"), R2 = new RegExp("^" + L2 + "*," + L2 + "*"), S2 = new RegExp("^" + L2 + "*([>+~]|" + L2 + ")" + L2 + "*"), T2 = new RegExp("=" + L2 + `*([^\\]'"]*?)` + L2 + "*\\]", "g"), U2 = new RegExp(O2), V2 = new RegExp("^" + M2 + "$"), W2 = { ID: new RegExp("^#(" + M2 + ")"), CLASS: new RegExp("^\\.(" + M2 + ")"), TAG: new RegExp("^(" + M2 + "|[*])"), ATTR: new RegExp("^" + N2), PSEUDO: new RegExp("^" + O2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L2 + "*(even|odd|(([+-]|)(\\d*)n|)" + L2 + "*(?:([+-]|)" + L2 + "*(\\d+)|))" + L2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + K2 + ")$", "i"), needsContext: new RegExp("^" + L2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L2 + "*((?:-\\d)?\\d*)" + L2 + "*\\)|)(?=[^-]|$)", "i") }, X2 = /^(?:input|select|textarea|button)$/i, Y2 = /^h\d$/i, Z2 = /^[^{]+\{\s*\[native \w/, $2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _2 = /[+~]/, aa2 = /'|\\/g, ba2 = new RegExp("\\\\([\\da-f]{1,6}" + L2 + "?|(" + L2 + ")|.)", "ig"), ca2 = function(a3, b3, c3) {
      var d3 = "0x" + b3 - 65536;
      return d3 !== d3 || c3 ? b3 : 0 > d3 ? String.fromCharCode(d3 + 65536) : String.fromCharCode(d3 >> 10 | 55296, 1023 & d3 | 56320);
    }, da2 = function() {
      m2();
    };
    try {
      H2.apply(E2 = I2.call(v2.childNodes), v2.childNodes), E2[v2.childNodes.length].nodeType;
    } catch (ea2) {
      H2 = { apply: E2.length ? function(a3, b3) {
        G2.apply(a3, I2.call(b3));
      } : function(a3, b3) {
        var c3 = a3.length, d3 = 0;
        while (a3[c3++] = b3[d3++]) ;
        a3.length = c3 - 1;
      } };
    }
    function fa2(a3, b3, d3, e3) {
      var f3, h3, j3, k3, l3, o3, r3, s3, w3 = b3 && b3.ownerDocument, x3 = b3 ? b3.nodeType : 9;
      if (d3 = d3 || [], "string" != typeof a3 || !a3 || 1 !== x3 && 9 !== x3 && 11 !== x3) return d3;
      if (!e3 && ((b3 ? b3.ownerDocument || b3 : v2) !== n2 && m2(b3), b3 = b3 || n2, p2)) {
        if (11 !== x3 && (o3 = $2.exec(a3))) if (f3 = o3[1]) {
          if (9 === x3) {
            if (!(j3 = b3.getElementById(f3))) return d3;
            if (j3.id === f3) return d3.push(j3), d3;
          } else if (w3 && (j3 = w3.getElementById(f3)) && t2(b3, j3) && j3.id === f3) return d3.push(j3), d3;
        } else {
          if (o3[2]) return H2.apply(d3, b3.getElementsByTagName(a3)), d3;
          if ((f3 = o3[3]) && c2.getElementsByClassName && b3.getElementsByClassName) return H2.apply(d3, b3.getElementsByClassName(f3)), d3;
        }
        if (c2.qsa && !A2[a3 + " "] && (!q2 || !q2.test(a3))) {
          if (1 !== x3) w3 = b3, s3 = a3;
          else if ("object" !== b3.nodeName.toLowerCase()) {
            (k3 = b3.getAttribute("id")) ? k3 = k3.replace(aa2, "\\$&") : b3.setAttribute("id", k3 = u2), r3 = g2(a3), h3 = r3.length, l3 = V2.test(k3) ? "#" + k3 : "[id='" + k3 + "']";
            while (h3--) r3[h3] = l3 + " " + qa2(r3[h3]);
            s3 = r3.join(","), w3 = _2.test(a3) && oa2(b3.parentNode) || b3;
          }
          if (s3) try {
            return H2.apply(d3, w3.querySelectorAll(s3)), d3;
          } catch (y3) {
          } finally {
            k3 === u2 && b3.removeAttribute("id");
          }
        }
      }
      return i2(a3.replace(Q2, "$1"), b3, d3, e3);
    }
    function ga2() {
      var a3 = [];
      function b3(c3, e3) {
        return a3.push(c3 + " ") > d2.cacheLength && delete b3[a3.shift()], b3[c3 + " "] = e3;
      }
      return b3;
    }
    function ha2(a3) {
      return a3[u2] = true, a3;
    }
    function ia2(a3) {
      var b3 = n2.createElement("div");
      try {
        return !!a3(b3);
      } catch (c3) {
        return false;
      } finally {
        b3.parentNode && b3.parentNode.removeChild(b3), b3 = null;
      }
    }
    function ja2(a3, b3) {
      var c3 = a3.split("|"), e3 = c3.length;
      while (e3--) d2.attrHandle[c3[e3]] = b3;
    }
    function ka2(a3, b3) {
      var c3 = b3 && a3, d3 = c3 && 1 === a3.nodeType && 1 === b3.nodeType && (~b3.sourceIndex || C2) - (~a3.sourceIndex || C2);
      if (d3) return d3;
      if (c3) {
        while (c3 = c3.nextSibling) if (c3 === b3) return -1;
      }
      return a3 ? 1 : -1;
    }
    function la2(a3) {
      return function(b3) {
        var c3 = b3.nodeName.toLowerCase();
        return "input" === c3 && b3.type === a3;
      };
    }
    function ma2(a3) {
      return function(b3) {
        var c3 = b3.nodeName.toLowerCase();
        return ("input" === c3 || "button" === c3) && b3.type === a3;
      };
    }
    function na2(a3) {
      return ha2(function(b3) {
        return b3 = +b3, ha2(function(c3, d3) {
          var e3, f3 = a3([], c3.length, b3), g3 = f3.length;
          while (g3--) c3[e3 = f3[g3]] && (c3[e3] = !(d3[e3] = c3[e3]));
        });
      });
    }
    function oa2(a3) {
      return a3 && "undefined" != typeof a3.getElementsByTagName && a3;
    }
    c2 = fa2.support = {}, f2 = fa2.isXML = function(a3) {
      var b3 = a3 && (a3.ownerDocument || a3).documentElement;
      return b3 ? "HTML" !== b3.nodeName : false;
    }, m2 = fa2.setDocument = function(a3) {
      var b3, e3, g3 = a3 ? a3.ownerDocument || a3 : v2;
      return g3 !== n2 && 9 === g3.nodeType && g3.documentElement ? (n2 = g3, o2 = n2.documentElement, p2 = !f2(n2), (e3 = n2.defaultView) && e3.top !== e3 && (e3.addEventListener ? e3.addEventListener("unload", da2, false) : e3.attachEvent && e3.attachEvent("onunload", da2)), c2.attributes = ia2(function(a4) {
        return a4.className = "i", !a4.getAttribute("className");
      }), c2.getElementsByTagName = ia2(function(a4) {
        return a4.appendChild(n2.createComment("")), !a4.getElementsByTagName("*").length;
      }), c2.getElementsByClassName = Z2.test(n2.getElementsByClassName), c2.getById = ia2(function(a4) {
        return o2.appendChild(a4).id = u2, !n2.getElementsByName || !n2.getElementsByName(u2).length;
      }), c2.getById ? (d2.find.ID = function(a4, b4) {
        if ("undefined" != typeof b4.getElementById && p2) {
          var c3 = b4.getElementById(a4);
          return c3 ? [c3] : [];
        }
      }, d2.filter.ID = function(a4) {
        var b4 = a4.replace(ba2, ca2);
        return function(a5) {
          return a5.getAttribute("id") === b4;
        };
      }) : (delete d2.find.ID, d2.filter.ID = function(a4) {
        var b4 = a4.replace(ba2, ca2);
        return function(a5) {
          var c3 = "undefined" != typeof a5.getAttributeNode && a5.getAttributeNode("id");
          return c3 && c3.value === b4;
        };
      }), d2.find.TAG = c2.getElementsByTagName ? function(a4, b4) {
        return "undefined" != typeof b4.getElementsByTagName ? b4.getElementsByTagName(a4) : c2.qsa ? b4.querySelectorAll(a4) : void 0;
      } : function(a4, b4) {
        var c3, d3 = [], e4 = 0, f3 = b4.getElementsByTagName(a4);
        if ("*" === a4) {
          while (c3 = f3[e4++]) 1 === c3.nodeType && d3.push(c3);
          return d3;
        }
        return f3;
      }, d2.find.CLASS = c2.getElementsByClassName && function(a4, b4) {
        return "undefined" != typeof b4.getElementsByClassName && p2 ? b4.getElementsByClassName(a4) : void 0;
      }, r2 = [], q2 = [], (c2.qsa = Z2.test(n2.querySelectorAll)) && (ia2(function(a4) {
        o2.appendChild(a4).innerHTML = "<a id='" + u2 + "'></a><select id='" + u2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", a4.querySelectorAll("[msallowcapture^='']").length && q2.push("[*^$]=" + L2 + `*(?:''|"")`), a4.querySelectorAll("[selected]").length || q2.push("\\[" + L2 + "*(?:value|" + K2 + ")"), a4.querySelectorAll("[id~=" + u2 + "-]").length || q2.push("~="), a4.querySelectorAll(":checked").length || q2.push(":checked"), a4.querySelectorAll("a#" + u2 + "+*").length || q2.push(".#.+[+~]");
      }), ia2(function(a4) {
        var b4 = n2.createElement("input");
        b4.setAttribute("type", "hidden"), a4.appendChild(b4).setAttribute("name", "D"), a4.querySelectorAll("[name=d]").length && q2.push("name" + L2 + "*[*^$|!~]?="), a4.querySelectorAll(":enabled").length || q2.push(":enabled", ":disabled"), a4.querySelectorAll("*,:x"), q2.push(",.*:");
      })), (c2.matchesSelector = Z2.test(s2 = o2.matches || o2.webkitMatchesSelector || o2.mozMatchesSelector || o2.oMatchesSelector || o2.msMatchesSelector)) && ia2(function(a4) {
        c2.disconnectedMatch = s2.call(a4, "div"), s2.call(a4, "[s!='']:x"), r2.push("!=", O2);
      }), q2 = q2.length && new RegExp(q2.join("|")), r2 = r2.length && new RegExp(r2.join("|")), b3 = Z2.test(o2.compareDocumentPosition), t2 = b3 || Z2.test(o2.contains) ? function(a4, b4) {
        var c3 = 9 === a4.nodeType ? a4.documentElement : a4, d3 = b4 && b4.parentNode;
        return a4 === d3 || !(!d3 || 1 !== d3.nodeType || !(c3.contains ? c3.contains(d3) : a4.compareDocumentPosition && 16 & a4.compareDocumentPosition(d3)));
      } : function(a4, b4) {
        if (b4) {
          while (b4 = b4.parentNode) if (b4 === a4) return true;
        }
        return false;
      }, B2 = b3 ? function(a4, b4) {
        if (a4 === b4) return l2 = true, 0;
        var d3 = !a4.compareDocumentPosition - !b4.compareDocumentPosition;
        return d3 ? d3 : (d3 = (a4.ownerDocument || a4) === (b4.ownerDocument || b4) ? a4.compareDocumentPosition(b4) : 1, 1 & d3 || !c2.sortDetached && b4.compareDocumentPosition(a4) === d3 ? a4 === n2 || a4.ownerDocument === v2 && t2(v2, a4) ? -1 : b4 === n2 || b4.ownerDocument === v2 && t2(v2, b4) ? 1 : k2 ? J2(k2, a4) - J2(k2, b4) : 0 : 4 & d3 ? -1 : 1);
      } : function(a4, b4) {
        if (a4 === b4) return l2 = true, 0;
        var c3, d3 = 0, e4 = a4.parentNode, f3 = b4.parentNode, g4 = [a4], h3 = [b4];
        if (!e4 || !f3) return a4 === n2 ? -1 : b4 === n2 ? 1 : e4 ? -1 : f3 ? 1 : k2 ? J2(k2, a4) - J2(k2, b4) : 0;
        if (e4 === f3) return ka2(a4, b4);
        c3 = a4;
        while (c3 = c3.parentNode) g4.unshift(c3);
        c3 = b4;
        while (c3 = c3.parentNode) h3.unshift(c3);
        while (g4[d3] === h3[d3]) d3++;
        return d3 ? ka2(g4[d3], h3[d3]) : g4[d3] === v2 ? -1 : h3[d3] === v2 ? 1 : 0;
      }, n2) : n2;
    }, fa2.matches = function(a3, b3) {
      return fa2(a3, null, null, b3);
    }, fa2.matchesSelector = function(a3, b3) {
      if ((a3.ownerDocument || a3) !== n2 && m2(a3), b3 = b3.replace(T2, "='$1']"), c2.matchesSelector && p2 && !A2[b3 + " "] && (!r2 || !r2.test(b3)) && (!q2 || !q2.test(b3))) try {
        var d3 = s2.call(a3, b3);
        if (d3 || c2.disconnectedMatch || a3.document && 11 !== a3.document.nodeType) return d3;
      } catch (e3) {
      }
      return fa2(b3, n2, null, [a3]).length > 0;
    }, fa2.contains = function(a3, b3) {
      return (a3.ownerDocument || a3) !== n2 && m2(a3), t2(a3, b3);
    }, fa2.attr = function(a3, b3) {
      (a3.ownerDocument || a3) !== n2 && m2(a3);
      var e3 = d2.attrHandle[b3.toLowerCase()], f3 = e3 && D2.call(d2.attrHandle, b3.toLowerCase()) ? e3(a3, b3, !p2) : void 0;
      return void 0 !== f3 ? f3 : c2.attributes || !p2 ? a3.getAttribute(b3) : (f3 = a3.getAttributeNode(b3)) && f3.specified ? f3.value : null;
    }, fa2.error = function(a3) {
      throw new Error("Syntax error, unrecognized expression: " + a3);
    }, fa2.uniqueSort = function(a3) {
      var b3, d3 = [], e3 = 0, f3 = 0;
      if (l2 = !c2.detectDuplicates, k2 = !c2.sortStable && a3.slice(0), a3.sort(B2), l2) {
        while (b3 = a3[f3++]) b3 === a3[f3] && (e3 = d3.push(f3));
        while (e3--) a3.splice(d3[e3], 1);
      }
      return k2 = null, a3;
    }, e2 = fa2.getText = function(a3) {
      var b3, c3 = "", d3 = 0, f3 = a3.nodeType;
      if (f3) {
        if (1 === f3 || 9 === f3 || 11 === f3) {
          if ("string" == typeof a3.textContent) return a3.textContent;
          for (a3 = a3.firstChild; a3; a3 = a3.nextSibling) c3 += e2(a3);
        } else if (3 === f3 || 4 === f3) return a3.nodeValue;
      } else while (b3 = a3[d3++]) c3 += e2(b3);
      return c3;
    }, d2 = fa2.selectors = { cacheLength: 50, createPseudo: ha2, match: W2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a3) {
      return a3[1] = a3[1].replace(ba2, ca2), a3[3] = (a3[3] || a3[4] || a3[5] || "").replace(ba2, ca2), "~=" === a3[2] && (a3[3] = " " + a3[3] + " "), a3.slice(0, 4);
    }, CHILD: function(a3) {
      return a3[1] = a3[1].toLowerCase(), "nth" === a3[1].slice(0, 3) ? (a3[3] || fa2.error(a3[0]), a3[4] = +(a3[4] ? a3[5] + (a3[6] || 1) : 2 * ("even" === a3[3] || "odd" === a3[3])), a3[5] = +(a3[7] + a3[8] || "odd" === a3[3])) : a3[3] && fa2.error(a3[0]), a3;
    }, PSEUDO: function(a3) {
      var b3, c3 = !a3[6] && a3[2];
      return W2.CHILD.test(a3[0]) ? null : (a3[3] ? a3[2] = a3[4] || a3[5] || "" : c3 && U2.test(c3) && (b3 = g2(c3, true)) && (b3 = c3.indexOf(")", c3.length - b3) - c3.length) && (a3[0] = a3[0].slice(0, b3), a3[2] = c3.slice(0, b3)), a3.slice(0, 3));
    } }, filter: { TAG: function(a3) {
      var b3 = a3.replace(ba2, ca2).toLowerCase();
      return "*" === a3 ? function() {
        return true;
      } : function(a4) {
        return a4.nodeName && a4.nodeName.toLowerCase() === b3;
      };
    }, CLASS: function(a3) {
      var b3 = y2[a3 + " "];
      return b3 || (b3 = new RegExp("(^|" + L2 + ")" + a3 + "(" + L2 + "|$)")) && y2(a3, function(a4) {
        return b3.test("string" == typeof a4.className && a4.className || "undefined" != typeof a4.getAttribute && a4.getAttribute("class") || "");
      });
    }, ATTR: function(a3, b3, c3) {
      return function(d3) {
        var e3 = fa2.attr(d3, a3);
        return null == e3 ? "!=" === b3 : b3 ? (e3 += "", "=" === b3 ? e3 === c3 : "!=" === b3 ? e3 !== c3 : "^=" === b3 ? c3 && 0 === e3.indexOf(c3) : "*=" === b3 ? c3 && e3.indexOf(c3) > -1 : "$=" === b3 ? c3 && e3.slice(-c3.length) === c3 : "~=" === b3 ? (" " + e3.replace(P2, " ") + " ").indexOf(c3) > -1 : "|=" === b3 ? e3 === c3 || e3.slice(0, c3.length + 1) === c3 + "-" : false) : true;
      };
    }, CHILD: function(a3, b3, c3, d3, e3) {
      var f3 = "nth" !== a3.slice(0, 3), g3 = "last" !== a3.slice(-4), h3 = "of-type" === b3;
      return 1 === d3 && 0 === e3 ? function(a4) {
        return !!a4.parentNode;
      } : function(b4, c4, i3) {
        var j3, k3, l3, m3, n3, o3, p3 = f3 !== g3 ? "nextSibling" : "previousSibling", q3 = b4.parentNode, r3 = h3 && b4.nodeName.toLowerCase(), s3 = !i3 && !h3, t3 = false;
        if (q3) {
          if (f3) {
            while (p3) {
              m3 = b4;
              while (m3 = m3[p3]) if (h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType) return false;
              o3 = p3 = "only" === a3 && !o3 && "nextSibling";
            }
            return true;
          }
          if (o3 = [g3 ? q3.firstChild : q3.lastChild], g3 && s3) {
            m3 = q3, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3 && j3[2], m3 = n3 && q3.childNodes[n3];
            while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop()) if (1 === m3.nodeType && ++t3 && m3 === b4) {
              k3[a3] = [w2, n3, t3];
              break;
            }
          } else if (s3 && (m3 = b4, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3), t3 === false) {
            while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop()) if ((h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType) && ++t3 && (s3 && (l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), k3[a3] = [w2, t3]), m3 === b4)) break;
          }
          return t3 -= e3, t3 === d3 || t3 % d3 === 0 && t3 / d3 >= 0;
        }
      };
    }, PSEUDO: function(a3, b3) {
      var c3, e3 = d2.pseudos[a3] || d2.setFilters[a3.toLowerCase()] || fa2.error("unsupported pseudo: " + a3);
      return e3[u2] ? e3(b3) : e3.length > 1 ? (c3 = [a3, a3, "", b3], d2.setFilters.hasOwnProperty(a3.toLowerCase()) ? ha2(function(a4, c4) {
        var d3, f3 = e3(a4, b3), g3 = f3.length;
        while (g3--) d3 = J2(a4, f3[g3]), a4[d3] = !(c4[d3] = f3[g3]);
      }) : function(a4) {
        return e3(a4, 0, c3);
      }) : e3;
    } }, pseudos: { not: ha2(function(a3) {
      var b3 = [], c3 = [], d3 = h2(a3.replace(Q2, "$1"));
      return d3[u2] ? ha2(function(a4, b4, c4, e3) {
        var f3, g3 = d3(a4, null, e3, []), h3 = a4.length;
        while (h3--) (f3 = g3[h3]) && (a4[h3] = !(b4[h3] = f3));
      }) : function(a4, e3, f3) {
        return b3[0] = a4, d3(b3, null, f3, c3), b3[0] = null, !c3.pop();
      };
    }), has: ha2(function(a3) {
      return function(b3) {
        return fa2(a3, b3).length > 0;
      };
    }), contains: ha2(function(a3) {
      return a3 = a3.replace(ba2, ca2), function(b3) {
        return (b3.textContent || b3.innerText || e2(b3)).indexOf(a3) > -1;
      };
    }), lang: ha2(function(a3) {
      return V2.test(a3 || "") || fa2.error("unsupported lang: " + a3), a3 = a3.replace(ba2, ca2).toLowerCase(), function(b3) {
        var c3;
        do
          if (c3 = p2 ? b3.lang : b3.getAttribute("xml:lang") || b3.getAttribute("lang")) return c3 = c3.toLowerCase(), c3 === a3 || 0 === c3.indexOf(a3 + "-");
        while ((b3 = b3.parentNode) && 1 === b3.nodeType);
        return false;
      };
    }), target: function(b3) {
      var c3 = a2.location && a2.location.hash;
      return c3 && c3.slice(1) === b3.id;
    }, root: function(a3) {
      return a3 === o2;
    }, focus: function(a3) {
      return a3 === n2.activeElement && (!n2.hasFocus || n2.hasFocus()) && !!(a3.type || a3.href || ~a3.tabIndex);
    }, enabled: function(a3) {
      return a3.disabled === false;
    }, disabled: function(a3) {
      return a3.disabled === true;
    }, checked: function(a3) {
      var b3 = a3.nodeName.toLowerCase();
      return "input" === b3 && !!a3.checked || "option" === b3 && !!a3.selected;
    }, selected: function(a3) {
      return a3.parentNode && a3.parentNode.selectedIndex, a3.selected === true;
    }, empty: function(a3) {
      for (a3 = a3.firstChild; a3; a3 = a3.nextSibling) if (a3.nodeType < 6) return false;
      return true;
    }, parent: function(a3) {
      return !d2.pseudos.empty(a3);
    }, header: function(a3) {
      return Y2.test(a3.nodeName);
    }, input: function(a3) {
      return X2.test(a3.nodeName);
    }, button: function(a3) {
      var b3 = a3.nodeName.toLowerCase();
      return "input" === b3 && "button" === a3.type || "button" === b3;
    }, text: function(a3) {
      var b3;
      return "input" === a3.nodeName.toLowerCase() && "text" === a3.type && (null == (b3 = a3.getAttribute("type")) || "text" === b3.toLowerCase());
    }, first: na2(function() {
      return [0];
    }), last: na2(function(a3, b3) {
      return [b3 - 1];
    }), eq: na2(function(a3, b3, c3) {
      return [0 > c3 ? c3 + b3 : c3];
    }), even: na2(function(a3, b3) {
      for (var c3 = 0; b3 > c3; c3 += 2) a3.push(c3);
      return a3;
    }), odd: na2(function(a3, b3) {
      for (var c3 = 1; b3 > c3; c3 += 2) a3.push(c3);
      return a3;
    }), lt: na2(function(a3, b3, c3) {
      for (var d3 = 0 > c3 ? c3 + b3 : c3; --d3 >= 0; ) a3.push(d3);
      return a3;
    }), gt: na2(function(a3, b3, c3) {
      for (var d3 = 0 > c3 ? c3 + b3 : c3; ++d3 < b3; ) a3.push(d3);
      return a3;
    }) } }, d2.pseudos.nth = d2.pseudos.eq;
    for (b2 in { radio: true, checkbox: true, file: true, password: true, image: true }) d2.pseudos[b2] = la2(b2);
    for (b2 in { submit: true, reset: true }) d2.pseudos[b2] = ma2(b2);
    function pa2() {
    }
    pa2.prototype = d2.filters = d2.pseudos, d2.setFilters = new pa2(), g2 = fa2.tokenize = function(a3, b3) {
      var c3, e3, f3, g3, h3, i3, j3, k3 = z2[a3 + " "];
      if (k3) return b3 ? 0 : k3.slice(0);
      h3 = a3, i3 = [], j3 = d2.preFilter;
      while (h3) {
        c3 && !(e3 = R2.exec(h3)) || (e3 && (h3 = h3.slice(e3[0].length) || h3), i3.push(f3 = [])), c3 = false, (e3 = S2.exec(h3)) && (c3 = e3.shift(), f3.push({ value: c3, type: e3[0].replace(Q2, " ") }), h3 = h3.slice(c3.length));
        for (g3 in d2.filter) !(e3 = W2[g3].exec(h3)) || j3[g3] && !(e3 = j3[g3](e3)) || (c3 = e3.shift(), f3.push({ value: c3, type: g3, matches: e3 }), h3 = h3.slice(c3.length));
        if (!c3) break;
      }
      return b3 ? h3.length : h3 ? fa2.error(a3) : z2(a3, i3).slice(0);
    };
    function qa2(a3) {
      for (var b3 = 0, c3 = a3.length, d3 = ""; c3 > b3; b3++) d3 += a3[b3].value;
      return d3;
    }
    function ra2(a3, b3, c3) {
      var d3 = b3.dir, e3 = c3 && "parentNode" === d3, f3 = x2++;
      return b3.first ? function(b4, c4, f4) {
        while (b4 = b4[d3]) if (1 === b4.nodeType || e3) return a3(b4, c4, f4);
      } : function(b4, c4, g3) {
        var h3, i3, j3, k3 = [w2, f3];
        if (g3) {
          while (b4 = b4[d3]) if ((1 === b4.nodeType || e3) && a3(b4, c4, g3)) return true;
        } else while (b4 = b4[d3]) if (1 === b4.nodeType || e3) {
          if (j3 = b4[u2] || (b4[u2] = {}), i3 = j3[b4.uniqueID] || (j3[b4.uniqueID] = {}), (h3 = i3[d3]) && h3[0] === w2 && h3[1] === f3) return k3[2] = h3[2];
          if (i3[d3] = k3, k3[2] = a3(b4, c4, g3)) return true;
        }
      };
    }
    function sa2(a3) {
      return a3.length > 1 ? function(b3, c3, d3) {
        var e3 = a3.length;
        while (e3--) if (!a3[e3](b3, c3, d3)) return false;
        return true;
      } : a3[0];
    }
    function ta2(a3, b3, c3) {
      for (var d3 = 0, e3 = b3.length; e3 > d3; d3++) fa2(a3, b3[d3], c3);
      return c3;
    }
    function ua2(a3, b3, c3, d3, e3) {
      for (var f3, g3 = [], h3 = 0, i3 = a3.length, j3 = null != b3; i3 > h3; h3++) (f3 = a3[h3]) && (c3 && !c3(f3, d3, e3) || (g3.push(f3), j3 && b3.push(h3)));
      return g3;
    }
    function va2(a3, b3, c3, d3, e3, f3) {
      return d3 && !d3[u2] && (d3 = va2(d3)), e3 && !e3[u2] && (e3 = va2(e3, f3)), ha2(function(f4, g3, h3, i3) {
        var j3, k3, l3, m3 = [], n3 = [], o3 = g3.length, p3 = f4 || ta2(b3 || "*", h3.nodeType ? [h3] : h3, []), q3 = !a3 || !f4 && b3 ? p3 : ua2(p3, m3, a3, h3, i3), r3 = c3 ? e3 || (f4 ? a3 : o3 || d3) ? [] : g3 : q3;
        if (c3 && c3(q3, r3, h3, i3), d3) {
          j3 = ua2(r3, n3), d3(j3, [], h3, i3), k3 = j3.length;
          while (k3--) (l3 = j3[k3]) && (r3[n3[k3]] = !(q3[n3[k3]] = l3));
        }
        if (f4) {
          if (e3 || a3) {
            if (e3) {
              j3 = [], k3 = r3.length;
              while (k3--) (l3 = r3[k3]) && j3.push(q3[k3] = l3);
              e3(null, r3 = [], j3, i3);
            }
            k3 = r3.length;
            while (k3--) (l3 = r3[k3]) && (j3 = e3 ? J2(f4, l3) : m3[k3]) > -1 && (f4[j3] = !(g3[j3] = l3));
          }
        } else r3 = ua2(r3 === g3 ? r3.splice(o3, r3.length) : r3), e3 ? e3(null, g3, r3, i3) : H2.apply(g3, r3);
      });
    }
    function wa2(a3) {
      for (var b3, c3, e3, f3 = a3.length, g3 = d2.relative[a3[0].type], h3 = g3 || d2.relative[" "], i3 = g3 ? 1 : 0, k3 = ra2(function(a4) {
        return a4 === b3;
      }, h3, true), l3 = ra2(function(a4) {
        return J2(b3, a4) > -1;
      }, h3, true), m3 = [function(a4, c4, d3) {
        var e4 = !g3 && (d3 || c4 !== j2) || ((b3 = c4).nodeType ? k3(a4, c4, d3) : l3(a4, c4, d3));
        return b3 = null, e4;
      }]; f3 > i3; i3++) if (c3 = d2.relative[a3[i3].type]) m3 = [ra2(sa2(m3), c3)];
      else {
        if (c3 = d2.filter[a3[i3].type].apply(null, a3[i3].matches), c3[u2]) {
          for (e3 = ++i3; f3 > e3; e3++) if (d2.relative[a3[e3].type]) break;
          return va2(i3 > 1 && sa2(m3), i3 > 1 && qa2(a3.slice(0, i3 - 1).concat({ value: " " === a3[i3 - 2].type ? "*" : "" })).replace(Q2, "$1"), c3, e3 > i3 && wa2(a3.slice(i3, e3)), f3 > e3 && wa2(a3 = a3.slice(e3)), f3 > e3 && qa2(a3));
        }
        m3.push(c3);
      }
      return sa2(m3);
    }
    function xa2(a3, b3) {
      var c3 = b3.length > 0, e3 = a3.length > 0, f3 = function(f4, g3, h3, i3, k3) {
        var l3, o3, q3, r3 = 0, s3 = "0", t3 = f4 && [], u3 = [], v3 = j2, x3 = f4 || e3 && d2.find.TAG("*", k3), y3 = w2 += null == v3 ? 1 : Math.random() || 0.1, z3 = x3.length;
        for (k3 && (j2 = g3 === n2 || g3 || k3); s3 !== z3 && null != (l3 = x3[s3]); s3++) {
          if (e3 && l3) {
            o3 = 0, g3 || l3.ownerDocument === n2 || (m2(l3), h3 = !p2);
            while (q3 = a3[o3++]) if (q3(l3, g3 || n2, h3)) {
              i3.push(l3);
              break;
            }
            k3 && (w2 = y3);
          }
          c3 && ((l3 = !q3 && l3) && r3--, f4 && t3.push(l3));
        }
        if (r3 += s3, c3 && s3 !== r3) {
          o3 = 0;
          while (q3 = b3[o3++]) q3(t3, u3, g3, h3);
          if (f4) {
            if (r3 > 0) while (s3--) t3[s3] || u3[s3] || (u3[s3] = F2.call(i3));
            u3 = ua2(u3);
          }
          H2.apply(i3, u3), k3 && !f4 && u3.length > 0 && r3 + b3.length > 1 && fa2.uniqueSort(i3);
        }
        return k3 && (w2 = y3, j2 = v3), t3;
      };
      return c3 ? ha2(f3) : f3;
    }
    return h2 = fa2.compile = function(a3, b3) {
      var c3, d3 = [], e3 = [], f3 = A2[a3 + " "];
      if (!f3) {
        b3 || (b3 = g2(a3)), c3 = b3.length;
        while (c3--) f3 = wa2(b3[c3]), f3[u2] ? d3.push(f3) : e3.push(f3);
        f3 = A2(a3, xa2(e3, d3)), f3.selector = a3;
      }
      return f3;
    }, i2 = fa2.select = function(a3, b3, e3, f3) {
      var i3, j3, k3, l3, m3, n3 = "function" == typeof a3 && a3, o3 = !f3 && g2(a3 = n3.selector || a3);
      if (e3 = e3 || [], 1 === o3.length) {
        if (j3 = o3[0] = o3[0].slice(0), j3.length > 2 && "ID" === (k3 = j3[0]).type && c2.getById && 9 === b3.nodeType && p2 && d2.relative[j3[1].type]) {
          if (b3 = (d2.find.ID(k3.matches[0].replace(ba2, ca2), b3) || [])[0], !b3) return e3;
          n3 && (b3 = b3.parentNode), a3 = a3.slice(j3.shift().value.length);
        }
        i3 = W2.needsContext.test(a3) ? 0 : j3.length;
        while (i3--) {
          if (k3 = j3[i3], d2.relative[l3 = k3.type]) break;
          if ((m3 = d2.find[l3]) && (f3 = m3(k3.matches[0].replace(ba2, ca2), _2.test(j3[0].type) && oa2(b3.parentNode) || b3))) {
            if (j3.splice(i3, 1), a3 = f3.length && qa2(j3), !a3) return H2.apply(e3, f3), e3;
            break;
          }
        }
      }
      return (n3 || h2(a3, o3))(f3, b3, !p2, e3, !b3 || _2.test(a3) && oa2(b3.parentNode) || b3), e3;
    }, c2.sortStable = u2.split("").sort(B2).join("") === u2, c2.detectDuplicates = !!l2, m2(), c2.sortDetached = ia2(function(a3) {
      return 1 & a3.compareDocumentPosition(n2.createElement("div"));
    }), ia2(function(a3) {
      return a3.innerHTML = "<a href='#'></a>", "#" === a3.firstChild.getAttribute("href");
    }) || ja2("type|href|height|width", function(a3, b3, c3) {
      return c3 ? void 0 : a3.getAttribute(b3, "type" === b3.toLowerCase() ? 1 : 2);
    }), c2.attributes && ia2(function(a3) {
      return a3.innerHTML = "<input/>", a3.firstChild.setAttribute("value", ""), "" === a3.firstChild.getAttribute("value");
    }) || ja2("value", function(a3, b3, c3) {
      return c3 || "input" !== a3.nodeName.toLowerCase() ? void 0 : a3.defaultValue;
    }), ia2(function(a3) {
      return null == a3.getAttribute("disabled");
    }) || ja2(K2, function(a3, b3, c3) {
      var d3;
      return c3 ? void 0 : a3[b3] === true ? b3.toLowerCase() : (d3 = a3.getAttributeNode(b3)) && d3.specified ? d3.value : null;
    }), fa2;
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function(a2, b2, c2) {
    var d2 = [], e2 = void 0 !== c2;
    while ((a2 = a2[b2]) && 9 !== a2.nodeType) if (1 === a2.nodeType) {
      if (e2 && n(a2).is(c2)) break;
      d2.push(a2);
    }
    return d2;
  }, v = function(a2, b2) {
    for (var c2 = []; a2; a2 = a2.nextSibling) 1 === a2.nodeType && a2 !== b2 && c2.push(a2);
    return c2;
  }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
  function z(a2, b2, c2) {
    if (n.isFunction(b2)) return n.grep(a2, function(a3, d2) {
      return !!b2.call(a3, d2, a3) !== c2;
    });
    if (b2.nodeType) return n.grep(a2, function(a3) {
      return a3 === b2 !== c2;
    });
    if ("string" == typeof b2) {
      if (y.test(b2)) return n.filter(b2, a2, c2);
      b2 = n.filter(b2, a2);
    }
    return n.grep(a2, function(a3) {
      return n.inArray(a3, b2) > -1 !== c2;
    });
  }
  n.filter = function(a2, b2, c2) {
    var d2 = b2[0];
    return c2 && (a2 = ":not(" + a2 + ")"), 1 === b2.length && 1 === d2.nodeType ? n.find.matchesSelector(d2, a2) ? [d2] : [] : n.find.matches(a2, n.grep(b2, function(a3) {
      return 1 === a3.nodeType;
    }));
  }, n.fn.extend({ find: function(a2) {
    var b2, c2 = [], d2 = this, e2 = d2.length;
    if ("string" != typeof a2) return this.pushStack(n(a2).filter(function() {
      for (b2 = 0; e2 > b2; b2++) if (n.contains(d2[b2], this)) return true;
    }));
    for (b2 = 0; e2 > b2; b2++) n.find(a2, d2[b2], c2);
    return c2 = this.pushStack(e2 > 1 ? n.unique(c2) : c2), c2.selector = this.selector ? this.selector + " " + a2 : a2, c2;
  }, filter: function(a2) {
    return this.pushStack(z(this, a2 || [], false));
  }, not: function(a2) {
    return this.pushStack(z(this, a2 || [], true));
  }, is: function(a2) {
    return !!z(this, "string" == typeof a2 && w.test(a2) ? n(a2) : a2 || [], false).length;
  } });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a2, b2, c2) {
    var e2, f2;
    if (!a2) return this;
    if (c2 = c2 || A, "string" == typeof a2) {
      if (e2 = "<" === a2.charAt(0) && ">" === a2.charAt(a2.length - 1) && a2.length >= 3 ? [null, a2, null] : B.exec(a2), !e2 || !e2[1] && b2) return !b2 || b2.jquery ? (b2 || c2).find(a2) : this.constructor(b2).find(a2);
      if (e2[1]) {
        if (b2 = b2 instanceof n ? b2[0] : b2, n.merge(this, n.parseHTML(e2[1], b2 && b2.nodeType ? b2.ownerDocument || b2 : d, true)), x.test(e2[1]) && n.isPlainObject(b2)) for (e2 in b2) n.isFunction(this[e2]) ? this[e2](b2[e2]) : this.attr(e2, b2[e2]);
        return this;
      }
      if (f2 = d.getElementById(e2[2]), f2 && f2.parentNode) {
        if (f2.id !== e2[2]) return A.find(a2);
        this.length = 1, this[0] = f2;
      }
      return this.context = d, this.selector = a2, this;
    }
    return a2.nodeType ? (this.context = this[0] = a2, this.length = 1, this) : n.isFunction(a2) ? "undefined" != typeof c2.ready ? c2.ready(a2) : a2(n) : (void 0 !== a2.selector && (this.selector = a2.selector, this.context = a2.context), n.makeArray(a2, this));
  };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/, E = { children: true, contents: true, next: true, prev: true };
  n.fn.extend({ has: function(a2) {
    var b2, c2 = n(a2, this), d2 = c2.length;
    return this.filter(function() {
      for (b2 = 0; d2 > b2; b2++) if (n.contains(this, c2[b2])) return true;
    });
  }, closest: function(a2, b2) {
    for (var c2, d2 = 0, e2 = this.length, f2 = [], g2 = w.test(a2) || "string" != typeof a2 ? n(a2, b2 || this.context) : 0; e2 > d2; d2++) for (c2 = this[d2]; c2 && c2 !== b2; c2 = c2.parentNode) if (c2.nodeType < 11 && (g2 ? g2.index(c2) > -1 : 1 === c2.nodeType && n.find.matchesSelector(c2, a2))) {
      f2.push(c2);
      break;
    }
    return this.pushStack(f2.length > 1 ? n.uniqueSort(f2) : f2);
  }, index: function(a2) {
    return a2 ? "string" == typeof a2 ? n.inArray(this[0], n(a2)) : n.inArray(a2.jquery ? a2[0] : a2, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(a2, b2) {
    return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a2, b2))));
  }, addBack: function(a2) {
    return this.add(null == a2 ? this.prevObject : this.prevObject.filter(a2));
  } });
  function F(a2, b2) {
    do
      a2 = a2[b2];
    while (a2 && 1 !== a2.nodeType);
    return a2;
  }
  n.each({ parent: function(a2) {
    var b2 = a2.parentNode;
    return b2 && 11 !== b2.nodeType ? b2 : null;
  }, parents: function(a2) {
    return u(a2, "parentNode");
  }, parentsUntil: function(a2, b2, c2) {
    return u(a2, "parentNode", c2);
  }, next: function(a2) {
    return F(a2, "nextSibling");
  }, prev: function(a2) {
    return F(a2, "previousSibling");
  }, nextAll: function(a2) {
    return u(a2, "nextSibling");
  }, prevAll: function(a2) {
    return u(a2, "previousSibling");
  }, nextUntil: function(a2, b2, c2) {
    return u(a2, "nextSibling", c2);
  }, prevUntil: function(a2, b2, c2) {
    return u(a2, "previousSibling", c2);
  }, siblings: function(a2) {
    return v((a2.parentNode || {}).firstChild, a2);
  }, children: function(a2) {
    return v(a2.firstChild);
  }, contents: function(a2) {
    return n.nodeName(a2, "iframe") ? a2.contentDocument || a2.contentWindow.document : n.merge([], a2.childNodes);
  } }, function(a2, b2) {
    n.fn[a2] = function(c2, d2) {
      var e2 = n.map(this, b2, c2);
      return "Until" !== a2.slice(-5) && (d2 = c2), d2 && "string" == typeof d2 && (e2 = n.filter(d2, e2)), this.length > 1 && (E[a2] || (e2 = n.uniqueSort(e2)), D.test(a2) && (e2 = e2.reverse())), this.pushStack(e2);
    };
  });
  var G = /\S+/g;
  function H(a2) {
    var b2 = {};
    return n.each(a2.match(G) || [], function(a3, c2) {
      b2[c2] = true;
    }), b2;
  }
  n.Callbacks = function(a2) {
    a2 = "string" == typeof a2 ? H(a2) : n.extend({}, a2);
    var b2, c2, d2, e2, f2 = [], g2 = [], h2 = -1, i2 = function() {
      for (e2 = a2.once, d2 = b2 = true; g2.length; h2 = -1) {
        c2 = g2.shift();
        while (++h2 < f2.length) f2[h2].apply(c2[0], c2[1]) === false && a2.stopOnFalse && (h2 = f2.length, c2 = false);
      }
      a2.memory || (c2 = false), b2 = false, e2 && (f2 = c2 ? [] : "");
    }, j2 = { add: function() {
      return f2 && (c2 && !b2 && (h2 = f2.length - 1, g2.push(c2)), function d3(b3) {
        n.each(b3, function(b4, c3) {
          n.isFunction(c3) ? a2.unique && j2.has(c3) || f2.push(c3) : c3 && c3.length && "string" !== n.type(c3) && d3(c3);
        });
      }(arguments), c2 && !b2 && i2()), this;
    }, remove: function() {
      return n.each(arguments, function(a3, b3) {
        var c3;
        while ((c3 = n.inArray(b3, f2, c3)) > -1) f2.splice(c3, 1), h2 >= c3 && h2--;
      }), this;
    }, has: function(a3) {
      return a3 ? n.inArray(a3, f2) > -1 : f2.length > 0;
    }, empty: function() {
      return f2 && (f2 = []), this;
    }, disable: function() {
      return e2 = g2 = [], f2 = c2 = "", this;
    }, disabled: function() {
      return !f2;
    }, lock: function() {
      return e2 = true, c2 || j2.disable(), this;
    }, locked: function() {
      return !!e2;
    }, fireWith: function(a3, c3) {
      return e2 || (c3 = c3 || [], c3 = [a3, c3.slice ? c3.slice() : c3], g2.push(c3), b2 || i2()), this;
    }, fire: function() {
      return j2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!d2;
    } };
    return j2;
  }, n.extend({ Deferred: function(a2) {
    var b2 = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c2 = "pending", d2 = { state: function() {
      return c2;
    }, always: function() {
      return e2.done(arguments).fail(arguments), this;
    }, then: function() {
      var a3 = arguments;
      return n.Deferred(function(c3) {
        n.each(b2, function(b3, f2) {
          var g2 = n.isFunction(a3[b3]) && a3[b3];
          e2[f2[1]](function() {
            var a4 = g2 && g2.apply(this, arguments);
            a4 && n.isFunction(a4.promise) ? a4.promise().progress(c3.notify).done(c3.resolve).fail(c3.reject) : c3[f2[0] + "With"](this === d2 ? c3.promise() : this, g2 ? [a4] : arguments);
          });
        }), a3 = null;
      }).promise();
    }, promise: function(a3) {
      return null != a3 ? n.extend(a3, d2) : d2;
    } }, e2 = {};
    return d2.pipe = d2.then, n.each(b2, function(a3, f2) {
      var g2 = f2[2], h2 = f2[3];
      d2[f2[1]] = g2.add, h2 && g2.add(function() {
        c2 = h2;
      }, b2[1 ^ a3][2].disable, b2[2][2].lock), e2[f2[0]] = function() {
        return e2[f2[0] + "With"](this === e2 ? d2 : this, arguments), this;
      }, e2[f2[0] + "With"] = g2.fireWith;
    }), d2.promise(e2), a2 && a2.call(e2, e2), e2;
  }, when: function(a2) {
    var b2 = 0, c2 = e.call(arguments), d2 = c2.length, f2 = 1 !== d2 || a2 && n.isFunction(a2.promise) ? d2 : 0, g2 = 1 === f2 ? a2 : n.Deferred(), h2 = function(a3, b3, c3) {
      return function(d3) {
        b3[a3] = this, c3[a3] = arguments.length > 1 ? e.call(arguments) : d3, c3 === i2 ? g2.notifyWith(b3, c3) : --f2 || g2.resolveWith(b3, c3);
      };
    }, i2, j2, k2;
    if (d2 > 1) for (i2 = new Array(d2), j2 = new Array(d2), k2 = new Array(d2); d2 > b2; b2++) c2[b2] && n.isFunction(c2[b2].promise) ? c2[b2].promise().progress(h2(b2, j2, i2)).done(h2(b2, k2, c2)).fail(g2.reject) : --f2;
    return f2 || g2.resolveWith(k2, c2), g2.promise();
  } });
  var I;
  n.fn.ready = function(a2) {
    return n.ready.promise().done(a2), this;
  }, n.extend({ isReady: false, readyWait: 1, holdReady: function(a2) {
    a2 ? n.readyWait++ : n.ready(true);
  }, ready: function(a2) {
    (a2 === true ? --n.readyWait : n.isReady) || (n.isReady = true, a2 !== true && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
  } });
  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }
  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
  }
  n.ready.promise = function(b2) {
    if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
    else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
    else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c2 = false;
      try {
        c2 = null == a.frameElement && d.documentElement;
      } catch (e2) {
      }
      c2 && c2.doScroll && !function f2() {
        if (!n.isReady) {
          try {
            c2.doScroll("left");
          } catch (b3) {
            return a.setTimeout(f2, 50);
          }
          J(), n.ready();
        }
      }();
    }
    return I.promise(b2);
  }, n.ready.promise();
  var L;
  for (L in n(l)) break;
  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = false, n(function() {
    var a2, b2, c2, e2;
    c2 = d.getElementsByTagName("body")[0], c2 && c2.style && (b2 = d.createElement("div"), e2 = d.createElement("div"), e2.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c2.appendChild(e2).appendChild(b2), "undefined" != typeof b2.style.zoom && (b2.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a2 = 3 === b2.offsetWidth, a2 && (c2.style.zoom = 1)), c2.removeChild(e2));
  }), function() {
    var a2 = d.createElement("div");
    l.deleteExpando = true;
    try {
      delete a2.test;
    } catch (b2) {
      l.deleteExpando = false;
    }
    a2 = null;
  }();
  var M = function(a2) {
    var b2 = n.noData[(a2.nodeName + " ").toLowerCase()], c2 = +a2.nodeType || 1;
    return 1 !== c2 && 9 !== c2 ? false : !b2 || b2 !== true && a2.getAttribute("classid") === b2;
  }, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
  function P(a2, b2, c2) {
    if (void 0 === c2 && 1 === a2.nodeType) {
      var d2 = "data-" + b2.replace(O, "-$1").toLowerCase();
      if (c2 = a2.getAttribute(d2), "string" == typeof c2) {
        try {
          c2 = "true" === c2 ? true : "false" === c2 ? false : "null" === c2 ? null : +c2 + "" === c2 ? +c2 : N.test(c2) ? n.parseJSON(c2) : c2;
        } catch (e2) {
        }
        n.data(a2, b2, c2);
      } else c2 = void 0;
    }
    return c2;
  }
  function Q(a2) {
    var b2;
    for (b2 in a2) if (("data" !== b2 || !n.isEmptyObject(a2[b2])) && "toJSON" !== b2) return false;
    return true;
  }
  function R(a2, b2, d2, e2) {
    if (M(a2)) {
      var f2, g2, h2 = n.expando, i2 = a2.nodeType, j2 = i2 ? n.cache : a2, k2 = i2 ? a2[h2] : a2[h2] && h2;
      if (k2 && j2[k2] && (e2 || j2[k2].data) || void 0 !== d2 || "string" != typeof b2) return k2 || (k2 = i2 ? a2[h2] = c.pop() || n.guid++ : h2), j2[k2] || (j2[k2] = i2 ? {} : { toJSON: n.noop }), "object" != typeof b2 && "function" != typeof b2 || (e2 ? j2[k2] = n.extend(j2[k2], b2) : j2[k2].data = n.extend(j2[k2].data, b2)), g2 = j2[k2], e2 || (g2.data || (g2.data = {}), g2 = g2.data), void 0 !== d2 && (g2[n.camelCase(b2)] = d2), "string" == typeof b2 ? (f2 = g2[b2], null == f2 && (f2 = g2[n.camelCase(b2)])) : f2 = g2, f2;
    }
  }
  function S(a2, b2, c2) {
    if (M(a2)) {
      var d2, e2, f2 = a2.nodeType, g2 = f2 ? n.cache : a2, h2 = f2 ? a2[n.expando] : n.expando;
      if (g2[h2]) {
        if (b2 && (d2 = c2 ? g2[h2] : g2[h2].data)) {
          n.isArray(b2) ? b2 = b2.concat(n.map(b2, n.camelCase)) : b2 in d2 ? b2 = [b2] : (b2 = n.camelCase(b2), b2 = b2 in d2 ? [b2] : b2.split(" ")), e2 = b2.length;
          while (e2--) delete d2[b2[e2]];
          if (c2 ? !Q(d2) : !n.isEmptyObject(d2)) return;
        }
        (c2 || (delete g2[h2].data, Q(g2[h2]))) && (f2 ? n.cleanData([a2], true) : l.deleteExpando || g2 != g2.window ? delete g2[h2] : g2[h2] = void 0);
      }
    }
  }
  n.extend({ cache: {}, noData: { "applet ": true, "embed ": true, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a2) {
    return a2 = a2.nodeType ? n.cache[a2[n.expando]] : a2[n.expando], !!a2 && !Q(a2);
  }, data: function(a2, b2, c2) {
    return R(a2, b2, c2);
  }, removeData: function(a2, b2) {
    return S(a2, b2);
  }, _data: function(a2, b2, c2) {
    return R(a2, b2, c2, true);
  }, _removeData: function(a2, b2) {
    return S(a2, b2, true);
  } }), n.fn.extend({ data: function(a2, b2) {
    var c2, d2, e2, f2 = this[0], g2 = f2 && f2.attributes;
    if (void 0 === a2) {
      if (this.length && (e2 = n.data(f2), 1 === f2.nodeType && !n._data(f2, "parsedAttrs"))) {
        c2 = g2.length;
        while (c2--) g2[c2] && (d2 = g2[c2].name, 0 === d2.indexOf("data-") && (d2 = n.camelCase(d2.slice(5)), P(f2, d2, e2[d2])));
        n._data(f2, "parsedAttrs", true);
      }
      return e2;
    }
    return "object" == typeof a2 ? this.each(function() {
      n.data(this, a2);
    }) : arguments.length > 1 ? this.each(function() {
      n.data(this, a2, b2);
    }) : f2 ? P(f2, a2, n.data(f2, a2)) : void 0;
  }, removeData: function(a2) {
    return this.each(function() {
      n.removeData(this, a2);
    });
  } }), n.extend({ queue: function(a2, b2, c2) {
    var d2;
    return a2 ? (b2 = (b2 || "fx") + "queue", d2 = n._data(a2, b2), c2 && (!d2 || n.isArray(c2) ? d2 = n._data(a2, b2, n.makeArray(c2)) : d2.push(c2)), d2 || []) : void 0;
  }, dequeue: function(a2, b2) {
    b2 = b2 || "fx";
    var c2 = n.queue(a2, b2), d2 = c2.length, e2 = c2.shift(), f2 = n._queueHooks(a2, b2), g2 = function() {
      n.dequeue(a2, b2);
    };
    "inprogress" === e2 && (e2 = c2.shift(), d2--), e2 && ("fx" === b2 && c2.unshift("inprogress"), delete f2.stop, e2.call(a2, g2, f2)), !d2 && f2 && f2.empty.fire();
  }, _queueHooks: function(a2, b2) {
    var c2 = b2 + "queueHooks";
    return n._data(a2, c2) || n._data(a2, c2, { empty: n.Callbacks("once memory").add(function() {
      n._removeData(a2, b2 + "queue"), n._removeData(a2, c2);
    }) });
  } }), n.fn.extend({ queue: function(a2, b2) {
    var c2 = 2;
    return "string" != typeof a2 && (b2 = a2, a2 = "fx", c2--), arguments.length < c2 ? n.queue(this[0], a2) : void 0 === b2 ? this : this.each(function() {
      var c3 = n.queue(this, a2, b2);
      n._queueHooks(this, a2), "fx" === a2 && "inprogress" !== c3[0] && n.dequeue(this, a2);
    });
  }, dequeue: function(a2) {
    return this.each(function() {
      n.dequeue(this, a2);
    });
  }, clearQueue: function(a2) {
    return this.queue(a2 || "fx", []);
  }, promise: function(a2, b2) {
    var c2, d2 = 1, e2 = n.Deferred(), f2 = this, g2 = this.length, h2 = function() {
      --d2 || e2.resolveWith(f2, [f2]);
    };
    "string" != typeof a2 && (b2 = a2, a2 = void 0), a2 = a2 || "fx";
    while (g2--) c2 = n._data(f2[g2], a2 + "queueHooks"), c2 && c2.empty && (d2++, c2.empty.add(h2));
    return h2(), e2.promise(b2);
  } }), function() {
    var a2;
    l.shrinkWrapBlocks = function() {
      if (null != a2) return a2;
      a2 = false;
      var b2, c2, e2;
      return c2 = d.getElementsByTagName("body")[0], c2 && c2.style ? (b2 = d.createElement("div"), e2 = d.createElement("div"), e2.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c2.appendChild(e2).appendChild(b2), "undefined" != typeof b2.style.zoom && (b2.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b2.appendChild(d.createElement("div")).style.width = "5px", a2 = 3 !== b2.offsetWidth), c2.removeChild(e2), a2) : void 0;
    };
  }();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), V = ["Top", "Right", "Bottom", "Left"], W = function(a2, b2) {
    return a2 = b2 || a2, "none" === n.css(a2, "display") || !n.contains(a2.ownerDocument, a2);
  };
  function X(a2, b2, c2, d2) {
    var e2, f2 = 1, g2 = 20, h2 = d2 ? function() {
      return d2.cur();
    } : function() {
      return n.css(a2, b2, "");
    }, i2 = h2(), j2 = c2 && c2[3] || (n.cssNumber[b2] ? "" : "px"), k2 = (n.cssNumber[b2] || "px" !== j2 && +i2) && U.exec(n.css(a2, b2));
    if (k2 && k2[3] !== j2) {
      j2 = j2 || k2[3], c2 = c2 || [], k2 = +i2 || 1;
      do
        f2 = f2 || ".5", k2 /= f2, n.style(a2, b2, k2 + j2);
      while (f2 !== (f2 = h2() / i2) && 1 !== f2 && --g2);
    }
    return c2 && (k2 = +k2 || +i2 || 0, e2 = c2[1] ? k2 + (c2[1] + 1) * c2[2] : +c2[2], d2 && (d2.unit = j2, d2.start = k2, d2.end = e2)), e2;
  }
  var Y = function(a2, b2, c2, d2, e2, f2, g2) {
    var h2 = 0, i2 = a2.length, j2 = null == c2;
    if ("object" === n.type(c2)) {
      e2 = true;
      for (h2 in c2) Y(a2, b2, h2, c2[h2], true, f2, g2);
    } else if (void 0 !== d2 && (e2 = true, n.isFunction(d2) || (g2 = true), j2 && (g2 ? (b2.call(a2, d2), b2 = null) : (j2 = b2, b2 = function(a3, b3, c3) {
      return j2.call(n(a3), c3);
    })), b2)) for (; i2 > h2; h2++) b2(a2[h2], c2, g2 ? d2 : d2.call(a2[h2], h2, b2(a2[h2], c2)));
    return e2 ? a2 : j2 ? b2.call(a2) : i2 ? b2(a2[0], c2) : f2;
  }, Z = /^(?:checkbox|radio)$/i, $ = /<([\w:-]+)/, _ = /^$|\/(?:java|ecma)script/i, aa = /^\s+/, ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ca(a2) {
    var b2 = ba.split("|"), c2 = a2.createDocumentFragment();
    if (c2.createElement) while (b2.length) c2.createElement(b2.pop());
    return c2;
  }
  !function() {
    var a2 = d.createElement("div"), b2 = d.createDocumentFragment(), c2 = d.createElement("input");
    a2.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a2.firstChild.nodeType, l.tbody = !a2.getElementsByTagName("tbody").length, l.htmlSerialize = !!a2.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(true).outerHTML, c2.type = "checkbox", c2.checked = true, b2.appendChild(c2), l.appendChecked = c2.checked, a2.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a2.cloneNode(true).lastChild.defaultValue, b2.appendChild(a2), c2 = d.createElement("input"), c2.setAttribute("type", "radio"), c2.setAttribute("checked", "checked"), c2.setAttribute("name", "t"), a2.appendChild(c2), l.checkClone = a2.cloneNode(true).cloneNode(true).lastChild.checked, l.noCloneEvent = !!a2.addEventListener, a2[n.expando] = 1, l.attributes = !a2.getAttribute(n.expando);
  }();
  var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
  function ea(a2, b2) {
    var c2, d2, e2 = 0, f2 = "undefined" != typeof a2.getElementsByTagName ? a2.getElementsByTagName(b2 || "*") : "undefined" != typeof a2.querySelectorAll ? a2.querySelectorAll(b2 || "*") : void 0;
    if (!f2) for (f2 = [], c2 = a2.childNodes || a2; null != (d2 = c2[e2]); e2++) !b2 || n.nodeName(d2, b2) ? f2.push(d2) : n.merge(f2, ea(d2, b2));
    return void 0 === b2 || b2 && n.nodeName(a2, b2) ? n.merge([a2], f2) : f2;
  }
  function fa(a2, b2) {
    for (var c2, d2 = 0; null != (c2 = a2[d2]); d2++) n._data(c2, "globalEval", !b2 || n._data(b2[d2], "globalEval"));
  }
  var ga = /<|&#?\w+;/, ha = /<tbody/i;
  function ia(a2) {
    Z.test(a2.type) && (a2.defaultChecked = a2.checked);
  }
  function ja(a2, b2, c2, d2, e2) {
    for (var f2, g2, h2, i2, j2, k2, m2, o2 = a2.length, p2 = ca(b2), q2 = [], r2 = 0; o2 > r2; r2++) if (g2 = a2[r2], g2 || 0 === g2) if ("object" === n.type(g2)) n.merge(q2, g2.nodeType ? [g2] : g2);
    else if (ga.test(g2)) {
      i2 = i2 || p2.appendChild(b2.createElement("div")), j2 = ($.exec(g2) || ["", ""])[1].toLowerCase(), m2 = da[j2] || da._default, i2.innerHTML = m2[1] + n.htmlPrefilter(g2) + m2[2], f2 = m2[0];
      while (f2--) i2 = i2.lastChild;
      if (!l.leadingWhitespace && aa.test(g2) && q2.push(b2.createTextNode(aa.exec(g2)[0])), !l.tbody) {
        g2 = "table" !== j2 || ha.test(g2) ? "<table>" !== m2[1] || ha.test(g2) ? 0 : i2 : i2.firstChild, f2 = g2 && g2.childNodes.length;
        while (f2--) n.nodeName(k2 = g2.childNodes[f2], "tbody") && !k2.childNodes.length && g2.removeChild(k2);
      }
      n.merge(q2, i2.childNodes), i2.textContent = "";
      while (i2.firstChild) i2.removeChild(i2.firstChild);
      i2 = p2.lastChild;
    } else q2.push(b2.createTextNode(g2));
    i2 && p2.removeChild(i2), l.appendChecked || n.grep(ea(q2, "input"), ia), r2 = 0;
    while (g2 = q2[r2++]) if (d2 && n.inArray(g2, d2) > -1) e2 && e2.push(g2);
    else if (h2 = n.contains(g2.ownerDocument, g2), i2 = ea(p2.appendChild(g2), "script"), h2 && fa(i2), c2) {
      f2 = 0;
      while (g2 = i2[f2++]) _.test(g2.type || "") && c2.push(g2);
    }
    return i2 = null, p2;
  }
  !function() {
    var b2, c2, e2 = d.createElement("div");
    for (b2 in { submit: true, change: true, focusin: true }) c2 = "on" + b2, (l[b2] = c2 in a) || (e2.setAttribute(c2, "t"), l[b2] = e2.attributes[c2].expando === false);
    e2 = null;
  }();
  var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/;
  function pa() {
    return true;
  }
  function qa() {
    return false;
  }
  function ra() {
    try {
      return d.activeElement;
    } catch (a2) {
    }
  }
  function sa(a2, b2, c2, d2, e2, f2) {
    var g2, h2;
    if ("object" == typeof b2) {
      "string" != typeof c2 && (d2 = d2 || c2, c2 = void 0);
      for (h2 in b2) sa(a2, h2, c2, d2, b2[h2], f2);
      return a2;
    }
    if (null == d2 && null == e2 ? (e2 = c2, d2 = c2 = void 0) : null == e2 && ("string" == typeof c2 ? (e2 = d2, d2 = void 0) : (e2 = d2, d2 = c2, c2 = void 0)), e2 === false) e2 = qa;
    else if (!e2) return a2;
    return 1 === f2 && (g2 = e2, e2 = function(a3) {
      return n().off(a3), g2.apply(this, arguments);
    }, e2.guid = g2.guid || (g2.guid = n.guid++)), a2.each(function() {
      n.event.add(this, b2, e2, d2, c2);
    });
  }
  n.event = { global: {}, add: function(a2, b2, c2, d2, e2) {
    var f2, g2, h2, i2, j2, k2, l2, m2, o2, p2, q2, r2 = n._data(a2);
    if (r2) {
      c2.handler && (i2 = c2, c2 = i2.handler, e2 = i2.selector), c2.guid || (c2.guid = n.guid++), (g2 = r2.events) || (g2 = r2.events = {}), (k2 = r2.handle) || (k2 = r2.handle = function(a3) {
        return "undefined" == typeof n || a3 && n.event.triggered === a3.type ? void 0 : n.event.dispatch.apply(k2.elem, arguments);
      }, k2.elem = a2), b2 = (b2 || "").match(G) || [""], h2 = b2.length;
      while (h2--) f2 = oa.exec(b2[h2]) || [], o2 = q2 = f2[1], p2 = (f2[2] || "").split(".").sort(), o2 && (j2 = n.event.special[o2] || {}, o2 = (e2 ? j2.delegateType : j2.bindType) || o2, j2 = n.event.special[o2] || {}, l2 = n.extend({ type: o2, origType: q2, data: d2, handler: c2, guid: c2.guid, selector: e2, needsContext: e2 && n.expr.match.needsContext.test(e2), namespace: p2.join(".") }, i2), (m2 = g2[o2]) || (m2 = g2[o2] = [], m2.delegateCount = 0, j2.setup && j2.setup.call(a2, d2, p2, k2) !== false || (a2.addEventListener ? a2.addEventListener(o2, k2, false) : a2.attachEvent && a2.attachEvent("on" + o2, k2))), j2.add && (j2.add.call(a2, l2), l2.handler.guid || (l2.handler.guid = c2.guid)), e2 ? m2.splice(m2.delegateCount++, 0, l2) : m2.push(l2), n.event.global[o2] = true);
      a2 = null;
    }
  }, remove: function(a2, b2, c2, d2, e2) {
    var f2, g2, h2, i2, j2, k2, l2, m2, o2, p2, q2, r2 = n.hasData(a2) && n._data(a2);
    if (r2 && (k2 = r2.events)) {
      b2 = (b2 || "").match(G) || [""], j2 = b2.length;
      while (j2--) if (h2 = oa.exec(b2[j2]) || [], o2 = q2 = h2[1], p2 = (h2[2] || "").split(".").sort(), o2) {
        l2 = n.event.special[o2] || {}, o2 = (d2 ? l2.delegateType : l2.bindType) || o2, m2 = k2[o2] || [], h2 = h2[2] && new RegExp("(^|\\.)" + p2.join("\\.(?:.*\\.|)") + "(\\.|$)"), i2 = f2 = m2.length;
        while (f2--) g2 = m2[f2], !e2 && q2 !== g2.origType || c2 && c2.guid !== g2.guid || h2 && !h2.test(g2.namespace) || d2 && d2 !== g2.selector && ("**" !== d2 || !g2.selector) || (m2.splice(f2, 1), g2.selector && m2.delegateCount--, l2.remove && l2.remove.call(a2, g2));
        i2 && !m2.length && (l2.teardown && l2.teardown.call(a2, p2, r2.handle) !== false || n.removeEvent(a2, o2, r2.handle), delete k2[o2]);
      } else for (o2 in k2) n.event.remove(a2, o2 + b2[j2], c2, d2, true);
      n.isEmptyObject(k2) && (delete r2.handle, n._removeData(a2, "events"));
    }
  }, trigger: function(b2, c2, e2, f2) {
    var g2, h2, i2, j2, l2, m2, o2, p2 = [e2 || d], q2 = k.call(b2, "type") ? b2.type : b2, r2 = k.call(b2, "namespace") ? b2.namespace.split(".") : [];
    if (i2 = m2 = e2 = e2 || d, 3 !== e2.nodeType && 8 !== e2.nodeType && !na.test(q2 + n.event.triggered) && (q2.indexOf(".") > -1 && (r2 = q2.split("."), q2 = r2.shift(), r2.sort()), h2 = q2.indexOf(":") < 0 && "on" + q2, b2 = b2[n.expando] ? b2 : new n.Event(q2, "object" == typeof b2 && b2), b2.isTrigger = f2 ? 2 : 3, b2.namespace = r2.join("."), b2.rnamespace = b2.namespace ? new RegExp("(^|\\.)" + r2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b2.result = void 0, b2.target || (b2.target = e2), c2 = null == c2 ? [b2] : n.makeArray(c2, [b2]), l2 = n.event.special[q2] || {}, f2 || !l2.trigger || l2.trigger.apply(e2, c2) !== false)) {
      if (!f2 && !l2.noBubble && !n.isWindow(e2)) {
        for (j2 = l2.delegateType || q2, na.test(j2 + q2) || (i2 = i2.parentNode); i2; i2 = i2.parentNode) p2.push(i2), m2 = i2;
        m2 === (e2.ownerDocument || d) && p2.push(m2.defaultView || m2.parentWindow || a);
      }
      o2 = 0;
      while ((i2 = p2[o2++]) && !b2.isPropagationStopped()) b2.type = o2 > 1 ? j2 : l2.bindType || q2, g2 = (n._data(i2, "events") || {})[b2.type] && n._data(i2, "handle"), g2 && g2.apply(i2, c2), g2 = h2 && i2[h2], g2 && g2.apply && M(i2) && (b2.result = g2.apply(i2, c2), b2.result === false && b2.preventDefault());
      if (b2.type = q2, !f2 && !b2.isDefaultPrevented() && (!l2._default || l2._default.apply(p2.pop(), c2) === false) && M(e2) && h2 && e2[q2] && !n.isWindow(e2)) {
        m2 = e2[h2], m2 && (e2[h2] = null), n.event.triggered = q2;
        try {
          e2[q2]();
        } catch (s2) {
        }
        n.event.triggered = void 0, m2 && (e2[h2] = m2);
      }
      return b2.result;
    }
  }, dispatch: function(a2) {
    a2 = n.event.fix(a2);
    var b2, c2, d2, f2, g2, h2 = [], i2 = e.call(arguments), j2 = (n._data(this, "events") || {})[a2.type] || [], k2 = n.event.special[a2.type] || {};
    if (i2[0] = a2, a2.delegateTarget = this, !k2.preDispatch || k2.preDispatch.call(this, a2) !== false) {
      h2 = n.event.handlers.call(this, a2, j2), b2 = 0;
      while ((f2 = h2[b2++]) && !a2.isPropagationStopped()) {
        a2.currentTarget = f2.elem, c2 = 0;
        while ((g2 = f2.handlers[c2++]) && !a2.isImmediatePropagationStopped()) a2.rnamespace && !a2.rnamespace.test(g2.namespace) || (a2.handleObj = g2, a2.data = g2.data, d2 = ((n.event.special[g2.origType] || {}).handle || g2.handler).apply(f2.elem, i2), void 0 !== d2 && (a2.result = d2) === false && (a2.preventDefault(), a2.stopPropagation()));
      }
      return k2.postDispatch && k2.postDispatch.call(this, a2), a2.result;
    }
  }, handlers: function(a2, b2) {
    var c2, d2, e2, f2, g2 = [], h2 = b2.delegateCount, i2 = a2.target;
    if (h2 && i2.nodeType && ("click" !== a2.type || isNaN(a2.button) || a2.button < 1)) {
      for (; i2 != this; i2 = i2.parentNode || this) if (1 === i2.nodeType && (i2.disabled !== true || "click" !== a2.type)) {
        for (d2 = [], c2 = 0; h2 > c2; c2++) f2 = b2[c2], e2 = f2.selector + " ", void 0 === d2[e2] && (d2[e2] = f2.needsContext ? n(e2, this).index(i2) > -1 : n.find(e2, this, null, [i2]).length), d2[e2] && d2.push(f2);
        d2.length && g2.push({ elem: i2, handlers: d2 });
      }
    }
    return h2 < b2.length && g2.push({ elem: this, handlers: b2.slice(h2) }), g2;
  }, fix: function(a2) {
    if (a2[n.expando]) return a2;
    var b2, c2, e2, f2 = a2.type, g2 = a2, h2 = this.fixHooks[f2];
    h2 || (this.fixHooks[f2] = h2 = ma.test(f2) ? this.mouseHooks : la.test(f2) ? this.keyHooks : {}), e2 = h2.props ? this.props.concat(h2.props) : this.props, a2 = new n.Event(g2), b2 = e2.length;
    while (b2--) c2 = e2[b2], a2[c2] = g2[c2];
    return a2.target || (a2.target = g2.srcElement || d), 3 === a2.target.nodeType && (a2.target = a2.target.parentNode), a2.metaKey = !!a2.metaKey, h2.filter ? h2.filter(a2, g2) : a2;
  }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a2, b2) {
    return null == a2.which && (a2.which = null != b2.charCode ? b2.charCode : b2.keyCode), a2;
  } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a2, b2) {
    var c2, e2, f2, g2 = b2.button, h2 = b2.fromElement;
    return null == a2.pageX && null != b2.clientX && (e2 = a2.target.ownerDocument || d, f2 = e2.documentElement, c2 = e2.body, a2.pageX = b2.clientX + (f2 && f2.scrollLeft || c2 && c2.scrollLeft || 0) - (f2 && f2.clientLeft || c2 && c2.clientLeft || 0), a2.pageY = b2.clientY + (f2 && f2.scrollTop || c2 && c2.scrollTop || 0) - (f2 && f2.clientTop || c2 && c2.clientTop || 0)), !a2.relatedTarget && h2 && (a2.relatedTarget = h2 === a2.target ? b2.toElement : h2), a2.which || void 0 === g2 || (a2.which = 1 & g2 ? 1 : 2 & g2 ? 3 : 4 & g2 ? 2 : 0), a2;
  } }, special: { load: { noBubble: true }, focus: { trigger: function() {
    if (this !== ra() && this.focus) try {
      return this.focus(), false;
    } catch (a2) {
    }
  }, delegateType: "focusin" }, blur: { trigger: function() {
    return this === ra() && this.blur ? (this.blur(), false) : void 0;
  }, delegateType: "focusout" }, click: { trigger: function() {
    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), false) : void 0;
  }, _default: function(a2) {
    return n.nodeName(a2.target, "a");
  } }, beforeunload: { postDispatch: function(a2) {
    void 0 !== a2.result && a2.originalEvent && (a2.originalEvent.returnValue = a2.result);
  } } }, simulate: function(a2, b2, c2) {
    var d2 = n.extend(new n.Event(), c2, { type: a2, isSimulated: true });
    n.event.trigger(d2, null, b2), d2.isDefaultPrevented() && c2.preventDefault();
  } }, n.removeEvent = d.removeEventListener ? function(a2, b2, c2) {
    a2.removeEventListener && a2.removeEventListener(b2, c2);
  } : function(a2, b2, c2) {
    var d2 = "on" + b2;
    a2.detachEvent && ("undefined" == typeof a2[d2] && (a2[d2] = null), a2.detachEvent(d2, c2));
  }, n.Event = function(a2, b2) {
    return this instanceof n.Event ? (a2 && a2.type ? (this.originalEvent = a2, this.type = a2.type, this.isDefaultPrevented = a2.defaultPrevented || void 0 === a2.defaultPrevented && a2.returnValue === false ? pa : qa) : this.type = a2, b2 && n.extend(this, b2), this.timeStamp = a2 && a2.timeStamp || n.now(), void (this[n.expando] = true)) : new n.Event(a2, b2);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function() {
    var a2 = this.originalEvent;
    this.isDefaultPrevented = pa, a2 && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false);
  }, stopPropagation: function() {
    var a2 = this.originalEvent;
    this.isPropagationStopped = pa, a2 && !this.isSimulated && (a2.stopPropagation && a2.stopPropagation(), a2.cancelBubble = true);
  }, stopImmediatePropagation: function() {
    var a2 = this.originalEvent;
    this.isImmediatePropagationStopped = pa, a2 && a2.stopImmediatePropagation && a2.stopImmediatePropagation(), this.stopPropagation();
  } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a2, b2) {
    n.event.special[a2] = { delegateType: b2, bindType: b2, handle: function(a3) {
      var c2, d2 = this, e2 = a3.relatedTarget, f2 = a3.handleObj;
      return e2 && (e2 === d2 || n.contains(d2, e2)) || (a3.type = f2.origType, c2 = f2.handler.apply(this, arguments), a3.type = b2), c2;
    } };
  }), l.submit || (n.event.special.submit = { setup: function() {
    return n.nodeName(this, "form") ? false : void n.event.add(this, "click._submit keypress._submit", function(a2) {
      var b2 = a2.target, c2 = n.nodeName(b2, "input") || n.nodeName(b2, "button") ? n.prop(b2, "form") : void 0;
      c2 && !n._data(c2, "submit") && (n.event.add(c2, "submit._submit", function(a3) {
        a3._submitBubble = true;
      }), n._data(c2, "submit", true));
    });
  }, postDispatch: function(a2) {
    a2._submitBubble && (delete a2._submitBubble, this.parentNode && !a2.isTrigger && n.event.simulate("submit", this.parentNode, a2));
  }, teardown: function() {
    return n.nodeName(this, "form") ? false : void n.event.remove(this, "._submit");
  } }), l.change || (n.event.special.change = { setup: function() {
    return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a2) {
      "checked" === a2.originalEvent.propertyName && (this._justChanged = true);
    }), n.event.add(this, "click._change", function(a2) {
      this._justChanged && !a2.isTrigger && (this._justChanged = false), n.event.simulate("change", this, a2);
    })), false) : void n.event.add(this, "beforeactivate._change", function(a2) {
      var b2 = a2.target;
      ka.test(b2.nodeName) && !n._data(b2, "change") && (n.event.add(b2, "change._change", function(a3) {
        !this.parentNode || a3.isSimulated || a3.isTrigger || n.event.simulate("change", this.parentNode, a3);
      }), n._data(b2, "change", true));
    });
  }, handle: function(a2) {
    var b2 = a2.target;
    return this !== b2 || a2.isSimulated || a2.isTrigger || "radio" !== b2.type && "checkbox" !== b2.type ? a2.handleObj.handler.apply(this, arguments) : void 0;
  }, teardown: function() {
    return n.event.remove(this, "._change"), !ka.test(this.nodeName);
  } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a2, b2) {
    var c2 = function(a3) {
      n.event.simulate(b2, a3.target, n.event.fix(a3));
    };
    n.event.special[b2] = { setup: function() {
      var d2 = this.ownerDocument || this, e2 = n._data(d2, b2);
      e2 || d2.addEventListener(a2, c2, true), n._data(d2, b2, (e2 || 0) + 1);
    }, teardown: function() {
      var d2 = this.ownerDocument || this, e2 = n._data(d2, b2) - 1;
      e2 ? n._data(d2, b2, e2) : (d2.removeEventListener(a2, c2, true), n._removeData(d2, b2));
    } };
  }), n.fn.extend({ on: function(a2, b2, c2, d2) {
    return sa(this, a2, b2, c2, d2);
  }, one: function(a2, b2, c2, d2) {
    return sa(this, a2, b2, c2, d2, 1);
  }, off: function(a2, b2, c2) {
    var d2, e2;
    if (a2 && a2.preventDefault && a2.handleObj) return d2 = a2.handleObj, n(a2.delegateTarget).off(d2.namespace ? d2.origType + "." + d2.namespace : d2.origType, d2.selector, d2.handler), this;
    if ("object" == typeof a2) {
      for (e2 in a2) this.off(e2, b2, a2[e2]);
      return this;
    }
    return b2 !== false && "function" != typeof b2 || (c2 = b2, b2 = void 0), c2 === false && (c2 = qa), this.each(function() {
      n.event.remove(this, a2, c2, b2);
    });
  }, trigger: function(a2, b2) {
    return this.each(function() {
      n.event.trigger(a2, b2, this);
    });
  }, triggerHandler: function(a2, b2) {
    var c2 = this[0];
    return c2 ? n.event.trigger(a2, b2, c2, true) : void 0;
  } });
  var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"), va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wa = /<script|<style|<link/i, xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Aa = ca(d), Ba = Aa.appendChild(d.createElement("div"));
  function Ca(a2, b2) {
    return n.nodeName(a2, "table") && n.nodeName(11 !== b2.nodeType ? b2 : b2.firstChild, "tr") ? a2.getElementsByTagName("tbody")[0] || a2.appendChild(a2.ownerDocument.createElement("tbody")) : a2;
  }
  function Da(a2) {
    return a2.type = (null !== n.find.attr(a2, "type")) + "/" + a2.type, a2;
  }
  function Ea(a2) {
    var b2 = ya.exec(a2.type);
    return b2 ? a2.type = b2[1] : a2.removeAttribute("type"), a2;
  }
  function Fa(a2, b2) {
    if (1 === b2.nodeType && n.hasData(a2)) {
      var c2, d2, e2, f2 = n._data(a2), g2 = n._data(b2, f2), h2 = f2.events;
      if (h2) {
        delete g2.handle, g2.events = {};
        for (c2 in h2) for (d2 = 0, e2 = h2[c2].length; e2 > d2; d2++) n.event.add(b2, c2, h2[c2][d2]);
      }
      g2.data && (g2.data = n.extend({}, g2.data));
    }
  }
  function Ga(a2, b2) {
    var c2, d2, e2;
    if (1 === b2.nodeType) {
      if (c2 = b2.nodeName.toLowerCase(), !l.noCloneEvent && b2[n.expando]) {
        e2 = n._data(b2);
        for (d2 in e2.events) n.removeEvent(b2, d2, e2.handle);
        b2.removeAttribute(n.expando);
      }
      "script" === c2 && b2.text !== a2.text ? (Da(b2).text = a2.text, Ea(b2)) : "object" === c2 ? (b2.parentNode && (b2.outerHTML = a2.outerHTML), l.html5Clone && a2.innerHTML && !n.trim(b2.innerHTML) && (b2.innerHTML = a2.innerHTML)) : "input" === c2 && Z.test(a2.type) ? (b2.defaultChecked = b2.checked = a2.checked, b2.value !== a2.value && (b2.value = a2.value)) : "option" === c2 ? b2.defaultSelected = b2.selected = a2.defaultSelected : "input" !== c2 && "textarea" !== c2 || (b2.defaultValue = a2.defaultValue);
    }
  }
  function Ha(a2, b2, c2, d2) {
    b2 = f.apply([], b2);
    var e2, g2, h2, i2, j2, k2, m2 = 0, o2 = a2.length, p2 = o2 - 1, q2 = b2[0], r2 = n.isFunction(q2);
    if (r2 || o2 > 1 && "string" == typeof q2 && !l.checkClone && xa.test(q2)) return a2.each(function(e3) {
      var f2 = a2.eq(e3);
      r2 && (b2[0] = q2.call(this, e3, f2.html())), Ha(f2, b2, c2, d2);
    });
    if (o2 && (k2 = ja(b2, a2[0].ownerDocument, false, a2, d2), e2 = k2.firstChild, 1 === k2.childNodes.length && (k2 = e2), e2 || d2)) {
      for (i2 = n.map(ea(k2, "script"), Da), h2 = i2.length; o2 > m2; m2++) g2 = k2, m2 !== p2 && (g2 = n.clone(g2, true, true), h2 && n.merge(i2, ea(g2, "script"))), c2.call(a2[m2], g2, m2);
      if (h2) for (j2 = i2[i2.length - 1].ownerDocument, n.map(i2, Ea), m2 = 0; h2 > m2; m2++) g2 = i2[m2], _.test(g2.type || "") && !n._data(g2, "globalEval") && n.contains(j2, g2) && (g2.src ? n._evalUrl && n._evalUrl(g2.src) : n.globalEval((g2.text || g2.textContent || g2.innerHTML || "").replace(za, "")));
      k2 = e2 = null;
    }
    return a2;
  }
  function Ia(a2, b2, c2) {
    for (var d2, e2 = b2 ? n.filter(b2, a2) : a2, f2 = 0; null != (d2 = e2[f2]); f2++) c2 || 1 !== d2.nodeType || n.cleanData(ea(d2)), d2.parentNode && (c2 && n.contains(d2.ownerDocument, d2) && fa(ea(d2, "script")), d2.parentNode.removeChild(d2));
    return a2;
  }
  n.extend({ htmlPrefilter: function(a2) {
    return a2.replace(va, "<$1></$2>");
  }, clone: function(a2, b2, c2) {
    var d2, e2, f2, g2, h2, i2 = n.contains(a2.ownerDocument, a2);
    if (l.html5Clone || n.isXMLDoc(a2) || !ua.test("<" + a2.nodeName + ">") ? f2 = a2.cloneNode(true) : (Ba.innerHTML = a2.outerHTML, Ba.removeChild(f2 = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a2.nodeType && 11 !== a2.nodeType || n.isXMLDoc(a2))) for (d2 = ea(f2), h2 = ea(a2), g2 = 0; null != (e2 = h2[g2]); ++g2) d2[g2] && Ga(e2, d2[g2]);
    if (b2) if (c2) for (h2 = h2 || ea(a2), d2 = d2 || ea(f2), g2 = 0; null != (e2 = h2[g2]); g2++) Fa(e2, d2[g2]);
    else Fa(a2, f2);
    return d2 = ea(f2, "script"), d2.length > 0 && fa(d2, !i2 && ea(a2, "script")), d2 = h2 = e2 = null, f2;
  }, cleanData: function(a2, b2) {
    for (var d2, e2, f2, g2, h2 = 0, i2 = n.expando, j2 = n.cache, k2 = l.attributes, m2 = n.event.special; null != (d2 = a2[h2]); h2++) if ((b2 || M(d2)) && (f2 = d2[i2], g2 = f2 && j2[f2])) {
      if (g2.events) for (e2 in g2.events) m2[e2] ? n.event.remove(d2, e2) : n.removeEvent(d2, e2, g2.handle);
      j2[f2] && (delete j2[f2], k2 || "undefined" == typeof d2.removeAttribute ? d2[i2] = void 0 : d2.removeAttribute(i2), c.push(f2));
    }
  } }), n.fn.extend({ domManip: Ha, detach: function(a2) {
    return Ia(this, a2, true);
  }, remove: function(a2) {
    return Ia(this, a2);
  }, text: function(a2) {
    return Y(this, function(a3) {
      return void 0 === a3 ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a3));
    }, null, a2, arguments.length);
  }, append: function() {
    return Ha(this, arguments, function(a2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b2 = Ca(this, a2);
        b2.appendChild(a2);
      }
    });
  }, prepend: function() {
    return Ha(this, arguments, function(a2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b2 = Ca(this, a2);
        b2.insertBefore(a2, b2.firstChild);
      }
    });
  }, before: function() {
    return Ha(this, arguments, function(a2) {
      this.parentNode && this.parentNode.insertBefore(a2, this);
    });
  }, after: function() {
    return Ha(this, arguments, function(a2) {
      this.parentNode && this.parentNode.insertBefore(a2, this.nextSibling);
    });
  }, empty: function() {
    for (var a2, b2 = 0; null != (a2 = this[b2]); b2++) {
      1 === a2.nodeType && n.cleanData(ea(a2, false));
      while (a2.firstChild) a2.removeChild(a2.firstChild);
      a2.options && n.nodeName(a2, "select") && (a2.options.length = 0);
    }
    return this;
  }, clone: function(a2, b2) {
    return a2 = null == a2 ? false : a2, b2 = null == b2 ? a2 : b2, this.map(function() {
      return n.clone(this, a2, b2);
    });
  }, html: function(a2) {
    return Y(this, function(a3) {
      var b2 = this[0] || {}, c2 = 0, d2 = this.length;
      if (void 0 === a3) return 1 === b2.nodeType ? b2.innerHTML.replace(ta, "") : void 0;
      if ("string" == typeof a3 && !wa.test(a3) && (l.htmlSerialize || !ua.test(a3)) && (l.leadingWhitespace || !aa.test(a3)) && !da[($.exec(a3) || ["", ""])[1].toLowerCase()]) {
        a3 = n.htmlPrefilter(a3);
        try {
          for (; d2 > c2; c2++) b2 = this[c2] || {}, 1 === b2.nodeType && (n.cleanData(ea(b2, false)), b2.innerHTML = a3);
          b2 = 0;
        } catch (e2) {
        }
      }
      b2 && this.empty().append(a3);
    }, null, a2, arguments.length);
  }, replaceWith: function() {
    var a2 = [];
    return Ha(this, arguments, function(b2) {
      var c2 = this.parentNode;
      n.inArray(this, a2) < 0 && (n.cleanData(ea(this)), c2 && c2.replaceChild(b2, this));
    }, a2);
  } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a2, b2) {
    n.fn[a2] = function(a3) {
      for (var c2, d2 = 0, e2 = [], f2 = n(a3), h2 = f2.length - 1; h2 >= d2; d2++) c2 = d2 === h2 ? this : this.clone(true), n(f2[d2])[b2](c2), g.apply(e2, c2.get());
      return this.pushStack(e2);
    };
  });
  var Ja, Ka = { HTML: "block", BODY: "block" };
  function La(a2, b2) {
    var c2 = n(b2.createElement(a2)).appendTo(b2.body), d2 = n.css(c2[0], "display");
    return c2.detach(), d2;
  }
  function Ma(a2) {
    var b2 = d, c2 = Ka[a2];
    return c2 || (c2 = La(a2, b2), "none" !== c2 && c2 || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b2.documentElement), b2 = (Ja[0].contentWindow || Ja[0].contentDocument).document, b2.write(), b2.close(), c2 = La(a2, b2), Ja.detach()), Ka[a2] = c2), c2;
  }
  var Na = /^margin/, Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Pa = function(a2, b2, c2, d2) {
    var e2, f2, g2 = {};
    for (f2 in b2) g2[f2] = a2.style[f2], a2.style[f2] = b2[f2];
    e2 = c2.apply(a2, d2 || []);
    for (f2 in b2) a2.style[f2] = g2[f2];
    return e2;
  }, Qa = d.documentElement;
  !function() {
    var b2, c2, e2, f2, g2, h2, i2 = d.createElement("div"), j2 = d.createElement("div");
    if (j2.style) {
      let k3 = function() {
        var k4, l2, m2 = d.documentElement;
        m2.appendChild(i2), j2.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b2 = e2 = h2 = false, c2 = g2 = true, a.getComputedStyle && (l2 = a.getComputedStyle(j2), b2 = "1%" !== (l2 || {}).top, h2 = "2px" === (l2 || {}).marginLeft, e2 = "4px" === (l2 || { width: "4px" }).width, j2.style.marginRight = "50%", c2 = "4px" === (l2 || { marginRight: "4px" }).marginRight, k4 = j2.appendChild(d.createElement("div")), k4.style.cssText = j2.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k4.style.marginRight = k4.style.width = "0", j2.style.width = "1px", g2 = !parseFloat((a.getComputedStyle(k4) || {}).marginRight), j2.removeChild(k4)), j2.style.display = "none", f2 = 0 === j2.getClientRects().length, f2 && (j2.style.display = "", j2.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j2.childNodes[0].style.borderCollapse = "separate", k4 = j2.getElementsByTagName("td"), k4[0].style.cssText = "margin:0;border:0;padding:0;display:none", f2 = 0 === k4[0].offsetHeight, f2 && (k4[0].style.display = "", k4[1].style.display = "none", f2 = 0 === k4[0].offsetHeight)), m2.removeChild(i2);
      };
      var k2 = k3;
      j2.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j2.style.opacity, l.cssFloat = !!j2.style.cssFloat, j2.style.backgroundClip = "content-box", j2.cloneNode(true).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j2.style.backgroundClip, i2 = d.createElement("div"), i2.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j2.innerHTML = "", i2.appendChild(j2), l.boxSizing = "" === j2.style.boxSizing || "" === j2.style.MozBoxSizing || "" === j2.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function() {
        return null == b2 && k3(), f2;
      }, boxSizingReliable: function() {
        return null == b2 && k3(), e2;
      }, pixelMarginRight: function() {
        return null == b2 && k3(), c2;
      }, pixelPosition: function() {
        return null == b2 && k3(), b2;
      }, reliableMarginRight: function() {
        return null == b2 && k3(), g2;
      }, reliableMarginLeft: function() {
        return null == b2 && k3(), h2;
      } });
    }
  }();
  var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function(b2) {
    var c2 = b2.ownerDocument.defaultView;
    return c2 && c2.opener || (c2 = a), c2.getComputedStyle(b2);
  }, Sa = function(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.style;
    return c2 = c2 || Ra(a2), g2 = c2 ? c2.getPropertyValue(b2) || c2[b2] : void 0, "" !== g2 && void 0 !== g2 || n.contains(a2.ownerDocument, a2) || (g2 = n.style(a2, b2)), c2 && !l.pixelMarginRight() && Oa.test(g2) && Na.test(b2) && (d2 = h2.width, e2 = h2.minWidth, f2 = h2.maxWidth, h2.minWidth = h2.maxWidth = h2.width = g2, g2 = c2.width, h2.width = d2, h2.minWidth = e2, h2.maxWidth = f2), void 0 === g2 ? g2 : g2 + "";
  }) : Qa.currentStyle && (Ra = function(a2) {
    return a2.currentStyle;
  }, Sa = function(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.style;
    return c2 = c2 || Ra(a2), g2 = c2 ? c2[b2] : void 0, null == g2 && h2 && h2[b2] && (g2 = h2[b2]), Oa.test(g2) && !Ta.test(b2) && (d2 = h2.left, e2 = a2.runtimeStyle, f2 = e2 && e2.left, f2 && (e2.left = a2.currentStyle.left), h2.left = "fontSize" === b2 ? "1em" : g2, g2 = h2.pixelLeft + "px", h2.left = d2, f2 && (e2.left = f2)), void 0 === g2 ? g2 : g2 + "" || "auto";
  });
  function Ua(a2, b2) {
    return { get: function() {
      return a2() ? void delete this.get : (this.get = b2).apply(this, arguments);
    } };
  }
  var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, Xa = /^(none|table(?!-c[ea]).+)/, Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = { position: "absolute", visibility: "hidden", display: "block" }, $a = { letterSpacing: "0", fontWeight: "400" }, _a = ["Webkit", "O", "Moz", "ms"], ab = d.createElement("div").style;
  function bb(a2) {
    if (a2 in ab) return a2;
    var b2 = a2.charAt(0).toUpperCase() + a2.slice(1), c2 = _a.length;
    while (c2--) if (a2 = _a[c2] + b2, a2 in ab) return a2;
  }
  function cb(a2, b2) {
    for (var c2, d2, e2, f2 = [], g2 = 0, h2 = a2.length; h2 > g2; g2++) d2 = a2[g2], d2.style && (f2[g2] = n._data(d2, "olddisplay"), c2 = d2.style.display, b2 ? (f2[g2] || "none" !== c2 || (d2.style.display = ""), "" === d2.style.display && W(d2) && (f2[g2] = n._data(d2, "olddisplay", Ma(d2.nodeName)))) : (e2 = W(d2), (c2 && "none" !== c2 || !e2) && n._data(d2, "olddisplay", e2 ? c2 : n.css(d2, "display"))));
    for (g2 = 0; h2 > g2; g2++) d2 = a2[g2], d2.style && (b2 && "none" !== d2.style.display && "" !== d2.style.display || (d2.style.display = b2 ? f2[g2] || "" : "none"));
    return a2;
  }
  function db(a2, b2, c2) {
    var d2 = Ya.exec(b2);
    return d2 ? Math.max(0, d2[1] - (c2 || 0)) + (d2[2] || "px") : b2;
  }
  function eb(a2, b2, c2, d2, e2) {
    for (var f2 = c2 === (d2 ? "border" : "content") ? 4 : "width" === b2 ? 1 : 0, g2 = 0; 4 > f2; f2 += 2) "margin" === c2 && (g2 += n.css(a2, c2 + V[f2], true, e2)), d2 ? ("content" === c2 && (g2 -= n.css(a2, "padding" + V[f2], true, e2)), "margin" !== c2 && (g2 -= n.css(a2, "border" + V[f2] + "Width", true, e2))) : (g2 += n.css(a2, "padding" + V[f2], true, e2), "padding" !== c2 && (g2 += n.css(a2, "border" + V[f2] + "Width", true, e2)));
    return g2;
  }
  function fb(a2, b2, c2) {
    var d2 = true, e2 = "width" === b2 ? a2.offsetWidth : a2.offsetHeight, f2 = Ra(a2), g2 = l.boxSizing && "border-box" === n.css(a2, "boxSizing", false, f2);
    if (0 >= e2 || null == e2) {
      if (e2 = Sa(a2, b2, f2), (0 > e2 || null == e2) && (e2 = a2.style[b2]), Oa.test(e2)) return e2;
      d2 = g2 && (l.boxSizingReliable() || e2 === a2.style[b2]), e2 = parseFloat(e2) || 0;
    }
    return e2 + eb(a2, b2, c2 || (g2 ? "border" : "content"), d2, f2) + "px";
  }
  n.extend({ cssHooks: { opacity: { get: function(a2, b2) {
    if (b2) {
      var c2 = Sa(a2, "opacity");
      return "" === c2 ? "1" : c2;
    }
  } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a2, b2, c2, d2) {
    if (a2 && 3 !== a2.nodeType && 8 !== a2.nodeType && a2.style) {
      var e2, f2, g2, h2 = n.camelCase(b2), i2 = a2.style;
      if (b2 = n.cssProps[h2] || (n.cssProps[h2] = bb(h2) || h2), g2 = n.cssHooks[b2] || n.cssHooks[h2], void 0 === c2) return g2 && "get" in g2 && void 0 !== (e2 = g2.get(a2, false, d2)) ? e2 : i2[b2];
      if (f2 = typeof c2, "string" === f2 && (e2 = U.exec(c2)) && e2[1] && (c2 = X(a2, b2, e2), f2 = "number"), null != c2 && c2 === c2 && ("number" === f2 && (c2 += e2 && e2[3] || (n.cssNumber[h2] ? "" : "px")), l.clearCloneStyle || "" !== c2 || 0 !== b2.indexOf("background") || (i2[b2] = "inherit"), !(g2 && "set" in g2 && void 0 === (c2 = g2.set(a2, c2, d2))))) try {
        i2[b2] = c2;
      } catch (j2) {
      }
    }
  }, css: function(a2, b2, c2, d2) {
    var e2, f2, g2, h2 = n.camelCase(b2);
    return b2 = n.cssProps[h2] || (n.cssProps[h2] = bb(h2) || h2), g2 = n.cssHooks[b2] || n.cssHooks[h2], g2 && "get" in g2 && (f2 = g2.get(a2, true, c2)), void 0 === f2 && (f2 = Sa(a2, b2, d2)), "normal" === f2 && b2 in $a && (f2 = $a[b2]), "" === c2 || c2 ? (e2 = parseFloat(f2), c2 === true || isFinite(e2) ? e2 || 0 : f2) : f2;
  } }), n.each(["height", "width"], function(a2, b2) {
    n.cssHooks[b2] = { get: function(a3, c2, d2) {
      return c2 ? Xa.test(n.css(a3, "display")) && 0 === a3.offsetWidth ? Pa(a3, Za, function() {
        return fb(a3, b2, d2);
      }) : fb(a3, b2, d2) : void 0;
    }, set: function(a3, c2, d2) {
      var e2 = d2 && Ra(a3);
      return db(a3, c2, d2 ? eb(a3, b2, d2, l.boxSizing && "border-box" === n.css(a3, "boxSizing", false, e2), e2) : 0);
    } };
  }), l.opacity || (n.cssHooks.opacity = { get: function(a2, b2) {
    return Wa.test((b2 && a2.currentStyle ? a2.currentStyle.filter : a2.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b2 ? "1" : "";
  }, set: function(a2, b2) {
    var c2 = a2.style, d2 = a2.currentStyle, e2 = n.isNumeric(b2) ? "alpha(opacity=" + 100 * b2 + ")" : "", f2 = d2 && d2.filter || c2.filter || "";
    c2.zoom = 1, (b2 >= 1 || "" === b2) && "" === n.trim(f2.replace(Va, "")) && c2.removeAttribute && (c2.removeAttribute("filter"), "" === b2 || d2 && !d2.filter) || (c2.filter = Va.test(f2) ? f2.replace(Va, e2) : f2 + " " + e2);
  } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a2, b2) {
    return b2 ? Pa(a2, { display: "inline-block" }, Sa, [a2, "marginRight"]) : void 0;
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a2, b2) {
    return b2 ? (parseFloat(Sa(a2, "marginLeft")) || (n.contains(a2.ownerDocument, a2) ? a2.getBoundingClientRect().left - Pa(a2, {
      marginLeft: 0
    }, function() {
      return a2.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function(a2, b2) {
    n.cssHooks[a2 + b2] = { expand: function(c2) {
      for (var d2 = 0, e2 = {}, f2 = "string" == typeof c2 ? c2.split(" ") : [c2]; 4 > d2; d2++) e2[a2 + V[d2] + b2] = f2[d2] || f2[d2 - 2] || f2[0];
      return e2;
    } }, Na.test(a2) || (n.cssHooks[a2 + b2].set = db);
  }), n.fn.extend({ css: function(a2, b2) {
    return Y(this, function(a3, b3, c2) {
      var d2, e2, f2 = {}, g2 = 0;
      if (n.isArray(b3)) {
        for (d2 = Ra(a3), e2 = b3.length; e2 > g2; g2++) f2[b3[g2]] = n.css(a3, b3[g2], false, d2);
        return f2;
      }
      return void 0 !== c2 ? n.style(a3, b3, c2) : n.css(a3, b3);
    }, a2, b2, arguments.length > 1);
  }, show: function() {
    return cb(this, true);
  }, hide: function() {
    return cb(this);
  }, toggle: function(a2) {
    return "boolean" == typeof a2 ? a2 ? this.show() : this.hide() : this.each(function() {
      W(this) ? n(this).show() : n(this).hide();
    });
  } });
  function gb(a2, b2, c2, d2, e2) {
    return new gb.prototype.init(a2, b2, c2, d2, e2);
  }
  n.Tween = gb, gb.prototype = { constructor: gb, init: function(a2, b2, c2, d2, e2, f2) {
    this.elem = a2, this.prop = c2, this.easing = e2 || n.easing._default, this.options = b2, this.start = this.now = this.cur(), this.end = d2, this.unit = f2 || (n.cssNumber[c2] ? "" : "px");
  }, cur: function() {
    var a2 = gb.propHooks[this.prop];
    return a2 && a2.get ? a2.get(this) : gb.propHooks._default.get(this);
  }, run: function(a2) {
    var b2, c2 = gb.propHooks[this.prop];
    return this.options.duration ? this.pos = b2 = n.easing[this.easing](a2, this.options.duration * a2, 0, 1, this.options.duration) : this.pos = b2 = a2, this.now = (this.end - this.start) * b2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c2 && c2.set ? c2.set(this) : gb.propHooks._default.set(this), this;
  } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function(a2) {
    var b2;
    return 1 !== a2.elem.nodeType || null != a2.elem[a2.prop] && null == a2.elem.style[a2.prop] ? a2.elem[a2.prop] : (b2 = n.css(a2.elem, a2.prop, ""), b2 && "auto" !== b2 ? b2 : 0);
  }, set: function(a2) {
    n.fx.step[a2.prop] ? n.fx.step[a2.prop](a2) : 1 !== a2.elem.nodeType || null == a2.elem.style[n.cssProps[a2.prop]] && !n.cssHooks[a2.prop] ? a2.elem[a2.prop] = a2.now : n.style(a2.elem, a2.prop, a2.now + a2.unit);
  } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function(a2) {
    a2.elem.nodeType && a2.elem.parentNode && (a2.elem[a2.prop] = a2.now);
  } }, n.easing = { linear: function(a2) {
    return a2;
  }, swing: function(a2) {
    return 0.5 - Math.cos(a2 * Math.PI) / 2;
  }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
  function lb() {
    return a.setTimeout(function() {
      hb = void 0;
    }), hb = n.now();
  }
  function mb(a2, b2) {
    var c2, d2 = { height: a2 }, e2 = 0;
    for (b2 = b2 ? 1 : 0; 4 > e2; e2 += 2 - b2) c2 = V[e2], d2["margin" + c2] = d2["padding" + c2] = a2;
    return b2 && (d2.opacity = d2.width = a2), d2;
  }
  function nb(a2, b2, c2) {
    for (var d2, e2 = (qb.tweeners[b2] || []).concat(qb.tweeners["*"]), f2 = 0, g2 = e2.length; g2 > f2; f2++) if (d2 = e2[f2].call(c2, b2, a2)) return d2;
  }
  function ob(a2, b2, c2) {
    var d2, e2, f2, g2, h2, i2, j2, k2, m2 = this, o2 = {}, p2 = a2.style, q2 = a2.nodeType && W(a2), r2 = n._data(a2, "fxshow");
    c2.queue || (h2 = n._queueHooks(a2, "fx"), null == h2.unqueued && (h2.unqueued = 0, i2 = h2.empty.fire, h2.empty.fire = function() {
      h2.unqueued || i2();
    }), h2.unqueued++, m2.always(function() {
      m2.always(function() {
        h2.unqueued--, n.queue(a2, "fx").length || h2.empty.fire();
      });
    })), 1 === a2.nodeType && ("height" in b2 || "width" in b2) && (c2.overflow = [p2.overflow, p2.overflowX, p2.overflowY], j2 = n.css(a2, "display"), k2 = "none" === j2 ? n._data(a2, "olddisplay") || Ma(a2.nodeName) : j2, "inline" === k2 && "none" === n.css(a2, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a2.nodeName) ? p2.zoom = 1 : p2.display = "inline-block")), c2.overflow && (p2.overflow = "hidden", l.shrinkWrapBlocks() || m2.always(function() {
      p2.overflow = c2.overflow[0], p2.overflowX = c2.overflow[1], p2.overflowY = c2.overflow[2];
    }));
    for (d2 in b2) if (e2 = b2[d2], jb.exec(e2)) {
      if (delete b2[d2], f2 = f2 || "toggle" === e2, e2 === (q2 ? "hide" : "show")) {
        if ("show" !== e2 || !r2 || void 0 === r2[d2]) continue;
        q2 = true;
      }
      o2[d2] = r2 && r2[d2] || n.style(a2, d2);
    } else j2 = void 0;
    if (n.isEmptyObject(o2)) "inline" === ("none" === j2 ? Ma(a2.nodeName) : j2) && (p2.display = j2);
    else {
      r2 ? "hidden" in r2 && (q2 = r2.hidden) : r2 = n._data(a2, "fxshow", {}), f2 && (r2.hidden = !q2), q2 ? n(a2).show() : m2.done(function() {
        n(a2).hide();
      }), m2.done(function() {
        var b3;
        n._removeData(a2, "fxshow");
        for (b3 in o2) n.style(a2, b3, o2[b3]);
      });
      for (d2 in o2) g2 = nb(q2 ? r2[d2] : 0, d2, m2), d2 in r2 || (r2[d2] = g2.start, q2 && (g2.end = g2.start, g2.start = "width" === d2 || "height" === d2 ? 1 : 0));
    }
  }
  function pb(a2, b2) {
    var c2, d2, e2, f2, g2;
    for (c2 in a2) if (d2 = n.camelCase(c2), e2 = b2[d2], f2 = a2[c2], n.isArray(f2) && (e2 = f2[1], f2 = a2[c2] = f2[0]), c2 !== d2 && (a2[d2] = f2, delete a2[c2]), g2 = n.cssHooks[d2], g2 && "expand" in g2) {
      f2 = g2.expand(f2), delete a2[d2];
      for (c2 in f2) c2 in a2 || (a2[c2] = f2[c2], b2[c2] = e2);
    } else b2[d2] = e2;
  }
  function qb(a2, b2, c2) {
    var d2, e2, f2 = 0, g2 = qb.prefilters.length, h2 = n.Deferred().always(function() {
      delete i2.elem;
    }), i2 = function() {
      if (e2) return false;
      for (var b3 = hb || lb(), c3 = Math.max(0, j2.startTime + j2.duration - b3), d3 = c3 / j2.duration || 0, f3 = 1 - d3, g3 = 0, i3 = j2.tweens.length; i3 > g3; g3++) j2.tweens[g3].run(f3);
      return h2.notifyWith(a2, [j2, f3, c3]), 1 > f3 && i3 ? c3 : (h2.resolveWith(a2, [j2]), false);
    }, j2 = h2.promise({ elem: a2, props: n.extend({}, b2), opts: n.extend(true, { specialEasing: {}, easing: n.easing._default }, c2), originalProperties: b2, originalOptions: c2, startTime: hb || lb(), duration: c2.duration, tweens: [], createTween: function(b3, c3) {
      var d3 = n.Tween(a2, j2.opts, b3, c3, j2.opts.specialEasing[b3] || j2.opts.easing);
      return j2.tweens.push(d3), d3;
    }, stop: function(b3) {
      var c3 = 0, d3 = b3 ? j2.tweens.length : 0;
      if (e2) return this;
      for (e2 = true; d3 > c3; c3++) j2.tweens[c3].run(1);
      return b3 ? (h2.notifyWith(a2, [j2, 1, 0]), h2.resolveWith(a2, [j2, b3])) : h2.rejectWith(a2, [j2, b3]), this;
    } }), k2 = j2.props;
    for (pb(k2, j2.opts.specialEasing); g2 > f2; f2++) if (d2 = qb.prefilters[f2].call(j2, a2, k2, j2.opts)) return n.isFunction(d2.stop) && (n._queueHooks(j2.elem, j2.opts.queue).stop = n.proxy(d2.stop, d2)), d2;
    return n.map(k2, nb, j2), n.isFunction(j2.opts.start) && j2.opts.start.call(a2, j2), n.fx.timer(n.extend(i2, { elem: a2, anim: j2, queue: j2.opts.queue })), j2.progress(j2.opts.progress).done(j2.opts.done, j2.opts.complete).fail(j2.opts.fail).always(j2.opts.always);
  }
  n.Animation = n.extend(qb, { tweeners: { "*": [function(a2, b2) {
    var c2 = this.createTween(a2, b2);
    return X(c2.elem, a2, U.exec(b2), c2), c2;
  }] }, tweener: function(a2, b2) {
    n.isFunction(a2) ? (b2 = a2, a2 = ["*"]) : a2 = a2.match(G);
    for (var c2, d2 = 0, e2 = a2.length; e2 > d2; d2++) c2 = a2[d2], qb.tweeners[c2] = qb.tweeners[c2] || [], qb.tweeners[c2].unshift(b2);
  }, prefilters: [ob], prefilter: function(a2, b2) {
    b2 ? qb.prefilters.unshift(a2) : qb.prefilters.push(a2);
  } }), n.speed = function(a2, b2, c2) {
    var d2 = a2 && "object" == typeof a2 ? n.extend({}, a2) : { complete: c2 || !c2 && b2 || n.isFunction(a2) && a2, duration: a2, easing: c2 && b2 || b2 && !n.isFunction(b2) && b2 };
    return d2.duration = n.fx.off ? 0 : "number" == typeof d2.duration ? d2.duration : d2.duration in n.fx.speeds ? n.fx.speeds[d2.duration] : n.fx.speeds._default, null != d2.queue && d2.queue !== true || (d2.queue = "fx"), d2.old = d2.complete, d2.complete = function() {
      n.isFunction(d2.old) && d2.old.call(this), d2.queue && n.dequeue(this, d2.queue);
    }, d2;
  }, n.fn.extend({ fadeTo: function(a2, b2, c2, d2) {
    return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b2 }, a2, c2, d2);
  }, animate: function(a2, b2, c2, d2) {
    var e2 = n.isEmptyObject(a2), f2 = n.speed(b2, c2, d2), g2 = function() {
      var b3 = qb(this, n.extend({}, a2), f2);
      (e2 || n._data(this, "finish")) && b3.stop(true);
    };
    return g2.finish = g2, e2 || f2.queue === false ? this.each(g2) : this.queue(f2.queue, g2);
  }, stop: function(a2, b2, c2) {
    var d2 = function(a3) {
      var b3 = a3.stop;
      delete a3.stop, b3(c2);
    };
    return "string" != typeof a2 && (c2 = b2, b2 = a2, a2 = void 0), b2 && a2 !== false && this.queue(a2 || "fx", []), this.each(function() {
      var b3 = true, e2 = null != a2 && a2 + "queueHooks", f2 = n.timers, g2 = n._data(this);
      if (e2) g2[e2] && g2[e2].stop && d2(g2[e2]);
      else for (e2 in g2) g2[e2] && g2[e2].stop && kb.test(e2) && d2(g2[e2]);
      for (e2 = f2.length; e2--; ) f2[e2].elem !== this || null != a2 && f2[e2].queue !== a2 || (f2[e2].anim.stop(c2), b3 = false, f2.splice(e2, 1));
      !b3 && c2 || n.dequeue(this, a2);
    });
  }, finish: function(a2) {
    return a2 !== false && (a2 = a2 || "fx"), this.each(function() {
      var b2, c2 = n._data(this), d2 = c2[a2 + "queue"], e2 = c2[a2 + "queueHooks"], f2 = n.timers, g2 = d2 ? d2.length : 0;
      for (c2.finish = true, n.queue(this, a2, []), e2 && e2.stop && e2.stop.call(this, true), b2 = f2.length; b2--; ) f2[b2].elem === this && f2[b2].queue === a2 && (f2[b2].anim.stop(true), f2.splice(b2, 1));
      for (b2 = 0; g2 > b2; b2++) d2[b2] && d2[b2].finish && d2[b2].finish.call(this);
      delete c2.finish;
    });
  } }), n.each(["toggle", "show", "hide"], function(a2, b2) {
    var c2 = n.fn[b2];
    n.fn[b2] = function(a3, d2, e2) {
      return null == a3 || "boolean" == typeof a3 ? c2.apply(this, arguments) : this.animate(mb(b2, true), a3, d2, e2);
    };
  }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a2, b2) {
    n.fn[a2] = function(a3, c2, d2) {
      return this.animate(b2, a3, c2, d2);
    };
  }), n.timers = [], n.fx.tick = function() {
    var a2, b2 = n.timers, c2 = 0;
    for (hb = n.now(); c2 < b2.length; c2++) a2 = b2[c2], a2() || b2[c2] !== a2 || b2.splice(c2--, 1);
    b2.length || n.fx.stop(), hb = void 0;
  }, n.fx.timer = function(a2) {
    n.timers.push(a2), a2() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function() {
    ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function() {
    a.clearInterval(ib), ib = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b2, c2) {
    return b2 = n.fx ? n.fx.speeds[b2] || b2 : b2, c2 = c2 || "fx", this.queue(c2, function(c3, d2) {
      var e2 = a.setTimeout(c3, b2);
      d2.stop = function() {
        a.clearTimeout(e2);
      };
    });
  }, function() {
    var a2, b2 = d.createElement("input"), c2 = d.createElement("div"), e2 = d.createElement("select"), f2 = e2.appendChild(d.createElement("option"));
    c2 = d.createElement("div"), c2.setAttribute("className", "t"), c2.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a2 = c2.getElementsByTagName("a")[0], b2.setAttribute("type", "checkbox"), c2.appendChild(b2), a2 = c2.getElementsByTagName("a")[0], a2.style.cssText = "top:1px", l.getSetAttribute = "t" !== c2.className, l.style = /top/.test(a2.getAttribute("style")), l.hrefNormalized = "/a" === a2.getAttribute("href"), l.checkOn = !!b2.value, l.optSelected = f2.selected, l.enctype = !!d.createElement("form").enctype, e2.disabled = true, l.optDisabled = !f2.disabled, b2 = d.createElement("input"), b2.setAttribute("value", ""), l.input = "" === b2.getAttribute("value"), b2.value = "t", b2.setAttribute("type", "radio"), l.radioValue = "t" === b2.value;
  }();
  var rb = /\r/g, sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({ val: function(a2) {
    var b2, c2, d2, e2 = this[0];
    {
      if (arguments.length) return d2 = n.isFunction(a2), this.each(function(c3) {
        var e3;
        1 === this.nodeType && (e3 = d2 ? a2.call(this, c3, n(this).val()) : a2, null == e3 ? e3 = "" : "number" == typeof e3 ? e3 += "" : n.isArray(e3) && (e3 = n.map(e3, function(a3) {
          return null == a3 ? "" : a3 + "";
        })), b2 = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b2 && "set" in b2 && void 0 !== b2.set(this, e3, "value") || (this.value = e3));
      });
      if (e2) return b2 = n.valHooks[e2.type] || n.valHooks[e2.nodeName.toLowerCase()], b2 && "get" in b2 && void 0 !== (c2 = b2.get(e2, "value")) ? c2 : (c2 = e2.value, "string" == typeof c2 ? c2.replace(rb, "") : null == c2 ? "" : c2);
    }
  } }), n.extend({ valHooks: { option: { get: function(a2) {
    var b2 = n.find.attr(a2, "value");
    return null != b2 ? b2 : n.trim(n.text(a2)).replace(sb, " ");
  } }, select: { get: function(a2) {
    for (var b2, c2, d2 = a2.options, e2 = a2.selectedIndex, f2 = "select-one" === a2.type || 0 > e2, g2 = f2 ? null : [], h2 = f2 ? e2 + 1 : d2.length, i2 = 0 > e2 ? h2 : f2 ? e2 : 0; h2 > i2; i2++) if (c2 = d2[i2], (c2.selected || i2 === e2) && (l.optDisabled ? !c2.disabled : null === c2.getAttribute("disabled")) && (!c2.parentNode.disabled || !n.nodeName(c2.parentNode, "optgroup"))) {
      if (b2 = n(c2).val(), f2) return b2;
      g2.push(b2);
    }
    return g2;
  }, set: function(a2, b2) {
    var c2, d2, e2 = a2.options, f2 = n.makeArray(b2), g2 = e2.length;
    while (g2--) if (d2 = e2[g2], n.inArray(n.valHooks.option.get(d2), f2) > -1) try {
      d2.selected = c2 = true;
    } catch (h2) {
      d2.scrollHeight;
    }
    else d2.selected = false;
    return c2 || (a2.selectedIndex = -1), e2;
  } } } }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = { set: function(a2, b2) {
      return n.isArray(b2) ? a2.checked = n.inArray(n(a2).val(), b2) > -1 : void 0;
    } }, l.checkOn || (n.valHooks[this].get = function(a2) {
      return null === a2.getAttribute("value") ? "on" : a2.value;
    });
  });
  var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
  n.fn.extend({ attr: function(a2, b2) {
    return Y(this, n.attr, a2, b2, arguments.length > 1);
  }, removeAttr: function(a2) {
    return this.each(function() {
      n.removeAttr(this, a2);
    });
  } }), n.extend({ attr: function(a2, b2, c2) {
    var d2, e2, f2 = a2.nodeType;
    if (3 !== f2 && 8 !== f2 && 2 !== f2) return "undefined" == typeof a2.getAttribute ? n.prop(a2, b2, c2) : (1 === f2 && n.isXMLDoc(a2) || (b2 = b2.toLowerCase(), e2 = n.attrHooks[b2] || (n.expr.match.bool.test(b2) ? ub : tb)), void 0 !== c2 ? null === c2 ? void n.removeAttr(a2, b2) : e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : (a2.setAttribute(b2, c2 + ""), c2) : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : (d2 = n.find.attr(a2, b2), null == d2 ? void 0 : d2));
  }, attrHooks: { type: { set: function(a2, b2) {
    if (!l.radioValue && "radio" === b2 && n.nodeName(a2, "input")) {
      var c2 = a2.value;
      return a2.setAttribute("type", b2), c2 && (a2.value = c2), b2;
    }
  } } }, removeAttr: function(a2, b2) {
    var c2, d2, e2 = 0, f2 = b2 && b2.match(G);
    if (f2 && 1 === a2.nodeType) while (c2 = f2[e2++]) d2 = n.propFix[c2] || c2, n.expr.match.bool.test(c2) ? yb && xb || !wb.test(c2) ? a2[d2] = false : a2[n.camelCase("default-" + c2)] = a2[d2] = false : n.attr(a2, c2, ""), a2.removeAttribute(xb ? c2 : d2);
  } }), ub = { set: function(a2, b2, c2) {
    return b2 === false ? n.removeAttr(a2, c2) : yb && xb || !wb.test(c2) ? a2.setAttribute(!xb && n.propFix[c2] || c2, c2) : a2[n.camelCase("default-" + c2)] = a2[c2] = true, c2;
  } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a2, b2) {
    var c2 = vb[b2] || n.find.attr;
    yb && xb || !wb.test(b2) ? vb[b2] = function(a3, b3, d2) {
      var e2, f2;
      return d2 || (f2 = vb[b3], vb[b3] = e2, e2 = null != c2(a3, b3, d2) ? b3.toLowerCase() : null, vb[b3] = f2), e2;
    } : vb[b2] = function(a3, b3, c3) {
      return c3 ? void 0 : a3[n.camelCase("default-" + b3)] ? b3.toLowerCase() : null;
    };
  }), yb && xb || (n.attrHooks.value = { set: function(a2, b2, c2) {
    return n.nodeName(a2, "input") ? void (a2.defaultValue = b2) : tb && tb.set(a2, b2, c2);
  } }), xb || (tb = { set: function(a2, b2, c2) {
    var d2 = a2.getAttributeNode(c2);
    return d2 || a2.setAttributeNode(d2 = a2.ownerDocument.createAttribute(c2)), d2.value = b2 += "", "value" === c2 || b2 === a2.getAttribute(c2) ? b2 : void 0;
  } }, vb.id = vb.name = vb.coords = function(a2, b2, c2) {
    var d2;
    return c2 ? void 0 : (d2 = a2.getAttributeNode(b2)) && "" !== d2.value ? d2.value : null;
  }, n.valHooks.button = { get: function(a2, b2) {
    var c2 = a2.getAttributeNode(b2);
    return c2 && c2.specified ? c2.value : void 0;
  }, set: tb.set }, n.attrHooks.contenteditable = { set: function(a2, b2, c2) {
    tb.set(a2, "" === b2 ? false : b2, c2);
  } }, n.each(["width", "height"], function(a2, b2) {
    n.attrHooks[b2] = { set: function(a3, c2) {
      return "" === c2 ? (a3.setAttribute(b2, "auto"), c2) : void 0;
    } };
  })), l.style || (n.attrHooks.style = { get: function(a2) {
    return a2.style.cssText || void 0;
  }, set: function(a2, b2) {
    return a2.style.cssText = b2 + "";
  } });
  var zb = /^(?:input|select|textarea|button|object)$/i, Ab = /^(?:a|area)$/i;
  n.fn.extend({ prop: function(a2, b2) {
    return Y(this, n.prop, a2, b2, arguments.length > 1);
  }, removeProp: function(a2) {
    return a2 = n.propFix[a2] || a2, this.each(function() {
      try {
        this[a2] = void 0, delete this[a2];
      } catch (b2) {
      }
    });
  } }), n.extend({ prop: function(a2, b2, c2) {
    var d2, e2, f2 = a2.nodeType;
    if (3 !== f2 && 8 !== f2 && 2 !== f2) return 1 === f2 && n.isXMLDoc(a2) || (b2 = n.propFix[b2] || b2, e2 = n.propHooks[b2]), void 0 !== c2 ? e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : a2[b2] = c2 : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : a2[b2];
  }, propHooks: { tabIndex: { get: function(a2) {
    var b2 = n.find.attr(a2, "tabindex");
    return b2 ? parseInt(b2, 10) : zb.test(a2.nodeName) || Ab.test(a2.nodeName) && a2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function(a2, b2) {
    n.propHooks[b2] = { get: function(a3) {
      return a3.getAttribute(b2, 4);
    } };
  }), l.optSelected || (n.propHooks.selected = { get: function(a2) {
    var b2 = a2.parentNode;
    return b2 && (b2.selectedIndex, b2.parentNode && b2.parentNode.selectedIndex), null;
  }, set: function(a2) {
    var b2 = a2.parentNode;
    b2 && (b2.selectedIndex, b2.parentNode && b2.parentNode.selectedIndex);
  } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;
  function Cb(a2) {
    return n.attr(a2, "class") || "";
  }
  n.fn.extend({ addClass: function(a2) {
    var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
    if (n.isFunction(a2)) return this.each(function(b3) {
      n(this).addClass(a2.call(this, b3, Cb(this)));
    });
    if ("string" == typeof a2 && a2) {
      b2 = a2.match(G) || [];
      while (c2 = this[i2++]) if (e2 = Cb(c2), d2 = 1 === c2.nodeType && (" " + e2 + " ").replace(Bb, " ")) {
        g2 = 0;
        while (f2 = b2[g2++]) d2.indexOf(" " + f2 + " ") < 0 && (d2 += f2 + " ");
        h2 = n.trim(d2), e2 !== h2 && n.attr(c2, "class", h2);
      }
    }
    return this;
  }, removeClass: function(a2) {
    var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
    if (n.isFunction(a2)) return this.each(function(b3) {
      n(this).removeClass(a2.call(this, b3, Cb(this)));
    });
    if (!arguments.length) return this.attr("class", "");
    if ("string" == typeof a2 && a2) {
      b2 = a2.match(G) || [];
      while (c2 = this[i2++]) if (e2 = Cb(c2), d2 = 1 === c2.nodeType && (" " + e2 + " ").replace(Bb, " ")) {
        g2 = 0;
        while (f2 = b2[g2++]) while (d2.indexOf(" " + f2 + " ") > -1) d2 = d2.replace(" " + f2 + " ", " ");
        h2 = n.trim(d2), e2 !== h2 && n.attr(c2, "class", h2);
      }
    }
    return this;
  }, toggleClass: function(a2, b2) {
    var c2 = typeof a2;
    return "boolean" == typeof b2 && "string" === c2 ? b2 ? this.addClass(a2) : this.removeClass(a2) : n.isFunction(a2) ? this.each(function(c3) {
      n(this).toggleClass(a2.call(this, c3, Cb(this), b2), b2);
    }) : this.each(function() {
      var b3, d2, e2, f2;
      if ("string" === c2) {
        d2 = 0, e2 = n(this), f2 = a2.match(G) || [];
        while (b3 = f2[d2++]) e2.hasClass(b3) ? e2.removeClass(b3) : e2.addClass(b3);
      } else void 0 !== a2 && "boolean" !== c2 || (b3 = Cb(this), b3 && n._data(this, "__className__", b3), n.attr(this, "class", b3 || a2 === false ? "" : n._data(this, "__className__") || ""));
    });
  }, hasClass: function(a2) {
    var b2, c2, d2 = 0;
    b2 = " " + a2 + " ";
    while (c2 = this[d2++]) if (1 === c2.nodeType && (" " + Cb(c2) + " ").replace(Bb, " ").indexOf(b2) > -1) return true;
    return false;
  } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a2, b2) {
    n.fn[b2] = function(a3, c2) {
      return arguments.length > 0 ? this.on(b2, null, a3, c2) : this.trigger(b2);
    };
  }), n.fn.extend({ hover: function(a2, b2) {
    return this.mouseenter(a2).mouseleave(b2 || a2);
  } });
  var Db = a.location, Eb = n.now(), Fb = /\?/, Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function(b2) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b2 + "");
    var c2, d2 = null, e2 = n.trim(b2 + "");
    return e2 && !n.trim(e2.replace(Gb, function(a2, b3, e3, f2) {
      return c2 && b3 && (d2 = 0), 0 === d2 ? a2 : (c2 = e3 || b3, d2 += !f2 - !e3, "");
    })) ? Function("return " + e2)() : n.error("Invalid JSON: " + b2);
  }, n.parseXML = function(b2) {
    var c2, d2;
    if (!b2 || "string" != typeof b2) return null;
    try {
      a.DOMParser ? (d2 = new a.DOMParser(), c2 = d2.parseFromString(b2, "text/xml")) : (c2 = new a.ActiveXObject("Microsoft.XMLDOM"), c2.async = "false", c2.loadXML(b2));
    } catch (e2) {
      c2 = void 0;
    }
    return c2 && c2.documentElement && !c2.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b2), c2;
  };
  var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ob = {}, Pb = {}, Qb = "*/".concat("*"), Rb = Db.href, Sb = Nb.exec(Rb.toLowerCase()) || [];
  function Tb(a2) {
    return function(b2, c2) {
      "string" != typeof b2 && (c2 = b2, b2 = "*");
      var d2, e2 = 0, f2 = b2.toLowerCase().match(G) || [];
      if (n.isFunction(c2)) while (d2 = f2[e2++]) "+" === d2.charAt(0) ? (d2 = d2.slice(1) || "*", (a2[d2] = a2[d2] || []).unshift(c2)) : (a2[d2] = a2[d2] || []).push(c2);
    };
  }
  function Ub(a2, b2, c2, d2) {
    var e2 = {}, f2 = a2 === Pb;
    function g2(h2) {
      var i2;
      return e2[h2] = true, n.each(a2[h2] || [], function(a3, h3) {
        var j2 = h3(b2, c2, d2);
        return "string" != typeof j2 || f2 || e2[j2] ? f2 ? !(i2 = j2) : void 0 : (b2.dataTypes.unshift(j2), g2(j2), false);
      }), i2;
    }
    return g2(b2.dataTypes[0]) || !e2["*"] && g2("*");
  }
  function Vb(a2, b2) {
    var c2, d2, e2 = n.ajaxSettings.flatOptions || {};
    for (d2 in b2) void 0 !== b2[d2] && ((e2[d2] ? a2 : c2 || (c2 = {}))[d2] = b2[d2]);
    return c2 && n.extend(true, a2, c2), a2;
  }
  function Wb(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.contents, i2 = a2.dataTypes;
    while ("*" === i2[0]) i2.shift(), void 0 === e2 && (e2 = a2.mimeType || b2.getResponseHeader("Content-Type"));
    if (e2) {
      for (g2 in h2) if (h2[g2] && h2[g2].test(e2)) {
        i2.unshift(g2);
        break;
      }
    }
    if (i2[0] in c2) f2 = i2[0];
    else {
      for (g2 in c2) {
        if (!i2[0] || a2.converters[g2 + " " + i2[0]]) {
          f2 = g2;
          break;
        }
        d2 || (d2 = g2);
      }
      f2 = f2 || d2;
    }
    return f2 ? (f2 !== i2[0] && i2.unshift(f2), c2[f2]) : void 0;
  }
  function Xb(a2, b2, c2, d2) {
    var e2, f2, g2, h2, i2, j2 = {}, k2 = a2.dataTypes.slice();
    if (k2[1]) for (g2 in a2.converters) j2[g2.toLowerCase()] = a2.converters[g2];
    f2 = k2.shift();
    while (f2) if (a2.responseFields[f2] && (c2[a2.responseFields[f2]] = b2), !i2 && d2 && a2.dataFilter && (b2 = a2.dataFilter(b2, a2.dataType)), i2 = f2, f2 = k2.shift()) {
      if ("*" === f2) f2 = i2;
      else if ("*" !== i2 && i2 !== f2) {
        if (g2 = j2[i2 + " " + f2] || j2["* " + f2], !g2) {
          for (e2 in j2) if (h2 = e2.split(" "), h2[1] === f2 && (g2 = j2[i2 + " " + h2[0]] || j2["* " + h2[0]])) {
            g2 === true ? g2 = j2[e2] : j2[e2] !== true && (f2 = h2[0], k2.unshift(h2[1]));
            break;
          }
        }
        if (g2 !== true) if (g2 && a2["throws"]) b2 = g2(b2);
        else try {
          b2 = g2(b2);
        } catch (l2) {
          return { state: "parsererror", error: g2 ? l2 : "No conversion from " + i2 + " to " + f2 };
        }
      }
    }
    return { state: "success", data: b2 };
  }
  n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(a2, b2) {
    return b2 ? Vb(Vb(a2, n.ajaxSettings), b2) : Vb(n.ajaxSettings, a2);
  }, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function(b2, c2) {
    "object" == typeof b2 && (c2 = b2, b2 = void 0), c2 = c2 || {};
    var d2, e2, f2, g2, h2, i2, j2, k2, l2 = n.ajaxSetup({}, c2), m2 = l2.context || l2, o2 = l2.context && (m2.nodeType || m2.jquery) ? n(m2) : n.event, p2 = n.Deferred(), q2 = n.Callbacks("once memory"), r2 = l2.statusCode || {}, s2 = {}, t2 = {}, u2 = 0, v2 = "canceled", w2 = { readyState: 0, getResponseHeader: function(a2) {
      var b3;
      if (2 === u2) {
        if (!k2) {
          k2 = {};
          while (b3 = Jb.exec(g2)) k2[b3[1].toLowerCase()] = b3[2];
        }
        b3 = k2[a2.toLowerCase()];
      }
      return null == b3 ? null : b3;
    }, getAllResponseHeaders: function() {
      return 2 === u2 ? g2 : null;
    }, setRequestHeader: function(a2, b3) {
      var c3 = a2.toLowerCase();
      return u2 || (a2 = t2[c3] = t2[c3] || a2, s2[a2] = b3), this;
    }, overrideMimeType: function(a2) {
      return u2 || (l2.mimeType = a2), this;
    }, statusCode: function(a2) {
      var b3;
      if (a2) if (2 > u2) for (b3 in a2) r2[b3] = [r2[b3], a2[b3]];
      else w2.always(a2[w2.status]);
      return this;
    }, abort: function(a2) {
      var b3 = a2 || v2;
      return j2 && j2.abort(b3), y2(0, b3), this;
    } };
    if (p2.promise(w2).complete = q2.add, w2.success = w2.done, w2.error = w2.fail, l2.url = ((b2 || l2.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l2.type = c2.method || c2.type || l2.method || l2.type, l2.dataTypes = n.trim(l2.dataType || "*").toLowerCase().match(G) || [""], null == l2.crossDomain && (d2 = Nb.exec(l2.url.toLowerCase()), l2.crossDomain = !(!d2 || d2[1] === Sb[1] && d2[2] === Sb[2] && (d2[3] || ("http:" === d2[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l2.data && l2.processData && "string" != typeof l2.data && (l2.data = n.param(l2.data, l2.traditional)), Ub(Ob, l2, c2, w2), 2 === u2) return w2;
    i2 = n.event && l2.global, i2 && 0 === n.active++ && n.event.trigger("ajaxStart"), l2.type = l2.type.toUpperCase(), l2.hasContent = !Lb.test(l2.type), f2 = l2.url, l2.hasContent || (l2.data && (f2 = l2.url += (Fb.test(f2) ? "&" : "?") + l2.data, delete l2.data), l2.cache === false && (l2.url = Ib.test(f2) ? f2.replace(Ib, "$1_=" + Eb++) : f2 + (Fb.test(f2) ? "&" : "?") + "_=" + Eb++)), l2.ifModified && (n.lastModified[f2] && w2.setRequestHeader("If-Modified-Since", n.lastModified[f2]), n.etag[f2] && w2.setRequestHeader("If-None-Match", n.etag[f2])), (l2.data && l2.hasContent && l2.contentType !== false || c2.contentType) && w2.setRequestHeader("Content-Type", l2.contentType), w2.setRequestHeader("Accept", l2.dataTypes[0] && l2.accepts[l2.dataTypes[0]] ? l2.accepts[l2.dataTypes[0]] + ("*" !== l2.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l2.accepts["*"]);
    for (e2 in l2.headers) w2.setRequestHeader(e2, l2.headers[e2]);
    if (l2.beforeSend && (l2.beforeSend.call(m2, w2, l2) === false || 2 === u2)) return w2.abort();
    v2 = "abort";
    for (e2 in { success: 1, error: 1, complete: 1 }) w2[e2](l2[e2]);
    if (j2 = Ub(Pb, l2, c2, w2)) {
      if (w2.readyState = 1, i2 && o2.trigger("ajaxSend", [w2, l2]), 2 === u2) return w2;
      l2.async && l2.timeout > 0 && (h2 = a.setTimeout(function() {
        w2.abort("timeout");
      }, l2.timeout));
      try {
        u2 = 1, j2.send(s2, y2);
      } catch (x2) {
        if (!(2 > u2)) throw x2;
        y2(-1, x2);
      }
    } else y2(-1, "No Transport");
    function y2(b3, c3, d3, e3) {
      var k3, s3, t3, v3, x2, y3 = c3;
      2 !== u2 && (u2 = 2, h2 && a.clearTimeout(h2), j2 = void 0, g2 = e3 || "", w2.readyState = b3 > 0 ? 4 : 0, k3 = b3 >= 200 && 300 > b3 || 304 === b3, d3 && (v3 = Wb(l2, w2, d3)), v3 = Xb(l2, v3, w2, k3), k3 ? (l2.ifModified && (x2 = w2.getResponseHeader("Last-Modified"), x2 && (n.lastModified[f2] = x2), x2 = w2.getResponseHeader("etag"), x2 && (n.etag[f2] = x2)), 204 === b3 || "HEAD" === l2.type ? y3 = "nocontent" : 304 === b3 ? y3 = "notmodified" : (y3 = v3.state, s3 = v3.data, t3 = v3.error, k3 = !t3)) : (t3 = y3, !b3 && y3 || (y3 = "error", 0 > b3 && (b3 = 0))), w2.status = b3, w2.statusText = (c3 || y3) + "", k3 ? p2.resolveWith(m2, [s3, y3, w2]) : p2.rejectWith(m2, [w2, y3, t3]), w2.statusCode(r2), r2 = void 0, i2 && o2.trigger(k3 ? "ajaxSuccess" : "ajaxError", [w2, l2, k3 ? s3 : t3]), q2.fireWith(m2, [w2, y3]), i2 && (o2.trigger("ajaxComplete", [w2, l2]), --n.active || n.event.trigger("ajaxStop")));
    }
    return w2;
  }, getJSON: function(a2, b2, c2) {
    return n.get(a2, b2, c2, "json");
  }, getScript: function(a2, b2) {
    return n.get(a2, void 0, b2, "script");
  } }), n.each(["get", "post"], function(a2, b2) {
    n[b2] = function(a3, c2, d2, e2) {
      return n.isFunction(c2) && (e2 = e2 || d2, d2 = c2, c2 = void 0), n.ajax(n.extend({ url: a3, type: b2, dataType: e2, data: c2, success: d2 }, n.isPlainObject(a3) && a3));
    };
  }), n._evalUrl = function(a2) {
    return n.ajax({ url: a2, type: "GET", dataType: "script", cache: true, async: false, global: false, "throws": true });
  }, n.fn.extend({ wrapAll: function(a2) {
    if (n.isFunction(a2)) return this.each(function(b3) {
      n(this).wrapAll(a2.call(this, b3));
    });
    if (this[0]) {
      var b2 = n(a2, this[0].ownerDocument).eq(0).clone(true);
      this[0].parentNode && b2.insertBefore(this[0]), b2.map(function() {
        var a3 = this;
        while (a3.firstChild && 1 === a3.firstChild.nodeType) a3 = a3.firstChild;
        return a3;
      }).append(this);
    }
    return this;
  }, wrapInner: function(a2) {
    return n.isFunction(a2) ? this.each(function(b2) {
      n(this).wrapInner(a2.call(this, b2));
    }) : this.each(function() {
      var b2 = n(this), c2 = b2.contents();
      c2.length ? c2.wrapAll(a2) : b2.append(a2);
    });
  }, wrap: function(a2) {
    var b2 = n.isFunction(a2);
    return this.each(function(c2) {
      n(this).wrapAll(b2 ? a2.call(this, c2) : a2);
    });
  }, unwrap: function() {
    return this.parent().each(function() {
      n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
    }).end();
  } });
  function Yb(a2) {
    return a2.style && a2.style.display || n.css(a2, "display");
  }
  function Zb(a2) {
    if (!n.contains(a2.ownerDocument || d, a2)) return true;
    while (a2 && 1 === a2.nodeType) {
      if ("none" === Yb(a2) || "hidden" === a2.type) return true;
      a2 = a2.parentNode;
    }
    return false;
  }
  n.expr.filters.hidden = function(a2) {
    return l.reliableHiddenOffsets() ? a2.offsetWidth <= 0 && a2.offsetHeight <= 0 && !a2.getClientRects().length : Zb(a2);
  }, n.expr.filters.visible = function(a2) {
    return !n.expr.filters.hidden(a2);
  };
  var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i, cc = /^(?:input|select|textarea|keygen)/i;
  function dc(a2, b2, c2, d2) {
    var e2;
    if (n.isArray(b2)) n.each(b2, function(b3, e3) {
      c2 || _b.test(a2) ? d2(a2, e3) : dc(a2 + "[" + ("object" == typeof e3 && null != e3 ? b3 : "") + "]", e3, c2, d2);
    });
    else if (c2 || "object" !== n.type(b2)) d2(a2, b2);
    else for (e2 in b2) dc(a2 + "[" + e2 + "]", b2[e2], c2, d2);
  }
  n.param = function(a2, b2) {
    var c2, d2 = [], e2 = function(a3, b3) {
      b3 = n.isFunction(b3) ? b3() : null == b3 ? "" : b3, d2[d2.length] = encodeURIComponent(a3) + "=" + encodeURIComponent(b3);
    };
    if (void 0 === b2 && (b2 = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a2) || a2.jquery && !n.isPlainObject(a2)) n.each(a2, function() {
      e2(this.name, this.value);
    });
    else for (c2 in a2) dc(c2, a2[c2], b2, e2);
    return d2.join("&").replace($b, "+");
  }, n.fn.extend({ serialize: function() {
    return n.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var a2 = n.prop(this, "elements");
      return a2 ? n.makeArray(a2) : this;
    }).filter(function() {
      var a2 = this.type;
      return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a2) && (this.checked || !Z.test(a2));
    }).map(function(a2, b2) {
      var c2 = n(this).val();
      return null == c2 ? null : n.isArray(c2) ? n.map(c2, function(a3) {
        return { name: b2.name, value: a3.replace(ac, "\r\n") };
      }) : { name: b2.name, value: c2.replace(ac, "\r\n") };
    }).get();
  } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
  } : hc;
  var ec = 0, fc = {}, gc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {
    for (var a2 in fc) fc[a2](void 0, true);
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b2) {
    if (!b2.crossDomain || l.cors) {
      var c2;
      return { send: function(d2, e2) {
        var f2, g2 = b2.xhr(), h2 = ++ec;
        if (g2.open(b2.type, b2.url, b2.async, b2.username, b2.password), b2.xhrFields) for (f2 in b2.xhrFields) g2[f2] = b2.xhrFields[f2];
        b2.mimeType && g2.overrideMimeType && g2.overrideMimeType(b2.mimeType), b2.crossDomain || d2["X-Requested-With"] || (d2["X-Requested-With"] = "XMLHttpRequest");
        for (f2 in d2) void 0 !== d2[f2] && g2.setRequestHeader(f2, d2[f2] + "");
        g2.send(b2.hasContent && b2.data || null), c2 = function(a2, d3) {
          var f3, i2, j2;
          if (c2 && (d3 || 4 === g2.readyState)) if (delete fc[h2], c2 = void 0, g2.onreadystatechange = n.noop, d3) 4 !== g2.readyState && g2.abort();
          else {
            j2 = {}, f3 = g2.status, "string" == typeof g2.responseText && (j2.text = g2.responseText);
            try {
              i2 = g2.statusText;
            } catch (k2) {
              i2 = "";
            }
            f3 || !b2.isLocal || b2.crossDomain ? 1223 === f3 && (f3 = 204) : f3 = j2.text ? 200 : 404;
          }
          j2 && e2(f3, i2, j2, g2.getAllResponseHeaders());
        }, b2.async ? 4 === g2.readyState ? a.setTimeout(c2) : g2.onreadystatechange = fc[h2] = c2 : c2();
      }, abort: function() {
        c2 && c2(void 0, true);
      } };
    }
  });
  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b2) {
    }
  }
  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b2) {
    }
  }
  n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a2) {
    return n.globalEval(a2), a2;
  } } }), n.ajaxPrefilter("script", function(a2) {
    void 0 === a2.cache && (a2.cache = false), a2.crossDomain && (a2.type = "GET", a2.global = false);
  }), n.ajaxTransport("script", function(a2) {
    if (a2.crossDomain) {
      var b2, c2 = d.head || n("head")[0] || d.documentElement;
      return { send: function(e2, f2) {
        b2 = d.createElement("script"), b2.async = true, a2.scriptCharset && (b2.charset = a2.scriptCharset), b2.src = a2.url, b2.onload = b2.onreadystatechange = function(a3, c3) {
          (c3 || !b2.readyState || /loaded|complete/.test(b2.readyState)) && (b2.onload = b2.onreadystatechange = null, b2.parentNode && b2.parentNode.removeChild(b2), b2 = null, c3 || f2(200, "success"));
        }, c2.insertBefore(b2, c2.firstChild);
      }, abort: function() {
        b2 && b2.onload(void 0, true);
      } };
    }
  });
  var jc = [], kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var a2 = jc.pop() || n.expando + "_" + Eb++;
    return this[a2] = true, a2;
  } }), n.ajaxPrefilter("json jsonp", function(b2, c2, d2) {
    var e2, f2, g2, h2 = b2.jsonp !== false && (kc.test(b2.url) ? "url" : "string" == typeof b2.data && 0 === (b2.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b2.data) && "data");
    return h2 || "jsonp" === b2.dataTypes[0] ? (e2 = b2.jsonpCallback = n.isFunction(b2.jsonpCallback) ? b2.jsonpCallback() : b2.jsonpCallback, h2 ? b2[h2] = b2[h2].replace(kc, "$1" + e2) : b2.jsonp !== false && (b2.url += (Fb.test(b2.url) ? "&" : "?") + b2.jsonp + "=" + e2), b2.converters["script json"] = function() {
      return g2 || n.error(e2 + " was not called"), g2[0];
    }, b2.dataTypes[0] = "json", f2 = a[e2], a[e2] = function() {
      g2 = arguments;
    }, d2.always(function() {
      void 0 === f2 ? n(a).removeProp(e2) : a[e2] = f2, b2[e2] && (b2.jsonpCallback = c2.jsonpCallback, jc.push(e2)), g2 && n.isFunction(f2) && f2(g2[0]), g2 = f2 = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function(a2, b2, c2) {
    if (!a2 || "string" != typeof a2) return null;
    "boolean" == typeof b2 && (c2 = b2, b2 = false), b2 = b2 || d;
    var e2 = x.exec(a2), f2 = !c2 && [];
    return e2 ? [b2.createElement(e2[1])] : (e2 = ja([a2], b2, f2), f2 && f2.length && n(f2).remove(), n.merge([], e2.childNodes));
  };
  var lc = n.fn.load;
  n.fn.load = function(a2, b2, c2) {
    if ("string" != typeof a2 && lc) return lc.apply(this, arguments);
    var d2, e2, f2, g2 = this, h2 = a2.indexOf(" ");
    return h2 > -1 && (d2 = n.trim(a2.slice(h2, a2.length)), a2 = a2.slice(0, h2)), n.isFunction(b2) ? (c2 = b2, b2 = void 0) : b2 && "object" == typeof b2 && (e2 = "POST"), g2.length > 0 && n.ajax({ url: a2, type: e2 || "GET", dataType: "html", data: b2 }).done(function(a3) {
      f2 = arguments, g2.html(d2 ? n("<div>").append(n.parseHTML(a3)).find(d2) : a3);
    }).always(c2 && function(a3, b3) {
      g2.each(function() {
        c2.apply(this, f2 || [a3.responseText, b3, a3]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a2, b2) {
    n.fn[b2] = function(a3) {
      return this.on(b2, a3);
    };
  }), n.expr.filters.animated = function(a2) {
    return n.grep(n.timers, function(b2) {
      return a2 === b2.elem;
    }).length;
  };
  function mc(a2) {
    return n.isWindow(a2) ? a2 : 9 === a2.nodeType ? a2.defaultView || a2.parentWindow : false;
  }
  n.offset = { setOffset: function(a2, b2, c2) {
    var d2, e2, f2, g2, h2, i2, j2, k2 = n.css(a2, "position"), l2 = n(a2), m2 = {};
    "static" === k2 && (a2.style.position = "relative"), h2 = l2.offset(), f2 = n.css(a2, "top"), i2 = n.css(a2, "left"), j2 = ("absolute" === k2 || "fixed" === k2) && n.inArray("auto", [f2, i2]) > -1, j2 ? (d2 = l2.position(), g2 = d2.top, e2 = d2.left) : (g2 = parseFloat(f2) || 0, e2 = parseFloat(i2) || 0), n.isFunction(b2) && (b2 = b2.call(a2, c2, n.extend({}, h2))), null != b2.top && (m2.top = b2.top - h2.top + g2), null != b2.left && (m2.left = b2.left - h2.left + e2), "using" in b2 ? b2.using.call(a2, m2) : l2.css(m2);
  } }, n.fn.extend({ offset: function(a2) {
    if (arguments.length) return void 0 === a2 ? this : this.each(function(b3) {
      n.offset.setOffset(this, a2, b3);
    });
    var b2, c2, d2 = { top: 0, left: 0 }, e2 = this[0], f2 = e2 && e2.ownerDocument;
    if (f2) return b2 = f2.documentElement, n.contains(b2, e2) ? ("undefined" != typeof e2.getBoundingClientRect && (d2 = e2.getBoundingClientRect()), c2 = mc(f2), { top: d2.top + (c2.pageYOffset || b2.scrollTop) - (b2.clientTop || 0), left: d2.left + (c2.pageXOffset || b2.scrollLeft) - (b2.clientLeft || 0) }) : d2;
  }, position: function() {
    if (this[0]) {
      var a2, b2, c2 = { top: 0, left: 0 }, d2 = this[0];
      return "fixed" === n.css(d2, "position") ? b2 = d2.getBoundingClientRect() : (a2 = this.offsetParent(), b2 = this.offset(), n.nodeName(a2[0], "html") || (c2 = a2.offset()), c2.top += n.css(a2[0], "borderTopWidth", true), c2.left += n.css(a2[0], "borderLeftWidth", true)), { top: b2.top - c2.top - n.css(d2, "marginTop", true), left: b2.left - c2.left - n.css(d2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var a2 = this.offsetParent;
      while (a2 && !n.nodeName(a2, "html") && "static" === n.css(a2, "position")) a2 = a2.offsetParent;
      return a2 || Qa;
    });
  } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a2, b2) {
    var c2 = /Y/.test(b2);
    n.fn[a2] = function(d2) {
      return Y(this, function(a3, d3, e2) {
        var f2 = mc(a3);
        return void 0 === e2 ? f2 ? b2 in f2 ? f2[b2] : f2.document.documentElement[d3] : a3[d3] : void (f2 ? f2.scrollTo(c2 ? n(f2).scrollLeft() : e2, c2 ? e2 : n(f2).scrollTop()) : a3[d3] = e2);
      }, a2, d2, arguments.length, null);
    };
  }), n.each(["top", "left"], function(a2, b2) {
    n.cssHooks[b2] = Ua(l.pixelPosition, function(a3, c2) {
      return c2 ? (c2 = Sa(a3, b2), Oa.test(c2) ? n(a3).position()[b2] + "px" : c2) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function(a2, b2) {
    n.each({
      padding: "inner" + a2,
      content: b2,
      "": "outer" + a2
    }, function(c2, d2) {
      n.fn[d2] = function(d3, e2) {
        var f2 = arguments.length && (c2 || "boolean" != typeof d3), g2 = c2 || (d3 === true || e2 === true ? "margin" : "border");
        return Y(this, function(b3, c3, d4) {
          var e3;
          return n.isWindow(b3) ? b3.document.documentElement["client" + a2] : 9 === b3.nodeType ? (e3 = b3.documentElement, Math.max(b3.body["scroll" + a2], e3["scroll" + a2], b3.body["offset" + a2], e3["offset" + a2], e3["client" + a2])) : void 0 === d4 ? n.css(b3, c3, g2) : n.style(b3, c3, d4, g2);
        }, b2, f2 ? d3 : void 0, f2, null);
      };
    });
  }), n.fn.extend({ bind: function(a2, b2, c2) {
    return this.on(a2, null, b2, c2);
  }, unbind: function(a2, b2) {
    return this.off(a2, null, b2);
  }, delegate: function(a2, b2, c2, d2) {
    return this.on(b2, a2, c2, d2);
  }, undelegate: function(a2, b2, c2) {
    return 1 === arguments.length ? this.off(a2, "**") : this.off(b2, a2 || "**", c2);
  } }), n.fn.size = function() {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return n;
  });
  var nc = a.jQuery, oc = a.$;
  return n.noConflict = function(b2) {
    return a.$ === n && (a.$ = oc), b2 && a.jQuery === n && (a.jQuery = nc), n;
  }, b || (a.jQuery = a.$ = n), n;
});
!function(a) {
  "object" == typeof module && module.exports ? module.exports = a() : window.intlTelInput = a();
}(function(a) {
  "use strict";
  return function() {
    function b(a2, b2) {
      if (!(a2 instanceof b2)) throw new TypeError("Cannot call a class as a function");
    }
    function c(a2, b2) {
      for (var c2 = 0; c2 < b2.length; c2++) {
        var d2 = b2[c2];
        d2.enumerable = d2.enumerable || false, d2.configurable = true, "value" in d2 && (d2.writable = true), Object.defineProperty(a2, d2.key, d2);
      }
    }
    function d(a2, b2, d2) {
      return b2 && c(a2.prototype, b2), d2 && c(a2, d2), a2;
    }
    for (var e = [["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)", "af", "93"], ["Albania (Shqip\xEBri)", "al", "355"], ["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (\xD6sterreich)", "at", "43"], ["Azerbaijan (Az\u0259rbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)", "bh", "973"], ["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)", "by", "375"], ["Belgium (Belgi\xEB)", "be", "32"], ["Belize", "bz", "501"], ["Benin (B\xE9nin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (R\xE9publique centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (\u4E2D\u56FD)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["C\xF4te d\u2019Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Cura\xE7ao", "cw", "599", 0], ["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)", "cy", "357"], ["Czech Republic (\u010Cesk\xE1 republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (Rep\xFAblica Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (F\xF8royar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane fran\xE7aise)", "gf", "594"], ["French Polynesia (Polyn\xE9sie fran\xE7aise)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guin\xE9e)", "gn", "224"], ["Guinea-Bissau (Guin\xE9 Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (\u9999\u6E2F)", "hk", "852"], ["Hungary (Magyarorsz\xE1g)", "hu", "36"], ["Iceland (\xCDsland)", "is", "354"], ["India (\u092D\u093E\u0930\u0924)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)", "ir", "98"], ["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (\u65E5\u672C)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)", "jo", "962"], ["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)", "kw", "965"], ["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)", "kg", "996"], ["Laos (\u0EA5\u0EB2\u0EA7)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (\u6FB3\u9580)", "mo", "853"], ["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (M\xE9xico)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)", "ma", "212", 0], ["Mozambique (Mo\xE7ambique)", "mz", "258"], ["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)", "mm", "95"], ["Namibia (Namibi\xEB)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (\u0928\u0947\u092A\u093E\u0932)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Cal\xE9donie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)", "kp", "850"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)", "om", "968"], ["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)", "ps", "970"], ["Panama (Panam\xE1)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Per\xFA)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)", "qa", "974"], ["R\xE9union (La R\xE9union)", "re", "262", 0], ["Romania (Rom\xE2nia)", "ro", "40"], ["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barth\xE9lemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie fran\xE7aise))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)", "st", "239"], ["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)", "sa", "966"], ["Senegal (S\xE9n\xE9gal)", "sn", "221"], ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (\uB300\uD55C\uBBFC\uAD6D)", "kr", "82"], ["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "ss", "211"], ["Spain (Espa\xF1a)", "es", "34"], ["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)", "lk", "94"], ["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)", "sy", "963"], ["Taiwan (\u53F0\u7063)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (\u0E44\u0E17\u0E22)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)", "tn", "216"], ["Turkey (T\xFCrkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)", "ua", "380"], ["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (O\u02BBzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Citt\xE0 del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Vi\u1EC7t Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["\xC5land Islands", "ax", "358", 1, ["18"]]], f = 0; f < e.length; f++) {
      var g = e[f];
      e[f] = { name: g[0], iso2: g[1], dialCode: g[2], priority: g[3] || 0, areaCodes: g[4] || null };
    }
    var h = { getInstance: function(a2) {
      var b2 = a2.getAttribute("data-intl-tel-input-id");
      return window.intlTelInputGlobals.instances[b2];
    }, instances: {}, documentReady: function() {
      return "complete" === document.readyState;
    } };
    "object" == typeof window && (window.intlTelInputGlobals = h);
    var i = 0, j = { allowDropdown: true, autoHideDialCode: true, autoPlaceholder: "polite", customContainer: "", customPlaceholder: null, dropdownContainer: null, excludeCountries: [], formatOnDisplay: true, geoIpLookup: null, hiddenInput: "", initialCountry: "", localizedCountries: null, nationalMode: true, onlyCountries: [], placeholderNumberType: "MOBILE", preferredCountries: ["us", "gb"], separateDialCode: false, utilsScript: "" }, k = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"], l = function(a2, b2) {
      for (var c2 = Object.keys(a2), d2 = 0; d2 < c2.length; d2++) b2(c2[d2], a2[c2[d2]]);
    }, m = function(a2) {
      l(window.intlTelInputGlobals.instances, function(b2) {
        window.intlTelInputGlobals.instances[b2][a2]();
      });
    }, n = function() {
      function c2(a2, d2) {
        var e2 = this;
        b(this, c2), this.id = i++, this.a = a2, this.b = null, this.c = null;
        var f2 = d2 || {};
        this.d = {}, l(j, function(a3, b2) {
          e2.d[a3] = f2.hasOwnProperty(a3) ? f2[a3] : b2;
        }), this.e = Boolean(a2.getAttribute("placeholder"));
      }
      return d(c2, [{ key: "_init", value: function() {
        var a2 = this;
        if (this.d.nationalMode && (this.d.autoHideDialCode = false), this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = false), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), "undefined" != typeof Promise) {
          var b2 = new Promise(function(b3, c4) {
            a2.h = b3, a2.i = c4;
          }), c3 = new Promise(function(b3, c4) {
            a2.i0 = b3, a2.i1 = c4;
          });
          this.promise = Promise.all([b2, c3]);
        } else this.h = this.i = function() {
        }, this.i0 = this.i1 = function() {
        };
        this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i3();
      } }, { key: "_b", value: function() {
        this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1);
      } }, { key: "_c", value: function(b2, c3, d2) {
        c3.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = c3.length), this.q.hasOwnProperty(c3) || (this.q[c3] = []);
        for (var e2 = 0; e2 < this.q[c3].length; e2++) if (this.q[c3][e2] === b2) return;
        var f2 = d2 !== a ? d2 : this.q[c3].length;
        this.q[c3][f2] = b2;
      } }, { key: "_d", value: function() {
        if (this.d.onlyCountries.length) {
          var a2 = this.d.onlyCountries.map(function(a3) {
            return a3.toLowerCase();
          });
          this.p = e.filter(function(b3) {
            return a2.indexOf(b3.iso2) > -1;
          });
        } else if (this.d.excludeCountries.length) {
          var b2 = this.d.excludeCountries.map(function(a3) {
            return a3.toLowerCase();
          });
          this.p = e.filter(function(a3) {
            return -1 === b2.indexOf(a3.iso2);
          });
        } else this.p = e;
      } }, { key: "_d0", value: function() {
        for (var a2 = 0; a2 < this.p.length; a2++) {
          var b2 = this.p[a2].iso2.toLowerCase();
          this.d.localizedCountries.hasOwnProperty(b2) && (this.p[a2].name = this.d.localizedCountries[b2]);
        }
      } }, { key: "_d1", value: function(a2, b2) {
        return a2.name.localeCompare(b2.name);
      } }, { key: "_d2", value: function() {
        this.countryCodeMaxLen = 0, this.dialCodes = {}, this.q = {};
        for (var a2 = 0; a2 < this.p.length; a2++) {
          var b2 = this.p[a2];
          this.dialCodes[b2.dialCode] || (this.dialCodes[b2.dialCode] = true), this._c(b2.iso2, b2.dialCode, b2.priority);
        }
        for (var c3 = 0; c3 < this.p.length; c3++) {
          var d2 = this.p[c3];
          if (d2.areaCodes) for (var e2 = this.q[d2.dialCode][0], f2 = 0; f2 < d2.areaCodes.length; f2++) {
            for (var g2 = d2.areaCodes[f2], h2 = 1; h2 < g2.length; h2++) {
              var i2 = d2.dialCode + g2.substr(0, h2);
              this._c(e2, i2), this._c(d2.iso2, i2);
            }
            this._c(d2.iso2, d2.dialCode + g2);
          }
        }
      } }, { key: "_e", value: function() {
        this.preferredCountries = [];
        for (var a2 = 0; a2 < this.d.preferredCountries.length; a2++) {
          var b2 = this.d.preferredCountries[a2].toLowerCase(), c3 = this._y(b2, false, true);
          c3 && this.preferredCountries.push(c3);
        }
      } }, { key: "_e2", value: function(a2, b2, c3) {
        var d2 = document.createElement(a2);
        return b2 && l(b2, function(a3, b3) {
          return d2.setAttribute(a3, b3);
        }), c3 && c3.appendChild(d2), d2;
      } }, { key: "_f", value: function() {
        this.a.hasAttribute("autocomplete") || this.a.form && this.a.form.hasAttribute("autocomplete") || this.a.setAttribute("autocomplete", "off");
        var a2 = "iti";
        this.d.allowDropdown && (a2 += " iti--allow-dropdown"), this.d.separateDialCode && (a2 += " iti--separate-dial-code"), this.d.customContainer && (a2 += " ", a2 += this.d.customContainer);
        var b2 = this._e2("div", { "class": a2 });
        if (this.a.parentNode.insertBefore(b2, this.a), this.k = this._e2("div", { "class": "iti__flag-container" }, b2), b2.appendChild(this.a), this.selectedFlag = this._e2("div", { "class": "iti__selected-flag", role: "combobox", "aria-controls": "iti-".concat(this.id, "__country-listbox"), "aria-owns": "iti-".concat(this.id, "__country-listbox"), "aria-expanded": "false" }, this.k), this.l = this._e2("div", { "class": "iti__flag" }, this.selectedFlag), this.d.separateDialCode && (this.t = this._e2("div", { "class": "iti__selected-dial-code" }, this.selectedFlag)), this.d.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.u = this._e2("div", { "class": "iti__arrow" }, this.selectedFlag), this.m = this._e2("ul", { "class": "iti__country-list iti__hide", id: "iti-".concat(this.id, "__country-listbox"), role: "listbox", "aria-label": "List of countries" }), this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", true), this._e2("li", { "class": "iti__divider", role: "separator", "aria-disabled": "true" }, this.m)), this._g(this.p, "iti__standard"), this.d.dropdownContainer ? (this.dropdown = this._e2("div", { "class": "iti iti--container" }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), this.d.hiddenInput) {
          var c3 = this.d.hiddenInput, d2 = this.a.getAttribute("name");
          if (d2) {
            var e2 = d2.lastIndexOf("[");
            -1 !== e2 && (c3 = "".concat(d2.substr(0, e2), "[").concat(c3, "]"));
          }
          this.hiddenInput = this._e2("input", { type: "hidden", name: c3 }), b2.appendChild(this.hiddenInput);
        }
      } }, { key: "_g", value: function(a2, b2, c3) {
        for (var d2 = "", e2 = 0; e2 < a2.length; e2++) {
          var f2 = a2[e2], g2 = c3 ? "-preferred" : "";
          d2 += "<li class='iti__country ".concat(b2, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(f2.iso2).concat(g2, "' role='option' data-dial-code='").concat(f2.dialCode, "' data-country-code='").concat(f2.iso2, "' aria-selected='false'>"), d2 += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(f2.iso2, "'></div></div>"), d2 += "<span class='iti__country-name'>".concat(f2.name, "</span>"), d2 += "<span class='iti__dial-code'>+".concat(f2.dialCode, "</span>"), d2 += "</li>";
        }
        this.m.insertAdjacentHTML("beforeend", d2);
      } }, { key: "_h", value: function() {
        var a2 = this.a.getAttribute("value"), b2 = this.a.value, c3 = a2 && "+" === a2.charAt(0) && (!b2 || "+" !== b2.charAt(0)), d2 = c3 ? a2 : b2, e2 = this._5(d2), f2 = this._w(d2), g2 = this.d, h2 = g2.initialCountry, i2 = g2.nationalMode, j2 = g2.autoHideDialCode, k2 = g2.separateDialCode;
        e2 && !f2 ? this._v(d2) : "auto" !== h2 && (h2 ? this._z(h2.toLowerCase()) : e2 && f2 ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, d2 || this._z(this.j)), d2 || i2 || j2 || k2 || (this.a.value = "+".concat(this.s.dialCode))), d2 && this._u(d2);
      } }, { key: "_i", value: function() {
        this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), this.hiddenInput && this._i0();
      } }, { key: "_i0", value: function() {
        var a2 = this;
        this._a14 = function() {
          a2.hiddenInput.value = a2.getNumber();
        }, this.a.form && this.a.form.addEventListener("submit", this._a14);
      } }, { key: "_i1", value: function() {
        for (var a2 = this.a; a2 && "LABEL" !== a2.tagName; ) a2 = a2.parentNode;
        return a2;
      } }, { key: "_i2", value: function() {
        var a2 = this;
        this._a9 = function(b3) {
          a2.m.classList.contains("iti__hide") ? a2.a.focus() : b3.preventDefault();
        };
        var b2 = this._i1();
        b2 && b2.addEventListener("click", this._a9), this._a10 = function() {
          !a2.m.classList.contains("iti__hide") || a2.a.disabled || a2.a.readOnly || a2._n();
        }, this.selectedFlag.addEventListener("click", this._a10), this._a11 = function(b3) {
          a2.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(b3.key) && (b3.preventDefault(), b3.stopPropagation(), a2._n()), "Tab" === b3.key && a2._2();
        }, this.k.addEventListener("keydown", this._a11);
      } }, { key: "_i3", value: function() {
        var a2 = this;
        this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener("load", function() {
          window.intlTelInputGlobals.loadUtils(a2.d.utilsScript);
        }) : this.i0(), "auto" === this.d.initialCountry ? this._i4() : this.h();
      } }, { key: "_i4", value: function() {
        window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = true, "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup(function(a2) {
          window.intlTelInputGlobals.autoCountry = a2.toLowerCase(), setTimeout(function() {
            return m("handleAutoCountry");
          });
        }, function() {
          return m("rejectAutoCountryPromise");
        }));
      } }, { key: "_j", value: function() {
        var a2 = this;
        this._a12 = function() {
          a2._v(a2.a.value) && a2._m2CountryChange();
        }, this.a.addEventListener("keyup", this._a12), this._a13 = function() {
          setTimeout(a2._a12);
        }, this.a.addEventListener("cut", this._a13), this.a.addEventListener("paste", this._a13);
      } }, { key: "_j2", value: function(a2) {
        var b2 = this.a.getAttribute("maxlength");
        return b2 && a2.length > b2 ? a2.substr(0, b2) : a2;
      } }, { key: "_l", value: function() {
        var a2 = this;
        this._a8 = function() {
          a2._l2();
        }, this.a.form && this.a.form.addEventListener("submit", this._a8), this.a.addEventListener("blur", this._a8);
      } }, { key: "_l2", value: function() {
        if ("+" === this.a.value.charAt(0)) {
          var a2 = this._m(this.a.value);
          a2 && this.s.dialCode !== a2 || (this.a.value = "");
        }
      } }, { key: "_m", value: function(a2) {
        return a2.replace(/\D/g, "");
      } }, { key: "_m2", value: function(a2) {
        var b2 = document.createEvent("Event");
        b2.initEvent(a2, true, true), this.a.dispatchEvent(b2);
      } }, { key: "_n", value: function() {
        this.m.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._o(), this.b && (this._x(this.b, false), this._3(this.b, true)), this._p(), this.u.classList.add("iti__arrow--up"), this._m2("open:countrydropdown");
      } }, { key: "_n2", value: function(a2, b2, c3) {
        c3 && !a2.classList.contains(b2) ? a2.classList.add(b2) : !c3 && a2.classList.contains(b2) && a2.classList.remove(b2);
      } }, { key: "_o", value: function() {
        var a2 = this;
        if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g) {
          var b2 = this.a.getBoundingClientRect(), c3 = window.pageYOffset || document.documentElement.scrollTop, d2 = b2.top + c3, e2 = this.m.offsetHeight, f2 = d2 + this.a.offsetHeight + e2 < c3 + window.innerHeight, g2 = d2 - e2 > c3;
          if (this._n2(this.m, "iti__country-list--dropup", !f2 && g2), this.d.dropdownContainer) {
            var h2 = !f2 && g2 ? 0 : this.a.offsetHeight;
            this.dropdown.style.top = "".concat(d2 + h2, "px"), this.dropdown.style.left = "".concat(b2.left + document.body.scrollLeft, "px"), this._a4 = function() {
              return a2._2();
            }, window.addEventListener("scroll", this._a4);
          }
        }
      } }, { key: "_o2", value: function(a2) {
        for (var b2 = a2; b2 && b2 !== this.m && !b2.classList.contains("iti__country"); ) b2 = b2.parentNode;
        return b2 === this.m ? null : b2;
      } }, { key: "_p", value: function() {
        var a2 = this;
        this._a0 = function(b3) {
          var c4 = a2._o2(b3.target);
          c4 && a2._x(c4, false);
        }, this.m.addEventListener("mouseover", this._a0), this._a1 = function(b3) {
          var c4 = a2._o2(b3.target);
          c4 && a2._1(c4);
        }, this.m.addEventListener("click", this._a1);
        var b2 = true;
        this._a2 = function() {
          b2 || a2._2(), b2 = false;
        }, document.documentElement.addEventListener("click", this._a2);
        var c3 = "", d2 = null;
        this._a3 = function(b3) {
          b3.preventDefault(), "ArrowUp" === b3.key || "Up" === b3.key || "ArrowDown" === b3.key || "Down" === b3.key ? a2._q(b3.key) : "Enter" === b3.key ? a2._r() : "Escape" === b3.key ? a2._2() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b3.key) && (d2 && clearTimeout(d2), c3 += b3.key.toLowerCase(), a2._s(c3), d2 = setTimeout(function() {
            c3 = "";
          }, 1e3));
        }, document.addEventListener("keydown", this._a3);
      } }, { key: "_q", value: function(a2) {
        var b2 = "ArrowUp" === a2 || "Up" === a2 ? this.c.previousElementSibling : this.c.nextElementSibling;
        b2 && (b2.classList.contains("iti__divider") && (b2 = "ArrowUp" === a2 || "Up" === a2 ? b2.previousElementSibling : b2.nextElementSibling), this._x(b2, true));
      } }, { key: "_r", value: function() {
        this.c && this._1(this.c);
      } }, { key: "_s", value: function(a2) {
        for (var b2 = 0; b2 < this.p.length; b2++) if (this._t(this.p[b2].name, a2)) {
          var c3 = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[b2].iso2));
          this._x(c3, false), this._3(c3, true);
          break;
        }
      } }, { key: "_t", value: function(a2, b2) {
        return a2.substr(0, b2.length).toLowerCase() === b2;
      } }, { key: "_u", value: function(a2) {
        var b2 = a2;
        if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
          var c3 = !this.d.separateDialCode && (this.d.nationalMode || "+" !== b2.charAt(0)), d2 = intlTelInputUtils.numberFormat, e2 = d2.NATIONAL, f2 = d2.INTERNATIONAL, g2 = c3 ? e2 : f2;
          b2 = intlTelInputUtils.formatNumber(b2, this.s.iso2, g2);
        }
        b2 = this._7(b2), this.a.value = b2;
      } }, { key: "_v", value: function(a2) {
        var b2 = a2, c3 = this.s.dialCode, d2 = "1" === c3;
        b2 && this.d.nationalMode && d2 && "+" !== b2.charAt(0) && ("1" !== b2.charAt(0) && (b2 = "1".concat(b2)), b2 = "+".concat(b2)), this.d.separateDialCode && c3 && "+" !== b2.charAt(0) && (b2 = "+".concat(c3).concat(b2));
        var e2 = this._5(b2, true), f2 = this._m(b2), g2 = null;
        if (e2) {
          var h2 = this.q[this._m(e2)], i2 = -1 !== h2.indexOf(this.s.iso2) && f2.length <= e2.length - 1;
          if (!("1" === c3 && this._w(f2)) && !i2) {
            for (var j2 = 0; j2 < h2.length; j2++) if (h2[j2]) {
              g2 = h2[j2];
              break;
            }
          }
        } else "+" === b2.charAt(0) && f2.length ? g2 = "" : b2 && "+" !== b2 || (g2 = this.j);
        return null !== g2 && this._z(g2);
      } }, { key: "_w", value: function(a2) {
        var b2 = this._m(a2);
        if ("1" === b2.charAt(0)) {
          var c3 = b2.substr(1, 3);
          return -1 !== k.indexOf(c3);
        }
        return false;
      } }, { key: "_x", value: function(a2, b2) {
        var c3 = this.c;
        c3 && c3.classList.remove("iti__highlight"), this.c = a2, this.c.classList.add("iti__highlight"), b2 && this.c.focus();
      } }, { key: "_y", value: function(a2, b2, c3) {
        for (var d2 = b2 ? e : this.p, f2 = 0; f2 < d2.length; f2++) if (d2[f2].iso2 === a2) return d2[f2];
        if (c3) return null;
        throw new Error("No country data for '".concat(a2, "'"));
      } }, { key: "_z", value: function(a2) {
        var b2 = this.s.iso2 ? this.s : {};
        this.s = a2 ? this._y(a2, false, false) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute("class", "iti__flag iti__".concat(a2));
        var c3 = a2 ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown";
        if (this.selectedFlag.setAttribute("title", c3), this.d.separateDialCode) {
          var d2 = this.s.dialCode ? "+".concat(this.s.dialCode) : "";
          this.t.innerHTML = d2;
          var e2 = this.selectedFlag.offsetWidth || this._z2();
          this.a.style.paddingLeft = "".concat(e2 + 6, "px");
        }
        if (this._0(), this.d.allowDropdown) {
          var f2 = this.b;
          if (f2 && (f2.classList.remove("iti__active"), f2.setAttribute("aria-selected", "false")), a2) {
            var g2 = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a2, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(a2));
            g2.setAttribute("aria-selected", "true"), g2.classList.add("iti__active"), this.b = g2, this.selectedFlag.setAttribute("aria-activedescendant", g2.getAttribute("id"));
          }
        }
        return b2.iso2 !== a2;
      } }, { key: "_z2", value: function() {
        var a2 = this.a.parentNode.cloneNode();
        a2.style.visibility = "hidden", document.body.appendChild(a2);
        var b2 = this.k.cloneNode();
        a2.appendChild(b2);
        var c3 = this.selectedFlag.cloneNode(true);
        b2.appendChild(c3);
        var d2 = c3.offsetWidth;
        return a2.parentNode.removeChild(a2), d2;
      } }, { key: "_0", value: function() {
        var a2 = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder;
        if (window.intlTelInputUtils && a2) {
          var b2 = intlTelInputUtils.numberType[this.d.placeholderNumberType], c3 = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, b2) : "";
          c3 = this._7(c3), "function" == typeof this.d.customPlaceholder && (c3 = this.d.customPlaceholder(c3, this.s)), this.a.setAttribute("placeholder", c3);
        }
      } }, { key: "_1", value: function(a2) {
        var b2 = this._z(a2.getAttribute("data-country-code"));
        this._2(), this._4(a2.getAttribute("data-dial-code"), true), this.a.focus();
        var c3 = this.a.value.length;
        this.a.setSelectionRange(c3, c3), b2 && this._m2CountryChange();
      } }, { key: "_2", value: function() {
        this.m.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.u.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._a3), document.documentElement.removeEventListener("click", this._a2), this.m.removeEventListener("mouseover", this._a0), this.m.removeEventListener("click", this._a1), this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._m2("close:countrydropdown");
      } }, { key: "_3", value: function(a2, b2) {
        var c3 = this.m, d2 = window.pageYOffset || document.documentElement.scrollTop, e2 = c3.offsetHeight, f2 = c3.getBoundingClientRect().top + d2, g2 = f2 + e2, h2 = a2.offsetHeight, i2 = a2.getBoundingClientRect().top + d2, j2 = i2 + h2, k2 = i2 - f2 + c3.scrollTop, l2 = e2 / 2 - h2 / 2;
        if (i2 < f2) b2 && (k2 -= l2), c3.scrollTop = k2;
        else if (j2 > g2) {
          b2 && (k2 += l2);
          var m2 = e2 - h2;
          c3.scrollTop = k2 - m2;
        }
      } }, { key: "_4", value: function(a2, b2) {
        var c3, d2 = this.a.value, e2 = "+".concat(a2);
        if ("+" === d2.charAt(0)) {
          var f2 = this._5(d2);
          c3 = f2 ? d2.replace(f2, e2) : e2;
        } else {
          if (this.d.nationalMode || this.d.separateDialCode) return;
          if (d2) c3 = e2 + d2;
          else {
            if (!b2 && this.d.autoHideDialCode) return;
            c3 = e2;
          }
        }
        this.a.value = c3;
      } }, { key: "_5", value: function(a2, b2) {
        var c3 = "";
        if ("+" === a2.charAt(0)) for (var d2 = "", e2 = 0; e2 < a2.length; e2++) {
          var f2 = a2.charAt(e2);
          if (!isNaN(parseInt(f2, 10))) {
            if (d2 += f2, b2) this.q[d2] && (c3 = a2.substr(0, e2 + 1));
            else if (this.dialCodes[d2]) {
              c3 = a2.substr(0, e2 + 1);
              break;
            }
            if (d2.length === this.countryCodeMaxLen) break;
          }
        }
        return c3;
      } }, { key: "_6", value: function() {
        var a2 = this.a.value.trim(), b2 = this.s.dialCode, c3 = this._m(a2);
        return (this.d.separateDialCode && "+" !== a2.charAt(0) && b2 && c3 ? "+".concat(b2) : "") + a2;
      } }, { key: "_7", value: function(a2) {
        var b2 = a2;
        if (this.d.separateDialCode) {
          var c3 = this._5(b2);
          if (c3) {
            c3 = "+".concat(this.s.dialCode);
            var d2 = " " === b2[c3.length] || "-" === b2[c3.length] ? c3.length + 1 : c3.length;
            b2 = b2.substr(d2);
          }
        }
        return this._j2(b2);
      } }, { key: "_m2CountryChange", value: function() {
        this._m2("countrychange");
      } }, { key: "handleAutoCountry", value: function() {
        "auto" === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry, this.a.value || this.setCountry(this.j), this.h());
      } }, { key: "handleUtils", value: function() {
        window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), this.i0();
      } }, { key: "destroy", value: function() {
        var a2 = this.a.form;
        if (this.d.allowDropdown) {
          this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11);
          var b2 = this._i1();
          b2 && b2.removeEventListener("click", this._a9);
        }
        this.hiddenInput && a2 && a2.removeEventListener("submit", this._a14), this.d.autoHideDialCode && (a2 && a2.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8)), this.a.removeEventListener("keyup", this._a12), this.a.removeEventListener("cut", this._a13), this.a.removeEventListener("paste", this._a13), this.a.removeAttribute("data-intl-tel-input-id");
        var c3 = this.a.parentNode;
        c3.parentNode.insertBefore(this.a, c3), c3.parentNode.removeChild(c3), delete window.intlTelInputGlobals.instances[this.id];
      } }, { key: "getExtension", value: function() {
        return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : "";
      } }, { key: "getNumber", value: function(a2) {
        if (window.intlTelInputUtils) {
          var b2 = this.s.iso2;
          return intlTelInputUtils.formatNumber(this._6(), b2, a2);
        }
        return "";
      } }, { key: "getNumberType", value: function() {
        return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99;
      } }, { key: "getSelectedCountryData", value: function() {
        return this.s;
      } }, { key: "getValidationError", value: function() {
        if (window.intlTelInputUtils) {
          var a2 = this.s.iso2;
          return intlTelInputUtils.getValidationError(this._6(), a2);
        }
        return -99;
      } }, { key: "isValidNumber", value: function() {
        var a2 = this._6().trim(), b2 = this.d.nationalMode ? this.s.iso2 : "";
        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(a2, b2) : null;
      } }, { key: "setCountry", value: function(a2) {
        var b2 = a2.toLowerCase();
        this.l.classList.contains("iti__".concat(b2)) || (this._z(b2), this._4(this.s.dialCode, false), this._m2CountryChange());
      } }, { key: "setNumber", value: function(a2) {
        var b2 = this._v(a2);
        this._u(a2), b2 && this._m2CountryChange();
      } }, { key: "setPlaceholderNumberType", value: function(a2) {
        this.d.placeholderNumberType = a2, this._0();
      } }]), c2;
    }();
    h.getCountryData = function() {
      return e;
    };
    var o = function(a2, b2, c2) {
      var d2 = document.createElement("script");
      d2.onload = function() {
        m("handleUtils"), b2 && b2();
      }, d2.onerror = function() {
        m("rejectUtilsScriptPromise"), c2 && c2();
      }, d2.className = "iti-load-utils", d2.async = true, d2.src = a2, document.body.appendChild(d2);
    };
    return h.loadUtils = function(a2) {
      if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
        if (window.intlTelInputGlobals.startedLoadingUtilsScript = true, "undefined" != typeof Promise) return new Promise(function(b2, c2) {
          return o(a2, b2, c2);
        });
        o(a2);
      }
      return null;
    }, h.defaults = j, h.version = "17.0.12", function(a2, b2) {
      var c2 = new n(a2, b2);
      return c2._init(), a2.setAttribute("data-intl-tel-input-id", c2.id), window.intlTelInputGlobals.instances[c2.id] = c2, c2;
    };
  }();
});
(function() {
  function ha(k, B) {
    k.prototype = pb(B.prototype);
    k.prototype.constructor = k;
    k.base = B.prototype;
  }
  function pb(k) {
    function B() {
    }
    B.prototype = k;
    return new B();
  }
  function db(k, B, f2) {
    "millisecond" === f2 ? k.setMilliseconds(k.getMilliseconds() + 1 * B) : "second" === f2 ? k.setSeconds(k.getSeconds() + 1 * B) : "minute" === f2 ? k.setMinutes(k.getMinutes() + 1 * B) : "hour" === f2 ? k.setHours(k.getHours() + 1 * B) : "day" === f2 ? k.setDate(k.getDate() + 1 * B) : "week" === f2 ? k.setDate(k.getDate() + 7 * B) : "month" === f2 ? k.setMonth(k.getMonth() + 1 * B) : "year" === f2 && k.setFullYear(k.getFullYear() + 1 * B);
    return k;
  }
  function ka(k, B) {
    var f2 = false;
    0 > k && (f2 = true, k *= -1);
    k = "" + k;
    for (B = B ? B : 1; k.length < B; ) k = "0" + k;
    return f2 ? "-" + k : k;
  }
  function Pa(k) {
    if (!k) return k;
    k = k.replace(/^\s\s*/, "");
    for (var B = /\s/, f2 = k.length; B.test(k.charAt(--f2)); ) ;
    return k.slice(0, f2 + 1);
  }
  function Ha(k) {
    k.roundRect = function(k2, f2, s2, Z, I, A, u2, y2) {
      u2 && (this.fillStyle = u2);
      y2 && (this.strokeStyle = y2);
      "undefined" === typeof I && (I = 5);
      this.lineWidth = A;
      this.beginPath();
      this.moveTo(k2 + I, f2);
      this.lineTo(k2 + s2 - I, f2);
      this.quadraticCurveTo(k2 + s2, f2, k2 + s2, f2 + I);
      this.lineTo(k2 + s2, f2 + Z - I);
      this.quadraticCurveTo(k2 + s2, f2 + Z, k2 + s2 - I, f2 + Z);
      this.lineTo(k2 + I, f2 + Z);
      this.quadraticCurveTo(k2, f2 + Z, k2, f2 + Z - I);
      this.lineTo(k2, f2 + I);
      this.quadraticCurveTo(k2, f2, k2 + I, f2);
      this.closePath();
      u2 && this.fill();
      y2 && 0 < A && this.stroke();
    };
  }
  function Ya(k, B) {
    return k - B;
  }
  function eb(k, B, f2) {
    if (k && B && f2) {
      f2 = f2 + "." + B;
      var s2 = "image/" + B;
      k = k.toDataURL(s2);
      var Z = false, I = document.createElement("a");
      I.download = f2;
      I.href = k;
      if ("undefined" !== typeof Blob && new Blob()) {
        for (var A = k.replace(/^data:[a-z\/]*;base64,/, ""), A = atob(A), u2 = new ArrayBuffer(A.length), u2 = new Uint8Array(u2), y2 = 0; y2 < A.length; y2++) u2[y2] = A.charCodeAt(y2);
        B = new Blob([u2.buffer], { type: "image/" + B });
        try {
          window.navigator.msSaveBlob(B, f2), Z = true;
        } catch (P) {
          I.dataset.downloadurl = [s2, I.download, I.href].join(":"), I.href = window.URL.createObjectURL(B);
        }
      }
      if (!Z) try {
        event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), I.dispatchEvent ? I.dispatchEvent(event) : I.fireEvent && I.fireEvent("onclick");
      } catch (F2) {
        B = window.open(), B.document.write("<img src='" + k + "'></img><div>Please right click on the image and save it to your device</div>"), B.document.close();
      }
    }
  }
  function O(k) {
    var B = ((k & 16711680) >> 16).toString(16), f2 = ((k & 65280) >> 8).toString(16);
    k = ((k & 255) >> 0).toString(16);
    B = 2 > B.length ? "0" + B : B;
    f2 = 2 > f2.length ? "0" + f2 : f2;
    k = 2 > k.length ? "0" + k : k;
    return "#" + B + f2 + k;
  }
  function qb(k, B) {
    var f2 = this.length >>> 0, s2 = Number(B) || 0, s2 = 0 > s2 ? Math.ceil(s2) : Math.floor(s2);
    for (0 > s2 && (s2 += f2); s2 < f2; s2++) if (s2 in this && this[s2] === k) return s2;
    return -1;
  }
  function f(k) {
    return null === k || "undefined" === typeof k;
  }
  function Ea(k) {
    k.indexOf || (k.indexOf = qb);
    return k;
  }
  function rb(k) {
    if (Qa.fSDec) k[wa("`eeDwdouMhrudods")](
      wa("e`u`@ohl`uhnoHuds`uhnoDoe"),
      function() {
        Qa._fTWm && Qa._fTWm(k);
      }
    );
  }
  function fb(k, B, f2) {
    f2 = f2 || "normal";
    var s2 = k + "_" + B + "_" + f2, Z = gb[s2];
    if (isNaN(Z)) {
      try {
        k = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" + k + "; font-size:" + B + "px; font-weight:" + f2 + ";";
        if (!Fa) {
          var I = document.body;
          Fa = document.createElement("span");
          Fa.innerHTML = "";
          var A = document.createTextNode("Mpgyi");
          Fa.appendChild(A);
          I.appendChild(Fa);
        }
        Fa.style.display = "";
        Fa.setAttribute("style", k);
        Z = Math.round(Fa.offsetHeight);
        Fa.style.display = "none";
      } catch (u2) {
        Z = Math.ceil(1.1 * B);
      }
      Z = Math.max(Z, B);
      gb[s2] = Z;
    }
    return Z;
  }
  function N(k, B) {
    var f2 = [];
    if (f2 = { solid: [], shortDash: [3, 1], shortDot: [1, 1], shortDashDot: [3, 1, 1, 1], shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2], dash: [4, 2], dashDot: [4, 2, 1, 2], longDash: [8, 2], longDashDot: [8, 2, 1, 2], longDashDotDot: [8, 2, 1, 2, 1, 2] }[k || "solid"]) for (var s2 = 0; s2 < f2.length; s2++) f2[s2] *= B;
    else f2 = [];
    return f2;
  }
  function y(k, B, L, s2, Z) {
    s2 = s2 || [];
    Z = f(Z) ? sb ? { passive: false, capture: false } : false : Z;
    s2.push([k, B, L, Z]);
    return k.addEventListener ? (k.addEventListener(
      B,
      L,
      Z
    ), L) : k.attachEvent ? (s2 = function(B2) {
      B2 = B2 || window.event;
      B2.preventDefault = B2.preventDefault || function() {
        B2.returnValue = false;
      };
      B2.stopPropagation = B2.stopPropagation || function() {
        B2.cancelBubble = true;
      };
      L.call(k, B2);
    }, k.attachEvent("on" + B, s2), s2) : false;
  }
  function hb(k, B, f2, s2) {
    s2 = s2 || false;
    if (k.removeEventListener) k.removeEventListener(B, f2, s2);
    else if (k.detachEvent) k.detachEvent("on" + B, f2);
    else return false;
  }
  function ib(k, B) {
    if ("createEvent" in document) {
      var f2 = document.createEvent("HTMLEvents");
      f2.initEvent(B, false, true);
      k.dispatchEvent(f2);
    } else k.fireEvent("on" + B);
  }
  function jb(k) {
    if (k._menuButton) k.exportEnabled ? Ta(k._menuButton) : za(k._menuButton);
    else if (k.exportEnabled && s) {
      var B = false;
      k._menuButton = document.createElement("button");
      Ca(k, k._menuButton, "menu");
      k._toolBar.appendChild(k._menuButton);
      y(k._menuButton, "touchstart", function(k2) {
        B = true;
      }, k.allDOMEventHandlers);
      y(k._menuButton, "click", function() {
        "none" !== k._dropdownMenu.style.display || k._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - k._dropDownCloseTime.getTime() || (k._dropdownMenu.style.display = "block", k._menuButton.blur(), k._dropdownMenu.focus());
      }, k.allDOMEventHandlers, true);
      y(k._menuButton, "mouseover", function() {
        B || (ra(k._menuButton, { backgroundColor: k.toolbar.backgroundColorOnHover, color: k.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && ra(k._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
      }, k.allDOMEventHandlers, true);
      y(k._menuButton, "mouseout", function() {
        B || (ra(k._menuButton, { backgroundColor: k.toolbar.backgroundColor, color: k.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && ra(k._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
      }, k.allDOMEventHandlers, true);
    }
    if (!k._dropdownMenu && k.exportEnabled && s) {
      B = false;
      k._dropdownMenu = document.createElement("div");
      k._dropdownMenu.setAttribute("tabindex", -1);
      var f2 = -1 !== k.theme.indexOf("dark") ? "black" : "#888888";
      k._dropdownMenu.style.cssText = "position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" + k.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + f2;
      k._dropdownMenu.style.display = "none";
      k._toolBar.appendChild(k._dropdownMenu);
      y(k._dropdownMenu, "blur", function() {
        za(k._dropdownMenu);
        k._dropDownCloseTime = /* @__PURE__ */ new Date();
      }, k.allDOMEventHandlers, true);
      f2 = document.createElement("div");
      f2.style.cssText = "padding: 12px 8px 12px 8px";
      f2.innerHTML = k._cultureInfo.printText;
      f2.style.backgroundColor = k.toolbar.backgroundColor;
      f2.style.color = k.toolbar.fontColor;
      k._dropdownMenu.appendChild(f2);
      y(f2, "touchstart", function(k2) {
        B = true;
      }, k.allDOMEventHandlers);
      y(f2, "mouseover", function() {
        B || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover);
      }, k.allDOMEventHandlers, true);
      y(f2, "mouseout", function() {
        B || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor);
      }, k.allDOMEventHandlers, true);
      y(f2, "click", function() {
        k.print();
        za(k._dropdownMenu);
      }, k.allDOMEventHandlers, true);
      f2 = document.createElement("div");
      f2.style.cssText = "padding: 12px 8px 12px 8px";
      f2.innerHTML = k._cultureInfo.saveJPGText;
      f2.style.backgroundColor = k.toolbar.backgroundColor;
      f2.style.color = k.toolbar.fontColor;
      k._dropdownMenu.appendChild(f2);
      y(f2, "touchstart", function(k2) {
        B = true;
      }, k.allDOMEventHandlers);
      y(f2, "mouseover", function() {
        B || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover);
      }, k.allDOMEventHandlers, true);
      y(
        f2,
        "mouseout",
        function() {
          B || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor);
        },
        k.allDOMEventHandlers,
        true
      );
      y(f2, "click", function() {
        k.exportChart({ format: "jpeg", fileName: k.exportFileName });
        za(k._dropdownMenu);
      }, k.allDOMEventHandlers, true);
      f2 = document.createElement("div");
      f2.style.cssText = "padding: 12px 8px 12px 8px";
      f2.innerHTML = k._cultureInfo.savePNGText;
      f2.style.backgroundColor = k.toolbar.backgroundColor;
      f2.style.color = k.toolbar.fontColor;
      k._dropdownMenu.appendChild(f2);
      y(f2, "touchstart", function(k2) {
        B = true;
      }, k.allDOMEventHandlers);
      y(f2, "mouseover", function() {
        B || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover);
      }, k.allDOMEventHandlers, true);
      y(f2, "mouseout", function() {
        B || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor);
      }, k.allDOMEventHandlers, true);
      y(f2, "click", function() {
        k.exportChart({ format: "png", fileName: k.exportFileName });
        za(k._dropdownMenu);
      }, k.allDOMEventHandlers, true);
    }
  }
  function kb(k, B, f2) {
    k *= ia;
    B *= ia;
    k = f2.getImageData(k, B, 2, 2).data;
    B = true;
    for (f2 = 0; 4 > f2; f2++) if (k[f2] !== k[f2 + 4] | k[f2] !== k[f2 + 8] | k[f2] !== k[f2 + 12]) {
      B = false;
      break;
    }
    return B ? k[0] << 16 | k[1] << 8 | k[2] : 0;
  }
  function sa(k, B, f2) {
    return k in B ? B[k] : f2[k];
  }
  function Ua(k, B, f2) {
    if (s && lb) {
      var U = k.getContext("2d");
      Va = U.webkitBackingStorePixelRatio || U.mozBackingStorePixelRatio || U.msBackingStorePixelRatio || U.oBackingStorePixelRatio || U.backingStorePixelRatio || 1;
      ia = Za / Va;
      k.width = B * ia;
      k.height = f2 * ia;
      Za !== Va && (k.style.width = B + "px", k.style.height = f2 + "px", U.scale(ia, ia));
    } else k.width = B, k.height = f2;
  }
  function tb(k) {
    if (!ub) {
      var B = false, f2 = false;
      "undefined" === typeof ma.Chart.creditHref ? (k.creditHref = wa("iuuqr;..b`ow`rkr/bnl."), k.creditText = wa("B`ow`rKR/bnl")) : (B = k.updateOption("creditText"), f2 = k.updateOption("creditHref"));
      if (k.creditHref && k.creditText) {
        k._creditLink || (k._creditLink = document.createElement("a"), k._creditLink.setAttribute("class", "canvasjs-chart-credit"), k._creditLink.setAttribute("title", "JavaScript Charts"), k._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (k.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"), k._creditLink.setAttribute("tabIndex", -1), k._creditLink.setAttribute("target", "_blank"));
        if (0 === k.renderCount || B || f2) k._creditLink.setAttribute("href", k.creditHref), k._creditLink.innerHTML = k.creditText;
        k._creditLink && k.creditHref && k.creditText ? (k._creditLink.parentElement || k._canvasJSContainer.appendChild(k._creditLink), k._creditLink.style.top = k.height - 14 + "px") : k._creditLink.parentElement && k._canvasJSContainer.removeChild(k._creditLink);
      }
    }
  }
  function ta(k, B) {
    Ma && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
    var f2 = document.createElement("canvas");
    f2.setAttribute("class", "canvasjs-chart-canvas");
    Ua(f2, k, B);
    s || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(f2);
    return f2;
  }
  function ra(k, f2) {
    for (var s2 in f2) k.style[s2] = f2[s2];
  }
  function Ca(k, f2, s2) {
    f2.getAttribute("state") || (f2.style.backgroundColor = k.toolbar.backgroundColor, f2.style.color = k.toolbar.fontColor, f2.style.border = "none", ra(f2, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
    f2.getAttribute("state") !== s2 && (f2.setAttribute("state", s2), f2.setAttribute("type", "button"), ra(f2, { padding: "5px 12px", cursor: "pointer", "float": "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }), f2.setAttribute("title", k._cultureInfo[s2 + "Text"]), f2.innerHTML = "<img style='height:95%; pointer-events: none;' src='" + vb[s2].image + "' alt='" + k._cultureInfo[s2 + "Text"] + "' />");
  }
  function Ta() {
    for (var k = null, f2 = 0; f2 < arguments.length; f2++) k = arguments[f2], k.style && (k.style.display = "inline");
  }
  function za() {
    for (var k = null, f2 = 0; f2 < arguments.length; f2++) (k = arguments[f2]) && k.style && (k.style.display = "none");
  }
  function $a(k) {
    if (null === k || "object" !== typeof k) return k;
    if (k instanceof Date) return new Date(k.getTime());
    Array.isArray || (Array.isArray = function(k2) {
      return "[object Array]" === Object.prototype.toString.call(k2);
    });
    if (Array.isArray(k)) {
      for (var f2 = [], s2 = 0; s2 < k.length; s2++) f2.push($a(k[s2]));
      return f2;
    }
    f2 = new k.constructor();
    for (s2 in k) k.hasOwnProperty(s2) && (f2[s2] = $a(k[s2]));
    return f2;
  }
  function Wa(k, f2, s2, U, Z) {
    if (null === k || "undefined" === typeof k) return "undefined" === typeof s2 ? f2 : s2;
    k = parseFloat(k.toString()) * (0 <= k.toString().indexOf("%") ? f2 / 100 : 1);
    "undefined" !== typeof U && (k = Math.min(U, k), "undefined" !== typeof Z && (k = Math.max(Z, k)));
    return !isNaN(k) && k <= f2 && 0 <= k ? k : "undefined" === typeof s2 ? f2 : s2;
  }
  function Q(k, B, s2, U, Z) {
    this._defaultsKey = k;
    this._themeOptionsKey = B;
    this._index = U;
    this.parent = Z;
    this._eventListeners = [];
    k = {};
    this.theme && f(this.parent) && f(B) && f(U) ? k = f(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[B]) && (null === U ? k = this.parent.themeOptions[B] : 0 < this.parent.themeOptions[B].length && (U = Math.min(this.parent.themeOptions[B].length - 1, U), k = this.parent.themeOptions[B][U]));
    this.themeOptions = k;
    this.options = s2 ? s2 : { _isPlaceholder: true };
    this.setOptions(this.options, k);
  }
  function La(k, f2, s2, U, Z) {
    "undefined" === typeof Z && (Z = 0);
    this._padding = Z;
    this._x1 = k;
    this._y1 = f2;
    this._x2 = s2;
    this._y2 = U;
    this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
  }
  function na(k, f2) {
    na.base.constructor.call(this, "TextBlock", null, f2, null, null);
    this.ctx = k;
    this._isDirty = true;
    this._wrappedText = null;
    this._initialize();
  }
  function Xa(k, f2) {
    Xa.base.constructor.call(this, "Toolbar", "toolbar", f2, null, k);
    this.chart = k;
    this.canvas = k.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "toolbar";
  }
  function Ia(k, B) {
    Ia.base.constructor.call(this, "Title", "title", B, null, k);
    this.chart = k;
    this.canvas = k.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "title";
    if (f(this.options.margin) && k.options.subtitles) {
      for (var s2 = k.options.subtitles, U = 0; U < s2.length; U++) if ((f(s2[U].horizontalAlign) && "center" === this.horizontalAlign || s2[U].horizontalAlign === this.horizontalAlign) && (f(s2[U].verticalAlign) && "top" === this.verticalAlign || s2[U].verticalAlign === this.verticalAlign) && !s2[U].dockInsidePlotArea === !this.dockInsidePlotArea) {
        this.margin = 0;
        break;
      }
    }
    "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
    this.height = this.width = null;
    this.bounds = { x1: null, y1: null, x2: null, y2: null };
  }
  function Na(k, f2, s2) {
    Na.base.constructor.call(this, "Subtitle", "subtitles", f2, s2, k);
    this.chart = k;
    this.canvas = k.canvas;
    this.ctx = this.chart.ctx;
    this.optionsName = "subtitles";
    this.isOptionsInArray = true;
    "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
    this.height = this.width = null;
    this.bounds = { x1: null, y1: null, x2: null, y2: null };
  }
  function ab() {
    this.pool = [];
  }
  function Oa(k) {
    var f2;
    k && Ra[k] && (f2 = Ra[k]);
    Oa.base.constructor.call(this, "CultureInfo", null, f2, null, null);
  }
  var Ma = false, Qa = {}, s = !!document.createElement("canvas").getContext, ma = { Chart: { width: 500, height: 400, zoomEnabled: false, zoomType: "x", backgroundColor: "white", theme: "light1", animationEnabled: false, animationDuration: 1200, dataPointWidth: null, dataPointMinWidth: null, dataPointMaxWidth: null, colorSet: "colorSet1", culture: "en", creditHref: "", creditText: "CanvasJS", interactivityEnabled: true, exportEnabled: false, exportFileName: "Chart", rangeChanging: null, rangeChanged: null, publicProperties: {
    title: "readWrite",
    subtitles: "readWrite",
    toolbar: "readWrite",
    toolTip: "readWrite",
    legend: "readWrite",
    axisX: "readWrite",
    axisY: "readWrite",
    axisX2: "readWrite",
    axisY2: "readWrite",
    data: "readWrite",
    options: "readWrite",
    bounds: "readOnly",
    container: "readOnly",
    selectedColorSet: "readOnly"
  } }, Title: {
    padding: 0,
    text: null,
    verticalAlign: "top",
    horizontalAlign: "center",
    fontSize: 20,
    fontFamily: "Calibri",
    fontWeight: "normal",
    fontColor: "black",
    fontStyle: "normal",
    borderThickness: 0,
    borderColor: "black",
    cornerRadius: 0,
    backgroundColor: s ? "transparent" : null,
    margin: 5,
    wrap: true,
    maxWidth: null,
    dockInsidePlotArea: false,
    publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
  }, Subtitle: { padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 14, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, margin: 2, wrap: true, maxWidth: null, dockInsidePlotArea: false, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } }, Toolbar: {
    backgroundColor: "white",
    backgroundColorOnHover: "#2196f3",
    borderColor: "#2196f3",
    borderThickness: 1,
    fontColor: "black",
    fontColorOnHover: "white",
    publicProperties: { options: "readWrite", chart: "readOnly" }
  }, Legend: {
    name: null,
    verticalAlign: "center",
    horizontalAlign: "right",
    fontSize: 14,
    fontFamily: "calibri",
    fontWeight: "normal",
    fontColor: "black",
    fontStyle: "normal",
    cursor: null,
    itemmouseover: null,
    itemmouseout: null,
    itemmousemove: null,
    itemclick: null,
    dockInsidePlotArea: false,
    reversed: false,
    backgroundColor: s ? "transparent" : null,
    borderColor: s ? "transparent" : null,
    borderThickness: 0,
    cornerRadius: 0,
    maxWidth: null,
    maxHeight: null,
    markerMargin: null,
    itemMaxWidth: null,
    itemWidth: null,
    itemWrap: true,
    itemTextFormatter: null,
    publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
  }, ToolTip: {
    enabled: true,
    shared: false,
    animationEnabled: true,
    content: null,
    contentFormatter: null,
    reversed: false,
    backgroundColor: s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
    borderColor: null,
    borderThickness: 2,
    cornerRadius: 5,
    fontSize: 14,
    fontColor: "black",
    fontFamily: "Calibri, Arial, Georgia, serif;",
    fontWeight: "normal",
    fontStyle: "italic",
    updated: null,
    hidden: null,
    publicProperties: { options: "readWrite", chart: "readOnly" }
  }, Axis: {
    minimum: null,
    maximum: null,
    viewportMinimum: null,
    viewportMaximum: null,
    interval: null,
    intervalType: null,
    reversed: false,
    logarithmic: false,
    logarithmBase: 10,
    title: null,
    titleFontColor: "black",
    titleFontSize: 20,
    titleFontFamily: "arial",
    titleFontWeight: "normal",
    titleFontStyle: "normal",
    titleWrap: true,
    titleMaxWidth: null,
    titleBackgroundColor: s ? "transparent" : null,
    titleBorderColor: s ? "transparent" : null,
    titleBorderThickness: 0,
    titleCornerRadius: 0,
    labelAngle: 0,
    labelFontFamily: "arial",
    labelFontColor: "black",
    labelFontSize: 12,
    labelFontWeight: "normal",
    labelFontStyle: "normal",
    labelAutoFit: true,
    labelWrap: true,
    labelMaxWidth: null,
    labelFormatter: null,
    labelBackgroundColor: s ? "transparent" : null,
    labelBorderColor: s ? "transparent" : null,
    labelBorderThickness: 0,
    labelCornerRadius: 0,
    labelPlacement: "outside",
    labelTextAlign: "left",
    prefix: "",
    suffix: "",
    includeZero: false,
    tickLength: 5,
    tickColor: "black",
    tickThickness: 1,
    tickPlacement: "outside",
    lineColor: "black",
    lineThickness: 1,
    lineDashType: "solid",
    gridColor: "#A0A0A0",
    gridThickness: 0,
    gridDashType: "solid",
    interlacedColor: s ? "transparent" : null,
    valueFormatString: null,
    margin: 2,
    publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
  }, StripLine: {
    value: null,
    startValue: null,
    endValue: null,
    color: "orange",
    opacity: null,
    thickness: 2,
    lineDashType: "solid",
    label: "",
    labelPlacement: "inside",
    labelAlign: "far",
    labelWrap: true,
    labelMaxWidth: null,
    labelBackgroundColor: null,
    labelBorderColor: s ? "transparent" : null,
    labelBorderThickness: 0,
    labelCornerRadius: 0,
    labelFontFamily: "arial",
    labelFontColor: "orange",
    labelFontSize: 12,
    labelFontWeight: "normal",
    labelFontStyle: "normal",
    labelFormatter: null,
    showOnTop: false,
    publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
  }, ScaleBreaks: {
    autoCalculate: false,
    collapsibleThreshold: "25%",
    maxNumberOfAutoBreaks: 2,
    spacing: 8,
    type: "straight",
    color: "#FFFFFF",
    fillOpacity: 0.9,
    lineThickness: 2,
    lineColor: "#E16E6E",
    lineDashType: "solid",
    publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
  }, Break: { startValue: null, endValue: null, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" } }, Crosshair: {
    enabled: false,
    snapToDataPoint: false,
    color: "grey",
    opacity: null,
    thickness: 2,
    lineDashType: "solid",
    label: "",
    labelWrap: true,
    labelMaxWidth: null,
    labelBackgroundColor: s ? "grey" : null,
    labelBorderColor: s ? "grey" : null,
    labelBorderThickness: 0,
    labelCornerRadius: 0,
    labelFontFamily: s ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
    labelFontSize: 12,
    labelFontColor: "#fff",
    labelFontWeight: "normal",
    labelFontStyle: "normal",
    labelFormatter: null,
    valueFormatString: null,
    updated: null,
    hidden: null,
    publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
  }, DataSeries: {
    name: null,
    dataPoints: null,
    label: "",
    bevelEnabled: false,
    highlightEnabled: true,
    cursor: "default",
    indexLabel: "",
    indexLabelPlacement: "auto",
    indexLabelOrientation: "horizontal",
    indexLabelFontColor: "black",
    indexLabelFontSize: 12,
    indexLabelFontStyle: "normal",
    indexLabelFontFamily: "Arial",
    indexLabelFontWeight: "normal",
    indexLabelBackgroundColor: null,
    indexLabelLineColor: "gray",
    indexLabelLineThickness: 1,
    indexLabelLineDashType: "solid",
    indexLabelMaxWidth: null,
    indexLabelWrap: true,
    indexLabelFormatter: null,
    lineThickness: 2,
    lineDashType: "solid",
    connectNullData: false,
    nullDataLineDashType: "dash",
    color: null,
    lineColor: null,
    risingColor: "white",
    fallingColor: "red",
    fillOpacity: null,
    startAngle: 0,
    radius: null,
    innerRadius: null,
    neckHeight: null,
    neckWidth: null,
    reversed: false,
    valueRepresents: null,
    linkedDataSeriesIndex: null,
    whiskerThickness: 2,
    whiskerDashType: "solid",
    whiskerColor: null,
    whiskerLength: null,
    stemThickness: 2,
    stemColor: null,
    stemDashType: "solid",
    upperBoxColor: "white",
    lowerBoxColor: "white",
    type: "column",
    xValueType: "number",
    axisXType: "primary",
    axisYType: "primary",
    axisXIndex: 0,
    axisYIndex: 0,
    xValueFormatString: null,
    yValueFormatString: null,
    zValueFormatString: null,
    percentFormatString: null,
    showInLegend: null,
    legendMarkerType: null,
    legendMarkerColor: null,
    legendText: null,
    legendMarkerBorderColor: s ? "transparent" : null,
    legendMarkerBorderThickness: 0,
    markerType: "circle",
    markerColor: null,
    markerSize: null,
    markerBorderColor: s ? "transparent" : null,
    markerBorderThickness: 0,
    mouseover: null,
    mouseout: null,
    mousemove: null,
    click: null,
    toolTipContent: null,
    visible: true,
    publicProperties: {
      options: "readWrite",
      axisX: "readWrite",
      axisY: "readWrite",
      chart: "readOnly"
    }
  }, TextBlock: { x: 0, y: 0, width: null, height: null, maxWidth: null, maxHeight: null, padding: 0, angle: 0, text: "", horizontalAlign: "center", textAlign: "left", fontSize: 12, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, textBaseline: "top" }, CultureInfo: {
    decimalSeparator: ".",
    digitGroupSeparator: ",",
    zoomText: "Zoom",
    panText: "Pan",
    resetText: "Reset",
    menuText: "More Options",
    saveJPGText: "Save as JPEG",
    savePNGText: "Save as PNG",
    printText: "Print",
    days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    months: "January February March April May June July August September October November December".split(" "),
    shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
  } }, Ra = { en: {} }, u = s ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Aa = s ? "Impact, Charcoal, sans-serif" : "Arial", ya = {
    colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
    colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
    colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
  }, K, W, M, X, ua;
  W = "#333333";
  M = "#000000";
  K = "#666666";
  ua = X = "#000000";
  var ea = 20, F = 14, Ga = {
    colorSet: "colorSet1",
    backgroundColor: "#FFFFFF",
    title: { fontFamily: Aa, fontSize: 32, fontColor: W, fontWeight: "normal", verticalAlign: "top", margin: 5 },
    subtitles: [{ fontFamily: Aa, fontSize: F, fontColor: W, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
    data: [{ indexLabelFontFamily: u, indexLabelFontSize: F, indexLabelFontColor: W, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
    axisX: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: M, labelFontWeight: "normal", lineThickness: 1, lineColor: K, tickThickness: 1, tickColor: K, gridThickness: 0, gridColor: K, stripLines: [{
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: "#FF7300",
      labelFontWeight: "normal",
      labelBackgroundColor: null,
      color: "#FF7300",
      thickness: 1
    }], crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }],
    axisX2: [{
      titleFontFamily: u,
      titleFontSize: ea,
      titleFontColor: W,
      titleFontWeight: "normal",
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: M,
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: K,
      tickThickness: 1,
      tickColor: K,
      gridThickness: 0,
      gridColor: K,
      stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" },
      scaleBreaks: {
        type: "zigzag",
        spacing: "2%",
        lineColor: "#BBBBBB",
        lineThickness: 1,
        lineDashType: "solid"
      }
    }],
    axisY: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: M, labelFontWeight: "normal", lineThickness: 1, lineColor: K, tickThickness: 1, tickColor: K, gridThickness: 1, gridColor: K, stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: "#EEEEEE",
      labelFontWeight: "normal",
      labelBackgroundColor: ua,
      color: X,
      thickness: 1,
      lineDashType: "dash"
    }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }],
    axisY2: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: W, titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: M, labelFontWeight: "normal", lineThickness: 1, lineColor: K, tickThickness: 1, tickColor: K, gridThickness: 1, gridColor: K, stripLines: [{
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: "#FF7300",
      labelFontWeight: "normal",
      labelBackgroundColor: null,
      color: "#FF7300",
      thickness: 1
    }], crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }],
    legend: { fontFamily: u, fontSize: 14, fontColor: W, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
    toolTip: { fontFamily: u, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }
  };
  K = "#2A2A2A";
  M = W = "#F5F5F5";
  K = "#FFFFFF";
  X = "#40BAF1";
  ua = "#F5F5F5";
  var ea = 20, F = 14, Ja = { colorSet: "colorSet2", title: { fontFamily: u, fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: u, fontSize: F, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: u, indexLabelFontSize: F, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
    titleFontFamily: u,
    titleFontSize: ea,
    titleFontColor: "#666666",
    titleFontWeight: "normal",
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: "#666666",
    labelFontWeight: "normal",
    lineThickness: 1,
    lineColor: "#BBBBBB",
    tickThickness: 1,
    tickColor: "#BBBBBB",
    gridThickness: 1,
    gridColor: "#BBBBBB",
    stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
    crosshair: {
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: "#EEEEEE",
      labelFontWeight: "normal",
      labelBackgroundColor: "black",
      color: "black",
      thickness: 1,
      lineDashType: "dot"
    },
    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
  }], axisX2: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 1, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: "#FFA500",
    labelFontWeight: "normal",
    labelBackgroundColor: null,
    color: "#FFA500",
    thickness: 1
  }], crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
    titleFontFamily: u,
    titleFontSize: ea,
    titleFontColor: "#666666",
    titleFontWeight: "normal",
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: "#666666",
    labelFontWeight: "normal",
    lineThickness: 0,
    lineColor: "#BBBBBB",
    tickColor: "#BBBBBB",
    tickThickness: 1,
    gridThickness: 1,
    gridColor: "#BBBBBB",
    stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
    crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
    scaleBreaks: {
      type: "zigzag",
      spacing: "2%",
      lineColor: "#BBBBBB",
      lineThickness: 1,
      lineDashType: "solid"
    }
  }], axisY2: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 0, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }], crosshair: {
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: "#EEEEEE",
    labelFontWeight: "normal",
    labelBackgroundColor: "black",
    color: "black",
    thickness: 1,
    lineDashType: "dot"
  }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], legend: { fontFamily: u, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: u, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 } };
  M = W = "#F5F5F5";
  K = "#FFFFFF";
  X = "#40BAF1";
  ua = "#F5F5F5";
  ea = 20;
  F = 14;
  Aa = {
    colorSet: "colorSet12",
    backgroundColor: "#2A2A2A",
    title: { fontFamily: Aa, fontSize: 32, fontColor: W, fontWeight: "normal", verticalAlign: "top", margin: 5 },
    subtitles: [{ fontFamily: Aa, fontSize: F, fontColor: W, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
    toolbar: { backgroundColor: "#666666", backgroundColorOnHover: "#FF7372", borderColor: "#FF7372", borderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
    data: [{ indexLabelFontFamily: u, indexLabelFontSize: F, indexLabelFontColor: M, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
    axisX: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: M, titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: M, labelFontWeight: "normal", lineThickness: 1, lineColor: K, tickThickness: 1, tickColor: K, gridThickness: 0, gridColor: K, stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: "#000000",
      labelFontWeight: "normal",
      labelBackgroundColor: ua,
      color: X,
      thickness: 1,
      lineDashType: "dash"
    }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
    axisX2: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: M, titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: M, labelFontWeight: "normal", lineThickness: 1, lineColor: K, tickThickness: 1, tickColor: K, gridThickness: 0, gridColor: K, stripLines: [{
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: "#FF7300",
      labelFontWeight: "normal",
      labelBackgroundColor: null,
      color: "#FF7300",
      thickness: 1
    }], crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
    axisY: [{
      titleFontFamily: u,
      titleFontSize: ea,
      titleFontColor: M,
      titleFontWeight: "normal",
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: M,
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: K,
      tickThickness: 1,
      tickColor: K,
      gridThickness: 1,
      gridColor: K,
      stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
    }],
    axisY2: [{
      titleFontFamily: u,
      titleFontSize: ea,
      titleFontColor: M,
      titleFontWeight: "normal",
      labelFontFamily: u,
      labelFontSize: F,
      labelFontColor: M,
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: K,
      tickThickness: 1,
      tickColor: K,
      gridThickness: 1,
      gridColor: K,
      stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
    }],
    legend: { fontFamily: u, fontSize: 14, fontColor: W, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
    toolTip: { fontFamily: u, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: M, backgroundColor: "rgba(0, 0, 0, .7)" }
  };
  K = "#FFFFFF";
  M = W = "#FAFAFA";
  X = "#40BAF1";
  ua = "#F5F5F5";
  ea = 20;
  F = 14;
  X = { colorSet: "colorSet2", backgroundColor: "#32373A", title: {
    fontFamily: u,
    fontSize: 32,
    fontColor: W,
    fontWeight: "normal",
    verticalAlign: "top",
    margin: 5
  }, subtitles: [{ fontFamily: u, fontSize: F, fontColor: W, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { backgroundColor: "#666666", backgroundColorOnHover: "#FF7372", borderColor: "#FF7372", borderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{ indexLabelFontFamily: u, indexLabelFontSize: F, indexLabelFontColor: M, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
    titleFontFamily: u,
    titleFontSize: ea,
    titleFontColor: M,
    titleFontWeight: "normal",
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: M,
    labelFontWeight: "normal",
    lineThickness: 1,
    lineColor: K,
    tickThickness: 1,
    tickColor: K,
    gridThickness: 0,
    gridColor: K,
    stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
    crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" },
    scaleBreaks: {
      type: "zigzag",
      spacing: "2%",
      lineColor: "#777777",
      lineThickness: 1,
      lineDashType: "solid",
      color: "#111111"
    }
  }], axisX2: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: M, titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: M, labelFontWeight: "normal", lineThickness: 1, lineColor: K, tickThickness: 1, tickColor: K, gridThickness: 0, gridColor: K, stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: "#000000",
    labelFontWeight: "normal",
    labelBackgroundColor: ua,
    color: X,
    thickness: 1,
    lineDashType: "dash"
  }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{ titleFontFamily: u, titleFontSize: ea, titleFontColor: M, titleFontWeight: "normal", labelFontFamily: u, labelFontSize: F, labelFontColor: M, labelFontWeight: "normal", lineThickness: 0, lineColor: K, tickThickness: 1, tickColor: K, gridThickness: 1, gridColor: K, stripLines: [{
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: "#FF7300",
    labelFontWeight: "normal",
    labelBackgroundColor: null,
    color: "#FF7300",
    thickness: 1
  }], crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY2: [{
    titleFontFamily: u,
    titleFontSize: ea,
    titleFontColor: M,
    titleFontWeight: "normal",
    labelFontFamily: u,
    labelFontSize: F,
    labelFontColor: M,
    labelFontWeight: "normal",
    lineThickness: 0,
    lineColor: K,
    tickThickness: 1,
    tickColor: K,
    gridThickness: 1,
    gridColor: K,
    stripLines: [{ labelFontFamily: u, labelFontSize: F, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
    crosshair: { labelFontFamily: u, labelFontSize: F, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ua, color: X, thickness: 1, lineDashType: "dash" },
    scaleBreaks: {
      type: "zigzag",
      spacing: "2%",
      lineColor: "#777777",
      lineThickness: 1,
      lineDashType: "solid",
      color: "#111111"
    }
  }], legend: { fontFamily: u, fontSize: 14, fontColor: W, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: u, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: M, backgroundColor: "rgba(0, 0, 0, .7)" } };
  var bb = { light1: Ga, light2: Ja, dark1: Aa, dark2: X, theme1: Ga, theme2: Ja, theme3: Ga }, Y = {
    numberDuration: 1,
    yearDuration: 314496e5,
    monthDuration: 2592e6,
    weekDuration: 6048e5,
    dayDuration: 864e5,
    hourDuration: 36e5,
    minuteDuration: 6e4,
    secondDuration: 1e3,
    millisecondDuration: 1,
    dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
  }, sb = function() {
    var k = false;
    try {
      var f2 = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
        k = true;
        return false;
      } });
      window.addEventListener && (window.addEventListener("test", null, f2), window.removeEventListener("test", null, f2));
    } catch (s2) {
      k = false;
    }
    return k;
  }(), gb = {}, Fa = null, mb = function(k) {
    var f2 = 0, s2 = 0;
    this.options.width ? f2 = this.width : this.width = f2 = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
    this.options.height ? s2 = this.height : this.height = s2 = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
    if (this.canvas.width !== f2 * ia || this.canvas.height !== s2 * ia) {
      for (var U = 0; U < k.length; U++) Ua(k[U], f2, s2);
      this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
      return true;
    }
    return false;
  }, nb = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(
      0,
      0,
      this.width,
      this.height
    ));
  }, ob = function(k, f2, s2) {
    f2 = Math.min(this.width, this.height);
    return Math.max("theme4" === this.theme ? 0 : 300 <= f2 ? 12 : 11, Math.round(f2 * (k / 400)));
  }, oa = function() {
    var k = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, f2 = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), s2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), U = "January February March April May June July August September October November December".split(" "), Z = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), u2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, A = /[^-+\dA-Z]/g;
    return function(y2, F2, P) {
      var K2 = P ? P.days : f2, N2 = P ? P.months : U, M2 = P ? P.shortDays : s2, O2 = P ? P.shortMonths : Z;
      P = "";
      var d = false;
      y2 = y2 && y2.getTime ? y2 : y2 ? new Date(y2) : /* @__PURE__ */ new Date();
      if (isNaN(y2)) throw SyntaxError("invalid date");
      "UTC:" === F2.slice(0, 4) && (F2 = F2.slice(4), d = true);
      P = d ? "getUTC" : "get";
      var t = y2[P + "Date"](), w = y2[P + "Day"](), r = y2[P + "Month"](), a = y2[P + "FullYear"](), e = y2[P + "Hours"](), b = y2[P + "Minutes"](), c = y2[P + "Seconds"](), g = y2[P + "Milliseconds"](), h = d ? 0 : y2.getTimezoneOffset();
      return P = F2.replace(k, function(E) {
        switch (E) {
          case "D":
            return t;
          case "DD":
            return ka(t, 2);
          case "DDD":
            return M2[w];
          case "DDDD":
            return K2[w];
          case "M":
            return r + 1;
          case "MM":
            return ka(r + 1, 2);
          case "MMM":
            return O2[r];
          case "MMMM":
            return N2[r];
          case "Y":
            return parseInt(String(a).slice(-2));
          case "YY":
            return ka(String(a).slice(-2), 2);
          case "YYY":
            return ka(String(a).slice(-3), 3);
          case "YYYY":
            return ka(a, 4);
          case "h":
            return e % 12 || 12;
          case "hh":
            return ka(e % 12 || 12, 2);
          case "H":
            return e;
          case "HH":
            return ka(e, 2);
          case "m":
            return b;
          case "mm":
            return ka(b, 2);
          case "s":
            return c;
          case "ss":
            return ka(c, 2);
          case "f":
            return ka(String(g), 3).slice(0, 1);
          case "ff":
            return ka(String(g), 3).slice(0, 2);
          case "fff":
            return ka(String(g), 3).slice(0, 3);
          case "t":
            return 12 > e ? "a" : "p";
          case "tt":
            return 12 > e ? "am" : "pm";
          case "T":
            return 12 > e ? "A" : "P";
          case "TT":
            return 12 > e ? "AM" : "PM";
          case "K":
            return d ? "UTC" : (String(y2).match(u2) || [""]).pop().replace(A, "");
          case "z":
            return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
          case "zz":
            return (0 < h ? "-" : "+") + ka(Math.floor(Math.abs(h) / 60), 2);
          case "zzz":
            return (0 < h ? "-" : "+") + ka(Math.floor(Math.abs(h) / 60), 2) + ka(Math.abs(h) % 60, 2);
          default:
            return E.slice(1, E.length - 1);
        }
      });
    };
  }(), $ = function(k, f2, s2) {
    if (null === k) return "";
    if (!isFinite(k)) return k;
    k = Number(k);
    var U = 0 > k ? true : false;
    U && (k *= -1);
    var Z = s2 ? s2.decimalSeparator : ".", u2 = s2 ? s2.digitGroupSeparator : ",", A = "";
    f2 = String(f2);
    var A = 1, y2 = s2 = "", F2 = -1, P = [], K2 = [], N2 = 0, M2 = 0, O2 = 0, d = false, t = 0, y2 = f2.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
    f2 = null;
    for (var w = 0; y2 && w < y2.length; w++) if (f2 = y2[w], "." === f2 && 0 > F2) F2 = w;
    else {
      if ("%" === f2) A *= 100;
      else if ("\u2030" === f2) {
        A *= 1e3;
        continue;
      } else if ("," === f2[0] && "." === f2[f2.length - 1]) {
        A /= Math.pow(1e3, f2.length - 1);
        F2 = w + f2.length - 1;
        continue;
      } else "E" !== f2[0] && "e" !== f2[0] || "0" !== f2[f2.length - 1] || (d = true);
      0 > F2 ? (P.push(f2), "#" === f2 || "0" === f2 ? N2++ : "," === f2 && O2++) : (K2.push(f2), "#" !== f2 && "0" !== f2 || M2++);
    }
    d && (f2 = Math.floor(k), y2 = -Math.floor(Math.log(k) / Math.LN10 + 1), t = 0 === k ? 0 : 0 === f2 ? -(N2 + y2) : String(f2).length - N2, A /= Math.pow(10, t));
    0 > F2 && (F2 = w);
    A = (k * A).toFixed(M2);
    f2 = A.split(".");
    A = (f2[0] + "").split("");
    k = (f2[1] + "").split("");
    A && "0" === A[0] && A.shift();
    for (d = y2 = w = M2 = F2 = 0; 0 < P.length; ) if (f2 = P.pop(), "#" === f2 || "0" === f2) if (F2++, F2 === N2) {
      var r = A, A = [];
      if ("0" === f2) for (f2 = N2 - M2 - (r ? r.length : 0); 0 < f2; ) r.unshift("0"), f2--;
      for (; 0 < r.length; ) s2 = r.pop() + s2, d++, 0 === d % y2 && (w === O2 && 0 < r.length) && (s2 = u2 + s2);
    } else 0 < A.length ? (s2 = A.pop() + s2, M2++, d++) : "0" === f2 && (s2 = "0" + s2, M2++, d++), 0 === d % y2 && (w === O2 && 0 < A.length) && (s2 = u2 + s2);
    else "E" !== f2[0] && "e" !== f2[0] || "0" !== f2[f2.length - 1] || !/[eE][+-]*[0]+/.test(f2) ? "," === f2 ? (w++, y2 = d, d = 0, 0 < A.length && (s2 = u2 + s2)) : s2 = 1 < f2.length && ('"' === f2[0] && '"' === f2[f2.length - 1] || "'" === f2[0] && "'" === f2[f2.length - 1]) ? f2.slice(1, f2.length - 1) + s2 : f2 + s2 : (f2 = 0 > t ? f2.replace("+", "").replace("-", "") : f2.replace("-", ""), s2 += f2.replace(/[0]+/, function(a) {
      return ka(t, a.length);
    }));
    u2 = "";
    for (P = false; 0 < K2.length; ) f2 = K2.shift(), "#" === f2 || "0" === f2 ? 0 < k.length && 0 !== Number(k.join("")) ? (u2 += k.shift(), P = true) : "0" === f2 && (u2 += "0", P = true) : 1 < f2.length && ('"' === f2[0] && '"' === f2[f2.length - 1] || "'" === f2[0] && "'" === f2[f2.length - 1]) ? u2 += f2.slice(1, f2.length - 1) : "E" !== f2[0] && "e" !== f2[0] || "0" !== f2[f2.length - 1] || !/[eE][+-]*[0]+/.test(f2) ? u2 += f2 : (f2 = 0 > t ? f2.replace("+", "").replace("-", "") : f2.replace("-", ""), u2 += f2.replace(/[0]+/, function(a) {
      return ka(t, a.length);
    }));
    s2 += (P ? Z : "") + u2;
    return U ? "-" + s2 : s2;
  }, Ba = function(f2) {
    var s2 = 0, L = 0;
    f2 = f2 || window.event;
    f2.offsetX || 0 === f2.offsetX ? (s2 = f2.offsetX, L = f2.offsetY) : f2.layerX || 0 == f2.layerX ? (s2 = f2.layerX, L = f2.layerY) : (s2 = f2.pageX - f2.target.offsetLeft, L = f2.pageY - f2.target.offsetTop);
    return { x: s2, y: L };
  }, lb = true, Za = window.devicePixelRatio || 1, Va = 1, ia = lb ? Za / Va : 1, fa = function(f2, s2, L, U, u2, y2, A, F2, K2, P, N2, M2, O2) {
    "undefined" === typeof O2 && (O2 = 1);
    A = A || 0;
    F2 = F2 || "black";
    var Q2 = 15 < U - s2 && 15 < u2 - L ? 8 : 0.35 * Math.min(U - s2, u2 - L);
    f2.beginPath();
    f2.moveTo(s2, L);
    f2.save();
    f2.fillStyle = y2;
    f2.globalAlpha = O2;
    f2.fillRect(s2, L, U - s2, u2 - L);
    f2.globalAlpha = 1;
    0 < A && (O2 = 0 === A % 2 ? 0 : 0.5, f2.beginPath(), f2.lineWidth = A, f2.strokeStyle = F2, f2.moveTo(s2, L), f2.rect(s2 - O2, L - O2, U - s2 + 2 * O2, u2 - L + 2 * O2), f2.stroke());
    f2.restore();
    true === K2 && (f2.save(), f2.beginPath(), f2.moveTo(s2, L), f2.lineTo(s2 + Q2, L + Q2), f2.lineTo(U - Q2, L + Q2), f2.lineTo(U, L), f2.closePath(), A = f2.createLinearGradient((U + s2) / 2, L + Q2, (U + s2) / 2, L), A.addColorStop(0, y2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), f2.fillStyle = A, f2.fill(), f2.restore());
    true === P && (f2.save(), f2.beginPath(), f2.moveTo(s2, u2), f2.lineTo(s2 + Q2, u2 - Q2), f2.lineTo(U - Q2, u2 - Q2), f2.lineTo(U, u2), f2.closePath(), A = f2.createLinearGradient((U + s2) / 2, u2 - Q2, (U + s2) / 2, u2), A.addColorStop(0, y2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), f2.fillStyle = A, f2.fill(), f2.restore());
    true === N2 && (f2.save(), f2.beginPath(), f2.moveTo(s2, L), f2.lineTo(s2 + Q2, L + Q2), f2.lineTo(s2 + Q2, u2 - Q2), f2.lineTo(s2, u2), f2.closePath(), A = f2.createLinearGradient(s2 + Q2, (u2 + L) / 2, s2, (u2 + L) / 2), A.addColorStop(
      0,
      y2
    ), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f2.fillStyle = A, f2.fill(), f2.restore());
    true === M2 && (f2.save(), f2.beginPath(), f2.moveTo(U, L), f2.lineTo(U - Q2, L + Q2), f2.lineTo(U - Q2, u2 - Q2), f2.lineTo(U, u2), A = f2.createLinearGradient(U - Q2, (u2 + L) / 2, U, (u2 + L) / 2), A.addColorStop(0, y2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f2.fillStyle = A, A.addColorStop(0, y2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), f2.fillStyle = A, f2.fill(), f2.closePath(), f2.restore());
  }, wa = function(f2) {
    for (var s2 = "", L = 0; L < f2.length; L++) s2 += String.fromCharCode(Math.ceil(f2.length / 57 / 5) ^ f2.charCodeAt(L));
    return s2;
  }, ub = window && (window[wa("mnb`uhno")] && window[wa("mnb`uhno")].href && window[wa("mnb`uhno")].href.indexOf && (-1 !== window[wa("mnb`uhno")].href.indexOf(wa("b`ow`rkr/bnl")) || -1 !== window[wa("mnb`uhno")].href.indexOf(wa("gdonqhy/bnl")) || -1 !== window[wa("mnb`uhno")].href.indexOf(wa("gheemd")))) && -1 === window[wa("mnb`uhno")].href.indexOf(wa("gheemd")), vb = {
    reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
    pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
    zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
    menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
  };
  Q.prototype.setOptions = function(f2, s2) {
    if (ma[this._defaultsKey]) {
      var L = ma[this._defaultsKey], u2;
      for (u2 in L) "publicProperties" !== u2 && L.hasOwnProperty(u2) && (this[u2] = f2 && u2 in f2 ? f2[u2] : s2 && u2 in s2 ? s2[u2] : L[u2]);
    } else Ma && window.console && console.log("defaults not set");
  };
  Q.prototype.get = function(f2) {
    var s2 = ma[this._defaultsKey];
    if ("options" === f2) return this.options && this.options._isPlaceholder ? null : this.options;
    if (s2.hasOwnProperty(f2) || s2.publicProperties && s2.publicProperties.hasOwnProperty(f2)) return this[f2];
    window.console && window.console.log('Property "' + f2 + `" doesn't exist. Please check for typo.`);
  };
  Q.prototype.set = function(f2, s2, L) {
    L = "undefined" === typeof L ? true : L;
    var u2 = ma[this._defaultsKey];
    if ("options" === f2) this.createUserOptions(s2);
    else if (u2.hasOwnProperty(f2) || u2.publicProperties && u2.publicProperties.hasOwnProperty(f2) && "readWrite" === u2.publicProperties[f2]) this.options._isPlaceholder && this.createUserOptions(), this.options[f2] = s2;
    else {
      window.console && (u2.publicProperties && u2.publicProperties.hasOwnProperty(f2) && "readOnly" === u2.publicProperties[f2] ? window.console.log('Property "' + f2 + '" is read-only.') : window.console.log('Property "' + f2 + `" doesn't exist. Please check for typo.`));
      return;
    }
    L && (this.stockChart || this.chart || this).render();
  };
  Q.prototype.addTo = function(f2, s2, L, u2) {
    u2 = "undefined" === typeof u2 ? true : u2;
    var y2 = ma[this._defaultsKey];
    y2.hasOwnProperty(f2) || y2.publicProperties && y2.publicProperties.hasOwnProperty(f2) && "readWrite" === y2.publicProperties[f2] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[f2] && (this.options[f2] = []), f2 = this.options[f2], L = "undefined" === typeof L || null === L ? f2.length : L, f2.splice(L, 0, s2), u2 && (this.stockChart || this.chart || this).render()) : window.console && (y2.publicProperties && y2.publicProperties.hasOwnProperty(f2) && "readOnly" === y2.publicProperties[f2] ? window.console.log('Property "' + f2 + '" is read-only.') : window.console.log('Property "' + f2 + `" doesn't exist. Please check for typo.`));
  };
  Q.prototype.createUserOptions = function(f2) {
    if ("undefined" !== typeof f2 || this.options._isPlaceholder) if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
      this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
      var s2 = this.parent.options[this.optionsName], u2 = s2.length;
      this.options._isPlaceholder || (Ea(s2), u2 = s2.indexOf(this.options));
      this.options = "undefined" === typeof f2 ? {} : f2;
      s2[u2] = this.options;
    } else this.options = "undefined" === typeof f2 ? {} : f2, f2 = this.parent.options, this.optionsName ? s2 = this.optionsName : (s2 = this._defaultsKey) && 0 !== s2.length ? (u2 = s2.charAt(0).toLowerCase(), 1 < s2.length && (u2 = u2.concat(s2.slice(1))), s2 = u2) : s2 = void 0, f2[s2] = this.options;
  };
  Q.prototype.remove = function(f2) {
    f2 = "undefined" === typeof f2 ? true : f2;
    if (this.isOptionsInArray) {
      var s2 = this.parent.options[this.optionsName];
      Ea(s2);
      var u2 = s2.indexOf(this.options);
      0 <= u2 && s2.splice(u2, 1);
    } else delete this.parent.options[this.optionsName];
    f2 && (this.stockChart || this.chart || this).render();
  };
  Q.prototype.updateOption = function(k) {
    !ma[this._defaultsKey] && (Ma && window.console) && console.log("defaults not set");
    var s2 = ma[this._defaultsKey], u2 = {}, y2 = this[k], F2 = this._themeOptionsKey, I = this._index;
    this.theme && f(this.parent) && f(F2) && f(I) ? u2 = f(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[F2]) && (null === I ? u2 = this.parent.themeOptions[F2] : 0 < this.parent.themeOptions[F2].length && (u2 = Math.min(this.parent.themeOptions[F2].length - 1, I), u2 = this.parent.themeOptions[F2][u2]));
    this.themeOptions = u2;
    k in s2 && (y2 = k in this.options ? this.options[k] : u2 && k in u2 ? u2[k] : s2[k]);
    if (y2 === this[k]) return false;
    this[k] = y2;
    return true;
  };
  Q.prototype.trackChanges = function(f2) {
    if (!this.sessionVariables) throw "Session Variable Store not set";
    this.sessionVariables[f2] = this.options[f2];
  };
  Q.prototype.isBeingTracked = function(f2) {
    this.options._oldOptions || (this.options._oldOptions = {});
    return this.options._oldOptions[f2] ? true : false;
  };
  Q.prototype.hasOptionChanged = function(f2) {
    if (!this.sessionVariables) throw "Session Variable Store not set";
    return this.sessionVariables[f2] !== this.options[f2];
  };
  Q.prototype.addEventListener = function(f2, s2, u2) {
    f2 && s2 && (this._eventListeners[f2] = this._eventListeners[f2] || [], this._eventListeners[f2].push({ context: u2 || this, eventHandler: s2 }));
  };
  Q.prototype.removeEventListener = function(f2, s2) {
    if (f2 && s2 && this._eventListeners[f2]) {
      for (var u2 = this._eventListeners[f2], y2 = 0; y2 < u2.length; y2++) if (u2[y2].eventHandler === s2) {
        u2[y2].splice(y2, 1);
        break;
      }
    }
  };
  Q.prototype.removeAllEventListeners = function() {
    this._eventListeners = [];
  };
  Q.prototype.dispatchEvent = function(f2, s2, u2) {
    if (f2 && this._eventListeners[f2]) {
      s2 = s2 || {};
      for (var y2 = this._eventListeners[f2], F2 = 0; F2 < y2.length; F2++) y2[F2].eventHandler.call(
        y2[F2].context,
        s2
      );
    }
    "function" === typeof this[f2] && this[f2].call(u2 || this.chart, s2);
  };
  La.prototype.registerSpace = function(f2, s2) {
    "top" === f2 ? this._topOccupied += s2.height : "bottom" === f2 ? this._bottomOccupied += s2.height : "left" === f2 ? this._leftOccupied += s2.width : "right" === f2 && (this._rightOccupied += s2.width);
  };
  La.prototype.unRegisterSpace = function(f2, s2) {
    "top" === f2 ? this._topOccupied -= s2.height : "bottom" === f2 ? this._bottomOccupied -= s2.height : "left" === f2 ? this._leftOccupied -= s2.width : "right" === f2 && (this._rightOccupied -= s2.width);
  };
  La.prototype.getFreeSpace = function() {
    return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied };
  };
  La.prototype.reset = function() {
    this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
  };
  ha(na, Q);
  na.prototype._initialize = function() {
    f(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = f(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = f(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = f(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = f(this.padding.left) ? 0 : Number(this.padding.left) | 0);
  };
  na.prototype.render = function(f2) {
    if (0 !== this.fontSize) {
      f2 && this.ctx.save();
      var s2 = this.ctx.font;
      this.ctx.textBaseline = this.textBaseline;
      var u2 = 0;
      this._isDirty && this.measureText(this.ctx);
      this.ctx.translate(this.x, this.y + u2);
      "middle" === this.textBaseline && (u2 = -this._lineHeight / 2);
      this.ctx.font = this._getFontString();
      this.ctx.rotate(Math.PI / 180 * this.angle);
      var y2 = 0, F2 = this.topPadding, I = null;
      this.ctx.roundRect || Ha(this.ctx);
      (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, u2, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
      this.ctx.fillStyle = this.fontColor;
      for (u2 = 0; u2 < this._wrappedText.lines.length; u2++) {
        I = this._wrappedText.lines[u2];
        if ("right" === this.horizontalAlign || "right" === this.textAlign) y2 = this.width - I.width - this.rightPadding;
        else if ("left" === this.horizontalAlign || "left" === this.textAlign) y2 = this.leftPadding;
        else if ("center" === this.horizontalAlign || "center" === this.textAlign) y2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - I.width / 2 + this.leftPadding;
        this.ctx.fillText(I.text, y2, F2);
        F2 += I.height;
      }
      this.ctx.font = s2;
      f2 && this.ctx.restore();
    }
  };
  na.prototype.setText = function(f2) {
    this.text = f2;
    this._isDirty = true;
    this._wrappedText = null;
  };
  na.prototype.measureText = function() {
    this._lineHeight = fb(this.fontFamily, this.fontSize, this.fontWeight);
    if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
    this._wrapText(this.ctx);
    this._isDirty = false;
    return { width: this.width, height: this.height };
  };
  na.prototype._getLineWithWidth = function(f2, s2, u2) {
    f2 = String(f2);
    if (!f2) return { text: "", width: 0 };
    var y2 = u2 = 0, F2 = f2.length - 1, I = Infinity;
    for (this.ctx.font = this._getFontString(); y2 <= F2; ) {
      var I = Math.floor((y2 + F2) / 2), A = f2.substr(0, I + 1);
      u2 = this.ctx.measureText(A).width;
      if (u2 < s2) y2 = I + 1;
      else if (u2 > s2) F2 = I - 1;
      else break;
    }
    u2 > s2 && 1 < A.length && (A = A.substr(0, A.length - 1), u2 = this.ctx.measureText(A).width);
    s2 = true;
    if (A.length === f2.length || " " === f2[A.length]) s2 = false;
    s2 && (f2 = A.split(" "), 1 < f2.length && f2.pop(), A = f2.join(" "), u2 = this.ctx.measureText(A).width);
    return { text: A, width: u2 };
  };
  na.prototype._wrapText = function() {
    var f2 = new String(Pa(String(this.text))), s2 = [], u2 = this.ctx.font, y2 = 0, F2 = 0;
    this.ctx.font = this._getFontString();
    if (0 === this.frontSize) F2 = y2 = 0;
    else for (; 0 < f2.length; ) {
      var I = this.maxHeight - (this.topPadding + this.bottomPadding), A = this._getLineWithWidth(f2, this.maxWidth - (this.leftPadding + this.rightPadding), false);
      A.height = this._lineHeight;
      s2.push(A);
      var K2 = F2, F2 = Math.max(F2, A.width), y2 = y2 + A.height, f2 = Pa(f2.slice(A.text.length, f2.length));
      I && y2 > I && (A = s2.pop(), y2 -= A.height, F2 = K2);
    }
    this._wrappedText = { lines: s2, width: F2, height: y2 };
    this.width = F2 + (this.leftPadding + this.rightPadding);
    this.height = y2 + (this.topPadding + this.bottomPadding);
    this.ctx.font = u2;
  };
  na.prototype._getFontString = function() {
    var f2;
    f2 = this.fontStyle ? this.fontStyle + " " : "";
    f2 += this.fontWeight ? this.fontWeight + " " : "";
    f2 += this.fontSize ? this.fontSize + "px " : "";
    var B = this.fontFamily ? this.fontFamily + "" : "";
    !s && B && (B = B.split(",")[0], "'" !== B[0] && '"' !== B[0] && (B = "'" + B + "'"));
    return f2 += B;
  };
  ha(Xa, Q);
  ha(Ia, Q);
  Ia.prototype.setLayout = function() {
    if (this.text) {
      var s2 = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, B = s2.layoutManager.getFreeSpace(), u2 = B.x1, y2 = B.y1, F2 = 0, I = 0, A = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0, K2, N2;
      "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = B.width - 4 - A * ("center" === this.horizontalAlign ? 2 : 1)), I = 0.5 * B.height - this.margin - 2, F2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = B.height - 4), I = 0.5 * B.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = B.width - 4), I = 0.5 * B.height - 4));
      var P;
      f(this.padding) || "number" !== typeof this.padding ? f(this.padding) || "object" !== typeof this.padding || (P = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, P += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : P = 2 * this.padding;
      this.wrap || (I = Math.min(I, 1.5 * this.fontSize + P));
      I = new na(this.ctx, {
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        fontColor: this.fontColor,
        fontStyle: this.fontStyle,
        fontWeight: this.fontWeight,
        horizontalAlign: this.horizontalAlign,
        verticalAlign: this.verticalAlign,
        borderColor: this.borderColor,
        borderThickness: this.borderThickness,
        backgroundColor: this.backgroundColor,
        maxWidth: this.maxWidth,
        maxHeight: I,
        cornerRadius: this.cornerRadius,
        text: this.text,
        padding: this.padding,
        textBaseline: "top"
      });
      P = I.measureText();
      "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (y2 = B.y1 + 2, N2 = "top") : "bottom" === this.verticalAlign && (y2 = B.y2 - 2 - P.height, N2 = "bottom"), "left" === this.horizontalAlign ? u2 = B.x1 + 2 : "center" === this.horizontalAlign ? u2 = B.x1 + B.width / 2 - P.width / 2 : "right" === this.horizontalAlign && (u2 = B.x2 - 2 - P.width - A), K2 = this.horizontalAlign, this.width = P.width, this.height = P.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (u2 = B.x1 + 2, y2 = B.y2 - 2 - (this.maxWidth / 2 - P.width / 2), F2 = -90, N2 = "left", this.width = P.height, this.height = P.width) : "right" === this.horizontalAlign ? (u2 = B.x2 - 2, y2 = B.y1 + 2 + (this.maxWidth / 2 - P.width / 2), F2 = 90, N2 = "right", this.width = P.height, this.height = P.width) : "center" === this.horizontalAlign && (y2 = s2.y1 + (s2.height / 2 - P.height / 2), u2 = s2.x1 + (s2.width / 2 - P.width / 2), N2 = "center", this.width = P.width, this.height = P.height), K2 = "center");
      I.x = u2;
      I.y = y2;
      I.angle = F2;
      I.horizontalAlign = K2;
      this._textBlock = I;
      s2.layoutManager.registerSpace(N2, { width: this.width + ("left" === N2 || "right" === N2 ? this.margin + 2 : 0), height: this.height + ("top" === N2 || "bottom" === N2 ? this.margin + 2 : 0) });
      this.bounds = { x1: u2, y1: y2, x2: u2 + this.width, y2: y2 + this.height };
      this.ctx.textBaseline = "top";
    }
  };
  Ia.prototype.render = function() {
    this._textBlock && this._textBlock.render(true);
  };
  ha(Na, Q);
  Na.prototype.setLayout = Ia.prototype.setLayout;
  Na.prototype.render = Ia.prototype.render;
  ab.prototype.get = function(f2, s2) {
    var u2 = null;
    0 < this.pool.length ? (u2 = this.pool.pop(), Ua(u2, f2, s2)) : u2 = ta(f2, s2);
    return u2;
  };
  ab.prototype.release = function(f2) {
    this.pool.push(f2);
  };
  ha(Oa, Q);
  var Sa = { addTheme: function(f2, s2) {
    bb[f2] = s2;
  }, addColorSet: function(f2, s2) {
    ya[f2] = s2;
  }, addCultureInfo: function(f2, s2) {
    Ra[f2] = s2;
  }, formatNumber: function(f2, s2, u2) {
    u2 = u2 || "en";
    if (Ra[u2]) return $(f2, s2 || "#,##0.##", new Oa(u2));
    throw "Unknown Culture Name";
  }, formatDate: function(f2, s2, u2) {
    u2 = u2 || "en";
    if (Ra[u2]) return oa(f2, s2 || "DD MMM YYYY", new Oa(u2));
    throw "Unknown Culture Name";
  } };
  "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Sa : "function" === typeof define && define.amd ? define([], function() {
    return Sa;
  }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Sa);
  var Ka = Sa.Chart = function() {
    function k(a, e) {
      return a.x - e.x;
    }
    function u2(a, e, b) {
      e = e || {};
      f(b) ? (this.predefinedThemes = bb, this.optionsName = this.parent = this.index = null) : (this.parent = b.parent, this.index = b.index, this.predefinedThemes = b.predefinedThemes, this.optionsName = b.optionsName, this.stockChart = b.stockChart, this.panel = a, this.isOptionsInArray = b.isOptionsInArray);
      this.theme = f(e.theme) || f(this.predefinedThemes[e.theme]) ? "light1" : e.theme;
      u2.base.constructor.call(this, "Chart", this.optionsName, e, this.index, this.parent);
      var c = this;
      this._containerId = a;
      this._objectsInitialized = false;
      this.overlaidCanvasCtx = this.ctx = null;
      this._indexLabels = [];
      this._panTimerId = 0;
      this._lastTouchEventType = "";
      this._lastTouchData = null;
      this.isAnimating = false;
      this.renderCount = 0;
      this.disableToolTip = this.animatedRender = false;
      this.canvasPool = new ab();
      this.allDOMEventHandlers = [];
      this.panEnabled = false;
      this._defaultCursor = "default";
      this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
      this._dataInRenderedOrder = [];
      (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", e = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, e = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = e, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", s || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ta(a, e), this._preRenderCanvas = ta(a, e), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ha(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Ha(this._preRenderCtx), s ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(a, e), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ta(a, e), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ha(this.overlaidCanvasCtx)), this._eventManager = new ka2(this), this.windowResizeHandler = y(window, "resize", function() {
        c._updateSize() && c.render();
      }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, y(
        this.overlaidCanvas,
        "click",
        function(a2) {
          c._mouseEventHandler(a2);
        },
        this.allDOMEventHandlers
      ), y(this.overlaidCanvas, "mousemove", function(a2) {
        c._mouseEventHandler(a2);
      }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseup", function(a2) {
        c._mouseEventHandler(a2);
      }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mousedown", function(a2) {
        c._mouseEventHandler(a2);
        za(c._dropdownMenu);
      }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseout", function(a2) {
        c._mouseEventHandler(a2);
      }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
        c._touchEventHandler(a2);
      }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
        c._touchEventHandler(a2);
      }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a2) {
        c._touchEventHandler(a2);
      }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
        c._touchEventHandler(a2);
      }, this.allDOMEventHandlers), this.toolTip = new aa(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
    }
    function F2(a, e) {
      for (var b = [], c, g = 0; g < a.length; g++) if (0 == g) b.push(a[0]);
      else {
        var h, E, f2;
        f2 = g - 1;
        h = 0 === f2 ? 0 : f2 - 1;
        E = f2 === a.length - 1 ? f2 : f2 + 1;
        c = Math.abs((a[E].x - a[h].x) / (0 === a[E].x - a[f2].x ? 0.01 : a[E].x - a[f2].x)) * (e - 1) / 2 + 1;
        var d2 = (a[E].x - a[h].x) / c;
        c = (a[E].y - a[h].y) / c;
        b[b.length] = a[f2].x > a[h].x && 0 < d2 || a[f2].x < a[h].x && 0 > d2 ? { x: a[f2].x + d2 / 3, y: a[f2].y + c / 3 } : { x: a[f2].x, y: a[f2].y + c / 9 };
        f2 = g;
        h = 0 === f2 ? 0 : f2 - 1;
        E = f2 === a.length - 1 ? f2 : f2 + 1;
        c = Math.abs((a[E].x - a[h].x) / (0 === a[f2].x - a[h].x ? 0.01 : a[f2].x - a[h].x)) * (e - 1) / 2 + 1;
        d2 = (a[E].x - a[h].x) / c;
        c = (a[E].y - a[h].y) / c;
        b[b.length] = a[f2].x > a[h].x && 0 < d2 || a[f2].x < a[h].x && 0 > d2 ? { x: a[f2].x - d2 / 3, y: a[f2].y - c / 3 } : { x: a[f2].x, y: a[f2].y - c / 9 };
        b[b.length] = a[g];
      }
      return b;
    }
    function K2(a, e, b, c, g, h, E, f2, d2, m) {
      var n = 0;
      m ? (E.color = h, f2.color = h) : m = 1;
      n = d2 ? Math.abs(g - b) : Math.abs(c - e);
      n = 0 < E.trimLength ? Math.abs(n * E.trimLength / 100) : Math.abs(n - E.length);
      d2 ? (b += n / 2, g -= n / 2) : (e += n / 2, c -= n / 2);
      var n = 1 === Math.round(E.thickness) % 2 ? 0.5 : 0, p = 1 === Math.round(f2.thickness) % 2 ? 0.5 : 0;
      a.save();
      a.globalAlpha = m;
      a.strokeStyle = f2.color || h;
      a.lineWidth = f2.thickness || 2;
      a.setLineDash && a.setLineDash(N(f2.dashType, f2.thickness));
      a.beginPath();
      d2 && 0 < f2.thickness ? (a.moveTo(c - E.thickness / 2, Math.round((b + g) / 2) - p), a.lineTo(e + E.thickness / 2, Math.round((b + g) / 2) - p)) : 0 < f2.thickness && (a.moveTo(Math.round((e + c) / 2) - p, b + E.thickness / 2), a.lineTo(Math.round((e + c) / 2) - p, g - E.thickness / 2));
      a.stroke();
      a.strokeStyle = E.color || h;
      a.lineWidth = E.thickness || 2;
      a.setLineDash && a.setLineDash(N(E.dashType, E.thickness));
      a.beginPath();
      d2 && 0 < E.thickness ? (a.moveTo(c - n, b), a.lineTo(c - n, g), a.moveTo(e + n, b), a.lineTo(e + n, g)) : 0 < E.thickness && (a.moveTo(e, b + n), a.lineTo(c, b + n), a.moveTo(e, g - n), a.lineTo(c, g - n));
      a.stroke();
      a.restore();
    }
    function M2(a, e) {
      M2.base.constructor.call(this, "Legend", "legend", e, null, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = this.chart.ctx;
      this.ghostCtx = this.chart._eventManager.ghostCtx;
      this.items = [];
      this.optionsName = "legend";
      this.height = this.width = 0;
      this.orientation = null;
      this.dataSeries = [];
      this.bounds = { x1: null, y1: null, x2: null, y2: null };
      "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.lineHeight = fb(this.fontFamily, this.fontSize, this.fontWeight);
      this.horizontalSpacing = this.fontSize;
    }
    function I(a, e, b, c) {
      I.base.constructor.call(
        this,
        "DataSeries",
        "data",
        e,
        b,
        a
      );
      this.chart = a;
      this.canvas = a.canvas;
      this._ctx = a.canvas.ctx;
      this.index = b;
      this.noDataPointsInPlotArea = 0;
      this.id = c;
      this.chart._eventManager.objectMap[c] = { id: c, objectType: "dataSeries", dataSeriesIndex: b };
      a = e.dataPoints ? e.dataPoints.length : 0;
      this.dataPointEOs = [];
      for (e = 0; e < a; e++) this.dataPointEOs[e] = {};
      this.dataPointIds = [];
      this.plotUnit = [];
      this.axisY = this.axisX = null;
      this.optionsName = "data";
      this.isOptionsInArray = true;
      null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
      this.axisPlacement = this.getDefaultAxisPlacement();
      "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
    }
    function A(a, e, b, c, g, h) {
      A.base.constructor.call(this, "Axis", e, b, c, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = a.ctx;
      this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
      this.labels = [];
      this.dataSeries = [];
      this._stripLineLabels = this._ticks = this._labels = null;
      this.dataInfo = {
        min: Infinity,
        max: -Infinity,
        viewPortMin: Infinity,
        viewPortMax: -Infinity,
        minDiff: Infinity
      };
      this.isOptionsInArray = true;
      "axisX" === g ? ("left" === h || "bottom" === h ? (this.optionsName = "axisX", f(this.chart.sessionVariables.axisX[c]) && (this.chart.sessionVariables.axisX[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[c]) : (this.optionsName = "axisX2", f(this.chart.sessionVariables.axisX2[c]) && (this.chart.sessionVariables.axisX2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[c]), this.options.interval || (this.intervalType = null)) : "left" === h || "bottom" === h ? (this.optionsName = "axisY", f(this.chart.sessionVariables.axisY[c]) && (this.chart.sessionVariables.axisY[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[c]) : (this.optionsName = "axisY2", f(this.chart.sessionVariables.axisY2[c]) && (this.chart.sessionVariables.axisY2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[c]);
      "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
      "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
      this.type = g;
      "axisX" !== g || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
      this._position = h;
      this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
      this.labelAngle = (this.labelAngle % 360 + 360) % 360;
      90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
      this.options.scaleBreaks && (this.scaleBreaks = new W2(
        this.chart,
        this.options.scaleBreaks,
        ++this.chart._eventManager.lastObjectId,
        this
      ));
      this.stripLines = [];
      if (this.options.stripLines && 0 < this.options.stripLines.length) for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new P(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
      this.options.crosshair && (this.crosshair = new ea2(this.chart, this.options.crosshair, this));
      this._titleTextBlock = null;
      this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
      this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
      this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
      this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
      null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
      null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
      this.trackChanges("viewportMinimum");
      this.trackChanges("viewportMaximum");
    }
    function W2(a, e, b, c) {
      W2.base.constructor.call(
        this,
        "ScaleBreaks",
        "scaleBreaks",
        e,
        null,
        c
      );
      this.id = b;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.axis = c;
      this.optionsName = "scaleBreaks";
      this.isOptionsInArray = false;
      this._appliedBreaks = [];
      this.customBreaks = [];
      this.autoBreaks = [];
      "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
      this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
      if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
        for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new X2(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
        this._appliedBreaks.sort(function(a2, c2) {
          return a2.startValue - c2.startValue;
        });
        for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
      }
    }
    function X2(a, e, b, c, g, h) {
      X2.base.constructor.call(this, "Break", e, b, c, h);
      this.id = g;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.scaleBreaks = h;
      this.optionsName = e;
      this.isOptionsInArray = true;
      this.type = b.type ? this.type : h.type;
      this.fillOpacity = f(b.fillOpacity) ? h.fillOpacity : this.fillOpacity;
      this.lineThickness = f(b.lineThickness) ? h.lineThickness : this.lineThickness;
      this.color = b.color ? this.color : h.color;
      this.lineColor = b.lineColor ? this.lineColor : h.lineColor;
      this.lineDashType = b.lineDashType ? this.lineDashType : h.lineDashType;
      !f(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
      !f(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
      "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
      this.spacing = "undefined" === typeof b.spacing ? h.spacing : b.spacing;
      "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
      this.size = h.parent.logarithmic ? 1 : 0;
    }
    function P(a, e, b, c, g) {
      P.base.constructor.call(this, "StripLine", "stripLines", e, b, g);
      this.id = c;
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.label = this.label;
      this.axis = g;
      this.optionsName = "stripLines";
      this.isOptionsInArray = true;
      this._thicknessType = "pixel";
      null !== this.startValue && null !== this.endValue && (this.value = g.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
    }
    function ea2(a, e, b) {
      ea2.base.constructor.call(this, "Crosshair", "crosshair", e, null, b);
      this.chart = a;
      this.ctx = this.chart.ctx;
      this.axis = b;
      this.optionsName = "crosshair";
      this._thicknessType = "pixel";
    }
    function aa(a, e) {
      aa.base.constructor.call(this, "ToolTip", "toolTip", e, null, a);
      this.chart = a;
      this.canvas = a.canvas;
      this.ctx = this.chart.ctx;
      this.currentDataPointIndex = this.currentSeriesIndex = -1;
      this._prevY = this._prevX = NaN;
      this.containerTransitionDuration = 0.1;
      this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
      this.optionsName = "toolTip";
      this._initialize();
    }
    function ka2(a) {
      this.chart = a;
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.previousDataPointEventObject = null;
      this.ghostCanvas = ta(this.chart.width, this.chart.height);
      this.ghostCtx = this.ghostCanvas.getContext("2d");
      this.mouseoveredObjectMaps = [];
    }
    function ma2(a) {
      this.chart = a;
      this.ctx = this.chart.plotArea.ctx;
      this.animations = [];
      this.animationRequestId = null;
    }
    ha(u2, Q);
    u2.prototype.destroy = function() {
      var a = this.allDOMEventHandlers;
      this._animator && this._animator.cancelAllAnimations();
      this._panTimerId && clearTimeout(this._panTimerId);
      for (var e = 0; e < a.length; e++) hb(a[e][0], a[e][1], a[e][2], a[e][3]);
      this.allDOMEventHandlers = [];
      for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); ) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
      for (; this.container && this.container.hasChildNodes(); ) this.container.removeChild(this.container.lastChild);
      for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); ) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
      this.overlaidCanvas = this.canvas = this.container = this._canvasJSContainer = null;
      this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = this._breaksCanvas = this._preRenderCanvas = this.toolTip.container = null;
    };
    u2.prototype._updateOptions = function() {
      var a = this;
      this.updateOption("width");
      this.updateOption("height");
      this.updateOption("dataPointWidth");
      this.updateOption("dataPointMinWidth");
      this.updateOption("dataPointMaxWidth");
      this.updateOption("interactivityEnabled");
      this.updateOption("theme");
      this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1);
      this.updateOption("backgroundColor");
      this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
      this.updateOption("culture");
      this._cultureInfo = new Oa(this.options.culture);
      this.updateOption("animationEnabled");
      this.animationEnabled = this.animationEnabled && s;
      this.updateOption("animationDuration");
      this.updateOption("rangeChanging");
      this.updateOption("rangeChanged");
      this.updateOption("exportEnabled");
      this.updateOption("exportFileName");
      this.updateOption("zoomType");
      if (this.options.zoomEnabled || this.panEnabled) {
        if (!this._zoomButton) {
          var e = false;
          za(this._zoomButton = document.createElement("button"));
          Ca(this, this._zoomButton, "pan");
          this._toolBar.appendChild(this._zoomButton);
          this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor;
          y(this._zoomButton, "touchstart", function(a2) {
            e = true;
          }, this.allDOMEventHandlers);
          y(this._zoomButton, "click", function() {
            a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, Ca(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, Ca(a, a._zoomButton, "pan"));
            a.render();
          }, this.allDOMEventHandlers);
          y(this._zoomButton, "mouseover", function() {
            e ? e = false : (ra(a._zoomButton, {
              backgroundColor: a.toolbar.backgroundColorOnHover,
              color: a.toolbar.fontColorOnHover,
              transition: "0.4s",
              WebkitTransition: "0.4s"
            }), 0 >= navigator.userAgent.search("MSIE") && ra(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
          }, this.allDOMEventHandlers);
          y(
            this._zoomButton,
            "mouseout",
            function() {
              e || (ra(a._zoomButton, { backgroundColor: a.toolbar.backgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && ra(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            },
            this.allDOMEventHandlers
          );
        }
        this._resetButton || (e = false, za(this._resetButton = document.createElement("button")), Ca(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, this._toolBar.appendChild(this._resetButton), y(this._resetButton, "touchstart", function(a2) {
          e = true;
        }, this.allDOMEventHandlers), y(this._resetButton, "click", function() {
          a.toolTip.hide();
          a.toolTip.dispatchEvent(
            "hidden",
            { chart: a, toolTip: a.toolTip },
            a.toolTip
          );
          a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, Ca(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
          if (a.sessionVariables.axisX) for (var c = 0; c < a.sessionVariables.axisX.length; c++) a.sessionVariables.axisX[c].newViewportMinimum = null, a.sessionVariables.axisX[c].newViewportMaximum = null;
          if (a.sessionVariables.axisX2) for (c = 0; c < a.sessionVariables.axisX2.length; c++) a.sessionVariables.axisX2[c].newViewportMinimum = null, a.sessionVariables.axisX2[c].newViewportMaximum = null;
          if (a.sessionVariables.axisY) for (c = 0; c < a.sessionVariables.axisY.length; c++) a.sessionVariables.axisY[c].newViewportMinimum = null, a.sessionVariables.axisY[c].newViewportMaximum = null;
          if (a.sessionVariables.axisY2) for (c = 0; c < a.sessionVariables.axisY2.length; c++) a.sessionVariables.axisY2[c].newViewportMinimum = null, a.sessionVariables.axisY2[c].newViewportMaximum = null;
          a.resetOverlayedCanvas();
          za(a._zoomButton, a._resetButton);
          a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
          a._dispatchRangeEvent("rangeChanging", "reset");
          a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
          a.render();
          a.syncCharts && a.syncCharts(null, null);
          a._dispatchRangeEvent("rangeChanged", "reset");
          a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent(
            "rangeChanged",
            a.stockChart._rangeEventParameter,
            a.stockChart
          ));
        }, this.allDOMEventHandlers), y(this._resetButton, "mouseover", function() {
          e || (ra(a._resetButton, { backgroundColor: a.toolbar.backgroundColorOnHover, color: a.toolbar.hoverFfontColorOnHoverontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && ra(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
        }, this.allDOMEventHandlers), y(this._resetButton, "mouseout", function() {
          e || (ra(a._resetButton, {
            backgroundColor: a.toolbar.backgroundColor,
            color: a.toolbar.fontColor,
            transition: "0.4s",
            WebkitTransition: "0.4s"
          }), 0 >= navigator.userAgent.search("MSIE") && ra(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
        }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
        this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Ta(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
      } else this.panEnabled = this.zoomEnabled = false;
      jb(this);
      "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? Ca(a, a._zoomButton, "zoom") : Ca(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && Ca(a, a._resetButton, "reset"));
      this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
      for (var b in this.toolTip.options) this.toolTip.options.hasOwnProperty(b) && this.toolTip.updateOption(b);
    };
    u2.prototype._updateSize = function() {
      return mb.call(this, [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas]);
    };
    u2.prototype._initialize = function() {
      this.isNavigator = f(this.parent) || f(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
      this.toolbar = new Xa(this, this.options.toolbar);
      this._animator ? this._animator.cancelAllAnimations() : this._animator = new ma2(this);
      this.removeAllEventListeners();
      this.disableToolTip = false;
      this._axes = [];
      this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
      this._updateOptions();
      this.animatedRender = s && this.animationEnabled && 0 === this.renderCount;
      this._updateSize();
      this.clearCanvas();
      this.ctx.beginPath();
      this.axisX = [];
      this.axisX2 = [];
      this.axisY = [];
      this.axisY2 = [];
      this._indexLabels = [];
      this._dataInRenderedOrder = [];
      this._events = [];
      this._eventManager && this._eventManager.reset();
      this.plotInfo = { axisPlacement: null, plotTypes: [] };
      this.layoutManager = new La(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
      this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
      this.data = [];
      this.title = null;
      this.subtitles = [];
      var a = 0, e = null;
      if (this.options.data) {
        for (var b = 0; b < this.options.data.length; b++) if (a++, !this.options.data[b].type || 0 <= u2._supportedChartTypes.indexOf(this.options.data[b].type)) {
          var c = new I(this, this.options.data[b], a - 1, ++this._eventManager.lastObjectId);
          "error" === c.type && (c.linkedDataSeriesIndex = f(this.options.data[b].linkedDataSeriesIndex) ? b - 1 : this.options.data[b].linkedDataSeriesIndex, 0 > c.linkedDataSeriesIndex || c.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof c.linkedDataSeriesIndex || "error" === this.options.data[c.linkedDataSeriesIndex].type) && (c.linkedDataSeriesIndex = null);
          null === c.name && (c.name = "DataSeries " + a);
          null === c.color ? 1 < this.options.data.length ? (c._colorSet = [this.selectedColorSet[c.index % this.selectedColorSet.length]], c.color = this.selectedColorSet[c.index % this.selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type || "waterfall" === c.type || "boxAndWhisker" === c.type ? [this.selectedColorSet[0]] : this.selectedColorSet : c._colorSet = [c.color];
          null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type || 0 <= c.type.toLowerCase().indexOf("area")) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
          "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || (c.dataPoints.some ? c.dataPoints.some(function(a2) {
            return a2.x;
          }) && c.dataPoints.sort(k) : c.dataPoints.sort(k));
          this.data.push(c);
          var g = c.axisPlacement, e = e || g, h;
          "normal" === g ? "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === g ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === g ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === g && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + c.type + '" with pie chart');
          if (h && window.console) {
            window.console.log(h);
            return;
          }
        }
        for (b = 0; b < this.data.length; b++) {
          if ("none" == e && "error" === this.data[b].type && window.console) {
            window.console.log('You cannot combine "' + c.type + '" with error chart');
            return;
          }
          "error" === this.data[b].type && (this.data[b].axisPlacement = this.plotInfo.axisPlacement = e || "normal", this.data[b]._linkedSeries = null === this.data[b].linkedDataSeriesIndex ? null : this.data[this.data[b].linkedDataSeriesIndex]);
        }
      }
      this._objectsInitialized = true;
      this._plotAreaElements = [];
    };
    u2._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
    u2.prototype.setLayout = function() {
      for (var a = this._plotAreaElements, e = 0; e < this.data.length; e++) if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
        if (!this.data[e].axisYType || "primary" === this.data[e].axisYType) if (this.options.axisY && 0 < this.options.axisY.length) {
          if (!this.axisY.length) for (var b = 0; b < this.options.axisY.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new A(this, "axisY", this.options.axisY[b], b, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] = new A(this, "axisY", this.options.axisY[b], b, "axisY", "bottom"));
          this.data[e].axisY = this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ? this.data[e].axisYIndex : 0];
          this.axisY[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e]);
        } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[e].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[e]);
        if ("secondary" === this.data[e].axisYType) if (this.options.axisY2 && 0 < this.options.axisY2.length) {
          if (!this.axisY2.length) for (b = 0; b < this.options.axisY2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new A(this, "axisY2", this.options.axisY2[b], b, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[b] = new A(this, "axisY2", this.options.axisY2[b], b, "axisY", "top"));
          this.data[e].axisY = this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY2.length ? this.data[e].axisYIndex : 0];
          this.axisY2[0 <= this.data[e].axisYIndex && this.data[e].axisYIndex < this.axisY2.length ? this.data[e].axisYIndex : 0].dataSeries.push(this.data[e]);
        } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[e].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[e]);
        if (!this.data[e].axisXType || "primary" === this.data[e].axisXType) if (this.options.axisX && 0 < this.options.axisX.length) {
          if (!this.axisX.length) for (b = 0; b < this.options.axisX.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[b] = new A(this, "axisX", this.options.axisX[b], b, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new A(this, "axisX", this.options.axisX[b], b, "axisX", "left"));
          this.data[e].axisX = this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0];
          this.axisX[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e]);
        } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new A(
          this,
          "axisX",
          this.options.axisX,
          0,
          "axisX",
          "left"
        ))), this.data[e].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[e]);
        if ("secondary" === this.data[e].axisXType) if (this.options.axisX2 && 0 < this.options.axisX2.length) {
          if (!this.axisX2.length) for (b = 0; b < this.options.axisX2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new A(this, "axisX2", this.options.axisX2[b], b, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new A(
            this,
            "axisX2",
            this.options.axisX2[b],
            b,
            "axisX",
            "right"
          ));
          this.data[e].axisX = this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0];
          this.axisX2[0 <= this.data[e].axisXIndex && this.data[e].axisXIndex < this.axisX2.length ? this.data[e].axisXIndex : 0].dataSeries.push(this.data[e]);
        } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[e].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[e]);
      }
      if (this.axisY) {
        for (b = 1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
        for (b = 0; b < this.axisY.length - 1; b++) "undefined" === typeof this.axisY[b].options.margin && (this.axisY[b].margin = 10);
      }
      if (this.axisY2) {
        for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness = 0);
        for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10);
      }
      this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
      if (this.axisX) for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness && (this.axisX[b].gridThickness = 0);
      if (this.axisX2) for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
      this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
      b = false;
      if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
        for (e = 0; e < this._axes.length; e++) if (null !== this._axes[e].viewportMinimum || null !== this._axes[e].viewportMaximum) {
          b = true;
          break;
        }
      }
      b ? (Ta(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor) : (za(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
      rb(this);
      this._processData();
      this.options.title && (this.title = new Ia(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
      if (this.options.subtitles) for (e = 0; e < this.options.subtitles.length; e++) b = new Na(
        this,
        this.options.subtitles[e],
        e
      ), this.subtitles.push(b), b.dockInsidePlotArea ? a.push(b) : b.setLayout();
      this.legend = new M2(this, this.options.legend);
      for (e = 0; e < this.data.length; e++) (this.data[e].showInLegend || "pie" === this.data[e].type || "doughnut" === this.data[e].type || "funnel" === this.data[e].type || "pyramid" === this.data[e].type) && this.legend.dataSeries.push(this.data[e]);
      this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
      for (e = 0; e < this._axes.length; e++) if (this._axes[e].scaleBreaks && this._axes[e].scaleBreaks._appliedBreaks.length) {
        s ? (this._breaksCanvas = ta(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
        break;
      }
      this._preRenderCanvas = ta(this.width, this.height);
      this._preRenderCtx = this._preRenderCanvas.getContext("2d");
      "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
    };
    u2.prototype.renderElements = function() {
      var a = this._plotAreaElements;
      this.title && !this.title.dockInsidePlotArea && this.title.render();
      for (var e = 0; e < this.subtitles.length; e++) this.subtitles[e].dockInsidePlotArea || this.subtitles[e].render();
      this.legend.dockInsidePlotArea || this.legend.render();
      if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
      else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
      else return;
      for (e = 0; e < a.length; e++) a[e].setLayout(), a[e].render();
      var b = [];
      if (this.animatedRender) {
        var c = ta(this.width, this.height);
        c.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
      }
      tb(this);
      var a = this.ctx.miterLimit, g;
      this.ctx.miterLimit = 3;
      s && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(
        this._preRenderCanvas,
        0,
        0,
        this.width,
        this.height
      ), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
      for (e = 0; e < this.plotInfo.plotTypes.length; e++) for (var h = this.plotInfo.plotTypes[e], E = 0; E < h.plotUnits.length; E++) {
        var f2 = h.plotUnits[E], d2 = null;
        f2.targetCanvas = null;
        this.animatedRender && (f2.targetCanvas = ta(this.width, this.height), f2.targetCanvasCtx = f2.targetCanvas.getContext("2d"), g = f2.targetCanvasCtx.miterLimit, f2.targetCanvasCtx.miterLimit = 3);
        "line" === f2.type ? d2 = this.renderLine(f2) : "stepLine" === f2.type ? d2 = this.renderStepLine(f2) : "spline" === f2.type ? d2 = this.renderSpline(f2) : "column" === f2.type ? d2 = this.renderColumn(f2) : "bar" === f2.type ? d2 = this.renderBar(f2) : "area" === f2.type ? d2 = this.renderArea(f2) : "stepArea" === f2.type ? d2 = this.renderStepArea(f2) : "splineArea" === f2.type ? d2 = this.renderSplineArea(f2) : "stackedColumn" === f2.type ? d2 = this.renderStackedColumn(f2) : "stackedColumn100" === f2.type ? d2 = this.renderStackedColumn100(f2) : "stackedBar" === f2.type ? d2 = this.renderStackedBar(f2) : "stackedBar100" === f2.type ? d2 = this.renderStackedBar100(f2) : "stackedArea" === f2.type ? d2 = this.renderStackedArea(f2) : "stackedArea100" === f2.type ? d2 = this.renderStackedArea100(f2) : "bubble" === f2.type ? d2 = d2 = this.renderBubble(f2) : "scatter" === f2.type ? d2 = this.renderScatter(f2) : "pie" === f2.type ? this.renderPie(f2) : "doughnut" === f2.type ? this.renderPie(f2) : "funnel" === f2.type ? d2 = this.renderFunnel(f2) : "pyramid" === f2.type ? d2 = this.renderFunnel(f2) : "candlestick" === f2.type ? d2 = this.renderCandlestick(f2) : "ohlc" === f2.type ? d2 = this.renderCandlestick(f2) : "rangeColumn" === f2.type ? d2 = this.renderRangeColumn(f2) : "error" === f2.type ? d2 = this.renderError(f2) : "rangeBar" === f2.type ? d2 = this.renderRangeBar(f2) : "rangeArea" === f2.type ? d2 = this.renderRangeArea(f2) : "rangeSplineArea" === f2.type ? d2 = this.renderRangeSplineArea(f2) : "waterfall" === f2.type ? d2 = this.renderWaterfall(f2) : "boxAndWhisker" === f2.type && (d2 = this.renderBoxAndWhisker(f2));
        for (var m = 0; m < f2.dataSeriesIndexes.length; m++) this._dataInRenderedOrder.push(this.data[f2.dataSeriesIndexes[m]]);
        this.animatedRender && (f2.targetCanvasCtx.miterLimit = g, d2 && b.push(d2));
      }
      this.ctx.miterLimit = a;
      this.animatedRender && this._breaksCanvasCtx && b.push({
        source: this._breaksCanvasCtx,
        dest: this.plotArea.ctx,
        animationCallback: w.fadeInAnimation,
        easingFunction: w.easing.easeInQuad,
        animationBase: 0,
        startTimePercent: 0.7
      });
      this.animatedRender && 0 < this._indexLabels.length && (g = ta(this.width, this.height).getContext("2d"), b.push(this.renderIndexLabels(g)));
      var n = this;
      if (0 < b.length) n.disableToolTip = true, n._animator.animate(200, n.animationDuration, function(a2) {
        n.ctx.clearRect(0, 0, n.width, n.height);
        n.ctx.drawImage(c, 0, 0, Math.floor(n.width * ia), Math.floor(n.height * ia), 0, 0, n.width, n.height);
        for (var e2 = 0; e2 < b.length; e2++) d2 = b[e2], 1 > a2 && "undefined" !== typeof d2.startTimePercent ? a2 >= d2.startTimePercent && d2.animationCallback(d2.easingFunction(a2 - d2.startTimePercent, 0, 1, 1 - d2.startTimePercent), d2) : d2.animationCallback(d2.easingFunction(a2, 0, 1, 1), d2);
        n.dispatchEvent("dataAnimationIterationEnd", { chart: n });
      }, function() {
        b = [];
        for (var a2 = 0; a2 < n.plotInfo.plotTypes.length; a2++) for (var e2 = n.plotInfo.plotTypes[a2], g2 = 0; g2 < e2.plotUnits.length; g2++) e2.plotUnits[g2].targetCanvas = null;
        c = null;
        n.disableToolTip = false;
        n.dispatchEvent(
          "dataAnimationEnd",
          { chart: n }
        );
      });
      else {
        if (n._breaksCanvas) if (s) n.plotArea.ctx.drawImage(n._breaksCanvas, 0, 0, this.width, this.height);
        else for (m = 0; m < n._axes.length; m++) n._axes[m].createMask();
        0 < n._indexLabels.length && n.renderIndexLabels();
        n.dispatchEvent("dataAnimationIterationEnd", { chart: n });
        n.dispatchEvent("dataAnimationEnd", { chart: n });
      }
      this.attachPlotAreaEventHandlers();
      this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || za(this._zoomButton, this._resetButton);
      this.toolTip._updateToolTip();
      this.renderCount++;
      Ma && (n = this, setTimeout(function() {
        var a2 = document.getElementById("ghostCanvasCopy");
        a2 && (Ua(a2, n.width, n.height), a2.getContext("2d").drawImage(n._eventManager.ghostCanvas, 0, 0));
      }, 2e3));
      this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
      for (m = 0; m < this._axes.length; m++) this._axes[m].maskCanvas && (delete this._axes[m].maskCanvas, delete this._axes[m].maskCtx);
    };
    u2.prototype.render = function(a) {
      a && (this.options = a);
      this._initialize();
      this.setLayout();
      this.renderElements();
      this._preRenderCanvas = null;
    };
    u2.prototype.attachPlotAreaEventHandlers = function() {
      this.attachEvent({ context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp, mousemove: this._plotAreaMouseMove, cursor: this.panEnabled ? "move" : "default", capture: true, bounds: this.plotArea });
    };
    u2.prototype.categoriseDataSeries = function() {
      for (var a = "", e = 0; e < this.data.length; e++) if (a = this.data[e], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= u2._supportedChartTypes.indexOf(a.type)) {
        for (var b = null, c = false, g = null, h = false, E = 0; E < this.plotInfo.plotTypes.length; E++) if (this.plotInfo.plotTypes[E].type === a.type) {
          c = true;
          b = this.plotInfo.plotTypes[E];
          break;
        }
        c || (b = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(b));
        for (E = 0; E < b.plotUnits.length; E++) if (b.plotUnits[E].axisYType === a.axisYType && b.plotUnits[E].axisXType === a.axisXType && b.plotUnits[E].axisYIndex === a.axisYIndex && b.plotUnits[E].axisXIndex === a.axisXIndex) {
          h = true;
          g = b.plotUnits[E];
          break;
        }
        h || (g = {
          type: a.type,
          previousDataSeriesCount: 0,
          index: b.plotUnits.length,
          plotType: b,
          axisXType: a.axisXType,
          axisYType: a.axisYType,
          axisYIndex: a.axisYIndex,
          axisXIndex: a.axisXIndex,
          axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
          axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
          dataSeriesIndexes: [],
          yTotals: [],
          yAbsTotals: []
        }, b.plotUnits.push(g));
        b.totalDataSeries++;
        g.dataSeriesIndexes.push(e);
        a.plotUnit = g;
      }
      for (e = 0; e < this.plotInfo.plotTypes.length; e++) for (b = this.plotInfo.plotTypes[e], E = a = 0; E < b.plotUnits.length; E++) b.plotUnits[E].previousDataSeriesCount = a, a += b.plotUnits[E].dataSeriesIndexes.length;
    };
    u2.prototype.assignIdToDataPoints = function() {
      for (var a = 0; a < this.data.length; a++) {
        var e = this.data[a];
        if (e.dataPoints) for (var b = e.dataPoints.length, c = 0; c < b; c++) e.dataPointIds[c] = ++this._eventManager.lastObjectId;
      }
    };
    u2.prototype._processData = function() {
      this.assignIdToDataPoints();
      this.categoriseDataSeries();
      for (var a = 0; a < this.plotInfo.plotTypes.length; a++) for (var e = this.plotInfo.plotTypes[a], b = 0; b < e.plotUnits.length; b++) {
        var c = e.plotUnits[b];
        "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type ? this._processMultiseriesPlotUnit(c) : "stackedColumn" === c.type || "stackedBar" === c.type || "stackedArea" === c.type ? this._processStackedPlotUnit(c) : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type ? this._processStacked100PlotUnit(c) : "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? this._processMultiYPlotUnit(c) : "waterfall" === c.type && this._processSpecificPlotUnit(c);
      }
      this.calculateAutoBreaks();
    };
    u2.prototype._processMultiseriesPlotUnit = function(a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, g, h = false, E = 0; E < a.dataSeriesIndexes.length; E++) {
        var f2 = this.data[a.dataSeriesIndexes[E]], d2 = 0, m = false, n = false, p;
        if ("normal" === f2.axisPlacement || "xySwapped" === f2.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity, l = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
        if (f2.dataPoints[d2].x && f2.dataPoints[d2].x.getTime || "dateTime" === f2.xValueType) h = true;
        for (d2 = 0; d2 < f2.dataPoints.length; d2++) {
          "undefined" === typeof f2.dataPoints[d2].x && (f2.dataPoints[d2].x = d2 + (a.axisX.logarithmic ? 1 : 0));
          f2.dataPoints[d2].x.getTime ? (h = true, c = f2.dataPoints[d2].x.getTime()) : c = f2.dataPoints[d2].x;
          g = f2.dataPoints[d2].y;
          c < b.min && (b.min = c);
          c > b.max && (b.max = c);
          g < e.min && "number" === typeof g && (e.min = g);
          g > e.max && "number" === typeof g && (e.max = g);
          if (0 < d2) {
            if (a.axisX.logarithmic) {
              var x = c / f2.dataPoints[d2 - 1].x;
              1 > x && (x = 1 / x);
              b.minDiff > x && 1 !== x && (b.minDiff = x);
            } else x = c - f2.dataPoints[d2 - 1].x, 0 > x && (x *= -1), b.minDiff > x && 0 !== x && (b.minDiff = x);
            null !== g && null !== f2.dataPoints[d2 - 1].y && (a.axisY.logarithmic ? (x = g / f2.dataPoints[d2 - 1].y, 1 > x && (x = 1 / x), e.minDiff > x && 1 !== x && (e.minDiff = x)) : (x = g - f2.dataPoints[d2 - 1].y, 0 > x && (x *= -1), e.minDiff > x && 0 !== x && (e.minDiff = x)));
          }
          if (c < q && !m) null !== g && (p = c);
          else {
            if (!m && (m = true, 0 < d2)) {
              d2 -= 2;
              continue;
            }
            if (c > l && !n) n = true;
            else if (c > l && n) continue;
            f2.dataPoints[d2].label && (a.axisX.labels[c] = f2.dataPoints[d2].label);
            c < b.viewPortMin && (b.viewPortMin = c);
            c > b.viewPortMax && (b.viewPortMax = c);
            null === g ? b.viewPortMin === c && p < c && (b.viewPortMin = p) : (g < e.viewPortMin && "number" === typeof g && (e.viewPortMin = g), g > e.viewPortMax && "number" === typeof g && (e.viewPortMax = g));
          }
        }
        f2.axisX.valueType = f2.xValueType = h ? "dateTime" : "number";
      }
    };
    u2.prototype._processStackedPlotUnit = function(a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
        for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, g, h = false, E = [], d2 = [], G = Infinity, m = -Infinity, n = 0; n < a.dataSeriesIndexes.length; n++) {
          var p = this.data[a.dataSeriesIndexes[n]], q = 0, l = false, x = false, w2;
          if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var s2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity, v = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
          if (p.dataPoints[q].x && p.dataPoints[q].x.getTime || "dateTime" === p.xValueType) h = true;
          for (q = 0; q < p.dataPoints.length; q++) {
            "undefined" === typeof p.dataPoints[q].x && (p.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
            p.dataPoints[q].x.getTime ? (h = true, c = p.dataPoints[q].x.getTime()) : c = p.dataPoints[q].x;
            g = f(p.dataPoints[q].y) ? 0 : p.dataPoints[q].y;
            c < b.min && (b.min = c);
            c > b.max && (b.max = c);
            if (0 < q) {
              if (a.axisX.logarithmic) {
                var z = c / p.dataPoints[q - 1].x;
                1 > z && (z = 1 / z);
                b.minDiff > z && 1 !== z && (b.minDiff = z);
              } else z = c - p.dataPoints[q - 1].x, 0 > z && (z *= -1), b.minDiff > z && 0 !== z && (b.minDiff = z);
              null !== g && null !== p.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < g && (z = g / p.dataPoints[q - 1].y, 1 > z && (z = 1 / z), e.minDiff > z && 1 !== z && (e.minDiff = z)) : (z = g - p.dataPoints[q - 1].y, 0 > z && (z *= -1), e.minDiff > z && 0 !== z && (e.minDiff = z)));
            }
            if (c < s2 && !l) null !== p.dataPoints[q].y && (w2 = c);
            else {
              if (!l && (l = true, 0 < q)) {
                q -= 2;
                continue;
              }
              if (c > v && !x) x = true;
              else if (c > v && x) continue;
              p.dataPoints[q].label && (a.axisX.labels[c] = p.dataPoints[q].label);
              c < b.viewPortMin && (b.viewPortMin = c);
              c > b.viewPortMax && (b.viewPortMax = c);
              null === p.dataPoints[q].y ? b.viewPortMin === c && w2 < c && (b.viewPortMin = w2) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + g, a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(g), 0 <= g ? E[c] ? E[c] += g : (E[c] = g, G = Math.min(g, G)) : d2[c] ? d2[c] += g : (d2[c] = g, m = Math.max(g, m)));
            }
          }
          a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (e.dataPointYPositiveSums ? (e.dataPointYPositiveSums.push.apply(e.dataPointYPositiveSums, E), e.dataPointYNegativeSums.push.apply(e.dataPointYPositiveSums, d2)) : (e.dataPointYPositiveSums = E, e.dataPointYNegativeSums = d2));
          p.axisX.valueType = p.xValueType = h ? "dateTime" : "number";
        }
        for (q in E) E.hasOwnProperty(q) && !isNaN(q) && (a = E[q], a < e.min && (e.min = Math.min(a, G)), a > e.max && (e.max = a), q < b.viewPortMin || q > b.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = Math.min(a, G)), a > e.viewPortMax && (e.viewPortMax = a)));
        for (q in d2) d2.hasOwnProperty(q) && !isNaN(q) && (a = d2[q], a < e.min && (e.min = a), a > e.max && (e.max = Math.max(a, m)), q < b.viewPortMin || q > b.viewPortMax || (a < e.viewPortMin && (e.viewPortMin = a), a > e.viewPortMax && (e.viewPortMax = Math.max(a, m))));
      }
    };
    u2.prototype._processStacked100PlotUnit = function(a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
        for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, g, h = false, E = false, d2 = false, G = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
          var n = this.data[a.dataSeriesIndexes[m]], p = 0, q = false, l = false, x;
          if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var w2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity, s2 = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
          if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) h = true;
          for (p = 0; p < n.dataPoints.length; p++) {
            "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
            n.dataPoints[p].x.getTime ? (h = true, c = n.dataPoints[p].x.getTime()) : c = n.dataPoints[p].x;
            g = f(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
            c < b.min && (b.min = c);
            c > b.max && (b.max = c);
            if (0 < p) {
              if (a.axisX.logarithmic) {
                var v = c / n.dataPoints[p - 1].x;
                1 > v && (v = 1 / v);
                b.minDiff > v && 1 !== v && (b.minDiff = v);
              } else v = c - n.dataPoints[p - 1].x, 0 > v && (v *= -1), b.minDiff > v && 0 !== v && (b.minDiff = v);
              f(g) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < g && (v = g / n.dataPoints[p - 1].y, 1 > v && (v = 1 / v), e.minDiff > v && 1 !== v && (e.minDiff = v)) : (v = g - n.dataPoints[p - 1].y, 0 > v && (v *= -1), e.minDiff > v && 0 !== v && (e.minDiff = v)));
            }
            if (c < w2 && !q) null !== g && (x = c);
            else {
              if (!q && (q = true, 0 < p)) {
                p -= 2;
                continue;
              }
              if (c > s2 && !l) l = true;
              else if (c > s2 && l) continue;
              n.dataPoints[p].label && (a.axisX.labels[c] = n.dataPoints[p].label);
              c < b.viewPortMin && (b.viewPortMin = c);
              c > b.viewPortMax && (b.viewPortMax = c);
              null === g ? b.viewPortMin === c && x < c && (b.viewPortMin = x) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + g, a.yAbsTotals[c] = (a.yAbsTotals[c] ? a.yAbsTotals[c] : 0) + Math.abs(g), 0 <= g ? E = true : 0 > g && (d2 = true), G[c] = G[c] ? G[c] + Math.abs(g) : Math.abs(g));
            }
          }
          n.axisX.valueType = n.xValueType = h ? "dateTime" : "number";
        }
        a.axisY.logarithmic ? (e.max = f(e.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(e.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), e.min = f(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : E && !d2 ? (e.max = f(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = f(e.viewPortMin) ? 1 : Math.min(e.viewPortMin, 1)) : E && d2 ? (e.max = f(e.viewPortMax) ? 99 : Math.max(e.viewPortMax, 99), e.min = f(e.viewPortMin) ? -99 : Math.min(e.viewPortMin, -99)) : !E && d2 && (e.max = f(e.viewPortMax) ? -1 : Math.max(e.viewPortMax, -1), e.min = f(e.viewPortMin) ? -99 : Math.min(e.viewPortMin, -99));
        e.viewPortMin = e.min;
        e.viewPortMax = e.max;
        a.dataPointYSums = G;
      }
    };
    u2.prototype._processMultiYPlotUnit = function(a) {
      if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, g, h, E, f2 = false, d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
        var m = this.data[a.dataSeriesIndexes[d2]], n = 0, p = false, q = false, l, x, w2;
        if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement) var s2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity, v = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
        if (m.dataPoints[n].x && m.dataPoints[n].x.getTime || "dateTime" === m.xValueType) f2 = true;
        for (n = 0; n < m.dataPoints.length; n++) {
          "undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
          m.dataPoints[n].x.getTime ? (f2 = true, c = m.dataPoints[n].x.getTime()) : c = m.dataPoints[n].x;
          if ((g = m.dataPoints[n].y) && g.length) {
            h = Math.min.apply(null, g);
            E = Math.max.apply(null, g);
            x = true;
            for (var z = 0; z < g.length; z++) null === g.k && (x = false);
            x && (p || (w2 = l), l = c);
          }
          c < b.min && (b.min = c);
          c > b.max && (b.max = c);
          h < e.min && (e.min = h);
          E > e.max && (e.max = E);
          0 < n && (a.axisX.logarithmic ? (x = c / m.dataPoints[n - 1].x, 1 > x && (x = 1 / x), b.minDiff > x && 1 !== x && (b.minDiff = x)) : (x = c - m.dataPoints[n - 1].x, 0 > x && (x *= -1), b.minDiff > x && 0 !== x && (b.minDiff = x)), g && (null !== g[0] && m.dataPoints[n - 1].y && null !== m.dataPoints[n - 1].y[0]) && (a.axisY.logarithmic ? (x = g[0] / m.dataPoints[n - 1].y[0], 1 > x && (x = 1 / x), e.minDiff > x && 1 !== x && (e.minDiff = x)) : (x = g[0] - m.dataPoints[n - 1].y[0], 0 > x && (x *= -1), e.minDiff > x && 0 !== x && (e.minDiff = x))));
          if (!(c < s2) || p) {
            if (!p && (p = true, 0 < n)) {
              n -= 2;
              l = w2;
              continue;
            }
            if (c > v && !q) q = true;
            else if (c > v && q) continue;
            m.dataPoints[n].label && (a.axisX.labels[c] = m.dataPoints[n].label);
            c < b.viewPortMin && (b.viewPortMin = c);
            c > b.viewPortMax && (b.viewPortMax = c);
            if (b.viewPortMin === c && g) {
              for (z = 0; z < g.length; z++) if (null === g[z] && l < c) {
                b.viewPortMin = l;
                break;
              }
            }
            null === g ? b.viewPortMin === c && l < c && (b.viewPortMin = l) : (h < e.viewPortMin && (e.viewPortMin = h), E > e.viewPortMax && (e.viewPortMax = E));
          }
        }
        m.axisX.valueType = m.xValueType = f2 ? "dateTime" : "number";
      }
    };
    u2.prototype._processSpecificPlotUnit = function(a) {
      if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) for (var e = a.axisY.dataInfo, b = a.axisX.dataInfo, c, g, h = false, E = 0; E < a.dataSeriesIndexes.length; E++) {
        var f2 = this.data[a.dataSeriesIndexes[E]], d2 = 0, m = false, n = false, p = c = 0;
        if ("normal" === f2.axisPlacement || "xySwapped" === f2.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity, l = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
        if (f2.dataPoints[d2].x && f2.dataPoints[d2].x.getTime || "dateTime" === f2.xValueType) h = true;
        for (d2 = 0; d2 < f2.dataPoints.length; d2++) "undefined" !== typeof f2.dataPoints[d2].isCumulativeSum && true === f2.dataPoints[d2].isCumulativeSum ? (f2.dataPointEOs[d2].cumulativeSumYStartValue = 0, f2.dataPointEOs[d2].cumulativeSum = 0 === d2 ? 0 : f2.dataPointEOs[d2 - 1].cumulativeSum, f2.dataPoints[d2].y = 0 === d2 ? 0 : f2.dataPointEOs[d2 - 1].cumulativeSum) : "undefined" !== typeof f2.dataPoints[d2].isIntermediateSum && true === f2.dataPoints[d2].isIntermediateSum ? (f2.dataPointEOs[d2].cumulativeSumYStartValue = p, f2.dataPointEOs[d2].cumulativeSum = 0 === d2 ? 0 : f2.dataPointEOs[d2 - 1].cumulativeSum, f2.dataPoints[d2].y = 0 === d2 ? 0 : c, p = 0 === d2 ? 0 : f2.dataPointEOs[d2 - 1].cumulativeSum, c = 0) : (g = "number" !== typeof f2.dataPoints[d2].y ? 0 : f2.dataPoints[d2].y, f2.dataPointEOs[d2].cumulativeSumYStartValue = 0 === d2 ? 0 : f2.dataPointEOs[d2 - 1].cumulativeSum, f2.dataPointEOs[d2].cumulativeSum = 0 === d2 ? g : f2.dataPointEOs[d2 - 1].cumulativeSum + g, c += g);
        for (d2 = 0; d2 < f2.dataPoints.length; d2++) if ("undefined" === typeof f2.dataPoints[d2].x && (f2.dataPoints[d2].x = d2 + (a.axisX.logarithmic ? 1 : 0)), f2.dataPoints[d2].x.getTime ? (h = true, c = f2.dataPoints[d2].x.getTime()) : c = f2.dataPoints[d2].x, g = f2.dataPoints[d2].y, c < b.min && (b.min = c), c > b.max && (b.max = c), f2.dataPointEOs[d2].cumulativeSum < e.min && (e.min = f2.dataPointEOs[d2].cumulativeSum), f2.dataPointEOs[d2].cumulativeSum > e.max && (e.max = f2.dataPointEOs[d2].cumulativeSum), 0 < d2 && (a.axisX.logarithmic ? (p = c / f2.dataPoints[d2 - 1].x, 1 > p && (p = 1 / p), b.minDiff > p && 1 !== p && (b.minDiff = p)) : (p = c - f2.dataPoints[d2 - 1].x, 0 > p && (p *= -1), b.minDiff > p && 0 !== p && (b.minDiff = p)), null !== g && null !== f2.dataPoints[d2 - 1].y && (a.axisY.logarithmic ? (g = f2.dataPointEOs[d2].cumulativeSum / f2.dataPointEOs[d2 - 1].cumulativeSum, 1 > g && (g = 1 / g), e.minDiff > g && 1 !== g && (e.minDiff = g)) : (g = f2.dataPointEOs[d2].cumulativeSum - f2.dataPointEOs[d2 - 1].cumulativeSum, 0 > g && (g *= -1), e.minDiff > g && 0 !== g && (e.minDiff = g)))), !(c < q) || m) {
          if (!m && (m = true, 0 < d2)) {
            d2 -= 2;
            continue;
          }
          if (c > l && !n) n = true;
          else if (c > l && n) continue;
          f2.dataPoints[d2].label && (a.axisX.labels[c] = f2.dataPoints[d2].label);
          c < b.viewPortMin && (b.viewPortMin = c);
          c > b.viewPortMax && (b.viewPortMax = c);
          0 < d2 && (f2.dataPointEOs[d2 - 1].cumulativeSum < e.viewPortMin && (e.viewPortMin = f2.dataPointEOs[d2 - 1].cumulativeSum), f2.dataPointEOs[d2 - 1].cumulativeSum > e.viewPortMax && (e.viewPortMax = f2.dataPointEOs[d2 - 1].cumulativeSum));
          f2.dataPointEOs[d2].cumulativeSum < e.viewPortMin && (e.viewPortMin = f2.dataPointEOs[d2].cumulativeSum);
          f2.dataPointEOs[d2].cumulativeSum > e.viewPortMax && (e.viewPortMax = f2.dataPointEOs[d2].cumulativeSum);
        }
        f2.axisX.valueType = f2.xValueType = h ? "dateTime" : "number";
      }
    };
    u2.prototype.calculateAutoBreaks = function() {
      function a(a2, c2, b2, e2) {
        if (e2) return b2 = Math.pow(Math.min(b2 * a2 / c2, c2 / a2), 0.2), 1 >= b2 && (b2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(c2 / a2, a2), 0.25)), { startValue: a2 * b2, endValue: c2 / b2 };
        b2 = 0.2 * Math.min(b2 - c2 + a2, c2 - a2);
        0 >= b2 && (b2 = 0.25 * Math.min(c2 - a2, Math.abs(a2)));
        return { startValue: a2 + b2, endValue: c2 - b2 };
      }
      function e(a2) {
        if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
          var c2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, b2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
          if (c2 || b2) for (var e2 = a2.axisY.dataInfo, h2 = a2.axisX.dataInfo, l2, m2 = h2.min, E2 = h2.max, n2 = e2.min, d3 = e2.max, h2 = h2._dataRanges, e2 = e2._dataRanges, p2, q2 = 0, xa = 0; xa < a2.dataSeriesIndexes.length; xa++) {
            var w3 = g.data[a2.dataSeriesIndexes[xa]];
            if (!(4 > w3.dataPoints.length)) {
              for (q2 = 0; q2 < w3.dataPoints.length; q2++) if (c2 && (p2 = (E2 + 1 - m2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, l2 = w3.dataPoints[q2].x.getTime ? w3.dataPoints[q2].x.getTime() : w3.dataPoints[q2].x, p2 = Math.floor((l2 - m2) / p2), l2 < h2[p2].min && (h2[p2].min = l2), l2 > h2[p2].max && (h2[p2].max = l2)), b2) {
                var G = (d3 + 1 - n2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                if ((l2 = "waterfall" === a2.type ? w3.dataPointEOs[q2].cumulativeSum : w3.dataPoints[q2].y) && l2.length) for (var s2 = 0; s2 < l2.length; s2++) p2 = Math.floor((l2[s2] - n2) / G), l2[s2] < e2[p2].min && (e2[p2].min = l2[s2]), l2[s2] > e2[p2].max && (e2[p2].max = l2[s2]);
                else f(l2) || (p2 = Math.floor((l2 - n2) / G), l2 < e2[p2].min && (e2[p2].min = l2), l2 > e2[p2].max && (e2[p2].max = l2));
              }
            }
          }
        }
      }
      function b(a2) {
        if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks) for (var c2 = a2.axisX.dataInfo, b2 = c2.min, e2 = c2.max, h2 = c2._dataRanges, l2, m2 = 0, f2 = 0; f2 < a2.dataSeriesIndexes.length; f2++) {
          var E2 = g.data[a2.dataSeriesIndexes[f2]];
          if (!(4 > E2.dataPoints.length)) for (m2 = 0; m2 < E2.dataPoints.length; m2++) l2 = (e2 + 1 - b2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, c2 = E2.dataPoints[m2].x.getTime ? E2.dataPoints[m2].x.getTime() : E2.dataPoints[m2].x, l2 = Math.floor((c2 - b2) / l2), c2 < h2[l2].min && (h2[l2].min = c2), c2 > h2[l2].max && (h2[l2].max = c2);
        }
      }
      for (var c, g = this, h = false, E = 0; E < this._axes.length; E++) if (this._axes[E].scaleBreaks && this._axes[E].scaleBreaks.autoCalculate && 1 <= this._axes[E].scaleBreaks.maxNumberOfAutoBreaks) {
        h = true;
        this._axes[E].dataInfo._dataRanges = [];
        for (var d2 = 0; d2 < 100 / Math.max(parseFloat(this._axes[E].scaleBreaks.collapsibleThreshold) || 10, 10); d2++) this._axes[E].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
      }
      if (h) {
        for (E = 0; E < this.plotInfo.plotTypes.length; E++) for (h = this.plotInfo.plotTypes[E], d2 = 0; d2 < h.plotUnits.length; d2++) c = h.plotUnits[d2], "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type || "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "waterfall" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? e(c) : 0 <= c.type.indexOf("stacked") && b(c);
        for (E = 0; E < this._axes.length; E++) if (this._axes[E].dataInfo._dataRanges) {
          var w2 = this._axes[E].dataInfo.min;
          c = (this._axes[E].dataInfo.max + 1 - w2) * Math.max(parseFloat(this._axes[E].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
          var m = this._axes[E].dataInfo._dataRanges, n, p, h = [];
          if (this._axes[E].dataInfo.dataPointYPositiveSums) {
            var q = this._axes[E].dataInfo.dataPointYPositiveSums;
            n = m;
            for (d2 in q) if (q.hasOwnProperty(d2) && !isNaN(d2) && (p = q[d2], !f(p))) {
              var l = Math.floor((p - w2) / c);
              p < n[l].min && (n[l].min = p);
              p > n[l].max && (n[l].max = p);
            }
            delete this._axes[E].dataInfo.dataPointYPositiveSums;
          }
          if (this._axes[E].dataInfo.dataPointYNegativeSums) {
            q = this._axes[E].dataInfo.dataPointYNegativeSums;
            n = m;
            for (d2 in q) q.hasOwnProperty(d2) && !isNaN(d2) && (p = -1 * q[d2], f(p) || (l = Math.floor((p - w2) / c), p < n[l].min && (n[l].min = p), p > n[l].max && (n[l].max = p)));
            delete this._axes[E].dataInfo.dataPointYNegativeSums;
          }
          for (d2 = 0; d2 < m.length - 1; d2++) if (n = m[d2].max, isFinite(n)) for (; d2 < m.length - 1; ) if (w2 = m[d2 + 1].min, isFinite(w2)) {
            p = w2 - n;
            p > c && h.push({ diff: p, start: n, end: w2 });
            break;
          } else d2++;
          if (this._axes[E].scaleBreaks.customBreaks) {
            for (d2 = 0; d2 < this._axes[E].scaleBreaks.customBreaks.length; d2++) for (c = 0; c < h.length; c++) if (this._axes[E].scaleBreaks.customBreaks[d2].startValue <= h[c].start && h[c].start <= this._axes[E].scaleBreaks.customBreaks[d2].endValue || this._axes[E].scaleBreaks.customBreaks[d2].startValue <= h[c].start && h[c].start <= this._axes[E].scaleBreaks.customBreaks[d2].endValue || h[c].start <= this._axes[E].scaleBreaks.customBreaks[d2].startValue && this._axes[E].scaleBreaks.customBreaks[d2].startValue <= h[c].end || h[c].start <= this._axes[E].scaleBreaks.customBreaks[d2].endValue && this._axes[E].scaleBreaks.customBreaks[d2].endValue <= h[c].end) h.splice(c, 1), c--;
          }
          h.sort(function(a2, c2) {
            return c2.diff - a2.diff;
          });
          for (d2 = 0; d2 < Math.min(h.length, this._axes[E].scaleBreaks.maxNumberOfAutoBreaks); d2++) c = a(h[d2].start, h[d2].end, this._axes[E].logarithmic ? this._axes[E].dataInfo.max / this._axes[E].dataInfo.min : this._axes[E].dataInfo.max - this._axes[E].dataInfo.min, this._axes[E].logarithmic), this._axes[E].scaleBreaks.autoBreaks.push(new X2(this, "autoBreaks", c, d2, ++this._eventManager.lastObjectId, this._axes[E].scaleBreaks)), this._axes[E].scaleBreaks._appliedBreaks.push(this._axes[E].scaleBreaks.autoBreaks[this._axes[E].scaleBreaks.autoBreaks.length - 1]);
          this._axes[E].scaleBreaks._appliedBreaks.sort(function(a2, c2) {
            return a2.startValue - c2.startValue;
          });
        }
      }
    };
    u2.prototype.renderCrosshairs = function(a) {
      for (var e = 0; e < this.axisX.length; e++) this.axisX[e] != a && (this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && !this.axisX[e].crosshair._hidden) && this.axisX[e].showCrosshair(this.axisX[e].crosshair._updatedValue);
      for (e = 0; e < this.axisX2.length; e++) this.axisX2[e] != a && (this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && !this.axisX2[e].crosshair._hidden) && this.axisX2[e].showCrosshair(this.axisX2[e].crosshair._updatedValue);
      for (e = 0; e < this.axisY.length; e++) this.axisY[e] != a && (this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && !this.axisY[e].crosshair._hidden) && this.axisY[e].showCrosshair(this.axisY[e].crosshair._updatedValue);
      for (e = 0; e < this.axisY2.length; e++) this.axisY2[e] != a && (this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && !this.axisY2[e].crosshair._hidden) && this.axisY2[e].showCrosshair(this.axisY2[e].crosshair._updatedValue);
    };
    u2.prototype.getDataPointAtXY = function(a, e, b) {
      b = b || false;
      for (var c = [], g = this._dataInRenderedOrder.length - 1; 0 <= g; g--) {
        var h = null;
        (h = this._dataInRenderedOrder[g].getDataPointAtXY(a, e, b)) && c.push(h);
      }
      a = null;
      e = false;
      for (b = 0; b < c.length; b++) if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type || "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type) {
        if (g = sa("markerSize", c[b].dataPoint, c[b].dataSeries) || 8, c[b].distance <= g / 2) {
          e = true;
          break;
        }
      }
      for (b = 0; b < c.length; b++) e && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type && "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type || (a ? c[b].distance <= a.distance && (a = c[b]) : a = c[b]);
      return a;
    };
    u2.prototype.getObjectAtXY = function(a, e, b) {
      var c = null;
      if (b = this.getDataPointAtXY(a, e, b || false)) c = b.dataSeries.dataPointIds[b.dataPointIndex];
      else if (s) c = kb(a, e, this._eventManager.ghostCtx);
      else for (b = 0; b < this.legend.items.length; b++) {
        var g = this.legend.items[b];
        a >= g.x1 && (a <= g.x2 && e >= g.y1 && e <= g.y2) && (c = g.id);
      }
      return c;
    };
    u2.prototype.getAutoFontSize = ob;
    u2.prototype.resetOverlayedCanvas = function() {
      this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
    };
    u2.prototype.clearCanvas = nb;
    u2.prototype.attachEvent = function(a) {
      this._events.push(a);
    };
    u2.prototype._touchEventHandler = function(a) {
      if (a.changedTouches && this.interactivityEnabled) {
        var e = [], b = a.changedTouches, c = b ? b[0] : a, g = null;
        switch (a.type) {
          case "touchstart":
          case "MSPointerDown":
            e = ["mousemove", "mousedown"];
            this._lastTouchData = Ba(c);
            this._lastTouchData.time = /* @__PURE__ */ new Date();
            break;
          case "touchmove":
          case "MSPointerMove":
            e = ["mousemove"];
            break;
          case "touchend":
          case "MSPointerUp":
            var h = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, e = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
            break;
          default:
            return;
        }
        if (!(b && 1 < b.length)) {
          g = Ba(c);
          g.time = /* @__PURE__ */ new Date();
          try {
            var E = g.y - this._lastTouchData.y, h = g.time - this._lastTouchData.time;
            if (1 < Math.abs(E) && this._lastTouchData.scroll || 5 < Math.abs(E) && 250 > h) this._lastTouchData.scroll = true;
          } catch (d2) {
          }
          this._lastTouchEventType = a.type;
          if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
          else for (b = 0; b < e.length; b++) if (g = e[b], E = document.createEvent("MouseEvent"), E.initMouseEvent(
            g,
            true,
            true,
            window,
            1,
            c.screenX,
            c.screenY,
            c.clientX,
            c.clientY,
            false,
            false,
            false,
            false,
            0,
            null
          ), c.target.dispatchEvent(E), !f(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < h || "click" === g) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
        }
      }
    };
    u2.prototype._dispatchRangeEvent = function(a, e) {
      var b = { chart: this };
      b.type = a;
      b.trigger = e;
      var c = [];
      this.axisX && 0 < this.axisX.length && c.push("axisX");
      this.axisX2 && 0 < this.axisX2.length && c.push("axisX2");
      this.axisY && 0 < this.axisY.length && c.push("axisY");
      this.axisY2 && 0 < this.axisY2.length && c.push("axisY2");
      for (var g = 0; g < c.length; g++) if (f(b[c[g]]) && (b[c[g]] = []), "axisY" === c[g]) for (var h = 0; h < this.axisY.length; h++) b[c[g]].push({ viewportMinimum: this[c[g]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[c[g]][h].sessionVariables.newViewportMaximum });
      else if ("axisY2" === c[g]) for (h = 0; h < this.axisY2.length; h++) b[c[g]].push({ viewportMinimum: this[c[g]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[c[g]][h].sessionVariables.newViewportMaximum });
      else if ("axisX" === c[g]) for (h = 0; h < this.axisX.length; h++) b[c[g]].push({ viewportMinimum: this[c[g]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[c[g]][h].sessionVariables.newViewportMaximum });
      else if ("axisX2" === c[g]) for (h = 0; h < this.axisX2.length; h++) b[c[g]].push({ viewportMinimum: this[c[g]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[c[g]][h].sessionVariables.newViewportMaximum });
      this.dispatchEvent(a, b, this);
    };
    u2.prototype._mouseEventHandler = function(a) {
      "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
      var e = Ba(a), b = a.type, c, g;
      a.which ? g = 3 == a.which : a.button && (g = 2 == a.button);
      u2.capturedEventParam && (c = u2.capturedEventParam, "mouseup" === b && (u2.capturedEventParam = null, c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", c.chart._mouseEventHandler, false)), c.hasOwnProperty(b) && ("mouseup" !== b || c.chart.overlaidCanvas.releaseCapture ? a.target !== c.chart.overlaidCanvas && s || c[b].call(c.context, e.x, e.y) : a.target !== c.chart.overlaidCanvas && (c.chart.isDrag = false)));
      if (this.interactivityEnabled) {
        if (this._ignoreNextEvent) this._ignoreNextEvent = false;
        else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), Ma && window.console && (window.console.log(b + " --> x: " + e.x + "; y:" + e.y), g && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup")), !g) {
          if (!u2.capturedEventParam && this._events) {
            for (var h = 0; h < this._events.length; h++) if (this._events[h].hasOwnProperty(b)) if (c = this._events[h], g = c.bounds, e.x >= g.x1 && e.x <= g.x2 && e.y >= g.y1 && e.y <= g.y2) {
              c[b].call(c.context, e.x, e.y);
              "mousedown" === b && true === c.capture ? (u2.capturedEventParam = c, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
              break;
            } else c = null;
            a.target.style.cursor = c && c.cursor ? c.cursor : this._defaultCursor;
          }
          b = this.plotArea;
          if (e.x < b.x1 || e.x > b.x2 || e.y < b.y1 || e.y > b.y2) if (this.toolTip && this.toolTip.enabled) {
            this.toolTip.hide();
            this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
            for (h = 0; h < this.axisX.length; h++) this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && this.axisX[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[h].options }, this.axisX[h].crosshair);
            for (h = 0; h < this.axisX2.length; h++) this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && this.axisX2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[h].options }, this.axisX2[h].crosshair);
            for (h = 0; h < this.axisY.length; h++) this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && this.axisY[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[h].options }, this.axisY[h].crosshair);
            for (h = 0; h < this.axisY2.length; h++) this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && this.axisY2[h].crosshair.dispatchEvent("hidden", {
              chart: this,
              axis: this.axisY2[h].options
            }, this.axisY2[h].crosshair);
          } else this.resetOverlayedCanvas();
          this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
        }
      }
    };
    u2.prototype._plotAreaMouseDown = function(a, e) {
      this.isDrag = true;
      this.dragStartPoint = { x: a, y: e };
    };
    u2.prototype._plotAreaMouseUp = function(a, e) {
      if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
        var b = e - this.dragStartPoint.y, c = a - this.dragStartPoint.x, g = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), E = false;
        this.resetOverlayedCanvas();
        if ("xySwapped" === this.plotInfo.axisPlacement) var f2 = h, h = g, g = f2;
        if (this.panEnabled || this.zoomEnabled) {
          if (this.panEnabled) for (g = h = 0; g < this._axes.length; g++) b = this._axes[g], b.logarithmic ? b.viewportMinimum < b.minimum ? (h = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * h, b.sessionVariables.newViewportMaximum = b.viewportMaximum * h, E = true) : b.viewportMaximum > b.maximum && (h = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum / h, b.sessionVariables.newViewportMaximum = b.viewportMaximum / h, E = true) : b.viewportMinimum < b.minimum ? (h = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum + h, b.sessionVariables.newViewportMaximum = b.viewportMaximum + h, E = true) : b.viewportMaximum > b.maximum && (h = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - h, b.sessionVariables.newViewportMaximum = b.viewportMaximum - h, E = true);
          else if ((!g || 2 < Math.abs(c)) && (!h || 2 < Math.abs(b)) && this.zoomEnabled) {
            if (!this.dragStartPoint) return;
            b = g ? this.dragStartPoint.x : this.plotArea.x1;
            c = h ? this.dragStartPoint.y : this.plotArea.y1;
            g = g ? a : this.plotArea.x2;
            h = h ? e : this.plotArea.y2;
            2 < Math.abs(b - g) && 2 < Math.abs(c - h) && this._zoomPanToSelectedRegion(b, c, g, h) && (E = true);
          }
          E && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
            stockChart: this.stockChart,
            source: "chart",
            index: this.stockChart.charts.indexOf(this),
            minimum: this.stockChart.sessionVariables._axisXMin,
            maximum: this.stockChart.sessionVariables._axisXMax
          }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent(
            "rangeChanged",
            this.stockChart._rangeEventParameter,
            this.stockChart
          )), E && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ta(this._zoomButton, this._resetButton), Ca(this, this._zoomButton, "pan"), Ca(this, this._resetButton, "reset")));
        }
      }
      this.isDrag = false;
      if ("none" !== this.plotInfo.axisPlacement) {
        this.resetOverlayedCanvas();
        if (this.axisX && 0 < this.axisX.length) for (E = 0; E < this.axisX.length; E++) this.axisX[E].crosshair && this.axisX[E].crosshair.enabled && this.axisX[E].renderCrosshair(a, e);
        if (this.axisX2 && 0 < this.axisX2.length) for (E = 0; E < this.axisX2.length; E++) this.axisX2[E].crosshair && this.axisX2[E].crosshair.enabled && this.axisX2[E].renderCrosshair(a, e);
        if (this.axisY && 0 < this.axisY.length) for (E = 0; E < this.axisY.length; E++) this.axisY[E].crosshair && this.axisY[E].crosshair.enabled && this.axisY[E].renderCrosshair(a, e);
        if (this.axisY2 && 0 < this.axisY2.length) for (E = 0; E < this.axisY2.length; E++) this.axisY2[E].crosshair && this.axisY2[E].crosshair.enabled && this.axisY2[E].renderCrosshair(a, e);
      }
    };
    u2.prototype._plotAreaMouseMove = function(a, e) {
      if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
        var b = 0, c = 0, g = b = null, g = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), f2 = this;
        "xySwapped" === this.plotInfo.axisPlacement && (b = h, h = g, g = b);
        b = this.dragStartPoint.x - a;
        c = this.dragStartPoint.y - e;
        2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, e);
        if ((!g || 2 < Math.abs(b) || !h || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled)) {
          if (this.panEnabled) g = { x1: g ? this.plotArea.x1 + b : this.plotArea.x1, y1: h ? this.plotArea.y1 + c : this.plotArea.y1, x2: g ? this.plotArea.x2 + b : this.plotArea.x2, y2: h ? this.plotArea.y2 + c : this.plotArea.y2 }, clearTimeout(f2._panTimerId), f2._panTimerId = setTimeout(/* @__PURE__ */ function(c2, b2, g2, h2) {
            return function() {
              f2._zoomPanToSelectedRegion(c2, b2, g2, h2, true) && (f2._dispatchRangeEvent("rangeChanging", "pan"), f2.stockChart && (f2.stockChart.navigator && f2.stockChart.navigator.enabled) && (f2.stockChart._rangeEventParameter.type = "rangeChanging", f2.stockChart.dispatchEvent("rangeChanging", f2.stockChart._rangeEventParameter, f2.stockChart)), f2.render(), f2._dispatchRangeEvent("rangeChanged", "pan"), f2.stockChart && (f2.stockChart.navigator && f2.stockChart.navigator.enabled) && (f2.stockChart._rangeEventParameter.type = "rangeChanged", f2.stockChart.dispatchEvent("rangeChanged", f2.stockChart._rangeEventParameter, f2.stockChart)), f2.dragStartPoint.x = a, f2.dragStartPoint.y = e);
            };
          }(g.x1, g.y1, g.x2, g.y2), 0);
          else if (this.zoomEnabled) {
            this.resetOverlayedCanvas();
            b = this.overlaidCanvasCtx.globalAlpha;
            this.overlaidCanvasCtx.fillStyle = "#A89896";
            var c = g ? this.dragStartPoint.x : this.plotArea.x1, d2 = h ? this.dragStartPoint.y : this.plotArea.y1, w2 = g ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, m = h ? e - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
            this.validateRegion(c, d2, g ? a : this.plotArea.x2 - this.plotArea.x1, h ? e : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
            this.overlaidCanvasCtx.globalAlpha = 0.7;
            this.overlaidCanvasCtx.fillRect(c, d2, w2, m);
            this.overlaidCanvasCtx.globalAlpha = b;
          }
        }
      } else if (this.toolTip.mouseMoveHandler(a, e), "none" !== this.plotInfo.axisPlacement) {
        if (this.axisX && 0 < this.axisX.length) for (g = 0; g < this.axisX.length; g++) this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && this.axisX[g].renderCrosshair(a, e);
        if (this.axisX2 && 0 < this.axisX2.length) for (g = 0; g < this.axisX2.length; g++) this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && this.axisX2[g].renderCrosshair(a, e);
        if (this.axisY && 0 < this.axisY.length) for (g = 0; g < this.axisY.length; g++) this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && this.axisY[g].renderCrosshair(a, e);
        if (this.axisY2 && 0 < this.axisY2.length) for (g = 0; g < this.axisY2.length; g++) this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && this.axisY2[g].renderCrosshair(a, e);
      }
    };
    u2.prototype._zoomPanToSelectedRegion = function(a, e, b, c, g) {
      a = this.validateRegion(a, e, b, c, g);
      e = a.axesWithValidRange;
      b = a.axesRanges;
      if (a.isValid) for (c = 0; c < e.length; c++) g = b[c], e[c].setViewPortRange(
        g.val1,
        g.val2
      ), this.syncCharts && "y" != this.zoomType && this.syncCharts(g.val1, g.val2), this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: g.val1, maximum: g.val2 });
      return a.isValid;
    };
    u2.prototype.validateRegion = function(a, e, b, c, g) {
      g = g || false;
      for (var h = 0 <= this.zoomType.indexOf("x"), f2 = 0 <= this.zoomType.indexOf("y"), d2 = false, w2 = [], m = [], n = [], p = 0; p < this._axes.length; p++) ("axisX" === this._axes[p].type && h || "axisY" === this._axes[p].type && f2) && m.push(this._axes[p]);
      for (f2 = 0; f2 < m.length; f2++) {
        var p = m[f2], h = false, q = p.convertPixelToValue({ x: a, y: e }), l = p.convertPixelToValue({ x: b, y: c });
        if (q > l) var x = l, l = q, q = x;
        if (p.scaleBreaks) for (x = 0; !h && x < p.scaleBreaks._appliedBreaks.length; x++) h = p.scaleBreaks._appliedBreaks[x].startValue <= q && p.scaleBreaks._appliedBreaks[x].endValue >= l;
        if (isFinite(p.dataInfo.minDiff)) {
          if (x = p.getApparentDifference(q, l, null, true), !(h || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) && (p.logarithmic && x < Math.pow(
            p.dataInfo.minDiff,
            3
          ) || !p.logarithmic && x < 3 * Math.abs(p.dataInfo.minDiff)) || q < p.minimum || l > p.maximum)) w2.push(p), n.push({ val1: q, val2: l }), d2 = true;
          else if (!g) {
            d2 = false;
            break;
          }
        }
      }
      return { isValid: d2, axesWithValidRange: w2, axesRanges: n };
    };
    u2.prototype.preparePlotArea = function() {
      var a = this.plotArea;
      !s && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
      if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
        var e = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
        if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
          var b = this.axisY[0];
          a.x1 = e.x1 < e.x2 ? e.x1 : b.lineCoordinates.x1;
          a.y1 = e.y1 < b.lineCoordinates.y1 ? e.y1 : b.lineCoordinates.y1;
          a.x2 = e.x2 > b.lineCoordinates.x2 ? e.x2 : b.lineCoordinates.x2;
          a.y2 = e.y2 > e.y1 ? e.y2 : b.lineCoordinates.y2;
          a.width = a.x2 - a.x1;
          a.height = a.y2 - a.y1;
        }
        this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0], a.x1 = e.x1 < e.x2 ? e.x1 : b.lineCoordinates.x1, a.y1 = e.y1 < b.lineCoordinates.y1 ? e.y1 : b.lineCoordinates.y1, a.x2 = e.x2 > b.lineCoordinates.x2 ? e.x2 : b.lineCoordinates.x2, a.y2 = e.y2 > e.y1 ? e.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
      } else e = this.layoutManager.getFreeSpace(), a.x1 = e.x1, a.x2 = e.x2, a.y1 = e.y1, a.y2 = e.y2, a.width = e.width, a.height = e.height;
      s || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
      a.layoutManager = new La(a.x1, a.y1, a.x2, a.y2, 2);
    };
    u2.prototype.renderIndexLabels = function(a) {
      var e = a || this.plotArea.ctx, b = this.plotArea, c = 0, g = 0, h = 0, E = h = g = 0, d2 = 0, G = c = 0, m = 0;
      for (a = 0; a < this._indexLabels.length; a++) {
        var n = this._indexLabels[a], p = n.chartType.toLowerCase(), q, l, E = sa("indexLabelFontColor", n.dataPoint, n.dataSeries), x = sa("indexLabelFontSize", n.dataPoint, n.dataSeries), d2 = sa("indexLabelFontFamily", n.dataPoint, n.dataSeries), G = sa("indexLabelFontStyle", n.dataPoint, n.dataSeries), m = sa("indexLabelFontWeight", n.dataPoint, n.dataSeries), qa = sa("indexLabelBackgroundColor", n.dataPoint, n.dataSeries);
        q = sa("indexLabelMaxWidth", n.dataPoint, n.dataSeries);
        l = sa("indexLabelWrap", n.dataPoint, n.dataSeries);
        var ga = sa(
          "indexLabelLineDashType",
          n.dataPoint,
          n.dataSeries
        ), v = sa("indexLabelLineColor", n.dataPoint, n.dataSeries), z = f(n.dataPoint.indexLabelLineThickness) ? f(n.dataSeries.options.indexLabelLineThickness) ? 0 : n.dataSeries.options.indexLabelLineThickness : n.dataPoint.indexLabelLineThickness, c = 0 < z ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, r2 = { percent: null, total: null }, k2 = null;
        if (0 <= n.dataSeries.type.indexOf("stacked") || "pie" === n.dataSeries.type || "doughnut" === n.dataSeries.type) r2 = this.getPercentAndTotal(
          n.dataSeries,
          n.dataPoint
        );
        if (n.dataSeries.indexLabelFormatter || n.dataPoint.indexLabelFormatter) k2 = { chart: this, dataSeries: n.dataSeries, dataPoint: n.dataPoint, index: n.indexKeyword, total: r2.total, percent: r2.percent };
        var t2 = n.dataPoint.indexLabelFormatter ? n.dataPoint.indexLabelFormatter(k2) : n.dataPoint.indexLabel ? this.replaceKeywordsWithValue(n.dataPoint.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : n.dataSeries.indexLabelFormatter ? n.dataSeries.indexLabelFormatter(k2) : n.dataSeries.indexLabel ? this.replaceKeywordsWithValue(
          n.dataSeries.indexLabel,
          n.dataPoint,
          n.dataSeries,
          null,
          n.indexKeyword
        ) : null;
        if (null !== t2 && "" !== t2) {
          var r2 = sa("indexLabelPlacement", n.dataPoint, n.dataSeries), k2 = sa("indexLabelOrientation", n.dataPoint, n.dataSeries), u3 = n.direction, g = n.dataSeries.axisX, h = n.dataSeries.axisY, y2 = false, qa = new na(e, { x: 0, y: 0, maxWidth: q ? q : 0.5 * this.width, maxHeight: l ? 5 * x : 1.5 * x, angle: "horizontal" === k2 ? 0 : -90, text: t2, padding: 0, backgroundColor: qa, horizontalAlign: "left", fontSize: x, fontFamily: d2, fontWeight: m, fontColor: E, fontStyle: G, textBaseline: "middle" });
          qa.measureText();
          n.dataSeries.indexLabelMaxWidth = qa.maxWidth;
          if ("stackedarea100" === p) {
            if (n.point.x < b.x1 || n.point.x > b.x2 || n.point.y < b.y1 - 1 || n.point.y > b.y2 + 1) continue;
          } else if ("rangearea" === p || "rangesplinearea" === p) {
            if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < h.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > h.viewportMaximum) continue;
          } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
            if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || n.dataPoint.y < h.viewportMinimum || n.dataPoint.y > h.viewportMaximum) continue;
          } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !n.axisSwapped) {
            if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || n.bounds.y1 > b.y2 || n.bounds.y2 < b.y1) continue;
          } else if (0 <= p.indexOf("bar") || "error" === p) {
            if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || n.bounds.x1 > b.x2 || n.bounds.x2 < b.x1) continue;
          } else if ("candlestick" === p || "ohlc" === p) {
            if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < h.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > h.viewportMaximum) continue;
          } else if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum) continue;
          E = d2 = 2;
          "horizontal" === k2 ? (G = qa.width, m = qa.height) : (m = qa.width, G = qa.height);
          if ("normal" === this.plotInfo.axisPlacement) {
            if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) r2 = "auto", d2 = 4;
            else if (0 <= p.indexOf("stacked")) "auto" === r2 && (r2 = "inside");
            else if ("bubble" === p || "scatter" === p) r2 = "inside";
            q = n.point.x - ("horizontal" === k2 ? G / 2 : G / 2 - x / 2);
            "inside" !== r2 ? (g = b.y1, h = b.y2, 0 < u3 ? (l = n.point.y + ("horizontal" === k2 ? x / 2 : 0) - m - d2 - c, l < g && (l = "auto" === r2 ? Math.max(n.point.y, g) + x / 2 + d2 : g + x / 2 + d2, y2 = l + m > n.point.y)) : (l = n.point.y + x / 2 + d2 + c, l > h - m && (l = "auto" === r2 ? Math.min(n.point.y, h) + x / 2 - m - d2 : h + x / 2 - m, y2 = l < n.point.y))) : (g = Math.max(n.bounds.y1, b.y1), h = Math.min(n.bounds.y2, b.y2 - m + x / 2), c = 0 <= p.indexOf("range") || "error" === p ? 0 < u3 ? Math.max(n.bounds.y1, b.y1) + x / 2 + d2 : Math.min(n.bounds.y2, b.y2) + x / 2 - m + d2 : (Math.max(
              n.bounds.y1,
              b.y1
            ) + Math.min(n.bounds.y2, b.y2)) / 2 - m / 2 + x / 2 + ("horizontal" === k2 ? d2 : 0), 0 < u3 ? (l = Math.max(n.point.y, c), l < g && ("bubble" === p || "scatter" === p) && (l = Math.max(n.point.y - m - d2, b.y1 + d2))) : (l = Math.min(n.point.y, c), l > h - m - d2 && ("bubble" === p || "scatter" === p) && (l = Math.min(n.point.y + d2, b.y2 - m - d2))), l = Math.min(l, h));
          } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (r2 = "auto", E = 4) : 0 <= p.indexOf("stacked") ? "auto" === r2 && (r2 = "inside") : "bubble" === p && (r2 = "inside"), l = n.point.y + x / 2 - m / 2 + d2, "inside" !== r2 ? (g = b.x1, h = b.x2, 0 > u3 ? (q = n.point.x - ("horizontal" === k2 ? G : G - x / 2) - E - c, q < g && (q = "auto" === r2 ? Math.max(n.point.x, g) + E : g + E, y2 = q + G > n.point.x)) : (q = n.point.x + ("horizontal" === k2 ? 0 : x / 2) + E + c, q > h - G - E - c && (q = "auto" === r2 ? Math.min(n.point.x, h) - ("horizontal" === k2 ? G : G / 2) - E : h - G - E, y2 = q < n.point.x))) : (g = Math.max(n.bounds.x1, b.x1), Math.min(n.bounds.x2, b.x2), c = 0 <= p.indexOf("range") || "error" === p ? 0 > u3 ? Math.max(n.bounds.x1, b.x1) + x / 2 + E : Math.min(n.bounds.x2, b.x2) - G / 2 - E + ("horizontal" === k2 ? 0 : x / 2) : (Math.max(n.bounds.x1, b.x1) + Math.min(n.bounds.x2, b.x2)) / 2 + ("horizontal" === k2 ? 0 : x / 2), q = 0 > u3 ? Math.max(n.point.x, c) - ("horizontal" === k2 ? G / 2 : 0) : Math.min(n.point.x, c) - G / 2, q = Math.max(q, g));
          "vertical" === k2 && (l += m - x / 2);
          qa.x = q;
          qa.y = l;
          qa.render(true);
          z && ("inside" !== r2 && (0 > p.indexOf("bar") && ("error" !== p || !n.axisSwapped) && n.point.x > b.x1 && n.point.x < b.x2 || !y2) && (0 > p.indexOf("column") && ("error" !== p || n.axisSwapped) && n.point.y > b.y1 && n.point.y < b.y2 || !y2)) && (e.lineWidth = z, e.strokeStyle = v ? v : "gray", e.setLineDash && e.setLineDash(N(ga, z)), e.beginPath(), e.moveTo(n.point.x, n.point.y), 0 <= p.indexOf("bar") || "error" === p && n.axisSwapped ? e.lineTo(q + (0 < n.direction ? -E : G + E) + ("vertical" === k2 ? -x / 2 : 0), l + ("vertical" === k2 ? -m / 2 : m / 2 - x / 2) - d2) : 0 <= p.indexOf("column") || "error" === p && !n.axisSwapped ? e.lineTo(q + G / 2 - ("horizontal" === k2 ? 0 : x / 2), l + ("vertical" === k2 ? (l - m < n.point.y ? 0 : -m) + d2 : (l - x / 2 < n.point.y ? m : 0) - x / 2)) : e.lineTo(q + G / 2 - ("horizontal" === k2 ? 0 : x / 2), l + ("vertical" === k2 ? l - m < n.point.y ? 0 : -m : (l - x / 2 < n.point.y ? m : 0) - x / 2)), e.stroke());
        }
      }
      e = {
        source: e,
        dest: this.plotArea.ctx,
        animationCallback: w.fadeInAnimation,
        easingFunction: w.easing.easeInQuad,
        animationBase: 0,
        startTimePercent: 0.7
      };
      for (a = 0; a < this._indexLabels.length; a++) n = this._indexLabels[a], qa = sa("indexLabelBackgroundColor", n.dataPoint, n.dataSeries), n.dataSeries.indexLabelBackgroundColor = f(qa) ? s ? "transparent" : null : qa;
      return e;
    };
    u2.prototype.renderLine = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = this._eventManager.ghostCtx;
        b.save();
        var g = this.plotArea;
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        for (var h = [], f2, d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
          var G = a.dataSeriesIndexes[d2], m = this.data[G];
          b.lineWidth = m.lineThickness;
          var n = m.dataPoints, p = "solid";
          if (b.setLineDash) {
            var q = N(m.nullDataLineDashType, m.lineThickness), p = m.lineDashType, l = N(p, m.lineThickness);
            b.setLineDash(l);
          }
          var x = m.id;
          this._eventManager.objectMap[x] = { objectType: "dataSeries", dataSeriesIndex: G };
          x = O(x);
          c.strokeStyle = x;
          c.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness, 4) : 0;
          var x = m._colorSet, qa = x = m.lineColor = m.options.lineColor ? m.options.lineColor : x[0];
          b.strokeStyle = x;
          var ga = true, v = 0, z, k2;
          b.beginPath();
          if (0 < n.length) {
            for (var t2 = false, v = 0; v < n.length; v++) if (z = n[v].x.getTime ? n[v].x.getTime() : n[v].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !t2))) if ("number" !== typeof n[v].y) 0 < v && !(m.connectNullData || t2 || ga) && (b.stroke(), s && c.stroke()), t2 = true;
            else {
              z = a.axisX.convertValueToPixel(z);
              k2 = a.axisY.convertValueToPixel(n[v].y);
              var u3 = m.dataPointIds[v];
              this._eventManager.objectMap[u3] = {
                id: u3,
                objectType: "dataPoint",
                dataSeriesIndex: G,
                dataPointIndex: v,
                x1: z,
                y1: k2
              };
              ga || t2 ? (!ga && m.connectNullData ? (b.setLineDash && (m.options.nullDataLineDashType || p === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(f2.x, f2.y), p = m.nullDataLineDashType, b.setLineDash(q)), b.lineTo(z, k2), s && c.lineTo(z, k2)) : (b.beginPath(), b.moveTo(z, k2), s && (c.beginPath(), c.moveTo(z, k2))), t2 = ga = false) : (b.lineTo(z, k2), s && c.lineTo(z, k2), 0 == v % 500 && (b.stroke(), b.beginPath(), b.moveTo(z, k2), s && (c.stroke(), c.beginPath(), c.moveTo(z, k2))));
              f2 = { x: z, y: k2 };
              v < n.length - 1 && (qa !== (n[v].lineColor || x) || p !== (n[v].lineDashType || m.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(z, k2), qa = n[v].lineColor || x, b.strokeStyle = qa, b.setLineDash && (n[v].lineDashType ? (p = n[v].lineDashType, b.setLineDash(N(p, m.lineThickness))) : (p = m.lineDashType, b.setLineDash(l))));
              if (0 < n[v].markerSize || 0 < m.markerSize) {
                var C = m.getMarkerProperties(v, z, k2, b);
                h.push(C);
                u3 = O(u3);
                s && h.push({ x: z, y: k2, ctx: c, type: C.type, size: C.size, color: u3, borderColor: u3, borderThickness: C.borderThickness });
              }
              (n[v].indexLabel || m.indexLabel || n[v].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: n[v], dataSeries: m, point: { x: z, y: k2 }, direction: 0 > n[v].y === a.axisY.reversed ? 1 : -1, color: x });
            }
            b.stroke();
            s && c.stroke();
          }
        }
        r.drawMarkers(h);
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), c.beginPath());
        b.restore();
        b.beginPath();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderStepLine = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = this._eventManager.ghostCtx;
        b.save();
        var g = this.plotArea;
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        for (var h = [], f2, d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
          var G = a.dataSeriesIndexes[d2], m = this.data[G];
          b.lineWidth = m.lineThickness;
          var n = m.dataPoints, p = "solid";
          if (b.setLineDash) {
            var q = N(m.nullDataLineDashType, m.lineThickness), p = m.lineDashType, l = N(p, m.lineThickness);
            b.setLineDash(l);
          }
          var x = m.id;
          this._eventManager.objectMap[x] = { objectType: "dataSeries", dataSeriesIndex: G };
          x = O(x);
          c.strokeStyle = x;
          c.lineWidth = 0 < m.lineThickness ? Math.max(
            m.lineThickness,
            4
          ) : 0;
          var x = m._colorSet, k2 = x = m.lineColor = m.options.lineColor ? m.options.lineColor : x[0];
          b.strokeStyle = x;
          var ga = true, v = 0, z, t2;
          b.beginPath();
          if (0 < n.length) {
            for (var u3 = false, v = 0; v < n.length; v++) if (z = n[v].getTime ? n[v].x.getTime() : n[v].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !u3))) if ("number" !== typeof n[v].y) 0 < v && !(m.connectNullData || u3 || ga) && (b.stroke(), s && c.stroke()), u3 = true;
            else {
              var D = t2;
              z = a.axisX.convertValueToPixel(z);
              t2 = a.axisY.convertValueToPixel(n[v].y);
              var C = m.dataPointIds[v];
              this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: G, dataPointIndex: v, x1: z, y1: t2 };
              ga || u3 ? (!ga && m.connectNullData ? (b.setLineDash && (m.options.nullDataLineDashType || p === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(f2.x, f2.y), p = m.nullDataLineDashType, b.setLineDash(q)), b.lineTo(z, D), b.lineTo(z, t2), s && (c.lineTo(z, D), c.lineTo(z, t2))) : (b.beginPath(), b.moveTo(z, t2), s && (c.beginPath(), c.moveTo(z, t2))), u3 = ga = false) : (b.lineTo(z, D), s && c.lineTo(z, D), b.lineTo(z, t2), s && c.lineTo(z, t2), 0 == v % 500 && (b.stroke(), b.beginPath(), b.moveTo(z, t2), s && (c.stroke(), c.beginPath(), c.moveTo(z, t2))));
              f2 = { x: z, y: t2 };
              v < n.length - 1 && (k2 !== (n[v].lineColor || x) || p !== (n[v].lineDashType || m.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(z, t2), k2 = n[v].lineColor || x, b.strokeStyle = k2, b.setLineDash && (n[v].lineDashType ? (p = n[v].lineDashType, b.setLineDash(N(p, m.lineThickness))) : (p = m.lineDashType, b.setLineDash(l))));
              if (0 < n[v].markerSize || 0 < m.markerSize) D = m.getMarkerProperties(v, z, t2, b), h.push(D), C = O(C), s && h.push({ x: z, y: t2, ctx: c, type: D.type, size: D.size, color: C, borderColor: C, borderThickness: D.borderThickness });
              (n[v].indexLabel || m.indexLabel || n[v].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: n[v], dataSeries: m, point: { x: z, y: t2 }, direction: 0 > n[v].y === a.axisY.reversed ? 1 : -1, color: x });
            }
            b.stroke();
            s && c.stroke();
          }
        }
        r.drawMarkers(h);
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), c.beginPath());
        b.restore();
        b.beginPath();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderSpline = function(a) {
      function e(a2) {
        a2 = F2(a2, 2);
        if (0 < a2.length) {
          c.beginPath();
          s && g.beginPath();
          c.moveTo(a2[0].x, a2[0].y);
          a2[0].newStrokeStyle && (c.strokeStyle = a2[0].newStrokeStyle);
          a2[0].newLineDashArray && c.setLineDash(a2[0].newLineDashArray);
          s && g.moveTo(a2[0].x, a2[0].y);
          for (var b2 = 0; b2 < a2.length - 3; b2 += 3) if (c.bezierCurveTo(a2[b2 + 1].x, a2[b2 + 1].y, a2[b2 + 2].x, a2[b2 + 2].y, a2[b2 + 3].x, a2[b2 + 3].y), s && g.bezierCurveTo(a2[b2 + 1].x, a2[b2 + 1].y, a2[b2 + 2].x, a2[b2 + 2].y, a2[b2 + 3].x, a2[b2 + 3].y), 0 < b2 && 0 === b2 % 3e3 || a2[b2 + 3].newStrokeStyle || a2[b2 + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(
            a2[b2 + 3].x,
            a2[b2 + 3].y
          ), a2[b2 + 3].newStrokeStyle && (c.strokeStyle = a2[b2 + 3].newStrokeStyle), a2[b2 + 3].newLineDashArray && c.setLineDash(a2[b2 + 3].newLineDashArray), s && (g.stroke(), g.beginPath(), g.moveTo(a2[b2 + 3].x, a2[b2 + 3].y));
          c.stroke();
          s && g.stroke();
        }
      }
      var b = a.targetCanvasCtx || this.plotArea.ctx, c = s ? this._preRenderCtx : b;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx;
        c.save();
        var h = this.plotArea;
        c.beginPath();
        c.rect(h.x1, h.y1, h.width, h.height);
        c.clip();
        for (var f2 = [], d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
          var G = a.dataSeriesIndexes[d2], m = this.data[G];
          c.lineWidth = m.lineThickness;
          var n = m.dataPoints, p = "solid";
          if (c.setLineDash) {
            var q = N(m.nullDataLineDashType, m.lineThickness), p = m.lineDashType, l = N(p, m.lineThickness);
            c.setLineDash(l);
          }
          var x = m.id;
          this._eventManager.objectMap[x] = { objectType: "dataSeries", dataSeriesIndex: G };
          x = O(x);
          g.strokeStyle = x;
          g.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness, 4) : 0;
          var x = m._colorSet, k2 = x = m.lineColor = m.options.lineColor ? m.options.lineColor : x[0];
          c.strokeStyle = x;
          var ga = 0, v, z, t2 = [];
          c.beginPath();
          if (0 < n.length) {
            for (z = false, ga = 0; ga < n.length; ga++) if (v = n[ga].getTime ? n[ga].x.getTime() : n[ga].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !z))) if ("number" !== typeof n[ga].y) 0 < ga && !z && (m.connectNullData ? c.setLineDash && (0 < t2.length && (m.options.nullDataLineDashType || !n[ga - 1].lineDashType)) && (t2[t2.length - 1].newLineDashArray = q, p = m.nullDataLineDashType) : (e(t2), t2 = [])), z = true;
            else {
              v = a.axisX.convertValueToPixel(v);
              z = a.axisY.convertValueToPixel(n[ga].y);
              var u3 = m.dataPointIds[ga];
              this._eventManager.objectMap[u3] = { id: u3, objectType: "dataPoint", dataSeriesIndex: G, dataPointIndex: ga, x1: v, y1: z };
              t2[t2.length] = { x: v, y: z };
              ga < n.length - 1 && (k2 !== (n[ga].lineColor || x) || p !== (n[ga].lineDashType || m.lineDashType)) && (k2 = n[ga].lineColor || x, t2[t2.length - 1].newStrokeStyle = k2, c.setLineDash && (n[ga].lineDashType ? (p = n[ga].lineDashType, t2[t2.length - 1].newLineDashArray = N(p, m.lineThickness)) : (p = m.lineDashType, t2[t2.length - 1].newLineDashArray = l)));
              if (0 < n[ga].markerSize || 0 < m.markerSize) {
                var D = m.getMarkerProperties(
                  ga,
                  v,
                  z,
                  c
                );
                f2.push(D);
                u3 = O(u3);
                s && f2.push({ x: v, y: z, ctx: g, type: D.type, size: D.size, color: u3, borderColor: u3, borderThickness: D.borderThickness });
              }
              (n[ga].indexLabel || m.indexLabel || n[ga].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: n[ga], dataSeries: m, point: { x: v, y: z }, direction: 0 > n[ga].y === a.axisY.reversed ? 1 : -1, color: x });
              z = false;
            }
          }
          e(t2);
        }
        r.drawMarkers(f2);
        s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), g.beginPath());
        c.restore();
        c.beginPath();
        return { source: b, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderColumn = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = 0, f2, d2, G, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff;
        isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
        p = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
        this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
        p < h && (p = h);
        p > n && (p = n);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
        for (n = 0; n < a.dataSeriesIndexes.length; n++) {
          var q = a.dataSeriesIndexes[n], l = this.data[q], x = l.dataPoints;
          if (0 < x.length) {
            for (var k2 = 5 < p && l.bevelEnabled ? true : false, h = 0; h < x.length; h++) if (x[h].getTime ? G = x[h].x.getTime() : G = x[h].x, !(G < a.axisX.dataInfo.viewPortMin || G > a.axisX.dataInfo.viewPortMax) && "number" === typeof x[h].y) {
              f2 = a.axisX.convertValueToPixel(G);
              d2 = a.axisY.convertValueToPixel(x[h].y);
              f2 = a.axisX.reversed ? f2 + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : f2 - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
              var r2 = a.axisX.reversed ? f2 - p << 0 : f2 + p << 0, v;
              0 <= x[h].y ? v = m : (v = d2, d2 = m);
              d2 > v && (c = d2, d2 = v, v = c);
              c = x[h].color ? x[h].color : l._colorSet[h % l._colorSet.length];
              fa(b, f2, d2, r2, v, c, 0, null, k2 && 0 <= x[h].y, 0 > x[h].y && k2, false, false, l.fillOpacity);
              c = l.dataPointIds[h];
              this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: f2, y1: d2, x2: r2, y2: v };
              c = O(c);
              s && fa(this._eventManager.ghostCtx, f2, d2, r2, v, c, 0, null, false, false, false, false);
              (x[h].indexLabel || l.indexLabel || x[h].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "column", dataPoint: x[h], dataSeries: l, point: { x: f2 + (r2 - f2) / 2, y: 0 > x[h].y === a.axisY.reversed ? d2 : v }, direction: 0 > x[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: f2, y1: Math.min(d2, v), x2: r2, y2: Math.max(d2, v) }, color: c });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: e,
          dest: this.plotArea.ctx,
          animationCallback: w.yScaleAnimation,
          easingFunction: w.easing.easeOutQuart,
          animationBase: m < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : m > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : m
        };
      }
    };
    u2.prototype.renderStackedColumn = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = [], f2 = [], d2 = [], G = [], m = 0, n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
        n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
        var l = a.axisX.dataInfo.minDiff;
        isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
        l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
        this.dataPointMaxWidth && m > n && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && n < m) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
        l < m && (l = m);
        l > n && (l = n);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
        for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
          var k2 = a.dataSeriesIndexes[x], r2 = this.data[k2], v = r2.dataPoints;
          if (0 < v.length) {
            var z = 5 < l && r2.bevelEnabled ? true : false;
            b.strokeStyle = "#4572A7 ";
            for (m = 0; m < v.length; m++) if (c = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof v[m].y) {
              n = a.axisX.convertValueToPixel(c);
              var t2 = n - a.plotType.plotUnits.length * l / 2 + a.index * l << 0, u3 = t2 + l << 0, D;
              if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) d2[c] = v[m].y + (d2[c] ? d2[c] : 0), 0 < d2[c] && (p = a.axisY.convertValueToPixel(d2[c]), D = "undefined" !== typeof h[c] ? h[c] : q, h[c] = p);
              else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) G[c] = v[m].y + (G[c] ? G[c] : 0), D = a.axisY.convertValueToPixel(G[c]), p = "undefined" !== typeof f2[c] ? f2[c] : q, f2[c] = D;
              else if (p = a.axisY.convertValueToPixel(v[m].y), 0 <= v[m].y) {
                var C = "undefined" !== typeof h[c] ? h[c] : 0;
                p -= C;
                D = q - C;
                h[c] = C + (D - p);
              } else C = f2[c] ? f2[c] : 0, D = p + C, p = q + C, f2[c] = C + (D - p);
              c = v[m].color ? v[m].color : r2._colorSet[m % r2._colorSet.length];
              fa(b, t2, p, u3, D, c, 0, null, z && 0 <= v[m].y, 0 > v[m].y && z, false, false, r2.fillOpacity);
              c = r2.dataPointIds[m];
              this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: k2, dataPointIndex: m, x1: t2, y1: p, x2: u3, y2: D };
              c = O(c);
              s && fa(this._eventManager.ghostCtx, t2, p, u3, D, c, 0, null, false, false, false, false);
              (v[m].indexLabel || r2.indexLabel || v[m].indexLabelFormatter || r2.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: v[m], dataSeries: r2, point: { x: n, y: 0 <= v[m].y ? p : D }, direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1, bounds: { x1: t2, y1: Math.min(p, D), x2: u3, y2: Math.max(p, D) }, color: c });
            }
          }
        }
        s && (e.drawImage(
          this._preRenderCanvas,
          0,
          0,
          this.width,
          this.height
        ), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return {
          source: e,
          dest: this.plotArea.ctx,
          animationCallback: w.yScaleAnimation,
          easingFunction: w.easing.easeOutQuart,
          animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
        };
      }
    };
    u2.prototype.renderStackedColumn100 = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = [], f2 = [], d2 = [], G = [], m = 0, n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
        n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
        var l = a.axisX.dataInfo.minDiff;
        isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
        l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
        this.dataPointMaxWidth && m > n && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && n < m) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
        l < m && (l = m);
        l > n && (l = n);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
        for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
          var r2 = a.dataSeriesIndexes[x], k2 = this.data[r2], v = k2.dataPoints;
          if (0 < v.length) {
            for (var z = 5 < l && k2.bevelEnabled ? true : false, m = 0; m < v.length; m++) if (c = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof v[m].y) {
              n = a.axisX.convertValueToPixel(c);
              p = 0 !== a.dataPointYSums[c] ? 100 * (v[m].y / a.dataPointYSums[c]) : 0;
              var t2 = n - a.plotType.plotUnits.length * l / 2 + a.index * l << 0, u3 = t2 + l << 0, D;
              if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) {
                d2[c] = p + ("undefined" !== typeof d2[c] ? d2[c] : 0);
                if (0 >= d2[c]) continue;
                p = a.axisY.convertValueToPixel(d2[c]);
                D = h[c] ? h[c] : q;
                h[c] = p;
              } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) G[c] = p + ("undefined" !== typeof G[c] ? G[c] : 0), D = a.axisY.convertValueToPixel(G[c]), p = f2[c] ? f2[c] : q, f2[c] = D;
              else if (p = a.axisY.convertValueToPixel(p), 0 <= v[m].y) {
                var C = "undefined" !== typeof h[c] ? h[c] : 0;
                p -= C;
                D = q - C;
                a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.y1 - p) && (p = g.y1);
                h[c] = C + (D - p);
              } else C = "undefined" !== typeof f2[c] ? f2[c] : 0, D = p + C, p = q + C, a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.y2 - D) && (D = g.y2), f2[c] = C + (D - p);
              c = v[m].color ? v[m].color : k2._colorSet[m % k2._colorSet.length];
              fa(b, t2, p, u3, D, c, 0, null, z && 0 <= v[m].y, 0 > v[m].y && z, false, false, k2.fillOpacity);
              c = k2.dataPointIds[m];
              this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: r2, dataPointIndex: m, x1: t2, y1: p, x2: u3, y2: D };
              c = O(c);
              s && fa(this._eventManager.ghostCtx, t2, p, u3, D, c, 0, null, false, false, false, false);
              (v[m].indexLabel || k2.indexLabel || v[m].indexLabelFormatter || k2.indexLabelFormatter) && this._indexLabels.push({
                chartType: "stackedColumn100",
                dataPoint: v[m],
                dataSeries: k2,
                point: { x: n, y: 0 <= v[m].y ? p : D },
                direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1,
                bounds: { x1: t2, y1: Math.min(p, D), x2: u3, y2: Math.max(p, D) },
                color: c
              });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.yScaleAnimation, easingFunction: w.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q };
      }
    };
    u2.prototype.renderBar = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = 0, f2, d2, G, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff;
        isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
        p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
        this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
        p < h && (p = h);
        p > n && (p = n);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
          g.x1,
          g.y1,
          g.width,
          g.height
        ), this._eventManager.ghostCtx.clip());
        for (n = 0; n < a.dataSeriesIndexes.length; n++) {
          var q = a.dataSeriesIndexes[n], l = this.data[q], x = l.dataPoints;
          if (0 < x.length) {
            var k2 = 5 < p && l.bevelEnabled ? true : false;
            b.strokeStyle = "#4572A7 ";
            for (h = 0; h < x.length; h++) if (x[h].getTime ? G = x[h].x.getTime() : G = x[h].x, !(G < a.axisX.dataInfo.viewPortMin || G > a.axisX.dataInfo.viewPortMax) && "number" === typeof x[h].y) {
              d2 = a.axisX.convertValueToPixel(G);
              f2 = a.axisY.convertValueToPixel(x[h].y);
              d2 = a.axisX.reversed ? d2 + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : d2 - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
              var r2 = a.axisX.reversed ? d2 - p << 0 : d2 + p << 0, v;
              0 <= x[h].y ? v = m : (v = f2, f2 = m);
              c = x[h].color ? x[h].color : l._colorSet[h % l._colorSet.length];
              fa(b, v, d2, f2, r2, c, 0, null, k2, false, false, false, l.fillOpacity);
              c = l.dataPointIds[h];
              this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: v, y1: d2, x2: f2, y2: r2 };
              c = O(c);
              s && fa(this._eventManager.ghostCtx, v, d2, f2, r2, c, 0, null, false, false, false, false);
              (x[h].indexLabel || l.indexLabel || x[h].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: x[h], dataSeries: l, point: { x: 0 <= x[h].y ? f2 : v, y: d2 + (r2 - d2) / 2 }, direction: 0 > x[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(v, f2), y1: d2, x2: Math.max(v, f2), y2: r2 }, color: c });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(
          a.axisY.maskCanvas,
          0,
          0,
          this.width,
          this.height
        ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.xScaleAnimation, easingFunction: w.easing.easeOutQuart, animationBase: m < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : m > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : m };
      }
    };
    u2.prototype.renderStackedBar = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = [], f2 = [], d2 = [], G = [], m = 0, n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
        p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
        var l = a.axisX.dataInfo.minDiff;
        isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
        l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
        this.dataPointMaxWidth && m > p && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && p < m) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
        l < m && (l = m);
        l > p && (l = p);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
        for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
          var r2 = a.dataSeriesIndexes[x], k2 = this.data[r2], v = k2.dataPoints;
          if (0 < v.length) {
            var z = 5 < l && k2.bevelEnabled ? true : false;
            b.strokeStyle = "#4572A7 ";
            for (m = 0; m < v.length; m++) if (c = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof v[m].y) {
              p = a.axisX.convertValueToPixel(c);
              var t2 = p - a.plotType.plotUnits.length * l / 2 + a.index * l << 0, u3 = t2 + l << 0, D;
              if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) d2[c] = v[m].y + (d2[c] ? d2[c] : 0), 0 < d2[c] && (D = h[c] ? h[c] : q, h[c] = n = a.axisY.convertValueToPixel(d2[c]));
              else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) G[c] = v[m].y + (G[c] ? G[c] : 0), n = f2[c] ? f2[c] : q, f2[c] = D = a.axisY.convertValueToPixel(G[c]);
              else if (n = a.axisY.convertValueToPixel(v[m].y), 0 <= v[m].y) {
                var C = h[c] ? h[c] : 0;
                D = q + C;
                n += C;
                h[c] = C + (n - D);
              } else C = f2[c] ? f2[c] : 0, D = n - C, n = q - C, f2[c] = C + (n - D);
              c = v[m].color ? v[m].color : k2._colorSet[m % k2._colorSet.length];
              fa(b, D, t2, n, u3, c, 0, null, z, false, false, false, k2.fillOpacity);
              c = k2.dataPointIds[m];
              this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: r2, dataPointIndex: m, x1: D, y1: t2, x2: n, y2: u3 };
              c = O(c);
              s && fa(this._eventManager.ghostCtx, D, t2, n, u3, c, 0, null, false, false, false, false);
              (v[m].indexLabel || k2.indexLabel || v[m].indexLabelFormatter || k2.indexLabelFormatter) && this._indexLabels.push({
                chartType: "stackedBar",
                dataPoint: v[m],
                dataSeries: k2,
                point: { x: 0 <= v[m].y ? n : D, y: p },
                direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1,
                bounds: { x1: Math.min(D, n), y1: t2, x2: Math.max(D, n), y2: u3 },
                color: c
              });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
          this._preRenderCanvas,
          0,
          0,
          this.width,
          this.height
        ), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.xScaleAnimation, easingFunction: w.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q };
      }
    };
    u2.prototype.renderStackedBar100 = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = [], f2 = [], d2 = [], G = [], m = 0, n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
        p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
        var l = a.axisX.dataInfo.minDiff;
        isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
        l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
        this.dataPointMaxWidth && m > p && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && p < m) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
        l < m && (l = m);
        l > p && (l = p);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
          g.x1,
          g.y1,
          g.width,
          g.height
        ), this._eventManager.ghostCtx.clip());
        for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
          var k2 = a.dataSeriesIndexes[x], r2 = this.data[k2], v = r2.dataPoints;
          if (0 < v.length) {
            var z = 5 < l && r2.bevelEnabled ? true : false;
            b.strokeStyle = "#4572A7 ";
            for (m = 0; m < v.length; m++) if (c = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof v[m].y) {
              p = a.axisX.convertValueToPixel(c);
              var t2;
              t2 = 0 !== a.dataPointYSums[c] ? 100 * (v[m].y / a.dataPointYSums[c]) : 0;
              var u3 = p - a.plotType.plotUnits.length * l / 2 + a.index * l << 0, D = u3 + l << 0;
              if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) {
                d2[c] = t2 + (d2[c] ? d2[c] : 0);
                if (0 >= d2[c]) continue;
                t2 = h[c] ? h[c] : q;
                h[c] = n = a.axisY.convertValueToPixel(d2[c]);
              } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) G[c] = t2 + (G[c] ? G[c] : 0), n = f2[c] ? f2[c] : q, f2[c] = t2 = a.axisY.convertValueToPixel(G[c]);
              else if (n = a.axisY.convertValueToPixel(t2), 0 <= v[m].y) {
                var C = h[c] ? h[c] : 0;
                t2 = q + C;
                n += C;
                a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.x2 - n) && (n = g.x2);
                h[c] = C + (n - t2);
              } else C = f2[c] ? f2[c] : 0, t2 = n - C, n = q - C, a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.x1 - t2) && (t2 = g.x1), f2[c] = C + (n - t2);
              c = v[m].color ? v[m].color : r2._colorSet[m % r2._colorSet.length];
              fa(b, t2, u3, n, D, c, 0, null, z, false, false, false, r2.fillOpacity);
              c = r2.dataPointIds[m];
              this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: k2, dataPointIndex: m, x1: t2, y1: u3, x2: n, y2: D };
              c = O(c);
              s && fa(this._eventManager.ghostCtx, t2, u3, n, D, c, 0, null, false, false, false, false);
              (v[m].indexLabel || r2.indexLabel || v[m].indexLabelFormatter || r2.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: v[m], dataSeries: r2, point: { x: 0 <= v[m].y ? n : t2, y: p }, direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(t2, n), y1: u3, x2: Math.max(t2, n), y2: D }, color: c });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(
          a.axisY.maskCanvas,
          0,
          0,
          this.width,
          this.height
        ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.xScaleAnimation, easingFunction: w.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q };
      }
    };
    u2.prototype.renderArea = function(a) {
      var e, b;
      function c() {
        D && (0 < l.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? ca = u3 : 0 > a.axisY.viewportMaximum ? ca = d2.y1 : 0 < a.axisY.viewportMinimum && (ca = u3), h.lineTo(t2, ca), h.lineTo(D.x, ca), h.closePath(), h.globalAlpha = l.fillOpacity, h.fill(), h.globalAlpha = 1, s && (f2.lineTo(t2, ca), f2.lineTo(D.x, ca), f2.closePath(), f2.fill()), h.beginPath(), h.moveTo(t2, v), f2.beginPath(), f2.moveTo(t2, v), D = { x: t2, y: v });
      }
      var g = a.targetCanvasCtx || this.plotArea.ctx, h = s ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var f2 = this._eventManager.ghostCtx, d2 = a.axisY.lineCoordinates, G = [], m = this.plotArea, n;
        h.save();
        s && f2.save();
        h.beginPath();
        h.rect(m.x1, m.y1, m.width, m.height);
        h.clip();
        s && (f2.beginPath(), f2.rect(m.x1, m.y1, m.width, m.height), f2.clip());
        for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
          var q = a.dataSeriesIndexes[p], l = this.data[q], x = l.dataPoints, G = l.id;
          this._eventManager.objectMap[G] = { objectType: "dataSeries", dataSeriesIndex: q };
          G = O(G);
          f2.fillStyle = G;
          G = [];
          e = true;
          var k2 = 0, t2, v, z, u3 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), ca, D = null;
          if (0 < x.length) {
            var C = l._colorSet[k2 % l._colorSet.length], y2 = l.lineColor = l.options.lineColor || C, A2 = y2;
            h.fillStyle = C;
            h.strokeStyle = y2;
            h.lineWidth = l.lineThickness;
            b = "solid";
            if (h.setLineDash) {
              var R = N(l.nullDataLineDashType, l.lineThickness);
              b = l.lineDashType;
              var da = N(b, l.lineThickness);
              h.setLineDash(da);
            }
            for (var ja = true; k2 < x.length; k2++) if (z = x[k2].x.getTime ? x[k2].x.getTime() : x[k2].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !ja))) if ("number" !== typeof x[k2].y) l.connectNullData || (ja || e) || c(), ja = true;
            else {
              t2 = a.axisX.convertValueToPixel(z);
              v = a.axisY.convertValueToPixel(x[k2].y);
              e || ja ? (!e && l.connectNullData ? (h.setLineDash && (l.options.nullDataLineDashType || b === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (e = t2, b = v, t2 = n.x, v = n.y, c(), h.moveTo(n.x, n.y), t2 = e, v = b, D = n, b = l.nullDataLineDashType, h.setLineDash(R)), h.lineTo(t2, v), s && f2.lineTo(t2, v)) : (h.beginPath(), h.moveTo(t2, v), s && (f2.beginPath(), f2.moveTo(t2, v)), D = { x: t2, y: v }), ja = e = false) : (h.lineTo(t2, v), s && f2.lineTo(t2, v), 0 == k2 % 250 && c());
              n = {
                x: t2,
                y: v
              };
              k2 < x.length - 1 && (A2 !== (x[k2].lineColor || y2) || b !== (x[k2].lineDashType || l.lineDashType)) && (c(), A2 = x[k2].lineColor || y2, h.strokeStyle = A2, h.setLineDash && (x[k2].lineDashType ? (b = x[k2].lineDashType, h.setLineDash(N(b, l.lineThickness))) : (b = l.lineDashType, h.setLineDash(da))));
              var ba = l.dataPointIds[k2];
              this._eventManager.objectMap[ba] = { id: ba, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: k2, x1: t2, y1: v };
              0 !== x[k2].markerSize && (0 < x[k2].markerSize || 0 < l.markerSize) && (z = l.getMarkerProperties(k2, t2, v, h), G.push(z), ba = O(ba), s && G.push({ x: t2, y: v, ctx: f2, type: z.type, size: z.size, color: ba, borderColor: ba, borderThickness: z.borderThickness }));
              (x[k2].indexLabel || l.indexLabel || x[k2].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: x[k2], dataSeries: l, point: { x: t2, y: v }, direction: 0 > x[k2].y === a.axisY.reversed ? 1 : -1, color: C });
            }
            c();
            r.drawMarkers(G);
          }
        }
        s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(
          a.axisX.maskCanvas,
          0,
          0,
          this.width,
          this.height
        ), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
        h.restore();
        return { source: g, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderSplineArea = function(a) {
      function e() {
        var b2 = F2(z, 2);
        if (0 < b2.length) {
          if (0 < n.lineThickness) {
            c.beginPath();
            c.moveTo(b2[0].x, b2[0].y);
            b2[0].newStrokeStyle && (c.strokeStyle = b2[0].newStrokeStyle);
            b2[0].newLineDashArray && c.setLineDash(b2[0].newLineDashArray);
            for (var e2 = 0; e2 < b2.length - 3; e2 += 3) if (c.bezierCurveTo(b2[e2 + 1].x, b2[e2 + 1].y, b2[e2 + 2].x, b2[e2 + 2].y, b2[e2 + 3].x, b2[e2 + 3].y), s && g.bezierCurveTo(b2[e2 + 1].x, b2[e2 + 1].y, b2[e2 + 2].x, b2[e2 + 2].y, b2[e2 + 3].x, b2[e2 + 3].y), b2[e2 + 3].newStrokeStyle || b2[e2 + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(b2[e2 + 3].x, b2[e2 + 3].y), b2[e2 + 3].newStrokeStyle && (c.strokeStyle = b2[e2 + 3].newStrokeStyle), b2[e2 + 3].newLineDashArray && c.setLineDash(b2[e2 + 3].newLineDashArray);
            c.stroke();
          }
          c.beginPath();
          c.moveTo(b2[0].x, b2[0].y);
          s && (g.beginPath(), g.moveTo(b2[0].x, b2[0].y));
          for (e2 = 0; e2 < b2.length - 3; e2 += 3) c.bezierCurveTo(b2[e2 + 1].x, b2[e2 + 1].y, b2[e2 + 2].x, b2[e2 + 2].y, b2[e2 + 3].x, b2[e2 + 3].y), s && g.bezierCurveTo(b2[e2 + 1].x, b2[e2 + 1].y, b2[e2 + 2].x, b2[e2 + 2].y, b2[e2 + 3].x, b2[e2 + 3].y);
          a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t2 = k2 : 0 > a.axisY.viewportMaximum ? t2 = h.y1 : 0 < a.axisY.viewportMinimum && (t2 = k2);
          v = { x: b2[0].x, y: b2[0].y };
          c.lineTo(b2[b2.length - 1].x, t2);
          c.lineTo(v.x, t2);
          c.closePath();
          c.globalAlpha = n.fillOpacity;
          c.fill();
          c.globalAlpha = 1;
          s && (g.lineTo(b2[b2.length - 1].x, t2), g.lineTo(v.x, t2), g.closePath(), g.fill());
        }
      }
      var b = a.targetCanvasCtx || this.plotArea.ctx, c = s ? this._preRenderCtx : b;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx, h = a.axisY.lineCoordinates, f2 = [], d2 = this.plotArea;
        c.save();
        s && g.save();
        c.beginPath();
        c.rect(d2.x1, d2.y1, d2.width, d2.height);
        c.clip();
        s && (g.beginPath(), g.rect(d2.x1, d2.y1, d2.width, d2.height), g.clip());
        for (var G = 0; G < a.dataSeriesIndexes.length; G++) {
          var m = a.dataSeriesIndexes[G], n = this.data[m], p = n.dataPoints, f2 = n.id;
          this._eventManager.objectMap[f2] = { objectType: "dataSeries", dataSeriesIndex: m };
          f2 = O(f2);
          g.fillStyle = f2;
          var f2 = [], q = 0, l, x, k2 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), t2, v = null, z = [];
          if (0 < p.length) {
            var u3 = n._colorSet[q % n._colorSet.length], ca = n.lineColor = n.options.lineColor || u3, D = ca;
            c.fillStyle = u3;
            c.strokeStyle = ca;
            c.lineWidth = n.lineThickness;
            var C = "solid";
            if (c.setLineDash) {
              var y2 = N(n.nullDataLineDashType, n.lineThickness), C = n.lineDashType, A2 = N(C, n.lineThickness);
              c.setLineDash(A2);
            }
            for (x = false; q < p.length; q++) if (l = p[q].x.getTime ? p[q].x.getTime() : p[q].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !x))) if ("number" !== typeof p[q].y) 0 < q && !x && (n.connectNullData ? c.setLineDash && (0 < z.length && (n.options.nullDataLineDashType || !p[q - 1].lineDashType)) && (z[z.length - 1].newLineDashArray = y2, C = n.nullDataLineDashType) : (e(), z = [])), x = true;
            else {
              l = a.axisX.convertValueToPixel(l);
              x = a.axisY.convertValueToPixel(p[q].y);
              var R = n.dataPointIds[q];
              this._eventManager.objectMap[R] = { id: R, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: q, x1: l, y1: x };
              z[z.length] = { x: l, y: x };
              q < p.length - 1 && (D !== (p[q].lineColor || ca) || C !== (p[q].lineDashType || n.lineDashType)) && (D = p[q].lineColor || ca, z[z.length - 1].newStrokeStyle = D, c.setLineDash && (p[q].lineDashType ? (C = p[q].lineDashType, z[z.length - 1].newLineDashArray = N(C, n.lineThickness)) : (C = n.lineDashType, z[z.length - 1].newLineDashArray = A2)));
              if (0 !== p[q].markerSize && (0 < p[q].markerSize || 0 < n.markerSize)) {
                var da = n.getMarkerProperties(q, l, x, c);
                f2.push(da);
                R = O(R);
                s && f2.push({ x: l, y: x, ctx: g, type: da.type, size: da.size, color: R, borderColor: R, borderThickness: da.borderThickness });
              }
              (p[q].indexLabel || n.indexLabel || p[q].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({ chartType: "splineArea", dataPoint: p[q], dataSeries: n, point: { x: l, y: x }, direction: 0 > p[q].y === a.axisY.reversed ? 1 : -1, color: u3 });
              x = false;
            }
            e();
            r.drawMarkers(f2);
          }
        }
        s && (b.drawImage(
          this._preRenderCanvas,
          0,
          0,
          this.width,
          this.height
        ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d2.x1, d2.y1, d2.width, d2.height), this._eventManager.ghostCtx.restore());
        c.restore();
        return {
          source: b,
          dest: this.plotArea.ctx,
          animationCallback: w.xClipAnimation,
          easingFunction: w.easing.linear,
          animationBase: 0
        };
      }
    };
    u2.prototype.renderStepArea = function(a) {
      var e, b;
      function c() {
        D && (0 < l.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? ca = u3 : 0 > a.axisY.viewportMaximum ? ca = d2.y1 : 0 < a.axisY.viewportMinimum && (ca = u3), h.lineTo(t2, ca), h.lineTo(D.x, ca), h.closePath(), h.globalAlpha = l.fillOpacity, h.fill(), h.globalAlpha = 1, s && (f2.lineTo(t2, ca), f2.lineTo(D.x, ca), f2.closePath(), f2.fill()), h.beginPath(), h.moveTo(t2, v), f2.beginPath(), f2.moveTo(t2, v), D = { x: t2, y: v });
      }
      var g = a.targetCanvasCtx || this.plotArea.ctx, h = s ? this._preRenderCtx : g;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var f2 = this._eventManager.ghostCtx, d2 = a.axisY.lineCoordinates, G = [], m = this.plotArea, n;
        h.save();
        s && f2.save();
        h.beginPath();
        h.rect(m.x1, m.y1, m.width, m.height);
        h.clip();
        s && (f2.beginPath(), f2.rect(m.x1, m.y1, m.width, m.height), f2.clip());
        for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
          var q = a.dataSeriesIndexes[p], l = this.data[q], x = l.dataPoints, G = l.id;
          this._eventManager.objectMap[G] = { objectType: "dataSeries", dataSeriesIndex: q };
          G = O(G);
          f2.fillStyle = G;
          G = [];
          e = true;
          var k2 = 0, t2, v, z, u3 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), ca, D = null;
          b = false;
          if (0 < x.length) {
            var C = l._colorSet[k2 % l._colorSet.length], y2 = l.lineColor = l.options.lineColor || C, A2 = y2;
            h.fillStyle = C;
            h.strokeStyle = y2;
            h.lineWidth = l.lineThickness;
            var R = "solid";
            if (h.setLineDash) {
              var da = N(l.nullDataLineDashType, l.lineThickness), R = l.lineDashType, B = N(R, l.lineThickness);
              h.setLineDash(B);
            }
            for (; k2 < x.length; k2++) if (z = x[k2].x.getTime ? x[k2].x.getTime() : x[k2].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !b))) {
              var ba = v;
              "number" !== typeof x[k2].y ? (l.connectNullData || (b || e) || c(), b = true) : (t2 = a.axisX.convertValueToPixel(z), v = a.axisY.convertValueToPixel(x[k2].y), e || b ? (!e && l.connectNullData ? (h.setLineDash && (l.options.nullDataLineDashType || R === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (e = t2, b = v, t2 = n.x, v = n.y, c(), h.moveTo(n.x, n.y), t2 = e, v = b, D = n, R = l.nullDataLineDashType, h.setLineDash(da)), h.lineTo(t2, ba), h.lineTo(t2, v), s && (f2.lineTo(t2, ba), f2.lineTo(t2, v))) : (h.beginPath(), h.moveTo(t2, v), s && (f2.beginPath(), f2.moveTo(t2, v)), D = { x: t2, y: v }), b = e = false) : (h.lineTo(t2, ba), s && f2.lineTo(t2, ba), h.lineTo(t2, v), s && f2.lineTo(t2, v), 0 == k2 % 250 && c()), n = { x: t2, y: v }, k2 < x.length - 1 && (A2 !== (x[k2].lineColor || y2) || R !== (x[k2].lineDashType || l.lineDashType)) && (c(), A2 = x[k2].lineColor || y2, h.strokeStyle = A2, h.setLineDash && (x[k2].lineDashType ? (R = x[k2].lineDashType, h.setLineDash(N(R, l.lineThickness))) : (R = l.lineDashType, h.setLineDash(B)))), z = l.dataPointIds[k2], this._eventManager.objectMap[z] = {
                id: z,
                objectType: "dataPoint",
                dataSeriesIndex: q,
                dataPointIndex: k2,
                x1: t2,
                y1: v
              }, 0 !== x[k2].markerSize && (0 < x[k2].markerSize || 0 < l.markerSize) && (ba = l.getMarkerProperties(k2, t2, v, h), G.push(ba), z = O(z), s && G.push({ x: t2, y: v, ctx: f2, type: ba.type, size: ba.size, color: z, borderColor: z, borderThickness: ba.borderThickness })), (x[k2].indexLabel || l.indexLabel || x[k2].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: x[k2], dataSeries: l, point: { x: t2, y: v }, direction: 0 > x[k2].y === a.axisY.reversed ? 1 : -1, color: C }));
            }
            c();
            r.drawMarkers(G);
          }
        }
        s && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
        h.restore();
        return {
          source: g,
          dest: this.plotArea.ctx,
          animationCallback: w.xClipAnimation,
          easingFunction: w.easing.linear,
          animationBase: 0
        };
      }
    };
    u2.prototype.renderStackedArea = function(a) {
      function e() {
        if (!(1 > m.length)) {
          for (0 < C.lineThickness && c.stroke(); 0 < m.length; ) {
            var a2 = m.pop();
            c.lineTo(a2.x, a2.y);
            s && t2.lineTo(a2.x, a2.y);
          }
          c.closePath();
          c.globalAlpha = C.fillOpacity;
          c.fill();
          c.globalAlpha = 1;
          c.beginPath();
          s && (t2.closePath(), t2.fill(), t2.beginPath());
          m = [];
        }
      }
      var b = a.targetCanvasCtx || this.plotArea.ctx, c = s ? this._preRenderCtx : b;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null, h = null, f2 = [], d2 = this.plotArea, G = [], m = [], n = [], p = [], q = 0, l, x, k2 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), t2 = this._eventManager.ghostCtx, v, z, u3;
        s && t2.beginPath();
        c.save();
        s && t2.save();
        c.beginPath();
        c.rect(d2.x1, d2.y1, d2.width, d2.height);
        c.clip();
        s && (t2.beginPath(), t2.rect(d2.x1, d2.y1, d2.width, d2.height), t2.clip());
        for (var g = [], ca = 0; ca < a.dataSeriesIndexes.length; ca++) {
          var D = a.dataSeriesIndexes[ca], C = this.data[D], y2 = C.dataPoints;
          C.dataPointIndexes = [];
          for (q = 0; q < y2.length; q++) D = y2[q].x.getTime ? y2[q].x.getTime() : y2[q].x, C.dataPointIndexes[D] = q, g[D] || (n.push(D), g[D] = true);
          n.sort(Ya);
        }
        for (ca = 0; ca < a.dataSeriesIndexes.length; ca++) {
          D = a.dataSeriesIndexes[ca];
          C = this.data[D];
          y2 = C.dataPoints;
          z = true;
          m = [];
          q = C.id;
          this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: D };
          q = O(q);
          t2.fillStyle = q;
          if (0 < n.length) {
            var g = C._colorSet[0], A2 = C.lineColor = C.options.lineColor || g, R = A2;
            c.fillStyle = g;
            c.strokeStyle = A2;
            c.lineWidth = C.lineThickness;
            u3 = "solid";
            if (c.setLineDash) {
              var da = N(C.nullDataLineDashType, C.lineThickness);
              u3 = C.lineDashType;
              var B = N(u3, C.lineThickness);
              c.setLineDash(B);
            }
            for (var ba = true, q = 0; q < n.length; q++) {
              var h = n[q], la = null, la = 0 <= C.dataPointIndexes[h] ? y2[C.dataPointIndexes[h]] : { x: h, y: null };
              if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !ba))) if ("number" !== typeof la.y) C.connectNullData || (ba || z) || e(), ba = true;
              else {
                l = a.axisX.convertValueToPixel(h);
                var va = G[h] ? G[h] : 0;
                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                  p[h] = la.y + (p[h] ? p[h] : 0);
                  if (0 >= p[h] && a.axisY.logarithmic) continue;
                  x = a.axisY.convertValueToPixel(p[h]);
                } else x = a.axisY.convertValueToPixel(la.y), x -= va;
                m.push({ x: l, y: k2 - va });
                G[h] = k2 - x;
                z || ba ? (!z && C.connectNullData ? (c.setLineDash && (C.options.nullDataLineDashType || u3 === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (z = m.pop(), u3 = m[m.length - 1], e(), c.moveTo(v.x, v.y), m.push(u3), m.push(z), u3 = C.nullDataLineDashType, c.setLineDash(da)), c.lineTo(l, x), s && t2.lineTo(l, x)) : (c.beginPath(), c.moveTo(l, x), s && (t2.beginPath(), t2.moveTo(l, x))), ba = z = false) : (c.lineTo(l, x), s && t2.lineTo(l, x), 0 == q % 250 && (e(), c.moveTo(l, x), s && t2.moveTo(l, x), m.push({ x: l, y: k2 - va })));
                v = { x: l, y: x };
                q < y2.length - 1 && (R !== (y2[q].lineColor || A2) || u3 !== (y2[q].lineDashType || C.lineDashType)) && (e(), c.beginPath(), c.moveTo(l, x), m.push({ x: l, y: k2 - va }), R = y2[q].lineColor || A2, c.strokeStyle = R, c.setLineDash && (y2[q].lineDashType ? (u3 = y2[q].lineDashType, c.setLineDash(N(u3, C.lineThickness))) : (u3 = C.lineDashType, c.setLineDash(B))));
                if (0 <= C.dataPointIndexes[h]) {
                  var pa = C.dataPointIds[C.dataPointIndexes[h]];
                  this._eventManager.objectMap[pa] = {
                    id: pa,
                    objectType: "dataPoint",
                    dataSeriesIndex: D,
                    dataPointIndex: C.dataPointIndexes[h],
                    x1: l,
                    y1: x
                  };
                }
                0 <= C.dataPointIndexes[h] && 0 !== la.markerSize && (0 < la.markerSize || 0 < C.markerSize) && (va = C.getMarkerProperties(C.dataPointIndexes[h], l, x, c), f2.push(va), h = O(pa), s && f2.push({ x: l, y: x, ctx: t2, type: va.type, size: va.size, color: h, borderColor: h, borderThickness: va.borderThickness }));
                (la.indexLabel || C.indexLabel || la.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: la, dataSeries: C, point: { x: l, y: x }, direction: 0 > y2[q].y === a.axisY.reversed ? 1 : -1, color: g });
              }
            }
            e();
            c.moveTo(l, x);
            s && t2.moveTo(l, x);
          }
          delete C.dataPointIndexes;
        }
        r.drawMarkers(f2);
        s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(
          d2.x1,
          d2.y1,
          d2.width,
          d2.height
        ), t2.restore());
        c.restore();
        return { source: b, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderStackedArea100 = function(a) {
      function e() {
        for (0 < C.lineThickness && c.stroke(); 0 < m.length; ) {
          var a2 = m.pop();
          c.lineTo(a2.x, a2.y);
          s && V.lineTo(a2.x, a2.y);
        }
        c.closePath();
        c.globalAlpha = C.fillOpacity;
        c.fill();
        c.globalAlpha = 1;
        c.beginPath();
        s && (V.closePath(), V.fill(), V.beginPath());
        m = [];
      }
      var b = a.targetCanvasCtx || this.plotArea.ctx, c = s ? this._preRenderCtx : b;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null, h = null, f2 = this.plotArea, d2 = [], k2 = [], m = [], n = [], p = [], q = 0, l, x, t2, u3, v, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), V = this._eventManager.ghostCtx;
        c.save();
        s && V.save();
        c.beginPath();
        c.rect(f2.x1, f2.y1, f2.width, f2.height);
        c.clip();
        s && (V.beginPath(), V.rect(f2.x1, f2.y1, f2.width, f2.height), V.clip());
        for (var g = [], ca = 0; ca < a.dataSeriesIndexes.length; ca++) {
          var D = a.dataSeriesIndexes[ca], C = this.data[D], y2 = C.dataPoints;
          C.dataPointIndexes = [];
          for (q = 0; q < y2.length; q++) D = y2[q].x.getTime ? y2[q].x.getTime() : y2[q].x, C.dataPointIndexes[D] = q, g[D] || (n.push(D), g[D] = true);
          n.sort(Ya);
        }
        for (ca = 0; ca < a.dataSeriesIndexes.length; ca++) {
          D = a.dataSeriesIndexes[ca];
          C = this.data[D];
          y2 = C.dataPoints;
          u3 = true;
          g = C.id;
          this._eventManager.objectMap[g] = { objectType: "dataSeries", dataSeriesIndex: D };
          g = O(g);
          V.fillStyle = g;
          m = [];
          if (0 < n.length) {
            var g = C._colorSet[q % C._colorSet.length], A2 = C.lineColor = C.options.lineColor || g, R = A2;
            c.fillStyle = g;
            c.strokeStyle = A2;
            c.lineWidth = C.lineThickness;
            v = "solid";
            if (c.setLineDash) {
              var da = N(C.nullDataLineDashType, C.lineThickness);
              v = C.lineDashType;
              var B = N(v, C.lineThickness);
              c.setLineDash(B);
            }
            for (var ba = true, q = 0; q < n.length; q++) {
              var h = n[q], la = null, la = 0 <= C.dataPointIndexes[h] ? y2[C.dataPointIndexes[h]] : { x: h, y: null };
              if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !ba))) if ("number" !== typeof la.y) C.connectNullData || (ba || u3) || e(), ba = true;
              else {
                var va;
                va = 0 !== a.dataPointYSums[h] ? 100 * (la.y / a.dataPointYSums[h]) : 0;
                l = a.axisX.convertValueToPixel(h);
                var pa = k2[h] ? k2[h] : 0;
                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                  p[h] = va + (p[h] ? p[h] : 0);
                  if (0 >= p[h] && a.axisY.logarithmic) continue;
                  x = a.axisY.convertValueToPixel(p[h]);
                } else x = a.axisY.convertValueToPixel(va), x -= pa;
                m.push({ x: l, y: z - pa });
                k2[h] = z - x;
                u3 || ba ? (!u3 && C.connectNullData ? (c.setLineDash && (C.options.nullDataLineDashType || v === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (u3 = m.pop(), v = m[m.length - 1], e(), c.moveTo(t2.x, t2.y), m.push(v), m.push(u3), v = C.nullDataLineDashType, c.setLineDash(da)), c.lineTo(l, x), s && V.lineTo(l, x)) : (c.beginPath(), c.moveTo(l, x), s && (V.beginPath(), V.moveTo(l, x))), ba = u3 = false) : (c.lineTo(l, x), s && V.lineTo(l, x), 0 == q % 250 && (e(), c.moveTo(l, x), s && V.moveTo(l, x), m.push({ x: l, y: z - pa })));
                t2 = { x: l, y: x };
                q < y2.length - 1 && (R !== (y2[q].lineColor || A2) || v !== (y2[q].lineDashType || C.lineDashType)) && (e(), c.beginPath(), c.moveTo(l, x), m.push({ x: l, y: z - pa }), R = y2[q].lineColor || A2, c.strokeStyle = R, c.setLineDash && (y2[q].lineDashType ? (v = y2[q].lineDashType, c.setLineDash(N(v, C.lineThickness))) : (v = C.lineDashType, c.setLineDash(B))));
                if (0 <= C.dataPointIndexes[h]) {
                  var H = C.dataPointIds[C.dataPointIndexes[h]];
                  this._eventManager.objectMap[H] = { id: H, objectType: "dataPoint", dataSeriesIndex: D, dataPointIndex: C.dataPointIndexes[h], x1: l, y1: x };
                }
                0 <= C.dataPointIndexes[h] && 0 !== la.markerSize && (0 < la.markerSize || 0 < C.markerSize) && (pa = C.getMarkerProperties(q, l, x, c), d2.push(pa), h = O(H), s && d2.push({ x: l, y: x, ctx: V, type: pa.type, size: pa.size, color: h, borderColor: h, borderThickness: pa.borderThickness }));
                (la.indexLabel || C.indexLabel || la.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea100", dataPoint: la, dataSeries: C, point: { x: l, y: x }, direction: 0 > y2[q].y === a.axisY.reversed ? 1 : -1, color: g });
              }
            }
            e();
            c.moveTo(l, x);
            s && V.moveTo(l, x);
          }
          delete C.dataPointIndexes;
        }
        r.drawMarkers(d2);
        s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(
          a.axisY.maskCanvas,
          0,
          0,
          this.width,
          this.height
        ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f2.x1, f2.y1, f2.width, f2.height), V.restore());
        c.restore();
        return { source: b, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderBubble = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = this.plotArea, g = 0, h, f2;
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(c.x1, c.y1, c.width, c.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
        for (var d2 = -Infinity, k2 = Infinity, m = 0; m < a.dataSeriesIndexes.length; m++) for (var n = a.dataSeriesIndexes[m], p = this.data[n], q = p.dataPoints, l = 0, g = 0; g < q.length; g++) h = q[g].getTime ? h = q[g].x.getTime() : h = q[g].x, h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[g].z || (l = q[g].z, l > d2 && (d2 = l), l < k2 && (k2 = l));
        for (var x = 25 * Math.PI, t2 = Math.max(Math.pow(0.25 * Math.min(c.height, c.width) / 2, 2) * Math.PI, x), m = 0; m < a.dataSeriesIndexes.length; m++) if (n = a.dataSeriesIndexes[m], p = this.data[n], q = p.dataPoints, 0 < q.length) {
          for (b.strokeStyle = "#4572A7 ", g = 0; g < q.length; g++) if (h = q[g].getTime ? h = q[g].x.getTime() : h = q[g].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
            h = a.axisX.convertValueToPixel(h);
            f2 = a.axisY.convertValueToPixel(q[g].y);
            var l = q[g].z, u3 = 2 * Math.max(Math.sqrt((d2 === k2 ? t2 / 2 : x + (t2 - x) / (d2 - k2) * (l - k2)) / Math.PI) << 0, 1), l = p.getMarkerProperties(g, b);
            l.size = u3;
            b.globalAlpha = p.fillOpacity;
            r.drawMarker(h, f2, b, l.type, l.size, l.color, l.borderColor, l.borderThickness);
            b.globalAlpha = 1;
            var v = p.dataPointIds[g];
            this._eventManager.objectMap[v] = { id: v, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: g, x1: h, y1: f2, size: u3 };
            u3 = O(v);
            s && r.drawMarker(h, f2, this._eventManager.ghostCtx, l.type, l.size, u3, u3, l.borderThickness);
            (q[g].indexLabel || p.indexLabel || q[g].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({ chartType: "bubble", dataPoint: q[g], dataSeries: p, point: { x: h, y: f2 }, direction: 1, bounds: { x1: h - l.size / 2, y1: f2 - l.size / 2, x2: h + l.size / 2, y2: f2 + l.size / 2 }, color: null });
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    u2.prototype.renderScatter = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = this.plotArea, g = 0, h, f2;
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(c.x1, c.y1, c.width, c.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
        for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
          var k2 = a.dataSeriesIndexes[d2], m = this.data[k2], n = m.dataPoints;
          if (0 < n.length) {
            b.strokeStyle = "#4572A7 ";
            Math.pow(0.3 * Math.min(c.height, c.width) / 2, 2);
            for (var p = 0, q = 0, g = 0; g < n.length; g++) if (h = n[g].getTime ? h = n[g].x.getTime() : h = n[g].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[g].y) {
              h = a.axisX.convertValueToPixel(h);
              f2 = a.axisY.convertValueToPixel(n[g].y);
              var l = m.getMarkerProperties(g, h, f2, b);
              b.globalAlpha = m.fillOpacity;
              r.drawMarker(l.x, l.y, l.ctx, l.type, l.size, l.color, l.borderColor, l.borderThickness);
              b.globalAlpha = 1;
              Math.sqrt((p - h) * (p - h) + (q - f2) * (q - f2)) < Math.min(l.size, 5) && n.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = m.dataPointIds[g], this._eventManager.objectMap[p] = {
                id: p,
                objectType: "dataPoint",
                dataSeriesIndex: k2,
                dataPointIndex: g,
                x1: h,
                y1: f2
              }, p = O(p), s && r.drawMarker(l.x, l.y, this._eventManager.ghostCtx, l.type, l.size, p, p, l.borderThickness), (n[g].indexLabel || m.indexLabel || n[g].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "scatter", dataPoint: n[g], dataSeries: m, point: { x: h, y: f2 }, direction: 1, bounds: { x1: h - l.size / 2, y1: f2 - l.size / 2, x2: h + l.size / 2, y2: f2 + l.size / 2 }, color: null }), p = h, q = f2);
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    u2.prototype.renderCandlestick = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e, c = this._eventManager.ghostCtx;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null, h = null, d2 = this.plotArea, k2 = 0, t2, m, n, p, q, l, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, x = a.axisX.dataInfo.minDiff;
        isFinite(x) || (x = 0.3 * Math.abs(a.axisX.range));
        x = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * d2.width * (a.axisX.logarithmic ? Math.log(x) / Math.log(a.axisX.range) : Math.abs(x) / Math.abs(a.axisX.range)) << 0;
        this.dataPointMaxWidth && g > h && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
        x < g && (x = g);
        x > h && (x = h);
        b.save();
        s && c.save();
        b.beginPath();
        b.rect(d2.x1, d2.y1, d2.width, d2.height);
        b.clip();
        s && (c.beginPath(), c.rect(
          d2.x1,
          d2.y1,
          d2.width,
          d2.height
        ), c.clip());
        for (var r2 = 0; r2 < a.dataSeriesIndexes.length; r2++) {
          var u3 = a.dataSeriesIndexes[r2], v = this.data[u3], z = v.dataPoints;
          if (0 < z.length) {
            for (var V = 5 < x && v.bevelEnabled ? true : false, k2 = 0; k2 < z.length; k2++) if (z[k2].getTime ? l = z[k2].x.getTime() : l = z[k2].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && !f(z[k2].y) && z[k2].y.length && "number" === typeof z[k2].y[0] && "number" === typeof z[k2].y[1] && "number" === typeof z[k2].y[2] && "number" === typeof z[k2].y[3]) {
              t2 = a.axisX.convertValueToPixel(l);
              m = a.axisY.convertValueToPixel(z[k2].y[0]);
              n = a.axisY.convertValueToPixel(z[k2].y[1]);
              p = a.axisY.convertValueToPixel(z[k2].y[2]);
              q = a.axisY.convertValueToPixel(z[k2].y[3]);
              var y2 = t2 - x / 2 << 0, D = y2 + x << 0, h = v.options.fallingColor ? v.fallingColor : v._colorSet[0], g = z[k2].color ? z[k2].color : v._colorSet[0], C = Math.round(Math.max(1, 0.15 * x)), A2 = 0 === C % 2 ? 0 : 0.5, B = v.dataPointIds[k2];
              this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: u3, dataPointIndex: k2, x1: y2, y1: m, x2: D, y2: n, x3: t2, y3: p, x4: t2, y4: q, borderThickness: C, color: g };
              b.strokeStyle = g;
              b.beginPath();
              b.lineWidth = C;
              c.lineWidth = Math.max(C, 4);
              "candlestick" === v.type ? (b.moveTo(t2 - A2, n), b.lineTo(t2 - A2, Math.min(m, q)), b.stroke(), b.moveTo(t2 - A2, Math.max(m, q)), b.lineTo(t2 - A2, p), b.stroke(), fa(b, y2, Math.min(m, q), D, Math.max(m, q), z[k2].y[0] <= z[k2].y[3] ? v.risingColor : h, C, g, V, V, false, false, v.fillOpacity), s && (g = O(B), c.strokeStyle = g, c.moveTo(t2 - A2, n), c.lineTo(t2 - A2, Math.min(m, q)), c.stroke(), c.moveTo(t2 - A2, Math.max(m, q)), c.lineTo(t2 - A2, p), c.stroke(), fa(c, y2, Math.min(m, q), D, Math.max(m, q), g, 0, null, false, false, false, false))) : "ohlc" === v.type && (b.moveTo(t2 - A2, n), b.lineTo(t2 - A2, p), b.stroke(), b.beginPath(), b.moveTo(t2, m), b.lineTo(y2, m), b.stroke(), b.beginPath(), b.moveTo(t2, q), b.lineTo(D, q), b.stroke(), s && (g = O(B), c.strokeStyle = g, c.moveTo(t2 - A2, n), c.lineTo(t2 - A2, p), c.stroke(), c.beginPath(), c.moveTo(t2, m), c.lineTo(y2, m), c.stroke(), c.beginPath(), c.moveTo(t2, q), c.lineTo(D, q), c.stroke()));
              (z[k2].indexLabel || v.indexLabel || z[k2].indexLabelFormatter || v.indexLabelFormatter) && this._indexLabels.push({ chartType: v.type, dataPoint: z[k2], dataSeries: v, point: { x: y2 + (D - y2) / 2, y: a.axisY.reversed ? p : n }, direction: 1, bounds: { x1: y2, y1: Math.min(n, p), x2: D, y2: Math.max(n, p) }, color: g });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d2.x1, d2.y1, d2.width, d2.height), c.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    u2.prototype.renderBoxAndWhisker = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e, c = this._eventManager.ghostCtx;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null, h = this.plotArea, d2 = 0, k2, t2, m, n, p, q, l, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, x = a.axisX.dataInfo.minDiff;
        isFinite(x) || (x = 0.3 * Math.abs(a.axisX.range));
        x = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(x) / Math.log(a.axisX.range) : Math.abs(x) / Math.abs(a.axisX.range)) << 0;
        this.dataPointMaxWidth && g > d2 && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d2));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && d2 < g) && (d2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
        x < g && (x = g);
        x > d2 && (x = d2);
        b.save();
        s && c.save();
        b.beginPath();
        b.rect(h.x1, h.y1, h.width, h.height);
        b.clip();
        s && (c.beginPath(), c.rect(h.x1, h.y1, h.width, h.height), c.clip());
        for (var r2 = false, r2 = !!a.axisY.reversed, u3 = 0; u3 < a.dataSeriesIndexes.length; u3++) {
          var v = a.dataSeriesIndexes[u3], z = this.data[v], V = z.dataPoints;
          if (0 < V.length) {
            for (var y2 = 5 < x && z.bevelEnabled ? true : false, d2 = 0; d2 < V.length; d2++) if (V[d2].getTime ? l = V[d2].x.getTime() : l = V[d2].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && !f(V[d2].y) && V[d2].y.length && "number" === typeof V[d2].y[0] && "number" === typeof V[d2].y[1] && "number" === typeof V[d2].y[2] && "number" === typeof V[d2].y[3] && "number" === typeof V[d2].y[4] && 5 === V[d2].y.length) {
              k2 = a.axisX.convertValueToPixel(l);
              t2 = a.axisY.convertValueToPixel(V[d2].y[0]);
              m = a.axisY.convertValueToPixel(V[d2].y[1]);
              n = a.axisY.convertValueToPixel(V[d2].y[2]);
              p = a.axisY.convertValueToPixel(V[d2].y[3]);
              q = a.axisY.convertValueToPixel(V[d2].y[4]);
              var D = k2 - x / 2 << 0, C = k2 + x / 2 << 0, g = V[d2].color ? V[d2].color : z._colorSet[0], A2 = Math.round(Math.max(
                1,
                0.15 * x
              )), B = 0 === A2 % 2 ? 0 : 0.5, R = V[d2].whiskerColor ? V[d2].whiskerColor : V[d2].color ? z.whiskerColor ? z.whiskerColor : V[d2].color : z.whiskerColor ? z.whiskerColor : g, da = "number" === typeof V[d2].whiskerThickness ? V[d2].whiskerThickness : "number" === typeof z.options.whiskerThickness ? z.whiskerThickness : A2, ja = V[d2].whiskerDashType ? V[d2].whiskerDashType : z.whiskerDashType, ba = f(V[d2].whiskerLength) ? f(z.options.whiskerLength) ? x : z.whiskerLength : V[d2].whiskerLength, ba = "number" === typeof ba ? 0 >= ba ? 0 : ba >= x ? x : ba : "string" === typeof ba ? parseInt(ba) * x / 100 > x ? x : parseInt(ba) * x / 100 : x, la = 1 === Math.round(da) % 2 ? 0.5 : 0, va = V[d2].stemColor ? V[d2].stemColor : V[d2].color ? z.stemColor ? z.stemColor : V[d2].color : z.stemColor ? z.stemColor : g, pa = "number" === typeof V[d2].stemThickness ? V[d2].stemThickness : "number" === typeof z.options.stemThickness ? z.stemThickness : A2, H = 1 === Math.round(pa) % 2 ? 0.5 : 0, F3 = V[d2].stemDashType ? V[d2].stemDashType : z.stemDashType, L = V[d2].lineColor ? V[d2].lineColor : V[d2].color ? z.lineColor ? z.lineColor : V[d2].color : z.lineColor ? z.lineColor : g, I2 = "number" === typeof V[d2].lineThickness ? V[d2].lineThickness : "number" === typeof z.options.lineThickness ? z.lineThickness : A2, K3 = V[d2].lineDashType ? V[d2].lineDashType : z.lineDashType, S = 1 === Math.round(I2) % 2 ? 0.5 : 0, P2 = z.upperBoxColor, U = z.lowerBoxColor, Q2 = f(z.options.fillOpacity) ? 1 : z.fillOpacity, T = z.dataPointIds[d2];
              this._eventManager.objectMap[T] = {
                id: T,
                objectType: "dataPoint",
                dataSeriesIndex: v,
                dataPointIndex: d2,
                x1: D,
                y1: t2,
                x2: C,
                y2: m,
                x3: k2,
                y3: n,
                x4: k2,
                y4: p,
                y5: q,
                borderThickness: A2,
                color: g,
                stemThickness: pa,
                stemColor: va,
                whiskerThickness: da,
                whiskerLength: ba,
                whiskerColor: R,
                lineThickness: I2,
                lineColor: L
              };
              b.save();
              0 < pa && (b.beginPath(), b.strokeStyle = va, b.lineWidth = pa, b.setLineDash && b.setLineDash(N(F3, pa)), b.moveTo(k2 - H, m), b.lineTo(k2 - H, t2), b.stroke(), b.moveTo(k2 - H, p), b.lineTo(k2 - H, n), b.stroke());
              b.restore();
              c.lineWidth = Math.max(A2, 4);
              b.beginPath();
              fa(b, D, Math.min(q, m), C, Math.max(m, q), U, 0, g, r2 ? y2 : false, r2 ? false : y2, false, false, Q2);
              b.beginPath();
              fa(b, D, Math.min(n, q), C, Math.max(q, n), P2, 0, g, r2 ? false : y2, r2 ? y2 : false, false, false, Q2);
              b.beginPath();
              b.lineWidth = A2;
              b.strokeStyle = g;
              b.rect(D - B, Math.min(m, n) - B, C - D + 2 * B, Math.max(
                m,
                n
              ) - Math.min(m, n) + 2 * B);
              b.stroke();
              b.save();
              0 < I2 && (b.beginPath(), b.globalAlpha = 1, b.setLineDash && b.setLineDash(N(K3, I2)), b.strokeStyle = L, b.lineWidth = I2, b.moveTo(D, q - S), b.lineTo(C, q - S), b.stroke());
              b.restore();
              b.save();
              0 < da && (b.beginPath(), b.setLineDash && b.setLineDash(N(ja, da)), b.strokeStyle = R, b.lineWidth = da, b.moveTo(k2 - ba / 2 << 0, p - la), b.lineTo(k2 + ba / 2 << 0, p - la), b.stroke(), b.moveTo(k2 - ba / 2 << 0, t2 + la), b.lineTo(k2 + ba / 2 << 0, t2 + la), b.stroke());
              b.restore();
              s && (g = O(T), c.strokeStyle = g, c.lineWidth = pa, 0 < pa && (c.moveTo(k2 - B - H, m), c.lineTo(k2 - B - H, Math.max(t2, p)), c.stroke(), c.moveTo(k2 - B - H, Math.min(t2, p)), c.lineTo(k2 - B - H, n), c.stroke()), fa(c, D, Math.max(m, n), C, Math.min(m, n), g, 0, null, false, false, false, false), 0 < da && (c.beginPath(), c.lineWidth = da, c.moveTo(k2 + ba / 2, p - la), c.lineTo(k2 - ba / 2, p - la), c.stroke(), c.moveTo(k2 + ba / 2, t2 + la), c.lineTo(k2 - ba / 2, t2 + la), c.stroke()));
              (V[d2].indexLabel || z.indexLabel || V[d2].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({
                chartType: z.type,
                dataPoint: V[d2],
                dataSeries: z,
                point: { x: D + (C - D) / 2, y: a.axisY.reversed ? t2 : p },
                direction: 1,
                bounds: { x1: D, y1: Math.min(t2, p), x2: C, y2: Math.max(t2, p) },
                color: g
              });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), c.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    u2.prototype.renderRangeColumn = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = 0, d2, k2, t2, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
        d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
        var m = a.axisX.dataInfo.minDiff;
        isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
        m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
        this.dataPointMaxWidth && h > d2 && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d2));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && d2 < h) && (d2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
        m < h && (m = h);
        m > d2 && (m = d2);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
        for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
          var p = a.dataSeriesIndexes[n], q = this.data[p], l = q.dataPoints;
          if (0 < l.length) {
            for (var x = 5 < m && q.bevelEnabled ? true : false, h = 0; h < l.length; h++) if (l[h].getTime ? t2 = l[h].x.getTime() : t2 = l[h].x, !(t2 < a.axisX.dataInfo.viewPortMin || t2 > a.axisX.dataInfo.viewPortMax) && !f(l[h].y) && l[h].y.length && "number" === typeof l[h].y[0] && "number" === typeof l[h].y[1]) {
              c = a.axisX.convertValueToPixel(t2);
              d2 = a.axisY.convertValueToPixel(l[h].y[0]);
              k2 = a.axisY.convertValueToPixel(l[h].y[1]);
              var r2 = a.axisX.reversed ? c + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + n) * m << 0 : c - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + n) * m << 0, u3 = a.axisX.reversed ? r2 - m << 0 : r2 + m << 0, c = l[h].color ? l[h].color : q._colorSet[h % q._colorSet.length];
              if (d2 > k2) {
                var v = d2;
                d2 = k2;
                k2 = v;
              }
              v = q.dataPointIds[h];
              this._eventManager.objectMap[v] = { id: v, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: h, x1: r2, y1: d2, x2: u3, y2: k2 };
              fa(b, r2, d2, u3, k2, c, 0, c, x, x, false, false, q.fillOpacity);
              c = O(v);
              s && fa(this._eventManager.ghostCtx, r2, d2, u3, k2, c, 0, null, false, false, false, false);
              if (l[h].indexLabel || q.indexLabel || l[h].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeColumn", dataPoint: l[h], dataSeries: q, indexKeyword: 0, point: { x: r2 + (u3 - r2) / 2, y: l[h].y[1] >= l[h].y[0] ? k2 : d2 }, direction: l[h].y[1] >= l[h].y[0] ? -1 : 1, bounds: { x1: r2, y1: Math.min(d2, k2), x2: u3, y2: Math.max(d2, k2) }, color: c }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: l[h], dataSeries: q, indexKeyword: 1, point: { x: r2 + (u3 - r2) / 2, y: l[h].y[1] >= l[h].y[0] ? d2 : k2 }, direction: l[h].y[1] >= l[h].y[0] ? 1 : -1, bounds: { x1: r2, y1: Math.min(d2, k2), x2: u3, y2: Math.max(d2, k2) }, color: c });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    u2.prototype.renderError = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e, c = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = null, h = false, d2 = this.plotArea, k2 = 0, t2, m, n, p, q, l, x, r2 = a.axisX.dataInfo.minDiff;
        isFinite(r2) || (r2 = 0.3 * Math.abs(a.axisX.range));
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(d2.x1, d2.y1, d2.width, d2.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d2.x1, d2.y1, d2.width, d2.height), this._eventManager.ghostCtx.clip());
        for (var u3 = 0, v = 0; v < this.data.length; v++) !this.data[v].type.match(/(bar|column)/ig) || !this.data[v].visible || this.data[v].type.match(/(stacked)/ig) && u3 || u3++;
        for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
          var V = a.dataSeriesIndexes[z], y2 = this.data[V], D = y2.dataPoints, C = f(y2._linkedSeries) ? false : y2._linkedSeries.type.match(/(bar|column)/ig) && y2._linkedSeries.visible ? true : false, A2 = 0;
          if (C) for (g = y2._linkedSeries.id, v = 0; v < g; v++) !this.data[v].type.match(/(bar|column)/ig) || !this.data[v].visible || this.data[v].type.match(/(stacked)/ig) && A2 || (this.data[v].type.match(/(range)/ig) && (h = true), A2++);
          g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          k2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? u3 : 1))) << 0 : 0.3 * this.width;
          h && (k2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? u3 : 1))) << 0 : 0.03 * this.width);
          v = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((c ? d2.height : d2.width) * (a.axisX.logarithmic ? Math.log(r2) / Math.log(a.axisX.range) : Math.abs(r2) / Math.abs(a.axisX.range)) / (C ? u3 : 1)) << 0;
          this.dataPointMaxWidth && g > k2 && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, k2));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && k2 < g) && (k2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
          v < g && (v = g);
          v > k2 && (v = k2);
          if (0 < D.length) for (var B = y2._colorSet, k2 = 0; k2 < D.length; k2++) {
            var g = y2.lineColor = y2.options.color ? y2.options.color : B[0], R = { color: D[k2].whiskerColor ? D[k2].whiskerColor : D[k2].color ? y2.whiskerColor ? y2.whiskerColor : D[k2].color : y2.whiskerColor ? y2.whiskerColor : g, thickness: f(D[k2].whiskerThickness) ? y2.whiskerThickness : D[k2].whiskerThickness, dashType: D[k2].whiskerDashType ? D[k2].whiskerDashType : y2.whiskerDashType, length: f(D[k2].whiskerLength) ? f(y2.options.whiskerLength) ? v : y2.options.whiskerLength : D[k2].whiskerLength, trimLength: f(D[k2].whiskerLength) ? f(y2.options.whiskerLength) ? 50 : 0 : 0 };
            R.length = "number" === typeof R.length ? 0 >= R.length ? 0 : R.length >= v ? v : R.length : "string" === typeof R.length ? parseInt(R.length) * v / 100 > v ? v : parseInt(R.length) * v / 100 > v : v;
            R.thickness = "number" === typeof R.thickness ? 0 > R.thickness ? 0 : Math.round(R.thickness) : 2;
            var da = { color: D[k2].stemColor ? D[k2].stemColor : D[k2].color ? y2.stemColor ? y2.stemColor : D[k2].color : y2.stemColor ? y2.stemColor : g, thickness: D[k2].stemThickness ? D[k2].stemThickness : y2.stemThickness, dashType: D[k2].stemDashType ? D[k2].stemDashType : y2.stemDashType };
            da.thickness = "number" === typeof da.thickness ? 0 > da.thickness ? 0 : Math.round(da.thickness) : 2;
            D[k2].getTime ? x = D[k2].x.getTime() : x = D[k2].x;
            if (!(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax) && !f(D[k2].y) && D[k2].y.length && "number" === typeof D[k2].y[0] && "number" === typeof D[k2].y[1]) {
              var ja = a.axisX.convertValueToPixel(x);
              c ? m = ja : t2 = ja;
              ja = a.axisY.convertValueToPixel(D[k2].y[0]);
              c ? n = ja : q = ja;
              ja = a.axisY.convertValueToPixel(D[k2].y[1]);
              c ? p = ja : l = ja;
              c ? (q = a.axisX.reversed ? m + (C ? u3 : 1) * v / 2 - (C ? A2 - 1 : 0) * v << 0 : m - (C ? u3 : 1) * v / 2 + (C ? A2 - 1 : 0) * v << 0, l = a.axisX.reversed ? q - v << 0 : q + v << 0) : (n = a.axisX.reversed ? t2 + (C ? u3 : 1) * v / 2 - (C ? A2 - 1 : 0) * v << 0 : t2 - (C ? u3 : 1) * v / 2 + (C ? A2 - 1 : 0) * v << 0, p = a.axisX.reversed ? n - v << 0 : n + v << 0);
              !c && q > l && (ja = q, q = l, l = ja);
              c && n > p && (ja = n, n = p, p = ja);
              ja = y2.dataPointIds[k2];
              this._eventManager.objectMap[ja] = { id: ja, objectType: "dataPoint", dataSeriesIndex: V, dataPointIndex: k2, x1: Math.min(n, p), y1: Math.min(q, l), x2: Math.max(p, n), y2: Math.max(l, q), isXYSwapped: c, stemProperties: da, whiskerProperties: R };
              K2(
                b,
                Math.min(n, p),
                Math.min(q, l),
                Math.max(p, n),
                Math.max(l, q),
                g,
                R,
                da,
                c
              );
              s && K2(this._eventManager.ghostCtx, n, q, p, l, g, R, da, c);
              if (D[k2].indexLabel || y2.indexLabel || D[k2].indexLabelFormatter || y2.indexLabelFormatter) this._indexLabels.push({ chartType: "error", dataPoint: D[k2], dataSeries: y2, indexKeyword: 0, point: { x: c ? D[k2].y[1] >= D[k2].y[0] ? n : p : n + (p - n) / 2, y: c ? q + (l - q) / 2 : D[k2].y[1] >= D[k2].y[0] ? l : q }, direction: D[k2].y[1] >= D[k2].y[0] ? -1 : 1, bounds: { x1: c ? Math.min(n, p) : n, y1: c ? q : Math.min(q, l), x2: c ? Math.max(n, p) : p, y2: c ? l : Math.max(q, l) }, color: g, axisSwapped: c }), this._indexLabels.push({
                chartType: "error",
                dataPoint: D[k2],
                dataSeries: y2,
                indexKeyword: 1,
                point: { x: c ? D[k2].y[1] >= D[k2].y[0] ? p : n : n + (p - n) / 2, y: c ? q + (l - q) / 2 : D[k2].y[1] >= D[k2].y[0] ? q : l },
                direction: D[k2].y[1] >= D[k2].y[0] ? 1 : -1,
                bounds: { x1: c ? Math.min(n, p) : n, y1: c ? q : Math.min(q, l), x2: c ? Math.max(n, p) : p, y2: c ? l : Math.max(q, l) },
                color: g,
                axisSwapped: c
              });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(
          a.axisY.maskCanvas,
          0,
          0,
          this.width,
          this.height
        ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d2.x1, d2.y1, d2.width, d2.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    u2.prototype.renderRangeBar = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = null, g = this.plotArea, h = 0, d2, k2, t2, m, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
        d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
        var n = a.axisX.dataInfo.minDiff;
        isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
        n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
        this.dataPointMaxWidth && h > d2 && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d2));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && d2 < h) && (d2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
        n < h && (n = h);
        n > d2 && (n = d2);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(g.x1, g.y1, g.width, g.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
          g.x1,
          g.y1,
          g.width,
          g.height
        ), this._eventManager.ghostCtx.clip());
        for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
          var q = a.dataSeriesIndexes[p], l = this.data[q], x = l.dataPoints;
          if (0 < x.length) {
            var r2 = 5 < n && l.bevelEnabled ? true : false;
            b.strokeStyle = "#4572A7 ";
            for (h = 0; h < x.length; h++) if (x[h].getTime ? m = x[h].x.getTime() : m = x[h].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax) && !f(x[h].y) && x[h].y.length && "number" === typeof x[h].y[0] && "number" === typeof x[h].y[1]) {
              d2 = a.axisY.convertValueToPixel(x[h].y[0]);
              k2 = a.axisY.convertValueToPixel(x[h].y[1]);
              t2 = a.axisX.convertValueToPixel(m);
              t2 = a.axisX.reversed ? t2 + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + p) * n << 0 : t2 - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + p) * n << 0;
              var u3 = a.axisX.reversed ? t2 - n << 0 : t2 + n << 0;
              d2 > k2 && (c = d2, d2 = k2, k2 = c);
              c = x[h].color ? x[h].color : l._colorSet[h % l._colorSet.length];
              fa(b, d2, t2, k2, u3, c, 0, null, r2, false, false, false, l.fillOpacity);
              c = l.dataPointIds[h];
              this._eventManager.objectMap[c] = { id: c, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: d2, y1: t2, x2: k2, y2: u3 };
              c = O(c);
              s && fa(
                this._eventManager.ghostCtx,
                d2,
                t2,
                k2,
                u3,
                c,
                0,
                null,
                false,
                false,
                false,
                false
              );
              if (x[h].indexLabel || l.indexLabel || x[h].indexLabelFormatter || l.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeBar", dataPoint: x[h], dataSeries: l, indexKeyword: 0, point: { x: x[h].y[1] >= x[h].y[0] ? d2 : k2, y: t2 + (u3 - t2) / 2 }, direction: x[h].y[1] >= x[h].y[0] ? -1 : 1, bounds: { x1: Math.min(d2, k2), y1: t2, x2: Math.max(d2, k2), y2: u3 }, color: c }), this._indexLabels.push({ chartType: "rangeBar", dataPoint: x[h], dataSeries: l, indexKeyword: 1, point: { x: x[h].y[1] >= x[h].y[0] ? k2 : d2, y: t2 + (u3 - t2) / 2 }, direction: x[h].y[1] >= x[h].y[0] ? 1 : -1, bounds: { x1: Math.min(d2, k2), y1: t2, x2: Math.max(d2, k2), y2: u3 }, color: c });
            }
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    u2.prototype.renderRangeArea = function(a) {
      function e() {
        if (z) {
          for (var a2 = null, b2 = k2.length - 1; 0 <= b2; b2--) a2 = k2[b2], c.lineTo(a2.x, a2.y2), g.lineTo(a2.x, a2.y2);
          c.closePath();
          c.globalAlpha = n.fillOpacity;
          c.fill();
          c.globalAlpha = 1;
          g.fill();
          if (0 < n.lineThickness) {
            c.beginPath();
            c.moveTo(a2.x, a2.y2);
            for (b2 = 0; b2 < k2.length; b2++) a2 = k2[b2], c.lineTo(a2.x, a2.y2);
            c.moveTo(k2[0].x, k2[0].y1);
            for (b2 = 0; b2 < k2.length; b2++) a2 = k2[b2], c.lineTo(a2.x, a2.y1);
            c.stroke();
          }
          c.beginPath();
          c.moveTo(x, t2);
          g.beginPath();
          g.moveTo(x, t2);
          z = { x, y: t2 };
          k2 = [];
          k2.push({ x, y1: t2, y2: u3 });
        }
      }
      var b = a.targetCanvasCtx || this.plotArea.ctx, c = s ? this._preRenderCtx : b;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx, h = [], d2 = this.plotArea;
        c.save();
        s && g.save();
        c.beginPath();
        c.rect(d2.x1, d2.y1, d2.width, d2.height);
        c.clip();
        s && (g.beginPath(), g.rect(d2.x1, d2.y1, d2.width, d2.height), g.clip());
        for (var f2 = 0; f2 < a.dataSeriesIndexes.length; f2++) {
          var k2 = [], m = a.dataSeriesIndexes[f2], n = this.data[m], p = n.dataPoints, h = n.id;
          this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: m };
          h = O(h);
          g.fillStyle = h;
          var h = [], q = true, l = 0, x, t2, u3, v, z = null;
          if (0 < p.length) {
            var y2 = n._colorSet[l % n._colorSet.length], A2 = n.lineColor = n.options.lineColor || y2, D = A2;
            c.fillStyle = y2;
            c.strokeStyle = A2;
            c.lineWidth = n.lineThickness;
            var C = "solid";
            if (c.setLineDash) {
              var B = N(n.nullDataLineDashType, n.lineThickness), C = n.lineDashType, F3 = N(C, n.lineThickness);
              c.setLineDash(F3);
            }
            for (var R = true; l < p.length; l++) if (v = p[l].x.getTime ? p[l].x.getTime() : p[l].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !R))) if (null !== p[l].y && p[l].y.length && "number" === typeof p[l].y[0] && "number" === typeof p[l].y[1]) {
              x = a.axisX.convertValueToPixel(v);
              t2 = a.axisY.convertValueToPixel(p[l].y[0]);
              u3 = a.axisY.convertValueToPixel(p[l].y[1]);
              q || R ? (n.connectNullData && !q ? (c.setLineDash && (n.options.nullDataLineDashType || C === n.lineDashType && n.lineDashType !== n.nullDataLineDashType) && (k2[k2.length - 1].newLineDashArray = F3, C = n.nullDataLineDashType, c.setLineDash(B)), c.lineTo(x, t2), s && g.lineTo(x, t2), k2.push({ x, y1: t2, y2: u3 })) : (c.beginPath(), c.moveTo(x, t2), z = { x, y: t2 }, k2 = [], k2.push({ x, y1: t2, y2: u3 }), s && (g.beginPath(), g.moveTo(x, t2))), R = q = false) : (c.lineTo(x, t2), k2.push({ x, y1: t2, y2: u3 }), s && g.lineTo(x, t2), 0 == l % 250 && e());
              v = n.dataPointIds[l];
              this._eventManager.objectMap[v] = { id: v, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: l, x1: x, y1: t2, y2: u3 };
              l < p.length - 1 && (D !== (p[l].lineColor || A2) || C !== (p[l].lineDashType || n.lineDashType)) && (e(), D = p[l].lineColor || A2, k2[k2.length - 1].newStrokeStyle = D, c.strokeStyle = D, c.setLineDash && (p[l].lineDashType ? (C = p[l].lineDashType, k2[k2.length - 1].newLineDashArray = N(C, n.lineThickness), c.setLineDash(k2[k2.length - 1].newLineDashArray)) : (C = n.lineDashType, k2[k2.length - 1].newLineDashArray = F3, c.setLineDash(F3))));
              if (0 !== p[l].markerSize && (0 < p[l].markerSize || 0 < n.markerSize)) {
                var da = n.getMarkerProperties(l, x, u3, c);
                h.push(da);
                var ja = O(v);
                s && h.push({ x, y: u3, ctx: g, type: da.type, size: da.size, color: ja, borderColor: ja, borderThickness: da.borderThickness });
                da = n.getMarkerProperties(
                  l,
                  x,
                  t2,
                  c
                );
                h.push(da);
                ja = O(v);
                s && h.push({ x, y: t2, ctx: g, type: da.type, size: da.size, color: ja, borderColor: ja, borderThickness: da.borderThickness });
              }
              if (p[l].indexLabel || n.indexLabel || p[l].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[l], dataSeries: n, indexKeyword: 0, point: { x, y: t2 }, direction: p[l].y[0] > p[l].y[1] === a.axisY.reversed ? -1 : 1, color: y2 }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[l], dataSeries: n, indexKeyword: 1, point: { x, y: u3 }, direction: p[l].y[0] > p[l].y[1] === a.axisY.reversed ? 1 : -1, color: y2 });
            } else R || q || e(), R = true;
            e();
            r.drawMarkers(h);
          }
        }
        s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d2.x1, d2.y1, d2.width, d2.height), this._eventManager.ghostCtx.restore());
        c.restore();
        return { source: b, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderRangeSplineArea = function(a) {
      function e(a2, b2) {
        var e2 = F2(t2, 2);
        if (0 < e2.length) {
          if (0 < m.lineThickness) {
            c.strokeStyle = b2;
            c.setLineDash && c.setLineDash(a2);
            c.beginPath();
            c.moveTo(e2[0].x, e2[0].y);
            for (var h2 = 0; h2 < e2.length - 3; h2 += 3) {
              if (e2[h2].newStrokeStyle || e2[h2].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(e2[h2].x, e2[h2].y), e2[h2].newStrokeStyle && (c.strokeStyle = e2[h2].newStrokeStyle), e2[h2].newLineDashArray && c.setLineDash(e2[h2].newLineDashArray);
              c.bezierCurveTo(e2[h2 + 1].x, e2[h2 + 1].y, e2[h2 + 2].x, e2[h2 + 2].y, e2[h2 + 3].x, e2[h2 + 3].y);
            }
          }
          c.beginPath();
          c.moveTo(e2[0].x, e2[0].y);
          s && (g.beginPath(), g.moveTo(e2[0].x, e2[0].y));
          for (h2 = 0; h2 < e2.length - 3; h2 += 3) c.bezierCurveTo(e2[h2 + 1].x, e2[h2 + 1].y, e2[h2 + 2].x, e2[h2 + 2].y, e2[h2 + 3].x, e2[h2 + 3].y), s && g.bezierCurveTo(e2[h2 + 1].x, e2[h2 + 1].y, e2[h2 + 2].x, e2[h2 + 2].y, e2[h2 + 3].x, e2[h2 + 3].y);
          e2 = F2(u3, 2);
          c.lineTo(u3[u3.length - 1].x, u3[u3.length - 1].y);
          for (h2 = e2.length - 1; 2 < h2; h2 -= 3) c.bezierCurveTo(
            e2[h2 - 1].x,
            e2[h2 - 1].y,
            e2[h2 - 2].x,
            e2[h2 - 2].y,
            e2[h2 - 3].x,
            e2[h2 - 3].y
          ), s && g.bezierCurveTo(e2[h2 - 1].x, e2[h2 - 1].y, e2[h2 - 2].x, e2[h2 - 2].y, e2[h2 - 3].x, e2[h2 - 3].y);
          c.closePath();
          c.globalAlpha = m.fillOpacity;
          c.fill();
          s && (g.closePath(), g.fill());
          c.globalAlpha = 1;
          if (0 < m.lineThickness) {
            c.strokeStyle = b2;
            c.setLineDash && c.setLineDash(a2);
            c.beginPath();
            c.moveTo(e2[0].x, e2[0].y);
            for (var l2 = h2 = 0; h2 < e2.length - 3; h2 += 3, l2++) {
              if (t2[l2].newStrokeStyle || t2[l2].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(e2[h2].x, e2[h2].y), t2[l2].newStrokeStyle && (c.strokeStyle = t2[l2].newStrokeStyle), t2[l2].newLineDashArray && c.setLineDash(t2[l2].newLineDashArray);
              c.bezierCurveTo(e2[h2 + 1].x, e2[h2 + 1].y, e2[h2 + 2].x, e2[h2 + 2].y, e2[h2 + 3].x, e2[h2 + 3].y);
            }
            e2 = F2(t2, 2);
            c.moveTo(e2[0].x, e2[0].y);
            for (l2 = h2 = 0; h2 < e2.length - 3; h2 += 3, l2++) {
              if (t2[l2].newStrokeStyle || t2[l2].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(e2[h2].x, e2[h2].y), t2[l2].newStrokeStyle && (c.strokeStyle = t2[l2].newStrokeStyle), t2[l2].newLineDashArray && c.setLineDash(t2[l2].newLineDashArray);
              c.bezierCurveTo(e2[h2 + 1].x, e2[h2 + 1].y, e2[h2 + 2].x, e2[h2 + 2].y, e2[h2 + 3].x, e2[h2 + 3].y);
            }
            c.stroke();
          }
          c.beginPath();
        }
      }
      var b = a.targetCanvasCtx || this.plotArea.ctx, c = s ? this._preRenderCtx : b;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var g = this._eventManager.ghostCtx, h = [], d2 = this.plotArea;
        c.save();
        s && g.save();
        c.beginPath();
        c.rect(d2.x1, d2.y1, d2.width, d2.height);
        c.clip();
        s && (g.beginPath(), g.rect(d2.x1, d2.y1, d2.width, d2.height), g.clip());
        for (var f2 = 0; f2 < a.dataSeriesIndexes.length; f2++) {
          var k2 = a.dataSeriesIndexes[f2], m = this.data[k2], n = m.dataPoints, h = m.id;
          this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: k2 };
          h = O(h);
          g.fillStyle = h;
          var h = [], p = 0, q, l, x, t2 = [], u3 = [];
          if (0 < n.length) {
            var v = m._colorSet[p % m._colorSet.length], z = m.lineColor = m.options.lineColor || v, y2 = z;
            c.fillStyle = v;
            c.lineWidth = m.lineThickness;
            var A2 = "solid", D;
            if (c.setLineDash) {
              var C = N(m.nullDataLineDashType, m.lineThickness), A2 = m.lineDashType;
              D = N(A2, m.lineThickness);
            }
            for (l = false; p < n.length; p++) if (q = n[p].x.getTime ? n[p].x.getTime() : n[p].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !l))) if (null !== n[p].y && n[p].y.length && "number" === typeof n[p].y[0] && "number" === typeof n[p].y[1]) {
              q = a.axisX.convertValueToPixel(q);
              l = a.axisY.convertValueToPixel(n[p].y[0]);
              x = a.axisY.convertValueToPixel(n[p].y[1]);
              var B = m.dataPointIds[p];
              this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: k2, dataPointIndex: p, x1: q, y1: l, y2: x };
              t2[t2.length] = { x: q, y: l };
              u3[u3.length] = { x: q, y: x };
              p < n.length - 1 && (y2 !== (n[p].lineColor || z) || A2 !== (n[p].lineDashType || m.lineDashType)) && (y2 = n[p].lineColor || z, t2[t2.length - 1].newStrokeStyle = y2, c.setLineDash && (n[p].lineDashType ? (A2 = n[p].lineDashType, t2[t2.length - 1].newLineDashArray = N(A2, m.lineThickness)) : (A2 = m.lineDashType, t2[t2.length - 1].newLineDashArray = D)));
              if (0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < m.markerSize)) {
                var I2 = m.getMarkerProperties(p, q, l, c);
                h.push(I2);
                var R = O(B);
                s && h.push({ x: q, y: l, ctx: g, type: I2.type, size: I2.size, color: R, borderColor: R, borderThickness: I2.borderThickness });
                I2 = m.getMarkerProperties(p, q, x, c);
                h.push(I2);
                R = O(B);
                s && h.push({ x: q, y: x, ctx: g, type: I2.type, size: I2.size, color: R, borderColor: R, borderThickness: I2.borderThickness });
              }
              if (n[p].indexLabel || m.indexLabel || n[p].indexLabelFormatter || m.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: n[p], dataSeries: m, indexKeyword: 0, point: { x: q, y: l }, direction: n[p].y[0] <= n[p].y[1] ? -1 : 1, color: v }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: n[p], dataSeries: m, indexKeyword: 1, point: { x: q, y: x }, direction: n[p].y[0] <= n[p].y[1] ? 1 : -1, color: v });
              l = false;
            } else 0 < p && !l && (m.connectNullData ? c.setLineDash && (0 < t2.length && (m.options.nullDataLineDashType || !n[p - 1].lineDashType)) && (t2[t2.length - 1].newLineDashArray = C, A2 = m.nullDataLineDashType) : (e(D, z), t2 = [], u3 = [])), l = true;
            e(D, z);
            r.drawMarkers(h);
          }
        }
        s && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d2.x1, d2.y1, d2.width, d2.height), this._eventManager.ghostCtx.restore());
        c.restore();
        return { source: b, dest: this.plotArea.ctx, animationCallback: w.xClipAnimation, easingFunction: w.easing.linear, animationBase: 0 };
      }
    };
    u2.prototype.renderWaterfall = function(a) {
      var e = a.targetCanvasCtx || this.plotArea.ctx, b = s ? this._preRenderCtx : e;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var c = this._eventManager.ghostCtx, g = null, h = this.plotArea, d2 = 0, f2, k2, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), d2 = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
        k2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
        var q = a.axisX.dataInfo.minDiff;
        isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
        q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (h.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
        this.dataPointMaxWidth && d2 > k2 && (d2 = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, k2));
        !this.dataPointMaxWidth && (this.dataPointMinWidth && k2 < d2) && (k2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, d2));
        q < d2 && (q = d2);
        q > k2 && (q = k2);
        b.save();
        s && this._eventManager.ghostCtx.save();
        b.beginPath();
        b.rect(h.x1, h.y1, h.width, h.height);
        b.clip();
        s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
        for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
          var x = a.dataSeriesIndexes[l], t2 = this.data[x], r2 = t2.dataPoints, g = t2._colorSet[0];
          t2.risingColor = t2.options.risingColor ? t2.options.risingColor : g;
          t2.fallingColor = t2.options.fallingColor ? t2.options.fallingColor : "#e40a0a";
          var v = "number" === typeof t2.options.lineThickness ? Math.round(t2.lineThickness) : 1, u3 = 1 === Math.round(v) % 2 ? -0.5 : 0;
          if (0 < r2.length) for (var y2 = 5 < q && t2.bevelEnabled ? true : false, A2 = false, D = null, C = null, d2 = 0; d2 < r2.length; d2++) if (r2[d2].getTime ? n = r2[d2].x.getTime() : n = r2[d2].x, "number" !== typeof r2[d2].y) {
            if (0 < d2 && !A2 && t2.connectNullData) var B = t2.options.nullDataLineDashType || !r2[d2 - 1].lineDashType ? t2.nullDataLineDashType : r2[d2 - 1].lineDashType;
            A2 = true;
          } else {
            f2 = a.axisX.convertValueToPixel(n);
            k2 = 0 === t2.dataPointEOs[d2].cumulativeSum ? p : a.axisY.convertValueToPixel(t2.dataPointEOs[d2].cumulativeSum);
            m = 0 === t2.dataPointEOs[d2].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(t2.dataPointEOs[d2].cumulativeSumYStartValue);
            f2 = a.axisX.reversed ? f2 + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + l) * q << 0 : f2 - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + l) * q << 0;
            var F3 = a.axisX.reversed ? f2 - q << 0 : f2 + q << 0;
            k2 > m && (g = k2, k2 = m, m = g);
            a.axisY.reversed && (g = k2, k2 = m, m = g);
            g = t2.dataPointIds[d2];
            this._eventManager.objectMap[g] = { id: g, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: d2, x1: f2, y1: k2, x2: F3, y2: m };
            var R = r2[d2].color ? r2[d2].color : 0 < r2[d2].y ? t2.risingColor : t2.fallingColor;
            fa(b, f2, k2, F3, m, R, 0, R, y2, y2, false, false, t2.fillOpacity);
            g = O(g);
            s && fa(this._eventManager.ghostCtx, f2, k2, F3, m, g, 0, null, false, false, false, false);
            var da, R = f2;
            da = "undefined" !== typeof r2[d2].isIntermediateSum && true === r2[d2].isIntermediateSum || "undefined" !== typeof r2[d2].isCumulativeSum && true === r2[d2].isCumulativeSum ? 0 < r2[d2].y ? k2 : m : 0 < r2[d2].y ? m : k2;
            0 < d2 && D && (!A2 || t2.connectNullData) && (A2 && b.setLineDash && b.setLineDash(N(B, v)), b.beginPath(), b.moveTo(D, C - u3), b.lineTo(R, da - u3), 0 < v && b.stroke(), s && (c.beginPath(), c.moveTo(D, C - u3), c.lineTo(R, da - u3), 0 < v && c.stroke()));
            A2 = false;
            D = F3;
            C = 0 < r2[d2].y ? k2 : m;
            R = r2[d2].lineDashType ? r2[d2].lineDashType : t2.options.lineDashType ? t2.options.lineDashType : "shortDash";
            b.strokeStyle = r2[d2].lineColor ? r2[d2].lineColor : t2.options.lineColor ? t2.options.lineColor : "#9e9e9e";
            b.lineWidth = v;
            b.setLineDash && (R = N(R, v), b.setLineDash(R));
            (r2[d2].indexLabel || t2.indexLabel || r2[d2].indexLabelFormatter || t2.indexLabelFormatter) && this._indexLabels.push({ chartType: "waterfall", dataPoint: r2[d2], dataSeries: t2, point: { x: f2 + (F3 - f2) / 2, y: 0 <= r2[d2].y ? k2 : m }, direction: 0 > r2[d2].y === a.axisY.reversed ? 1 : -1, bounds: { x1: f2, y1: Math.min(k2, m), x2: F3, y2: Math.max(k2, m) }, color: g });
          }
        }
        s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(
          a.axisX.maskCanvas,
          0,
          0,
          this.width,
          this.height
        ), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
        b.restore();
        return { source: e, dest: this.plotArea.ctx, animationCallback: w.fadeInAnimation, easingFunction: w.easing.easeInQuad, animationBase: 0 };
      }
    };
    var d = function(a, e, b, c, g, h, d2, f2, k2) {
      if (!(0 > b)) {
        "undefined" === typeof f2 && (f2 = 1);
        if (!s) {
          var m = Number((d2 % (2 * Math.PI)).toFixed(8));
          Number((h % (2 * Math.PI)).toFixed(8)) === m && (d2 -= 1e-4);
        }
        a.save();
        a.globalAlpha = f2;
        "pie" === g ? (a.beginPath(), a.moveTo(e.x, e.y), a.arc(e.x, e.y, b, h, d2, false), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === g && (a.beginPath(), a.arc(e.x, e.y, b, h, d2, false), 0 <= k2 && a.arc(e.x, e.y, k2 * b, d2, h, true), a.closePath(), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
        a.globalAlpha = 1;
        a.restore();
      }
    };
    u2.prototype.renderPie = function(a) {
      function e() {
        if (m && n) {
          for (var a2 = 0, c2 = 0, b2 = 0, e2 = 0, g2 = 0; g2 < n.length; g2++) {
            var h2 = n[g2], d2 = m.dataPointIds[g2];
            l[g2].id = d2;
            l[g2].objectType = "dataPoint";
            l[g2].dataPointIndex = g2;
            l[g2].dataSeriesIndex = 0;
            var p2 = l[g2], k3 = { percent: null, total: null }, x2 = null, k3 = w2.getPercentAndTotal(m, h2);
            if (m.indexLabelFormatter || h2.indexLabelFormatter) x2 = { chart: w2.options, dataSeries: m, dataPoint: h2, total: k3.total, percent: k3.percent };
            k3 = h2.indexLabelFormatter ? h2.indexLabelFormatter(x2) : h2.indexLabel ? w2.replaceKeywordsWithValue(h2.indexLabel, h2, m, g2) : m.indexLabelFormatter ? m.indexLabelFormatter(x2) : m.indexLabel ? w2.replaceKeywordsWithValue(m.indexLabel, h2, m, g2) : h2.label ? h2.label : "";
            w2._eventManager.objectMap[d2] = p2;
            p2.center = { x: y2.x, y: y2.y };
            p2.y = h2.y;
            p2.radius = C;
            p2.percentInnerRadius = F3;
            p2.indexLabelText = k3;
            p2.indexLabelPlacement = m.indexLabelPlacement;
            p2.indexLabelLineColor = h2.indexLabelLineColor ? h2.indexLabelLineColor : m.options.indexLabelLineColor ? m.options.indexLabelLineColor : h2.color ? h2.color : m._colorSet[g2 % m._colorSet.length];
            p2.indexLabelLineThickness = f(h2.indexLabelLineThickness) ? m.indexLabelLineThickness : h2.indexLabelLineThickness;
            p2.indexLabelLineDashType = h2.indexLabelLineDashType ? h2.indexLabelLineDashType : m.indexLabelLineDashType;
            p2.indexLabelFontColor = h2.indexLabelFontColor ? h2.indexLabelFontColor : m.indexLabelFontColor;
            p2.indexLabelFontStyle = h2.indexLabelFontStyle ? h2.indexLabelFontStyle : m.indexLabelFontStyle;
            p2.indexLabelFontWeight = h2.indexLabelFontWeight ? h2.indexLabelFontWeight : m.indexLabelFontWeight;
            p2.indexLabelFontSize = f(h2.indexLabelFontSize) ? m.indexLabelFontSize : h2.indexLabelFontSize;
            p2.indexLabelFontFamily = h2.indexLabelFontFamily ? h2.indexLabelFontFamily : m.indexLabelFontFamily;
            p2.indexLabelBackgroundColor = h2.indexLabelBackgroundColor ? h2.indexLabelBackgroundColor : m.options.indexLabelBackgroundColor ? m.options.indexLabelBackgroundColor : m.indexLabelBackgroundColor;
            p2.indexLabelMaxWidth = h2.indexLabelMaxWidth ? h2.indexLabelMaxWidth : m.indexLabelMaxWidth ? m.indexLabelMaxWidth : 0.33 * q.width;
            p2.indexLabelWrap = "undefined" !== typeof h2.indexLabelWrap ? h2.indexLabelWrap : m.indexLabelWrap;
            p2.startAngle = 0 === g2 ? m.startAngle ? m.startAngle / 180 * Math.PI : 0 : l[g2 - 1].endAngle;
            p2.startAngle = (p2.startAngle + 2 * Math.PI) % (2 * Math.PI);
            p2.endAngle = p2.startAngle + 2 * Math.PI / A2 * Math.abs(h2.y);
            h2 = (p2.endAngle + p2.startAngle) / 2;
            h2 = (h2 + 2 * Math.PI) % (2 * Math.PI);
            p2.midAngle = h2;
            if (p2.midAngle > Math.PI / 2 - v && p2.midAngle < Math.PI / 2 + v) {
              if (0 === a2 || l[b2].midAngle > p2.midAngle) b2 = g2;
              a2++;
            } else if (p2.midAngle > 3 * Math.PI / 2 - v && p2.midAngle < 3 * Math.PI / 2 + v) {
              if (0 === c2 || l[e2].midAngle > p2.midAngle) e2 = g2;
              c2++;
            }
            p2.hemisphere = h2 > Math.PI / 2 && h2 <= 3 * Math.PI / 2 ? "left" : "right";
            p2.indexLabelTextBlock = new na(w2.plotArea.ctx, {
              fontSize: p2.indexLabelFontSize,
              fontFamily: p2.indexLabelFontFamily,
              fontColor: p2.indexLabelFontColor,
              fontStyle: p2.indexLabelFontStyle,
              fontWeight: p2.indexLabelFontWeight,
              horizontalAlign: "left",
              backgroundColor: p2.indexLabelBackgroundColor,
              maxWidth: p2.indexLabelMaxWidth,
              maxHeight: p2.indexLabelWrap ? 5 * p2.indexLabelFontSize : 1.5 * p2.indexLabelFontSize,
              text: p2.indexLabelText,
              padding: 0,
              textBaseline: "top"
            });
            p2.indexLabelTextBlock.measureText();
          }
          d2 = h2 = 0;
          k3 = false;
          for (g2 = 0; g2 < n.length; g2++) p2 = l[(b2 + g2) % n.length], 1 < a2 && (p2.midAngle > Math.PI / 2 - v && p2.midAngle < Math.PI / 2 + v) && (h2 <= a2 / 2 && !k3 ? (p2.hemisphere = "right", h2++) : (p2.hemisphere = "left", k3 = true));
          k3 = false;
          for (g2 = 0; g2 < n.length; g2++) p2 = l[(e2 + g2) % n.length], 1 < c2 && (p2.midAngle > 3 * Math.PI / 2 - v && p2.midAngle < 3 * Math.PI / 2 + v) && (d2 <= c2 / 2 && !k3 ? (p2.hemisphere = "left", d2++) : (p2.hemisphere = "right", k3 = true));
        }
      }
      function b(a2) {
        var c2 = w2.plotArea.ctx;
        c2.clearRect(q.x1, q.y1, q.width, q.height);
        c2.fillStyle = w2.backgroundColor;
        c2.fillRect(q.x1, q.y1, q.width, q.height);
        for (c2 = 0; c2 < n.length; c2++) {
          var b2 = l[c2].startAngle, e2 = l[c2].endAngle;
          if (e2 > b2) {
            var g2 = 0.07 * C * Math.cos(l[c2].midAngle), h2 = 0.07 * C * Math.sin(l[c2].midAngle), f2 = false;
            if (n[c2].exploded) {
              if (1e-9 < Math.abs(l[c2].center.x - (y2.x + g2)) || 1e-9 < Math.abs(l[c2].center.y - (y2.y + h2))) l[c2].center.x = y2.x + g2 * a2, l[c2].center.y = y2.y + h2 * a2, f2 = true;
            } else if (0 < Math.abs(l[c2].center.x - y2.x) || 0 < Math.abs(l[c2].center.y - y2.y)) l[c2].center.x = y2.x + g2 * (1 - a2), l[c2].center.y = y2.y + h2 * (1 - a2), f2 = true;
            f2 && (g2 = {}, g2.dataSeries = m, g2.dataPoint = m.dataPoints[c2], g2.index = c2, w2.toolTip.highlightObjects([g2]));
            d(w2.plotArea.ctx, l[c2].center, l[c2].radius, n[c2].color ? n[c2].color : m._colorSet[c2 % m._colorSet.length], m.type, b2, e2, m.fillOpacity, l[c2].percentInnerRadius);
          }
        }
        a2 = w2.plotArea.ctx;
        a2.save();
        a2.fillStyle = "black";
        a2.strokeStyle = "grey";
        a2.textBaseline = "middle";
        a2.lineJoin = "round";
        for (c2 = c2 = 0; c2 < n.length; c2++) b2 = l[c2], b2.indexLabelText && (b2.indexLabelTextBlock.y -= b2.indexLabelTextBlock.height / 2, e2 = 0, e2 = "left" === b2.hemisphere ? "inside" !== m.indexLabelPlacement ? -(b2.indexLabelTextBlock.width + p) : -b2.indexLabelTextBlock.width / 2 : "inside" !== m.indexLabelPlacement ? p : -b2.indexLabelTextBlock.width / 2, b2.indexLabelTextBlock.x += e2, b2.indexLabelTextBlock.render(true), b2.indexLabelTextBlock.x -= e2, b2.indexLabelTextBlock.y += b2.indexLabelTextBlock.height / 2, "inside" !== b2.indexLabelPlacement && 0 < b2.indexLabelLineThickness && (e2 = b2.center.x + C * Math.cos(b2.midAngle), g2 = b2.center.y + C * Math.sin(b2.midAngle), a2.strokeStyle = b2.indexLabelLineColor, a2.lineWidth = b2.indexLabelLineThickness, a2.setLineDash && a2.setLineDash(N(b2.indexLabelLineDashType, b2.indexLabelLineThickness)), a2.beginPath(), a2.moveTo(e2, g2), a2.lineTo(b2.indexLabelTextBlock.x, b2.indexLabelTextBlock.y), a2.lineTo(b2.indexLabelTextBlock.x + ("left" === b2.hemisphere ? -p : p), b2.indexLabelTextBlock.y), a2.stroke()), a2.lineJoin = "miter");
        a2.save();
      }
      function c(a2, c2) {
        var b2 = 0, b2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, e2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, g2 = c2.indexLabelTextBlock.y - c2.indexLabelTextBlock.height / 2, h2 = c2.indexLabelTextBlock.y + c2.indexLabelTextBlock.height / 2;
        return b2 = c2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? g2 - e2 : b2 - h2;
      }
      function g(a2) {
        for (var b2 = null, e2 = 1; e2 < n.length; e2++) if (b2 = (a2 + e2 + l.length) % l.length, l[b2].hemisphere !== l[a2].hemisphere) {
          b2 = null;
          break;
        } else if (l[b2].indexLabelText && b2 !== a2 && (0 > c(l[b2], l[a2]) || ("right" === l[a2].hemisphere ? l[b2].indexLabelTextBlock.y >= l[a2].indexLabelTextBlock.y : l[b2].indexLabelTextBlock.y <= l[a2].indexLabelTextBlock.y))) break;
        else b2 = null;
        return b2;
      }
      function h(a2, b2, e2) {
        e2 = (e2 || 0) + 1;
        if (1e3 < e2) return 0;
        b2 = b2 || 0;
        var d2 = 0, f2 = y2.y - 1 * r2, m2 = y2.y + 1 * r2;
        if (0 <= a2 && a2 < n.length) {
          var p2 = l[a2];
          if (0 > b2 && p2.indexLabelTextBlock.y < f2 || 0 < b2 && p2.indexLabelTextBlock.y > m2) return 0;
          var q2 = 0, k3 = 0, k3 = q2 = q2 = 0;
          0 > b2 ? p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 > f2 && p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 + b2 < f2 && (b2 = -(f2 - (p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 + b2))) : p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2 < f2 && p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2 + b2 > m2 && (b2 = p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2 + b2 - m2);
          b2 = p2.indexLabelTextBlock.y + b2;
          f2 = 0;
          f2 = "right" === p2.hemisphere ? y2.x + Math.sqrt(Math.pow(r2, 2) - Math.pow(b2 - y2.y, 2)) : y2.x - Math.sqrt(Math.pow(r2, 2) - Math.pow(b2 - y2.y, 2));
          k3 = y2.x + C * Math.cos(p2.midAngle);
          q2 = y2.y + C * Math.sin(p2.midAngle);
          q2 = Math.sqrt(Math.pow(f2 - k3, 2) + Math.pow(b2 - q2, 2));
          k3 = Math.acos(C / r2);
          q2 = Math.acos((r2 * r2 + C * C - q2 * q2) / (2 * C * r2));
          b2 = q2 < k3 ? b2 - p2.indexLabelTextBlock.y : 0;
          f2 = null;
          for (m2 = 1; m2 < n.length; m2++) if (f2 = (a2 - m2 + l.length) % l.length, l[f2].hemisphere !== l[a2].hemisphere) {
            f2 = null;
            break;
          } else if (l[f2].indexLabelText && l[f2].hemisphere === l[a2].hemisphere && f2 !== a2 && (0 > c(l[f2], l[a2]) || ("right" === l[a2].hemisphere ? l[f2].indexLabelTextBlock.y <= l[a2].indexLabelTextBlock.y : l[f2].indexLabelTextBlock.y >= l[a2].indexLabelTextBlock.y))) break;
          else f2 = null;
          k3 = f2;
          q2 = g(a2);
          m2 = f2 = 0;
          0 > b2 ? (m2 = "right" === p2.hemisphere ? k3 : q2, d2 = b2, null !== m2 && (k3 = -b2, b2 = p2.indexLabelTextBlock.y - p2.indexLabelTextBlock.height / 2 - (l[m2].indexLabelTextBlock.y + l[m2].indexLabelTextBlock.height / 2), b2 - k3 < x && (f2 = -k3, m2 = h(m2, f2, e2 + 1), +m2.toFixed(u3) > +f2.toFixed(u3) && (d2 = b2 > x ? -(b2 - x) : -(k3 - (m2 - f2)))))) : 0 < b2 && (m2 = "right" === p2.hemisphere ? q2 : k3, d2 = b2, null !== m2 && (k3 = b2, b2 = l[m2].indexLabelTextBlock.y - l[m2].indexLabelTextBlock.height / 2 - (p2.indexLabelTextBlock.y + p2.indexLabelTextBlock.height / 2), b2 - k3 < x && (f2 = k3, m2 = h(m2, f2, e2 + 1), +m2.toFixed(u3) < +f2.toFixed(u3) && (d2 = b2 > x ? b2 - x : k3 - (f2 - m2)))));
          d2 && (e2 = p2.indexLabelTextBlock.y + d2, b2 = 0, b2 = "right" === p2.hemisphere ? y2.x + Math.sqrt(Math.pow(r2, 2) - Math.pow(e2 - y2.y, 2)) : y2.x - Math.sqrt(Math.pow(r2, 2) - Math.pow(e2 - y2.y, 2)), p2.midAngle > Math.PI / 2 - v && p2.midAngle < Math.PI / 2 + v ? (f2 = (a2 - 1 + l.length) % l.length, f2 = l[f2], a2 = l[(a2 + 1 + l.length) % l.length], "left" === p2.hemisphere && "right" === f2.hemisphere && b2 > f2.indexLabelTextBlock.x ? b2 = f2.indexLabelTextBlock.x - 15 : "right" === p2.hemisphere && ("left" === a2.hemisphere && b2 < a2.indexLabelTextBlock.x) && (b2 = a2.indexLabelTextBlock.x + 15)) : p2.midAngle > 3 * Math.PI / 2 - v && p2.midAngle < 3 * Math.PI / 2 + v && (f2 = (a2 - 1 + l.length) % l.length, f2 = l[f2], a2 = l[(a2 + 1 + l.length) % l.length], "right" === p2.hemisphere && "left" === f2.hemisphere && b2 < f2.indexLabelTextBlock.x ? b2 = f2.indexLabelTextBlock.x + 15 : "left" === p2.hemisphere && ("right" === a2.hemisphere && b2 > a2.indexLabelTextBlock.x) && (b2 = a2.indexLabelTextBlock.x - 15)), p2.indexLabelTextBlock.y = e2, p2.indexLabelTextBlock.x = b2, p2.indexLabelAngle = Math.atan2(p2.indexLabelTextBlock.y - y2.y, p2.indexLabelTextBlock.x - y2.x));
        }
        return d2;
      }
      function k2() {
        var a2 = w2.plotArea.ctx;
        a2.fillStyle = "grey";
        a2.strokeStyle = "grey";
        a2.font = "16px Arial";
        a2.textBaseline = "middle";
        for (var b2 = a2 = 0, e2 = 0, d2 = true, b2 = 0; 10 > b2 && (1 > b2 || 0 < e2); b2++) {
          if (m.radius || !m.radius && "undefined" !== typeof m.innerRadius && null !== m.innerRadius && C - e2 <= B) d2 = false;
          d2 && (C -= e2);
          e2 = 0;
          if ("inside" !== m.indexLabelPlacement) {
            r2 = C * s2;
            for (a2 = 0; a2 < n.length; a2++) {
              var f2 = l[a2];
              f2.indexLabelTextBlock.x = y2.x + r2 * Math.cos(f2.midAngle);
              f2.indexLabelTextBlock.y = y2.y + r2 * Math.sin(f2.midAngle);
              f2.indexLabelAngle = f2.midAngle;
              f2.radius = C;
              f2.percentInnerRadius = F3;
            }
            for (var t3, E, a2 = 0; a2 < n.length; a2++) {
              var f2 = l[a2], v2 = g(a2);
              if (null !== v2) {
                t3 = l[a2];
                E = l[v2];
                var xa = 0, xa = c(
                  t3,
                  E
                ) - x;
                if (0 > xa) {
                  for (var A3 = E = 0, D2 = 0; D2 < n.length; D2++) D2 !== a2 && l[D2].hemisphere === f2.hemisphere && (l[D2].indexLabelTextBlock.y < f2.indexLabelTextBlock.y ? E++ : A3++);
                  E = xa / (E + A3 || 1) * A3;
                  var A3 = -1 * (xa - E), ca = D2 = 0;
                  "right" === f2.hemisphere ? (D2 = h(a2, E), A3 = -1 * (xa - D2), ca = h(v2, A3), +ca.toFixed(u3) < +A3.toFixed(u3) && +D2.toFixed(u3) <= +E.toFixed(u3) && h(a2, -(A3 - ca))) : (D2 = h(v2, E), A3 = -1 * (xa - D2), ca = h(a2, A3), +ca.toFixed(u3) < +A3.toFixed(u3) && +D2.toFixed(u3) <= +E.toFixed(u3) && h(v2, -(A3 - ca)));
                }
              }
            }
          } else for (a2 = 0; a2 < n.length; a2++) f2 = l[a2], r2 = "pie" === m.type ? 0.7 * C : 0.8 * C, v2 = y2.x + r2 * Math.cos(f2.midAngle), E = y2.y + r2 * Math.sin(f2.midAngle), f2.indexLabelTextBlock.x = v2, f2.indexLabelTextBlock.y = E;
          for (a2 = 0; a2 < n.length; a2++) if (f2 = l[a2], v2 = f2.indexLabelTextBlock.measureText(), 0 !== v2.height && 0 !== v2.width) v2 = v2 = 0, "right" === f2.hemisphere ? (v2 = q.x2 - (f2.indexLabelTextBlock.x + f2.indexLabelTextBlock.width + p), v2 *= -1) : v2 = q.x1 - (f2.indexLabelTextBlock.x - f2.indexLabelTextBlock.width - p), 0 < v2 && (!d2 && f2.indexLabelText && (E = "right" === f2.hemisphere ? q.x2 - f2.indexLabelTextBlock.x : f2.indexLabelTextBlock.x - q.x1, 0.3 * f2.indexLabelTextBlock.maxWidth > E ? f2.indexLabelText = "" : f2.indexLabelTextBlock.maxWidth = 0.85 * E, 0.3 * f2.indexLabelTextBlock.maxWidth < E && (f2.indexLabelTextBlock.x -= "right" === f2.hemisphere ? 2 : -2)), Math.abs(f2.indexLabelTextBlock.y - f2.indexLabelTextBlock.height / 2 - y2.y) < C || Math.abs(f2.indexLabelTextBlock.y + f2.indexLabelTextBlock.height / 2 - y2.y) < C) && (v2 /= Math.abs(Math.cos(f2.indexLabelAngle)), 9 < v2 && (v2 *= 0.3), v2 > e2 && (e2 = v2)), v2 = v2 = 0, 0 < f2.indexLabelAngle && f2.indexLabelAngle < Math.PI ? (v2 = q.y2 - (f2.indexLabelTextBlock.y + f2.indexLabelTextBlock.height / 2 + 5), v2 *= -1) : v2 = q.y1 - (f2.indexLabelTextBlock.y - f2.indexLabelTextBlock.height / 2 - 5), 0 < v2 && (!d2 && f2.indexLabelText && (E = 0 < f2.indexLabelAngle && f2.indexLabelAngle < Math.PI ? -1 : 1, 0 === h(a2, v2 * E) && h(a2, 2 * E)), Math.abs(f2.indexLabelTextBlock.x - y2.x) < C && (v2 /= Math.abs(Math.sin(f2.indexLabelAngle)), 9 < v2 && (v2 *= 0.3), v2 > e2 && (e2 = v2)));
          var I2 = function(a3, b3, c2) {
            for (var e3 = [], g2 = 0; e3.push(l[b3]), b3 !== c2; b3 = (b3 + 1 + n.length) % n.length) ;
            e3.sort(function(a4, b4) {
              return a4.y - b4.y;
            });
            for (b3 = 0; b3 < e3.length; b3++) if (c2 = e3[b3], g2 < 0.7 * a3) g2 += c2.indexLabelTextBlock.height, c2.indexLabelTextBlock.text = "", c2.indexLabelText = "", c2.indexLabelTextBlock.measureText();
            else break;
          };
          (function() {
            for (var a3 = -1, b3 = -1, e3 = 0, h2 = false, f3 = 0; f3 < n.length; f3++) if (h2 = false, t3 = l[f3], t3.indexLabelText) {
              var d3 = g(f3);
              if (null !== d3) {
                var m2 = l[d3];
                xa = 0;
                xa = c(t3, m2);
                var q2;
                if (q2 = 0 > xa) {
                  q2 = t3.indexLabelTextBlock.x;
                  var k3 = t3.indexLabelTextBlock.y - t3.indexLabelTextBlock.height / 2, x2 = t3.indexLabelTextBlock.y + t3.indexLabelTextBlock.height / 2, E2 = m2.indexLabelTextBlock.y - m2.indexLabelTextBlock.height / 2, w3 = m2.indexLabelTextBlock.x + m2.indexLabelTextBlock.width, v3 = m2.indexLabelTextBlock.y + m2.indexLabelTextBlock.height / 2;
                  q2 = t3.indexLabelTextBlock.x + t3.indexLabelTextBlock.width < m2.indexLabelTextBlock.x - p || q2 > w3 + p || k3 > v3 + p || x2 < E2 - p ? false : true;
                }
                q2 ? (0 > a3 && (a3 = f3), d3 !== a3 && (b3 = d3, e3 += -xa), 0 === f3 % Math.max(n.length / 10, 3) && (h2 = true)) : h2 = true;
                h2 && (0 < e3 && 0 <= a3 && 0 <= b3) && (I2(e3, a3, b3), b3 = a3 = -1, e3 = 0);
              }
            }
            0 < e3 && I2(e3, a3, b3);
          })();
        }
      }
      function t2() {
        w2.plotArea.layoutManager.reset();
        w2.title && (w2.title.dockInsidePlotArea || "center" === w2.title.horizontalAlign && "center" === w2.title.verticalAlign) && w2.title.render();
        if (w2.subtitles) for (var a2 = 0; a2 < w2.subtitles.length; a2++) {
          var b2 = w2.subtitles[a2];
          (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
        }
        w2.legend && (w2.legend.dockInsidePlotArea || "center" === w2.legend.horizontalAlign && "center" === w2.legend.verticalAlign) && (w2.legend.setLayout(), w2.legend.render());
      }
      var w2 = this;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        var m = this.data[a.dataSeriesIndexes[0]], n = m.dataPoints, p = 10, q = this.plotArea, l = m.dataPointEOs, x = 2, r2, s2 = 1.3, v = 20 / 180 * Math.PI, u3 = 6, y2 = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 }, A2 = 0;
        a = false;
        for (var D = 0; D < n.length; D++) A2 += Math.abs(n[D].y), !a && ("undefined" !== typeof n[D].indexLabel && null !== n[D].indexLabel && 0 < n[D].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof n[D].label && null !== n[D].label && 0 < n[D].label.toString().length) && (a = true);
        if (0 !== A2) {
          a = a || "undefined" !== typeof m.indexLabel && null !== m.indexLabel && 0 < m.indexLabel.toString().length;
          var C = "inside" !== m.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
          m.radius && (C = Wa(m.radius, C));
          var B = "undefined" !== typeof m.innerRadius && null !== m.innerRadius ? Wa(m.innerRadius, C) : 0.7 * C;
          m.radius = C;
          "doughnut" === m.type && (m.innerRadius = B);
          var F3 = Math.min(B / C, (C - 1) / C);
          this.pieDoughnutClickHandler = function(a2) {
            w2.isAnimating || !f(a2.dataSeries.explodeOnClick) && !a2.dataSeries.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && w2._animator.animate(0, 500, function(a3) {
              b(a3);
              t2();
              w2.dispatchEvent("dataAnimationIterationEnd", { chart: w2 });
              w2.dispatchEvent("dataAnimationEnd", { chart: w2 });
            }));
          };
          e();
          k2();
          k2();
          k2();
          k2();
          this.disableToolTip = true;
          this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
            var b2 = w2.plotArea.ctx;
            b2.clearRect(q.x1, q.y1, q.width, q.height);
            b2.fillStyle = w2.backgroundColor;
            b2.fillRect(q.x1, q.y1, q.width, q.height);
            for (var b2 = l[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < n.length; c2++) {
              var e2 = 0 === c2 ? l[c2].startAngle : g2, g2 = e2 + (l[c2].endAngle - l[c2].startAngle), h2 = false;
              g2 > b2 && (g2 = b2, h2 = true);
              var f2 = n[c2].color ? n[c2].color : m._colorSet[c2 % m._colorSet.length];
              g2 > e2 && d(w2.plotArea.ctx, l[c2].center, l[c2].radius, f2, m.type, e2, g2, m.fillOpacity, l[c2].percentInnerRadius);
              if (h2) break;
            }
            t2();
            w2.dispatchEvent(
              "dataAnimationIterationEnd",
              { chart: w2 }
            );
            1 <= a2 && w2.dispatchEvent("dataAnimationEnd", { chart: w2 });
          }, function() {
            w2.disableToolTip = false;
            w2._animator.animate(0, w2.animatedRender ? 500 : 0, function(a2) {
              b(a2);
              t2();
              w2.dispatchEvent("dataAnimationIterationEnd", { chart: w2 });
            });
            w2.dispatchEvent("dataAnimationEnd", { chart: w2 });
          });
        }
      }
    };
    var t = function(a, e, b, c) {
      "undefined" === typeof b && (b = 1);
      0 >= Math.round(e.y4 - e.y1) || (a.save(), a.globalAlpha = b, a.beginPath(), a.moveTo(Math.round(e.x1), Math.round(e.y1)), a.lineTo(Math.round(e.x2), Math.round(e.y2)), a.lineTo(
        Math.round(e.x3),
        Math.round(e.y3)
      ), a.lineTo(Math.round(e.x4), Math.round(e.y4)), "undefined" !== e.x5 && (a.lineTo(Math.round(e.x5), Math.round(e.y5)), a.lineTo(Math.round(e.x6), Math.round(e.y6))), a.closePath(), a.fillStyle = c ? c : e.color, a.fill(), a.globalAplha = 1, a.restore());
    };
    u2.prototype.renderFunnel = function(a) {
      function e() {
        for (var a2 = 0, b2 = [], c2 = 0; c2 < z.length; c2++) {
          if ("undefined" === typeof z[c2].y) return -1;
          z[c2].y = "number" === typeof z[c2].y ? z[c2].y : 0;
          a2 += Math.abs(z[c2].y);
        }
        if (0 === a2) return -1;
        for (c2 = b2[0] = 0; c2 < z.length; c2++) b2.push(Math.abs(z[c2].y) * F3 / a2);
        return b2;
      }
      function b() {
        var a2 = Z, b2 = Y2, c2 = S, e2 = fa2, g2, h2;
        g2 = P2;
        h2 = U - M3;
        e2 = Math.abs((h2 - g2) * (b2 - a2 + (e2 - c2)) / 2);
        c2 = fa2 - S;
        g2 = h2 - g2;
        h2 = c2 * (h2 - U);
        h2 = Math.abs(h2);
        h2 = e2 + h2;
        for (var e2 = [], l2 = 0, f2 = 0; f2 < z.length; f2++) {
          if ("undefined" === typeof z[f2].y) return -1;
          z[f2].y = "number" === typeof z[f2].y ? z[f2].y : 0;
          l2 += Math.abs(z[f2].y);
        }
        if (0 === l2) return -1;
        for (var d3 = e2[0] = 0, m2 = 0, n2, p2, b2 = b2 - a2, d3 = false, f2 = 0; f2 < z.length; f2++) a2 = Math.abs(z[f2].y) * h2 / l2, d3 ? n2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (p2 = ha2 * ha2 * b2 * b2 - 4 * Math.abs(ha2) * a2, 0 > p2 ? (p2 = c2, d3 = (b2 + p2) * (g2 - m2) / 2, a2 -= d3, n2 = g2 - m2, m2 += g2 - m2, n2 += 0 == p2 ? 0 : a2 / p2, m2 += a2 / p2, d3 = true) : (n2 = (Math.abs(ha2) * b2 - Math.sqrt(p2)) / 2, p2 = b2 - 2 * n2 / Math.abs(ha2), m2 += n2, m2 > g2 && (m2 -= n2, p2 = c2, d3 = (b2 + p2) * (g2 - m2) / 2, a2 -= d3, n2 = g2 - m2, m2 += g2 - m2, n2 += a2 / p2, m2 += a2 / p2, d3 = true), b2 = p2)), e2.push(n2);
        return e2;
      }
      function c() {
        if (v && z) {
          for (var a2, b2, c2, e2, g2, h2, d3, m2, p2, n2, q2, k3, x2, t2, E = [], w2 = [], r3 = { percent: null, total: null }, u4 = null, G = 0; G < z.length; G++) t2 = T[G], t2 = "undefined" !== typeof t2.x5 ? (t2.y2 + t2.y4) / 2 : (t2.y2 + t2.y3) / 2, t2 = l(t2).x2 + 1, E[G] = K3 - t2 - O2;
          t2 = 0.5 * O2;
          for (var G = 0, A3 = z.length - 1; G < z.length || 0 <= A3; G++, A3--) {
            b2 = v.reversed ? z[A3] : z[G];
            a2 = b2.color ? b2.color : v.reversed ? v._colorSet[(z.length - 1 - G) % v._colorSet.length] : v._colorSet[G % v._colorSet.length];
            c2 = b2.indexLabelPlacement || v.indexLabelPlacement || "outside";
            e2 = b2.indexLabelBackgroundColor || v.indexLabelBackgroundColor || (s ? "transparent" : null);
            g2 = b2.indexLabelFontColor || v.indexLabelFontColor || "#979797";
            h2 = f(b2.indexLabelFontSize) ? v.indexLabelFontSize : b2.indexLabelFontSize;
            d3 = b2.indexLabelFontStyle || v.indexLabelFontStyle || "normal";
            m2 = b2.indexLabelFontFamily || v.indexLabelFontFamily || "arial";
            p2 = b2.indexLabelFontWeight || v.indexLabelFontWeight || "normal";
            a2 = b2.indexLabelLineColor || v.options.indexLabelLineColor || a2;
            n2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof v.indexLabelLineThickness ? v.indexLabelLineThickness : 2;
            q2 = b2.indexLabelLineDashType || v.indexLabelLineDashType || "solid";
            k3 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof v.indexLabelWrap ? v.indexLabelWrap : true;
            x2 = v.dataPointIds[G];
            y2._eventManager.objectMap[x2] = { id: x2, objectType: "dataPoint", dataPointIndex: G, dataSeriesIndex: 0, funnelSection: T[v.reversed ? z.length - 1 - G : G] };
            "inside" === v.indexLabelPlacement && (E[G] = G !== ea3 ? v.reversed ? T[G].x2 - T[G].x1 : T[G].x3 - T[G].x4 : T[G].x3 - T[G].x6, 20 > E[G] && (E[G] = G !== ea3 ? v.reversed ? T[G].x3 - T[G].x4 : T[G].x2 - T[G].x1 : T[G].x2 - T[G].x1, E[G] /= 2));
            x2 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : v.options.indexLabelMaxWidth ? v.indexLabelMaxWidth : E[G];
            if (x2 > E[G] || 0 > x2) x2 = E[G];
            w2[G] = "inside" === v.indexLabelPlacement ? T[G].height : false;
            r3 = y2.getPercentAndTotal(v, b2);
            if (v.indexLabelFormatter || b2.indexLabelFormatter) u4 = {
              chart: y2.options,
              dataSeries: v,
              dataPoint: b2,
              total: r3.total,
              percent: r3.percent
            };
            b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(u4) : b2.indexLabel ? y2.replaceKeywordsWithValue(b2.indexLabel, b2, v, G) : v.indexLabelFormatter ? v.indexLabelFormatter(u4) : v.indexLabel ? y2.replaceKeywordsWithValue(v.indexLabel, b2, v, G) : b2.label ? b2.label : "";
            0 >= n2 && (n2 = 0);
            1e3 > x2 && 1e3 - x2 < t2 && (x2 += 1e3 - x2);
            Q2.roundRect || Ha(Q2);
            c2 = new na(Q2, { fontSize: h2, fontFamily: m2, fontColor: g2, fontStyle: d3, fontWeight: p2, horizontalAlign: c2, backgroundColor: e2, maxWidth: x2, maxHeight: false === w2[G] ? k3 ? 4.28571429 * h2 : 1.5 * h2 : w2[G], text: b2, padding: ia2 });
            c2.measureText();
            J.push({ textBlock: c2, id: v.reversed ? A3 : G, isDirty: false, lineColor: a2, lineThickness: n2, lineDashType: q2, height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight, width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth });
          }
        }
      }
      function g() {
        var a2, b2, c2, e2, g2, h2 = [];
        g2 = false;
        c2 = 0;
        for (var l2, f2 = K3 - Y2 - O2 / 2, f2 = v.options.indexLabelMaxWidth ? v.indexLabelMaxWidth > f2 ? f2 : v.indexLabelMaxWidth : f2, d3 = J.length - 1; 0 <= d3; d3--) {
          l2 = z[J[d3].id];
          c2 = J[d3];
          e2 = c2.textBlock;
          b2 = (a2 = q(d3) < T.length ? J[q(d3)] : null) ? a2.textBlock : null;
          c2 = c2.height;
          a2 && e2.y + c2 + ia2 > b2.y && (g2 = true);
          c2 = l2.indexLabelMaxWidth || f2;
          if (c2 > f2 || 0 > c2) c2 = f2;
          h2.push(c2);
        }
        if (g2) for (d3 = J.length - 1; 0 <= d3; d3--) a2 = T[d3], J[d3].textBlock.maxWidth = h2[h2.length - (d3 + 1)], J[d3].textBlock.measureText(), J[d3].textBlock.x = K3 - f2, c2 = J[d3].textBlock.height < J[d3].textBlock.maxHeight ? J[d3].textBlock.height : J[d3].textBlock.maxHeight, g2 = J[d3].textBlock.width < J[d3].textBlock.maxWidth ? J[d3].textBlock.width : J[d3].textBlock.maxWidth, J[d3].height = c2, J[d3].width = g2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, J[d3].textBlock.y = c2 - J[d3].height / 2, v.reversed ? (J[d3].textBlock.y + J[d3].height > W3 + B && (J[d3].textBlock.y = W3 + B - J[d3].height), J[d3].textBlock.y < Da - B && (J[d3].textBlock.y = Da - B)) : (J[d3].textBlock.y < W3 - B && (J[d3].textBlock.y = W3 - B), J[d3].textBlock.y + J[d3].height > Da + B && (J[d3].textBlock.y = Da + B - J[d3].height));
      }
      function h() {
        var a2, b2, c2, e2;
        if ("inside" !== v.indexLabelPlacement) for (var g2 = 0; g2 < T.length; g2++) 0 == J[g2].textBlock.text.length ? J[g2].isDirty = true : (a2 = T[g2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = v.reversed ? "undefined" !== typeof a2.x5 ? c2 > $2 ? l(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < $2 ? l(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, J[g2].textBlock.x = b2 + O2, J[g2].textBlock.y = c2 - J[g2].height / 2, v.reversed ? (J[g2].textBlock.y + J[g2].height > W3 + B && (J[g2].textBlock.y = W3 + B - J[g2].height), J[g2].textBlock.y < Da - B && (J[g2].textBlock.y = Da - B)) : (J[g2].textBlock.y < W3 - B && (J[g2].textBlock.y = W3 - B), J[g2].textBlock.y + J[g2].height > Da + B && (J[g2].textBlock.y = Da + B - J[g2].height)));
        else for (g2 = 0; g2 < T.length; g2++) 0 == J[g2].textBlock.text.length ? J[g2].isDirty = true : (a2 = T[g2], b2 = a2.height, c2 = J[g2].height, e2 = J[g2].width, b2 >= c2 ? (b2 = g2 != ea3 ? (a2.x4 + a2.x3) / 2 - e2 / 2 : (a2.x5 + a2.x4) / 2 - e2 / 2, c2 = g2 != ea3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, J[g2].textBlock.x = b2, J[g2].textBlock.y = c2) : J[g2].isDirty = true);
      }
      function d2() {
        function a2(b3, c3) {
          var e3;
          if (0 > b3 || b3 >= J.length) return 0;
          var g3, h3 = J[b3].textBlock;
          if (0 > c3) {
            c3 *= -1;
            g3 = p(b3);
            e3 = k2(g3, b3);
            if (e3 >= c3) return h3.y -= c3, c3;
            if (0 == b3) return 0 < e3 && (h3.y -= e3), e3;
            e3 += a2(g3, -(c3 - e3));
            0 < e3 && (h3.y -= e3);
            return e3;
          }
          g3 = q(b3);
          e3 = k2(b3, g3);
          if (e3 >= c3) return h3.y += c3, c3;
          if (b3 == T.length - 1) return 0 < e3 && (h3.y += e3), e3;
          e3 += a2(g3, c3 - e3);
          0 < e3 && (h3.y += e3);
          return e3;
        }
        function b2() {
          var a3, e3, g3, h3, l3 = 0, d3;
          h3 = (U - P2 + 2 * B) / n2;
          d3 = n2;
          for (var f3, m3 = 1; m3 < d3; m3++) {
            g3 = m3 * h3;
            for (var k3 = J.length - 1; 0 <= k3; k3--) !J[k3].isDirty && (J[k3].textBlock.y < g3 && J[k3].textBlock.y + J[k3].height > g3) && (f3 = q(k3), !(f3 >= J.length - 1) && J[k3].textBlock.y + J[k3].height + ia2 > J[f3].textBlock.y && (J[k3].textBlock.y = J[k3].textBlock.y + J[k3].height - g3 > g3 - J[k3].textBlock.y ? g3 + 1 : g3 - J[k3].height - 1));
          }
          for (f3 = T.length - 1; 0 < f3; f3--) if (!J[f3].isDirty) {
            g3 = p(f3);
            if (0 > g3 && (g3 = 0, J[g3].isDirty)) break;
            if (J[f3].textBlock.y < J[g3].textBlock.y + J[g3].height) {
              e3 = e3 || f3;
              h3 = f3;
              for (d3 = 0; J[h3].textBlock.y < J[g3].textBlock.y + J[g3].height + ia2; ) {
                a3 = a3 || J[h3].textBlock.y + J[h3].height;
                d3 += J[h3].height;
                d3 += ia2;
                h3 = g3;
                if (0 >= h3) {
                  h3 = 0;
                  d3 += J[h3].height;
                  break;
                }
                g3 = p(h3);
                if (0 > g3) {
                  h3 = 0;
                  d3 += J[h3].height;
                  break;
                }
              }
              if (h3 != f3) {
                l3 = J[h3].textBlock.y;
                a3 -= l3;
                a3 = d3 - a3;
                l3 = c2(a3, e3, h3);
                break;
              }
            }
          }
          return l3;
        }
        function c2(a3, b3, e3) {
          var g3 = [], h3 = 0, d3 = 0;
          for (a3 = Math.abs(a3); e3 <= b3; e3++) g3.push(T[e3]);
          g3.sort(function(a4, b4) {
            return a4.height - b4.height;
          });
          for (e3 = 0; e3 < g3.length; e3++) if (b3 = g3[e3], h3 < a3) d3++, h3 += J[b3.id].height + ia2, J[b3.id].textBlock.text = "", J[b3.id].indexLabelText = "", J[b3.id].isDirty = true, J[b3.id].textBlock.measureText();
          else break;
          return d3;
        }
        for (var e2, g2, h2, l2, f2, m2, n2 = 1, x2 = 0; x2 < 2 * n2; x2++) {
          for (var t2 = J.length - 1; 0 <= t2 && !(0 <= p(t2) && p(t2), h2 = J[t2], l2 = h2.textBlock, m2 = (f2 = q(t2) < T.length ? J[q(t2)] : null) ? f2.textBlock : null, e2 = +h2.height.toFixed(6), g2 = +l2.y.toFixed(6), !h2.isDirty && (f2 && g2 + e2 + ia2 > +m2.y.toFixed(6)) && (e2 = l2.y + e2 + ia2 - m2.y, g2 = a2(t2, -e2), g2 < e2 && (0 < g2 && (e2 -= g2), g2 = a2(q(t2), e2), g2 != e2))); t2--) ;
          b2();
        }
      }
      function k2(a2, b2) {
        return (b2 < T.length ? J[b2].textBlock.y : v.reversed ? W3 + B : Da + B) - (0 > a2 ? v.reversed ? Da - B : W3 - B : J[a2].textBlock.y + J[a2].height + ia2);
      }
      function r2(a2, b2, c2) {
        var e2, g2, d3, l2 = [], f2 = B, p2 = [];
        -1 !== b2 && (0 <= aa2.indexOf(b2) ? (g2 = aa2.indexOf(b2), aa2.splice(g2, 1)) : (aa2.push(b2), aa2 = aa2.sort(function(a3, b3) {
          return a3 - b3;
        })));
        if (0 === aa2.length) l2 = oa2;
        else {
          g2 = B * (1 != aa2.length || 0 != aa2[0] && aa2[0] != T.length - 1 ? 2 : 1) / m();
          for (var q2 = 0; q2 < T.length; q2++) {
            if (1 == aa2.length && 0 == aa2[0]) {
              if (0 === q2) {
                l2.push(oa2[q2]);
                e2 = f2;
                continue;
              }
            } else 0 === q2 && (e2 = -1 * f2);
            l2.push(oa2[q2] + e2);
            if (0 <= aa2.indexOf(q2) || q2 < T.length && 0 <= aa2.indexOf(q2 + 1)) e2 += g2;
          }
        }
        d3 = function() {
          for (var a3 = [], b3 = 0; b3 < T.length; b3++) a3.push(l2[b3] - T[b3].y1);
          return a3;
        }();
        var k3 = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, e3) {
          return w.easing.easeOutQuart(a3, b3, c3, e3);
        }, changeSection: function(a3) {
          for (var b3, c3, e3 = 0; e3 < T.length; e3++) b3 = d3[e3], c3 = T[e3], b3 *= a3, "undefined" === typeof p2[e3] && (p2[e3] = 0), 0 > p2 && (p2 *= -1), c3.y1 += b3 - p2[e3], c3.y2 += b3 - p2[e3], c3.y3 += b3 - p2[e3], c3.y4 += b3 - p2[e3], c3.y5 && (c3.y5 += b3 - p2[e3], c3.y6 += b3 - p2[e3]), p2[e3] = b3;
        } };
        a2._animator.animate(0, c2, function(c3) {
          var e3 = a2.plotArea.ctx || a2.ctx;
          ma3 = true;
          e3.clearRect(A2.x1, A2.y1, A2.x2 - A2.x1, A2.y2 - A2.y1);
          e3.fillStyle = a2.backgroundColor;
          e3.fillRect(A2.x1, A2.y1, A2.width, A2.height);
          k3.changeSection(c3, b2);
          var g3 = {};
          g3.dataSeries = v;
          g3.dataPoint = v.reversed ? v.dataPoints[z.length - 1 - b2] : v.dataPoints[b2];
          g3.index = v.reversed ? z.length - 1 - b2 : b2;
          a2.toolTip.highlightObjects([g3]);
          for (g3 = 0; g3 < T.length; g3++) t(e3, T[g3], v.fillOpacity);
          u3(e3);
          R && ("inside" !== v.indexLabelPlacement ? n(e3) : h(), x(e3));
          1 <= c3 && (ma3 = false);
        }, null, w.easing.easeOutQuart);
      }
      function m() {
        for (var a2 = 0, b2 = 0; b2 < T.length - 1; b2++) (0 <= aa2.indexOf(b2) || 0 <= aa2.indexOf(b2 + 1)) && a2++;
        return a2;
      }
      function n(a2) {
        for (var b2, c2, e2, g2, h2 = 0; h2 < T.length; h2++) g2 = 1 === J[h2].lineThickness % 2 ? 0.5 : 0, c2 = ((T[h2].y2 + T[h2].y4) / 2 << 0) + g2, b2 = l(c2).x2 - 1, e2 = J[h2].textBlock.x, g2 = (J[h2].textBlock.y + J[h2].height / 2 << 0) + g2, J[h2].isDirty || 0 == J[h2].lineThickness || (a2.strokeStyle = J[h2].lineColor, a2.lineWidth = J[h2].lineThickness, a2.setLineDash && a2.setLineDash(N(J[h2].lineDashType, J[h2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(e2, g2), a2.stroke());
      }
      function p(a2) {
        for (a2 -= 1; -1 <= a2 && -1 != a2 && J[a2].isDirty; a2--) ;
        return a2;
      }
      function q(a2) {
        for (a2 += 1; a2 <= T.length && a2 != T.length && J[a2].isDirty; a2++) ;
        return a2;
      }
      function l(a2) {
        for (var b2, c2 = 0; c2 < z.length; c2++) if (T[c2].y1 < a2 && T[c2].y4 > a2) {
          b2 = T[c2];
          break;
        }
        return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
      }
      function x(a2) {
        for (var b2 = 0; b2 < T.length; b2++) J[b2].isDirty || (a2 && (J[b2].textBlock.ctx = a2), J[b2].textBlock.render(true));
      }
      function u3(a2) {
        y2.plotArea.layoutManager.reset();
        a2.roundRect || Ha(a2);
        y2.title && (y2.title.dockInsidePlotArea || "center" === y2.title.horizontalAlign && "center" === y2.title.verticalAlign) && (y2.title.ctx = a2, y2.title.render());
        if (y2.subtitles) for (var b2 = 0; b2 < y2.subtitles.length; b2++) {
          var c2 = y2.subtitles[b2];
          if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign) y2.subtitles.ctx = a2, c2.render();
        }
        y2.legend && (y2.legend.dockInsidePlotArea || "center" === y2.legend.horizontalAlign && "center" === y2.legend.verticalAlign) && (y2.legend.ctx = a2, y2.legend.setLayout(), y2.legend.render());
        Qa.fNg && Qa.fNg(y2);
      }
      var y2 = this;
      if (!(0 >= a.dataSeriesIndexes.length)) {
        for (var v = this.data[a.dataSeriesIndexes[0]], z = v.dataPoints, A2 = this.plotArea, B = 0.025 * A2.width, D = 0.01 * A2.width, C = 0, F3 = A2.height - 2 * B, I2 = Math.min(A2.width - 2 * D, 2.8 * A2.height), R = false, L = 0; L < z.length; L++) if (!R && ("undefined" !== typeof z[L].indexLabel && null !== z[L].indexLabel && 0 < z[L].indexLabel.toString().length) && (R = true), !R && ("undefined" !== typeof z[L].label && null !== z[L].label && 0 < z[L].label.toString().length) && (R = true), !R && "function" === typeof v.indexLabelFormatter || "function" === typeof z[L].indexLabelFormatter) R = true;
        R = R || "undefined" !== typeof v.indexLabel && null !== v.indexLabel && 0 < v.indexLabel.toString().length;
        "inside" !== v.indexLabelPlacement && R || (D = (A2.width - 0.75 * I2) / 2);
        var L = A2.x1 + D, K3 = A2.x2 - D, P2 = A2.y1 + B, U = A2.y2 - B, Q2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
        if (0 != v.length && (v.dataPoints && v.visible) && 0 !== z.length) {
          var M3, H;
          a = 75 * I2 / 100;
          var O2 = 30 * (K3 - a) / 100;
          "funnel" === v.type ? (M3 = f(v.options.neckHeight) ? 0.35 * F3 : v.neckHeight, H = f(v.options.neckWidth) ? 0.25 * a : v.neckWidth, "string" === typeof M3 && M3.match(/%$/) ? (M3 = parseInt(M3), M3 = M3 * F3 / 100) : M3 = parseInt(M3), "string" === typeof H && H.match(/%$/) ? (H = parseInt(H), H = H * a / 100) : H = parseInt(H), M3 > F3 ? M3 = F3 : 0 >= M3 && (M3 = 0), H > a ? H = a - 0.5 : 0 >= H && (H = 0)) : "pyramid" === v.type && (H = M3 = 0, v.reversed = v.reversed ? false : true);
          var D = L + a / 2, Z = L, Y2 = L + a, W3 = v.reversed ? U : P2, S = D - H / 2, fa2 = D + H / 2, $2 = v.reversed ? P2 + M3 : U - M3, Da = v.reversed ? P2 : U;
          a = [];
          var D = [], T = [], I2 = [], X3 = P2, ea3, ha2 = ($2 - W3) / (S - Z), ka3 = -ha2, L = "area" === (v.valueRepresents ? v.valueRepresents : "height") ? b() : e();
          if (-1 !== L) {
            if (v.reversed) for (I2.push(X3), H = L.length - 1; 0 < H; H--) X3 += L[H], I2.push(X3);
            else for (H = 0; H < L.length; H++) X3 += L[H], I2.push(X3);
            if (v.reversed) for (H = 0; H < L.length; H++) I2[H] < $2 ? (a.push(S), D.push(fa2), ea3 = H) : (a.push((I2[H] - W3 + ha2 * Z) / ha2), D.push((I2[H] - W3 + ka3 * Y2) / ka3));
            else for (H = 0; H < L.length; H++) I2[H] < $2 ? (a.push((I2[H] - W3 + ha2 * Z) / ha2), D.push((I2[H] - W3 + ka3 * Y2) / ka3), ea3 = H) : (a.push(S), D.push(fa2));
            for (H = 0; H < L.length - 1; H++) X3 = v.reversed ? z[z.length - 1 - H].color ? z[z.length - 1 - H].color : v._colorSet[(z.length - 1 - H) % v._colorSet.length] : z[H].color ? z[H].color : v._colorSet[H % v._colorSet.length], H === ea3 ? T.push({ x1: a[H], y1: I2[H], x2: D[H], y2: I2[H], x3: fa2, y3: $2, x4: D[H + 1], y4: I2[H + 1], x5: a[H + 1], y5: I2[H + 1], x6: S, y6: $2, id: H, height: I2[H + 1] - I2[H], color: X3 }) : T.push({ x1: a[H], y1: I2[H], x2: D[H], y2: I2[H], x3: D[H + 1], y3: I2[H + 1], x4: a[H + 1], y4: I2[H + 1], id: H, height: I2[H + 1] - I2[H], color: X3 });
            var ia2 = 2, J = [], ma3 = false, aa2 = [], oa2 = [], L = false;
            a = a = 0;
            Ea(aa2);
            for (H = 0; H < z.length; H++) z[H].exploded && (L = true, v.reversed ? aa2.push(z.length - 1 - H) : aa2.push(H));
            Q2.clearRect(A2.x1, A2.y1, A2.width, A2.height);
            Q2.fillStyle = y2.backgroundColor;
            Q2.fillRect(A2.x1, A2.y1, A2.width, A2.height);
            if (R && v.visible && (c(), h(), g(), "inside" !== v.indexLabelPlacement)) {
              d2();
              for (H = 0; H < z.length; H++) J[H].isDirty || (a = J[H].textBlock.x + J[H].width, a = (K3 - a) / 2, 0 == H && (C = a), C > a && (C = a));
              for (H = 0; H < T.length; H++) T[H].x1 += C, T[H].x2 += C, T[H].x3 += C, T[H].x4 += C, T[H].x5 && (T[H].x5 += C, T[H].x6 += C), J[H].textBlock.x += C;
            }
            for (H = 0; H < T.length; H++) C = T[H], t(Q2, C, v.fillOpacity), oa2.push(C.y1);
            u3(Q2);
            R && v.visible && ("inside" === v.indexLabelPlacement || y2.animationEnabled || n(Q2), y2.animationEnabled || x());
            if (!R) for (H = 0; H < z.length; H++) C = v.dataPointIds[H], a = { id: C, objectType: "dataPoint", dataPointIndex: H, dataSeriesIndex: 0, funnelSection: T[v.reversed ? z.length - 1 - H : H] }, y2._eventManager.objectMap[C] = a;
            !y2.animationEnabled && L ? r2(y2, -1, 0) : y2.animationEnabled && !y2.animatedRender && r2(y2, -1, 0);
            this.funnelPyramidClickHandler = function(a2) {
              var b2 = -1;
              if (!ma3 && !y2.isAnimating && (f(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = v.reversed ? z.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                a2 = b2;
                if ("funnel" === v.type || "pyramid" === v.type) v.reversed ? z[z.length - 1 - a2].exploded = z[z.length - 1 - a2].exploded ? false : true : z[a2].exploded = z[a2].exploded ? false : true;
                r2(y2, b2, 500);
              }
            };
            return { source: Q2, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
              w.fadeInAnimation(a2, b2);
              1 <= a2 && (r2(y2, -1, 500), u3(y2.plotArea.ctx || y2.ctx));
            }, easingFunction: w.easing.easeInQuad, animationBase: 0 };
          }
        }
      }
    };
    u2.prototype.requestAnimFrame = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1e3 / 60);
      };
    }();
    u2.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    u2.prototype.set = function(a, e, b) {
      b = "undefined" === typeof b ? true : b;
      "options" === a ? (this.options = e, b && this.render()) : u2.base.set.call(this, a, e, b);
    };
    u2.prototype.exportChart = function(a) {
      a = "undefined" === typeof a ? {} : a;
      var e = a.format ? a.format : "png", b = a.fileName ? a.fileName : this.exportFileName;
      if (a.toDataURL) return this.canvas.toDataURL("image/" + e);
      eb(this.canvas, e, b);
    };
    u2.prototype.print = function() {
      var a = this.exportChart({ toDataURL: true }), e = document.createElement("iframe");
      e.setAttribute("class", "canvasjs-chart-print-frame");
      e.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
      e.style.height = this.height + "px";
      this._canvasJSContainer.appendChild(e);
      var b = this, c = e.contentWindow || e.contentDocument.document || e.contentDocument;
      c.document.open();
      c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
      c.document.close();
      setTimeout(function() {
        c.focus();
        c.print();
        setTimeout(
          function() {
            b._canvasJSContainer.removeChild(e);
          },
          1e3
        );
      }, 500);
    };
    u2.prototype.getPercentAndTotal = function(a, e) {
      var b = null, c = null, g = b = null;
      if (0 <= a.type.indexOf("stacked")) c = 0, b = e.x.getTime ? e.x.getTime() : e.x, b in a.plotUnit.yTotals && (c = a.plotUnit.yTotals[b], b = a.plotUnit.yAbsTotals[b], g = isNaN(e.y) ? 0 : 0 === b ? 0 : 100 * (e.y / b));
      else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
        for (b = c = 0; b < a.dataPoints.length; b++) isNaN(a.dataPoints[b].y) || (c += a.dataPoints[b].y);
        g = isNaN(e.y) ? 0 : 100 * (e.y / c);
      }
      return { percent: g, total: c };
    };
    u2.prototype.replaceKeywordsWithValue = function(a, e, b, c, g) {
      var h = this;
      g = "undefined" === typeof g ? 0 : g;
      if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
        var d2 = "#percent", f2 = "#total", k2 = this.getPercentAndTotal(b, e), f2 = isNaN(k2.total) ? f2 : k2.total, d2 = isNaN(k2.percent) ? d2 : k2.percent;
        do {
          k2 = "";
          if (b.percentFormatString) k2 = b.percentFormatString;
          else {
            var k2 = "#,##0.", m = Math.max(Math.ceil(Math.log(1 / Math.abs(d2)) / Math.LN10), 2);
            if (isNaN(m) || !isFinite(m)) m = 2;
            for (var n = 0; n < m; n++) k2 += "#";
            b.percentFormatString = k2;
          }
          a = a.replace("#percent", $(d2, k2, h._cultureInfo));
          a = a.replace("#total", $(f2, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", h._cultureInfo));
        } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
      }
      return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
        if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1]) return a2.slice(1, a2.length - 1);
        a2 = Pa(a2.slice(1, a2.length - 1));
        a2 = a2.replace("#index", g);
        var d3 = null;
        try {
          var l = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
          l && 0 < l.length && (d3 = Pa(l[2]), a2 = Pa(l[1]));
        } catch (f3) {
        }
        l = null;
        if ("color" === a2) return "waterfall" === b.type ? e.color ? e.color : 0 < e.y ? b.risingColor : b.fallingColor : "error" === b.type ? b.color ? b.color : b._colorSet[d3 % b._colorSet.length] : e.color ? e.color : b.color ? b.color : b._colorSet[c % b._colorSet.length];
        if (e.hasOwnProperty(a2)) l = e;
        else if (b.hasOwnProperty(a2)) l = b;
        else return "";
        l = l[a2];
        null !== d3 && (l = l[d3]);
        if ("x" === a2) if ("dateTime" === b.axisX.valueType || "dateTime" === b.xValueType || e.x && e.x.getTime) {
          if (!b.axisX.logarithmic) return oa(
            l,
            e.xValueFormatString ? e.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY",
            h._cultureInfo
          );
        } else return $(l, e.xValueFormatString ? e.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = "#,##0.########", h._cultureInfo);
        else return "y" === a2 ? $(
          l,
          e.yValueFormatString ? e.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########",
          h._cultureInfo
        ) : "z" === a2 ? $(l, e.zValueFormatString ? e.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", h._cultureInfo) : l;
      });
    };
    ha(M2, Q);
    M2.prototype.setLayout = function() {
      var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, e = a.layoutManager.getFreeSpace(), b = null, c = 0, g = 0, h = 0, d2 = 0, k2 = this.markerMargin = this.chart.options.legend && !f(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
      this.height = 0;
      var t2 = [], m = [];
      "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : e.width, d2 = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * e.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * e.width, d2 = this.maxHeight = null !== this.maxHeight ? this.maxHeight : e.height);
      this.errorMarkerColor = [];
      for (var n = 0; n < this.dataSeries.length; n++) {
        var p = this.dataSeries[n];
        if (p.dataPoints && p.dataPoints.length) if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
          var q = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : I.getDefaultLegendMarker(p._linkedSeries.type) : I.getDefaultLegendMarker(p.type) : p.markerType, l = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: null }) : p.name, x = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? f(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0], w2 = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0, r2 = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor, v = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w2)) : 0;
          "error" === p.type && this.errorMarkerColor.push(x);
          l = this.chart.replaceKeywordsWithValue(l, p.dataPoints[0], p, n);
          q = { markerType: q, markerColor: x, text: l, textBlock: null, chartType: p.type, markerSize: w2, lineColor: p._colorSet[0], dataSeriesIndex: p.index, dataPointIndex: null, markerBorderColor: r2, markerBorderThickness: v };
          t2.push(q);
        } else for (var s2 = 0; s2 < p.dataPoints.length; s2++) {
          var u3 = p.dataPoints[s2], q = u3.legendMarkerType ? u3.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : I.getDefaultLegendMarker(p.type), l = u3.legendText ? u3.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: u3 }) : u3.name ? u3.name : "DataPoint: " + (s2 + 1), x = u3.legendMarkerColor ? u3.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : u3.color ? u3.color : p.color ? p.color : p._colorSet[s2 % p._colorSet.length], w2 = 0.75 * this.lineHeight, r2 = u3.legendMarkerBorderColor ? u3.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : u3.markerBorderColor ? u3.markerBorderColor : p.markerBorderColor, v = u3.legendMarkerBorderThickness ? u3.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : u3.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w2)) : 0, l = this.chart.replaceKeywordsWithValue(l, u3, p, s2), q = { markerType: q, markerColor: x, text: l, textBlock: null, chartType: p.type, markerSize: w2, dataSeriesIndex: n, dataPointIndex: s2, markerBorderColor: r2, markerBorderThickness: v };
          (u3.showInLegend || p.showInLegend && false !== u3.showInLegend) && t2.push(q);
        }
      }
      true === this.reversed && t2.reverse();
      if (0 < t2.length) {
        p = null;
        x = l = u3 = s2 = 0;
        u3 = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, h) : this.itemMaxWidth = Math.min(this.itemWidth, h) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, h) : this.itemMaxWidth = h;
        w2 = 0 === w2 ? 0.75 * this.lineHeight : w2;
        u3 -= w2 + k2;
        for (n = 0; n < t2.length; n++) {
          q = t2[n];
          r2 = u3;
          if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) r2 -= 2 * 0.1 * this.lineHeight;
          if (!(0 >= d2 || "undefined" === typeof d2 || 0 >= r2 || "undefined" === typeof r2)) {
            if ("horizontal" === this.orientation) {
              q.textBlock = new na(this.ctx, { x: 0, y: 0, maxWidth: r2, maxHeight: this.itemWrap ? d2 : this.lineHeight, angle: 0, text: q.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" });
              q.textBlock.measureText();
              null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w2 + k2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
              if (!p || p.width + Math.round(q.textBlock.width + w2 + k2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > h) p = { items: [], width: 0 }, m.push(p), this.height += l, l = 0;
              l = Math.max(l, q.textBlock.height);
            } else q.textBlock = new na(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: u3,
              maxHeight: true === this.itemWrap ? d2 : 1.5 * this.fontSize,
              angle: 0,
              text: q.text,
              horizontalAlign: "left",
              fontSize: this.fontSize,
              fontFamily: this.fontFamily,
              fontWeight: this.fontWeight,
              fontColor: this.fontColor,
              fontStyle: this.fontStyle,
              textBaseline: "middle"
            }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w2 + k2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < d2 - this.lineHeight ? (p = { items: [], width: 0 }, m.push(p)) : (p = m[s2], s2 = (s2 + 1) % m.length), this.height += q.textBlock.height;
            q.textBlock.x = p.width;
            q.textBlock.y = 0;
            p.width += Math.round(q.textBlock.width + w2 + k2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
            p.items.push(q);
            this.width = Math.max(p.width, this.width);
            x = q.textBlock.width + (w2 + k2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
          }
        }
        this.itemWidth = x;
        this.height = false === this.itemWrap ? m.length * this.lineHeight : this.height + l;
        this.height = Math.min(d2, this.height);
        this.width = Math.min(h, this.width);
      }
      "top" === this.verticalAlign ? (g = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, c = e.y1) : "center" === this.verticalAlign ? (g = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, c = e.y1 + e.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (g = "left" === this.horizontalAlign ? e.x1 : "right" === this.horizontalAlign ? e.x2 - this.width : e.x1 + e.width / 2 - this.width / 2, c = e.y2 - this.height);
      this.items = t2;
      for (n = 0; n < this.items.length; n++) q = t2[n], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = { id: q.id, objectType: "legendItem", legendItemIndex: n, dataSeriesIndex: q.dataSeriesIndex, dataPointIndex: q.dataPointIndex };
      this.markerSize = w2;
      this.rows = m;
      0 < t2.length && a.layoutManager.registerSpace(b, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
      this.bounds = { x1: g, y1: c, x2: g + this.width, y2: c + this.height };
    };
    M2.prototype.render = function() {
      var a = this.bounds.x1, e = this.bounds.y1, b = this.markerMargin, c = this.maxWidth, g = this.maxHeight, h = this.markerSize, d2 = this.rows;
      (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, e, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
      for (var f2 = 0, k2 = 0; k2 < d2.length; k2++) {
        for (var m = d2[k2], n = 0, p = 0; p < m.items.length; p++) {
          var q = m.items[p], l = q.textBlock.x + a + (0 === p ? 0.2 * h : this.horizontalSpacing), x = e + f2, t2 = l;
          this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(a, e, c, Math.max(g - g % this.lineHeight, 0));
          this.ctx.clip();
          if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(l - 0.1 * this.lineHeight, x + this.lineHeight / 2), this.ctx.lineTo(l + 0.85 * this.lineHeight, x + this.lineHeight / 2), this.ctx.stroke(), t2 -= 0.1 * this.lineHeight;
          if ("error" === q.chartType) {
            this.ctx.strokeStyle = this.errorMarkerColor[0];
            this.ctx.lineWidth = h / 8;
            this.ctx.beginPath();
            var w2 = l - 0.08 * this.lineHeight + 0.1 * this.lineHeight, v = x + 0.15 * this.lineHeight, s2 = 0.7 * this.lineHeight, u3 = s2 + 0.02 * this.lineHeight;
            this.ctx.moveTo(w2, v);
            this.ctx.lineTo(w2 + s2, v);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(w2 + s2 / 2, v);
            this.ctx.lineTo(w2 + s2 / 2, v + u3);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(w2, v + u3);
            this.ctx.lineTo(w2 + s2, v + u3);
            this.ctx.stroke();
            this.errorMarkerColor.shift();
          }
          r.drawMarker(
            l + h / 2,
            x + this.lineHeight / 2,
            this.ctx,
            q.markerType,
            "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize,
            q.markerColor,
            q.markerBorderColor,
            q.markerBorderThickness
          );
          q.textBlock.x = l + b + h;
          if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
          q.textBlock.y = Math.round(x + this.lineHeight / 2);
          q.textBlock.render(true);
          this.ctx.restore();
          n = 0 < p ? Math.max(n, q.textBlock.height) : q.textBlock.height;
          this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
          l = O(q.id);
          this.ghostCtx.fillStyle = l;
          this.ghostCtx.beginPath();
          this.ghostCtx.fillRect(t2, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - t2, q.textBlock.height);
          q.x1 = this.chart._eventManager.objectMap[q.id].x1 = t2;
          q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
          q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
          q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2;
        }
        f2 += n;
      }
    };
    ha(I, Q);
    I.prototype.getDefaultAxisPlacement = function() {
      var a = this.type;
      if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
      if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
      if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
      "error" !== a && window.console.log("Unknown Chart Type: " + a);
      return null;
    };
    I.getDefaultLegendMarker = function(a) {
      if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
      if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
      if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
      if ("error" === a) return "none";
      window.console.log("Unknown Chart Type: " + a);
      return null;
    };
    I.prototype.getDataPointAtX = function(a, e) {
      if (!this.dataPoints || 0 === this.dataPoints.length) return null;
      var b = { dataPoint: null, distance: Infinity, index: NaN }, c = null, g = 0, h = 0, d2 = 1, f2 = Infinity, k2 = 0, m = 0, n = 0;
      "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
      for (; ; ) {
        h = 0 < d2 ? n + g : n - g;
        if (0 <= h && h < this.dataPoints.length) {
          var c = this.dataPoints[h], p = this.axisX.logarithmic ? c.x > a ? c.x / a : a / c.x : Math.abs(c.x - a);
          p < b.distance && (b.dataPoint = c, b.distance = p, b.index = h);
          c = p;
          c <= f2 ? f2 = c : 0 < d2 ? k2++ : m++;
          if (1e3 < k2 && 1e3 < m) break;
        } else if (0 > n - g && n + g >= this.dataPoints.length) break;
        -1 === d2 ? (g++, d2 = 1) : d2 = -1;
      }
      return e || (b.dataPoint.x.getTime ? b.dataPoint.x.getTime() : b.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? e && null !== b.dataPoint ? b : null : b;
    };
    I.prototype.getDataPointAtXY = function(a, e, b) {
      if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || e < this.chart.plotArea.y1 || e > this.chart.plotArea.y2) return null;
      b = b || false;
      var c = [], g = 0, h = 0, d2 = 1, f2 = false, k2 = Infinity, m = 0, n = 0, p = 0;
      if ("none" !== this.chart.plotInfo.axisPlacement) if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: e }), this.axisX.logarithmic) var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
      else q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
      for (; ; ) {
        h = 0 < d2 ? p + g : p - g;
        if (0 <= h && h < this.dataPoints.length) {
          var q = this.chart._eventManager.objectMap[this.dataPointIds[h]], l = this.dataPoints[h], t2 = null;
          if (q) {
            switch (this.type) {
              case "column":
              case "stackedColumn":
              case "stackedColumn100":
              case "bar":
              case "stackedBar":
              case "stackedBar100":
              case "rangeColumn":
              case "rangeBar":
              case "waterfall":
              case "error":
                a >= q.x1 && (a <= q.x2 && e >= q.y1 && e <= q.y2) && (c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - e), Math.abs(q.y2 - e)) }), f2 = true);
                break;
              case "line":
              case "stepLine":
              case "spline":
              case "area":
              case "stepArea":
              case "stackedArea":
              case "stackedArea100":
              case "splineArea":
              case "scatter":
                var w2 = sa("markerSize", l, this) || 4, r2 = b ? 20 : w2, t2 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - e, 2));
                t2 <= r2 && c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: t2 });
                q = Math.abs(q.x1 - a);
                q <= k2 ? k2 = q : 0 < d2 ? m++ : n++;
                t2 <= w2 / 2 && (f2 = true);
                break;
              case "rangeArea":
              case "rangeSplineArea":
                w2 = sa("markerSize", l, this) || 4;
                r2 = b ? 20 : w2;
                t2 = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - e, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - e, 2)));
                t2 <= r2 && c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: t2 });
                q = Math.abs(q.x1 - a);
                q <= k2 ? k2 = q : 0 < d2 ? m++ : n++;
                t2 <= w2 / 2 && (f2 = true);
                break;
              case "bubble":
                w2 = q.size;
                t2 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - e, 2));
                t2 <= w2 / 2 && (c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: t2 }), f2 = true);
                break;
              case "pie":
              case "doughnut":
                w2 = q.center;
                r2 = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                t2 = Math.sqrt(Math.pow(w2.x - a, 2) + Math.pow(w2.y - e, 2));
                t2 < q.radius && t2 > r2 && (t2 = Math.atan2(e - w2.y, a - w2.x), 0 > t2 && (t2 += 2 * Math.PI), t2 = Number(((180 * (t2 / Math.PI) % 360 + 360) % 360).toFixed(12)), w2 = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), r2 = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === r2 && 1 < q.endAngle && (r2 = 360), w2 >= r2 && 0 !== l.y && (r2 += 360, t2 < w2 && (t2 += 360)), t2 > w2 && t2 < r2 && (c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: 0 }), f2 = true));
                break;
              case "funnel":
              case "pyramid":
                t2 = q.funnelSection;
                e > t2.y1 && e < t2.y4 && (t2.y6 ? e > t2.y6 ? (h = t2.x6 + (t2.x5 - t2.x6) / (t2.y5 - t2.y6) * (e - t2.y6), t2 = t2.x3 + (t2.x4 - t2.x3) / (t2.y4 - t2.y3) * (e - t2.y3)) : (h = t2.x1 + (t2.x6 - t2.x1) / (t2.y6 - t2.y1) * (e - t2.y1), t2 = t2.x2 + (t2.x3 - t2.x2) / (t2.y3 - t2.y2) * (e - t2.y2)) : (h = t2.x1 + (t2.x4 - t2.x1) / (t2.y4 - t2.y1) * (e - t2.y1), t2 = t2.x2 + (t2.x3 - t2.x2) / (t2.y3 - t2.y2) * (e - t2.y2)), a > h && a < t2 && (c.push({ dataPoint: l, dataPointIndex: q.dataPointIndex, dataSeries: this, distance: 0 }), f2 = true));
                break;
              case "boxAndWhisker":
                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && e >= q.y4 - q.borderThickness / 2 && e <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && e >= q.y1 && e <= q.y4) c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - e), Math.abs(q.y3 - e)) }), f2 = true;
                break;
              case "candlestick":
                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && e >= q.y2 - q.borderThickness / 2 && e <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && e >= q.y1 && e <= q.y4) c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: Math.min(
                  Math.abs(q.x1 - a),
                  Math.abs(q.x2 - a),
                  Math.abs(q.y2 - e),
                  Math.abs(q.y3 - e)
                ) }), f2 = true;
                break;
              case "ohlc":
                if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && e >= q.y2 && e <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && e >= q.y1 - q.borderThickness / 2 && e <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && e >= q.y4 - q.borderThickness / 2 && e <= q.y4 + q.borderThickness / 2) c.push({ dataPoint: l, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - e), Math.abs(q.y3 - e)) }), f2 = true;
            }
            if (f2 || 1e3 < m && 1e3 < n) break;
          }
        } else if (0 > p - g && p + g >= this.dataPoints.length) break;
        -1 === d2 ? (g++, d2 = 1) : d2 = -1;
      }
      a = null;
      for (e = 0; e < c.length; e++) a ? c[e].distance <= a.distance && (a = c[e]) : a = c[e];
      return a;
    };
    I.prototype.getMarkerProperties = function(a, e, b, c) {
      var g = this.dataPoints;
      return { x: e, y: b, ctx: c, type: g[a].markerType ? g[a].markerType : this.markerType, size: g[a].markerSize ? g[a].markerSize : this.markerSize, color: g[a].markerColor ? g[a].markerColor : this.markerColor ? this.markerColor : g[a].color ? g[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], borderColor: g[a].markerBorderColor ? g[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, borderThickness: g[a].markerBorderThickness ? g[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null };
    };
    ha(A, Q);
    A.prototype.createExtraLabelsForLog = function(a) {
      a = (a || 0) + 1;
      if (!(5 < a)) {
        var e = this.logLabelValues[0] || this.intervalStartPosition;
        if (Math.log(this.range) / Math.log(e / this.viewportMinimum) < this.noTicks - 1) {
          for (var b = A.getNiceNumber((e - this.viewportMinimum) / Math.min(
            Math.max(2, this.noTicks - this.logLabelValues.length),
            3
          ), true), c = Math.ceil(this.viewportMinimum / b) * b; c < e; c += b) c < this.viewportMinimum || this.logLabelValues.push(c);
          this.logLabelValues.sort(Ya);
          this.createExtraLabelsForLog(a);
        }
      }
    };
    A.prototype.createLabels = function() {
      var a, e, b = 0, c = 0, g, h = 0, d2 = 0, c = 0, c = this.interval, k2 = 0, t2, m = 0.6 * this.chart.height, n;
      a = false;
      var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], q = p.length ? f(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
      if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
        g = this.viewportMaximum;
        if (this.labels) {
          a = Math.ceil(c);
          for (var c = Math.ceil(this.intervalStartPosition), l = false, b = c; b < this.viewportMaximum; b += a) if (this.labels[b]) l = true;
          else {
            l = false;
            break;
          }
          l && (this.interval = a, this.intervalStartPosition = c);
        }
        if (this.logarithmic && !this.equidistantInterval) for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), c = 0, l = q; c < this.logLabelValues.length; c++) if (b = this.logLabelValues[c], b < this.viewportMinimum) c++;
        else {
          for (; l < p.length && b > p[l].endValue; l++) ;
          a = l < p.length && b >= p[l].startValue && b <= p[l].endValue;
          n = b;
          a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: n, label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : $(n, this.valueFormatString, this.chart._cultureInfo), a = new na(this.ctx, {
            x: 0,
            y: 0,
            maxWidth: h,
            maxHeight: d2,
            angle: this.labelAngle,
            text: this.prefix + a + this.suffix,
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            cornerRadius: this.labelCornerRadius,
            textAlign: this.labelTextAlign,
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle",
            borderThickness: 0
          }), this._labels.push({ position: n, textBlock: a, effectiveHeight: null }));
        }
        l = q;
        for (b = this.intervalStartPosition; b <= g; b = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval : (this.logarithmic && this.equidistantInterval ? b * Math.pow(
          this.logarithmBase,
          this.interval
        ) : b + this.interval).toFixed(12))) {
          for (; l < p.length && b > p[l].endValue; l++) ;
          a = l < p.length && b >= p[l].startValue && b <= p[l].endValue;
          n = b;
          a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: n, label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : $(n, this.valueFormatString, this.chart._cultureInfo), a = new na(this.ctx, {
            x: 0,
            y: 0,
            maxWidth: h,
            maxHeight: d2,
            angle: this.labelAngle,
            text: this.prefix + a + this.suffix,
            textAlign: this.labelTextAlign,
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          }), this._labels.push({ position: n, textBlock: a, effectiveHeight: null }));
        }
      } else for (this.intervalStartPosition = this.getLabelStartPoint(
        new Date(this.viewportMinimum),
        this.intervalType,
        this.interval
      ), g = db(new Date(this.viewportMaximum), this.interval, this.intervalType), l = q, b = this.intervalStartPosition; b < g; db(b, c, this.intervalType)) {
        for (a = b.getTime(); l < p.length && a > p[l].endValue; l++) ;
        n = a;
        a = l < p.length && a >= p[l].startValue && a <= p[l].endValue;
        a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(n), label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : oa(n, this.valueFormatString, this.chart._cultureInfo), a = new na(this.ctx, { x: 0, y: 0, maxWidth: h, backgroundColor: this.labelBackgroundColor, borderColor: this.labelBorderColor, borderThickness: this.labelBorderThickness, cornerRadius: this.labelCornerRadius, maxHeight: d2, angle: this.labelAngle, text: this.prefix + a + this.suffix, textAlign: this.labelTextAlign, fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle" }), this._labels.push({
          position: n,
          textBlock: a,
          effectiveHeight: null,
          breaksLabelType: void 0
        }));
      }
      if ("bottom" === this._position || "top" === this._position) k2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * Y[this.intervalType + "Duration"] * this.interval, h = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
      else if ("left" === this._position || "right" === this._position) k2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * Y[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
      for (c = 0; c < this._labels.length; c++) {
        a = this._labels[c].textBlock;
        a.maxWidth = h;
        a.maxHeight = d2;
        var w2 = a.measureText();
        t2 = w2.height;
      }
      g = [];
      q = p = 0;
      if (this.labelAutoFit || this.options.labelAutoFit) {
        if (f(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position) if (h = 0.9 * k2 >> 0, q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
          this.sessionVariables.labelFontSize = this.labelFontSize;
          this.sessionVariables.labelMaxWidth = h;
          this.sessionVariables.labelMaxHeight = d2;
          this.sessionVariables.labelAngle = this.labelAngle;
          this.sessionVariables.labelWrap = this.labelWrap;
          for (b = 0; b < this._labels.length; b++) if (!this._labels[b].breaksLabelType) {
            a = this._labels[b].textBlock;
            for (var r2, l = a.text.split(" "), c = 0; c < l.length; c++) n = l[c], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, n = this.ctx.measureText(n), n.width > q && (r2 = b, q = n.width);
          }
          b = 0;
          for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++) if (!this._labels[b].breaksLabelType) {
            a = this._labels[b].textBlock;
            w2 = a.measureText();
            for (l = b + 1; l < this._labels.length; l++) if (!this._labels[l].breaksLabelType) {
              e = this._labels[l].textBlock;
              e = e.measureText();
              break;
            }
            g.push(a.height);
            this.sessionVariables.labelMaxHeight = Math.max.apply(Math, g);
            Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
            c = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
            if (f(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle) if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((c - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), n = (m - (t2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !f(this.options.labelWrap)) this.labelWrap ? f(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), n), this.sessionVariables.labelWrap = this.labelWrap, e && w2.width + e.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle) : f(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, e && w2.width + e.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = this.labelWrap);
            else {
              if (f(this.options.labelWrap)) {
                if (!f(this.options.labelMaxWidth)) this.options.labelMaxWidth < h ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2);
                else if (!f(e)) {
                  if (c = w2.width + e.width >> 0, l = this.labelFontSize, q < h) c - 2 * h > p && (p = c - 2 * h, c >= 2 * h && c < 2.2 * h ? (this.sessionVariables.labelMaxWidth = h, f(this.options.labelFontSize) && 12 < l && (l = Math.floor(12 / 13 * l), a.measureText()), this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 2.2 * h && c < 2.8 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = l) : c >= 2.8 * h && c < 3.2 * h ? (this.sessionVariables.labelMaxWidth = Math.max(h, q), this.sessionVariables.labelWrap = true, f(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : c >= 3.2 * h && c < 3.6 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = this.labelFontSize) : c > 3.6 * h && c < 5 * h ? (f(this.options.labelFontSize) && 12 < l && (l = Math.floor(12 / 13 * l), a.measureText()), this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n) : c > 5 * h && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelFontSize = l, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = this.labelAngle));
                  else if (r2 === b && (0 === r2 && q + this._labels[r2 + 1].textBlock.measureText().width - 2 * h > p || r2 === this._labels.length - 1 && q + this._labels[r2 - 1].textBlock.measureText().width - 2 * h > p || 0 < r2 && r2 < this._labels.length - 1 && q + this._labels[r2 + 1].textBlock.measureText().width - 2 * h > p && q + this._labels[r2 - 1].textBlock.measureText().width - 2 * h > p)) p = 0 === r2 ? q + this._labels[r2 + 1].textBlock.measureText().width - 2 * h : q + this._labels[r2 - 1].textBlock.measureText().width - 2 * h, this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n;
                  else if (0 === p) for (this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelWrap = true, c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), n), w2 = a.measureText(), c < this._labels.length - 1 && (l = c + 1, e = this._labels[l].textBlock, e.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), n), e = e.measureText(), w2.width + e.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25));
                }
              }
            }
            else (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((c - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), n = 0 != this.labelAngle ? (m - (t2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : h, this.sessionVariables.labelMaxHeight = this.labelWrap ? (m - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, f(this.options.labelWrap)) ? f(this.options.labelWrap) && (this.labelWrap && !f(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelMaxHeight = c < 0.9 * k2 ? 0.9 * k2 : c, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n) : (f(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = d2);
          }
          for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
        } else for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = f(this.options.labelMaxWidth) ? f(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = f(this.options.labelFontSize) ? f(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = f(this.options.labelAngle) ? f(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = f(this.options.labelWrap) ? f(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = f(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
        else if ("left" === this._position || "right" === this._position) if (h = f(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
          this.sessionVariables.labelFontSize = this.labelFontSize;
          this.sessionVariables.labelMaxWidth = h;
          this.sessionVariables.labelMaxHeight = d2;
          this.sessionVariables.labelAngle = f(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
          this.sessionVariables.labelWrap = this.labelWrap;
          for (b = 0; b < this._labels.length; b++) if (!this._labels[b].breaksLabelType) {
            a = this._labels[b].textBlock;
            w2 = a.measureText();
            for (l = b + 1; l < this._labels.length; l++) if (!this._labels[l].breaksLabelType) {
              e = this._labels[l].textBlock;
              e = e.measureText();
              break;
            }
            g.push(a.height);
            this.sessionVariables.labelMaxHeight = Math.max.apply(Math, g);
            c = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
            Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
            f(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? f(this.options.labelWrap) ? f(this.options.labelWrap) && (f(this.options.labelMaxWidth) ? f(e) || (k2 = w2.height + e.height >> 0, k2 - 2 * d2 > q && (q = k2 - 2 * d2, k2 >= 2 * d2 && k2 < 2.4 * d2 ? (f(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : k2 >= 2.4 * d2 && k2 < 2.8 * d2 ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : k2 >= 2.8 * d2 && k2 < 3.2 * d2 ? (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = true, f(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = f(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k2 >= 3.2 * d2 && k2 < 3.6 * d2 ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : k2 > 3.6 * d2 && k2 < 10 * d2 ? (f(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = f(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k2 > 10 * d2 && k2 < 50 * d2 && (f(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = f(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelAngle = f(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min((c - d2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), d2), f(this.options.labelWrap)) ? f(this.options.labelWrap) && (this.labelWrap && !f(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : c, f(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : c, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = h) : (this.sessionVariables.labelMaxHeight = d2, f(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
          }
          for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
        } else for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = f(this.options.labelMaxWidth) ? f(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = f(this.options.labelFontSize) ? f(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = f(this.options.labelAngle) ? f(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = f(this.options.labelWrap) ? f(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = f(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
      }
      for (b = 0; b < this.stripLines.length; b++) {
        var h = this.stripLines[b], u3;
        if ("outside" === h.labelPlacement) {
          d2 = this.sessionVariables.labelMaxWidth;
          if ("bottom" === this._position || "top" === this._position) f(h.options.labelWrap) && !f(this.sessionVariables.stripLineLabelMaxHeight) ? u3 = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = u3 = h.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          if ("left" === this._position || "right" === this._position) f(h.options.labelWrap) && !f(this.sessionVariables.stripLineLabelMaxHeight) ? u3 = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = u3 = h.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
          f(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
        } else d2 = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, u3 = f(h.options.labelWrap) || h.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, f(h.labelBackgroundColor) && (f(h.startValue) && 0 !== h.startValue ? h.labelBackgroundColor = s ? "transparent" : null : h.labelBackgroundColor = "#EEEEEE");
        a = new na(this.ctx, { x: 0, y: 0, backgroundColor: h.labelBackgroundColor, borderColor: h.labelBorderColor, borderThickness: h.labelBorderThickness, cornerRadius: h.labelCornerRadius, maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : d2, maxHeight: u3, angle: this.labelAngle, text: h.labelFormatter ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h }) : h.label, textAlign: this.labelTextAlign, fontSize: "outside" === h.labelPlacement ? h.options.labelFontSize ? h.labelFontSize : this.labelFontSize : h.labelFontSize, fontFamily: "outside" === h.labelPlacement ? h.options.labelFontFamily ? h.labelFontFamily : this.labelFontFamily : h.labelFontFamily, fontWeight: "outside" === h.labelPlacement ? h.options.labelFontWeight ? h.labelFontWeight : this.labelFontWeight : h.labelFontWeight, fontColor: h.labelFontColor || h.color, fontStyle: "outside" === h.labelPlacement ? h.options.labelFontStyle ? h.labelFontStyle : this.fontWeight : h.labelFontStyle, textBaseline: "middle" });
        this._stripLineLabels.push({ position: h.value, textBlock: a, effectiveHeight: null, stripLine: h });
      }
    };
    A.prototype.createLabelsAndCalculateWidth = function() {
      var a = 0, e = 0;
      this._labels = [];
      this._stripLineLabels = [];
      var b = this.chart.isNavigator ? 0 : 5;
      if ("left" === this._position || "right" === this._position) {
        this.createLabels();
        if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index) for (e = 0; e < this._labels.length; e++) {
          var c = this._labels[e].textBlock, g = c.measureText(), h = 0, h = 0 === this.labelAngle ? g.width : g.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - c.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
          a < h && (a = h);
          this._labels[e].effectiveWidth = h;
        }
        for (e = 0; e < this._stripLineLabels.length; e++) "outside" === this._stripLineLabels[e].stripLine.labelPlacement && (this._stripLineLabels[e].stripLine.value >= this.viewportMinimum && this._stripLineLabels[e].stripLine.value <= this.viewportMaximum) && (c = this._stripLineLabels[e].textBlock, g = c.measureText(), h = 0 === this.labelAngle ? g.width : g.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - c.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < h && (a = h), this._stripLineLabels[e].effectiveWidth = h);
      }
      return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b;
    };
    A.prototype.createLabelsAndCalculateHeight = function() {
      var a = 0;
      this._labels = [];
      this._stripLineLabels = [];
      var e, b = 0, c = this.chart.isNavigator ? 0 : 5;
      if ("bottom" === this._position || "top" === this._position) {
        this.createLabels();
        if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index) for (b = 0; b < this._labels.length; b++) {
          e = this._labels[b].textBlock;
          var g = e.measureText(), h = 0, h = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - e.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
          a < h && (a = h);
          this._labels[b].effectiveHeight = h;
        }
        for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (this._stripLineLabels[b].stripLine.value >= this.viewportMinimum && this._stripLineLabels[b].stripLine.value <= this.viewportMaximum) && (e = this._stripLineLabels[b].textBlock, g = e.measureText(), h = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - e.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < h && (a = h), this._stripLineLabels[b].effectiveHeight = h);
      }
      return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c;
    };
    A.setLayout = function(a, e, b, c, g, h) {
      var d2, k2, t2, m, n = a[0] ? a[0].chart : e[0].chart, p = n.isNavigator ? 0 : 10, q = n._axes;
      if (a && 0 < a.length) for (var l = 0; l < a.length; l++) a[l] && a[l].calculateAxisParameters();
      if (e && 0 < e.length) for (l = 0; l < e.length; l++) e[l].calculateAxisParameters();
      if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].calculateAxisParameters();
      if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].calculateAxisParameters();
      for (l = 0; l < q.length; l++) if (q[l] && q[l].scaleBreaks && q[l].scaleBreaks._appliedBreaks.length) for (var w2 = q[l].scaleBreaks._appliedBreaks, r2 = 0; r2 < w2.length && !(w2[r2].startValue > q[l].viewportMaximum); r2++) w2[r2].endValue < q[l].viewportMinimum || (f(q[l].scaleBreaks.firstBreakIndex) && (q[l].scaleBreaks.firstBreakIndex = r2), w2[r2].startValue >= q[l].viewPortMinimum && (q[l].scaleBreaks.lastBreakIndex = r2));
      for (var s2 = r2 = 0, v = 0, u3 = 0, y2 = 0, A2 = 0, D = 0, C, B, F3 = k2 = 0, I2, L, K3, w2 = I2 = L = K3 = false, l = 0; l < q.length; l++) q[l] && q[l].title && (q[l]._titleTextBlock = new na(q[l].ctx, {
        text: q[l].title,
        horizontalAlign: "center",
        fontSize: q[l].titleFontSize,
        fontFamily: q[l].titleFontFamily,
        fontWeight: q[l].titleFontWeight,
        fontColor: q[l].titleFontColor,
        fontStyle: q[l].titleFontStyle,
        borderColor: q[l].titleBorderColor,
        borderThickness: q[l].titleBorderThickness,
        backgroundColor: q[l].titleBackgroundColor,
        cornerRadius: q[l].titleCornerRadius,
        textBaseline: "top"
      }));
      for (l = 0; l < q.length; l++) if (q[l].title) switch (q[l]._position) {
        case "left":
          q[l]._titleTextBlock.maxWidth = q[l].titleMaxWidth || h.height;
          q[l]._titleTextBlock.maxHeight = q[l].titleWrap ? 0.8 * h.width : 1.5 * q[l].titleFontSize;
          q[l]._titleTextBlock.angle = -90;
          break;
        case "right":
          q[l]._titleTextBlock.maxWidth = q[l].titleMaxWidth || h.height;
          q[l]._titleTextBlock.maxHeight = q[l].titleWrap ? 0.8 * h.width : 1.5 * q[l].titleFontSize;
          q[l]._titleTextBlock.angle = 90;
          break;
        default:
          q[l]._titleTextBlock.maxWidth = q[l].titleMaxWidth || h.width, q[l]._titleTextBlock.maxHeight = q[l].titleWrap ? 0.8 * h.height : 1.5 * q[l].titleFontSize, q[l]._titleTextBlock.angle = 0;
      }
      if ("normal" === g) {
        for (var u3 = [], y2 = [], A2 = [], D = [], P2 = [], M3 = [], Q2 = [], N2 = []; 4 > r2; ) {
          var H = 0, U = 0, O2 = 0, W3 = 0, Z = g = 0, S = 0, aa2 = 0, X3 = 0, Y2 = 0, T = 0, $2 = 0;
          if (b && 0 < b.length) for (A2 = [], l = T = 0; l < b.length; l++) A2.push(Math.ceil(b[l] ? b[l].createLabelsAndCalculateWidth() : 0)), T += A2[l], S += b[l] && !n.isNavigator ? b[l].margin : 0;
          else A2.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
          Q2.push(A2);
          if (c && 0 < c.length) for (D = [], l = $2 = 0; l < c.length; l++) D.push(Math.ceil(c[l] ? c[l].createLabelsAndCalculateWidth() : 0)), $2 += D[l], aa2 += c[l] ? c[l].margin : 0;
          else D.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
          N2.push(D);
          d2 = Math.round(h.x1 + T + S);
          t2 = Math.round(h.x2 - $2 - aa2 > n.width - p ? n.width - p : h.x2 - $2 - aa2);
          if (a && 0 < a.length) for (u3 = [], l = X3 = 0; l < a.length; l++) a[l] && (a[l].lineCoordinates = {}), a[l].lineCoordinates.width = Math.abs(t2 - d2), a[l].title && (a[l]._titleTextBlock.maxWidth = 0 < a[l].titleMaxWidth && a[l].titleMaxWidth < a[l].lineCoordinates.width ? a[l].titleMaxWidth : a[l].lineCoordinates.width), u3.push(Math.ceil(a[l] ? a[l].createLabelsAndCalculateHeight() : 0)), X3 += u3[l], g += a[l] && !n.isNavigator ? a[l].margin : 0;
          else u3.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
          P2.push(u3);
          if (e && 0 < e.length) for (y2 = [], l = Y2 = 0; l < e.length; l++) e[l] && (e[l].lineCoordinates = {}), e[l].lineCoordinates.width = Math.abs(t2 - d2), e[l].title && (e[l]._titleTextBlock.maxWidth = 0 < e[l].titleMaxWidth && e[l].titleMaxWidth < e[l].lineCoordinates.width ? e[l].titleMaxWidth : e[l].lineCoordinates.width), y2.push(Math.ceil(e[l] ? e[l].createLabelsAndCalculateHeight() : 0)), Y2 += y2[l], Z += e[l] && !n.isNavigator ? e[l].margin : 0;
          else y2.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateHeight() : 0));
          M3.push(y2);
          if (a && 0 < a.length) for (l = 0; l < a.length; l++) a[l] && (a[l].lineCoordinates.x1 = d2, t2 = Math.round(h.x2 - $2 - aa2 > n.width - p ? n.width - p : h.x2 - $2 - aa2), a[l]._labels && 1 < a[l]._labels.length && (k2 = m = 0, m = a[l]._labels[1], k2 = "dateTime" === a[l].valueType ? a[l]._labels[a[l]._labels.length - 2] : a[l]._labels[a[l]._labels.length - 1], s2 = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), v = k2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k2.textBlock.angle)) + (k2.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k2.textBlock.angle))), !a[l] || (!a[l].labelAutoFit || f(C) || f(B) || n.isNavigator || n.stockChart) || (k2 = 0, 0 < a[l].labelAngle ? B + v > t2 && (k2 += 0 < a[l].labelAngle ? B + v - t2 - $2 : 0) : 0 > a[l].labelAngle ? C - s2 < d2 && C - s2 < a[l].viewportMinimum && (F3 = d2 - (S + a[l].tickLength + A2 + C - s2 + a[l].labelFontSize / 2)) : 0 === a[l].labelAngle && (B + v > t2 && (k2 = B + v / 2 - t2 - $2), C - s2 < d2 && C - s2 < a[l].viewportMinimum && (F3 = d2 - S - a[l].tickLength - A2 - C + s2 / 2)), a[l].viewportMaximum === a[l].maximum && a[l].viewportMinimum === a[l].minimum && 0 < a[l].labelAngle && 0 < k2 ? t2 -= k2 : a[l].viewportMaximum === a[l].maximum && a[l].viewportMinimum === a[l].minimum && 0 > a[l].labelAngle && 0 < F3 ? d2 += F3 : a[l].viewportMaximum === a[l].maximum && a[l].viewportMinimum === a[l].minimum && 0 === a[l].labelAngle && (0 < F3 && (d2 += F3), 0 < k2 && (t2 -= k2))), n.panEnabled ? X3 = f(n.sessionVariables.axisX.height) ? n.sessionVariables.axisX.height = X3 : n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = X3, k2 = Math.round(h.y2 - X3 - g + H), m = Math.round(h.y2), a[l].lineCoordinates.x2 = t2, a[l].lineCoordinates.width = t2 - d2, a[l].lineCoordinates.y1 = k2, a[l].lineCoordinates.y2 = k2 + a[l].lineThickness / 2, "inside" === a[l].labelPlacement && 0 < l && (a[l].lineCoordinates.y1 = a[l].lineCoordinates.y1 + u3[l] - (a[l]._titleTextBlock ? a[l]._titleTextBlock.height : 0) - ("inside" === a[l].tickPlacement ? a[l].tickLength : 0), a[l].lineCoordinates.y2 = a[l].lineCoordinates.y1 + a[l].lineThickness / 2), a[l].bounds = { x1: d2, y1: k2, x2: t2, y2: m - (X3 + g - u3[l] - H), width: t2 - d2, height: m - k2 }), H += u3[l] + a[l].margin;
          if (e && 0 < e.length) for (l = 0; l < e.length; l++) e[l].lineCoordinates.x1 = Math.round(h.x1 + T + S), e[l].lineCoordinates.x2 = Math.round(h.x2 - $2 - aa2 > n.width - p ? n.width - p : h.x2 - $2 - aa2), e[l].lineCoordinates.width = Math.abs(t2 - d2), e[l]._labels && 1 < e[l]._labels.length && (m = e[l]._labels[1], k2 = "dateTime" === e[l].valueType ? e[l]._labels[e[l]._labels.length - 2] : e[l]._labels[e[l]._labels.length - 1], s2 = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), v = k2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k2.textBlock.angle)) + (k2.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k2.textBlock.angle))), n.panEnabled ? Y2 = f(n.sessionVariables.axisX2.height) ? n.sessionVariables.axisX2.height = Y2 : n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height = Y2, k2 = Math.round(h.y1), m = Math.round(h.y2 + e[l].margin), e[l].lineCoordinates.y1 = k2 + Y2 + Z - U, e[l].lineCoordinates.y2 = k2, "inside" === e[l].labelPlacement && 0 < l && (e[l].lineCoordinates.y1 = e[l - 1].bounds.y1 - y2[l] + (e[l]._titleTextBlock ? e[l]._titleTextBlock.height : 0)), e[l].bounds = { x1: d2, y1: k2 + (Y2 + Z - y2[l] - U), x2: t2, y2: m, width: t2 - d2, height: m - k2 }, U += y2[l] + e[l].margin;
          if (b && 0 < b.length) for (l = 0; l < b.length; l++) S = n.isNavigator ? 0 : 10, b[l] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : e[0].lineCoordinates.x1), S = b[l]._labels && 0 < b[l]._labels.length ? b[l]._labels[b[l]._labels.length - 1].textBlock.height / 2 : p, k2 = Math.round(h.y1 + Y2 + Z < Math.max(S, p) ? Math.max(S, p) : h.y1 + Y2 + Z), t2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : e[0].lineCoordinates.x1), S = 0 < a.length ? 0 : b[l]._labels && 0 < b[l]._labels.length ? b[l]._labels[0].textBlock.height / 2 : p, m = Math.round(h.y2 - X3 - g - S), b[l].lineCoordinates = { x1: d2 - O2, y1: k2, x2: t2 - O2, y2: m, height: Math.abs(m - k2) }, "inside" === b[l].labelPlacement && 0 < l && (b[l].lineCoordinates.x1 = b[l].lineCoordinates.x1 - (A2[l] - b[l]._titleTextBlock ? b[l]._titleTextBlock.height : 0) + ("outside" === b[l].tickPlacement ? b[l].tickLength : 0), b[l].lineCoordinates.x2 = b[l].lineCoordinates.x1 + b[l].lineThickness / 2), b[l].bounds = { x1: d2 - (A2[l] + O2), y1: k2, x2: t2, y2: m, width: t2 - d2, height: m - k2 }, b[l].title && (b[l]._titleTextBlock.maxWidth = 0 < b[l].titleMaxWidth && b[l].titleMaxWidth < b[l].lineCoordinates.height ? b[l].titleMaxWidth : b[l].lineCoordinates.height), O2 += A2[l] + b[l].margin);
          if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x2 : e[0].lineCoordinates.x2), t2 = Math.round(d2), S = c[l]._labels && 0 < c[l]._labels.length ? c[l]._labels[c[l]._labels.length - 1].textBlock.height / 2 : 0, k2 = Math.round(h.y1 + Y2 + Z < Math.max(S, p) ? Math.max(S, p) : h.y1 + Y2 + Z), S = 0 < a.length ? 0 : c[l]._labels && 0 < c[l]._labels.length ? c[l]._labels[0].textBlock.height / 2 : 0, m = Math.round(h.y2 - (X3 + g + S)), c[l].lineCoordinates = { x1: d2 + W3, y1: k2, x2: d2 + W3, y2: m, height: Math.abs(m - k2) }, "inside" === c[l].labelPlacement && 0 < l && (c[l].lineCoordinates.x1 = c[l].lineCoordinates.x1 + (D[l] - c[l]._titleTextBlock ? c[l]._titleTextBlock.height : 0) - ("outside" === c[l].tickPlacement ? c[l].tickLength : 0) - 2, c[l].lineCoordinates.x2 = c[l].lineCoordinates.x1 + c[l].lineThickness / 2), c[l].bounds = { x1: d2, y1: k2, x2: t2 + (D[l] + W3), y2: m, width: t2 - d2, height: m - k2 }, c[l].title && (c[l]._titleTextBlock.maxWidth = 0 < c[l].titleMaxWidth && c[l].titleMaxWidth < c[l].lineCoordinates.height ? c[l].titleMaxWidth : c[l].lineCoordinates.height), W3 += D[l] + c[l].margin);
          if (a && 0 < a.length) for (l = 0; l < a.length; l++) a[l] && (a[l].calculateValueToPixelConversionParameters(), a[l].calculateBreaksSizeInValues(), a[l]._labels && 1 < a[l]._labels.length && (C = (a[l].logarithmic ? Math.log(a[l]._labels[1].position / a[l].viewportMinimum) / a[l].conversionParameters.lnLogarithmBase : a[l]._labels[1].position - a[l].viewportMinimum) * Math.abs(a[l].conversionParameters.pixelPerUnit) + a[l].lineCoordinates.x1, d2 = a[l]._labels[a[l]._labels.length - ("dateTime" === a[l].valueType ? 2 : 1)].position, d2 = a[l].getApparentDifference(a[l].viewportMinimum, d2), B = a[l].logarithmic ? (1 < d2 ? Math.log(d2) / a[l].conversionParameters.lnLogarithmBase * Math.abs(a[l].conversionParameters.pixelPerUnit) : 0) + a[l].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(a[l].conversionParameters.pixelPerUnit) : 0) + a[l].lineCoordinates.x1));
          if (e && 0 < e.length) for (l = 0; l < e.length; l++) e[l].calculateValueToPixelConversionParameters(), e[l].calculateBreaksSizeInValues(), e[l]._labels && 1 < e[l]._labels.length && (C = (e[l].logarithmic ? Math.log(e[l]._labels[1].position / e[l].viewportMinimum) / e[l].conversionParameters.lnLogarithmBase : e[l]._labels[1].position - e[l].viewportMinimum) * Math.abs(e[l].conversionParameters.pixelPerUnit) + e[l].lineCoordinates.x1, d2 = e[l]._labels[e[l]._labels.length - ("dateTime" === e[l].valueType ? 2 : 1)].position, d2 = e[l].getApparentDifference(e[l].viewportMinimum, d2), B = e[l].logarithmic ? (1 < d2 ? Math.log(d2) / e[l].conversionParameters.lnLogarithmBase * Math.abs(e[l].conversionParameters.pixelPerUnit) : 0) + e[l].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(e[l].conversionParameters.pixelPerUnit) : 0) + e[l].lineCoordinates.x1);
          for (l = 0; l < q.length; l++) "axisY" === q[l].type && (q[l].calculateValueToPixelConversionParameters(), q[l].calculateBreaksSizeInValues());
          if (0 < r2) {
            if (a && 0 < a.length) for (l = 0; l < a.length; l++) w2 = P2[r2 - 1][l] === P2[r2][l] ? true : false;
            else w2 = true;
            if (e && 0 < e.length) for (l = 0; l < e.length; l++) I2 = M3[r2 - 1][l] === M3[r2][l] ? true : false;
            else I2 = true;
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) L = Q2[r2 - 1][l] === Q2[r2][l] ? true : false;
            else L = true;
            if (c && 0 < c.length) for (l = 0; l < c.length; l++) K3 = N2[r2 - 1][l] === N2[r2][l] ? true : false;
            else K3 = true;
          }
          if (w2 && I2 && L && K3) break;
          r2++;
        }
        if (a && 0 < a.length) for (l = 0; l < a.length; l++) a[l].calculateStripLinesThicknessInValues(), a[l].calculateBreaksInPixels();
        if (e && 0 < e.length) for (l = 0; l < e.length; l++) e[l].calculateStripLinesThicknessInValues(), e[l].calculateBreaksInPixels();
        if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].calculateStripLinesThicknessInValues(), b[l].calculateBreaksInPixels();
        if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].calculateStripLinesThicknessInValues(), c[l].calculateBreaksInPixels();
      } else {
        p = [];
        C = [];
        F3 = [];
        s2 = [];
        B = [];
        v = [];
        P2 = [];
        for (M3 = []; 4 > r2; ) {
          X3 = W3 = U = O2 = aa2 = S = Z = g = N2 = Q2 = H = Y2 = 0;
          if (a && 0 < a.length) for (F3 = [], l = W3 = 0; l < a.length; l++) F3.push(Math.ceil(a[l] ? a[l].createLabelsAndCalculateWidth() : 0)), W3 += F3[l], g += a[l] && !n.isNavigator ? a[l].margin : 0;
          else F3.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
          P2.push(F3);
          if (e && 0 < e.length) for (s2 = [], l = X3 = 0; l < e.length; l++) s2.push(Math.ceil(e[l] ? e[l].createLabelsAndCalculateWidth() : 0)), X3 += s2[l], Z += e[l] ? e[l].margin : 0;
          else s2.push(Math.ceil(e[0] ? e[0].createLabelsAndCalculateWidth() : 0));
          M3.push(s2);
          if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].lineCoordinates = {}, d2 = Math.round(h.x1 + W3 + g), t2 = Math.round(h.x2 - X3 - Z > n.width - 10 ? n.width - 10 : h.x2 - X3 - Z), b[l].labelAutoFit && !f(u3) && (0 < !a.length && (d2 = 0 > b[l].labelAngle ? Math.max(d2, u3) : 0 === b[l].labelAngle ? Math.max(d2, u3 / 2) : d2), 0 < !e.length && (t2 = 0 < b[l].labelAngle ? t2 - y2 / 2 : 0 === b[l].labelAngle ? t2 - y2 / 2 : t2)), b[l].lineCoordinates.x1 = d2, b[l].lineCoordinates.x2 = t2, b[l].lineCoordinates.width = Math.abs(t2 - d2), b[l].title && (b[l]._titleTextBlock.maxWidth = 0 < b[l].titleMaxWidth && b[l].titleMaxWidth < b[l].lineCoordinates.width ? b[l].titleMaxWidth : b[l].lineCoordinates.width);
          if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].lineCoordinates = {}, d2 = Math.round(h.x1 + W3 + g), t2 = Math.round(h.x2 - X3 - Z > c[l].chart.width - 10 ? c[l].chart.width - 10 : h.x2 - X3 - Z), c[l] && c[l].labelAutoFit && !f(A2) && (0 < !a.length && (d2 = 0 < c[l].labelAngle ? Math.max(d2, A2) : 0 === c[l].labelAngle ? Math.max(d2, A2 / 2) : d2), 0 < !e.length && (t2 -= D / 2)), c[l].lineCoordinates.x1 = d2, c[l].lineCoordinates.x2 = t2, c[l].lineCoordinates.width = Math.abs(t2 - d2), c[l].title && (c[l]._titleTextBlock.maxWidth = 0 < c[l].titleMaxWidth && c[l].titleMaxWidth < c[l].lineCoordinates.width ? c[l].titleMaxWidth : c[l].lineCoordinates.width);
          if (b && 0 < b.length) for (p = [], l = O2 = 0; l < b.length; l++) p.push(Math.ceil(b[l] ? b[l].createLabelsAndCalculateHeight() : 0)), O2 += p[l] + b[l].margin, S += b[l].margin;
          else p.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
          B.push(p);
          if (c && 0 < c.length) for (C = [], l = U = 0; l < c.length; l++) C.push(Math.ceil(c[l] ? c[l].createLabelsAndCalculateHeight() : 0)), U += C[l], aa2 += c[l].margin;
          else C.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
          v.push(C);
          if (b && 0 < b.length) for (l = 0; l < b.length; l++) 0 < b[l]._labels.length && (m = b[l]._labels[0], k2 = b[l]._labels[b[l]._labels.length - 1], u3 = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), y2 = k2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k2.textBlock.angle)) + (k2.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k2.textBlock.angle)));
          if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l] && 0 < c[l]._labels.length && (m = c[l]._labels[0], k2 = c[l]._labels[c[l]._labels.length - 1], A2 = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), D = k2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k2.textBlock.angle)) + (k2.textBlock.height - k2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k2.textBlock.angle)));
          if (n.panEnabled) for (l = 0; l < b.length; l++) p[l] = f(n.sessionVariables.axisY.height) ? n.sessionVariables.axisY.height = p[l] : n.sessionVariables.axisY.height;
          else for (l = 0; l < b.length; l++) n.sessionVariables.axisY.height = p[l];
          if (b && 0 < b.length) for (l = b.length - 1; 0 <= l; l--) k2 = Math.round(h.y2), m = Math.round(h.y2 > b[l].chart.height ? b[l].chart.height : h.y2), b[l].lineCoordinates.y1 = k2 - (p[l] + b[l].margin + Y2), b[l].lineCoordinates.y2 = k2 - (p[l] + b[l].margin + Y2), "inside" === b[l].labelPlacement && 0 < l && (b[l].lineCoordinates.y1 = b[l].lineCoordinates.y1 + p[l] - (b[l]._titleTextBlock ? b[l]._titleTextBlock.height : 0) - ("inside" === b[l].tickPlacement ? b[l].tickLength : 0), b[l].lineCoordinates.y2 = b[l].lineCoordinates.y1 + b[l].lineThickness / 2), b[l].bounds = { x1: d2, y1: k2 - (p[l] + Y2 + b[l].margin), x2: t2, y2: m - (Y2 + b[l].margin), width: t2 - d2, height: p[l] }, b[l].title && (b[l]._titleTextBlock.maxWidth = 0 < b[l].titleMaxWidth && b[l].titleMaxWidth < b[l].lineCoordinates.width ? b[l].titleMaxWidth : b[l].lineCoordinates.width), Y2 += p[l] + b[l].margin;
          if (c && 0 < c.length) for (l = c.length - 1; 0 <= l; l--) c[l] && (k2 = Math.round(h.y1), m = Math.round(h.y1 + (C[l] + c[l].margin + H)), c[l].lineCoordinates.y1 = m, c[l].lineCoordinates.y2 = m, "inside" === c[l].labelPlacement && 0 < l && (c[l].lineCoordinates.y1 = m - C[l] + (c[l]._titleTextBlock ? c[l]._titleTextBlock.height : 0)), c[l].bounds = { x1: d2, y1: k2 + (c[l].margin + H), x2: t2, y2: m, width: t2 - d2, height: U }, c[l].title && (c[l]._titleTextBlock.maxWidth = 0 < c[l].titleMaxWidth && c[l].titleMaxWidth < c[l].lineCoordinates.width ? c[l].titleMaxWidth : c[l].lineCoordinates.width), H += C[l] + c[l].margin);
          if (a && 0 < a.length) for (l = 0; l < a.length; l++) {
            S = a[l]._labels && 0 < a[l]._labels.length ? a[l]._labels[0].textBlock.fontSize / 2 : 0;
            d2 = Math.round(h.x1 + g);
            k2 = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : h.y1 < Math.max(S, 10) ? Math.max(S, 10) : h.y1) : h.y1 < Math.max(S, 10) ? Math.max(S, 10) : h.y1;
            t2 = Math.round(h.x1 + W3 + g);
            m = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : h.y2 - O2 > n.height - Math.max(S, 10) ? n.height - Math.max(S, 10) : h.y2 - O2) : h.y2 > n.height - Math.max(S, 10) ? n.height - Math.max(S, 10) : h.y2;
            if (b && 0 < b.length) for (S = 0; S < b.length; S++) b[S] && b[S].labelAutoFit && (t2 = 0 > b[S].labelAngle ? Math.max(t2, u3) : 0 === b[S].labelAngle ? Math.max(t2, u3 / 2) : t2, d2 = 0 > b[S].labelAngle || 0 === b[S].labelAngle ? t2 - W3 : d2);
            if (c && 0 < c.length) for (S = 0; S < c.length; S++) c[S] && c[S].labelAutoFit && (t2 = c[S].lineCoordinates.x1, d2 = t2 - W3);
            a[l].lineCoordinates = { x1: t2 - Q2, y1: k2, x2: t2 - Q2, y2: m, height: Math.abs(m - k2) };
            "inside" === a[l].labelPlacement && 0 < l && (a[l].lineCoordinates.x1 = a[l].lineCoordinates.x1 - (F3[l] - (a[l]._titleTextBlock ? a[l]._titleTextBlock.height : 0)) + ("outside" === a[l].tickPlacement ? a[l].tickLength : 0), a[l].lineCoordinates.x2 = a[l].lineCoordinates.x1 + a[l].lineThickness / 2);
            a[l].bounds = { x1: t2 - (F3[l] + Q2), y1: k2, x2: t2, y2: m, width: t2 - d2, height: m - k2 };
            a[l].title && (a[l]._titleTextBlock.maxWidth = 0 < a[l].titleMaxWidth && a[l].titleMaxWidth < a[l].lineCoordinates.height ? a[l].titleMaxWidth : a[l].lineCoordinates.height);
            a[l].calculateValueToPixelConversionParameters();
            a[l].calculateBreaksSizeInValues();
            Q2 += F3[l] + a[l].margin;
          }
          if (e && 0 < e.length) for (l = 0; l < e.length; l++) {
            S = e[l]._labels && 0 < e[l]._labels.length ? e[l]._labels[0].textBlock.fontSize / 2 : 0;
            d2 = Math.round(h.x1 - g);
            k2 = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : h.y1 < Math.max(S, 10) ? Math.max(S, 10) : h.y1) : h.y1 < Math.max(S, 10) ? Math.max(S, 10) : h.y1;
            t2 = Math.round(h.x2 - X3 - Z);
            m = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : h.y2 - O2 > n.height - Math.max(S, 10) ? n.height - Math.max(S, 10) : h.y2 - O2) : h.y2 > n.height - Math.max(S, 10) ? n.height - Math.max(S, 10) : h.y2;
            if (b && 0 < b.length) for (S = 0; S < b.length; S++) b[S] && b[S].labelAutoFit && (t2 = 0 > b[S].labelAngle ? Math.max(t2, u3) : 0 === b[S].labelAngle ? Math.max(t2, u3 / 2) : t2, d2 = 0 > b[S].labelAngle || 0 === b[S].labelAngle ? t2 - X3 : d2);
            if (c && 0 < c.length) for (S = 0; S < c.length; S++) c[S] && c[S].labelAutoFit && (t2 = c[S].lineCoordinates.x2, d2 = t2 - X3);
            e[l].lineCoordinates = { x1: t2 + N2, y1: k2, x2: t2 + N2, y2: m, height: Math.abs(m - k2) };
            "inside" === e[l].labelPlacement && 0 < l && (e[l].lineCoordinates.x1 = e[l].lineCoordinates.x1 + (s2[l] - (e[l]._titleTextBlock ? e[l]._titleTextBlock.height : 0) - 2) - ("outside" === e[l].tickPlacement ? e[l].tickLength : 0), e[l].lineCoordinates.x2 = e[l].lineCoordinates.x1 + e[l].lineThickness / 2);
            e[l].bounds = { x1: e[l].lineCoordinates.x1, y1: k2, x2: t2 + s2[l] + N2, y2: m, width: t2 - d2, height: m - k2 };
            e[l].title && (e[l]._titleTextBlock.maxWidth = 0 < e[l].titleMaxWidth && e[l].titleMaxWidth < e[l].lineCoordinates.height ? e[l].titleMaxWidth : e[l].lineCoordinates.height);
            e[l].calculateValueToPixelConversionParameters();
            e[l].calculateBreaksSizeInValues();
            N2 += s2[l] + e[l].margin;
          }
          for (l = 0; l < q.length; l++) "axisY" === q[l].type && (q[l].calculateValueToPixelConversionParameters(), q[l].calculateBreaksSizeInValues());
          if (0 < r2) {
            if (a && 0 < a.length) for (l = 0; l < a.length; l++) w2 = P2[r2 - 1][l] === P2[r2][l] ? true : false;
            else w2 = true;
            if (e && 0 < e.length) for (l = 0; l < e.length; l++) I2 = M3[r2 - 1][l] === M3[r2][l] ? true : false;
            else I2 = true;
            if (b && 0 < b.length) for (l = 0; l < b.length; l++) L = B[r2 - 1][l] === B[r2][l] ? true : false;
            else L = true;
            if (c && 0 < c.length) for (l = 0; l < c.length; l++) K3 = v[r2 - 1][l] === v[r2][l] ? true : false;
            else K3 = true;
          }
          if (w2 && I2 && L && K3) break;
          r2++;
        }
        if (b && 0 < b.length) for (l = 0; l < b.length; l++) b[l].calculateStripLinesThicknessInValues(), b[l].calculateBreaksInPixels();
        if (c && 0 < c.length) for (l = 0; l < c.length; l++) c[l].calculateStripLinesThicknessInValues(), c[l].calculateBreaksInPixels();
        if (a && 0 < a.length) for (l = 0; l < a.length; l++) a[l].calculateStripLinesThicknessInValues(), a[l].calculateBreaksInPixels();
        if (e && 0 < e.length) for (l = 0; l < e.length; l++) e[l].calculateStripLinesThicknessInValues(), e[l].calculateBreaksInPixels();
      }
    };
    A.render = function(a, e, b, c, g) {
      var h = a[0] ? a[0].chart : e[0].chart;
      g = h.ctx;
      h.alignVerticalAxes && h.alignVerticalAxes();
      g.save();
      g.beginPath();
      a[0] && g.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
      e[0] && g.rect(5, e[e.length - 1].bounds.y1, e[0].chart.width - 10, e[0].bounds.height);
      g.clip();
      if (a && 0 < a.length) for (var d2 = 0; d2 < a.length; d2++) a[d2].renderLabelsTicksAndTitle();
      if (e && 0 < e.length) for (d2 = 0; d2 < e.length; d2++) e[d2].renderLabelsTicksAndTitle();
      g.restore();
      if (b && 0 < b.length) for (d2 = 0; d2 < b.length; d2++) b[d2].renderLabelsTicksAndTitle();
      if (c && 0 < c.length) for (d2 = 0; d2 < c.length; d2++) c[d2].renderLabelsTicksAndTitle();
      h.preparePlotArea();
      h = h.plotArea;
      g.save();
      g.beginPath();
      g.rect(h.x1, h.y1, Math.abs(h.x2 - h.x1), Math.abs(h.y2 - h.y1));
      g.clip();
      if (a && 0 < a.length) for (d2 = 0; d2 < a.length; d2++) a[d2].renderStripLinesOfThicknessType("value");
      if (e && 0 < e.length) for (d2 = 0; d2 < e.length; d2++) e[d2].renderStripLinesOfThicknessType("value");
      if (b && 0 < b.length) for (d2 = 0; d2 < b.length; d2++) b[d2].renderStripLinesOfThicknessType("value");
      if (c && 0 < c.length) for (d2 = 0; d2 < c.length; d2++) c[d2].renderStripLinesOfThicknessType("value");
      if (a && 0 < a.length) for (d2 = 0; d2 < a.length; d2++) a[d2].renderInterlacedColors();
      if (e && 0 < e.length) for (d2 = 0; d2 < e.length; d2++) e[d2].renderInterlacedColors();
      if (b && 0 < b.length) for (d2 = 0; d2 < b.length; d2++) b[d2].renderInterlacedColors();
      if (c && 0 < c.length) for (d2 = 0; d2 < c.length; d2++) c[d2].renderInterlacedColors();
      g.restore();
      if (a && 0 < a.length) for (d2 = 0; d2 < a.length; d2++) a[d2].renderGrid(), s && (a[d2].createMask(), a[d2].renderBreaksBackground());
      if (e && 0 < e.length) for (d2 = 0; d2 < e.length; d2++) e[d2].renderGrid(), s && (e[d2].createMask(), e[d2].renderBreaksBackground());
      if (b && 0 < b.length) for (d2 = 0; d2 < b.length; d2++) b[d2].renderGrid(), s && (b[d2].createMask(), b[d2].renderBreaksBackground());
      if (c && 0 < c.length) for (d2 = 0; d2 < c.length; d2++) c[d2].renderGrid(), s && (c[d2].createMask(), c[d2].renderBreaksBackground());
      if (a && 0 < a.length) for (d2 = 0; d2 < a.length; d2++) a[d2].renderAxisLine();
      if (e && 0 < e.length) for (d2 = 0; d2 < e.length; d2++) e[d2].renderAxisLine();
      if (b && 0 < b.length) for (d2 = 0; d2 < b.length; d2++) b[d2].renderAxisLine();
      if (c && 0 < c.length) for (d2 = 0; d2 < c.length; d2++) c[d2].renderAxisLine();
      if (a && 0 < a.length) for (d2 = 0; d2 < a.length; d2++) a[d2].renderStripLinesOfThicknessType("pixel");
      if (e && 0 < e.length) for (d2 = 0; d2 < e.length; d2++) e[d2].renderStripLinesOfThicknessType("pixel");
      if (b && 0 < b.length) for (d2 = 0; d2 < b.length; d2++) b[d2].renderStripLinesOfThicknessType("pixel");
      if (c && 0 < c.length) for (d2 = 0; d2 < c.length; d2++) c[d2].renderStripLinesOfThicknessType("pixel");
    };
    A.prototype.calculateStripLinesThicknessInValues = function() {
      for (var a = 0; a < this.stripLines.length; a++) if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
        var e = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), b = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), e = this.getApparentDifference(e, b);
        this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) / Math.log(e)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - e) / 2;
        this.stripLines[a].thickness = e;
        this.stripLines[a]._thicknessType = "value";
      }
    };
    A.prototype.calculateBreaksSizeInValues = function() {
      for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), c = this.scaleBreaks && !f(this.scaleBreaks.options.spacing), g, d2 = 0; d2 < e.length; d2++) g = c || !f(e[d2].options.spacing), e[d2].spacing = Wa(e[d2].spacing, a, 8, g ? 0.1 * a : 8, g ? 0 : 3) << 0, e[d2].size = 0 > e[d2].spacing ? 0 : Math.abs(e[d2].spacing / b), this.logarithmic && (e[d2].size = Math.pow(this.logarithmBase, e[d2].size));
    };
    A.prototype.calculateBreaksInPixels = function() {
      if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
        var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
        a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
        for (var e = 0; e < a.length && !(a[e].startValue > this.conversionParameters.maximum); e++) a[e].endValue < this.conversionParameters.minimum || (f(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = e), a[e].startValue >= this.conversionParameters.minimum && (a[e].startPixel = this.convertValueToPixel(a[e].startValue), this.scaleBreaks.lastBreakIndex = e), a[e].endValue <= this.conversionParameters.maximum && (a[e].endPixel = this.convertValueToPixel(a[e].endValue)));
      }
    };
    A.prototype.renderLabelsTicksAndTitle = function() {
      var a = this, e = false, b = 0, c = 0, g = 1, d2 = 0;
      0 !== this.labelAngle && 360 !== this.labelAngle && (g = 1.2);
      if ("undefined" === typeof this.options.interval) {
        if ("bottom" === this._position || "top" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
          for (var b = [], g = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, f2, k2 = this.viewportMaximum, t2 = this.lineCoordinates.width / Math.log(this.range), m = this._labels.length - 1; 0 <= m; m--) {
            p = this._labels[m];
            if (p.position < this.viewportMinimum) break;
            p.position > this.viewportMaximum || !(m === this._labels.length - 1 || f2 < Math.log(k2 / p.position) * t2 / g) || (b.push(p), k2 = p.position, f2 = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
          }
          this._labels = b;
        } else {
          for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (f2 = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += f2);
          b > this.lineCoordinates.width * g && this.labelAutoFit && (e = true);
        }
        if ("left" === this._position || "right" === this._position) if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
          for (var b = [], n, k2 = this.viewportMaximum, t2 = this.lineCoordinates.height / Math.log(this.range), m = this._labels.length - 1; 0 <= m; m--) {
            p = this._labels[m];
            if (p.position < this.viewportMinimum) break;
            p.position > this.viewportMaximum || !(m === this._labels.length - 1 || n < Math.log(k2 / p.position) * t2) || (b.push(p), k2 = p.position, n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
          }
          this._labels = b;
        } else {
          for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += n);
          c > this.lineCoordinates.height * g && this.labelAutoFit && (e = true);
        }
      }
      this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
        return a2.position - b2.position;
      });
      var m = 0, p, q;
      if ("bottom" === this._position) {
        for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, q.y << 0), this.ctx.lineTo(c, q.y + this.tickLength << 0), this.ctx.stroke()), e && 0 !== d2++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = q.x, p.textBlock.y = q.y));
        "inside" === this.tickPlacement && this.chart.addEventListener(
          "dataAnimationEnd",
          function() {
            for (m = 0; m < a._labels.length; m++) if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
              a.ctx.lineWidth = a.tickThickness;
              a.ctx.strokeStyle = a.tickColor;
              var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
              a.ctx.save();
              a.ctx.beginPath();
              a.ctx.moveTo(b2, q.y << 0);
              a.ctx.lineTo(b2, q.y - a.tickLength << 0);
              a.ctx.stroke();
              a.ctx.restore();
            }
          },
          this
        );
        this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
      } else if ("top" === this._position) {
        for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(c, q.y << 0), this.ctx.lineTo(c, q.y - this.tickLength << 0), this.ctx.stroke()), e && 0 !== d2++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (p.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), p.textBlock.x = q.x, p.textBlock.y = q.y));
        "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
          for (m = 0; m < a._labels.length; m++) if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
            a.ctx.lineWidth = a.tickThickness;
            a.ctx.strokeStyle = a.tickColor;
            var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
            a.ctx.save();
            a.ctx.beginPath();
            a.ctx.moveTo(b2, q.y << 0);
            a.ctx.lineTo(b2, q.y + a.tickLength << 0);
            a.ctx.stroke();
            a.ctx.restore();
          }
        }, this);
        this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
      } else if ("left" === this._position) {
        for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, c), this.ctx.lineTo(q.x - this.tickLength << 0, c), this.ctx.stroke()), e && 0 !== d2++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
        "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
          for (m = 0; m < a._labels.length; m++) if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
            a.ctx.lineWidth = a.tickThickness;
            a.ctx.strokeStyle = a.tickColor;
            var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
            a.ctx.save();
            a.ctx.beginPath();
            a.ctx.moveTo(q.x << 0, b2);
            a.ctx.lineTo(q.x + a.tickLength << 0, b2);
            a.ctx.stroke();
            a.ctx.restore();
          }
        }, this);
        this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
      } else if ("right" === this._position) {
        for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, c = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, c), this.ctx.lineTo(q.x + this.tickLength << 0, c), this.ctx.stroke()), e && 0 !== d2++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
        "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
          for (m = 0; m < a._labels.length; m++) if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
            a.ctx.lineWidth = a.tickThickness;
            a.ctx.strokeStyle = a.tickColor;
            var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
            a.ctx.save();
            a.ctx.beginPath();
            a.ctx.moveTo(q.x << 0, b2);
            a.ctx.lineTo(q.x - a.tickLength << 0, b2);
            a.ctx.stroke();
            a.ctx.restore();
          }
        }, this);
        this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
      }
      d2 = 0;
      if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function() {
        for (m = 0; m < a._labels.length; m++) p = a._labels[m], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || e && 0 !== d2++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(true), a.ctx.restore());
      }, this);
      else for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || e && 0 !== d2++ % 2 && this.labelAutoFit) || p.textBlock.render(true);
    };
    A.prototype.renderInterlacedColors = function() {
      var a = this.chart.plotArea.ctx, e, b, c = this.chart.plotArea, g = 0;
      e = true;
      if (("bottom" === this._position || "top" === this._position) && this.interlacedColor) for (a.fillStyle = this.interlacedColor, g = 0; g < this._labels.length; g++) e ? (e = this.getPixelCoordinatesOnAxis(this._labels[g].position), b = g + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[g + 1].position), a.fillRect(Math.min(b.x, e.x), c.y1, Math.abs(b.x - e.x), Math.abs(c.y1 - c.y2)), e = false) : e = true;
      else if (("left" === this._position || "right" === this._position) && this.interlacedColor) for (a.fillStyle = this.interlacedColor, g = 0; g < this._labels.length; g++) e ? (b = this.getPixelCoordinatesOnAxis(this._labels[g].position), e = g + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[g + 1].position), a.fillRect(c.x1, Math.min(b.y, e.y), Math.abs(c.x1 - c.x2), Math.abs(e.y - b.y)), e = false) : e = true;
      a.beginPath();
    };
    A.prototype.renderStripLinesOfThicknessType = function(a) {
      if (this.stripLines && 0 < this.stripLines.length && a) {
        for (var e = this, b, c = 0, g = 0, d2 = false, k2 = false, t2 = [], w2 = [], k2 = false, c = 0; c < this.stripLines.length; c++) {
          var m = this.stripLines[c];
          m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum || m.value > this.viewportMaximum || f(m.value) || isNaN(this.range)) || "value" === a && (m.startValue <= this.viewportMinimum && m.endValue <= this.viewportMinimum || m.startValue >= this.viewportMaximum && m.endValue >= this.viewportMaximum || f(m.startValue) || f(m.endValue) || isNaN(this.range)) || t2.push(m));
        }
        for (c = 0; c < this._stripLineLabels.length; c++) if (m = this.stripLines[c], b = this._stripLineLabels[c], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range))) {
          a = this.getPixelCoordinatesOnAxis(b.position);
          if ("outside" === b.stripLine.labelPlacement) if (m && (this.ctx.strokeStyle = m.color, "pixel" === m._thicknessType && (this.ctx.lineWidth = m.thickness)), "bottom" === this._position) {
            var n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
            this.ctx.beginPath();
            this.ctx.moveTo(n, a.y << 0);
            this.ctx.lineTo(n, a.y + this.tickLength << 0);
            this.ctx.stroke();
            0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5));
          } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
          else b.textBlock.angle = -90, "bottom" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? f(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, f(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? f(m.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, f(m.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ? f(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : f(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? f(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : f(m.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
          b.textBlock.x = a.x;
          b.textBlock.y = a.y;
          w2.push(b);
        }
        if (!k2) {
          k2 = false;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
          this.ctx.clip();
          for (c = 0; c < t2.length; c++) m = t2[c], m.showOnTop ? d2 || (d2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            for (g = 0; g < t2.length; g++) m = t2[g], m.showOnTop && m.render();
            this.ctx.restore();
          }, m)) : m.render();
          for (c = 0; c < w2.length; c++) b = w2[c], b.stripLine.showOnTop ? k2 || (k2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (g = 0; g < w2.length; g++) b = w2[g], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (e.ctx.save(), e.ctx.beginPath(), e.ctx.rect(e.chart.plotArea.x1, e.chart.plotArea.y1, e.chart.plotArea.width, e.chart.plotArea.height), e.ctx.clip(), b.textBlock.render(true), e.ctx.restore());
          }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(true);
          this.ctx.restore();
          k2 = true;
        }
        if (k2) for (k2 = false, c = 0; c < w2.length; c++) b = w2[c], "outside" === b.stripLine.labelPlacement && b.textBlock.render(true);
      }
    };
    A.prototype.renderBreaksBackground = function() {
      this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
    };
    A.prototype.createMask = function() {
      if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
        var a = this.scaleBreaks._appliedBreaks;
        s ? (this.maskCanvas = ta(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
        this.maskCtx.save();
        this.maskCtx.beginPath();
        this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
        this.maskCtx.clip();
        for (var e = 0; e < a.length; e++) a[e].endValue < this.viewportMinimum || (a[e].startValue > this.viewportMaximum || isNaN(this.range)) || a[e].render(this.maskCtx);
        this.maskCtx.restore();
      }
    };
    A.prototype.renderCrosshair = function(a, e) {
      isFinite(this.minimum) && isFinite(this.maximum) && (this.crosshair.render(a, e), this.crosshair.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this, value: this.crosshair.value }, this));
    };
    A.prototype.showCrosshair = function(a) {
      f(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(
        this.convertValueToPixel(a),
        null,
        a
      ) : this.crosshair.render(null, this.convertValueToPixel(a), a));
    };
    A.prototype.renderGrid = function() {
      if (this.gridThickness && 0 < this.gridThickness) {
        var a = this.chart.ctx;
        a.save();
        var e, b = this.chart.plotArea;
        a.lineWidth = this.gridThickness;
        a.strokeStyle = this.gridColor;
        a.setLineDash && a.setLineDash(N(this.gridDashType, this.gridThickness));
        if ("bottom" === this._position || "top" === this._position) for (c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[c].position), e = 1 === a.lineWidth % 2 ? (e.x << 0) + 0.5 : e.x << 0, a.moveTo(e, b.y1 << 0), a.lineTo(e, b.y2 << 0), a.stroke());
        else if ("left" === this._position || "right" === this._position) for (var c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), e = this.getPixelCoordinatesOnAxis(this._labels[c].position), e = 1 === a.lineWidth % 2 ? (e.y << 0) + 0.5 : e.y << 0, a.moveTo(b.x1 << 0, e), a.lineTo(b.x2 << 0, e), a.stroke());
        a.restore();
      }
    };
    A.prototype.renderAxisLine = function() {
      var a = this.chart.ctx, e = s ? this.chart._preRenderCtx : a, b = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), c = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), g, d2;
      e.save();
      if ("bottom" === this._position || "top" === this._position) {
        if (this.lineThickness) {
          this.reversed ? (g = this.lineCoordinates.x2, d2 = this.lineCoordinates.x1) : (g = this.lineCoordinates.x1, d2 = this.lineCoordinates.x2);
          e.lineWidth = this.lineThickness;
          e.strokeStyle = this.lineColor ? this.lineColor : "black";
          e.setLineDash && e.setLineDash(N(this.lineDashType, this.lineThickness));
          var k2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
          e.beginPath();
          if (this.scaleBreaks && !f(this.scaleBreaks.firstBreakIndex)) if (f(this.scaleBreaks.lastBreakIndex)) g = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
          else for (var t2 = this.scaleBreaks.firstBreakIndex; t2 <= this.scaleBreaks.lastBreakIndex; t2++) e.moveTo(
            g,
            k2
          ), e.lineTo(this.scaleBreaks._appliedBreaks[t2].startPixel + b, k2), g = this.scaleBreaks._appliedBreaks[t2].endPixel + c;
          g && (e.moveTo(g, k2), e.lineTo(d2, k2));
          e.stroke();
        }
      } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
        this.reversed ? (g = this.lineCoordinates.y1, d2 = this.lineCoordinates.y2) : (g = this.lineCoordinates.y2, d2 = this.lineCoordinates.y1);
        e.lineWidth = this.lineThickness;
        e.strokeStyle = this.lineColor;
        e.setLineDash && e.setLineDash(N(this.lineDashType, this.lineThickness));
        k2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
        e.beginPath();
        if (this.scaleBreaks && !f(this.scaleBreaks.firstBreakIndex)) if (f(this.scaleBreaks.lastBreakIndex)) g = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
        else for (t2 = this.scaleBreaks.firstBreakIndex; t2 <= this.scaleBreaks.lastBreakIndex; t2++) e.moveTo(k2, g), e.lineTo(k2, this.scaleBreaks._appliedBreaks[t2].startPixel + c), g = this.scaleBreaks._appliedBreaks[t2].endPixel + b;
        g && (e.moveTo(k2, g), e.lineTo(k2, d2));
        e.stroke();
      }
      s && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), e.clearRect(0, 0, this.chart.width, this.chart.height));
      e.restore();
    };
    A.prototype.getPixelCoordinatesOnAxis = function(a) {
      var e = {};
      if ("bottom" === this._position || "top" === this._position) e.x = this.convertValueToPixel(a), e.y = this.lineCoordinates.y1;
      if ("left" === this._position || "right" === this._position) e.y = this.convertValueToPixel(a), e.x = this.lineCoordinates.x2;
      return e;
    };
    A.prototype.convertPixelToValue = function(a) {
      if ("undefined" === typeof a) return null;
      var e = 0, b = 0, c, e = true, g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
      if (this.logarithmic) {
        a = c = Math.pow(this.logarithmBase, (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
        if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed) for (b = 0; b < g.length; b++) {
          if (!(g[b].endValue < this.conversionParameters.minimum)) if (e) if (g[b].startValue < this.conversionParameters.minimum) {
            if (1 < g[b].size && this.conversionParameters.minimum * Math.pow(g[b].endValue / g[b].startValue, Math.log(c) / Math.log(g[b].size)) < g[b].endValue) {
              a = Math.pow(g[b].endValue / g[b].startValue, Math.log(c) / Math.log(g[b].size));
              break;
            } else a *= g[b].endValue / this.conversionParameters.minimum / Math.pow(g[b].size, Math.log(g[b].endValue / this.conversionParameters.minimum) / Math.log(g[b].endValue / g[b].startValue)), c /= Math.pow(g[b].size, Math.log(g[b].endValue / this.conversionParameters.minimum) / Math.log(g[b].endValue / g[b].startValue));
            e = false;
          } else if (c > g[b].startValue / this.conversionParameters.minimum) {
            c /= g[b].startValue / this.conversionParameters.minimum;
            if (c < g[b].size) {
              a *= Math.pow(g[b].endValue / g[b].startValue, 1 === g[b].size ? 1 : Math.log(c) / Math.log(g[b].size)) / c;
              break;
            } else a *= g[b].endValue / g[b].startValue / g[b].size;
            c /= g[b].size;
            e = false;
          } else break;
          else if (c > g[b].startValue / g[b - 1].endValue) {
            c /= g[b].startValue / g[b - 1].endValue;
            if (c < g[b].size) {
              a *= Math.pow(g[b].endValue / g[b].startValue, 1 === g[b].size ? 1 : Math.log(c) / Math.log(g[b].size)) / c;
              break;
            } else a *= g[b].endValue / g[b].startValue / g[b].size;
            c /= g[b].size;
          } else break;
        }
        else for (b = g.length - 1; 0 <= b; b--) if (!(g[b].startValue > this.conversionParameters.minimum)) if (e) if (g[b].endValue > this.conversionParameters.minimum) {
          if (1 < g[b].size && this.conversionParameters.minimum * Math.pow(g[b].endValue / g[b].startValue, Math.log(c) / Math.log(g[b].size)) > g[b].startValue) {
            a = Math.pow(g[b].endValue / g[b].startValue, Math.log(c) / Math.log(g[b].size));
            break;
          } else a *= g[b].startValue / this.conversionParameters.minimum * Math.pow(g[b].size, Math.log(g[b].startValue / this.conversionParameters.minimum) / Math.log(g[b].endValue / g[b].startValue)) * c, c *= Math.pow(g[b].size, Math.log(this.conversionParameters.minimum / g[b].startValue) / Math.log(g[b].endValue / g[b].startValue));
          e = false;
        } else if (c < g[b].endValue / this.conversionParameters.minimum) {
          c /= g[b].endValue / this.conversionParameters.minimum;
          if (c > 1 / g[b].size) {
            a *= Math.pow(g[b].endValue / g[b].startValue, 1 >= g[b].size ? 1 : Math.log(c) / Math.log(g[b].size)) * c;
            break;
          } else a /= g[b].endValue / g[b].startValue / g[b].size;
          c *= g[b].size;
          e = false;
        } else break;
        else if (c < g[b].endValue / g[b + 1].startValue) {
          c /= g[b].endValue / g[b + 1].startValue;
          if (c > 1 / g[b].size) {
            a *= Math.pow(g[b].endValue / g[b].startValue, 1 >= g[b].size ? 1 : Math.log(c) / Math.log(g[b].size)) * c;
            break;
          } else a /= g[b].endValue / g[b].startValue / g[b].size;
          c *= g[b].size;
        } else break;
        e = a * this.viewportMinimum;
      } else {
        a = c = (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
        if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed) for (b = 0; b < g.length; b++) {
          if (!(g[b].endValue < this.conversionParameters.minimum)) if (e) if (g[b].startValue < this.conversionParameters.minimum) {
            if (g[b].size && this.conversionParameters.minimum + c * (g[b].endValue - g[b].startValue) / g[b].size < g[b].endValue) {
              a = 0 >= g[b].size ? 0 : c * (g[b].endValue - g[b].startValue) / g[b].size;
              break;
            } else a += g[b].endValue - this.conversionParameters.minimum - g[b].size * (g[b].endValue - this.conversionParameters.minimum) / (g[b].endValue - g[b].startValue), c -= g[b].size * (g[b].endValue - this.conversionParameters.minimum) / (g[b].endValue - g[b].startValue);
            e = false;
          } else if (c > g[b].startValue - this.conversionParameters.minimum) {
            c -= g[b].startValue - this.conversionParameters.minimum;
            if (c < g[b].size) {
              a += (g[b].endValue - g[b].startValue) * (0 === g[b].size ? 1 : c / g[b].size) - c;
              break;
            } else a += g[b].endValue - g[b].startValue - g[b].size;
            c -= g[b].size;
            e = false;
          } else break;
          else if (c > g[b].startValue - g[b - 1].endValue) {
            c -= g[b].startValue - g[b - 1].endValue;
            if (c < g[b].size) {
              a += (g[b].endValue - g[b].startValue) * (0 === g[b].size ? 1 : c / g[b].size) - c;
              break;
            } else a += g[b].endValue - g[b].startValue - g[b].size;
            c -= g[b].size;
          } else break;
        }
        else for (b = g.length - 1; 0 <= b; b--) if (!(g[b].startValue > this.conversionParameters.minimum)) if (e) if (g[b].endValue > this.conversionParameters.minimum) if (g[b].size && this.conversionParameters.minimum + c * (g[b].endValue - g[b].startValue) / g[b].size > g[b].startValue) {
          a = 0 >= g[b].size ? 0 : c * (g[b].endValue - g[b].startValue) / g[b].size;
          break;
        } else a += g[b].startValue - this.conversionParameters.minimum + g[b].size * (this.conversionParameters.minimum - g[b].startValue) / (g[b].endValue - g[b].startValue), c += g[b].size * (this.conversionParameters.minimum - g[b].startValue) / (g[b].endValue - g[b].startValue), e = false;
        else if (c < g[b].endValue - this.conversionParameters.minimum) {
          c -= g[b].endValue - this.conversionParameters.minimum;
          if (c > -1 * g[b].size) {
            a += (g[b].endValue - g[b].startValue) * (0 === g[b].size ? 1 : c / g[b].size) + c;
            break;
          } else a -= g[b].endValue - g[b].startValue - g[b].size;
          c += g[b].size;
          e = false;
        } else break;
        else if (c < g[b].endValue - g[b + 1].startValue) {
          c -= g[b].endValue - g[b + 1].startValue;
          if (c > -1 * g[b].size) {
            a += (g[b].endValue - g[b].startValue) * (0 === g[b].size ? 1 : c / g[b].size) + c;
            break;
          } else a -= g[b].endValue - g[b].startValue - g[b].size;
          c += g[b].size;
        } else break;
        e = this.conversionParameters.minimum + a;
      }
      return e;
    };
    A.prototype.convertValueToPixel = function(a) {
      a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
      return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
    };
    A.prototype.getApparentDifference = function(a, e, b, c) {
      var g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
      if (this.logarithmic) {
        b = f(b) ? e / a : b;
        for (var d2 = 0; d2 < g.length && !(e < g[d2].startValue); d2++) a > g[d2].endValue || (a <= g[d2].startValue && e >= g[d2].endValue ? b = b / g[d2].endValue * g[d2].startValue * g[d2].size : a >= g[d2].startValue && e >= g[d2].endValue ? b = b / g[d2].endValue * a * Math.pow(g[d2].size, Math.log(g[d2].endValue / a) / Math.log(g[d2].endValue / g[d2].startValue)) : a <= g[d2].startValue && e <= g[d2].endValue ? b = b / e * g[d2].startValue * Math.pow(g[d2].size, Math.log(e / g[d2].startValue) / Math.log(g[d2].endValue / g[d2].startValue)) : !c && (a > g[d2].startValue && e < g[d2].endValue) && (b = a * Math.pow(g[d2].size, Math.log(e / a) / Math.log(g[d2].endValue / g[d2].startValue))));
      } else for (b = f(b) ? Math.abs(e - a) : b, d2 = 0; d2 < g.length && !(e < g[d2].startValue); d2++) a > g[d2].endValue || (a <= g[d2].startValue && e >= g[d2].endValue ? b = b - g[d2].endValue + g[d2].startValue + g[d2].size : a > g[d2].startValue && e >= g[d2].endValue ? b = b - g[d2].endValue + a + g[d2].size * (g[d2].endValue - a) / (g[d2].endValue - g[d2].startValue) : a <= g[d2].startValue && e < g[d2].endValue ? b = b - e + g[d2].startValue + g[d2].size * (e - g[d2].startValue) / (g[d2].endValue - g[d2].startValue) : !c && (a > g[d2].startValue && e < g[d2].endValue) && (b = a + g[d2].size * (e - a) / (g[d2].endValue - g[d2].startValue)));
      return b;
    };
    A.prototype.setViewPortRange = function(a, e) {
      this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, e);
      this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, e);
    };
    A.prototype.getXValueAt = function(a) {
      if (!a) return null;
      var e = null;
      "left" === this._position ? e = this.convertPixelToValue(a.y) : "bottom" === this._position && (e = this.convertPixelToValue(a.x));
      return e;
    };
    A.prototype.calculateValueToPixelConversionParameters = function(a) {
      a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
      var e = { pixelPerUnit: null, minimum: null, reference: null }, b = this.lineCoordinates.width, c = this.lineCoordinates.height, b = "bottom" === this._position || "top" === this._position ? b : c, c = Math.abs(this.range);
      if (this.logarithmic) for (var d2 = 0; d2 < a.length && !(this.viewportMaximum < a[d2].startValue); d2++) this.viewportMinimum > a[d2].endValue || (this.viewportMinimum >= a[d2].startValue && this.viewportMaximum <= a[d2].endValue ? b = 0 : this.viewportMinimum <= a[d2].startValue && this.viewportMaximum >= a[d2].endValue ? (c = c / a[d2].endValue * a[d2].startValue, b = 0 < a[d2].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d2].spacing) / 100) : b - Math.min(a[d2].spacing, 0.1 * b)) : this.viewportMinimum > a[d2].startValue && this.viewportMaximum >= a[d2].endValue ? (c = c / a[d2].endValue * this.viewportMinimum, b = 0 < a[d2].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d2].spacing) / 100 * Math.log(a[d2].endValue / this.viewportMinimum) / Math.log(a[d2].endValue / a[d2].startValue)) : b - Math.min(a[d2].spacing, 0.1 * b) * Math.log(a[d2].endValue / this.viewportMinimum) / Math.log(a[d2].endValue / a[d2].startValue)) : this.viewportMinimum <= a[d2].startValue && this.viewportMaximum < a[d2].endValue && (c = c / this.viewportMaximum * a[d2].startValue, b = 0 < a[d2].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d2].spacing) / 100 * Math.log(this.viewportMaximum / a[d2].startValue) / Math.log(a[d2].endValue / a[d2].startValue)) : b - Math.min(a[d2].spacing, 0.1 * b) * Math.log(this.viewportMaximum / a[d2].startValue) / Math.log(a[d2].endValue / a[d2].startValue)));
      else for (d2 = 0; d2 < a.length && !(this.viewportMaximum < a[d2].startValue); d2++) this.viewportMinimum > a[d2].endValue || (this.viewportMinimum >= a[d2].startValue && this.viewportMaximum <= a[d2].endValue ? b = 0 : this.viewportMinimum <= a[d2].startValue && this.viewportMaximum >= a[d2].endValue ? (c = c - a[d2].endValue + a[d2].startValue, b = 0 < a[d2].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d2].spacing) / 100) : b - Math.min(a[d2].spacing, 0.1 * b)) : this.viewportMinimum > a[d2].startValue && this.viewportMaximum >= a[d2].endValue ? (c = c - a[d2].endValue + this.viewportMinimum, b = 0 < a[d2].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d2].spacing) / 100 * (a[d2].endValue - this.viewportMinimum) / (a[d2].endValue - a[d2].startValue)) : b - Math.min(a[d2].spacing, 0.1 * b) * (a[d2].endValue - this.viewportMinimum) / (a[d2].endValue - a[d2].startValue)) : this.viewportMinimum <= a[d2].startValue && this.viewportMaximum < a[d2].endValue && (c = c - this.viewportMaximum + a[d2].startValue, b = 0 < a[d2].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[d2].spacing) / 100 * (this.viewportMaximum - a[d2].startValue) / (a[d2].endValue - a[d2].startValue)) : b - Math.min(a[d2].spacing, 0.1 * b) * (this.viewportMaximum - a[d2].startValue) / (a[d2].endValue - a[d2].startValue)));
      e.minimum = this.viewportMinimum;
      e.maximum = this.viewportMaximum;
      e.range = c;
      if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? -1 : 1) * b * e.lnLogarithmBase / Math.log(Math.abs(c))) : e.pixelPerUnit = (this.reversed ? -1 : 1) * b / Math.abs(c), e.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
      if ("left" === this._position || "right" === this._position) this.logarithmic ? (e.lnLogarithmBase = Math.log(this.logarithmBase), e.pixelPerUnit = (this.reversed ? 1 : -1) * b * e.lnLogarithmBase / Math.log(Math.abs(c))) : e.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(c), e.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
      this.conversionParameters = e;
    };
    A.prototype.calculateAxisParameters = function() {
      if (this.logarithmic) this.calculateLogarithmicAxisParameters();
      else {
        var a = this.chart.layoutManager.getFreeSpace(), e = false, b = false;
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, c = 4;
        "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
        var a = Math.max(c, Math.floor(this.maxWidth / a)), d2, h, k2, c = 0;
        !f(this.options.viewportMinimum) && (!f(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
        if (f(this.options.viewportMinimum) && !f(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
        if (f(this.options.viewportMaximum) && !f(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
        if (this.scaleBreaks) {
          for (c = 0; c < this.scaleBreaks._appliedBreaks.length; c++) if ((!f(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue || !f(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[c].startValue || !f(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue) && (!f(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue || !f(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[c].endValue || !f(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue)) {
            this.scaleBreaks._appliedBreaks.splice(c, 1);
            break;
          }
        }
        if ("axisX" === this.type) {
          if (this.dataSeries && 0 < this.dataSeries.length) for (d2 = 0; d2 < this.dataSeries.length; d2++) "dateTime" === this.dataSeries[d2].xValueType && (b = true);
          d2 = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
          h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
          0 === h - d2 && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += c, d2 -= c);
          Infinity !== this.dataInfo.minDiff ? k2 = this.dataInfo.minDiff : 1 < h - d2 ? k2 = 0.5 * Math.abs(h - d2) : (k2 = 1, b && (e = true));
        } else "axisY" === this.type && (d2 = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(d2) || isFinite(h) ? isFinite(d2) ? isFinite(h) || (h = d2) : d2 = h : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d2 = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === d2 && 0 === h ? (h += 9, d2 = 0) : 0 === h - d2 ? (c = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += c, d2 -= c) : d2 > h ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(h, d2, null, true)), 5), 0 <= h ? d2 = h - c : h = isFinite(d2) ? d2 + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d2, h, null, true)), 0.05), 0 !== h && (h += c), 0 !== d2 && (d2 -= c)), k2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d2 ? 0.5 * Math.abs(h - d2) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d2 && (d2 = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > h && (h = 0));
        c = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d2 : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? h : this.viewportMaximum, null, true);
        if ("axisX" === this.type && b) {
          this.intervalType || (c / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : c / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : c / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : c / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : c / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : c / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : c / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : c / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : c / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : c / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : c / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : c / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : c / (1 * Y.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : c / (2 * Y.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : c / (5 * Y.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : c / (10 * Y.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : c / (15 * Y.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : c / (20 * Y.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : c / (30 * Y.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : c / (1 * Y.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : c / (2 * Y.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : c / (5 * Y.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : c / (10 * Y.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : c / (15 * Y.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : c / (20 * Y.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : c / (30 * Y.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : c / (1 * Y.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : c / (2 * Y.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : c / (3 * Y.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : c / (6 * Y.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : c / (1 * Y.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : c / (2 * Y.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : c / (4 * Y.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : c / (1 * Y.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : c / (2 * Y.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : c / (3 * Y.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : c / (1 * Y.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : c / (2 * Y.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : c / (3 * Y.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : c / (6 * Y.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = c / (1 * Y.yearDuration) <= a ? 1 : c / (2 * Y.yearDuration) <= a ? 2 : c / (4 * Y.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(c / (a - 1), true) / Y.yearDuration), this.intervalType = "year"));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = d2 - k2 / 2;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = h + k2 / 2;
          e ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
          this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
        } else {
          this.intervalType = "number";
          c = A.getNiceNumber(c, false);
          this.interval = this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(c / (a - 1), true);
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d2 - k2 / 2 : Math.floor(d2 / this.interval) * this.interval;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? h + k2 / 2 : Math.ceil(h / this.interval) * this.interval;
          0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
        }
        if (null === this.minimum || null === this.maximum) if ("axisX" === this.type ? (d2 = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === h - d2 && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += c, d2 -= c), k2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d2 ? 0.5 * Math.abs(h - d2) : 1) : "axisY" === this.type && (d2 = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d2) || isFinite(h) ? 0 === d2 && 0 === h ? (h += 9, d2 = 0) : 0 === h - d2 ? (c = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += c, d2 -= c) : d2 > h ? (c = Math.min(0.01 * Math.abs(this.getApparentDifference(
          h,
          d2,
          null,
          true
        )), 5), 0 <= h ? d2 = h - c : h = isFinite(d2) ? d2 + c : 0) : (c = Math.min(0.01 * Math.abs(this.getApparentDifference(d2, h, null, true)), 0.05), 0 !== h && (h += c), 0 !== d2 && (d2 -= c)) : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d2 = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), k2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d2 ? 0.5 * Math.abs(h - d2) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < d2 && (d2 = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > h && (h = 0)), Math.abs(this.getApparentDifference(d2, h, null, true)), "axisX" === this.type && b) {
          this.valueType = "dateTime";
          if (null === this.minimum || isNaN(this.minimum)) this.minimum = d2 - k2 / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
          if (null === this.maximum || isNaN(this.maximum)) this.maximum = h + k2 / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
        } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d2 - k2 / 2 : Math.floor(d2 / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? h + k2 / 2 : Math.ceil(h / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
        f(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        f(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(
          this.viewportMaximum,
          this.maximum
        ));
        this.range = this.viewportMaximum - this.viewportMinimum;
        this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
        this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range, 2));
      }
    };
    A.prototype.calculateLogarithmicAxisParameters = function() {
      var a = this.chart.layoutManager.getFreeSpace(), d2 = Math.log(this.logarithmBase), b;
      "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
      var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), c, g, h, k2;
      k2 = 1;
      if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
      if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
      if (this.scaleBreaks) {
        for (k2 = 0; k2 < this.scaleBreaks._appliedBreaks.length; k2++) if ((!f(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[k2].startValue || !f(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[k2].startValue || !f(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[k2].startValue) && (!f(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[k2].endValue || !f(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[k2].endValue || !f(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[k2].endValue)) {
          this.scaleBreaks._appliedBreaks.splice(k2, 1);
          break;
        }
      }
      "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === g / c && (k2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), g *= k2, c /= k2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / c > this.logarithmBase ? g / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= c && !isFinite(g) ? (g = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1) : 0 >= c ? c = g : isFinite(g) || (g = c), 1 === c && 1 === g ? (g *= this.logarithmBase - 1 / this.logarithmBase, c = 1) : 1 === g / c ? (k2 = Math.min(g * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), g *= k2, c /= k2) : c > g ? (k2 = Math.min(c / g * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= g ? c = g / k2 : g = c * k2) : (k2 = Math.min(g / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== g && (g *= k2), 1 !== c && (c /= k2)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / c > this.logarithmBase ? g / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > g && (g = 1));
      k2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
      var t2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
      this.intervalType = "number";
      k2 = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(k2) / d2), false));
      this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = A.getNiceExponent(Math.log(k2) / d2 / (a - 1), true), b = A.getNiceNumber(t2 / (a - 1), true));
      if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / d2 / this.interval));
      if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(g) / d2 / this.interval));
      1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceExponent(Math.ceil(Math.log(k2) / d2) / (a - 1)), b = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
      if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === g / c && (k2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), g *= k2, c /= k2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / c > this.logarithmBase ? g / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(c) || isFinite(g) ? 1 === c && 1 === g ? (g *= this.logarithmBase, c /= this.logarithmBase) : 1 === g / c ? (k2 = Math.pow(this.logarithmBase, this.interval), g *= k2, c /= k2) : c > g ? (k2 = Math.min(0.01 * (c / g), 5), 1 <= g ? c = g / k2 : g = c * k2) : (k2 = Math.min(g / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== g && (g *= k2), 1 !== c && (c /= k2)) : (g = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / c > this.logarithmBase ? g / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > g && (g = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? c / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / d2 / this.interval)), f(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? g * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(g) / d2 / this.interval)), f(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
      this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
      this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
      this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
      c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d2 * this.interval) + 0.2) * this.interval);
      this.range = this.viewportMaximum / this.viewportMinimum;
      this.noTicks = a;
      if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
        for (d2 = Math.floor(this.viewportMinimum / b + 0.5) * b; d2 < this.viewportMinimum; ) d2 += b;
        this.equidistantInterval = false;
        this.intervalStartPosition = d2;
        this.interval = b;
      } else this.options.interval || (b = Math.ceil(this.interval), this.range > this.interval && (this.interval = b, c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d2 * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = c;
      if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
        d2 = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
        if (isNaN(d2) || !isFinite(d2)) d2 = 2;
        if (2 < d2) for (k2 = 0; k2 < d2 - 2; k2++) this.valueFormatString += "#";
      }
    };
    A.generateValueFormatString = function(a, d2) {
      var b = "#,##0.", c = d2;
      1 > a && (c += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(c) || !isFinite(c)) && (c = d2);
      for (var g = 0; g < c; g++) b += "#";
      return b;
    };
    A.getNiceExponent = function(a, d2) {
      var b = Math.floor(Math.log(a) / Math.LN10), c = a / Math.pow(10, b), c = 0 > b ? 1 >= c ? 1 : 5 >= c ? 5 : 10 : Math.max(Math.floor(c), 1);
      return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20));
    };
    A.getNiceNumber = function(a, d2) {
      var b = Math.floor(Math.log(a) / Math.LN10), c = a / Math.pow(10, b), c = d2 ? 1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10 : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10;
      return -20 > b ? Number(c * Math.pow(10, b)) : Number((c * Math.pow(10, b)).toFixed(20));
    };
    A.prototype.getLabelStartPoint = function() {
      var a = Y[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
      if ("millisecond" !== this.intervalType) if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
      else if ("minute" === this.intervalType) {
        if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
      } else if ("hour" === this.intervalType) {
        if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
      } else if ("day" === this.intervalType) {
        if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
      } else if ("week" === this.intervalType) {
        if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
      } else if ("month" === this.intervalType) {
        if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
      } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
      return a;
    };
    ha(W2, Q);
    ha(X2, Q);
    X2.prototype.createUserOptions = function(a) {
      if ("undefined" !== typeof a || this.options._isPlaceholder) {
        var d2 = 0;
        this.parent.options._isPlaceholder && this.parent.createUserOptions();
        this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), d2 = this.parent.options[this.optionsName].indexOf(this.options));
        this.options = "undefined" === typeof a ? {} : a;
        this.parent.options[this.optionsName][d2] = this.options;
      }
    };
    X2.prototype.render = function(a) {
      if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
        var d2 = this.ctx, b = this.ctx.globalAlpha;
        this.ctx = a || this.ctx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
        this.ctx.clip();
        var c = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), g = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.globalAlpha = 1;
        O(this.id);
        var h, f2, k2, t2, m, n;
        a = Math.max(
          this.spacing,
          3
        );
        var p = Math.max(0, this.lineThickness);
        this.ctx.lineWidth = p;
        this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, p));
        if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position) if (c = 1 === p % 2 ? (c.x << 0) + 0.5 : c.x << 0, f2 = 1 === p % 2 ? (g.x << 0) + 0.5 : g.x << 0, "top" === this.scaleBreaks.parent._position ? (g = this.chart.plotArea.y1, k2 = this.chart.plotArea.y2 + p / 2 + 0.5 << 0) : (g = this.chart.plotArea.y2, k2 = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: c - p / 2, y1: g, x2: f2 + p / 2, y2: k2 }, this.ctx.moveTo(
          c,
          g
        ), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(c, k2), this.ctx.lineTo(f2, k2), this.ctx.lineTo(f2, g);
        else if ("wavy" === this.type) {
          t2 = c;
          m = g;
          h = 0.5;
          n = (k2 - m) / a / 3;
          for (var q = 0; q < n; q++) this.ctx.bezierCurveTo(t2 + h * a, m + a, t2 + h * a, m + 2 * a, t2, m + 3 * a), m += 3 * a, h *= -1;
          this.ctx.bezierCurveTo(t2 + h * a, m + a, t2 + h * a, m + 2 * a, t2, m + 3 * a);
          t2 = f2;
          h *= -1;
          this.ctx.lineTo(t2, m);
          for (q = 0; q < n; q++) this.ctx.bezierCurveTo(t2 + h * a, m - a, t2 + h * a, m - 2 * a, t2, m - 3 * a), m -= 3 * a, h *= -1;
        } else {
          if ("zigzag" === this.type) {
            h = -1;
            m = g + a;
            t2 = c + a;
            n = (k2 - m) / a / 2;
            for (q = 0; q < n; q++) this.ctx.lineTo(t2, m), t2 += 2 * h * a, m += 2 * a, h *= -1;
            this.ctx.lineTo(t2, m);
            t2 += f2 - c;
            for (q = 0; q < n + 1; q++) this.ctx.lineTo(t2, m), t2 += 2 * h * a, m -= 2 * a, h *= -1;
            this.ctx.lineTo(t2 + h * a, m + a);
          }
        }
        else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
          if (g = 1 === p % 2 ? (g.y << 0) + 0.5 : g.y << 0, k2 = 1 === p % 2 ? (c.y << 0) + 0.5 : c.y << 0, "left" === this.scaleBreaks.parent._position ? (c = this.chart.plotArea.x1, f2 = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (c = this.chart.plotArea.x2, f2 = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: c, y1: g - p / 2, x2: f2, y2: k2 + p / 2 }, this.ctx.moveTo(c, g), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(f2, g), this.ctx.lineTo(f2, k2), this.ctx.lineTo(c, k2);
          else if ("wavy" === this.type) {
            t2 = c;
            m = g;
            h = 0.5;
            n = (f2 - t2) / a / 3;
            for (q = 0; q < n; q++) this.ctx.bezierCurveTo(t2 + a, m + h * a, t2 + 2 * a, m + h * a, t2 + 3 * a, m), t2 += 3 * a, h *= -1;
            this.ctx.bezierCurveTo(t2 + a, m + h * a, t2 + 2 * a, m + h * a, t2 + 3 * a, m);
            m = k2;
            h *= -1;
            this.ctx.lineTo(
              t2,
              m
            );
            for (q = 0; q < n; q++) this.ctx.bezierCurveTo(t2 - a, m + h * a, t2 - 2 * a, m + h * a, t2 - 3 * a, m), t2 -= 3 * a, h *= -1;
          } else if ("zigzag" === this.type) {
            h = 1;
            m = g - a;
            t2 = c + a;
            n = (f2 - t2) / a / 2;
            for (q = 0; q < n; q++) this.ctx.lineTo(t2, m), m += 2 * h * a, t2 += 2 * a, h *= -1;
            this.ctx.lineTo(t2, m);
            m += k2 - g;
            for (q = 0; q < n + 1; q++) this.ctx.lineTo(t2, m), m += 2 * h * a, t2 -= 2 * a, h *= -1;
            this.ctx.lineTo(t2 + a, m + h * a);
          }
        }
        0 < p && this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.globalAlpha = this.fillOpacity;
        this.ctx.globalCompositeOperation = "destination-over";
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.globalAlpha = b;
        this.ctx = d2;
      }
    };
    ha(P, Q);
    P.prototype.createUserOptions = function(a) {
      if ("undefined" !== typeof a || this.options._isPlaceholder) {
        var d2 = 0;
        this.parent.options._isPlaceholder && this.parent.createUserOptions();
        this.options._isPlaceholder || (Ea(this.parent.stripLines), d2 = this.parent.options.stripLines.indexOf(this.options));
        this.options = "undefined" === typeof a ? {} : a;
        this.parent.options.stripLines[d2] = this.options;
      }
    };
    P.prototype.render = function() {
      this.ctx.save();
      var a = this.parent.getPixelCoordinatesOnAxis(this.value), d2 = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
      if (0 < d2) {
        var b = null === this.opacity ? 1 : this.opacity;
        this.ctx.strokeStyle = this.color;
        this.ctx.beginPath();
        var c = this.ctx.globalAlpha;
        this.ctx.globalAlpha = b;
        O(this.id);
        var g, h, f2, k2;
        this.ctx.lineWidth = d2;
        this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, d2));
        if ("bottom" === this.parent._position || "top" === this.parent._position) g = h = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, f2 = this.chart.plotArea.y1, k2 = this.chart.plotArea.y2, this.bounds = { x1: g - d2 / 2, y1: f2, x2: h + d2 / 2, y2: k2 };
        else if ("left" === this.parent._position || "right" === this.parent._position) f2 = k2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, g = this.chart.plotArea.x1, h = this.chart.plotArea.x2, this.bounds = { x1: g, y1: f2 - d2 / 2, x2: h, y2: k2 + d2 / 2 };
        this.ctx.moveTo(g, f2);
        this.ctx.lineTo(h, k2);
        this.ctx.stroke();
        this.ctx.globalAlpha = c;
      }
      this.ctx.restore();
    };
    ha(ea2, Q);
    ea2.prototype.showAt = function(a) {
      if (!this.enabled) return false;
      var d2 = this.chart, b = false;
      d2.resetOverlayedCanvas();
      d2.clearedOverlayedCanvas = this.parent.type;
      if ("xySwapped" === d2.plotInfo.axisPlacement) if ("bottom" === this.parent._position) for (var c = 0; c < d2.axisY.length; c++) this.parent === d2.axisY[c] && (d2.axisY[c]._crosshairValue = a >= d2.axisY[c].viewportMinimum && a <= d2.axisY[c].viewportMaximum ? a : null);
      else if ("top" === this.parent._position) for (c = 0; c < d2.axisY2.length; c++) this.parent === d2.axisY2[c] && (d2.axisY2[c]._crosshairValue = a >= d2.axisY2[c].viewportMinimum && a <= d2.axisY2[c].viewportMaximum ? a : null);
      else if ("left" === this.parent._position) for (c = 0; c < d2.axisX.length; c++) this.parent === d2.axisX[c] && (d2.axisX[c]._crosshairValue = a >= d2.axisX[c].viewportMinimum && a <= d2.axisX[c].viewportMaximum ? a : null);
      else {
        if ("right" === this.parent._position) for (c = 0; c < d2.axisX2.length; c++) this.parent === d2.axisX2[c] && (d2.axisX2[c]._crosshairValue = a >= d2.axisX2[c].viewportMinimum && a <= d2.axisX2[c].viewportMaximum ? a : null);
      }
      else if ("bottom" === this.parent._position) for (c = 0; c < d2.axisX.length; c++) this.parent === d2.axisX[c] && (d2.axisX[c]._crosshairValue = a >= d2.axisX[c].viewportMinimum && a <= d2.axisX[c].viewportMaximum ? a : null);
      else if ("top" === this.parent._position) for (c = 0; c < d2.axisX2.length; c++) this.parent === d2.axisX2[c] && (d2.axisX2[c]._crosshairValue = a >= d2.axisX2[c].viewportMinimum && a <= d2.axisX2[c].viewportMaximum ? a : null);
      else if ("left" === this.parent._position) for (c = 0; c < d2.axisY.length; c++) this.parent === d2.axisY[c] && (d2.axisY[c]._crosshairValue = a >= d2.axisY[c].viewportMinimum && a <= d2.axisY[c].viewportMaximum ? a : null);
      else if ("right" === this.parent._position) for (c = 0; c < d2.axisY2.length; c++) this.parent === d2.axisY2[c] && (d2.axisY2[c]._crosshairValue = a >= d2.axisY2[c].viewportMinimum && a <= d2.axisY2[c].viewportMaximum ? a : null);
      for (c = 0; c < d2.axisX.length; c++) a = d2.axisX[c]._crosshairValue, d2.axisX[c].crosshair && (d2.axisX[c].crosshair.enabled && !f(a) && a >= d2.axisX[c].viewportMinimum && a <= d2.axisX[c].viewportMaximum) && (d2.axisX[c].showCrosshair(a), d2.axisX[c].crosshair._updatedValue = a, this === d2.axisX[c].crosshair && (b = true));
      for (c = 0; c < d2.axisX2.length; c++) a = d2.axisX2[c]._crosshairValue, d2.axisX2[c].crosshair && (d2.axisX2[c].crosshair.enabled && !f(a) && a >= d2.axisX2[c].viewportMinimum && a <= d2.axisX2[c].viewportMaximum) && (d2.axisX2[c].showCrosshair(a), d2.axisX2[c].crosshair._updatedValue = a, this === d2.axisX2[c].crosshair && (b = true));
      for (c = 0; c < d2.axisY.length; c++) a = d2.axisY[c]._crosshairValue, d2.axisY[c].crosshair && (d2.axisY[c].crosshair.enabled && !f(a) && a >= d2.axisY[c].viewportMinimum && a <= d2.axisY[c].viewportMaximum) && (d2.axisY[c].showCrosshair(a), d2.axisY[c].crosshair._updatedValue = a, this === d2.axisY[c].crosshair && (b = true));
      for (c = 0; c < d2.axisY2.length; c++) a = d2.axisY2[c]._crosshairValue, d2.axisY2[c].crosshair && (d2.axisY2[c].crosshair.enabled && !f(a) && d2._crosshairY2Value >= d2.axisY2[c].viewportMinimum && d2._crosshairY2Value <= d2.axisY2[c].viewportMaximum) && (d2.axisY2[c].showCrosshair(a), d2.axisY2[c].crosshair._updatedValue = a, this === d2.axisY2[c].crosshair && (b = true));
      this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
      return b;
    };
    ea2.prototype.hide = function() {
      this.chart.resetOverlayedCanvas();
      this.chart.renderCrosshairs(this.parent);
      this._hidden = true;
    };
    ea2.prototype.render = function(a, d2, b) {
      var c, g, h, k2, t2 = null, w2 = null, m = null, n = "";
      if (!this.valueFormatString) if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
      else {
        var p = 0, p = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
        this.valueFormatString = A.generateValueFormatString(this.parent.range, p);
      }
      var m = null === this.opacity ? 1 : this.opacity, p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), q = this.chart.overlaidCanvasCtx, l = q.globalAlpha;
      q.globalAlpha = m;
      q.beginPath();
      q.strokeStyle = this.color;
      q.lineWidth = p;
      q.save();
      this.labelFontSize = f(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize;
      this.labelMaxWidth = f(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
      this.labelMaxHeight = f(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
      0 < p && q.setLineDash && q.setLineDash(N(this.lineDashType, p));
      m = new na(q, {
        x: 0,
        y: 0,
        padding: { top: 2, right: 3, bottom: 2, left: 4 },
        backgroundColor: this.labelBackgroundColor,
        borderColor: this.labelBorderColor,
        borderThickness: this.labelBorderThickness,
        cornerRadius: this.labelCornerRadius,
        maxWidth: this.labelMaxWidth,
        maxHeight: this.labelMaxHeight,
        angle: this.labelAngle,
        text: n,
        horizontalAlign: "left",
        fontSize: this.labelFontSize,
        fontFamily: this.labelFontFamily,
        fontWeight: this.labelFontWeight,
        fontColor: this.labelFontColor,
        fontStyle: this.labelFontStyle,
        textBaseline: "middle"
      });
      if (this.snapToDataPoint) {
        var r2 = 0, n = [];
        if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
          var s2 = null;
          if ("bottom" === this.parent._position || "top" === this.parent._position) r2 = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d2 });
          else if ("left" === this.parent._position || "right" === this.parent._position) r2 = this.parent.convertPixelToValue({ y: d2 });
          for (var u3 = 0; u3 < this.parent.dataSeries.length; u3++) (s2 = this.parent.dataSeries[u3].getDataPointAtX(r2, true)) && 0 <= s2.index && (s2.dataSeries = this.parent.dataSeries[u3], null !== s2.dataPoint.y && s2.dataSeries.visible && n.push(s2));
          s2 = null;
          if (0 === n.length) return;
          n.sort(function(a2, b2) {
            return a2.distance - b2.distance;
          });
          s2 = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
          u3 = 0;
          if ("rangeBar" === n[0].dataSeries.type || "error" === n[0].dataSeries.type) for (var s2 = Math.abs(a - this.parent.convertValueToPixel(n[u3].dataPoint.y[0])), v = 0, r2 = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (var z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(a - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else v = Math.abs(a - this.parent.convertValueToPixel(n[r2].dataPoint.y)), v < s2 && (s2 = v, u3 = r2);
          else if ("stackedBar" === n[0].dataSeries.type) for (var s2 = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), y2 = v = 0, r2 = u3 = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(a - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else y2 += n[r2].dataPoint.y, v = Math.abs(a - this.parent.convertValueToPixel(y2)), v < s2 && (s2 = v, u3 = r2);
          else if ("stackedBar100" === n[0].dataSeries.type) for (var s2 = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), B = y2 = v = 0, r2 = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(a - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else y2 += n[r2].dataPoint.y, B = n[r2].dataPoint.x.getTime ? n[r2].dataPoint.x.getTime() : n[r2].dataPoint.x, B = 100 * (y2 / n[r2].dataSeries.plotUnit.dataPointYSums[B]), v = Math.abs(a - this.parent.convertValueToPixel(B)), v < s2 && (s2 = v, u3 = r2);
          else for (s2 = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), r2 = u3 = v = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(a - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else v = Math.abs(a - this.parent.convertValueToPixel(n[r2].dataPoint.y)), v < s2 && (s2 = v, u3 = r2);
          z = n[u3];
          if ("bottom" === this.parent._position || "top" === this.parent._position) {
            c = 0;
            if ("rangeBar" === this.parent.dataSeries[u3].type || "error" === this.parent.dataSeries[u3].type) {
              s2 = Math.abs(a - this.parent.convertValueToPixel(z.dataPoint.y[0]));
              for (r2 = v = 0; r2 < z.dataPoint.y.length; r2++) v = Math.abs(a - this.parent.convertValueToPixel(z.dataPoint.y[r2])), v < s2 && (s2 = v, c = r2);
              t2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.y[c]) << 0;
              this.value = z.dataPoint.y[c];
              m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataPoint.y[c] }) : f(this.options.label) ? $(b ? b : z.dataPoint.y[c], this.valueFormatString, this.chart._cultureInfo) : this.label;
            } else if ("stackedBar" === this.parent.dataSeries[u3].type) {
              s2 = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
              y2 = v = 0;
              for (r2 = u3; 0 <= r2; r2--) y2 += n[r2].dataPoint.y, v = Math.abs(a - this.parent.convertValueToPixel(y2)), v < s2 && (s2 = v, c = r2);
              t2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y2) << 0) + 0.5 : this.parent.convertValueToPixel(y2) << 0;
              this.value = y2;
              m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataPoint.y }) : f(this.options.label) ? $(b ? b : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
            } else if ("stackedBar100" === this.parent.dataSeries[u3].type) {
              s2 = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
              B = y2 = v = 0;
              for (r2 = u3; 0 <= r2; r2--) y2 += n[r2].dataPoint.y, B = n[r2].dataPoint.x.getTime ? n[r2].dataPoint.x.getTime() : n[r2].dataPoint.x, B = 100 * (y2 / n[r2].dataSeries.plotUnit.dataPointYSums[B]), v = Math.abs(a - this.parent.convertValueToPixel(B)), v < s2 && (s2 = v, c = r2);
              t2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(B) << 0) + 0.5 : this.parent.convertValueToPixel(B) << 0;
              this.value = B;
              m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : B }) : f(this.options.label) ? $(b ? b : B, this.valueFormatString, this.chart._cultureInfo) : this.label;
            } else t2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.y) << 0, this.value = z.dataPoint.y, m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataPoint.y }) : f(this.options.label) ? $(b ? b : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
            c = g = t2;
            h = this.chart.plotArea.y1;
            k2 = this.chart.plotArea.y2;
            this.bounds = { x1: c - p / 2, y1: h, x2: g + p / 2, y2: k2 };
            m.x = c - m.measureText().width / 2;
            m.x + m.width > this.chart.bounds.x2 ? m.x = this.chart.bounds.x2 - m.width : m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
            m.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -m.height + this.parent.tickLength : m.fontSize / 2) + 2;
            m.y + m.height > this.chart.bounds.y2 ? m.y = this.chart.bounds.y2 - m.height : m.y < this.chart.bounds.y1 && (m.y = this.chart.bounds.y1);
          } else if ("left" === this.parent._position || "right" === this.parent._position) {
            h = k2 = w2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.x) << 0;
            c = this.chart.plotArea.x1;
            g = this.chart.plotArea.x2;
            this.bounds = { x1: c, y1: h - p / 2, x2: g, y2: k2 + p / 2 };
            B = false;
            if (this.parent.labels) for (n = Math.ceil(this.parent.interval), r2 = 0; r2 < this.parent.viewportMaximum; r2 += n) if (this.parent.labels[r2]) B = true;
            else {
              B = false;
              break;
            }
            if (B) {
              if ("axisX" === this.parent.type) for (r2 = this.parent.convertPixelToValue({ y: d2 }), s2 = null, u3 = 0; u3 < this.parent.dataSeries.length; u3++) (s2 = this.parent.dataSeries[u3].getDataPointAtX(r2, true)) && 0 <= s2.index && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : f(this.options.label) ? s2.dataPoint.label : this.label);
            } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataPoint.x }) : f(this.options.label) ? oa(b ? b : z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataPoint.x }) : f(this.options.label) ? $(b ? b : z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
            this.value = z.dataPoint.x;
            m.y = k2 + m.fontSize / 2 - m.measureText().height / 2 + 2;
            m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
            "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2);
          }
        } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
          r2 = this.parent.convertPixelToValue({ x: a });
          for (u3 = 0; u3 < this.parent.dataSeries.length; u3++) (s2 = this.parent.dataSeries[u3].getDataPointAtX(r2, true)) && 0 <= s2.index && (s2.dataSeries = this.parent.dataSeries[u3], null !== s2.dataPoint.y && s2.dataSeries.visible && n.push(s2));
          if (0 === n.length) return;
          n.sort(function(a2, b2) {
            return a2.distance - b2.distance;
          });
          z = n[0];
          c = g = t2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.x) << 0;
          h = this.chart.plotArea.y1;
          k2 = this.chart.plotArea.y2;
          this.bounds = { x1: c - p / 2, y1: h, x2: g + p / 2, y2: k2 };
          B = false;
          if (this.parent.labels) for (n = Math.ceil(this.parent.interval), r2 = 0; r2 < this.parent.viewportMaximum; r2 += n) if (this.parent.labels[r2]) B = true;
          else {
            B = false;
            break;
          }
          if (B) {
            if ("axisX" === this.parent.type) for (r2 = this.parent.convertPixelToValue({ x: a }), s2 = null, u3 = 0; u3 < this.parent.dataSeries.length; u3++) (s2 = this.parent.dataSeries[u3].getDataPointAtX(r2, true)) && 0 <= s2.index && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : f(this.options.label) ? s2.dataPoint.label : this.label);
          } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({
            chart: this.chart,
            axis: this.parent.options,
            crosshair: this.options,
            value: z.dataPoint.x
          }) : f(this.options.label) ? oa(b ? b : z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : f(this.options.label) ? $(b ? b : z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
          this.value = z.dataPoint.x;
          m.x = c - m.measureText().width / 2;
          m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width);
          m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
          "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2);
        } else if ("left" === this.parent._position || "right" === this.parent._position) {
          !f(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (r2 = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
          for (u3 = 0; u3 < this.parent.dataSeries.length; u3++) (s2 = this.parent.dataSeries[u3].getDataPointAtX(
            r2,
            true
          )) && 0 <= s2.index && (s2.dataSeries = this.parent.dataSeries[u3], null !== s2.dataPoint.y && s2.dataSeries.visible && n.push(s2));
          if (0 === n.length) return;
          n.sort(function(a2, b2) {
            return a2.distance - b2.distance;
          });
          u3 = 0;
          if ("rangeColumn" === n[0].dataSeries.type || "rangeArea" === n[0].dataSeries.type || "error" === n[0].dataSeries.type || "rangeSplineArea" === n[0].dataSeries.type || "candlestick" === n[0].dataSeries.type || "ohlc" === n[0].dataSeries.type || "boxAndWhisker" === n[0].dataSeries.type) for (s2 = Math.abs(d2 - this.parent.convertValueToPixel(n[0].dataPoint.y[0])), r2 = v = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(d2 - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else v = Math.abs(d2 - this.parent.convertValueToPixel(n[r2].dataPoint.y)), v < s2 && (s2 = v, u3 = r2);
          else if ("stackedColumn" === n[0].dataSeries.type || "stackedArea" === n[0].dataSeries.type) for (s2 = Math.abs(d2 - this.parent.convertValueToPixel(n[0].dataPoint.y)), r2 = y2 = v = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(d2 - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else y2 += n[r2].dataPoint.y, v = Math.abs(d2 - this.parent.convertValueToPixel(y2)), v < s2 && (s2 = v, u3 = r2);
          else if ("stackedColumn100" === n[0].dataSeries.type || "stackedArea100" === n[0].dataSeries.type) for (s2 = Math.abs(d2 - this.parent.convertValueToPixel(n[0].dataPoint.y)), r2 = B = y2 = v = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(d2 - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else y2 += n[r2].dataPoint.y, B = n[r2].dataPoint.x.getTime ? n[r2].dataPoint.x.getTime() : n[r2].dataPoint.x, B = 100 * (y2 / n[r2].dataSeries.plotUnit.dataPointYSums[B]), v = Math.abs(d2 - this.parent.convertValueToPixel(B)), v < s2 && (s2 = v, u3 = r2);
          else for (s2 = Math.abs(d2 - this.parent.convertValueToPixel(n[0].dataPoint.y)), r2 = v = 0; r2 < n.length; r2++) if (n[r2].dataPoint.y && n[r2].dataPoint.y.length) for (z = 0; z < n[r2].dataPoint.y.length; z++) v = Math.abs(d2 - this.parent.convertValueToPixel(n[r2].dataPoint.y[z])), v < s2 && (s2 = v, u3 = r2);
          else v = Math.abs(d2 - this.parent.convertValueToPixel(n[r2].dataPoint.y)), v < s2 && (s2 = v, u3 = r2);
          z = n[u3];
          c = 0;
          if ("rangeColumn" === this.parent.dataSeries[u3].type || "rangeArea" === this.parent.dataSeries[u3].type || "error" === this.parent.dataSeries[u3].type || "rangeSplineArea" === this.parent.dataSeries[u3].type || "candlestick" === this.parent.dataSeries[u3].type || "ohlc" === this.parent.dataSeries[u3].type || "boxAndWhisker" === this.parent.dataSeries[u3].type) {
            s2 = Math.abs(d2 - this.parent.convertValueToPixel(z.dataPoint.y[0]));
            for (r2 = v = 0; r2 < z.dataPoint.y.length; r2++) v = Math.abs(d2 - this.parent.convertValueToPixel(z.dataPoint.y[r2])), v < s2 && (s2 = v, c = r2);
            w2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.y[c]) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.y[c]) << 0;
            m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataPoint.y[c] }) : f(this.options.label) ? $(b ? b : z.dataPoint.y[c], this.valueFormatString, this.chart._cultureInfo) : this.label;
            this.value = z.dataPoint.y[c];
          } else if ("stackedColumn" === this.parent.dataSeries[u3].type || "stackedArea" === this.parent.dataSeries[u3].type) {
            s2 = Math.abs(d2 - this.parent.convertValueToPixel(n[0].dataPoint.y));
            y2 = v = 0;
            for (r2 = u3; 0 <= r2; r2--) y2 += n[r2].dataPoint.y, v = Math.abs(d2 - this.parent.convertValueToPixel(y2)), v < s2 && (s2 = v, c = r2);
            w2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y2) << 0) + 0.5 : this.parent.convertValueToPixel(y2) << 0;
            m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataPoint.y }) : f(this.options.label) ? $(b ? b : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
            this.value = y2;
          } else if ("stackedColumn100" === this.parent.dataSeries[u3].type || "stackedArea100" === this.parent.dataSeries[u3].type) {
            s2 = Math.abs(d2 - this.parent.convertValueToPixel(n[0].dataPoint.y));
            y2 = v = 0;
            for (r2 = u3; 0 <= r2; r2--) y2 += n[r2].dataPoint.y, B = n[r2].dataPoint.x.getTime ? n[r2].dataPoint.x.getTime() : n[r2].dataPoint.x, B = 100 * (y2 / n[r2].dataSeries.plotUnit.dataPointYSums[B]), v = Math.abs(d2 - this.parent.convertValueToPixel(B)), v < s2 && (s2 = v, c = r2);
            w2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(B) << 0) + 0.5 : this.parent.convertValueToPixel(B) << 0;
            m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : B }) : f(this.options.label) ? $(b ? b : B, this.valueFormatString, this.chart._cultureInfo) : this.label;
            this.value = B;
          } else "waterfall" === this.parent.dataSeries[u3].type ? (w2 = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataSeries.dataPointEOs[z.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataSeries.dataPointEOs[z.index].cumulativeSum) << 0, m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : z.dataSeries.dataPointEOs[z.index].cumulativeSum }) : f(this.options.label) ? $(b ? b : z.dataSeries.dataPointEOs[z.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = z.dataSeries.dataPointEOs[z.index].cumulativeSum) : (w2 = 1 === q.lineWidth % 2 ? (f(a) ? d2 : this.parent.convertValueToPixel(z.dataPoint.y) << 0) + 0.5 : f(a) ? d2 : this.parent.convertValueToPixel(z.dataPoint.y) << 0, m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.y }) : f(this.options.label) ? $(b ? b : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = z.dataPoint.y);
          h = k2 = w2;
          c = this.chart.plotArea.x1;
          g = this.chart.plotArea.x2;
          this.bounds = { x1: c, y1: h - p / 2, x2: g, y2: k2 + p / 2 };
          m.y = k2 + m.fontSize / 2 - m.measureText().height / 2 + 2;
          m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
          "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2);
        }
        n = null;
        if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && m.y - m.fontSize / 2 < this.chart.bounds.y1 && (m.y = this.chart.bounds.y1 + m.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - m.fontSize / 2 + m.measureText().height > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.height + m.fontSize / 2 + 2), c >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && g <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < p && (q.moveTo(c, h), q.lineTo(g, k2), q.stroke(), this._hidden = false), q.restore(), !f(m.text) && ("number" === typeof m.text.valueOf() || 0 < m.text.length) && m.render(true));
        if ("left" === this.parent._position || "right" === this.parent._position) "left" === this.parent._position && m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1), "right" === this.parent._position && m.x + m.measureText().width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.measureText().width), k2 >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && h <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < p && (q.moveTo(c, h), q.lineTo(g, k2), q.stroke(), this._hidden = false), q.restore(), !f(m.text) && ("number" === typeof m.text.valueOf() || 0 < m.text.length) && m.render(true));
      } else {
        if ("bottom" === this.parent._position || "top" === this.parent._position) c = g = t2 = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, h = this.chart.plotArea.y1, k2 = this.chart.plotArea.y2, this.bounds = { x1: c - p / 2, y1: h, x2: g + p / 2, y2: k2 };
        else if ("left" === this.parent._position || "right" === this.parent._position) h = k2 = w2 = 1 === q.lineWidth % 2 ? (d2 << 0) + 0.5 : d2 << 0, c = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = { x1: c, y1: h - p / 2, x2: g, y2: k2 + p / 2 };
        if ("xySwapped" === this.chart.plotInfo.axisPlacement) if ("left" === this.parent._position || "right" === this.parent._position) {
          B = false;
          if (this.parent.labels) for (n = Math.ceil(this.parent.interval), r2 = 0; r2 < this.parent.viewportMaximum; r2 += n) if (this.parent.labels[r2]) B = true;
          else {
            B = false;
            break;
          }
          if (B) {
            if ("axisX" === this.parent.type) for (r2 = this.parent.convertPixelToValue({ y: d2 }), s2 = null, u3 = 0; u3 < this.parent.dataSeries.length; u3++) (s2 = this.parent.dataSeries[u3].getDataPointAtX(r2, true)) && 0 <= s2.index && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) }) : f(this.options.label) ? s2.dataPoint.label : this.label);
          } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(d2) }) : f(this.options.label) ? oa(b ? b : this.parent.convertPixelToValue(d2), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(d2) }) : f(this.options.label) ? $(b ? b : this.parent.convertPixelToValue(d2), this.valueFormatString, this.chart._cultureInfo) : this.label);
          m.y = d2 + m.fontSize / 2 - m.measureText().height / 2 + 2;
          m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
          "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x1 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2);
        } else {
          if ("bottom" === this.parent._position || "top" === this.parent._position) m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) }) : f(this.options.label) ? $(
            b ? b : this.parent.convertPixelToValue(a),
            this.valueFormatString,
            this.chart._cultureInfo
          ) : this.label, m.x = c - m.measureText().width / 2, m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width), m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1), "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2);
        }
        else if ("bottom" === this.parent._position || "top" === this.parent._position) {
          B = false;
          n = "";
          if (this.parent.labels) for (n = Math.ceil(this.parent.interval), r2 = 0; r2 < this.parent.viewportMaximum; r2 += n) if (this.parent.labels[r2]) B = true;
          else {
            B = false;
            break;
          }
          if (B) {
            if ("axisX" === this.parent.type) for (r2 = this.parent.convertPixelToValue({ x: a }), s2 = null, u3 = 0; u3 < this.parent.dataSeries.length; u3++) (s2 = this.parent.dataSeries[u3].getDataPointAtX(r2, true)) && 0 <= s2.index && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) }) : f(this.options.label) ? b ? b : s2.dataPoint.label : this.label);
          } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(a) }) : f(this.options.label) ? oa(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" }) : f(this.options.label) ? $(b ? b : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label);
          m.x = c - m.measureText().width / 2;
          m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width);
          m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
          "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2);
        } else if ("left" === this.parent._position || "right" === this.parent._position) m.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b ? b : this.parent.convertPixelToValue(d2) }) : f(this.options.label) ? $(b ? b : this.parent.convertPixelToValue(d2), this.valueFormatString, this.chart._cultureInfo) : this.label, m.y = d2 + m.fontSize / 2 - m.measureText().height / 2 + 2, m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2), "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2);
        "left" === this.parent._position && m.x < this.chart.bounds.x1 ? m.x = this.chart.bounds.x1 : "right" === this.parent._position && m.x + m.measureText().width > this.chart.bounds.x2 ? m.x = this.chart.bounds.x2 - m.measureText().width : "top" === this.parent._position && m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - m.fontSize / 2 + m.measureText().height > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.height + m.fontSize / 2 + 2);
        0 < p && (q.moveTo(c, h), q.lineTo(g, k2), q.stroke(), this._hidden = false);
        q.restore();
        !f(m.text) && ("number" === typeof m.text.valueOf() || 0 < m.text.length) && m.render(true);
        this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d2);
      }
      if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(t2);
      if ("left" === this.parent._position || "right" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(w2);
      q.globalAlpha = l;
    };
    ha(aa, Q);
    aa.prototype._initialize = function() {
      this.updateOption("updated");
      this.updateOption("hidden");
      if (this.enabled) {
        this.container = document.createElement("div");
        this.container.setAttribute("class", "canvasjs-chart-tooltip");
        this.container.style.position = "absolute";
        this.container.style.height = "auto";
        this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
        this.container.style.zIndex = "1000";
        this.container.style.pointerEvents = "none";
        this.container.style.display = "none";
        var a;
        a = '<div style=" width: auto;height: auto;min-width: 50px;';
        a += "line-height: auto;";
        a += "margin: 0px 0px 0px 0px;";
        a += "padding: 5px;";
        a += "font-family: Calibri, Arial, Georgia, serif;";
        a += "font-weight: normal;";
        a += "font-style: " + (s ? "italic;" : "normal;");
        a += "font-size: 14px;";
        a += "color: #000000;";
        a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
        a += "text-align: left;";
        a += "border: 2px solid gray;";
        a += s ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
        a += "text-indent: 0px;";
        a += "white-space: nowrap;";
        a += "border-radius: 5px;";
        a += "-moz-user-select:none;";
        a += "-khtml-user-select: none;";
        a += "-webkit-user-select: none;";
        a += "-ms-user-select: none;";
        a += "user-select: none;";
        s || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
        a += '} "> Sample Tooltip</div>';
        this.container.innerHTML = a;
        this.contentDiv = this.container.firstChild;
        this.container.style.borderRadius = this.contentDiv.style.borderRadius;
        this.chart._canvasJSContainer.appendChild(this.container);
      }
    };
    aa.prototype.mouseMoveHandler = function(a, d2) {
      this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d2));
    };
    aa.prototype._updateToolTip = function(a, d2, b) {
      b = "undefined" === typeof b ? true : b;
      this.container || this._initialize();
      this.enabled || (this.hide(), this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this));
      if (!this.chart.disableToolTip) {
        if ("undefined" === typeof a || "undefined" === typeof d2) {
          if (isNaN(this._prevX) || isNaN(this._prevY)) return;
          a = this._prevX;
          d2 = this._prevY;
        } else this._prevX = a, this._prevY = d2;
        var c = null, g = null, h = [], k2 = 0;
        if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
          if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
            var t2 = [];
            if (this.chart.axisX) for (var r2 = 0; r2 < this.chart.axisX.length; r2++) {
              for (var k2 = this.chart.axisX[r2].convertPixelToValue({ y: d2 }), m = null, c = 0; c < this.chart.axisX[r2].dataSeries.length; c++) (m = this.chart.axisX[r2].dataSeries[c].getDataPointAtX(k2, b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX[r2].dataSeries[c], null !== m.dataPoint.y && t2.push(m));
              m = null;
            }
            if (this.chart.axisX2) for (r2 = 0; r2 < this.chart.axisX2.length; r2++) {
              k2 = this.chart.axisX2[r2].convertPixelToValue({ y: d2 });
              m = null;
              for (c = 0; c < this.chart.axisX2[r2].dataSeries.length; c++) (m = this.chart.axisX2[r2].dataSeries[c].getDataPointAtX(k2, b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX2[r2].dataSeries[c], null !== m.dataPoint.y && t2.push(m));
              m = null;
            }
          } else {
            t2 = [];
            if (this.chart.axisX) for (r2 = 0; r2 < this.chart.axisX.length; r2++) for (k2 = this.chart.axisX[r2].convertPixelToValue({ x: a }), m = null, c = 0; c < this.chart.axisX[r2].dataSeries.length; c++) (m = this.chart.axisX[r2].dataSeries[c].getDataPointAtX(k2, b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX[r2].dataSeries[c], null !== m.dataPoint.y && t2.push(m));
            if (this.chart.axisX2) for (r2 = 0; r2 < this.chart.axisX2.length; r2++) for (k2 = this.chart.axisX2[r2].convertPixelToValue({ x: a }), m = null, c = 0; c < this.chart.axisX2[r2].dataSeries.length; c++) (m = this.chart.axisX2[r2].dataSeries[c].getDataPointAtX(k2, b)) && 0 <= m.index && (m.dataSeries = this.chart.axisX2[r2].dataSeries[c], null !== m.dataPoint.y && t2.push(m));
          }
          if (0 === t2.length) return;
          t2.sort(function(a2, b2) {
            return a2.distance - b2.distance;
          });
          b = t2[0];
          for (c = 0; c < t2.length; c++) t2[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && h.push(t2[c]);
          t2 = null;
        } else {
          if (m = this.chart.getDataPointAtXY(a, d2, b)) this.currentDataPointIndex = m.dataPointIndex, this.currentSeriesIndex = m.dataSeries.index;
          else if (s) if (m = kb(a, d2, this.chart._eventManager.ghostCtx), 0 < m && "undefined" !== typeof this.chart._eventManager.objectMap[m]) {
            m = this.chart._eventManager.objectMap[m];
            if ("legendItem" === m.objectType) return;
            this.currentSeriesIndex = m.dataSeriesIndex;
            this.currentDataPointIndex = 0 <= m.dataPointIndex ? m.dataPointIndex : -1;
          } else this.currentDataPointIndex = -1;
          else this.currentDataPointIndex = -1;
          if (0 <= this.currentSeriesIndex) {
            g = this.chart.data[this.currentSeriesIndex];
            m = {};
            if (0 <= this.currentDataPointIndex) c = g.dataPoints[this.currentDataPointIndex], m.dataSeries = g, m.dataPoint = c, m.index = this.currentDataPointIndex, m.distance = Math.abs(c.x - k2), "waterfall" === g.type && (m.cumulativeSumYStartValue = g.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, m.cumulativeSum = g.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
            else {
              if (!this.enabled || "line" !== g.type && "stepLine" !== g.type && "spline" !== g.type && "area" !== g.type && "stepArea" !== g.type && "splineArea" !== g.type && "stackedArea" !== g.type && "stackedArea100" !== g.type && "rangeArea" !== g.type && "rangeSplineArea" !== g.type && "candlestick" !== g.type && "ohlc" !== g.type && "boxAndWhisker" !== g.type) return;
              k2 = g.axisX.convertPixelToValue({ x: a });
              m = g.getDataPointAtX(k2, b);
              f(m) || (m.dataSeries = g, this.currentDataPointIndex = m.index, c = m.dataPoint);
            }
            if (!f(m) && !f(m.dataPoint) && !f(m.dataPoint.y)) if (m.dataSeries.axisY) if (0 < m.dataPoint.y.length) {
              for (c = b = 0; c < m.dataPoint.y.length; c++) m.dataPoint.y[c] < m.dataSeries.axisY.viewportMinimum ? b-- : m.dataPoint.y[c] > m.dataSeries.axisY.viewportMaximum && b++;
              b < m.dataPoint.y.length && b > -m.dataPoint.y.length && h.push(m);
            } else "column" === g.type || "bar" === g.type ? 0 > m.dataPoint.y ? 0 > m.dataSeries.axisY.viewportMinimum && m.dataSeries.axisY.viewportMaximum >= m.dataPoint.y && h.push(m) : m.dataSeries.axisY.viewportMinimum <= m.dataPoint.y && 0 <= m.dataSeries.axisY.viewportMaximum && h.push(m) : "bubble" === g.type ? (b = this.chart._eventManager.objectMap[g.dataPointIds[m.index]].size / 2, m.dataPoint.y >= m.dataSeries.axisY.viewportMinimum - b && m.dataPoint.y <= m.dataSeries.axisY.viewportMaximum + b && h.push(m)) : "waterfall" === g.type ? (b = 0, m.cumulativeSumYStartValue < m.dataSeries.axisY.viewportMinimum ? b-- : m.cumulativeSumYStartValue > m.dataSeries.axisY.viewportMaximum && b++, m.cumulativeSum < m.dataSeries.axisY.viewportMinimum ? b-- : m.cumulativeSum > m.dataSeries.axisY.viewportMaximum && b++, 2 > b && -2 < b && h.push(m)) : (0 <= m.dataSeries.type.indexOf("100") || "stackedColumn" === g.type || "stackedBar" === g.type || m.dataPoint.y >= m.dataSeries.axisY.viewportMinimum && m.dataPoint.y <= m.dataSeries.axisY.viewportMaximum) && h.push(m);
            else h.push(m);
          }
        }
        if (0 < h.length) {
          this.highlightObjects(h);
          if (this.enabled) {
            var n = "", n = this.getToolTipInnerHTML({ entries: h });
            if (null !== n) {
              this.contentDiv.innerHTML = n;
              b = false;
              "none" === this.container.style.display && (b = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[g.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : s ? "italic" : "normal";
              } catch (p) {
              }
              "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type || "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
              0 > a && (a += this.container.clientWidth + 20);
              a + this.container.clientWidth > Math.max(
                this.chart.container.clientWidth,
                this.chart.width
              ) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              d2 = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : d2 : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
              d2 = -d2 + 10;
              0 < d2 + this.container.clientHeight + 5 && (d2 -= d2 + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(a, d2);
              !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.positionLeft = a;
              this.positionBottom = d2;
              this.container.style.left = a + "px";
              this.container.style.bottom = d2 + "px";
            } else this.hide(false), this.dispatchEvent(
              "hidden",
              { chart: this.chart, toolTip: this },
              this
            );
          }
          d2 = [];
          for (c = 0; c < h.length; c++) d2.push({ xValue: h[c].dataPoint.x, dataPoint: h[c].dataPoint, dataSeries: h[c].dataSeries, dataPointIndex: h[c].index, dataSeriesIndex: h[c].dataSeries._index });
          n = { chart: this.chart, toolTip: this.options, content: n, entries: d2 };
          this._entries = h;
          this.dispatchEvent("updated", n, this);
        } else this.hide();
      }
    };
    aa.prototype.highlightObjects = function(a) {
      var e = this.chart.overlaidCanvasCtx;
      if (f(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(), e.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
      e.save();
      var b = this.chart.plotArea, c = 0;
      e.beginPath();
      e.rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
      e.clip();
      for (b = 0; b < a.length; b++) {
        var g = a[b];
        if ((g = this.chart._eventManager.objectMap[g.dataSeries.dataPointIds[g.index]]) && g.objectType && "dataPoint" === g.objectType) {
          var c = this.chart.data[g.dataSeriesIndex], h = c.dataPoints[g.dataPointIndex], k2 = g.dataPointIndex;
          false === h.highlightEnabled || true !== c.highlightEnabled && true !== h.highlightEnabled || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (h = c.getMarkerProperties(k2, g.x1, g.y1, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), r.drawMarkers([h]), "undefined" !== typeof g.y2 && (h = c.getMarkerProperties(
            k2,
            g.x1,
            g.y2,
            this.chart.overlaidCanvasCtx
          ), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), r.drawMarkers([h]))) : "bubble" === c.type ? (h = c.getMarkerProperties(k2, g.x1, g.y1, this.chart.overlaidCanvasCtx), h.size = g.size, h.color = "white", h.borderColor = "white", e.globalAlpha = 0.3, r.drawMarkers([h]), e.globalAlpha = 1) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type || "waterfall" === c.type ? fa(e, g.x1, g.y1, g.x2, g.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === c.type || "doughnut" === c.type ? d(e, g.center, g.radius, "white", c.type, g.startAngle, g.endAngle, 0.3, g.percentInnerRadius) : "funnel" === c.type || "pyramid" === c.type ? t(e, g.funnelSection, 0.3, "white") : "candlestick" === c.type ? (e.globalAlpha = 1, e.strokeStyle = g.color, e.lineWidth = 2 * g.borderThickness, c = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(g.x3 - c, Math.min(g.y2, g.y3)), e.lineTo(g.x3 - c, Math.min(g.y1, g.y4)), e.stroke(), e.beginPath(), e.moveTo(g.x3 - c, Math.max(g.y1, g.y4)), e.lineTo(g.x3 - c, Math.max(g.y2, g.y3)), e.stroke(), fa(e, g.x1, Math.min(g.y1, g.y4), g.x2, Math.max(g.y1, g.y4), "transparent", 2 * g.borderThickness, g.color, false, false, false, false), e.globalAlpha = 1) : "ohlc" === c.type ? (e.globalAlpha = 1, e.strokeStyle = g.color, e.lineWidth = 2 * g.borderThickness, c = 0 === e.lineWidth % 2 ? 0 : 0.5, e.beginPath(), e.moveTo(g.x3 - c, g.y2), e.lineTo(g.x3 - c, g.y3), e.stroke(), e.beginPath(), e.moveTo(g.x3, g.y1), e.lineTo(
            g.x1,
            g.y1
          ), e.stroke(), e.beginPath(), e.moveTo(g.x3, g.y4), e.lineTo(g.x2, g.y4), e.stroke(), e.globalAlpha = 1) : "boxAndWhisker" === c.type ? (e.save(), e.globalAlpha = 1, e.strokeStyle = g.stemColor, e.lineWidth = 2 * g.stemThickness, 0 < g.stemThickness && (e.beginPath(), e.moveTo(g.x3, g.y2 + g.borderThickness / 2), e.lineTo(g.x3, g.y1 + g.whiskerThickness / 2), e.stroke(), e.beginPath(), e.moveTo(g.x3, g.y4 - g.whiskerThickness / 2), e.lineTo(g.x3, g.y3 - g.borderThickness / 2), e.stroke()), e.beginPath(), fa(e, g.x1 - g.borderThickness / 2, Math.max(g.y2 + g.borderThickness / 2, g.y3 + g.borderThickness / 2), g.x2 + g.borderThickness / 2, Math.min(g.y2 - g.borderThickness / 2, g.y3 - g.borderThickness / 2), "transparent", g.borderThickness, g.color, false, false, false, false), e.globalAlpha = 1, e.strokeStyle = g.whiskerColor, e.lineWidth = 2 * g.whiskerThickness, 0 < g.whiskerThickness && (e.beginPath(), e.moveTo(Math.floor(g.x3 - g.whiskerLength / 2), g.y4), e.lineTo(Math.ceil(g.x3 + g.whiskerLength / 2), g.y4), e.stroke(), e.beginPath(), e.moveTo(Math.floor(g.x3 - g.whiskerLength / 2), g.y1), e.lineTo(Math.ceil(g.x3 + g.whiskerLength / 2), g.y1), e.stroke()), e.globalAlpha = 1, e.strokeStyle = g.lineColor, e.lineWidth = 2 * g.lineThickness, 0 < g.lineThickness && (e.beginPath(), e.moveTo(g.x1, g.y5), e.lineTo(g.x2, g.y5), e.stroke()), e.restore(), e.globalAlpha = 1) : "error" === c.type && K2(e, g.x1, g.y1, g.x2, g.y2, "white", g.whiskerProperties, g.stemProperties, g.isXYSwapped, 0.3));
        }
      }
      e.restore();
      e.globalAlpha = 1;
      e.beginPath();
    };
    aa.prototype.getToolTipInnerHTML = function(a) {
      a = a.entries;
      for (var d2 = null, b = null, c = null, g = 0, h = "", f2 = true, k2 = 0; k2 < a.length; k2++) if (a[k2].dataSeries.toolTipContent || a[k2].dataPoint.toolTipContent) {
        f2 = false;
        break;
      }
      if (f2 && (this.content && "function" === typeof this.content || this.contentFormatter)) a = { chart: this.chart, toolTip: this.options, entries: a }, d2 = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
      else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
        for (var t2 = null, m = "", k2 = 0; k2 < a.length; k2++) b = a[k2].dataSeries, c = a[k2].dataPoint, g = a[k2].index, h = "", 0 === k2 && (f2 && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? m += "undefined" !== typeof this.chart.axisX[0].labels[c.x] ? this.chart.axisX[0].labels[c.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (m += "undefined" !== typeof this.chart.axisX2[0].labels[c.x] ? this.chart.axisX2[0].labels[c.x] : "{x}"), m += "</br>", m = this.chart.replaceKeywordsWithValue(m, c, b, g)), null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += t2 != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, t2 = b.axisXIndex) : "bubble" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += t2 != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += t2 != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === b.type || "ohlc" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += t2 != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === b.type && (this.chart.axisX && 1 < this.chart.axisX.length && (h += t2 != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === d2 && (d2 = ""), true === this.reversed ? (d2 = this.chart.replaceKeywordsWithValue(h, c, b, g) + d2, k2 < a.length - 1 && (d2 = "</br>" + d2)) : (d2 += this.chart.replaceKeywordsWithValue(h, c, b, g), k2 < a.length - 1 && (d2 += "</br>")));
        null !== d2 && (d2 = m + d2);
      } else {
        b = a[0].dataSeries;
        c = a[0].dataPoint;
        g = a[0].index;
        if (null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent) return null;
        "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? h = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>` + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === b.type ? h = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>` + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type ? h = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>` + (c.name ? "{name}:</span>&nbsp;&nbsp;" : c.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? h = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>` + (c.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === b.type || "ohlc" === b.type ? h = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>` + (c.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === b.type && (h = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span style='"` + (this.options.fontColor ? "" : "'color:{color};'") + `"'>` + (c.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
        null === d2 && (d2 = "");
        d2 += this.chart.replaceKeywordsWithValue(h, c, b, g);
      }
      return d2;
    };
    aa.prototype.enableAnimation = function() {
      if (!this.container.style.WebkitTransition) {
        var a = this.getContainerTransition(this.containerTransitionDuration);
        this.container.style.WebkitTransition = a;
        this.container.style.MsTransition = a;
        this.container.style.transition = a;
        this.container.style.MozTransition = this.mozContainerTransition;
      }
    };
    aa.prototype.disableAnimation = function() {
      this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
    };
    aa.prototype.hide = function(a) {
      this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
    };
    aa.prototype.show = function(a, d2, b) {
      this._updateToolTip(a, d2, "undefined" === typeof b ? false : b);
    };
    aa.prototype.showAtIndex = function(a, d2) {
    };
    aa.prototype.showAtX = function(a, d2) {
      if (!this.enabled) return false;
      this.chart.clearedOverlayedCanvas = null;
      var b, c, g, h = [];
      g = false;
      d2 = !f(d2) && 0 <= d2 && d2 < this.chart.data.length ? d2 : 0;
      if (this.shared) for (var k2 = 0; k2 < this.chart.data.length; k2++) b = this.chart.data[k2], (c = b.getDataPointAtX(a, false)) && (c.dataPoint && !f(c.dataPoint.y) && b.visible) && (c.dataSeries = b, h.push(c));
      else b = this.chart.data[d2], (c = b.getDataPointAtX(a, false)) && (c.dataPoint && !f(c.dataPoint.y) && b.visible) && (c.dataSeries = b, h.push(c));
      if (0 < h.length) {
        for (k2 = 0; k2 < h.length; k2++) if (c = h[k2], c.dataPoint.x < c.dataSeries.axisX.viewportMinimum || c.dataPoint.x > c.dataSeries.axisX.viewportMaximum || c.dataPoint.y < c.dataSeries.axisY.viewportMinimum || c.dataPoint.y > c.dataSeries.axisY.viewportMaximum) g = true;
        else {
          g = false;
          break;
        }
        if (g) return this.hide(), false;
        this.highlightObjects(h);
        this._entries = h;
        c = "";
        c = this.getToolTipInnerHTML({ entries: h });
        if (null !== c) {
          this.contentDiv.innerHTML = c;
          c = false;
          "none" === this.container.style.display && (c = true, this.container.style.display = "block");
          try {
            this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[b.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : s ? "italic" : "normal";
          } catch (t2) {
          }
          "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type ? b = mouseX - 10 - this.container.clientWidth : (b = "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) - this.container.clientWidth << 0 : h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, b -= 10);
          0 > b && (b += this.container.clientWidth + 20);
          b + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (b = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
          h = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
          h = -h + 10;
          0 < h + this.container.clientHeight + 5 && (h -= h + this.container.clientHeight + 5 - 0);
          this.fixMozTransitionDelay(
            b,
            h
          );
          !this.animationEnabled || c ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
          this.container.style.left = b + "px";
          this.container.style.bottom = h + "px";
        } else return this.hide(false), false;
      } else return this.hide(), false;
      return true;
    };
    aa.prototype.fixMozTransitionDelay = function(a, d2) {
      if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
      else {
        var b = parseFloat(this.container.style.left), b = isNaN(b) ? 0 : b, c = parseFloat(this.container.style.bottom), c = isNaN(c) ? 0 : c;
        10 < Math.sqrt(Math.pow(b - a, 2) + Math.pow(c - d2, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
      }
    };
    aa.prototype.getContainerTransition = function(a) {
      return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
    };
    ka2.prototype.reset = function() {
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.previousDataPointEventObject = null;
      this.eventObjects = [];
      s && (this.ghostCtx.clearRect(
        0,
        0,
        this.chart.width,
        this.chart.height
      ), this.ghostCtx.beginPath());
    };
    ka2.prototype.getNewObjectTrackingId = function() {
      return ++this.lastObjectId;
    };
    ka2.prototype.mouseEventHandler = function(a) {
      if ("mousemove" === a.type || "click" === a.type) {
        var d2 = [], b = Ba(a), c = null;
        if ((c = this.chart.getObjectAtXY(b.x, b.y, false)) && "undefined" !== typeof this.objectMap[c]) if (c = this.objectMap[c], "dataPoint" === c.objectType) {
          var g = this.chart.data[c.dataSeriesIndex], h = g.dataPoints[c.dataPointIndex], f2 = c.dataPointIndex;
          c.eventParameter = {
            x: b.x,
            y: b.y,
            dataPoint: h,
            dataSeries: g.options,
            dataPointIndex: f2,
            dataSeriesIndex: g.index,
            chart: this.chart
          };
          c.eventContext = { context: h, userContext: h, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
          d2.push(c);
          c = this.objectMap[g.id];
          c.eventParameter = { x: b.x, y: b.y, dataPoint: h, dataSeries: g.options, dataPointIndex: f2, dataSeriesIndex: g.index, chart: this.chart };
          c.eventContext = { context: g, userContext: g.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
          d2.push(this.objectMap[g.id]);
        } else "legendItem" === c.objectType && (g = this.chart.data[c.dataSeriesIndex], h = null !== c.dataPointIndex ? g.dataPoints[c.dataPointIndex] : null, c.eventParameter = { x: b.x, y: b.y, dataSeries: g.options, dataPoint: h, dataPointIndex: c.dataPointIndex, dataSeriesIndex: c.dataSeriesIndex, chart: this.chart }, c.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, d2.push(c));
        g = [];
        for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
          h = true;
          for (c = 0; c < d2.length; c++) if (d2[c].id === this.mouseoveredObjectMaps[b].id) {
            h = false;
            break;
          }
          h ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : g.push(this.mouseoveredObjectMaps[b]);
        }
        this.mouseoveredObjectMaps = g;
        for (b = 0; b < d2.length; b++) {
          g = false;
          for (c = 0; c < this.mouseoveredObjectMaps.length; c++) if (d2[b].id === this.mouseoveredObjectMaps[c].id) {
            g = true;
            break;
          }
          g || (this.fireEvent(d2[b], "mouseover", a), this.mouseoveredObjectMaps.push(d2[b]));
          "click" === a.type ? this.fireEvent(d2[b], "click", a) : "mousemove" === a.type && this.fireEvent(
            d2[b],
            "mousemove",
            a
          );
        }
      }
    };
    ka2.prototype.fireEvent = function(a, d2, b) {
      if (a && d2) {
        var c = a.eventParameter, g = a.eventContext, h = a.eventContext.userContext;
        h && (g && h[g[d2]]) && h[g[d2]].call(h, c);
        "mouseout" !== d2 ? h.cursor && h.cursor !== b.target.style.cursor && (b.target.style.cursor = h.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
        "click" === d2 && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(
          this.chart.data[a.dataSeriesIndex],
          c
        );
        "click" === d2 && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], c);
      }
    };
    ma2.prototype.animate = function(a, d2, b, c, g) {
      var h = this;
      this.chart.isAnimating = true;
      g = g || w.easing.linear;
      b && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: d2, animationCallback: b, onComplete: c });
      for (a = []; 0 < this.animations.length; ) if (d2 = this.animations.shift(), b = (/* @__PURE__ */ new Date()).getTime(), c = 0, d2.startTime <= b && (c = g(Math.min(
        b - d2.startTime,
        d2.duration
      ), 0, 1, d2.duration), c = Math.min(c, 1), isNaN(c) || !isFinite(c)) && (c = 1), 1 > c && a.push(d2), d2.animationCallback(c), 1 <= c && d2.onComplete) d2.onComplete();
      this.animations = a;
      0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
        h.animate.call(h);
      }) : this.chart.isAnimating = false;
    };
    ma2.prototype.cancelAllAnimations = function() {
      this.animations = [];
      this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
      this.animationRequestId = null;
      this.chart.isAnimating = false;
    };
    var w = { yScaleAnimation: function(a, d2) {
      if (0 !== a) {
        var b = d2.dest, c = d2.source.canvas, g = d2.animationBase;
        b.drawImage(c, 0, 0, c.width, c.height, 0, g - g * a, b.canvas.width / ia, a * b.canvas.height / ia);
      }
    }, xScaleAnimation: function(a, d2) {
      if (0 !== a) {
        var b = d2.dest, c = d2.source.canvas, g = d2.animationBase;
        b.drawImage(c, 0, 0, c.width, c.height, g - g * a, 0, a * b.canvas.width / ia, b.canvas.height / ia);
      }
    }, xClipAnimation: function(a, d2) {
      if (0 !== a) {
        var b = d2.dest, c = d2.source.canvas;
        b.save();
        0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, c.width * a / ia, c.height / ia);
        b.restore();
      }
    }, fadeInAnimation: function(a, d2) {
      if (0 !== a) {
        var b = d2.dest, c = d2.source.canvas;
        b.save();
        b.globalAlpha = a;
        b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / ia, b.canvas.height / ia);
        b.restore();
      }
    }, easing: { linear: function(a, d2, b, c) {
      return b * a / c + d2;
    }, easeOutQuad: function(a, d2, b, c) {
      return -b * (a /= c) * (a - 2) + d2;
    }, easeOutQuart: function(a, d2, b, c) {
      return -b * ((a = a / c - 1) * a * a * a - 1) + d2;
    }, easeInQuad: function(a, d2, b, c) {
      return b * (a /= c) * a + d2;
    }, easeInQuart: function(a, d2, b, c) {
      return b * (a /= c) * a * a * a + d2;
    } } }, r = { drawMarker: function(a, d2, b, c, g, h, f2, k2) {
      if (b) {
        var t2 = 1;
        b.fillStyle = h ? h : "#000000";
        b.strokeStyle = f2 ? f2 : "#000000";
        b.lineWidth = k2 ? k2 : 0;
        b.setLineDash && b.setLineDash(N("solid", k2));
        "circle" === c ? (b.moveTo(a, d2), b.beginPath(), b.arc(a, d2, g / 2, 0, 2 * Math.PI, false), h && b.fill(), k2 && (f2 ? b.stroke() : (t2 = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = t2))) : "square" === c ? (b.beginPath(), b.rect(a - g / 2, d2 - g / 2, g, g), h && b.fill(), k2 && (f2 ? b.stroke() : (t2 = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = t2))) : "triangle" === c ? (b.beginPath(), b.moveTo(a - g / 2, d2 + g / 2), b.lineTo(a + g / 2, d2 + g / 2), b.lineTo(a, d2 - g / 2), b.closePath(), h && b.fill(), k2 && (f2 ? b.stroke() : (t2 = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = t2)), b.beginPath()) : "cross" === c && (b.strokeStyle = h, b.lineWidth = g / 4, b.beginPath(), b.moveTo(a - g / 2, d2 - g / 2), b.lineTo(a + g / 2, d2 + g / 2), b.stroke(), b.moveTo(a + g / 2, d2 - g / 2), b.lineTo(a - g / 2, d2 + g / 2), b.stroke());
      }
    }, drawMarkers: function(a) {
      for (var d2 = 0; d2 < a.length; d2++) {
        var b = a[d2];
        r.drawMarker(
          b.x,
          b.y,
          b.ctx,
          b.type,
          b.size,
          b.color,
          b.borderColor,
          b.borderThickness
        );
      }
    } };
    return u2;
  }();
  Ka.version = "v3.2.18 GA";
  window.CanvasJS && (Ka && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = Ka);
  ma.StockChart = { width: 500, height: 600, backgroundColor: "white", theme: "light1", animationEnabled: false, animationDuration: 1200, culture: "en", creditHref: "", creditText: "CanvasJS", exportEnabled: false, exportFileName: "StockChart", colorSet: "colorSet1", rangeChanging: null, rangeChanged: null, publicProperties: {
    title: "readWrite",
    subtitles: "readWrite",
    navigator: "readWrite",
    rangeSelector: "readWrite",
    charts: "readWrite",
    options: "readWrite",
    bounds: "readOnly",
    container: "readOnly",
    selectedColorSet: "readOnly"
  } };
  ma.Navigator = { enabled: true, width: 500, height: 70, verticalAlign: "bottom", horizontalAlign: "center", dynamicUpdate: true, backgroundColor: "#fff", animationEnabled: false, animationDuration: 1200, theme: "light1", publicProperties: {
    slider: "readWrite",
    backgroundColor: "readWrite",
    animationEnabled: "readWrite",
    animationDuration: "readWrite",
    theme: "readWrite",
    axisX: "readWrite",
    axisY: "readWrite",
    axisX2: "readWrite",
    axisY2: "readWrite",
    data: "readWrite",
    options: "readWrite",
    bounds: "readOnly"
  } };
  ma.RangeSelector = { enabled: true, width: 500, height: 35, label: "Range", verticalAlign: "top", horizontalAlign: "center", selectedRangeButtonIndex: null, publicProperties: { options: "readWrite", buttons: "readWrite", inputFields: "readWrite", buttonStyle: "readWrite", bounds: "readOnly" } };
  ma.RangeButton = {
    range: null,
    rangeType: null,
    label: null,
    style: "position: inline; margin: 5px 0;text-align:center;cursor: pointer;",
    backgroundColorDisabled: "#ddd",
    publicProperties: { options: "readWrite", bounds: "readOnly" }
  };
  ma.ButtonStyle = { backgroundColor: "#fff", backgroundColorOnHover: "#2196f3", backgroundColorOnSelect: "#2196f3", borderColor: "#2196f3", borderThickness: 2, labelFontColor: "#000", labelFontColorOnHover: "#fff", labelFontSize: 14, labelFontStyle: "normal", labelFontFamily: s ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", labelFontWeight: "normal", width: null, maxWidth: null, padding: { left: 5, right: 5, top: 2, bottom: 2 }, spacing: 5, cursor: "pointer", publicProperties: { options: "readWrite" } };
  ma.InputFields = { enabled: true, startValue: null, endValue: null, valueType: "dateTime", valueFormatString: "MMM DD YYYY", publicProperties: { style: "readWrite", options: "readWrite" } };
  ma.Style = { backgroundColor: "#fff", borderColor: "#2196f3", borderColorOnFocus: "#008eff", borderThickness: 2, fontColor: "#000", fontSize: 12, fontStyle: "normal", fontFamily: s ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", fontWeight: "normal", width: null, maxWidth: null, padding: { left: 5, right: 5, top: 2, bottom: 2 }, spacing: 5, cursor: "text", publicProperties: { options: "readWrite" } };
  ma.Slider = { maskColor: "#d9e8f9", maskInverted: false, maskOpacity: 0.7, handleColor: "#ddd", handleBorderColor: "#aaa", handleBorderThickness: 1, handleWidth: 8, handleHeight: 18, minimum: null, maximum: null, outlineThickness: 1, outlineColor: "#666", outlineInverted: false, publicProperties: { options: "readWrite" } };
  ma.CultureInfo.rangeSelector = { fromText: "From", toText: "To", rangeText: "Range" };
  K = "#FFFFFF";
  W = "#333333";
  M = "#000000";
  Ga = { colorSet: "colorSet1", backgroundColor: K, title: Ga.title, subtitles: Ga.subtitles, charts: [Ga], rangeSelector: { buttonStyle: {
    backgroundColor: "#FEFEFE",
    backgroundColorOnHover: "#41a5f5",
    backgroundColorOnSelect: "#2196f3",
    borderColor: "#2196f3",
    borderThickness: 1,
    labelFontColor: M,
    labelFontColorOnHover: "#ffffff",
    labelFontSize: 14,
    labelFontStyle: "normal",
    labelFontFamily: u,
    labelFontWeight: "normal",
    spacing: 0
  }, inputFields: { style: { backgroundColor: "#ffffff", borderColor: "#2196f3", borderColorOnFocus: "#2196f3", borderThickness: 1, fontColor: M, fontSize: 14, fontStyle: "normal", fontFamily: u, fontWeight: "normal" } } }, navigator: { backgroundColor: K, slider: {
    maskColor: "#d9e8f9",
    maskOpacity: 0.6,
    handleColor: "#efefef",
    handleBorderColor: "#666666",
    handleBorderThickness: 1,
    outlineColor: "#666666",
    outlineThickness: 1
  } }, toolbar: Ga.toolbar };
  K = "#FFFFFF";
  W = "#3A3A3A";
  M = "#666666";
  Ja = { colorSet: "colorSet2", backgroundColor: K, title: Ja.title, subtitles: Ja.subtitles, charts: [Ja], rangeSelector: { buttonStyle: {
    backgroundColor: "#FEFEFE",
    backgroundColorOnHover: "#41a5f5",
    backgroundColorOnSelect: "#2196f3",
    borderColor: "#2196f3",
    borderThickness: 1,
    labelFontColor: M,
    labelFontColorOnHover: "#ffffff",
    labelFontSize: 14,
    labelFontStyle: "normal",
    labelFontFamily: u,
    labelFontWeight: "normal",
    spacing: 0
  }, inputFields: { style: { backgroundColor: "#ffffff", borderColor: "#2196f3", borderColorOnFocus: "#2196f3", borderThickness: 1, fontColor: M, fontSize: 14, fontStyle: "normal", fontFamily: u, fontWeight: "normal" } } }, navigator: { backgroundColor: K, slider: { maskColor: "#D9E8F9", maskOpacity: 0.6, handleColor: "#EFEFEF", handleBorderColor: "#BBBBBB", handleBorderThickness: 1, outlineColor: "#BBBBBB", outlineThickness: 1 } }, toolbar: Ja.toolbar };
  K = "#2A2A2A";
  M = W = "#F5F5F5";
  Aa = { colorSet: "colorSet1", backgroundColor: K, title: Aa.title, subtitles: Aa.subtitles, charts: [Aa], rangeSelector: { buttonStyle: { backgroundColor: "#666666", backgroundColorOnHover: "#FF7372", backgroundColorOnSelect: "#FF7372", borderColor: "#FF7372", borderThickness: 1, labelFontColor: M, labelFontColorOnHover: "#F5F5F5", labelFontSize: 14, labelFontStyle: "normal", labelFontFamily: u, labelFontWeight: "normal", spacing: 0 }, inputFields: { style: {
    backgroundColor: "#666666",
    borderColor: "#FF7372",
    borderColorOnFocus: "#FF7372",
    borderThickness: 1,
    fontColor: M,
    fontSize: 14,
    fontStyle: "normal",
    fontFamily: u,
    fontWeight: "normal"
  } } }, navigator: { backgroundColor: K, slider: { maskColor: "#d9e8f9", maskOpacity: 0.6, handleColor: "#efefef", handleBorderColor: "#666666", handleBorderThickness: 1, outlineColor: "#FFFFFF", outlineThickness: 1 } }, toolbar: Aa.toolbar };
  K = "#32373A";
  M = W = "#FAFAFA";
  var cb = { light1: Ga, light2: Ja, dark1: Aa, dark2: { colorSet: "colorSet2", backgroundColor: K, title: X.title, subtitles: X.subtitles, charts: [X], rangeSelector: { buttonStyle: {
    backgroundColor: "#666666",
    backgroundColorOnHover: "#FF7372",
    backgroundColorOnSelect: "#FF7372",
    borderColor: "#FF7372",
    borderThickness: 1,
    labelFontColor: M,
    labelFontColorOnHover: "#F5F5F5",
    labelFontSize: 14,
    labelFontStyle: "normal",
    labelFontFamily: u,
    labelFontWeight: "normal",
    spacing: 0
  }, inputFields: { style: { backgroundColor: "#666666", borderColor: "#FF7372", borderColorOnFocus: "#FF7372", borderThickness: 1, fontColor: M, fontSize: 14, fontStyle: "normal", fontFamily: u, fontWeight: "normal" } } }, navigator: { backgroundColor: K, slider: {
    maskColor: "#d9e8f9",
    maskOpacity: 0.6,
    handleColor: "#efefef",
    handleBorderColor: "#666666",
    handleBorderThickness: 1,
    outlineColor: "#FFFFFF",
    outlineThickness: 1
  } }, toolbar: X.toolbar } };
  W = Sa.StockChart = function() {
    function k(d) {
      var f2;
      f2 = document.createElement("div");
      f2.setAttribute("class", d);
      ra(f2, { position: "absolute", textAlign: "left", cursor: "auto", webkitTapHighlightColor: "transparent" });
      return f2;
    }
    function B(d, k2, w) {
      d = document.createElement(d);
      d.setAttribute("class", k2);
      ra(d, { webkitTapHighlightColor: "transparent" });
      f(w) || d.setAttribute("type", w);
      return d;
    }
    function F2(d, k2) {
      k2 = k2 || {};
      this.theme = f(k2.theme) || f(bb[k2.theme]) ? "light1" : k2.theme;
      this.predefinedThemes = cb;
      F2.base.constructor.call(this, "StockChart", null, k2, null, null);
      this.optionsName = "stockChart";
      var w = this;
      this.sessionVariables = {};
      this._axisXMax = this._axisXMin = null;
      this._containerId = d;
      this._objectsInitialized = false;
      this.ctx = null;
      this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
      this._dataInRenderedOrder = [];
      this.allDOMEventHandlers = [];
      if (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) {
        this.container.innerHTML = "";
        var r = 0, a = 0;
        this._defaultCursor = "default";
        r = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
        a = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
        this.width = r;
        this.height = a;
        this.x1 = this.y1 = 0;
        this.x2 = this.width;
        this.y2 = this.height;
        this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1;
        this._canvasJSContainer = document.createElement("div");
        this._canvasJSContainer.setAttribute("class", "canvasjs-stock-container");
        this._canvasJSContainer.style.position = "relative";
        this._canvasJSContainer.style.userSelect = this._canvasJSContainer.style.WebkitUserSelect = this._canvasJSContainer.style.MozUserSelect = this._canvasJSContainer.style.msUserSelect = "none";
        this._canvasJSContainer.style.textAlign = "left";
        this._canvasJSContainer.style.cursor = "auto";
        this._canvasJSContainer.style.direction = "ltr";
        this._canvasJSContainer.style.fontFamily = u;
        s || (this._canvasJSContainer.style.height = "0px");
        this.container.appendChild(this._canvasJSContainer);
        this.canvas = ta(r, a);
        this.canvas.style.position = "absolute";
        this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ha(this.ctx), this.overlaidCanvas = ta(r, a), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ha(this.overlaidCanvasCtx)), s ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(r, a), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px; z-index: 999;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, this.charts = [], Ea(this.charts), this._eventManager = new I(this), y(this.overlaidCanvas, "click", function(a2) {
          w._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mousemove", function(a2) {
          w._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseup", function(a2) {
          w._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mousedown", function(a2) {
          w._mouseEventHandler(a2);
          za(w._dropdownMenu);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, "mouseout", function(a2) {
          w._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
          w._touchEventHandler(a2);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
          w._touchEventHandler(a2);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a2) {
          w._touchEventHandler(a2);
        }, this.allDOMEventHandlers), y(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
          w._touchEventHandler(a2);
        }, this.allDOMEventHandlers), this.windowResizeHandler = y(window, "resize", function() {
          w._updateSize() && w.render();
        }, this.allDOMEventHandlers));
      } else window.console && window.console.log('CanvasJS Error: StockChart Container with id "' + this._containerId + '" was not found');
    }
    function K2(d, f2) {
      K2.base.constructor.call(this, d, f2);
      this.options = f2;
      this.dockInsidePlotArea = false;
    }
    function M2(d, f2, k2) {
      M2.base.constructor.call(this, d, f2, k2);
      this.options = f2;
      this.dockInsidePlotArea = false;
    }
    function I(d) {
      this.stockChart = d;
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.ghostCanvas = ta(this.stockChart.width, this.stockChart.height);
      this.ghostCtx = this.ghostCanvas.getContext("2d");
      this.mouseoveredObjectMaps = [];
    }
    function A(d, f2) {
      f2 = f2 || {};
      this.optionsName = "navigator";
      A.base.constructor.call(this, "Navigator", "navigator", f2, null, d);
      this.parent = this.stockChart = d;
    }
    function N2(d, t) {
      this.panel = k("canvasjs-slider-panel");
      this.parent = this.navigator = d;
      this.stockChart = d.stockChart;
      this.navigator.panel.appendChild(this.panel);
      N2.base.constructor.call(this, "Slider", "slider", t, null, d);
      this.options = f(t.navigator) || f(t.navigator.slider) ? {} : t.navigator.slider;
      this.optionsName = "slider";
      this.panMode = false;
      this.sessionVariables = {};
    }
    function O2(d, k2) {
      O2.base.constructor.call(
        this,
        "RangeSelector",
        "rangeSelector",
        k2,
        null,
        d
      );
      this.parent = this.stockChart = d;
      this.options = f(k2) || f(k2.rangeSelector) ? {} : k2.rangeSelector;
      this.optionsName = "rangeSelector";
      this.ctx = d.ctx;
      this._label = {};
      this.buttons = [];
    }
    function P(d, k2, w) {
      P.base.constructor.call(this, "RangeButton", "rangeButton", w, k2, d.rangeSelector);
      this.stockChart = d;
      this.parent = this.rangeSelector = d.rangeSelector;
      this.options = f(w) ? {} : w;
      this.optionsName = "rangeButton";
      this.enabled = false;
      this.state = "off";
    }
    function W2(d, k2) {
      W2.base.constructor.call(
        this,
        "InputFields",
        "inputFields",
        k2,
        null,
        d.rangeSelector
      );
      this.stockChart = d;
      this.options = f(k2) || f(k2.inputFields) ? {} : k2.inputFields;
      this.parent = this.rangeSelector = d.rangeSelector;
      this.elements = [];
      this._textBlocks = [];
      this.optionsName = "inputFields";
      this.elements.push(B("input", "canvasjs-input-field", "text"));
      this.elements.push(B("input", "canvasjs-input-field", "text"));
      for (var w = 0; w < this.elements.length; w++) this.stockChart._canvasJSContainer.appendChild(this.elements[w]);
      var r = this, a = null, e = null;
      y(
        this.elements[0],
        "focus",
        function() {
          r.elements[0].focused = true;
          r._textBlocks[0].borderColor = r.style.borderColorOnFocus;
          r._textBlocks[0].render(true);
        },
        this.rangeSelector.stockChart.allDOMEventHandlers
      );
      y(this.elements[0], "focusout", function() {
        r.elements[0].focused = false;
        var a2;
        r.stockChart.charts && r.stockChart.charts.length && (a2 = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
        this.value = "dateTime" === r.valueType ? oa(
          a2 ? a2.viewportMinimum : null,
          "YYYY-MM-DD",
          r.stockChart._cultureInfo
        ) : $(a2 ? a2.viewportMinimum : null, r.valueFormatString, r.stockChart._cultureInfo);
        this.style.display = "none";
        r._textBlocks[0].borderColor = r.style.borderColor;
        r._textBlocks[0].render(true);
      }, this.rangeSelector.stockChart.allDOMEventHandlers);
      y(this.elements[1], "focus", function() {
        r.elements[1].focused = true;
        r._textBlocks[1].borderColor = r.style.borderColorOnFocus;
        r._textBlocks[1].render(true);
      }, this.rangeSelector.stockChart.allDOMEventHandlers);
      y(this.elements[1], "focusout", function() {
        r.elements[1].focused = false;
        var a2;
        r.stockChart.charts && r.stockChart.charts.length && (a2 = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
        this.value = "dateTime" === r.valueType ? oa(a2 ? a2.viewportMaximum : null, "YYYY-MM-DD", r.stockChart._cultureInfo) : $(a2 ? a2.viewportMaximum : null, r.valueFormatString, r.stockChart._cultureInfo);
        this.style.display = "none";
        r._textBlocks[1].borderColor = r.style.borderColor;
        r._textBlocks[1].render(true);
      }, this.rangeSelector.stockChart.allDOMEventHandlers);
      y(this.elements[0], "change", function(b) {
        var c, d2;
        r.stockChart.charts && r.stockChart.charts.length && (r.stockChart.navigator && r.stockChart.navigator.enabled && (d2 = r.stockChart.navigator && r.stockChart.navigator.chart && r.stockChart.navigator.chart.axisX ? r.stockChart.navigator.chart.axisX[0] : r.stockChart.navigator.chart.axisX2[0]), c = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
        b = "dateTime" === r.valueType ? isNaN(new Date(this.value.replace(
          /-/g,
          "/"
        )).getTime()) ? null : new Date(this.value.replace(/-/g, "/")).getTime() : this.value;
        a = f(d2) ? !f(b) && b < (f(c) ? null : c.maximum) ? Math.max(f(c) ? null : c.minimum, b) : f(c) ? null : c.minimum : !f(b) && b < (f(d2) ? null : d2.maximum) ? Math.max(f(d2) ? null : d2.minimum, b) : f(d2) ? null : d2.minimum;
        e = f(c) ? null : c.viewportMaximum;
        r.stockChart._rangeEventParameter = { stockChart: r.stockChart, source: "inputFields", index: null, minimum: a, maximum: e };
        r.stockChart._rangeEventParameter.type = "rangeChanging";
        r.stockChart.dispatchEvent(
          "rangeChanging",
          r.stockChart._rangeEventParameter,
          r.stockChart
        );
        r.stockChart.sessionVariables._axisXMin = a;
        r.stockChart.sessionVariables._axisXMax = e;
        r.stockChart._syncCharts(a, e);
        r.stockChart._rangeEventParameter.type = "rangeChanged";
        r.stockChart.dispatchEvent("rangeChanged", r.stockChart._rangeEventParameter, r.stockChart);
        r.stockChart.rangeSelector && r.stockChart.rangeSelector.resetRangeButtons();
      }, this.rangeSelector.stockChart.allDOMEventHandlers);
      y(this.elements[1], "change", function(b) {
        var c, d2;
        r.stockChart.charts && r.stockChart.charts.length && (r.stockChart.navigator && r.stockChart.navigator.enabled && (d2 = r.stockChart.navigator && r.stockChart.navigator.chart && r.stockChart.navigator.chart.axisX ? r.stockChart.navigator.chart.axisX[0] : r.stockChart.navigator.chart.axisX2[0]), c = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
        b = "dateTime" === r.valueType ? isNaN(new Date(this.value.replace(/-/g, "/")).getTime()) ? null : new Date(this.value.replace(/-/g, "/")).getTime() : this.value;
        a = c ? c.viewportMinimum : null;
        e = f(d2) ? !f(b) && b > (c ? c.minimum : null) ? Math.min(c ? c.maximum : null, b) : c ? c.maximum : null : !f(b) && b > (d2 ? d2.minimum : null) ? Math.min(d2 ? d2.maximum : null, b) : d2 ? d2.maximum : null;
        r.stockChart._rangeEventParameter = { stockChart: r.stockChart, source: "inputFields", index: null, minimum: a, maximum: e };
        r.stockChart._rangeEventParameter.type = "rangeChanging";
        r.stockChart.dispatchEvent("rangeChanging", r.stockChart._rangeEventParameter, r.stockChart);
        r.stockChart.sessionVariables._axisXMin = a;
        r.stockChart.sessionVariables._axisXMax = e;
        r.stockChart._syncCharts(a, e);
        r.stockChart._rangeEventParameter.type = "rangeChanged";
        r.stockChart.dispatchEvent("rangeChanged", r.stockChart._rangeEventParameter, r.stockChart);
        r.stockChart.rangeSelector && r.stockChart.rangeSelector.resetRangeButtons();
      }, this.rangeSelector.stockChart.allDOMEventHandlers);
      y(this.elements[0], "keydown", function(a2) {
        if (13 === a2.keyCode) {
          var c = "dateTime" === r.valueType ? oa(r.startValue, "YYYY-MM-DD") : $(r.startValue, r.valueFormatString);
          this.value != c && ib(this, "change");
          this.blur();
          a2.preventDefault && a2.preventDefault();
        }
      }, this.rangeSelector.stockChart.allDOMEventHandlers);
      y(this.elements[1], "keydown", function(a2) {
        if (13 === a2.keyCode) {
          var c = "dateTime" === r.valueType ? oa(r.endValue, "YYYY-MM-DD") : $(r.endValue, r.valueFormatString);
          this.value != c && ib(this, "change");
          this.blur();
          a2.preventDefault && a2.preventDefault();
        }
      }, this.rangeSelector.stockChart.allDOMEventHandlers);
    }
    function X2(d, k2) {
      X2.base.constructor.call(this, "ButtonStyle", "buttonStyle", k2, null, d.rangeSelector);
      this.stockChart = d;
      this.parent = this.rangeSelector = d.rangeSelector;
      this.options = f(k2) || f(k2.buttonStyle) ? {} : k2.buttonStyle;
      this.optionsName = "buttonStyle";
    }
    function Y2(d, k2) {
      Y2.base.constructor.call(this, "Style", "style", k2, null, d.rangeSelector.inputFields);
      this.stockChart = d;
      this.parent = this.inputFields = d.rangeSelector.inputFields;
      this.options = f(k2) || f(k2.style) ? {} : k2.style;
      this.optionsName = "style";
    }
    var ea2 = true;
    ha(F2, Q);
    F2.prototype._updateOptions = function() {
      this.updateOption("width");
      this.updateOption("height");
      this.updateOption("theme");
      this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1);
      this.updateOption("backgroundColor");
      this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
      this.updateOption("exportEnabled");
      this.updateOption("exportFileName");
      this.updateOption("creditHref");
      this.updateOption("creditHref");
      this.updateOption("culture");
      this._cultureInfo = new Oa(this.options.culture);
      this.updateOption("animationEnabled");
      this.updateOption("animationDuration");
      this.updateOption("rangeChanging");
      this.updateOption("rangeChanged");
      jb(this);
    };
    F2._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bubble scatter stackedColumn stackedColumn100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeArea rangeSplineArea waterfall".split(" "));
    F2.prototype._initialize = function() {
      this.toolbar = new Xa(this, this.options.toolbar);
      this._updateOptions();
      this.animationEnabled = this.animationEnabled && s;
      this._updateSize();
      this.clearCanvas();
      this.ctx.beginPath();
      var d, t = f(this.options.charts) ? [] : this.options.charts;
      Ea(t);
      for (var w = 0; w < this.charts.length; w++) d = this.charts[w], 0 > t.indexOf(d.options) && (this.charts.splice(w, 1), d.destroy(), this._canvasJSContainer.removeChild(d.panel), w--);
      this.layoutManager = new La(0, 0, this.width, this.height, 2);
      this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
      this.title = null;
      this.subtitles = [];
      this.options.title && (this.title = new K2(this, this.options.title), this.title.setLayout());
      if (this.options.subtitles) for (w = 0; w < this.options.subtitles.length; w++) d = new M2(this, this.options.subtitles[w], w), this.subtitles.push(d), d.setLayout();
      this.navigator = this.navigator || new A(this, this.options.navigator);
      this.navigator._initialize();
      if (this.navigator.enabled) {
        d = { theme: this.options.navigator && this.options.navigator.theme ? this.options.navigator.theme : this.theme, animationEnabled: this.options.navigator && !f(this.options.navigator.animationEnabled) ? this.options.navigator.animationEnabled : this.animationEnabled, animationDuration: this.options.navigator && this.options.navigator.animationDuration ? this.options.navigator.animationDuration : this.animationDuration, culture: this.options.navigator && this.options.navigator.culture ? this.options.navigator.culture : this.culture, zoomEnabled: false, data: this.options.navigator && this.options.navigator.data ? this.options.navigator.data : this.options.charts && this.options.charts[0] && this.options.charts[0].data ? $a(this.options.charts[0].data) : [], axisX: this.options.navigator && this.options.navigator.axisX ? this.options.navigator.axisX : {}, axisY: this.options.navigator && this.options.navigator.axisY ? this.options.navigator.axisY : {}, axisX2: this.options.navigator && this.options.navigator.axisX2 ? this.options.navigator.axisX2 : {}, axisY2: this.options.navigator && this.options.navigator.axisY2 ? this.options.navigator.axisY2 : {}, interactivityEnabled: false, exportEnabled: false };
        for (w = 0; w < d.data.length; w++) !f(this.navigator.options.data) || !f(d.data[w].type) && (f(d.data[w].type) || 0 <= d.data[w].type.indexOf("range") || 0 <= d.data[w].type.indexOf("ohlc") || 0 <= d.data[w].type.indexOf("candlestick") || 0 <= d.data[w].type.indexOf("error")) ? this.navigator.options.data && f(this.navigator.options.data[w].type) && (d.data[w].type = "splineArea") : d.data[w].type = "splineArea";
        if (d.axisX.length) for (w = 0; w < d.axisX.length; w++) d.axisX[w].titleFontSize = f(d.axisX[w].titleFontSize) ? 1 : d.axisX[w].titleFontSize, d.axisX[w].labelFontSize = f(d.axisX[w].labelFontSize) ? 12 : d.axisX[w].labelFontSize, d.axisX[w].labelAngle = f(d.axisX[w].labelAngle) ? 0 : d.axisX[w].labelAngle, d.axisX[w].labelPlacement = f(d.axisX[w].labelPlacement) ? "inside" : d.axisX[w].labelPlacement, d.axisX[w].tickLength = f(d.axisX[w].tickLength) ? 0 : d.axisX[w].tickLength, d.axisX[w].lineThickness = f(d.axisX[w].lineThickness) ? 0 : d.axisX[w].lineThickness, d.axisX[w].tickThickness = f(d.axisX[w].tickThickness) ? 0 : d.axisX[w].tickThickness, d.axisX[w].gridThickness = f(d.axisX[w].gridThickness) ? 1 : d.axisX[w].gridThickness;
        else d.axisX.titleFontSize = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.titleFontSize) ? this.options.navigator.axisX.titleFontSize : s ? 0 : 1, d.axisX.labelFontSize = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.labelFontSize) ? this.options.navigator.axisX.labelFontSize : 12, d.axisX.labelAngle = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.labelAngle) ? this.options.navigator.axisX.labelAngle : 0, d.axisX.labelPlacement = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.labelPlacement) ? this.options.navigator.axisX.labelPlacement : "inside", d.axisX.tickLength = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.tickLength) ? this.options.navigator.axisX.tickLength : 0, d.axisX.lineThickness = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.lineThickness) ? this.options.navigator.axisX.lineThickness : 0, d.axisX.tickThickness = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.tickThickness) ? this.options.navigator.axisX.tickThickness : 0, d.axisX.gridThickness = this.options.navigator && this.options.navigator.axisX && !f(this.options.navigator.axisX.gridThickness) ? this.options.navigator.axisX.gridThickness : 1;
        if (d.axisY.length) for (w = 0; w < d.axisY.length; w++) d.axisY[w].titleFontSize = d.axisY[w].titleFontSize ? d.axisY[w].titleFontSize : s ? 0 : 1, d.axisY[w].labelFontSize = d.axisY[w].labelFontSize ? d.axisY[w].labelFontSize : s ? 0 : 1, d.axisY[w].labelPlacement = d.axisY[w].labelPlacement ? d.axisY[w].labelPlacement : "inside", d.axisY[w].includeZero = false, d.axisY[w].lineThickness = 0, d.axisY[w].tickThickness = 0, d.axisY[w].tickLength = 0, d.axisY[w].gridThickness = 0;
        else d.axisY.titleFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.titleFontSize ? this.options.navigator.axisY.titleFontSize : s ? 0 : 1, d.axisY.labelFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelFontSize ? this.options.navigator.axisY.labelFontSize : s ? 0 : 1, d.axisY.labelPlacement = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelPlacement ? this.options.navigator.axisY.labelPlacement : "inside", d.axisY.includeZero = false, d.axisY.lineThickness = 0, d.axisY.tickThickness = 0, d.axisY.tickLength = 0, d.axisY.gridThickness = 0;
        if (d.axisX2.length) for (w = 0; w < d.axisX2.length; w++) d.axisX2[w].titleFontSize = d.axisX2[w].titleFontSize ? d.axisX2[w].titleFontSize : s ? 0 : 1, d.axisX2[w].labelFontSize = d.axisX2[w].labelFontSize ? d.axisX2[w].labelFontSize : 12, d.axisX2[w].labelAngle = f(d.axisX2[w].labelAngle) ? 0 : d.axisX2[w].labelAngle, d.axisX2[w].labelPlacement = d.axisX2[w].labelPlacement ? d.axisX2[w].labelPlacement : "inside", d.axisX2[w].tickLength = f(d.axisX2[w].tickLength) ? 0 : d.axisX2[w].tickLength, d.axisX2[w].lineThickness = d.axisX2[w].lineThickness ? d.axisX2[w].lineThickness : 0, d.axisX2[w].tickThickness = d.axisX2[w].tickThickness ? d.axisX2[w].tickThickness : 1, d.axisX2[w].gridThickness = f(d.axisX2[w].gridThickness) ? 1 : d.axisX2[w].gridThickness;
        else d.axisX2.titleFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.titleFontSize ? this.options.navigator.axisX2.titleFontSize : s ? 0 : 1, d.axisX2.labelFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelFontSize ? this.options.navigator.axisX2.labelFontSize : 12, d.axisX2.labelAngle = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelAngle ? this.options.navigator.axisX2.labelAngle : 0, d.axisX2.labelPlacement = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelPlacement ? this.options.navigator.axisX2.labelPlacement : "inside", d.axisX2.tickLength = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickLength ? this.options.navigator.axisX2.tickLength : 0, d.axisX2.lineThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.lineThickness ? this.options.navigator.axisX2.lineThickness : 0, d.axisX2.tickThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickThickness ? this.options.navigator.axisX2.tickThickness : 1, d.axisX2.gridThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.gridThickness ? this.options.navigator.axisX2.gridThickness : 1;
        if (d.axisY2.length) for (w = 0; w < d.axisY2.length; w++) d.axisY2[w].titleFontSize = d.axisY2[w].titleFontSize ? d.axisY2[w].titleFontSize : s ? 0 : 1, d.axisY2[w].labelFontSize = d.axisY2[w].labelFontSize ? d.axisY2[w].labelFontSize : s ? 0 : 1, d.axisY2[w].labelPlacement = d.axisY2[w].labelPlacement ? d.axisY2[w].labelPlacement : "inside", d.axisY2[w].includeZero = false, d.axisY2[w].lineThickness = 0, d.axisY2[w].margin = 0, d.axisY2[w].tickLength = 0, d.axisY2[w].tickThickness = 0, d.axisY2[w].gridThickness = 0;
        else d.axisY2.titleFontSize = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.titleFontSize ? this.options.navigator.axisY2.titleFontSize : s ? 0 : 1, d.axisY2.labelFontSize = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.labelFontSize ? this.options.navigator.axisY2.labelFontSize : s ? 0 : 1, d.axisY2.labelPlacement = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.labelPlacement ? this.options.navigator.axisY2.labelPlacement : "inside", d.axisY2.includeZero = false, d.axisY2.lineThickness = 0, d.axisY2.margin = 0, d.axisY2.tickLength = 0, d.axisY2.tickThickness = 0, d.axisY2.gridThickness = 0;
        d.backgroundColor = this.navigator.backgroundColor;
        for (w = 0; w < d.data.length; w++) d.data[w].markerSize = d.data[w].markerSize ? d.data[w].markerSize : 0;
        if (!this.navigator.chart) {
          var r = k("canvasjs-chart-panel");
          this.navigator.panel.appendChild(r);
          r.style.height = this.navigator.height + "px";
          r.style.width = this.navigator.width + "px";
        }
        this.navigator.chart && (this.navigator.chart.panel.style.width = this.navigator.width + "px");
        this.navigator.chart = this.navigator.chart || new Ka(r, d, { parent: this.navigator, isOptionsInArray: false, index: null, predefinedThemes: cb, optionsName: "navigator", stockChart: this });
        this.navigator.chart._initialize();
        this.navigator.chart.setLayout();
        this.navigator.chart.selectedColorSet = this.selectedColorSet;
        this.navigator._chartOptions = d;
        this.navigator.slider = this.navigator.slider || new N2(this.navigator, this.options);
        this.navigator.slider._initialize();
      }
      this.rangeSelector = this.rangeSelector || new O2(this, this.options);
      this.rangeSelector.buttonStyle = this.rangeSelector.buttonStyle || new X2(this, this.rangeSelector.options);
      this.rangeSelector.inputFields = this.rangeSelector.inputFields || new W2(this, this.rangeSelector.options);
      this.rangeSelector.inputFields.style = new Y2(this, this.rangeSelector.inputFields.options);
      this.rangeSelector.inputFields.style._updateOptions();
      this.rangeSelector.inputFields._initialize();
      if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) for (this.rangeSelector.inputFields._textBlocks = [], this.rangeSelector.inputFields._labels = [], this.rangeSelector.inputFieldsWidth = 0, r = this.rangeSelector.inputFields.style.maxWidth = this.rangeSelector.inputFields.style.options.maxWidth ? this.rangeSelector.inputFields.style.options.maxWidth : this.rangeSelector.stockChart.width / 2, w = 0; w < this.rangeSelector.inputFields.elements.length; w++) {
        d = new na(this.rangeSelector.ctx, {
          x: 0,
          y: 0,
          backgroundColor: this.rangeSelector.inputFields.style.backgroundColor,
          borderColor: this.rangeSelector.inputFields.style.borderColor,
          borderThickness: this.rangeSelector.inputFields.style.borderThickness,
          cornerRadius: 0,
          maxWidth: f(this.rangeSelector.inputFields.style.options.width) ? r : this.rangeSelector.inputFields.style.width,
          maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
          angle: 0,
          padding: this.rangeSelector.inputFields.style.padding,
          text: this.rangeSelector.inputFields.valueFormatString,
          horizontalAlign: "center",
          textAlign: "center",
          fontSize: this.rangeSelector.inputFields.style.fontSize,
          fontFamily: this.rangeSelector.inputFields.style.fontFamily,
          fontWeight: this.rangeSelector.inputFields.style.fontWeight,
          fontColor: this.rangeSelector.inputFields.style.fontColor,
          fontStyle: this.rangeSelector.inputFields.style.fontStyle,
          textBaseline: "middle"
        });
        var t = d.measureText(), a = new na(this.rangeSelector.ctx, {
          x: 0,
          y: 0,
          backgroundColor: s ? "transparent" : null,
          borderColor: this.rangeSelector.inputFields.style.borderColor,
          borderThickness: 0,
          cornerRadius: 0,
          maxWidth: this.rangeSelector.inputFields.style.maxWidth,
          maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
          angle: 0,
          padding: this.rangeSelector.inputFields.style.padding,
          text: "From",
          horizontalAlign: "left",
          fontSize: this.rangeSelector.inputFields.style.fontSize,
          fontFamily: this.rangeSelector.inputFields.style.fontFamily,
          fontWeight: this.rangeSelector.inputFields.style.fontWeight,
          fontColor: this.rangeSelector.inputFields.style.fontColor,
          fontStyle: this.rangeSelector.inputFields.style.fontStyle,
          textBaseline: "middle"
        });
        this.rangeSelector.inputFields._textBlocks.push(d);
        this.rangeSelector.inputFields._labels.push(a);
        this.rangeSelector.inputFields._textBlocks[w].bounds = { x1: null, x2: null, y1: null, y2: null, width: null, height: null };
        this.rangeSelector.inputFields._labels[w].bounds = { x1: null, x2: null, y1: null, y2: null, width: null, height: null };
        this.rangeSelector.inputFieldsWidth += t.width + this.rangeSelector.inputFields.style.spacing + a.measureText().width;
        this.rangeSelector.inputFieldsHeight = this.rangeSelector.inputFieldsHeight < t.height ? t.height : this.rangeSelector.inputFieldsHeight;
        d = this.rangeSelector.inputFields._textBlocks[w];
        d.id = ++this.rangeSelector.stockChart._eventManager.lastObjectId;
        this.rangeSelector.stockChart._eventManager.objectMap[d.id] = { id: d.id, objectType: "inputFields", inputFieldIndex: w };
      }
      this.rangeSelector.buttonStyle._updateOptions();
      this.rangeSelector._initialize();
      this._objectsInitialized = true;
    };
    F2.prototype.render = function(d) {
      var t = this;
      d && (this.options = d);
      this._initialize();
      this.title && this.title.render();
      if (this.subtitles) for (d = 0; d < this.subtitles.length; d++) this.subtitles[d].render();
      var w;
      if (this.options.charts) {
        w = Array(this.options.charts.length);
        var r = this.layoutManager.getFreeSpace(), a = r.height, r = r.height, e = this.options.charts.length;
        for (d = 0; d < this.options.charts.length; d++) f(this.options.charts[d].height) || (w[d] = 0 <= this.options.charts[d].height.toString().indexOf("%") ? Wa(this.options.charts[d].height, a, Math.floor(r / e), this.height, 0) : this.options.charts[d].height, r -= w[d], e--);
        r = Math.floor(r / e);
        for (d = 0; d < this.options.charts.length; d++) f(w[d]) && (w[d] = r);
        var b, e = this.options.charts, c = this.charts;
        this.charts = [];
        for (d = 0; d < e.length; d++) {
          r = this.layoutManager.getFreeSpace();
          a = e[d];
          a.theme = e[d].theme ? e[d].theme : this.options.theme ? this.options.theme : this.theme;
          a.animationEnabled = f(e[d].animationEnabled) ? this.animationEnabled : e[d].animationEnabled;
          a.animationDuration = e[d].animationDuration ? e[d].animationDuration : this.animationDuration;
          a.culture = e[d].culture ? e[d].culture : this.culture;
          a.height = e[d].height ? w[d] : null;
          f(e.backgroundColor) ? f(this.options.backgroundColor) || (a.backgroundColor = this.backgroundColor) : a.backgroundColor = this.options.charts[d].backgroundColor;
          for (b = c.length; 0 < b-- && c[b].options !== a; ) ;
          0 <= b ? (this.charts[d] = c[b], this.charts[d].options = a) : (b = k("canvasjs-chart-panel"), b.style.height = w[d] + "px", this._canvasJSContainer.appendChild(b), this.charts[d] = new Ka(b, a, { parent: this, isOptionsInArray: true, index: d, predefinedThemes: cb, optionsName: "charts", stockChart: this }));
          this.charts[d].panel.style.width = r.width + "px";
          this.charts[d].panel.style.top = r.y1 + "px";
          this.charts[d].panel.style.left = r.x1 + "px";
          this.charts[d].panel.style.height = w[d] + "px";
          this.charts[d].height = a.height ? a.height : w[d];
          this.layoutManager.registerSpace("top", { width: r.width, height: w[d] });
        }
        c = null;
        for (d = 0; d < this.charts.length; d++) if (!f(this.options.charts[d].data)) for (b = 0; b < this.options.charts[d].data.length; b++) w = this.options.charts[d].data[b], 0 <= F2._supportedChartTypes.indexOf(w.type) || f(w.type) || (ea2 = false, window.console && window.console.log("CanvasJS Error: " + w.type + " Chart is not Supported in StockChart"));
        if (!ea2) return;
        this.setChartsLayout();
        for (d = w = 0; d < this.charts.length; d++) if (f(this.charts[d].options.colorSet)) {
          this.charts[d].selectedColorSet = [];
          for (b = w; b < w + this.charts[d].data.length; b++) this.charts[d].selectedColorSet.push(this.selectedColorSet[b % this.selectedColorSet.length]);
          w += this.charts[d].data.length;
        }
        if (this.navigator && this.navigator.enabled) if (this.navigator.options.data) {
          this.navigator.chart.selectedColorSet = [];
          for (b = w; b < w + this.navigator.chart.data.length; b++) this.navigator.chart.selectedColorSet.push(this.selectedColorSet[b % this.selectedColorSet.length]);
          w += this.navigator.chart.data.length;
        } else this.navigator.chart.selectedColorSet = this.charts[0].selectedColorSet;
      }
      if (this.navigator && this.navigator.enabled) {
        for (d = 0; d < this.navigator.chart.data.length; d++) 0 <= F2._supportedChartTypes.indexOf(this.navigator.chart.data[d].type) || (ea2 = false, window.console && window.console.log("CanvasJS Error: " + this.navigator.chart.data[d].type + " Chart is not Supported in Navigator"));
        if (ea2) {
          var g = this.navigator.chart.axisX && this.navigator.chart.axisX.length ? this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0];
          g.bounds.x1 > this._chartsPlotAreaX1 && (this._chartsPlotAreaX1 = g.bounds.x1);
          this.navigator.width = this.navigator.chart.width = this.navigator.slider.fullWidth = this.navigator.options.width ? this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + g.bounds.x1;
          this.navigator.panel.style.left = this._chartsPlotAreaX1 + this.layoutManager.getFreeSpace().x1 - g.bounds.x1 + "px";
          this.navigator.panel.style.width = this.navigator.chart.panel.style.width = this.navigator.options.width ? this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + g.bounds.x1 + "px";
          this.navigator.chart.render(this.navigator._chartOptions);
          this.navigator.backgroundColor = this.navigator.chart.backgroundColor;
          this.navigator.animationEnabled = this.navigator.chart.animationEnabled;
          this.navigator.animationDuration = this.navigator.chart.animationDuration;
          this.navigator.theme = this.navigator.chart.theme;
          this.navigator.axisX = this.navigator.chart.axisX;
          this.navigator.axisX2 = this.navigator.chart.axisX2;
          this.navigator.axisY = this.navigator.chart.axisY;
          this.navigator.axisY2 = this.navigator.chart.axisY2;
          this.navigator.data = this.navigator.chart.data;
        }
      }
      r = w = null;
      b = 0;
      e = a = null;
      for (d = 0; d < this.charts.length; d++) for (c = this.charts[d].axisX && this.charts[d].axisX.length ? this.charts[d].axisX : this.charts[d].axisX2, w = w || (c && 0 < c.length ? c[0].minimum : null), r = r || (c && 0 < c.length ? c[0].maximum : null), b = 0; b < c.length; b++) g = c[b], g.minimum < w && (w = g.minimum), g.maximum > r && (r = g.maximum);
      var h;
      this.navigator && (this.navigator.chart && ea2) && (h = this.navigator.chart.axisX && 0 < this.navigator.chart.axisX.length ? this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0], this._axisXMin = this.navigator.slider.minimum = f(this.navigator.options.slider) || f(this.navigator.options.slider.minimum) ? null : Math.max(h.minimum, this.navigator.slider.minimum), this._axisXMax = this.navigator.slider.maximum = f(this.navigator.options.slider) || f(this.navigator.options.slider.maximum) ? null : Math.min(h.maximum, this.navigator.slider.maximum));
      if (this.rangeSelector && this.rangeSelector.enabled) {
        b = h ? h.maximum - h.minimum : r - w;
        this.charts && this.charts.length && (g = this.charts[0].axisX && this.charts[0].axisX.length ? this.charts[0].axisX[0] : this.charts[0].axisX2[0]);
        for (d = 0; d < this.rangeSelector.buttons.length; d++) {
          var u2 = null, c = this.rangeSelector.buttons[d];
          "year" === c.rangeType ? u2 = 31104e6 * c.range : "ytd" === c.rangeType ? u2 = "ytd" : "month" === c.rangeType ? u2 = 2592e6 * c.range : "week" === c.rangeType ? u2 = 6048e5 * c.range : "day" === c.rangeType ? u2 = 864e5 * c.range : "hour" === c.rangeType ? u2 = 36e5 * c.range : "minute" === c.rangeType ? u2 = 6e4 * c.range : "second" === c.rangeType ? u2 = 1e3 * c.range : "millisecond" === c.rangeType ? u2 = c.range : "all" === c.rangeType ? u2 = null : "number" === c.rangeType && (u2 = c.range);
          if ("ytd" === c.rangeType || u2 < b) c.enabled = true;
          c.enabled ? (c.cursor = this.rangeSelector.buttonStyle.cursor, "on" === c.state && ((f(this._axisXMin) && f(this._axisXMax) && (c.textBlock.fontWeight = "bold", c.textBlock.fontColor = this.rangeSelector.buttonStyle.labelFontColorOnHover, c.textBlock.backgroundColor = this.rangeSelector.buttonStyle.backgroundColorOnSelect), "ytd" === c.rangeType && g) ? (a = new Date(g.viewportMaximum), a.setDate(1), a.setMonth(0), a = a.getTime()) : f(u2) ? h ? (a = h.minimum, e = h.maximum) : g && (a = g.minimum, e = g.maximum) : g.viewportMaximum - u2 < (h ? h.minimum : g.minimum) ? (e = h.minimum - (g.viewportMaximum - u2), a = h.minimum, e = Math.min(h.maximum, g.viewportMaximum + e)) : (a = g.viewportMaximum - u2, e = g.viewportMaximum)), f(this._axisXMin) && f(this._axisXMax) || (c.state = "off"), this._axisXMin = f(this._axisXMin) ? a : this._axisXMin, this._axisXMax = f(this._axisXMax) ? e : this._axisXMax) : c.cursor = "not-allowed";
          c.mousemove = function(a2) {
            this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a2.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a2.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, this.textBlock.render(true));
          };
          c.mouseover = function(a2) {
            this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a2.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a2.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, this.textBlock.render(true));
          };
          c.mouseout = function(a2) {
            this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a2.stockChart.rangeSelector.buttonStyle.backgroundColor, this.textBlock.fontColor = a2.stockChart.rangeSelector.buttonStyle.labelFontColor, this.textBlock.render(true));
          };
          c.click = function(a2) {
            if (this.enabled) {
              for (var b2 = 0, c2 = null, d2 = null, e2 = 0; e2 < t.rangeSelector.buttons.length; e2++) t.rangeSelector.buttons[e2] != this && (t.rangeSelector.buttons[e2].state = "off"), t.rangeSelector.buttons[e2].textBlock.fontWeight = t.rangeSelector.buttonStyle.labelFontWeight, t.rangeSelector.buttons[e2].textBlock.fontColor = a2.stockChart.rangeSelector.buttonStyle.labelFontColor, t.rangeSelector.buttons[e2].textBlock.backgroundColor = a2.stockChart.rangeSelector.buttonStyle.backgroundColor, t.rangeSelector.buttons[e2].textBlock.render(true);
              var g2;
              t.charts && t.charts.length && (g2 = t.charts[0].axisX && t.charts[0].axisX.length ? t.charts[0].axisX[0] : t.charts[0].axisX2[0]);
              var h2;
              t.navigator && t.navigator.chart && (h2 = t.navigator.chart.axisX ? t.navigator.chart.axisX[0] : t.navigator.chart.axisX2[0]);
              "year" === this.rangeType ? b2 = 31104e6 * this.range : "month" === this.rangeType ? b2 = 2592e6 * this.range : "week" === this.rangeType ? b2 = 6048e5 * this.range : "day" === this.rangeType ? b2 = 864e5 * this.range : "hour" === this.rangeType ? b2 = 36e5 * this.range : "minute" === this.rangeType ? b2 = 6e4 * this.range : "second" === this.rangeType ? b2 = 1e3 * this.range : "millisecond" === this.rangeType ? b2 = this.range : "all" === this.rangeType ? b2 = null : "number" === this.rangeType && (b2 = this.range);
              "ytd" === this.rangeType && g2 ? (c2 = new Date(g2.viewportMaximum), c2.setDate(1), c2.setMonth(0), b2 = c2.getTime(), c2 = Math.max(b2, h2 ? h2.minimum : g2.minimum), d2 = g2.viewportMaximum) : f(b2) ? h2 ? (c2 = h2.minimum, d2 = h2.maximum) : g2 && (c2 = g2.minimum, d2 = g2.maximum) : h2 && g2.viewportMaximum - b2 < (h2 ? h2.minimum : g2.minimum) ? (h2 = t.navigator.chart.axisX[0].minimum - (g2.viewportMaximum - b2), c2 = t.navigator.chart.axisX[0].minimum, d2 = Math.min(t.navigator.chart.axisX[0].maximum, g2.viewportMaximum + h2)) : (c2 = g2.viewportMaximum - b2, d2 = g2.viewportMaximum);
              t._rangeEventParameter = { stockChart: t, source: "buttons", index: this._index, minimum: c2, maximum: d2 };
              "on" != this.state && (t._rangeEventParameter.type = "rangeChanging", t.dispatchEvent("rangeChanging", t._rangeEventParameter, t), t._syncCharts(c2, d2), t.sessionVariables._axisXMin = c2, t.sessionVariables._axisXMax = d2, t._rangeEventParameter.type = "rangeChanged", t.dispatchEvent("rangeChanged", t._rangeEventParameter, t), this.state = "on");
              this.textBlock.fontWeight = "bold";
              this.textBlock.fontColor = a2.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover;
              this.textBlock.backgroundColor = a2.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect;
              this.textBlock.render(true);
            }
          };
        }
        if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) {
          this.rangeSelector.inputFields.valueType = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueType ? this.options.rangeSelector.inputFields.valueType : this.isDateTime ? "dateTime" : "number";
          for (d = 0; d < this.rangeSelector.inputFields._textBlocks.length; d++) g = this.rangeSelector.inputFields._textBlocks[d], g.mousemove = function(a2) {
            a2.inputField.cursor = a2.stockChart.rangeSelector.inputFields.style.cursor;
          }, g.mouseover = function(a2) {
            a2.inputField.cursor = a2.stockChart.rangeSelector.inputFields.style.cursor;
          }, g.mouseout = function(a2) {
            a2.inputField.cursor = "auto";
          }, g.click = function(a2) {
            a2.stockChart.rangeSelector.inputFields.elements[a2.inputFieldIndex].style.display = "inline";
            a2.stockChart.rangeSelector.inputFields.elements[a2.inputFieldIndex].focus();
          };
          if (isFinite(w) && isFinite(r)) {
            "dateTime" === this.rangeSelector.inputFields.valueType ? (this.rangeSelector.inputFields.valueFormatString = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString : "MMM DD YYYY", this.rangeSelector.inputFields.startValue = f(this.rangeSelector.inputFields.options.startValue) ? f(a) ? w : a : oa(this.rangeSelector.inputFields.options.startValue, this.rangeSelector.inputFields.valueFormatString), this.rangeSelector.inputFields.endValue = f(this.rangeSelector.inputFields.options.endValue) ? f(e) ? r : e : oa(this.rangeSelector.inputFields.options.endValue, this.rangeSelector.inputFields.valueFormatString)) : (this.rangeSelector.inputFields.valueFormatString = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString : "#,##0.##", this.rangeSelector.inputFields.startValue = f(this.rangeSelector.inputFields.options.startValue) ? f(a) ? w : a : this.rangeSelector.inputFields.options.startValue, this.rangeSelector.inputFields.endValue = f(this.rangeSelector.inputFields.options.endValue) ? f(e) ? r : e : this.rangeSelector.inputFields.options.endValue);
            if (!(f(this._axisXMin) && f(this._axisXMax) && f(this.rangeSelector.inputFields.options.startValue) && f(this.rangeSelector.inputFields.options.endValue))) for (b = 0; b < this.rangeSelector.buttons.length; b++) c = this.rangeSelector.buttons[b];
            d = oa(this.rangeSelector.inputFields.startValue, "YYYY-MM-DD'T'HH:mm:ssZ");
            g = oa(this.rangeSelector.inputFields.endValue, "YYYY-MM-DD'T'HH:mm:ssZ");
            s || (d = d.replace(/-/g, "/"), g = g.replace(/-/g, "/"), d = d.replace("T", " "), g = g.replace("T", " "), d = d.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"), g = g.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"));
            this._axisXMin = f(this._axisXMin) ? "dateTime" === this.rangeSelector.inputFields.valueType ? new Date(d).getTime() : this.rangeSelector.inputFields.startValue : this._axisXMin;
            this._axisXMax = f(this._axisXMax) ? "dateTime" === this.rangeSelector.inputFields.valueType ? new Date(g).getTime() : this.rangeSelector.inputFields.endValue : this._axisXMax;
          }
          for (d = 0; d < this.rangeSelector.inputFields.elements.length; d++) this.rangeSelector.inputFields.elements[d].title = "dateTime" === this.rangeSelector.inputFields.valueType ? "YYYY-MM-DD" : this.rangeSelector.inputFields.valueFormatString;
        }
        this.rangeSelector.render();
      }
      f(this._axisXMin) && (this._axisXMin = w);
      f(this._axisXMax) && (this._axisXMax = r);
      this._axisXMin = !f(this.sessionVariables._axisXMin) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("minimum") ? this.sessionVariables._axisXMin : this._axisXMin;
      this._axisXMax = !f(this.sessionVariables._axisXMax) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("maximum") ? this.sessionVariables._axisXMax : this._axisXMax;
      if (!f(h)) {
        this.navigator.slider.hasOptionChanged("minimum") && (this._axisXMin = this.sessionVariables._axisXMin = this.navigator.slider.sessionVariables.minimum = this.navigator.slider.minimum = this.navigator.slider.options.minimum);
        this.navigator.slider.hasOptionChanged("maximum") && (this._axisXMax = this.sessionVariables._axisXMax = this.navigator.slider.sessionVariables.maximum = this.navigator.slider.maximum = this.navigator.slider.options.maximum);
        if (this._axisXMin < h.minimum || this._axisXMin > h.maximum) this._axisXMin = h.minimum;
        if (this._axisXMax < h.minimum || this._axisXMax > h.maximum) this._axisXMax = h.maximum;
      }
      !f(h) && h.reversed ? this._syncCharts(this._axisXMax, this._axisXMin) : this._syncCharts(this._axisXMin, this._axisXMax);
    };
    F2.prototype.setChartsLayout = function() {
      var d, f2, k2 = 0, r = this.width;
      this.isPlotAreaSet = this.isDateTime = false;
      for (var a = 0; a < this.charts.length; a++) {
        d = this.charts[a];
        d._initialize();
        d.setLayout();
        f2 = {};
        if ((d.axisX[0] || d.axisX2[0]) && (d.axisY[0] || d.axisY2[0])) {
          var e = d.axisX[0] ? d.axisX[0].lineCoordinates : d.axisX2[0].lineCoordinates;
          if (d.axisY && 0 < d.axisY.length && d.axisY[0]) {
            var b = d.axisY[0];
            f2.x1 = e.x1 < e.x2 ? e.x1 : b.lineCoordinates.x1;
            f2.x2 = e.x2 > b.lineCoordinates.x2 ? e.x2 : b.lineCoordinates.x2;
          }
          d.axisY2 && 0 < d.axisY2.length && d.axisY2[0] && (b = d.axisY2[0], f2.x1 = e.x1 < e.x2 ? e.x1 : b.lineCoordinates.x1, f2.x2 = e.x2 > b.lineCoordinates.x2 ? e.x2 : b.lineCoordinates.x2);
        }
        for (e = 0; e < d.data.length; e++) "dateTime" === d.data[e].xValueType && (this.isDateTime = true);
        k2 = Math.max(k2, f2.x1);
        r = Math.min(r, f2.x2);
        d.sessionVariables.plotAreaBounds = f2;
      }
      this._chartsPlotAreaX1 = k2;
      this._chartsPlotAreaX2 = r;
    };
    F2.prototype._updateSize = function() {
      return mb.call(this, [this.canvas, this.overlaidCanvas]);
    };
    F2.prototype._syncCharts = function(d, k2) {
      for (var w = this, r = null, a = Math.min(d, k2), e = Math.max(d, k2), b = 0; b < this.charts.length; b++) {
        r = this.charts[b];
        r.toolTip && r.toolTip.enabled && r.toolTip.hide();
        for (var c = 0; c < r.axisX.length; c++) r.axisX[c].setViewPortRange(
          d,
          k2
        ), r.axisX[c].options.labelAngle = f(r.axisX[c].options.labelAngle) ? 0 : r.axisX[c].options.labelAngle, this.charts[b].axisX[c].crosshair && this.charts[b].axisX[c].crosshair.enabled && !this.charts[b].axisX[c].crosshair.options.updated && (this.charts[b].axisX[c].crosshair.options.updated = function(a2) {
          for (var b2 = 0; b2 < w.charts.length; b2++) if (w.charts[b2] != a2.chart) for (var c2 = 0; c2 < w.charts[b2].axisX.length; c2++) w.charts[b2].axisX[c2].crosshair && w.charts[b2].axisX[c2].crosshair.showAt(a2.value);
        });
        for (c = 0; c < r.axisX2.length; c++) r.axisX2[c].setViewPortRange(
          d,
          k2
        ), r.axisX2[c].options.labelAngle = f(r.axisX2[c].options.labelAngle) ? 0 : r.axisX2[c].options.labelAngle, this.charts[b].axisX2[c].crosshair && this.charts[b].axisX2[c].crosshair.enabled && !this.charts[b].axisX2[c].crosshair.options.updated && (this.charts[b].axisX2[c].crosshair.options.updated = function(a2) {
          for (var b2 = 0; b2 < w.charts.length; b2++) if (w.charts[b2] != a2.chart) for (var c2 = 0; c2 < w.charts[b2].axisX2.length; c2++) w.charts[b2].axisX2[c2].crosshair && w.charts[b2].axisX2[c2].crosshair.showAt(a2.value);
        });
        r._initialize();
        r.setLayout();
        r.panEnabled = r.options.zoomEnabled && r.zoomEnabled ? false : true;
        r.renderElements();
        (f(this.charts[b].options.toolTip) || !f(this.charts[b].options.toolTip) && f(this.charts[b].options.toolTip.updated)) && this.charts[b].toolTip && (this.charts[b].toolTip.updated = function(a2) {
          for (var b2 = 0; b2 < w.charts.length; b2++) w.charts[b2] != a2.chart && w.charts[b2].toolTip.showAtX(a2.entries[0].xValue, a2.entries[0].dataSeriesIndex);
        });
        (f(this.charts[b].options.toolTip) || !f(this.charts[b].options.toolTip) && f(this.charts[b].options.toolTip.hidden)) && this.charts[b].toolTip && (this.charts[b].toolTip.hidden = function(a2) {
          for (var b2 = 0; b2 < w.charts.length; b2++) w.charts[b2] != a2.chart && w.charts[b2].toolTip.hide();
        });
      }
      this.rangeSelector && (this.rangeSelector.enabled && this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) && this.rangeSelector._updateInputFields(a, e);
      this.navigator && this.navigator.enabled && this.navigator._updateSlider(a, e);
    };
    F2.prototype.destroy = function() {
      for (var d = this.allDOMEventHandlers, f2 = 0; f2 < this.charts.length; f2++) this.charts[f2].destroy();
      this.navigator && this.navigator.enabled && this.navigator.chart.destroy();
      for (f2 = 0; f2 < d.length; f2++) hb(d[f2][0], d[f2][1], d[f2][2], d[f2][3]);
      for (this.allDOMEventHandlers = []; this.navigator && this.navigator.enabled && this.navigator.panel.hasChildNodes(); ) this.navigator.panel.removeChild(this.navigator.panel.lastChild);
      for (; this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); ) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
      for (; this.container && this.container.hasChildNodes(); ) this.container.removeChild(this.container.lastChild);
      this.canvas = this.container = this._canvasJSContainer = null;
      this.navigator.panel = null;
      this.rangeSelector.panel = null;
    };
    F2.prototype.exportChart = function(d) {
      d = "undefined" === typeof d ? {} : d;
      var f2 = d.format ? d.format : "png", k2 = d.fileName ? d.fileName : this.exportFileName, r = this.canvas.cloneNode();
      r.setAttribute("class", r.getAttribute("class") + "-clone");
      var a = r.getContext("2d");
      a.drawImage(this.canvas, 0, 0);
      for (var e = [], b = 0; b < this.charts.length; b++) {
        var c = this.charts[b];
        e.push({ canvas: c.canvas, position: {
          x: c.container.offsetLeft,
          y: c.container.offsetTop
        } });
        e.push({ canvas: c.overlaidCanvas, position: { x: c.container.offsetLeft, y: c.container.offsetTop } });
      }
      this.navigator && this.navigator.enabled && (b = this.navigator, e.push({ canvas: b.chart.canvas, position: { x: b.panel.offsetLeft, y: b.panel.offsetTop } }), e.push({ canvas: b.chart.overlaidCanvas, position: { x: b.panel.offsetLeft, y: b.panel.offsetTop } }));
      for (b = 0; b < e.length; b++) a.drawImage(e[b].canvas, e[b].position.x * ia, e[b].position.y * ia);
      if (d.toDataURL) return r.toDataURL("image/" + f2);
      eb(r, f2, k2);
    };
    F2.prototype.print = function() {
      var d = this.exportChart({ toDataURL: true }), f2 = document.createElement("iframe");
      f2.setAttribute("class", "canvasjs-chart-print-frame");
      f2.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
      f2.style.height = this.height + "px";
      this._canvasJSContainer.appendChild(f2);
      var k2 = this, r = f2.contentWindow || f2.contentDocument.document || f2.contentDocument;
      r.document.open();
      r.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + d + '"/><body/></html>');
      r.document.close();
      setTimeout(function() {
        r.focus();
        r.print();
        setTimeout(function() {
          k2._canvasJSContainer.removeChild(f2);
        }, 1e3);
      }, 500);
    };
    F2.prototype.getObjectAtXY = function(d, k2, w) {
      w = null;
      if (!f(this.rangeSelector)) {
        for (var r = 0; r < this.rangeSelector.buttons.length; r++) {
          var a = this.rangeSelector.buttons[r];
          d >= a.bounds.x1 && (d <= a.bounds.x2 && k2 >= a.bounds.y1 && k2 <= a.bounds.y2) && (w = a.id);
        }
        for (r = 0; r < this.rangeSelector.inputFields._textBlocks.length; r++) a = this.rangeSelector.inputFields._textBlocks[r], d >= a.bounds.x1 && (d <= a.bounds.x2 && k2 >= a.bounds.y1 && k2 <= a.bounds.y2) && (w = a.id);
      }
      return w;
    };
    F2.prototype._touchEventHandler = function(d) {
      if (d.changedTouches) {
        var k2 = [], w = d.changedTouches, r = w ? w[0] : d, a = null;
        switch (d.type) {
          case "touchstart":
          case "MSPointerDown":
            k2 = ["mousemove", "mousedown"];
            this._lastTouchData = Ba(r);
            this._lastTouchData.time = /* @__PURE__ */ new Date();
            break;
          case "touchmove":
          case "MSPointerMove":
            k2 = ["mousemove"];
            break;
          case "touchend":
          case "MSPointerUp":
            var e = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, k2 = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > e ? ["mouseup", "click"] : ["mouseup"];
            break;
          default:
            return;
        }
        if (!(w && 1 < w.length)) {
          a = Ba(r);
          a.time = /* @__PURE__ */ new Date();
          try {
            var b = a.y - this._lastTouchData.y, e = a.time - this._lastTouchData.time;
            if (1 < Math.abs(b) && this._lastTouchData.scroll || 5 < Math.abs(b) && 250 > e) this._lastTouchData.scroll = true;
          } catch (c) {
          }
          this._lastTouchEventType = d.type;
          if (this._lastTouchData && this._lastTouchData.scroll) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
          else for (w = 0; w < k2.length; w++) if (a = k2[w], b = document.createEvent("MouseEvent"), b.initMouseEvent(a, true, true, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, false, false, false, false, 0, null), r.target.dispatchEvent(b), this._lastTouchData && !f(this._lastTouchData.scroll) && !this._lastTouchData.scroll || this._lastTouchData && !this._lastTouchData.scroll && 250 < e || "click" === a) d.preventManipulation && d.preventManipulation(), d.preventDefault && d.cancelable && d.preventDefault();
        }
      }
    };
    F2.prototype._mouseEventHandler = function(d) {
      "undefined" === typeof d.target && d.srcElement && (d.target = d.srcElement);
      var f2 = Ba(d), k2 = d.type, r, a;
      d.which ? a = 3 == d.which : d.button && (a = 2 == d.button);
      F2.capturedEventParam && (r = F2.capturedEventParam, "mouseup" === k2 && (F2.capturedEventParam = null, r.stockChart.overlaidCanvas.releaseCapture ? r.stockChart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", r.stockChart._mouseEventHandler, false)), r.hasOwnProperty(k2) && ("mouseup" !== k2 || r.stockChart.overlaidCanvas.releaseCapture ? d.target !== r.stockChart.overlaidCanvas && s || r[k2].call(r.context, f2.x, f2.y) : d.target !== r.stockChart.overlaidCanvas && (r.stockChart.isDrag = false)));
      if (this._ignoreNextEvent) this._ignoreNextEvent = false;
      else if (d.preventManipulation && d.preventManipulation(), d.preventDefault && d.preventDefault(), Ma && window.console && (window.console.log(k2 + " --> x: " + f2.x + "; y:" + f2.y), a && window.console.log(d.which), "mouseup" === k2 && window.console.log("mouseup")), !a) {
        if (!F2.capturedEventParam && this._events) {
          for (var e = 0; e < this._events.length; e++) if (this._events[e].hasOwnProperty(k2)) if (r = this._events[e], a = r.bounds, f2.x >= a.x1 && f2.x <= a.x2 && f2.y >= a.y1 && f2.y <= a.y2) {
            r[k2].call(r.context, f2.x, f2.y);
            "mousedown" === k2 && true === r.capture ? (Chart.capturedEventParam = r, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === k2 && (r.stockChart.overlaidCanvas.releaseCapture ? r.stockChart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
            break;
          } else r = null;
          d.target.style.cursor = r && r.cursor ? r.cursor : this._defaultCursor;
        }
        k2 = this.bounds;
        (f2.x < k2.x1 || f2.x > k2.x2 || f2.y < k2.y1 || f2.y > k2.y2) && this.resetOverlayedCanvas();
        !this.isDrag && this._eventManager && this._eventManager.mouseEventHandler(d);
      }
    };
    F2.prototype.resetOverlayedCanvas = function() {
      this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
    };
    F2.prototype.clearCanvas = nb;
    F2.prototype.getAutoFontSize = ob;
    ha(K2, Ia);
    ha(M2, Na);
    Ka.prototype.alignVerticalAxes = function() {
      if (!this.isNavigator && this.stockChart) {
        for (var d = this.sessionVariables.plotAreaBounds, f2 = this.stockChart._chartsPlotAreaX1 - d.x1, d = d.x2 - this.stockChart._chartsPlotAreaX2, k2 = 0; k2 < this.axisX.length; k2++) this.axisX[k2].lineCoordinates.x1 += f2, this.axisX[k2].lineCoordinates.x2 -= d, this.axisX[k2].lineCoordinates.width = this.axisX[k2].lineCoordinates.x2 - this.axisX[k2].lineCoordinates.x1, this.axisX[k2].bounds.x1 += f2, this.axisX[k2].bounds.x2 -= d, this.axisX[k2].calculateValueToPixelConversionParameters();
        for (k2 = 0; k2 < this.axisX2.length; k2++) this.axisX2[k2].lineCoordinates.x1 += f2, this.axisX2[k2].lineCoordinates.x2 -= d, this.axisX2[k2].lineCoordinates.width = this.axisX2[k2].lineCoordinates.x2 - this.axisX2[k2].lineCoordinates.x1, this.axisX2[k2].bounds.x1 += f2, this.axisX2[k2].bounds.x2 -= d, this.axisX2[k2].calculateValueToPixelConversionParameters();
        for (k2 = 0; k2 < this.axisY.length; k2++) this.axisY[k2].lineCoordinates.x1 += f2, this.axisY[k2].lineCoordinates.x2 += f2, this.axisY[k2].bounds.x1 += f2, this.axisY[k2].bounds.x2 += f2;
        for (k2 = 0; k2 < this.axisY2.length; k2++) this.axisY2[k2].lineCoordinates.x1 -= d, this.axisY2[k2].lineCoordinates.x2 -= d, this.axisY2[k2].bounds.x1 -= d, this.axisY2[k2].bounds.x2 -= d;
      }
    };
    Ka.prototype.syncCharts = function(d, k2) {
      this.stockChart && (d = f(d) ? this.stockChart._axisXMin : d, k2 = f(k2) ? this.stockChart._axisXMax : k2, this.stockChart._syncCharts(d, k2), this.stockChart.sessionVariables._axisXMin = d, this.stockChart.sessionVariables._axisXMax = k2, this.stockChart.rangeSelector && "zoom" !== this._zoomButton.getAttribute("state") && this.stockChart.rangeSelector.resetRangeButtons());
    };
    I.prototype.reset = function() {
      this.lastObjectId = 0;
      this.objectMap = [];
      this.rectangularRegionEventSubscriptions = [];
      this.eventObjects = [];
      s && (this.ghostCtx.clearRect(0, 0, this.stockChart.width, this.stockChart.height), this.ghostCtx.beginPath());
    };
    I.prototype.getNewObjectTrackingId = function() {
      return ++this.lastObjectId;
    };
    I.prototype.mouseEventHandler = function(d) {
      if ("mousemove" === d.type || "click" === d.type) {
        var f2 = [], k2 = Ba(d), r = null;
        if ((r = this.stockChart.getObjectAtXY(k2.x, k2.y, false)) && "undefined" !== typeof this.objectMap[r]) if (r = this.objectMap[r], "rangeButton" === r.objectType) {
          var a = this.stockChart.rangeSelector.buttons[r.rangeButtonIndex];
          r.eventParameter = { x: k2.x, y: k2.y, rangeButton: a, rangeButtonIndex: r.rangeButtonIndex, stockChart: this.stockChart };
          r.eventContext = { context: this.stockChart.rangeSelector, userContext: a, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
          f2.push(r);
        } else "inputFields" === r.objectType && (a = this.stockChart.rangeSelector.inputFields._textBlocks[r.inputFieldIndex], r.eventParameter = {
          x: k2.x,
          y: k2.y,
          inputField: a,
          inputFieldIndex: r.inputFieldIndex,
          stockChart: this.stockChart
        }, r.eventContext = { context: this.stockChart.rangeSelector, userContext: a, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" }, f2.push(r));
        a = [];
        for (k2 = 0; k2 < this.mouseoveredObjectMaps.length; k2++) {
          for (var e = true, r = 0; r < f2.length; r++) if (f2[r].id === this.mouseoveredObjectMaps[k2].id) {
            e = false;
            break;
          }
          e ? this.fireEvent(this.mouseoveredObjectMaps[k2], "mouseout", d) : a.push(this.mouseoveredObjectMaps[k2]);
        }
        this.mouseoveredObjectMaps = a;
        for (k2 = 0; k2 < f2.length; k2++) {
          a = false;
          for (r = 0; r < this.mouseoveredObjectMaps.length; r++) if (f2[k2].id === this.mouseoveredObjectMaps[r].id) {
            a = true;
            break;
          }
          a || (this.fireEvent(f2[k2], "mouseover", d), this.mouseoveredObjectMaps.push(f2[k2]));
          "click" === d.type ? this.fireEvent(f2[k2], "click", d) : "mousemove" === d.type && this.fireEvent(f2[k2], "mousemove", d);
        }
      }
    };
    I.prototype.fireEvent = function(d, f2, k2) {
      if (d && f2) {
        var r = d.eventParameter, a = d.eventContext, e = d.eventContext.userContext;
        e && (a && e[a[f2]]) && e[a[f2]].call(e, r);
        "mouseout" !== f2 ? e.cursor && e.cursor !== k2.target.style.cursor && (k2.target.style.cursor = e.cursor) : (k2.target.style.cursor = this.stockChart._defaultCursor, delete d.eventParameter, delete d.eventContext);
      }
    };
    ha(A, Q);
    A.prototype._updateOptions = function() {
      this.updateOption("enabled");
      this.updateOption("backgroundColor");
      this.options.backgroundColor || (this.backgroundColor = this.stockChart.backgroundColor);
      this.updateOption("animationEnabled");
      this.animationEnabled = this.animationEnabled && s;
      this.updateOption("animationDuration");
      this.updateOption("theme");
      this.updateOption("verticalAlign");
      this.updateOption("horizontalAlign");
      this.updateOption("width");
      this.updateOption("height");
      this.updateOption("dynamicUpdate");
    };
    A.prototype._initialize = function() {
      this._updateOptions();
      var d;
      this.enabled && !this.panel && (this.panel = k("canvasjs-navigator-panel"), (d = !f(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel)) || this.stockChart._canvasJSContainer.appendChild(this.panel));
      d = !f(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel);
      if (this.enabled) {
        this.height = this.options.height ? parseInt(this.options.height) : 0.14 * this.stockChart.height;
        d || this.stockChart._canvasJSContainer.appendChild(this.panel);
        var t = this.stockChart.layoutManager.getFreeSpace(), s2 = t.x1, r = t.y1;
        this.width = this.options.width ? this.width : t.width;
        "top" === this.verticalAlign ? (r = t.y1 + 2, d = "top") : (r = t.y2 - this.height - 2, d = "bottom");
        "left" === this.horizontalAlign ? s2 = t.x1 + 2 : "center" === this.horizontalAlign ? s2 = t.x1 + t.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (s2 = t.x2 - 2 - this.width);
        this.panel.style.top = r + "px";
        this.panel.style.left = s2 + "px";
        this.panel.style.height = this.height + "px";
        this.panel.style.width = this.width + "px";
        this.stockChart.layoutManager.registerSpace(
          d,
          { width: this.width, height: this.height + 2 }
        );
        this.bounds = { x1: s2, y1: r, x2: s2 + this.width, y2: r + this.height };
      } else d && this.stockChart._canvasJSContainer.removeChild(this.panel);
    };
    A.prototype._updateSlider = function(d, k2) {
      var s2 = this.chart.axisX && this.chart.axisX.length ? this.chart.axisX[0] : this.chart.axisX2[0];
      if (!f(s2)) {
        var r = Math.max(s2.bounds.x1, s2.convertValueToPixel(s2.reversed ? Math.max(d, Math.min(s2.maximum, k2)) : Math.min(d, Math.min(s2.maximum, k2)))), a = s2.convertValueToPixel(s2.reversed ? Math.min(d, Math.min(s2.maximum, k2)) : Math.max(d, Math.min(s2.maximum, k2)));
        this.slider.panel.style.left = r + "px";
        this.slider.left = r;
        this.slider.panel.style.width = a - r + "px";
        this.slider.width = a - r;
        this.slider.minimum = d;
        this.slider.maximum = k2;
        this.chart.resetOverlayedCanvas();
        this.slider.maskInverted ? fa(this.chart.overlaidCanvasCtx, r, 0, a, this.height, this.slider.maskColor, 0, this.slider.outlineColor, 0, 0, 0, 0, this.slider.maskOpacity) : (fa(
          this.chart.overlaidCanvasCtx,
          s2.bounds.x1,
          0,
          r,
          this.height,
          this.slider.maskColor,
          0,
          this.slider.outlineColor,
          false,
          false,
          false,
          false,
          this.slider.maskOpacity
        ), fa(this.chart.overlaidCanvasCtx, a, 0, this.width, this.height, this.slider.maskColor, 0, this.slider.outlineColor, false, false, false, false, this.slider.maskOpacity));
        this.chart.overlaidCanvasCtx.lineWidth = this.slider.outlineThickness;
        this.chart.overlaidCanvasCtx.strokeStyle = this.slider.outlineColor;
        this.chart.overlaidCanvasCtx.save();
        this.chart.overlaidCanvasCtx.beginPath();
        0 < this.slider.outlineThickness && (this.slider.outlineInverted ? (this.chart.overlaidCanvasCtx.moveTo(s2.bounds.x1, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness / 2 << 0) + 0.5 : r, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness / 2 << 0) + 0.5 : r, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.height - this.slider.outlineThickness)) : (this.chart.overlaidCanvasCtx.moveTo(s2.bounds.x1, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness / 2 << 0) + 0.5 : r, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness / 2 << 0) + 0.5 : r, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.slider.outlineThickness / 2)));
        this.chart.overlaidCanvasCtx.stroke();
        this.chart.overlaidCanvasCtx.restore();
        fa(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? r - this.slider.handleWidth / 2 << 0.5 : r - this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 - this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? r + this.slider.handleWidth / 2 << 0.5 : r + this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height / 2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, false, false, false, false, 1);
        fa(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? a - this.slider.handleWidth / 2 << 0.5 : a - this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 - this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? a + this.slider.handleWidth / 2 << 0.5 : a + this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height / 2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, false, false, false, false, 1);
        this.chart.overlaidCanvasCtx.lineWidth = this.slider.handleBorderThickness;
        this.chart.overlaidCanvasCtx.strokeStyle = this.slider.handleBorderColor;
        this.chart.overlaidCanvasCtx.save();
        this.chart.overlaidCanvasCtx.beginPath();
        this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (r - this.slider.handleBorderThickness / 2 << 0) + 0.5 : r) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
        this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (r - this.slider.handleBorderThickness / 2 << 0) + 0.5 : r) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
        this.chart.overlaidCanvasCtx.moveTo(
          (1 === this.slider.handleBorderThickness % 2 ? (r + this.slider.handleBorderThickness / 2 << 0) + 0.5 : r) + Math.round(this.slider.handleBorderThickness),
          this.height / 2 - this.slider.handleHeight / 4
        );
        this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (r + this.slider.handleBorderThickness / 2 << 0) + 0.5 : r) + Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
        this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
        this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
        this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
        this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
        this.chart.overlaidCanvasCtx.stroke();
        this.chart.overlaidCanvasCtx.restore();
      }
    };
    ha(N2, Q);
    N2.prototype._updateOptions = function() {
      this.updateOption("maskColor");
      this.updateOption("maskInverted");
      this.updateOption("maskOpacity");
      this.updateOption("handleColor");
      this.updateOption("handleBorderColor");
      this.updateOption("handleBorderThickness");
      this.updateOption("handleWidth");
      this.updateOption("handleHeight");
      this.updateOption("outlineColor");
      this.updateOption("outlineThickness");
      this.updateOption("outlineInverted");
      this.updateOption("minimum");
      this.updateOption("maximum");
    };
    N2.prototype._attachEvents = function() {
      var d = this;
      y(this.panel, "mousedown", function(f2) {
        d.stockChart.isDrag = true;
        f2.target !== d.leftHandle && f2.target !== d.rightHandle && (d.stockChart.navigatorClicked = true, d.currentHandle = d.leftHandle, d.panMode = true, d.startPosition = Ba(f2), f2.target === d.currentHandle ? d.startPosition.x += d.currentHandle.offsetLeft + d.currentHandle.clientWidth / 2 + d.panel.offsetLeft : f2.target === d.panel && (d.startPosition.x += d.panel.offsetLeft), d.startWidth = d.panel.clientWidth, d.startLeft = d.panel.offsetLeft);
      }, this.stockChart.allDOMEventHandlers);
      y(this.panel, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(f2) {
        d.stockChart._touchEventHandler(f2);
      }, this.stockChart.allDOMEventHandlers);
      y(this.navigator.panel, "mousedown", function(k2) {
        if (k2.target !== d.navigator.slider.panel && k2.target !== d.leftHandle && k2.target !== d.rightHandle) {
          d.stockChart.navigatorClicked = true;
          var s2 = Ba(k2), r, a;
          r = 0;
          var e = d.navigator.chart.axisX && d.navigator.chart.axisX.length ? d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
          k2 = d.navigator.slider.left;
          f(d.startLeft) && (d.startLeft = k2);
          r = k2 + d.navigator.slider.width;
          a = s2.x - (k2 + r) / 2;
          if (s2.x < k2 || s2.x > r) {
            var s2 = Math.max(0, k2 + a), b = Math.min(r + a, d.navigator.width);
            r + a > d.navigator.width && (r = r + a - d.navigator.width, s2 -= r);
            0 > k2 + a && (r = Math.abs(k2 + a), b += r);
            d.stockChart._rangeEventParameter = {
              stockChart: d.stockChart,
              source: "navigator",
              index: null,
              minimum: e.convertPixelToValue(s2),
              maximum: e.convertPixelToValue(b)
            };
            d.stockChart.sessionVariables._axisXMin = e.convertPixelToValue(s2);
            d.stockChart.sessionVariables._axisXMax = e.convertPixelToValue(b);
            d.navigator.dynamicUpdate ? (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(e.convertPixelToValue(s2), e.convertPixelToValue(b)), d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent(
              "rangeChanged",
              d.stockChart._rangeEventParameter,
              d.stockChart
            )) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
          }
        }
      }, this.navigator.stockChart.allDOMEventHandlers);
      y(this.navigator.panel, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(f2) {
        d.stockChart._touchEventHandler(f2);
      }, this.navigator.stockChart.allDOMEventHandlers);
      y(this.navigator.stockChart.container, "mousemove", function(k2) {
        var s2 = d.navigator.chart.axisX && d.navigator.chart.axisX.length ? d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
        if (!f(d.currentHandle) && d.startPosition) {
          d.navigator.chart.overlaidCanvas.style.cursor = d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor = "ew-resize";
          var r;
          r = d.currentHandle === d.leftHandle ? 1 : -1;
          var a = Ba(k2);
          k2 = k2.target || k2.srcElement;
          a.x = k2 === d.currentHandle ? a.x + (d.currentHandle.offsetLeft + d.currentHandle.clientWidth / 2 + d.panel.offsetLeft) : k2 === d.mask || k2 === d.panel ? a.x + d.panel.offsetLeft : k2 === d.rightHandle && d.currentHandle === d.leftHandle ? a.x + (d.rightHandle.offsetLeft + d.rightHandle.clientWidth / 2 + d.panel.offsetLeft) : k2 === d.leftHandle && d.currentHandle === d.rightHandle ? a.x + d.panel.offsetLeft : a.x + ("canvasjs-chart-toolbar" === k2.parentElement.className ? k2.offsetParent.offsetLeft + k2.offsetLeft - d.stockChart._chartsPlotAreaX1 : k2.parentElement.parentElement.parentElement === d.navigator.panel ? k2.offsetLeft : k2.offsetLeft - d.stockChart._chartsPlotAreaX1);
          var e = a.x - d.startPosition.x;
          if (0 !== e) {
            k2 = d.panel.offsetLeft;
            var b = d.panel.clientWidth;
            0 < r && (k2 = Math.max(d.startLeft + r * e, d._left));
            d.panMode || (b = Math.min(d.startWidth - r * e, d.fullWidth), r * e > d.startWidth ? (k2 = 0 < r ? d.startLeft + d.startWidth : Math.max(a.x, d._left), b = (0 < r ? a.x : d.startLeft) - parseFloat(k2)) : 0 > r && (k2 = d.startLeft));
            k2 + b <= d._left + d.fullWidth && (2 < Math.abs(d.startLeft - k2) || 2 < Math.abs(d.startWidth - parseFloat(b))) && (0 < r && (d.left = k2, d.panel.style.left = d.left + "px"), d.panMode || (d.panel.style.width = d.width = b + "px"), f(s2) || (r = s2.convertPixelToValue(Math.max(s2.bounds.x1, parseFloat(k2))), s2 = s2.convertPixelToValue(parseFloat(k2) + parseFloat(b)), d.stockChart.sessionVariables._axisXMin = r, d.stockChart.sessionVariables._axisXMax = s2, d.stockChart.rangeSelector && !d.panMode && d.stockChart.rangeSelector.resetRangeButtons(), d.stockChart._rangeEventParameter = { stockChart: d.stockChart, source: "navigator", index: null, minimum: r, maximum: s2 }, d.navigator.dynamicUpdate ? (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(r, s2), d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart)) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax)));
          }
        } else d.navigator.chart.overlaidCanvas.style.cursor = d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor = "auto";
      }, this.navigator.stockChart.allDOMEventHandlers);
      y(
        this.navigator.stockChart.container,
        window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove",
        function(f2) {
          d.stockChart._touchEventHandler(f2);
        },
        this.navigator.stockChart.allDOMEventHandlers
      );
    };
    N2.prototype._initialize = function() {
      var d = this, k2;
      this._updateOptions();
      ea2 && (this.eventsAttached || (this._attachEvents(), this.eventsAttached = true), this.handleWidth = this.options.handleWidth ? this.handleWidth : 8, this.handleHeight = this.options.handleHeight ? Math.min(this.navigator.height, this.options.handleHeight) : 0.25 * this.navigator.height, this.leftHandle || (this.leftHandle = B("button", "canvasjs-slider-handle", "button"), this.leftHandle.innerHTML = "||", this.leftHandle.style.cssText = "height: " + this.navigator.height + "px; width: " + (this.handleWidth + 10) + "px; position:absolute; left: -" + (this.handleWidth / 2 + 8) + "px; top: 0; cursor:ew-resize;border-style: solid; border-width:" + this.handleBorderThickness + "px; border-color: transparent; outline:none; padding:0px; background-color: transparent; color: transparent;font-size:12px;font-family:Arial;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none; opacity: 1; z-index: 999;", this.panel.appendChild(this.leftHandle), this.initHandle(this.leftHandle, 1)), this.rightHandle || (this.rightHandle = B("button", "canvasjs-slider-handle", "button"), this.rightHandle.innerHTML = "||", this.rightHandle.style.cssText = "height: " + this.navigator.height + "px; width: " + (this.handleWidth + 10) + "px; position:absolute; right: -" + (this.handleWidth / 2 + 8) + "px; top: 0; cursor:ew-resize;border-style: solid; border-width:" + this.handleBorderThickness + "px; border-color: transparent; outline:none; padding:0px; background-color: transparent; color: transparent;font-size:12px;font-family:Arial;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none; opacity: 1; z-index: 999;", this.panel.appendChild(this.rightHandle), this.initHandle(this.rightHandle, -1)), this.panel.style.cssText = "height: " + this.navigator.height + "px; width: 100%; position: absolute; cursor: move;", this.fullWidth = this.panel.clientWidth, this._left = this.panel.offsetLeft, y(document, "mousedown", function(f2) {
        if (d.stockChart.rangeSelector && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) for (var k3 = 0; k3 < d.stockChart.rangeSelector.inputFields.elements.length; k3++) f2.target != d.stockChart.rangeSelector.inputFields.elements[k3] && d.stockChart.rangeSelector.inputFields.elements[k3].focused && d.stockChart.rangeSelector.inputFields.elements[k3].blur();
      }, this.navigator.stockChart.allDOMEventHandlers), y(document, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(d2) {
        a: {
          var f2 = d2.changedTouches, f2 = f2 ? f2[0] : d2, a = "";
          switch (d2.type) {
            case "touchstart":
            case "MSPointerDown":
              a = "mousedown";
              break;
            case "touchmove":
            case "MSPointerMove":
              a = "mousemove";
              break;
            case "touchend":
            case "MSPointerUp":
              a = "mouseup";
              break;
            default:
              break a;
          }
          d2 = document.createEvent("MouseEvent");
          d2.initMouseEvent(a, true, true, window, 1, f2.screenX, f2.screenY, f2.clientX, f2.clientY, false, false, false, false, 0, null);
          f2.target.dispatchEvent(d2);
        }
      }, this.navigator.stockChart.allDOMEventHandlers), y(document, "mouseup", function(s2) {
        d.panMode = false;
        d.navigator.stockChart.isDrag = false;
        if (d.stockChart.navigatorClicked) {
          s2 = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
          var r = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
          f(d.stockChart._rangeEventParameter) && (d.stockChart._rangeEventParameter = { stockChart: d.stockChart, source: "navigator", index: null, minimum: s2, maximum: r });
          if (2 < Math.abs(d.startLeft - d.left) || 2 < Math.abs(d.startWidth - parseFloat(d.width))) {
            d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart));
            for (var a = 0; a < d.stockChart.charts.length; a++) {
              k2 = d.stockChart.charts[a];
              k2.toolTip && k2.toolTip.enabled && k2.toolTip.hide();
              for (var e = 0; e < k2.axisX.length; e++) k2.axisX[e].setViewPortRange(
                s2,
                r
              );
              for (e = 0; e < k2.axisX2.length; e++) k2.axisX2[e].setViewPortRange(s2, r);
              k2.render();
            }
            d.stockChart.rangeSelector && (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(s2, r);
            d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart));
          }
        }
        d.stockChart.navigatorClicked = d.currentHandle = d.startPosition = d.startWidth = d.startLeft = null;
      }, this.navigator.stockChart.allDOMEventHandlers), y(document, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(s2) {
        d.panMode = false;
        d.navigator.stockChart.isDrag = false;
        if (d.stockChart.navigatorClicked) {
          s2 = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
          var r = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
          f(d.stockChart._rangeEventParameter) && (d.stockChart._rangeEventParameter = { stockChart: d.stockChart, source: "navigator", index: null, minimum: s2, maximum: r });
          d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart));
          for (var a = 0; a < d.stockChart.charts.length; a++) {
            k2 = d.stockChart.charts[a];
            k2.toolTip && k2.toolTip.enabled && k2.toolTip.hide();
            for (var e = 0; e < k2.axisX.length; e++) k2.axisX[e].setViewPortRange(s2, r);
            for (e = 0; e < k2.axisX2.length; e++) k2.axisX2[e].setViewPortRange(s2, r);
            k2.render();
          }
          d.stockChart.rangeSelector && (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(s2, r);
          d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart));
        }
        d.stockChart.navigatorClicked = d.currentHandle = d.startPosition = d.startWidth = d.startLeft = null;
      }, this.navigator.stockChart.allDOMEventHandlers));
    };
    N2.prototype.initHandle = function(d, f2) {
      var k2 = this;
      d && (y(d, "mousedown", function(d2) {
        k2.stockChart.navigatorClicked = true;
        k2.currentHandle = this;
        k2.startPosition = Ba(d2);
        d2.target === k2.currentHandle ? k2.startPosition.x += k2.currentHandle.offsetLeft + k2.currentHandle.clientWidth / 2 + k2.panel.offsetLeft : d2.target === k2.panel && (k2.startPosition.x += k2.panel.offsetLeft);
        k2.startWidth = k2.panel.clientWidth;
        k2.startLeft = k2.panel.offsetLeft;
        d2.preventDefault && d2.preventDefault();
        d2.stopPropagation && d2.stopPropagation();
      }, this.navigator.stockChart.allDOMEventHandlers), y(d, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(d2) {
        k2.stockChart._touchEventHandler(d2);
      }, this.navigator.stockChart.allDOMEventHandlers));
    };
    ha(O2, Q);
    O2.prototype._updateOptions = function() {
      this.updateOption("enabled");
      this.updateOption("verticalAlign");
      this.updateOption("horizontalAlign");
      this.updateOption("width");
      this.updateOption("height");
      this.updateOption("label");
      this.updateOption("selectedRangeButtonIndex");
    };
    O2.prototype._initialize = function() {
      var d = 0;
      this._updateOptions();
      this.buttons = [];
      if (ea2 && this.enabled) {
        if (this.options.buttons) for (var k2 = 0; k2 < this.options.buttons.length; k2++) this.buttons.push(new P(this.stockChart, k2, this.options.buttons[k2]));
        else {
          for (k2 = 0; 6 > k2; k2++) this.buttons.push(new P(this.stockChart, k2));
          this.buttonLabels = "1m 3m 6m YTD 1y All".split(" ");
        }
        this._wrapElements = false;
        var s2 = this.stockChart.layoutManager.getFreeSpace(), r = s2.x1, k2 = s2.y1;
        this.width = this.options.width ? this.width : s2.width;
        f(this.buttonStyle.options.labelFontSize) && (this.buttonStyle.labelFontSize = this.stockChart.getAutoFontSize(this.buttonStyle.labelFontSize));
        this.rangeButtonsWidth = 0;
        this.buttonStyle.maxWidth = this.buttonStyle.options.maxWidth ? this.buttonStyle.options.maxWidth : this.stockChart.width / this.buttons.length;
        if (this.buttons && 0 < this.buttons.length) {
          var a = new na(this.ctx, {
            x: 0,
            y: 0,
            backgroundColor: this.stockChart.backgroundColor,
            borderThickness: 0,
            cornerRadius: 0,
            maxWidth: 0.2 * this.stockChart.width,
            maxHeight: 2 * this.buttonStyle.labelFontSize,
            angle: 0,
            padding: { left: 5, right: 5, top: 2, bottom: 2 },
            text: f(this.stockChart.options.culture) || f(this.stockChart._cultureInfo.rangeSelector.rangeText) ? this.label : this.stockChart._cultureInfo.rangeSelector.rangeText,
            horizontalAlign: "left",
            fontSize: this.buttonStyle.labelFontSize,
            fontFamily: this.buttonStyle.labelFontFamily,
            fontWeight: this.buttonStyle.labelFontWeight,
            fontColor: this.buttonStyle.labelFontColor,
            fontStyle: this.buttonStyle.labelFontStyle,
            textBaseline: "middle"
          });
          this._label.textBlock = a;
        }
        for (k2 = 0; k2 < this.buttons.length; k2++) {
          var e = this.buttons[k2];
          e._index = k2;
          a = new na(this.ctx, {
            x: 0,
            y: 0,
            backgroundColor: this.buttonStyle.backgroundColor,
            borderColor: this.buttonStyle.borderColor,
            borderThickness: this.buttonStyle.borderThickness,
            cornerRadius: 0,
            maxWidth: this.buttonStyle.options.width ? this.buttonStyle.width : this.buttonStyle.maxWidth,
            maxHeight: 2 * this.buttonStyle.labelFontSize,
            angle: 0,
            padding: this.buttonStyle.padding,
            text: this.options.buttons && this.options.buttons.length ? f(e.label) ? "" : e.label : this.buttonLabels[k2],
            horizontalAlign: "center",
            textAlign: "center",
            fontSize: this.buttonStyle.labelFontSize,
            fontFamily: this.buttonStyle.labelFontFamily,
            fontWeight: this.buttonStyle.labelFontWeight,
            fontColor: this.buttonStyle.labelFontColor,
            fontStyle: this.buttonStyle.labelFontStyle,
            textBaseline: "middle"
          });
          e.state = f(this.selectedRangeButtonIndex) || this.selectedRangeButtonIndex !== k2 ? "off" : "on";
          e.textBlock = a;
          e.bounds = { x1: null, x2: null, y1: null, y2: null, width: null, height: null };
          a.measureText();
          this.rangeButtonsWidth += a.width + this.buttonStyle.spacing;
          this.rangeButtonsHeight = a.height;
          d = d < a.height ? a.height : d;
          e = this.buttons[k2];
          e.id = ++this.stockChart._eventManager.lastObjectId;
          this.stockChart._eventManager.objectMap[e.id] = { id: e.id, objectType: "rangeButton", rangeButtonIndex: k2 };
        }
        this.height < this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness && (this.height = this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness);
        this.height < d + 2 * this.buttonStyle.borderThickness + 5 && (this.height = d + 2 * this.buttonStyle.borderThickness + 5);
        this.rangeButtonsWidth + this._label.textBlock.measureText().width + this.inputFieldsWidth >= this.stockChart.width && (this.height = this.options.height ? this.height : 2 * this.height, this._wrapElements = true);
        "bottom" === this.verticalAlign ? (k2 = s2.y2 - this.height, d = "bottom") : (k2 = s2.y1, d = "top");
        "left" === this.horizontalAlign ? r = s2.x1 + 2 : "center" === this.horizontalAlign ? r = s2.x1 + s2.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (r = s2.x2 - 2 - this.width);
        this.stockChart.layoutManager.registerSpace(d, { width: this.width, height: this.height });
        this.bounds = {
          x1: r,
          y1: k2,
          x2: r + this.width,
          y2: k2 + this.height,
          width: this.width,
          height: this.height
        };
        for (k2 = 0; k2 < this.buttons.length; k2++) this.buttons[k2]._initialize(k2);
      }
    };
    O2.prototype.render = function() {
      var d;
      this.setButtonsLayout();
      fa(this.ctx, this.bounds.x1, this.bounds.y1, this.bounds.x2, this.bounds.y2, this.stockChart.backgroundColor, 0, null, 0, 0, 0, 0, 1);
      this._label && this._label.textBlock && this._label.textBlock.render(true);
      for (d = 0; d < this.buttons.length; d++) this.buttons[d].enabled || (this.buttons[d].textBlock.backgroundColor = this.buttons[d].backgroundColorDisabled, this.buttons[d].textBlock.borderColor = this.buttons[d].backgroundColorDisabled), this.buttons[d].render(true);
      this.inputFields && this.inputFields.enabled && this.renderInputFields(true);
    };
    O2.prototype.setButtonsLayout = function() {
      var d, f2, k2 = this.bounds.x1 + 5, r, a;
      this._label && (this._label.textBlock && 0 < this.buttons.length) && (this._label.textBlock.x = k2, this._label.textBlock.y = a = this.bounds.y1 + this._label.textBlock.measureText().height / 2 + 2 * this.buttons[0].textBlock.borderThickness, this._label.bounds = {
        x1: k2,
        y1: a - this._label.textBlock.fontSize / 2,
        x2: k2 + this._label.textBlock.measureText().width,
        y2: a + this._label.textBlock.measureText().height,
        width: this._label.textBlock.measureText().width,
        height: this._label.textBlock.measureText().height
      }, k2 += this._label.bounds.width);
      for (d = 0; d < this.buttons.length; d++) f2 = this.buttons[d], f2.textBlock.width = f2.textBlock.maxWidth = this.buttonStyle.width = this.buttonStyle.options.width ? this.buttonStyle.width : f2.textBlock.width, r = k2 + f2.textBlock.width, f2.textBlock.x = f2.bounds.x1 = 1 === f2.textBlock.borderThickness % 2 ? (k2 << 0) + 0.5 : k2, f2.bounds.x2 = r, a = 1 === f2.textBlock.borderThickness % 2 ? this.bounds.y1 + f2.textBlock.height / 2 + 2 * f2.textBlock.borderThickness << 0.5 : this.bounds.y1 + f2.textBlock.height / 2 + 2 * f2.textBlock.borderThickness, f2.textBlock.y = a, f2.bounds.y1 = a - f2.textBlock.height / 2, f2.bounds.y2 = f2.bounds.y1 + f2.textBlock.height, f2.bounds.width = r - k2, f2.bounds.height = f2.bounds.y2 - f2.bounds.y1, k2 = r + this.buttonStyle.spacing, f2.textBlock.maxWidth = this.buttonStyle.maxWidth;
    };
    O2.prototype.resetRangeButtons = function() {
      for (var d = 0; d < this.buttons.length; d++) this.buttons[d].enabled && (this.buttons[d].state = "off", this.buttons[d].textBlock.backgroundColor = this.buttonStyle.backgroundColor, this.buttons[d].textBlock.fontColor = this.buttonStyle.labelFontColor, this.buttons[d].textBlock.fontWeight = this.buttonStyle.labelFontWeight, this.buttons[d].textBlock.render(true));
    };
    O2.prototype.renderInputFields = function() {
      this.inputFields._textBlocks[0].text = "dateTime" === this.inputFields.valueType ? oa(this.inputFields.startValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : $(
        this.inputFields.startValue,
        this.inputFields.valueFormatString,
        this.stockChart._cultureInfo
      );
      this.inputFields._textBlocks[1].text = "dateTime" === this.inputFields.valueType ? oa(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : $(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo);
      this.inputFields._labels[0].text = f(this.stockChart._cultureInfo.rangeSelector.fromText) ? "From" : this.stockChart._cultureInfo.rangeSelector.fromText;
      this.inputFields._labels[1].text = f(this.stockChart._cultureInfo.rangeSelector.toText) ? "To" : this.stockChart._cultureInfo.rangeSelector.toText;
      var d = 0, k2 = true;
      if (this.stockChart.title && this.stockChart.title.text && ("top" === this.stockChart.title.verticalAlign || "right" === this.stockChart.title.horizontalAlign && "center" === this.stockChart.title.verticalAlign && this.stockChart.exportEnabled) || "bottom" === this.verticalAlign) k2 = false;
      if (this.stockChart.subtitles) for (var s2 = 0; s2 < this.stockChart.subtitles.length; s2++) this.stockChart.subtitles[s2] && (this.stockChart.subtitles[s2].text && ("top" === this.stockChart.subtitles[s2].verticalAlign || "right" === this.stockChart.subtitles[s2].horizontalAlign && "center" === this.stockChart.subtitles[s2].verticalAlign && this.stockChart.exportEnabled)) && (k2 = false);
      for (s2 = this.inputFields._textBlocks.length - 1; 0 <= s2; s2--) {
        var r = this.inputFields._textBlocks[s2], a = r.measureText();
        r._width = this.inputFields.style.options.width ? this.inputFields.style.width : Math.abs(a.width - r._width) <= ("dateTime" === this.inputFields.valueType ? 10 : 5) ? r._width : a.width + 10;
        d += r._width + this.inputFields.style.spacing;
        this.inputFields.elements[s2].style.width = r._width - this.inputFields.style.spacing - 2 * this.inputFields.style.borderThickness - 5 + "px";
        r.x = r.bounds.x1 = 1 === r.borderThickness % 2 ? (this.bounds.x2 - d - (this.stockChart.exportEnabled && k2 ? 40 : 0) << 0) + 0.5 : this.bounds.x2 - d - (this.stockChart.exportEnabled && k2 ? 40 : 0);
        r.bounds.x2 = r.bounds.x1 + r._width;
        this.inputFields.elements[s2].style.left = this.bounds.x2 - d - (this.stockChart.exportEnabled && k2 ? 40 : 0) + this.inputFields.style.borderThickness + "px";
        d += this.inputFields._labels[s2].measureText().width;
        this.inputFields._labels[s2].x = this.inputFields._labels[s2].bounds.x1 = this.bounds.x2 - d - (this.stockChart.exportEnabled && k2 ? 40 : 0);
        this.inputFields._labels[s2].bounds.x2 = this.inputFields._labels[s2].bounds.x1 + this.inputFields._labels[s2].measureText().width;
        r.width = r._width;
        r.y = 1 === r.borderThickness % 2 ? (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * r.borderThickness << 0.5 : (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * r.borderThickness;
        this.inputFields._labels[s2].y = (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * r.borderThickness;
        r.bounds.y1 = this.inputFields._labels[s2].bounds.y1 = r.y - a.height / 2 + 2 * r.borderThickness;
        r.bounds.y2 = this.inputFields._labels[s2].bounds.y2 = r.bounds.y1 + a.height;
        this.inputFields.elements[s2].style.top = this.inputFields._labels[s2].bounds.y1 + "px";
        r.render(true);
        this.inputFields._labels[s2].render(true);
      }
    };
    O2.prototype._updateInputFields = function(d, f2) {
      this.inputFields.elements[0].focused || (this.inputFields.elements[0].value = "dateTime" === this.inputFields.valueType ? oa(d, "YYYY-MM-DD") : $(d, this.inputFields.valueFormatString));
      this.inputFields.elements[1].focused || (this.inputFields.elements[1].value = "dateTime" === this.inputFields.valueType ? oa(f2, "YYYY-MM-DD") : $(f2, this.inputFields.valueFormatString));
      for (var k2 = 0; k2 < this.inputFields.elements.length; k2++) this.inputFields.elements[k2].focused && this.inputFields.elements[k2].focus();
      this.inputFields.startValue = d;
      this.inputFields.endValue = f2;
      this.render();
    };
    ha(P, Q);
    P.prototype._updateOptions = function() {
      this.updateOption("style");
      this.updateOption("label");
      this.updateOption("range");
      this.updateOption("rangeType");
    };
    P.prototype._initialize = function(d) {
      this._updateOptions();
      var k2 = "1m 3m 6m YTD 1y All".split(" "), s2 = [1, 3, 6, null, 1, null], r = "month month month ytd year all".split(" ");
      this.range = "undefined" !== typeof this.options.range ? this.range : f(s2[d]) ? null : s2[d];
      this.rangeType = "undefined" !== typeof this.options.rangeType ? this.rangeType : r[d];
      this.label = this.textBlock.text = f(this.options.label) ? k2[d] : this.label;
    };
    P.prototype.render = function() {
      this.textBlock.render(true);
    };
    ha(W2, Q);
    W2.prototype._updateOptions = function() {
      this.updateOption("enabled");
      this.updateOption("startValue");
      this.updateOption("endValue");
      this.updateOption("valueType");
      this.updateOption("valueFormatString");
    };
    W2.prototype._initialize = function() {
      this._updateOptions();
      f(this.style.options.fontSize) && (this.style.fontSize = this.stockChart.getAutoFontSize(this.style.fontSize));
      if (this.enabled) {
        for (var d = 0; d < this.elements.length; d++) this.elements[d].style.position = "absolute", this.elements[d].style.display = this.elements[d].focused ? "inline" : "none", this.elements[d].style.backgroundColor = this.style.backgroundColor, this.elements[d].style.border = "none", this.elements[d].style.outline = "none", this.elements[d].style.outlineOffset = 0, this.elements[d].style.textAlign = "center", this.elements[d].style.color = this.style.fontColor, this.elements[d].style.fontSize = this.elements[d].style.height = this.style.fontSize + "px", this.elements[d].style.fontStyle = this.style.fontStyle, this.elements[d].style.fontFamily = this.style.fontFamily, this.elements[d].style.fontWeight = this.style.fontWeight, this.elements[d].style.lineHeight = 1, isNaN(this.style.padding) ? (this.elements[d].style.paddingTop = this.style.padding.top + "px", this.elements[d].style.paddingRight = this.style.padding.right + "px", this.elements[d].style.paddingBottom = this.style.padding.bottom + "px", this.elements[d].style.paddingLeft = this.style.padding.left + "px") : this.elements[d].style.padding = this.style.padding + "px", this.elements[d].style.mozAppearance = this.elements[d].style.webkitAppearance = this.elements[d].style.appearance = "none", this.elements[d].style.webkitBorderRadius = 0, this.elements[d].style.mozBorderRadius = 0, this.elements[d].style.borderRadius = 0, this.elements[d].style.boxSizing = "content-box";
        this.parent = this.rangeSelector = this.stockChart.rangeSelector;
      }
    };
    ha(X2, Q);
    X2.prototype._updateOptions = function() {
      this.updateOption("backgroundColor");
      this.updateOption("backgroundColorOnHover");
      this.updateOption("backgroundColorOnSelect");
      this.updateOption("borderColor");
      this.updateOption("borderThickness");
      this.updateOption("labelFontColor");
      this.updateOption("labelFontColorOnHover");
      this.updateOption("labelFontSize");
      this.updateOption("labelFontStyle");
      this.updateOption("labelFontFamily");
      this.updateOption("labelFontWeight");
      this.updateOption("width");
      this.updateOption("maxWidth");
      this.updateOption("padding");
      this.updateOption("spacing");
      this.updateOption("cursor");
    };
    ha(Y2, Q);
    Y2.prototype._updateOptions = function() {
      this.updateOption("backgroundColor");
      this.updateOption("borderColor");
      this.updateOption("borderThickness");
      this.updateOption("borderColorOnFocus");
      this.updateOption("fontColor");
      this.updateOption("fontSize");
      this.updateOption("fontStyle");
      this.updateOption("fontFamily");
      this.updateOption("fontWeight");
      this.updateOption("width");
      this.updateOption("maxWidth");
      this.updateOption("padding");
      this.updateOption("spacing");
      this.updateOption("cursor");
    };
    return F2;
  }();
  W.version = "v1.2.18 GA";
  window.CanvasJS && (W && (!window.CanvasJS.StockChart && window.CanvasJS.Chart) && (window.CanvasJS.StockChart = W), W && !window.CanvasJS.Chart && (window.CanvasJS.Chart = Ka, window.CanvasJS.StockChart = W));
})();
document.createElement("canvas").getContext || function() {
  function V() {
    return this.context_ || (this.context_ = new C(this));
  }
  function W(a, b, c) {
    var g = M.call(arguments, 2);
    return function() {
      return a.apply(b, g.concat(M.call(arguments)));
    };
  }
  function N(a) {
    return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
  }
  function O(a) {
    a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
    a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
    a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
  }
  function X(a) {
    var b = a.srcElement;
    switch (a.propertyName) {
      case "width":
        b.getContext().clearRect();
        b.style.width = b.attributes.width.nodeValue + "px";
        b.firstChild.style.width = b.clientWidth + "px";
        break;
      case "height":
        b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
    }
  }
  function Y(a) {
    a = a.srcElement;
    a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
  }
  function D() {
    return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  }
  function t(a, b) {
    for (var c = D(), g = 0; 3 > g; g++) for (var e = 0; 3 > e; e++) {
      for (var f = 0, d2 = 0; 3 > d2; d2++) f += a[g][d2] * b[d2][e];
      c[g][e] = f;
    }
    return c;
  }
  function P(a, b) {
    b.fillStyle = a.fillStyle;
    b.lineCap = a.lineCap;
    b.lineJoin = a.lineJoin;
    b.lineWidth = a.lineWidth;
    b.miterLimit = a.miterLimit;
    b.shadowBlur = a.shadowBlur;
    b.shadowColor = a.shadowColor;
    b.shadowOffsetX = a.shadowOffsetX;
    b.shadowOffsetY = a.shadowOffsetY;
    b.strokeStyle = a.strokeStyle;
    b.globalAlpha = a.globalAlpha;
    b.font = a.font;
    b.textAlign = a.textAlign;
    b.textBaseline = a.textBaseline;
    b.arcScaleX_ = a.arcScaleX_;
    b.arcScaleY_ = a.arcScaleY_;
    b.lineScale_ = a.lineScale_;
  }
  function Q(a) {
    var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
    if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
    return b;
  }
  function E(a, b, c) {
    return Math.min(c, Math.max(b, a));
  }
  function F(a, b, c) {
    0 > c && c++;
    1 < c && c--;
    return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
  }
  function G(a) {
    if (a in H) return H[a];
    var b, c = 1;
    a = String(a);
    if ("#" == a.charAt(0)) b = a;
    else if (/^rgb/.test(a)) {
      c = Q(a);
      b = "#";
      for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
      c = +c[3];
    } else if (/^hsl/.test(a)) {
      e = c = Q(a);
      b = parseFloat(e[0]) / 360 % 360;
      0 > b && b++;
      g = E(parseFloat(e[1]) / 100, 0, 1);
      e = E(parseFloat(e[2]) / 100, 0, 1);
      if (0 == g) g = e = b = e;
      else {
        var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
        g = F(d2, f, b + 1 / 3);
        e = F(d2, f, b);
        b = F(d2, f, b - 1 / 3);
      }
      b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
      c = c[3];
    } else b = Z[a] || a;
    return H[a] = { color: b, alpha: c };
  }
  function C(a) {
    this.m_ = D();
    this.mStack_ = [];
    this.aStack_ = [];
    this.currentPath_ = [];
    this.fillStyle = this.strokeStyle = "#000";
    this.lineWidth = 1;
    this.lineJoin = "miter";
    this.lineCap = "butt";
    this.miterLimit = 1 * q;
    this.globalAlpha = 1;
    this.font = "10px sans-serif";
    this.textAlign = "left";
    this.textBaseline = "alphabetic";
    this.canvas = a;
    var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
    c.style.cssText = b;
    a.appendChild(c);
    b = c.cloneNode(false);
    b.style.backgroundColor = "red";
    b.style.filter = "alpha(opacity=0)";
    a.appendChild(b);
    this.element_ = c;
    this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
  }
  function R(a, b, c, g) {
    a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
    a.currentX_ = g.x;
    a.currentY_ = g.y;
  }
  function S(a, b) {
    var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
    1 > e && (c *= e);
    b.push(
      "<g_vml_:stroke",
      ' opacity="',
      c,
      '"',
      ' joinstyle="',
      a.lineJoin,
      '"',
      ' miterlimit="',
      a.miterLimit,
      '"',
      ' endcap="',
      $[a.lineCap] || "square",
      '"',
      ' weight="',
      e,
      'px"',
      ' color="',
      g,
      '" />'
    );
  }
  function T(a, b, c, g) {
    var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
    if (e instanceof w) {
      var h = 0, l = g = 0, u = 0, m = 1;
      if ("gradient" == e.type_) {
        h = e.x1_ / f;
        c = e.y1_ / d2;
        var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
        0 > h && (h += 360);
        1e-6 > h && (h = 0);
      } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
      f = e.colors_;
      f.sort(function(a2, b2) {
        return a2.offset - b2.offset;
      });
      d2 = f.length;
      p = f[0].color;
      c = f[d2 - 1].color;
      k2 = f[0].alpha * a.globalAlpha;
      a = f[d2 - 1].alpha * a.globalAlpha;
      for (var n = [], r2 = 0; r2 < d2; r2++) {
        var t2 = f[r2];
        n.push(t2.offset * m + u + " " + t2.color);
      }
      b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
    } else e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
  }
  function s(a, b, c) {
    a = a.m_;
    return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
  }
  function z(a, b, c) {
    isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
  }
  function w(a) {
    this.type_ = a;
    this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
    this.colors_ = [];
  }
  function I(a, b) {
    if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
    if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
    switch (b) {
      case "repeat":
      case null:
      case "":
        this.repetition_ = "repeat";
        break;
      case "repeat-x":
      case "repeat-y":
      case "no-repeat":
        this.repetition_ = b;
        break;
      default:
        throw new A("SYNTAX_ERR");
    }
    this.src_ = a.src;
    this.width_ = a.width;
    this.height_ = a.height;
  }
  function A(a) {
    this.code = this[a];
    this.message = a + ": DOM Exception " + this.code;
  }
  var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
  navigator.userAgent.match(/MSIE ([\d.]+)?/);
  var M = Array.prototype.slice;
  O(document);
  var U = { init: function(a) {
    a = a || document;
    a.createElement("canvas");
    a.attachEvent("onreadystatechange", W(this.init_, this, a));
  }, init_: function(a) {
    a = a.getElementsByTagName("canvas");
    for (var b = 0; b < a.length; b++) this.initElement(a[b]);
  }, initElement: function(a) {
    if (!a.getContext) {
      a.getContext = V;
      O(a.ownerDocument);
      a.innerHTML = "";
      a.attachEvent("onpropertychange", X);
      a.attachEvent("onresize", Y);
      var b = a.attributes;
      b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
      b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
    }
    return a;
  } };
  U.init();
  for (var v = [], d = 0; 16 > d; d++) for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
  var Z = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000000",
    blanchedalmond: "#FFEBCD",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#00FFFF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgreen: "#006400",
    darkgrey: "#A9A9A9",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    grey: "#808080",
    greenyellow: "#ADFF2F",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgreen: "#90EE90",
    lightgrey: "#D3D3D3",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#FF00FF",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    oldlace: "#FDF5E6",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    whitesmoke: "#F5F5F5",
    yellowgreen: "#9ACD32"
  }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
  d.clearRect = function() {
    this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
    this.element_.innerHTML = "";
  };
  d.beginPath = function() {
    this.currentPath_ = [];
  };
  d.moveTo = function(a, b) {
    var c = s(this, a, b);
    this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
    this.currentX_ = c.x;
    this.currentY_ = c.y;
  };
  d.lineTo = function(a, b) {
    var c = s(this, a, b);
    this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
    this.currentX_ = c.x;
    this.currentY_ = c.y;
  };
  d.bezierCurveTo = function(a, b, c, g, e, f) {
    e = s(this, e, f);
    a = s(this, a, b);
    c = s(this, c, g);
    R(this, a, c, e);
  };
  d.quadraticCurveTo = function(a, b, c, g) {
    a = s(this, a, b);
    c = s(this, c, g);
    g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
    R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
  };
  d.arc = function(a, b, c, g, e, f) {
    c *= q;
    var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
    g = a + K(e) * c - r;
    e = b + J(e) * c - r;
    k2 != g || f || (k2 += 0.125);
    a = s(this, a, b);
    k2 = s(this, k2, n);
    g = s(this, g, e);
    this.currentPath_.push({
      type: d2,
      x: a.x,
      y: a.y,
      radius: c,
      xStart: k2.x,
      yStart: k2.y,
      xEnd: g.x,
      yEnd: g.y
    });
  };
  d.rect = function(a, b, c, g) {
    this.moveTo(a, b);
    this.lineTo(a + c, b);
    this.lineTo(a + c, b + g);
    this.lineTo(a, b + g);
    this.closePath();
  };
  d.strokeRect = function(a, b, c, g) {
    var e = this.currentPath_;
    this.beginPath();
    this.moveTo(a, b);
    this.lineTo(a + c, b);
    this.lineTo(a + c, b + g);
    this.lineTo(a, b + g);
    this.closePath();
    this.stroke();
    this.currentPath_ = e;
  };
  d.fillRect = function(a, b, c, g) {
    var e = this.currentPath_;
    this.beginPath();
    this.moveTo(a, b);
    this.lineTo(a + c, b);
    this.lineTo(a + c, b + g);
    this.lineTo(a, b + g);
    this.closePath();
    this.fill();
    this.currentPath_ = e;
  };
  d.createLinearGradient = function(a, b, c, g) {
    var e = new w("gradient");
    e.x0_ = a;
    e.y0_ = b;
    e.x1_ = c;
    e.y1_ = g;
    return e;
  };
  d.createRadialGradient = function(a, b, c, g, e, f) {
    var d2 = new w("gradientradial");
    d2.x0_ = a;
    d2.y0_ = b;
    d2.r0_ = c;
    d2.x1_ = g;
    d2.y1_ = e;
    d2.r1_ = f;
    return d2;
  };
  d.drawImage = function(a, b) {
    var c, g, e, d2, r2, y, n, h;
    e = a.runtimeStyle.width;
    d2 = a.runtimeStyle.height;
    a.runtimeStyle.width = "auto";
    a.runtimeStyle.height = "auto";
    var l = a.width, u = a.height;
    a.runtimeStyle.width = e;
    a.runtimeStyle.height = d2;
    if (3 == arguments.length) c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
    else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
    else if (9 == arguments.length) r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
    else throw Error("Invalid number of arguments");
    var m = s(this, c, g), p = [];
    p.push(
      " <g_vml_:group",
      ' coordsize="',
      10 * q,
      ",",
      10 * q,
      '"',
      ' coordorigin="0,0"',
      ' style="width:',
      10,
      "px;height:",
      10,
      "px;position:absolute;"
    );
    if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
      var t2 = [];
      t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
      var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
      c = s(this, c + e, g + d2);
      m.x = x.max(m.x, v2.x, w2.x, c.x);
      m.y = x.max(m.y, v2.y, w2.y, c.y);
      p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
    } else p.push(
      "top:",
      k(m.y / q),
      "px;left:",
      k(m.x / q),
      "px;"
    );
    p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
    this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
  };
  d.stroke = function(a) {
    var b = [];
    b.push(
      "<g_vml_:shape",
      ' filled="',
      !!a,
      '"',
      ' style="position:absolute;width:',
      10,
      "px;height:",
      10,
      'px;"',
      ' coordorigin="0,0"',
      ' coordsize="',
      10 * q,
      ",",
      10 * q,
      '"',
      ' stroked="',
      !a,
      '"',
      ' path="'
    );
    for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
      var f = this.currentPath_[e];
      switch (f.type) {
        case "moveTo":
          b.push(" m ", k(f.x), ",", k(f.y));
          break;
        case "lineTo":
          b.push(" l ", k(f.x), ",", k(f.y));
          break;
        case "close":
          b.push(" x ");
          f = null;
          break;
        case "bezierCurveTo":
          b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
          break;
        case "at":
        case "wa":
          b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
      }
      if (f) {
        if (null == c.x || f.x < c.x) c.x = f.x;
        if (null == d2.x || f.x > d2.x) d2.x = f.x;
        if (null == c.y || f.y < c.y) c.y = f.y;
        if (null == d2.y || f.y > d2.y) d2.y = f.y;
      }
    }
    b.push(' ">');
    a ? T(this, b, c, d2) : S(this, b);
    b.push("</g_vml_:shape>");
    this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
  };
  d.fill = function() {
    this.stroke(true);
  };
  d.closePath = function() {
    this.currentPath_.push({ type: "close" });
  };
  d.save = function() {
    var a = {};
    P(this, a);
    this.aStack_.push(a);
    this.mStack_.push(this.m_);
    this.m_ = t(D(), this.m_);
  };
  d.restore = function() {
    this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
  };
  d.translate = function(a, b) {
    z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
  };
  d.rotate = function(a) {
    var b = K(a);
    a = J(a);
    z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
  };
  d.scale = function(a, b) {
    this.arcScaleX_ *= a;
    this.arcScaleY_ *= b;
    z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
  };
  d.transform = function(a, b, c, d2, e, f) {
    z(this, t([[
      a,
      b,
      0
    ], [c, d2, 0], [e, f, 1]], this.m_), true);
  };
  d.setTransform = function(a, b, c, d2, e, f) {
    z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
  };
  d.drawText_ = function(a, b, c, d2, e) {
    var f = this.m_;
    d2 = 0;
    var r2 = 1e3, t2 = 0, n = [], h;
    h = this.font;
    if (L[h]) h = L[h];
    else {
      var l = document.createElement("div").style;
      try {
        l.font = h;
      } catch (u) {
      }
      h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
    }
    var l = h, m = this.element_;
    h = {};
    for (var p in l) h[p] = l[p];
    p = parseFloat(m.currentStyle.fontSize);
    m = parseFloat(l.size);
    "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
    h.size *= 0.981;
    p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
    m = this.element_.currentStyle;
    l = this.textAlign.toLowerCase();
    switch (l) {
      case "left":
      case "center":
      case "right":
        break;
      case "end":
        l = "ltr" == m.direction ? "right" : "left";
        break;
      case "start":
        l = "rtl" == m.direction ? "right" : "left";
        break;
      default:
        l = "left";
    }
    switch (this.textBaseline) {
      case "hanging":
      case "top":
        t2 = h.size / 1.75;
        break;
      case "middle":
        break;
      default:
      case null:
      case "alphabetic":
      case "ideographic":
      case "bottom":
        t2 = -h.size / 2.25;
    }
    switch (l) {
      case "right":
        d2 = 1e3;
        r2 = 0.05;
        break;
      case "center":
        d2 = r2 = 500;
    }
    b = s(this, b + 0, c + t2);
    n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
    e ? S(this, n) : T(
      this,
      n,
      { x: -d2, y: 0 },
      { x: r2, y: h.size }
    );
    e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
    b = k(b.x / q) + "," + k(b.y / q);
    n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
    this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
  };
  d.fillText = function(a, b, c, d2) {
    this.drawText_(a, b, c, d2, false);
  };
  d.strokeText = function(a, b, c, d2) {
    this.drawText_(a, b, c, d2, true);
  };
  d.measureText = function(a) {
    this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
    var b = this.element_.ownerDocument;
    this.textMeasureEl_.innerHTML = "";
    this.textMeasureEl_.style.font = this.font;
    this.textMeasureEl_.appendChild(b.createTextNode(a));
    return { width: this.textMeasureEl_.offsetWidth };
  };
  d.clip = function() {
  };
  d.arcTo = function() {
  };
  d.createPattern = function(a, b) {
    return new I(a, b);
  };
  w.prototype.addColorStop = function(a, b) {
    b = G(b);
    this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
  };
  d = A.prototype = Error();
  d.INDEX_SIZE_ERR = 1;
  d.DOMSTRING_SIZE_ERR = 2;
  d.HIERARCHY_REQUEST_ERR = 3;
  d.WRONG_DOCUMENT_ERR = 4;
  d.INVALID_CHARACTER_ERR = 5;
  d.NO_DATA_ALLOWED_ERR = 6;
  d.NO_MODIFICATION_ALLOWED_ERR = 7;
  d.NOT_FOUND_ERR = 8;
  d.NOT_SUPPORTED_ERR = 9;
  d.INUSE_ATTRIBUTE_ERR = 10;
  d.INVALID_STATE_ERR = 11;
  d.SYNTAX_ERR = 12;
  d.INVALID_MODIFICATION_ERR = 13;
  d.NAMESPACE_ERR = 14;
  d.INVALID_ACCESS_ERR = 15;
  d.VALIDATION_ERR = 16;
  d.TYPE_MISMATCH_ERR = 17;
  G_vmlCanvasManager = U;
  CanvasRenderingContext2D = C;
  CanvasGradient = w;
  CanvasPattern = I;
  DOMException = A;
}();
(function feedbackFun() {
  var g = function(e, h, f, g2) {
    this.get = function(a) {
      for (var a = a + "=", c = document.cookie.split(";"), b = 0, e2 = c.length; b < e2; b++) {
        for (var d = c[b]; " " == d.charAt(0); ) d = d.substring(1, d.length);
        if (0 == d.indexOf(a)) return d.substring(a.length, d.length);
      }
      return null;
    };
    this.set = function(a, c) {
      var b = "", b = /* @__PURE__ */ new Date();
      b.setTime(b.getTime() + 6048e5);
      b = "; expires=" + b.toGMTString();
      document.cookie = a + "=" + c + b + "; path=/; ";
    };
    this.check = function() {
      var a = this.get(f);
      if (a) a = a.split(":");
      else if (100 != e) "v" == h && (e = Math.random() >= e / 100 ? 0 : 100), a = [h, e, 0], this.set(f, a.join(":"));
      else return true;
      var c = a[1];
      if (100 == c) return true;
      switch (a[0]) {
        case "v":
          return false;
        case "r":
          return c = a[2] % Math.floor(100 / c), a[2]++, this.set(f, a.join(":")), !c;
      }
      return true;
    };
    this.go = function() {
      if (this.check()) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = g2;
        document.body && document.body.appendChild(a);
      }
    };
    this.start = function() {
      var t = this;
      "complete" !== document.readyState ? window.addEventListener ? window.addEventListener("load", function() {
        t.go();
      }, false) : window.attachEvent && window.attachEvent("onload", function() {
        t.go();
      }) : t.go();
    };
  };
  try {
    new g(100, "r", "QSI_S_ZN_1QRMXLiy8g9BYmF", "https://zn1qrmxliy8g9bymf-zoetis.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_1QRMXLiy8g9BYmF").start();
  } catch (i) {
  }
  ;
})();
//# sourceMappingURL=scripts.js.map
