import request from '@/utils/request'
export const Login = data => {
  return request('/login', 'post', data)
}
export const Info = () => {
  return request('/info', 'get')
} 