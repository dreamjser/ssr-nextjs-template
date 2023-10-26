import {
  getGlobalAxios,
  getAxios,
  AllType,
  OptionsGlobalType,
} from '@dreamjser/request-axios'
import {toast} from '../interface'
import { showLoading, hideLoading } from './loading'

const globalOpts: OptionsGlobalType = {
  timeout: 30000,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
}
const axiosInstance = getGlobalAxios(globalOpts)

const requestHook = (config: AllType) => {
  !config.slient && showLoading()
}

const responseHook = (reslove: any, reject: any, res: any) => {
  const { config, data } = res
  const { errorCode, errorMsg } = data

  !config.slint && setTimeout(hideLoading, 100)

  if (errorCode !== '0') {
    if (config.publicError) {
      toast(errorMsg)
    } else {
      reject({
        errorCode,
        errorMsg,
      })
    }
    return
  }

  reslove(data.data)
}

const request = (opts: AllType) => {
  opts.requestHook = requestHook
  opts.responseHook = responseHook
  return getAxios(opts, axiosInstance).catch(() => {
    toast('网络请求失败')
  })
}

export default request
