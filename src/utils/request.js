import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8080/'
const instance = axios.create({
  // baseURL: 'http://localhost:8080/'
})
export default (url, method, data) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
