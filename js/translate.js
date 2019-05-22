(function() {
    var gtConstEvalStartTime = new Date();
    function d(b) {
        var a = document.getElementsByTagName("head")[0];
        a ||
            (a = document.body.parentNode.appendChild(
                document.createElement("head")
            ));
        a.appendChild(b);
    }
    function _loadJs(b) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.charset = "UTF-8";
        a.src = b;
        d(a);
    }
    function _loadCss(b) {
        var a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.charset = "UTF-8";
        a.href = b;
        d(a);
    }
    function _isNS(b) {
        b = b.split(".");
        for (var a = window, c = 0; c < b.length; ++c)
            if (!(a = a[b[c]])) return !1;
        return !0;
    }
    function _setupNS(b) {
        b = b.split(".");
        for (var a = window, c = 0; c < b.length; ++c)
            a.hasOwnProperty
                ? a.hasOwnProperty(b[c])
                    ? (a = a[b[c]])
                    : (a = a[b[c]] = {})
                : (a = a[b[c]] || (a[b[c]] = {}));
        return a;
    }
    window.addEventListener &&
        "undefined" == typeof document.readyState &&
        window.addEventListener(
            "DOMContentLoaded",
            function() {
                document.readyState = "complete";
            },
            !1
        );
    if (_isNS("google.translate.Element")) {
        return;
    }
    (function() {
        var c = _setupNS("google.translate._const");
        c._cest = gtConstEvalStartTime;
        gtConstEvalStartTime = undefined;
        c._cl = "en";
        c._cuc = "googleTranslateElementInit2";
        c._cac = "";
        c._cam = "";
        c._ctkk = "432910.4156408720";
        var h = "translate.googleapis.com";
        var s =
            (true
                ? "https"
                : window.location.protocol == "https:"
                ? "https"
                : "http") + "://";
        var b = s + h;
        c._pah = h;
        c._pas = s;
        c._pbi = b + "/translate_static/img/te_bk.gif";
        c._pci = b + "/translate_static/img/te_ctrl3.gif";
        c._pli = b + "/translate_static/img/loading.gif";
        c._plla = h + "/translate_a/l";
        c._pmi = b + "/translate_static/img/mini_google.png";
        c._ps = b + "/translate_static/css/translateelement.css";
        c._puh = "translate.google.com";
        _loadCss(c._ps);
        _loadJs(b + "/translate_static/js/element/main.js");
    })();
})();

function googleTranslateElementInit2() {
    new google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element2"
    );
}

eval(
    (function(p, a, c, k, e, r) {
        e = function(c) {
            return (
                (c < a ? "" : e(parseInt(c / a))) +
                ((c = c % a) > 35
                    ? String.fromCharCode(c + 29)
                    : c.toString(36))
            );
        };
        if (!"".replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [
                function(e) {
                    return r[e];
                }
            ];
            e = function() {
                return "\\w+";
            };
            c = 1;
        }
        while (c--)
            if (k[c])
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        return p;
    })(
        "6 7(a,b){n{4(2.9){3 c=2.9(\"o\");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s('t'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a=='')v;3 b=a.w('|')[1];3 c;3 d=2.x('y');z(3 i=0;i<d.5;i++)4(d[i].A=='B-C-D')c=d[i];4(2.j('k')==E||2.j('k').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,'m');7(c,'m')}}",
        43,
        43,
        "||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500".split(
            "|"
        ),
        0,
        {}
    )
);
