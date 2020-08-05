export var local = {
    // localStorage存储
    setLocal(name, value) {
        if (window.localStorage && JSON && name) {
            if (typeof value == 'object') {
                value = JSON.stringify(value)
            }
            window.localStorage.setItem(name, value)
            return true
        }
        return false
    },
    // localStorage获取
    getLocal(name, type) {
        if (window.localStorage && JSON && name) {
            const data = window.localStorage.getItem(name)
            if (type && type == 'json' && !this.isNull(data)) {
                try {
                    return JSON.parse(data)
                } catch (e) {
                    console.error(`取数转换json错误${e}`)
                    return ''
                }
            } else {
                return data
            }
        }
        return null
    },
    // localStorage获取并转换为json
    getLocal2Json(name) {
        return this.getLocal(name, 'json')
    },
    // localStorage删除
    removeLocal(name) {
        if (window.localStorage && JSON && name) {
            window.localStorage.removeItem(name)
        }
        return null
    },
    // cookies存储
    setCookie(name, value, domain, path, minSec) {
        const cookieEnabled = navigator.cookieEnabled ? true : false
        if (name && cookieEnabled) {
            path = path || '/'
            if (typeof value == 'object') {
                value = JSON.stringify(value)
            }
            var exp
            if (minSec) {
                exp = new Date() // new Date("December 31, 9998");
                exp.setTime(exp.getTime() + minSec * 1000)
            } else {
                exp = new Date('9998-01-01')
            }
            var cookieString = `${name}=${escape(value)}${
                minSec ? `;expires=${exp.toGMTString()}` : ''
                };path=${path};`
            if (domain) {
                cookieString += `domain=${domain};`
            }
            document.cookie = cookieString
            return true
        }
        return false
    },
    // cookie获取
    getCookie(name) {
        const cookieEnabled = navigator.cookieEnabled ? true : false
        if (name && cookieEnabled) {
            const arr = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`))
            if (arr !== null) {
                return unescape(arr[2])
            }
        }
        return null
    },
    // cookie清空
    clearCookie(domain, path) {
        const keys = document.cookie.match(/[^ =;]+(?=\=)/g)
        path = path || '/'
        if (keys) {
            for (var i = keys.length; i--;) {
                var cookieString = `${keys[i]}=0;expires=${new Date(
                    0
                ).toUTCString()};path=${path};`
                if (domain) {
                    cookieString += `domain=${domain};`
                }
                document.cookie = cookieString
            }
        }
    },
    // cookie删除
    removeCookie(name, domain, path) {
        const cookieEnabled = navigator.cookieEnabled ? true : false
        if (name && cookieEnabled) {
            path = path || '/'
            var cookieString = `${name}=0;expires=${new Date(
                0
            ).toUTCString()};path=${path};`
            if (domain) {
                cookieString += `domain=${domain};`
            }
            document.cookie = cookieString
            return true
        }
        return false
    }
}