// transit-js 0.8.656
// http://transit-format.org
// 
// Copyright 2014 Cognitect. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License..
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};function k(a,b){this.h=a|0;this.e=b|0}var ba={};function l(a){if(-128<=a&&128>a){var b=ba[a];if(b)return b}b=new k(a|0,0>a?-1:0);-128<=a&&128>a&&(ba[a]=b);return b}function m(a){return isNaN(a)||!isFinite(a)?n:a<=-ca?p:a+1>=ca?da:0>a?q(m(-a)):new k(a%r|0,a/r|0)}function t(a,b){return new k(a,b)}
function u(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return q(u(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=m(Math.pow(c,8)),e=n,f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),h=parseInt(a.substring(f,f+g),c);8>g?(g=m(Math.pow(c,g)),e=e.multiply(g).add(m(h))):(e=e.multiply(d),e=e.add(m(h)))}return e}
var r=4294967296,ca=r*r/2,n=l(0),v=l(1),ea=l(-1),da=t(-1,2147483647),p=t(0,-2147483648),fa=l(16777216);function w(a){return a.e*r+(0<=a.h?a.h:r+a.h)}
k.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(x(this))return"0";if(0>this.e){if(this.equals(p)){var b=m(a),c=y(this,b),b=z(c.multiply(b),this);return c.toString(a)+b.h.toString(a)}return"-"+q(this).toString(a)}for(var c=m(Math.pow(a,6)),b=this,d="";;){var e=y(b,c),f=z(b,e.multiply(c)).h.toString(a),b=e;if(x(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function x(a){return 0==a.e&&0==a.h}
k.prototype.equals=function(a){return this.e==a.e&&this.h==a.h};k.prototype.compare=function(a){if(this.equals(a))return 0;var b=0>this.e,c=0>a.e;return b&&!c?-1:!b&&c?1:0>z(this,a).e?-1:1};function q(a){return a.equals(p)?p:t(~a.h,~a.e).add(v)}k.prototype.add=function(a){var b=this.e>>>16,c=this.e&65535,d=this.h>>>16,e=a.e>>>16,f=a.e&65535,g=a.h>>>16,h;h=0+((this.h&65535)+(a.h&65535));a=0+(h>>>16);a+=d+g;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+e)&65535;return t((a&65535)<<16|h&65535,c<<16|d&65535)};
function z(a,b){return a.add(q(b))}
k.prototype.multiply=function(a){if(x(this)||x(a))return n;if(this.equals(p))return 1==(a.h&1)?p:n;if(a.equals(p))return 1==(this.h&1)?p:n;if(0>this.e)return 0>a.e?q(this).multiply(q(a)):q(q(this).multiply(a));if(0>a.e)return q(this.multiply(q(a)));if(0>this.compare(fa)&&0>a.compare(fa))return m(w(this)*w(a));var b=this.e>>>16,c=this.e&65535,d=this.h>>>16,e=this.h&65535,f=a.e>>>16,g=a.e&65535,h=a.h>>>16;a=a.h&65535;var G,s,A,qa;qa=0+e*a;A=0+(qa>>>16);A+=d*a;s=0+(A>>>16);A=(A&65535)+e*h;s+=A>>>16;
A&=65535;s+=c*a;G=0+(s>>>16);s=(s&65535)+d*h;G+=s>>>16;s&=65535;s+=e*g;G+=s>>>16;s&=65535;G=G+(b*a+c*h+d*g+e*f)&65535;return t(A<<16|qa&65535,G<<16|s)};
function y(a,b){if(x(b))throw Error("division by zero");if(x(a))return n;if(a.equals(p)){if(b.equals(v)||b.equals(ea))return p;if(b.equals(p))return v;var c;c=1;if(0==c)c=a;else{var d=a.e;c=32>c?t(a.h>>>c|d<<32-c,d>>c):t(d>>c-32,0<=d?0:-1)}c=y(c,b).shiftLeft(1);if(c.equals(n))return 0>b.e?v:ea;d=z(a,b.multiply(c));return c.add(y(d,b))}if(b.equals(p))return n;if(0>a.e)return 0>b.e?y(q(a),q(b)):q(y(q(a),b));if(0>b.e)return q(y(a,q(b)));for(var e=n,d=a;0<=d.compare(b);){c=Math.max(1,Math.floor(w(d)/
w(b)));for(var f=Math.ceil(Math.log(c)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=m(c),h=g.multiply(b);0>h.e||0<h.compare(d);)c-=f,g=m(c),h=g.multiply(b);x(g)&&(g=v);e=e.add(g);d=z(d,h)}return e}k.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.h;return 32>a?t(b<<a,this.e<<a|b>>>32-a):t(0,b<<a-32)};function ga(a,b){b&=63;if(0==b)return a;var c=a.e;return 32>b?t(a.h>>>b|c<<32-b,c>>>b):32==b?t(c,0):t(c>>>b-32,0)};var B="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},C="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===aa(a)};function D(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(C(a)){if(C(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!D(a[c],b[c]))return!1;return!0}return!1}if(a.s)return a.s(b);if(null!=b&&"object"===typeof b){if(b.s)return b.s(a);var d=c=0,e=B(b).length,f;for(f in a)if(a.hasOwnProperty(f))if(d++,"$com$cognitect$transit$hashCode$"==f)b[f]||(c=-1);else if(!b.hasOwnProperty(f)||!D(a[f],b[f]))return!1;return d+c===e}}return!1}
function ha(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var ia={},ja=0;function E(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(F(c)^F(a)))%4503599627370496});else for(var c=B(a),d=0;d<c.length;d++){var e=c[d];if("$com$cognitect$transit$hashCode$"!==e)var f=a[e],b=(b+(F(e)^F(f)))%4503599627370496}return b}
function ka(a){var b=a.$com$cognitect$transit$hashCode$||0;if(0===b)if(C(a)){for(var c=0;c<a.length;c++)b=ha(b,F(a[c]));a.$com$cognitect$transit$hashCode$=b}else a.forEach&&a.forEach(function(a){b=ha(b,F(a))});return b}
function F(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=ia[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;ja++;256<=ja&&(ia={},ja=1);ia[a]=b}a=b;return a;default:return a instanceof Date?a.valueOf():C(a)?ka(a):a.w?a.w():a.$com$cognitect$transit$hashCode$?a.$com$cognitect$transit$hashCode$:E(a)}};var la={};function H(a,b){this.tag=a;this.rep=b;this.k=-1}H.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};H.prototype.B=function(a){return D(this,a)};H.prototype.equiv=H.prototype.B;H.prototype.s=function(a){return a instanceof H?this.tag===a.tag&&D(this.rep,a.rep):!1};H.prototype.w=function(){-1===this.k&&(this.k=ha(F(this.tag),F(this.rep)));return this.k};function I(a,b){return new H(a,b)}var ma=u("9007199254740992"),na=u("-9007199254740992");
function oa(a){if("number"===typeof a||a instanceof k)return a;a=u(a,10);return 0<a.compare(ma)||0>a.compare(na)?a:w(a)}k.prototype.B=function(a){return D(this,a)};k.prototype.equiv=k.prototype.B;k.prototype.s=function(a){return a instanceof k&&this.equals(a)};k.prototype.w=function(){return this.h};function pa(a){return I("n",a)}function ra(a){return I("f",a)}function J(a){this.name=a;this.k=-1}J.prototype.toString=function(){return":"+this.name};J.prototype.B=function(a){return D(this,a)};
J.prototype.equiv=J.prototype.B;J.prototype.s=function(a){return a instanceof J&&this.name==a.name};J.prototype.w=function(){-1===this.k&&(this.k=F(this.name));return this.k};function sa(a){return new J(a)}function K(a){this.name=a;this.k=-1}K.prototype.toString=function(){return"[Symbol: "+this.name+"]"};K.prototype.B=function(a){return D(this,a)};K.prototype.equiv=K.prototype.B;K.prototype.s=function(a){return a instanceof K&&this.name==a.name};
K.prototype.w=function(){-1===this.k&&(this.k=F(this.name));return this.k};function ta(a){return new K(a)}function L(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=l(255).shiftLeft(e);b<c;b++,e-=8,f=ga(f,8)){var g=ga(t(a.h&f.h,a.e&f.e),e).toString(16);1==g.length&&(g="0"+g);d+=g}return d}function M(a,b){this.V=a;this.X=b;this.k=-1}M.prototype.toString=function(a){var b=this.V,c=this.X;a=""+(L(b,0,4)+"-");a+=L(b,4,6)+"-";a+=L(b,6,8)+"-";a+=L(c,0,2)+"-";return a+=L(c,2,8)};
M.prototype.B=function(a){return D(this,a)};M.prototype.equiv=M.prototype.B;M.prototype.s=function(a){return a instanceof M&&this.V.equals(a.V)&&this.X.equals(a.X)};M.prototype.w=function(){-1===this.k&&(this.k=F(this.toString()));return this.k};
function ua(a){a=a.replace(/-/g,"");for(var b=null,c=null,d=c=0,e=24,f=0,f=c=0,e=24;8>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;f=8;for(e=24;16>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;b=t(d,c);c=0;f=16;for(e=24;24>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;for(e=f=24;32>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;c=t(d,c);return new M(b,c)}function va(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)}
Date.prototype.s=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.w=function(){return this.valueOf()};function wa(a){return I("b",a)}function xa(a){return I("r",a)}function N(a,b){this.v=a;this.type=b||0;this.l=0}N.prototype.next=function(){if(this.l<this.v.length){var a=null,a=0===this.type?this.v[this.l]:1===this.type?this.v[this.l+1]:[this.v[this.l],this.v[this.l+1]],a={value:a,done:!1};this.l+=2;return a}return{value:null,done:!0}};N.prototype.next=N.prototype.next;
function O(a,b){this.map=a;this.type=b||0;this.keys=ya(this.map);this.l=0;this.G=null;this.C=0}O.prototype.next=function(){if(this.l<this.map.size){null!=this.G&&this.C<this.G.length||(this.G=this.map.map[this.keys[this.l]],this.C=0);var a=null,a=0===this.type?this.G[this.C]:1===this.type?this.G[this.C+1]:[this.G[this.C],this.G[this.C+1]],a={value:a,done:!1};this.l++;this.C+=2;return a}return{value:null,done:!0}};O.prototype.next=O.prototype.next;
function za(a,b){if((b instanceof P||b instanceof Q)&&a.size===b.size){for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!D(d[e+1],b.get(d[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(c=B(b).length-(b.hasOwnProperty("$com$cognitect$transit$hashCode$")&&1||0),a.size===c)){for(d in b)if("$com$cognitect$transit$hashCode$"!==d&&!D(b[d],a.get(d)))return!1;return!0}return!1}function Q(a){this.g=a;this.a=null;this.k=-1;this.size=a.length/2;this.aa=0}Q.prototype.toString=function(){return"[TransitArrayMap]"};
function Aa(a){if(a.a)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.aa++;return 32<a.aa?(a.a=R(a.g,!1,!0),a.g=[],!0):!1}Q.prototype.clear=function(){this.a?this.a.clear():this.g=[];this.size=0};Q.prototype.clear=Q.prototype.clear;Q.prototype.keys=function(){return this.a?this.a.keys():new N(this.g,0)};Q.prototype.keys=Q.prototype.keys;Q.prototype.H=function(){if(this.a)return this.a.H();for(var a=[],b=0,c=0;c<this.g.length;b++,c+=2)a[b]=this.g[c];return a};
Q.prototype.keySet=Q.prototype.H;Q.prototype.v=function(){return this.a?this.a.v():new N(this.g,2)};Q.prototype.entries=Q.prototype.v;Q.prototype.I=function(){return this.a?this.a.I():new N(this.g,1)};Q.prototype.values=Q.prototype.I;Q.prototype.forEach=function(a){if(this.a)this.a.forEach(a);else for(var b=0;b<this.g.length;b+=2)a(this.g[b+1],this.g[b])};Q.prototype.forEach=Q.prototype.forEach;
Q.prototype.get=function(a){if(this.a)return this.a.get(a);if(Aa(this))return this.get(a);for(var b=0;b<this.g.length;b+=2)if(D(this.g[b],a))return this.g[b+1];return null};Q.prototype.get=Q.prototype.get;Q.prototype.D=function(a){if(this.a)return this.a.D(a);if(Aa(this))return this.D(a);for(var b=0;b<this.g.length;b+=2)if(D(this.g[b],a))return!0;return!1};Q.prototype.has=Q.prototype.D;
Q.prototype.set=function(a,b){if(this.a)this.a.set(a,b),this.size=this.a.size;else{for(var c=0;c<this.g.length;c+=2)if(D(this.g[c],a)){this.g[c+1]=b;return}this.g.push(a);this.g.push(b);this.size++;32<this.size&&(this.a=R(this.g,!1,!0),this.g=null)}};Q.prototype.set=Q.prototype.set;Q.prototype["delete"]=function(a){if(this.a)this.a["delete"](a),this.size=this.a.size;else for(var b=0;b<this.g.length;b+=2)if(D(this.g[b],a)){this.g.splice(b,2);this.size--;break}};
Q.prototype.w=function(){if(this.a)return this.a.w();-1===this.k&&(this.k=E(this));return this.k};Q.prototype.s=function(a){return this.a?za(this.a,a):za(this,a)};function P(a,b,c){this.map=b||{};this.J=a||[];this.size=c||0;this.k=-1}P.prototype.toString=function(){return"[TransitMap]"};P.prototype.clear=function(){this.map={};this.J=[];this.size=0;this.k=-1};P.prototype.clear=P.prototype.clear;function ya(a){return null!=a.J?a.J:B(a.map)}
P.prototype["delete"]=function(a){this.J=null;for(var b=F(a),c=this.map[b],d=0;d<c.length;d+=2)if(D(a,c[d])){c.splice(d,2);0===c.length&&delete this.map[b];this.size--;break}};P.prototype.v=function(){return new O(this,2)};P.prototype.entries=P.prototype.v;P.prototype.forEach=function(a){for(var b=ya(this),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};P.prototype.forEach=P.prototype.forEach;
P.prototype.get=function(a){var b=F(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2){if(D(a,b[c]))return b[c+1]}else return null};P.prototype.get=P.prototype.get;P.prototype.D=function(a){var b=F(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(D(a,b[c]))return!0;return!1};P.prototype.has=P.prototype.D;P.prototype.keys=function(){return new O(this,0)};P.prototype.keys=P.prototype.keys;
P.prototype.H=function(){for(var a=ya(this),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};P.prototype.keySet=P.prototype.H;P.prototype.set=function(a,b){var c=F(a),d=this.map[c];if(null==d)this.J&&this.J.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(D(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};P.prototype.set=P.prototype.set;P.prototype.I=function(){return new O(this,1)};P.prototype.values=P.prototype.I;
P.prototype.w=function(){-1===this.k&&(this.k=E(this));return this.k};P.prototype.s=function(a){return za(this,a)};
function R(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(D(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new Q(a)}var d={},e=[],f=0;for(b=0;b<a.length;b+=2){c=F(a[b]);var g=d[c];if(null==g)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var h=!0;for(c=0;c<g.length;c+=2)if(D(g[c],a[b])){g[c+1]=a[b+1];h=!1;break}h&&(g.push(a[b]),g.push(a[b+1]),f++)}}return new P(e,d,f)}
function S(a){this.map=a;this.size=a.size}S.prototype.toString=function(){return"[TransitSet]"};S.prototype.add=function(){throw Error("Unsupported operation: add");};S.prototype.add=S.prototype.add;S.prototype.clear=function(){this.map=new P;this.size=0};S.prototype.clear=S.prototype.clear;S.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};S.prototype.v=function(){return this.map.v()};S.prototype.entries=S.prototype.v;
S.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};S.prototype.forEach=S.prototype.forEach;S.prototype.D=function(a){return this.map.D(a)};S.prototype.has=S.prototype.D;S.prototype.keys=function(){return this.map.keys()};S.prototype.keys=S.prototype.keys;S.prototype.H=function(){return this.map.H()};S.prototype.keySet=S.prototype.H;S.prototype.I=function(){return this.map.I()};S.prototype.values=S.prototype.I;
S.prototype.s=function(a){if(a instanceof S){if(this.size===a.size)return D(this.map,a.map)}else return!1};S.prototype.w=function(){return F(this.map)};function Ba(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=F(a[e]),g=b[f];if(null==g)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,h=0;h<g.length;h+=2)if(D(g[h],a[e])){f=!1;break}f&&(g.push(a[e]),g.push(a[e]),d++)}}return new S(new P(c,b,d))}function Ca(a){return I("'",a)}function Da(a){return I("list",a)}
function Ea(a){return I("link",a)};function Fa(a,b){if(3<a.length){if(b)return!0;var c=a.charAt(1);return"~"===a.charAt(0)?":"===c||"$"===c||"#"===c:!1}return!1}function Ga(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return 0===b?"^"+a:"^"+String.fromCharCode(b+48)+a}function Ha(){this.da=this.N=this.l=0;this.q={}}
Ha.prototype.write=function(a,b){if(Fa(a,b)){4096===this.da?(this.clear(),this.N=0,this.q={}):1936===this.l&&this.clear();var c=this.q[a];return null==c?(this.q[a]=[Ga(this.l),this.N],this.l++,a):c[1]!=this.N?(c[1]=this.N,c[0]=Ga(this.l),this.l++,a):c[0]}return a};Ha.prototype.clear=function(){this.l=0;this.N++};function T(){this.l=0;this.q=[]}T.prototype.write=function(a){1936==this.l&&(this.l=0);this.q[this.l]=a;this.l++;return a};
T.prototype.Z=function(a){return this.q[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};T.prototype.clear=function(){this.l=0};function Ia(a){this.R=a}
function U(a){this.options=a||{};this.p={};for(var b in this.P.p)this.p[b]=this.P.p[b];for(b in this.options.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.p[b]=this.options.handlers[b]}this.Q=null!=this.options.preferStrings?this.options.preferStrings:this.P.Q;this.T=this.options.defaultHandler||this.P.T;this.A=this.options.mapBuilder;this.K=this.options.arrayBuilder}
U.prototype.P={p:{_:function(){return null},"?":function(a){return"t"===a},b:function(a){return wa(a)},i:function(a){return oa(a)},n:function(a){return pa(a)},d:function(a){return parseFloat(a)},f:function(a){return ra(a)},c:function(a){return a},":":function(a){return sa(a)},$:function(a){return ta(a)},r:function(a){return xa(a)},"'":function(a){return a},m:function(a){return va(a)},t:function(a){return new Date(a)},u:function(a){return ua(a)},set:function(a){return Ba(a)},list:function(a){return Da(a)},
link:function(a){return Ea(a)},cmap:function(a){return R(a,!1)}},T:function(a,b){return I(a,b)},Q:!0};
U.prototype.j=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return Fa(a,c)?(a=Ja(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)?b.Z(a,c):Ja(this,a),b;case "object":if(C(a))if("^ "===a[0])if(this.A)if(17>a.length&&this.A.M){d=[];for(c=1;c<a.length;c+=2)d.push(this.j(a[c],b,!0,!1)),d.push(this.j(a[c+1],b,!1,!1));b=this.A.M(d)}else{d=this.A.W();for(c=1;c<a.length;c+=2)d=this.A.add(d,this.j(a[c],b,!0,!1),this.j(a[c+1],b,!1,!1));b=this.A.U(d)}else{d=[];for(c=1;c<a.length;c+=
2)d.push(this.j(a[c],b,!0,!1)),d.push(this.j(a[c+1],b,!1,!1));b=R(d,!1)}else b=Ka(this,a,b,d);else{c=B(a);var e=c[0];if((d=1==c.length?this.j(e,b,!1,!1):null)&&d instanceof Ia)a=a[e],c=this.p[d.R],b=null!=c?c(this.j(a,b,!1,!0)):I(d.R,this.j(a,b,!1,!1));else if(this.A)if(16>c.length&&this.A.M){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.j(e,b,!0,!1)),f.push(this.j(a[e],b,!1,!1));b=this.A.M(f)}else{f=this.A.W();for(d=0;d<c.length;d++)e=c[d],f=this.A.add(f,this.j(e,b,!0,!1),this.j(a[e],b,!1,!1));
b=this.A.U(f)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.j(e,b,!0,!1)),f.push(this.j(a[e],b,!1,!1));b=R(f,!1)}}return b}return a};U.prototype.decode=U.prototype.j;
function Ka(a,b,c,d){if(d){var e=[];for(d=0;d<b.length;d++)e.push(a.j(b[d],c,!1,!1));return e}if(2===b.length&&"string"===typeof b[0]&&(d=a.j(b[0],c,!1,!1))&&d instanceof Ia)return b=b[1],e=a.p[d.R],null!=e?e=e(a.j(b,c,!1,!0)):I(d.R,a.j(b,c,!1,!1));if(a.K){if(32>=b.length&&a.K.M){e=[];for(d=0;d<b.length;d++)e.push(a.j(b[d],c,!1,!1));return a.K.M(e)}e=a.K.W();for(d=0;d<b.length;d++)e=a.K.add(e,a.j(b[d],c,!1,!1));return a.K.U(e)}e=[];for(d=0;d<b.length;d++)e.push(a.j(b[d],c,!1,!1));return e}
function Ja(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new Ia(b.substring(2));var d=a.p[c];return null==d?a.T(c,b.substring(2)):d(b.substring(2))}return b};function La(a){this.decoder=new U(a)}function Ma(a,b){this.fa=a;this.options=b||{};this.q=this.options.cache?this.options.cache:new T}Ma.prototype.Z=function(a){var b=this.q;a=this.fa.decoder.j(JSON.parse(a),b);this.q.clear();return a};Ma.prototype.read=Ma.prototype.Z;var Na=0;function Oa(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a.com$cognitect$transit$ctor$guid;null==b&&(a.com$cognitect$transit$ctor$guid=b=++Na);return b}function V(a){return null==a?null:a.constructor}function W(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function Pa(){}Pa.prototype.tag=function(){return"_"};Pa.prototype.rep=function(){return null};
Pa.prototype.o=function(){return"null"};function Qa(){}Qa.prototype.tag=function(){return"s"};Qa.prototype.rep=function(a){return a};Qa.prototype.o=function(a){return a};function Ra(){}Ra.prototype.tag=function(){return"i"};Ra.prototype.rep=function(a){return a};Ra.prototype.o=function(a){return a.toString()};function Sa(){}Sa.prototype.tag=function(){return"i"};Sa.prototype.rep=function(a){return a.toString()};Sa.prototype.o=function(a){return a.toString()};function Ta(){}Ta.prototype.tag=function(){return"?"};
Ta.prototype.rep=function(a){return a};Ta.prototype.o=function(a){return a.toString()};function Ua(){}Ua.prototype.tag=function(){return"array"};Ua.prototype.rep=function(a){return a};Ua.prototype.o=function(){return null};function Va(){}Va.prototype.tag=function(){return"map"};Va.prototype.rep=function(a){return a};Va.prototype.o=function(){return null};function Wa(){}Wa.prototype.tag=function(){return"t"};
Wa.prototype.rep=function(a){return a.getUTCFullYear()+"-"+W(a.getUTCMonth()+1,2)+"-"+W(a.getUTCDate(),2)+"T"+W(a.getUTCHours(),2)+":"+W(a.getUTCMinutes(),2)+":"+W(a.getUTCSeconds(),2)+"."+W(a.getUTCMilliseconds(),3)+"Z"};Wa.prototype.o=function(a,b){return b.rep(a)};function X(){}X.prototype.tag=function(){return"m"};X.prototype.rep=function(a){return a.valueOf()};X.prototype.o=function(a){return a.valueOf().toString()};X.prototype.ba=function(){return new Wa};function Xa(){}Xa.prototype.tag=function(){return"u"};
Xa.prototype.rep=function(a){return a.toString()};Xa.prototype.o=function(a){return a.toString()};function Ya(){}Ya.prototype.tag=function(){return":"};Ya.prototype.rep=function(a){return a.name};Ya.prototype.o=function(a,b){return b.rep(a)};function Za(){}Za.prototype.tag=function(){return"$"};Za.prototype.rep=function(a){return a.name};Za.prototype.o=function(a,b){return b.rep(a)};function $a(){}$a.prototype.tag=function(a){return a.tag};$a.prototype.rep=function(a){return a.rep};
$a.prototype.o=function(){return null};function ab(){}ab.prototype.tag=function(){return"set"};ab.prototype.rep=function(a){var b=[];a.forEach(function(a){b.push(a)});return I("array",b)};ab.prototype.o=function(){return null};function bb(){}bb.prototype.tag=function(){return"map"};bb.prototype.rep=function(a){return a};bb.prototype.o=function(){return null};function cb(){}cb.prototype.tag=function(){return"map"};cb.prototype.rep=function(a){return a};cb.prototype.o=function(){return null};
function db(){this.p={};this.set(null,new Pa);this.set(String,new Qa);this.set(Number,new Ra);this.set(k,new Sa);this.set(Boolean,new Ta);this.set(Array,new Ua);this.set(Object,new Va);this.set(Date,new X);this.set(M,new Xa);this.set(J,new Ya);this.set(K,new Za);this.set(H,new $a);this.set(S,new ab);this.set(Q,new bb);this.set(P,new cb)}db.prototype.get=function(a){return this.p[Oa(a)]};db.prototype.set=function(a,b){this.p[Oa(a)]=b};function eb(a){this.F=a||{};this.Q=null!=this.F.preferStrings?this.F.preferStrings:!0;this.ca=this.F.objectBuilder||null;this.p=new db;if(this.F.handlers){var b=this;this.F.handlers.forEach(function(a,d){b.p.set(d,a)})}this.S=this.F.unpack||function(a){return a instanceof Q&&null===a.a?a.g:!1};this.O=this.F&&this.F.verbose||!1}function Y(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}
function fb(a,b,c){var d=[];if(C(b))for(var e=0;e<b.length;e++)d.push(Z(a,b[e],!1,c));else b.forEach(function(b){d.push(Z(a,b,!1,c))});return d}function gb(a,b){if("string"!==typeof b){var c=a.p.get(V(b));return c&&1===c.tag(b).length}return!0}function hb(a,b){var c=a.S(b),d=!0;if(c)for(var e=0;e<c.length&&(d=gb(a,c[e]),d);e+=2);else for(c=b.keys(),step=c.next();!step.done;){d=gb(a,step.value);if(!d)break;step=c.next()}return d}
function ib(a,b,c){if(b.constructor===Object||null!=b.forEach){if(a.O){if(null!=b.forEach)if(hb(a,b)){var d={};b.forEach(function(b,e){d[Z(a,e,!0,!1)]=Z(a,b,!1,c)})}else{var e=a.S(b),f=[],g=Y("~#","cmap","",!0,c);if(e)for(var h=0;h<e.length;h+=2)f.push(Z(a,e[h],!0,!1)),f.push(Z(a,e[h+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,!1));f.push(Z(a,b,!1,c))});d={};d[g]=f}else for(d={},e=B(b),h=0;h<e.length;h++)d[Z(a,e[h],!0,!1)]=Z(a,b[e[h]],!1,c);return d}if(null!=b.forEach){if(hb(a,b)){e=a.S(b);
d=["^ "];if(e)for(h=0;h<e.length;h+=2)d.push(Z(a,e[h],!0,c)),d.push(Z(a,e[h+1],!1,c));else b.forEach(function(b,e){d.push(Z(a,e,!0,c));d.push(Z(a,b,!1,c))});return d}e=a.S(b);f=[];g=Y("~#","cmap","",!0,c);if(e)for(h=0;h<e.length;h+=2)f.push(Z(a,e[h],!0,c)),f.push(Z(a,e[h+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,c));f.push(Z(a,b,!1,c))});return[g,f]}d=["^ "];e=B(b);for(h=0;h<e.length;h++)d.push(Z(a,e[h],!0,c)),d.push(Z(a,b[e[h]],!1,c));return d}if(null!=a.ca)return a.ca(b,function(b){return Z(a,
b,!0,c)},function(b){return Z(a,b,!1,c)});h=V(b).name;e=Error("Cannot write "+h);e.data={Y:b,type:h};throw e;}
function Z(a,b,c,d){var e=a.p.get(V(b)),f=e?e.tag(b):null,g=e?e.rep(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?Y("~","_","",c,d):null;case "s":return 0<g.length?(a=g.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+g:g):a=g,Y("","",a,c,d);case "?":return c?Y("~","?",g.toString()[0],c,d):g;case "i":return c||"string"===typeof g||g instanceof k?Y("~","i",g.toString(),c,d):g;case "d":return c?Y(g.ga,"d",g,c,d):g;case "b":return Y("~","b",g,c,d);case "'":return a.O?(b={},c=Y("~#","'","",!0,d),b[c]=
Z(a,g,!1,d),d=b):d=[Y("~#","'","",!0,d),Z(a,g,!1,d)],d;case "array":return fb(a,g,d);case "map":return ib(a,g,d);default:a:{if(1===f.length){if("string"===typeof g){d=Y("~",f,g,c,d);break a}if(c||a.Q){(a=a.O&&e.ba())?(f=a.tag(b),g=a.o(b,a)):g=e.o(b,e);if(null!==g){d=Y("~",f,g,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data={tag:f,rep:g,Y:b};throw d;}}b=f;c=g;a.O?(g={},g[Y("~#",b,"",!0,d)]=Z(a,c,!1,d),d=g):d=[Y("~#",b,"",!0,d),Z(a,c,!1,d)]}return d}else throw d=V(b).name,a=Error("Cannot write "+
d),a.data={Y:b,type:d},a;}function jb(a,b){var c=a.p.get(V(b));if(null!=c)return 1===c.tag(b).length?Ca(b):b;var c=V(b).name,d=Error("Cannot write "+c);d.data={Y:b,type:c};throw d;}function $(a,b){this.L=a;this.options=b||{};this.q=!1===this.options.cache?null:this.options.cache?this.options.cache:new Ha}$.prototype.ea=function(){return this.L};$.prototype.marshaller=$.prototype.ea;
$.prototype.write=function(a,b){var c=null,c=b||{};asMapKey=c.asMapKey||!1;cache=this.L.O?!1:this.q;if(!1===c.marshalTop)c=Z(this.L,a,asMapKey,cache);else var c=this.L,d=asMapKey,e=cache,c=JSON.stringify(Z(c,jb(c,a),d,e));null!=this.q&&this.q.clear();return c};$.prototype.write=$.prototype.write;$.prototype.register=function(a,b){this.L.p.set(a,b)};$.prototype.register=$.prototype.register;module.exports={reader:function(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new La(b);return new Ma(c,b)}throw Error("Cannot create reader of type "+a);},writer:function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var c=new eb(b);return new $(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;},makeBuilder:function(a){function b(){}b.prototype.W=a.init;b.prototype.add=a.add;b.prototype.U=a.finalize;return new b},makeWriteHandler:function(a){function b(){}
b.prototype.tag=a.tag;b.prototype.rep=a.rep;b.prototype.o=a.stringRep;b.prototype.ba=a.getVerboseHandler;return new b},date:va,integer:oa,isInteger:function(a){return a instanceof k},uuid:function(a){return ua(a)},isUUID:function(a){return a instanceof M},bigInt:pa,isBigInt:function(a){return a instanceof H&&"n"===a.tag},bigDec:ra,isBigDec:function(a){return a instanceof H&&"f"===a.tag},keyword:sa,isKeyword:function(a){return a instanceof J},symbol:ta,isSymbol:function(a){return a instanceof K},binary:wa,
isBinary:function(a){return a instanceof H&&"b"===a.tag},uri:xa,isURI:function(a){return a instanceof H&&"r"===a.tag},map:R,isMap:function(a){return a instanceof Q||a instanceof P},set:Ba,isSet:function(a){return a instanceof S},list:Da,isList:function(a){return a instanceof la.ha&&"list"===a.tag},quoted:Ca,isQuoted:function(a){return a instanceof H&&"'"===a.tag},tagged:I,isTaggedValue:function(a){return a instanceof H},link:Ea,isLink:function(a){return a instanceof H&&"link"===a.tag},hash:F,hashKey:"$com$cognitect$transit$hashCode$",
hashArrayLike:ka,hashMapLike:E,equals:D,extendToEQ:function(a,b){a.w=b.hashCode;a.s=b.equals;return a},mapToObject:function(a){var b={};a.forEach(function(a,d){if("string"!==typeof d)throw Error("Cannot convert map with non-string keys");b[d]=a});return b},decoder:function(a){return new U(a)},UUIDfromString:ua,randomUUID:la.randomUUID,stringableKeys:hb};
