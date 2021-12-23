!function(o,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/mpv-output"]=t():o["video/download/mpv-output"]=t()}(self,(function(){return function(){"use strict";var o={d:function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}},t={};o.d(t,{plugin:function(){return n}});var e=coreApis.toast;const n={name:"downloadVideo.outputs.mpv",displayName:"下载视频 - MPV 输出支持",description:"by [@diannaojiang](https://github.com/diannaojiang)\n\n为下载视频增加 MPV 输出支持, 配置方式请参考 [Bilibili-Playin-Mpv](https://github.com/diannaojiang/Bilibili-Playin-Mpv)",setup:({addData:o})=>{o("downloadVideo.outputs",(o=>{o.push({name:"mpv",displayName:"MPV",description:"弹一条消息显示出播放按钮，点击即可使用MPV进行播放",runAction:async o=>{const t=o.infos.flatMap((o=>o.titledFragments)),n=t.map((o=>o.url)).join("\n"),i=`mpv://--http-header-fields="referer:https://www.bilibili.com/" "${t[0].url}" --audio-file="${t[1].url}"`;console.log(i),e.Toast.show(`<a class="link" href="${encodeURI(i)}" >播放</a>`,"MPV播放"),console.log(n),console.log(o)}})}))},commitHash:"5f63da00c11a35c297c86afbaacff5c11f82b21f"};return t=t.plugin}()}));