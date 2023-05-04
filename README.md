# lhh-utils

## 安装

```js
npm i lhh-utils
```

## 使用文档

#### 1. worker-libgif

将gif图片转为可供canvas绘画的数组（支持worker）

- 使用

```js
import { loadGifToCanvas, SourceImgObj } from "lhh-utils";

function test() {
  /** 
   * 将gif图片转为可供canvas绘画的数组
   * @param url: 图片地址
   * @param isWorker: 是否是worker环境下 默认为false
   */
  loadGifToCanvas(url, isWorker).then((list) => {
    console.log(list)
  })
}
```


