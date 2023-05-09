export type KeepIntervalSetParams = {
  /** 是否仅仅是倒计时 */
  isTimeOut?: boolean
  /** 是否覆盖之前的内容 */
  isCover?: boolean
}

export type TimerMap = {
  // 第一层的setTimeout
  timeout: NodeJS.Timeout | null
  // 第二层的setInterval
  interval: NodeJS.Timeout | null
  // 当前时间
  cur: number
  // 暂停时间
  end: number
  // 传入的执行函数
  fn: () => void
  // 固定的时间间隔
  intervalTime: number
  // 用于setTimeout的剩余时间间隔
  remainTime: number
  /** 是否只是倒计时 */
  isTimeOut: boolean
}