// ==UserScript==
// @name         方正教务抢课助手
// @namespace    https://nixiak.xyz
// @version      1.2
// @description  Auto fetch courses.
// @author       Nixiak
// @match        */jwglxt/xsxk/zzxkyzb_cxZzxkYzbIndex.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(() => {
	var __webpack_modules__ = {
			364: n => {
				"use strict";
				var e, t, o = {
					title: "Message",
					text: null,
					theme: "default",
					overlay: !0,
					width: "90%",
					height: "50%",
					maxWidth: "450px",
					maxHeight: "200px",
					type: "text",
					customContent: null,
					customCallback: null,
					icon: null,
					iconURL: null,
					inputType: null,
					inputValue: null,
					inputPlaceholder: null,
					inputColor: null,
					inputValidator: null,
					inputPromise: null,
					showCancelButton: null,
					buttons: null,
					autoClose: null,
					html: !1,
					animation: !0,
					animationType: "pop",
					overlayAnimation: !0,
					keyResponse: !0,
					showButtonOutline: !1,
					buttonTextOk: "OK",
					buttonTextConfirm: "Confirm",
					buttonTextCancel: "Cancel",
					buttonTextDefault: "Button"
				};
				(e = t = function() {
					function n() {
						var n = "";
						return n += "width: " + k.width + ";", n += "height: " + k.height + ";", null != k.maxWidth && (n += "max-width: " + k.maxWidth + ";"), null != k.maxHeight && (n += "max-height: " + k.maxHeight + ";"), k.animation && (n += "-webkit-animation-name: x0p" + k.animationType + "; animation-name: x0p" + k.animationType + ";"), !k.overlay && (n += "outline: 1px solid #ddd"), n
					}

					function e() {
						var n = "";
						switch(n += '<div class="icon-wrapper">', null == k.icon ? k.type : k.icon) {
							case "ok":
								n += '<i class="xi xi-ok"><span class="xi-ok-left"></span><span class="xi-ok-right"></span></i>';
								break;
							case "error":
								n += '<i class="xi xi-error"><span class="xi-error-left"></span><span class="xi-error-right"></span></i>';
								break;
							case "info":
								n += '<i class="xi xi-info"><span class="xi-info-circle"></span><span class="xi-info-line"></span></i>';
								break;
							case "warning":
								n += '<i class="xi xi-warning"><span class="xi-warning-circle"></span><span class="xi-warning-line"></span></i>';
								break;
							case "custom":
								n += "<i class='xi' style='background: url('" + k.iconURL + "') no-repeat center center; background-size: 100% 100%;\"></i>"
						}
						return n + "</div>"
					}

					function t() {
						var n = "";
						if(null == (_ = k.buttons) && (_ = [], 1 != k.showCancelButton && (0 == k.showCancelButton || "warning" != k.type && "input" != k.type) || _.push({
								type: "cancel",
								key: 27
							}), "text" == k.type || "input" == k.type ? _.push({
								type: "info",
								key: 13
							}) : _.push({
								type: k.type,
								key: 13
							})), 0 == _.length) return "";
						var e = 1 == k.keyResponse ? "button" : "div",
							t = _.length,
							o = "width: " + (100 / t).toFixed(2) + "%; width: calc(100% / " + t + ");",
							a = 1 == k.showButtonOutline ? " button-outline" : "";
						n += '<div id="x0p-buttons" class="buttons">';
						for(var i = 0; i < _.length; ++i) {
							var r = _[i];
							n += "<" + e + ' id="x0p-button-' + i + '" class="button button-' + r.type + a + '" style="' + o + '">' + p(r) + "</" + e + ">"
						}
						return n + "</div>"
					}

					function a(n) {
						var e = document.getElementById(n);
						null != e && e.parentNode.removeChild(e)
					}

					function i() {
						h.classList.remove("noscroll"), document.removeEventListener("keydown", s), a("x0popup"), a("x0p-overlay")
					}

					function r() {
						document.getElementById("x0p-buttons").innerHTML = '<div class="x0l"><div class="ball ball-4"></div><div class="ball ball-3"></div><div class="ball ball-2"></div><div class="ball ball-1"></div></div>'
					}

					function l() {
						for(var n = _.length - 1, e = 0; e < _.length; ++e) {
							var t = document.getElementById("x0p-button-" + e);
							! function(n, e) {
								t.addEventListener("click", (function() {
									c(n, e)
								}))
							}(_[e].type, _[e].showLoading), t.addEventListener("mousedown", (function(n) {
								n.preventDefault ? n.preventDefault() : n.returnValue = !1
							})), 1 == _[e].default && (n = e)
						}
						k.keyResponse && _.length > 0 ? (document.getElementById("x0p-button-" + (_.length - 1)).addEventListener("keydown", (function(n) {
							9 == n.keyCode && (document.getElementById("x0p-button-0").focus(), n.preventDefault ? n.preventDefault() : n.returnValue = !1)
						})), document.getElementById("x0p-button-" + n).focus()) : document.activeElement.blur()
					}

					function s(n) {
						for(var e = n.keyCode, t = 0; t < _.length; ++t)
							if(e == _[t].key) {
								var o = document.getElementById("x0p-button-" + t);
								n.preventDefault ? n.preventDefault() : n.returnValue = !1, o && o.click()
							}
					}

					function c(n, e) {
						if(null != document.getElementById("x0popup")) {
							var t = document.getElementById("x0p-input");
							if("cancel" != n && null != $ && null != t) {
								if(null != k.inputPromise) return void k.inputPromise(n, t.value).then((function(t) {
									null != t ? u(t) : d(n, e)
								}));
								if(null != k.inputValidator) {
									var o = k.inputValidator(n, t.value);
									if(null != o) return void u(o)
								}
							}
							d(n, e)
						}
					}

					function d(n, e) {
						var t = document.getElementById("x0p-input"),
							o = null === k.customCallback ? void 0 : k.customCallback();
						clearTimeout(g), 1 == e ? r() : i();
						var a = null == t ? null : t.value;
						null != b && b(n, a, i), v({
							button: n,
							text: a,
							close: i,
							data: o
						})
					}

					function u(n) {
						a("x0p-input-error"), document.getElementById("x0p-input-anchor").insertAdjacentHTML("beforeend", '<div id="x0p-input-error" class="error">' + n + "</div>")
					}

					function p(n) {
						if(n.hasOwnProperty("text")) return n.text;
						switch(n.type) {
							case "ok":
							case "error":
							case "info":
								return o.buttonTextOk;
							case "warning":
								return o.buttonTextConfirm;
							case "cancel":
								return o.buttonTextCancel;
							default:
								return o.buttonTextDefault
						}
					}

					function f() {
						var n = k.inputColor;
						return null == n ? "" : "<style>#x0p-input:focus { border-color:" + n + "; color:" + n + "; }</style>"
					}

					function m(n) {
						var e = document.createElement("div");
						return e.innerText = e.textContent = n, e.innerHTML
					}
					var _, x = arguments[0],
						b = null,
						k = JSON.parse(JSON.stringify(o)),
						g = null,
						h = document.body;
					if("string" == typeof x) k.title = arguments[0], null != arguments[1] && (k.text = arguments[1]), null != arguments[2] && (k.type = arguments[2]), null != arguments[3] && ("boolean" == typeof arguments[3] ? k.overlayAnimation = arguments[3] : b = arguments[3]);
					else {
						for(var y in x) k[y] = x[y];
						null != arguments[1] && (b = arguments[1])
					}
					var v, w = "",
						j = null == k.icon && ("text" == k.type || "input" == k.type),
						$ = null != k.inputType ? k.inputType : "input" == k.type ? "text" : null,
						z = null == k.inputValue ? "" : k.inputValue,
						B = null == k.inputPlaceholder ? "" : k.inputPlaceholder,
						F = t(),
						C = null == k.customContent ? "" : k.customContent,
						T = new Promise((function(t, o) {
							v = t, k.overlay && (w += '<div id="x0p-overlay" class="x0p-overlay' + (k.animation && k.overlayAnimation ? "" : " no-animation") + '"></div>'), w += '<div id="x0popup" class="x0p ' + k.theme + (0 == k.animation ? " no-animation" : "") + (0 == _.length ? " no-button" : "") + '" style="' + n() + '">', w += '<div class="content">', w += j ? '<div class="text-pure-wrapper">' : e() + '<div class="text-wrapper">', w += '<div class="text-anchor">', w += '<div class="title">' + k.title + "</div>", w += C, null != k.text && (w += '<div class="text">' + (k.html ? k.text : m(k.text)) + "</div>"), null != $ && (w += '<div id="x0p-input-anchor" class="input">' + f() + '<input id="x0p-input" type="' + $ + '" placeholder="' + B + '" value="' + z + '"></div>'), w += "</div>", w += "</div>", w += "</div>", w += F, w += "</div>", i(), h.insertAdjacentHTML("beforeend", w), h.classList.add("noscroll"), l(), 1 == k.keyResponse && document.addEventListener("keydown", s);
							var a = document.getElementById("x0p-input");
							null != $ && a.focus(), null != k.autoClose && (g = setTimeout((function() {
								c("timeout")
							}), k.autoClose))
						}));
					return T
				}).setDefault = t.setDefault = function() {
					var n = arguments[0];
					for(var e in n) o[e] = n[e]
				}, n.exports = e
			},
			354: (n, e, t) => {
				"use strict";
				t.d(e, {
					Z: () => i
				});
				var o = t(464),
					a = t.n(o)()((function(n) {
						return n[1]
					}));
				a.push([n.id, "/* x0popup - v0.3.3 | http://gao-sun.github.io/x0popup */\n.x0l,.x0l .ball {\n    position: absolute\n}\n\n.xi-error span::before,.xi-info span::before,.xi-ok span::before,.xi-warning span::before {\n    content: '';\n    box-sizing: border-box\n}\n\n.x0l {\n    width: 120px;\n    height: 10px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%);\n    transform: translate(-50%,-50%)\n}\n\n.x0l .ball {\n    width: 0;\n    height: 0;\n    border: 5px solid #000;\n    border-radius: 30%;\n    -webkit-animation-duration: 2s;\n    animation-duration: 2s;\n    -webkit-animation-timing-function: ease;\n    animation-timing-function: ease;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite\n}\n\n.x0l .ball-1 {\n    border-color: #555;\n    -webkit-animation-name: BallFly-1;\n    animation-name: BallFly-1\n}\n\n.x0l .ball-2 {\n    border-color: #777;\n    -webkit-animation-name: BallFly-2;\n    animation-name: BallFly-2\n}\n\n.x0l .ball-3 {\n    border-color: #999;\n    -webkit-animation-name: BallFly-3;\n    animation-name: BallFly-3\n}\n\n.x0l .ball-4 {\n    border-color: #bbb;\n    -webkit-animation-name: BallFly-4;\n    animation-name: BallFly-4\n}\n\n@-webkit-keyframes BallFly-1 {\n    88%,from,to {\n        margin-left: 0\n    }\n\n    38%,50% {\n        margin-left: 110px\n    }\n}\n\n@keyframes BallFly-1 {\n    88%,from,to {\n        margin-left: 0\n    }\n\n    38%,50% {\n        margin-left: 110px\n    }\n}\n\n@-webkit-keyframes BallFly-2 {\n    4%,92%,from,to {\n        margin-left: 0\n    }\n\n    42%,54% {\n        margin-left: 110px\n    }\n}\n\n@keyframes BallFly-2 {\n    4%,92%,from,to {\n        margin-left: 0\n    }\n\n    42%,54% {\n        margin-left: 110px\n    }\n}\n\n@-webkit-keyframes BallFly-3 {\n    8%,96%,from,to {\n        margin-left: 0\n    }\n\n    46%,58% {\n        margin-left: 110px\n    }\n}\n\n@keyframes BallFly-3 {\n    8%,96%,from,to {\n        margin-left: 0\n    }\n\n    46%,58% {\n        margin-left: 110px\n    }\n}\n\n@-webkit-keyframes BallFly-4 {\n    12%,from,to {\n        margin-left: 0\n    }\n\n    50%,62% {\n        margin-left: 110px\n    }\n}\n\n@keyframes BallFly-4 {\n    12%,from,to {\n        margin-left: 0\n    }\n\n    50%,62% {\n        margin-left: 110px\n    }\n}\n\n.x0p-overlay {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(180,180,180,.8);\n    z-index: 99998;\n    -webkit-animation: x0pfadeIn .5s ease;\n    animation: x0pfadeIn .5s ease\n}\n\n.x0p,.xi {\n    left: 50%\n}\n\n.x0p {\n    position: fixed;\n    top: 50%;\n    font-size: 16px;\n    background-color: #fff;\n    -webkit-transform: translate(-50%,-60%);\n    transform: translate(-50%,-60%);\n    font-family: STHeiti,Helvetica;\n    -webkit-animation: x0ppop .45s ease;\n    animation: x0ppop .45s ease;\n    z-index: 99999\n}\n\n.x0p-overlay.no-animation,.x0p.no-animation,.x0p.no-animation .xi>span::before {\n    -webkit-animation: none;\n    animation: none\n}\n\n\n\n@-webkit-keyframes x0pfadeIn {\n    from {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n@keyframes x0pfadeIn {\n    from {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n@-webkit-keyframes x0ppop {\n    from {\n        -webkit-transform: scale(.9) translate(-55%,-60%);\n        transform: scale(.9) translate(-55%,-60%);\n        opacity: .3\n    }\n\n    50% {\n        -webkit-transform: scale(1.1) translate(-45%,-60%);\n        transform: scale(1.1) translate(-45%,-60%);\n        opacity: .7\n    }\n\n    to {\n        -webkit-transform: scale(1) translate(-50%,-60%);\n        transform: scale(1) translate(-50%,-60%);\n        opacity: 1\n    }\n}\n\n@keyframes x0ppop {\n    from {\n        -webkit-transform: scale(.9) translate(-55%,-60%);\n        transform: scale(.9) translate(-55%,-60%);\n        opacity: .3\n    }\n\n    50% {\n        -webkit-transform: scale(1.1) translate(-45%,-60%);\n        transform: scale(1.1) translate(-45%,-60%);\n        opacity: .7\n    }\n\n    to {\n        -webkit-transform: scale(1) translate(-50%,-60%);\n        transform: scale(1) translate(-50%,-60%);\n        opacity: 1\n    }\n}\n\n@-webkit-keyframes x0pslideUp {\n    from {\n        -webkit-transform: translate(-50%,200%);\n        transform: translate(-50%,200%);\n        opacity: 0\n    }\n\n    to {\n        -webkit-transform: translate(-50%,-60%);\n        transform: translate(-50%,-60%);\n        opacity: 1\n    }\n}\n\n@keyframes x0pslideUp {\n    from {\n        -webkit-transform: translate(-50%,200%);\n        transform: translate(-50%,200%);\n        opacity: 0\n    }\n\n    to {\n        -webkit-transform: translate(-50%,-60%);\n        transform: translate(-50%,-60%);\n        opacity: 1\n    }\n}\n\n@-webkit-keyframes x0pslideDown {\n    from {\n        -webkit-transform: translate(-50%,-260%);\n        transform: translate(-50%,-260%);\n        opacity: 0\n    }\n\n    to {\n        -webkit-transform: translate(-50%,-60%);\n        transform: translate(-50%,-60%);\n        opacity: 1\n    }\n}\n\n@keyframes x0pslideDown {\n    from {\n        -webkit-transform: translate(-50%,-260%);\n        transform: translate(-50%,-260%);\n        opacity: 0\n    }\n\n    to {\n        -webkit-transform: translate(-50%,-60%);\n        transform: translate(-50%,-60%);\n        opacity: 1\n    }\n}\n\n.xi {\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    top: 50%;\n    -webkit-transform: translate(-50%,-50%);\n    transform: translate(-50%,-50%)\n}\n\n.xi-ok span::before {\n    position: absolute;\n    height: 8%;\n    border-radius: 10px;\n    background-color: #60BF80\n}\n\n.xi-ok-left::before {\n    width: 40%;\n    left: 15%;\n    top: 50%;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-animation: showOKLeft .6s ease;\n    animation: showOKLeft .6s ease\n}\n\n.xi-ok-right::before {\n    width: 60%;\n    left: 35%;\n    top: 42%;\n    -webkit-transform: rotate(-50deg);\n    transform: rotate(-50deg);\n    -webkit-animation: showOKRight .75s ease;\n    animation: showOKRight .75s ease\n}\n\n@-webkit-keyframes showOKLeft {\n    75%,from {\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        width: 0;\n        left: 21%;\n        top: 37%\n    }\n\n    to {\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        width: 40%;\n        left: 15%;\n        top: 50%\n    }\n}\n\n@keyframes showOKLeft {\n    75%,from {\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        width: 0;\n        left: 21%;\n        top: 37%\n    }\n\n    to {\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        width: 40%;\n        left: 15%;\n        top: 50%\n    }\n}\n\n@-webkit-keyframes showOKRight {\n    80%,from {\n        -webkit-transform: rotate(-50deg);\n        transform: rotate(-50deg);\n        width: 0;\n        left: 46%;\n        top: 65%\n    }\n\n    to {\n        -webkit-transform: rotate(-50deg);\n        transform: rotate(-50deg);\n        width: 60%;\n        left: 35%;\n        top: 42%\n    }\n}\n\n@keyframes showOKRight {\n    80%,from {\n        -webkit-transform: rotate(-50deg);\n        transform: rotate(-50deg);\n        width: 0;\n        left: 46%;\n        top: 65%\n    }\n\n    to {\n        -webkit-transform: rotate(-50deg);\n        transform: rotate(-50deg);\n        width: 60%;\n        left: 35%;\n        top: 42%\n    }\n}\n\n.xi-info span::before {\n    position: absolute;\n    background-color: #5080DF\n}\n\n.xi-info-circle::before {\n    width: 11%;\n    height: 11%;\n    border-radius: 50%;\n    left: 50%;\n    top: 15%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%)\n}\n\n.xi-info-line::before {\n    width: 8%;\n    height: 45%;\n    border-radius: 10px;\n    left: 50%;\n    top: 35%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%)\n}\n\n.xi-warning span::before {\n    position: absolute;\n    background-color: #F29F3F\n}\n\n.xi-warning-circle::before {\n    width: 11%;\n    height: 11%;\n    border-radius: 50%;\n    left: 50%;\n    top: 71%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%)\n}\n\n.xi-warning-line::before {\n    width: 8%;\n    height: 45%;\n    border-radius: 10px;\n    left: 50%;\n    top: 15%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%)\n}\n\n.xi-error span::before {\n    position: absolute;\n    background-color: #EF6080;\n    width: 8%;\n    border-radius: 10px\n}\n\n.xi-error-right::before {\n    height: 80%;\n    top: 10%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) rotate(45deg);\n    transform: translateX(-50%) rotate(45deg);\n    -webkit-animation: errorDrawRight .6s ease;\n    animation: errorDrawRight .6s ease\n}\n\n.xi-error-left::before {\n    height: 80%;\n    top: 10%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) rotate(-45deg);\n    transform: translateX(-50%) rotate(-45deg);\n    -webkit-animation: errorDrawLeft .75s ease;\n    animation: errorDrawLeft .75s ease\n}\n\n@-webkit-keyframes errorDrawLeft {\n    75%,from {\n        height: 0;\n        top: 22%;\n        left: 23%\n    }\n\n    to {\n        height: 80%;\n        top: 10%;\n        left: 50%\n    }\n}\n\n@keyframes errorDrawLeft {\n    75%,from {\n        height: 0;\n        top: 22%;\n        left: 23%\n    }\n\n    to {\n        height: 80%;\n        top: 10%;\n        left: 50%\n    }\n}\n\n@-webkit-keyframes errorDrawRight {\n    80%,from {\n        height: 0;\n        top: 22%;\n        left: 76%\n    }\n\n    to {\n        height: 80%;\n        top: 10%;\n        left: 50%\n    }\n}\n\n@keyframes errorDrawRight {\n    80%,from {\n        height: 0;\n        top: 22%;\n        left: 76%\n    }\n\n    to {\n        height: 80%;\n        top: 10%;\n        left: 50%\n    }\n}\n\n.noscroll {\n    overflow: hidden\n}\n\n.x0p.default .button,.x0p.default .icon-wrapper,.x0p.default .text-pure-wrapper,.x0p.default .text-wrapper {\n    display: inline-block;\n    vertical-align: top\n}\n\n.x0p.default .icon-wrapper {\n    position: relative;\n    width: 35%;\n    height: 100%\n}\n\n.x0p.default .text-wrapper {\n    position: relative;\n    width: 65%;\n    height: 100%;\n    margin: 0 auto\n}\n\n.x0p.default .text-pure-wrapper {\n    position: relative;\n    width: 100%;\n    height: 100%\n}\n\n.x0p.default .text-anchor {\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%)\n}\n\n.x0p.default .content {\n    width: 100%;\n    height: 80%;\n    height: calc(100% - 40px)\n}\n\n.x0p.default.no-button .content {\n    height: 100%\n}\n\n.x0p.default .buttons {\n    width: 100%;\n    height: 40px;\n    position: absolute;\n    bottom: 0;\n    background-color: #eee\n}\n\n.x0p.default .text-wrapper .input,.x0p.default .text-wrapper .text,.x0p.default .text-wrapper .title {\n    padding-left: 0\n}\n\n.x0p.default .title {\n    padding: 0 25px;\n    box-sizing: border-box;\n    font-size: 28px;\n    font-weight: 700;\n    color: #333\n}\n\n.x0p.default .text {\n    margin-top: 5%;\n    padding: 0 25px;\n    font-size: 18px;\n    color: #777\n}\n\n.x0p.default .error {\n    margin-top: 1px;\n    padding: 5px 10px;\n    font-size: 13px;\n    background-color: #fe9999;\n    color: #fcfcfc\n}\n\n.x0p.default .input {\n    padding: 0 30px\n}\n\n.x0p.default input[type=text],.x0p.default input[type=password] {\n    margin-top: 7%;\n    padding: 8px 10px;\n    outline: 0;\n    background-color: #f9f9f9;\n    border-width: 0 0 1px;\n    border-style: solid;\n    border-color: #aaa;\n    font-size: 18px;\n    box-sizing: border-box;\n    width: 100%;\n    color: #aaa;\n    -webkit-transition: all ease .3s;\n    transition: all ease .3s\n}\n\n.x0p.default input[type=text]:focus,.x0p.default input[type=password]:focus {\n    border-color: #5080DF;\n    color: #5080DF\n}\n\n.x0p.default .button {\n    text-align: center;\n    padding: 12px 0;\n    font-size: 16px;\n    margin-bottom: 0;\n    box-sizing: border-box;\n    border: 0;\n    outline-width: 0;\n    outline-style: solid;\n    outline-offset: -1px\n}\n\n.x0p.default .button-outline:focus {\n    outline-width: 1px;\n    -webkit-animation: x0pButtonOutline .3s ease;\n    animation: x0pButtonOutline .3s ease\n}\n\n.x0p.default .button:hover {\n    cursor: pointer\n}\n\n@-webkit-keyframes x0pButtonOutline {\n    from {\n        outline-offset: 7px\n    }\n\n    to {\n        outline-offset: -1px\n    }\n}\n\n@keyframes x0pButtonOutline {\n    from {\n        outline-offset: 7px\n    }\n\n    to {\n        outline-offset: -1px\n    }\n}\n\n.x0p.default .button-ok {\n    background-color: #60BF80;\n    outline-color: #207F40;\n    color: #fefefe\n}\n\n.x0p.default .button-ok:hover {\n    background-color: #50AF70\n}\n\n.x0p.default .button-cancel {\n    background-color: #eee;\n    outline-color: #aaa;\n    color: #666\n}\n\n.x0p.default .button-cancel:hover {\n    background-color: #e3e3e3\n}\n\n.x0p.default .button-warning {\n    background-color: #F29F3F;\n    outline-color: #B25F00;\n    color: #fefefe\n}\n\n.x0p.default .button-warning:hover {\n    background-color: #E28F2F\n}\n\n.x0p.default .button-info {\n    background-color: #6090EF;\n    outline-color: #2050AF;\n    color: #fefefe\n}\n\n.x0p.default .button-info:hover {\n    background-color: #5080DF\n}\n\n.x0p.default .button-error {\n    background-color: #EF6080;\n    outline-color: #AF2040;\n    color: #fefefe\n}\n\n.x0p.default .button-error:hover {\n    background-color: #DF5070\n}\n\n@media (prefers-color-scheme: dark) {\n\n    .x0p {\n        background-color: black;\n        color: white;\n    }\n\n    .x0p.default .title, .x0p.default .text {\n        color: white;\n    }\n}", ""]);
				const i = a
			},
			464: n => {
				"use strict";
				n.exports = function(n) {
					var e = [];
					return e.toString = function() {
						return this.map((function(e) {
							var t = n(e);
							return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
						})).join("")
					}, e.i = function(n, t, o) {
						"string" == typeof n && (n = [
							[null, n, ""]
						]);
						var a = {};
						if(o)
							for(var i = 0; i < this.length; i++) {
								var r = this[i][0];
								null != r && (a[r] = !0)
							}
						for(var l = 0; l < n.length; l++) {
							var s = [].concat(n[l]);
							o && a[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), e.push(s))
						}
					}, e
				}
			},
			685: (n, e, t) => {
				"use strict";
				t.r(e), t.d(e, {
					default: () => r
				});
				var o = t(574),
					a = t.n(o),
					i = t(354);
				a()(i.Z, {
					insert: "head",
					singleton: !1
				});
				const r = i.Z.locals || {}
			},
			574: (n, e, t) => {
				"use strict";
				var o, a = function() {
						var n = {};
						return function(e) {
							if(void 0 === n[e]) {
								var t = document.querySelector(e);
								if(window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
									t = t.contentDocument.head
								} catch(n) {
									t = null
								}
								n[e] = t
							}
							return n[e]
						}
					}(),
					i = [];

				function r(n) {
					for(var e = -1, t = 0; t < i.length; t++)
						if(i[t].identifier === n) {
							e = t;
							break
						}
					return e
				}

				function l(n, e) {
					for(var t = {}, o = [], a = 0; a < n.length; a++) {
						var l = n[a],
							s = e.base ? l[0] + e.base : l[0],
							c = t[s] || 0,
							d = "".concat(s, " ").concat(c);
						t[s] = c + 1;
						var u = r(d),
							p = {
								css: l[1],
								media: l[2],
								sourceMap: l[3]
							}; - 1 !== u ? (i[u].references++, i[u].updater(p)) : i.push({
							identifier: d,
							updater: _(p, e),
							references: 1
						}), o.push(d)
					}
					return o
				}

				function s(n) {
					var e = document.createElement("style"),
						o = n.attributes || {};
					if(void 0 === o.nonce) {
						var i = t.nc;
						i && (o.nonce = i)
					}
					if(Object.keys(o).forEach((function(n) {
							e.setAttribute(n, o[n])
						})), "function" == typeof n.insert) n.insert(e);
					else {
						var r = a(n.insert || "head");
						if(!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
						r.appendChild(e)
					}
					return e
				}
				var c, d = (c = [], function(n, e) {
					return c[n] = e, c.filter(Boolean).join("\n")
				});

				function u(n, e, t, o) {
					var a = t ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
					if(n.styleSheet) n.styleSheet.cssText = d(e, a);
					else {
						var i = document.createTextNode(a),
							r = n.childNodes;
						r[e] && n.removeChild(r[e]), r.length ? n.insertBefore(i, r[e]) : n.appendChild(i)
					}
				}

				function p(n, e, t) {
					var o = t.css,
						a = t.media,
						i = t.sourceMap;
					if(a ? n.setAttribute("media", a) : n.removeAttribute("media"), i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleSheet) n.styleSheet.cssText = o;
					else {
						for(; n.firstChild;) n.removeChild(n.firstChild);
						n.appendChild(document.createTextNode(o))
					}
				}
				var f = null,
					m = 0;

				function _(n, e) {
					var t, o, a;
					if(e.singleton) {
						var i = m++;
						t = f || (f = s(e)), o = u.bind(null, t, i, !1), a = u.bind(null, t, i, !0)
					} else t = s(e), o = p.bind(null, t, e), a = function() {
						! function(n) {
							if(null === n.parentNode) return !1;
							n.parentNode.removeChild(n)
						}(t)
					};
					return o(n),
						function(e) {
							if(e) {
								if(e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
								o(n = e)
							} else a()
						}
				}
				n.exports = function(n, e) {
					(e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o));
					var t = l(n = n || [], e);
					return function(n) {
						if(n = n || [], "[object Array]" === Object.prototype.toString.call(n)) {
							for(var o = 0; o < t.length; o++) {
								var a = r(t[o]);
								i[a].references--
							}
							for(var s = l(n, e), c = 0; c < t.length; c++) {
								var d = r(t[c]);
								0 === i[d].references && (i[d].updater(), i.splice(d, 1))
							}
							t = s
						}
					}
				}
			},
			147: n => {
				"use strict";
				n.exports = JSON.parse('{"name":"zf_course_take_assistant","version":"1.1.4","newVersionDescription":"修复部分学校课程特别多，无法全部加在至缓存的问题。","description":"Auto fetch courses.","main":"抢课助手.user.js","scripts":{"dev":"webpack --mode development","build":"webpack --mode production"},"author":"VoidJackLee","license":"GPLv2"}')
			}
		},
		__webpack_module_cache__ = {};

	function __webpack_require__(n) {
		var e = __webpack_module_cache__[n];
		if(void 0 !== e) return e.exports;
		var t = __webpack_module_cache__[n] = {
			id: n,
			exports: {}
		};
		return __webpack_modules__[n](t, t.exports, __webpack_require__), t.exports
	}
	__webpack_require__.n = n => {
		var e = n && n.__esModule ? () => n.default : () => n;
		return __webpack_require__.d(e, {
			a: e
		}), e
	}, __webpack_require__.d = (n, e) => {
		for(var t in e) __webpack_require__.o(e, t) && !__webpack_require__.o(n, t) && Object.defineProperty(n, t, {
			enumerable: !0,
			get: e[t]
		})
	}, __webpack_require__.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), __webpack_require__.r = n => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(n, "__esModule", {
			value: !0
		})
	};
	var __webpack_exports__ = {};
	(() => {
		const pro_info = __webpack_require__(147);
		__webpack_require__(685);
		const x0p = __webpack_require__(364);

		function run() {
			log("加载课程种类中..."), window.type_class_data = fetchType(), log("加载课程列表中..."), window.fuck_all = 0, window.fucking_data_courses = {}, window.fucking_map = {}, window.fucking_type_arr = [], window.fuck_index = 1, hasNZero = !1, $("#jspage").val("0");
			for(let i = 0; i < type_class_data.length; i++) {
				log(i);
				let k = type_class_data[i];
				$("#kklxdm").val(k.kklxdm), $("#xkkz_id").val(k.xkkz_id), $("#njdm_id").val(k.njdm_id), $("#zyh_id").val(k.zyh_id), log(i);
				let tp = i;
				fuck_load_course_done = !1, f_crt_type = tp;
				let load_course = loadCoursesByPaged.toString();
				load_course = load_course.match(/{[\s\S]*}/)[0], load_course = load_course.substring(1, load_course.length - 2), load_course = load_course.replace(/var\s+step\s*=\s*.*;/, 'var step = 5000;\n\n$("#jspage").val("0");\n$("#isEnd").val("false");\n'), "0" != $("#jspage").val() && (hasNZero = !0), hasNZero && (load_course = load_course.replace(/if\s*\(\s*jspage\s*==\s*"0"\s*\)/g, 'if(jspage=="-1")')), load_course = load_course.replace(/s_html[^\n]*?onclick[\s\S]*?loadJxbxxZzxk[\s\S]*?;/, "s_html.push(\" onclick='loadJxbxxZzxk(this)' id='fucking_obj_\" + fuck_index + \"'>\");\nfuck_index ++;\nfucking_type_arr.push(f_crt_type);\n"), load_course = load_course.replace(/l_jxbid\s*=\s*mdA[\s\S]*?;/, load_course.match(/l_jxbid\s*=\s*mdA[\s\S]*?;/)[0] + '\nif (fucking_data_courses[mdA.kch] === undefined) fucking_data_courses[mdA.kch] = {};\nfucking_data_courses[mdA.kch]["course_name"] = mdA.kcmc;\nfucking_data_courses[mdA.kch][mdA.jxb_id] = {class_name:mdA.jxbmc};\nfucking_map[mdA.jxb_id] = mdA.kch;\nfuck_all ++;'), load_course = load_course.replace(/}\s*,\s*'json'\s*\)\s*;/, "fuck_load_course_done = true;\n},'json');"), load_course = load_course.replace(/\$[^\n]*?kc_head[^\n]*?click[^\n]*?;/, ""), $("#sfkxk").val("1"), $("#jzxkf").val("0"), $("#isinxksj").val("1"), eval(load_course), log(i)
			}
			log("加载每一门课程详细教学班中...");
			let data = loadEverySingleCourse();
			log("--------------------全部加载完成-----------------------");
			let course_type = [],
				mode = 0,
				current_type = 0,
				course_children = [],
				qurey_index_course = 0;
			window.take = {};
			let back = {};

			function log(n) {
				console.log(n)
			}

			function fetchType() {
				let n, e, t, o = [],
					a = $("#nav_tab").find("li a");
				if(0 === a.length) n = {
					kklxdm: $("#kklxdm").val(),
					xkkz_id: $("#xkkz_id").val(),
					njdm_id: $("#njdm_id").val(),
					zyh_id: $("#zyh_id").val()
				}, o.push(n);
				else
					for(let i in a)
						if(n = {
								kklxdm: "",
								xkkz_id: "",
								njdm_id: "",
								zyh_id: ""
							}, e = a[i].onclick, null != e) {
							e = e.toString().match(/queryCourse.*\)/)[0], t = 0;
							for(let o in e) "'" === e[o] ? t++ : 1 === t ? n.kklxdm += e[o] : 3 === t ? n.xkkz_id += e[o] : 5 === t ? n.njdm_id += e[o] : 7 === t && (n.zyh_id += e[o]);
							o[i] = n
						} return o
			}

			function loadEverySingleCourse() {
				let load_single = loadJxbxxZzxk.toString();
				load_single = load_single.match(/{[\s\S]*}/)[0], load_single = load_single.substring(1, load_single.length - 2), load_single = "var obj = $;\n" + load_single, load_single = "var fuck_type_id = $;\n" + load_single, load_single = load_single.replace(/var\s+jxb_ids\s+=\s+\[];/, 'var jxb_ids = [];\nzcxkbj = "1";'), load_single = load_single.replace(/showHideJxb\s*\(\s*obj\s*\)\s*;/g, ""), load_single = load_single.replace(/trObj[^\n]*?td.an[\s\S]*?\);/, 'trObj.find("td.an").html("<button type=\'button\' class=\'btn btn-primary btn-sm\' onclick=chooseCourseZzxk(\'"+m_jxb_id+"\',\'"+m_do_jxb_id+"\',\'"+kch_id+"\',\'"+m_jxbzls+"\')>"+ "注入选课" +"</button>");'), load_single = load_single.replace(/var\s+m_do_jxb_id[\s\S]*?;/, load_single.match(/var\s+m_do_jxb_id[\s\S]*?;/)[0] + '\nlet fuck_single_ = fucking_data_courses[fucking_map[m_jxb_id]][m_jxb_id];\nfuck_single_["jxbrs"] = m_jxbrs;\nfuck_single_["meta"] = {m_jxb_id:m_jxb_id,m_do_jxb_id:m_do_jxb_id,kch_id:kch_id,m_jxbzls:m_jxbzls,course_type:fuck_type_id};\nfuck_crt ++;');
				let data_str = load_single.match(/convertID[\s\n]*?\([^\n]*?\.jxb_id/)[0],
					data_str_del_length = data_str.match(/convertID[\s\n]*?\(/)[0].length;

				function load_single_course(id, num) {
					load_single = load_single.replace(/var obj = [\S\s]*?;/, 'var obj = document.getElementById("' + id + '");'), load_single = load_single.replace(/var fuck_type_id = [\S\s]*?;/, "var fuck_type_id = fucking_type_arr[" + (parseInt(num) - 1) + "];");
					let k = type_class_data[fucking_type_arr[parseInt(num) - 1]];
					$("#kklxdm").val(k.kklxdm), $("#xkkz_id").val(k.xkkz_id), $("#njdm_id").val(k.njdm_id), $("#zyh_id").val(k.zyh_id), eval(load_single)
				}
				data_str = data_str.substr(data_str_del_length, data_str.length - data_str_del_length).trim(), data_str = data_str.substr(0, data_str.length - 6), load_single = load_single.replace(/for[\s\n]*?\([\s\n]*?var[\s\n]+?i[\s\n]*?=[\s\n]*?0[\s\n]*?;[\s\n]*?i[\s\n]*?<[\s\n]*?data[\s\n]*?.[\s\n]*?length[\s\n]*?;[\s\n]*?i[\s\n]*?\+\+[\s\n]*?\)[\s\n]*?{/, load_single.match(/for[\s\n]*?\([\s\n]*?var[\s\n]+?i[\s\n]*?=[\s\n]*?0[\s\n]*?;[\s\n]*?i[\s\n]*?<[\s\n]*?data[\s\n]*?.[\s\n]*?length[\s\n]*?;[\s\n]*?i[\s\n]*?\+\+[\s\n]*?\)[\s\n]*?{/)[0] + "\nlet fuck_single = fucking_data_courses[fucking_map[" + data_str + "jxb_id]][" + data_str + "jxb_id];\nfuck_single.jsxx = " + data_str + "jsxx;\nfuck_single.jxbrl = " + data_str + "jxbrl;\nfuck_single.jxdd = " + data_str + "jxdd;\nfuck_single.kcgsmc = " + data_str + "kcgsmc;\nfuck_single.kcxzmc = " + data_str + "kcxzmc;\nfuck_single.sksj = " + data_str + "sksj;\nfuck_single.xqumc = " + data_str + "xqumc;\n//console.log(fuck_type_id);\n"), load_single = load_single.replace(/if[\s\n]*?\([\s\n]*?czzt[\s\n]*?==[\s\n]*?"0"[\s\n]*?\)[\s\n]*?{/, "if (true) {"), fuck_crt = 0;
				for(let n = 1; n < fuck_index; n++) console.log(fucking_type_arr[parseInt(n) - 1]), load_single_course("fucking_obj_" + n, n);
				return fucking_data_courses
			}

			function display(n) {
				console.log(n);
				for(let e in n) {
					ok = !0;
					for(let t in n[e]) "course_name" != t && (ok &= n[e][t].jxbrl == n[e][t].jxbrs);
					$("#cid").append(`<option value="${e}" style="color: ${ok?"red":"white"}">${e}&nbsp;&nbsp;&nbsp;${n[e].course_name}</option>`)
				}
				$("#cid").change((function() {
					val = $(this).val(), $("#jxb").html("");
					for(let e in n[val]) "course_name" !== e && $("#jxb").append(`<option style="color: ${n[val][e].jxbrl==n[val][e].jxbrs?"red":"white"}" value='${JSON.stringify(n[val][e])}'>${n[val][e].class_name}</option>`)
				})), $("#jxb").change((function() {
					val = $(this).val(), obj_course = JSON.parse(val), con = `<style>span{display: block}</style><button class='addd' value='${val}'>添加</button>`, con += `<span>教学班名称: ${obj_course.class_name}</span>`, con += `<span>老师: ${obj_course.jsxx}</span>`, con += `<span>当前人数: ${obj_course.jxbrs}</span>`, con += `<span>容量: ${obj_course.jxbrl}</span>`, con += `<span>教室: ${obj_course.jxdd}</span>`, con += `<span>类别: ${obj_course.kcgsmc}</span>`, con += `<span>课程类型: ${obj_course.kcxzmc}</span>`, con += `<span style="font-weight: bold">上课时间: ${obj_course.sksj}</span>`, con += `<span>校区: ${obj_course.xqumc}</span>`, con += `<span>jxb_id: ${obj_course.meta.m_jxb_id}</span>`, con += "<span>---课程内部信息---</span>", con += `<span>do_jxb_id: ${obj_course.meta.m_do_jxb_id}</span>`, con += `<span>kch_id: ${obj_course.meta.kch_id}</span>`, con += `<span>jxbzls: ${obj_course.meta.m_jxbzls}</span>`, con += `<span>选课类型: ${obj_course.meta.course_type}</span>`, $("#inf div").html(con), $(".addd").click((function() {
						val = $(this).val(), obj_course = JSON.parse(val), id = `_${(new Date).getTime()}`, $("#selected").append(`<option id="${id}" onclick="addOptionListener(this)">${obj_course.class_name}</option>`), take[id] = obj_course.meta
					}))
				})), $("#fetch").click(take_course), $("#stole").click((function() {
					x0p({
						title: "挂机",
						text: "请输入间隔毫秒数(不填默认100ms)",
						type: "input",
						height: "200px",
						maxHeight: "200px",
						icon: "ok",
						inputPromise: function(n, e) {
							return new Promise((function(n, t) {
								isNaN(e) && n("这不是一个数字"), n(null)
							}))
						},
						buttons: [{
							type: "cancel",
							text: "取消"
						}, {
							type: "ok",
							text: "确定",
							showLoading: !0,
							default: !0,
							key: 13
						}]
					}).then((function(n) {
						if("ok" === n.button) {
							null != n.text && null != n.text && "" != n.text || (n.text = "100");
							let e = parseInt(n.text);
							setInterval(take_course, e), x0p("成功", "目前无法自动停止，若要停止请刷新页面", "ok")
						}
					}))
				}))
			}

			function take_course() {
				for(let n in take) {
					let e = type_class_data[take[n].course_type];
					$("#kklxdm").val(e.kklxdm), $("#xkkz_id").val(e.xkkz_id), $("#njdm_id").val(e.njdm_id), $("#zyh_id").val(e.zyh_id), chooseCourseZzxk(take[n].m_jxb_id, take[n].m_do_jxb_id, take[n].kch_id, take[n].m_jxbzls)
				}
			}
			setTimeout((function() {
				display(data)
			}), 100), $("#load").css("display", "none"), $("#ok").css("display", "flex")
		}
		window.onload = function() {
			console.log("%c" + pro_info.author + "抢课助手v" + pro_info.version, "color:red"), $("body").prepend('<div style="background-color: black;height: 350px">\n    <style>\n        h1 {\n            color: white;\n            margin: 0;\n        }\n\n        select {\n            /*width: 300px;*/\n            border: 1px solid white;\n            background-color: black;\n            color: white;\n            outline: none;\n            height: 300px !important;\n            display: block;\n            padding: 5px 0 5px;\n            margin: 0 5px 0 5px;\n        }\n\n        #ok {\n            display: flex;\n            height: 300px;\n            align-items: center;\n        }\n\n        #button_domain {\n            margin: 10px;\n        }\n\n        .button_domain button {\n            width: 100px;\n            height: 50px;\n            background-color: black;\n            color: white;\n            border: 1px white solid;\n            cursor: pointer;\n            display: block;\n            margin: 5px;\n        }\n\n        .button_domain button:hover {\n            background-color: white;\n            color: black;\n        }\n\n        #inf {\n            display: flex;\n        }\n    </style>\n    <h1>QLU方正教务抢课器</h1>\n    <p style="color:#fff;" id="load">正在加载中。。。按f12查看详细情况。</p>\n    <div id="ok" style="display: none;">\n        <select id="cid" multiple="multiple" style="flex: 1;"></select>\n        <div id="inf" class="button_domain">\n            <select id="jxb" multiple="multiple" style="width: 300px"></select>\n            <div style="overflow-y: scroll;width: 300px;color: white;height: 300px"></div>\n        </div>\n        <span style="color: white">&gt;&gt;</span>\n        <select id="selected" multiple="multiple" style="flex: 1;"></select>\n        <div class="button_domain">\n            <button id="fetch">一键抢课</button>\n            <button id="stole">捡漏</button>\n            <button id="del" style="display: none">删除</button>\n        </div>\n    </div>\n</div>'), $.ajax({
//				url: "https://raw.githubusercontent.com/Void-JackLee/ZFCourseTakingAssistant/main/package.json?ver=" + (new Date).getTime(),
//				dataType: "json",
//				async: !0,
//				method: "get",
//				success: n => {
//					if(n.version !== pro_info.version) {
//						const e = $("h1");
//						e.html(e.html() + `<h5 style="font-size: 16px;display: inline;margin: 0">(检查到新版本v${n.version}：${n.newVersionDescription}[<a href='https://raw.githubusercontent.com/Void-JackLee/ZFCourseTakingAssistant/main/%E6%8A%A2%E8%AF%BE%E5%8A%A9%E6%89%8B.user.js'>点此更新</a>])</h5>`)
//					}
//				}
			}), setTimeout(run, 100)
		}, window.addOptionListener = function(n) {
			cur = $(n).attr("id"), $("#del").css("display", "block").click((function() {
				$("#" + cur).remove(), delete take[cur], $("#del").css("display", "none")
			}))
		}
	})()
})();