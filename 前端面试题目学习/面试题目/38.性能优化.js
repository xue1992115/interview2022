// 1、DNS预解析
/* <link rel="dns-prefetch" href="//blog.poetries.top"></link>; */
// 2、缓存
// 强缓存和协商缓存
// 强缓存：Expires和Cache-Control，强缓存表示在缓存期间不需要请求
// 协商缓存“ 如果资源已经过期了，那就需要通过协商缓存来处理，Last-Modified， If-Modified-Since/ETag If-None-Match 后者的优先级高于前者
// 3、使用HTTP2.0
// 在http1.1时代，每个请求都需要连接和断开链接，消耗了好几个 RTT 时间；
// 并且由于TCP慢启动的原因，加载体积大的文件需要更多的时间
// http2.0引入了多路复用，能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度。并且还支持 Header 压缩，进一步的减少了请求的数据大小
// 4、预加载
/* <link rel="preload" href="http://example.com"></link> */
// 预加载：降低首屏加载时间，将一些不重要的文件延迟加载，缺点：兼容性不好
// 5、预渲染
// <link rel="prerender" href="http://poetries.com">
// 提升页面的加载速度
// 6、延迟加载
// 延迟js资源的加载
// <script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
// <script async src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
// 7、懒加载和懒执行
// 懒执行就是将一个计算逻辑延迟，该技术由利于优化首屏
// 懒加载就是等资源到可视化区域的时候在加载，例如图片和懒加载和视频的懒加
// 8、文件优化
// （1）图片优化
// * 尽量css去替代图片实现
// * 小图片转成base64
// * 将图片合成雪碧图
// * 选择正确的图片
//   * webp的图片格式，如果能支持的浏览器尽量选择正确的格式，webp有更好的图片压缩算法，图片体积更小
//   * 小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替
//   * 照片使用 JPEG
// (2)其他文件优化
// * css文件放在head中
// * 服务端开启文件压缩功能
// * defer/async延迟js资源的记载
// * 可以考虑webworker另开一个线程执行脚本而不影响渲染
// （3）CDN
// * 静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie
// 9、其他的优化
// webpack
// (1)提升开发体验
// source map让开发或上线时代码报错能够更加准确的错误提示
//（2）提升打包构建速度
// HMR热更新让开发时只重新编译打包更新变化了的代码，不变化的代码使用缓存，从而使更新速度更快
// oneOf让资源文件一旦被某个loader处理了，就不会继续遍历了，打包速度更快了
// include/exclude排除或者只检测某些文件，处理的文件更少，速度更快
// cache对eslint和bable的处理结果进行缓存，让第二次的打包速度更快
// Thread多进行处理eslint和babel任务，速度更快，注意启动进程通信也是有开销的，所以要在代码特别多的情况下使用
// (3)较少代码的体积
// * Tree Shaking 剔除无用的代码
// @babel/plugin-transform-runtime插件对babel进行处理，让辅助嗲代码从中引入，而不是每个文件都引入
// image Minimizer对项目中的图片进行压缩
// (4)优化代码运行性能
// code split 代码拆分 + 按需加载代码
// prefetch/preload
// network cache
// core-js
// pwa代码可以离线访问
