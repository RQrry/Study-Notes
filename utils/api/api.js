import axios from './http'
import qs from 'qs' // qs模块

export default {
  // 登录页
  login (params) {
    return axios.post('/api/login', qs.stringify(params))
  },
  logout () {
    // 退出登录，取消全局注册钩子
    axios.interceptors.request.eject(axios);
  },
  // 列表页
  lists (params) {
    return axios.get('/api/list', {
      params: params
    })
  }
}

// 使用接口
// main.js中
import api from './api/api'
Vue.prototype.$api = api

// 页面中使用
export default {
  created () {
    this.$api.login(data).then(res => {
      // 操作
    }).catch(res => {
      console.log(res)
    })
  }
}