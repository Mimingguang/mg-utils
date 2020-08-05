# mg-utils

- ## boolean.js 返回布尔类型

  - ### isObj 是否对象
  - ### isArr 是否数组
  - ### isDate 是否时间
  - ### isNumber 是否数字
  - ### isString 是否字符串
  - ### isBoolean 是否 boolean
  - ### isFunction 是否函数
  - ### isNull 是否为 null
  - ### isPlainObject
  - ### isEmptyObject 是否空对象
  - ### isUndefined 是否 Undefined
  - ### isRegExp 是否正则
  - ### isError 是否错误对象
  - ### isSymbol 是否 Symbol 函数
  - ### isPromise 是否 Promise 对象
  - ### isSet 是否 Set 对象
  - ### isWeiXin 是否是微信浏览器
  - ### isDeviceMobile 是否是移动端
  - ### isQQBrowser 是否是 QQ 浏览器
  - ### isSpider 是否是爬虫
  - ### isIos 是否 ios
  - ### isPC 是否为 PC 端
  - ### isObjectEqual 判断两个对象是否键值相同

- ## html.js 操作 dom

  - ### removeHtmltag 去除 html 标签
  - ### hasClass el 是否包含某个 class
  - ### addClass el 添加某个 class
  - ### removeClass el 去除某个 class

- ## local.js 本地存取

  - ### setLocal localStorage 存储
  - ### getLocal localStorage 获取
  - ### getLocal2Json localStorage 获取并转换为 json
  - ### removeLocal localStorage 删除
  - ### setCookie cookies 存储
  - ### getCookie cookie 获取
  - ### clearCookie cookie 清除
  - ### removeCookie cookie 删除

- ## math.js Number 计算、转换、随机

  - ### add 加
  - ### sub 减
  - ### mul 乘
  - ### div 除
  - ### numberToChinese 将阿拉伯数字翻译成中文的大写数字
  - ### random 随机数范围
  - ### shuffle 洗牌算法随机
  - ### changeToChinese 将数字转换为大写金额
  - ### max 最大值
  - ### min 最小值
  - ### sum 求和
  - ### average 平均值

- ## regular.js 正则判断

  - ### isEmail 是否邮箱
  - ### isMobile 是否手机号
  - ### isPhone 是否电话号
  - ### isURL 是否是 HTTP(s) URL
  - ### checkStr 判断类型集合
  - ### isCardID 严格的身份证校验

- ## scroll.js 滚动相关

  - ### getScrollPosition 获取滚动的坐标
  - ### scrollToTop 滚动到顶部
  - ### elementIsVisibleInViewport el 是否在视口范围内

- ## tool.js 其他

  - ### uuid 生成 uuid
  - ### hexToRgba 16 进制颜色转 RGBRGBA 字符串
  - ### colorToRGB 16 进制颜色转 RGBRGBA 字符串
  - ### getURLParam 获取 url 参数
  - ### appendQuery 追加 url 参数
  - ### copyTextToClipboard 劫持粘贴板
  - ### contains 判断一个元素是否在数组中
  - ### sort 数组排序，{type} 1：从小到大 2：从大到小 3：随机
  - ### unique 数组去重
  - ### union 求两个集合的并集
  - ### intersect 求两个集合的交集
  - ### remove 删除其中一个元素
  - ### formArray 将类数组转换为数组
  - ### trim 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
  - ### changeCase 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
  - ### checkPwd 检测密码强度
  - ### insertStr 在字符串中插入新字符串

---

## 前端常用插件、工具类库汇总

### 函数库

[Lodashhttps](github.com/lodash/lodash)

