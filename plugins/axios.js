import { Message } from 'element-ui'
import { mock } from '@/plugins/mock'

export default ({ $axios, error }) => {
  $axios.defaults.timeout = 10000

  $axios.onRequest(config => {
    const token = ''
    if (token) {
      config.headers['token'] = token
    }
  })

  $axios.onResponse(response => {
    const data = response.data
    if (process.client) {
      const { errcode, errmsg } = data
      if (errcode !== 0) {
        Message({
          message: errmsg,
          type: 'error'
        })
      }
    }
    return data
  })

  $axios.onResponseError(err => {
    if (process.server) {
      // error({ statusCode: 500 })
      const res = mock(err.config)
      if (res) {
        return Promise.resolve(res)
      } else {
        error({ statusCode: 500 })
      }
    }
  })
}
