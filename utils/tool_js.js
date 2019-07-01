// typeof 检测变量类型
function type(target) {
    var typeStr = typeof target,
        toStr = Object.prototype.toString.call(target),
        objStr = {
            "[object Array]": "array",
            "[object Object]": "object",
            "[object Number]": "number - object",
            "[object Boolean]": "boolean - object",
            "[object String]": "string - object"
        };
    if(target === null) {
        return "null";
    } else if(typeStr === "object") {
        return objStr[toStr];
    } else {
        return typeStr;
    }
}

// 数组去重
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for(var i=0; i<len; i++) {
        if(!temp[this[i]]) {
            temp[this[i]] = 1;
            arr.push(this[i]);
        }
    }
    return arr;
}
function unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1));
}
function unique(arr) {
    return Array.from(new Set(arr));
}
function unique(arr) {
    return [...new Set(arr)];
}
 
// 深层克隆
function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    
    for(var prop in origin) {
        if(origin.hasOwnProperty(prop)) {
            if(origin[prop] !== null && typeof origin[prop] == "object") {
                target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};
                deepClone(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

// 深层克隆
function deepClone(origin, target) {
    var target = target || {};
    target = JSON.parse(JSON.stringify(origin));
    return target;
}

// 继承
// 圣杯模式
function inherit(Target, Origin) {
    function F() {};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;
}
// 模块化
var inherit = (function () {
    var F = function () {}; // 私有变量
    return function (Target, Origin) {
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
})();

// 异步加载
function loadScript(url, callback) {
    var script = document.createElement("script");
    if(script.readyState) {
        script.onreadystatechange = function () {
            if(script.readyState == "complete" || script.readyState == "loaded") {
                tools[callback]();
            }
        }
    } else {
        script.onload = function () {
            tools[callback]();
        }
    }
    script.src = url;
    document.head.appendChild(script);
}
loadScript("demo.js", "test");
// demo.js
var tools = {
    test: function () {
        console.log("a");
    },
    demo: function () {
    
    }
}


/**
 * 排序
 */
// 冒泡排序 升序
function bubbleSort(arr) {
    let len = arr.length;
    for(let i=0; i<len-1; i++) {
        for(let j=0; j<len-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
// 快速排序
let arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
function quickSort(left, right) {
    let i = left;
    let j = right;
    let flag = arr[left];
    if (left > right) return;
    while(i !== j) {
        while(arr[j] >= flag && i < j) {
            j--;
        }
        while(arr[i] <= flag && i < j) {
            i++;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    arr[left] = arr[i];
    arr[i] = flag;
    quickSort(left, i-1);
    quickSort(i+1, right);
    return;
}
quickSort(0, arr.length-1)
console.log(arr);


/**
 * 封装函数 考虑兼容性
 */
// 滚动轮滚动距离
function getScrollOffset() {
    if(widow.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

// 浏览器视口尺寸
function getViewportOffset() {
    if(window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if(document.compatMode === "BackCompat") {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

// 获取元素样式
function getStyle(elem, prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

// 事件绑定函数
function addEvent(elem, type, handle) {
    if(elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if(elem.attachEvent) {
        elem.attachEvent("on" + type, function () {
            handle.call(elem);
        })
    } else {
        elem["on" + type] = handle;
    }
}

// 事件解除绑定函数
function removeEvent(elem, type, handle) {
    if(elem.removeEventListener) {
        elem.removeEventListener(type, handle, false);
    } else if(elem.detachEvent) {
        elem.detachEvent("on" + type, function () {
            handle.call(elem);
        })
    } else {
        elem["on" + type] = null;
    }
}

// 取消冒泡
function stopBubble(event) {
    if(event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

// 阻止默认事件
function cancelHandler(event) {
    if(event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

// 鼠标拖拽事件
function drag(elem) {
    var disX,
        disY;
    addEvent(elem, "mousedown", function (e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(getStyle(elem, "left"));
        disY = event.clientY - parseInt(getStyle(elem, "top"));
        addEvent(document, "mousemove", mouseMove);
        addEvent(document, "mouseup", mouseUp);
        stopBubble(event);
        cancelHandler(event);
    });
    function mouseMove(e) {
        var event = e || window.event;
        elem.style.left = event.clientX - disX + "px";
        elem.style.top = event.clientY - disY + "px";
    }
    function mouseUp(e) {
        var event = e || window.event;
        removeEvent(document, "mousemove", mouseMove);
        removeEvent(document, "mouseup", mouseUp);        
    }
}


/** 
 * 常用正则表达式
 */
// 用户名正则，4到16位（字母，数字，下划线，减号）
var user = /^[a-zA-Z0-9_-]{4,16}$/;
// 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
var user = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
// 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，一个特殊字符
var password = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
var password = /^[a-zA-Z]\w{5,17}$/;
// 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
// Email
var email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// 手机号
var phone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
// 电话号码
var phone = /^($$\d{3,4}-)|\d{3.4}-)?\d{7,8}$/;
// 国内电话号码
var phone = /\d{3}-\d{8}|\d{4}-\d{7}/;
// 身份证号18位
var IdNumber = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// 身份证号(15位、18位数字)：
var IdNumber = /^\d{15}|\d{18}$/;
// 短身份证号码(数字、字母x结尾)：
var IdNumber = /^([0-9]){7,18}(x|X)?$ 或 ^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$/;
// 域名
var domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
// URL
var url = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
// IP地址
var ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
// 十六进制颜色
var color = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
// 邮编
var postcode = /[1-9]\d{5}(?!\d)/;
// qq 5-11位
var qq = /^[1-9][0-9]{4,10}$/;
var qq = /[1-9][0-9]{4,}/;
// WeChat 6至20位，以字母开头，字母，数字，减号，下划线
var WeChat = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
// 中文字符
var chinese = /[\u4e00-\u9fa5]/;
// 日期
var date = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
// 车牌
var carNumber = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;