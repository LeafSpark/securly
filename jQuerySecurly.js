!function (e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, true) : function (e) {
        if (!e.document) {
            throw new Error('jQuery requires a window with a document');
        }
        return t(e);
    } : t(e);
}('undefined' != typeof window ? window : this, function (e, t) {
    'use strict';
    var n = [], r = Object.getPrototypeOf, o = n.slice, i = n.flat ? function (e) {
        return n.flat.call(e);
    } : function (e) {
        return n.concat.apply([], e);
    }, a = n.push, s = n.indexOf, u = {
        href: p.url,
        href: u.href
    }, l = u.toString, c = u.hasOwnProperty, f = c.toString, d = f.call(Object), p = {
        checkClone: ce.cloneNode(true).cloneNode(true).lastChild.checked,
        noCloneChecked: !!ce.cloneNode(true).lastChild.defaultValue,
        option: !!ce.lastChild,
        checkOn: '' !== e.value,
        optSelected: t.selected,
        radioValue: 't' === e.value,
        focusin: 'onfocusin' in e,
        crossDomain: Rt.protocol + '//' + Rt.host != u.protocol + '//' + u.host,
        crossDomain: true,
        cors: !!zt && 'withCredentials' in zt,
        ajax: zt = !!zt,
        createHTMLDocument: ((_t = y.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>', 2 === _t.childNodes.length)
    }, h = function (e) {
        return 'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item;
    }, g = function (e) {
        return null != e && e === e.window;
    }, y = e.document;
    function v(e, t, n) {
        var r, o, i = (n = n || y).createElement('script');
        if (i.text = e, t) {
            for (r in m)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        }
        n.head.appendChild(i).parentNode.removeChild(i);
    }
    function x(e) {
        return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? u[l.call(e)] || 'object' : typeof e;
    }
    var varB = function (e, t) {
        return new varB.fn.init(e, t);
    };
    function w(e) {
        var t = !!e && 'length' in e && e.length, n = x(e);
        return !h(e) && !g(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
    }
    varB.fn = varB.prototype = {
        jquery: '3.6.0',
        constructor: varB,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = varB.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function (e) {
            return varB.each(this, e);
        },
        map: function (e) {
            return this.pushStack(varB.map(this, function (t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(varB.grep(this, function (e, t) {
                return (t + 1) % 2;
            }));
        },
        odd: function () {
            return this.pushStack(varB.grep(this, function (e, t) {
                return t % 2;
            }));
        },
        eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    };
    varB.extend = varB.fn.extend = function () {
        var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = false;
        for ('boolean' == typeof a && (l = a, a = arguments[s] || {}, s++), 'object' == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
            if (null != (e = arguments[s])) {
                for (t in e)
                    r = e[t], '__proto__' !== t && a !== r && (l && r && (varB.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || varB.isPlainObject(n) ? n : {}, o = false, a[t] = varB.extend(l, i, r)) : void 0 !== r && (a[t] = r));
            }
        }
        return a;
    };
    varB.extend({
        expando: 'jQuery' + ('3.6.0' + Math.random()).replace(/\D/g, ''),
        isReady: true,
        error: function (e) {
            throw new Error(e);
        },
        noop: function () {
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || '[object Object]' !== l.call(e)) && (!(t = r(e)) || 'function' == typeof (n = c.call(t, 'constructor') && t.constructor) && f.call(n) === d);
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e)
                return false;
            return true;
        },
        globalEval: function (e, t, n) {
            v(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
            var n, r = 0;
            if (w(e)) {
                for (n = e.length; r < n && false !== t.call(e[r], r, e[r]); r++) {
                    ;
                }
            } else {
                for (r in e)
                    if (false === t.call(e[r], r, e[r])) {
                        break;
                    }
            }
            return e;
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? varB.merge(n, 'string' == typeof e ? [e] : e) : a.call(n, e)), n;
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : s.call(t, e, n);
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) {
                e[o++] = t[r];
            }
            return e.length = o, e;
        },
        grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) {
                !t(e[o], o) !== a && r.push(e[o]);
            }
            return r;
        },
        map: function (e, t, n) {
            var r, o, a = 0, s = [];
            if (w(e)) {
                for (r = e.length; a < r; a++) {
                    null != (o = t(e[a], a, n)) && s.push(o);
                }
            } else {
                for (a in e)
                    null != (o = t(e[a], a, n)) && s.push(o);
            }
            return i(s);
        },
        guid: 1,
        support: p
    });
    'function' == typeof Symbol && (varB.fn[Symbol.iterator] = n[Symbol.iterator]);
    varB.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
        u['[object ' + t + ']'] = t.toLowerCase();
    });
    var S = function (e) {
        var t, n, r, o, i, a, s, u, l, c, f, d, p, h, g, y, m, v, x, b = 'sizzle' + 1 * new Date(), w = e.document, S = 0, j = 0, T = ue(), q = ue(), C = ue(), E = ue(), k = function (e, t) {
            return e === t && (f = true), 0;
        }, A = {}.hasOwnProperty, N = [], D = N.pop, L = N.push, O = N.push, H = N.slice, R = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) {
                    return n;
                }
            }
            return -1;
        }, I = '(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+', W = '\\[[\\x20\\t\\r\\n\\f]*(' + I + ')(?:' + '[\\x20\\t\\r\\n\\f]' + '*([*^$|!~]?=)' + '[\\x20\\t\\r\\n\\f]' + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + I + '))|)' + '[\\x20\\t\\r\\n\\f]' + '*\\]', z = ':(' + I + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + W + ')*)|.*)\\)|)', _ = new RegExp('[\\x20\\t\\r\\n\\f]+', 'g'), F = new RegExp('^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$', 'g'), B = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*'), $ = new RegExp('^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*'), U = new RegExp('[\\x20\\t\\r\\n\\f]|>'), X = new RegExp(z), V = new RegExp('^' + I + '$'), G = {
            ID: new RegExp('^#(' + I + ')'),
            CLASS: new RegExp('^\\.(' + I + ')'),
            TAG: new RegExp('^(' + I + '|[*])'),
            ATTR: new RegExp('^' + W),
            PSEUDO: new RegExp('^' + z),
            CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)', 'i'),
            bool: new RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
            needsContext: new RegExp('^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)', 'i')
        }, te = new RegExp('\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])', 'g'), ne = function (e, t) {
            var n = '0x' + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
        }, oe = function (e, t) {
            return t ? '\0' === e ? '\uFFFD' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
        }, ie = function () {
            d();
        }, ae = searchElements(function (e) {
            return true === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        }, {
            dir: 'parentNode',
            next: 'legend'
        });
        try {
            O.apply(N = H.call(w.childNodes), w.childNodes);
            N[w.childNodes.length].nodeType;
        } catch (e) {
            O = {
                apply: N.length ? function (e, t) {
                    L.apply(e, H.call(t));
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) {
                        ;
                    }
                    e.length = n - 1;
                }
            };
        }
        function se(e, t, r, o) {
            var i, s, l, c, f, h, m, v = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (r = r || [], 'string' != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) {
                return r;
            }
            if (!o && (d(t), t = t || p, g)) {
                if (11 !== w && (f = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/.exec(e))) {
                    if (i = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(i))) {
                                return r;
                            }
                            if (l.id === i) {
                                return r.push(l), r;
                            }
                        } else {
                            if (v && (l = v.getElementById(i)) && x(t, l) && l.id === i) {
                                return r.push(l), r;
                            }
                        }
                    } else {
                        if (f[2]) {
                            return O.apply(r, t.getElementsByTagName(e)), r;
                        }
                        if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) {
                            return O.apply(r, t.getElementsByClassName(i)), r;
                        }
                    }
                }
                if (n.qsa && !E[e + ' '] && (!y || !y.test(e)) && (1 !== w || 'object' !== t.nodeName.toLowerCase())) {
                    if (m = e, v = t, 1 === w && (U.test(e) || $.test(e))) {
                        for ((v = /[+~]/.test(e) && me(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute('id')) ? c = c.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe) : t.setAttribute('id', c = b)), s = (h = a(e)).length; s--;) {
                            h[s] = (c ? '#' + c : ':scope') + ' ' + xe(h[s]);
                        }
                        m = h.join(',');
                    }
                    try {
                        return O.apply(r, v.querySelectorAll(m)), r;
                    } catch (t) {
                        E(e, true);
                    } finally {
                        c === b && t.removeAttribute('id');
                    }
                }
            }
            return u(e.replace(F, '$1'), t, r, o);
        }
        function ue() {
            var e = [];
            return function t(n, o) {
                return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], t[n + ' '] = o;
            };
        }
        function le(e) {
            return e[b] = true, e;
        }
        function ce(e) {
            var t = p.createElement('fieldset');
            try {
                return !!e(t);
            } catch (e) {
                return false;
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null;
            }
        }
        function fe(e, t) {
            for (var n = e.split('|'), o = n.length; o--;) {
                r.attrHandle[n[o]] = t;
            }
        }
        function de(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) {
                return r;
            }
            if (n) {
                for (; n = n.nextSibling;) {
                    if (n === t) {
                        return -1;
                    }
                }
            }
            return e ? 1 : -1;
        }
        function pe(e) {
            return function (t) {
                return 'input' === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function he(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ('input' === n || 'button' === n) && t.type === e;
            };
        }
        function ge(e) {
            return function (t) {
                return 'form' in t ? t.parentNode && false === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : 'label' in t && t.disabled === e;
            };
        }
        function ye(e) {
            return le(function (t) {
                return t = +t, le(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) {
                        n[o = i[a]] && (n[o] = !(r[o] = n[o]));
                    }
                });
            });
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in (n = se.support = {}, i = se.isXML = function (e) {
            var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
            return !/HTML$/i.test(t || n && n.nodeName || 'HTML');
        }, d = se.setDocument = function (e) {
            var t, o, a = e ? e.ownerDocument || e : w;
            return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener('unload', ie, false) : o.attachEvent && o.attachEvent('onunload', ie)), n.scope = ce(function (e) {
                return h.appendChild(e).appendChild(p.createElement('div')), void 0 !== e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length;
            }), n.attributes = ce(function (e) {
                return e.className = 'i', !e.getAttribute('className');
            }), n.getElementsByTagName = ce(function (e) {
                return e.appendChild(p.createComment('')), !e.getElementsByTagName('*').length;
            }), n.getElementsByClassName = /^[^{]+\{\s*\[native \w/.test(p.getElementsByClassName), n.getById = ce(function (e) {
                return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length;
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute('id') === t;
                };
            }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                };
            }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode('id')) && n.value === e) {
                            return [i];
                        }
                        for (o = t.getElementsByName(e), r = 0; i = o[r++];) {
                            if ((n = i.getAttributeNode('id')) && n.value === e) {
                                return [i];
                            }
                        }
                    }
                    return [];
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ('*' === e) {
                    for (; n = i[o++];) {
                        1 === n.nodeType && r.push(n);
                    }
                    return r;
                }
                return i;
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) {
                    return t.getElementsByClassName(e);
                }
            }, m = [], y = [], (n.qsa = /^[^{]+\{\s*\[native \w/.test(p.querySelectorAll)) && (ce(function (e) {
                var t;
                h.appendChild(e).innerHTML = '<a id=\'' + b + '\'></a><select id=\'' + b + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>';
                e.querySelectorAll('[msallowcapture^=\'\']').length && y.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")');
                e.querySelectorAll('[selected]').length || y.push('\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)');
                e.querySelectorAll('[id~=' + b + '-]').length || y.push('~=');
                (t = p.createElement('input')).setAttribute('name', '');
                e.appendChild(t);
                e.querySelectorAll('[name=\'\']').length || y.push('\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")');
                e.querySelectorAll(':checked').length || y.push(':checked');
                e.querySelectorAll('a#' + b + '+*').length || y.push('.#.+[+~]');
                e.querySelectorAll('\\\f');
                y.push('[\\r\\n\\f]');
            }), ce(function (e) {
                e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
                var t = p.createElement('input');
                t.setAttribute('type', 'hidden');
                e.appendChild(t).setAttribute('name', 'D');
                e.querySelectorAll('[name=d]').length && y.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=');
                2 !== e.querySelectorAll(':enabled').length && y.push(':enabled', ':disabled');
                h.appendChild(e).disabled = true;
                2 !== e.querySelectorAll(':disabled').length && y.push(':enabled', ':disabled');
                e.querySelectorAll('*,:x');
                y.push(',.*:');
            })), (n.matchesSelector = /^[^{]+\{\s*\[native \w/.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
                n.disconnectedMatch = v.call(e, '*');
                v.call(e, '[s!=\'\']:x');
                m.push('!=', z);
            }), y = y.length && new RegExp(y.join('|')), m = m.length && new RegExp(m.join('|')), t = /^[^{]+\{\s*\[native \w/.test(h.compareDocumentPosition), x = t || /^[^{]+\{\s*\[native \w/.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
                if (t) {
                    for (; t = t.parentNode;) {
                        if (t === e) {
                            return true;
                        }
                    }
                }
                return false;
            }, k = t ? function (e, t) {
                if (e === t) {
                    return f = true, 0;
                }
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && x(w, e) ? -1 : t == p || t.ownerDocument == w && x(w, t) ? 1 : c ? R(c, e) - R(c, t) : 0 : 4 & r ? -1 : 1);
            } : function (e, t) {
                if (e === t) {
                    return f = true, 0;
                }
                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                if (!o || !i) {
                    return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : c ? R(c, e) - R(c, t) : 0;
                }
                if (o === i) {
                    return de(e, t);
                }
                for (n = e; n = n.parentNode;) {
                    a.unshift(n);
                }
                for (n = t; n = n.parentNode;) {
                    s.unshift(n);
                }
                for (; a[r] === s[r];) {
                    r++;
                }
                return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
            }, p) : p;
        }, se.matches = function (e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function (e, t) {
            if (d(e), n.matchesSelector && g && !E[t + ' '] && (!m || !m.test(t)) && (!y || !y.test(t))) {
                try {
                    var r = v.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return r;
                    }
                } catch (e) {
                    E(t, true);
                }
            }
            return se(t, p, null, [e]).length > 0;
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), x(e, t);
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var o = r.attrHandle[t.toLowerCase()], i = o && A.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
            return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, se.escape = function (e) {
            return (e + '').replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe);
        }, se.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
        }, se.uniqueSort = function (e) {
            var t, r = [], o = 0, i = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(k), f) {
                for (; t = e[i++];) {
                    t === e[i] && (o = r.push(i));
                }
                for (; o--;) {
                    e.splice(r[o], 1);
                }
            }
            return c = null, e;
        }, o = se.getText = function (e) {
            var t, n = '', r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ('string' == typeof e.textContent) {
                        return e.textContent;
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e);
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue;
                    }
                }
            } else {
                for (; t = e[r++];) {
                    n += o(t);
                }
            }
            return n;
        }, (r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: true
                },
                ' ': { dir: 'parentNode' },
                '+': {
                    dir: 'previousSibling',
                    first: true
                },
                '~': { dir: 'previousSibling' }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && se.error(e[0]), e;
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && X.test(n) && (t = a(n, true)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function (tag) {
                    const normalizedTag = tag.replace(te, ne).toLowerCase();
                    if (tag === '*') {
                        return () => true;
                    }
                    return (element) => element.nodeName && element.nodeName.toLowerCase() === normalizedTag;
                },

                CLASS: function (className) {
                    let regex = T[className + ' '];
                    if (!regex) {
                        regex = new RegExp('(^|[\\x20\\t\\r\\n\\f])' + className + '([\\x20\\t\\r\\n\\f]|$)');
                        T[className] = function (elem) {
                            return regex.test(typeof elem.className === 'string' && elem.className || elem.getAttribute && elem.getAttribute('class') || '');
                        };
                    }
                    return T[className];
                },
                ATTR: function (attrName, operator, compareValue) {
                    return function (element) {
                        let elementAttrValue = element.getAttribute(attrName);
                        switch (operator) {
                            case '=': return elementAttrValue === compareValue;
                            case '!=': return elementAttrValue !== compareValue;
                            case '^=': return compareValue && elementAttrValue.startsWith(compareValue);
                            case '$=': return compareValue && elementAttrValue.endsWith(compareValue);
                            case '*=': return compareValue && elementAttrValue.includes(compareValue);
                            case '~=': return (' ' + elementAttrValue.replace(' ', ' ') + ' ').includes(compareValue);
                            case '|=': return elementAttrValue === compareValue || elementAttrValue.startsWith(compareValue + '-');
                            default: return !compareValue ? elementAttrValue == null : false;
                        }
                    };
                },
                CHILD: function (type, childSelector, count, last, ofType) {
                    let isNth = type.includes('nth'),
                        isLast = type.includes('last'),
                        isOfType = ofType === 'of-type';

                    if (count === 1 && last === 0) {
                        return element => !!element.parentNode;
                    }

                    return (element) => {
                        let parent = element.parentNode,
                            nodeName = isOfType ? element.nodeName.toLowerCase() : undefined,
                            wantedNodeIndex = null,
                            currentIndex = 0;

                        if (!parent) {
                            return false;
                        }

                        const children = Array.from(parent.children).filter(child => !isOfType || child.nodeName.toLowerCase() === nodeName);

                        if (isNth) {
                            if (last) {
                                wantedNodeIndex = children.length - count;
                            } else {
                                wantedNodeIndex = count - 1; // nth-child is 1-indexed in CSS
                            }
                            return children[wantedNodeIndex] === element;
                        }

                        // Implement first-child and last-child logic
                        if (type === 'first-child' || type === 'last-of-type' && isOfType) {
                            return children[0] === element;
                        } else if (type === 'last-child' || type === 'first-of-type' && isOfType) {
                            return children[children.length - 1] === element;
                        }

                        // Default false for unmatched types
                        return false;
                    };
                },
                PSEUDO: function (e, t) {
                    var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
                    return o[b] ? o(t) : o.length > 1 ? (n = [
                        e,
                        e,
                        '',
                        t
                    ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                        for (var r, i = o(e, t), a = i.length; a--;) {
                            e[r = R(e, i[a])] = !(n[r] = i[a]);
                        }
                    }) : function (e) {
                        return o(e, 0, n);
                    }) : o;
                }
            },
            pseudos: {
                not: le(function (selector) {
                    let matches = [], doesNotMatch = [], matcher = s(selector.replace(F, '$1'));
                    if (matcher[b]) {
                        return le(function (seed, matches, context, xml) {
                            for (let i, elems = matcher(seed, null, xml, []), l = seed.length; l--;) {
                                if (elems[i = l]) seed[i] = !(matches[i] = elems[i]);
                            }
                        });
                    } else {
                        return function (elem, context, xml) {
                            matches[0] = elem;
                            matcher(matches, null, xml, doesNotMatch);
                            matches[0] = null;
                            return !doesNotMatch.pop();
                        };
                    }
                }),
                has: le(function (selector) {
                    return function (elem) {
                        return se(selector, elem).length > 0;
                    };
                }),
                contains: le(function (text) {
                    text = text.replace(te, ne);
                    return function (elem) {
                        return (elem.textContent || elem.innerText || o(elem)).indexOf(text) > -1;
                    };
                }),
                lang: le(function (lang) {
                    if (!V.test(lang || '')) se.error('unsupported lang: ' + lang);
                    lang = lang.replace(te, ne).toLowerCase();
                    return function (elem) {
                        let elemLang;
                        do {
                            if (elemLang = g ? elem.lang : elem.getAttribute('xml:lang') || elem.getAttribute('lang')) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + '-') === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function (elem) {
                    let hash = e.location && e.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function (elem) {
                    return elem === h;
                },
                focus: function (elem) {
                    return elem === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: ge(false),
                disabled: ge(true),
                checked: function (elem) {
                    let nodeName = elem.nodeName.toLowerCase();
                    return (nodeName === 'input' && !!elem.checked) || (nodeName === 'option' && !!elem.selected);
                },
                selected: function (elem) {
                    if (elem.parentNode) elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                empty: function (elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                parent: function (elem) {
                    return !r.pseudos.empty(elem);
                },
                header: function (elem) {
                    return /^h\d$/i.test(elem.nodeName);
                },
                input: function (elem) {
                    return /^(?:input|select|textarea|button)$/i.test(elem.nodeName);
                },
                button: function (elem) {
                    let nodeName = elem.nodeName.toLowerCase();
                    return nodeName === 'input' && elem.type === 'button' || nodeName === 'button';
                },
                text: function (elem) {
                    var type;
                    return elem.nodeName.toLowerCase() === 'input' &&
                        (type = elem.getAttribute('type')) && type.toLowerCase() === 'text';
                },
                first: ye(function () {
                    return [0];
                }),
                last: ye(function (_, count) {
                    return [count - 1];
                }),
                eq: ye(function (_, count, index) {
                    return [index < 0 ? index + count : index];
                }),
                even: ye(function (arr, count) {
                    for (let i = 0; i < count; i += 2) {
                        arr.push(i);
                    }
                    return arr;
                }),
                odd: ye(function (arr, count) {
                    for (let i = 1; i < count; i += 2) {
                        arr.push(i);
                    }
                    return arr;
                }),
                lt: ye(function (arr, count, index) {
                    for (let i = (index < 0 ? index + count : index > count ? count : index) - 1; i >= 0; i--) {
                        arr.push(i);
                    }
                    return arr;
                }),
                gt: ye(function (arr, count, index) {
                    for (let i = (index < 0 ? index + count : index); i < count; i++) {
                        arr.push(i);
                    }
                    return arr;
                })
            }

        }).pseudos.nth = r.pseudos.eq, {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }))
            r.pseudos[t] = pe(t);
        for (t in {
            submit: true,
            reset: true
        })
            r.pseudos[t] = he(t);
        function ve() {
        }
        function xe(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) {
                r += e[t].value;
            }
            return r;
        }
        function searchElements(matcherFunc, traversalConfig, shouldUseParentNode) {
            const direction = traversalConfig.dir;
            const nextDirection = traversalConfig.next || direction;
            const isParentNodeTraversal = shouldUseParentNode && 'parentNode' === nextDirection;
            let uniqueCounter = j++;

            if (traversalConfig.first) {
                // If only the first matching element should be processed.
                return function (element, context, argument) {
                    while ((element = element[direction])) {
                        if (element.nodeType === 1 || isParentNodeTraversal) {
                            if (matcherFunc(element, context, argument)) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
            } else {
                // When any matching element should be processed.
                return function (element, context, argument) {
                    let tempElement, cache, matchCache, cacheKeyData = [S, uniqueCounter];

                    while ((element = element[direction])) {
                        if (element.nodeType === 1 || isParentNodeTraversal) {
                            cache = element[b] || (element[b] = {});
                            tempElement = cache[element.uniqueID] || (cache[element.uniqueID] = {});

                            if (nextDirection && element.nodeName.toLowerCase() === nextDirection) {
                                element = element[direction] || element;
                            } else {
                                matchCache = tempElement[nextDirection];

                                if (matchCache && matchCache[0] === S && matchCache[1] === uniqueCounter) {
                                    // If cached, return the cached result.
                                    return cacheKeyData[2] = matchCache[2];
                                }

                                // Update cache with current traversal data and function result.
                                tempElement[nextDirection] = cacheKeyData;
                                if (cacheKeyData[2] = matcherFunc(element, context, argument)) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                };
            }
        }
        function we(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var o = e.length; o--;) {
                    if (!e[o](t, n, r)) {
                        return false;
                    }
                }
                return true;
            } : e[0];
        }
        function Se(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
                (i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
            }
            return a;
        }
        function filterElements(sourceElem, targetElem, filterFunc, preFilter, postFilter, context) {
            return preFilter && !preFilter[b] && (preFilter = filterElements(preFilter)),
                postFilter && !postFilter[b] && (postFilter = filterElements(postFilter, context)),
                le(function (context, resultArray, sourceArray, finalFunc) {
                    var tempResult, currentElem, filterResult, diffArray = [], tempArray = [], resultArrayLength = resultArray.length,
                        initialArray = sourceElem || function (elem, target, context) {
                            for (var i = 0, len = target.length; i < len; i++) {
                                se(elem, target[i], context);
                            }
                            return context;
                        }(targetElem || '*', sourceArray.nodeType ? [sourceArray] : sourceArray, []),
                        filteredArray = !filterFunc || !sourceElem && targetElem ? initialArray : Se(initialArray, diffArray, filterFunc, sourceArray, finalFunc),
                        finalArray = filterFunc ? postFilter || (sourceElem ? filterFunc : resultArrayLength || preFilter) ? [] : resultArray : filteredArray;

                    if (filterFunc && filterFunc(filteredArray, finalArray, sourceArray, finalFunc), preFilter) {
                        for (tempResult = Se(finalArray, tempArray), preFilter(tempResult, [], sourceArray, finalFunc), currentElem = tempResult.length; currentElem--;) {
                            (filterResult = tempResult[currentElem]) && (finalArray[tempArray[currentElem]] = !(filteredArray[tempArray[currentElem]] = filterResult));
                        }
                    }

                    if (sourceElem) {
                        if (postFilter || filterFunc) {
                            if (postFilter) {
                                for (tempResult = [], currentElem = finalArray.length; currentElem--;) {
                                    (filterResult = finalArray[currentElem]) && tempResult.push(filteredArray[currentElem] = filterResult);
                                }
                                postFilter(null, finalArray = [], tempResult, finalFunc);
                            }
                            for (currentElem = finalArray.length; currentElem--;) {
                                (filterResult = finalArray[currentElem]) && (tempResult = postFilter ? R(sourceElem, filterResult) : diffArray[currentElem]) > -1 && (sourceElem[tempResult] = !(resultArray[tempResult] = filterResult));
                            }
                        }
                    } else {
                        finalArray = Se(finalArray === resultArray ? finalArray.splice(resultArrayLength, finalArray.length) : finalArray);
                        postFilter ? postFilter(null, resultArray, finalArray, finalFunc) : O.apply(resultArray, finalArray);
                    }
                });
        }
        function tokenizeAndFilter(e) {
            var currentFilter, potentialRelative, finalHandler, length = e.length,
                useRelative = r.relative[e[0].type], // Initialize with the first element's relative if exists
                handler = useRelative || r.relative[' '], // Default to space (' ') relative if not set
                startIndex = useRelative ? 1 : 0, // Skip the first item if it's a relative value
                // Functional handlers for matching elements
                exactMatch = searchElements(function (match) { return match === currentFilter; }, handler, true),
                relativeMatch = searchElements(function (match) { return R(currentFilter, match) > -1; }, handler, true),
                // Initial functional handler
                matchFunctions = [function (elem, context, xml) {
                    var match = !useRelative && (xml || context !== l) || ((currentFilter = context).nodeType ? exactMatch(elem, context, xml) : relativeMatch(elem, context, xml));
                    // Reset currentFilter for next iteration
                    currentFilter = null;
                    return match;
                }];

            // Iterate over the selector parts
            for (; startIndex < length; startIndex++) {
                if ((potentialRelative = r.relative[e[startIndex].type])) {
                    matchFunctions = [searchElements(we(matchFunctions), potentialRelative)];
                } else {
                    // Apply the filter for current selector part
                    currentFilter = r.filter[e[startIndex].type].apply(null, e[startIndex].matches);

                    if (currentFilter[b]) {
                        // If the filter is complex, handle it with recursion and consolidation
                        for (finalHandler = ++startIndex; finalHandler < length && !r.relative[e[finalHandler].type]; finalHandler++) {
                            ;
                        }
                        return filterElements(
                            startIndex > 1 && we(matchFunctions),
                            startIndex > 1 && xe(e.slice(0, startIndex - 1).concat({ value: e[startIndex - 2].type === ' ' ? '*' : '' })).replace(F, '$1'),
                            currentFilter,
                            startIndex < finalHandler && tokenizeAndFilter(e.slice(startIndex, finalHandler)),
                            finalHandler < length && tokenizeAndFilter(e = e.slice(finalHandler)),
                            finalHandler < length && xe(e)
                        );
                    }
                    // Add the filter to the match functions
                    matchFunctions.push(currentFilter);
                }
            }
            // Consolidate and return the final handler functions
            return we(matchFunctions);
        }

        return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), a = se.tokenize = function (e, t) {
            var n, o, i, a, s, u, l, c = q[e + ' '];
            if (c) {
                return t ? 0 : c.slice(0);
            }
            for (s = e, u = [], l = r.preFilter; s;) {
                for (a in (n && !(o = B.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = false, (o = $.exec(s)) && (n = o.shift(), i.push({
                    value: n,
                    type: o[0].replace(F, ' ')
                }), s = s.slice(n.length)), r.filter))
                    !(o = G[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                        value: n,
                        type: a,
                        matches: o
                    }), s = s.slice(n.length));
                if (!n) {
                    break;
                }
            }
            return t ? s.length : s ? se.error(e) : q(e, u).slice(0);
        }, s = se.compile = function (e, t) {
            var n, o = [], i = [], s = C[e + ' '];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;) {
                    (s = tokenizeAndFilter(t[n]))[b] ? o.push(s) : i.push(s);
                }
                (s = C(e, function (e, t) {
                    var n = t.length > 0, o = e.length > 0, i = function (i, a, s, u, c) {
                        var f, h, y, m = 0, v = '0', x = i && [], b = [], w = l, j = i || o && r.find.TAG('*', c), T = S += null == w ? 1 : Math.random() || 0.1, q = j.length;
                        for (c && (l = a == p || a || c); v !== q && null != (f = j[v]); v++) {
                            if (o && f) {
                                for (h = 0, a || f.ownerDocument == p || (d(f), s = !g); y = e[h++];) {
                                    if (y(f, a || p, s)) {
                                        u.push(f);
                                        break;
                                    }
                                }
                                c && (S = T);
                            }
                            n && ((f = !y && f) && m--, i && x.push(f));
                        }
                        if (m += v, n && v !== m) {
                            for (h = 0; y = t[h++];) {
                                y(x, b, a, s);
                            }
                            if (i) {
                                if (m > 0) {
                                    for (; v--;) {
                                        x[v] || b[v] || (b[v] = D.call(u));
                                    }
                                }
                                b = Se(b);
                            }
                            O.apply(u, b);
                            c && !i && b.length > 0 && m + t.length > 1 && se.uniqueSort(u);
                        }
                        return c && (S = T, l = w), x;
                    };
                    return n ? le(i) : i;
                }(i, o))).selector = e;
            }
            return s;
        }, u = se.select = function (e, t, n, o) {
            var i, u, l, c, f, d = 'function' == typeof e && e, p = !o && a(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((u = p[0] = p[0].slice(0)).length > 2 && 'ID' === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) {
                        return n;
                    }
                    d && (t = t.parentNode);
                    e = e.slice(u.shift().value.length);
                }
                for (i = G.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);) {
                    if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), /[+~]/.test(u[0].type) && me(t.parentNode) || t))) {
                        if (u.splice(i, 1), !(e = o.length && xe(u))) {
                            return O.apply(n, o), n;
                        }
                        break;
                    }
                }
            }
            return (d || s(e, p))(o, t, !g, n, !t || /[+~]/.test(e) && me(t.parentNode) || t), n;
        }, n.sortStable = b.split('').sort(k).join('') === b, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement('fieldset'));
        }), ce(function (e) {
            return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
        }) || fe('type|href|height|width', function (e, t, n) {
            if (!n) {
                return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
            }
        }), n.attributes && ce(function (e) {
            return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
        }) || fe('value', function (e, t, n) {
            if (!n && 'input' === e.nodeName.toLowerCase()) {
                return e.defaultValue;
            }
        }), ce(function (e) {
            return null == e.getAttribute('disabled');
        }) || fe('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function (e, t, n) {
            var r;
            if (!n) {
                return true === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }
        }), se;
    }(e);
    varB.find = S;
    varB.expr = S.selectors;
    varB.expr[':'] = varB.expr.pseudos;
    varB.uniqueSort = varB.unique = S.uniqueSort;
    varB.text = S.getText;
    varB.isXMLDoc = S.isXML;
    varB.contains = S.contains;
    varB.escapeSelector = S.escape;
    var j = function (e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
            if (1 === e.nodeType) {
                if (o && varB(e).is(n)) {
                    break;
                }
                r.push(e);
            }
        }
        return r;
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
        }
        return n;
    }, q = varB.expr.match.needsContext;
    function C(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    ;
    function k(e, t, n) {
        return h(t) ? varB.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? varB.grep(e, function (e) {
            return e === t !== n;
        }) : 'string' != typeof t ? varB.grep(e, function (e) {
            return s.call(t, e) > -1 !== n;
        }) : varB.filter(t, e, n);
    }
    varB.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? varB.find.matchesSelector(r, e) ? [r] : [] : varB.find.matches(e, varB.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    };
    varB.fn.extend({
        find: function (e) {
            var t, n, r = this.length, o = this;
            if ('string' != typeof e) {
                return this.pushStack(varB(e).filter(function () {
                    for (t = 0; t < r; t++) {
                        if (varB.contains(o[t], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (n = this.pushStack([]), t = 0; t < r; t++) {
                varB.find(e, o[t], n);
            }
            return r > 1 ? varB.uniqueSort(n) : n;
        },
        filter: function (e) {
            return this.pushStack(k(this, e || [], false));
        },
        not: function (e) {
            return this.pushStack(k(this, e || [], true));
        },
        is: function (e) {
            return !!k(this, 'string' == typeof e && q.test(e) ? varB(e) : e || [], false).length;
        }
    });
    var A;
    (varB.fn.init = function (e, t, n) {
        var r, o;
        if (!e) {
            return this;
        }
        if (n = n || A, 'string' == typeof e) {
            if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [
                null,
                e,
                null
            ] : /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/.exec(e)) || !r[1] && t) {
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            }
            if (r[1]) {
                if (t = t instanceof varB ? t[0] : t, varB.merge(this, varB.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, true)), /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i.test(r[1]) && varB.isPlainObject(t)) {
                    for (r in t)
                        h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                }
                return this;
            }
            return (o = y.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(varB) : varB.makeArray(e, this);
    }).prototype = varB.fn;
    A = varB(y);
    ;
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {
            ;
        }
        return e;
    }
    varB.fn.extend({
        has: function (e) {
            var t = varB(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) {
                    if (varB.contains(this, t[e])) {
                        return true;
                    }
                }
            });
        },
        closest: function (e, t) {
            var n, r = 0, o = this.length, i = [], a = 'string' != typeof e && varB(e);
            if (!q.test(e)) {
                for (; r < o; r++) {
                    for (n = this[r]; n && n !== t; n = n.parentNode) {
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && varB.find.matchesSelector(n, e))) {
                            i.push(n);
                            break;
                        }
                    }
                }
            }
            return this.pushStack(i.length > 1 ? varB.uniqueSort(i) : i);
        },
        index: function (e) {
            return e ? 'string' == typeof e ? s.call(varB(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(varB.uniqueSort(varB.merge(this.get(), varB(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    varB.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
            return j(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
            return j(e, 'parentNode', n);
        },
        next: function (e) {
            return O(e, 'nextSibling');
        },
        prev: function (e) {
            return O(e, 'previousSibling');
        },
        nextAll: function (e) {
            return j(e, 'nextSibling');
        },
        prevAll: function (e) {
            return j(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
            return j(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
            return j(e, 'previousSibling', n);
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
            return T(e.firstChild);
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (C(e, 'template') && (e = e.content || e), varB.merge([], e.childNodes));
        }
    }, function (e, t) {
        varB.fn[e] = function (n, r) {
            var o = varB.map(this, t, n);
            return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (o = varB.filter(r, o)), this.length > 1 && (L[e] || varB.uniqueSort(o), /^(?:parents|prev(?:Until|All))/.test(e) && o.reverse()), this.pushStack(o);
        };
    });
    ;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function P(e, t, n, r) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    varB.Callbacks = function (e) {
        e = 'string' == typeof e ? function (e) {
            var t = { n: true };
            return varB.each(e.match(/[^\x20\t\r\n\f]+/g) || [], function (e, n) {
                ;
            }), t;
        }(e) : varB.extend({}, e);
        var t, n, r, o, i = [], a = [], s = -1, u = function () {
            for (o = o || e.once, r = t = true; a.length; s = -1) {
                for (n = a.shift(); ++s < i.length;) {
                    false === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = false);
                }
            }
            e.memory || (n = false);
            t = false;
            o && (i = n ? [] : '');
        }, l = {
            add: function () {
                return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                    varB.each(n, function (n, r) {
                        h(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && 'string' !== x(r) && t(r);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove: function () {
                return varB.each(arguments, function (e, t) {
                    for (var n; (n = varB.inArray(t, i, n)) > -1;) {
                        i.splice(n, 1);
                        n <= s && s--;
                    }
                }), this;
            },
            has: function (e) {
                return e ? varB.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
                return i && (i = []), this;
            },
            disable: function () {
                return o = a = [], i = n = '', this;
            },
            disabled: function () {
                return !i;
            },
            lock: function () {
                return o = a = [], n || t || (i = n = ''), this;
            },
            locked: function () {
                return !!o;
            },
            fireWith: function (e, n) {
                return o || (n = [
                    e,
                    (n = n || []).slice ? n.slice() : n
                ], a.push(n), t || u()), this;
            },
            fire: function () {
                return l.fireWith(this, arguments), this;
            },
            fired: function () {
                return !!r;
            }
        };
        return l;
    };
    varB.extend({
        Deferred: function (t) {
            var n = [
                [
                    'notify',
                    'progress',
                    varB.Callbacks('memory'),
                    varB.Callbacks('memory'),
                    2
                ],
                [
                    'resolve',
                    'done',
                    varB.Callbacks('once memory'),
                    varB.Callbacks('once memory'),
                    0,
                    'resolved'
                ],
                [
                    'reject',
                    'fail',
                    varB.Callbacks('once memory'),
                    varB.Callbacks('once memory'),
                    1,
                    'rejected'
                ]
            ], r = 'pending', o = {
                state: function () {
                    return r;
                },
                always: function () {
                    return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                    return o.then(null, e);
                },
                pipe: function () {
                    var e = arguments;
                    return varB.Deferred(function (t) {
                        varB.each(n, function (n, r) {
                            var o = h(e[r[4]]) && e[r[4]];
                            i[r[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + 'With'](this, o ? [e] : arguments);
                            });
                        });
                        e = null;
                    }).promise();
                },
                then: function (t, r, o) {
                    var i = 0;
                    function a(t, n, r, o) {
                        return function () {
                            var s = this, u = arguments, l = function () {
                                var e, l;
                                if (!(t < i)) {
                                    if ((e = r.apply(s, u)) === n.promise()) {
                                        throw new TypeError('Thenable self-resolution');
                                    }
                                    l = e && ('object' == typeof e || 'function' == typeof e) && e.then;
                                    h(l) ? o ? l.call(e, a(i, n, R, o), a(i, n, M, o)) : (i++, l.call(e, a(i, n, R, o), a(i, n, M, o), a(i, n, R, n.notifyWith))) : (r !== R && (s = void 0, u = [e]), (o || n.resolveWith)(s, u));
                                }
                            }, c = o ? l : function () {
                                try {
                                    l();
                                } catch (e) {
                                    varB.Deferred.exceptionHook && varB.Deferred.exceptionHook(e, c.stackTrace);
                                    t + 1 >= i && (r !== M && (s = void 0, u = [e]), n.rejectWith(s, u));
                                }
                            };
                            t ? c() : (varB.Deferred.getStackHook && (c.stackTrace = varB.Deferred.getStackHook()), e.setTimeout(c));
                        };
                    }
                    return varB.Deferred(function (e) {
                        n[0][3].add(a(0, e, h(o) ? o : R, e.notifyWith));
                        n[1][3].add(a(0, e, h(t) ? t : R));
                        n[2][3].add(a(0, e, h(r) ? r : M));
                    }).promise();
                },
                promise: function (e) {
                    return null != e ? varB.extend(e, o) : o;
                }
            }, i = { e: arguments.length > 1 ? o.call(arguments) : n };
            return varB.each(n, function (e, t) {
                var a = t[2], s = t[5];
                o[t[1]] = a.add;
                s && a.add(function () {
                    r = s;
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock);
                a.add(t[3].fire);
                i[t[0]] = function () {
                    return i[t[0] + 'With'](this === i ? void 0 : this, arguments), this;
                };
                i[t[0] + 'With'] = a.fireWith;
            }), o.promise(i), t && t.call(i, i), i;
        },
        when: function (e) {
            var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = varB.Deferred(), s = function (e) {
                return function (n) {
                    r[e] = this;
                    ;
                    --t || a.resolveWith(r, i);
                };
            };
            if (t <= 1 && (P(e, a.done(s(n)).resolve, a.reject, !t), 'pending' === a.state() || h(i[n] && i[n].then))) {
                return a.then();
            }
            for (; n--;) {
                P(i[n], s(n), a.reject);
            }
            return a.promise();
        }
    });
    ;
    varB.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/.test(t.name) && e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
    };
    varB.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    };
    var W = varB.Deferred();
    function z() {
        y.removeEventListener('DOMContentLoaded', z);
        e.removeEventListener('load', z);
        varB.ready();
    }
    varB.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            varB.readyException(e);
        }), this;
    };
    varB.extend({
        isReady: false,
        readyWait: 1,
        ready: function (e) {
            (true === e ? --varB.readyWait : varB.isReady) || (varB.isReady = true, true !== e && --varB.readyWait > 0 || W.resolveWith(y, [varB]));
        }
    });
    varB.ready.then = W.then;
    'complete' === y.readyState || 'loading' !== y.readyState && !y.documentElement.doScroll ? e.setTimeout(varB.ready) : (y.addEventListener('DOMContentLoaded', z), e.addEventListener('load', z));
    var _ = function (e, t, n, r, o, i, a) {
        var s = 0, u = e.length, l = null == n;
        if ('object' === x(n)) {
            for (s in (o = true, n))
                _(e, t, s, n[s], true, i, a);
        } else {
            if (void 0 !== r && (o = true, h(r) || (a = true), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(varB(e), n);
            })), t)) {
                for (; s < u; s++) {
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                }
            }
        }
        return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
    };
    function $(e, t) {
        return t.toUpperCase();
    }
    function U(e) {
        return e.replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, $);
    }
    var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function V() {
        this.expando = varB.expando + V.uid++;
    }
    V.uid = 1;
    V.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: true
            }))), t;
        },
        set: function (e, t, n) {
            var r, o = this.cache(e);
            if ('string' == typeof t) {
                o[U(t)] = n;
            } else {
                for (r in t)
                    o[U(r)] = t[r];
            }
            return o;
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
        },
        access: function (e, t, n) {
            return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(/[^\x20\t\r\n\f]+/g) || []).length;
                    for (; n--;) {
                        delete r[t[n]];
                    }
                }
                (void 0 === t || varB.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !varB.isEmptyObject(t);
        }
    };
    var G = new V(), Y = new V();
    function J(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) {
            if (r = 'data-' + t.replace(/[A-Z]/g, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/.test(e) ? JSON.parse(e) : e);
                    }(n);
                } catch (e) {
                }
                Y.set(e, t, n);
            } else {
                n = void 0;
            }
        }
        return n;
    }
    varB.extend({
        hasData: function (e) {
            return Y.hasData(e) || G.hasData(e);
        },
        data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        removeData: function (e, t) {
            Y.remove(e, t);
        },
        _data: function (e, t, n) {
            return G.access(e, t, n);
        },
        _removeData: function (e, t) {
            G.remove(e, t);
        }
    });
    varB.fn.extend({
        data: function (e, t) {
            var n, r, o, i = this[0], a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = Y.get(i), 1 === i.nodeType && !G.get(i, 'hasDataAttrs'))) {
                    for (n = a.length; n--;) {
                        a[n] && 0 === (r = a[n].name).indexOf('data-') && (r = U(r.slice(5)), J(i, r, o[r]));
                    }
                    G.set(i, 'hasDataAttrs', true);
                }
                return o;
            }
            return 'object' == typeof e ? this.each(function () {
                Y.set(this, e);
            }) : _(this, function (t) {
                var n;
                if (i && void 0 === t) {
                    return void 0 !== (n = Y.get(i, e)) ? n : void 0 !== (n = J(i, e)) ? n : void 0;
                }
                this.each(function () {
                    Y.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, true);
        },
        removeData: function (e) {
            return this.each(function () {
                Y.remove(this, e);
            });
        }
    });
    varB.extend({
        queue: function (e, t, n) {
            var r;
            if (e) {
                return t = (t || 'fx') + 'queue', r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, varB.makeArray(n)) : r.push(n)), r || [];
            }
        },
        dequeue: function (e, t) {
            t = t || 'fx';
            var n = varB.queue(e, t), r = n.length, o = n.shift(), i = varB._queueHooks(e, t);
            'inprogress' === o && (o = n.shift(), r--);
            o && ('fx' === t && n.unshift('inprogress'), delete i.stop, o.call(e, function () {
                varB.dequeue(e, t);
            }, i));
            !r && i && i.empty.fire();
        },
        _queueHooks: function (e, t) {
            var n = t + 'queueHooks';
            return G.get(e, n) || G.access(e, n, {
                empty: varB.Callbacks('once memory').add(function () {
                    G.remove(e, [
                        t + 'queue',
                        n
                    ]);
                })
            });
        }
    });
    varB.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? varB.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = varB.queue(this, e, t);
                varB._queueHooks(this, e);
                'fx' === e && 'inprogress' !== n[0] && varB.dequeue(this, e);
            });
        },
        dequeue: function (e) {
            return this.each(function () {
                varB.dequeue(this, e);
            });
        },
        clearQueue: function (e) {
            return this.queue(e || 'fx', []);
        },
        promise: function (e, t) {
            var n, r = 1, o = varB.Deferred(), i = this, a = this.length, s = function () {
                --r || o.resolveWith(i, [i]);
            };
            for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; a--;) {
                (n = G.get(i[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
            }
            return s(), o.promise(t);
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ee = new RegExp('^(?:([+-])=|)(' + Z + ')([a-z%]*)$', 'i'), te = [
        'Top',
        'Right',
        'Bottom',
        'Left'
    ], ne = y.documentElement, re = function (e) {
        return varB.contains(e.ownerDocument, e);
    };
    ne.getRootNode && (re = function (e) {
        return varB.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });
    var ie = function (e, t) {
        return 'none' === (e = t || e).style.display || '' === e.style.display && re(e) && 'none' === varB.css(e, 'display');
    };
    function ae(e, t, n, r) {
        var o, i, a = 20, s = r ? function () {
            return r.cur();
        } : function () {
            return varB.css(e, t, '');
        }, u = s(), l = n && n[3] || (varB.cssNumber[t] ? '' : 'px'), c = e.nodeType && (varB.cssNumber[t] || 'px' !== l && +u) && ee.exec(varB.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) {
                varB.style(e, t, c + l);
                (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0);
                c /= i;
            }
            c *= 2;
            varB.style(e, t, c + l);
            n = n || [];
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o;
    }
    var se = {};
    function ue(e) {
        var t, n = e.ownerDocument, r = e.nodeName, o = se[r];
        return o || (t = n.body.appendChild(n.createElement(r)), o = varB.css(t, 'display'), t.parentNode.removeChild(t), 'none' === o && (o = 'block'), se[r] = o, o);
    }
    function le(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++) {
            (r = e[i]).style && (n = r.style.display, t ? ('none' === n && (o[i] = G.get(r, 'display') || null, o[i] || (r.style.display = '')), '' === r.style.display && ie(r) && (o[i] = ue(r))) : 'none' !== n && (o[i] = 'none', G.set(r, 'display', n)));
        }
        for (i = 0; i < a; i++) {
            null != o[i] && (e[i].style.display = o[i]);
        }
        return e;
    }
    varB.fn.extend({
        show: function () {
            return le(this, true);
        },
        hide: function () {
            return le(this);
        },
        toggle: function (e) {
            return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ie(this) ? varB(this).show() : varB(this).hide();
            });
        }
    });
    var ce, fe;
    ce = y.createDocumentFragment().appendChild(y.createElement('div'));
    (fe = y.createElement('input')).setAttribute('type', 'radio');
    fe.setAttribute('checked', 'checked');
    fe.setAttribute('name', 't');
    ce.appendChild(fe);
    ;
    ce.innerHTML = '<textarea>x</textarea>';
    ;
    ce.innerHTML = '<option></option>';
    ;
    var ge = {
        thead: [
            1,
            '<table>',
            '</table>'
        ],
        col: [
            2,
            '<table><colgroup>',
            '</colgroup></table>'
        ],
        tr: [
            2,
            '<table><tbody>',
            '</tbody></table>'
        ],
        td: [
            3,
            '<table><tbody><tr>',
            '</tr></tbody></table>'
        ],
        _default: [
            0,
            '',
            ''
        ]
    };
    function ye(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [], void 0 === t || t && C(e, t) ? varB.merge([e], n) : n;
    }
    function me(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            G.set(e[n], 'globalEval', !t || G.get(t[n], 'globalEval'));
        }
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead;
    ge.th = ge.td;
    p.option || (ge.optgroup = ge.option = [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
    ]);
    ;
    function xe(e, t, n, r, o) {
        for (var i, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) {
            if ((i = e[p]) || 0 === i) {
                if ('object' === x(i)) {
                    varB.merge(d, i.nodeType ? [i] : i);
                } else {
                    if (/<|&#?\w+;/.test(i)) {
                        for (a = a || f.appendChild(t.createElement('div')), s = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(i) || [
                            '',
                            ''
                        ])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + varB.htmlPrefilter(i) + u[2], c = u[0]; c--;) {
                            a = a.lastChild;
                        }
                        varB.merge(d, a.childNodes);
                        (a = f.firstChild).textContent = '';
                    } else {
                        d.push(t.createTextNode(i));
                    }
                }
            }
        }
        for (f.textContent = '', p = 0; i = d[p++];) {
            if (r && varB.inArray(i, r) > -1) {
                o && o.push(i);
            } else {
                if (l = re(i), a = ye(f.appendChild(i), 'script'), l && me(a), n) {
                    for (c = 0; i = a[c++];) {
                        /^$|^module$|\/(?:java|ecma)script/i.test(i.type || '') && n.push(i);
                    }
                }
            }
        }
        return f;
    }
    ;
    function we() {
        return true;
    }
    function Se() {
        return false;
    }
    function je(e, t) {
        return e === function () {
            try {
                return y.activeElement;
            } catch (e) {
            }
        }() == ('focus' === t);
    }
    function Te(e, t, n, r, o, i) {
        var a, s;
        if ('object' == typeof t) {
            for (s in ('string' != typeof n && (r = r || n, n = void 0), t))
                Te(e, s, n, r, t[s], i);
            return e;
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ('string' == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), false === o) {
            o = Se;
        } else {
            if (!o) {
                return e;
            }
        }
        return 1 === i && (a = o, (o = function (e) {
            return varB().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = varB.guid++)), e.each(function () {
            varB.event.add(this, t, o, r, n);
        });
    }
    function qe(e, t, n) {
        n ? (G.set(e, t, false), varB.event.add(e, t, {
            namespace: false,
            handler: function (e) {
                var r, i, a = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length) {
                        (varB.event.special[t] || {}).delegateType && e.stopPropagation();
                    } else {
                        if (a = o.call(arguments), G.set(this, t, a), r = n(this, t), this[t](), a !== (i = G.get(this, t)) || r ? G.set(this, t, false) : i = {}, a !== i) {
                            return e.stopImmediatePropagation(), e.preventDefault(), i && i.value;
                        }
                    }
                } else {
                    a.length && (G.set(this, t, { value: varB.event.trigger(varB.extend(a[0], varB.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation());
                }
            }
        })) : void 0 === G.get(e, t) && varB.event.add(e, t, we);
    }
    varB.event = {
        global: {},
        add: function (e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, y = G.get(e);
            if (X(e)) {
                for (n.handler && (n = (i = n).handler, o = i.selector), o && varB.find.matchesSelector(ne, o), n.guid || (n.guid = varB.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function (t) {
                    return void 0 !== varB && varB.event.triggered !== t.type ? varB.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t = (t || '').match(/[^\x20\t\r\n\f]+/g) || ['']).length; l--;) {
                    p = g = (s = /^([^.]*)(?:\.(.+)|)/.exec(t[l]) || [])[1];
                    h = (s[2] || '').split('.').sort();
                    p && (f = varB.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = varB.event.special[p] || {}, c = varB.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && varB.expr.match.needsContext.test(o),
                        namespace: h.join('.')
                    }, i), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && false !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), varB.event.global[p] = true);
                }
            }
        },
        remove: function (e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, y = G.hasData(e) && G.get(e);
            if (y && (u = y.events)) {
                for (l = (t = (t || '').match(/[^\x20\t\r\n\f]+/g) || ['']).length; l--;) {
                    if (p = g = (s = /^([^.]*)(?:\.(.+)|)/.exec(t[l]) || [])[1], h = (s[2] || '').split('.').sort(), p) {
                        for (f = varB.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = i = d.length; i--;) {
                            c = d[i];
                            !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        }
                        a && !d.length && (f.teardown && false !== f.teardown.call(e, h, y.handle) || varB.removeEvent(e, p, y.handle), delete u[p]);
                    } else {
                        for (p in u)
                            varB.event.remove(e, p + t[l], n, r, true);
                    }
                }
                varB.isEmptyObject(u) && G.remove(e, 'handle events');
            }
        },
        dispatch: function (e) {
            var t, n, r, o, i, a, s = new Array(arguments.length), u = varB.event.fix(e), l = (G.get(this, 'events') || Object.create(null))[u.type] || [], c = varB.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) {
                s[t] = arguments[t];
            }
            if (u.delegateTarget = this, !c.preDispatch || false !== c.preDispatch.call(this, u)) {
                for (a = varB.event.handlers.call(this, u, l), t = 0; (o = a[t++]) && !u.isPropagationStopped();) {
                    for (u.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) {
                        u.rnamespace && false !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((varB.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && false === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !('click' === e.type && e.button >= 1)) {
                for (; l !== this; l = l.parentNode || this) {
                    if (1 === l.nodeType && ('click' !== e.type || true !== l.disabled)) {
                        for (i = [], a = {}, n = 0; n < u; n++) {
                            void 0 === a[o = (r = t[n]).selector + ' '] && (a[o] = r.needsContext ? varB(o, this).index(l) > -1 : varB.find(o, this, null, [l]).length);
                            a[o] && i.push(r);
                        }
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        });
                    }
                }
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(varB.Event.prototype, e, {
                enumerable: true,
                configurable: true,
                get: h(t) ? function () {
                    if (this.originalEvent) {
                        return t(this.originalEvent);
                    }
                } : function () {
                    if (this.originalEvent) {
                        return this.originalEvent[e];
                    }
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: t
                    });
                }
            });
        },
        fix: function (e) {
            return e[varB.expando] ? e : new varB.Event(e);
        },
        special: {
            load: { noBubble: true },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return /^(?:checkbox|radio)$/i.test(t.type) && t.click && C(t, 'input') && qe(t, 'click', we), false;
                },
                trigger: function (e) {
                    var t = this || e;
                    return /^(?:checkbox|radio)$/i.test(t.type) && t.click && C(t, 'input') && qe(t, 'click'), true;
                },
                _default: function (e) {
                    var t = e.target;
                    return /^(?:checkbox|radio)$/i.test(t.type) && t.click && C(t, 'input') && G.get(t, 'click') || C(t, 'a');
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    };
    varB.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    };
    varB.Event = function (e, t) {
        if (!(this instanceof varB.Event)) {
            return new varB.Event(e, t);
        }
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && false === e.returnValue ? we : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e;
        t && varB.extend(this, t);
        this.timeStamp = e && e.timeStamp || Date.now();
        this[varB.expando] = true;
    };
    varB.Event.prototype = {
        constructor: varB.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: false,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we;
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we;
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we;
            e && !this.isSimulated && e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    varB.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, varB.event.addProp);
    varB.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (e, t) {
        varB.event.special[e] = {
            setup: function () {
                return qe(this, e, je), false;
            },
            trigger: function () {
                return qe(this, e), true;
            },
            _default: function () {
                return true;
            },
            delegateType: t
        };
    });
    varB.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (e, t) {
        varB.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = e.relatedTarget, o = e.handleObj;
                return r && (r === this || varB.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
        };
    });
    varB.fn.extend({
        on: function (e, t, n, r) {
            return Te(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
            return Te(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) {
                return r = e.handleObj, varB(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
            }
            if ('object' == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this;
            }
            return false !== t && 'function' != typeof t || (n = t, t = void 0), false === n && (n = Se), this.each(function () {
                varB.event.remove(this, e, n, t);
            });
        }
    });
    ;
    function Ae(e, t) {
        return C(e, 'table') && C(11 !== t.nodeType ? t : t.firstChild, 'tr') && varB(e).children('tbody')[0] || e;
    }
    function Ne(e) {
        return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
    }
    function De(e) {
        return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute('type'), e;
    }
    function Le(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (s = G.get(e).events)) {
                for (o in (G.remove(t, 'handle events'), s))
                    for (n = 0, r = s[o].length; n < r; n++) {
                        varB.event.add(t, o, s[o][n]);
                    }
            }
            Y.hasData(e) && (i = Y.access(e), a = varB.extend({}, i), Y.set(t, a));
        }
    }
    function Oe(e, t, n, r) {
        t = i(t);
        var o, a, s, u, l, c, f = 0, d = e.length, g = d - 1, y = t[0], m = h(y);
        if (m || d > 1 && 'string' == typeof y && !p.checkClone && /checked\s*(?:[^=]|=\s*.checked.)/i.test(y)) {
            return e.each(function (o) {
                var i = e.eq(o);
                m && (t[0] = y.call(this, o, i.html()));
                Oe(i, t, n, r);
            });
        }
        if (d && (a = (o = xe(t, e[0].ownerDocument, false, e, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
            for (u = (s = varB.map(ye(o, 'script'), Ne)).length; f < d; f++) {
                l = o;
                f !== g && (l = varB.clone(l, true, true), u && varB.merge(s, ye(l, 'script')));
                n.call(e[f], l, f);
            }
            if (u) {
                for (c = s[s.length - 1].ownerDocument, varB.map(s, De), f = 0; f < u; f++) {
                    l = s[f];
                    /^$|^module$|\/(?:java|ecma)script/i.test(l.type || '') && !G.access(l, 'globalEval') && varB.contains(c, l) && (l.src && 'module' !== (l.type || '').toLowerCase() ? varB._evalUrl && !l.noModule && varB._evalUrl(l.src, { nonce: l.nonce || l.getAttribute('nonce') }, c) : v(l.textContent.replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ''), l, c));
                }
            }
        }
        return e;
    }
    function He(e, t, n) {
        for (var r, o = t ? varB.filter(t, e) : e, i = 0; null != (r = o[i]); i++) {
            n || 1 !== r.nodeType || varB.cleanData(ye(r));
            r.parentNode && (n && re(r) && me(ye(r, 'script')), r.parentNode.removeChild(r));
        }
        return e;
    }
    varB.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r, o, i, a, s, u, l, c = e.cloneNode(true), f = re(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || varB.isXMLDoc(e))) {
                for (a = ye(c), r = 0, o = (i = ye(e)).length; r < o; r++) {
                    s = i[r];
                    u = a[r];
                    void 0;
                    'input' === (l = u.nodeName.toLowerCase()) && /^(?:checkbox|radio)$/i.test(s.type) ? u.checked = s.checked : 'input' !== l && 'textarea' !== l || (u.defaultValue = s.defaultValue);
                }
            }
            if (t) {
                if (n) {
                    for (i = i || ye(e), a = a || ye(c), r = 0, o = i.length; r < o; r++) {
                        Le(i[r], a[r]);
                    }
                } else {
                    Le(e, c);
                }
            }
            return (a = ye(c, 'script')).length > 0 && me(a, !f && ye(e, 'script')), c;
        },
        cleanData: function (e) {
            for (var t, n, r, o = varB.event.special, i = 0; void 0 !== (n = e[i]); i++) {
                if (X(n)) {
                    if (t = n[G.expando]) {
                        if (t.events) {
                            for (r in t.events)
                                o[r] ? varB.event.remove(n, r) : varB.removeEvent(n, r, t.handle);
                        }
                        n[G.expando] = void 0;
                    }
                    n[Y.expando] && (n[Y.expando] = void 0);
                }
            }
        }
    });
    varB.fn.extend({
        detach: function (e) {
            return He(this, e, true);
        },
        remove: function (e) {
            return He(this, e);
        },
        text: function (e) {
            return _(this, function (e) {
                return void 0 === e ? varB.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function () {
            return Oe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e);
            });
        },
        prepend: function () {
            return Oe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function () {
            return Oe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function () {
            return Oe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && (varB.cleanData(ye(e, false)), e.textContent = '');
            }
            return this;
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return varB.clone(this, e, t);
            });
        },
        html: function (e) {
            return _(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) {
                    return t.innerHTML;
                }
                if ('string' == typeof e && !/<script|<style|<link/i.test(e) && !ge[(/<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(e) || [
                    '',
                    ''
                ])[1].toLowerCase()]) {
                    e = varB.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) {
                            1 === (t = this[n] || {}).nodeType && (varB.cleanData(ye(t, false)), t.innerHTML = e);
                        }
                        t = 0;
                    } catch (e) {
                    }
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function () {
            var e = [];
            return Oe(this, arguments, function (t) {
                var n = this.parentNode;
                varB.inArray(this, e) < 0 && (varB.cleanData(ye(this)), n && n.replaceChild(t, this));
            }, e);
        }
    });
    varB.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (e, t) {
        varB.fn[e] = function (e) {
            for (var n, r = [], o = varB(e), i = o.length - 1, s = 0; s <= i; s++) {
                n = s === i ? this : this.clone(true);
                varB(o[s])[t](n);
                a.apply(r, n.get());
            }
            return this.pushStack(r);
        };
    });
    var Re = new RegExp('^(' + Z + ')(?!px)[a-z%]+$', 'i'), Me = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    }, Pe = function (e, t, n) {
        var r, o, i = {};
        for (o in t)
            i[o] = e.style[o], e.style[o] = t[o];
        for (o in (r = n.call(e), t))
            e.style[o] = i[o];
        return r;
    }, Ie = new RegExp(te.join('|'), 'i');
    function We(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || Me(e)) && ('' !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = varB.style(e, t)), !p.pixelBoxStyles() && Re.test(a) && Ie.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + '' : a;
    }
    function ze(e, t) {
        return {
            get: function () {
                if (!e()) {
                    return (this.get = t).apply(this, arguments);
                }
                delete this.get;
            }
        };
    }
    !function () {
        function t() {
            if (c) {
                l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0';
                c.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%';
                ne.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = '1%' !== t.top;
                u = 12 === n(t.marginLeft);
                c.style.right = '60%';
                a = 36 === n(t.right);
                o = 36 === n(t.width);
                c.style.position = 'absolute';
                i = 12 === n(c.offsetWidth / 3);
                ne.removeChild(l);
                c = null;
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var r, o, i, a, s, u, l = y.createElement('div'), c = y.createElement('div');
        c.style && (c.style.backgroundClip = 'content-box', c.cloneNode(true).style.backgroundClip = '', p.clearCloneStyle = 'content-box' === c.style.backgroundClip, varB.extend(p, {
            boxSizingReliable: function () {
                return t(), o;
            },
            pixelBoxStyles: function () {
                return t(), a;
            },
            pixelPosition: function () {
                return t(), r;
            },
            reliableMarginLeft: function () {
                return t(), u;
            },
            scrollboxSize: function () {
                return t(), i;
            },
            reliableTrDimensions: function () {
                var t, n, r, o;
                return null == s && (t = y.createElement('table'), n = y.createElement('tr'), r = y.createElement('div'), t.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate', n.style.cssText = 'border:1px solid', n.style.height = '1px', r.style.height = '9px', r.style.display = 'block', ne.appendChild(t).appendChild(n).appendChild(r), o = e.getComputedStyle(n), s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, ne.removeChild(t)), s;
            }
        }));
    }();
    var _e = [
        'Webkit',
        'Moz',
        'ms'
    ], Fe = y.createElement('div').style, Be = {};
    function $e(e) {
        var t = varB.cssProps[e] || Be[e];
        return t || (e in Fe ? e : Be[e] = function (e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--;) {
                if ((e = _e[n] + t) in Fe) {
                    return e;
                }
            }
        }(e) || e);
    }
    ;
    function Ye(e, t, n) {
        var r = ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function Qe(e, t, n, r, o, i) {
        var a = 'width' === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? 'border' : 'content')) {
            return 0;
        }
        for (; a < 4; a += 2) {
            'margin' === n && (u += varB.css(e, n + te[a], true, o));
            r ? ('content' === n && (u -= varB.css(e, 'padding' + te[a], true, o)), 'margin' !== n && (u -= varB.css(e, 'border' + te[a] + 'Width', true, o))) : (u += varB.css(e, 'padding' + te[a], true, o), 'padding' !== n ? u += varB.css(e, 'border' + te[a] + 'Width', true, o) : s += varB.css(e, 'border' + te[a] + 'Width', true, o));
        }
        return !r && i >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - i - u - s - 0.5)) || 0), u;
    }
    function Ke(e, t, n) {
        var r = Me(e), o = (!p.boxSizingReliable() || n) && 'border-box' === varB.css(e, 'boxSizing', false, r), i = o, a = We(e, t, r), s = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
            if (!n) {
                return a;
            }
            a = 'auto';
        }
        return (!p.boxSizingReliable() && o || !p.reliableTrDimensions() && C(e, 'tr') || 'auto' === a || !parseFloat(a) && 'inline' === varB.css(e, 'display', false, r)) && e.getClientRects().length && (o = 'border-box' === varB.css(e, 'boxSizing', false, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (o ? 'border' : 'content'), i, r, a) + 'px';
    }
    function Je(e, t, n, r, o) {
        return new Je.prototype.init(e, t, n, r, o);
    }
    varB.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, 'opacity');
                        return '' === n ? '1' : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = U(t), u = /^--/.test(t), l = e.style;
                if (u || (t = $e(s)), a = varB.cssHooks[t] || varB.cssHooks[s], void 0 === n) {
                    return a && 'get' in a && void 0 !== (o = a.get(e, false, r)) ? o : l[t];
                }
                'string' === (i = typeof n) && (o = ee.exec(n)) && o[1] && (n = ae(e, t, o), i = 'number');
                null != n && n == n && ('number' !== i || u || (n += o && o[3] || (varB.cssNumber[s] ? '' : 'px')), p.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function (e, t, n, r) {
            var o, i, a, s = U(t);
            return /^--/.test(t) || (t = $e(s)), (a = varB.cssHooks[t] || varB.cssHooks[s]) && 'get' in a && (o = a.get(e, true, n)), void 0 === o && (o = We(e, t, r)), 'normal' === o && t in Ge && (o = Ge[t]), '' === n || n ? (i = parseFloat(o), true === n || isFinite(i) ? i || 0 : o) : o;
        }
    });
    varB.each([
        'height',
        'width'
    ], function (e, t) {
        varB.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) {
                    return !/^(none|table(?!-c[ea]).+)/.test(varB.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, r) : Pe(e, Ve, function () {
                        return Ke(e, t, r);
                    });
                }
            },
            set: function (e, n, r) {
                var o, i = Me(e), a = !p.scrollboxSize() && 'absolute' === i.position, s = (a || r) && 'border-box' === varB.css(e, 'boxSizing', false, i), u = r ? Qe(e, t, r, s, i) : 0;
                return s && a && (u -= Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Qe(e, t, 'border', false, i) - 0.5)), u && (o = ee.exec(n)) && 'px' !== (o[3] || 'px') && (e.style[t] = n, n = varB.css(e, t)), Ye(0, n, u);
            }
        };
    });
    varB.cssHooks.marginLeft = ze(p.reliableMarginLeft, function (e, t) {
        if (t) {
            return (parseFloat(We(e, 'marginLeft')) || e.getBoundingClientRect().left - Pe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
            })) + 'px';
        }
    });
    varB.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (e, t) {
        varB.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, o = {}, i = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++) {
                    o[e + te[r] + t] = i[r] || i[r - 2] || i[0];
                }
                return o;
            }
        };
        'margin' !== e && (varB.cssHooks[e + t].set = Ye);
    });
    varB.fn.extend({
        css: function (e, t) {
            return _(this, function (e, t, n) {
                var r, o, i = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), o = t.length; a < o; a++) {
                        i[t[a]] = varB.css(e, t[a], false, r);
                    }
                    return i;
                }
                return void 0 !== n ? varB.style(e, t, n) : varB.css(e, t);
            }, e, t, arguments.length > 1);
        }
    });
    varB.Tween = Je;
    Je.prototype = {
        constructor: Je,
        init: function (e, t, n, r, o, i) {
            this.elem = e;
            this.prop = n;
            this.easing = o || varB.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = r;
            this.unit = i || (varB.cssNumber[n] ? '' : 'px');
        },
        cur: function () {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
        },
        run: function (e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = varB.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
        }
    };
    Je.prototype.init.prototype = Je.prototype;
    Je.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = varB.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
            },
            set: function (e) {
                varB.fx.step[e.prop] ? varB.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !varB.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : varB.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    };
    Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    };
    varB.easing = {
        linear: function (e) {
            return e;
        },
        swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing'
    };
    varB.fx = Je.prototype.init;
    varB.fx.step = {};
    var Ze, et;
    function rt() {
        et && (false === y.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, varB.fx.interval), varB.fx.tick());
    }
    function ot() {
        return e.setTimeout(function () {
            Ze = void 0;
        }), Ze = Date.now();
    }
    function it(e, t) {
        var n, r = 0, o = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) {
            o['margin' + (n = te[r])] = o['padding' + n] = e;
        }
        return t && (o.opacity = o.width = e), o;
    }
    function at(e, t, n) {
        for (var r, o = (st.tweeners[t] || []).concat(st.tweeners['*']), i = 0, a = o.length; i < a; i++) {
            if (r = o[i].call(n, t, e)) {
                return r;
            }
        }
    }
    function st(e, t, n) {
        var r, o, i = 0, a = st.prefilters.length, s = varB.Deferred().always(function () {
            delete u.elem;
        }), u = function () {
            if (o) {
                return false;
            }
            for (var t = Ze || ot(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) {
                l.tweens[i].run(r);
            }
            return s.notifyWith(e, [
                l,
                r,
                n
            ]), r < 1 && a ? n : (a || s.notifyWith(e, [
                l,
                1,
                0
            ]), s.resolveWith(e, [l]), false);
        }, l = s.promise({
            elem: e,
            props: varB.extend({}, t),
            opts: varB.extend(true, {
                specialEasing: {},
                easing: varB.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || ot(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = varB.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (o) {
                    return this;
                }
                for (o = true; n < r; n++) {
                    l.tweens[n].run(1);
                }
                return t ? (s.notifyWith(e, [
                    l,
                    1,
                    0
                ]), s.resolveWith(e, [
                    l,
                    t
                ])) : s.rejectWith(e, [
                    l,
                    t
                ]), this;
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, o, i, a;
            for (n in e)
                if (o = t[r = U(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = varB.cssHooks[r]) && 'expand' in a) {
                    for (n in (i = a.expand(i), delete e[r], i))
                        n in e || (e[n] = i[n], t[n] = o);
                } else {
                    t[r] = o;
                }
        }(c, l.opts.specialEasing); i < a; i++) {
            if (r = st.prefilters[i].call(l, e, c, l.opts)) {
                return h(r.stop) && (varB._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            }
        }
        return varB.map(c, at, l), h(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), varB.fx.timer(varB.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    varB.Animation = varB.extend(st, {
        tweeners: {
            '*': [function (e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, ee.exec(t), n), n;
            }]
        },
        tweener: function (e, t) {
            h(e) ? (t = e, e = ['*']) : e = e.match(/[^\x20\t\r\n\f]+/g);
            for (var n, r = 0, o = e.length; r < o; r++) {
                n = e[r];
                st.tweeners[n] = st.tweeners[n] || [];
                st.tweeners[n].unshift(t);
            }
        },
        prefilters: [function (e, t, n) {
            var r, o, i, a, s, u, l, c, f = 'width' in t || 'height' in t, d = this, p = { r: y && y[r] || varB.style(e, r) }, h = e.style, g = e.nodeType && ie(e), y = G.get(e, 'fxshow');
            for (r in (n.queue || (null == (a = varB._queueHooks(e, 'fx')).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s();
            }), a.unqueued++, d.always(function () {
                d.always(function () {
                    a.unqueued--;
                    varB.queue(e, 'fx').length || a.empty.fire();
                });
            })), t))
                if (o = t[r], /^(?:toggle|show|hide)$/.test(o)) {
                    if (delete t[r], i = i || 'toggle' === o, o === (g ? 'hide' : 'show')) {
                        if ('show' !== o || !y || void 0 === y[r]) {
                            continue;
                        }
                        g = true;
                    }
                    ;
                }
            if ((u = !varB.isEmptyObject(t)) || !varB.isEmptyObject(p)) {
                for (r in (f && 1 === e.nodeType && (n.overflow = [
                    h.overflow,
                    h.overflowX,
                    h.overflowY
                ], null == (l = y && y.display) && (l = G.get(e, 'display')), 'none' === (c = varB.css(e, 'display')) && (l ? c = l : (le([e], true), l = e.style.display || l, c = varB.css(e, 'display'), le([e]))), ('inline' === c || 'inline-block' === c && null != l) && 'none' === varB.css(e, 'float') && (u || (d.done(function () {
                    h.display = l;
                }), null == l && (c = h.display, l = 'none' === c ? '' : c)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', d.always(function () {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2];
                })), u = false, p))
                    u || (y ? 'hidden' in y && (g = y.hidden) : y = G.access(e, 'fxshow', { display: l }), i && (y.hidden = !g), g && le([e], true), d.done(function () {
                        for (r in (g || le([e]), G.remove(e, 'fxshow'), p))
                            varB.style(e, r, p[r]);
                    })), u = at(g ? y[r] : 0, r, d), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        }],
        prefilter: function (e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e);
        }
    });
    varB.speed = function (e, t, n) {
        var r = e && 'object' == typeof e ? varB.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return varB.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in varB.fx.speeds ? r.duration = varB.fx.speeds[r.duration] : r.duration = varB.fx.speeds._default), null != r.queue && true !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
            h(r.old) && r.old.call(this);
            r.queue && varB.dequeue(this, r.queue);
        }, r;
    };
    varB.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ie).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
            var o = varB.isEmptyObject(e), i = varB.speed(t, n, r), a = function () {
                var t = st(this, varB.extend({}, e), i);
                (o || G.get(this, 'finish')) && t.stop(true);
            };
            return a.finish = a, o || false === i.queue ? this.each(a) : this.queue(i.queue, a);
        },
        stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop;
                t(n);
            };
            return 'string' != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || 'fx', []), this.each(function () {
                var t = true, o = null != e && e + 'queueHooks', i = varB.timers, a = G.get(this);
                if (o) {
                    a[o] && a[o].stop && r(a[o]);
                } else {
                    for (o in a)
                        a[o] && a[o].stop && /queueHooks$/.test(o) && r(a[o]);
                }
                for (o = i.length; o--;) {
                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = false, i.splice(o, 1));
                }
                !t && n || varB.dequeue(this, e);
            });
        },
        finish: function (e) {
            return false !== e && (e = e || 'fx'), this.each(function () {
                var t, n = G.get(this), r = n[e + 'queue'], o = n[e + 'queueHooks'], i = varB.timers, a = r ? r.length : 0;
                for (n.finish = true, varB.queue(this, e, []), o && o.stop && o.stop.call(this, true), t = i.length; t--;) {
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(true), i.splice(t, 1));
                }
                for (t = 0; t < a; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this);
                }
                delete n.finish;
            });
        }
    });
    varB.each([
        'toggle',
        'show',
        'hide'
    ], function (e, t) {
        var n = varB.fn[t];
        varB.fn[t] = function (e, r, o) {
            return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(it(t, true), e, r, o);
        };
    });
    varB.each({
        slideDown: it('show'),
        slideUp: it('hide'),
        slideToggle: it('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
    }, function (e, t) {
        varB.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
        };
    });
    varB.timers = [];
    varB.fx.tick = function () {
        var e, t = 0, n = varB.timers;
        for (Ze = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }
        n.length || varB.fx.stop();
        Ze = void 0;
    };
    varB.fx.timer = function (e) {
        varB.timers.push(e);
        varB.fx.start();
    };
    varB.fx.interval = 13;
    varB.fx.start = function () {
        et || (et = true, rt());
    };
    varB.fx.stop = function () {
        et = null;
    };
    varB.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    varB.fn.delay = function (t, n) {
        return t = varB.fx && varB.fx.speeds[t] || t, n = n || 'fx', this.queue(n, function (n, r) {
            var o = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(o);
            };
        });
    };
    (function () {
        var e = y.createElement('input'), t = y.createElement('select').appendChild(y.createElement('option'));
        e.type = 'checkbox';
        ;
        ;
        (e = y.createElement('input')).value = 't';
        e.type = 'radio';
        ;
    }());
    var ut, lt = varB.expr.attrHandle;
    varB.fn.extend({
        attr: function (e, t) {
            return _(this, varB.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                varB.removeAttr(this, e);
            });
        }
    });
    varB.extend({
        attr: function (e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) {
                return void 0 === e.getAttribute ? varB.prop(e, t, n) : (1 === i && varB.isXMLDoc(e) || (o = varB.attrHooks[t.toLowerCase()] || (varB.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void varB.removeAttr(e, t) : o && 'set' in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n) : o && 'get' in o && null !== (r = o.get(e, t)) ? r : null == (r = varB.find.attr(e, t)) ? void 0 : r);
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && 'radio' === t && C(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0, o = t && t.match(/[^\x20\t\r\n\f]+/g);
            if (o && 1 === e.nodeType) {
                for (; n = o[r++];) {
                    e.removeAttribute(n);
                }
            }
        }
    });
    ut = {
        set: function (e, t, n) {
            return false === t ? varB.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    };
    varB.each(varB.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || varB.find.attr;
        lt[t] = function (e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = lt[a], lt[a] = o, o = null != n(e, t, r) ? a : null, lt[a] = i), o;
        };
    });
    ;
    function dt(e) {
        return (e.match(/[^\x20\t\r\n\f]+/g) || []).join(' ');
    }
    function pt(e) {
        return e.getAttribute && e.getAttribute('class') || '';
    }
    function ht(e) {
        return Array.isArray(e) ? e : 'string' == typeof e && e.match(/[^\x20\t\r\n\f]+/g) || [];
    }
    varB.fn.extend({
        prop: function (e, t) {
            return _(this, varB.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[varB.propFix[e] || e];
            });
        }
    });
    varB.extend({
        prop: function (e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) {
                return 1 === i && varB.isXMLDoc(e) || (t = varB.propFix[t] || t, o = varB.propHooks[t]), void 0 !== n ? o && 'set' in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && 'get' in o && null !== (r = o.get(e, t)) ? r : e[t];
            }
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = varB.find.attr(e, 'tabindex');
                    return t ? parseInt(t, 10) : /^(?:input|select|textarea|button)$/i.test(e.nodeName) || /^(?:a|area)$/i.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: 'htmlFor',
            class: 'className'
        }
    });
    p.optSelected || (varB.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    });
    varB.each([
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
    ], function () {
        varB.propFix[this.toLowerCase()] = this;
    });
    varB.fn.extend({
        addClass: function (e) {
            var t, n, r, o, i, a, s, u = 0;
            if (h(e)) {
                return this.each(function (t) {
                    varB(this).addClass(e.call(this, t, pt(this)));
                });
            }
            if ((t = ht(e)).length) {
                for (; n = this[u++];) {
                    if (o = pt(n), r = 1 === n.nodeType && ' ' + dt(o) + ' ') {
                        for (a = 0; i = t[a++];) {
                            r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
                        }
                        o !== (s = dt(r)) && n.setAttribute('class', s);
                    }
                }
            }
            return this;
        },
        removeClass: function (e) {
            var t, n, r, o, i, a, s, u = 0;
            if (h(e)) {
                return this.each(function (t) {
                    varB(this).removeClass(e.call(this, t, pt(this)));
                });
            }
            if (!arguments.length) {
                return this.attr('class', '');
            }
            if ((t = ht(e)).length) {
                for (; n = this[u++];) {
                    if (o = pt(n), r = 1 === n.nodeType && ' ' + dt(o) + ' ') {
                        for (a = 0; i = t[a++];) {
                            for (; r.indexOf(' ' + i + ' ') > -1;) {
                                r = r.replace(' ' + i + ' ', ' ');
                            }
                        }
                        o !== (s = dt(r)) && n.setAttribute('class', s);
                    }
                }
            }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e, r = 'string' === n || Array.isArray(e);
            return 'boolean' == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function (n) {
                varB(this).toggleClass(e.call(this, n, pt(this), t), t);
            }) : this.each(function () {
                var t, o, i, a;
                if (r) {
                    for (o = 0, i = varB(this), a = ht(e); t = a[o++];) {
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    }
                } else {
                    void 0 !== e && 'boolean' !== n || ((t = pt(this)) && G.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || false === e ? '' : G.get(this, '__className__') || ''));
                }
            });
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = ' ' + e + ' '; n = this[r++];) {
                if (1 === n.nodeType && (' ' + dt(pt(n)) + ' ').indexOf(t) > -1) {
                    return true;
                }
            }
            return false;
        }
    });
    ;
    varB.fn.extend({
        val: function (e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = h(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, varB(this).val()) : e) ? o = '' : 'number' == typeof o ? o += '' : Array.isArray(o) && (o = varB.map(o, function (e) {
                    return null == e ? '' : e + '';
                })), (t = varB.valHooks[this.type] || varB.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, o, 'value') || (this.value = o));
            })) : o ? (t = varB.valHooks[o.type] || varB.valHooks[o.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(o, 'value')) ? n : 'string' == typeof (n = o.value) ? n.replace(/\r/g, '') : null == n ? '' : n : void 0;
        }
    });
    varB.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = varB.find.attr(e, 'value');
                    return null != t ? t : dt(varB.text(e));
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, o = e.options, i = e.selectedIndex, a = 'select-one' === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++) {
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, 'optgroup'))) {
                            if (t = varB(n).val(), a) {
                                return t;
                            }
                            s.push(t);
                        }
                    }
                    return s;
                },
                set: function (e, t) {
                    for (var n, r, o = e.options, i = varB.makeArray(t), a = o.length; a--;) {
                        ((r = o[a]).selected = varB.inArray(varB.valHooks.option.get(r), i) > -1) && (n = true);
                    }
                    return n || (e.selectedIndex = -1), i;
                }
            }
        }
    });
    varB.each([
        'radio',
        'checkbox'
    ], function () {
        varB.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) {
                    return e.checked = varB.inArray(varB(e).val(), t) > -1;
                }
            }
        };
        p.checkOn || (varB.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
        });
    });
    ;
    var mt = function (e) {
        e.stopPropagation();
    };
    varB.extend(varB.event, {
        trigger: function (t, n, r, o) {
            var i, a, s, u, l, f, d, p, m = [r || y], v = c.call(t, 'type') ? t.type : t, x = c.call(t, 'namespace') ? t.namespace.split('.') : [];
            if (a = p = s = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !/^(?:focusinfocus|focusoutblur)$/.test(v + varB.event.triggered) && (v.indexOf('.') > -1 && (v = (x = v.split('.')).shift(), x.sort()), l = v.indexOf(':') < 0 && 'on' + v, (t = t[varB.expando] ? t : new varB.Event(v, 'object' == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + x.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : varB.makeArray(n, [t]), d = varB.event.special[v] || {}, o || !d.trigger || false !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !g(r)) {
                    for (u = d.delegateType || v, /^(?:focusinfocus|focusoutblur)$/.test(u + v) || (a = a.parentNode); a; a = a.parentNode) {
                        m.push(a);
                        s = a;
                    }
                    s === (r.ownerDocument || y) && m.push(s.defaultView || s.parentWindow || e);
                }
                for (i = 0; (a = m[i++]) && !t.isPropagationStopped();) {
                    p = a;
                    t.type = i > 1 ? u : d.bindType || v;
                    (f = (G.get(a, 'events') || Object.create(null))[t.type] && G.get(a, 'handle')) && f.apply(a, n);
                    (f = l && a[l]) && f.apply && X(a) && (t.result = f.apply(a, n), false === t.result && t.preventDefault());
                }
                return t.type = v, o || t.isDefaultPrevented() || d._default && false !== d._default.apply(m.pop(), n) || !X(r) || l && h(r[v]) && !g(r) && ((s = r[l]) && (r[l] = null), varB.event.triggered = v, t.isPropagationStopped() && p.addEventListener(v, mt), r[v](), t.isPropagationStopped() && p.removeEventListener(v, mt), varB.event.triggered = void 0, s && (r[l] = s)), t.result;
            }
        },
        simulate: function (e, t, n) {
            var r = varB.extend(new varB.Event(), n, {
                type: e,
                isSimulated: true
            });
            varB.event.trigger(r, null, t);
        }
    });
    varB.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                varB.event.trigger(e, t, this);
            });
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) {
                return varB.event.trigger(e, t, n, true);
            }
        }
    });
    p.focusin || varB.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (e, t) {
        var n = function (e) {
            varB.event.simulate(t, e.target, varB.event.fix(e));
        };
        varB.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this.document || this, o = G.access(r, t);
                o || r.addEventListener(e, n, true);
                G.access(r, t, (o || 0) + 1);
            },
            teardown: function () {
                var r = this.ownerDocument || this.document || this, o = G.access(r, t) - 1;
                o ? G.access(r, t, o) : (r.removeEventListener(e, n, true), G.remove(r, t));
            }
        };
    });
    var vt = e.location, xt = { guid: Date.now() };
    varB.parseXML = function (t) {
        var n, r;
        if (!t || 'string' != typeof t) {
            return null;
        }
        try {
            n = new e.DOMParser().parseFromString(t, 'text/xml');
        } catch (e) {
        }
        return r = n && n.getElementsByTagName('parsererror')[0], n && !r || varB.error('Invalid XML: ' + (r ? varB.map(r.childNodes, function (e) {
            return e.textContent;
        }).join('\n') : t)), n;
    };
    ;
    function qt(e, t, n, r) {
        var o;
        if (Array.isArray(t)) {
            varB.each(t, function (t, o) {
                n || /\[\]$/.test(e) ? r(e, o) : qt(e + '[' + ('object' == typeof o && null != o ? t : '') + ']', o, n, r);
            });
        } else {
            if (n || 'object' !== x(t)) {
                r(e, t);
            } else {
                for (o in t)
                    qt(e + '[' + o + ']', t[o], n, r);
            }
        }
    }
    varB.param = function (e, t) {
        var n, r = [], o = function (e, t) {
            var n = h(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
        };
        if (null == e) {
            return '';
        }
        if (Array.isArray(e) || e.jquery && !varB.isPlainObject(e)) {
            varB.each(e, function () {
                o(this.name, this.value);
            });
        } else {
            for (n in e)
                qt(n, e[n], t, o);
        }
        return r.join('&');
    };
    varB.fn.extend({
        serialize: function () {
            return varB.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var e = varB.prop(this, 'elements');
                return e ? varB.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;
                return this.name && !varB(this).is(':disabled') && /^(?:input|select|textarea|keygen)/i.test(this.nodeName) && !/^(?:submit|button|image|reset|file)$/i.test(e) && (this.checked || !/^(?:checkbox|radio)$/i.test(e));
            }).map(function (e, t) {
                var n = varB(this).val();
                return null == n ? null : Array.isArray(n) ? varB.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, '\r\n')
                    };
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, '\r\n')
                };
            }).get();
        }
    });
    var Lt = {}, Ot = {}, Ht = '*/'.concat('*'), Rt = y.createElement('a');
    function Mt(e) {
        return function (t, n) {
            'string' != typeof t && (n = t, t = '*');
            var r, o = 0, i = t.toLowerCase().match(/[^\x20\t\r\n\f]+/g) || [];
            if (h(n)) {
                for (; r = i[o++];) {
                    '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                }
            }
        };
    }
    function Pt(e, t, n, r) {
        var o = {}, i = e === Ot;
        function a(s) {
            var u;
            return o[s] = true, varB.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return 'string' != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), false);
            }), u;
        }
        return a(t.dataTypes[0]) || !o['*'] && a('*');
    }
    function It(e, t) {
        var n, r, o = varB.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && varB.extend(true, e, r), e;
    }
    Rt.href = vt.href;
    varB.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': Ht,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': true,
                'text json': JSON.parse,
                'text xml': varB.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function (e, t) {
            return t ? It(It(e, varB.ajaxSettings), t) : It(varB.ajaxSettings, e);
        },
        ajaxPrefilter: Mt(Lt),
        ajaxTransport: Mt(Ot),
        ajax: function (t, n) {
            'object' == typeof t && (n = t, t = void 0);
            n = n || {};
            var r, o, i, a, s, u, l, c, f, d, p = varB.ajaxSetup({}, n), h = p.context || p, g = p.context && (h.nodeType || h.jquery) ? varB(h) : varB.event, m = varB.Deferred(), v = varB.Callbacks('once memory'), x = p.statusCode || {}, w = {}, S = {}, j = 'canceled', T = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (l) {
                        if (!a) {
                            for (a = {}; t = /^(.*?):[ \t]*([^\r\n]*)$/gm.exec(i);) {
                                a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                            }
                        }
                        t = a[e.toLowerCase() + ' '];
                    }
                    return null == t ? null : t.join(', ');
                },
                getAllResponseHeaders: function () {
                    return l ? i : null;
                },
                setRequestHeader: function (e, t) {
                    return null == l && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, w[e] = t), this;
                },
                overrideMimeType: function (e) {
                    return null == l && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                    var t;
                    if (e) {
                        if (l) {
                            T.always(e[T.status]);
                        } else {
                            for (t in e)
                                x[t] = [
                                    x[t],
                                    e[t]
                                ];
                        }
                    }
                    return this;
                },
                abort: function (e) {
                    var t = e || j;
                    return r && r.abort(t), q(0, t), this;
                }
            };
            if (m.promise(T), p.url = ((t || p.url || vt.href) + '').replace(/^\/\//, vt.protocol + '//'), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || '*').toLowerCase().match(/[^\x20\t\r\n\f]+/g) || [''], null == p.crossDomain) {
                u = y.createElement('a');
                try {
                    ;
                    ;
                    ;
                } catch (e) {
                    ;
                }
            }
            if (p.data && p.processData && 'string' != typeof p.data && (p.data = varB.param(p.data, p.traditional)), Pt(Lt, p, n, T), l) {
                return T;
            }
            for (f in ((c = varB.event && p.global) && 0 == varB.active++ && varB.event.trigger('ajaxStart'), p.type = p.type.toUpperCase(), p.hasContent = !/^(?:GET|HEAD)$/.test(p.type), o = p.url.replace(/#.*$/, ''), p.hasContent ? p.data && p.processData && 0 === (p.contentType || '').indexOf('application/x-www-form-urlencoded') && (p.data = p.data.replace(/%20/g, '+')) : (d = p.url.slice(o.length), p.data && (p.processData || 'string' == typeof p.data) && (o += (/\?/.test(o) ? '&' : '?') + p.data, delete p.data), false === p.cache && (o = o.replace(/([?&])_=[^&]*/, '$1'), d = (/\?/.test(o) ? '&' : '?') + '_=' + xt.guid++ + d), p.url = o + d), p.ifModified && (varB.lastModified[o] && T.setRequestHeader('If-Modified-Since', varB.lastModified[o]), varB.etag[o] && T.setRequestHeader('If-None-Match', varB.etag[o])), (p.data && p.hasContent && false !== p.contentType || n.contentType) && T.setRequestHeader('Content-Type', p.contentType), T.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Ht + '; q=0.01' : '') : p.accepts['*']), p.headers))
                T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (false === p.beforeSend.call(h, T, p) || l)) {
                return T.abort();
            }
            if (j = 'abort', v.add(p.complete), T.done(p.success), T.fail(p.error), r = Pt(Ot, p, n, T)) {
                if (T.readyState = 1, c && g.trigger('ajaxSend', [
                    T,
                    p
                ]), l) {
                    return T;
                }
                p.async && p.timeout > 0 && (s = e.setTimeout(function () {
                    T.abort('timeout');
                }, p.timeout));
                try {
                    l = false;
                    r.send(w, q);
                } catch (e) {
                    if (l) {
                        throw e;
                    }
                    q(-1, e);
                }
            } else {
                q(-1, 'No Transport');
            }
            function q(t, n, a, u) {
                var f, d, y, w, S, j = n;
                l || (l = true, s && e.clearTimeout(s), r = void 0, i = u || '', T.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (w = function (e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes; '*' === u[0];) {
                        u.shift();
                        void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                    }
                    if (r) {
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break;
                            }
                    }
                    if (u[0] in n) {
                        i = u[0];
                    } else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + ' ' + u[0]]) {
                                i = o;
                                break;
                            }
                            a || (a = o);
                        }
                        i = i || a;
                    }
                    if (i) {
                        return i !== u[0] && u.unshift(i), n[i];
                    }
                }(p, T, a)), !f && varB.inArray('script', p.dataTypes) > -1 && varB.inArray('json', p.dataTypes) < 0 && (p.converters['text script'] = function () {
                }), w = function (e, t, n, r) {
                    var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) {
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    }
                    for (i = c.shift(); i;) {
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) {
                            if ('*' === i) {
                                i = u;
                            } else {
                                if ('*' !== u && u !== i) {
                                    if (!(a = l[u + ' ' + i] || l['* ' + i])) {
                                        for (o in l)
                                            if ((s = o.split(' '))[1] === i && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                                                true === a ? a = l[o] : true !== l[o] && (i = s[0], c.unshift(s[1]));
                                                break;
                                            }
                                    }
                                    if (true !== a) {
                                        if (a && e.throws) {
                                            t = a(t);
                                        } else {
                                            try {
                                                t = a(t);
                                            } catch (e) {
                                                return {
                                                    state: 'parsererror',
                                                    error: a ? e : 'No conversion from ' + u + ' to ' + i
                                                };
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return {
                        state: 'success',
                        data: t
                    };
                }(p, w, T, f), f ? (p.ifModified && ((S = T.getResponseHeader('Last-Modified')) && (varB.lastModified[o] = S), (S = T.getResponseHeader('etag')) && (varB.etag[o] = S)), 204 === t || 'HEAD' === p.type ? j = 'nocontent' : 304 === t ? j = 'notmodified' : (j = w.state, d = w.data, f = !(y = w.error))) : (y = j, !t && j || (j = 'error', t < 0 && (t = 0))), T.status = t, T.statusText = (n || j) + '', f ? m.resolveWith(h, [
                    d,
                    j,
                    T
                ]) : m.rejectWith(h, [
                    T,
                    j,
                    y
                ]), T.statusCode(x), x = void 0, c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [
                    T,
                    p,
                    f ? d : y
                ]), v.fireWith(h, [
                    T,
                    j
                ]), c && (g.trigger('ajaxComplete', [
                    T,
                    p
                ]), --varB.active || varB.event.trigger('ajaxStop')));
            }
            return T;
        },
        getJSON: function (e, t, n) {
            return varB.get(e, t, n, 'json');
        },
        getScript: function (e, t) {
            return varB.get(e, void 0, t, 'script');
        }
    });
    varB.each([
        'get',
        'post'
    ], function (e, t) {
        varB[t] = function (e, n, r, o) {
            return h(n) && (o = o || r, r = n, n = void 0), varB.ajax(varB.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, varB.isPlainObject(e) && e));
        };
    });
    varB.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
            'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
    });
    varB._evalUrl = function (e, t, n) {
        return varB.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: true,
            async: false,
            global: false,
            converters: {
                'text script': function () {
                }
            },
            dataFilter: function (e) {
                varB.globalEval(e, t, n);
            }
        });
    };
    varB.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = varB(e, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) {
                    e = e.firstElementChild;
                }
                return e;
            }).append(this)), this;
        },
        wrapInner: function (e) {
            return h(e) ? this.each(function (t) {
                varB(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
                var t = varB(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function (e) {
            var t = h(e);
            return this.each(function (n) {
                varB(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function (e) {
            return this.parent(e).not('body').each(function () {
                varB(this).replaceWith(this.childNodes);
            }), this;
        }
    });
    varB.expr.pseudos.hidden = function (e) {
        return !varB.expr.pseudos.visible(e);
    };
    varB.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    };
    varB.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {
        }
    };
    var zt = varB.ajaxSettings.xhr();
    ;
    ;
    varB.ajaxTransport(function (t) {
        var n, r;
        if (p.cors || zt && !t.crossDomain) {
            return {
                send: function (o, i) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) {
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    }
                    for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'), o))
                        s.setRequestHeader(a, o[a]);
                    n = function (e) {
                        return function () {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' != typeof s.status ? i(0, 'error') : i(s.status, s.statusText) : i(Wt[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                        };
                    };
                    s.onload = n();
                    r = s.onerror = s.ontimeout = n('error');
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && e.setTimeout(function () {
                            n && r();
                        });
                    };
                    n = n('abort');
                    try {
                        s.send(t.hasContent && t.data || null);
                    } catch (e) {
                        if (n) {
                            throw e;
                        }
                    }
                },
                abort: function () {
                    n && n();
                }
            };
        }
    });
    varB.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = false);
    });
    varB.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
            'text script': function (e) {
                return varB.globalEval(e), e;
            }
        }
    });
    varB.ajaxPrefilter('script', function (e) {
        void 0 === e.cache && (e.cache = false);
        e.crossDomain && (e.type = 'GET');
    });
    varB.ajaxTransport('script', function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) {
            return {
                send: function (r, o) {
                    t = varB('<script>').attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on('load error', n = function (e) {
                        t.remove();
                        n = null;
                        e && o('error' === e.type ? 404 : 200, e.type);
                    });
                    y.head.appendChild(t[0]);
                },
                abort: function () {
                    n && n();
                }
            };
        }
    });
    var _t, Ft = [];
    varB.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var e = Ft.pop() || varB.expando + '_' + xt.guid++;
            return this[e] = true, e;
        }
    });
    varB.ajaxPrefilter('json jsonp', function (t, n, r) {
        var o, i, a, s = false !== t.jsonp && (/(=)\?(?=&|$)|\?\?/.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && /(=)\?(?=&|$)|\?\?/.test(t.data) && 'data');
        if (s || 'jsonp' === t.dataTypes[0]) {
            return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(/(=)\?(?=&|$)|\?\?/, '$1' + o) : false !== t.jsonp && (t.url += (/\?/.test(t.url) ? '&' : '?') + t.jsonp + '=' + o), t.converters['script json'] = function () {
                return a || varB.error(o + ' was not called'), a[0];
            }, t.dataTypes[0] = 'json', i = e[o], e[o] = function () {
                a = arguments;
            }, r.always(function () {
                void 0 === i ? varB(e).removeProp(o) : e[o] = i;
                t[o] && (t.jsonpCallback = n.jsonpCallback, Ft.push(o));
                a && h(i) && i(a[0]);
                a = i = void 0;
            }), 'script';
        }
    });
    ;
    varB.parseHTML = function (e, t, n) {
        return 'string' != typeof e ? [] : ('boolean' == typeof t && (n = t, t = false), t || (p.createHTMLDocument ? ((r = (t = y.implementation.createHTMLDocument('')).createElement('base')).href = y.location.href, t.head.appendChild(r)) : t = y), o = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i.exec(e), i = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, i), i && i.length && varB(i).remove(), varB.merge([], o.childNodes)));
        var r, o, i;
    };
    varB.fn.load = function (e, t, n) {
        var r, o, i, a = this, s = e.indexOf(' ');
        return s > -1 && (r = dt(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (o = 'POST'), a.length > 0 && varB.ajax({
            url: e,
            type: o || 'GET',
            dataType: 'html',
            data: t
        }).done(function (e) {
            i = arguments;
            a.html(r ? varB('<div>').append(varB.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, i || [
                    e.responseText,
                    t,
                    e
                ]);
            });
        }), this;
    };
    varB.expr.pseudos.animated = function (e) {
        return varB.grep(varB.timers, function (t) {
            return e === t.elem;
        }).length;
    };
    varB.offset = {
        setOffset: function (e, t, n) {
            var r, o, i, a, s, u, l = varB.css(e, 'position'), c = varB(e), f = {};
            'static' === l && (e.style.position = 'relative');
            s = c.offset();
            i = varB.css(e, 'top');
            u = varB.css(e, 'left');
            ('absolute' === l || 'fixed' === l) && (i + u).indexOf('auto') > -1 ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0);
            h(t) && (t = t.call(e, n, varB.extend({}, s)));
            null != t.top && (f.top = t.top - s.top + a);
            null != t.left && (f.left = t.left - s.left + o);
            'using' in t ? t.using.call(e, f) : c.css(f);
        }
    };
    varB.fn.extend({
        offset: function (e) {
            if (arguments.length) {
                return void 0 === e ? this : this.each(function (t) {
                    varB.offset.setOffset(this, e, t);
                });
            }
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0];
                if ('fixed' === varB.css(r, 'position')) {
                    t = r.getBoundingClientRect();
                } else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && 'static' === varB.css(e, 'position');) {
                        e = e.parentNode;
                    }
                    e && e !== r && 1 === e.nodeType && ((o = varB(e).offset()).top += varB.css(e, 'borderTopWidth', true), 0 += varB.css(e, 'borderLeftWidth', true));
                }
                return {
                    top: t.top - 0 - varB.css(r, 'marginTop', true),
                    left: t.left - 0 - varB.css(r, 'marginLeft', true)
                };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && 'static' === varB.css(e, 'position');) {
                    e = e.offsetParent;
                }
                return e || ne;
            });
        }
    });
    varB.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (e, t) {
        var n = 'pageYOffset' === t;
        varB.fn[e] = function (r) {
            return _(this, function (e, r, o) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) {
                    return i ? i[t] : e[r];
                }
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
            }, e, r, arguments.length);
        };
    });
    varB.each([
        'top',
        'left'
    ], function (e, t) {
        varB.cssHooks[t] = ze(p.pixelPosition, function (e, n) {
            if (n) {
                return n = We(e, t), Re.test(n) ? varB(e).position()[t] + 'px' : n;
            }
        });
    });
    varB.each({
        Height: 'height',
        Width: 'width'
    }, function (e, t) {
        varB.each({
            padding: 'inner' + e,
            content: t,
            '': 'outer' + e
        }, function (n, r) {
            varB.fn[r] = function (o, i) {
                var a = arguments.length && (n || 'boolean' != typeof o), s = n || (true === o || true === i ? 'margin' : 'border');
                return _(this, function (t, n, o) {
                    var i;
                    return g(t) ? 0 === r.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body['scroll' + e], i['scroll' + e], t.body['offset' + e], i['offset' + e], i['client' + e])) : void 0 === o ? varB.css(t, n, s) : varB.style(t, n, o, s);
                }, t, a ? o : void 0, a);
            };
        });
    });
    varB.each([
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
    ], function (e, t) {
        varB.fn[t] = function (e) {
            return this.on(t, e);
        };
    });
    varB.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
            return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    });
    varB.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, t) {
        varB.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    });
    ;
    varB.proxy = function (e, t) {
        var n, r, i;
        if ('string' == typeof t && (n = e[t], t = e, e = n), h(e)) {
            return r = o.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(o.call(arguments)));
            }).guid = e.guid = e.guid || varB.guid++, i;
        }
    };
    varB.holdReady = function (e) {
        e ? varB.readyWait++ : varB.ready(true);
    };
    varB.isArray = Array.isArray;
    varB.parseJSON = JSON.parse;
    varB.nodeName = C;
    varB.isFunction = h;
    varB.isWindow = g;
    varB.camelCase = U;
    varB.type = x;
    varB.now = Date.now;
    varB.isNumeric = function (e) {
        var t = varB.type(e);
        return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    };
    varB.trim = function (e) {
        return null == e ? '' : (e + '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
    'function' == typeof define && define.amd && define('jquery', [], function () {
        return varB;
    });
    var Ut = e.jQuery, Xt = e.$;
    return varB.noConflict = function (t) {
        return e.$ === varB && (e.$ = Xt), t && e.jQuery === varB && (e.jQuery = Ut), varB;
    }, void 0 === t && (e.jQuery = e.$ = varB), varB;
});
var FuzzySet = function () {
    'use strict';
    return function (e, t, n, r) {
        var o = {
            gramSizeLower: n || 2,
            gramSizeUpper: r || 3,
            useLevenshtein: 'boolean' != typeof t || t,
            exactSet: {},
            matchDict: {},
            items: {},
            a: r,
            get: function (e, t, n) {
                void 0 === n && (n = 0.33);
                var r = this._get(e, n);
                return r || void 0 === t ? r : t;
            },
            _get: function (e, t) {
                for (var n = [], r = this.gramSizeUpper; r >= this.gramSizeLower; --r) {
                    if ((n = this.__get(e, r, t)) && n.length > 0) {
                        return n;
                    }
                }
                return null;
            },
            __get: function (e, t, n) {
                var r, o, a, u, l = this._normalizeStr(e), c = {}, f = s(l, t), d = this.items[t], p = 0;
                for (r in f)
                    if (o = f[r], p += Math.pow(o, 2), r in this.matchDict) {
                        for (w = 0; w < this.matchDict[r].length; ++w) {
                            a = this.matchDict[r][w][0];
                            u = this.matchDict[r][w][1];
                            a in c ? c[a] += o * u : c[a] = o * u;
                        }
                    }
                if (function (e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) {
                            return false;
                        }
                    return true;
                }(c)) {
                    return null;
                }
                var h, g = Math.sqrt(p), y = [];
                for (var m in c)
                    h = c[m], y.push([
                        h / (g * d[m][0]),
                        d[m][1]
                    ]);
                var v = function (e, t) {
                    return e[0] < t[0] ? 1 : e[0] > t[0] ? -1 : 0;
                };
                if (y.sort(v), this.useLevenshtein) {
                    for (var x = [], b = Math.min(50, y.length), w = 0; w < b; ++w) {
                        x.push([
                            i(y[w][1], l),
                            y[w][1]
                        ]);
                    }
                    (y = x).sort(v);
                }
                return x = [], y.forEach(function (e) {
                    e[0] >= n && x.push([
                        e[0],
                        this.exactSet[e[1]]
                    ]);
                }.bind(this)), x;
            },
            add: function (e) {
                if (this._normalizeStr(e) in this.exactSet) {
                    return false;
                }
                for (var t = this.gramSizeLower; t < this.gramSizeUpper + 1; ++t) {
                    this._add(e, t);
                }
            },
            _add: function (e, t) {
                var n = this._normalizeStr(e), r = this.items[t] || [], o = r.length;
                r.push(0);
                var i, a, u = s(n, t), l = 0;
                for (i in u)
                    a = u[i], l += Math.pow(a, 2), i in this.matchDict ? this.matchDict[i].push([
                        o,
                        a
                    ]) : this.matchDict[i] = [[
                        o,
                        a
                    ]];
                var c = Math.sqrt(l);
                r[o] = [
                    c,
                    n
                ];
                this.items[t] = r;
                this.exactSet[n] = e;
            },
            _normalizeStr: function (e) {
                if ('[object String]' !== Object.prototype.toString.call(e)) {
                    throw 'Must use a string as argument to FuzzySet functions';
                }
                return e.toLowerCase();
            },
            length: function () {
                var e, t = 0;
                for (e in this.exactSet)
                    this.exactSet.hasOwnProperty(e) && (t += 1);
                return t;
            },
            isEmpty: function () {
                for (var e in this.exactSet)
                    if (this.exactSet.hasOwnProperty(e)) {
                        return false;
                    }
                return true;
            },
            values: function () {
                var e, t = [];
                for (e in this.exactSet)
                    this.exactSet.hasOwnProperty(e) && t.push(this.exactSet[e]);
                return t;
            }
        };
        e = e || [];
        ;
        ;
        ;
        ;
        ;
        ;
        var i = function (e, t) {
            if (null === e && null === t) {
                throw 'Trying to compare two null values';
            }
            if (null === e || null === t) {
                return 0;
            }
            var n = function (e, t) {
                for (var n, r, o = [], i = 0; i <= t.length; i++) {
                    for (var a = 0; a <= e.length; a++) {
                        r = i && a ? e.charAt(a - 1) === t.charAt(i - 1) ? n : Math.min(o[a], o[a - 1], n) + 1 : i + a;
                        n = o[a];
                        ;
                    }
                }
                return o.pop();
            }(e = String(e), t = String(t));
            return e.length > t.length ? 1 - n / e.length : 1 - n / t.length;
        }, s = function (e, t) {
            for (var n = {}, r = function (e, t) {
                t = t || 2;
                var n = '-' + e.toLowerCase().replace(/[^a-zA-Z0-9\u00C0-\u00FF\u0621-\u064A\u0660-\u0669, ]+/g, '') + '-', r = t - n.length, o = [];
                if (r > 0) {
                    for (var i = 0; i < r; ++i) {
                        n += '-';
                    }
                }
                for (i = 0; i < n.length - t + 1; ++i) {
                    o.push(n.slice(i, i + t));
                }
                return o;
            }(e, t = t || 2), o = 0; o < r.length; ++o) {
                r[o] in n ? n[r[o]] += 1 : n[r[o]] = 1;
            }
            return n;
        };
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        ;
        for (var u = o.gramSizeLower; u < o.gramSizeUpper + 1; ++u) {
            o.items[u] = [];
        }
        for (u = 0; u < e.length; ++u) {
            o.add(e[u]);
        }
        return o;
    };
}();
jqSecurly = jQuery.noConflict(true);
(function (e) {
    let t, n, r = chrome.runtime.connect({ name: 'think_twice' }), o = 0.9, i = [], a = [], s = [], u = [], l = null, c = null, f = false, d = false, p = false;
    function h(e, t, n, o, i) {
        r.postMessage({
            action: 'sendThinkTwiceAnalytics',
            tt_id: e,
            site: t,
            tt_action: n,
            typedText: o,
            matchedPhrase: i
        });
    }
    function g(e) {
        let r, o, i;
        for (o = 0, i = e.length; o < i; o++) {
            r = e[o];
            const i = jqSecurly(r.target).parent(), a = i.find('securly-extension'), s = i.find('.tt-detected');
            a.length > 0 && (!s.length > 0 || s.text().length <= 1) && a.hide();
            'childList' === r.type && (r.addedNodes.length && Array.prototype.forEach.call(r.addedNodes, function (e) {
                y(e).forEach(function (e) {
                    t.observe(e, n);
                });
            }), r.removedNodes.length && x());
        }
    }
    function y(e, t) {
        if ('securly-extension' == e.localName) {
            return [];
        }
        if (t = t || [], e.shadowRoot && t.push(e.shadowRoot), e && e.querySelectorAll) {
            var n = jqSecurly(e).find('input[type="text"]'), r = jqSecurly(e).find('div[role="textbox"]'), o = jqSecurly(document).find('textarea');
            let i = jqSecurly(e).find('[contenteditable="true"]');
            v([].concat(n, [], r, o, i));
            Array.prototype.forEach.call(e.querySelectorAll('*'), function (e) {
                e.tagName && e.tagName.indexOf('-') > -1 && e.shadowRoot && y(e, t);
            });
        }
        return t;
    }
    function m(e, t) {
        let n;
        return function (...r) {
            const o = this;
            n && clearTimeout(n);
            n = setTimeout(() => {
                n = null;
                e.apply(o, r);
            }, t);
        };
    }
    function v(e) {
        for (var t = 0; t < e.length; t++) {
            let n = jqSecurly(e[t]).attr('placeholder');
            if (n && n.length > 0 && (-1 != n.toLowerCase().indexOf('search') || -1 != n.toLowerCase().indexOf('location'))) {
                return;
            }
            jqSecurly(e[t]).on('keypress', m(j, 300));
        }
    }
    function x() {
        for (var e = 0, t = i.length; e < t; e++) {
            var n = i[e];
            n && !isAttached(n) && (i[e] = null);
        }
    }
    function b(e, t, n) {
        let r = function (e, t) {
            var n = document.createElement('div');
            let r = 'tt-id-' + function (e) {
                for (var t = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length, o = 0; o < e; o++) {
                    t += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * r));
                }
                return t;
            }(10);
            return n.setAttribute('id', r), n.setAttribute('class', 'tt-wrapper-parent'), n.setAttribute('data-tt-typed-string', window.btoa(e)), n.setAttribute('data-tt-matched-phrase', window.btoa(t)), n.innerHTML = '<div class="tt-wrapper-loc"><div class="tt-wrapper"><img class="tt-warning" src="' + chrome.extension.getURL('tt-alert.svg') + '"><div class="tt-tooltip"><span class="tt-header">Is this hurtful?</span></br><span class="tt-text">This message may contain hurtful language. Are you sure you want to send this message?</span></div></div></div>', {
                id: r,
                element: n
            };
        }(t, n);
        jqSecurly(e.target).addClass('tt-detected');
        jqSecurly(e.target).data('tt-id', r.id);
        var o = document.createElement('securly-extension');
        o.setAttribute('id', 'sh-' + r.id);
        'static' == jqSecurly(e.target).parent().css('position') && jqSecurly(e.target).parent().css({ position: 'relative' });
        jqSecurly(e.target).parent().find('securly-extension').length > 0 && jqSecurly(e.target).parent().find('securly-extension').hide();
        jqSecurly(e.target).parent().append(o);
        jqSecurly(o).css({
            position: 'absolute',
            top: 0,
            left: 0,
            'pointer-events': 'none',
            'z-index': 'auto'
        });
        const i = o.attachShadow({ mode: 'open' });
        i.appendChild(function () {
            let e = document.createElement('style');
            return e.textContent = '\n            .tt-tooltip {\n                display: block;\n                position: absolute;\n                top: 0;\n                left: 50%;\n                padding: 0.8rem 1rem;\n                border-radius: 5px;\n                font-size: 0.8rem;\n                font-weight: bold;\n                opacity: 0;\n                pointer-events: none;\n                transform:  translate(-95%, -110%);\n                transition: all 0.3s ease;\n                z-index: 1;\n                width: 300px;\n                background-color: #fff;\n                border: 1px solid #2581ee;\n            }\n            \n            .tt-tooltip:after {\n              display: block;\n              position: absolute;\n              bottom: 1px;\n              left: 50%;\n              width: 0;\n              height: 0;\n              content: "";\n              border: solid;\n              border-width: 10px 10px 0 10px;\n              border-color: transparent;\n              //transform: translate(-50%, 100%);\n            }\n\n            .tt-wrapper:hover .tt-tooltip{\n                // visibility: visible;\n                // opacity: 1;\n                //transform: translate(-50%, -150%);\n            }\n\n            .tt-wrapper {\n                position: absolute;\n                right: 0;\n                top: 0;\n                pointer-events: all;\n            }\n\n            .tt-header {\n                font-family: \'Metropolis Medium\',\'Roboto\',sans-serif !important;\n            }\n            \n            .tt-text {\n                font-family: \'Metropolis Regular\',\'Roboto\',sans-serif !important;\n            }\n\n            .tt-wrapper img.tt-warning{\n                width: 16px;\n                height: 16px;\n            }\n\n            .tt-wrapper-parent {\n                position: absolute;\n                overflow: hidden;\n            }\n            \n            .tt-wrapper-loc {\n                box-sizing: content-box;\n                top: 0px;\n                left: 0px;\n                position: relative;\n                border: 0px;\n                border-radius: 0px;\n                padding: 0px;\n                margin: 0px;\n            }\n        ', e;
        }());
        i.appendChild(r.element);
        jqSecurly(i).find('.tt-wrapper-loc').width(jqSecurly(e.target).innerWidth() - 7);
        jqSecurly(i).find('.tt-wrapper-loc').height(jqSecurly(e.target).innerHeight());
        let a = {
            top: jqSecurly(e.target).offset().top - jqSecurly(e.target).parent().offset().top,
            left: jqSecurly(e.target).offset().left - jqSecurly(e.target).parent().offset().left
        };
        jqSecurly(i).find('.tt-wrapper-parent').css({
            top: a.top,
            left: a.left
        });
        let s = jqSecurly(e.target).innerHeight();
        return s <= 20 && jqSecurly(i).find('.tt-warning').height(s - 4), new ResizeObserver(e => {
            for (let t of e)
                setTimeout(function () {
                    if (jqSecurly('#sh-' + jqSecurly(t.target).data('tt-id')).length <= 0) {
                        return;
                    }
                    let e = jqSecurly(jqSecurly('#sh-' + jqSecurly(t.target).data('tt-id'))[0].shadowRoot);
                    e.find('.tt-wrapper-loc').width(jqSecurly(t.target).innerWidth() - 7);
                    e.find('.tt-wrapper-loc').height(jqSecurly(t.target).innerHeight());
                    let n = {
                        top: jqSecurly(t.target).offset().top - jqSecurly(t.target).parent().offset().top,
                        left: jqSecurly(t.target).offset().left - jqSecurly(t.target).parent().offset().left
                    };
                    e.find('.tt-wrapper-parent').css({
                        top: n.top,
                        left: n.left
                    });
                    let r = jqSecurly(t.target).innerHeight();
                    r <= 20 && e.find('.tt-warning').height(r - 4);
                }, 100);
        }).observe(e.target), r;
    }
    function w(e) {
        jqSecurly(e.target).hasClass('tt-detected') && !jqSecurly(e.target).hasClass('tt-changed') && (jqSecurly(e.target).addClass('tt-changed'), jqSecurly('#sh-' + jqSecurly(e.target).data('tt-id')).css({ display: 'none' }));
    }
    function S(e) {
        jqSecurly(e.currentTarget).hasClass('tt-success-tracked') || (jqSecurly(e.currentTarget).addClass('tt-success-tracked'), h(jqSecurly(e.currentTarget).parents('.tt-wrapper-parent').attr('id'), E(document.domain), 'CLICKED_WARNING', window.atob(jqSecurly(e.currentTarget).parents('.tt-wrapper-parent').data('tt-typed-string')), window.atob(jqSecurly(e.currentTarget).parents('.tt-wrapper-parent').data('tt-matched-phrase'))));
    }
    function j(t) {
        if (!l) {
            return;
        }
        var n = function (e) {
            if (null === e || '' === e) {
                return '';
            }
            let t = document.createElement('div');
            return t.innerHTML = e, t.textContent || t.innerText || '';
        }(t.target.value ? t.target.value : t.target.innerText ? t.target.innerText : t.target.innerHTML);
        if (n.length <= 1 && C(t), f ? jqSecurly(t.target).hasClass('tt-detected') && (13 != t.keyCode || t.shiftKey ? T(t, n) : (q(jqSecurly(t.target).data('tt-id')), C(t))) : d ? jqSecurly(t.target).hasClass('tt-detected') && (!function (e) {
            let t = jqSecurly(e.target).parents('div[data-test-id=\'editor-with-mentions\']').find('div[data-test-id=\'activity-item-create-submit\']');
            t && t.length > 0 && (jqSecurly(t[0]).hasClass('tt-event-added') || (jqSecurly(t[0]).click(function (e) {
                let t = jqSecurly(e.currentTarget).data('tt-button-id');
                q(t);
                jqSecurly('#sh-' + t).remove();
                jqSecurly(e.currentTarget).removeClass('tt-event-added');
                jqSecurly(jqSecurly(e.currentTarget).parents('div[data-test-id=\'editor-with-mentions\']').find('.tt-detected')[0]).removeClass('tt-detected');
                jqSecurly(jqSecurly(e.currentTarget).parents('div[data-test-id=\'editor-with-mentions\']').find('.tt-changed')[0]).removeClass('tt-changed');
            }), jqSecurly(t[0]).addClass('tt-event-added'), jqSecurly(t[0]).data('tt-button-id', jqSecurly(e.target).data('tt-id'))));
        }(t), T(t, n)) : p && jqSecurly(t.target).hasClass('tt-detected') && (13 != t.keyCode || t.shiftKey || (q(jqSecurly(t.target).data('tt-id')), C(t)), function (t) {
            let n = jqSecurly(t.target).parents('form').find('div[role=\'button\']').filter(function () {
                return 'Post' === e(this).text().trim();
            });
            n && n.length > 0 && (jqSecurly(n[0]).hasClass('tt-event-added') || (jqSecurly(n[0]).click(function (e) {
                let t = jqSecurly(e.currentTarget).data('tt-button-id');
                q(t);
                jqSecurly('#sh-' + t).remove();
                jqSecurly(e.currentTarget).removeClass('tt-event-added');
                jqSecurly(jqSecurly(e.currentTarget).parents('form').find('.tt-detected')[0]).removeClass('tt-detected');
                jqSecurly(jqSecurly(e.currentTarget).parents('form').find('.tt-changed')[0]).removeClass('tt-changed');
            }), jqSecurly(n[0]).addClass('tt-event-added'), jqSecurly(n[0]).data('tt-button-id', jqSecurly(t.target).data('tt-id'))));
        }(t), T(t, n)), c) {
            if ([...n.toLowerCase().matchAll(c)].length >= 1) {
                return void w(t);
            }
        }
        let r = false, i = false, s = [...n.toLowerCase().matchAll(l)];
        if (s.length <= 0 && (s = [...n.toLowerCase().replace(/\u00a0/g, ' ').replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s{2,}/g, ' ').matchAll(l)]), s.length >= 1 && (jqSecurly(t.target).hasClass('tt-detected') && (r = true), jqSecurly(t.target).hasClass('tt-changed') && jqSecurly(t.target).removeClass('tt-changed'), r || (elementObj = b(t, n, s[0][0]), h(elementObj.id, E(document.domain), 'SHOW_WARNING', n, s[0][0]), jqSecurly(jqSecurly('#sh-' + elementObj.id)[0].shadowRoot).find('.tt-wrapper').click(function (e) {
            jqSecurly(document).width() < 350 && jqSecurly('.tt-doc-tooltip-parent').width(200);
            let t = jqSecurly(e.target).offset(), n = {
                top: t.top - jqSecurly('.tt-doc-tooltip-parent').height() - 10,
                left: t.left - jqSecurly('.tt-doc-tooltip-parent').width() + 20
            };
            jqSecurly(document).width();
            jqSecurly('.tt-doc-tooltip-parent').css({
                opacity: 1,
                display: 'block'
            });
            jqSecurly('.tt-doc-tooltip-parent').offset(n);
            S(e);
        }), jqSecurly(jqSecurly('#sh-' + elementObj.id)[0].shadowRoot).find('.tt-wrapper').hover(function (e) {
            jqSecurly(document).width() < 350 && jqSecurly('.tt-doc-tooltip-parent').width(200);
            let t = jqSecurly(e.target).offset(), n = {
                top: t.top - jqSecurly('.tt-doc-tooltip-parent').height() - 10,
                left: t.left - jqSecurly('.tt-doc-tooltip-parent').width() + 20
            };
            jqSecurly(document).width();
            jqSecurly('.tt-doc-tooltip-parent').css({
                opacity: 1,
                display: 'block'
            });
            jqSecurly('.tt-doc-tooltip-parent').offset(n);
            S(e);
        }, function (e) {
            jqSecurly('.tt-doc-tooltip-parent').css({
                opacity: 0,
                display: 'none'
            });
        })), jqSecurly('#sh-' + jqSecurly(t.target).data('tt-id')).css({ display: 'inherit' }), i = true), i) {
            return;
        }
        fuzzyMatchingObj = FuzzySet(a);
        let u = fuzzyMatchingObj.get(n.toLowerCase(), null, o);
        u && u.length >= 1 && (jqSecurly(t.target).hasClass('tt-detected') && (r = true), jqSecurly(t.target).hasClass('tt-changed') && jqSecurly(t.target).removeClass('tt-changed'), r || (elementObj = b(t, n, u[0][1]), h(elementObj.id, E(document.domain), 'SHOW_WARNING', n, u[0][1]), jqSecurly(jqSecurly('#sh-' + elementObj.id)[0].shadowRoot).find('.tt-wrapper').click(function (e) {
            jqSecurly(document).width() < 350 && jqSecurly('.tt-doc-tooltip-parent').width(200);
            let t = jqSecurly(e.target).offset(), n = {
                top: t.top - jqSecurly('.tt-doc-tooltip-parent').height() - 10,
                left: t.left - jqSecurly('.tt-doc-tooltip-parent').width() + 20
            };
            jqSecurly(document).width();
            jqSecurly('.tt-doc-tooltip-parent').css({
                opacity: 1,
                display: 'block'
            });
            jqSecurly('.tt-doc-tooltip-parent').offset(n);
            S(e);
        }), jqSecurly(jqSecurly('#sh-' + elementObj.id)[0].shadowRoot).find('.tt-wrapper').hover(function (e) {
            jqSecurly(document).width() < 350 && jqSecurly('.tt-doc-tooltip-parent').width(200);
            let t = jqSecurly(e.target).offset(), n = {
                top: t.top - jqSecurly('.tt-doc-tooltip-parent').height() - 10,
                left: t.left - jqSecurly('.tt-doc-tooltip-parent').width() + 20
            };
            jqSecurly(e.target).parents('.tt-wrapper-parent').find('.tt-tooltip').position();
            jqSecurly('.tt-doc-tooltip-parent').css({
                opacity: 1,
                display: 'block'
            });
            jqSecurly('.tt-doc-tooltip-parent').offset(n);
            S(e);
        }, function (e) {
            jqSecurly('.tt-doc-tooltip-parent').css({
                opacity: 0,
                display: 'none'
            });
        })), i = true, jqSecurly('#sh-' + jqSecurly(t.target).data('tt-id')).css({ display: 'inherit' }));
        i || w(t);
    }
    function T(e, t) {
        jqSecurly(jqSecurly('#sh-' + jqSecurly(e.target).data('tt-id'))[0].shadowRoot).find('.tt-wrapper-parent').data('tt-typed-string', window.btoa(t));
    }
    function q(e) {
        try {
            let t = window.atob(jqSecurly(jqSecurly('#sh-' + e)[0].shadowRoot).find('.tt-wrapper-parent').data('tt-typed-string'));
            t && t.length > 100 && (t = t.length(0, 100) + '...');
            let n = window.atob(jqSecurly(jqSecurly('#sh-' + e)[0].shadowRoot).find('.tt-wrapper-parent').data('tt-matched-phrase'));
            h(e, E(document.domain), 'POST_CONTENT', t, n);
        } catch (e) {
        }
    }
    function C(e) {
        jqSecurly(e.target).removeClass('tt-changed');
        jqSecurly(e.target).removeClass('tt-detected');
        jqSecurly('#sh-' + jqSecurly(e.target).data('tt-id')).remove();
    }
    function E(e) {
        return e.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
    }
    r.onMessage.addListener(function (e) {
        if (e && 1 == e.think_twice && (a = e.bullyPhrases, s = e.wlBullyPhrases, u = e.thinkTwiceSites, o = e.fuzzy_threshold, a.length > 0 && u.length > 0)) {
            let e = E(document.domain);
            u.find(t => t === e) && (l = new RegExp('\\b' + a.join('|'), 'gim'), s.length > 0 && (c = new RegExp('\\b' + s.join('|'), 'gim')), function () {
                const e = jqSecurly('<div>', { class: 'tt-doc-tooltip-child' });
                if (e.html('<div class="tt-doc-tooltip">\n                            <span class="tt-header">Is this hurtful?</span><br>\n                            <span class="tt-text">This message may contain hurtful language. Are you sure you want to send this message?</span>\n                        </div>'), 0 == jqSecurly('body').children('.tt-doc-tooltip-parent').length) {
                    var t = document.createElement('securly-extension-tooltip');
                    t.setAttribute('class', 'tt-doc-tooltip-parent');
                    t.setAttribute('style', 'position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999999; line-height: 16px; width: 320px; opacity: 0; display: none;');
                    jqSecurly('body').append(t);
                    const n = t.attachShadow({ mode: 'open' });
                    n.appendChild(function () {
                        let e = document.createElement('style');
                        return e.textContent = '\n            .tt-doc-tooltip-parent {\n                position: fixed;\n                top: 0;\n                left: 0;\n                pointer-events: none;\n                z-index: 9999999;\n                line-height: 16px;\n                width: 320px;\n                opacity: 0;\n                display: none;\n            }\n\n            .tt-doc-tooltip {\n                display: block;\n                padding: 14px 12px;\n                border-radius: 5px;\n                font-size: 14px;\n                font-weight: bold;\n                opacity: 1;\n                pointer-events: none;\n                transition: all 0.3s ease;\n                z-index: 1;\n                background-color: #fff;\n                border: 1px solid #2581ee;\n                color: #6e6e6e;\n            }\n            \n            .tt-doc-tooltip:after {\n              display: block;\n              position: absolute;\n              bottom: 1px;\n              left: 50%;\n              width: 0;\n              height: 0;\n              content: "";\n              border: solid;\n              border-width: 10px 10px 0 10px;\n              border-color: transparent;\n              //transform: translate(-50%, 100%);\n            }\n\n            .tt-doc-tooltip .tt-header {\n                font-family: \'Metropolis Medium\',\'Roboto\',sans-serif !important;\n            }\n            \n            .tt-doc-tooltip .tt-text {\n                font-family:\'Metropolis Regular\',\'Roboto\',sans-serif !important;\n                font-size: 13px;\n                color: #7e7e7e;\n            }\n        ', e;
                    }());
                    n.appendChild(e[0]);
                }
                let n = E(document.domain);
                [
                    'discord.com',
                    'pinterest.com',
                    'in.pinterest.com',
                    'pinterest.co.uk',
                    'instagram.com'
                ].find(e => e === n) && ('discord.com' == (r = n) ? f = true : -1 != r.indexOf('pinterest.co') ? d = true : 'instagram.com' == r && (p = true));
                var r;
            }(), function () {
                t = new MutationObserver(g);
                n = {
                    subtree: true,
                    childList: true,
                    attributes: false,
                    attributeOldValue: false,
                    characterData: false,
                    characterDataOldValue: false
                };
                t.disconnect();
                t.observe(document, n);
                y(document).forEach(function (e) {
                    t.observe(e, n);
                });
                let e = jqSecurly('input[type="text"]');
                let r = jqSecurly('div[role="textbox"]'), o = jqSecurly('textarea'), i = jqSecurly('[contenteditable="true"]');
                v([].concat(e, [], r, o, i));
            }());
        }
    });
    e(function () {
        r.postMessage({ action: 'fetchThinkTwice' });
    });
}(jqSecurly));