!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){e(1),t.exports=e(2)},function(t,n){fetch("https://lumen-blog.000webhostapp.com/posts").then((function(t){return t.json()})).then((function(t){var n="";t.data.forEach((function(t){n+='\n                <div class="col-md-4 col-sm-6 mb-2">\n                    <div class="card" style="width: 18rem;">\n                        <img class="card-img-top" src="https://lumen-blog.000webhostapp.com/img/'.concat(t.photo,'" alt="Card image cap">\n                        <div class="card-body">\n                            <h5 class="card-title">').concat(t.title,'</h5>\n                            <p class="card-text">').concat(t.desc,"</p>\n                        </div>\n                    </div>\n                </div>\n                \n                \n                ")})),document.getElementById("output").innerHTML=n}))},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function r(t){var n="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return c(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),s(o,t)})(t)}function c(t,n,e){return(c=i()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&s(r,e.prototype),r}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=document.createElement("template");l.innerHTML='\n\n\x3c!-- Bootstrap CSS --\x3e\n    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"\n        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">\n\n    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Nunito:wght@400;600&display=swap"\n        rel="stylesheet">\n\n    <link rel="stylesheet" href="css/style.css">\n\n<section class="p-5">\n\n<div class="container mt-5">\n    <div class="row">\n\n        <div class="col-md-6 col-sm-12">\n            <h5 class="hero-tag">Coolest Articel</h5>\n            <h2 class="main-hero-tag">The best blog and productive blog you ever find. Lorem ipsum dolor sit.\n                Lorem ipsum dolor sit amet.</h2>\n\n            <p class="pt-4">Be better than yesterday.</p>\n            <div class="d-flex">\n                <img src="./img/sekiro-samsung-wallpaper.jpg" class="rounded-circle float-left"\n                    style="height: 50px; width: 50px;" alt="...">\n                <p class="ml-3 mt-2">Daffa Quraisy</p>\n            </div>\n\n            <button class="btn my-btn mt-4" id="getPosts">See Post</button>\n\n        </div>\n\n        <div class="col-md-6 col-sm-12">\n            <img src="./img/undraw_Bibliophile_hwqc.png" class="img-fluid" style="margin:0;padding:0;">\n        </div>\n\n    </div>\n</div>\n\n<hr>\n\n</section>\n';var a=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(c,t);var n,e,r=(n=c,e=i(),function(){var t,r=u(n);if(e){var c=u(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return o(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=r.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.appendChild(l.content.cloneNode(!0)),t}return c}(r(HTMLElement));window.customElements.define("hero-main",a)}]);