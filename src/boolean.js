export var boolean = {
    // 是否对象
    isObj: function (input) {
        return Object.prototype.toString.call(input) === '[object Object]'
    },
    // 是否数组
    isArr: function (input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        )
    },
    // 是否时间
    isDate: function (input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        )
    },
    // 是否数字
    isNumber: function (input) {
        return (
            input instanceof Number ||
            Object.prototype.toString.call(input) === '[object Number]'
        )
    },
    // 是否字符串
    isString: function (input) {
        return (
            input instanceof String ||
            Object.prototype.toString.call(input) === '[object String]'
        )
    },
    // 是否boolean
    isBoolean: function (input) {
        return typeof input == 'boolean'
    },
    // 是否函数
    isFunction: function (input) {
        return typeof input == 'function'
    },
    // 是否为null
    isNull: function (input) {
        return input === undefined || input === null
    },
    // 
    isPlainObject: function (obj) {
        if (
            obj &&
            Object.prototype.toString.call(obj) === '[object Object]' &&
            obj.constructor === Object &&
            !hasOwnProperty.call(obj, 'constructor')
        ) {
            var key
            for (key in obj) {
            }
            return key === undefined || hasOwnProperty.call(obj, key)
        }
        return false
    },
    isEmptyObject: function (obj) {
        return Object.keys(obj).length === 0
    },
    // 是否Undefined
    isUndefined: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
    },
    // 是否正则
    isRegExp: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
    },
    // 是否错误对象
    isError: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
    },
    // 是否Symbol函数
    isSymbol: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
    },
    // 是否Promise对象
    isPromise: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
    },
    // 是否Set对象
    isSet: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
    },
    // 是否是微信浏览器
    isWeiXin: function () {
        return ua.match(/microMessenger/i) == 'micromessenger'
    },
    // 是否是移动端
    isDeviceMobile: function () {
        return /android|webos|iphone|ipod|balckberry/i.test(ua)
    },
    // 是否是QQ浏览器
    isQQBrowser: function () {
        return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
    },
    // 是否是爬虫
    isSpider: function () {
        return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
    },
    // 是否ios
    isIos: function () {
        var u = navigator.userAgent
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {  //安卓手机
            return false
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            return true
        } else if (u.indexOf('iPad') > -1) {//iPad
            return false
        } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
            return false
        } else {
            return false
        }
    },
    // 是否为PC端
    isPC: function () {
        var userAgentInfo = navigator.userAgent
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"]
        var flag = true
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false
                break
            }
        }
        return flag
    },
    // 判断两个对象是否键值相同
    isObjectEqual: function (a, b) {
        var aProps = Object.getOwnPropertyNames(a)
        var bProps = Object.getOwnPropertyNames(b)

        if (aProps.length !== bProps.length) {
            return false
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i]

            if (a[propName] !== b[propName]) {
                return false
            }
        }
        return true
    }
}