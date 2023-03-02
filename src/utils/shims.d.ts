/* eslint-disable */
declare interface AnyObject {
  [x: string]: any
}
declare interface AjaxResponse {
  code: number
  data: any
}
declare interface AxiosResponseData extends AjaxResponse, AnyObject {}
declare interface PageObj {
  pageSize: number
  currentPage: number
}

declare interface PageParams {
  pageSize: number
  pageNum: number
}
