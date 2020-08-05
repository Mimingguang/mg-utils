export var math = {
    // 加
    add(arg1, arg2) {
        var s1 = arg1.toString()
        var s2 = arg2.toString()
        var arg1Arr = s1.split('.')
        var arg2Arr = s2.split('.')
        var d1 = arg1Arr.length == 2 ? arg1Arr[1] : ''
        var d2 = arg2Arr.length == 2 ? arg2Arr[1] : ''
        var maxLen = Math.max(d1.length, d2.length)
        var m = Math.pow(10, maxLen)
        return Number(((s1 * m + s2 * m) / m).toFixed(maxLen))
    },
    // 减
    sub(arg1, arg2) {
        return this.add(arg1, -arg2)
    },
    // 乘
    mul(arg1, arg2) {
        var m = 0
        var s1 = arg1.toString()
        var s2 = arg2.toString()
        try {
            m += s1.split('.')[1].length
        } catch (e) { }
        try {
            m += s2.split('.')[1].length
        } catch (e) { }
        return (
            (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
            Math.pow(10, m)
        )
    },
    // 除
    div(arg1, arg2) {
        var t1 = 0
        var t2 = 0
        try {
            t1 = arg1.toString().split('.')[1].length
        } catch (e) { }
        try {
            t2 = arg2.toString().split('.')[1].length
        } catch (e) { }
        var r1 = Number(arg1.toString().replace('.', ''))
        var r2 = Number(arg2.toString().replace('.', ''))
        return this.mul(r1 / r2, Math.pow(10, t2 - t1))
    },
    // 将阿拉伯数字翻译成中文的大写数字
    numberToChinese: function (num) {
        var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十")
        var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "")
        var a = ("" + num).replace(/(^0*)/g, "").split("."),
            k = 0,
            re = ""
        for (var i = a[0].length - 1; i >= 0; i--) {
            switch (k) {
                case 0:
                    re = BB[7] + re
                    break
                case 4:
                    if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                        .test(a[0]))
                        re = BB[4] + re
                    break
                case 8:
                    re = BB[5] + re
                    BB[7] = BB[5]
                    k = 0
                    break
            }
            if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
                re = AA[0] + re
            if (a[0].charAt(i) != 0)
                re = AA[a[0].charAt(i)] + BB[k % 4] + re
            k++
        }

        if (a.length > 1) // 加上小数部分(如果有小数部分)
        {
            re += BB[6]
            for (var i = 0; i < a[1].length; i++)
                re += AA[a[1].charAt(i)]
        }
        if (re == '一十')
            re = "十"
        if (re.match(/^一/) && re.length == 3)
            re = re.replace("一", "")
        return re
    },
    // 随机数范围
    random: function (min, max) {
        if (arguments.length === 2) {
            return Math.floor(min + Math.random() * ((max + 1) - min))
        } else {
            return null
        }
    },
    // 洗牌算法随机
    shuffle: function (arr) {
        var result = [],
            random
        while (arr.length > 0) {
            random = Math.floor(Math.random() * arr.length)
            result.push(arr[random])
            arr.splice(random, 1)
        }
        return result
    },
    // 将数字转换为大写金额
    changeToChinese: function (Num) {
        //判断如果传递进来的不是字符的话转换为字符
        if (typeof Num == "number") {
            Num = new String(Num)
        };
        Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
        Num = Num.replace(/ /g, "") //替换tomoney()中的空格
        Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
        if (isNaN(Num)) { //验证输入的字符是否为数字
            //alert("请检查小写金额是否正确");
            return ""
        };
        //字符处理完毕后开始转换，采用前后两部分分别转换
        var part = String(Num).split(".")
        var newchar = ""
        //小数点前进行转化
        for (var i = part[0].length - 1; i >= 0; i--) {
            if (part[0].length > 10) {
                return ""
                //若数量超过拾亿单位，提示
            }
            var tmpnewchar = ""
            var perchar = part[0].charAt(i)
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar
                    break
                case "1":
                    tmpnewchar = "壹" + tmpnewchar
                    break
                case "2":
                    tmpnewchar = "贰" + tmpnewchar
                    break
                case "3":
                    tmpnewchar = "叁" + tmpnewchar
                    break
                case "4":
                    tmpnewchar = "肆" + tmpnewchar
                    break
                case "5":
                    tmpnewchar = "伍" + tmpnewchar
                    break
                case "6":
                    tmpnewchar = "陆" + tmpnewchar
                    break
                case "7":
                    tmpnewchar = "柒" + tmpnewchar
                    break
                case "8":
                    tmpnewchar = "捌" + tmpnewchar
                    break
                case "9":
                    tmpnewchar = "玖" + tmpnewchar
                    break
            }
            switch (part[0].length - i - 1) {
                case 0:
                    tmpnewchar = tmpnewchar + "元"
                    break
                case 1:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "拾"
                    break
                case 2:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "佰"
                    break
                case 3:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "仟"
                    break
                case 4:
                    tmpnewchar = tmpnewchar + "万"
                    break
                case 5:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "拾"
                    break
                case 6:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "佰"
                    break
                case 7:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "仟"
                    break
                case 8:
                    tmpnewchar = tmpnewchar + "亿"
                    break
                case 9:
                    tmpnewchar = tmpnewchar + "拾"
                    break
            }
            var newchar = tmpnewchar + newchar
        }
        //小数点之后进行转化
        if (Num.indexOf(".") != -1) {
            if (part[1].length > 2) {
                // alert("小数点之后只能保留两位,系统将自动截断");
                part[1] = part[1].substr(0, 2)
            }
            for (i = 0; i < part[1].length; i++) {
                tmpnewchar = ""
                perchar = part[1].charAt(i)
                switch (perchar) {
                    case "0":
                        tmpnewchar = "零" + tmpnewchar
                        break
                    case "1":
                        tmpnewchar = "壹" + tmpnewchar
                        break
                    case "2":
                        tmpnewchar = "贰" + tmpnewchar
                        break
                    case "3":
                        tmpnewchar = "叁" + tmpnewchar
                        break
                    case "4":
                        tmpnewchar = "肆" + tmpnewchar
                        break
                    case "5":
                        tmpnewchar = "伍" + tmpnewchar
                        break
                    case "6":
                        tmpnewchar = "陆" + tmpnewchar
                        break
                    case "7":
                        tmpnewchar = "柒" + tmpnewchar
                        break
                    case "8":
                        tmpnewchar = "捌" + tmpnewchar
                        break
                    case "9":
                        tmpnewchar = "玖" + tmpnewchar
                        break
                }
                if (i == 0) tmpnewchar = tmpnewchar + "角"
                if (i == 1) tmpnewchar = tmpnewchar + "分"
                newchar = newchar + tmpnewchar
            }
        }
        //替换所有无用汉字
        while (newchar.search("零零") != -1)
            newchar = newchar.replace("零零", "零")
        newchar = newchar.replace("零亿", "亿")
        newchar = newchar.replace("亿万", "亿")
        newchar = newchar.replace("零万", "万")
        newchar = newchar.replace("零元", "元")
        newchar = newchar.replace("零角", "")
        newchar = newchar.replace("零分", "")
        if (newchar.charAt(newchar.length - 1) == "元") {
            newchar = newchar + "整"
        }
        return newchar
    },
    // 最大值
    max: function (arr) {
        return Math.max.apply(null, arr)
    },
    // 最小值
    min: function (arr) {
        return Math.min.apply(null, arr)
    },
    // 求和
    sum: function (arr) {
        return arr.reduce((pre, cur) => {
            return pre + cur
        })
    },
    // 平均值
    average(arr) {
        return this.sum(arr) / arr.length
    }
}