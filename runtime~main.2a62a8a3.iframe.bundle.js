(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({105:"foundations-designTokens-zIndex-mdx",536:"overview-changelog-mdx",614:"components-Popover-Popover-stories-mdx",693:"components-Textarea-Textarea-stories-mdx",731:"components-Menu-Menu-stories-mdx",818:"components-Skeleton-Skeleton-stories-mdx",911:"components-Input-Input-stories-mdx",989:"foundations-designTokens-color-colors-mdx",995:"components-Radio-Radio-stories-mdx",1054:"components-Card-Card-stories-mdx",1237:"components-Portal-Portal-stories-mdx",1583:"overview-testing-mdx",1889:"foundations-themes-overview-stories-mdx",1893:"components-TopBanner-TopBanner-stories-mdx",2239:"components-Editable-Editable-stories-mdx",2548:"components-InputErrorMessage-InputErrorMessage-stories-mdx",2611:"components-Button-Button-stories-mdx",2667:"components-Select-Select-stories-mdx",3507:"components-Spacer-Spacer-stories-mdx",3612:"components-Label-Label-stories-mdx",4517:"components-ViewButtonGroup-ViewButtonGroup-stories-mdx",4811:"components-DateRangePicker-DateRangePicker-stories-mdx",4982:"components-Code-Code-stories-mdx",5071:"components-DatePicker-DatePicker-stories-mdx",5512:"components-Dropzone-Dropzone-stories-mdx",5584:"foundations-designTokens-typography-typography-mdx",5606:"foundations-designTokens-space-mdx",5876:"components-ThemeProvider-ThemeProvider-stories-mdx",6025:"components-Checkbox-Checkbox-stories-mdx",6298:"components-Pagination-Pagination-stories-mdx",6513:"components-Table-Table-stories-mdx",6666:"components-Hint-Hint-stories-mdx",6675:"components-Flex-Flex-stories-mdx",7131:"foundations-designTokens-transitionTime-mdx",7497:"components-Stats-Stats-stories-mdx",7566:"components-IconButton-IconButton-stories-mdx",7807:"foundations-icons-icons-stories",7828:"components-Loading-Loading-stories-mdx",7931:"foundations-designTokens-radius-mdx",8082:"components-Tag-Tag-stories-mdx",8143:"components-SearchInput-SearchInput-stories-mdx",8180:"components-Modal-Modal-stories-mdx",8276:"foundations-icons-icons-mdx",8576:"components-Toast-Toast-stories-mdx",8835:"overview-advanced-usage-mdx",8836:"components-Avatar-Avatar-stories-mdx",9021:"components-Tabs-Tabs-stories-mdx",9062:"components-Toggle-Toggle-stories-mdx",9093:"components-Alert-Alert-stories-mdx",9306:"components-ProgressBar-ProgressBar-stories-mdx",9394:"components-Tooltip-Tooltip-stories-mdx",9590:"overview-intro-mdx",9691:"components-Link-Link-stories-mdx",9931:"components-StepWizard-StepWizard-stories-mdx"}[chunkId]||chunkId)+"."+{105:"71602de8",240:"b42bcf74",536:"e70189d6",614:"7cfbe70a",693:"769254b2",731:"e8e12624",818:"8134dada",911:"066040b2",935:"7d5e2ac5",954:"baa08766",989:"79c52219",995:"d0c0d85a",1054:"3019abb3",1214:"9bfe9f98",1237:"b754caf0",1479:"4227cb56",1484:"21716126",1583:"80603839",1889:"b42dd70c",1893:"96fe7e7c",2239:"435ed13b",2333:"8c5f4349",2548:"df41c300",2611:"fc330ef4",2667:"f23ac74c",2813:"d8ac37bf",3019:"edcfa0bd",3507:"fea07574",3605:"debad09b",3612:"9fd4e6a5",4056:"090b59bd",4517:"50392ce9",4811:"699db9c5",4982:"4d291b7a",5039:"ce501405",5071:"0f667e75",5438:"d7e6d510",5512:"09e50589",5584:"f04b74b9",5606:"3dbe0e4f",5876:"82ffc89b",6025:"3f54a080",6298:"f623b672",6513:"5081718e",6657:"f68184ee",6666:"aa61771b",6675:"2f935dbb",7093:"e53b32c7",7098:"21ac6ec4",7125:"95550a72",7131:"86130e41",7432:"a769ccc7",7497:"e87109e3",7566:"6591f970",7807:"77620ed2",7828:"e5a0e619",7931:"5863763c",8082:"d34ad585",8143:"85bd3e68",8180:"e9a6ebaa",8276:"111b1858",8576:"115fc282",8800:"83b03b7c",8835:"e63f6902",8836:"d48c7c11",9021:"e6745d6d",9062:"01273b8c",9093:"6c955d2f",9306:"7f0c1a21",9394:"b05f99e3",9433:"5815c0b3",9590:"c4694c1e",9691:"b2dd2340",9931:"84941031"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@lokalise/louis:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@lokalise/louis:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();