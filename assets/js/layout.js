! function() {
    "use strict";
    var a, o;
    sessionStorage.getItem("defaultAttribute") ? ((o = {})["data-layout"] = sessionStorage.getItem("data-layout"), o["data-sidebar-size"] = sessionStorage.getItem("data-sidebar-size"), o["data-layout-mode"] = sessionStorage.getItem("data-layout-mode"), o["data-layout-width"] = sessionStorage.getItem("data-layout-width"), o["data-sidebar"] = sessionStorage.getItem("data-sidebar"), o["data-layout-direction"] = sessionStorage.getItem("data-layout-direction"), o["data-layout-position"] = sessionStorage.getItem("data-layout-position"), o["data-layout-style"] = sessionStorage.getItem("data-layout-style"), o["data-topbar"] = sessionStorage.getItem("data-topbar"), Object.keys(o).forEach(function(t) {
        o[t] && o[t] && document.documentElement.setAttribute(t, o[t])
    })) : (a = document.documentElement.attributes, o = {}, Object.keys(a).forEach(function(t) {
        var e;
        a[t] && a[t].nodeName && "undefined" != a[t].nodeName && (e = a[t].nodeName, document.documentElement.setAttribute(o[e], a[t].nodeValue))
    }))
}();