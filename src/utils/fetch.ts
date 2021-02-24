import qs from 'qs'
console.log('当前环境变量：' + process.env.NODE_ENV)
console.log('当前环境路径：' + process.env.VUE_APP_URL)
class Fetch {
  constructor (config = {}) {
    this.config = {
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {},
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
      timeOut: 10000,
      BASE_URL: process.env.VUE_APP_URL,
      ...config
    }
  }

  send ({ baseUrl, url, query, params, method = 'GET', headers }) {
    const { BASE_URL } = this.config
    url = JSON.stringify(query) == '{}' ? `${url}` : `${url}?${qs.stringify(query)}`
    let fullUrl = baseUrl ? `${baseUrl}/${url}` : `${BASE_URL}/${url}`
    const ajax = new Promise((resolve) => {
      fetch(fullUrl, {
        ...this.config,
        body: params,
        headers,
        method
      }).then(response => {
        return response.json()
      }).then(data => {
        resolve(data)
      })
    })
    const time = new Promise((resolve, reject) => {
      console.log(this.config.timeOut)
      setTimeout(() => {
        reject(new Error('time out'))
      }, this.config.timeOut)
    })
    return Promise.race([ajax, time])
  }
}
export default Fetch
