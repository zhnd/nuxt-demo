# nuxt-demo

## Build Setup

```bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

访问：http://localhost:3000（admin / a123456）、http://localhost:3000/s/YdnahSombc9oqyr3xcbdcE

## 介绍
f12微信公众平台写的一个基于 `Nuxt.js` 的服务端渲染demo，主要使用了 `nuxt` + `koa` + `axios` + `vuex` + `element-ui` + `mockjs`。

## 项目结构

```
├─assets                   //
│
├─components               //
│
├─layouts                  //
│
├─middleware               //
│ ├─auth.js
│
├─pages                    //
│
├─plugins                  //
│ ├─api.js
│ ├─axios.js
│ ├─element-ui.js          //
│ ├─mock.js                //
│
├─server                   //
│ ├─index.js
│
├─server-middleware        //
│
├─static                   //
│
├─store                    //
│
├─nuxt.config.js           //
```

## 注意

mockjs和jsencrypt在nuxt下使用各有一个报错，所以需要改动一下源码：

node_modules/mockjs/dist/mock.js
```
8305    }
8306
8307    MockXMLHttpRequest.prototype.upload = createNativeXMLHttpRequest().upload
8308
8309    // 如果未找到匹配的数据模板，则采用原生 XHR 发送请求。
```

node_modules/jsencrypt/lib/lib/jsbn/rng.js
```
10    var t = void 0;
11    var window = {};
12    if (window.crypto && window.crypto.getRandomValues) {
```

## License

[MIT](LICENSE)
