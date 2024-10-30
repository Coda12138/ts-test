const BASE_URL = 'http://codercba.com:9002'
const TIME_OUT = 10000

// 1.自动判断开发、生产环境
if (process.env.NODE_ENV === 'development') {
  console.log('开发环境')
} else {
  console.log('生产环境')
}

// 2.通过自定义变量来区分环境
// console.log(process.env.REACT_APP_BASE_URL)

export { BASE_URL, TIME_OUT }
