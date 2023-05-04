## lhh-utils

## utils

### worker-libgif

将gif图片转为可供canvas绘画的数组（支持worker）

- 使用

```js
/** 
 * 将gif图片转为可供canvas绘画的数组
 * @param url: 图片地址
 * @param isWorker: 是否是worker环境下 默认为false
 */
loadGifToCanvas(url, isWorker).then((list) => {
  console.log(list)
})
```


