(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,i){return(t=s(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(t){var i=function(t,i){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,"string");if("object"!==e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(i)?i:String(i)}var a=i((function e(t,i){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"generateKeys",(function(e){var t=[];return e.forEach((function(e){var i=s.createKeyInstance(e,s.lang,s.dispatchInputVirtual);t.push(i.createKey()),s.keyElements.push(i)})),t})),n(this,"renderKeys",(function(e,t){return s.generateKeys(e).forEach((function(e){return t.append(e)})),t})),n(this,"renderKeyBoard",(function(){Object.keys(s.keys).forEach((function(e){var t=document.createElement("div");t.classList.add("keyboard__row"),s.keyboard.append(s.renderKeys(s.keys[e],t))}))})),n(this,"getInput",(function(){s.input=document.querySelector("textarea")})),n(this,"createLayoutStructure",(function(){s.page=document.createElement("div"),s.page.classList.add("page"),s.input=document.createElement("textarea"),s.input.classList.add("text-field"),s.input.id="textField",s.switchBtn=document.createElement("button"),s.switchBtn.classList.add("button"),s.switchBtn.textContent="Press Ctrl + Shift or Alt + Shift to switch language",s.switchBtn.id="switchLangBtn",s.keyboard=document.createElement("div"),s.keyboard.classList.add("keyboard"),s.body.append(s.page),s.page.append(s.input),s.page.append(s.switchBtn),s.page.append(s.keyboard)})),n(this,"initiate",(function(){s.createLayoutStructure(),s.renderKeyBoard(),s.setListeners()})),n(this,"changeLang",(function(){s.lang=s.lang===s.LANGUAGES.ru?s.LANGUAGES.en:s.LANGUAGES.ru,localStorage.setItem("lang",s.lang),s.keyElements.forEach((function(e){return e.changeLang(s.lang)}))})),n(this,"handleKeyDown",(function(e){["Delete","Backspace","Shift","Control","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)||e.preventDefault();var t=s.keyElements.find((function(t){return t.getAllPossibleValues().some((function(t){return t===e.key}))}));t&&(t.highlight(),t.animate(),["Delete","Backspace","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)||t.dispatchInputVirt(t.getContext()))})),n(this,"handleKeyUp",(function(e){var t=s.keyElements.find((function(t){return t.getAllPossibleValues().some((function(t){return t===e.key}))}));t&&(t.stopHighlight(),t.stopAnimate())})),n(this,"focusInput",(function(){s.input.focus()})),n(this,"toggleShift",(function(){s.shiftPressed=!s.shiftPressed;var e=s.keyElements.find((function(e){return"Shift"===e.getValues()[0]}));s.shiftPressed?(e.hold(),s.keyElements.forEach((function(e){return e.renderRegistrState("shift")}))):s.capsPressed?(e.leave(),s.keyElements.forEach((function(e){return e.renderRegistrState("caps")}))):(e.leave(),s.keyElements.forEach((function(e){return e.renderRegistrState()})))})),n(this,"toggleCaps",(function(){s.capsPressed=!s.capsPressed;var e=s.keyElements.find((function(e){return"CapsLock"===e.getValues()[0]}));s.capsPressed?(e.hold(),s.keyElements.forEach((function(e){return e.renderRegistrState("caps")}))):(e.leave(),s.keyElements.forEach((function(e){return e.renderRegistrState()})))})),n(this,"dispatchInputVirtual",(function(e){var t=s.input.selectionStart;switch(e.chars.main){case"Backspace":s.input.value=s.input.value.substring(0,s.input.selectionStart-1)+s.input.value.substring(s.input.selectionEnd,s.input.value.length),s.input.selectionStart=0!==t?t-1:t,s.input.selectionEnd=0!==t?t-1:t,s.shiftPressed&&s.toggleShift();break;case"Delete":s.input.value=s.input.value.substring(0,s.input.selectionStart)+s.input.value.substring(s.input.selectionEnd+1,s.input.value.length),s.input.selectionStart=t,s.input.selectionEnd=t,s.shiftPressed&&s.toggleShift();break;case"Shift":s.toggleShift();break;case"CapsLock":s.toggleCaps(),s.shiftPressed&&s.toggleShift();break;case"ArrowRight":s.input.selectionStart+=1,s.shiftPressed&&s.toggleShift();break;case"Tab":s.input.selectionStart+=1,s.input.value="".concat(s.input.value.substring(0,s.input.selectionStart),"    ").concat(s.input.value.substring(s.input.selectionEnd,s.input.value.length)),s.input.selectionStart=t+5,s.input.selectionEnd=t+5,s.shiftPressed&&s.toggleShift();break;case"Alt":case"Control":s.shiftPressed&&(s.changeLang(),s.toggleShift()),s.shiftPressed&&s.toggleShift();break;case"ArrowLeft":s.input.selectionStart-=1,s.input.selectionEnd-=1,s.shiftPressed&&s.toggleShift();break;case"Enter":s.input.value="".concat(s.input.value.substring(0,s.input.selectionStart),"\n").concat(s.input.value.substring(s.input.selectionEnd,s.input.value.length)),s.input.selectionStart=t+1,s.input.selectionEnd=t+1,s.shiftPressed&&s.toggleShift();break;default:if(!e.key.charKey)return;if(s.shiftPressed){var i=e.chars.shift?e.chars.shift:e.chars.main;s.input.value=s.input.value.substring(0,s.input.selectionStart)+i+s.input.value.substring(s.input.selectionEnd,s.input.value.length),s.toggleShift(),s.input.selectionStart=t+1,s.input.selectionEnd=t+1}else if(s.capsPressed){var n=e.chars.shift?e.chars.shift:e.chars.main;s.input.value=s.input.value.substring(0,s.input.selectionStart)+n+s.input.value.substring(s.input.selectionEnd,s.input.value.length),s.input.selectionStart=t+1,s.input.selectionEnd=t+1}else s.input.value=s.input.value.substring(0,s.input.selectionStart)+e.chars.main+s.input.value.substring(s.input.selectionEnd,s.input.value.length),s.input.selectionStart=t+1,s.input.selectionEnd=t+1}})),n(this,"setListeners",(function(){s.input.addEventListener("keydown",s.handleKeyDown),s.input.addEventListener("keyup",(function(e){s.handleKeyUp(e)})),window.addEventListener("mouseup",(function(){s.keyElements.forEach((function(e){e.stopHighlight(),e.stopAnimate()}))})),s.keyboard.addEventListener("mouseup",s.focusInput)})),this.createKeyInstance=i,this.keys=t,this.LANGUAGES={ru:"ru",en:"en"},this.lang=localStorage.getItem("lang"),this.body=document.querySelector(".root"),this.keyElements=[],this.initiate(),this.shiftPressed=!1,this.capsPressed=!1}));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function h(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function o(e,t,i){return t&&h(e.prototype,t),i&&h(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,i){return(t=c(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}var l=o((function e(t,i,n){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"createKey",(function(){return s.keyEl=document.createElement("button"),s.keyEl.classList.add("keyboard__key"),s.keyEl.classList.add("keyboard__key_size_".concat(s.key.size)),s.keyCharMain=document.createElement("p"),s.keyCharMain.classList.add("keyboard__key-main"),s.keyCharShift=document.createElement("p"),s.keyCharShift.classList.add("keyboard__key-shift"),s.keyEl.append(s.keyCharMain),s.keyEl.append(s.keyCharShift),s.renderRegistrState(),s.setListeners(),s.keyEl})),u(this,"setCharset",(function(){s.key.en?s.chars="ru"===s.lang?s.key.ru:s.key.en:s.chars=s.key})),u(this,"renderRegistrState",(function(e){var t,i,n,a,r;s.setCharset(),"Control"===s.chars.main?s.keyCharMain.textContent="Ctrl":"Meta"===s.chars.main?s.keyCharMain.textContent="Win":"ArrowUp"===s.chars.main?s.keyCharMain.textContent="↑":"ArrowLeft"===s.chars.main?s.keyCharMain.textContent="←":"ArrowRight"===s.chars.main?s.keyCharMain.textContent="→":"ArrowDown"===s.chars.main?s.keyCharMain.textContent="↓":"Delete"===s.chars.main?s.keyCharMain.textContent="Del":1===s.chars.main.length?s.keyCharMain.textContent="shift"===e?s.chars.shift:"caps"===e||"shift"===e?s.chars.main.toUpperCase():s.chars.main:s.keyCharMain.textContent=s.chars.main,(null===(t=s.chars)||void 0===t?void 0:t.shift)!==(null===(i=s.chars)||void 0===i?void 0:i.main.toUpperCase())?s.keyCharShift.textContent="shift"===e?null!==(n=s.chars)&&void 0!==n&&n.shift?null===(a=s.chars)||void 0===a?void 0:a.main:"":null===(r=s.chars)||void 0===r?void 0:r.shift:s.keyCharShift.textContent=""})),u(this,"changeLang",(function(e){s.lang=e,s.renderRegistrState()})),u(this,"getValues",(function(){return[s.chars.main,s.chars.shift]})),u(this,"getAllPossibleValues",(function(){return s.key.en?[s.key.ru.main,s.key.ru.shift,s.key.en.main,s.key.en.shift]:[s.key.main,s.key.shift]})),u(this,"getContext",(function(){return s})),u(this,"highlight",(function(){s.keyEl.classList.add("keyboard__key_highlighted")})),u(this,"stopHighlight",(function(){s.keyEl.classList.remove("keyboard__key_highlighted")})),u(this,"animate",(function(){s.keyEl.classList.add("keyboard__key_pressed")})),u(this,"stopAnimate",(function(){s.keyEl.classList.remove("keyboard__key_pressed")})),u(this,"hold",(function(){s.keyCharMain.classList.add("keyboard__key-main_held")})),u(this,"leave",(function(){s.keyCharMain.classList.remove("keyboard__key-main_held")})),u(this,"setListeners",(function(){s.keyEl.addEventListener("mousedown",(function(){s.highlight(),s.animate(),s.dispatchInputVirt(s.getContext())}))})),this.dispatchInputVirt=n,this.key=t,this.lang=i}));new a({row1:[{charKey:!0,size:"s",en:{shift:"~",main:"`"},ru:{shift:"Ё",main:"ё"}},{charKey:!0,size:"s",shift:"!",main:"1"},{charKey:!0,size:"s",en:{shift:"@",main:"2"},ru:{shift:'"',main:"2"}},{charKey:!0,size:"s",en:{shift:"#",main:"3"},ru:{shift:"№",main:"3"}},{charKey:!0,size:"s",en:{shift:"$",main:"4"},ru:{shift:";",main:"4"}},{charKey:!0,size:"s",shift:"%",main:"5"},{charKey:!0,size:"s",en:{shift:"^",main:"6"},ru:{shift:":",main:"6"}},{charKey:!0,size:"s",en:{shift:"&",main:"7"},ru:{shift:"?",main:"7"}},{charKey:!0,size:"s",shift:"*",main:"8"},{charKey:!0,size:"s",shift:"(",main:"9"},{charKey:!0,size:"s",shift:")",main:"0"},{charKey:!0,size:"s",shift:"_",main:"-"},{charKey:!0,size:"s",shift:"+",main:"="},{charKey:!1,size:"xl",main:"Backspace"}],row2:[{charKey:!1,size:"m",main:"Tab"},{charKey:!0,size:"s",en:{shift:"Q",main:"q"},ru:{shift:"Й",main:"й"}},{charKey:!0,size:"s",en:{shift:"W",main:"w"},ru:{shift:"Ц",main:"ц"}},{charKey:!0,size:"s",en:{shift:"E",main:"e"},ru:{shift:"У",main:"у"}},{charKey:!0,size:"s",en:{shift:"R",main:"r"},ru:{shift:"К",main:"к"}},{charKey:!0,size:"s",en:{shift:"T",main:"t"},ru:{shift:"Е",main:"е"}},{charKey:!0,size:"s",en:{shift:"Y",main:"y"},ru:{shift:"Н",main:"н"}},{charKey:!0,size:"s",en:{shift:"U",main:"u"},ru:{shift:"Г",main:"г"}},{charKey:!0,size:"s",en:{shift:"I",main:"i"},ru:{shift:"Ш",main:"ш"}},{charKey:!0,size:"s",en:{shift:"O",main:"o"},ru:{shift:"Щ",main:"щ"}},{charKey:!0,size:"s",en:{shift:"P",main:"p"},ru:{shift:"З",main:"з"}},{charKey:!0,size:"s",en:{shift:"{",main:"["},ru:{shift:"Х",main:"х"}},{charKey:!0,size:"s",en:{shift:"}",main:"]"},ru:{shift:"Ъ",main:"ъ"}},{charKey:!0,size:"s",en:{shift:"|",main:"\\"},ru:{shift:"/",main:"\\"}},{charKey:!1,size:"s",main:"Delete"}],row3:[{charKey:!1,size:"xl",main:"CapsLock"},{charKey:!0,size:"s",en:{shift:"A",main:"a"},ru:{shift:"Ф",main:"ф"}},{charKey:!0,size:"s",en:{shift:"S",main:"s"},ru:{shift:"Ы",main:"ы"}},{charKey:!0,size:"s",en:{shift:"D",main:"d"},ru:{shift:"В",main:"в"}},{charKey:!0,size:"s",en:{shift:"F",main:"f"},ru:{shift:"А",main:"а"}},{charKey:!0,size:"s",en:{shift:"G",main:"g"},ru:{shift:"П",main:"п"}},{charKey:!0,size:"s",en:{shift:"H",main:"h"},ru:{shift:"Р",main:"р"}},{charKey:!0,size:"s",en:{shift:"J",main:"j"},ru:{shift:"О",main:"о"}},{charKey:!0,size:"s",en:{shift:"K",main:"k"},ru:{shift:"Л",main:"л"}},{charKey:!0,size:"s",en:{shift:"L",main:"l"},ru:{shift:"Д",main:"д"}},{charKey:!0,size:"s",en:{shift:":",main:";"},ru:{shift:"Ж",main:"ж"}},{charKey:!0,size:"s",en:{shift:'"',main:"'"},ru:{shift:"Э",main:"э"}},{charKey:!1,size:"l",main:"Enter"}],row4:[{charKey:!1,size:"xl",main:"Shift"},{charKey:!0,size:"s",main:"\\"},{charKey:!0,size:"s",en:{shift:"Z",main:"z"},ru:{shift:"Я",main:"я"}},{charKey:!0,size:"s",en:{shift:"X",main:"x"},ru:{shift:"Ч",main:"ч"}},{charKey:!0,size:"s",en:{shift:"C",main:"c"},ru:{shift:"С",main:"с"}},{charKey:!0,size:"s",en:{shift:"V",main:"v"},ru:{shift:"М",main:"м"}},{charKey:!0,size:"s",en:{shift:"B",main:"b"},ru:{shift:"И",main:"и"}},{charKey:!0,size:"s",en:{shift:"N",main:"n"},ru:{shift:"Т",main:"т"}},{charKey:!0,size:"s",en:{shift:"M",main:"m"},ru:{shift:"Ь",main:"ь"}},{charKey:!0,size:"s",en:{shift:"<",main:","},ru:{shift:"Б",main:"б"}},{charKey:!0,size:"s",en:{shift:">",main:"."},ru:{shift:"Ю",main:"ю"}},{charKey:!0,size:"s",en:{shift:"?",main:"/"},ru:{shift:",",main:"."}},{charKey:!1,size:"s",main:"ArrowUp"},{charKey:!1,size:"s",main:"Shift"}],row5:[{charKey:!1,size:"l",main:"Control"},{charKey:!1,size:"s",main:"Meta"},{charKey:!1,size:"s",main:"Alt"},{charKey:!0,size:"xxxl",main:" "},{charKey:!1,size:"s",main:"Alt"},{charKey:!1,size:"l",main:"Control"},{charKey:!1,size:"s",main:"ArrowLeft"},{charKey:!1,size:"s",main:"ArrowDown"},{charKey:!1,size:"s",main:"ArrowRight"}]},(function(e,t,i){return new l(e,t,i)}))})();