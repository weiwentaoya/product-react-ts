import instance from './axios'
import protobuf from 'protobufjs'
import ResultProto from '../proto/result.pb'
import { type ArraybufferRequest, type ReturnDecodeValue, type ProtobufType, type ReturnEncodeParams } from './http.types'
function isArrayBuffer (obj: any): obj is ArrayBuffer {
  return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
}

export default function request<Q extends ProtobufType, P extends ProtobufType> (
  url: string,
  req: Q,
  res?: P
): ArraybufferRequest<ReturnEncodeParams<Q>, Required<ReturnDecodeValue<P>>> {
  return async (data, config = {}) => {
    const { method = 'post' } = config
    return await instance({
      url,
      transformRequest () {
        console.log('%c ↑ API Request: ' + url,
        'background: #93FFD8; padding: 4px; color: #146356; border-radius: 4px; margin-bottom: 10px; border: 4px solid #CFFFDC','\n', data,'\n')
        if (data) {
          data = req.create(data)
          return req.encode(data).finish()
        }
      },
      ...config,
      method,
      transformResponse (data) {
        const newBuffer = protobuf.util.newBuffer(data)
        if (data == null || !isArrayBuffer(data)) {
          return data
        }
        data = ResultProto.Result?.decode(newBuffer)
        if (data.data) {
          data.data.value = res?.decode(data.data.value)
          data.data = res?.toObject(data.data.value, {
            enums: String, // enums as string names
            longs: String, // longs as strings (requires long.js)
            bytes: String, // bytes as base64 encoded strings
            defaults: true, // includes default values
            arrays: true, // populates empty arrays (repeated fields) even if defaults=false
            objects: true, // populates empty objects (map fields) even if defaults=false
            oneofs: true // includes virtual oneof fields set to the present field's name
          })
        }
        console.log(
        '%c ↓ API Response: ' + url,
        'background: #CDDEFF; padding: 4px; color: #1C6DD0; border-radius: 4px; margin-bottom: 10px; border: 4px solid #A2D2FF',
        '\n', data,'\n')
        return data
      },
    })
  }
}
