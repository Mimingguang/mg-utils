export var tool = {
    // 生成uuid
    uuid() {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1)
        }
        return (
            s4() +
            s4() +
            '-' +
            s4() +
            '-' +
            s4() +
            '-' +
            s4() +
            '-' +
            s4() +
            s4() +
            s4()
        )
    },
    // 16进制颜色转RGBRGBA字符串
    hexToRgba(hex, opacity = 1) {
        var RGBA =
            'rgba(' +
            parseInt('0x' + hex.slice(1, 3)) +
            ',' +
            parseInt('0x' + hex.slice(3, 5)) +
            ',' +
            parseInt('0x' + hex.slice(5, 7)) +
            ',' +
            opacity +
            ')'
        return {
            red: parseInt('0x' + hex.slice(1, 3)),
            green: parseInt('0x' + hex.slice(3, 5)),
            blue: parseInt('0x' + hex.slice(5, 7)),
            rgba: RGBA,
        }
    },
    // 16进制颜色转RGBRGBA字符串
    colorToRGB: function (val, opa) {

        var pattern = /^(#?)[a-fA-F0-9]{6}$/ //16进制颜色值校验规则
        var isOpa = typeof opa == 'number' //判断是否有设置不透明度

        if (!pattern.test(val)) { //如果值不符合规则返回空字符
            return ''
        }

        var v = val.replace(/#/, '') //如果有#号先去除#号
        var rgbArr = []
        var rgbStr = ''

        for (var i = 0; i < 3; i++) {
            var item = v.substring(i * 2, i * 2 + 2)
            var num = parseInt(item, 16)
            rgbArr.push(num)
        }

        rgbStr = rgbArr.join()
        rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')'
        return rgbStr
    },
    // 获取url参数
    getURLParam(name, search) {
        return (
            decodeURIComponent(
                (new RegExp(`[?|&]${name}=` + '([^&;]+?)(&|#|;|$)').exec(
                    search || location.search
                ) || [true, ''])[1].replace(/\+/g, '%20')
            ) || null
        )
    },
    // 追加url参数
    appendQuery: function (url, key, value) {
        var options = key
        if (typeof options == 'string') {
            options = {}
            options[key] = value
        }
        options = $.param(options)
        if (url.includes('?')) {
            url += '&' + options
        } else {
            url += '?' + options
        }
        return url
    },
    // 劫持粘贴板
    copyTextToClipboard: function (value) {
        var textArea = document.createElement("textarea")
        textArea.style.background = 'transparent'
        textArea.value = value
        document.body.appendChild(textArea)
        textArea.select()
        try {
            var successful = document.execCommand('copy')
        } catch (err) {
            console.log('Oops, unable to copy')
        }
        document.body.removeChild(textArea)
    },
    // 判断一个元素是否在数组中
    contains: function (arr, val) {
        return arr.indexOf(val) != -1 ? true : false
    },
    // 数组排序，{type} 1：从小到大 2：从大到小 3：随机
    sort: function (arr, type = 1) {
        return arr.sort((a, b) => {
            switch (type) {
                case 1:
                    return a - b
                case 2:
                    return b - a
                case 3:
                    return Math.random() - 0.5
                default:
                    return arr
            }
        })
    },
    // 数组去重
    unique: function (arr) {
        if (Array.hasOwnProperty('from')) {
            return Array.from(new Set(arr))
        } else {
            var n = {}, r = []
            for (var i = 0; i < arr.length; i++) {
                if (!n[arr[i]]) {
                    n[arr[i]] = true
                    r.push(arr[i])
                }
            }
            return r
        }
    },
    // 求两个集合的并集
    union: function (a, b) {
        var newArr = a.concat(b)
        return this.unique(newArr)
    },
    // 求两个集合的交集
    intersect: function (a, b) {
        var _this = this
        a = this.unique(a)
        return this.map(a, function (o) {
            return _this.contains(b, o) ? o : null
        })
    },
    // 删除其中一个元素
    remove: function (arr, ele) {
        var index = arr.indexOf(ele)
        if (index > -1) {
            arr.splice(index, 1)
        }
        return arr
    },
    // 将类数组转换为数组
    formArray: function (ary) {
        var arr = []
        if (Array.isArray(ary)) {
            arr = ary
        } else {
            arr = Array.prototype.slice.call(ary)
        };
        return arr
    },
    // 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
    trim: function (str, type) {
        type = type || 1
        switch (type) {
            case 1:
                return str.replace(/\s+/g, "")
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "")
            case 3:
                return str.replace(/(^\s*)/g, "")
            case 4:
                return str.replace(/(\s*$)/g, "")
            default:
                return str
        }
    },
    // 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
    changeCase: function (str, type) {
        type = type || 4
        switch (type) {
            case 1:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()

                })
            case 2:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
                })
            case 3:
                return str.split('').map(function (word) {
                    if (/[a-z]/.test(word)) {
                        return word.toUpperCase()
                    } else {
                        return word.toLowerCase()
                    }
                }).join('')
            case 4:
                return str.toUpperCase()
            case 5:
                return str.toLowerCase()
            default:
                return str
        }
    },
    // 检测密码强度
    checkPwd: function (str) {
        var Lv = 0
        if (str.length < 6) {
            return Lv
        }
        if (/[0-9]/.test(str)) {
            Lv++
        }
        if (/[a-z]/.test(str)) {
            Lv++
        }
        if (/[A-Z]/.test(str)) {
            Lv++
        }
        if (/[\.|-|_]/.test(str)) {
            Lv++
        }
        return Lv
    },
    // 在字符串中插入新字符串
    insertStr: function (soure, index, newStr) {
        var str = soure.slice(0, index) + newStr + soure.slice(index)
        return str
    }
}