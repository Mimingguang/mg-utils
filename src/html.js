export var html = {
    // 去除html标签
    removeHtmltag: function (str) {
        return str.replace(/<[^>]+>/g, '')
    },
    // el是否包含某个class
    hasClass: function (el, className) {
        var reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
        return reg.test(el.className)
    },
    // el添加某个class
    addClass: function (el, className) {
        if (this.hasClass(el, className)) {
            return
        }
        var newClass = el.className.split(' ')
        newClass.push(className)
        el.className = newClass.join(' ')
    },
    // el去除某个class
    removeClass: function (el, className) {
        if (!this.hasClass(el, className)) {
            return
        }
        var reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
        el.className = el.className.replace(reg, ' ')
    }
}