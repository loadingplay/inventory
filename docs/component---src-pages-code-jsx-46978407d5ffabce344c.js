(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{196:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return c});e(29),e(30),e(13),e(50),e(43);var o=e(0),r=e.n(o);var c=function(t){var n,e;function c(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).getCodeFromURL=function(t){var n="";return t.split("&").forEach(function(t){~t.indexOf("code")&&(n=t.split("=")[1])}),n},n.jsonToQueryString=function(t){return"?"+Object.keys(t).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(t[n])}).join("&")},n.componentDidMount=function(){var t={code:n.getCodeFromURL(document.location.href),grant_type:"authorization_code",client_id:"437",client_secret:"2cd6dff49e2715a7be965dda06e101b5",redirect_uri:"http://localhost:8000/code"};fetch("https://accounts.loadingplay.com/oauth2/token"+n.jsonToQueryString(t)).then(function(t){return t.json()}).then(function(t){t.hasOwnProperty("error")?document.location.href="/":(window.localStorage.setItem("access_token",t.access_token),document.location.href="/dashboard")}).catch(function(t){console.log(t)})},n}return e=t,(n=c).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,c.prototype.render=function(){return r.a.createElement(o.Fragment,null,r.a.createElement("div",null,"Generate access token...."))},c}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-code-jsx-46978407d5ffabce344c.js.map