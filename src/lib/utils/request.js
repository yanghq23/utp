import axios from 'axios'
let cancel;
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
  }
const axiosConfig = {
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 50000,
  withCredentials: true
};
//axios.defaults.baseURL = baseApiUrl
// create an axios instance
const request = axios.create(axiosConfig)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function doGet(url, params = {}, pagesize, pageindex = 1) {
  var data = deepCopy(params)
  if (pagesize) {
    data = assignObj(params, {
      pageSize: pagesize,
      currentIndex: pageindex
    })
  }
  return new Promise((resolve, reject) => {
    request
      .get(url, {
        params: data
      })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function doPost(url, data = {}, pagesize, pageindex = 1) {
  if (pagesize) {
    if (url.indexOf('?') > 0) {
      url += '&'
    } else {
      url += '?'
    }
    url += 'pageSize=' + pagesize + '&currentIndex=' + pageindex
  }
  return new Promise((resolve, reject) => {
    request.post(url, data).then(
      response => {
        resolve(response)
      },
      err => {
        reject(err)
      }
    )
  })
}

export function doDelete(url) {
  return new Promise((resolve, reject) => {
    request.delete(url).then(
      response => {
        resolve(response)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 取消请求
 */
export function doCancel(){
  if(typeof cancel==='function'){
    cancel({status:'-1',message:'取消的请求'})
  }
}

export default request
