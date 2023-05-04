export type SourceImgObj = {
  delay: number
  img: OffscreenCanvas | CanvasImageSource
}

export default function loadGifToCanvas(url: string, isWorker: boolean): Promise<SourceImgObj[]>;

/** 
 * 将gif图片转为可供canvas绘画的数组
 * @param url: 图片地址
 * @param isWorker: 是否是worker环境下 默认为false
 */
export function loadGifToCanvas(url: string, isWorker: boolean): Promise<SourceImgObj[]>;