!function(e){function t(t){for(var n,a,c=t[0],i=t[1],l=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);p.length;)p.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={1:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;u.push([1,0]),r()}([,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(0);const n=r(4);class o extends Phaser.Game{constructor(e){super(e)}}t.Game=o,window.addEventListener("load",()=>{new o(n.CONFIG)})},,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(0);const n=r(5);t.CONFIG={width:600,height:300,parent:"game",scene:[n.GameScene],input:{keyboard:!0},physics:{default:"arcade",arcade:{gravity:{y:300}}},render:{pixelArt:!0}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n extends Phaser.Scene{constructor(){super({key:"GameScene"})}create(){this.add.text(250,150,"Hello World",{fill:"#fff"})}}t.GameScene=n}]);