[Underscore](https://underscorejs.org/)

[Ramda](https://github.com/ramda/ramda)

[outils](https://github.com/proYang/outils)

### 动画库

[Animate.cssCSS3 动画库，也是目前最通用的动画库。](https://daneden.github.io/animate.css/)

[Anime.js 一个强大的、轻量级的用来制作动画的 javascript 库](http://animejs.com/)

[Hover.cssCSS hover 悬停效果，可以应用于链接、按钮、图片等等。](https://github.com/IanLunn/)

[Hoverwow.js 滚动展示动画，WOW.js 依赖 animate.css，所以它支持 animate.css 多达 60 多种的动画效果。](https://github.com/matthieua/WOW)

[Magic.csscss3 animation 动画库](https://github.com/miniMAC/magic)

[Waves 点击波纹效果](https://github.com/fians/Waves)

[move.js 一个小型的 JavaScript 库，通过 JS 来控制一系列的 CSS 动画顺序执行，使 CSS3 动画变得非常简单和优雅。](https://github.com/visionmedia/move.js)

### 滚动库

[iscroll - 平滑滚动插件](https://github.com/cubiq/iscroll)

[BetterScrolliscroll 的优化版，使移动端滑动体验更加流畅](https://github.com/ustbhuangyi/better-scroll)

[mescroll 移动端上拉刷新下拉加载](http://www.mescroll.com/api.html)

[jQuery Scrollbox 图片文字滚动插件](http://www.jq22.com/jquery-info1890)

[liMarqueejQuery 无缝滚动插件](http://www.dowebok.com/188.html)

### 轮播图

[Swiper 常用于移动端网站的内容触摸滑动](https://www.swiper.com.cn/)

[iSlider 移动端滑动组件](http://eux.baidu.com/iSlider/demo/index_chinese.html)

[slip.js 移动端跟随手指滑动组件，零依赖。](https://github.com/binnng/slip.js)

[OwlCarousel2](http://owlcarousel2.github.io/OwlCarousel2/)

[slick](http://www.jq22.com/jquery-info406)

[WebSlides](https://github.com/webslides/webslides/)

[jQuery 轮播插件 slider](http://www.jq22.com/jquery-info889)

[滚屏 fullpage](http://www.jq22.com/jquery-info1124)

[弹出框 layer 独立维护的三大组件之一（layDate、layer、layim）](http://layer.layui.com/)

[Bootbox.js](http://bootboxjs.com/)

[dialogBox 基于 jQuery](http://www.jq22.com/jquery-info4822)

[easyDialog](http://www.h-ui.net/easydialog-v2.0/index.html)

[消息通知 Notyf 简单的响应式纯 js 消息通知插件](http://www.htmleaf.com/jQuery/Lightbox-Dialog/201609123990.html)

[PNotify 页面右上角的提示信息（非弹框提示）](https://github.com/sciactive/pnotifyhttps://sciactive.com/pnotify/)

[overhang.js 是一个 JQuery 插件显示即时通知、 确认或给定元素中的提示。](http://www.jq22.com/jquery-info9193)

### 下拉框

[select2](https://select2.org/)

### 级联选择器

[ustbhuangyi/picker 移动端最好用的的筛选器组件、联动筛选](https://github.com/ustbhuangyi/picker)

[jQueryDistpicker 移动端最好用的的筛选器组件、联动筛选](http://www.jq22.com/demo/jQueryDistpicker20160621/)

### 颜色选择器

[Bootstrap Colorpicker 2](https://github.com/farbelous/bootstrap-colorpicker)

### 时间选择器

[layDate](https://www.layui.com/laydate/)

### 时间日期处理

[Moment.js 是一个解析，验证，操作和显示日期和时间的 JavaScript 类库。](http://momentjs.com/https://github.com/moment/moment)

[timeago.js 轻量级的时间转换 Javascript 库](https://github.com/hustcc/timeago.js)

### 表单验证

[validator.js](https://github.com/chriso/validator.js)

[jQuery ValidationjQuery 表单校验](https://github.com/jquery-validation/jquery-validation)

[Validform 一行代码搞定整站的表单验证！- Jquery 表单验证插件](http://validform.rjboy.cn/)

### 分页插件

[pagination](https://github.com/superRaytin/paginationjs)

#### 富文本编辑器

[wangEditor](http://www.wangeditor.com/)

[百度 UEditor](https://ueditor.baidu.com/website/)

[KindEditor](http://kindeditor.net/demo.php)

[MediumEditor](http://yabwe.github.io/medium-editor/)

[Simditor](https://simditor.tower.im/)

[Summernote](https://summernote.org/)

[Quill](https://quilljs.com/)

[Slate](https://github.com/ianstormtaylor/slate)

#### 编辑器

[Editor.md](https://pandao.github.io/editor.md/)

#### 树插件

[zTree](http://www.treejs.cn/v3/main.php#_zTreeInfo)

#### 图片懒加载

[lazyload](https://github.com/tuupola/jquery_lazyload)

#### 瀑布流

[Masonry](https://www.cnblogs.com/cjc917/p/7402026.html)

[Metro 风兼瀑布流布局效果](http://www.lanrenzhijia.com/jquery/1985.html)

#### 相册

[Viewer.js](https://fengyuanchen.github.io/viewerjs/)

#### 导航插件

[okayNav](http://www.dowebok.com/204.html)

#### 视频播放器

[Chimee：组件化 H5 播放器框架](http://chimee.org/)
(https://juejin.im/entry/5a02b480f265da43144020b1)

[flv.js Bilibili 开源纯 JavaScript 编写的 FLV 播放器 Flash 视频（FLV）播放器](https://github.com/Bilibili/flv.js)

[jplayer](http://www.jplayer.cn/)

[html5player](https://juejin.im/post/596f536d51882526337caf15)

[Video.js 开源、免费的 HTML5 和 Flash 视频播放器](https://dogeek.net/)

#### 弹幕播放器

[DanmuPlayer - Html5 弹幕播放器插件](https://github.com/chiruom/DanmuPlayer)

[jquery.danmu.js - jQuery 弹幕插件](https://github.com/chiruom/jquery.danmu.js)

[scroxt - 字幕字体滚动插件](https://github.com/chenjianfang/scroxt)

#### 复制粘贴插件

[clipboard.js](https://github.com/zenorocha/clipboard.js/)

[ZeroClipboard](https://github.com/zeroclipboard/zeroclipboard)

#### 二维码插件

[jquery.qrcode.js](https://github.com/jeromeetienne/jquery-qrcode)

#### 拖拽

[Draggabilly](http://www.jq22.com/jquery-info293)

[dragula](https://www.toutiao.com/a6491847196890104334)

#### 文件上传

[WebUploader HTML5 & FLASH 文件上传](https://github.com/fex-team/webuploader/)

#### 代码高亮

[hightlightokayNav](https://highlightjs.org/)

#### 前端国际化

[i18next](https://github.com/i18next/i18next)

[vue-i18n](https://github.com/kazupon/vue-i18n)

[前端系列——jquery.i18n.properties 前端国际化解决方案“填坑日记”](http://www.cnblogs.com/landeanfen/p/7581609.html)

[基于 jQuery.i18n.properties 实现前端页面的资源国际化](https://blog.csdn.net/aixiaoyang168/article/details/49336709)

#### 地图

[百度地图](http://lbsyun.baidu.com/)

[谷歌地图](http://www.runoob.com/googleapi/google-maps-api-key.html)

[高德地图](https://lbs.amap.com/)

[腾讯地图](https://lbs.qq.com/)

#### 网页即时通讯

[LayIM](http://layim.layui.com/)

[闲聊么](https://www.xianliao.me/)

#### PDF 阅读器

[pdf.js](https://github.com/mozilla/pdf.js)

#### 数据 Mock

[Easy Mock](https://github.com/easy-mock/easy-mock)

[Mockjs 生成任意随机数据，拦截 Ajax 请求](http://mockjs.com/)

[json-server + fakerjs](https://github.com/typicode/json-server)

#### 评论

[Gitalk](https://github.com/gitalk/gitalk)

[gitment](https://github.com/imsun/gitment)

#### 其他

[IE 浏览器版本过低提示插件 IEalert.js](http://www.jqueryfuns.com/resource/455)

[lyric-parser - QQ 音乐歌词解析](https://github.com/ustbhuangyi/lyric-parser)

[holder.js - 图片占位符插件](https://github.com/imsky/holder)

[jQuery 放大镜插件 jqzoom.js](http://www.jq22.com/jquery-info648)

[Zooming – JavaScript 图片缩放库](http://www.dowebok.com/223.html)
