
import Activity from '../proto/activity.pb'
import request from '../utils/request'
// 获取顾客详细信息
export const bannerPositionList = request(
  'activity/bannerPosition/list',
  Activity.App.Acitivity.BannerPosition.Request,
  Activity.App.Acitivity.BannerPosition.Response
)
