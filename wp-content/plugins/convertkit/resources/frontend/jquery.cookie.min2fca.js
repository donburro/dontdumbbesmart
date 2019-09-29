!function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):factory(jQuery)}(function($){function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){0===s.indexOf('"')&&(s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{s=decodeURIComponent(s.replace(pluses," "))}catch(e){return}try{return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var pluses=/\+/g,config=$.cookie=function(key,value,options){if(void 0!==value&&!$.isFunction(value)){if(options=$.extend({},config.defaults,options),"number"==typeof options.expires){var days=options.expires,t=options.expires=new Date;t.setDate(t.getDate()+days)}return document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")}for(var result=key?void 0:{},cookies=document.cookie?document.cookie.split("; "):[],i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("="),name=decode(parts.shift()),cookie=parts.join("=");if(key&&key===name){result=read(cookie,value);break}key||void 0===(cookie=read(cookie))||(result[name]=cookie)}return result};config.defaults={},$.removeCookie=function(key,options){return void 0!==$.cookie(key)&&($.cookie(key,"",$.extend({},options,{expires:-1})),!0)}});