var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__awaiter=this&&this.__awaiter||function(o,a,s,c){return new(s=s||Promise)(function(t,e){function n(t){try{i(c.next(t))}catch(t){e(t)}}function r(t){try{i(c.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new s(function(t){t(e.value)}).then(n,r)}i((c=c.apply(o,a||[])).next())})},__generator=this&&this.__generator||function(n,r){var i,o,a,t,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&e[0]?o.return:e[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,e[1])).done)return a;switch(o=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return s.label++,{value:e[1],done:!1};case 5:s.label++,o=e[1],e=[0];continue;case 7:e=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){s=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){s.label=e[1];break}if(6===e[0]&&s.label<a[1]){s.label=a[1],a=e;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(e);break}a[2]&&s.ops.pop(),s.trys.pop();continue}e=r.call(n,s)}catch(t){e=[6,t],o=0}finally{i=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},_this=this;chrome.tabs.onActivated.addListener(function(r){return __awaiter(_this,void 0,void 0,function(){var e,n;return __generator(this,function(t){switch(t.label){case 0:return[4,StorageArea.get("dtId")];case 1:return e=t.sent(),[4,StorageArea.get("theme")];case 2:return n=t.sent()||"original",e===r.tabId&&(sendMessage({initDingTalkStyle:!0}),sendMessage({checkLSPStatus:!0}),sendMessage({theme:n})),[2]}})})}),chrome.runtime.onMessage.addListener(function(e,n,r){return __awaiter(_this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e.storeDtId?(StorageArea.set({dtId:n.tab.id}),[3,5]):[3,1];case 1:return e.snapshot?(chrome.tabs.captureVisibleTab(null,{},function(t){sendMessage({snapshot:t})}),[3,5]):[3,2];case 2:return e.chromeNotification?[4,Notify.sendChromeNotification(e.chromeNotification)]:[3,4];case 3:return t.sent(),[3,5];case 4:e.versionCheck,t.label=5;case 5:return r({result:"success"}),[2]}})})});var Notify=function(){function r(){}return r.sendChromeNotification=function(n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return r.lastNotificationId?[4,this.clearChromeNotification()]:[3,2];case 1:t.sent(),t.label=2;case 2:return n.type||(n.type="basic"),n.iconUrl||(n.iconUrl=chrome.extension.getURL("icon.png")),[2,new Promise(function(e){chrome.notifications.create(null,__assign({},n),function(t){if(chrome.runtime.lastError)return console.log(chrome.runtime.lastError.message);e(r.lastNotificationId=t)})})]}})})},r.clearChromeNotification=function(){var t=this;return new Promise(function(n){chrome.notifications.clear(r.lastNotificationId,function(e){return __awaiter(t,void 0,void 0,function(){return __generator(this,function(t){return n(e),[2]})})})})},r.lastNotificationId=void 0,r}();