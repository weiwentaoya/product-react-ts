import axios from 'axios'
import { API } from '../config'
// import qs from 'qs'
const instance = axios.create({
  baseURL: API,
  timeout: 3000,
  headers: { 
    'Content-Type': 'application/x-protobuf',
    'X-Requested-With': 'XMLHttpRequest',
    'app-env': 'product',
    'Accept': 'application/x-protobuf',
  },
  responseType: 'arraybuffer'
})


// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    if (config.method?.toLocaleLowerCase() === 'get') {
    }
    return config
  }, async function (error) {
    // 对请求错误做些什么
    return await Promise.reject(error)
  })

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  
  if (response.data.code === 1) {
    return response.data
    
  }else{
    return response
  }
}, async function (error) {
  console.log(123);
  
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return await Promise.reject(error)
})

export default instance
