import {Toast} from 'antd-mobile'

let loadingCount = 0

export const showLoading = () => {
  loadingCount++
  Toast.show({
    content: '加载中…',
    icon: 'loading'
  })
}

export const hideLoading = () => {
  loadingCount--
  if (loadingCount <= 0) {
    Toast.clear()
  }
}
