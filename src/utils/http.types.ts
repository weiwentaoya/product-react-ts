import { AxiosRequestConfig } from 'axios'
import { Writer, IConversionOptions, Message } from 'protobufjs'
export type keysFunction<T> = {
  [p in keyof T]: <M = T[p]>(data?: any, config?: any | AxiosRequestConfig) => Promise<M>
}
export type stringObject = {
  [x: string]: string
}
export interface defaultResponse extends AjaxResponse {
  [x: string]: any
}

export type encode = (obj: any) => Writer
export type decode = (obj: any) => any
export type create = (obj: any) => any
export type toObject = (obj: any, options?: IConversionOptions) => { [k: string]: any }
export type ProtobufType = {
  toObject: toObject
  create: create
  encode: encode
  decode: decode
}
// 获取ProtobufType中的encode参数
export type ReturnEncodeParams<T> = T extends { encode: (obj: infer P) => Writer } ? P : never
// 获取ProtobufType中的decode返回结果
export type ReturnDecodeValue<T> = T extends { decode: (obj: any) => infer P } ? P : never
// pb文件请求
interface AxiosRequestConfigInterface extends AxiosRequestConfig {
  isNoNeedToken?: boolean
}
export type ArraybufferRequest<Q, P> = (data?: Q, config?: AxiosRequestConfigInterface) => Promise<P>
// 将所有可选属性转换为不可选属性
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends AnyObject ? DeepRequired<T[P]> : T[P]
}
